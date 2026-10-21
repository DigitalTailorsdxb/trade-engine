import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { installSeoRoutes, pageHtml, type PageRenderer } from "./page-response";

export async function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const renderer = await import(
    pathToFileURL(path.resolve(__dirname, "ssr", "entry-server.js")).href
  ) as PageRenderer;
  const template = await fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8");
  installSeoRoutes(app, async () => renderer);
  app.use(express.static(distPath, { index: false }));

  app.get("/{*path}", (req, res, next) => {
    try {
      const page = renderer.render(req.originalUrl);
      res.status(page.status).type("html").send(pageHtml(template, page));
    } catch (error) {
      next(error);
    }
  });
}

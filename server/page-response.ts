import type { Express } from "express";

export interface RenderedPage {
  html: string;
  head: string;
  status: number;
}

export interface PageRenderer {
  render: (url: string) => RenderedPage;
  getSitemapPaths: () => string[];
}

const SITE_ORIGIN = "https://trade-engine.co.uk";

export function pageHtml(template: string, page: RenderedPage): string {
  // Route-specific Helmet tags must replace the fallback tags, not duplicate them.
  return template
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name=["'](?:title|description|keywords|robots|twitter:[^"']+)["']|property=["']og:[^"']+["'])[^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<noscript>[\s\S]*?<\/noscript>/gi, "")
    .replace("</head>", `${page.head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);
}

export function installSeoRoutes(
  app: Express,
  loadRenderer: () => Promise<PageRenderer>,
) {
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const path = req.path;
    const cleanPath = path === "/" ? path : path.replace(/\/+$/, "");
    const aliases: Record<string, string> = {
      "/index.html": "/",
      "/plans/quote-and-design": "/plans/premium-website",
      "/plans/full-system": "/plans/website-and-seo",
      "/plans/premium-package": "/plans/complete-package",
      "/landscaping": "/landscaping-websites",
    };
    const legacyLocation = cleanPath.match(/^\/landscaping-estimating-software-([^/]+)$/);
    const target = aliases[cleanPath] ??
      (legacyLocation ? `/landscaping-websites/${legacyLocation[1]}` : cleanPath);
    if (target !== path) {
      const search = req.originalUrl.includes("?")
        ? req.originalUrl.slice(req.originalUrl.indexOf("?"))
        : "";
      return res.redirect(301, target + search);
    }
    next();
  });

  app.get("/sitemap.xml", async (_req, res, next) => {
    try {
      const renderer = await loadRenderer();
      const paths = renderer.getSitemapPaths();
      const urls = paths.map((path) =>
        `  <url><loc>${SITE_ORIGIN}${path}</loc></url>`,
      ).join("\n");
      res.type("application/xml").send(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
      );
    } catch (error) {
      next(error);
    }
  });
}

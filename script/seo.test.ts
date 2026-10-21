import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { render, getSitemapPaths } from "../dist/ssr/entry-server.js";
import { pageHtml } from "../server/page-response";

const origin = "https://trade-engine.co.uk";
const paths: string[] = getSitemapPaths();

test("all sitemap pages render unique, indexable HTML with correct metadata and links", async () => {
  const template = await readFile("dist/public/index.html", "utf8");
  const titles = new Set<string>();
  const allowed = new Set([...paths, "/terms", "/privacy"]);
  for (const path of paths) {
    const rendered = render(path);
    assert.equal(rendered.status, 200, path);
    const html = pageHtml(template, rendered);
    const head = html.split("</head>")[0];
    assert.equal((head.match(/<title\b/g) ?? []).length, 1, `${path}: one title`);
    assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1, `${path}: one canonical`);
    assert.ok(head.includes(`href="${origin}${path}"`), `${path}: self-referencing canonical`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one rendered H1`);
    assert.ok(/name="description"[^>]*content="[^"]+"/.test(head), `${path}: description`);
    assert.ok(!head.includes("noindex"), `${path}: indexable`);
    assert.ok(/property="og:image"[^>]*content="https:\/\//.test(head), `${path}: absolute social image`);
    assert.ok(html.includes('href="tel:+447877934782"'), `${path}: phone link`);
    assert.ok(html.includes('href="mailto:hello@trade-engine.co.uk"'), `${path}: email link`);
    const title = head.match(/<title[^>]*>(.*?)<\/title>/)![1];
    assert.ok(!titles.has(title), `${path}: unique title`);
    titles.add(title);
    for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `${path}: valid structured data`);
    }
    for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
      const target = new URL(match[1].replaceAll("&amp;", "&"), origin).pathname;
      assert.ok(allowed.has(target), `${path}: valid internal link ${target}`);
    }
  }
  assert.equal(titles.size, paths.length);
});

test("robots exclusions and landscaping-only eligibility are consistent", () => {
  for (const path of ["/privacy", "/terms", "/not-a-real-page", "/blog/missing", "/landscaping-websites/missing"]) {
    const result = render(path);
    assert.match(result.head, /noindex/);
    assert.equal(result.status, ["/privacy", "/terms"].includes(path) ? 200 : 404);
  }
  for (const path of ["/", "/pricing", "/features", "/faq", "/plans/complete-package", "/landscaping-websites"]) {
    const result = render(path);
    assert.match(result.html, /(?:exclusively (?:to|for) landscaping companies|landscaping companies only|Landscaping companies only)/i, path);
    assert.ok(result.html.includes("£300"), path);
  }
  assert.match(render("/").html, /Trade websites/);
  assert.match(render("/landscaping-websites").html, /Landscaping websites/);
});

test("production serves SSR pages, canonical redirects, robots and the live sitemap", { timeout: 45000 }, async () => {
  const port = 5517;
  const base = `http://127.0.0.1:${port}`;
  const child = spawn(process.execPath, ["dist/index.cjs"], {
    env: { ...process.env, NODE_ENV: "production", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let logs = "";
  child.stdout.on("data", (data) => { logs += data; });
  child.stderr.on("data", (data) => { logs += data; });
  try {
    let ready = false;
    for (let attempt = 0; attempt < 80; attempt++) {
      if (child.exitCode !== null) throw new Error(`Production server exited: ${logs}`);
      try {
        const response = await fetch(`${base}/`, { signal: AbortSignal.timeout(1000) });
        if (response.ok) { ready = true; break; }
      } catch { /* Wait for this test's short-lived server to bind. */ }
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    assert.ok(ready, logs);
    for (const [path, target] of [
      ["/landscaping-estimating-software-london", "/landscaping-websites/london"],
      ["/plans/full-system", "/plans/website-and-seo"],
      ["/plans/quote-and-design", "/plans/premium-website"],
      ["/plans/premium-package", "/plans/complete-package"],
      ["/landscaping", "/landscaping-websites"],
      ["/pricing/?ref=test", "/pricing?ref=test"],
      ["/index.html", "/"],
    ]) {
      const response = await fetch(`${base}${path}`, { redirect: "manual" });
      assert.equal(response.status, 301, path);
      assert.equal(response.headers.get("location"), target, path);
    }
    const sitemap = await fetch(`${base}/sitemap.xml`);
    assert.match(sitemap.headers.get("content-type")!, /xml/);
    const xml = await sitemap.text();
    assert.equal((xml.match(/<loc>/g) ?? []).length, paths.length);
    assert.ok(!/estimating-software|\/terms|\/privacy/.test(xml));
    for (const path of paths) assert.ok(xml.includes(`<loc>${origin}${path}</loc>`));
    const robots = await fetch(`${base}/robots.txt`);
    assert.match(await robots.text(), /Sitemap: https:\/\/trade-engine.co.uk\/sitemap.xml/);
    const landscaping = await fetch(`${base}/landscaping-websites`);
    assert.equal(landscaping.status, 200);
    assert.match(await landscaping.text(), /<h1[^>]*>Landscaping websites/);
    assert.equal((await fetch(`${base}/not-a-real-page`)).status, 404);
    for (const image of ["/images/trade-websites-social.jpg", "/images/trade-engine-logo.webp"]) {
      assert.equal((await fetch(`${base}${image}`)).status, 200, image);
    }
  } finally {
    child.kill("SIGTERM");
    await new Promise<void>((resolve) => {
      if (child.exitCode !== null) return resolve();
      child.once("exit", () => resolve());
    });
  }
});

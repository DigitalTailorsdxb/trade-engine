import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";
import { locations } from "./lib/location-data";
import { blogPosts } from "./lib/blog-data";
import { plans } from "./lib/pricing-data";

const publicPaths = [
  "/", "/features", "/pricing", "/landscaping-websites",
  "/faq", "/contact", "/blog", "/locations",
];

export function getSitemapPaths(): string[] {
  return [
    ...publicPaths,
    ...plans.map((plan) => plan.slug),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...locations.map((location) => `/landscaping-websites/${location.slug}`),
  ];
}

export function render(url: string) {
  const path = new URL(url, "https://trade-engine.co.uk").pathname;
  const isKnownPage = getSitemapPaths().includes(path) ||
    path === "/privacy" || path === "/terms";
  const context = {} as { helmet: HelmetServerState };
  const html = renderToString(
    <Router ssrPath={url}>
      <App helmetContext={context} />
    </Router>,
  );
  const { helmet } = context;
  let head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join("\n");
  // Unknown URLs must never be indexed as successful pages.
  if (!isKnownPage) {
    head = head.replace(/<meta\b[^>]*name="robots"[^>]*>/gi, "") +
      '<meta name="robots" content="noindex, follow" />';
  }
  return { html, head, status: isKnownPage ? 200 : 404 };
}

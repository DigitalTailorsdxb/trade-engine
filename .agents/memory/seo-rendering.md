---
name: SEO rendering approach
description: Why the site uses server-rendered React rather than a framework migration or crawler-specific pages.
---

Keep the existing React/Express stack when improving SEO, and serve the same public page content to visitors and crawlers. Do not replace real HTML with bot-only snapshots.

**Why:** The SEO update needed crawlable route-specific content without replacing the established site, enquiry flow or demo integrations.

**How to apply:** New public pages should render useful content without JavaScript and hydrate into the same interactive page. Check canonical URLs, HTTP status codes and sitemap membership together when adding or renaming routes.

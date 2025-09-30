# Thinkbotics SEO Drop‑In Pack (No UI change)
Add these files to the root of your site. They improve discoverability, crawlability, and performance without changing visuals.

## Files
- `robots.txt` — allows crawling + points to `sitemap.xml`.
- `sitemap.xml` — list all public pages; edit URLs to match your structure.
- `vercel.json` — security headers, caching, and redirects (www → root, index.html → /).
- `head-snippet.html` — paste inside `<head>` on each page (edit titles/descriptions per page).
- `schema-product-or-service.html` — optional JSON-LD template for service/product pages.

## How to use
1. Put `robots.txt`, `sitemap.xml`, `vercel.json` in your project root (same folder as `index.html`).
2. Open each HTML page and paste the contents of `head-snippet.html` inside the `<head>`.
   - Change `<title>` & `<meta description>` to be unique for each page.
   - Update `og:image` path to your real Open Graph image.
   - Replace Instagram handle and contact email.
3. For product/service pages, copy `schema-product-or-service.html` into the `<head>` and adjust fields.
4. Deploy to Vercel. In Vercel → Project → Settings → Domains, set `thinkbotics.net` as Primary.
5. After deploy, submit `https://thinkbotics.net/sitemap.xml` in Google Search Console.

## Notes
- **No UI change**: All edits are head/meta/headers only.
- You can keep your current filenames and structure.
- If you later add `/blog/` or more pages, remember to update `sitemap.xml`.

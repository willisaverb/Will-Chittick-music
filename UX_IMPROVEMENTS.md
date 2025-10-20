# UX and Discoverability Improvements

Here are some suggestions to improve the user experience (UX) and discoverability of the website:

## 1. Add a Footer

A footer on every page would provide consistent access to important links and information.

**Recommended Footer Content:**

*   **Social Media Links:** Icons linking to Facebook, Instagram, Bandcamp, etc.
*   **Copyright Information:** `&copy; 2024 Will Chittick`
*   **Sitemap Link:** A link to the sitemap for easy navigation and SEO.

## 2. Create a Sitemap

A sitemap will help search engines understand the structure of the website, improving its search engine optimization (SEO).

**Example `sitemap.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://willisaverb.com/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
  <url>
    <loc>https://willisaverb.com/about/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
  <url>
    <loc>https://willisaverb.com/shows/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
  <url>
    <loc>https://willisaverb.com/music/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
  <url>
    <loc>https://willisaverb.com/contact/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
</urlset>
```

## 3. Improve SEO

*   **Meta Descriptions:** Add unique and descriptive meta descriptions to each page to improve how they appear in search results.
*   **Image Alt Text:** Ensure all images have descriptive alt text for accessibility and SEO.

## 4. Add a Favicon

A favicon will make the website more recognizable in browser tabs.

**To implement these changes:**

*   I can add the footer to each HTML page.
*   I can create and add the `sitemap.xml` file to the root directory.
*   I can update the meta descriptions and alt text on each page.
*   I can add a link to a favicon in the `<head>` of each page.

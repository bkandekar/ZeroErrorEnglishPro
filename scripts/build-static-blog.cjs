/**
 * build-static-blog.js
 * ----------------------------------------------------------------
 * Generates a real, crawlable static HTML page for every article
 * in ARTICLES (script.js) at:  blog/<slug>/index.html
 *
 * Why: the main site is a hash-routed SPA (#post/<slug>), and
 * Google does not reliably index individual #fragment URLs as
 * separate pages. These static pages give each post a real path
 * (/blog/<slug>/) with full content + proper meta tags, so it can
 * be indexed and ranked on its own.
 *
 * Run this EVERY TIME you add or edit an article in script.js:
 *   node scripts/build-static-blog.js
 *
 * It also regenerates sitemap.xml at the repo root with the real
 * blog URLs (plus the homepage and #blog/#books hash entries).
 * ----------------------------------------------------------------
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://bkandekar.github.io/ZeroErrorEnglishPro";

// ---- 1. Load ARTICLES + BOOKS out of script.js ----
const scriptSrc = fs.readFileSync(path.join(ROOT, "script.js"), "utf8");

function extractArray(varName, src) {
  const startMarker = `const ${varName} = [`;
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`Could not find ${varName} in script.js`);
  const arrStart = startIdx + startMarker.length - 1; // position of "["
  let depth = 0;
  let i = arrStart;
  for (; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) { i++; break; }
    }
  }
  const arrText = src.slice(arrStart, i);
  return new Function(`return ${arrText};`)();
}

const ARTICLES = extractArray("ARTICLES", scriptSrc);
const BOOKS = extractArray("BOOKS", scriptSrc);

console.log(`Loaded ${ARTICLES.length} articles and ${BOOKS.length} books from script.js`);

// ---- 2. Load the site's own CSS variables aren't needed here —
//         we just link to the real stylesheet so styling matches ----

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function renderPage(article) {
  const companionBook = BOOKS.find((b) => b.id === article.bookId);
  const canonical = `${SITE_URL}/blog/${article.slug}/`;

  const companionHtml = companionBook
    ? `
        <div style="padding: 28px; border-radius: var(--radius-xl); background: linear-gradient(135deg, #0F1B33, #16264A); color: #FFFFFF; border: 2px solid var(--color-accent); box-shadow: var(--shadow-lg); margin-top: 40px;">
          <span class="badge badge-accent" style="margin-bottom: 12px;">Recommended Companion eBook</span>
          <h3 style="font-size: 20px; color: #FFFFFF; margin-bottom: 8px;">${companionBook.title}</h3>
          <p style="font-size: 13px; color: #CBD5E1; margin-bottom: 16px; line-height: 1.6;">${companionBook.transformation || ""}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <a href="${companionBook.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent">Buy on Amazon KDP</a>
            <a href="${SITE_URL}/#book/${companionBook.slug}" class="btn btn-secondary" style="background: rgba(255,255,255,0.1); color: #FFFFFF; border-color: rgba(255,255,255,0.2);">Explore Book Overview</a>
          </div>
        </div>`
    : "";

  return `<!doctype html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${article.title} | ZeroErrorEnglishPro</title>
    <meta name="description" content="${escapeAttr(article.description)}" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:title" content="${escapeAttr(article.title)}" />
    <meta property="og:description" content="${escapeAttr(article.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(article.title)}" />
    <meta name="twitter:description" content="${escapeAttr(article.description)}" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="${SITE_URL}/style.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <div class="nav-container">
          <a href="${SITE_URL}/" class="brand-logo">
            <div class="logo-badge">ZE</div>
            <div>
              <div class="brand-text"><span>ZeroError<span class="brand-highlight">English</span></span><span class="brand-pro-tag">Pro</span></div>
              <div class="brand-subtitle">Competitive Exam Grammar Series</div>
            </div>
          </a>
        </div>
      </div>
    </header>

    <article class="container section" style="max-width: 860px;">
      <div style="margin-bottom: 24px;">
        <a href="${SITE_URL}/#blog" style="font-size: 13px; color: var(--color-primary); font-weight: 700;">&larr; Back to all articles</a>
      </div>

      <div style="margin-bottom: 20px;">
        <span class="badge badge-primary" style="margin-right: 8px;">${article.category}</span>
        <span class="badge badge-accent">${article.readingTime}</span>
      </div>

      <h1 style="font-size: clamp(28px, 4vw, 42px); margin-bottom: 20px;">${article.title}</h1>
      <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: 28px; line-height: 1.65;">
        ${article.description}
      </p>

      <div style="padding: 16px 20px; border-radius: var(--radius-lg); background-color: var(--color-primary-subtle); border: 1px solid var(--color-primary-border); margin-bottom: 36px;">
        <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--color-primary); margin-bottom: 4px;">Core Governing Rule Formula:</div>
        <div style="font-family: monospace; font-size: 14px; font-weight: 700; color: var(--color-primary);">${article.formula}</div>
      </div>

      <div style="font-size: 15px; line-height: 1.75; color: var(--text-primary); margin-bottom: 48px;">
        ${article.body}
      </div>

      ${companionHtml}
    </article>

    <footer class="container section" style="text-align:center; font-size: 13px; color: var(--text-secondary);">
      <a href="${SITE_URL}/">ZeroErrorEnglishPro</a> — English Grammar Made Exam-Ready
    </footer>
  </body>
</html>
`;
}

// ---- 3. Write blog/<slug>/index.html for every article ----
const blogDir = path.join(ROOT, "blog");
fs.mkdirSync(blogDir, { recursive: true });

for (const article of ARTICLES) {
  const dir = path.join(blogDir, article.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(article), "utf8");
  console.log("Generated:", `blog/${article.slug}/index.html`);
}

// ---- 4. Regenerate sitemap.xml at repo root ----
const urls = [
  { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${SITE_URL}/#blog`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE_URL}/#books`, priority: "0.8", changefreq: "monthly" },
  ...ARTICLES.map((a) => ({
    loc: `${SITE_URL}/blog/${a.slug}/`,
    priority: "0.8",
    changefreq: "monthly",
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapXml, "utf8");
console.log("Regenerated: sitemap.xml with", urls.length, "URLs");

// ---- 5. Ensure GitHub Pages doesn't run Jekyll processing ----
fs.writeFileSync(path.join(ROOT, ".nojekyll"), "", "utf8");
console.log("Ensured: .nojekyll");

console.log("\nDone. Each post now has a real URL at /blog/<slug>/ in addition to the SPA's #post/<slug> view.");

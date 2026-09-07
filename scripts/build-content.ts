import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const POSTS_DIR = path.join(ROOT_DIR, 'content', 'posts');
const BOOKS_DIR = path.join(ROOT_DIR, 'content', 'books');
const GENERATED_DIR = path.join(ROOT_DIR, 'generated');
const SRC_GENERATED_DIR = path.join(ROOT_DIR, 'src', 'generated');

if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}
if (!fs.existsSync(SRC_GENERATED_DIR)) {
  fs.mkdirSync(SRC_GENERATED_DIR, { recursive: true });
}

interface MetaMap {
  [key: string]: string;
}

function unescapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseHtmlFile(filePath: string, prefix: 'post' | 'book') {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Match name="..." and content="..." where quotes can match either single or double properly
  const metaRegex = /<meta\s+name=(["'])([\w:.-]+)\1\s+content=(["'])([\s\S]*?)\3\s*\/?>/gi;
  const metas: MetaMap = {};
  let match;

  while ((match = metaRegex.exec(content)) !== null) {
    const key = match[2];
    const val = unescapeHtml(match[4]);
    metas[key] = val;
  }

  // Remove meta tags to get body
  const body = content.replace(/<meta\s+[^>]+>/gi, '').trim();

  return { metas, body };
}

// 1. Process Posts
const postFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.html'));
const posts = postFiles.map(file => {
  const slug = file.replace(/\.html$/, '');
  const { metas, body } = parseHtmlFile(path.join(POSTS_DIR, file), 'post');
  return {
    slug: metas['post:slug'] || slug,
    title: metas['post:title'] || 'Untitled Post',
    category: metas['post:category'] || 'General Grammar',
    tags: metas['post:tags'] ? metas['post:tags'].split(',').map(t => t.trim()) : [],
    difficulty: metas['post:difficulty'] || 'Intermediate',
    readingTime: metas['post:readingTime'] || '5 min read',
    publishDate: metas['post:publishDate'] || '2026-08-01',
    description: metas['post:description'] || '',
    relatedBookId: metas['post:relatedBook'] ? parseInt(metas['post:relatedBook'], 10) : null,
    bodyHtml: body,
  };
}).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

// 2. Process Books
const bookFiles = fs.readdirSync(BOOKS_DIR).filter(f => f.endsWith('.html'));
const books = bookFiles.map(file => {
  const slug = file.replace(/\.html$/, '');
  const { metas, body } = parseHtmlFile(path.join(BOOKS_DIR, file), 'book');
  return {
    id: metas['book:id'] ? parseInt(metas['book:id'], 10) : 0,
    slug: metas['book:slug'] || slug,
    title: metas['book:title'] || 'Grammar eBook',
    topic: metas['book:topic'] || 'Grammar',
    shortBenefit: metas['book:shortBenefit'] || '',
    idealFor: metas['book:idealFor'] || 'Competitive Aspirants',
    amazonUrl: metas['book:amazonUrl'] || 'PLACEHOLDER-AMAZON-URL',
    coverImage: metas['book:coverImage'] || '',
    transformationStatement: metas['book:transformation'] || metas['book:transformationStatement'] || '',
    difficulty: metas['book:difficulty'] || 'Intermediate',
    overviewHtml: body,
  };
}).sort((a, b) => a.id - b.id);

// Write generated JSON
fs.writeFileSync(path.join(GENERATED_DIR, 'posts-index.json'), JSON.stringify(posts, null, 2), 'utf-8');
fs.writeFileSync(path.join(GENERATED_DIR, 'books-index.json'), JSON.stringify(books, null, 2), 'utf-8');

fs.writeFileSync(path.join(SRC_GENERATED_DIR, 'posts-index.json'), JSON.stringify(posts, null, 2), 'utf-8');
fs.writeFileSync(path.join(SRC_GENERATED_DIR, 'books-index.json'), JSON.stringify(books, null, 2), 'utf-8');

// Generate comprehensive sitemap.xml
const siteUrl = 'https://zeroerrorenglishpro.com';
const coreRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'blog', priority: '0.9', changefreq: 'weekly' },
  { path: 'books', priority: '0.9', changefreq: 'weekly' },
  { path: 'practice', priority: '0.85', changefreq: 'weekly' },
  { path: 'quizzes', priority: '0.85', changefreq: 'weekly' },
  { path: 'weakness-finder', priority: '0.85', changefreq: 'weekly' },
  { path: 'resources', priority: '0.8', changefreq: 'monthly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.7', changefreq: 'monthly' },
  { path: 'search', priority: '0.7', changefreq: 'weekly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { path: 'terms', priority: '0.5', changefreq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${coreRoutes.map(r => `  <url>
    <loc>${siteUrl}/${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
${posts.map(p => `  <url>
    <loc>${siteUrl}/blog/${p.slug}</loc>
    <lastmod>${p.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n')}
${books.map(b => `  <url>
    <loc>${siteUrl}/books/${b.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(GENERATED_DIR, 'sitemap.xml'), sitemap, 'utf-8');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
if (fs.existsSync(PUBLIC_DIR)) {
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap, 'utf-8');
}

// Generate robots.txt
const robots = `# ZeroErrorEnglishPro robots.txt
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(GENERATED_DIR, 'robots.txt'), robots, 'utf-8');
if (fs.existsSync(PUBLIC_DIR)) {
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots, 'utf-8');
}

// Generate rss.xml
const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>ZeroErrorEnglishPro — English Grammar for Competitive Exams</title>
  <link>${siteUrl}</link>
  <description>Taught through the mistakes examiners bank on. Prepared by 22-year grammar educator.</description>
  <language>en</language>
${posts.map(p => `  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${siteUrl}/blog/${p.slug}</link>
    <description><![CDATA[${p.description}]]></description>
    <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
    <guid>${siteUrl}/blog/${p.slug}</guid>
  </item>`).join('\n')}
</channel>
</rss>`;
fs.writeFileSync(path.join(GENERATED_DIR, 'rss.xml'), rss, 'utf-8');

console.log(`Successfully generated indices for ${posts.length} posts and ${books.length} books.`);

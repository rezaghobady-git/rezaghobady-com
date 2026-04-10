// WordPress WXR → Keystatic MDOC importer
// Run: node scripts/import-wp.js
const fs = require('fs');
const path = require('path');

const XML_PATH = 'd:/Reza/Dropbox/kaavops.WordPress.2026-03-28.xml';
const OUT_DIR = path.join(__dirname, '../src/content/blog');

// ── HTML entity decoder ──────────────────────────────────────────────────────
function decodeEntities(str) {
  return str
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;|&#8220;/g, '\u201C')
    .replace(/&rdquo;|&#8221;/g, '\u201D')
    .replace(/&lsquo;|&#8216;/g, '\u2018')
    .replace(/&rsquo;|&#8217;/g, '\u2019')
    .replace(/&mdash;|&#8212;/g, '\u2014')
    .replace(/&ndash;|&#8211;/g, '\u2013')
    .replace(/&hellip;|&#8230;/g, '\u2026')
    .replace(/&#160;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ''));
}

// ── HTML → MDOC ─────────────────────────────────────────────────────────────
function htmlToMdoc(html) {
  let md = html;

  // Strip WordPress-style shortcodes e.g. [blockquote text="..." /]
  md = md.replace(/\[[a-z_]+[^\]]*\/?]/gi, '');

  // Headings (process before stripping tags)
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n# ${stripTags(c).trim()}\n\n`);
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n## ${stripTags(c).trim()}\n\n`);
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n### ${stripTags(c).trim()}\n\n`);
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n#### ${stripTags(c).trim()}\n\n`);

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) => {
    const lines = stripTags(c).trim().split('\n').filter(l => l.trim());
    return '\n' + lines.map(l => `> ${l.trim()}`).join('\n>\n> ') + '\n\n';
  });

  // Unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, c) => {
    const items = [];
    c.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (__, item) => {
      items.push(`- ${stripTags(item).trim()}`);
    });
    return '\n' + items.join('\n') + '\n\n';
  });

  // Ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, c) => {
    let n = 1;
    const items = [];
    c.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (__, item) => {
      items.push(`${n++}. ${stripTags(item).trim()}`);
    });
    return '\n' + items.join('\n') + '\n\n';
  });

  // Inline formatting (order matters: strong before em)
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
    (_, url, text) => `[${stripTags(text).trim()}](${url})`);

  // Block elements → blank lines
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<\/p>/gi, '\n\n');
  md = md.replace(/<\/div>/gi, '\n');

  // Strip remaining tags
  md = md.replace(/<[^>]+>/g, '');

  // Decode entities
  md = decodeEntities(md);

  // Normalize line endings and whitespace
  md = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  md = md.replace(/[ \t]+$/gm, '');      // trailing spaces per line
  md = md.replace(/\n{3,}/g, '\n\n');    // max 1 blank line
  md = md.trim();

  return md;
}

// ── YAML-safe string (double-quoted, escapes \ and ") ────────────────────────
function yamlStr(str) {
  return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').trim() + '"';
}

// ── Main ─────────────────────────────────────────────────────────────────────
const xml = fs.readFileSync(XML_PATH, 'utf8');
const items = xml.split('<item>').slice(1);

const posts = items.filter(i => {
  const type   = (i.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]>/) || [])[1];
  const status = (i.match(/<wp:status><!\[CDATA\[(.*?)\]\]>/) || [])[1];
  return type === 'post' && status === 'publish';
});

console.log(`Found ${posts.length} published posts\n`);

let created = 0, skipped = 0;

posts.forEach(item => {
  const titleRaw = (
    item.match(/<title><!\[CDATA\[(.*?)\]\]>/) ||
    item.match(/<title>(.*?)<\/title>/) || []
  )[1] || '';

  const title       = decodeEntities(titleRaw);
  const date        = ((item.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]>/) || [])[1] || '').slice(0, 10);
  const wpSlug      = (item.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]>/) || [])[1] || '';
  const contentHtml = (item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) || [])[1] || '';
  const excerptHtml = (item.match(/<excerpt:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/excerpt:encoded>/) || [])[1] || '';

  if (!title || !date || !wpSlug) {
    console.log(`SKIP (missing data): ${title || '(no title)'}`);
    return;
  }

  // Description: prefer excerpt, fall back to first ~250 chars of content
  let description;
  if (excerptHtml.trim()) {
    description = stripTags(excerptHtml).replace(/\s+/g, ' ').trim().slice(0, 280);
  } else {
    const plainContent = stripTags(contentHtml).replace(/\s+/g, ' ').trim();
    const firstPara = plainContent.match(/^.{30,280}?[.!?]/s);
    description = firstPara ? firstPara[0].trim() : plainContent.slice(0, 280);
  }

  const mdocBody = htmlToMdoc(contentHtml);

  const fileContent =
`---
title: ${yamlStr(title)}
date: "${date}"
category: "Personal"
description: ${yamlStr(description)}
draft: false
---

${mdocBody}
`;

  const filePath = path.join(OUT_DIR, `${wpSlug}.mdoc`);

  if (fs.existsSync(filePath)) {
    console.log(`SKIP (exists): ${wpSlug}`);
    skipped++;
    return;
  }

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`CREATED: ${wpSlug}  (${date})  "${title.slice(0, 50)}"`);
  created++;
});

console.log(`\n✓ ${created} created, ${skipped} skipped`);

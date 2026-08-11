import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const manifest = JSON.parse(readFileSync(new URL('../.paperclip/aug10-2026/research.json', import.meta.url)));
const source = readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');

test('August 10 research manifest and rendered contract pass', () => {
  assert.ok(manifest.entries.length >= 10);
  assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);
  for (const entry of manifest.entries) {
    assert.match(entry.route, /^\/research\/[a-z0-9-]+$/);
    assert.equal(entry.route, `/research/${entry.slug}`);
    assert.equal(entry.sourcePath, 'app/fleet-data.ts');
    assert.equal(entry.sourceDate, '2026-08-10');
    assert.equal(entry.renderedDate, '2026-08-10');
    assert.ok(source.includes(`['${entry.slug}',`));
    assert.match(source, /researchRun15Posts[\s\S]*published: '2026-08-10'/);
    assert.ok(existsSync(new URL(`../public/research-banners/${entry.slug}.svg`, import.meta.url)));
    assert.match(sitemap, /allResearchPosts\.map/);
  }
  assert.match(page, /datePublished:post\.published/);
  assert.match(page, /article:published_time/);
  assert.match(page, /<time dateTime=\{post\.published\}>\{post\.published\}<\/time>/);
  assert.match(source, /toSorted\(\(a, b\) => b\.published\.localeCompare\(a\.published\)\)/);
});

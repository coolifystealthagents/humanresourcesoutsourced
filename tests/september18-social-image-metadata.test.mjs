import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const page = fs.readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');

test('blog metadata always provides Open Graph, Twitter, and structured-data images', () => {
  assert.match(page, /article\?\.heroImage \?\? '\/hr-team\.jpg'/);
  assert.match(page, /openGraph:.*images: \[\{ url: image/s);
  assert.match(page, /twitter: \{ card: 'summary_large_image'.*images: \[image\]/s);
  assert.match(page, /image: articleImage/);
});

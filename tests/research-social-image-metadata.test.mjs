import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('research metadata always provides Open Graph, Twitter, and schema images', () => {
  assert.match(source, /const image = post\.thumbnail \? `\$\{base\}\$\{post\.thumbnail\}` : fallbackImage/);
  assert.match(source, /openGraph:[\s\S]*images: \[\{ url: image,/);
  assert.match(source, /twitter: \{ card: 'summary_large_image'[\s\S]*images: \[image\]/);
  assert.match(source, /JSON\.stringify\([\s\S]*image\}\)/);
});

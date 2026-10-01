import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('research Article schema uses the on-site Organization consistently for author and publisher', () => {
  assert.match(source, /const organization = \{ '@type': 'Organization', name: site\.brand, url: base \};/);
  assert.match(source, /author:organization,publisher:organization/);
  assert.doesNotMatch(source, /author:\{'@type':'Organization',name:site\.brand\}/);
});

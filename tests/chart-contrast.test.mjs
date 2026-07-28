import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

test('chart notes rendered inside a full-width bar use a contrasting text style', () => {
  assert.match(
    page,
    /className=\{`hr-chart-note \$\{bar\.value === 30 \? 'hr-chart-note-inside' : ''\}`\}/,
  );
  assert.match(css, /\.hr-chart-note-inside\{[^}]*fill:#fff(?:fff)?(?:;|\})/);
});

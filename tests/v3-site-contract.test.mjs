import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});

const components = read('app/components.tsx');
const reviews = read('app/reviews.tsx');
const contact = read('app/contact-us/page.tsx');
const serviceDetail = read('app/services/[slug]/page.tsx');
const nextConfig = read('next.config.mjs');
const middleware = read('middleware.ts');
const appSource = walk(path.join(root, 'app'))
  .filter((file) => /\.(?:ts|tsx|md|mdx)$/.test(file))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

test('sticky shared header and footer expose exact navigation and StealthAgents attribution', () => {
  assert.match(components, /<a href="\/">Home<\/a><a href="\/services">Services<\/a><a href="\/contact-us"[^>]*>Contact Us<\/a>/);
  assert.equal((components.match(/Powered by StealthAgents/g) || []).length, 2);
  assert.match(components, /stealth-agents-logo/);
  assert.match(read('app/globals.css'), /\.nav\s*\{[^}]*position:\s*sticky/s);
});

test('review marquee contains at least ten unique approved first-party records and an accessible motion control', () => {
  const names = [...reviews.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.ok(names.length >= 10, `expected at least 10 reviews, found ${names.length}`);
  assert.equal(new Set(names).size, names.length);
  assert.match(reviews, /StealthAgents reviews/);
  assert.match(reviews, /stealthagents\.com\/our-clients/);
  assert.match(reviews, /aria-pressed=\{paused\}/);
  assert.match(reviews, /Pause reviews/);
  assert.doesNotMatch(reviews, /previous|next|pagination/i);
});

test('duplicate first blog pagination route redirects to the canonical blog index', () => {
  assert.doesNotMatch(read('app/blog/page/[page]/page.tsx'), /page:String\(i\+1\)/);
  assert.match(middleware, /\/blog\/page\/1/);
  assert.match(middleware, /url\.pathname = ['"]\/blog['"]/);
});

test('contact first fold contains reviews and form, followed immediately by official team section', () => {
  const heroStart = contact.indexOf('contact-first-fold');
  const heroEnd = contact.indexOf('</section>', heroStart);
  const nextSection = contact.indexOf('<section', heroEnd + 10);
  const officialTeam = contact.indexOf('Official team, Bacolod');
  assert.ok(heroStart >= 0 && heroEnd > heroStart);
  assert.ok(contact.indexOf('<ReviewsMarquee', heroStart) < heroEnd);
  assert.ok(contact.indexOf('<StandardContactForm', heroStart) < heroEnd);
  assert.equal(nextSection, contact.lastIndexOf('<section', officialTeam));
  assert.match(contact, /stealth-agents-team-bacolod/);
  assert.match(contact, /stealth-agents-logo/);
});

test('required conversion journey is implemented', () => {
  assert.match(read('app/contact-us/StandardContactForm.tsx'), /window\.location\.assign\(["']\/thank-you["']\)/);
  assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/);
  const confirmation = read('app/thanks-whats-next/page.tsx');
  assert.match(confirmation, /consultation is booked/i);
  assert.doesNotMatch(confirmation, /go\.oncehub\.com/);
});

test('all service pages use substantial shared long-form sections and relevant hero images', () => {
  for (const token of ['Who this service is for', 'Inputs and access', 'Workflow and deliverables', 'Quality controls', 'Human decision boundaries', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(serviceDetail, new RegExp(token));
  }
  assert.match(serviceDetail, /serviceHero/);
});

test('blog and research articles provide active sticky table of contents and populated sidebars', () => {
  for (const file of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(file);
    assert.match(source, /ActiveTableOfContents/);
    assert.match(source, /article-sidebar/);
  }
});

test('commercial layouts contain no decorative zero-padded labels', () => {
  for (const file of ['app/page.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx', 'app/contact-us/page.tsx', 'app/research/page.tsx']) {
    assert.doesNotMatch(read(file), /padStart\(2|['"]0[1-9]['"]/);
  }
});

test('security headers and canonical redirects are configured', () => {
  for (const header of ['Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(nextConfig, new RegExp(header));
  assert.match(middleware, /www\.humanresourcesoutsourced\.com/);
  assert.match(middleware, /x-forwarded-proto/);
  assert.match(middleware, /cf-visitor/);
  assert.match(middleware, /NextResponse\.redirect\(url, 308\)/);
});

test('visible application source contains no forbidden dash characters', () => {
  assert.doesNotMatch(appSource, /[—–]/);
  assert.doesNotMatch(appSource, /\\u201[34]/i);
});

test('uniform subsidiary identity and design registry are present', () => {
  assert.equal(read('public/logo.svg'), read('app/icon.svg'));
  const registry = JSON.parse(read('design-registry.json'));
  assert.ok(registry.some((item) => item.domain === 'humanresourcesoutsourced.com'));
});

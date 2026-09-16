import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const appFiles = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(relative);
    else if (/\.(?:ts|tsx|css|mjs)$/.test(entry.name)) appFiles.push(relative);
  }
};
walk('app');
const appSource = () => appFiles.map(read).join('\n');

test('contact planning page has one explicit H1 and a clear contact action', () => {
  const source = read('app/contact-us/page.tsx');
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /Plan (?:my|your) HR support/i);
  assert.match(source, /<StandardContactForm\b/);
});

test('public handoff pages do not present unverified reviews, star ratings, or performance claims', () => {
  const source = `${read('app/contact/page.tsx')}\n${read('app/thank-you/page.tsx')}`;
  const unsupported = [
    /Alexis R\./i,
    /Jordan M\./i,
    /Priya S\./i,
    /five[- ]star|5[- ]star|★★★★★/i,
    /300\s*(?:to|→|-)\s*2,?500\s*hours/i,
    /(?:under|less than|<)\s*24[- ]hours/i,
    /What clients say/i
  ];
  for (const pattern of unsupported) assert.doesNotMatch(source, pattern);
});

test('the application tree contains no unverified testimonial data or generic stock-photo dependencies', () => {
  const source = appSource();
  assert.doesNotMatch(source, /TestimonialsRail|\.sa-testimonial|What (?:Stealth Agents|our) clients say|5 out of 5 stars|★★★★★/i);
  assert.doesNotMatch(source, /unsplash|pexels|pixabay|shutterstock|istock|freepik/i);
});

test('all article hero images have useful, page-specific alternative text', () => {
  const source = appSource();
  assert.doesNotMatch(source, /alt\s*=\s*["']\s*["']/);
  assert.match(read('app/blog/[slug]/page.tsx'), /alt=\{article\.title\}/);
  assert.match(read('app/research/[slug]/page.tsx'), /alt=\{post\.title\}/);
});

test('obsolete recruiting service slugs are redirected but never used as internal links', () => {
  const source = appSource();
  assert.doesNotMatch(source, /["'`]\/services\/recruiting-coordination["'`]/);
  assert.doesNotMatch(source, /["'`]\/services\/recruiting-pipeline-support["'`]/);
  const config = read('next.config.mjs');
  assert.match(config, /source:\s*["']\/services\/recruiting-coordination["']/);
  assert.match(config, /destination:\s*["']\/services\/interview-coordination["']/);
  assert.match(config, /source:\s*["']\/services\/recruiting-pipeline-support["']/);
  assert.match(config, /destination:\s*["']\/services\/candidate-sourcing["']/);
});

test('mobile layouts wrap pagination and research tabs without viewport-width breakout', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.pagination\s*\{[^}]*flex-wrap:\s*wrap/s);
  assert.match(css, /\.research-cluster-tabs\s*\{[^}]*flex-wrap:\s*wrap/s);
  assert.doesNotMatch(css, /\.hr-wide-block\s*\{[^}]*width:\s*100vw/s);
  assert.match(css, /@media\s*\(max-width:\s*620px\)[\s\S]*?\.hr-wide-block\s*\{[^}]*max-width:\s*100%/);
});

test('font CSP explicitly permits the two configured Google Fonts origins', () => {
  const config = read('next.config.mjs');
  assert.match(config, /style-src[^;]*https:\/\/fonts\.googleapis\.com/);
  assert.match(config, /font-src[^;]*https:\/\/fonts\.gstatic\.com/);
});

test('reused generic article hero assets are not assigned across article batches', () => {
  const source = appSource();
  assert.doesNotMatch(source, /\/blog-heroes\/august31-hr-operations-field-guide\.svg/);
  assert.doesNotMatch(source, /\/research-heroes\/august31-hr-controls-research\.svg/);
});

test('articles without commissioned artwork render an accessible topic-specific visual', () => {
  const visual = read('app/article-topic-visual.tsx');
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  assert.match(visual, /<svg[^>]*role="img"/s);
  assert.match(visual, /<title[^>]*>\{title\}<\/title>/s);
  assert.match(visual, /<desc>/);
  assert.match(visual, /candidate|onboarding|payroll|benefits|records|learning|performance|offboarding/i);
  assert.match(blog, /\{article\.heroImage\s*\?\s*<img[\s\S]*?:\s*<ArticleTopicVisual/);
  assert.match(research, /\{post\.thumbnail\s*\?\s*<img[\s\S]*?:\s*<ArticleTopicVisual/);
});

test('service pages use service-specific descriptions, tasks, controls, and first-week plans', () => {
  const source = read('app/fleet-data.ts');
  const genericPhrases = [
    'Document the recurring human resources work',
    'Complete approved tasks in the client workflow',
    'Record exceptions and next actions',
    'Use named accounts and limited permissions',
    'Follow written approval and escalation rules',
    'Review work with a client-side owner',
    'Practice with representative examples',
    'Review the first completed work together'
  ];
  for (const phrase of genericPhrases) assert.doesNotMatch(source, new RegExp(phrase, 'g'));
  for (const service of [
    'Candidate Sourcing', 'Interview Coordination', 'Employee Records Administration',
    'Benefits Administration Support', 'Payroll Preparation Support', 'Onboarding Coordination',
    'Learning Administration', 'HR Help Desk Support', 'Performance Review Administration',
    'Offboarding Coordination'
  ]) assert.match(source, new RegExp(service));
});

test('generated content no longer emits the audited generic paragraph patterns', () => {
  const source = `${read('app/blog/generated-articles.ts')}\n${read('app/blog/august21-batch.ts')}\n${read('app/fleet-data.ts')}`;
  const generic = [
    'Your HR owner should retain final decisions, sensitive employee conversations, policy interpretation, and approval authority.',
    'Start with one narrow queue, named tools, a written review rhythm, and proof for each completed item.',
    'Start with one narrow queue, minimum necessary access, a named reviewer, and proof for every close.',
    'We synthesized the ten listed primary and professional sources, screened the topic against the existing Research slugs and titles, and translated the guidance into an operational control model.',
    'We synthesized the ten listed authoritative and professional sources, screened this topic against existing Research and Blog slugs, and translated the guidance into an operational control model.',
    'Track status, owner, source system, due date, exception category, and completion evidence as separate fields so a reviewer can test the workflow without receiving unnecessary personal data.',
    'Confirm the trigger and owner; use the approved system of record; restrict access by task; retain the evidence required by policy; review exceptions weekly; and document the escalation outcome.'
  ];
  for (const phrase of generic) assert.doesNotMatch(source, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
});

test('the Website Optimization Project records why each realistic HR support service is offered', () => {
  const relative = 'docs/website-optimization-project.md';
  assert.ok(fs.existsSync(path.join(root, relative)), `${relative} must exist`);
  const source = read(relative);
  assert.match(source, /service selection/i);
  assert.match(source, /virtual assistant|Philippines-based support/i);
  assert.match(source, /employer retains|client retains/i);
  for (const slug of [
    'operations-support', 'customer-support', 'admin-support', 'reporting-and-qa',
    'candidate-sourcing', 'interview-coordination', 'employee-records-administration',
    'benefits-administration-support', 'payroll-preparation-support', 'onboarding-coordination',
    'learning-administration', 'hr-help-desk-support', 'performance-review-administration',
    'offboarding-coordination'
  ]) assert.match(source, new RegExp(slug));
});

test('narrow article layouts constrain grid children and wrap long headings and research-source URLs', () => {
  const css = read('app/globals.css');
  assert.match(css, /@media\(max-width:900px\)\{\.hr-article-hero-grid\{grid-template-columns:minmax\(0,1fr\)\}/);
  assert.match(css, /\.hr-article-hero-grid>\*\{min-width:0\}/);
  assert.match(css, /\.hr-article h1\{[^}]*overflow-wrap:anywhere/);
  assert.match(css, /\.article-shell (?:p|a)[^}]*overflow-wrap:anywhere/);
});

test('Blog conversion content stays inside the page shell after the Blog hero', () => {
  const layout = read('app/blog/layout.tsx');
  const page = read('app/blog/page.tsx');
  assert.doesNotMatch(layout, /BlogBanner/);
  const header = page.indexOf('<Header');
  const hero = page.indexOf('fleet-hero');
  const banner = page.indexOf('<BlogBanner position="top"');
  const footer = page.indexOf('<Footer');
  assert.ok(header >= 0 && header < hero && hero < banner && banner < footer, 'Blog banner must render after the hero and before the footer');
});

test('thank-you scheduling panel provides direct and first-party fallbacks before the iframe', () => {
  const source = read('app/thank-you/page.tsx');
  const direct = source.indexOf('Open scheduler in a new tab');
  const contact = source.indexOf('href="/contact-us"');
  const frame = source.indexOf('<iframe');
  assert.ok(direct >= 0 && direct < frame, 'direct scheduler link must precede the iframe');
  assert.ok(contact >= 0 && contact < frame, 'first-party contact fallback must precede the iframe');
  assert.match(source, /className="sa-booking-contact-fallback"[^>]*href="\/contact-us"/);
  assert.match(read('app/globals.css'), /\.sa-booking-contact-fallback\{[^}]*text-decoration:underline/);
  assert.match(source, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
});

test('Next.js is pinned at or above the first release that clears current critical advisories', () => {
  const pkg = JSON.parse(read('package.json'));
  const version = pkg.dependencies.next.replace(/^[^\d]*/, '').split('.').map(Number);
  assert.ok(version[0] > 15 || (version[0] === 15 && (version[1] > 5 || (version[1] === 5 && version[2] >= 24))), `found ${pkg.dependencies.next}`);
});

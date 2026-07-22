import * as data from '../data';
import { fleetServices, researchPosts, postsPerPage } from '../fleet-data';

export function GET() {
  const siteData = data as typeof data & { blogPosts?: readonly { slug: string }[] };
  const base = `https://${siteData.site.domain.toLowerCase()}`;
  const blogs = siteData.blogPosts ?? [];
  const pageCount = Math.max(1, Math.ceil(blogs.length / postsPerPage));
  const serviceSlugs = new Set([
    ...siteData.services.map((service) => service.slug),
    ...fleetServices.map((service) => service.slug)
  ]);
  const paths = [
    '/',
    '/services',
    '/pricing',
    '/blog',
    '/research',
    '/contact',
    '/privacy',
    '/terms',
    '/cancellation-policy',
    ...Array.from(serviceSlugs, (slug) => `/services/${slug}`),
    ...blogs.map((blog) => `/blog/${blog.slug}`),
    ...Array.from({ length: pageCount }, (_, index) => `/blog/page/${index + 1}`),
    ...researchPosts.map((post) => `/research/${post.slug}`)
  ];
  const body = paths
    .map((path) => `<url><loc>${path === '/' ? base : `${base}${path}`}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
}

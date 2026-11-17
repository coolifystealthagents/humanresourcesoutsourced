import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../../components';
import { blogPosts, site } from '../../../data';
import { postsPerPage } from '../../../fleet-data';
import { editorialPhotography } from '../../../editorial-photography';
import { BlogPagination } from '../../../BlogPagination';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
export function generateStaticParams() { const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage)); return Array.from({ length: Math.max(0, pages - 1) }, (_, index) => ({ page: String(index + 2) })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> { const { page } = await params; const n = Number(page); return { title: `HR outsourcing guides, page ${n}`, description: `Browse page ${n} of practical ${site.brand} guides for controlled HR administration and staffing handoffs.`, alternates: { canonical: `https://${site.domain.toLowerCase()}/blog/page/${n}` } }; }

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 2 || n > pages) notFound();
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);
  return <><Header /><main><section className="fleet-hero hr-editorial-hero"><div className="container"><div><p className="eyebrow">Blog</p><h1>{site.brand} guides</h1><p className="lead">Browse Philippines-based HR support and workflow articles.</p></div><img src="/optimization/hr-reporting-and-qa.jpg" alt="People operations colleagues reviewing reports" /></div></section><section className="section"><div className="container fleet-service-grid">{posts.map((post, index) => {
    const photo = editorialPhotography[(index + n - 1) % editorialPhotography.length];
    return <a className="card hr-blog-card" href={`/blog/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><h2>{post.title}</h2><p>{post.excerpt}</p>{'published' in post && post.published ? <p className="eyebrow">Published <time dateTime={post.published}>{formatDate(post.published)}</time></p> : null}<b>Read article →</b></a>;
  })}</div><BlogPagination pages={pages} current={n} /></section></main><Footer /></>;
}

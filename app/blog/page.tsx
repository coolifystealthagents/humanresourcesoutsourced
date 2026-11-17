import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { BlogPagination } from '../BlogPagination';

export const metadata = { title: 'Blog', description: `Philippines-based ${site.primary} planning guides.`, alternates: { canonical: `https://${site.domain.toLowerCase()}/blog` } };
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);
  return <><Header /><main>
    <section className="fleet-hero hr-editorial-hero"><div className="container"><div><p className="eyebrow">Blog</p><h1>Human Resources Outsourced guides</h1><p className="lead">Practical planning for Philippines-based human resources roles, workflows, and manager handoffs.</p></div><img src="/optimization/hr-reporting-and-qa.jpg" alt="People operations colleagues reviewing reports" /></div></section>
    <section className="section"><div className="container fleet-service-grid">{posts.map((post, index) => {
      const photo = editorialPhotography[index];
      return <a className="card hr-blog-card" href={`/blog/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><h2>{post.title}</h2><p>{post.excerpt}</p>{'published' in post && post.published ? <p className="eyebrow">Published <time dateTime={post.published}>{formatDate(post.published)}</time></p> : null}<b>Read article →</b></a>;
    })}</div><BlogPagination pages={pages} current={1} /></section>
  </main><Footer /></>;
}

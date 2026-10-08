import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { BlogBanner } from '../blog-banners';

export const metadata = {
  title: `Blog | ${site.brand}`,
  description: `Philippines-based ${site.primary} planning guides.`,
};
const formatDate=(date:string)=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`));

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);

  return <>
    <Header />
    <main>
      <section className="fleet-hero variant-2">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Human Resources Outsourced guides</h1>
          <p className="lead">Practical planning for Philippines-based human resources roles, workflows, and manager handoffs.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogBanner position="top" />
        </div>
      </section>
      <section className="section">
        <div className="container fleet-service-grid">
          {posts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            {'published' in post&&post.published?<p className="eyebrow">Published <time dateTime={post.published}>{formatDate(post.published)}</time></p>:null}
            <b>Read article →</b>
          </a>)}
        </div>
        <nav className="pagination" aria-label="Blog pages">
          {Array.from({ length: pages }, (_, index) => <a
            aria-current={index === 0 ? 'page' : undefined}
            href={index === 0 ? '/blog' : `/blog/page/${index + 1}`}
            key={index}
          >{index + 1}</a>)}
        </nav>
      </section>
    </main>
    <Footer />
  </>;
}

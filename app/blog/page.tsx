import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';

export const metadata = {
  title: 'HR outsourcing guides',
  description: 'Short guides to planning HR admin support, choosing the first tasks, checking providers, and setting up the first week.',
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">{site.brand}</p>
          <h1>Guides for handing off HR admin work</h1>
          <p className="lead">Use these guides to choose the work, protect sensitive decisions, check a provider, and set up the first week.</p>
          <div className="cards">
            {blogPosts.map((post) => (
              <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="pill">{post.minutes} min read</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

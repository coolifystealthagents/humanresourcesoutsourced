import { Header, Footer } from '../components';
import { allResearchPosts } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { site } from '../data';

export const metadata = { title: 'Research', description: 'Source-backed research for planning Philippines-based HR support.', alternates: { canonical: `https://${site.domain.toLowerCase()}/research` } };
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
const featured = allResearchPosts.slice(0, editorialPhotography.length);
const archive = allResearchPosts.slice(featured.length);
const months = Array.from(new Set(archive.map((post) => post.published.slice(0, 7))));
const monthLabel = (month: string) => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${month}-01T00:00:00Z`));

export default function Research() {
  return <><Header /><main className="research-index-page">
    <section className="research-hero"><div className="container research-hero-grid"><div><p className="eyebrow">Research library</p><h1>Source-backed research for better staffing decisions</h1><p className="lead">Compare roles, controls, and onboarding decisions before building a Philippines-based HR support team.</p></div><figure className="research-hero-card"><img src="/optimization/hr-operations-support.jpg" alt="People operations colleagues reviewing documents together" /></figure></div></section>
    <section className="section research-library-section"><div className="container"><div className="services-section-head"><div><p className="eyebrow">Latest research</p><h2>Questions worth checking before a handoff.</h2></div><p>These briefs connect source evidence to a practical HR workflow and a named decision owner.</p></div><div className="research-card-grid">{featured.map((post, index) => {
      const photo = editorialPhotography[index];
      return <a className="research-library-card" href={`/research/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><h2>{post.title}</h2><p className="research-card-excerpt">{post.excerpt}</p><div className="research-card-meta"><span>Published <time dateTime={post.published}>{formatDate(post.published)}</time></span><span>{post.sources?.length ?? 0} sources</span></div></a>;
    })}</div>{archive.length > 0 && <div className="research-archive" id="research-archive"><div className="services-section-head"><div><p className="eyebrow">Complete archive</p><h2>Browse every research brief.</h2></div><p>All published reports remain available in the monthly archive below.</p></div>{months.map((month) => <details className="research-archive-group" key={month}><summary><span>{monthLabel(month)}</span><small>{archive.filter((post) => post.published.startsWith(month)).length} briefs</small></summary><div className="research-archive-links">{archive.filter((post) => post.published.startsWith(month)).map((post) => <a href={`/research/${post.slug}`} key={post.slug}>{post.title}<span>Read brief ↗</span></a>)}</div></details>)}</div>}</div></section>
  </main><Footer /></>;
}

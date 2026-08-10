import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { allResearchPosts, ResearchPost } from '../../fleet-data';
import { site } from '../../data';

export function generateStaticParams() { return allResearchPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allResearchPosts.find(p => p.slug === slug);
  return post ? { title: `${post.title} | ${site.brand}`, description: post.excerpt, alternates: { canonical: `https://${site.domain}/research/${post.slug}` } } : {};
}
export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: ResearchPost | undefined = allResearchPosts.find(p => p.slug === slug);
  if (!post) notFound();
  const related = allResearchPosts.filter(p => p.slug !== post.slug).slice(0, 3);
  const url = `https://${site.domain}/research/${post.slug}`;
  return <><Header /><main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} research</p>{post.thumbnail ? <img src={post.thumbnail} width={1200} height={630} alt="" /> : null}<h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p>Published {post.published} · {post.sources?.length ?? 0} sources</p>{post.sections.map(s => <section className="card" key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}{post.sources?.length ? <section className="card"><h2>Sources</h2><ol>{post.sources.map(s => <li key={s.url}><a href={s.url} rel="noreferrer">{s.name}</a></li>)}</ol></section> : null}<section className="card"><h2>Related Research</h2>{related.map(p => <p key={p.slug}><a href={`/research/${p.slug}`}>{p.title}</a></p>)}</section></div></article></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:post.title,datePublished:post.published,url,author:{'@type':'Organization',name:site.brand},image:post.thumbnail ? `https://${site.domain.toLowerCase()}${post.thumbnail}` : undefined}) }} /><Footer /></>;
}

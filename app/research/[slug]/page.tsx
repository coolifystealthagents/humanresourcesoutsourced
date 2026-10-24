import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { allResearchPosts, ResearchPost } from '../../fleet-data';
import { site } from '../../data';
import { ArticleTopicVisual } from '../../article-topic-visual';
import { ActiveTableOfContents } from '../../article-toc';

const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
const base = `https://${site.domain.toLowerCase()}`;
const fallbackImage = `${base}/hr-team.jpg`;
const sectionId = (heading: string, index: number) => `${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section'}-${index + 1}`;

export function generateStaticParams() { return allResearchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = allResearchPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `${base}/research/${post.slug}`;
  const image = post.thumbnail ? `${base}${post.thumbnail}` : fallbackImage;
  return { title: post.title, description: post.excerpt, alternates: { canonical: url }, openGraph: { title: post.title, description: post.excerpt, url, siteName: site.brand, type: 'article', publishedTime: post.published, modifiedTime: post.modified, images: [{ url: image, alt: `${site.brand}: ${post.title}` }] }, twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [image] } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: ResearchPost | undefined = allResearchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = allResearchPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const url = `${base}/research/${post.slug}`;
  const image = post.thumbnail ? `${base}${post.thumbnail}` : fallbackImage;
  const organization = { '@type': 'Organization', name: site.brand, url: base };
  const tocItems = [
    ...post.sections.map((section, index) => ({ id: sectionId(section.heading, index), label: section.heading })),
    ...(post.sources?.length ? [{ id: 'sources', label: 'Sources' }] : []),
    ...(post.serviceLink ? [{ id: 'service-handoff', label: post.serviceLink.title }] : []),
    { id: 'related-research', label: 'Related research' },
  ];

  return <><Header /><main className="editorial-page"><article className="section"><header className="container article-header"><p className="eyebrow">{site.brand} research</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p className="article-meta">Published <time dateTime={post.published}>{formatPublicDate(post.published)}</time>{post.modified && post.modified !== post.published ? <> · Updated <time dateTime={post.modified}>{formatPublicDate(post.modified)}</time></> : null} · {post.sources?.length ?? 0} sources</p>{post.thumbnail ? <img className="article-hero-image" src={post.thumbnail} width={1200} height={630} alt={post.title} /> : <ArticleTopicVisual title={post.title} kind="research" />}</header><div className="container article-layout"><div className="article-reading-column">{post.sections.map((section, index) => <section className="article-section" id={sectionId(section.heading, index)} key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}{post.sources?.length ? <section className="article-section" id="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a></li>)}</ol></section> : null}{post.serviceLink ? <section className="article-section article-service" id="service-handoff"><h2>{post.serviceLink.title}</h2><p>{post.serviceLink.body} <a href={post.serviceLink.href}>Review the service scope.</a></p></section> : null}<section className="article-section" id="related-research"><h2>Related research</h2>{related.map((item) => <p key={item.slug}><a href={`/research/${item.slug}`}>{item.title}</a></p>)}</section></div><aside className="article-sidebar"><ActiveTableOfContents items={tocItems} title="Research contents" /><div className="article-sidebar-module"><h3>About this research</h3><p>Published by {site.brand} for teams planning controlled HR administration handoffs.</p><a href="/services">Review HR support services</a></div>{post.sources?.length ? <div className="article-sidebar-module"><h3>Source note</h3><p>This article cites {post.sources.length} named sources. Follow the source links for current authoritative guidance.</p></div> : null}</aside></div></article></main><meta property="article:published_time" content={post.published} />{post.modified ? <meta property="article:modified_time" content={post.modified} /> : null}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:post.title,datePublished:post.published,dateModified:post.modified ?? post.published,url,author:organization,publisher:organization,image}) }} /><Footer /></>;
}

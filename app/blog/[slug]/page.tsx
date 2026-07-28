import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';
import { richArticles } from '../article-data';

const base = `https://${site.domain.toLowerCase()}`;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const article = richArticles[slug];
  const title = article?.title ?? post.title;
  const description = article?.description ?? post.excerpt;
  const url = `${base}/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.brand, type: 'article' }
  };
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const article = richArticles[slug];

  if (!article) {
    return <><Header /><main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p><h2>Prepare representative examples</h2><p>Use real, appropriately redacted examples to explain quality. Review early work together and update the written process when an exception appears.</p><h2>Plan access and handoffs</h2><p>Provide only the access needed for the position and use named accounts where possible. Write down which questions must be escalated and who receives them.</p></section></div></article><CTA /></main><Footer /></>;
  }

  const articleUrl = `${base}/blog/${article.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    author: { '@type': 'Organization', name: site.brand, url: base },
    publisher: { '@type': 'Organization', name: site.brand, url: base },
    citation: article.sources.map((source) => source.url),
    about: ['HR outsourcing', 'Philippines-based HR administration', 'HR support staffing']
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl }
    ]
  };

  return <>
    <Header articleMode />
    <main className="hr-article" data-article-revision={article.revision}>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <header className="hr-article-hero">
        <div className="container hr-article-hero-grid">
          <div>
            <p className="eyebrow">Philippines staffing guide</p>
            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>
            <div className="hr-article-meta"><span>{article.minutes} minute read</span><span>Updated {new Date(`${article.updated}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</span><span>Philippines-only talent</span></div>
          </div>
          <aside className="hr-direct-answer" aria-label="Direct answer">
            <span>Direct answer</span>
            {article.directAnswer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </aside>
        </div>
      </header>

      <article className="container hr-article-body">
        <section className="hr-takeaways" aria-labelledby="takeaways-heading">
          <p className="eyebrow">Start here</p>
          <h2 id="takeaways-heading">Five rules for a safe first handoff</h2>
          <ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="hr-wide-block" aria-labelledby="task-map-heading">
          <div className="hr-section-heading"><p className="eyebrow">Task map</p><h2 id="task-map-heading">Split admin work from owner decisions</h2></div>
          <div className="hr-table-wrap">
            <table>
              <thead><tr><th>Work lane</th><th>Philippines team</th><th>Company owner</th><th>Useful check</th></tr></thead>
              <tbody>{article.taskRows.map((row) => <tr key={row.lane}><th scope="row">{row.lane}</th><td data-label="Philippines team">{row.philippinesTeam}</td><td data-label="Company owner">{row.owner}</td><td data-label="Useful check">{row.check}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="hr-pilot-board" aria-labelledby="pilot-board-heading">
          <div><p className="eyebrow">{article.chart ? 'Evidence snapshot' : 'Example pilot board'}</p><h2 id="pilot-board-heading">{article.chart ? 'Why careful access and review matter' : 'Use small numbers for the first review'}</h2></div>
          <div className="hr-stat-grid">{article.pilotStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note}</small></div>)}</div>
        </section>

        {article.banners?.[0] && <aside className="hr-article-banner" data-banner-slot="1"><div><p className="eyebrow">{article.banners[0].eyebrow}</p><h2>{article.banners[0].title}</h2><p>{article.banners[0].text}</p></div><a href={article.banners[0].href}>{article.banners[0].linkLabel}</a></aside>}

        {article.sections.slice(0, 4).map((section) => <section className="hr-prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

        {article.expertQuote && <figure className="hr-expert-quote"><blockquote>&quot;{article.expertQuote.text}&quot;</blockquote><figcaption><a href={article.expertQuote.url} rel="noopener noreferrer">{article.expertQuote.attribution}</a></figcaption></figure>}

        <section className="hr-script-panel" aria-labelledby="scripts-heading">
          <div><p className="eyebrow">Copy-ready scripts</p><h2 id="scripts-heading">Make the stop points easy to say</h2></div>
          <div className="hr-script-grid">{article.scripts.map((script) => <blockquote key={script.label}><span>{script.label}</span>&quot;{script.text}&quot;</blockquote>)}</div>
        </section>

        {article.sections.slice(4, 5).map((section) => <section className="hr-prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

        {article.chart && <figure className="hr-svg-module" tabIndex={0} aria-labelledby="handoff-chart-title handoff-chart-desc">
          <div className="hr-section-heading"><p className="eyebrow">Planning chart</p><h2 id="handoff-chart-title">{article.chart.title}</h2><p id="handoff-chart-desc">{article.chart.subtitle}</p></div>
          <svg viewBox="0 0 860 360" role="img" aria-labelledby="handoff-chart-title handoff-chart-desc">
            <line x1="210" y1="30" x2="210" y2="310" className="hr-chart-axis" />
            {[0, 10, 20, 30].map((tick) => <g key={tick}><line x1={210 + tick * 19} y1="30" x2={210 + tick * 19} y2="310" className="hr-chart-grid" /><text x={210 + tick * 19} y="336" textAnchor="middle" className="hr-chart-tick">Day {tick}</text></g>)}
            {article.chart.bars.map((bar, index) => <g key={bar.label} transform={`translate(0 ${48 + index * 67})`}><text x="195" y="20" textAnchor="end" className="hr-chart-label">{bar.label}</text><rect x="210" y="0" width={bar.value * 19} height="34" rx="8" className="hr-chart-bar" /><text x={bar.value === 30 ? 770 : 220 + bar.value * 19} y="22" textAnchor={bar.value === 30 ? 'end' : 'start'} className={`hr-chart-note ${bar.value === 30 ? 'hr-chart-note-inside' : ''}`}>{bar.note}</text></g>)}
          </svg>
          <figcaption>{article.chart.methods}</figcaption>
        </figure>}

        {article.banners?.[1] && <aside className="hr-article-banner hr-article-banner-alt" data-banner-slot="2"><div><p className="eyebrow">{article.banners[1].eyebrow}</p><h2>{article.banners[1].title}</h2><p>{article.banners[1].text}</p></div><a href={article.banners[1].href}>{article.banners[1].linkLabel}</a></aside>}

        <section className="hr-workflow" aria-labelledby="workflow-heading">
          <div className="hr-section-heading"><p className="eyebrow">Launch path</p><h2 id="workflow-heading">A five-step HR outsourcing workflow</h2></div>
          <ol>{article.workflow.map((item) => <li key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        </section>

        {article.graphic && <figure className="hr-svg-module hr-loop-graphic" tabIndex={0} aria-labelledby="handoff-loop-title handoff-loop-desc">
          <div className="hr-section-heading"><p className="eyebrow">Process graphic</p><h2 id="handoff-loop-title">{article.graphic.title}</h2><p id="handoff-loop-desc">{article.graphic.caption}</p></div>
          <svg viewBox="0 0 900 300" role="img" aria-labelledby="handoff-loop-title handoff-loop-desc">
            <path d="M145 150 H755" className="hr-loop-line" />
            {article.graphic.steps.map((step, index) => { const x = 145 + index * 203; return <g key={step.label}><circle cx={x} cy="150" r="62" className="hr-loop-node" /><text x={x} y="143" textAnchor="middle" className="hr-loop-label">{step.label}</text><text x={x} y="169" textAnchor="middle" className="hr-loop-detail">{step.detail}</text>{index < article.graphic!.steps.length - 1 && <path d={`M ${x + 86} 150 l -18 -10 v 20 z`} className="hr-loop-arrow" />}</g>})}
          </svg>
          <figcaption>{article.graphic.caption}</figcaption>
        </figure>}

        {article.sections.slice(5).map((section) => <section className="hr-prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

        {article.banners?.[2] && <aside className="hr-article-banner" data-banner-slot="3"><div><p className="eyebrow">{article.banners[2].eyebrow}</p><h2>{article.banners[2].title}</h2><p>{article.banners[2].text}</p></div><a href={article.banners[2].href}>{article.banners[2].linkLabel}</a></aside>}

        <section className="hr-faq" aria-labelledby="faq-heading">
          <p className="eyebrow">Buyer FAQ</p><h2 id="faq-heading">HR outsourcing questions</h2>
          <div>{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="hr-related" aria-labelledby="related-heading">
          <p className="eyebrow">Keep planning</p><h2 id="related-heading">Related HR guides and services</h2>
          <div>{article.related.map((link) => <a href={link.href} key={link.href}><strong>{link.title}</strong><span>{link.note}</span></a>)}</div>
        </section>

        <section className="hr-sources" aria-labelledby="sources-heading">
          <p className="eyebrow">Sources</p><h2 id="sources-heading">Source notes</h2>
          <ol>{article.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ol>
        </section>
      </article>
    </main>
    <Footer articleMode />
  </>;
}

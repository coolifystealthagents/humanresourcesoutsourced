import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const siteUrl = 'https://humanresourcesoutsourced.com';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.title || 'Service', description: s?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const path = `/services/${s.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${path}#webpage`,
        name: s.title,
        url: `${siteUrl}${path}`,
        description: s.desc,
        isPartOf: { '@type': 'WebSite', name: site.brand, url: siteUrl },
        mainEntity: { '@id': `${siteUrl}${path}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}${path}#service`,
        name: s.title,
        description: s.desc,
        provider: { '@type': 'Organization', name: site.brand, url: siteUrl },
        areaServed: 'United States',
        serviceType: s.title,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${s.title} work plan`,
          itemListElement: s.bestTasks.map((task, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: { '@type': 'Service', name: task },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${path}#faq`,
        mainEntity: s.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: s.title, item: `${siteUrl}${path}` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">HR admin support</p>
              <h1>{s.title}</h1>
              <p className="lead">{s.desc}</p>
              <a className="btn" href="/contact">Plan this HR role</a>
            </div>
            <div className="hero-card"><img src={site.serviceImage} alt={`Team planning ${s.title.toLowerCase()}`} /></div>
          </div>
        </section>
        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Best first tasks</h3>
              <ul>{s.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Quality controls</h3>
              <ul>{s.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card">
              <h3>First-week setup</h3>
              <ul>{s.firstWeek.map((step) => <li key={step}>{step}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Questions before you hire</p>
              <h2>Keep the HR owner in control.</h2>
              <p>Remote staff can prepare the admin work. Sensitive decisions stay with the person who owns the policy and the employee relationship.</p>
            </div>
            <div className="cards stacked">
              {s.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

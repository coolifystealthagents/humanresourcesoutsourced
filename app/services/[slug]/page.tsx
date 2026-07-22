import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { services, site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
const legacyServices = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  desc: service.desc,
  tasks: service.bestTasks,
  controls: service.controls,
  firstWeek: service.firstWeek
}));
const allServices = [...legacyServices, ...fleetServices];

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `/services/${slug}` }
  };
}

export default async function Service({ params }: Params) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;

  return <>
    <Header />
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        serviceType: 'Philippines-based HR administration staffing',
        url,
        areaServed: 'United States',
        provider: { '@type': 'Organization', name: site.brand, url: base }
      }} />
      <section className="fleet-hero variant-2">
        <div className="container">
          <p className="eyebrow">Philippines-based human resources support</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.desc}</p>
          <a className="btn primary" href="/contact">Discuss this service</a>
        </div>
      </section>
      <section className="section">
        <div className="container fleet-detail-grid">
          <div className="card"><h2>Work to include</h2><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="card"><h2>Controls to retain</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="card"><h2>First-week plan</h2><ul>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>;
}

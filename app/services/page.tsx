import { Header, Footer, CTA } from '../components';
import { fleetServices } from '../fleet-data';
import { services, site } from '../data';

export const metadata = { title: 'Services', description: `Explore Philippines-based ${site.primary} services.`, alternates: { canonical: `https://${site.domain.toLowerCase()}/services` } };

const allServices = [
  ...services.map((service) => ({ slug: service.slug, title: service.title, desc: service.desc })),
  ...fleetServices,
];

export default function Services() {
  return <>
    <Header />
    <main className="services-index">
      <section className="fleet-hero services-hero">
        <div className="container services-hero-grid">
          <div><p className="eyebrow">Philippines-based HR support</p><h1>One clear support lane for the work that keeps piling up.</h1><p className="lead">Choose a focused human resources workflow, then define its tools, schedule, approvals, and handoffs.</p><div className="actions"><a className="btn primary" href="/contact-us">Plan your support</a><a className="btn secondary" href="#service-options">Explore services</a></div></div>
          <aside className="services-hero-panel" aria-label="A controlled support model"><span>What every service plan defines</span><ul><li>Approved tasks and accepted examples</li><li>Systems, permissions, and working hours</li><li>Review owners and escalation triggers</li><li>Completion evidence and quality checks</li></ul></aside>
        </div>
      </section>
      <section className="services-proof"><div className="container"><span>Recruiting coordination</span><span>Employee administration</span><span>HR operations</span><span>Reporting and quality checks</span></div></section>
      <section className="section services-catalog" id="service-options">
        <div className="container">
          <div className="services-section-head"><div><p className="eyebrow">Explore support lanes</p><h2>Start with one repeatable workflow.</h2></div><p>Each service brief sets out the work, required inputs, quality controls, decision boundaries, and a practical first-week pilot.</p></div>
          <div className="fleet-service-grid">{allServices.map((service) => <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.desc}</p><b>View service <i aria-hidden="true">→</i></b></a>)}</div>
        </div>
      </section>
      <section className="services-method"><div className="container"><div><p className="eyebrow">How a role takes shape</p><h2>Scope first. Pilot second. Expand when the work is stable.</h2></div><ol><li><strong>Map the queue</strong><span>Choose the recurring work, systems, volume, and current blockers.</span></li><li><strong>Set boundaries</strong><span>Name permitted actions, required reviews, and immediate escalations.</span></li><li><strong>Calibrate the work</strong><span>Review a representative first batch and update the playbook.</span></li></ol></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}

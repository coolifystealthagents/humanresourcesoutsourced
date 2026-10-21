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
  firstWeek: service.firstWeek,
  faqs: service.faqs,
}));
const allServices = [...legacyServices, ...fleetServices.map((service) => ({ ...service, faqs: [] }))];

const serviceHeroes: Record<string, { src: string; alt: string }> = {
  'operations-support': { src: '/illustrations/getillustrations/hannah-business-illustrations-svg/hr-admin-support.svg', alt: 'HR operations coordinator organizing an employee administration workflow' },
  'customer-support': { src: '/blog-heroes/september14-hr-hr-inbox-sensitive-case-routing.svg', alt: 'HR support desk workflow for routing routine and sensitive employee requests' },
  'admin-support': { src: '/icons/getillustrations/sharpie-office-icons-svg/recruiting-calendar.svg', alt: 'Recruiting calendar used for candidate and interview coordination' },
  'reporting-and-qa': { src: '/research-heroes/hr-status-source-authority-matrix.png', alt: 'HR reporting source authority and quality review matrix' },
  'candidate-sourcing': { src: '/research-banners/hr-candidate-communication-approval.svg', alt: 'Candidate sourcing and approved communication workflow' },
  'interview-coordination': { src: '/research-banners/hr-recruiting-interview-feedback-integrity.svg', alt: 'Interview coordination and feedback integrity workflow' },
  'employee-records-administration': { src: '/research-banners/hr-employee-master-data-change-control.svg', alt: 'Employee records change control workflow' },
  'benefits-administration-support': { src: '/research-banners/hr-benefits-enrollment-document-control.svg', alt: 'Benefits enrollment document control workflow' },
  'payroll-preparation-support': { src: '/research-heroes/hr-payroll-input-reconciliation-evidence.png', alt: 'Payroll input reconciliation and approval evidence workflow' },
  'onboarding-coordination': { src: '/research-banners/hr-new-hire-identity-access-handoff.svg', alt: 'New hire identity and access handoff workflow' },
  'learning-administration': { src: '/research-banners/hr-training-completion-reconciliation.svg', alt: 'Training completion and learning administration reconciliation workflow' },
  'hr-help-desk-support': { src: '/research-heroes/hr-hr-support-handoff-resilience.png', alt: 'HR help desk handoff and escalation workflow' },
  'performance-review-administration': { src: '/blog-heroes/september14-hr-performance-review-reminder-exception.svg', alt: 'Performance review reminders and exception handling workflow' },
  'offboarding-coordination': { src: '/research-banners/hr-termination-checklist-evidence.svg', alt: 'Offboarding checklist and completion evidence workflow' },
};

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  return { title: service.title, description: service.desc, alternates: { canonical: `/services/${slug}` } };
}

export default async function Service({ params }: Params) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceHero = serviceHeroes[service.slug];
  const url = `${base}/services/${service.slug}`;
  const currentIndex = allServices.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map((offset) => allServices[(currentIndex + offset) % allServices.length]);
  const role = service.title.toLowerCase();
  const faqs = [
    ...service.faqs.map((faq) => [faq.question, faq.answer] as const),
    ['What should the first handoff include?', `Start ${role} with one recurring queue, representative examples, a finish condition, and a named reviewer.`] as const,
    ['What decisions stay with our team?', 'Policy, legal interpretation, compensation, employee relations, sensitive exceptions, and final approvals remain with the appropriate client owner.'] as const,
    ['How should access be controlled?', 'Use named accounts, minimum required permissions, multi-factor authentication where available, and a documented removal process.'] as const,
  ];

  return <>
    <Header />
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, serviceType: 'Philippines-based HR administration staffing', url, areaServed: 'United States', provider: { '@type': 'Organization', name: site.brand, url: base } }} />
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div><p className="eyebrow">Philippines-based human resources support</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><div className="actions"><a className="btn primary" href="/contact-us">Discuss this service</a><a className="btn secondary" href="#service-brief">Review the service brief</a></div></div>
          <figure className="service-hero-media"><img src={serviceHero.src} alt={serviceHero.alt} width="1200" height="800" loading="eager" /><figcaption>A practical view of the records, handoffs, and review points involved in {role}.</figcaption></figure>
        </div>
      </section>

      <div className="container service-longform" id="service-brief">
        <section className="service-intro"><p className="eyebrow">Who this service is for</p><h2>A bounded support lane for recurring {role} work</h2><p>This service fits HR and people-operations teams with repeatable administration, a stable source of truth, and an internal owner who can review exceptions. It is designed to move documented work forward without transferring employment judgment or policy authority.</p><p>Begin with one queue that has representative examples, visible completion evidence, and a reachable decision owner. That lets both teams learn the real exception patterns before scope expands.</p></section>

        <section className="service-scope-grid" aria-labelledby="scope-heading"><div><p className="eyebrow">Scope of work</p><h2 id="scope-heading">Work that can enter the support lane</h2><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Inputs and access</p><h2>What the team needs from you</h2><ul><li>Approved instructions and representative accepted examples</li><li>Named systems of record and minimum required permissions</li><li>Working hours, response targets, and escalation contacts</li><li>A reviewer who can resolve questions and approve changes</li></ul></div></section>

        <section className="service-workflow"><p className="eyebrow">Workflow and deliverables</p><h2>Turn each request into a reviewable handoff</h2><div className="service-flow"><article><h3>Intake and validate</h3><p>Confirm the request, required fields, source evidence, owner, and deadline before work begins.</p></article><article><h3>Prepare and document</h3><p>Complete the approved administrative steps, preserve source links, and record uncertainties instead of guessing.</p></article><article><h3>Review and release</h3><p>Route exceptions and required approvals to the named client owner, then retain the accepted completion signal.</p></article></div><h3>Expected deliverables</h3><p>A clean work queue, current status record, exception log, completion evidence, and concise handoff note give your HR owner enough context to approve work without reconstructing the history.</p></section>

        <section className="service-boundaries"><div><p className="eyebrow">Quality controls</p><h2>Checks before work is closed</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul><p>Review a small sample frequently during launch. Classify each correction by cause, update the written instruction, and expand volume only after repeat quality is stable.</p></div><div><p className="eyebrow">Human decision boundaries</p><h2>Keep judgment with accountable owners</h2><p>The support role can collect facts, prepare routine records, and make approved handoffs. Your HR, payroll, benefits, legal, security, or management owners retain decisions that affect employment terms, rights, privacy, policy, money, risk, or sensitive employee outcomes.</p></div></section>

        <section className="service-start"><p className="eyebrow">Common starting scenarios</p><h2>Use a small pilot to expose the real exceptions</h2><div className="service-flow">{service.firstWeek.map((item) => <article key={item}><h3>{item}</h3><p>Record the inputs, expected result, reviewer, and stop condition. Add any correction to the working playbook before the next batch.</p></article>)}</div></section>

        <section className="service-faq"><p className="eyebrow">Frequently asked questions</p><h2>{service.title} questions</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>

        <section className="service-related"><p className="eyebrow">Related services</p><h2>Compare adjacent HR support lanes</h2><div>{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><strong>{item.title}</strong><span>{item.desc}</span></a>)}</div></section>
      </div>
      <CTA />
    </main>
    <Footer />
  </>;
}

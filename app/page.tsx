import type { Metadata } from 'next';
import * as data from './data';
import { Footer, Header, JsonLd } from './components';

const { site, services, blogPosts } = data;

export const metadata: Metadata = {
  title: 'Outsourced HR Admin Support | Human Resources Outsourced',
  description: 'Plan outsourced HR admin help for onboarding paperwork, recruiting coordination, employee questions, and weekly quality checks.',
  alternates: { canonical: `https://${site.domain}` },
};

const deskLanes = [
  'Onboarding admin',
  'Recruiting calendars',
  'Employee support',
  'Weekly HR checks',
];

const launchSteps = [
  ['01', 'Pick the busy desk', 'Choose one repeat area such as onboarding files, interview scheduling, or the HR inbox.'],
  ['02', 'Set the red lines', 'Write down what the assistant may send, what needs review, and what must stay with your HR owner.'],
  ['03', 'Review real work', 'Check the first batch together, fix the instructions, then add work only when the basics stay clean.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${site.domain}/#webpage`,
    url: `https://${site.domain}`,
    name: 'Outsourced HR admin support',
    description: 'HR admin staffing plans for onboarding, recruiting coordination, employee support, and reporting checks.',
    mainEntity: {
      '@type': 'Service',
      name: 'Outsourced HR admin support',
      provider: { '@type': 'Organization', name: site.brand, url: `https://${site.domain}` },
      areaServed: 'United States',
      serviceType: 'Human resources administrative support',
    },
  };

  return (
    <>
      <Header />
      <main className="hr-handled-home" data-redesign="hr-desk-2026">
        <JsonLd data={schema} />

        <section className="hr-hero">
          <div className="container hr-hero-grid">
            <div className="hr-hero-copy">
              <p className="hr-kicker">A steadier people desk</p>
              <h1>HR admin, handled with care.</h1>
              <ul className="hr-hero-list">
                <li>Keep onboarding files and checklists moving.</li>
                <li>Give employee questions a clear owner.</li>
                <li>Stop hiring calendars from going quiet.</li>
              </ul>
              <a className="hr-button" href="/contact">Plan my HR support</a>
              <p className="hr-button-note">Clear task limits. Human review. No public rate card.</p>
            </div>

            <div className="hr-photo-stage">
              <div className="hr-photo-frame">
                <img src="/hr-team.jpg" alt="HR team reviewing an employee onboarding plan together" />
              </div>
              <div className="hr-photo-note">
                <span>First desk to fix</span>
                <strong>Onboarding</strong>
                <small>Files · dates · owner checks</small>
              </div>
            </div>
          </div>
          <div className="container hr-lane-strip" aria-label="HR support areas">
            {deskLanes.map((lane, index) => <span key={lane}><b>0{index + 1}</b>{lane}</span>)}
          </div>
        </section>

        <section className="container hr-section" id="tasks">
          <div className="hr-section-head">
            <p className="hr-kicker">Choose one desk first</p>
            <h2>Start where small delays pile up.</h2>
            <p>An assistant can keep the admin moving. Your HR lead still owns policy, pay, discipline, investigations, and sensitive employee decisions.</p>
          </div>
          <div className="hr-service-grid">
            {services.map((service, index) => (
              <a className="hr-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span className="hr-card-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <strong>See tasks and checks</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="hr-boundary">
          <div className="container hr-boundary-grid">
            <div>
              <p className="hr-kicker">The decision line</p>
              <h2>Admin help should not become hidden HR risk.</h2>
              <p>Give the assistant good examples, limited access, and a named person for hard questions. If a message affects pay, policy, health, discipline, or a job decision, it goes to the HR owner.</p>
              <a href="/services/operations-support">See the HR operations plan</a>
            </div>
            <div className="hr-boundary-board">
              <article>
                <span>Assistant can prepare</span>
                <ul>
                  <li>Missing-file lists</li>
                  <li>Interview reminders</li>
                  <li>Approved answer drafts</li>
                  <li>Weekly open-item notes</li>
                </ul>
              </article>
              <article>
                <span>HR owner decides</span>
                <ul>
                  <li>Pay and benefits changes</li>
                  <li>Policy exceptions</li>
                  <li>Employee relations issues</li>
                  <li>Offers and terminations</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="container hr-section hr-launch">
          <div className="hr-section-head hr-section-head-short">
            <p className="hr-kicker">A careful start</p>
            <h2>Three steps before the inbox goes live.</h2>
          </div>
          <div className="hr-step-grid">
            {launchSteps.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hr-reading">
          <div className="container hr-reading-grid">
            <div>
              <p className="hr-kicker">Read before you hire</p>
              <h2>Plain guides for a safer handoff.</h2>
              <a className="hr-text-link" href="/blog">View all HR guides</a>
            </div>
            <div className="hr-guide-list">
              {blogPosts.slice(0, 3).map((post, index) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>Guide 0{index + 1}</span>
                  <strong>{post.title.replace('Human Resources Outsourced: ', '')}</strong>
                  <small>{post.minutes} minute read</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container hr-final">
          <div>
            <p className="hr-kicker">Bring the messy list</p>
            <h2>Turn repeat HR admin into one clear support role.</h2>
          </div>
          <a className="hr-button" href="/contact">Plan my HR support</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
  ['Pick the busy desk', 'Choose one repeat area such as onboarding files, interview scheduling, or the HR inbox.'],
  ['Set the red lines', 'Write down what the assistant may send, what needs review, and what must stay with your HR owner.'],
  ['Review real work', 'Check the first batch together, fix the instructions, then add work only when the basics stay clean.'],
];
const hrIcons = [
  '/icons/getillustrations/sharpie-office-icons-svg/onboarding-checklist.svg',
  '/icons/getillustrations/sharpie-office-icons-svg/employee-files.svg',
  '/icons/getillustrations/sharpie-office-icons-svg/recruiting-calendar.svg',
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
      <main className="hr-handled-home" data-redesign="hr-desk-2026" data-gi-rollout="two-illustration-packs-one-icon-pack">
        <JsonLd data={schema} />

        <section className="hr-hero">
          <div className="container hr-hero-grid">
            <div className="hr-hero-copy">
              <p className="hr-kicker">A steadier people desk</p>
              <h1>HR admin, handled with care.</h1>
              <ul className="hr-hero-list">
                <li><img src={hrIcons[0]} alt="Onboarding checklist icon" width="28" height="28" /> Keep onboarding files and checklists moving.</li>
                <li><img src={hrIcons[1]} alt="Employee records icon" width="28" height="28" /> Give employee questions a clear owner.</li>
                <li><img src={hrIcons[2]} alt="Recruiting calendar icon" width="28" height="28" /> Stop hiring calendars from going quiet.</li>
              </ul>
              <a className="hr-button" href="/contact-us" id="cta-page-action-1">Plan my HR support</a>
              <p className="hr-button-note">Start with clear task limits and a named reviewer.</p>
              <div className="hr-hero-proof" aria-label="Service principles"><span>Philippines-based talent</span><span>Defined access</span><span>Owner-reviewed work</span></div>
            </div>

            <figure className="hr-photo-stage">
              <div className="hr-photo-frame">
                <img
                  src="/stealth-agents-team-bacolod.jpg"
                  alt="Stealth Agents team together outside Bacolod City Government Center"
                  width="953"
                  height="540"
                  fetchPriority="high"
                />
              </div>
              <figcaption>Real people supporting carefully scoped HR administration.</figcaption>
            </figure>
          </div>
          <div className="container hr-lane-strip" aria-label="HR support areas">
            {deskLanes.map((lane) => <span key={lane}>{lane}</span>)}
          </div>
        </section>

        <section className="container hr-section" id="tasks">
          <div className="hr-section-head">
            <p className="hr-kicker">Choose one desk first</p>
            <h2>Start where small delays pile up.</h2>
            <p>An assistant can keep the admin moving. Your HR lead still owns policy, pay, discipline, investigations, and sensitive employee decisions.</p>
          </div>
          <div className="hr-service-grid">
            {services.map((service) => (
              <a id={`cta-home-services-open-${service.slug}`} className="hr-service-card" href={`/services/${service.slug}`} key={service.slug}>
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
              <img src="/illustrations/getillustrations/inkdex-team-illustrations-svg/employee-files-workflow.svg" alt="Employee files workflow prepared for review" style={{ width: '100%', maxHeight: 220, objectFit: 'contain', gridColumn: '1 / -1' }} loading="lazy" />
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

        <section className="hr-results" aria-labelledby="results-title">
          <div className="container">
            <div className="hr-section-head">
              <div><p className="hr-kicker">A more dependable workflow</p><h2 id="results-title">Create capacity without losing control.</h2></div>
              <p>Move recurring coordination into a documented support lane while your internal owners keep decisions, approvals, and sensitive conversations.</p>
            </div>
            <div className="hr-results-grid">
              <article><strong>01</strong><h3>One visible queue</h3><p>Give repeat requests a clear status, due date, and accountable owner.</p></article>
              <article><strong>02</strong><h3>Fewer loose handoffs</h3><p>Use accepted examples and completion evidence instead of relying on memory.</p></article>
              <article><strong>03</strong><h3>Escalation by design</h3><p>Route policy, pay, privacy, and employee-relations questions to qualified owners.</p></article>
            </div>
          </div>
        </section>

        <section className="container hr-section hr-launch">
          <div className="hr-section-head hr-section-head-short">
            <p className="hr-kicker">A careful start</p>
            <h2>Three steps before the inbox goes live.</h2>
          </div>
          <div className="hr-step-grid">
            {launchSteps.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hr-industries" aria-labelledby="industries-title">
          <div className="container hr-industries-grid">
            <div><p className="hr-kicker">Built around your operating model</p><h2 id="industries-title">Support for teams where people operations cannot pause.</h2><p>The role is shaped around your systems and approval structure, not a generic HR playbook.</p></div>
            <div className="hr-industry-list"><span>Professional services</span><span>Healthcare administration</span><span>Technology teams</span><span>Multi-location operations</span><span>Ecommerce and retail</span><span>Growing small businesses</span></div>
          </div>
        </section>

        <section className="container hr-team" aria-labelledby="team-title">
          <div className="hr-team-photo"><img src="/stealth-agents-team-bacolod.jpg" alt="Stealth Agents team together outside Bacolod City Government Center" loading="lazy" /></div>
          <div><p className="hr-kicker">The team behind the support</p><h2 id="team-title">People-supported work, with a clear operating rhythm.</h2><p>Stealth Agents provides the Philippines-based staffing team behind the consultation. Human Resources Outsourced helps you define a practical lane for repeat administration, review, and escalation.</p><a className="hr-text-link" href="/contact-us">Meet with a staffing specialist</a></div>
        </section>

        <section className="hr-reading">
          <div className="container hr-reading-grid">
            <div>
              <p className="hr-kicker">Read before you hire</p>
              <h2>Plain guides for a safer handoff.</h2>
              <a className="hr-text-link" href="/blog" id="cta-page-action-2">View all HR guides</a>
            </div>
            <div className="hr-guide-list">
              {blogPosts.slice(0, 3).map((post) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>Practical guide</span>
                  <strong>{post.title.replace('Human Resources Outsourced: ', '')}</strong>
                  <small>{post.minutes} minute read</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container hr-faq" aria-labelledby="home-faq-title">
          <div><p className="hr-kicker">Frequently asked questions</p><h2 id="home-faq-title">Start with a well-bounded role.</h2></div>
          <div>
            <details><summary>What HR work can be outsourced?</summary><p>Repeatable coordination and administration can be scoped for support, including onboarding checklists, recruiting calendars, employee request routing, records checks, and reporting preparation.</p></details>
            <details><summary>Does the support team make employee decisions?</summary><p>No. Policy, compensation, legal interpretation, employee relations, investigations, and final employment decisions remain with your qualified internal owners.</p></details>
            <details><summary>How should a team begin?</summary><p>Choose one recurring queue, document accepted examples and stop conditions, limit access to what the role needs, and review the first work together.</p></details>
          </div>
        </section>

        <section className="container hr-final">
          <div>
            <p className="hr-kicker">Bring the messy list</p>
            <h2>Turn repeat HR admin into one clear support role.</h2>
          </div>
          <a className="hr-button" href="/contact-us" id="cta-page-action-3">Plan my HR support</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

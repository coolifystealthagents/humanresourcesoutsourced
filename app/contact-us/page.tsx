import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: 'Plan Your HR Support | Human Resources Outsourced',
  description: 'Describe the HR workflow, systems, schedule, and approval boundaries you want a Philippines-based virtual assistant to support.'
};

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="contact-page variant-2">
      <section className="fleet-hero">
        <div className="container contact-hero-grid">
          <div>
            <p className="eyebrow">Plan Philippines-based HR support</p>
            <h1>Plan your HR support around one real workflow</h1>
            <p className="lead">Tell us which recurring HR administration queue needs help, which systems it uses, and which decisions must stay with your company. We’ll use those details to prepare a focused staffing conversation.</p>
            <a className="btn primary" href="#contact-intake">Plan my HR support</a>
          </div>
          <aside className="contact-inclusions" aria-labelledby="planning-checklist-title">
            <h2 id="planning-checklist-title">Bring these four details</h2>
            <ul>
              <li>The recurring task and expected output</li>
              <li>The tools and working-hour overlap</li>
              <li>The company owner for approvals</li>
              <li>A redacted routine example and exception</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="section" id="contact-intake" aria-labelledby="contact-intake-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Staffing intake</p>
            <h2 id="contact-intake-title">Describe the role you want to build</h2>
            <p>Do not include employee, candidate, payroll, medical, or other sensitive personal data. A workflow summary is enough for the first conversation.</p>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

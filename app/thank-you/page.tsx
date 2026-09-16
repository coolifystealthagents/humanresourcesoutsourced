import type { Metadata } from 'next';
import { Header, Footer } from '../components';

const bookingUrl = 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1';

export const metadata: Metadata = {
  title: 'Request Received — Choose a Meeting Time',
  description: 'Choose a convenient time to discuss your HR support workflow.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="sa-booking-page">
        <div className="container sa-booking-grid">
          <div className="sa-booking-left">
            <p className="sa-booking-kicker">Your request was received.</p>
            <h1>Choose a time to review your HR workflow</h1>
            <p className="sa-booking-lead">The meeting will focus on the tasks, systems, schedule, review owner, and approval boundaries you submitted.</p>
            <section className="card" aria-labelledby="meeting-preparation-title">
              <h2 id="meeting-preparation-title">Prepare for the conversation</h2>
              <ul>
                <li>Bring one redacted routine work example.</li>
                <li>Identify the company owner for decisions and exceptions.</li>
                <li>List the tools and working-hour overlap the role needs.</li>
                <li>Keep employee, candidate, payroll, and medical data out of the example.</li>
              </ul>
            </section>
          </div>
          <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title" data-acr-track="contact-booking-iframe">
            <h2 id="booking-calendar-title">Pick a time that works for you</h2>
            <p>If the embedded calendar does not appear, open the scheduler directly or return to the contact-planning page.</p>
            <div className="sa-booking-actions">
              <a className="btn primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open scheduler in a new tab</a>
              <a className="sa-booking-contact-fallback" href="/contact-us">Return to contact planning</a>
            </div>
            <iframe
              src={bookingUrl}
              id="SOI_StealthAgentsTeam"
              name="ScheduleOnceIframe"
              title="Schedule a meeting with Stealth Agents"
              scrolling="yes"
              frameBorder="0"
              height="850"
              width="100%"
              className="sa-oncehub-frame"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

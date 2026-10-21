import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Consultation Booked",
  description: "Confirmation that your HR support consultation is booked.",
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return (
    <>
      <Header />
      <main className="booking-confirmation">
        <div className="booking-confirmation-card">
          <img src="/logo.svg" alt="Human Resources Outsourced logo" />
          <p className="eyebrow">Booking confirmed</p>
          <h1>Your consultation is booked.</h1>
          <p>Thank you. We will use the scheduled conversation to understand the work, systems, hours, and approval boundaries your team needs.</p>
          <h2>What to have ready</h2>
          <ul>
            <li>A short list of recurring HR administration tasks</li>
            <li>The tools and records involved in the workflow</li>
            <li>The people who approve decisions and exceptions</li>
          </ul>
          <a className="btn primary" href="/">Return home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}

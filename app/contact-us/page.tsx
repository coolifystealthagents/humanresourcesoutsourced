import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { site } from "../data";
import { ReviewsMarquee } from "../reviews";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";

const pageUrl = "https://humanresourcesoutsourced.com/contact-us";

export const metadata: Metadata = {
  title: "Contact Us | Free Consultation",
  description: "Discuss outsourced HR support built around clear scope, privacy boundaries, owner approvals, and reliable handoffs.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

const prep = [
  "The recurring HR administration or recruiting work you want to hand off",
  "The systems, records, hours, and access boundaries involved",
  "The people who own decisions, sensitive topics, and final review",
];

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={`${styles.firstFold} contact-first-fold`} aria-labelledby="contact-title">
          <div className={styles.firstFoldGrid}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>A practical first conversation</p>
              <h1 id="contact-title">Build a clearer handoff for recurring HR work.</h1>
              <p className={styles.lead}>Tell us where administration, recruiting coordination, or employee support is slowing down. We will focus the conversation on your workflow, access boundaries, and review owners.</p>
              <ul className={styles.checks}>
                {prep.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className={styles.reassurance}>No sensitive employee or candidate information is needed. A redacted workflow example is enough to begin.</p>
              <a className={styles.firstFoldLink} href="#consultation-form">Plan my HR support</a>
              <ReviewsMarquee />
            </div>
            <div className={styles.formWrap} id="consultation-form">
              <StandardContactForm endpoint="/api/contact" encoding="form" />
            </div>
          </div>
        </section>
        <section className={styles.officialTeam} aria-labelledby="official-team-title">
          <div className={styles.teamGrid}>
            <div className={styles.teamPhotoWrap}>
              <img className={styles.teamPhoto} src="/stealth-agents-team-bacolod.jpg" alt="Stealth Agents team in Bacolod" />
              <span>Official team, Bacolod</span>
            </div>
            <div className={styles.teamCopy}>
              <img className={styles.parentLogo} src="/stealth-agents-logo.png" alt="Stealth Agents" />
              <p className={styles.kicker}>Official team, Bacolod</p>
              <h2 id="official-team-title">Managed support with a defined operating rhythm</h2>
              <p>Stealth Agents provides the staffing team behind the consultation. The managed-service approach starts by documenting the role, working hours, tools, access limits, review owner, and escalation path.</p>
              <p>Your organization keeps authority over policy, employee relations, compensation, legal interpretation, and other sensitive decisions. The support role can then focus on the repeatable coordination and administration you approve.</p>
              <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Visit the official Stealth Agents website</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

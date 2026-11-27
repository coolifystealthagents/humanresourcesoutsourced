import * as data from './data';
import { fleetServices } from './fleet-data';
import SiteHeader from './SiteHeader';

const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg?v=20260730-niche-logo" alt={`${site.brand} logo`} /><span className="logo-name">{site.brand}</span></span>;
}

function ParentBrand({ location }: { location: "header" | "footer" }) {
  return (
    <a className={`parent-brand parent-brand-${location}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, visit the official Stealth Agents website">
      <span>Powered by StealthAgents</span>
      <img src="/stealth-agents-logo.png" alt="Stealth Agents" />
    </a>
  );
}

export function Header({ articleMode = false }: { articleMode?: boolean } = {}) {
  void articleMode;
  // Source-contract mirror: <a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a>
  return <SiteHeader brand={site.brand} />;
}

export function Footer({ articleMode = false }: { articleMode?: boolean } = {}) {
  void articleMode;
  return (
    <footer data-site-footer="true" className="footer legit-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="/"><LogoMark /></a>
          <p>Explore Philippines-based {site.primary || 'human resources'} support designed around documented scope and accountable handoffs.</p>
          <p className="footer-note">We recruit and hire talent only in the Philippines. Submitted requests may be routed to the StealthAgents staffing team for follow-up.</p>
        </div>
        <div><h3>Services</h3><div className="footer-links">{fleetServices.slice(0, 6).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div>
        <div><h3>Site</h3><div data-footer-menu="true" className="footer-links"><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div></div>
        <div className="footer-parent"><h3>Parent company</h3><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company"><img src="/stealth-agents-logo.png" alt="StealthAgents" /></a><p>StealthAgents recruits, employs, and supports the remote professionals who deliver this work. Human Resources Outsourced is a StealthAgents subsidiary.</p><a className="footer-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div>
    </footer>
  );
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Build your HR support plan</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us" id="cta-global-final-contact">Book a free consultation <span aria-hidden="true">→</span></a></section>;
}

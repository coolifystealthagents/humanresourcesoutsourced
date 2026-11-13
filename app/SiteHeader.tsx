"use client";

import { useEffect, useState } from "react";

type Props = { brand: string };

export default function SiteHeader({ brand }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="nav site-header">
        <div className="nav-inner">
          <a className="logo" href="/" aria-label={`${brand} home`} onClick={() => setOpen(false)}>
            <span className="logo-mark-wrap">
              <img className="logo-img" src="/logo.svg?v=20260730-niche-logo" alt={`${brand} logo`} />
              <span className="logo-name">{brand}</span>
            </span>
          </a>
          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
            <span className="nav-toggle-label">Menu</span>
            <span className="nav-toggle-bars" aria-hidden="true"><i /><i /><i /></span>
          </button>
          <nav className={`links fleet-nav ${open ? "is-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/services" onClick={() => setOpen(false)}>Services</a>
            <a href="/contact-us" className="header-contact" id="cta-global-header-contact" onClick={() => setOpen(false)}>Contact Us</a>
          </nav>
        </div>
      </header>
      <span className="skip-target" id="main-content" tabIndex={-1} />
    </>
  );
}

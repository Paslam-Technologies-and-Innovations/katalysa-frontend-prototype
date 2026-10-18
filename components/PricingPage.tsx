"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { pricingPlans } from "@/lib/pricing";

export default function PricingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="marketing-site pricing-page">
      <header className="marketing-header">
        <Link className="marketing-brand" href="/#home" aria-label="Katalysa home" onClick={closeMenu}>
          <span className="marketing-brand-mark"><Image src="/katalysa-logo.png" alt="" width={30} height={30} /></span>
          <span>Katalysa<span className="brand-period">.</span></span>
        </Link>
        <button className="marketing-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`marketing-nav${menuOpen ? " marketing-nav-open" : ""}`} aria-label="Main navigation">
          <Link href="/#home" onClick={closeMenu}>Home</Link>
          <Link href="/#features" onClick={closeMenu}>Features</Link>
          <Link href="/pricing" aria-current="page" onClick={closeMenu}>Pricing</Link>
          <Link href="/#how-it-works" onClick={closeMenu}>How it works</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/#faq" onClick={closeMenu}>FAQs</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <div className="marketing-header-actions">
          <Link className="marketing-login" href="/login">Sign in</Link>
          <Link className="button button-outline marketing-book" href="/#contact">Book a demo <ArrowRight size={14} /></Link>
          <Link className="button button-primary marketing-get-started" href="/register">Get started <ArrowRight size={16} /></Link>
        </div>
      </header>

      <section className="marketing-pricing marketing-section" id="pricing">
        <div className="marketing-section-heading">
          <span className="marketing-eyebrow">STRAIGHTFORWARD SCHOOL PRICING</span>
          <h1>Choose a plan that fits <em>your school.</em></h1>
          <p>Annual and per-term options, organised by student enrolment.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <article className="pricing-card" key={plan.name}>
              <div className="pricing-card-top"><span className="pricing-tier-label">{plan.group ?? (index === 5 ? "For larger school communities" : "School plan")}</span></div>
              <h2 className="pricing-name">{plan.name}</h2>
              <p className="pricing-students">{plan.students}</p>
              <div className="pricing-amount"><strong>{plan.year}</strong><span>{plan.year === "Custom pricing" ? "" : "per year"}</span></div>
              <div className="pricing-term"><span>Or pay per term</span><strong>{plan.term}</strong></div>
              <p className="pricing-plan-note">{plan.year === "Custom pricing" ? "Pricing tailored to your school’s size and requirements." : "Choose the billing schedule that works for your school."}</p>
              <Link className="pricing-link" href="/#contact">{plan.year === "Custom pricing" ? "Discuss your school" : "Talk about this plan"}<ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
        <small className="pricing-note">Pricing shown as supplied by Katalysa. Confirm final plan details with the school before purchase.</small>
      </section>

      <footer className="marketing-footer">
        <Link className="marketing-brand" href="/#home"><span className="marketing-brand-mark"><Image src="/katalysa-logo.png" alt="" width={26} height={26} /></span><span>Katalysa<span className="brand-period">.</span></span></Link>
        <p>School records, fees, academic results, and family updates in one workspace.</p>
        <nav aria-label="Footer navigation"><Link href="/#features">Features</Link><Link href="/#faq">FAQs</Link><Link href="/#contact">Book a demo</Link></nav>
        <small>© 2026 Katalysa. Designed for Nigerian schools.</small>
      </footer>
    </main>
  );
}

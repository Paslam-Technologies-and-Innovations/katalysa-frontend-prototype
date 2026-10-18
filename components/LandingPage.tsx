"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  ClipboardCheck, GraduationCap, Menu, MessageSquareText, Sparkles,
  Users, Wallet, X,
} from "lucide-react";
import RoadmapContent from "@/components/RoadmapContent";

const productAreas = [
  { icon: Users, title: "Student records", detail: "Keep admission details, class placement, and family contacts organised." },
  { icon: Wallet, title: "School fees", detail: "Set class fees, record payments, and see balances clearly." },
  { icon: ClipboardCheck, title: "Results and reports", detail: "Enter scores, review progress, and prepare report cards." },
  { icon: GraduationCap, title: "Teacher workspace", detail: "Manage staff profiles, class assignments, and academic work." },
  { icon: MessageSquareText, title: "Parent communication", detail: "Share school announcements and useful updates with families." },
  { icon: BookOpen, title: "School administration", detail: "Bring classes, academic terms, subjects, and school settings together." },
];

const faqs = [
  { question: "What is Katalysa?", answer: "Katalysa is a school-management platform being designed to bring student records, fees, academic results, and parent communication into one clearer workspace." },
  { question: "Who is Katalysa for?", answer: "Private schools in Nigeria, including school owners, administrators, teachers, and parents." },
  { question: "Can I book a demonstration?", answer: "Yes. Use the enquiry form and let us know your school and the areas you would like to see. This page is a prototype, so it prepares the enquiry locally and does not send it." },
  { question: "Is every feature available now?", answer: "The product is being built in stages. The Upcoming features section shows the capabilities planned for later releases." },
];

export default function LandingPage({ onLogin, onDashboard }: { onLogin: () => void; onDashboard?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="marketing-site">
      <header className="marketing-header">
        <Link className="marketing-brand" href="#home" onClick={closeMenu} aria-label="Katalysa home">
          <span className="marketing-brand-mark"><Sparkles size={18} /></span>
          <span>Katalysa<span className="brand-period">.</span></span>
        </Link>
        <button className="marketing-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`marketing-nav${menuOpen ? " marketing-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#features" onClick={closeMenu}>Platform</a>
          <a href="#how-it-works" onClick={closeMenu}>Why Katalysa</a>
          <a href="#roadmap" onClick={closeMenu}>Upcoming features</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="marketing-contact-link" href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="marketing-header-actions">
          <button className="marketing-login" onClick={onDashboard ?? onLogin}>{onDashboard ? "Open dashboard" : "Sign in"}</button>
          <a className="button button-primary marketing-book" href="#contact">Book a demo <ArrowRight size={16} /></a>
        </div>
      </header>

      <section className="marketing-hero" id="home">
        <div className="marketing-hero-copy">
          <span className="marketing-eyebrow"><span /> SCHOOL MANAGEMENT FOR NIGERIAN SCHOOLS</span>
          <h1>Your school.<br /><span>One clearer system.</span></h1>
          <p>Bring student records, school fees, results, and family updates into one connected workspace, designed around the way Nigerian schools work.</p>
          <div className="marketing-hero-actions">
            <a className="button button-primary" href="#contact">Bring Katalysa to your school <ArrowRight size={16} /></a>
            <a className="marketing-text-cta" href="#features">Explore the platform <ArrowDown size={15} /></a>
          </div>
          <div className="marketing-trust-row"><span className="trust-avatars"><i>A</i><i>T</i><i>S</i></span><span>For school teams, teachers, and families</span></div>
        </div>
        <div className="marketing-visual" aria-label="Illustration of a school dashboard">
          <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
          <div className="hero-dashboard">
            <div className="hero-dash-sidebar"><span className="hero-dash-logo"><Sparkles size={15}/></span><span className="hero-dash-active"/><i/><i/><i/><i/><i/></div>
            <div className="hero-dash-main">
              <div className="hero-dash-top"><span>Bloomfield Academy <b>›</b> Overview</span><span className="hero-dash-avatar">AO</span></div>
              <div className="hero-dash-greeting"><small>YOUR SCHOOL AT A GLANCE</small><strong>Good morning, Amara <span>✦</span></strong><span>A little more clarity for the day ahead.</span></div>
              <div className="hero-metric-grid">
                <div><small>Students</small><strong>248</strong><span>↑ 12% this year</span></div>
                <div><small>Teaching staff</small><strong>32</strong><span>Ready to teach</span></div>
                <div><small>Fees collected</small><strong>₦18.4m</strong><span>77% of term target</span></div>
              </div>
              <div className="hero-dash-panels">
                <div className="hero-mini-panel"><div><strong>Fee collection</strong><small>Second term · 2025/2026</small></div><b>77%</b><span className="hero-progress"><i /></span><small>₦18.4m collected of ₦24m</small></div>
                <div className="hero-mini-panel hero-activity-panel"><strong>Recent activity</strong><small><i className="activity-dot mint"/> Fee payment recorded <b>₦185,000</b></small><small><i className="activity-dot violet"/> New student enrolled <b>Primary 4</b></small><small><i className="activity-dot peach"/> Results submitted <b>JSS 2A</b></small></div>
              </div>
            </div>
          </div>
          <div className="hero-floating-card"><span><Check size={15}/></span><div><strong>Everything in view</strong><small>One calmer school day</small></div></div>
          <div className="hero-school-note"><span><Users size={16}/></span>Made for school communities</div>
        </div>
      </section>

      <section className="marketing-proof-strip" aria-label="Katalysa platform highlights">
        <span>LESS ADMIN OVERLOAD</span><i/><span>CLEARER SCHOOL RECORDS</span><i/><span>BETTER FAMILY CONNECTIONS</span><i/><span>BUILT FOR NIGERIA</span>
      </section>

      <section className="marketing-section marketing-features" id="features">
        <div className="marketing-section-heading"><span className="marketing-eyebrow">ONE CONNECTED SCHOOL</span><h2>Everything important,<br /><em>in one place.</em></h2><p>Spend less time moving between lists, messages, and spreadsheets. Give your school team a shared view of the work that matters.</p></div>
        <div className="product-area-grid">{productAreas.map(({ icon: Icon, title, detail }, index) => <article className="product-area-card" key={title}><span className={`product-area-icon tone-${index % 4}`}><Icon size={20}/></span><span className="product-area-index">0{index + 1}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="product-area-arrow" size={17}/></article>)}</div>
      </section>

      <section className="marketing-story" id="how-it-works">
        <div className="story-visual"><div className="story-glow"/><div className="story-paper story-paper-back"><span>School operations</span><i/><i/><i/></div><div className="story-paper"><small>ONE SCHOOL WORKSPACE</small><strong>People, progress,<br />and payments.</strong><p>Make the everyday easier to follow.</p><div className="story-paper-tags"><span>Records</span><span>Results</span><span>Fees</span></div></div><span className="story-spark story-spark-one">✦</span><span className="story-spark story-spark-two">✦</span></div>
        <div className="story-copy"><span className="marketing-eyebrow">DESIGNED FOR REAL SCHOOL DAYS</span><h2>A clearer view of your school, <em>without the extra complexity.</em></h2><p>School teams balance people, paperwork, payments, and communication every day. Katalysa is being built to bring those essential tasks into an organised, connected workflow.</p><ul><li><span><Check size={14}/></span><div><strong>Keep key information connected</strong><small>Make the records your team needs easier to find.</small></div></li><li><span><Check size={14}/></span><div><strong>Simplify everyday administration</strong><small>Spend less time coordinating work across separate tools.</small></div></li><li><span><Check size={14}/></span><div><strong>Help families stay informed</strong><small>Give parents a dedicated place for important school updates.</small></div></li></ul><a className="marketing-inline-link" href="#contact">Let’s talk about your school <ArrowRight size={15}/></a></div>
      </section>

      <section className="marketing-roadmap" id="roadmap">
        <div className="roadmap-heading"><div><span className="marketing-eyebrow">WHAT WE’RE BUILDING NEXT</span><h2>More support for every<br /><em>part of school life.</em></h2><p>Here is the roadmap shared by the Katalysa team. Planned features are not available in the current prototype.</p></div><span className="roadmap-heading-mark"><Sparkles size={24}/></span></div>
        <RoadmapContent compact />
      </section>

      <section className="marketing-about" id="about"><div className="about-kicker"><span>01</span> MADE FOR NIGERIAN SCHOOLS</div><h2>A better way forward<br />starts with <em>more clarity.</em></h2><p>Katalysa is for private schools that want a more connected way to manage administration, academic records, and communication with families.</p><a href="#contact" className="button button-light">Let’s get to know your school <ArrowRight size={16}/></a><div className="about-star about-star-a">✦</div><div className="about-star about-star-b">✳</div></section>

      <section className="marketing-faq marketing-section" id="faq"><div className="marketing-section-heading"><span className="marketing-eyebrow">GOOD TO KNOW</span><h2>Questions,<br /><em>answered.</em></h2><p>A few things school teams may want to know about Katalysa.</p></div><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<ChevronDown size={17}/></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="marketing-contact" id="contact"><div className="contact-copy"><span className="marketing-eyebrow">LET’S CONNECT</span><h2>Your school’s next chapter starts with <em>a conversation.</em></h2><p>Tell us a little about your school and what you would like to explore. We would love to learn what your team needs.</p><div className="contact-promise"><span><Sparkles size={17}/></span><div><strong>Schools. Teachers. Families.</strong><small>One more connected experience.</small></div></div></div><form className="contact-form" onSubmit={submitEnquiry}><div className="contact-form-heading"><strong>Book a demo</strong><span>Tell us about your school</span></div><label>Your name<input name="name" autoComplete="name" required placeholder="e.g. Amara Okafor" onChange={() => setSubmitted(false)} /></label><label>School name<input name="school" autoComplete="organization" required placeholder="e.g. Bloomfield Academy" onChange={() => setSubmitted(false)} /></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@school.com" onChange={() => setSubmitted(false)} /></label><label>Your role<select name="role" defaultValue=""><option value="" disabled>Choose a role</option><option>School owner / proprietor</option><option>School administrator</option><option>Teacher</option><option>Parent</option><option>Other</option></select></label><label>What would you like to see?<textarea name="message" rows={3} placeholder="Tell us what you would like to explore…" onChange={() => setSubmitted(false)} /></label><button className="button button-primary" type="submit">Prepare demo enquiry <ArrowRight size={16}/></button>{submitted ? <p className="contact-form-status" role="status"><Check size={14}/> Your enquiry is ready. This prototype does not send it anywhere.</p> : <small className="contact-form-note">Prototype form · Nothing is sent or stored.</small>}</form></section>

      <footer className="marketing-footer"><Link className="marketing-brand" href="#home"><span className="marketing-brand-mark"><Sparkles size={16}/></span><span>Katalysa<span className="brand-period">.</span></span></Link><p>Making school management clearer, so school communities can focus on what matters most.</p><nav aria-label="Footer navigation"><a href="#features">Platform</a><a href="#roadmap">Upcoming features</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></nav><small>© 2026 Katalysa. Designed for Nigerian schools.</small></footer>
    </main>
  );
}

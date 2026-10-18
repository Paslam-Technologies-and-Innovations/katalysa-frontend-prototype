"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  ClipboardCheck, GraduationCap, Menu, MessageSquareText, Sparkles,
  Users, Wallet, X, Files, CircleDollarSign, ChartNoAxesCombined,
} from "lucide-react";

const productAreas = [
  { icon: Users, title: "Student records", detail: "Keep admission details, class placement, and family contacts organised." },
  { icon: Wallet, title: "School fees", detail: "Set class fees, record payments, and see balances clearly." },
  { icon: ClipboardCheck, title: "Results and reports", detail: "Enter scores, review progress, and prepare report cards." },
  { icon: GraduationCap, title: "Teacher workspace", detail: "Manage staff profiles, class assignments, and academic work." },
  { icon: MessageSquareText, title: "Parent communication", detail: "Share school announcements and useful updates with families." },
  { icon: BookOpen, title: "School administration", detail: "Bring classes, academic terms, subjects, and school settings together." },
];

const problems = [
  { icon: Files, title: "Student details spread across files", detail: "Keep student profiles, class placement, and guardian information together in an organised directory." },
  { icon: CircleDollarSign, title: "Fee balances are hard to follow", detail: "Record payments against school fees and review what has been paid or remains outstanding." },
  { icon: ChartNoAxesCombined, title: "Results take too long to prepare", detail: "Enter scores, calculate results, and prepare report cards from the academic workspace." },
  { icon: MessageSquareText, title: "School updates get missed", detail: "Publish announcements for parents and give families a place to view school information." },
];

const pricing = [
  { name: "Starter", students: "1–49 students", year: "₦90,000", term: "₦35,000", group: "Small schools" },
  { name: "Growth", students: "50–149 students", year: "₦180,000", term: "₦65,000" },
  { name: "Professional", students: "150–299 students", year: "₦300,000", term: "₦110,000", recommended: true },
  { name: "Advanced", students: "300–500 students", year: "₦450,000", term: "₦165,000" },
  { name: "Enterprise", students: "501–800 students", year: "₦650,000", term: "₦240,000" },
  { name: "Large schools", students: "801+ students", year: "Custom pricing", term: "Based on size and requirements" },
];

const faqs = [
  { question: "What is Katalysa?", answer: "Katalysa is a school-management platform for private schools in Nigeria, with tools for student records, fees, results, staff, classes, and parent access." },
  { question: "Who is Katalysa for?", answer: "School administrators and staff manage school operations. Parents use accounts created or authorized by their school to access their children's information." },
  { question: "Can parents create their own accounts?", answer: "No. A school creates or authorizes parent access and connects each parent account to the relevant children." },
  { question: "Can I book a demonstration?", answer: "Yes. Share your school details and choose a convenient date and time. This prototype does not send or store the request." },
  { question: "How is pricing determined?", answer: "Plans are based on student enrolment. The pricing section shows annual and per-term rates; schools above 800 students can request custom pricing." },
  { question: "What can my school manage with Katalysa?", answer: "The current prototype includes student and teacher records, classes and terms, fees, results and report cards, announcements, parent access, school settings, and subscription details." },
];

export default function LandingPage({ onLogin, onGetStarted }: { onLogin: () => void; onGetStarted: () => void }) {
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
          <span className="marketing-brand-mark"><Image src="/katalysa-logo.png" alt="" width={30} height={30} /></span>
          <span>Katalysa<span className="brand-period">.</span></span>
        </Link>
        <button className="marketing-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`marketing-nav${menuOpen ? " marketing-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="marketing-header-actions">
          <button className="marketing-login" onClick={onLogin}>Sign in</button>
          <a className="button button-outline marketing-book" href="#contact">Book a demo <ArrowRight size={14} /></a>
          <button className="button button-primary marketing-get-started" onClick={onGetStarted}>Get started <ArrowRight size={16} /></button>
        </div>
      </header>

      <section className="marketing-hero" id="home">
        <div className="marketing-hero-copy">
          <span className="marketing-eyebrow"><span /> SCHOOL MANAGEMENT FOR NIGERIAN SCHOOLS</span>
          <h1>Your school.<br /><span>One clearer system.</span></h1>
          <p>Bring student records, school fees, results, and family updates into one connected workspace, designed around the way Nigerian schools work.</p>
          <div className="marketing-hero-actions">
            <button className="button button-primary" onClick={onGetStarted}>Get started <ArrowRight size={16} /></button>
            <a className="button button-outline marketing-hero-demo" href="#contact">Book a demo <ArrowRight size={15} /></a>
            <a className="marketing-text-cta" href="#features">Explore features <ArrowDown size={15} /></a>
          </div>
          <div className="marketing-trust-row"><span className="trust-avatars"><i>A</i><i>T</i><i>S</i></span><span>For school teams, teachers, and families</span></div>
        </div>
        <div className="marketing-visual" aria-label="Illustration of a school dashboard">
          <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
          <div className="hero-dashboard">
            <div className="hero-dash-sidebar"><span className="hero-dash-logo"><Image src="/katalysa-logo.png" alt="" width={19} height={19}/></span><span className="hero-dash-active"/><i/><i/><i/><i/><i/></div>
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

      <section className="marketing-pricing marketing-section" id="pricing">
        <div className="marketing-section-heading"><span className="marketing-eyebrow">STRAIGHTFORWARD SCHOOL PRICING</span><h2>Choose a plan that fits <em>your school.</em></h2><p>Annual and per-term options, organised by student enrolment.</p></div>
        <div className="pricing-grid">{pricing.map((plan,index)=><article className={`pricing-card${plan.recommended?" pricing-recommended":""}`} key={plan.name}>
          <div className="pricing-card-top"><span className="pricing-tier-label">{plan.group ?? (index===5 ? "For larger school communities" : "School plan")}</span>{plan.recommended&&<span className="pricing-badge">Recommended</span>}</div>
          <h3 className="pricing-name">{plan.name}</h3><p className="pricing-students">{plan.students}</p>
          <div className="pricing-amount"><strong>{plan.year}</strong><span>{plan.year==="Custom pricing"?"":"per year"}</span></div>
          <div className="pricing-term"><span>Or pay per term</span><strong>{plan.term}</strong></div>
          <p className="pricing-plan-note">{plan.year==="Custom pricing"?"Pricing tailored to your school’s size and requirements.":"Choose the billing schedule that works for your school."}</p>
          <a className="pricing-link" href="#contact">{plan.year==="Custom pricing"?"Discuss your school":"Talk about this plan"}<ArrowRight size={15}/></a>
        </article>)}</div>
        <small className="pricing-note">Pricing shown as supplied by Katalysa. Confirm final plan details with the school before purchase.</small>
      </section>

      <section className="marketing-section marketing-features" id="features">
        <div className="features-intro"><div className="marketing-section-heading"><span className="marketing-eyebrow">THE KATALYSA WORKSPACE</span><h2>Everything your school team needs, <em>clearly organised.</em></h2><p>Explore the tools available today for the people, learning, finances, and family communication that keep a school moving.</p></div><div className="features-summary"><span className="features-summary-icon"><ChartNoAxesCombined size={20}/></span><strong>One connected workspace</strong><small>Designed for everyday school operations</small></div></div>
        <div className="features-dashboard">
          <div className="features-dashboard-head"><div><span className="features-live-dot"/> KATALYSA SCHOOL WORKSPACE</div><span>Current product areas</span></div>
          <div className="features-dashboard-body"><aside className="features-module-nav"><strong>Workspace</strong><span className="is-current"><Users size={15}/> People</span><span><Wallet size={15}/> Finance</span><span><GraduationCap size={15}/> Academics</span><span><MessageSquareText size={15}/> Community</span></aside>
            <div className="features-module-grid">{productAreas.map(({icon:Icon,title,detail},index)=><article className="feature-module" key={title}><span className={`product-area-icon tone-${index%4}`}><Icon size={19}/></span><span className="feature-module-tag">{["PEOPLE","FINANCE","ACADEMICS","STAFF","COMMUNITY","ADMINISTRATION"][index]}</span><h3>{title}</h3><p>{detail}</p><span className="feature-module-link">Explore in the prototype <ArrowUpRight size={14}/></span></article>)}</div>
          </div>
          <div className="features-dashboard-foot"><span><Check size={14}/> Student and staff records</span><span><Check size={14}/> Fees and academic workflows</span><span><Check size={14}/> Parent access and announcements</span></div>
        </div>
      </section>

      <section className="marketing-problems marketing-section" id="problems">
        <div className="marketing-section-heading"><span className="marketing-eyebrow">WHAT KATALYSA HELPS SOLVE</span><h2>Less time chasing details.<br /><em>More clarity for the day.</em></h2><p>Bring common school administration tasks into one place with the tools available in Katalysa.</p></div>
        <div className="problems-grid">{problems.map(({icon:Icon,title,detail},index)=><article className="problem-card" key={title}><span className="problem-number">0{index+1}</span><span className="problem-icon"><Icon size={19}/></span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="marketing-story" id="how-it-works">
        <div className="story-visual"><div className="story-glow"/><div className="story-paper story-paper-back"><span>School operations</span><i/><i/><i/></div><div className="story-paper"><small>ONE SCHOOL WORKSPACE</small><strong>People, progress,<br />and payments.</strong><p>Make the everyday easier to follow.</p><div className="story-paper-tags"><span>Records</span><span>Results</span><span>Fees</span></div></div><span className="story-spark story-spark-one">✦</span><span className="story-spark story-spark-two">✦</span></div>
        <div className="story-copy"><span className="marketing-eyebrow">DESIGNED FOR REAL SCHOOL DAYS</span><h2>A clearer view of your school, <em>without the extra complexity.</em></h2><p>School teams balance people, paperwork, payments, and communication every day. Katalysa is being built to bring those essential tasks into an organised, connected workflow.</p><ul><li><span><Check size={14}/></span><div><strong>Keep key information connected</strong><small>Make the records your team needs easier to find.</small></div></li><li><span><Check size={14}/></span><div><strong>Simplify everyday administration</strong><small>Spend less time coordinating work across separate tools.</small></div></li><li><span><Check size={14}/></span><div><strong>Help families stay informed</strong><small>Give parents a dedicated place for important school updates.</small></div></li></ul><a className="marketing-inline-link" href="#contact">Let’s talk about your school <ArrowRight size={15}/></a></div>
      </section>

      <section className="marketing-about" id="about"><div className="about-kicker"><span>01</span> MADE FOR NIGERIAN SCHOOLS</div><h2>A better way forward<br />starts with <em>more clarity.</em></h2><p>Katalysa is for private schools that want a more connected way to manage administration, academic records, and communication with families.</p><a href="#contact" className="button button-light">Let’s get to know your school <ArrowRight size={16}/></a><div className="about-star about-star-a">✦</div><div className="about-star about-star-b">✳</div></section>

      <section className="marketing-faq marketing-section" id="faq"><div className="marketing-section-heading"><span className="marketing-eyebrow">GOOD TO KNOW</span><h2>Questions,<br /><em>answered.</em></h2><p>A few things school teams may want to know about Katalysa.</p></div><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<ChevronDown size={17}/></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="marketing-contact" id="contact"><div className="contact-copy"><span className="marketing-eyebrow">LET’S CONNECT</span><h2>See how Katalysa can fit <em>your school.</em></h2><p>Request a walkthrough of the current student, fee, academic, and parent workflows. Choose a date and time that works for your team.</p><div className="contact-promise"><span><Sparkles size={17}/></span><div><strong>Schools. Teachers. Families.</strong><small>One organised school workspace.</small></div></div></div><form className="contact-form" onSubmit={submitEnquiry}><div className="contact-form-heading"><strong>Book a demo</strong><span>Choose a convenient time</span></div><label>Your name<input name="name" autoComplete="name" required placeholder="e.g. Amara Okafor" onChange={() => setSubmitted(false)} /></label><label>School name<input name="school" autoComplete="organization" required placeholder="e.g. Bloomfield Academy" onChange={() => setSubmitted(false)} /></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@school.com" onChange={() => setSubmitted(false)} /></label><label>Your role<select name="role" defaultValue="" required onChange={() => setSubmitted(false)}><option value="" disabled>Choose a role</option><option>School owner / proprietor</option><option>School administrator</option><option>Teacher</option><option>Other</option></select></label><label>Preferred date<input name="preferredDate" type="date" required min={new Date().toISOString().slice(0, 10)} onChange={() => setSubmitted(false)} /></label><label>Preferred time<input name="preferredTime" type="time" required onChange={() => setSubmitted(false)} /></label><label className="contact-message-field">Anything you’d like us to focus on?<textarea name="message" rows={3} placeholder="For example, fee tracking or report cards…" onChange={() => setSubmitted(false)} /></label><button className="button button-primary" type="submit">Request a demo <ArrowRight size={16}/></button>{submitted ? <p className="contact-form-status" role="status"><Check size={14}/> Request prepared locally. It has not been sent or booked.</p> : <small className="contact-form-note">Prototype form · Demo requests are not sent or stored.</small>}</form></section>

      <footer className="marketing-footer"><Link className="marketing-brand" href="#home"><span className="marketing-brand-mark"><Image src="/katalysa-logo.png" alt="" width={26} height={26} /></span><span>Katalysa<span className="brand-period">.</span></span></Link><p>School records, fees, academic results, and family updates in one workspace.</p><nav aria-label="Footer navigation"><a href="#features">Platform</a><a href="#faq">FAQs</a><a href="#contact">Book a demo</a></nav><small>© 2026 Katalysa. Designed for Nigerian schools.</small></footer>
    </main>
  );
}

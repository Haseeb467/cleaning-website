import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Facebook,
  HardHat,
  Home as HomeIcon,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Shirt,
  Sparkles,
  Sofa,
  Star,
  X,
  Zap,
} from "lucide-react";
import { contact, services } from "./data";

const iconMap = {
  home: HomeIcon,
  sparkles: Sparkles,
  building: Building2,
  key: KeyRound,
  sofa: Sofa,
  "hard-hat": HardHat,
} as const;

export function ServiceIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}

export function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup ${dark ? "brand-lockup-dark" : ""}`}>
      <span className="brand-mark"><Sparkles size={17} strokeWidth={2.4} /></span>
      <span className="brand-name">clean slate<span className="brand-dot">.</span></span>
    </span>
  );
}

const navItems = [
  ["Services", "/services"],
  ["Our story", "/about"],
  ["Pricing", "/pricing"],
  ["Reviews", "/reviews"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <div className="site-app">
      <div className="top-strip"><div className="container top-strip-inner"><span><Zap size={13} fill="currentColor" /> Now welcoming new recurring clients in Austin</span><span className="top-strip-right">Licensed · Insured · Background-checked</span></div></div>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" aria-label="Clean Slate Co. home"><LogoMark /></Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href} className={location === href || (href === "/services" && location.startsWith("/services/")) ? "active" : ""}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}><Phone size={16} /> <span>Call us</span></a>
            <Link href="/booking" className="button button-coral button-small">Book now <ArrowRight size={15} /></Link>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/booking" className="button button-coral">Get a free quote <ArrowRight size={16} /></Link>
        </nav>}
      </header>
      <main>{children}</main>
      <Footer />
      <div className="floating-actions" aria-label="Quick contact actions">
        <a className="floating-action floating-call" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} aria-label="Call Clean Slate"><Phone size={19} /></a>
        <a className="floating-action floating-whatsapp" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Message Clean Slate on WhatsApp"><Send size={18} /></a>
      </div>
      <div className="mobile-action-bar"><a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}><Phone size={16} /> Call</a><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><Send size={16} /> WhatsApp</a><Link href="/booking"><Sparkles size={16} /> Book</Link></div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; light?: boolean }) {
  return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""} ${light ? "section-heading-light" : ""}`}>
    <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

export function PageIntro({ eyebrow, title, description, image, children }: { eyebrow: string; title: string; description: string; image?: string; children?: ReactNode }) {
  return <section className="page-intro"><div className="container page-intro-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}</h1><p className="page-intro-copy">{description}</p>{children}</div>{image && <div className="page-intro-image"><img src={image} alt="Clean Slate Co. service detail" loading="eager" /><span className="image-note"><Sparkles size={16} /> A little lighter, every day</span></div>}</div></section>;
}

export function CTA({ title = "Ready for a cleaner slate?", text = "Tell us what needs a reset and we’ll build a clear, thoughtful plan around your space.", label = "Get a free quote", dark = false }: { title?: string; text?: string; label?: string; dark?: boolean }) {
  return <section className={`cta-band ${dark ? "cta-band-dark" : ""}`}><div className="container cta-inner"><div><p className="eyebrow"><span className="eyebrow-line" />A fresh next step</p><h2>{title}</h2><p>{text}</p></div><Link href="/booking" className="button button-coral">{label} <ArrowRight size={17} /></Link></div></section>;
}

function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); if (email.trim()) { setSent(true); setEmail(""); } };
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Link href="/"><LogoMark dark /></Link><p>Thoughtful cleaning for the way Austin lives, works, and grows.</p><div className="footer-socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="https://facebook.com" aria-label="Facebook"><Facebook size={17} /></a><a href={`mailto:${contact.email}`} aria-label="Email"><Mail size={17} /></a></div></div><div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">Our story</Link><Link href="/pricing">Pricing</Link><Link href="/gallery">Gallery</Link><Link href="/blog">Cleaning tips</Link></div></div><div><p className="footer-label">Say hello</p><div className="footer-contact"><a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}><Phone size={15} />{contact.phone}</a><a href={`mailto:${contact.email}`}><Mail size={15} />{contact.email}</a><span><MapPin size={15} />{contact.address}</span></div></div><div className="newsletter"><p className="footer-label">The tidy note</p><p>One useful cleaning tip, once a month. No clutter.</p><form onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" /><button type="submit" aria-label="Subscribe"><ArrowRight size={17} /></button></form>{sent && <small className="form-success-text">You’re on the list.</small>}</div></div><div className="footer-bottom"><span>© 2026 Clean Slate Co. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>Built for a lighter day.</span></div></div></div></footer>;
}

const initialForm = { name: "", phone: "", email: "", service: "", size: "", date: "", address: "", notes: "" };
export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const update = (key: keyof typeof initialForm, value: string) => setForm(current => ({ ...current, [key]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading"); setError("");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("Please check your details and try again.");
      setStatus("success"); setForm(initialForm);
    } catch (submissionError) {
      setStatus("error"); setError(submissionError instanceof Error ? submissionError.message : "Something went wrong. Please call us instead.");
    }
  };
  if (status === "success") return <div className="success-card"><div className="success-icon"><CircleCheck size={32} /></div><p className="eyebrow"><span className="eyebrow-line" />Request received</p><h3>We’ll be in touch shortly.</h3><p>Thanks for sharing a little about your space. A Clean Slate coordinator will follow up during business hours with a clear quote and next steps.</p><Link href="/" className="button button-navy">Back to home <ArrowRight size={16} /></Link></div>;
  return <form className={`quote-form ${compact ? "quote-form-compact" : ""}`} onSubmit={submit} noValidate><div className="form-grid"><Field label="Your name" id="name" value={form.name} onChange={value => update("name", value)} placeholder="Alex Morgan" required /><Field label="Phone" id="phone" type="tel" value={form.phone} onChange={value => update("phone", value)} placeholder="(512) 555-0148" required /><Field label="Email" id="email" type="email" value={form.email} onChange={value => update("email", value)} placeholder="alex@example.com" required /><Field label="Service type" id="service" as="select" value={form.service} onChange={value => update("service", value)} required options={services.map(service => service.name)} /><Field label="Property size" id="size" as="select" value={form.size} onChange={value => update("size", value)} required options={["Studio / 1 bed", "2–3 bedrooms", "4+ bedrooms", "Office or commercial", "Other"]} /><Field label="Preferred date" id="date" type="date" value={form.date} onChange={value => update("date", value)} required min={new Date().toISOString().split("T")[0]} /><Field className="field-full" label="Property address" id="address" value={form.address} onChange={value => update("address", value)} placeholder="Street, neighborhood, ZIP" required /><Field className="field-full" label="Anything we should know?" id="notes" as="textarea" value={form.notes} onChange={value => update("notes", value)} placeholder="Pets, access notes, special requests..." /></div>{status === "error" && <p className="form-error" role="alert">{error}</p>}<button type="submit" className="button button-coral form-submit" disabled={status === "loading"}>{status === "loading" ? <><span className="spinner" /> Sending request...</> : <>Get my free quote <ArrowRight size={17} /></>}</button><p className="form-footnote"><ShieldCheck size={15} /> Your details stay private. No pressure, ever.</p></form>;
}

function Field({ label, id, value, onChange, placeholder, type = "text", as = "input", options, required, className = "", min }: { label: string; id: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; as?: "input" | "select" | "textarea"; options?: string[]; required?: boolean; className?: string; min?: string }) {
  return <div className={`field ${className}`}><label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>{as === "select" ? <select id={id} value={value} onChange={e => onChange(e.target.value)} required={required}><option value="">Choose one</option>{options?.map(option => <option key={option} value={option}>{option}</option>)}</select> : as === "textarea" ? <textarea id={id} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={4} /> : <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} min={min} />}</div>;
}

export function Stars({ small = false }: { small?: boolean }) { return <span className={`stars ${small ? "stars-small" : ""}`} aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map(star => <Star key={star} size={small ? 14 : 16} fill="currentColor" />)}</span>; }

export function TrustRow() { return <div className="trust-row"><div><Stars small /><span>4.9 average rating</span></div><div><ShieldCheck size={17} /><span>Fully insured</span></div><div><CircleCheck size={17} /><span>100+ happy clients</span></div></div>; }

export function MiniStats() { return <div className="mini-stats"><div><strong>12k<span>+</span></strong><span>hours of calm created</span></div><div><strong>4.9<span>/5</span></strong><span>average client rating</span></div><div><strong>100<span>+</span></strong><span>homes & teams served</span></div></div>; }

export function ServiceCard({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const service = services.find(item => item.slug === slug) ?? services[0];
  return <Link href={`/services/${service.slug}`} className={`service-card ${featured ? "service-card-featured" : ""}`}><div className="service-card-icon"><ServiceIcon name={service.icon} /></div><div className="service-card-content"><span className="service-card-kicker">{featured ? "Most loved" : "Clean Slate service"}</span><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore service <ArrowRight size={15} /></span></div></Link>;
}

export function Checklist({ items }: { items: string[] }) { return <ul className="checklist">{items.map(item => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>; }

export function IconFeature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div className="icon-feature"><div className="icon-feature-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>; }

export function Lightbox({ image, title, onClose }: { image: string; title: string; onClose: () => void }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose(); document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKey); return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); }; }, [onClose]);
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}><button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image"><X /></button><img src={image} alt={title} onClick={event => event.stopPropagation()} /></div>;
}

export function ContactStrip() { return <div className="contact-strip"><div><Clock3 size={18} /><span><strong>Hours</strong>{contact.hours}</span></div><div><Phone size={18} /><span><strong>Call or text</strong>{contact.phone}</span></div><div><MapPin size={18} /><span><strong>Based in</strong>East Austin, serving the city</span></div></div>; }

export function SafeIconRow() { return <div className="safe-icon-row"><div><ShieldCheck size={20} /><span>Insured & verified</span></div><div><Bath size={20} /><span>Professional products</span></div><div><BedDouble size={20} /><span>Thoughtful every time</span></div><div><Shirt size={20} /><span>Uniformed teams</span></div></div>; }

export function usePageTitle(title: string) { useEffect(() => { document.title = `${title} — Clean Slate Co.`; window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [title]); }

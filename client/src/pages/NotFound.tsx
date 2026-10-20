import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/site/SiteChrome";

export default function NotFound() {
  usePageTitle("Page not found");
  return <section className="not-found"><div className="container not-found-inner"><div className="not-found-mark"><Sparkles size={34} /></div><p className="eyebrow"><span className="eyebrow-line" />A small detour</p><h1>That page took a little too much time off.</h1><p>We could not find what you were looking for, but there is a cleaner route back home.</p><Link href="/" className="button button-coral"><ArrowLeft size={16} /> Back to home</Link></div></section>;
}

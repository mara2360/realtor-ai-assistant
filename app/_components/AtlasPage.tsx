import Link from "next/link";
import type { ReactNode } from "react";
import SiteNav from "./SiteNav";

type Feature = { label: string; title: string; copy: string; href?: string; linkLabel?: string };

export default function AtlasPage({ eyebrow, title, intro, features, cta = "Get the weekly brief", ctaHref = "/brief", ctaHeading = "Move through crypto with context.", compactTitle = false, children }: { eyebrow: string; title: string; intro: string; features: Feature[]; cta?: string; ctaHref?: string; ctaHeading?: string; compactTitle?: boolean; children?: ReactNode }) {
  return (
    <main id="main-content">
      <a className="skip-link" href="#page-heading">Skip to main content</a>
      <SiteNav />
      <header className="page-hero shell"><p className="eyebrow">{eyebrow}</p><h1 id="page-heading" className={compactTitle ? "compact-title" : undefined}>{title}</h1><p>{intro}</p></header>
      <section className="page-features shell" aria-label={`${title} details`}>{features.map((feature) => <article key={feature.title}><span>{feature.label}</span><div><h2>{feature.title}</h2><p>{feature.copy}</p>{feature.href && <Link className="button feature-button" href={feature.href}>{feature.linkLabel ?? "View profile"} <span aria-hidden="true">→</span></Link>}</div></article>)}</section>
      {children}
      <section className="page-cta"><div className="shell"><p className="eyebrow">Signal over noise</p><h2>{ctaHeading}</h2><Link className="button button-light" href={ctaHref}>{cta} <span aria-hidden="true">→</span></Link></div></section>
      <footer className="shell"><Link className="brand" href="/"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer>
    </main>
  );
}

import Link from "next/link";

type Feature = { label: string; title: string; copy: string };

export default function AtlasPage({ eyebrow, title, intro, features, cta = "Get the weekly brief" }: { eyebrow: string; title: string; intro: string; features: Feature[]; cta?: string }) {
  return (
    <main id="main-content">
      <a className="skip-link" href="#page-heading">Skip to main content</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Block Atlas home"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link>
        <div className="navlinks"><Link href="/networks">Networks</Link><Link href="/method">Method</Link><Link href="/manifesto">Manifesto</Link></div>
        <Link className="button button-small" href="/brief">Get the brief <span aria-hidden="true">↗</span></Link>
      </nav>
      <header className="page-hero shell"><p className="eyebrow">{eyebrow}</p><h1 id="page-heading">{title}</h1><p>{intro}</p></header>
      <section className="page-features shell" aria-label={`${title} details`}>{features.map((feature) => <article key={feature.title}><span>{feature.label}</span><div><h2>{feature.title}</h2><p>{feature.copy}</p></div></article>)}</section>
      <section className="page-cta"><div className="shell"><p className="eyebrow">Signal over noise</p><h2>Move through crypto with context.</h2><Link className="button button-light" href="/brief">{cta} <span aria-hidden="true">→</span></Link></div></section>
      <footer className="shell"><Link className="brand" href="/"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer>
    </main>
  );
}

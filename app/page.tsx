"use client";

import SiteNav from "./_components/SiteNav";

const assets = [
  { slug: "bitcoin", signal: "21M max supply", name: "Bitcoin", meta: "Proof of work · Settlement layer", tag: "Digital scarcity", color: "clay", image: "/market-bitcoin.png" },
  { slug: "ethereum", signal: "Programmable", name: "Ethereum", meta: "Smart contracts · Global compute", tag: "Ecosystem", color: "blue", image: "/market-ethereum.png" },
  { slug: "solana", signal: "High throughput", name: "Solana", meta: "Low fees · Consumer applications", tag: "Network", color: "gold", image: "/market-solana.png" },
];

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#primary-heading">Skip to main content</a>
      <SiteNav />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent crypto intelligence · Built for curious humans</p>
          <h1 id="primary-heading">Crypto clarity.<br/><em>No cults.</em></h1>
          <p className="lede">Understand the networks, risks, and ideas shaping digital ownership—without the hype cycle.</p>
          <div className="actions"><a className="button" href="#homes">Explore networks <span aria-hidden="true">→</span></a><button type="button" className="text-button" onClick={() => window.dispatchEvent(new Event("open-crypto-guide"))}>Ask the field guide <span aria-hidden="true">✦</span></button></div>
          <div className="proof"><div className="avatars"><i>BTC</i><i>ETH</i><i>SOL</i></div><p><b>Signal over noise</b><br/><span>Research · Context · Risk awareness</span></p></div>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract decentralized network illustration">
          <div className="sun"/><div className="hill hill-one"/><div className="hill hill-two"/>
          <div className="listing-note"><span>Network pulse</span><b>Blocks keep moving</b><small>Open · Global · 24/7</small></div>
        </div>
      </section>

      <section className="ticker"><span>VERIFY, DON’T TRUST</span><i>✦</i><span>LEARN BEFORE YOU LEVERAGE</span><i>✦</i><span>OWN YOUR KEYS</span></section>

      <section className="section shell" id="homes">
        <div className="section-head"><div><p className="eyebrow">Three networks, three theses</p><h2>Know what you’re looking at.</h2></div><a href="#contact">Get the weekly brief →</a></div>
        <div className="cards">{assets.map((asset) => <a className="card" href={`/networks/${asset.slug}`} key={asset.name} aria-labelledby={`asset-${asset.slug}`}><div className={`home-photo ${asset.color}`}><span>{asset.tag}</span><img className="asset-image" src={asset.image} alt={`Abstract market illustration for ${asset.name}`} width="1024" height="1024"/></div><div className="card-info"><h3 id={`asset-${asset.slug}`}>{asset.name}</h3><strong>{asset.signal}</strong><p>{asset.meta}</p><small>View protocol profile →</small></div></a>)}</div>
      </section>

      <section className="approach" id="approach"><div className="shell approach-grid"><div><p className="eyebrow">A saner way into crypto</p><h2>Research without the rush.</h2></div><div className="principles"><article><h3>Start with the why</h3><p>Understand the problem a network claims to solve before looking at a token.</p></article><article><h3>Trace the risk</h3><p>Map custody, smart-contract, liquidity, and incentive risks before taking action.</p></article><article><h3>Verify the signal</h3><p>Prefer primary sources, transparent data, and patient thinking over viral certainty.</p></article></div></div></section>

      <section className="about shell" id="about"><div className="portrait"><div className="portrait-shape">BA</div></div><div><p className="eyebrow">The Block Atlas manifesto</p><h2>Stay curious. Stay solvent.</h2><p>Crypto is a frontier of open networks, experimental economics, and real risk. Block Atlas turns the jargon into useful mental models so you can explore with context—not conviction borrowed from a timeline.</p><p className="signature">Signal, not slogans.</p><a className="text-link" href="#contact">Read the field notes →</a></div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="eyebrow">Your weekly reality check</p><h2>Enter the market with context.</h2><p>One concise brief on networks, narratives, security, and the risks worth noticing.</p><a className="button button-light" href="mailto:hello@blockatlas.xyz">Join the signal list <span>↗</span></a></div></section>
      <footer className="shell"><div className="brand"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></div><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer>

    </main>
  );
}

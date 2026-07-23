"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const assets = [
  { slug: "bitcoin", signal: "21M max supply", name: "Bitcoin", meta: "Proof of work · Settlement layer", tag: "Digital scarcity", color: "clay", image: "/market-bitcoin.png" },
  { slug: "ethereum", signal: "Programmable", name: "Ethereum", meta: "Smart contracts · Global compute", tag: "Ecosystem", color: "blue", image: "/market-ethereum.png" },
  { slug: "solana", signal: "High throughput", name: "Solana", meta: "Low fees · Consumer applications", tag: "Network", color: "gold", image: "/market-solana.png" },
];

const answers: Record<string, string> = {
  wallets: "A wallet manages the keys that authorize crypto transactions. Start with a reputable wallet, write down the recovery phrase offline, and never share it with anyone.",
  security: "Use unique passwords, hardware-backed two-factor authentication, and a small test transaction before moving meaningful funds. Treat urgent messages and guaranteed returns as red flags.",
  bitcoin: "Bitcoin is a decentralized monetary network with a fixed maximum supply of 21 million coins. Its design prioritizes scarcity, security, and censorship-resistant settlement.",
  defi: "DeFi refers to financial applications built with smart contracts. It can enable trading, lending, and borrowing without a traditional intermediary, but smart-contract and market risks remain.",
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi, I’m Node—your crypto field guide. What should we unpack?" }]);
  const [input, setInput] = useState("");

  function ask(topic: string) {
    const label = topic.charAt(0).toUpperCase() + topic.slice(1);
    setMessages((m) => [...m, { from: "user", text: `Explain ${label.toLowerCase()}.` }, { from: "bot", text: answers[topic] }]);
  }

  function send(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.trim();
    const key = Object.keys(answers).find((k) => q.toLowerCase().includes(k));
    setMessages((m) => [...m, { from: "user", text: q }, { from: "bot", text: key ? answers[key] : "I can explain wallets, security, Bitcoin, and DeFi in plain language. Crypto involves risk, so verify important details with primary sources before acting." }]);
    setInput("");
  }

  return (
    <main id="main-content">
      <a className="skip-link" href="#primary-heading">Skip to main content</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Block Atlas home"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></a>
        <div className="navlinks"><a href="/networks">Networks</a><a href="/method">Method</a><a href="/manifesto">Manifesto</a></div>
        <a className="button button-small" href="/brief">Get the brief <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent crypto intelligence · Built for curious humans</p>
          <h1 id="primary-heading">Crypto clarity.<br/><em>No cults.</em></h1>
          <p className="lede">Understand the networks, risks, and ideas shaping digital ownership—without the hype cycle.</p>
          <div className="actions"><a className="button" href="#homes">Explore networks <span aria-hidden="true">→</span></a><button type="button" className="text-button" onClick={() => setChatOpen(true)}>Ask the field guide <span aria-hidden="true">✦</span></button></div>
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

      <button type="button" className="chat-launch" onClick={() => setChatOpen(!chatOpen)} aria-label={chatOpen ? "Close AI crypto guide" : "Open AI crypto guide"} aria-expanded={chatOpen} aria-controls="crypto-guide">{chatOpen ? "×" : "✦"}</button>
      {chatOpen && <aside className="chat" id="crypto-guide" aria-labelledby="guide-title"><header><div><span aria-hidden="true">✦</span><p><b id="guide-title">Node</b><small><i aria-hidden="true"/> AI crypto guide</small></p></div><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">×</button></header><div className="messages" aria-live="polite" aria-relevant="additions">{messages.map((m, i) => <div className={`message ${m.from}`} key={i}>{m.text}</div>)}</div>{messages.length < 3 && <div className="chips" aria-label="Suggested questions">{Object.keys(answers).map(k => <button type="button" key={k} onClick={() => ask(k)}>{k.charAt(0).toUpperCase()+k.slice(1)}</button>)}</div>}<form onSubmit={send}><label className="sr-only" htmlFor="crypto-question">Ask Node a crypto question</label><input id="crypto-question" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a crypto question…"/><button type="submit" aria-label="Send question">↑</button></form><small className="disclaimer">Educational guidance only · Always verify before acting.</small></aside>}
    </main>
  );
}

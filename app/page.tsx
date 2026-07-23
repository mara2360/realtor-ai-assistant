"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const assets = [
  { signal: "21M max supply", name: "Bitcoin", meta: "Proof of work · Settlement layer", tag: "Digital scarcity", color: "clay" },
  { signal: "Programmable", name: "Ethereum", meta: "Smart contracts · Global compute", tag: "Ecosystem", color: "blue" },
  { signal: "High throughput", name: "Solana", meta: "Low fees · Consumer applications", tag: "Network", color: "gold" },
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
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Block Atlas home"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></a>
        <div className="navlinks"><a href="#homes">Networks</a><a href="#approach">Method</a><a href="#about">Manifesto</a></div>
        <a className="button button-small" href="#contact">Get the brief <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent crypto intelligence · Built for curious humans</p>
          <h1>Crypto clarity.<br/><em>No cults.</em></h1>
          <p className="lede">Understand the networks, risks, and ideas shaping digital ownership—without the hype cycle.</p>
          <div className="actions"><a className="button" href="#homes">Explore networks <span>→</span></a><button className="text-button" onClick={() => setChatOpen(true)}>Ask the field guide <span>✦</span></button></div>
          <div className="proof"><div className="avatars"><i>BTC</i><i>ETH</i><i>SOL</i></div><p><b>Signal over noise</b><br/><span>Research · Context · Risk awareness</span></p></div>
        </div>
        <div className="hero-art" aria-label="Abstract decentralized network illustration">
          <div className="sun"/><div className="hill hill-one"/><div className="hill hill-two"/><div className="house"><div className="roof"/><div className="chimney"/><div className="wall"><i/><i/><i/></div></div><div className="tree"><i/><i/><i/></div>
          <div className="listing-note"><span>Network pulse</span><b>Blocks keep moving</b><small>Open · Global · 24/7</small></div>
        </div>
      </section>

      <section className="ticker"><span>VERIFY, DON’T TRUST</span><i>✦</i><span>LEARN BEFORE YOU LEVERAGE</span><i>✦</i><span>OWN YOUR KEYS</span></section>

      <section className="section shell" id="homes">
        <div className="section-head"><div><p className="eyebrow">Three networks, three theses</p><h2>Know what you’re looking at.</h2></div><a href="#contact">Get the weekly brief →</a></div>
        <div className="cards">{assets.map((asset, i) => <article className="card" key={asset.name}><div className={`home-photo ${asset.color}`}><span>{asset.tag}</span><div className={`mini-home home-${i}`}><i/><b/><em/></div></div><div className="card-info"><h3>{asset.name}</h3><strong>{asset.signal}</strong><p>{asset.meta}</p><small>Protocol profile</small></div></article>)}</div>
      </section>

      <section className="approach" id="approach"><div className="shell approach-grid"><div><p className="eyebrow">A saner way into crypto</p><h2>Research without the rush.</h2></div><div className="principles"><article><b>01</b><h3>Start with the why</h3><p>Understand the problem a network claims to solve before looking at a token.</p></article><article><b>02</b><h3>Trace the risk</h3><p>Map custody, smart-contract, liquidity, and incentive risks before taking action.</p></article><article><b>03</b><h3>Verify the signal</h3><p>Prefer primary sources, transparent data, and patient thinking over viral certainty.</p></article></div></div></section>

      <section className="about shell" id="about"><div className="portrait"><div className="portrait-shape">BA</div></div><div><p className="eyebrow">The Block Atlas manifesto</p><h2>Stay curious. Stay solvent.</h2><p>Crypto is a frontier of open networks, experimental economics, and real risk. Block Atlas turns the jargon into useful mental models so you can explore with context—not conviction borrowed from a timeline.</p><p className="signature">Signal, not slogans.</p><a className="text-link" href="#contact">Read the field notes →</a></div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="eyebrow">Your weekly reality check</p><h2>Enter the market with context.</h2><p>One concise brief on networks, narratives, security, and the risks worth noticing.</p><a className="button button-light" href="mailto:hello@blockatlas.xyz">Join the signal list <span>↗</span></a></div></section>
      <footer className="shell"><div className="brand"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></div><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer>

      <button className="chat-launch" onClick={() => setChatOpen(!chatOpen)} aria-label="Toggle AI crypto guide">{chatOpen ? "×" : "✦"}</button>
      {chatOpen && <aside className="chat" aria-label="AI crypto guide"><header><div><span>✦</span><p><b>Node</b><small><i/> AI crypto guide</small></p></div><button onClick={() => setChatOpen(false)} aria-label="Close chat">×</button></header><div className="messages">{messages.map((m, i) => <div className={`message ${m.from}`} key={i}>{m.text}</div>)}</div>{messages.length < 3 && <div className="chips">{Object.keys(answers).map(k => <button key={k} onClick={() => ask(k)}>{k.charAt(0).toUpperCase()+k.slice(1)}</button>)}</div>}<form onSubmit={send}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a crypto question…" aria-label="Ask Node"/><button aria-label="Send">↑</button></form><small className="disclaimer">Educational guidance only · Always verify before acting.</small></aside>}
    </main>
  );
}

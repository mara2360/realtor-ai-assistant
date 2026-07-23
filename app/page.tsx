"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const homes = [
  { price: "$685,000", address: "18 Willow Bend", meta: "3 beds · 2.5 baths · 2,140 sq ft", tag: "New", color: "clay" },
  { price: "$925,000", address: "402 Harbor Lane", meta: "4 beds · 3 baths · 2,880 sq ft", tag: "Open Sun", color: "blue" },
  { price: "$540,000", address: "77 Juniper Street", meta: "2 beds · 2 baths · 1,620 sq ft", tag: "Just listed", color: "gold" },
];

const answers: Record<string, string> = {
  buying: "A strong first step is a 15-minute planning call. We’ll map your budget, must-haves, timeline, and introduce a trusted local lender if you need one.",
  selling: "I can prepare a no-pressure home value review using recent neighborhood sales, your home’s condition, and current buyer demand.",
  neighborhoods: "Tell me what matters most—walkability, schools, commute, yard space, or nightlife—and I’ll suggest a focused shortlist.",
  financing: "Most buyers begin with pre-approval so they understand a comfortable price range. I can connect you with a lender and explain each step in plain language.",
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! I’m Haven, Maya’s home guide. What can I help you figure out?" }]);
  const [input, setInput] = useState("");

  function ask(topic: string) {
    const label = topic.charAt(0).toUpperCase() + topic.slice(1);
    setMessages((m) => [...m, { from: "user", text: `Help me with ${label.toLowerCase()}.` }, { from: "bot", text: answers[topic] }]);
  }

  function send(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.trim();
    const key = Object.keys(answers).find((k) => q.toLowerCase().includes(k));
    setMessages((m) => [...m, { from: "user", text: q }, { from: "bot", text: key ? answers[key] : "That’s a great question. I can help with buying, selling, neighborhoods, and financing—or pass this to Maya for a personal reply." }]);
    setInput("");
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Maya Brooks home"><span>MB</span><b>Maya Brooks</b><small>Portland Property Studio</small></a>
        <div className="navlinks"><a href="#homes">Homes</a><a href="#approach">Approach</a><a href="#about">About</a></div>
        <a className="button button-small" href="#contact">Let’s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent real estate field notes · Portland, Oregon</p>
          <h1>Portland homes.<br/><em>No beige advice.</em></h1>
          <p className="lede">Sharp local instincts, straight answers, and a buying or selling plan built around your actual life.</p>
          <div className="actions"><a className="button" href="#homes">Explore homes <span>→</span></a><button className="text-button" onClick={() => setChatOpen(true)}>Ask the home guide <span>✦</span></button></div>
          <div className="proof"><div className="avatars"><i>MK</i><i>AL</i><i>JS</i></div><p><b>Trusted by 120+ clients</b><br/><span>★★★★★ 5.0 average rating</span></p></div>
        </div>
        <div className="hero-art" aria-label="Warm modern Portland home illustration">
          <div className="sun"/><div className="hill hill-one"/><div className="hill hill-two"/><div className="house"><div className="roof"/><div className="chimney"/><div className="wall"><i/><i/><i/></div></div><div className="tree"><i/><i/><i/></div>
          <div className="listing-note"><span>Now showing</span><b>Forest Park retreat</b><small>4 beds · 3 baths</small></div>
        </div>
      </section>

      <section className="ticker"><span>BUY WITH CLARITY</span><i>✦</i><span>SELL WITH CONFIDENCE</span><i>✦</i><span>LIVE WHERE YOU LOVE</span></section>

      <section className="section shell" id="homes">
        <div className="section-head"><div><p className="eyebrow">Curated for real life</p><h2>Homes worth a closer look.</h2></div><a href="#contact">View all listings →</a></div>
        <div className="cards">{homes.map((home, i) => <article className="card" key={home.address}><div className={`home-photo ${home.color}`}><span>{home.tag}</span><div className={`mini-home home-${i}`}><i/><b/><em/></div></div><div className="card-info"><h3>{home.address}</h3><strong>{home.price}</strong><p>{home.meta}</p><small>Portland, OR</small></div></article>)}</div>
      </section>

      <section className="approach" id="approach"><div className="shell approach-grid"><div><p className="eyebrow">A better way home</p><h2>Expertise without the pressure.</h2></div><div className="principles"><article><b>01</b><h3>Listen first</h3><p>Your priorities shape every recommendation—not the other way around.</p></article><article><b>02</b><h3>Make it clear</h3><p>Plain-language guidance at every decision, from first tour to final signature.</p></article><article><b>03</b><h3>Stay close</h3><p>Responsive, honest support before, during, and long after closing.</p></article></div></div></section>

      <section className="about shell" id="about"><div className="portrait"><div className="portrait-shape">MB</div></div><div><p className="eyebrow">Your local advocate</p><h2>Hi, I’m Maya.</h2><p>I’m a Portland realtor who believes finding home should feel exciting—not overwhelming. With neighborhood fluency and a practical eye, I help people make moves they feel great about.</p><p className="signature">Maya Brooks</p><a className="text-link" href="#contact">More about Maya →</a></div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="eyebrow">Ready when you are</p><h2>Let’s find your next chapter.</h2><p>Tell me what you’re dreaming about. I’ll bring the local knowledge and a clear plan.</p><a className="button button-light" href="mailto:hello@mayabrookshomes.com">Start a conversation <span>↗</span></a></div></section>
      <footer className="shell"><div className="brand"><span>MB</span><b>Maya Brooks</b><small>Real Estate</small></div><p>hello@mayabrookshomes.com · (503) 555-0148</p><small>© 2026 Maya Brooks Real Estate. Equal Housing Opportunity.</small></footer>

      <button className="chat-launch" onClick={() => setChatOpen(!chatOpen)} aria-label="Toggle AI home guide">{chatOpen ? "×" : "✦"}</button>
      {chatOpen && <aside className="chat" aria-label="AI home guide"><header><div><span>✦</span><p><b>Haven</b><small><i/> AI home guide</small></p></div><button onClick={() => setChatOpen(false)} aria-label="Close chat">×</button></header><div className="messages">{messages.map((m, i) => <div className={`message ${m.from}`} key={i}>{m.text}</div>)}</div>{messages.length < 3 && <div className="chips">{Object.keys(answers).map(k => <button key={k} onClick={() => ask(k)}>{k.charAt(0).toUpperCase()+k.slice(1)}</button>)}</div>}<form onSubmit={send}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a question…" aria-label="Ask Haven"/><button aria-label="Send">↑</button></form><small className="disclaimer">General guidance only · Maya will confirm the details.</small></aside>}
    </main>
  );
}

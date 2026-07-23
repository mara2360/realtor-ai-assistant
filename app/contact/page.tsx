import Link from "next/link";
import SiteNav from "../_components/SiteNav";

export default function ContactPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#contact-heading">Skip to main content</a>
      <SiteNav />

      <header className="page-hero shell"><p className="eyebrow">Ask Block Atlas</p><h1 id="contact-heading">Questions are welcome.</h1><p>Need a concept unpacked, spotted something confusing, or have an idea for a future field note? Send it our way.</p></header>

      <section className="contact-layout shell">
        <div className="contact-note"><p className="eyebrow">Before you send</p><h2>What we can help with.</h2><p>Questions about networks, wallets, security basics, and research methods are all welcome. Block Atlas provides educational context—not personalized investment recommendations.</p><a href="mailto:hello@blockatlas.xyz">hello@blockatlas.xyz</a></div>
        <form className="contact-form" action="mailto:hello@blockatlas.xyz" method="post" encType="text/plain">
          <div><label htmlFor="name">Name</label><input id="name" name="Name" autoComplete="name" required /></div>
          <div><label htmlFor="email">Email</label><input id="email" name="Email" type="email" autoComplete="email" required /></div>
          <div><label htmlFor="topic">Topic</label><select id="topic" name="Topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Networks</option><option>Wallets and security</option><option>Research method</option><option>Field note suggestion</option><option>Something else</option></select></div>
          <div><label htmlFor="message">Question</label><textarea id="message" name="Question" rows={6} required /></div>
          <button className="button" type="submit">Prepare email <span aria-hidden="true">→</span></button>
          <small>Your email app will open with this message. Block Atlas does not collect your information on this website.</small>
        </form>
      </section>

      <footer className="shell"><Link className="brand" href="/"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer>
    </main>
  );
}

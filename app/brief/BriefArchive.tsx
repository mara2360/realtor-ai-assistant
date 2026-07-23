"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { posts } from "./posts";

export default function BriefArchive() {
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    window.location.href = `mailto:hello@blockatlas.xyz?subject=${encodeURIComponent("Subscribe me to the Block Atlas brief")}&body=${encodeURIComponent(`Please add ${email} to the Block Atlas newsletter.`)}`;
  }

  return <>
    <section className="brief-archive shell" aria-labelledby="archive-heading"><div className="brief-section-head"><p className="eyebrow">From the archive</p><h2 id="archive-heading">Past field notes.</h2></div><div className="post-grid">{posts.map((post) => <article key={post.slug}><div><span>{post.category}</span><small>{post.date}</small></div><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={`/brief/${post.slug}`} aria-label={`Read ${post.title}`}>Read field note <span aria-hidden="true">→</span></Link><small>{post.readTime}</small></article>)}</div></section>
    <section className="newsletter"><div className="shell newsletter-grid"><div><p className="eyebrow">Newsletter signup</p><h2>Get the signal, not the noise.</h2><p>One concise email on networks, narratives, security, and the risks worth noticing.</p></div><form onSubmit={subscribe}><label htmlFor="newsletter-email">Email address</label><div><input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /><button className="button" type="submit">Join the brief <span aria-hidden="true">→</span></button></div><small>Your email app will open with a prepared signup request. Block Atlas does not store your address on this website.</small></form></div></section>
  </>;
}

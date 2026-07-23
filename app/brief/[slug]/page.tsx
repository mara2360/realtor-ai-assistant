import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "../../_components/SiteNav";
import { posts } from "../posts";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <main id="main-content"><a className="skip-link" href="#article-heading">Skip to article</a><SiteNav /><article className="field-note shell"><header><p className="eyebrow">{post.category} · {post.date}</p><h1 id="article-heading">{post.title}</h1><p>{post.excerpt}</p><small>{post.readTime} · Educational content only</small></header><div className="field-note-body">{post.sections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div><aside><b>Keep researching.</b><p>Use this field note as a starting point, then verify important details with primary documentation and current data.</p><Link className="button" href="/brief">Back to all field notes <span aria-hidden="true">→</span></Link></aside></article><footer className="shell"><Link className="brand" href="/"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link><p>hello@blockatlas.xyz · Research over reaction</p><small>© 2026 Block Atlas. Educational content only—not financial advice.</small></footer></main>;
}

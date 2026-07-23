import Link from "next/link";

export default function SiteNav() {
  return <nav className="nav shell" aria-label="Primary navigation">
    <Link className="brand" href="/" aria-label="Block Atlas home"><span>BA</span><b>Block Atlas</b><small>Crypto Field Notes</small></Link>
    <div className="navlinks"><Link href="/networks">Networks</Link><Link href="/method">Method</Link><Link href="/manifesto">Manifesto</Link><Link href="/contact">Contact</Link></div>
    <Link className="button button-small" href="/brief">Get the brief <span aria-hidden="true">↗</span></Link>
  </nav>;
}

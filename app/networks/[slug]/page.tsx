import { notFound } from "next/navigation";
import AtlasPage from "../../_components/AtlasPage";

const profiles = {
  bitcoin: {
    eyebrow: "Protocol profile · Bitcoin",
    title: "Digital scarcity, secured by energy.",
    intro: "Bitcoin is a decentralized monetary network designed to move and preserve value without a central issuer. Its narrow scope is a feature: settlement first, experimentation second.",
    facts: [["Launched", "2009"], ["Consensus", "Proof of work"], ["Supply", "21 million maximum"], ["Native asset", "BTC"]],
    features: [
      { label: "Architecture", title: "A public settlement ledger", copy: "Thousands of independently operated nodes verify the same transaction history. Miners compete to add blocks, while nodes enforce the network's rules and reject invalid changes." },
      { label: "Monetary policy", title: "Predictable issuance", copy: "New bitcoin enters circulation through block rewards that halve roughly every four years. The fixed maximum supply is enforced by network consensus, not a company promise." },
      { label: "Primary use", title: "Durable global value transfer", copy: "Bitcoin prioritizes censorship resistance, final settlement, and long-term monetary credibility. The Lightning Network can support smaller, faster payments above the base layer." },
      { label: "Tradeoffs", title: "Security over flexibility", copy: "Proof of work consumes significant energy, base-layer throughput is intentionally limited, and self-custody introduces irreversible responsibility. Its scripting system is less expressive than general-purpose smart-contract networks." },
      { label: "Research questions", title: "What to verify", copy: "Study miner economics, fee-market health, custody choices, network decentralization, and the assumptions behind any yield or wrapped-Bitcoin product." },
    ],
  },
  ethereum: {
    eyebrow: "Protocol profile · Ethereum",
    title: "A programmable settlement layer.",
    intro: "Ethereum is a shared computing network where smart contracts define assets, markets, organizations, and applications. Its value comes from composability—and so do many of its risks.",
    facts: [["Launched", "2015"], ["Consensus", "Proof of stake"], ["Execution", "EVM smart contracts"], ["Native asset", "ETH"]],
    features: [
      { label: "Architecture", title: "Shared state and smart contracts", copy: "Validators agree on the state of the network while the Ethereum Virtual Machine executes application code. Every transaction consumes gas based on the computation and storage it requires." },
      { label: "Scaling", title: "A rollup-centered roadmap", copy: "Layer-two networks execute many transactions away from Ethereum's main chain, then publish proofs or data back to it. This expands capacity while introducing bridges, sequencers, and additional trust assumptions." },
      { label: "Primary use", title: "Open financial and digital infrastructure", copy: "Ethereum supports stablecoins, decentralized exchanges, lending, tokenized assets, identity experiments, games, and coordination tools that can interact with one another." },
      { label: "Tradeoffs", title: "Composability expands the attack surface", copy: "Smart-contract bugs, malicious approvals, oracle failures, governance capture, and bridge exploits can create losses even when the Ethereum base layer works as intended." },
      { label: "Research questions", title: "What to verify", copy: "Check contract audits, upgrade permissions, administrator keys, oracle design, liquidity depth, layer-two withdrawal assumptions, and exactly what gives a token value." },
    ],
  },
  solana: {
    eyebrow: "Protocol profile · Solana",
    title: "High-throughput on-chain coordination.",
    intro: "Solana is designed for fast, low-cost interaction at global scale. It aims to keep applications and liquidity on one highly performant shared network.",
    facts: [["Launched", "2020"], ["Consensus", "Proof of stake + proof of history"], ["Design", "Parallel execution"], ["Native asset", "SOL"]],
    features: [
      { label: "Architecture", title: "A synchronized high-speed ledger", copy: "Proof of history provides a cryptographic clock that helps validators order events, while proof of stake supports consensus. The runtime can process non-overlapping transactions in parallel." },
      { label: "Performance", title: "Low-cost, frequent interaction", copy: "Solana's design supports trading, payments, games, collectibles, and consumer applications where users may sign many transactions and fees must remain small." },
      { label: "Primary use", title: "Consumer and market applications", copy: "The network is widely used for decentralized exchanges, stablecoin transfers, token launches, mobile experiences, and applications that benefit from rapid state updates." },
      { label: "Tradeoffs", title: "Performance raises operational demands", copy: "Validator hardware and bandwidth requirements are higher than on many networks. Congestion, client diversity, application security, and past periods of degraded performance remain important research areas." },
      { label: "Research questions", title: "What to verify", copy: "Study validator concentration, client diversity, transaction failure rates, token issuance, application permissions, liquidity quality, and whether low fees encourage sustainable usage or short-lived speculation." },
    ],
  },
} as const;

export function generateStaticParams() { return Object.keys(profiles).map((slug) => ({ slug })); }

export default async function NetworkProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = profiles[slug as keyof typeof profiles];
  if (!profile) notFound();
  return <AtlasPage eyebrow={profile.eyebrow} title={profile.title} intro={profile.intro} features={[...profile.features]} cta="Ask about this network" ctaHref="/contact" ctaHeading="Keep following the evidence."><section className="network-snapshot"><div className="shell"><p className="eyebrow">At a glance</p><div>{profile.facts.map(([label, value]) => <article key={label}><span>{label}</span><b>{value}</b></article>)}</div><small>Network details can change. Verify current information with primary protocol documentation before acting.</small></div></section></AtlasPage>;
}

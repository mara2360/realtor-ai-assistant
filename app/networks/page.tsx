import AtlasPage from "../_components/AtlasPage";
export default function NetworksPage() { return <AtlasPage eyebrow="Network field guide" title="Three networks. Three different jobs." intro="A practical comparison of the design choices behind Bitcoin, Ethereum, and Solana—without pretending they are interchangeable." features={[
  { label: "Bitcoin", title: "Secure settlement", copy: "A deliberately constrained monetary network built around scarcity, proof of work, and durable global settlement.", href: "/networks/bitcoin", linkLabel: "Explore Bitcoin" },
  { label: "Ethereum", title: "Programmable ownership", copy: "A general-purpose smart-contract platform where applications and assets share a common, composable execution layer.", href: "/networks/ethereum", linkLabel: "Explore Ethereum" },
  { label: "Solana", title: "High-throughput coordination", copy: "A fast network optimized for low-cost activity, consumer applications, trading, and frequent on-chain interaction.", href: "/networks/solana", linkLabel: "Explore Solana" },
]} />; }

import AtlasPage from "../_components/AtlasPage";
import MethodGraph from "./MethodGraph";
export default function MethodPage() { return <AtlasPage eyebrow="The Block Atlas method" title="Research without the rush." intro="A repeatable way to separate durable signals from urgency, tribal narratives, and price-driven certainty." cta="Ask a question" ctaHref="/contact" ctaHeading="Still sorting through the signal?" features={[
  { label: "Start", title: "Understand the why", copy: "Name the problem a network claims to solve, who benefits, and why a decentralized system is useful before looking at price." },
  { label: "Trace", title: "Map the risk", copy: "Follow custody, code, liquidity, governance, and incentive risks. Every convenience introduces a tradeoff worth naming." },
  { label: "Verify", title: "Check the signal", copy: "Prefer primary documentation, transparent data, and patient observation over screenshots, slogans, and anonymous certainty." },
]}><MethodGraph /></AtlasPage>; }

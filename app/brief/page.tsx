import AtlasPage from "../_components/AtlasPage";
import BriefArchive from "./BriefArchive";
export default function BriefPage() { return <AtlasPage eyebrow="The weekly reality check" title="One brief. Better questions." intro="A concise field note on networks, narratives, security, and the risks worth noticing—written for curious humans." cta="Ask Block Atlas" ctaHref="/contact" features={[
  { label: "Networks", title: "What changed", copy: <>Meaningful protocol updates, adoption signals, and ecosystem shifts<br className="desktop-break" /> explained without release-note overload.</> },
  { label: "Narratives", title: "What is moving attention", copy: <>A calm read on the stories shaping market behavior, including where<br className="desktop-break" /> the evidence is thin or incentives are hidden.</> },
  { label: "Risk", title: "What deserves caution", copy: <>Security incidents, structural fragility, and practical steps that help<br className="desktop-break" /> readers investigate before taking action.</> },
]}><BriefArchive /></AtlasPage>; }

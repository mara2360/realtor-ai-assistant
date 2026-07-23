import AtlasPage from "../_components/AtlasPage";
export default function BriefPage() { return <AtlasPage eyebrow="The weekly reality check" title="One brief. Better questions." intro="A concise field note on networks, narratives, security, and the risks worth noticing—written for curious humans." cta="Email Block Atlas" features={[
  { label: "Networks", title: "What changed", copy: "Meaningful protocol updates, adoption signals, and ecosystem shifts explained without release-note overload." },
  { label: "Narratives", title: "What is moving attention", copy: "A calm read on the stories shaping market behavior, including where the evidence is thin or incentives are hidden." },
  { label: "Risk", title: "What deserves caution", copy: "Security incidents, structural fragility, and practical steps that help readers investigate before taking action." },
]} />; }

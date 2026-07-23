"use client";

import { useState } from "react";

const dimensions = [
  { key: "evidence", label: "Primary evidence", color: "var(--acid)" },
  { key: "security", label: "Security review", color: "var(--red)" },
  { key: "incentives", label: "Aligned incentives", color: "var(--blue)" },
  { key: "liquidity", label: "Market resilience", color: "var(--coral)" },
] as const;

type Values = Record<(typeof dimensions)[number]["key"], number>;

export default function MethodGraph() {
  const [values, setValues] = useState<Values>({ evidence: 68, security: 52, incentives: 44, liquidity: 36 });
  const score = Math.round(Object.values(values).reduce((total, value) => total + value, 0) / dimensions.length);
  const reading = score >= 75 ? "Strong signal" : score >= 50 ? "Keep verifying" : "High uncertainty";
  const explanation = score >= 75 ? "The research case is supported across several independent dimensions." : score >= 50 ? "Some evidence is useful, but at least one important dimension still needs work." : "The current case depends on too many weak or unverified assumptions.";

  function update(key: keyof Values, value: number) { setValues((current) => ({ ...current, [key]: value })); }

  return (
    <section className="method-graph" aria-labelledby="method-graph-title">
      <div className="shell">
        <div className="method-graph-head"><p className="eyebrow">Interactive research map</p><h2 id="method-graph-title">Build the signal.</h2><p>Adjust each research dimension to see how a thesis changes when evidence strengthens—or a hidden risk appears.</p></div>
        <div className="method-graph-grid">
          <div className="graph-controls">
            {dimensions.map((dimension) => <div className="graph-control" key={dimension.key}>
              <label htmlFor={`range-${dimension.key}`}><span>{dimension.label}</span><output>{values[dimension.key]}%</output></label>
              <input id={`range-${dimension.key}`} type="range" min="0" max="100" step="1" value={values[dimension.key]} onChange={(event) => update(dimension.key, Number(event.target.value))} />
            </div>)}
            <button type="button" className="text-button" onClick={() => setValues({ evidence: 68, security: 52, incentives: 44, liquidity: 36 })}>Reset graph</button>
          </div>
          <div className="graph-panel" role="group" aria-label={`Research signal graph. Overall score ${score} percent. ${reading}.`}>
            <div className="graph-scale" aria-hidden="true"><span>100</span><span>90</span><span>80</span><span>70</span><span>60</span><span>50</span><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span></div>
            <div className="graph-bars" aria-hidden="true">{dimensions.map((dimension) => <div className="graph-column" key={dimension.key}><div className="graph-bar"><i style={{ height: `${values[dimension.key]}%`, background: dimension.color }}><span>{values[dimension.key]}%</span></i></div><span>{dimension.label}</span></div>)}</div>
            <div className="graph-reading" aria-live="polite"><strong><small>Overall average</small>{score}%</strong><div><b>{reading}</b><p>{explanation} The overall percentage is the average of all four bars.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

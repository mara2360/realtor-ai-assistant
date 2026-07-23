"use client";

import { useState } from "react";

const scenarios = [
  {
    prompt: "A token is surging and your feed says this is the last chance to buy.",
    options: [
      { label: "Buy before researching", response: "Urgency is doing the thinking. Pause and build a thesis you can explain without mentioning price.", grounded: false },
      { label: "Write down the thesis first", response: "Good signal. Naming the problem, evidence, and risks turns borrowed confidence into your own research.", grounded: true },
    ],
  },
  {
    prompt: "A new app asks for an unlimited wallet approval.",
    options: [
      { label: "Approve it for convenience", response: "Convenience can expand the damage of a compromised app. Check permissions and limit access before signing.", grounded: false },
      { label: "Review and limit permissions", response: "Good signal. Security is a repeated practice, not a setting you finish once.", grounded: true },
    ],
  },
  {
    prompt: "Two credible sources disagree about where a network is headed.",
    options: [
      { label: "Pick the more confident prediction", response: "Confidence is not evidence. Keep the disagreement visible and identify what new information would change your view.", grounded: false },
      { label: "Track what remains uncertain", response: "Good signal. Uncertainty is useful information when it helps you define what to watch next.", grounded: true },
    ],
  },
];

export default function ManifestoCheck() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const completed = Object.keys(answers).length;
  const grounded = Object.entries(answers).filter(([scenario, option]) => scenarios[Number(scenario)].options[option].grounded).length;

  return (
    <section className="signal-check" aria-labelledby="signal-check-title">
      <div className="shell">
        <div className="signal-check-head"><div><p className="eyebrow">Interactive field test</p><h2 id="signal-check-title">What would you do next?</h2></div><p aria-live="polite">{completed} of {scenarios.length} considered</p></div>
        <div className="signal-meter" aria-hidden="true"><span style={{ width: `${(completed / scenarios.length) * 100}%` }} /></div>
        <div className="scenario-list">
          {scenarios.map((scenario, index) => <article key={scenario.prompt}>
            <span>Scenario {index + 1}</span><h3>{scenario.prompt}</h3>
            <div className="scenario-options">{scenario.options.map((option, optionIndex) => <button type="button" key={option.label} className={answers[index] === optionIndex ? "selected" : ""} aria-pressed={answers[index] === optionIndex} onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}>{option.label}</button>)}</div>
            {answers[index] !== undefined && <p className="scenario-response" role="status">{scenario.options[answers[index]].response}</p>}
          </article>)}
        </div>
        {completed === scenarios.length && <div className="signal-result" role="status"><b>{grounded === 3 ? "Your instincts match the manifesto." : "The pause is the practice."}</b><p>{grounded === 3 ? "You chose evidence, limited permissions, and visible uncertainty—the habits Block Atlas is built around." : "Good research is not about never feeling urgency. It is about creating enough space to make a deliberate next move."}</p><button type="button" className="text-button" onClick={() => setAnswers({})}>Try again</button></div>}
      </div>
    </section>
  );
}

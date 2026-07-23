export const posts = [
  {
    slug: "wallet-permissions-before-you-sign",
    date: "July 11, 2026",
    category: "Security",
    title: "Wallet permissions: what to check before you sign",
    excerpt: "A practical field guide to approvals, spending limits, and the small pause that can prevent a large mistake.",
    readTime: "6 min read",
    sections: [
      ["A signature is an instruction", "Connecting a wallet is not the same as giving an application permission to move assets. The important moment comes when a transaction or message asks for a signature. Read the requested action, the asset involved, and the spending limit before approving anything."],
      ["Unlimited approvals deserve scrutiny", "Some applications request permission to spend an unlimited amount of a token so users do not need to approve each future interaction. That can be convenient, but it also increases the possible damage if the application or contract is compromised. Use limited approvals when they are available."],
      ["Build a repeatable check", "Confirm the domain, slow down urgent prompts, verify the contract through a trusted source, and test unfamiliar workflows with a small amount. Review old approvals periodically and revoke access that is no longer needed."],
    ],
  },
  {
    slug: "throughput-is-not-the-whole-story",
    date: "June 27, 2026",
    category: "Networks",
    title: "Throughput is not the whole story",
    excerpt: "Why transaction counts need context from costs, hardware requirements, failures, demand, and decentralization.",
    readTime: "7 min read",
    sections: [
      ["Start with the workload", "A network can report a high transaction count while serving a very different workload from another chain. Payments, trading updates, validator messages, and complex smart-contract calls should not be treated as identical units of useful activity."],
      ["Ask what performance costs", "Fast execution may require more capable hardware, higher bandwidth, different storage assumptions, or additional layers. These are design choices, not automatic flaws, but they shape who can validate the network and how it behaves under stress."],
      ["Measure the user experience", "Useful performance includes confirmation reliability, predictable fees, application responsiveness, and recovery from congestion. No single chart captures the complete tradeoff. Compare several primary metrics and understand how each is produced."],
    ],
  },
  {
    slug: "narrative-or-network-signal",
    date: "June 6, 2026",
    category: "Research",
    title: "Narrative or network signal?",
    excerpt: "A simple framework for separating attention, adoption, incentives, and evidence when a crypto story gets loud.",
    readTime: "5 min read",
    sections: [
      ["Attention can move faster than evidence", "A compelling story can attract capital, developers, and users before its central claims have been tested. Attention matters because it can coordinate activity, but it should not be confused with durable demand or technical progress."],
      ["Look for independent confirmation", "Strong signals appear in more than one place: primary documentation, observable network data, multiple teams building useful products, and users returning after incentives decline. Be cautious when every claim traces back to the same interested source."],
      ["Write down what would change your mind", "A useful thesis includes conditions that could disprove it. Define the adoption, security, economics, and competition questions you need to revisit. This turns research into an ongoing process instead of a defense of an early opinion."],
    ],
  },
] as const;

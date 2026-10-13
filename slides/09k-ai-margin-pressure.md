# Change can outrun our view

Rendered step: `#/ai-margin-pressure`.

## Slide copy and sequence

**Change can outrun our view**

We can consume error margin before our signals catch up.

Unverified handoffs / are work still owed.

**Security exposure**

Unchecked permissions, dependencies / and data paths can hide risk.

**Incident understanding**

Who can explain the deployed change / and diagnose what breaks?

**SREs must close the loop**

Validate changes; update probes, alerts / and runbooks; limit incoming work.

Coding study: 50% vs 67% on an immediate skills quiz. / AI vs no AI; n=52 · unfamiliar library · Anthropic, Jan 2026

Protect understanding, verification and the route back.

Anthropic study · 2026 · Workslop survey · 2025 · Diagram and pile: illustrative mechanism.

Automatic visual: eight slop buckets descend over about twelve seconds and form a pile at the perceived limit. The AI point crosses the dotted line into the protected buffer while the last observed point stays behind.

## Speaker notes

Buckets descend slowly and collect at the dotted perceived limit. Each represents an unfinished handoff that someone must verify, process and understand, not an incident or a measured quantity of danger. The AI ball moves into the strip between dotted and solid lines while the last observed red point stays behind. That is an illustrative lag in perception: crossing the dotted line consumes error margin but does not itself mean the solid functional limit has been crossed. Neither the pile nor the lines exerts an automatic force. The animated separation and trajectory are this talk's synthesis, not empirical results. Anthropic randomized 52 mostly junior Python engineers learning Trio. Mean immediate quiz performance was 50% with AI and 67% without it; debugging had the largest gap. Completion speed did not improve significantly. This small, short study does not measure long-term deskilling or production incidents. Security exposure and harder incident diagnosis are potential consequences inferred here when verification and understanding fail to keep pace. AI used for comprehension can support learning and assurance. SRE work includes checking intent and permissions, testing dependency behavior and failure modes, and reconfiguring monitoring when service behavior changes. Monitoring alone does not process the backlog. Pair it with clear ownership, capacity to investigate, admitted-change limits, staged rollout, rollback and recovery drills. Track review age, unknown ownership, stale probes and rehearsed diagnostic ability alongside deployment volume. Reduced motion displays the final pile/state without falling or drifting.

## Sources

- [Anthropic study · 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)
- [Workslop survey · 2025](https://www.betterup.com/workslop)

Evidence scope: [AI boundary evidence](../research/2026-10-13-ai-boundary-evidence.md).

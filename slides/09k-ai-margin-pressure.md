# Change can outrun our view

Rendered step: `#/ai-margin-pressure`.

## Slide copy and sequence

**Change can outrun our view**

We can consume error margin before our signals catch up.

Unverified handoffs<br />are work still owed.

**Security exposure**

Unchecked permissions, dependencies<br />and data paths can hide risk.

**Incident understanding**

Who can explain the deployed change<br />and diagnose what breaks?

**SREs must close the loop**

Test people and tools; validate changes.<br />Update probes/runbooks; keep authority<br />to stop and recover.

Coding study: **50% vs 67%** on an immediate skills quiz.<br />AI vs no AI; n=52 · unfamiliar library · Anthropic, Jan 2026

Use AI to improve assurance as well as output.

[Anthropic study · 2026](https://www.anthropic.com/research/AI-assistance-coding-skills) · [Workslop survey · 2025](https://www.betterup.com/workslop) · Diagram and pile: illustrative mechanism.

Automatic visual: eight slop buckets descend and form a pile at the perceived limit. The AI point enters the protected buffer while the last observed point stays behind. Presenter reveals: incident understanding; SRE response; final assurance message.

## Speaker notes

Buckets descend slowly and collect at the dotted perceived limit. Each represents an unfinished handoff that someone must verify, process and understand, not an incident or a measured quantity of danger. The AI ball moves into the strip between dotted and solid lines while the last observed red point stays behind. That is an illustrative lag in perception: crossing the dotted line consumes error margin but does not itself mean the solid functional limit has been crossed. Neither the pile nor the lines exerts an automatic force. The animated separation and trajectory are this talk's synthesis, not empirical results. Anthropic randomized 52 mostly junior Python engineers learning Trio. Mean immediate quiz performance was 50% with AI and 67% without it; debugging had the largest gap. Completion speed did not improve significantly. This small, short study does not measure long-term deskilling or production incidents. Security exposure and harder incident diagnosis are potential consequences inferred here when verification and understanding fail to keep pace. AI used for comprehension can support learning and assurance. SRE work includes checking intent and permissions, testing dependency behavior and failure modes, and reconfiguring monitoring when service behavior changes. Monitoring alone does not process the backlog. Pair it with clear ownership, capacity to investigate, admitted-change limits, staged rollout, rollback and recovery drills. Track review age, unknown ownership, stale probes and rehearsed diagnostic ability alongside deployment volume. Reduced motion displays the final pile/state without falling or drifting.

**Close the loop**

A persuasive explanation is not independent evidence. Enacted decisions can consume margin before the control structure observes the change. Rasmussen’s measuring-channel warning applies here: “No control system will perform better than its measuring channel.” Usable signals still need interpretation, practical authority and response capacity.

Retain the means to notice, challenge, stop and recover. Verify intent and source evidence; update monitoring probes, alerts and runbooks when service behaviour changes. Limit admitted work when assurance cannot keep pace. Use controlled exercises to evaluate useful output, convincing mistakes and recovery under pressure, and repeat evaluation after material changes. Monitoring proxies do not reveal the exact functional limit.

The closing objective is sufficient margin, bounded excursions and recoverability. Use AI to strengthen tests, diagnosis and verification where joint evidence supports it. Sense, Constrain, Adapt and Correct remain supporting action verbs in TALK.md, not another visible framework. Chapter 5 does not use Rasmussen’s model or establish this talk’s review-load heuristic; these connections are the talk’s software-workflow synthesis.

- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

## Sources

- [Anthropic study · 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)
- [Workslop survey · 2025](https://www.betterup.com/workslop)
- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

Evidence scope: [AI boundary evidence](../research/2026-10-13-ai-boundary-evidence.md).

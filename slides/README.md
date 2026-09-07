# Slide source and narrative notes

The numbered Markdown files in this directory mirror the rendered Impress deck in `src/index.html`. They preserve one-slide-per-file copy and speaker notes, but they are not an automatic rendering input.

## Current rendered flow

1. [Title](01-title.md) — `#/title`
2. [Takeaways](02-takeaways.md) — `#/takeaways`
3. [SocioTechnical 101](03-sociotechnical-101.md) — `#/sociotechnical-101`
4. [Resilience Engineering 101](04-resilience-engineering-101.md) — `#/resilience-engineering-101`
5. [The Model](05-model.md) — `#/model`
6. [Rasmussen in plain English](06-model-in-plain-english.md) — `#/model-in-plain-english`
7. [Rasmussen source slide](07-the-model.md) — `#/the-model`
8. [Socio-technical systems definition](08-social-and-systems-wiki.md) — `#/social-and-systems-wiki`
9. [People, technology, and the structural hierarchy](09-social-and-systems.md) — `#/social-and-systems`

## Archived working ideas

The files in [`ideas/`](ideas/) preserve material that may be adapted later. They are not currently rendered in the deck.

This revision incorporates a critical rereading of Rasmussen's model and makes the 2026 argument distinct from the 2024 SREcon talk.

## Conceptual guardrails

- The operating point represents one current operating state and moves continuously.
- Boundaries constrain the feasible space; pressures and control loops move the point.
- Boundary awareness does not automatically create a restoring response. The organization must also have timely feedback, authority, and response capacity.
- In Rasmussen's Figure 3, the dotted perceived or marginal boundary and error margin appear only beside the boundary of functionally acceptable performance—not beside the economic or workload boundaries.
- There is no privileged geometric center. Corrective action restores margin, control, and recoverability.
- One point can have little remaining margin to two boundaries when it approaches their intersection.
- Keep economic state, constraint, and control visually distinct: usage and commitments can move the point; changes in sustainable financial capacity can reshape the economic boundary; forecasts are signals, while budgets, quotas, and ROI targets are controller setpoints or decision thresholds.
- A falling token or serving price is a unit-cost change, not proof that aggregate workflow cost is falling.
- The 2024 talk explained the geometry of drift. The 2026 talk asks whether organizational feedback can keep pace with AI-enabled change.
- AI is not a fourth boundary. It changes existing gradients and control-loop gain and delay, and it can sometimes reshape existing constraints.

- [The new question](ideas/02-question.md)
- [Operating point](ideas/03-operating-point.md)
- [Control-loop timing](ideas/04-control-loop-bandwidth.md)
- [AI changes the control loop](ideas/05-ai-acceleration.md)
- [Dynamic economic envelope](ideas/06-economic-boundary.md)
- [Workload constraint](ideas/07-workload-boundary.md)
- [Acceptable-performance boundary](ideas/08-performance-boundary.md)
- [Multiple closing margins](ideas/09-drift.md)
- [Controlled operating regime](ideas/10-safe-envelope.md)
- [Control-loop bandwidth](ideas/11-response-pattern.md)
- [Takeaways](ideas/12-takeaways.md)
- [References](ideas/13-references.md)
- [Close](ideas/14-close.md)

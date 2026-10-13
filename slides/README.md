# Slide source and narrative notes

The numbered Markdown files in this directory mirror the rendered Impress deck in `src/index.html`. They preserve one-slide-per-file copy and speaker notes, but they are not an automatic rendering input.

## Current rendered flow

1. [Title](01-title.md) — `#/title`
2. [Takeaways](02-takeaways.md) — `#/takeaways`
3. [One more thing](03-before-we-continue.md) — `#/before-we-continue`
4. [Socio-technical systems definition](04-social-and-systems-wiki.md) — `#/social-and-systems-wiki`
5. [Rasmussen source slide](05-model.md) — `#/the-model`
6. [The research behind the model](06-paper-themes.md) — `#/paper-themes`
7. [Social control is multi-layered](07-social-and-systems.md) — `#/social-and-systems`
8. [Putting it Together](07a-complex-system-and-boundaries.md) — `#/complex-system-and-boundaries`
9. [The Fish Diagram](08-fish-diagram.md) — `#/the-fish-diagram`
10. [Diagram Legend](09-diagram-legend.md) — `#/diagram-legend`
11. [Economic Boundary](09a-economic-boundary.md) — `#/economic-boundary`
12. [Economic Boundary Actions](09b-economic-boundary-actions.md) — `#/economic-boundary-actions`
13. [Workload Boundary](09c-workload-boundary.md) — `#/workload-boundary`
14. [Workload Boundary Actions](09d-workload-boundary-actions.md) — `#/workload-boundary-actions`
15. [Boundary of Acceptable Performance](09e-performance-boundary.md) — `#/performance-boundary`
16. [Protect the Error Margin](09f-error-margin.md) — `#/error-margin`
17. [AI enters the operating point](09g-ai-operating-point.md) — `#/ai-operating-point`
18. [AI in the Fish Diagram](09h-ai-fish-diagram.md) — `#/ai-fish-diagram`
19. [AI has to be paid for](09i-ai-economic-pressure.md) — `#/ai-economic-pressure`
20. [AI and least effort](09j-ai-workload-pressure.md) — `#/ai-workload-pressure`
21. [Change can outrun our view](09k-ai-margin-pressure.md) — `#/ai-margin-pressure`

The deck contains 21 content steps and two overview/overlay camera steps, for 23 Impress steps. Six boundary close-ups explain capacity changes, signals, actions, failure consequences and protection. The five-step AI camera journey follows the fish overview and ends at the error-margin scene with a final assurance reveal. Content is plain and unframed; coordinates and detailed positioning remain for a later pass.

The former seven-slide sequence from Human behaviour through Keeping the model in view has been integrated into earlier steps and removed. Behaviour and control evidence now lives in the hierarchy, arrival, workload and margin notes. Whole-workflow economics lives in the economic close-ups; joint evaluation lives in acceptable performance; recovery and the conventional-automation AWS example live in the error-margin notes. See the [integration map](../research/2026-10-13-slide-consolidation.md).

The sources remain distinct: Rasmussen supplies the model, Chapter 5 supplies a contemporary resilience synthesis, and the software mechanism is this talk's application. Clinical joint-evaluation results do not estimate LLM software risk; the AWS example has no reported generative AI involvement.

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
- AI changes the behaviour-shaping conditions and participates in recursive adaptation; it does not determine one uniform human response.

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

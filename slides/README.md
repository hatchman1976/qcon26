# Slide source and narrative notes

The numbered Markdown files in this directory mirror the rendered Impress deck in `src/index.html`. They preserve one-slide-per-file copy and speaker notes, but they are not an automatic rendering input.

## Current rendered flow

1. [Title](01-title.md) — `#/title`
2. [Opening hook: capability and control](01b-opening-hook.md) — `#/opening-hook`
3. [WHOAMI](01a-whoami.md) — `#/whoami`
4. [Takeaways](02-takeaways.md) — `#/takeaways`
5. [One more thing](03-before-we-continue.md) — `#/before-we-continue`
6. [Socio-technical systems definition](04-social-and-systems-wiki.md) — `#/social-and-systems-wiki`
7. [Rasmussen source slide](05-model.md) — `#/the-model`
8. [The research behind the model](06-paper-themes.md) — `#/paper-themes`
9. [Social control is multi-layered](07-social-and-systems.md) — `#/social-and-systems`
10. [Putting it together](07a-complex-system-and-boundaries.md) — `#/complex-system-and-boundaries`
11. [The Fish Diagram](08-fish-diagram.md) — `#/the-fish-diagram`
12. [Diagram Legend](09-diagram-legend.md) — `#/diagram-legend`
13. [Economic Boundary](09a-economic-boundary.md) — `#/economic-boundary`
14. [Economic Boundary Actions](09b-economic-boundary-actions.md) — `#/economic-boundary-actions`
15. [Workload Boundary](09c-workload-boundary.md) — `#/workload-boundary`
16. [Workload Boundary Actions](09d-workload-boundary-actions.md) — `#/workload-boundary-actions`
17. [Boundary of Acceptable Performance](09e-performance-boundary.md) — `#/performance-boundary`
18. [Protect the Error Margin](09f-error-margin.md) — `#/error-margin`
19. [AI enters the operating point](09g-ai-operating-point.md) — `#/ai-operating-point`
20. [AI in the Fish Diagram](09h-ai-fish-diagram.md) — `#/ai-fish-diagram`
21. [AI has to be paid for](09i-ai-economic-pressure.md) — `#/ai-economic-pressure`
22. [AI and least effort](09j-ai-workload-pressure.md) — `#/ai-workload-pressure`
23. [The erosion of expertise](09j2-erosion-of-expertise.md) — `#/erosion-of-expertise`
24. [Expertise erosion sequence](09j3-expertise-erosion-sequence.md) — `#/expertise-erosion-sequence`
25. [AI margin — empty placeholder](09k-ai-margin-pressure.md) — `#/ai-margin-pressure`
26. [The cost of a verified outcome](10-workflow-cost.md) — `#/workflow-cost`
27. [Work the team can verify](11-verification-capacity.md) — `#/verification-capacity`
28. [A handoff with evidence](12-evidence-handoff.md) — `#/evidence-handoff`
29. [Intervention and recovery](13-rehearsed-recovery.md) — `#/rehearsed-recovery`
30. [References](14-references.md) — `#/references`

The deck contains 29 content steps, three overview/overlay camera steps and one empty placeholder, for 33 Impress steps. Six boundary close-ups explain capacity changes, signals, actions, failure consequences and protection. The AI camera journey follows the fish overview. Below the workload close-up, an expertise book and quotation lead into a separate complex-system sequence: people and flashing coloured balls; shrugging people; a glowing flame; then “This is Fine”. The AI margin step is an empty placeholder retaining its ID and camera position. The following [AI Fish Diagram overview](09l-ai-fish-diagram-overview.md) returns to the model before the four practical closing slides, ending with **Intervention and recovery**. A final **References** slide follows. Content is plain and unframed; coordinates and detailed positioning remain for a later pass.

The practical section follows one illustrative AI-assisted change to a service's retry behaviour through whole-workflow cost, verification capacity, an inspectable handoff and a rehearsed intervention. The close asks whether people, tools and workflow can detect a convincing mistake, stop further action and restore service. These are proposed engineering practices rather than intervention-study findings. Local thresholds, useful baselines and controlled exercises keep the application specific to the team's work.

The former seven-slide sequence from Human behaviour through Keeping the model in view has been integrated into earlier steps and removed. Behaviour and control evidence now lives in the hierarchy, arrival and workload notes. Whole-workflow economics lives in the economic close-ups; joint evaluation lives in acceptable performance; recovery and the conventional-automation AWS example live in the error-margin notes. See the [integration map](../research/2026-10-13-slide-consolidation.md).

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

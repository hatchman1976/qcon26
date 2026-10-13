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
22. [Human behaviour with LLM tools](10-ai-behaviour.md) — `#/ai-behaviour`
23. [AI enters the control structure](11-ai-control-structure.md) — `#/ai-control-structure`
24. [AI and the economic boundary](12-ai-economic-boundary.md) — `#/ai-economic-boundary`
25. [AI and the workload boundary](13-ai-intervention.md) — `#/ai-intervention`
26. [AI and acceptable performance](14-ai-joint-evaluation.md) — `#/ai-joint-evaluation`
27. [AI and the error margin](15-automation-recovery.md) — `#/automation-recovery`
28. [Keeping the model in view](16-adaptive-control.md) — `#/adaptive-control`

The deck contains 28 content steps and two overview/overlay camera steps, for 30 Impress steps. The six original boundary close-ups now contain examples, signals and actions. A five-step AI camera journey follows the fish overview and leads into the existing human-behaviour material. The economic slide and four closing slides repeat the **Economic / Workload / Performance / Error Margin** theme rail. The active theme is emphasized until the closing model synthesis brings all four into view. Error Margin is the protected performance-side buffer, not a fourth constraint. IDs and filenames remain stable for existing bookmarks.

The notes distinguish Rasmussen's framework, Chapter 5's synthesis, and this talk's software application. Chapter 5 was checked against the supplied full PDF, printed pp. 77–88 (PDF pp. 85–96). The AWS recovery example is retained in the Error Margin notes, with its conventional-automation scope explicit.

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

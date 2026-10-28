# Slide source and narrative notes

The numbered Markdown files in this directory mirror the rendered Impress deck in `src/index.html`. They preserve one-slide-per-file copy and speaker notes, but they are not an automatic rendering input.

Slide titles, section headings and table column headings share the Archivo Black font used by WHOAMI, through the CSS `--heading-font-family` variable. Body copy and diagram labels retain their existing fonts.

## Current rendered flow

1. [Title](01-title.md) — `#/title`
2. [Opening hook: capability and control](01b-opening-hook.md) — `#/opening-hook`
3. [WHOAMI](01a-whoami.md) — `#/whoami`
4. [Takeaways](02-takeaways.md) — `#/takeaways`
5. [Some recurring characters](03-before-we-continue.md) — `#/before-we-continue`
6. [Socio-technical systems definition](04-social-and-systems-wiki.md) — `#/social-and-systems-wiki`
7. [Resilience Engineering](04a-resilience-engineering.md) — `#/resilience-engineering`
8. [Rasmussen source slide](05-model.md) — `#/the-model`
9. [The research behind the model](06-paper-themes.md) — `#/paper-themes`
10. [Social control is multi-layered](07-social-and-systems.md) — `#/social-and-systems`
11. [Putting it together](07a-complex-system-and-boundaries.md) — `#/complex-system-and-boundaries`
12. [The Fish Diagram](08-fish-diagram.md) — `#/the-fish-diagram`
13. [Diagram Legend](09-diagram-legend.md) — `#/diagram-legend`
14. [Economic Boundary](09a-economic-boundary.md) — `#/economic-boundary`
15. [Economic Boundary Actions](09b-economic-boundary-actions.md) — `#/economic-boundary-actions`
16. [Workload Boundary](09c-workload-boundary.md) — `#/workload-boundary`
17. [Workload Boundary Actions](09d-workload-boundary-actions.md) — `#/workload-boundary-actions`
18. [Boundary of Acceptable Performance](09e-performance-boundary.md) — `#/performance-boundary`
19. [Protect the Error Margin](09f-error-margin.md) — `#/error-margin`
20. [AI enters the operating point](09g-ai-operating-point.md) — `#/ai-operating-point`
21. [AI in the Fish Diagram](09h-ai-fish-diagram.md) — `#/ai-fish-diagram`
22. [AI has to be paid for](09i-ai-economic-pressure.md) — `#/ai-economic-pressure`
23. [Tokenomic Progression](09i2-token-economy.md) — `#/token-economy`
24. [Model Enshittification](09i3-model-enshittification.md) — `#/model-enshittification`
25. [AI and least effort](09j-ai-workload-pressure.md) — `#/ai-workload-pressure`
26. [The erosion of expertise](09j2-erosion-of-expertise.md) — `#/erosion-of-expertise`
27. [Expertise erosion sequence](09j3-expertise-erosion-sequence.md) — `#/expertise-erosion-sequence`
28. [AI margin pressure](09k-ai-margin-pressure.md) — `#/ai-margin-pressure`
29. [Skills that protect margin](10-workflow-cost.md) — `#/workflow-cost`
30. [Tool vs Operator](11-verification-capacity.md) — `#/verification-capacity`
31. [We have to adapt](12-evidence-handoff.md) — `#/evidence-handoff`
32. [Humans are adaptable](13-rehearsed-recovery.md) — `#/rehearsed-recovery`
33. [References](14-references.md) — `#/references`

The deck contains 33 content steps and three overview/overlay camera steps, for 36 Impress steps. The Resilience Engineering definition follows the socio-technical systems introduction and precedes Rasmussen's model. Six boundary close-ups explain capacity changes, signals, actions, failure consequences and protection. The AI camera journey follows the fish overview. After AI economics, **Tokenomic Progression** distinguishes maxxing, metering and optimization in a two-column table. Its large footer becomes the shared heading of the following **Model Enshittification** step, which presents Doctorow's three-stage platform pattern as a conditional risk analogy. Below the workload close-up, an expertise book and quotation lead into a separate complex-system sequence: people and flashing coloured balls; shrugging people; a glowing flame; then “This is Fine”. **AI margin pressure** waits for two manual stages: buckets accumulate over the protective Lemming while a separate local ball approaches the dotted margin, then crosses the buffer to the actual performance boundary as a warning pulses. The static **Pressure and control** callout in the margin scene connects accumulated verification work with pressure on protective capacity and the ability to act on warnings. It adds no manual reveal and remains on the world canvas after exit. The global operating point keeps roaming through the scene, the following empty, camera-only [AI Fish Diagram overview](09l-ai-fish-diagram-overview.md) and four closing slides, ending with **Humans are adaptable**. The overview retains its ID and coordinates, owns no text or speaker notes, and is omitted from print. Revealed local phases persist without replay. A final **References** slide follows. Preparation sections in the slide files record the detailed camera and animation sequence; speaker notes carry the argument and evidence limits.

The four-slide closing arc returns to skills, control, boundary takeaways and adaptive capacity, adapting Andrew’s SREcon26 closing structure to this talk. **Skills that protect margin** connects systems understanding, critical judgment and adaptation. **Tool vs Operator** asks how AI is used and controlled, with people, tools and workflow tested together. **We have to adapt** brings back economic, workload and performance pressures and the protected error margin. **Humans are adaptable** closes on expertise, time and authority, and using AI to strengthen our capacity to understand, act and recover. These are the talk’s proposed applications, not guarantees of useful output or immunity from disruption. References follows the close.

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

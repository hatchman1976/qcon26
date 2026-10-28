# AI in the Fish Diagram

Rendered step: `#/ai-fish-diagram`.

## Preparation: slide copy and sequence

And work function and outputs rely heavily on non-determinism?

The diagram shows the three boundary lines, dotted performance-side error margin and one moving AI ball. If the arrival ball was revealed on the previous step, it remains at its settled starting position at 45% opacity as a reference, alongside the persistent “What changes” question. The red operating-point circle remains hidden. The moving ball represents the one current whole-system state. Include the original Fish Diagram's three boundary labels and emojis: 💸 “Boundary to economic failure”, 😢 “Boundary to unacceptable workload”, and 💥 “Boundary of functionally acceptable performance”. On the first visit, the camera zooms out while the moving ball remains stationary. After the slide settles, pause for half a second, then fade in the diagram, all three labels and their emojis together over half a second. Start the ball roaming after this first rendering.

The roaming ball is 44.8px across in this step's 25× scale, giving a world diameter of 1,120 units, equal to the 160px arrival ball at 7× scale. Its starting center at diagram coordinates (512, 404) aligns with the settled reference ball. The reference marks where the illustrated journey began, not an ideal geometric center.

Once the first fade finishes, retain the diagram permanently with the `is-rendered` state. Opening a close-up directly or leaving during the first fade also commits the rendered diagram. Its transparent canvas, boundary lines, labels and emojis remain in place through all navigation; they do not depend on which slide is active, disappear when leaving, or replay their entrance when revisited.

After the diagram renders, the ball follows its continuous six-second motion through the AI slides, the margin-pressure scene, summary, closing slides and camera transitions. Presenter substeps and navigation do not reset it to the center or restart its trajectory. The later [AI margin pressure scene](09k-ai-margin-pressure.md) uses a separate half-size local ball and reference for a two-stage manual illustration; it never takes control of or resizes this global operating point. Returning to that scene retains the last completed manual phase without replay. Reduced-motion mode shows the diagram and labels immediately and pauses global roaming at its current position; each local margin phase settles immediately only when the presenter reveals it.

The question is one native manual substep at the bottom of the diagram, in bold 38px Comic Neue, 35px above the slide's bottom edge. If revealed before the pause ends, it appears with the diagram's fade. Its current reveal state is retained when leaving; returning to this slide resets that substep until the next presenter advance. Print includes the question.

The boundary labels remain with the permanent diagram, including the close-ups, margin pressure scene and summary. Place the workload label slightly higher than on the original Fish Diagram to leave room for the bottom question.

## Speaker notes

### The same constraints still apply

Economic failure, unacceptable workload and functionally unacceptable performance remain the three constraints. The error margin is the protected performance-side buffer, not an additional constraint. AI does not create a fourth boundary.

The moving ball represents one current whole-system state. The reference ball marks the starting position, not a second current state or an ideal geometric centre.

The trajectory illustrates how adaptation under pressure can move the operating state toward the performance side. It is not a measured path. Organisational choices and usable feedback shape the actual trajectory, and no geometric centre guarantees safety.

Ask how non-deterministic outputs change what people can understand, verify and rely on. Examine the consequences for economics, workload, expertise and the capacity to intervene and recover.

Evidence scope: [AI boundary evidence](../research/2026-10-13-ai-boundary-evidence.md).

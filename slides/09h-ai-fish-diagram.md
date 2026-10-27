# AI in the Fish Diagram

Rendered step: `#/ai-fish-diagram`.

## Slide copy and sequence

And work function and outputs rely heavily on non-determinism?

The diagram shows the three boundary lines, dotted performance-side error margin and one AI ball. Include the original Fish Diagram's three boundary labels and emojis: 💸 “Boundary to economic failure”, 😢 “Boundary to unacceptable workload”, and 💥 “Boundary of functionally acceptable performance”. On the first visit, the camera zooms out while the ball remains stationary. After the slide settles, pause for half a second, then fade in the diagram, all three labels and their emojis together over half a second. Start the ball roaming after this first rendering.

Once the first fade finishes, retain the diagram permanently with the `is-rendered` state. Opening a close-up directly or leaving during the first fade also commits the rendered diagram. Its transparent canvas, boundary lines, labels and emojis remain in place through all navigation; they do not depend on which slide is active, disappear when leaving, or replay their entrance when revisited.

After the diagram renders, the ball moves continuously through all slides and camera transitions. Presenter substeps and navigation do not pause it, reset it to the center or restart its trajectory. Reduced-motion mode shows the diagram and labels immediately and pauses the ball at its current position; turning reduced motion off resumes movement without resetting its position.

The question is one native manual substep at the bottom of the diagram, in bold 38px Comic Neue, 35px above the slide's bottom edge. If revealed before the pause ends, it appears with the diagram's fade. Its current reveal state is retained when leaving; returning to this slide resets that substep until the next presenter advance. Print includes the question.

The boundary labels remain with the permanent diagram, including the close-ups, margin placeholder and empty overview. Place the workload label slightly higher than on the original Fish Diagram to leave room for the bottom question.

## Speaker notes

Open the camera from the operating point onto the familiar model. The display contains the three functional boundary lines, the performance-side dotted error margin and the AI ball, with the non-determinism question available as a manual reveal. There is no fourth AI boundary. On the first visit, keep the ball stationary for half a second after the camera settles, then fade in the diagram over half a second. After this first rendering, the ball begins wandering from the middle with a bias toward the performance side, as in the original diagram. Keep the diagram on the transparent world canvas as the surrounding slides build. Its entrance never replays, and the ball continues moving through all navigation without snapping back to the center. The trajectory is illustrative, not measured, and no geometric center is an ideal state. Organizational choices and usable feedback shape the actual trajectory. Reduced-motion mode shows the diagram immediately and pauses the ball at its current position. The subsequent sequence examines economics, workload and expertise before returning through the margin placeholder and the overview.

**One model through the journey**

Economic failure, unacceptable workload and functionally unacceptable performance are the three constraints. Error margin is the protected performance-side buffer, not an additional constraint. The following economic, workload and error-margin close-ups carry the control and evidence questions within this model. The bottom question connects this model to work whose functions and outputs rely heavily on non-determinism.

Evidence scope: [AI boundary evidence](../research/2026-10-13-ai-boundary-evidence.md).

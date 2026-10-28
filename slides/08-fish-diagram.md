# Slide 8 — The Fish Diagram

## Slide copy

**The Fish Diagram**

Starting state on the first visit: no boundary lines or operating point yet.

Presenter reveals for the first build, in order:

1. Economic boundary and 💸 label.
2. Workload boundary and 😢 label.
3. Functionally acceptable-performance boundary and 💥 label.
4. Dotted performance-side line and **Error Margin**.
5. Red **Operating Point**, representing one whole-system state.
6. Green **Playing Surface**, traced to the three actual boundary lines, with a black label.
7. On the next presenter advance, the area between the dotted error margin and the actual performance boundary fades in orange; the rest remains green.
8. The shaded surface and its label fade away over 750 ms, then the economic boundary shifts inward and outward against its original reference. The workload boundary starts the same 4.8-second motion one second after the economic boundary begins, automatically within this reveal.
9. A moving operating point starts after both boundary animations finish.
10. Cost charts, effort-saving hands and Blocker Lemmings representing safety interventions arrive across the model in a quick stagger (roughly eight seconds overall, with each entrance lasting 0.45 seconds), including a hand just inside the intersection of the error margin and workload boundary.

Once revealed, the three boundary lines, their labels, and the dotted error margin remain visible on the world canvas through later camera steps and return visits. Opening Diagram Legend, a boundary close-up, or the fish overview directly also establishes this static geometry for context. The manual substeps remain available; persistence does not freeze the moving boundaries, prevent their original references from dimming, or change the playing-surface, operating-point and intervention stages.

The fill uses the slide's 1020 × 780 coordinate frame and follows the boundary artwork. The original conservative roaming envelope is retained separately so this visual correction does not change operating-point motion.

After all Blocker Lemming, hand, and chart arrival animations finish, automatically draw two arrows over 1.8 seconds, followed by their arrowheads and labels:

- **Cost efficiency:** from the economic boundary into the middle of the diagram, pointing toward acceptable performance.
- **Least effort:** from the workload boundary into the middle of the diagram, pointing in the same general direction.

Visual: reuse the opening slide's original animated Blocker Lemming sprite (`blocker-lemming.gif`) for the diagram's safety interventions, with pixelated scaling. Use its static pose (`blocker-lemming.png`) for reduced motion and print.

## Speaker notes

> This dot is not a person. It is the whole system — people, software, and rules — working right now. It keeps moving as work changes. The dim dot marks the starting reference position, not a second current operating state.
>
> Three boundaries constrain the system's operating space. The performance boundary marks where the system can no longer do its job acceptably or safely. The economic boundary marks where we can no longer pay the bills. The workload boundary marks where people cannot keep going.
>
> We cannot see the performance line exactly, so we work from where we think it is. The gap between our perceived line and the real limit is our margin for error.
>
> Everyone makes sensible choices. The business asks for cheaper and faster. People make work easier. Together, those pressures can move the dot toward the performance edge.
>
> There is no magic safe spot in the middle. The lines do not push the dot back. Any line can move as demand, staffing, technology, or AI changes.
>
> The little character with its arms out is a Blocker Lemming. Here it stands for a deliberate safety intervention: pause or redirect work to preserve margin. That takes people, evidence and authority to act.
>
> That is Rasmussen's warning: failure does not require one stupid decision. Normal adaptations can slowly move the system toward an edge nobody can see exactly.

Adult one-sentence version: one current operating state moves within economic, workload, and acceptable-performance constraints; pressures move it, while sensing and control preserve margin and recoverability.

## Conceptual guardrails

- The dot is one current socio-technical operating state, not a person or a team.
- The boundaries constrain the possible operating space; they are not forces and do not repel the dot.
- In Rasmussen's Figure 3, the dotted perceived or marginal boundary appears only inside the actual acceptable-performance boundary; it is not repeated on the economic or workload sides.
- There is no ideal geometric center. The objective is enough margin and recoverability.
- Figure 3 describes management's cost gradient and actors' effort gradient encouraging migration toward the acceptable-performance boundary. This talk's arrows stop within the work-space; their endpoints are illustrative, not measured positions or fixed targets.

## Sources

- [Rasmussen — Risk management in a dynamic society (1997)](https://doi.org/10.1016/S0925-7535%2897%2900052-0)
- [Figure 3 and the discussion of effort and cost gradients](https://backend.orbit.dtu.dk/ws/files/158016663/SAFESCI.PDF#page=10)
- [The Model — SREcon24 presentation](https://srecon24.hatchman76.com/#/the-model)
- [QCon San Francisco](https://qconsf.com/)

## Following camera steps

After Diagram Legend, the camera returns to this model, visits six boundary/action close-ups, then returns to the overview. The boundary lines, labels and dotted margin stay in place while these slides build around the diagram. The close-ups add examples of external economic capacity, sustainable workload capacity, signal-to-action choices, consequences of functional failure and protection of the performance-side margin. Each has its own source/notes file in [the ordered slide list](README.md).

The next camera journey introduces AI at the same operating point, expands to the clean model, then inspects AI economics, workload and the error margin before returning to the existing human-behaviour material.

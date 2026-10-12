# Slide 8 — The Fish Diagram

## Slide copy

**The Fish Diagram**

Starting state:

- The QCon logo marks **where we are now**
- The logo is the **operating point**
- No boundary lines yet

Reveal 1:

- Draw the acceptable-performance boundary
- 💥 **The system stops working**

Reveal 2:

- Draw the economic boundary
- 💸 **Money runs out**

Reveal 3:

- Draw the workload boundary
- 😫 **People cannot keep up**

Reveal 4:

- “Cheaper and faster”
- “Make it easier”

Reveal 5:

**Where we think the edge is**

Reveal 6:

**The dot moves. The edges can move too.**<br>
**There is no magic center. Nothing pushes us back.**

After all tank, hand, and chart arrival animations finish, automatically draw two arrows over 1.8 seconds, followed by their arrowheads and labels:

- **Cost efficiency:** from the economic boundary into the middle of the diagram, pointing toward acceptable performance.
- **Least effort:** from the workload boundary into the middle of the diagram, pointing in the same general direction.

## Speaker notes

> This dot is not a person. It is the whole system — people, software, and rules — working right now. It keeps moving as work changes.
>
> I am going to draw three chalk lines around it. The first marks where the system can no longer do its job acceptably or safely. The second marks where we can no longer pay the bills. The third marks where people cannot keep going.
>
> We cannot see the performance line exactly, so we work from where we think it is. The gap between our perceived line and the real limit is our margin for error.
>
> Everyone makes sensible choices. The business asks for cheaper and faster. People make work easier. Together, those pressures can move the dot toward the performance edge.
>
> There is no magic safe spot in the middle. The lines do not push the dot back. Any line can move as demand, staffing, technology, or AI changes.
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

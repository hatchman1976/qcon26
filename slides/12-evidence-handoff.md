# We have to adapt

Rendered step: `#/evidence-handoff`.

Use bold Comic Neue for every summary row and the closing takeaway, retaining Archivo Black for the slide heading.

## Slide copy

**We have to adapt**

| | Theme | Meaning |
| --- | --- | --- |
| 💸 | Economic | Count generation, verification, operation and switching costs. |
| 😢 | Workload | Match AI output to the team’s ability to understand and check it. |
| 💥 | Performance | Test the work, including plausible AI mistakes and recovery. |
| ![Blocker Lemming](../src/images/qcon26/blocker-lemming.gif) | Error margin | Give people time, expertise and authority to turn signals into action. |

**Local savings can create pressure elsewhere.**

## Preparation and reveals

Keep the existing step ID, order and camera: `data-x="0"`, `data-y="383000"`, `data-scale="25"`. Use the existing blue background, Archivo Black headings and Comic Neue body text. Four native substeps introduce the theme rows in order, each emoji, label and explanation together. A separate final substep introduces the takeaway. Revealed content stays on the world canvas after exit and retains its state on return. Manual reversal remains available.

Reserve a 200px right-hand column and a 24px gap beside the summary rows. Keep the summary text at bold 32px Comic Neue. Reuse [Homer's side-eye GIF](../src/images/srecon26/homer-simpson-side-eye.gif) from the SREcon26 presentation, scaled from 220×156px to 200×142px and anchored at the bottom right, 54px from the right edge and 44px from the bottom. Align the closing takeaway to the 54px left content margin and limit its width to 688px so it stays clear of the GIF. The GIF appears with the first theme row, retains visibility after exit and adds no click. Reduced motion and print use the matching static first frame. Source: https://srecon26.hatchman76.com/images/homer-simpson-side-eye.gif

Presentation source: [SREcon26 — We have to adapt](https://srecon26.hatchman76.com/#/takeaways-summary). The QCon version returns to its three constraints and performance-side buffer.

## Speaker notes

The same three constraints remain: economic viability, acceptable workload and acceptable performance. AI can save effort in one place while moving verification, maintenance or recovery work elsewhere. Count the whole workflow and protect the people who interpret warning signals and own corrective action. Error margin is a protected performance-side buffer, not an SLO error budget or a fourth constraint. These proposed responses need local evidence and adjustment as conditions change.

## Sources

- [Rasmussen (1997), Figure 3, constraints, pressures and error margin](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), Chapter 5, transferred costs and adaptive capacity](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [CMA (2025), cloud-service switching barriers and competition](https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf)

# Workload Boundary Actions

Rendered step: `#/workload-boundary-actions`.

## Slide copy and sequence

**Workload Boundary Actions**

People adapt toward least effort when demand strains capacity.

| Early signal / metric | Possible adaptation |
| --- | --- |
| ⏳ Queue age and work in progress ↑ | 🛠️ Automate repeatable toil, improve tooling,<br />limit incoming work |
| 🤝 Interruptions and handoffs ↑<br />Focus time ↓ | 🗂️ Batch tasks, standardize paths,<br />simplify tools and coordination |
| 🥵 Overtime and fatigue ↑<br />Recovery time ↓ | 🛌 Reduce scope, protect rest, share on-call load<br />or rush and bypass checks |
| 🔁 Review findings and rework ↑ | 🧪 Improve tests and shared understanding<br />or accept output without examining it |

Reducing toil can preserve control, but skipping checks saves effort now and creates work later.

[Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF) · [Google SRE: Eliminating Toil](https://sre.google/workbook/eliminating-toil/) · Illustrative signals and choices.

## Reveal sequence

All visible content uses eight presenter-controlled substeps: title and icon together; introductory sentence; both column headings together as one header row; each of the four complete body rows from top to bottom; then the closing statement. Each row reveals its signal, adaptation, and emojis together on one advance. Preserve the table layout while rows are hidden.

## Speaker notes

The hand denotes the gradient toward least effort, not a moral judgment. Better technology and automation can remove repeatable toil and improve assurance. They require maintenance, competence and exception handling. Under pressure, equally understandable adaptations can thin verification or normalize rushed handoffs. Queue age, interruptions and recovery time can warn of emerging capacity problems. Review findings/rework are current quality feedback and possible warnings about future workload, not universally leading indicators. Burnout is a condition to investigate with people, not a diagnosis from a single metric. These actions do not guarantee a particular trajectory; watch their effect on verification and recovery.

**Match admission to assurance**

Count admitted work, focused verification effort per change and effective capacity. The review-load ratio in TALK.md is this talk’s illustrative capacity heuristic, not a measure established by Chapter 5. Demand rising relative to capacity can increase backlog and delay. Defects additionally depend on adaptations such as reduced review or testing; queue growth alone does not demonstrate a defect increase.

Change scope, timing or admitted work, and accept latency when necessary. Preserve source evidence and give reviewers time and practical authority to reject, pause or reverse action. Chapter 5 §5.1 (printed pp. 78–80; PDF pp. 86–88) illustrates responsibility without resources through a scenario, not a measured universal outcome. AI can strengthen tests, diagnosis and verification where tools actually help.

- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

## Sources

- [Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Google SRE: Eliminating Toil](https://sre.google/workbook/eliminating-toil/)
- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

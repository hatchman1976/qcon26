# AI and least effort

Rendered step: `#/ai-workload-pressure`.

## Slide copy and sequence

**AI and least effort**

AI can make “generate, accept, act” the path of least effort.

A handoff without<br />understanding

**Proxy the judgment**

Forward answers without checking intent or evidence.<br />Plausible ≠ measured. Fluent ≠ intended.

**Multiply the streams**

Agents generate more proposals; humans inherit<br />review, integration and maintenance.

**Squeeze recovery**

Extra checking and context switching can<br />raise workload and burnout risk.

**40%** received workslop; **~2h** to resolve an instance.<br />US desk-worker survey, n=1,150 · September 2025

Match admitted work to verification capacity.

[BetterUp / Stanford · 2025](https://www.betterup.com/workslop) · [Berkeley Haas · Feb 2026](https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/) · Bucket: Andrew’s SREcon26 artwork.

## Speaker notes

Workslop is polished-looking output that leaves the recipient to reconstruct missing thinking. The BetterUp/Stanford survey of 1,150 full-time US desk workers found 40% reporting receipt in the prior month, and roughly two hours on average to resolve an incident. These are self-reports, not an objective audit of every AI-generated artifact. The chain is this talk's software-workflow illustration: a person may use an agent to proxy an argument, answer or decision without forming their own understanding. The recipient must check the assumptions and reconcile conflicts. AI can also reduce this effort when used to build comprehension and assurance. Berkeley researchers observed eight months at one 200-person US technology company and conducted more than 40 interviews. Broader task scope, parallel streams and work extending into breaks/evenings intensified work. This motivates burnout risk from reduced recovery, not a universal causal finding. Expertise, familiarity, staffing and the design of handoffs affect who carries the added load; these sources do not prove that lower-skill or less-parallel users invariably suffer more burnout. Completed backlog counts should be read alongside verification time, rework, interruptions, recovery and ability to explain changes. The hand depicts least-effort adaptation. The bucket is an unfinished handoff, not a claim that all AI work is poor. Keep a person accountable for explaining and checking the work they pass onward.

**Evidence, capacity and understanding**

Least effort describes normal adaptation under competing goals and limited attention, not a moral claim about laziness. Fast generation does not establish fast verification, integration or maintenance. Conflicting AI proposals still require people to reconstruct context and understand fundamentals. Chapter 5 §§5.3.1–5.3.4 (printed pp. 82–83; PDF pp. 90–91) discusses filtering, revision and plausible errors that need expertise to recognize and correct.

Current LLM evidence shows changes in task pace and cognitive effort that differ by task and experience. Lee et al. (CHI 2025) surveyed 319 knowledge workers: critical-thinking effort shifted toward verification, response integration and task stewardship, while higher confidence in AI was associated with less scrutiny. This is self-reported association, not causal proof. Dell’Acqua et al. randomized 758 consultants: work was faster and higher quality within the model’s capability frontier, but correctness was lower outside it. These are task-specific results, not a universal effect or a whole-system risk estimate. Dillon et al. and Brynjolfsson, Li and Raymond provide additional heterogeneous workplace evidence.

Preserve focused attention, contextual knowledge and usable authority to change commitments. Change scope, timing or admitted demand when checking cannot keep pace. AI can improve assurance capacity where joint evidence supports its testing and diagnosis. Demand relative to capacity can increase backlog and delay; defects additionally depend on adaptations that shed assurance. Do not treat generated backlog clearance as verified completion.

- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Lee et al. (CHI 2025), The Impact of Generative AI on Critical Thinking](https://doi.org/10.1145/3706598.3713778)
- [Dell’Acqua et al., Navigating the Jagged Technological Frontier](https://doi.org/10.1287/orsc.2025.21838)
- [Dillon et al. (2025), Shifting Work Patterns with Generative AI](https://www.nber.org/papers/w33795)
- [Brynjolfsson, Li and Raymond (2025), Generative AI at Work](https://www.nber.org/papers/w31161)

## Sources

- [BetterUp / Stanford · 2025](https://www.betterup.com/workslop)
- [Berkeley Haas · Feb 2026](https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Lee et al. (CHI 2025), The Impact of Generative AI on Critical Thinking](https://doi.org/10.1145/3706598.3713778)
- [Dell’Acqua et al., Navigating the Jagged Technological Frontier](https://doi.org/10.1287/orsc.2025.21838)
- [Dillon et al. (2025), Shifting Work Patterns with Generative AI](https://www.nber.org/papers/w33795)
- [Brynjolfsson, Li and Raymond (2025), Generative AI at Work](https://www.nber.org/papers/w31161)

Evidence scope: [AI boundary evidence](../research/2026-10-13-ai-boundary-evidence.md).

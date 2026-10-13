# Boundary of Acceptable Performance

Rendered step: `#/performance-boundary`.

## Slide copy and sequence

**Boundary of<br />Acceptable Performance**

Crossing the functional limit means unacceptable outcomes.

**Failure in the service**

- Outages and cascading system failures
- Lost, corrupted or exposed customer data
- Recovery that cannot restore service in time

**Harm beyond the service**

- Customer operations disrupted; safety put at risk
- Trust and reputation damaged
- Contractual losses or regulatory consequences

Test people, tools and workflow together.<br />Can we use good output, catch mistakes and recover?

[Rasmussen, Fig. 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF) · [Chapter 5, §5.5.3](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5) · [Morey et al. (2025)](https://www.nature.com/articles/s41746-025-01784-y) · Software application.

## Speaker notes

The acceptable-performance boundary is defined by the system's required functions and tolerated harms. Not every crossing is an immediate catastrophe: an unacceptable outcome can be local or escalate through dependencies. Availability, data integrity, confidentiality and safe recovery are software examples. Reputation, commercial losses and regulatory consequences can follow that failure; they are not separate Rasmussen boundaries. Formal SLOs and compliance checks are useful proxies, not an exact picture of the true functional limit. Crossing the dotted perceived boundary enters the protected error margin; it does not prove a failure has already occurred. The model does not provide a measurable distance to catastrophe.

**Joint performance over the lifecycle**

Evaluate people, tools and workflow together across good, mediocre and poor AI output. A model benchmark alone cannot establish operational joint performance. Chapter 5 §5.5.3 (printed pp. 85–86; PDF pp. 93–94) calls for evaluation situated in the actual work and repeated through the lifecycle.

Compare verified outcomes, revision and checking effort with a relevant baseline. Include a plausible consequential mistake in a controlled exercise: can people access the evidence, detect it and correct it before enactment? Measure outcome quality, verification effort, consequential-error detection, response time and successful recovery. Re-evaluate when models, workflow, staffing or dependencies materially change. These are proposed engineering measures rather than a universal score; operational signals remain imperfect proxies for the true functional limit.

Morey, Rayo and Woods (2025) studied predictive clinical AI in simulated patient cases with 450 nursing students and 12 licensed nurses. Recommendation correctness improved or degraded joint performance. Added explanations did not significantly change those effects in this experiment. It motivates the evaluation design; it is not an LLM software-risk estimate or evidence that explanations never help.

- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Morey, Rayo and Woods (2025), npj Digital Medicine, Results and Discussion](https://www.nature.com/articles/s41746-025-01784-y)

## Sources

- [Rasmussen, Fig. 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Chapter 5, §5.5.3](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Morey et al. (2025)](https://www.nature.com/articles/s41746-025-01784-y)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Morey, Rayo and Woods (2025), npj Digital Medicine, Results and Discussion](https://www.nature.com/articles/s41746-025-01784-y)

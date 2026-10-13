# Slide 14 — AI and Acceptable Performance

## Slide copy

**AI and acceptable performance**

Evaluate people, tools and workflow together.

_Recurring theme rail: Economic / Workload / **Performance** / Error Margin._

Starting state:

- **Good or mediocre output:** Can the team reach a verified outcome?

Reveal 1:

- **Convincing mistake:** Can the team detect and correct it?

Reveal 2:

- **Under pressure:** Can the team stop and recover?

Reveal 3:

**Measure joint performance as conditions change.**

## Speaker notes

Performance belongs to the people, tools and workflow together. Chapter 5 §5.5.3 calls for evaluation across good, mediocre and poor AI performance, situated in the work and repeated through the lifecycle. A model benchmark cannot establish operational joint performance.

With good or mediocre output, observe whether the team reaches a verified, valuable outcome, how much revision and checking it requires, and how this compares with a relevant baseline. Include a plausible consequential mistake in a controlled exercise. Can people access the evidence, recognize the error and correct it before enactment? Also exercise stale observations, scarce time, excess review demand and unavailable supporting services. Can people stop, change scope and recover? These are evaluation conditions for this talk's software application, not defects to insert into production.

The chapter's empirical anchor, Morey, Rayo and Woods (2025), studied predictive clinical AI in simulated patient cases with 450 nursing students and 12 licensed nurses. Recommendation correctness improved or degraded performance; added explanations did not significantly alter those effects in that experiment. This motivates the evaluation design. It is not an LLM software-risk estimate or evidence that explanations never help.

Measure outcome quality, verification effort, consequential-error detection, response time and successful recovery. Repeat appropriate evaluation when models, workflow, staffing or dependencies materially change. These are proposed engineering measures rather than a universal score. Production monitoring supplies fallible proxies; it does not reveal the actual functional limit.

## Sources

- [Rayo, Morey, Grøtan and Woods — AI Gold Rush 2 Versus AI Realism (2026), Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5), §5.5.3, printed pp. 85–86 (supplied PDF pp. 93–94).
- [Morey, Rayo and Woods (2025), npj Digital Medicine](https://www.nature.com/articles/s41746-025-01784-y), Results and Discussion.
- [Talk mechanism and conceptual guardrails](../TALK.md).

# The cost of a verified outcome

Rendered step: `#/workflow-cost`.

## Slide copy and sequence

**The cost of a verified outcome**

Follow one AI-assisted change all the way into service.

| Practice | Detail |
| --- | --- |
| Generate | Model, tools and compute |
| Verify | Review, tests and security checks |
| Operate | Maintenance, rework and recovery |

Total workflow cost ÷ completed, verified outcomes

Remove low-value demand before cutting assurance.

The final takeaway is a presenter reveal.

## Speaker notes

### One workflow, end to end

The previous slide asks us to use AI to improve assurance. Here is how to start. Carry one example through this section: an AI-assisted change to a service's retry behaviour. These are proposed engineering practices and an illustrative workflow, not results from an intervention study.

Trace a small sample from request through generation, review, deployment and operation. Include model and tool charges, allocated platform costs, and the human effort to check intent, test behaviour, fix mistakes and maintain the result. Observe authoring time and reviewer or on-call effort separately so a local saving cannot hide transferred work. When combining effort and cash into a cost estimate, state the conversion assumptions and avoid counting the same labour twice. Compare comparable work with a relevant baseline and require useful outcomes, rather than counting every generated proposal as value.

The retry change may be quick to generate while someone else must understand failure modes, check dependency limits and repair an incident. A short pilot cannot establish long-term recovery cost. Mark that uncertainty and follow up after release. Do not claim a saving from a short generation-time measurement alone.

### A decision this enables

If full cost rises without improved useful outcomes, retire low-value uses, reduce scope, bound agent loops and retries, or try less expensive routing where equivalent verification supports it. Check whether each change reduces total cost rather than moving work elsewhere. Preserve expertise and review capacity. Budgets and quotas are management controls, not additional Rasmussen boundaries.

Source basis: the lifecycle-cost identity in TALK.md and the earlier economic slides. Chapter 5 §§5.2.4 and 5.5.2 discusses transferred costs and future adaptability. The measure and retry example are this talk's software-workflow synthesis.

- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

# Supporting examples: an AI-assisted software workflow

Archived on 28 October 2026 before the four closing slides were rewritten. These are supporting preparation notes, not the current closing-slide copy. The retry change is a fictional example for adapting proposed engineering practices, not an incident report or evidence that an intervention guarantees safety. Original text, source links and evidence limits are retained below.


## Original document: 10-workflow-cost.md

### The cost of a verified outcome

Rendered step: `#/workflow-cost`.

#### Slide copy and sequence

**The cost of a verified outcome**

Follow one AI-assisted change all the way into service.

| Practice | Detail |
| --- | --- |
| Generate | Model, tools and compute |
| Verify | Review, tests and security checks |
| Operate | Maintenance, rework and recovery |

Total workflow cost ÷ completed, verified outcomes

Remove low-value demand before cutting assurance.

The final takeaway is a presenter reveal. The slide and any revealed takeaway remain visible on the world canvas after exit. Returning to the slide restores its last reveal state, while manual reversal still works.

#### Speaker notes

##### One workflow, end to end

The previous slide asks us to use AI to improve assurance. Here is how to start. Carry one example through this section: an AI-assisted change to a service's retry behaviour. These are proposed engineering practices and an illustrative workflow, not results from an intervention study.

Trace a small sample from request through generation, review, deployment and operation. Include model and tool charges, allocated platform costs, and the human effort to check intent, test behaviour, fix mistakes and maintain the result. Observe authoring time and reviewer or on-call effort separately so a local saving cannot hide transferred work. When combining effort and cash into a cost estimate, state the conversion assumptions and avoid counting the same labour twice. Compare comparable work with a relevant baseline and require useful outcomes, rather than counting every generated proposal as value.

The retry change may be quick to generate while someone else must understand failure modes, check dependency limits and repair an incident. A short pilot cannot establish long-term recovery cost. Mark that uncertainty and follow up after release. Do not claim a saving from a short generation-time measurement alone.

##### A decision this enables

If full cost rises without improved useful outcomes, retire low-value uses, reduce scope, bound agent loops and retries, or try less expensive routing where equivalent verification supports it. Check whether each change reduces total cost rather than moving work elsewhere. Preserve expertise and review capacity. Budgets and quotas are management controls, not additional Rasmussen boundaries.

Source basis: the lifecycle-cost identity in TALK.md and the earlier economic slides. Chapter 5 §§5.2.4 and 5.5.2 discusses transferred costs and future adaptability. The measure and retry example are this talk's software-workflow synthesis.

- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)


## Original document: 11-verification-capacity.md

### Work the team can verify

Rendered step: `#/verification-capacity`.

#### Slide copy and sequence

**Work the team can verify**

A growing review queue is a decision point.

| Practice | Detail |
| --- | --- |
| Watch | Review age and work in progress |
| Limit | Parallel agents and incoming changes |
| Protect | Focused review and learning time |

An owner with time and authority to pause intake

When checking falls behind, change scope or timing.

The final takeaway is a presenter reveal. The slide and any revealed takeaway remain visible on the world canvas after exit. Returning to the slide restores its last reveal state, while manual reversal still works.

#### Speaker notes

##### Admission creates a commitment

In the retry example, many agents can propose changes across many services. The useful question is how much work we choose to admit to the team's verification queue. Count work in progress and the age of outstanding reviews alongside complexity, checking effort and effective expert capacity. Headcount or raw change count alone misses differences in context and risk.

Agree a local admission limit and review-age trigger before increasing parallel work. Use the team's baseline and the consequences of delay to choose them, then revise them with experience. There is no universally correct ratio or ticket limit. Keep room for interrupts and variable work rather than planning every reviewer's attention to full utilization.

When the trigger fires, the named lead can pause new agent submissions, defer low-value changes or reduce scope. Management must accept the changed delivery expectation and protect time for reviewers. Keep urgent reliability or security work on a deliberate triage path. Pausing new work does not abandon work already owed.

##### Understanding is part of capacity

Give engineers time to explain the retry policy, inspect the dependency and practise diagnosis. AI can help comprehension and test discovery, provided someone checks that the evidence is useful. Validate any claimed reduction in review effort. Do not treat reviewer availability after hours as sustainable capacity.

Queue growth shows delay and capacity pressure. It does not by itself establish a defect increase. Performance risk additionally depends on adaptations such as bypassed checks or reduced testing. This admission practice is the talk's application of the earlier workload argument. Google's overload chapter supports quantifying and reprioritizing work, with thresholds specific to each team.

- [Google SRE Workbook, Identifying and Recovering from Overload](https://sre.google/workbook/overload/)


## Original document: 12-evidence-handoff.md

### A handoff with evidence

Rendered step: `#/evidence-handoff`.

#### Slide copy and sequence

**A handoff with evidence**

Example: an AI-assisted change to retry behaviour.

| Practice | Detail |
| --- | --- |
| Intent | Which failures should we retry? |
| Evidence | Retry limits, timeout and load tests |
| Exposure | Permissions, data paths and dependencies |
| Ownership | A maintainer who can explain the change |

AI can help find test gaps.<br />Check the results against the requirement.

The final takeaway is a presenter reveal. The slide and any revealed takeaway remain visible on the world canvas after exit. Returning to the slide restores its last reveal state, while manual reversal still works.

#### Speaker notes

##### Enough evidence for the recipient

Add a short handoff to the existing change process rather than creating a parallel bureaucracy. State the intended behaviour, link the relevant requirement or dependency documentation, show what was tested, and identify uncertainty. Record model or tool versions when needed to reproduce the work. Explain any changed permissions, data paths or dependency assumptions, including an explicit statement when none changes.

For this retry change, inspect which errors are transient, whether the operation is safe to repeat, how attempts and elapsed time are bounded, and what happens when many callers retry together. Use a controlled environment and representative failure conditions. Ask the author to explain the trade-offs and ask a maintainer to identify what they would inspect during an incident. These are examples to adapt to the service, not a universal test checklist.

##### AI as an assurance aid

Use AI to suggest edge cases, locate source evidence or draft tests. Validate the source and expected result independently against the requirement, a reference implementation or observed behaviour. A test copied from the same mistaken assumption can agree with faulty code. An additional model or a fluent explanation does not by itself provide independent evidence.

Choose checking depth according to the consequence and reversibility of the action. Enforce scoped permissions at the execution boundary and separate proposal from authority to enact consequential changes. Preserve a named maintainer and time to learn, so ownership includes practical understanding. The handoff is this talk's proposed practice, drawing on the earlier workload, security and incident-understanding discussion.

- [Rayo, Morey, Grøtan and Woods (2026), Chapter 5 §§5.3 and 5.5.3, expertise and situated joint evaluation](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)


## Original document: 13-rehearsed-recovery.md

### Intervention and recovery

Rendered step: `#/rehearsed-recovery`.

#### Slide copy and sequence

**Intervention and recovery**

Controlled exercise: a retry change overloads a dependency.

| Practice | Detail |
| --- | --- |
| Notice | Can our checks expose the mistake? |
| Stop | Who can pause further action? |
| Recover | Does the fallback restore service? |
| Repeat | After model or workflow changes |

Measure time to notice, stop and restore.<br />Test people, tools and workflow together.

The final takeaway is a presenter reveal. The slide and any revealed takeaway remain visible on the world canvas after exit. Returning to the slide restores its last reveal state, while manual reversal still works.

#### Speaker notes

##### A convincing mistake, outside production

In an isolated exercise, give the team a plausible retry change with a consequential flaw, such as a missing retry limit. It looks reasonable and its happy-path tests pass, but a dependency slowdown causes repeated calls. This is a fictional scenario to adapt, not an incident report. Include useful and mediocre recommendations as well, and compare with a relevant baseline. A single deliberately bad case is not a full evaluation of joint performance.

Observe whether the team finds the relevant evidence, detects the flaw and can reach someone with authority and capacity to act. Exercise the actual stop mechanism: pause new work, halt further rollout or revoke the tool's ability to act. Scoped credentials, bounded execution and separation between proposal and execution must make the limit enforceable. A written instruction to stop is insufficient if the system can continue acting.

Practise the fallback or rollback and confirm user-visible recovery. A code rollback may not reverse data changes or remove a backlog, so test restore or reconciliation where necessary. Start with limited exposure and service-specific observation when the change eventually enters the ordinary release process. Update the probes and runbook to match the changed service behaviour.

##### Observe joint performance

Record useful outcomes, checking effort, consequential-error detection, and the time to notice, intervene and restore. Use the findings to change the workflow, training, permissions or recovery mechanism. Repeat evaluation after material changes in models, tools, dependencies or staffing. The aim is sufficient margin and recoverability. Operational signals remain proxies for the actual functional limit, and an SLO error budget is not Rasmussen's error margin.

The exercise is the talk's software application of Chapter 5's situated joint-evaluation argument. The clinical evidence discussed earlier does not estimate software or LLM risk. Google's canary guidance supports bounded exposure, evaluation and an explicit rollout response.

- [Rayo, Morey, Grøtan and Woods (2026), Chapter 5 §5.5.3](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Google SRE Workbook, Canarying Releases](https://sre.google/workbook/canarying-releases/)

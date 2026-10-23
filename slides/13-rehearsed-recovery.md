# Intervention and recovery

Rendered step: `#/rehearsed-recovery`.

## Slide copy and sequence

**Intervention and recovery**

Controlled exercise: a retry change overloads a dependency.

| Practice | Detail |
| --- | --- |
| Notice | Can our checks expose the mistake? |
| Stop | Who can pause further action? |
| Recover | Does the fallback restore service? |
| Repeat | After model or workflow changes |

Measure time to notice, stop and restore.<br />Test people, tools and workflow together.

The final takeaway is a presenter reveal.

## Speaker notes

### A convincing mistake, outside production

In an isolated exercise, give the team a plausible retry change with a consequential flaw, such as a missing retry limit. It looks reasonable and its happy-path tests pass, but a dependency slowdown causes repeated calls. This is a fictional scenario to adapt, not an incident report. Include useful and mediocre recommendations as well, and compare with a relevant baseline. A single deliberately bad case is not a full evaluation of joint performance.

Observe whether the team finds the relevant evidence, detects the flaw and can reach someone with authority and capacity to act. Exercise the actual stop mechanism: pause new work, halt further rollout or revoke the tool's ability to act. Scoped credentials, bounded execution and separation between proposal and execution must make the limit enforceable. A written instruction to stop is insufficient if the system can continue acting.

Practise the fallback or rollback and confirm user-visible recovery. A code rollback may not reverse data changes or remove a backlog, so test restore or reconciliation where necessary. Start with limited exposure and service-specific observation when the change eventually enters the ordinary release process. Update the probes and runbook to match the changed service behaviour.

### Observe joint performance

Record useful outcomes, checking effort, consequential-error detection, and the time to notice, intervene and restore. Use the findings to change the workflow, training, permissions or recovery mechanism. Repeat evaluation after material changes in models, tools, dependencies or staffing. The aim is sufficient margin and recoverability. Operational signals remain proxies for the actual functional limit, and an SLO error budget is not Rasmussen's error margin.

The exercise is the talk's software application of Chapter 5's situated joint-evaluation argument. The clinical evidence discussed earlier does not estimate software or LLM risk. Google's canary guidance supports bounded exposure, evaluation and an explicit rollout response.

- [Rayo, Morey, Grøtan and Woods (2026), Chapter 5 §5.5.3](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [Google SRE Workbook, Canarying Releases](https://sre.google/workbook/canarying-releases/)

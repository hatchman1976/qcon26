# A handoff with evidence

Rendered step: `#/evidence-handoff`.

## Slide copy and sequence

**A handoff with evidence**

Example: an AI-assisted change to retry behaviour.

| Practice | Detail |
| --- | --- |
| Intent | Which failures should we retry? |
| Evidence | Retry limits, timeout and load tests |
| Exposure | Permissions, data paths and dependencies |
| Ownership | A maintainer who can explain the change |

AI can help find test gaps.<br />Check the results against the requirement.

The final takeaway is a presenter reveal.

## Speaker notes

### Enough evidence for the recipient

Add a short handoff to the existing change process rather than creating a parallel bureaucracy. State the intended behaviour, link the relevant requirement or dependency documentation, show what was tested, and identify uncertainty. Record model or tool versions when needed to reproduce the work. Explain any changed permissions, data paths or dependency assumptions, including an explicit statement when none changes.

For this retry change, inspect which errors are transient, whether the operation is safe to repeat, how attempts and elapsed time are bounded, and what happens when many callers retry together. Use a controlled environment and representative failure conditions. Ask the author to explain the trade-offs and ask a maintainer to identify what they would inspect during an incident. These are examples to adapt to the service, not a universal test checklist.

### AI as an assurance aid

Use AI to suggest edge cases, locate source evidence or draft tests. Validate the source and expected result independently against the requirement, a reference implementation or observed behaviour. A test copied from the same mistaken assumption can agree with faulty code. An additional model or a fluent explanation does not by itself provide independent evidence.

Choose checking depth according to the consequence and reversibility of the action. Enforce scoped permissions at the execution boundary and separate proposal from authority to enact consequential changes. Preserve a named maintainer and time to learn, so ownership includes practical understanding. The handoff is this talk's proposed practice, drawing on the earlier workload, security and incident-understanding discussion.

- [Rayo, Morey, Grøtan and Woods (2026), Chapter 5 §§5.3 and 5.5.3, expertise and situated joint evaluation](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)

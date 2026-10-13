# AI Realism and the Rasmussen Presentation

Reviewed 12 October 2026 for Andrew Hatch’s QCon talk, *Adapt or Drift*.

The strongest addition is a practical account of **the capacity to intervene**. Our existing argument connects AI-mediated change to feedback delay, verification demand, economic pressure, and conditional drift. The next step is to show what people must be able to do when that feedback reveals trouble: challenge an output, halt admission, change the goal, and recover.

Suggested framing for the talk:

> Drift can look like improvement when we measure increased output but miss the loss of control capacity.

This is our synthesis, not a quotation or a demonstrated universal effect of AI.

## What the publication contributes

Rayo, Morey, Grøtan, and Woods’s [AI Gold Rush 2 Versus AI Realism](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5), published 1 October 2026, is a resilience and cognitive-systems synthesis. It describes costs displaced into other work (§5.2.4), responsibility without adequate means to control outcomes (§5.1), plausible errors (§5.3.4), dependence on tools as alternatives decay (§5.1), and fallible safeguards (§5.2.3). Its practical direction is joint evaluation, attention to difficult cases, and continuing assurance (§5.5).

These are useful mechanisms and evaluation questions. The chapter does not establish our review-load equation or an AI-specific Rasmussen force law. Its opening manager story is an illustrative scenario, and its bibliography does not cite Rasmussen. Keep the source layers explicit: Rasmussen supplies the control framework; this chapter supplies contemporary synthesis; our talk supplies the software application.

## Overlay with the current presentation

The rendered presentation has 13 main content slides, plus fish-diagram camera steps, and ends at `#/ai-economic-boundary`. The queueing mechanism and the response pattern are developed in [TALK.md](../TALK.md) and [working slide ideas](../slides/README.md), but are not yet rendered. The current AI slide copy and notes match the corresponding sections in [src/index.html](../src/index.html).

| Existing material | What is already strong | Proposed addition |
| --- | --- | --- |
| [Human behaviour with LLM tools](../slides/10-ai-behaviour.md), `#/ai-behaviour` | Distinguishes established adaptation, heterogeneous task evidence, and open system questions. | Make revalidation concrete: test whether people notice bad recommendations, challenge them, and recover under the workload of the intended workflow. |
| [AI enters the control structure](../slides/11-ai-control-structure.md), `#/ai-control-structure` | Separates evidence from plausibility and actual state from delayed perception. | Make authority operational: the responsible actor needs time, independent evidence, and permission to reject, pause, escalate, or reverse an action. |
| [AI and the economic boundary](../slides/12-ai-economic-boundary.md), `#/ai-economic-boundary` | Already counts verification, integration, rework, and recovery, and distinguishes preservation from pressure transfer. | Track who absorbs the work and when. A saving for the author may be a cost to the reviewer, maintainer, or on-call engineer. |
| [Review-load mechanism](../TALK.md#the-2026-mechanism) | Separates queue growth from the further adaptations that can compromise assurance. | Discuss verification effort per change as variable. Volume alone misses the work of reconstructing context or disproving a convincing suggestion. |
| [Control-loop response](../slides/ideas/11-response-pattern.md) | Already connects sensing with authority and response capacity. | Promote this working idea into the rendered flow, with exercised fallback and recovery capability as concrete examples. |

The first three additions can be speaker-note changes. The larger narrative improvement is to complete the movement from diagnosis to response after the current economic slide.

## Suggested copy for the existing slides

For `#/ai-control-structure`, add an authority reveal or speaker line:

> Responsibility only becomes control when someone can challenge, stop, or reverse the action.

Explain that a formal approval step is weak assurance if the reviewer lacks evidence, time, or a practical route to intervene. Our control diagram already labels authority; this gives that label a consequence.

For `#/ai-economic-boundary`, add a speaker line:

> Count work saved here and work created elsewhere.

Follow one candidate change from generation through review, integration, maintenance, and recovery. Connect this to the existing cost per completed, verified, valuable outcome. Keep the conditional argument: AI can also reduce those costs and improve assurance.

For `#/ai-behaviour`, sharpen the open question:

> Can the team recognize a convincing mistake and recover under real workload?

This turns revalidation into an observable capability without claiming that every AI task has the same effect.

## Proposed next slide on joint evaluation

**Test the ability to stay in control**

Opening line:

**Evaluate the people, tools, and workflow together.**

Progressive reveals:

1. When the recommendation is useful, can the team use it effectively?
2. When it is convincingly wrong, can the team detect and challenge it?
3. When time or tooling is scarce, can the team stop, adapt, and recover?

Closing line:

**Measure the outcome and the ability to intervene.**

The empirical anchor is [Morey, Rayo, and Woods (2025)](https://www.nature.com/articles/s41746-025-01784-y), especially the Results and Discussion. Their study involved 450 nursing students and 12 licensed nurses assessing ten historical patient cases. AI recommendations improved or degraded performance depending on their correctness; adding explanations did not significantly change the recommendation effects. They propose evaluating people and AI together across strong, mediocre, and poor AI performance.

This was predictive clinical AI, not an LLM software study. The task was simulated remote monitoring; most participants were students, and there was no trial feedback. Use it to motivate the evaluation design, not to estimate software risk or claim explanations never help.

For our software application, use controlled exercises with these conditions:

| Exercise condition | Capability to observe |
| --- | --- |
| Correct proposal with accessible evidence | Useful completion time and verification effort |
| Plausible proposal containing a consequential error | Detection, rejection, and correction before enactment |
| Conflicting or stale observations | Independent checking, explicit uncertainty, and escalation |
| Unavailable model or supporting service | Practiced fallback, reduced scope, and recoverability |
| Review demand exceeding available capacity | Admission control, preserved review depth, and authority to change commitments |

Compare against a relevant baseline. Measure detection and response time, review effort, outcome quality, and successful recovery. These are proposed engineering measures for this talk, not a validated universal score. Repeat appropriate evaluations when models, workflow, staffing, or dependencies materially change.

## Proposed response slide

Adapt the existing [Control-loop bandwidth working idea](../slides/ideas/11-response-pattern.md), rather than inventing another framework.

**Keep the capacity to intervene**

- **Sense:** preserve access to evidence and notice changing review demand.
- **Constrain:** limit admitted work before review becomes the pressure-release valve.
- **Adapt:** change scope, timing, or tools while preserving verification.
- **Correct:** retain authority, practiced recovery, and people who can act.

Closing line:

**Use AI to improve assurance as well as output.**

Visually, reconnect to the existing control loop and one operating point. Reveal a signal, an actor interpreting it, and an authorized action that restores margin. A documented fallback should be shown as a capability exercised by people with usable tools and permissions. Do not make the boundary repel the point automatically or imply a preferred geometric center.

## A software example worth using

The [AWS report on the 19–20 October 2025 disruption](https://aws.amazon.com/message/101925/) offers a concrete control-and-recovery case. In its DynamoDB section, a freshness check became stale while plan application was delayed; an older DNS plan overwrote a newer one, and cleanup removed the active plan. Manual intervention was required. The EC2 section describes recovery work entering congestive collapse. AWS’s corrective actions include recovery testing and throttling incoming work according to queue size.

Use this to connect delay, changing state, coupled automation, admission control, and recovery capacity. The report describes conventional automation and service dependencies, with no reported generative AI involvement. It illustrates a mechanism relevant to our argument, not an AI-caused incident or proof that more automation always harms resilience.

## Evidence and model discipline

- Preserve one operating state and the three existing Rasmussen constraints. Verification, authority, fallback knowledge, and assurance belong within control and capacity; they do not introduce additional boundaries.
- Keep the performance-side perceived boundary distinct from the actual functional limit. Budgets and quotas remain economic controller thresholds.
- Preserve the causal condition in [TALK.md](../TALK.md): demand and variability outpacing effective verification capacity can increase delay and backlog under ordinary queueing assumptions. Performance risk additionally depends on adaptations that shed assurance or recovery capacity.
- Treat local action autonomy separately from the service’s dependence on people, suppliers, and infrastructure. Avoid implying that bounded automation cannot act independently.
- Keep explanations subject to evaluation. Persuasiveness is not evidence that an explanation helps detect and recover from an error.
- If using the chapter’s cited [early-2025 developer RCT](https://arxiv.org/abs/2507.09089), attach its scope: 16 experienced developers, 246 tasks, early-2025 tools, and a 19% completion-time increase. Pair it with [METR’s February 2026 update](https://metr.org/blog/2026-02-24-uplift-update/), which reports indications of later speedups but substantial selection and measurement problems. The defensible lesson is to measure the actual workflow; the 2025 result is not a current general verdict.

## Integration priority

First, make intervention authority explicit on the control-structure slide. Second, add the joint-evaluation slide after economics. Third, render the existing response pattern with a practiced recovery example. Keep the economic work-transfer detail in notes to avoid repeating an argument the deck already makes.

This preserves the talk’s central model while giving the audience a concrete response to drift: test and maintain the ability to notice, challenge, act, and recover.

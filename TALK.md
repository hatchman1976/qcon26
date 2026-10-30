# Talk working notes

## Published promise

**Adapt or Drift: Resilience Engineering When AI Moves the Operating Point** asks whether our systems can adapt as models, workloads, costs, latency, and uncertainty change—or whether they silently drift outside acceptable behavior.

The talk adapts Rasmussen's Dynamic Safety Model and the 2024 SREcon presentation, *Defence at the Boundary of Acceptable Performance*, for AI-mediated production systems.

## Current rendered flow

1. Title
2. Opening hook: capability and control
3. WHOAMI
4. Takeaways
5. Some recurring characters
6. Socio-technical systems definition
7. Resilience Engineering
8. Rasmussen source slide
9. The research behind the model
10. Social control hierarchy
11. Putting it together: people, boundaries and adaptation
12. The Fish Diagram
13. Diagram Legend
14. Economic Boundary
15. Economic Boundary Actions
16. Workload Boundary
17. Workload Boundary Actions
18. Boundary of Acceptable Performance
19. Protect the Error Margin
20. AI enters the operating point
21. AI in the Fish Diagram
22. AI has to be paid for
23. Tokenomic Progression
24. Model Enshittification
25. AI and least effort
26. The erosion of expertise
27. Expertise erosion sequence — complex system, uncertainty, flame and “This is Fine”
28. AI margin pressure
29. Skills that protect margin
30. Tool vs Operator
31. We have to adapt
32. Humans are adaptable
33. References

The deck contains 33 content steps and three overview/overlay camera steps, for 36 Impress steps. The former seven trailing slides have been integrated into the earlier flow and removed. [The integration map](research/2026-10-13-slide-consolidation.md) records their destinations. AI margin pressure now has one presenter-controlled reveal for a continuous sequence and a separate local scenario ball. The static **Pressure and control** callout belongs to that margin scene. The global operating point keeps roaming through the scene, the camera-only **AI Fish Diagram overview** and the closing slides ending with **Humans are adaptable**, followed by References. Current copy, preparation details and speaker notes live in [slides/README.md](slides/README.md).

After the socio-technical systems introduction, [Resilience Engineering](slides/04a-resilience-engineering.md) defines the field through developing and sustaining adaptive capacity. The working definition is the talk's synthesis, supported by Allspaw's 2019 abstract and Woods's account of readiness for surprise. Cook supplies context on practitioners' role in adaptation. [Source context and alternative short quotations](research/2026-10-27-resilience-definition.md) remain in preparation notes.

## Boundary examples and the AI camera journey

The original close-ups distinguish external financial capacity from internal targets, and effective workload capacity from incoming demand. Signal-to-action tables show cost efficiency, least-effort adaptation and protection. The acceptable-performance step distinguishes actual unacceptable outcomes from crossing the dotted warning.

The AI sequence reuses the coloured AI logo and Andrew’s SREcon26 slop-bucket artwork. The ball rolls over one operating point, the camera expands to a clean model, and the ball roams. The economics camera shows ETR’s 2026 budget overruns and infrastructure-refresh cuts, the Uber CTO’s reported early budget exhaustion, and Meta’s Hyperion financing with Blue Owl. The workload camera shows workslop, proxying judgment and intensified parallel work. A slide below it introduces the erosion of expertise using the Accelerated Expertise book cover and quotation. A separate image sequence then shows the complex system with people and flashing coloured balls, replaces the people with shrugging emojis, adds a glowing flame, and replaces the scene with “This is Fine”. These images are a metaphor for uncertain understanding and unaddressed trouble, not measured effects of AI. The following [AI margin pressure scenario](slides/09k-ai-margin-pressure.md) illustrates accumulated verification work overwhelming protective capacity. Its warning distinguishes entering the protected buffer from reaching the actual functional limit. The **Pressure and control** callout in that margin scene brings the argument together: unverified work accumulates; time, expertise and protective action get squeezed; warnings help only when people can act. This is an illustration of possible pressure and migration, not a claim that AI always creates workslop or causes failure.

### Preparation: margin sequence, callout and overview

The margin scene retains its ID and camera at (-6550, 306476), scale 4.262906. Entry shows the original pixel Blocker Lemming at twice its former size, to the right of the dotted margin, and a static local ball and faded perceived-state reference together near the right edge at (940, 350). A label and curved arrow identify the faded ball as **where we think we are**. The **Pressure and control** callout sits between the boundary lines at left 60px, top 405px and width 350px, with a one-line 32px Archivo Black heading and bold 26px Comic Neue body. Its middle point uses a clamp 🗜️ to illustrate squeezed time, expertise and protective action.

The first native substep starts 16 falling buckets and one continuous 9-second ball animation. Four further advances reveal the callout heading and its three points without pausing the animation. The ball travels from (940, 350), passes through the dotted margin at (421.962088, 393.752), and ends at (154.448214, 236.8). The endpoint is 20px lower, with a small leftward adjustment that keeps its rim touching the curved solid performance boundary. The dotted trail and its mask follow the same path. A pulsing 72px 🚨 beacon appears near the crossing at left 505px, top 292px, just to the right of the dotted margin and above the trail, with no visible warning text. Toad and **Your SREs!** appear at final contact, now 20px lower at top 30px. The sixth advance opens the camera-only [AI Fish Diagram overview](slides/09l-ai-fish-diagram-overview.md) at (0, 308000), scale 25, exactly matching `#/ai-fish-diagram`.

The local ball and reference are 560 world units across, half the 1,120-unit global operating point. Global roaming continues without reset or transfer of control. Exit settles a started local sequence to its final pose and leaves an unstarted sequence unstarted. Back reverses the four text reveals before reversing the animation trigger. Returning retains completion without replay unless manually reversed. Revealed local elements, the callout and the reference label stay on the world canvas. Reduced motion settles the sequence immediately on its first reveal, uses the Toad still and disables the beacon pulse. The callout and label are included in print. Global roaming pauses at its current position under reduced motion.

[Evidence and scope](research/2026-10-13-ai-boundary-evidence.md) preserve dates, populations and causal limits. The story does not establish universal layoffs to fund AI, universally lower-quality output, or a causal burnout hierarchy by tool skill. Buckets and motion are explanatory metaphors. Reduced-motion mode keeps the same reveal and final-state information without animation.

Between economics and workload, [Tokenomic Progression](slides/09i2-token-economy.md) distinguishes maxxing, metering and optimization in a two-column table. Its closing question leads to the separate [Model Enshittification](slides/09i3-model-enshittification.md) slide below, which presents Doctorow's three-stage platform pattern as a conditional risk about dependence and pricing power. The public token leaderboard supports the consumption-score example. Microsoft Learn documents cost-oriented model routing with possible quality tradeoffs, not guaranteed equal quality or proof of enshittification. Cursor's 2025 Auto pricing announcement remains a historical metering example in speaker notes. Neither token counts nor cost optimization alone establish productivity, deliberate lock-in, degraded model quality or a completed extraction cycle. LLM tokens here are not cryptocurrency. [The original source review](research/2026-10-27-token-economy.md) preserves those limits. [The 28 October evidence review](research/2026-10-28-token-costs-and-market-power.md) adds falling prices at fixed capability, specific cloud-competition findings, subsequent improvements and active open-weight alternatives, without promising future price declines or claiming DeepSeek has been excluded.

## Closing arc

The four closing slides adapt the structure of Andrew's SREcon26 close to the whole QCon argument: skills → control → boundary takeaways → adaptive capacity.

1. **Skills that protect margin:** systems understanding traces how AI shifts cost, workload and risk. Critical judgment challenges plausible output against the real work. Adaptation and recovery connect warning signals with protective action.
2. **Tool vs Operator:** AI can assist people or be authorised to act in the system. Its permissions and pace need bounds, and people need practical understanding and authority to stop and recover. Evaluate people, tools and workflow together, without assuming that either role guarantees safety or degradation.
3. **We have to adapt:** count generation, verification, operation and switching costs, match output to checking capacity, test plausible mistakes and recovery, and preserve time, expertise and authority. Local savings can create pressure elsewhere.
4. **Humans are adaptable:** expertise, coordination and judgment support responses when plans no longer fit. Expertise, time and authority let people use AI to strengthen the capacity to understand, act and recover.

This is the talk's application of Rasmussen's control framework and the resilience and joint-evaluation research already discussed. Economic, workload and performance remain the three constraints, with a protected performance-side buffer. Crossing the dotted margin is a warning about remaining room to act, not proof that harm has occurred. Useful AI applications need evidence in their actual workflow, and adaptive capacity needs continuing support.

The earlier fictional retry example, lifecycle-cost calculation, admission, handoff and recovery details remain in [supporting practical AI-workflow notes](research/2026-10-28-practical-ai-workflow-notes.md). They are preparation material rather than the current closing-slide copy. The final References slide follows **Humans are adaptable**.

## Integrated themes: keep the model in view

[AI Gold Rush 2 Versus AI Realism](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5), Chapter 5 of the supplied full book PDF, extends the talk's practical argument. The chapter occupies printed pp. 77–88 (PDF pp. 85–96). An efficiency gain can displace verification, maintenance or recovery work. The responsible team needs source evidence, time to review and authority to change or stop the action. The resulting evaluation should measure joint performance and the ability to intervene as well as visible output.

Economic, Workload, Performance and Error Margin live within the existing boundary close-ups and AI journey, then inform the closing arc. The earlier performance step carries joint-evaluation questions, and the error-margin step carries notice/intervene/recover. The AI margin scenario illustrates an approach to the dotted margin followed by consumption of the protected buffer toward the actual functional limit. It is not a measured loss of assurance or an incident claim. These are three constraints and a protected performance-side buffer:

- **Economic:** account for costs deferred or transferred to others (§5.2.4, printed p. 81 / PDF p. 89) and future adaptability, coupling and congestion (§5.5.2, printed p. 85 / PDF p. 93).
- **Workload:** count filtering, revision and checking demands, including the expertise needed to reject plausible mistakes (§§5.3.1–5.3.4, printed pp. 82–83 / PDF pp. 90–91).
- **Performance:** test people and tools together across good, mediocre and poor output, situated in the actual work and throughout the lifecycle (§5.5.3, printed pp. 85–86 / PDF pp. 93–94).
- **Error Margin:** apply the chapter's recognition, authority and recovery questions to Rasmussen's buffer before the functional performance limit (§5.1, §§5.3.2–5.3.5 and §§5.4–5.5). This framing is the talk's synthesis, not terminology or geometry supplied by Chapter 5.

The source layers remain explicit. Rasmussen supplies the control framework. Rayo, Morey, Grøtan and Woods supply a contemporary resilience and cognitive-systems synthesis. Their chapter does not cite Rasmussen or establish the talk's review-load ratio. The software application and Sense / Constrain / Adapt / Correct response pattern are this talk's synthesis. Those verbs remain supporting mechanisms in speaker notes so the four audience themes stay prominent.

[Morey, Rayo, and Woods (2025)](https://www.nature.com/articles/s41746-025-01784-y) motivate evaluation across strong, mediocre, and poor AI recommendations. Their experiment used predictive clinical AI in simulated patient cases, with 450 nursing students and 12 licensed nurses. Recommendation correctness affected joint performance, and added explanations did not significantly change recommendation effects in that task. This is not an LLM software study or evidence that explanations never help. For our software application, compare relevant baselines in controlled exercises and observe useful completion, verification effort, consequential-error detection, response time, and successful recovery.

The [AWS 19–20 October 2025 disruption report](https://aws.amazon.com/message/101925/) supplies a software control-and-recovery example, retained in the Error Margin notes. Chapter 5 also cites it in §5.3.6, printed p. 84 (PDF p. 92). Delayed DNS-plan application interacted with changed state and cleanup. Subsequent EC2 recovery entered congestive collapse, and AWS announced recovery testing and controls on incoming work among its corrective actions. The recovery-testing suite was being built, so the report does not establish that all announced work was complete. The report describes conventional automation and dependencies, with no reported generative AI involvement. It illustrates a mechanism relevant to the talk, not an AI-caused incident or a general verdict on automation.

The integrated steps ask the audience to preserve the ability to notice, challenge, act and recover. Error margin is not free staff capacity or the operating point's distance from a selected center. Corrective action restores margin and recoverability. It does not create a fourth boundary or return the operating point to a preferred center.

## The distinction this talk must make

The 2024 talk foregrounded the geometry of drift: boundaries, error margin, continuous movement, and locally rational adaptation.

The 2026 talk foregrounds the variable that my 2024 treatment underdeveloped: control-loop timing. AI can increase the gain, arrival rate, and variability of candidate change faster than organizational sensing, expert verification, and corrective action can respond.

> AI is not a fourth boundary. It changes existing gradients and control-loop gain and delay; by changing capability or capacity, it can sometimes reshape existing constraints.

> AI can reduce the marginal time and cost of generating candidate change, but generation is not free. If aggregate demand grows faster than unit-cost efficiency and verification capacity, the organization pays in cash, latency, scope, assurance, or recovery.

This is a conditional mechanism, not a claim that AI or layoffs automatically cause failure. AI can also increase assurance capacity through trustworthy testing, triage, diagnosis, and verification. Direction comes from the organizational control structure; AI changes its gain and tempo.

## Rasmussen model guardrails

- The operating point represents one current socio-technical operating state. It moves continuously.
- Economic failure, unacceptable workload, and functionally unacceptable performance constrain the feasible operating space.
- Boundaries are not forces. Management pressure toward efficiency, the gradient toward least effort, and safety or control activity move the operating point.
- Boundary awareness creates no automatic repulsion. A restoring response also requires a usable signal, timely interpretation, authority, and response capacity.
- On the performance side, the solid functional boundary and the dotted perceived or marginal boundary are different. Rasmussen's Figure 3 does not draw equivalent inner boundaries for economic failure or unacceptable workload. Monitoring operationalizes fallible performance proxies; it does not reveal the true functional limit.
- Crossing the dotted line enters and begins consuming the deliberately protected error margin. That margin is exhausted only at the actual functional boundary, and harm need not have occurred at the dotted line.
- There is no privileged geometric center. The control objective is sufficient margin, bounded excursions, and recoverability.
- One operating point can have little remaining margin to multiple boundaries. Under sustained pressure it can approach the workload–performance joint-constraint region.
- Proximity-dependent safety pressure is a useful control-loop extension formalized by Morrison and Wears, not a force law stated in Rasmussen's 1997 paper. Their response is driven by the perceived operating point's distance from an explicit safety goal, not direct knowledge of the true boundary.
- Economic feedback is often fast, visible, and authoritative in technology organizations, but it is not universally the strongest or most accurate control loop.
- Treat economic activity, economic capacity, and economic control separately. Increased consumption or commitments move the operating point; changes in funding, revenue, runway, or sustainable cost structure can reshape the economic boundary; forecasts provide signals, while budgets, quotas, and return targets provide controller setpoints and decision thresholds.
- Do not draw a budget or quota as an economic equivalent of Rasmussen's dotted performance boundary. It belongs to the 2026 control-loop overlay, not the original boundary geometry.
- A falling token price does not imply falling aggregate cost. Unit cost and total demand can move in opposite directions.
- AI changes the behaviour-shaping conditions and participates in recursive socio-technical adaptation. Its effects vary by task, person, incentives, and context; it does not determine one uniform response.
- Rasmussen's framework remains applicable, but measures of human performance, learning, coordination, and control need revalidation in LLM-mediated work.

## The 2026 mechanism

The new problem is a mismatch between production gain and control-loop bandwidth. A simple illustrative review-load ratio is:

\[
\rho_{\mathrm{review}} = \frac{\lambda E[S]}{C}
\]

- \(\lambda\): admitted reviewable changes per unit time
- \(E[S]\): focused expert verification effort required per change
- \(C\): focused expert verification capacity available per unit time

AI may raise \(\lambda\), alter \(E[S]\), and increase variability. Layoffs may reduce \(C\) and remove contextual knowledge, which can also increase \(E[S]\).

This is a capacity heuristic, not a complete queueing model. Under ordinary queueing assumptions, delay and backlog become increasingly sensitive as utilization approaches saturation, especially with variable arrivals and service times. Context switching is an organizational response to that pressure, not a result established by the formula.

Queueing alone predicts delay and backlog, not defects. Performance risk rises through the organization's adaptation to that pressure—especially when it refuses to pay in reduced scope or increased latency and instead reduces review, testing, investigation, or maintenance depth.

The perceived operating point can then lag behind the actual state: the system changes faster than the organization can observe, interpret, and correct it.

## Dynamic economic envelope

AI changes both unit economics and aggregate demand. A useful lifecycle-cost identity is:

\[
C_{\mathrm{total}} =
F_{\mathrm{capacity/licenses}} +
\sum_{\mathrm{workflows}}
\left[
(q \times c_{\mathrm{model}})
+ C_{\mathrm{tools/data}}
+ C_{\mathrm{assurance}}
+ C_{\mathrm{rework/recovery}}
\right]
\]

Here, \(c_{\mathrm{model}}\) can fall while \(q\)—context, outputs, reasoning, turns, retries, subagents, and tool calls—and the number of workflows grow faster. Cheaper inference can expand the feasible envelope per unit of useful work while aggregate usage still consumes economic margin.

The correct decision metric is cost per completed, verified, valuable outcome—not cost per token.

Use three different visual semantics:

- **Operating-point movement:** more usage, larger commitments, or higher lifecycle spend.
- **Actual economic-boundary movement:** changes in sustainable revenue, funding, runway, financing, or price-performance.
- **Economic-controller change:** spend forecasts are signals; internal budgets, token quotas, and return-on-investment targets are setpoints or decision thresholds; routing, throttling, reprioritization, and staffing decisions are control actions.

This is a 2026 control-system extension. Rasmussen's perceived boundary and error margin are drawn only on the acceptable-performance side of Figure 3.

The economics differ by system level:

- **Model labs:** model development, serving, talent, and compute commitments; the constraint is runway, financing, and monetization.
- **Hyperscalers:** capital expenditure, depreciation, power, leases, utilization, maintenance, replacement, and capacity-allocation risk. Capital expenditure creates an asset; it is not automatically a loss.
- **Adopters:** metered inference, seats, integration, tools and data, evaluation, human verification, rework, and recovery. The token invoice is only one part of workflow economics.

Economic control can protect the other margins by limiting demand, routing to cheaper models, caching, batching, reducing context, or stopping low-value work. It transfers risk when the organization holds output constant by cutting people, evaluation, observability, or recovery capacity.

## Current economic evidence for speaker notes

As of August 25, 2026:

- OpenAI meters input, cached input, and output tokens separately; agentic workflows can also accumulate reasoning, turns, retries, tool calls, and validation passes. Current prices are examples, not durable constants, and must be refreshed before the conference.
- [Alphabet](https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx) reported that Gemini serving unit cost fell 78% during 2025 while guiding to \$175–185 billion of 2026 capital expenditure, up from \$91.4 billion in 2025. This is the cleanest unit-cost-versus-aggregate-investment contrast.
- [Amazon](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/default.aspx) reported trailing-twelve-month free cash flow of negative \$7.6 billion through June 2026, driven primarily by a \$66.1 billion year-over-year increase in property and equipment purchases that it said primarily reflected AI investment. Amazon simultaneously remained profitable and reported strong AWS growth.
- [Oracle](https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/) reported FY2026 operating cash flow of \$31.98 billion, capital expenditure of \$55.66 billion, and free cash flow of negative \$23.69 billion, attributing the cash consumption to Cloud Infrastructure investment.
- [Microsoft](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3) forecast roughly \$190 billion of calendar-2026 capital expenditure while still expecting growth and remaining capacity constrained. [Meta](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx) forecast \$130–145 billion of 2026 capital expenditure and reported \$784 million of Q2 free cash flow.

The defensible category claim is:

> AI infrastructure is absorbing extraordinary amounts of cash—even at the world's most cash-generative companies.

Do not generalize that all companies are “burning cash.” Some providers are free-cash-flow negative after investment; others remain highly profitable while converting operating cash into infrastructure. Always name the entity, metric, period, and scope.

## Economic-to-workload-to-performance trajectory

1. AI-enabled work can increase model consumption and the arrival rate or variability of candidate changes.
2. Increased consumption can move the operating point toward the economic boundary while finite verification capacity moves it toward the workload boundary.
3. A funding, financing, revenue, or cost-structure shock can contract the economic envelope around the point.
4. A budget, quota, or return target changes the economic controller's setpoint; it does not create another Rasmussen boundary.
5. The organization must then reduce demand, improve sustainable unit economics, accept lower returns, or transfer the cost elsewhere.
6. If it answers economic pressure by removing relevant people or expertise, the workload boundary can contract.
7. People may initially preserve delivery through overtime, context switching, workarounds, and discretionary effort.
8. Local compensation can hide saturation while consuming adaptive capacity and recoverability.
9. Safe load shedding reduces scope, limits work in progress, accepts latency, routes efficiently, or adds capacity.
10. Risk-transferring load shedding shortens review, bypasses gates, defers maintenance, and ignores weak signals.
11. If economic pressure holds throughput constant, the same operating point can move near the workload boundary toward the joint-constraint region close to unacceptable performance.

Separate the stages rather than calling every observation a leading indicator:

- **Demand and capacity:** review-load ratio, queue age, and work in progress.
- **Compensatory adaptations:** context switching and rising after-hours work.
- **Assurance shedding:** falling review depth, bypasses, and deferred maintenance.
- **Later human outcomes:** burnout, sickness absence, and attrition.
- Burnout and restricted focus can warn that future performance-control capacity is being lost when corroborated by workload evidence.
- Escaped defects, security failures, incidents, and difficult recovery are lagging performance signals.

## Longer-term narrative ideas

This broader flow sketch includes material still held as working ideas. Its Sense / Constrain / Adapt / Correct response supports the closing sequence in speaker notes.

1. Title and audience promise
2. The new question: can organizational feedback keep pace with AI-enabled change?
3. Rasmussen refresher: one moving state, three constraints, competing gradients, and actual versus perceived boundaries
4. The 2024–2026 distinction: geometry versus control-loop bandwidth
5. How AI changes production gain, change-arrival rate, excursion variance, verification demand, and feedback latency
6. Dynamic economic envelope: why cheaper tokens can coexist with higher aggregate cost
7. Workload constraint: finite attention, knowledge, and verification capacity
8. Performance constraint: monitored proxies, the marginal boundary, error margin, and recoverability
9. Multiple closing margins: economic control transferring pressure into workload and performance
10. Controlled operation: no preferred center, only sufficient margin, bounded excursions, and recovery
11. Architecture and organizational responses: Sense, Constrain, Adapt, Correct
12. Takeaways
13. Primary references
14. Close: keep the control loop ahead of the drift

## Working response pattern

The four verbs are this talk's synthesis. They support the boundary close-ups and closing argument, while retaining the model’s three constraints and performance-side buffer. The fuller mechanisms are retained here for speaker preparation:

- **Sense:** observe value per verified outcome, lifecycle cost, review-load ratio, performance proxies, signal quality, and feedback delay.
- **Constrain:** rate-limit admitted work, cap work in progress and token budgets, enforce permissions, and preserve verification gates.
- **Adapt:** reduce scope or throughput, accept latency, route models, cache or batch safely, validate, degrade gracefully, and use fallbacks.
- **Correct:** give actors the authority and capacity to restore margin through rollback, staffing, architecture, policy, demand changes, and learning.

Monitoring is only a sensor. Feedback becomes counterpressure when the signal is trusted and someone has both authority and remaining capacity to act.

## Presentation language to preserve

- A central spatial boundary model rather than a sequence of unrelated rectangles
- Camera moves and zoom-outs that reveal how local pressure changes the whole system
- Progressive reveals for audience pacing
- Archivo Black headings, title-slide speaker name and opening-hook statements, Open Sans by default for tables, and Comic Neue for other editable text. Preserve emoji fonts and slide-specific table exceptions; see the [deck typography rule](slides/README.md).
- A neutral operating-point marker that can visibly drift
- Speaker notes, reduced-motion support, and a printable fallback from the beginning

## Visual semantics to add

- Show a slow-moving operating-point kernel with faster excursions around it.
- Show one operating state approaching the workload–performance joint-constraint region, not two operating points.
- If the organization's estimate is shown, render it as a trailing shadow and label it as delayed perception.
- On the performance side, distinguish the solid actual functional boundary, dotted perceived or marginal boundary, and optional inner safety goal. Do not repeat that dotted-boundary grammar on the economic or workload sides.
- For economics, distinguish the constraint from its controller. Usage moves the point; a genuine financing, revenue, or sustainable-cost change can move the boundary; forecasts, budgets, quotas, and return targets inform or change the controller.
- Label arrows by their mechanisms: economic pressure, least-effort adaptation, and safety-control response.
- Make restoring arrows conditional on signal quality, authority, response capacity, and delay; boundaries must not bounce the point automatically.
- Let repeated successful excursions move the perceived boundary outward and consume error margin.
- Corrective action should restore margin and recoverability, not return the point to a geometric center.
- Show both branches: AI amplifying unsafe production pressure and AI increasing trustworthy assurance capacity.

## Evidence guardrails

- Do not claim that AI automatically overloads review or that layoffs automatically degrade performance.
- State the necessary condition: admitted change demand grows faster than effective verification capacity while scope, deadlines, or throughput remain protected.
- Distinguish queue growth from quality failure. Quality risk requires a further adaptation that reduces assurance or recovery capacity.
- Treat “economic pressure is strongest” as a contextual hypothesis about visibility and authority, not a universal law.
- Treat rising after-hours work as compensatory adaptation, and burnout or attrition as later human outcomes that require corroborating workload evidence. Prefer review-load ratio, queue age, and work in progress while action remains possible.
- Treat performance-monitoring thresholds as proxies for a perceived performance boundary, not direct knowledge of the true functional limit. Treat economic budgets and quotas as controller thresholds, not perceived Rasmussen boundaries.
- Do not use “companies are burning piles of cash” as a category claim. Distinguish model-lab financing, profitable hyperscaler investment, and adopter operating expense.
- Never equate capital expenditure, expense, negative free-cash-flow movement, and operating loss. Name the metric, entity, period, and scope.
- Do not sum heterogeneous provider capital-expenditure guidance into one “AI spend” total; scopes and accounting definitions differ.
- Treat “tokens are not free” as the opening intuition, then move immediately to total lifecycle cost and value per completed, verified outcome.

## Sources

- QCon SF 2026 talk page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- Hatch, Andrew. *Defence at the Boundary of Acceptable Performance*. SREcon24 Americas: <https://www.usenix.org/conference/srecon24americas/presentation/hatch>
- SREcon24 recording: <https://www.youtube.com/watch?v=1MB2YFiNQ-4>
- SREcon24 presentation: <https://srecon24.hatchman76.com>
- Rasmussen, Jens. “Risk management in a dynamic society: A modelling problem.” *Safety Science* 27, no. 2–3 (1997): 183–213. <https://doi.org/10.1016/S0925-7535%2897%2900052-0>
- Cook, Richard I., and Jens Rasmussen. “‘Going solid’: a model of system dynamics and consequences for patient safety.” *Quality and Safety in Health Care* 14, no. 2 (2005): 130–134. <https://doi.org/10.1136/qshc.2003.009530>
- Morrison, J. Bradley, and Robert L. Wears. “Modeling Rasmussen’s dynamic modeling problem: drift towards a boundary of safety.” *Cognition, Technology & Work* 24 (2022): 127–145. <https://doi.org/10.1007/s10111-021-00668-x>
- Little, John D. C. “A Proof for the Queuing Formula: L = λW.” *Operations Research* 9, no. 3 (1961): 383–387. <https://doi.org/10.1287/opre.9.3.383>
- Kingman, J. F. C. “The single server queue in heavy traffic.” *Mathematical Proceedings of the Cambridge Philosophical Society* 57, no. 4 (1961): 902–904. <https://doi.org/10.1017/S0305004100036094>
- OpenAI API pricing: <https://openai.com/api/>
- Amazon Q2 2026 results: <https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/default.aspx>
- Alphabet Q4 2025 earnings call and 2026 outlook: <https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx>
- Microsoft FY2026 Q2 results: <https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2>
- Microsoft FY2026 Q3 outlook: <https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3>
- Meta Q2 2026 results: <https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx>
- Oracle FY2026 results: <https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/>
- Rayo, Morey, Grøtan, and Woods. “AI Gold Rush 2 Versus AI Realism” (2026): <https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5>
- Morey, Rayo, and Woods (2025), joint human–AI evaluation in simulated patient cases: <https://www.nature.com/articles/s41746-025-01784-y>
- AWS. Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region, 19–20 October 2025: <https://aws.amazon.com/message/101925/>

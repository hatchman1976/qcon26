# Talk working notes

## Published promise

**Adapt or Drift: Resilience Engineering When AI Moves the Operating Point** asks whether our systems can adapt as models, workloads, costs, latency, and uncertainty change—or whether they silently drift outside acceptable behavior.

The talk adapts Rasmussen's Dynamic Safety Model and the 2024 SREcon presentation, *Defence at the Boundary of Acceptable Performance*, for AI-mediated production systems.

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
- The solid functional boundary and the dotted perceived or marginal boundary are different. Monitoring operationalizes fallible proxies; it does not reveal the true functional limit.
- Crossing the dotted line enters and begins consuming the deliberately protected error margin. That margin is exhausted only at the actual functional boundary, and harm need not have occurred at the dotted line.
- There is no privileged geometric center. The control objective is sufficient margin, bounded excursions, and recoverability.
- One operating point can have little remaining margin to multiple boundaries. Under sustained pressure it can approach the workload–performance joint-constraint region.
- Proximity-dependent safety pressure is a useful control-loop extension formalized by Morrison and Wears, not a force law stated in Rasmussen's 1997 paper. Their response is driven by the perceived operating point's distance from an explicit safety goal, not direct knowledge of the true boundary.
- Economic feedback is often fast, visible, and authoritative in technology organizations, but it is not universally the strongest or most accurate control loop.
- Treat economic activity, economic capacity, and economic targets separately. Increased consumption or commitments move the operating point; changes in funding, revenue, runway, or sustainable cost structure reshape the actual economic boundary; budgets, quotas, and return targets create perceived guardrails inside it.
- Do not animate one event as point movement, actual boundary movement, and guardrail movement. Choose the semantic that carries the argument.
- A falling token price does not imply falling aggregate cost. Unit cost and total demand can move in opposite directions.

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
- **Perceived economic-guardrail movement:** internal budgets, token quotas, and return-on-investment targets.

The economics differ by system level:

- **Model labs:** model development, serving, talent, and compute commitments; the constraint is runway, financing, and monetization.
- **Hyperscalers:** capital expenditure, depreciation, power, leases, utilization, maintenance, replacement, and capacity-allocation risk. Capital expenditure creates an asset; it is not automatically a loss.
- **Adopters:** metered inference, seats, integration, tools and data, evaluation, human verification, rework, and recovery. The token invoice is only one part of workflow economics.

Economic control can protect the other margins by limiting demand, routing to cheaper models, caching, batching, reducing context, or stopping low-value work. It transfers risk when the organization holds output constant by cutting people, evaluation, observability, or recovery capacity.

## Current economic evidence for speaker notes

As of August 25, 2026:

- OpenAI meters input, cached input, and output tokens separately; agentic workflows can also accumulate reasoning, turns, retries, tool calls, and validation passes. Current prices are examples, not durable constants, and must be refreshed before the conference.
- Alphabet reported that Gemini serving unit cost fell 78% during 2025 while guiding to $175–185 billion of 2026 capital expenditure, up from $91.4 billion in 2025. This is the cleanest unit-cost-versus-aggregate-investment contrast.
- Amazon reported trailing-twelve-month free cash flow of negative $7.6 billion through June 2026, driven primarily by a $66.1 billion year-over-year increase in property and equipment purchases that it said primarily reflected AI investment. Amazon simultaneously remained profitable and reported strong AWS growth.
- Oracle reported FY2026 operating cash flow of $31.98 billion, capital expenditure of $55.66 billion, and free cash flow of negative $23.69 billion, attributing the cash consumption to Cloud Infrastructure investment.
- Microsoft forecast roughly $190 billion of calendar-2026 capital expenditure while still expecting growth and remaining capacity constrained. Meta forecast $130–145 billion of 2026 capital expenditure and reported $784 million of Q2 free cash flow.

The defensible category claim is:

> AI infrastructure is absorbing extraordinary amounts of cash—even at the world's most cash-generative companies.

Do not generalize that all companies are “burning cash.” Some providers are free-cash-flow negative after investment; others remain highly profitable while converting operating cash into infrastructure. Always name the entity, metric, period, and scope.

## Economic-to-workload-to-performance trajectory

1. AI-enabled work can increase model consumption and the arrival rate or variability of candidate changes.
2. Increased consumption can move the operating point toward the economic boundary while finite verification capacity moves it toward the workload boundary.
3. A budget, financing, revenue, or cost-structure shock can contract the economic envelope around the point.
4. The organization must then reduce demand, improve sustainable unit economics, accept lower returns, or transfer the cost elsewhere.
5. If it answers economic pressure by removing relevant people or expertise, the workload boundary can contract.
6. People may initially preserve delivery through overtime, context switching, workarounds, and discretionary effort.
7. Local compensation can hide saturation while consuming adaptive capacity and recoverability.
8. Safe load shedding reduces scope, limits work in progress, accepts latency, routes efficiently, or adds capacity.
9. Risk-transferring load shedding shortens review, bypasses gates, defers maintenance, and ignores weak signals.
10. If economic pressure holds throughput constant, the same operating point can move near the workload boundary toward the joint-constraint region close to unacceptable performance.

Separate the stages rather than calling every observation a leading indicator:

- **Demand and capacity:** review-load ratio, queue age, and work in progress.
- **Compensatory adaptations:** context switching and rising after-hours work.
- **Assurance shedding:** falling review depth, bypasses, and deferred maintenance.
- **Later human outcomes:** burnout, sickness absence, and attrition.
- Burnout and restricted focus can warn that future performance-control capacity is being lost when corroborated by workload evidence.
- Escaped defects, security failures, incidents, and difficult recovery are lagging performance signals.

## Draft narrative spine

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
12. Team exercise: stress the control loop around one real AI-mediated workflow
13. Takeaways
14. Primary references
15. Close: keep the control loop ahead of the drift

## Working response pattern

The four verbs are a working synthesis, not final conference copy:

- **Sense:** observe value per verified outcome, lifecycle cost, review-load ratio, performance proxies, signal quality, and feedback delay.
- **Constrain:** rate-limit admitted work, cap work in progress and token budgets, enforce permissions, and preserve verification gates.
- **Adapt:** reduce scope or throughput, accept latency, route models, cache or batch safely, validate, degrade gracefully, and use fallbacks.
- **Correct:** give actors the authority and capacity to restore margin through rollback, staffing, architecture, policy, demand changes, and learning.

Monitoring is only a sensor. Feedback becomes counterpressure when the signal is trusted and someone has both authority and remaining capacity to act.

## Presentation language to preserve

- A central spatial boundary model rather than a sequence of unrelated rectangles
- Camera moves and zoom-outs that reveal how local pressure changes the whole system
- Progressive reveals for audience pacing
- A neutral operating-point marker that can visibly drift
- Speaker notes, reduced-motion support, and a printable fallback from the beginning

## Visual semantics to add

- Show a slow-moving operating-point kernel with faster excursions around it.
- Show one operating state approaching the workload–performance joint-constraint region, not two operating points.
- If the organization's estimate is shown, render it as a trailing shadow and label it as delayed perception.
- Distinguish the solid actual functional boundary, dotted perceived or marginal boundary, and optional inner safety goal.
- Distinguish actual economic capacity from the internal budget or return guardrail. Usage moves the point; a genuine financing, revenue, or sustainable-cost change moves the boundary.
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
- Treat monitoring thresholds as perceived boundaries and proxies, not direct knowledge of the true failure boundary.
- Do not use “companies are burning piles of cash” as a category claim. Distinguish model-lab financing, profitable hyperscaler investment, and adopter operating expense.
- Never equate capital expenditure, expense, negative free-cash-flow movement, and operating loss. Name the metric, entity, period, and scope.
- Do not sum heterogeneous provider capital-expenditure guidance into one “AI spend” total; scopes and accounting definitions differ.
- Treat “tokens are not free” as the opening intuition, then move immediately to total lifecycle cost and value per completed, verified outcome.

## Sources

- QCon SF 2026 talk page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- Hatch, Andrew. *Defence at the Boundary of Acceptable Performance*. SREcon24 Americas: <https://www.usenix.org/conference/srecon24americas/presentation/hatch>
- SREcon24 recording: <https://www.youtube.com/watch?v=1MB2YFiNQ-4>
- SREcon24 presentation: <https://srecon24.hatchman76.com>
- Rasmussen, Jens. “Risk management in a dynamic society: A modelling problem.” *Safety Science* 27, no. 2–3 (1997): 183–213. <https://doi.org/10.1016/S0925-7535(97)00052-0>
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

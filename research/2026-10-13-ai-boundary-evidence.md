# Evidence for the AI boundary sequence

Initially verified against public sources on 13 October 2026; the economic budget and financing examples were updated on 26 October 2026. Use the stated populations and qualifications in speaker notes. The slides can describe a risk or a pressure without claiming every organization experiences it.

## 1. Economics: AI overruns redistribute the budget

- **Primary source:** [ETR, AI Demand Is Strong. AI Budget Control Is Still Catching Up](https://research.etr.ai/etr-data-drop/ai-demand-is-strong.-ai-budget-control-is-still-catching-up), 6 August 2026.
- **Scope:** Summer 2026 Macro Views Survey; 1,636 technology leaders; fielded 2 June–5 July 2026. 47% reported AI spending moderately or substantially over plan.
- **Funding response:** Among organizations reallocating to cover AI overruns, 61% cut contractors/consultants, 49% legacy infrastructure modernization/hardware refresh, 36% non-AI licenses, and 28% internal headcount budgets. These percentages apply to reallocators, not all respondents. Cutting a headcount budget is not itself proof of layoffs.
- **Defensible slide copy:** “AI becomes a must-fund priority. Overspend is covered by shifting money from contractors, infrastructure refresh, software—and sometimes staffing budgets.”
- **Limits:** Self-reported survey; describes funding choices, not audited financial outcomes or universal causality. The sample also contains organizations with no formal AI budget.

## 2. Economics: adoption can outrun the annual allowance

- **Original interview/news:** [The Information, Uber CTO Shows How Claude Code Can Blow Up AI Budgets](https://www.theinformation.com/newsletters/applied-ai/uber-cto-shows-claude-code-can-blow-ai-budgets), 14 April 2026.
- **Defensible slide copy:** “Uber’s CTO reported its annual AI budget exhausted by April as coding-tool use surged.”
- **Limits:** Reported executive account in a paywalled interview, not an independently audited finance statement. Do not describe this as its entire IT budget. This card deliberately keeps source-derived copy below this source’s 25-word summary allowance. It is an illustrative company case, not a prevalence estimate.

## 3. Economics: outside capital finances AI infrastructure

- **Primary source:** [Meta / Blue Owl, Hyperion joint venture](https://about.fb.com/news/2025/10/meta-blue-owl-capital-develop-hyperion-data-center/), 21 October 2025.
- **Scope:** Outside financing supports approximately $27 billion of development, with Meta retaining lease and guarantee commitments.
- **Defensible slide copy:** “Bring in outside capital: Meta’s $27bn Hyperion venture with Blue Owl.”
- **Limits:** Project cost is not annual AI spending; financing retains future obligations.

## 4. Workload: polished output can transfer effort to colleagues

- **Primary source:** [BetterUp Labs and Stanford Social Media Lab, Workslop](https://www.betterup.com/workslop), survey conducted September 2025 (landing page has no explicit publication date).
- **Scope:** Online survey of 1,150 full-time US desk workers. 40% reported receiving workslop in the previous month; resolving an incident took approximately two hours on average.
- **Defensible slide copy:** “A polished handoff can hide unfinished thinking. Workslop moves effort from the author to the reviewer.”
- **Metric suitable for a small evidence footer:** “40% encountered workslop; ~2h to resolve each instance. US desk-worker survey, n=1,150.”
- **Limits:** Self-reported survey partnered with a commercial coaching provider. It measures respondents’ experiences, not an objective audit of all AI output. Workslop is a specific failure mode; the finding does not mean all AI-assisted work is poor.

## 5. Workload: parallel agents can intensify human work

- **Primary researcher interview:** [UC Berkeley Haas, AI promised to free up workers’ time. Researchers found the opposite](https://newsroom.haas.berkeley.edu/ai-promised-to-free-up-workers-time-uc-berkeley-haas-researchers-found-the-opposite/), 18 February 2026.
- **Scope:** Eight-month ethnography at one 200-person US technology company; more than 40 semi-structured interviews. Researchers observed broader task scope, work spreading into breaks/evenings, and simultaneous AI workflows. They describe denser cognitive demands and reduced recovery as a route to unsustainable intensity, impaired judgment, and errors.
- **Defensible slide copy:** “More parallel streams do not give humans more attention. Faster output can reset expectations, consume recovery time, and overload review.”
- **Limits:** Qualitative, in-progress research at one company. Present burnout as a risk indicated by intensification and reduced recovery, not a measured causal effect or universal incidence rate. It does not prove that lower-skill users necessarily burn out more.

## 6. Error margin: delegation can outrun understanding

- **Primary experimental research:** [Anthropic, How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills), 29 January 2026; [research paper](https://arxiv.org/abs/2601.20245), posted 28 January 2026.
- **Scope:** Randomized study of 52 mostly junior Python engineers learning the unfamiliar Trio library. Mean quiz scores were 50% with AI versus 67% without it (17 percentage points); the largest gap concerned debugging. Completion time did not improve significantly. Participants who used AI to build comprehension retained stronger mastery.
- **Defensible slide copy:** “Generating a change is easier than understanding it. Preserve the debugging skills needed to supervise what we ship.”
- **Limits:** Small, short task and immediate quiz; it does not measure long-term skill loss or production incidents. The connection to on-call response/security is a reasoned presentation inference: weaker understanding may reduce a team’s ability to validate changes and diagnose failures. Mark that connection as a risk, not an observed result of this experiment.

## Recommended talk framing

Economics: “The AI bill competes for the same money. Organizations may seek more budget, cut other spending, or restructure.” Workload: “Automation can remove toil; low-quality output and parallel streams can also add review load.” Error margin: “If change volume grows faster than verification and comprehension, our safety margin can erode.”

Avoid “layoffs to fund AI are always/common everywhere,” “AI makes all output worse,” and “less capable users inevitably burn out.” The evidence supports specific observed cases and identifiable mechanisms, with results depending on how AI is used and governed.

# Token economy: sources and limits

Primary sources checked on 27 October 2026 for [Tokenomic Progression](../slides/09i2-token-economy.md), placed between the AI economics and workload slides. The slide distinguishes consumption as a score, usage measurement and routing requests to cheaper models. Its large Model Enshittification footer now leads into a separate three-stage slide. This 28 October presentation update preserves the original source-check date. Additional evidence and counterexamples are reviewed in [Token costs and market power, 28 October 2026](2026-10-28-token-costs-and-market-power.md).

## Doctorow's platform pattern

- [TikTok's enshittification, 21 January 2023](https://pluralistic.net/2023/01/21/potemkin-ai/#hey-guys) describes value initially allocated to users, then shifted toward business customers at users' expense, then captured by the platform and shareholders from both sides.
- [Enshittification: Why Everything Suddenly Got Worse and What to Do About It](https://us.macmillan.com/books/9780374619329/enshittification/), Cory Doctorow, MCD, published 7 October 2025. The publisher's excerpt preserves the user and business-customer distinction.

This is a two-sided-platform framework. Business customers, such as advertisers, sellers and publishers, are distinct from the platform owner. A consumer-to-enterprise sales sequence alone does not establish the pattern. The slide's AI comparison is an analogy to examine, not proof of intentional dependency, degradation or extraction by a named provider.

The separate [Model Enshittification step](../slides/09i3-model-enshittification.md) now presents three adapted stage headings: Serve Users, Favor Business and Squeeze for Rent. Enshittification names the whole process, with rent extraction in its final stage, not an additional fourth stage. Business customers remain distinct from the platform owner. The attribution reads “After Cory Doctorow, Enshittification (2025)” because the wording is adapted, not quoted. The AI application remains a conditional analogy, not a finding about every provider.

## Consumption as a scoreboard

[tokenmaxxing.sh](https://tokenmaxxing.sh/) displays a public leaderboard of LLM-agent token usage and estimated API-equivalent cost, derived from participants' local usage records. This verifies a consumption ranking. It does not establish actual amounts billed, productivity, output quality, reliability or how representative participants are. Here “tokens” means model-processing units, not cryptocurrency. Live ranks and totals change, so the slide does not preserve a numerical ranking.

The table's **Maxxing** row describes treating token consumption as a score to maximise. This is the talk's concise characterization of the consumption-ranking mechanism, not evidence that maximising consumption maximises useful output.

## Metering

The table defines Metering as counting token use to track limits and allowances. Usage may be measured within a prepaid allowance or subscription, and metering does not automatically mean each token creates an additional charge. Neither metering nor charging for usage independently proves deliberate rent extraction, customer lock-in or degraded model quality.

## Cost-oriented model routing

[Microsoft Learn — How model router works in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router-how-it-works), last updated 10 September 2026 and checked 27 October 2026, describes routing modes that trade cost against quality. Cost mode favours cheaper models and can accept lower quality on complex prompts. The documentation also requires evaluation against a meaningful workload baseline.

The table's Optimization row reads “Route users’ requests to cheaper models to reduce costs.” This is a concise description of that approach, not a guarantee that cheaper routing preserves quality. The source establishes a documented cost-optimization mechanism, not secret substitution, deliberate degradation, universal provider behaviour or proof of enshittification. The row is not a claim that every model router always chooses the cheapest model.

## A documented metering change

[Cursor's Updates to Teams and Auto](https://cursor.com/blog/aug-2025-pricing), Michael Truell, 12 August 2025, announced that individual Auto usage would count toward the included monthly allowance at token rates on the next renewal after 15 September. The announcement says individual Auto had been unlimited since June 2025. An annual subscriber's applicable renewal could occur in 2026.

This historical example is retained in speaker notes only. The announcement describes a transition in included usage, not every customer changing billing on one date or every Cursor feature having been unlimited. The source does not prove deliberate lock-in, reduced model quality or a completed enshittification cycle.

## Presentation use

The original step's six reveals are the title, table headings, Maxxing row, Metering row, Optimization row, then the large 💩 Model Enshittification 💩 footer heading. That same heading carries into the next step, which has three stage reveals and its own attribution. The first column heading is **Approach**. Body row labels and descriptions both use regular-weight Open Sans. All revealed content remains on the world canvas after leaving the step. The position is `data-x="11250"`, `data-y="304850"`, `data-scale="3.55392"`, with both token steps moved left together so the economic boundary remains just outside their 16:9 frames.

These five original links and six additional sources reviewed on 28 October appear in the final References slide's **Token economy (12)** collection, alongside the QCon, SREcon26 and Resilience collections, for 44 unique sources overall. All collections print. The deck now contains 33 content steps and three camera steps, for 36 Impress steps.

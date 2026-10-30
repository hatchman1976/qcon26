# Tokenomics Evolution

Rendered step: `#/token-economy`.

Placed immediately after `#/ai-economic-pressure` and before [Model Enshittification](09i3-model-enshittification.md), at `data-x="11250"`, `data-y="304850"`, `data-scale="3.55392"`. This step sits beside the fish diagram's economic side, with the permanent boundary lines just outside the left edge of its 16:9 view. The following step sits lower with a gap between their canvases.

## Slide copy and reveal sequence

Six native presenter-controlled substeps:

1. **Tokenomics Evolution**
2. The table headings, **Stage** and **Control intent**.
3. 🏆 Maxxing — Treat token consumption as a score to maximise.
4. 📏 Metering — Count token use to track limits and allowances.
5. 🔀 Optimization — Route users’ requests to cheaper models to reduce costs.
6. “How does commercial AI evolve from here, and what are the risks?”

The table has two columns. Column headings use 36px Archivo Black, and all body cells, including row labels and nested text, use bold 32px Comic Neue. Preserve the emoji font stack. Each body row reveals as a unit. The table is centered vertically between the slide title and the bottom question, with equal space above and below, and retains 10px cell padding. The question uses bold 32px Comic Neue, centered horizontally with balanced wrapping and 79px of clearance below it. It remains the sixth reveal.

The Model Enshittification heading and its flanking 💩 appear only on the following step, which has its own heading and Doctorow attribution. The two canvases do not overlap. The Cursor example remains in speaker notes rather than the visible table.

Revealed content remains visible on the world canvas when leaving the slide. Source links are collected in **Token economy (12)** on the final [References slide](14-references.md).

## Speaker notes

The table separates three approaches. Maxxing treats consumption as a score to increase, without establishing whether the resulting work is useful. Metering counts usage against limits and allowances. Optimization here means routing requests to cheaper models to reduce costs. Counting tokens does not by itself require charging per token. Neither metering nor cost-oriented model selection alone establishes rent extraction or deliberate degradation.

Microsoft's model-router documentation describes a Cost mode that favours cheaper models and may accept lower quality for complex prompts. It also calls for evaluating routing against a meaningful workload baseline. This supports the existence of cost-oriented routing, not a guarantee of equal quality or proof of enshittification.

Cheaper access to a given capability is a documented trend. Stanford's 2025 AI Index reports querying prices at GPT-3.5-level MMLU performance falling from $20 per million tokens in November 2022 to $0.07 in October 2024. These are customer-facing querying prices, not audited production costs or guaranteed future rates. More use and transferred work can still increase the overall bill.

Doctorow's pattern is a conditional analogy about dependence and pricing power. Cloud switching barriers provide a specific comparison, while regulatory improvements and available open-weight alternatives show that the outcome is not inevitable. DeepSeek currently offers MIT-licensed weights and a paid API, so the evidence does not support saying it has been pushed out.

Tokens here measure LLM usage, not cryptocurrency. tokenmaxxing.sh publishes participant usage totals and an API-equivalent cost estimate. Those figures are not audited bills or measures of useful output, productivity or reliability.

As a historical example for discussion, Cursor announced the individual Auto change on 12 August 2025, applying at the next renewal after 15 September. Auto had been unlimited for individuals since June 2025. Renewals on annual subscriptions could fall in 2026. The example establishes a change to included usage and metering, not deliberate lock-in or degraded output quality.

## Sources

- [Cory Doctorow — TikTok's enshittification, 21 January 2023](https://pluralistic.net/2023/01/21/potemkin-ai/#hey-guys)
- [Cory Doctorow — Enshittification, MCD, 2025](https://us.macmillan.com/books/9780374619329/enshittification/)
- [tokenmaxxing.sh — Public LLM usage leaderboard](https://tokenmaxxing.sh/)
- [Michael Truell / Cursor — Updates to Teams and Auto, 12 August 2025](https://cursor.com/blog/aug-2025-pricing)
- [Microsoft Learn — How model router works in Microsoft Foundry, updated 10 September 2026](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router-how-it-works)
- [Stanford HAI (2025) — AI Index: State of AI in 10 Charts](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts)
- [CMA (2025) — Cloud services, summary of final decision](https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf)
- [CMA (2026) — Business-software choice and cloud improvements](https://www.gov.uk/government/news/cma-takes-first-steps-to-ensure-choice-in-business-software)
- [CMA (2024) — Competition risks in AI foundation models](https://www.gov.uk/government/news/cma-outlines-growing-concerns-in-markets-for-ai-foundation-models)
- [DeepSeek (2026) — V4.1-Flash-1017 model card and MIT weights](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- [DeepSeek — Official API models and pricing, checked 28 October 2026](https://api-docs.deepseek.com/quick_start/pricing/)

Evidence reviews: [Token economy, 27 October 2026](../research/2026-10-27-token-economy.md) and [Token costs and market power, 28 October 2026](../research/2026-10-28-token-costs-and-market-power.md).

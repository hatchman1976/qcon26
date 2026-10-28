# Tokenomic Progression

Rendered step: `#/token-economy`.

Placed immediately after `#/ai-economic-pressure` and before [Model Enshittification](09i3-model-enshittification.md), at `data-x="11250"`, `data-y="304850"`, `data-scale="3.55392"`. Both token steps sit beside the fish diagram's economic side, with the permanent boundary lines just outside the left edge of their 16:9 views. They were shifted 750 world units left together.

## Slide copy and reveal sequence

Six native presenter-controlled substeps:

1. **Tokenomic Progression**
2. The table headings, **Approach** and **What it means**.
3. 🏆 Maxxing — Treat token consumption as a score to maximise.
4. 📏 Metering — Count token use to track limits and allowances.
5. 🔀 Optimization — Route users’ requests to cheaper models to reduce costs.
6. 💩 **Model Enshittification** 💩

The table has two columns. Body row labels use regular-weight Open Sans, matching the descriptions in the right column. The column headings retain the presentation's heading font. Each body row reveals as a unit. The table starts 32px below the title and uses 10px cell padding to leave room for the large footer heading at local y=556. The footer heading and its flanking 💩 use 64px sizing.

The footer is the same heading element used by the following Model Enshittification step. It no longer has the “Risk” prefix, three-stage sentence or small attribution. The new step presents those stages with its own Doctorow attribution. The Cursor example remains in speaker notes rather than the visible table.

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

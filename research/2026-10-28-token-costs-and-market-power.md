# Token costs and market power

Primary sources checked on 28 October 2026 for [Tokenomic Progression](../slides/09i2-token-economy.md) and [Model Enshittification](../slides/09i3-model-enshittification.md). These sources distinguish cheaper access to a given capability from the ability of platforms to retain pricing power. They do not establish an inevitable outcome for AI markets.

## A readable article on falling prices

[Stanford HAI — AI Index 2025: State of AI in 10 Charts](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts), Nestor Maslej, 7 April 2025, is the recommended introductory article. At GPT-3.5-level MMLU performance, it reports querying prices falling from $20 per million tokens in November 2022 to $0.07 in October 2024, over 280-fold. Use those dates, because the article's “18 months” description does not match them.

The [underlying AI Index report](https://hai.stanford.edu/ai-index/2025-ai-index-report) also describes annual hardware-cost declines of 30%. This is a reported historical trend, not a promise of future compute prices.

This is API querying price at a fixed benchmark capability, not an audit of providers' production costs or a forecast of every future token price. Hardware and model efficiency can reduce serving costs, but customer prices also depend on competition, contracts and margins. More use, longer reasoning and transferred verification work can offset lower unit prices. A benchmark match also does not establish equivalent quality for every workload.

## Cloud is evidence for a mechanism, not a universal AI verdict

The CMA's [31 July 2025 cloud-services final decision](https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf) found competition was not working well in its UK and EEA market definition. It identified concentrated supply, significant market power held by Microsoft and AWS, switching and multicloud barriers, and adverse effects from Microsoft's licensing practices. Egress charges and incompatible services could weaken customers' ability to choose alternatives. Prices had moved in different directions across services, so this is not evidence of an across-the-board price increase. The findings concern defined cloud markets, not every AI provider or the completion of Doctorow's sequence.

The CMA's [16 October 2026 update](https://www.gov.uk/government/news/cma-takes-first-steps-to-ensure-choice-in-business-software) reports material improvements: connecting rival data centres, removing transfer charges for switching, reducing them for multicloud use, and supporting interoperability. Remaining barriers still required attention. Its separate proposal to designate Microsoft's business-software ecosystem was provisional, not a final finding of wrongdoing. The update matters because competition and policy can change the trajectory.

For AI specifically, the CMA's [11 April 2024 foundation-models warning](https://www.gov.uk/government/news/cma-outlines-growing-concerns-in-markets-for-ai-foundation-models) identified risks from control of critical inputs, incumbent routes to customers, and partnerships that could reinforce market power. It also recognised that partnerships can support competition. These are identified risks, not proof that every partnership excludes rivals.

## Open-weight competition remains present

DeepSeek's [V4.1-Flash-1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) makes its repository and weights available under MIT terms. Its [official pricing page](https://api-docs.deepseek.com/quick_start/pricing/) also lists a paid API serving that model. As checked on 28 October 2026, published Flash prices vary by peak period and cache status, with off-peak uncached input at $0.15 and output at $0.60 per million tokens. These are dated offers, not guaranteed future rates or a free self-hosting claim.

The evidence supports an active open-weight and paid-API alternative. It does not support claiming DeepSeek has been pushed out, that future exclusion is settled, or that open weights remove infrastructure, integration and switching costs.

## Use in the talk

Suggested wording, as this talk’s inference: **Cheaper compute does not guarantee cheaper access. If competition weakens and switching becomes costly, providers can capture more of the savings.**

Doctorow's three-stage platform pattern is the conceptual analogy. The measured price trend, specific regulatory findings, current improvements and available alternatives supply evidence and counterweights. The seven new links join the five existing token sources in **Token economy (12)**, bringing the final References slide to 44 unique sources.

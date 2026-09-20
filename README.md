# QCon SF 2026 — Adapt or Drift

An interactive [impress.js](https://impress.js.org/) presentation for Andrew Hatch's QCon San Francisco 2026 talk, **“Adapt or Drift: Resilience Engineering When AI Moves the Operating Point.”**

- Conference page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- Repository: <https://github.com/hatchman1976/qcon26>
- Intended live site: <https://qcon26.hatchman76.com>
- Author: Andrew Hatch ([@hatchman1976](https://github.com/hatchman1976))

The rendered deck currently contains the official QCon title slide, an opening Takeaways slide, an introduction to socio-technical systems, Rasmussen's source model, a map of the paper's wider research landscape, a plain-language explanation, a bridge examining human behaviour with LLM tools, a further adapted slide from Andrew's 2024 SREcon presentation, and an original slide showing how AI enters the control structure's feedback and action channels. It uses that talk's pale backgrounds, Maven Pro and Comic Neue typography, collage-like placement, and staged reveals. Slide copy and speaker notes are maintained as one Markdown file per slide under [`slides/`](slides/README.md).

## Narrative focus

The 2024 SREcon talk foregrounded the geometry of Rasmussen's model: boundaries, margin, and continuous drift. The 2026 talk foregrounds the temporal control problem introduced by AI-mediated work:

- AI is not a fourth boundary; it changes existing gradients and control-loop gain and delay, and it can sometimes reshape existing constraints.
- Candidate change can become cheaper and faster while model consumption, infrastructure commitments, expert verification, and recovery all remain real costs.
- Unit economics and aggregate economics can move in opposite directions: falling token or serving cost does not prevent total spend from rising when use expands faster.
- Economic usage moves the operating point; sustainable financial capacity can reshape the economic boundary; budgets, quotas, forecasts, and ROI targets provide signals and setpoints for the economic controller—not additional Rasmussen boundaries.
- When admitted change outruns feedback and assurance, one operating state can approach the workload–performance joint-constraint region.
- The goal is not to return to a geometric center. It is to restore sufficient margin, bounded excursions, and recoverability.

The full conceptual guardrails, causal mechanism, and evidence requirements are maintained in [`TALK.md`](TALK.md).

## Work locally

The repository contains the deployable static site directly in `src/`. There is no build step and no generated site directory.

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory src
```

Then open <http://127.0.0.1:8000/>. Refresh the page after editing a source file.

The optional structural check reads `src/` directly and does not generate files:

```bash
npm run check
```

## Project structure

```text
qcon26/
├── slides/            # Current rendered flow, one Markdown file per slide
│   └── ideas/         # Preserved narrative ideas that are not rendered
├── src/
│   ├── index.html       # Active Impress steps and speaker notes
│   ├── main.js          # Impress.js initialization
│   ├── styles.css       # SREcon24-derived presentation theme
│   ├── fonts/           # Locally hosted presentation fonts
│   ├── images/          # Presentation artwork
│   └── vendor/          # Vendored Impress.js runtime and license
├── scripts/
│   ├── deploy.sh        # Human-run, account-checked AWS content deployment
│   └── verify-site.mjs  # Direct source checks
├── terraform/           # S3, CloudFront, ACM, and Route 53
└── TALK.md              # Working narrative and source notes
```

The title copy comes from the [QCon talk page](https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point). The visual theme and locally hosted artwork are adapted from Andrew's [SREcon24 presentation](https://srecon24.hatchman76.com), so the presentation does not depend on conference Wi-Fi.

## AWS hosting

Terraform defines:

- a private, encrypted, versioned S3 content bucket;
- CloudFront with Origin Access Control, HTTPS-only viewers, compression, and managed caching/security-header policies;
- an ACM certificate in `us-east-1` with Route 53 DNS validation;
- Route 53 `A` and `AAAA` aliases for `qcon26.hatchman76.com`;
- S3 remote state with native lock-file locking.

A narrowly scoped `terraform/bootstrap/` configuration adds QCon-specific S3 permissions to the existing personal `TerraformDeployRole`; it does not recreate the shared state bucket, IAM user, or IAM role owned by earlier projects.

The AWS provider is pinned to personal account `736654693886` with `allowed_account_ids`. Selecting any Cisco/ThousandEyes account causes Terraform to fail before it manages resources.

See [terraform/README.md](terraform/README.md) for the human-run setup. In accordance with this project's production guardrails, Terraform apply and AWS content writes must be run manually from a human-only privileged terminal.

## Content deployment

After the infrastructure exists, verify and deploy the static source from a human-only terminal:

```bash
npm run check
AWS_PROFILE=hatchman76 ./scripts/deploy.sh
```

The deployment script independently checks that `AWS_PROFILE` is `hatchman76` and that STS resolves to the expected personal account before it syncs `src/` or invalidates CloudFront.

## License

Please check with Andrew before reproducing all or part of the presentation.

Copyright © 2026 Andrew Hatch

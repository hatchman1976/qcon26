# QCon SF 2026 — Adapt or Drift

An interactive [impress.js](https://impress.js.org/) presentation for Andrew Hatch's QCon San Francisco 2026 talk, **“Adapt or Drift: Resilience Engineering When AI Moves the Operating Point.”**

- Conference page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- Repository: <https://github.com/hatchman1976/qcon26>
- Intended live site: <https://qcon26.hatchman76.com>
- Author: Andrew Hatch ([@hatchman1976](https://github.com/hatchman1976))
- Speaker guidelines: [QCon presentation guidance](QCON-SPEAKER-GUIDELINES.md), transcribed from the supplied screenshot.

The rendered deck contains 33 content steps and three overview/overlay camera steps, for 36 Impress steps. After the title, a statement about capability and control opens the argument, followed by the WHOAMI introduction. The deck moves through socio-technical systems, a definition of Resilience Engineering, Rasmussen's model and six boundary close-ups, then introduces the AI ball and follows it through economics, **Tokenomic Progression**, **Model Enshittification**, workload and the erosion of expertise. The expertise book and quotation lead into a separate visual sequence with the complex system, shrugging people, a flame and “This is Fine”. **AI margin pressure** uses one manual reveal: accumulating buckets cover the protective Lemming while a separate local ball makes one continuous journey through the dotted margin to the actual performance boundary as a warning pulses. The global operating point keeps roaming throughout. A static **Consequences** callout within the margin scene connects accumulated verification work, protective capacity and the ability to act on warnings. The following camera-only **AI Fish Diagram overview** opens onto the whole fish diagram. Four closing slides return to skills that protect margin, the control of AI as a tool or operator, boundary takeaways and human adaptive capacity, followed by a final References slide. Behaviour, control, joint evaluation and recovery messages remain integrated into the earlier steps and their speaker notes. Slide copy, preparation details and notes are maintained under [`slides/`](slides/README.md).

## Narrative focus

The 2024 SREcon talk foregrounded the geometry of Rasmussen's model: boundaries, margin, and continuous drift. The 2026 talk foregrounds the temporal control problem introduced by AI-mediated work:

- AI is not a fourth boundary; it changes existing gradients and control-loop gain and delay, and it can sometimes reshape existing constraints.
- Candidate change can become cheaper and faster while model consumption, infrastructure commitments, expert verification, and recovery all remain real costs.
- Unit economics and aggregate economics can move in opposite directions: falling token or serving cost does not prevent total spend from rising when use expands faster.
- Economic usage moves the operating point; sustainable financial capacity can reshape the economic boundary; budgets, quotas, forecasts, and ROI targets provide signals and setpoints for the economic controller—not additional Rasmussen boundaries.
- When admitted change outruns feedback and assurance, one operating state can approach the workload–performance joint-constraint region.
- The goal is not to return to a geometric center. It is to restore sufficient margin, bounded excursions, and recoverability.
- Responsibility needs practical access to evidence, time for review, and authority to intervene. Evaluate whether people, tools, and workflow can use useful recommendations, challenge convincing mistakes, and recover under pressure.

The integrated boundary and AI sequence draws on Chapter 5, [AI Gold Rush 2 Versus AI Realism](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5), reviewed against the supplied full book PDF, printed pp. 77–88 (PDF pp. 85–96). Economic addresses costs transferred or deferred; Workload addresses checking demand and finite capacity; Performance addresses situated, continuing joint evaluation; Error Margin applies those findings to Rasmussen's protected performance-side buffer. Error Margin remains a theme within the performance constraint, not a fourth boundary.

The speaker notes preserve the source limits: the chapter is a resilience synthesis and does not use Rasmussen's model, its joint-evaluation empirical example concerns predictive clinical AI, and the AWS recovery example in the Error Margin notes describes conventional automation with no reported generative AI involvement. Sense / Constrain / Adapt / Correct remain supporting action verbs in the notes.

The close adapts the four-part SREcon26 structure to the QCon argument. **Skills that protect margin** connects systems understanding, critical judgment and adaptation. **Tool vs Operator** asks how AI assists or acts, with boundaries on its permissions and pace and joint evaluation of people, tools and workflow. **We have to adapt** returns to economic, workload and performance pressures and the protected margin. **Humans are adaptable** closes on expertise, time and authority, and using AI to strengthen our capacity to understand, act and recover. These are proposed applications of the talk’s framework. The final [References slide](slides/14-references.md) collects the research, studies, reports and guidance links.

The full conceptual guardrails, causal mechanism, and evidence requirements are maintained in [`TALK.md`](TALK.md).

## Work locally

The repository contains the deployable static site directly in `src/`. There is no build step and no generated site directory. Follow the [deck typography rule](slides/README.md): Archivo Black headings, title-slide speaker name and opening-hook statements, Open Sans by default for tables, and Comic Neue for other editable text. Preserve emoji fonts and the documented slide-specific table exceptions.

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

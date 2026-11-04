# QCon SF 2026 — Adapt or Drift

<img src="src/favicon.svg" width="64" height="64" alt="Blocker Lemming" />

Andrew Hatch’s interactive [impress.js](https://impress.js.org/) presentation, **“Adapt or Drift: Resilience Engineering When AI Moves the Operating Point.”**

- [Conference talk](https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point)
- [Repository](https://github.com/hatchman1976/qcon26)
- Intended site: <https://qcon26.hatchman76.com>

The talk applies Rasmussen’s model to AI economics, workload, expertise and adaptive capacity. [`TALK.md`](TALK.md) holds the argument and evidence limits; [`slides/`](slides/README.md) holds the slide copy, preparation details and speaker notes. The rendered deck currently has 37 Impress steps, including three overview/overlay camera steps.

## Work locally

`src/` is the complete deployable website. Edit it directly: there is no build step or generated site directory. The runtime, fonts and presentation artwork are hosted locally. Markdown slide files are reference material, not rendering inputs.

Use Python 3 to serve the deck and Node.js 20.11 or later for the structural check. There are no npm dependencies to install.

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory src
```

Open <http://127.0.0.1:8000/> and refresh after edits.

- Normal click-through substeps are enabled by default.
- [Review mode](http://127.0.0.1:8000/?substeps=off) advances by whole slides and plays reveals automatically.
- `?substeps=on` explicitly restores normal mode. `data-substeps` on `#impress` controls the default.

On phones and tablets, swipe horizontally or use Back/Next. Each swipe advances one reveal or slide; links and reference tabs remain tappable. Landscape gives the fixed slide layout more readable space.

Run the source check before publishing:

```bash
npm run check
node --test scripts/touch-navigation.test.mjs
```

This checks required deck content, structure and assets; visually review changed slides and their transitions as well. Keep revealed content visible after leaving a slide unless it is intentionally replaced. Follow the [typography rule](slides/README.md) and [speaker guidance](QCON-SPEAKER-GUIDELINES.md).

## Project files

- `src/index.html`: active steps and speaker notes.
- `src/main.js`, `src/touch-navigation.js`, `src/styles.css`, `src/ai-fish-symbols.css`: behavior, touch navigation and presentation styles.
- `src/fonts/`, `src/images/`, `src/vendor/`: local presentation assets and Impress.js.
- `scripts/verify-site.mjs`: source checks.
- `scripts/deploy.sh`: human-run content sync and CloudFront invalidation.
- `terraform/`: hosting configuration and role-policy bootstrap.
- `research/` and `slides/ideas/`: sources and material outside the rendered deck.

## AWS hosting and deployment

Terraform is intended for Andrew’s personal AWS account **736654693886**, using profile `hatchman76` and `hatchman76-bootstrap` for the role-policy bootstrap. Do not use Cisco or ThousandEyes identities. See [AGENTS.md](AGENTS.md) for the project boundaries.

The site uses a private, encrypted, versioned S3 bucket behind CloudFront Origin Access Control. CloudFront redirects HTTP to HTTPS and uses an ACM certificate in `us-east-1`; Route 53 creates the `qcon26.hatchman76.com` aliases. Terraform state uses the existing personal S3 state bucket with separate QCon keys and native lock files.

Follow the [Terraform setup and plan/apply instructions](terraform/README.md). Terraform apply and AWS content writes must be run by Andrew from a human-only privileged terminal. Once the infrastructure exists, deploy from the repository root:

```bash
AWS_PROFILE=hatchman76 ./scripts/deploy.sh
```

The script verifies the personal account, bucket and CloudFront distribution, runs the source check, syncs assets and uploads `index.html` last, then invalidates CloudFront. It requires the AWS CLI, Node.js and initialized Terraform state.

## License

Please check with Andrew before reproducing all or part of the presentation.

Copyright © 2026 Andrew Hatch

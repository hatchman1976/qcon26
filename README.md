# QCon SF 2026 — Adapt or Drift

An interactive [impress.js](https://impress.js.org/) presentation for Andrew Hatch's QCon San Francisco 2026 talk, **“Adapt or Drift: Resilience Engineering When AI Moves the Operating Point.”**

- Conference page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- Intended live site: <https://qcon26.hatchman76.com>
- Author: Andrew Hatch ([@hatchman1976](https://github.com/hatchman1976))

The initial deck is a working scaffold. It preserves the spatial storytelling of the 2024 SREcon talk while setting up the QCon 2026 narrative, a modern local build, and AWS infrastructure.

## Work locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite. Use arrow keys or Space to navigate. Press `P` for the presenter console when the browser allows pop-ups.

Other useful commands:

```bash
npm run build     # Build the static site into dist/
npm run preview   # Preview the production build
npm run check     # Build and run structural checks
```

## Project structure

```text
qcon26/
├── src/
│   ├── index.html       # Slides, notes, and spatial coordinates
│   ├── main.js          # impress.js initialization and deck UI
│   ├── styles.css       # Presentation theme, model, print, accessibility
│   └── public/          # Files copied unchanged into the build
├── scripts/
│   ├── deploy.sh        # Human-run, account-checked AWS content deployment
│   └── verify-build.mjs # Static build checks
├── terraform/           # S3, CloudFront, ACM, and Route 53
├── TALK.md              # Working narrative and source notes
└── vite.config.js
```

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

After the infrastructure exists, build and deploy from a human-only terminal:

```bash
npm run check
AWS_PROFILE=hatchman76 ./scripts/deploy.sh
```

The deployment script independently checks that `AWS_PROFILE` is `hatchman76` and that STS resolves to the expected personal account before it syncs content or invalidates CloudFront.

## License

Please check with Andrew before reproducing all or part of the presentation.

Copyright © 2026 Andrew Hatch

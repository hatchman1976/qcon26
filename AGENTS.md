# Personal Project Boundary

This repository is Andrew Hatch's personal QCon 2026 presentation project.

## GitHub

- Repository owner: `hatchman1976`
- Repository: `hatchman1976/qcon26`
- Use only Andrew's personal GitHub identity for remote reads and writes.
- The local `origin` uses the `github-personal` SSH host alias, which must authenticate as `hatchman1976`.
- Never publish this project as `ahatch-te`, through the `thousandeyes` organization, or through another Cisco-owned identity.
- Do not use the global `gh` session unless a read-only identity check confirms its active user is `hatchman1976`. Prefer the personal GitHub connector when it has access; otherwise use the verified personal SSH remote.

## AWS

- Personal AWS account: `736654693886`
- Main/deployment profile: `hatchman76`
- Bootstrap profile: `hatchman76-bootstrap`
- Never use a Cisco or ThousandEyes AWS profile for this project.
- Keep Terraform's `allowed_account_ids` guard enabled.
- Terraform applies and AWS content deployments are privileged human-only operations; Codex may prepare, inspect, validate, and document them but must not execute them.

## Connected services

- Miro content for this talk must be accessed through Andrew's personal Miro identity and a purpose-built connector.
- Do not fall back to Cisco credentials or browser authentication for missing personal connectors.

## Static site workflow

- `src/` is the website root and the exact content deployed to S3.
- There is no build step, generated site, Vite workflow, or `dist/` deployment.
- Edit and verify files in `src/` directly.
- For local review, serve `src/` with `python3 -m http.server 8000 --bind 127.0.0.1 --directory src`.

# Boundary sequence review — 13 October 2026

Six existing close-ups were filled with content and five AI journey steps were created. Each completed step received two independent subagent reviews covering the requested content, model semantics, sources where applicable, and a rendered screenshot. The final result has two approvals for every step.

| Step | Reviewer A | Reviewer B |
| --- | --- | --- |
| [Economic Boundary](../slides/09a-economic-boundary.md) | Approve | Approve |
| [Economic Boundary Actions](../slides/09b-economic-boundary-actions.md) | Approve | Approve |
| [Workload Boundary](../slides/09c-workload-boundary.md) | Approve | Approve |
| [Workload Boundary Actions](../slides/09d-workload-boundary-actions.md) | Approve | Approve |
| [Acceptable Performance](../slides/09e-performance-boundary.md) | Approve | Approve |
| [Protect the Error Margin](../slides/09f-error-margin.md) | Approve | Approve |
| [AI operating-point arrival](../slides/09g-ai-operating-point.md) | Approve | Approve |
| [Clean AI fish diagram](../slides/09h-ai-fish-diagram.md) | Approve | Approve |
| [AI economics](../slides/09i-ai-economic-pressure.md) | Approve | Approve |
| [AI workload](../slides/09j-ai-workload-pressure.md) | Approve | Approve |
| [AI error-margin drift](../slides/09k-ai-margin-pressure.md) | Approve | Approve after revision |

The error-margin caption initially touched the bucket pile. It was moved clear of the pile, and the actual-state label was constrained to avoid the dotted line. Reviewer B inspected the revised render and approved it.

Source reviews preserved survey denominators, dated examples, and the distinction between observations and inferred risks. The staffing example describes Workday's announced workforce reduction alongside AI/platform investment priorities, without claiming that every cut financed AI. Burnout is presented as a risk from work intensification and reduced recovery. The coding-skills study measures immediate understanding, not production incidents or long-term deskilling. See [the evidence cards](2026-10-13-ai-boundary-evidence.md).

Verification completed:

- `npm run check`: all required content markers/assets and 30 Impress steps pass.
- `node --check src/main.js` and `git diff --check`: pass.
- Browser visits to all 30 steps at 1280×720 and 1920×1080: pass.
- All eleven changed/new steps: visible text fits; major content blocks do not overlap.
- No browser script errors or failed resource responses.
- No unintended duplicate camera positions. The existing AI control step was repositioned after the new journey.
- AI arrival: starts hidden, rolls from the left, settles over the point, and reverses/restarts correctly.
- AI roaming: starts after entry and stops/resets on exit.
- Bucket pile: arrivals are staggered; leaving cancels pending arrivals and clears the pile.
- Reduced motion: the reveal remains presenter-controlled, the full pile/final state stays visible, and roaming is disabled.

The site remains a directly served `src/` tree. These changes prepare local presentation content; no AWS deployment was executed.

## Subsequent styling correction

At Andrew's request, the framed overlay treatment was removed from all nine boundary close-up steps. Steps now have transparent backgrounds and no outer borders or rounded corners. Content groups have no card backgrounds or coloured border decorations, and the active-only visibility gate was removed so content participates in the diagram's spatial canvas.

Copy, source links, substep reveals and all 30 camera coordinate/scale definitions were preserved. The site check and browser checks for transparent, unframed content pass. Coordinates and detailed positioning are intentionally left for a later pass; the earlier layout-fit reviews describe the initial framed version.

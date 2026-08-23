# Talk working notes

## Published promise

**Adapt or Drift: Resilience Engineering When AI Moves the Operating Point** asks whether our systems can adapt as models, workloads, costs, latency, and uncertainty change—or whether they silently drift outside acceptable behavior.

The talk adapts Rasmussen's Dynamic Safety Model and the 2024 SREcon presentation, *Defence at the Boundary of Acceptable Performance*, for AI-mediated production systems.

## Draft narrative spine

1. Title and audience promise
2. Rasmussen refresher: economic, workload, and acceptable-performance boundaries
3. Cloud as precedent: leverage, sprawl, cost shock, guardrails
4. Why AI moves the operating point faster
5. Economic forces: tokens, model cost, and cost-aware routing
6. Workload forces: agent volume, review load, and production-change velocity
7. Acceptable performance: quality, safety, security, and latency
8. A concrete drift scenario
9. Define and observe a safe operating envelope
10. Architecture responses: Sense, Constrain, Adapt, Correct
11. Team exercise: name the forces and boundaries in your own system
12. Takeaways, references, and close

The four verbs are a working synthesis, not final conference copy:

- **Sense:** quality, cost, and behavior observability
- **Constrain:** gateways, QoS tiers, versioned policy, and permissions
- **Adapt:** routing, fallbacks, and circuit breakers
- **Correct:** human escalation and feedback loops

## Presentation language to preserve

- A central spatial boundary model rather than a sequence of unrelated rectangles
- Camera moves and zoom-outs that reveal how local pressure changes the whole system
- Progressive reveals for audience pacing
- A neutral operating-point marker that can visibly drift
- Speaker notes, reduced-motion support, and a printable fallback from the beginning

## Sources to develop

- QCon SF 2026 talk page: <https://qconsf.com/presentation/nov2026/adapt-or-drift-resilience-engineering-when-ai-moves-operating-point>
- SREcon24 talk page: <https://www.usenix.org/conference/srecon24americas/presentation/hatch>
- SREcon24 recording: <https://www.youtube.com/watch?v=1MB2YFiNQ-4>
- SREcon24 presentation: <https://srecon24.hatchman76.com>
- Rasmussen's Dynamic Safety Model and primary-source resilience-engineering references (bibliography to verify)


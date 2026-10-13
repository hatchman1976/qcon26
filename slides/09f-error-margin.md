# Protect the Error Margin

Rendered step: `#/error-margin`.

## Slide copy and sequence

**Protect the Error Margin**

Notice, act and recover before the functional limit is crossed.

| Signal / concern | Action that preserves margin |
| --- | --- |
| Blind spots or stale telemetry | Improve monitoring; check user journeys;<br />connect alerts to an owner who can act |
| Saturation or shrinking headroom | Improve software efficiency; load-test;<br />add scalable capacity and tested redundancy |
| Changes exceed verification capacity | Limit admission; use canaries and rollback;<br />retain independent review and access controls |
| Slow or uncertain recovery | Exercise failover and restore; update runbooks;<br />practice diagnosis and share expertise |

Monitoring is a sensor. Protection needs a response.<br />Preserve time, authority and the ability to recover.

[Google SRE: Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/) · [Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF) · Engineering applications.

## Speaker notes

The dotted line represents a fallible perceived limit. Crossing it consumes the deliberately protected error margin; failure is not inevitable at that point. An alert does not push the operating point back. It needs timely interpretation, authority to slow or change work and people with tools to execute a response. Capacity, efficiency and redundancy may improve feasible performance, but need realistic load, failure and recovery testing: correlated dependencies can defeat nominal redundancy. Canaries, least privilege, independent review, rollback and restore exercises preserve bounded excursions and recovery. An error budget is a service-management mechanism, not a geometric measurement of Rasmussen's error margin.

**Notice, intervene and recover**

Notice requires usable signals and timely interpretation. Intervention requires evidence, authority, tools and remaining response capacity. Recovery requires contextual knowledge and fallbacks that people can use under pressure. A written rollback procedure does not establish that capability. Awareness and the margin itself exert no automatic restoring force; the objective is sufficient margin, bounded excursions and recoverability, not a preferred geometric center.

Exercise stale observations, scarce time, excess review demand and unavailable supporting services outside production. Assess whether the team can pause, reduce scope and recover. Chapter 5 §§5.3.2–5.3.5 (printed pp. 82–84; PDF pp. 90–92) discusses difficulties recognizing plausible errors; §5.1 illustrates responsibility without resources and decay of alternatives; §§5.4–5.5 (printed pp. 84–86; PDF pp. 92–94) support challenging exercises and continuing assurance.

The AWS 19–20 October 2025 disruption report describes conventional automation and dependencies, with no reported generative AI involvement. Delayed DNS-plan application interacted with changed state and cleanup; subsequent EC2 recovery entered congestive collapse. AWS announced recovery testing and controls on incoming work. The report does not establish that all announced work was complete. Use it as a control-and-recovery mechanism example, not an AI-caused incident or a general verdict on automation.

- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [AWS, 19–20 October 2025 disruption: DynamoDB, EC2 and corrective actions](https://aws.amazon.com/message/101925/)

## Sources

- [Google SRE: Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rasmussen (1997), Figures 1 and 3; control, adaptation and information](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)
- [Rayo, Morey, Grøtan and Woods (2026), AI Gold Rush 2 Versus AI Realism, Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5)
- [AWS, 19–20 October 2025 disruption: DynamoDB, EC2 and corrective actions](https://aws.amazon.com/message/101925/)

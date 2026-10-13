# Protect the Error Margin

Rendered step: `#/error-margin`.

## Slide copy and sequence

**Protect the Error Margin**

Notice, act and recover before the functional limit is crossed.

Signal / concern

Action that preserves margin

Blind spots or stale telemetry

Improve monitoring; check user journeys; / connect alerts to an owner who can act

Saturation or shrinking headroom

Improve software efficiency; load-test; / add scalable capacity and tested redundancy

Changes exceed verification capacity

Limit admission; use canaries and rollback; / retain independent review and access controls

Slow or uncertain recovery

Exercise failover and restore; update runbooks; / practice diagnosis and share expertise

Monitoring is a sensor. Protection needs a response. / Preserve time, authority and the ability to recover.

Google SRE: Monitoring · Rasmussen (1997), Figure 3 · Engineering applications.

## Speaker notes

The dotted line represents a fallible perceived limit. Crossing it consumes the deliberately protected error margin; failure is not inevitable at that point. An alert does not push the operating point back. It needs timely interpretation, authority to slow or change work and people with tools to execute a response. Capacity, efficiency and redundancy may improve feasible performance, but need realistic load, failure and recovery testing: correlated dependencies can defeat nominal redundancy. Canaries, least privilege, independent review, rollback and restore exercises preserve bounded excursions and recovery. An error budget is a service-management mechanism, not a geometric measurement of Rasmussen's error margin.

## Sources

- [Google SRE: Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)

# Boundary of Acceptable Performance

Rendered step: `#/performance-boundary`.

## Slide copy and sequence

**Boundary of / Acceptable Performance**

Crossing the functional limit means unacceptable outcomes.

**Failure in the service**

- Outages and cascading system failures

- Lost, corrupted or exposed customer data

- Recovery that cannot restore service in time

**Harm beyond the service**

- Customer operations disrupted; safety put at risk

- Trust and reputation damaged

- Contractual losses or regulatory consequences

The solid line is the functional limit. / The dotted line is our earlier, fallible warning.

Rasmussen (1997), Figure 3 · Software consequences: illustrative and context-dependent.

## Speaker notes

The acceptable-performance boundary is defined by the system's required functions and tolerated harms. Not every crossing is an immediate catastrophe: an unacceptable outcome can be local or escalate through dependencies. Availability, data integrity, confidentiality and safe recovery are software examples. Reputation, commercial losses and regulatory consequences can follow that failure; they are not separate Rasmussen boundaries. Formal SLOs and compliance checks are useful proxies, not an exact picture of the true functional limit. Crossing the dotted perceived boundary enters the protected error margin; it does not prove a failure has already occurred. The model does not provide a measurable distance to catastrophe.

## Sources

- [Rasmussen (1997), Figure 3](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF)

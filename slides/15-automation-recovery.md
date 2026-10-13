# Slide 15 — AI and the Error Margin

## Slide copy

**AI and the error margin**

Protect the buffer before unacceptable performance.

_Recurring theme rail: Economic / Workload / Performance / **Error Margin**._

Starting state:

_Visual anchor: the familiar Rasmussen model, one operating state, the dotted perceived or marginal boundary on the performance side, and the actual functional limit. The buffer between these boundaries is the error margin._

Reveal 1:

- **Notice:** Detect drift while action is still possible.

Reveal 2:

- **Intervene:** Pause, reject or reverse with authority.

Reveal 3:

- **Recover:** Keep fallbacks usable under pressure.

Reveal 4:

**Maintain the means to act before the margin is exhausted.**

## Speaker notes

Rasmussen's error margin is the protected buffer between the dotted perceived or marginal boundary and the actual functional performance limit. Crossing the dotted line starts consuming that buffer; it does not establish that harm has occurred. The margin is exhausted at the functional limit. It is not a fourth constraint, a measurement of free staff capacity, or the operating point's distance from any chosen center.

Our application of Chapter 5 is to preserve the means of noticing and responding before that margin is exhausted. Sections 5.3.2–5.3.5 describe difficulties recognizing plausible errors and interpreting uncertain capability. A persuasive explanation is not automatically independent evidence. Section 5.1's scenario describes responsibility without adequate resources and decay of alternative methods. Sections 5.4–5.5 support challenging exercises and continued assurance.

Notice requires usable signals and timely interpretation. Intervention requires evidence, authority, tools and remaining response capacity. Recovery requires contextual knowledge and fallbacks that people can actually use under pressure. A written rollback procedure alone does not demonstrate that capability. Neither the boundary nor awareness of it automatically pushes the operating state back. Corrective action restores sufficient margin and recoverability, not a preferred geometric center.

The AWS 19–20 October 2025 disruption is a supporting example of conventional automation, with no reported generative AI involvement. A stale DNS-plan check and later EC2 recovery congestion illustrate changing state, coupled automation and recovery demand. AWS announced recovery testing and incoming-work controls. The report does not establish that all announced work was complete. Use it as a mechanism example, not as evidence of an AI-caused incident.

## Sources

- [Rasmussen — Risk management in a dynamic society: A modelling problem (1997), primary manuscript](https://backend.orbit.dtu.dk/ws/portalfiles/portal/158016663/SAFESCI.PDF), Figure 3 and discussion of marginal boundaries and control.
- [Rayo, Morey, Grøtan and Woods — AI Gold Rush 2 Versus AI Realism (2026), Chapter 5](https://link.springer.com/chapter/10.1007/978-3-032-29336-7_5), §5.1, printed pp. 78–80 (supplied PDF pp. 86–88); §§5.3.2–5.3.5, printed pp. 82–84 (PDF pp. 90–92); §§5.4–5.5, printed pp. 84–86 (PDF pp. 92–94). The error-margin framing is this talk's application of Rasmussen.
- [AWS — Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region, 19–20 October 2025](https://aws.amazon.com/message/101925/), DynamoDB and EC2 sections and corrective actions; also cited by Chapter 5 §5.3.6, printed p. 84 (PDF p. 92).

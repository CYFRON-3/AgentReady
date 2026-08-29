# Badge modes

AgentReady supports badges without requiring an AgentReady server or account.
A badge is a compact report link, not a security certificate.

## Recommended v0.1 balance

Ship two modes:

1. **Static, zero-write default.** A successful complete scan renders an SVG
   and a Markdown snippet. The maintainer reviews and commits the file through
   the normal pull-request flow. This works for public and private repositories
   and makes every score change explicit.
2. **Opt-in dynamic badge for public repositories.** A separate workflow job,
   triggered only by a push to the default branch or a manual dispatch, writes
   `badge.json` and the report to an orphan `agentready-results` branch. The
   README points a
   [Shields endpoint badge](https://shields.io/badges/endpoint-badge) at the
   public raw JSON URL.

The endpoint payload is intentionally small:

```json
{
  "schemaVersion": 1,
  "label": "Agent Ready",
  "message": "82/100",
  "color": "yellowgreen"
}
```

The Markdown link should lead to the human-readable report, not merely to the
image.

## Permission boundary

The scan job keeps `contents: read`. Dynamic publishing is a distinct opt-in
job with `contents: write`; it never runs for pull requests or untrusted forks.
The job publishes only after a complete scan on the repository's default
branch. No repository token, report, or private source content is sent to
AgentReady. These permissions use GitHub's documented
[`permissions` boundary](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions).

Using Shields means Shields fetches the public endpoint JSON when a README is
rendered. Therefore the dynamic mode is not the default for private
repositories; use the committed static SVG there.

## Alternatives considered

| Mode | Best use | Trade-off | Decision |
|---|---|---|---|
| Committed static SVG | Private repos and strict change review | Manual/PR refresh | Default |
| Results branch + Shields endpoint | Public repos that want automatic refresh | Opt-in write job and external badge fetch | Recommended dynamic mode |
| GitHub Pages | Rich public report history | More deployment surface and setup | Defer |
| Hosted signed endpoint via GitHub OIDC | Organization policy and private fleets | Requires operated service, auth, and privacy program | Commercial/later |

Colors follow the published grade bands: bright green for `ready`, green for
`mostly-ready`, yellow for `needs-work`, and red for `not-ready`. A critical
warning caps the badge color/grade at `needs-work` even when the numeric score
is higher.

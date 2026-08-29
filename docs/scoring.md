# Rubric v1

Status: **accepted product contract; JSON Schema implementation is pending**

## Category balance

| Category | Weight |
|---|---:|
| Setup | 20 |
| Verification | 20 |
| Agent guidance | 20 |
| Architecture | 15 |
| Reproducible dependencies | 15 |
| Safety boundaries | 10 |
| **Total** | **100** |

| Rule ID | Check | Weight |
|---|---|---:|
| `setup.prerequisites` | Runtime and tooling requirements are clear | 8 |
| `setup.bootstrap` | One explicit setup/bootstrap command exists | 12 |
| `verify.commands` | Test, lint, type-check, or build commands are documented and real | 10 |
| `verify.ci` | CI invokes relevant verification | 10 |
| `agent.instructions` | `AGENTS.md` or a recognized equivalent gives working context | 12 |
| `agent.definition-of-done` | Agents are told how to verify and prove completion | 8 |
| `architecture.context` | Components, boundaries, and principal flows are mapped | 15 |
| `deps.lockfile` | Dependencies are reproducibly locked | 10 |
| `deps.runtime-pin` | Runtime/toolchain is pinned | 5 |
| `safety.boundaries` | Secrets, network, data, deploy, and dangerous zones are explicit | 10 |
| **Total** |  | **100** |

## Finding semantics

- `pass`: full rule weight;
- `partial`: half the rule weight;
- `fail`: zero points.

The score is the sum of earned rule points, rounded to the nearest integer only
after all rules have been evaluated. A publishable rubric-v1 report has exactly
100 available points. An incomplete or truncated scan sets `complete: false`
and cannot publish a badge or satisfy an enforcement policy.

Technical evidence may be not applicable internally, but rule weights are not
removed from the denominator and users cannot disable a weak category to
increase the score. Where appropriate, a pass requires two independent
signals—for example, a verification command is both declared in a manifest and
used by documentation or CI. A single valid signal normally produces
`partial`; ambiguous text is not evidence. The rubric schema defines the exact
required signals per rule rather than relying on this general example.

Every lost point must be explained with bounded evidence and a concrete next
step. No provable verification path, an explicitly unsafe agent instruction, or
a scanner error that prevents safety inspection creates a critical warning
regardless of the total score. Missing safety documentation alone is a scored
failure, not automatically a critical warning. Critical warnings do not rewrite
the numeric score, but cap the publishable grade at `needs-work`.

## Threshold and enforcement defaults

- The CLI and Action are advisory by default: `fail-under` is `0` (disabled).
- The recommended policy after one baseline run is `fail-under: 75`.
- Setting `fail-under` to `1–100` enables enforcement. A run then fails when the
  score is below the threshold or any critical warning remains.
- A score equal to the threshold passes.
- Invalid configuration and incomplete/internal scans fail regardless of the
  threshold; they never masquerade as a low readiness score.
- Repository configuration may set scope and threshold, but cannot override
  rubric-v1 weights.

This two-step rollout gives maintainers a non-breaking first report while making
`75` the standard for repositories that choose to enforce AgentReady.

CLI exit codes are `0` for a complete report that passes the active policy, `1`
for a complete report that violates an enabled threshold/critical policy, and
`2` for usage, configuration, or incomplete/internal scan errors.

## Recommendation order

The top three recommendations are ordered deterministically by:

1. criticality;
2. recoverable points;
3. expected effort;
4. improvement to real verifiability rather than documentation alone.

## Badge grades

| Score | Grade |
|---:|---|
| 90–100 | `ready` |
| 75–89 | `mostly-ready` |
| 50–74 | `needs-work` |
| 0–49 | `not-ready` |

The badge is not a security certification and does not prove code quality. It
describes visible, machine-checkable infrastructure for agent work.

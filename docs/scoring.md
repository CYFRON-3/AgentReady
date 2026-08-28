# Rubric v1

Status: **working default; schema not yet frozen**

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

Technical evidence may be not applicable internally, but users cannot disable a
weak category to increase the score. Where appropriate, a pass requires two
independent signals—for example, a verification command is both declared in a
manifest and used by documentation or CI.

Every lost point must be explained with bounded evidence and a concrete next
step. Missing verification or an explicitly unsafe instruction may create a
critical warning regardless of the total score.

## Recommendation order

The top three recommendations are ordered deterministically by:

1. criticality;
2. recoverable points;
3. expected effort;
4. improvement to real verifiability rather than documentation alone.

## Badge grades

| Score | Grade |
|---:|---|
| 90–100 | ready |
| 75–89 | mostly ready |
| 50–74 | needs work |
| 0–49 | not ready |

The badge is not a security certification and does not prove code quality. It
describes visible, machine-checkable infrastructure for agent work.


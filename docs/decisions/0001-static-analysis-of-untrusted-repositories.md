# ADR 0001: Analyze target repositories as untrusted static data

- Status: accepted
- Date: 2026-08-29
- Owners: maintainers
- Supersedes: none
- Superseded by: none

## Context

AgentReady evaluates repositories specifically to determine whether coding
agents can work in them safely. A target may contain malicious scripts,
configuration, filenames, symlinks, oversized data, secrets, or instructions.
Executing the repository in order to assess it would create the same risk the
tool is meant to expose and would make a read-only GitHub Action unsafe for fork
pull requests.

## Decision

The v0.1 core performs bounded static analysis only. It has no network or
subprocess capability, does not evaluate configuration as code, never follows
symlinks, and validates every resolved read against one canonical root. CLI and
Action adapters may render or store the report, but may not execute target
commands. No repository content is uploaded or collected as telemetry.

## Alternatives considered

### Execute declared verification commands in a sandbox

This could measure real buildability, but robust cross-platform isolation,
resource control, and secret handling are beyond the 14-day v0.1 scope. It also
breaks the simple read-only trust model.

### Ask an LLM to judge repository documents

This may understand ambiguous prose, but introduces network, privacy, cost,
non-determinism, and prompt-injection risks. It would make evidence and repeatable
score changes harder to audit.

## Consequences

### Positive

- scans are deterministic, fast, local, and explainable;
- fork pull requests can be assessed with read-only permissions;
- no account, external API, or target toolchain is required;
- security tests can assert a narrow and observable I/O boundary.

### Negative or limiting

- AgentReady can verify that commands exist and are wired into CI, not that the
  commands actually succeed;
- dynamic or generated configuration may yield partial evidence;
- deeper build correctness requires a separate future opt-in capability and a
  new ADR.

## Verification

- dependency and source audits show no subprocess/network import path in core;
- security fixtures cover symlink, traversal, secret-like, malformed, binary,
  and resource-limit cases;
- repeated fixture scans produce the same semantic report;
- fork pull request workflows run with `contents: read` and no secrets.


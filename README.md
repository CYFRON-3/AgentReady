# AgentReady

**A Gutfish project.**

[![CI](https://github.com/CYFRON-3/AgentReady/actions/workflows/ci.yml/badge.svg)](https://github.com/CYFRON-3/AgentReady/actions/workflows/ci.yml)

AgentReady is an evidence-first CLI and GitHub Action for answering a practical
question: can a coding agent understand, change, and verify this repository
safely?

The planned result is an explainable score from 0 to 100, the evidence behind
every check, and three prioritized improvements. A repository may publish the
result as a badge such as `Agent Ready: 82/100`.

> **Status:** architecture-ready pre-release scaffold. No CLI or Action release
> is available yet, and the current adapters intentionally report that the scan
> engine is not implemented.

## What v0.1 will check

- prerequisites and one clear setup command;
- test, lint, type-check, and build verification paths;
- CI that actually invokes relevant verification;
- instructions for coding agents and a definition of done;
- an architecture map with component boundaries and data flow;
- a dependency lockfile and pinned runtime/toolchain;
- explicit safety, secrets, network, data, and deployment boundaries.

The same deterministic engine will power the terminal, JSON, Markdown, and
GitHub Action outputs.

## Safety promise

AgentReady treats the target repository as untrusted data. The v0.1 core will:

- perform static analysis only;
- never execute target repository code or subprocesses;
- never use the network or upload repository contents;
- never follow symlinks or read outside the canonical scan root;
- avoid secret-bearing, generated, vendor, and cache paths;
- bound file count, file size, total bytes, and evidence excerpts;
- require no account, server, database, or telemetry.

Read the full [security policy](SECURITY.md) and
[architecture](docs/architecture/README.md) before contributing to discovery or
parsing code.

## Development setup

Prerequisites:

- Node.js 24 LTS;
- Corepack;
- pnpm 11.

Install and verify the locked workspace:

```sh
corepack enable
pnpm install
pnpm check
```

The committed `pnpm-lock.yaml` is authoritative for dependency resolution. See
[development.md](docs/development.md) for the command map.

## Repository map

```text
packages/
  core/      bounded discovery, evidence, rules, scoring, report model
  cli/       terminal adapter: scan, explain, init, formatters
  action/    thin GitHub Action adapter and output mapping
schemas/     versioned config, report, and rubric JSON Schemas
fixtures/    synthetic repositories for functional and security tests
docs/
  architecture/  boundaries, data flow, and component contracts
  decisions/     public architecture decision records
.github/     CI, dependency updates, and contribution templates
```

The code and tests in this Git repository are authoritative for implementation.
Private planning and handoff notes must remain outside the repository; use the
ignored `AGENTS.local.md` bridge when local coordination is needed.

## Planned interfaces

```sh
agentready scan [path] --format text|json|markdown --fail-under 75
agentready explain <rule-id>
agentready init
```

The GitHub Action will emit a Job Summary, annotations, and outputs including
`score`, `grade`, `report-path`, and `delta`. Badge publishing will remain an
explicit opt-in mode with separate write permissions.

## Contributing

Issues and pull requests that improve evidence quality, reduce false positives,
add security fixtures, or make recommendations more actionable are especially
valuable. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

Licensed under the [Apache License 2.0](LICENSE).

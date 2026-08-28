# Core package instructions

`core` is the only owner of discovery, evidence, rules, scoring, recommendation
ranking, and the semantic report.

- Target repositories are hostile data. Do not execute or import their files.
- Do not import network, subprocess, GitHub, terminal, or telemetry libraries.
- Filesystem access must pass through one bounded discovery boundary.
- Rules consume normalized evidence; they do not read the filesystem directly.
- Keep output deterministic and repository paths relative.
- Add adversarial tests for every path, parser, limit, or redaction change.


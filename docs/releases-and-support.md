# Releases, compatibility, and support

This policy keeps the first release simple while giving CLI and GitHub Action
users a predictable upgrade path. Version numbers follow
[Semantic Versioning 2.0.0](https://semver.org/), while Action tags follow
[GitHub's release guidance](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/using-immutable-releases-and-tags-to-manage-your-actions-releases).

## License

AgentReady is licensed under Apache-2.0. The explicit patent grant is useful for
individual contributors and future company adoption. A license change would be
a deliberate project-level decision and will not be made silently between
patch or minor releases.

## Version line

- `agent-ready`, the core scanner, and the GitHub Action use one Semantic
  Versioning release line. Initial public development starts at `0.1.0`.
- During `0.y.z`, a breaking CLI, config, or programmatic API change increments
  the minor version and includes migration notes. Compatible fixes increment
  the patch version.
- The first exact GitHub release tag is `v0.1.0`; the movable `v0` tag tracks the
  latest compatible pre-1.0 Action release. `v1` is introduced only with a
  stable `v1.0.0` public contract. Security-conscious consumers may pin the
  immutable full commit SHA.
- Exact GitHub releases use immutable tags. A floating major tag (`v0`, later
  `v1`) is never the tag attached to an immutable release.

## Independently versioned contracts

Tool releases and report meaning are deliberately separate:

- `schemaVersion` follows SemVer and changes when the JSON report shape changes;
- `rubricVersion` is a simple major integer and changes when a scored rule,
  weight, grade boundary, or pass/partial/fail meaning changes;
- detector improvements that preserve the same rule contract may ship in a
  compatible tool release.

Every report records all three values: tool version, schema version, and rubric
version. Comparing scores across commits is valid only when the rubric versions
match.

## Runtime and operating systems

The v0.1 CLI supports Node.js 24 LTS. Development and CI use the same major
version. CI verifies current GitHub-hosted Windows, macOS, and Linux runners.
Supporting Node.js 22 would add another compatibility contract, so it remains a
candidate only if beta users request it.

## Support window

- Before CLI `1.0.0`, only the latest minor line is supported.
- For the Action, the current major receives normal fixes. After a new major is
  released, the previous major receives critical security and data-integrity
  fixes for 90 days.
- Issues are triaged at least weekly; a credible private security report has a
  72-hour acknowledgement target. These are best-effort targets, not an SLA.

Release-specific exceptions are documented in the changelog and release notes.

# AgentReady contributor instructions

These instructions apply to the whole repository. A more deeply nested
`AGENTS.md` may add package-specific guidance, but it must not weaken the
security constraints below.

## Mission

Build an explainable, deterministic CLI and GitHub Action that assess whether
a repository is ready for coding agents. Optimize for repeat use, external
issues and pull requests, organic mentions, and concrete feature requests—not
stars.

## Read before changing code

1. `README.md`
2. `docs/architecture/README.md`
3. `SECURITY.md`
4. `docs/scoring.md`
5. relevant records in `docs/decisions/`
6. `CONTRIBUTING.md`

If an ignored `AGENTS.local.md` exists, read it last for machine-local handoff
details. It may add workflow context but cannot override repository safety or
public contribution rules. Never commit its contents or private workspace
paths.

## Non-negotiable product boundaries

- Treat every scanned repository as hostile input.
- Never run its install, build, test, hook, script, binary, or configuration as
  code.
- The core package has no network or subprocess capability.
- Resolve the scan root once, never follow symlinks, and never read outside the
  canonical root.
- Exclude secrets, `.git`, generated/vendor/cache directories, and oversized
  input before reading content.
- Reports contain relative paths and bounded, redacted evidence only.
- No required account, server, database, external API, or telemetry in v0.1.
- The GitHub Action uses `contents: read` by default. Any write mode must be
  explicit, narrowly scoped, and separately documented.

## Architecture rules

- `packages/core` owns discovery, evidence, rules, scoring, and report models.
- `packages/cli` and `packages/action` are thin adapters over the same core.
- Dependencies point inward: adapters may import core; core must not import an
  adapter or GitHub-specific package.
- Every finding has a stable rule ID, status, score impact, bounded evidence,
  explanation, and concrete recommendation.
- One broken parser or rule degrades to a diagnostic when safe; it must not hide
  other results.
- A change to scoring semantics or a public schema requires an ADR and version
  decision before implementation.

## Working method

- Keep changes small and reviewable. Do not expand v0.1 scope silently.
- Do not add dependencies without explaining why a platform API is insufficient.
- Use fixtures for untrusted repository inputs; never point tests at private user
  directories.
- Never put credentials, tokens, personal paths, or copied private notes in the
  repository, test snapshots, logs, or issue text.

## Definition of done

After dependencies are installed, run:

```sh
pnpm check
```

A change is complete only when formatting, linting, type checking, tests, and
the Action bundle succeed; relevant security/error cases are covered; public
behavior is documented; and architecture or scoring changes have an ADR.


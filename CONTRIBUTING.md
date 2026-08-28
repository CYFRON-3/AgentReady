# Contributing to AgentReady

Thanks for helping make coding-agent work safer and more verifiable. AgentReady
is pre-release, so small evidence-backed contributions are more useful than
broad rewrites.

## Good first contributions

- a synthetic fixture that reproduces a false positive or false negative;
- a security test for path, symlink, size, or secret-handling behavior;
- clearer evidence or a more concrete recommendation for an existing rule;
- documentation that makes setup or verification unambiguous;
- a focused rule proposal with examples from more than one repository.

Use the dedicated issue forms before implementing a new rule or changing score
weights. Security vulnerabilities must follow `SECURITY.md`, not a public issue.

## Local setup

Prerequisites are Node.js 24 LTS, Corepack, and pnpm 11.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
```

During the initial scaffold phase, maintainers must first generate and review
`pnpm-lock.yaml`; until then, omit `--frozen-lockfile` exactly once and commit
the resulting lockfile with no unrelated changes.

## Pull request workflow

1. Discuss score semantics, public schemas, and new rules in an issue first.
2. Create a focused branch and avoid drive-by formatting changes.
3. Add or update synthetic fixtures and tests before changing rule behavior.
4. Run `pnpm check` and record the relevant commands in the pull request.
5. Update public docs and add an ADR when behavior or architecture changes.
6. Fill in the pull request template, including security-boundary impact.

Pull requests should remain draft until their verification section is complete.

## Rule quality bar

A rule must have:

- a stable namespaced ID;
- deterministic `pass`, `partial`, and `fail` semantics;
- bounded evidence using repository-relative paths;
- tests for positive, partial, negative, malformed, and adversarial cases;
- an actionable recommendation;
- no network, subprocess, or execution of scanned repository code;
- documented score impact and schema/rubric compatibility.

Evidence from one repository is normally insufficient for a generic rule.

## Commit and review expectations

Write imperative, descriptive commit subjects. Reviewers prioritize correctness,
safety, deterministic output, backwards compatibility, and false-positive risk.
Maintainers may request a smaller change when a pull request mixes policy,
architecture, and implementation.

By contributing, you agree that your contribution is licensed under Apache-2.0
and that you will follow the `CODE_OF_CONDUCT.md`.


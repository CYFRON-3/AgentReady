## What changed

<!-- Describe the user-visible or contributor-visible outcome. -->

## Why

<!-- Link an issue or ADR and explain the evidence behind the change. -->

## Verification

<!-- List exact commands and results. Do not claim checks that were not run. -->

- [ ] `pnpm check`
- [ ] Relevant fixtures cover positive, partial, negative, malformed, or adversarial input.

## Safety and compatibility

- [ ] The change does not execute scanned repository code or add network/subprocess access to core.
- [ ] Path, symlink, secret, size, and output-redaction boundaries remain intact or have new tests.
- [ ] GitHub Action permissions remain read-only by default.
- [ ] Public schema, scoring, or architecture changes include an ADR and migration note.
- [ ] No credentials, private source, personal paths, or generated local state are included.

## Documentation

- [ ] Public behavior and contributor instructions are updated, or no documentation change is needed.


# CLI package instructions

The CLI translates arguments and the core report into user-facing output.

- Do not implement rules, filesystem discovery, or scoring here.
- Keep tool errors distinct from a valid scan that misses `fail-under`.
- `scan` is read-only. `init` may write only after an explicit user command and
  must preview or document every created file.
- Text, JSON, and Markdown formatters must preserve incomplete-scan diagnostics.


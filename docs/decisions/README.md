# Architecture decision records

ADRs document public technical decisions that materially constrain code,
schemas, security, compatibility, or contributor work.

## Process

1. Copy `0000-template.md` to the next four-digit number.
2. Keep status `proposed` while alternatives are being evaluated.
3. Link evidence, tests, or issue discussion when available.
4. Change status to `accepted` before implementation relies on the decision.
5. Never rewrite history silently. A replacement ADR supersedes the previous
   one and links both directions.

Private strategy and day-to-day handoff remain outside this public repository.
The ADR captures only the technical decision contributors need.

## Records

- `0001-static-analysis-of-untrusted-repositories.md` — accepted security-first
  static analysis boundary.


# Privacy and adoption measurement

## v0.1 default: zero telemetry

The local CLI performs static analysis and makes no network requests. It does
not send repository names, paths, contents, hashes, scores, operating-system
details, or usage events to AgentReady. The normal GitHub Action scan is also
read-only and requires no AgentReady account or secret.

Optional badge publishing writes only the selected public result files back to
the user's own GitHub repository. A public dynamic badge is then fetched by
Shields as documented in [badge modes](badges.md).

## What we measure instead

For v0.1, adoption evidence comes from public or owner-visible aggregate data:

- external GitHub issues, pull requests, discussions, and concrete feature
  requests;
- public README badges and Action references;
- an opt-in list of beta repositories with commit links for proving repeat use;
- [GitHub repository traffic](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)
  such as aggregate visitors and clones, captured weekly because GitHub exposes
  only a rolling 14-day window;
- aggregate package downloads after npm publication.

These signals have limitations and are never presented as exact install counts.
Stars and one-time views remain secondary diagnostics; repeat use and external
contributions are the success criteria.

## Feedback options

Three privacy levels are available conceptually:

1. **No telemetry (selected for v0.1):** public evidence, aggregate platform
   statistics, and voluntary issues only.
2. **Explicit feedback link:** the report can offer a prefilled GitHub issue,
   but opens or sends nothing without the user's action and includes no source
   content automatically.
3. **Hosted opt-in analytics (deferred):** only after demonstrated team demand,
   with explicit consent, a published data dictionary, retention limits, and a
   way to disable/delete data. Repository contents, file paths, secrets, and
   stable cross-project identifiers remain prohibited.

No hidden analytics SDK, fingerprint, or background request is allowed in the
CLI or Action.

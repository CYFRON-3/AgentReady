# Support

AgentReady is pre-release and currently supported through GitHub Issues.

## Supported versions

- The CLI and core use Semantic Versioning. During `0.y.z`, only the latest
  minor line is supported.
- The CLI and GitHub Action share one release line. The first public release is
  `v0.1.0`; Action users may follow the compatible `v0` tag or pin an exact tag
  or full commit SHA.
- After `v1.0.0`, the Action exposes the stable `v1` major tag. When a future
  major is released, the previous major receives critical security and
  data-integrity fixes for 90 days. Other fixes target the current major only.
- The v0.1 CLI supports Node.js 24 LTS on current GitHub-hosted Windows, macOS,
  and Linux runners. A wider runtime matrix will be added only when user demand
  justifies its maintenance cost.

This is a best-effort open-source policy, not a service-level agreement. New
issues are triaged at least weekly. The target for acknowledging a credible
private security report is 72 hours.

See [release and versioning policy](docs/releases-and-support.md) for the public
compatibility contracts.

- Use **Bug report** for reproducible defects.
- Use **False result** when evidence or a rule result is incorrect.
- Use **Feature request** for a user problem that existing behavior cannot solve.
- Use **New rule proposal** for a new scored or diagnostic check.
- Follow `SECURITY.md` for vulnerabilities and never disclose them publicly.

Include synthetic examples whenever possible. Do not upload credentials, private
repository content, or personal filesystem paths.

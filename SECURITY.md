# Security policy

AgentReady scans repositories that may be malicious. Boundary escapes, command
execution, secret exposure, unbounded resource use, and unsafe GitHub token
permissions are security issues even if the score itself remains correct.

## Supported versions

AgentReady is not released yet. Security fixes currently target the default
branch. A supported-version table will be added with the first stable release.

## Reporting a vulnerability

Do not open a public issue. Use GitHub's **Report a vulnerability** flow in the
repository Security tab (private vulnerability reporting). Include:

- affected commit or release;
- operating system and Node.js version;
- the smallest synthetic reproduction you can provide safely;
- expected and observed boundary behavior;
- whether secrets, external files, network access, subprocesses, or GitHub token
  permissions may be affected.

Do not include real credentials, private repository content, or personal paths.
Maintainers will acknowledge a valid report as soon as practical and coordinate
disclosure after a fix is available. Because this is a volunteer pre-release
project, no fixed response-time SLA is promised.

## Security invariants

The v0.1 implementation must preserve all of the following:

- target files are data, never instructions or executable configuration;
- core has no network or subprocess capability;
- canonical root resolution happens before discovery;
- symlinks are not followed and no resolved path may escape root;
- `.git`, `.env*`, private keys, credentials, generated output, dependency
  vendors, and caches are excluded before content reads;
- file count, per-file bytes, total bytes, scan time, and evidence length are
  bounded;
- output uses repository-relative paths and short, redacted evidence;
- parser/rule failures degrade to diagnostics when continuing is safe;
- GitHub Action permissions default to `contents: read`;
- fork pull requests receive no secrets and no write token;
- write-enabled badge publishing is a separate explicit mode;
- `pull_request_target` never processes an untrusted checkout with a write token;
- reports and telemetry are never uploaded automatically.

Any change that weakens an invariant requires a public ADR, explicit threat
analysis, security fixtures, and maintainer approval before merge.

## Out of scope

AgentReady is a readiness signal, not a security certification or code-quality
guarantee. Reports may identify missing safety documentation, but v0.1 does not
perform malware detection, vulnerability scanning, sandboxing, or dynamic code
analysis.


# GitHub Action package instructions

The Action is a thin adapter over `@gutfish/agentready-core`.

- Default to `contents: read`; never assume secrets or write access on fork PRs.
- Do not use `pull_request_target` with an untrusted checkout.
- Do not duplicate scoring, evidence, or recommendation logic.
- Keep badge publication a separate explicit mode with minimal permissions.
- Bundle release code and prove the committed bundle matches source before tags.


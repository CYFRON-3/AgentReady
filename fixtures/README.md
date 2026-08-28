# Fixtures

This directory will contain synthetic repositories used to test discovery,
evidence, rules, scoring, and security behavior.

Required fixture families before v0.1:

- fully ready, partial, and empty repositories;
- Node.js, Python, Go, and unknown/generic ecosystems;
- malformed manifests and CI files;
- symlinks that remain inside root and try to escape root;
- traversal-shaped filenames and nested ignore rules;
- oversized, binary, generated, vendor, cache, and deeply nested content;
- `.env*`, key-like files, credentials, and other denylisted paths;
- parser/rule failure isolation and deterministic ordering.

Fixtures must never contain real secrets, private source, personal paths, or
working credentials. Any secret-looking value must be visibly synthetic.


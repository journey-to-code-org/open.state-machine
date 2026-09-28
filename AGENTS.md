# AI agent guidance

AI-assisted contributions are welcome.

Before editing:
1. Read `README.md` and all tests.
2. Restate the exact public behavior being changed.
3. Keep the package focused on its documented single responsibility.

During implementation:
- Preserve zero runtime dependencies unless a maintainer explicitly approves otherwise.
- Preserve backward-compatible public APIs for patch/minor changes.
- Add or update tests for every observable behavior change.
- Avoid application-specific behavior and unrelated refactors.
- Prefer built-in platform APIs where they provide the required semantics.

Completion reports should include changed behavior, files affected, tests run,
and compatibility implications.

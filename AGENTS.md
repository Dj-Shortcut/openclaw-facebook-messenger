# Repository instructions

This repository is the standalone OpenClaw Facebook Page Messenger channel.

- Keep the plugin chat-only; do not add image/video generation, payments,
  quotas, subscriptions, tenant provisioning, or Leaderbot dependencies.
- Preserve webhook verification, raw-body signature validation, replay
  protection, sender authorization, and per-user session isolation.
- Never log raw PSIDs, access tokens, prompts, customer messages, media, or
  provider payloads.
- Validate changes with `npm run check` and `npm pack --dry-run`.
- The manifest's canonical channel id is `facebook`; aliases must not create a
  second Messenger channel.

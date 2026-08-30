# OpenClaw Messenger

Standalone OpenClaw channel plugin for Facebook Page Messenger direct
messages. Users can talk to the configured OpenClaw assistant through
Messenger; replies are sent back through the Meta Graph API.

This repository is intentionally chat-only. Image/video generation, paid
credits, quota, checkout, subscriptions, tenant provisioning, and the Leaderbot
application are outside its scope.

## Channel

The plugin registers one channel in OpenClaw as `Facebook (Page Messenger)`.
The canonical channel id is `facebook`; `messenger`, `fb`, and `fbm` are
compatibility aliases and do not create separate channels.

The integration handles Meta webhook verification, request signatures,
deduplication, sender authorization, pairing, direct-message routing, supported
attachments, and channel-neutral actions rendered as Messenger quick replies.

## Install and configure

```bash
npm install
npm run build
npm test
npm pack
openclaw plugins install ./dj-shortcut-facebook-*.tgz
openclaw channels list --all
```

Configure `channels.facebook` in OpenClaw and set the Meta callback URL to
`https://<gateway-host>/facebook/webhook`. Never commit Page tokens, app
secrets, verify tokens, PSIDs, or live deployment configuration.

## Development

Requirements: Node.js 24+ and npm 11+.

```bash
npm run check
npm pack --dry-run
```

See [`docs/standalone-messenger.md`](docs/standalone-messenger.md) for the
scope, migration boundary, and channel-list acceptance check.

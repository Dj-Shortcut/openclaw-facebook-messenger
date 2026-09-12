# Standalone Messenger channel

This is the standalone `openclaw-messenger` repository for the OpenClaw
Facebook Page Messenger channel. It contains only the channel integration;
application-specific services are deliberately out of scope.

The supported flow is:

```text
Facebook Page -> Meta webhook -> OpenClaw Facebook channel -> OpenClaw assistant -> Messenger
```

The plugin supports direct Page messages, sender authorization, pairing,
webhook verification, duplicate protection, text replies, supported Messenger
attachments, and channel-neutral actions rendered as Messenger quick replies.

It does not provide product-specific generation, credits, quota, checkout,
subscriptions, tenant provisioning, or application services.

The manifest registers one channel, `facebook`, displayed as `Facebook (Page
Messenger)` in the OpenClaw channel index. `messenger`, `fb`, and `fbm` are
compatibility aliases and do not create additional channels.

## Validate locally

```bash
npm install
npm run build
npm test
npm pack --dry-run
```

Install the resulting tarball into OpenClaw and verify:

```bash
openclaw plugins install ./dj-shortcut-facebook-*.tgz
openclaw channels list --all
```

The list must contain one Facebook entry. Configure `channels.facebook` and
point the Meta callback to `/facebook/webhook` unless another webhook path is
explicitly configured.

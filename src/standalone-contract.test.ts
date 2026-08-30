import { describe, expect, it } from "vitest";
import {
  forwardLeaderbotMessengerEvent,
  requestLeaderbotImageGeneration,
  resolveImageGenRequestConfig,
} from "./leaderbot-bridge.js";
import {
  hasMessengerImageGenerationIntent,
  shouldForwardMessengerImageOnlyEventToImageGen,
  shouldForwardMessengerTextToImageGen,
} from "./messenger-product-intents.js";

describe("standalone Messenger contract", () => {
  it("fails closed for all retired image-generation paths", async () => {
    expect(resolveImageGenRequestConfig()).toEqual({
      ok: false,
      reason: "disabled_by_config",
    });
    expect(hasMessengerImageGenerationIntent("maak een afbeelding")).toBe(false);
    expect(shouldForwardMessengerTextToImageGen("maak een afbeelding")).toBe(false);
    expect(shouldForwardMessengerImageOnlyEventToImageGen({ hasSourceImage: true, text: "" })).toBe(false);
    expect(await forwardLeaderbotMessengerEvent({})).toBe(false);
    expect(await requestLeaderbotImageGeneration({})).toBe(false);
  });
});

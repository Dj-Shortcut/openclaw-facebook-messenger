import { describe, expect, it } from "vitest";
import {
  normalizeMessengerLanguage,
  tMessenger,
} from "./messenger-i18n.js";

describe("Messenger i18n", () => {
  it("keeps Dutch as the backward-compatible default", () => {
    expect(normalizeMessengerLanguage(undefined)).toBe("nl");
    expect(normalizeMessengerLanguage("fr")).toBe("nl");
    expect(tMessenger("nl", "pairingAccessRequired")).toContain(
      "toegang is nog niet goedgekeurd",
    );
  });

  it("returns English operational copy", () => {
    expect(normalizeMessengerLanguage(" en ")).toBe("en");
    expect(tMessenger("en", "pairingAccessRequired")).toContain(
      "access has not been approved",
    );
  });
});

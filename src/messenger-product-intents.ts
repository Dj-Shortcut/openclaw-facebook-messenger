import type { MessengerLanguage } from "./messenger-i18n.js";

export type MessengerFastLaneIntent = "greeting" | "help" | "status" | "delete_data";
export type MessengerConversationIntent = { kind: "unknown"; confidence: number };
export function normalizeFastLaneText(text: string): string { return text.trim().toLowerCase().replace(/\s+/g, " "); }
export function classifyMessengerFastLaneIntent(text: string): MessengerFastLaneIntent | null {
  const normalized = normalizeFastLaneText(text);
  if (/^(hey|hi|hallo|hello|hoi|yo)$/.test(normalized)) return "greeting";
  if (/^(help|\/help|wat kan je|wat kun je|commands)$/.test(normalized)) return "help";
  if (/^(status|ping|ben je online|werkt dit|online)$/.test(normalized)) return "status";
  if (/^(delete|remove|erase) my data$/.test(normalized) || /^(verwijder|wis) mijn (data|gegevens)$/.test(normalized)) return "delete_data";
  return null;
}
export function hasMessengerImageGenerationIntent(..._args: unknown[]): boolean { return false; }
export function hasMessengerSourceImageEditIntent(..._args: unknown[]): boolean { return false; }
export function shouldForwardMessengerTextToImageGen(..._args: unknown[]): boolean { return false; }
export function shouldForwardMessengerImageOnlyEventToImageGen(..._args: unknown[]): boolean { return false; }
export function resolveMessengerSourceImageGenerationPrompt(..._args: unknown[]): string | null { return null; }
export function resolveMessengerConversationIntent(..._args: unknown[]): MessengerConversationIntent { return { kind: "unknown", confidence: 0 }; }
export function resolveMessengerFastLaneReply(_text: string, _lang: MessengerLanguage): { intent: MessengerFastLaneIntent; reply: string } | null { return null; }

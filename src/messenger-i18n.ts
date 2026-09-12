export type MessengerLanguage = "nl" | "en";

type MessengerTranslationKey =
  | "gatewayAudioBudgetReached"
  | "internalActionFailed"
  | "audioTranscriptionUnavailable"
  | "attachmentAudioInstruction"
  | "attachmentImageInstruction"
  | "attachmentVideoInstruction"
  | "attachmentFileInstruction"
  | "attachmentUnknownInstruction"
  | "attachmentTranscriptLabel"
  | "pairingAccessRequired"
  | "pairingSenderIdLabel"
  | "pairingCodeLabel"
  | "pairingApprovalInstruction"
  | "sharedStateUnavailable";

const translations: Record<
  MessengerLanguage,
  Record<MessengerTranslationKey, string>
> = {
  nl: {
    gatewayAudioBudgetReached:
      "Even pauze, ons dagbudget voor voiceberichten is bereikt. Typ je bericht even uit, dan help ik meteen verder.",
    internalActionFailed:
      "Ik kon een interne actie niet uitvoeren. Probeer het zo meteen opnieuw.",
    audioTranscriptionUnavailable:
      "Ik heb je voicebericht ontvangen, maar ik kan audio nu niet betrouwbaar omzetten naar tekst. Typ je bericht even uit, dan help ik meteen verder.",
    attachmentAudioInstruction:
      "De gebruiker stuurde een voice/audio-bericht. Luister of transcribeer de bijlage als dat beschikbaar is en reageer inhoudelijk.",
    attachmentImageInstruction:
      "De gebruiker stuurde een afbeelding. Gebruik de bijgevoegde afbeelding als context en antwoord inhoudelijk.",
    attachmentVideoInstruction:
      "De gebruiker stuurde een video. Bekijk of analyseer de bijgevoegde video als dat beschikbaar is en reageer inhoudelijk.",
    attachmentFileInstruction:
      "De gebruiker stuurde een bestand. Gebruik de bijlage als context als dat beschikbaar is en reageer inhoudelijk.",
    attachmentUnknownInstruction:
      "De gebruiker stuurde een bijlage. Gebruik de bijlage als context als dat beschikbaar is en reageer inhoudelijk.",
    attachmentTranscriptLabel: "Transcriptie voicebericht",
    pairingAccessRequired: "OpenClaw: toegang is nog niet goedgekeurd.",
    pairingSenderIdLabel: "Je Messenger-PSID",
    pairingCodeLabel: "Koppelcode",
    pairingApprovalInstruction:
      "Vraag de beheerder om de toegang goed te keuren met:",
    sharedStateUnavailable:
      "Ik kan de veiligheidslimiet nu niet betrouwbaar controleren. Probeer zo meteen opnieuw.",
  },
  en: {
    gatewayAudioBudgetReached:
      "Quick pause: our daily voice-message budget has been reached. Type your message and I will help right away.",
    internalActionFailed:
      "I could not complete an internal action. Please try again shortly.",
    audioTranscriptionUnavailable:
      "I received your voice message, but I cannot reliably convert audio to text right now. Type your message and I will help right away.",
    attachmentAudioInstruction:
      "The user sent a voice/audio message. Listen to or transcribe the attachment when available and respond to its content.",
    attachmentImageInstruction:
      "The user sent an image. Use the attached image as context and respond to its content.",
    attachmentVideoInstruction:
      "The user sent a video. Review or analyze the attached video when available and respond to its content.",
    attachmentFileInstruction:
      "The user sent a file. Use the attachment as context when available and respond to its content.",
    attachmentUnknownInstruction:
      "The user sent an attachment. Use it as context when available and respond to its content.",
    attachmentTranscriptLabel: "Voice-message transcript",
    pairingAccessRequired: "OpenClaw: access has not been approved yet.",
    pairingSenderIdLabel: "Your Messenger PSID",
    pairingCodeLabel: "Pairing code",
    pairingApprovalInstruction: "Ask the owner to approve access with:",
    sharedStateUnavailable:
      "I cannot reliably check the safety limit right now. Please try again shortly.",
  },
};

export function normalizeMessengerLanguage(
  value: string | null | undefined,
): MessengerLanguage {
  return value?.trim().toLowerCase() === "en" ? "en" : "nl";
}

export function tMessenger(
  lang: MessengerLanguage,
  key: MessengerTranslationKey,
): string {
  return translations[lang][key];
}

export function buildMessengerPairingReply(
  lang: MessengerLanguage,
  params: { code: string; senderId: string },
): string {
  return [
    tMessenger(lang, "pairingAccessRequired"),
    `${tMessenger(lang, "pairingSenderIdLabel")}: ${params.senderId}`,
    `${tMessenger(lang, "pairingCodeLabel")}: ${params.code}`,
    `${tMessenger(lang, "pairingApprovalInstruction")}\nopenclaw pairing approve facebook ${params.code}`,
  ].join("\n\n");
}

/** Compatibility exports; the standalone channel never forwards to another service. */
export const DEFAULT_IMAGE_GEN_URL = "";
export const IMAGE_GEN_REQUEST_TIMEOUT_MS = 0;
export type LeaderbotBridgeTrace = { reqId: string; psidHash: string; accountId: string; startedAt: number };
export type LeaderbotImageGenRequestConfig = { ok: false; reason: "disabled_by_config" };
export function resolveImageGenRequestConfig(): LeaderbotImageGenRequestConfig {
  return { ok: false, reason: "disabled_by_config" };
}
export async function forwardLeaderbotMessengerEvent(..._args: unknown[]): Promise<boolean> { return false; }
export async function requestLeaderbotImageGeneration(..._args: unknown[]): Promise<boolean> { return false; }

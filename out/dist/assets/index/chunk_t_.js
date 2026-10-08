import { Xs } from "./chunk_nt.js";
export const t_ = "sentry.source";
export const Mw = "sentry.sample_rate";
export const FM = "sentry.previous_trace_sample_rate";
export const Dw = "sentry.op";
export const Bw = "sentry.origin";
export const zM = "gen_ai.conversation.id";
export const JM = 1;
let VM = false;
export function zw() {
    if (!VM) {
        Xs(()=>{
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        });
        VM = true;
    }
}

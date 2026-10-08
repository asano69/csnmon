import { nt } from "./chunk_nt.js";
import { vi } from "./chunk_qg.js";
let bw = null;
export function qse() {
    bw = nt.onunhandledrejection;
    nt.onunhandledrejection = function(e) {
        vi("unhandledrejection", e);
        if (bw) {
            return bw.apply(this, arguments);
        }
        return true;
    };
    nt.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}

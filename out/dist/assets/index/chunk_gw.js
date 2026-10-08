import { nt } from "./chunk_nt.js";
import { vi } from "./chunk_qg.js";
let gw = null;
export function zse() {
    gw = nt.onerror;
    nt.onerror = function(msg, url, line, column, error) {
        vi("error", {
            column,
            error,
            line,
            msg,
            url
        });
        if (gw) {
            return gw.apply(this, arguments);
        }
        return false;
    };
    nt.onerror.__SENTRY_INSTRUMENTED__ = true;
}

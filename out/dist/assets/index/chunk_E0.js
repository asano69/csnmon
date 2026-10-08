import { nt } from "./chunk_nt.js";
let E0;
export function S0(e) {
    if (E0 !== undefined) {
        if (E0) {
            return E0(e);
        }
        return e();
    }
    let SYMBOL_SENTRY_SAFE_RANDOM_ID_WRAPPER_ = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    let r = nt;
    if (SYMBOL_SENTRY_SAFE_RANDOM_ID_WRAPPER_ in r && typeof r[SYMBOL_SENTRY_SAFE_RANDOM_ID_WRAPPER_] === "function") {
        E0 = r[SYMBOL_SENTRY_SAFE_RANDOM_ID_WRAPPER_];
        return E0(e);
    }
    E0 = null;
    return e();
}

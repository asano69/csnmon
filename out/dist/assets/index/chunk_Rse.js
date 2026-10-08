const Rse = Symbol.for("sentry.skipNormalization");
const SYMBOL_SENTRY_OVERRIDE_NORMALIZATION_DEPTH = Symbol.for("sentry.overrideNormalizationDepth");
export function xM(e) {
    return !!e[Rse];
}
export function wM(e) {
    let t = e[SYMBOL_SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
    if (typeof t === "number") {
        return t;
    }
}

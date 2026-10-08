import { Lse, Xs, fl, nt } from "./chunk_nt.js";
export const Xe = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
export function Mse() {
    dw().enabled = true;
}
export function Dse() {
    dw().enabled = false;
}
export function hM() {
    return dw().enabled;
}
export function pw(e, ...t) {
    if (Xe && hM()) {
        Xs(()=>{
            nt.console[e](`${Lse}[${e}]:`, ...t);
        });
    }
}
export function dw() {
    if (Xe) {
        return fl("loggerSettings", ()=>({
                enabled: false
            }));
    }
    return {
        enabled: false
    };
}

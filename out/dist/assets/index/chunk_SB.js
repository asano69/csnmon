import { a } from "../chunks/chunk-FXCI2R73.js";
import { nt } from "./chunk_nt.js";
export const SB = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
export const zr = nt;
export function k3(e, t, r) {
    if (zr.document) {
        zr.addEventListener(e, t, r);
    }
}
export function N3(e, t, r) {
    if (zr.document) {
        zr.removeEventListener(e, t, r);
    }
}
const xB = a((e)=>{
    let t = false;
    return ()=>{
        if (!t) {
            e();
            t = true;
        }
    };
}, "runOnce");
export const C3 = a((e)=>{
    let t = zr.requestIdleCallback || zr.setTimeout;
    if (zr.document?.visibilityState === "hidden") {
        e();
    } else {
        e = xB(e);
        k3("visibilitychange", e, {
            once: true,
            capture: true
        });
        k3("pagehide", e, {
            once: true,
            capture: true
        });
        t(()=>{
            e();
            N3("visibilitychange", e, {
                capture: true
            });
            N3("pagehide", e, {
                capture: true
            });
        });
    }
}, "whenIdleOrHidden");
export const w_ = {};

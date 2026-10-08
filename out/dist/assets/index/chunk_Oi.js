import { Fa, r } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const Oi = e(Fa(), 1);
const N_e = r("src/client/js/lib/scroll.js");
const PZ = a((e)=>{
    let t = e ? "visible" : "hidden";
    let r = document.querySelector(".page-list");
    let n = document.querySelector(".col-page");
    if (r) {
        r.style.visibility = t;
    }
    if (n) {
        n.style.visibility = t;
    }
}, "togglePageVisibility");
const OZ = new Map;
export function LZ(e, t) {
    OZ.set(e, t);
}
export function Hx(e) {
    let t = OZ.get(e) || 0;
    N_e("restoreScrollPosition", e, t);
    if (window.pageYOffset !== t) {
        PZ(false);
        window.requestAnimationFrame(()=>{
            window.scrollTo(0, t);
            window.requestAnimationFrame(()=>{
                PZ(true);
            });
        });
    }
}

import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
import { Ec } from "./chunk_WK.js";
const Zp = e(b(), 1);
export const cx = a(({ children })=>{
    let tRef = Zp.useRef(null);
    let r = Ec(children, tRef);
    return Zp.default.createElement("div", {
        ref: tRef,
        className: "translate title"
    }, r && Zp.default.createElement("span", {
        className: "translate-result"
    }, r));
}, "TranslatePageListTitle");
export const mY = a(({ children })=>{
    let tRef = Zp.useRef(null);
    let r = Ec(children, tRef);
    return Zp.default.createElement("div", {
        ref: tRef,
        className: "translate description"
    }, r && Zp.default.createElement("span", {
        className: "translate-result"
    }, r));
}, "TranslatePageListDescription");
export const Pr = e(b(), 1);
export const BI = e(ge(), 1);

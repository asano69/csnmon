import { A, b, cb, db } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const Cb = e(b(), 1);
const Ib = e(b(), 1);
export const Pb = a(({ ...rest })=>{
    let [t, setT] = Ib.useState(false);
    return Ib.default.createElement("button", {
        className: "text-button",
        type: "button",
        onClick: a((s)=>{
            s.stopPropagation();
            setT(!t);
        }, "onClick")
    }, Ib.default.createElement(t ? cb : db, {
        ...rest
    }));
}, "DateLabel");
export const dm = e(b(), 1);
export const $r = e(b(), 1);
export const cm = e(A(), 1);

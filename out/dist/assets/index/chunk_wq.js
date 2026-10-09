import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, c, e } from "../chunks/chunk-FXCI2R73.js";
const wq = c((j6)=>{
    "use strict";
    Object.defineProperty(j6, "__esModule", {
        value: true
    });
    j6.default = zde;
    function zde(e, t) {
        if (typeof e === "string" && !(!window || !document)) {
            const r = document.createElement("textarea");
            document.body.appendChild(r);
            r.setAttribute("readonly", true);
            r.style.position = "absolute";
            r.style.left = "-1000px";
            r.style.top = `${window.scrollY || document.body.scrollTop}px`;
            r.value = e;
            r.focus();
            r.setSelectionRange(0, e.length);
            const n = typeof document.execCommand === "function" && document.execCommand("copy");
            document.body.removeChild(r);
            n || (typeof t === "function" ? t(e) : window.prompt("Copy", e));
            return n;
        }
    }
    a(zde, "copy");
});
export const kq = c(($9e, Tq)=>{
    var qde = wq().default;
    Tq.exports = qde;
});
const Rde = [
    "<",
    ">"
];
const $de = a((e)=>/\s/.test(e) || Rde.includes(e), "shouldEncodeChars");
export const kp = a((e)=>decodeURI(e).split("").map((t)=>{
        if ($de(t)) {
            return encodeURI(t);
        }
        return t;
    }).join(""), "decodeURIForPlainText");
export const Rb = e(b(), 1);

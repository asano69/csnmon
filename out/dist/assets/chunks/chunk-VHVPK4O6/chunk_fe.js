import { m } from "./chunk_Hr.js";
const fe = m["__core-js_shared__"];
const W = fe;
const yt = (()=>{
    const t = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
    if (t) {
        return `Symbol(src)_1.${t}`;
    }
    return "";
})();
export function pe(t) {
    return !!yt && yt in t;
}

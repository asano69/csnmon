import { m } from "./chunk_Hr.js";
const mr = typeof exports === "object" && exports && !exports.nodeType && exports;
const pr = mr && typeof module === "object" && module && !module.nodeType && module;
const _a = pr && pr.exports === mr;
const sr = _a ? m.Buffer : undefined;
const ur = sr ? sr.allocUnsafe : undefined;
export function Oa(t, r) {
    if (r) {
        return t.slice();
    }
    const t_length = t.length;
    const a = ur ? ur(t_length) : new t.constructor(t_length);
    t.copy(a);
    return a;
}

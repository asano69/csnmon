export const $ = typeof global === "object" && global && global.Object === Object && global;
const Vr = typeof self === "object" && self && self.Object === Object && self;
export const m = $ || Vr || Function("return this")();
export const I = m.Symbol;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const B = I ? I.toStringTag : undefined;
export function Xr(t) {
    const r = hasOwnProperty.call(t, B);
    const o = t[B];
    try {
        t[B] = undefined;
        var a = true;
    } catch  {}
    const i = toString.call(t);
    a && (r ? t[B] = o : delete t[B]);
    return i;
}

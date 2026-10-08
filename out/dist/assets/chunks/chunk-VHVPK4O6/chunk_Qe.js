export function ke(t) {
    const r = t && t.constructor;
    const o = typeof r === "function" && r.prototype || Object.prototype;
    return t === o;
}

import { m } from "./chunk_Hr.js";
export const mt = m.Uint8Array;
export function ja(t) {
    const r = new t.constructor(t.byteLength);
    new mt(r).set(new mt(t));
    return r;
}

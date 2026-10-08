import { ja } from "./chunk_Ta.js";
export const lr = ja;
export function wa(t, r) {
    const o = r ? lr(t.buffer) : t.buffer;
    return new t.constructor(o, t.byteOffset, t.length);
}

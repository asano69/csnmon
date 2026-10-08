import { Uf } from "./chunk_et.js";
const Df = /\w*$/;
export function Nf(r) {
    const e = new r.constructor(r.source, Df.exec(r));
    e.lastIndex = r.lastIndex;
    return e;
}
export const rt = Nf;
export const ot = Uf;

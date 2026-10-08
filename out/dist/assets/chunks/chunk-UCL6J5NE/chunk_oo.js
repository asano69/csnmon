import { ki } from "./chunk_Vi.js";
const oo = ki;
const rm = /^\s+/;
export function em(r) {
    return r && r.slice(0, oo(r) + 1).replace(rm, "");
}

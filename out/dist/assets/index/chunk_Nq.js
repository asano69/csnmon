import { e } from "../chunks/chunk-FXCI2R73.js";
import { kq } from "./chunk_wq.js";
const Nq = e(kq(), 1);
export async function vn(e) {
    if (typeof navigator.clipboard?.writeText === "function") {
        await navigator.clipboard.writeText(e);
    } else {
        Nq.default(e);
    }
}

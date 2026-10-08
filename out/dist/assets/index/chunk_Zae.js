import { Kl } from "./chunk_Id.js";
const Zae = 60 * 1000;
export function Qae(e, t = Kl()) {
    let r = parseInt(`${e}`, 10);
    if (!isNaN(r)) {
        return r * 1000;
    }
    let n = Date.parse(`${e}`);
    if (isNaN(n)) {
        return Zae;
    }
    return n - t;
}

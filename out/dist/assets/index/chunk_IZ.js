import { Fa, Na, n } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const IZ = e(Fa(), 1);
const CZ = e(Fa(), 1);
let NZ = false;
export function AZ(e, t) {
    if (!n() || NZ) {
        return t();
    }
    NZ = true;
    let r;
    try {
        r = Na.get("lastPagePath");
    } catch (error) {
        console.error(error);
    }
    if (r) {
        CZ.default.replace(r);
    } else {
        return t();
    }
}

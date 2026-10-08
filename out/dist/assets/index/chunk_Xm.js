import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Ux } from "./chunk_wX.js";
export const Xm = e(b(), 1);
const AX = e(b(), 1);
export const IX = a(({ ipAddress })=>{
    if (Ux(ipAddress)) {
        return null;
    }
    return AX.default.createElement("span", {
        className: "ip-address-error"
    }, "invalid IP address");
}, "IpAddressError");

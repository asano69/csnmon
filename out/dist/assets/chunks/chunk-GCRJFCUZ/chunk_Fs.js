import { a, c } from "../chunk-FXCI2R73.js";
import { br, ht } from "./chunk_ht.js";
export const Fs = c((x5, N0)=>{
    "use strict";
    var Oa = Object.defineProperty || false;
    if (Oa) {
        try {
            Oa({}, "a", {
                value: 1
            });
        } catch  {
            Oa = false;
        }
    }
    N0.exports = Oa;
});
export const La = c((_5, B0)=>{
    "use strict";
    B0.exports = SyntaxError;
});
export const Ra = c((E5, Y0)=>{
    "use strict";
    var H0 = Fs();
    var qF = La();
    var Wn = ht();
    var W0 = br();
    Y0.exports = a(function(e, r, n) {
        if (!e || typeof e !== "object" && typeof e !== "function") {
            throw new Wn("`obj` must be an object or a function`");
        }
        if (typeof r !== "string" && typeof r !== "symbol") {
            throw new Wn("`property` must be a string or a symbol`");
        }
        if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
            throw new Wn("`nonEnumerable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
            throw new Wn("`nonWritable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
            throw new Wn("`nonConfigurable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
            throw new Wn("`loose`, if provided, must be a boolean");
        }
        const s = arguments.length > 3 ? arguments[3] : null;
        const o = arguments.length > 4 ? arguments[4] : null;
        const f = arguments.length > 5 ? arguments[5] : null;
        const c = arguments.length > 6 ? arguments[6] : false;
        const u = !!W0 && W0(e, r);
        if (H0) {
            H0(e, r, {
                configurable: f === null && u ? u.configurable : !f,
                enumerable: s === null && u ? u.enumerable : !s,
                value: n,
                writable: o === null && u ? u.writable : !o
            });
        } else if (c || !s && !o && !f) {
            e[r] = n;
        } else {
            throw new qF("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        }
    }, "defineDataProperty");
});
export const Ma = c((O5, G0)=>{
    "use strict";
    var Vl = Fs();
    var V0 = a(()=>!!Vl, "hasPropertyDescriptors");
    V0.hasArrayLengthDefineBug = a(()=>{
        if (!Vl) {
            return null;
        }
        try {
            return Vl([], "length", {
                value: 1
            }).length !== 1;
        } catch  {
            return true;
        }
    }, "hasArrayLengthDefineBug");
    G0.exports = V0;
});

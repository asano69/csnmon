import { a, c } from "../chunk-FXCI2R73.js";
import { Gl, br } from "./chunk_ht.js";
import { wr } from "./chunk_wr.js";
import { $r, Ba } from "./chunk_jb.js";
import { of } from "./chunk_Lw.js";
const af = c((qG, Dw)=>{
    "use strict";
    var yI = of();
    var supportsDescriptors = wr().supportsDescriptors;
    var Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    Dw.exports = a(()=>{
        if (supportsDescriptors && /a/mig.flags === "gim") {
            const e = Object_getOwnPropertyDescriptor(RegExp.prototype, "flags");
            if (e && typeof e.get === "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
                let r = "";
                const n = {};
                Object.defineProperty(n, "hasIndices", {
                    get: a(()=>{
                        r += "d";
                    }, "get")
                });
                Object.defineProperty(n, "sticky", {
                    get: a(()=>{
                        r += "y";
                    }, "get")
                });
                e.get.call(n);
                if (r === "dy") {
                    return e.get;
                }
            }
        }
        return yI;
    }, "getPolyfill");
});
const Nw = c((zG, jw)=>{
    "use strict";
    var supportsDescriptors = wr().supportsDescriptors;
    var SI = af();
    var xI = br();
    var Object_defineProperty = Object.defineProperty;
    var CI = Gl();
    var Iw = Ba();
    var PI = /a/;
    jw.exports = a(()=>{
        if (!supportsDescriptors || !Iw) {
            throw new CI("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        }
        const get = SI();
        const r = Iw(PI);
        const n = xI(r, "flags");
        if (!n || n.get !== get) {
            Object_defineProperty(r, "flags", {
                configurable: true,
                enumerable: false,
                get
            });
        }
        return get;
    }, "shimFlags");
});
export const $w = c((WG, qw)=>{
    "use strict";
    var kI = wr();
    var EI = $r();
    var implementation = of();
    var getPolyfill = af();
    var shim = Nw();
    var Uw = EI(getPolyfill());
    kI(Uw, {
        getPolyfill,
        implementation,
        shim
    });
    qw.exports = Uw;
});

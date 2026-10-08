import { a, c } from "../chunk-FXCI2R73.js";
import { Fa } from "./chunk_Fa.js";
export const Ds = c((K5, Pb)=>{
    "use strict";
    Pb.exports = a(()=>{
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
            return false;
        }
        if (typeof Symbol.iterator === "symbol") {
            return true;
        }
        const e = {};
        const r = Symbol("test");
        const n = Object(r);
        if (typeof r === "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") {
            return false;
        }
        const s = 42;
        e[r] = s;
        for(const o in e){
            return false;
        }
        if (typeof Object.keys === "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(e).length !== 0) {
            return false;
        }
        const f = Object.getOwnPropertySymbols(e);
        if (f.length !== 1 || f[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) {
            return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
            const c = Object.getOwnPropertyDescriptor(e, r);
            if (c.value !== s || c.enumerable !== true) {
                return false;
            }
        }
        return true;
    }, "hasSymbols");
});
export const Da = c((Q5, Eb)=>{
    "use strict";
    var kb = typeof Symbol !== "undefined" && Symbol;
    var KF = Ds();
    Eb.exports = a(()=>{
        if (typeof kb !== "function" || typeof Symbol !== "function" || typeof kb("foo") !== "symbol" || typeof Symbol("bar") !== "symbol") {
            return false;
        }
        return KF();
    }, "hasNativeSymbols");
});
export const Kl = c((X5, Ab)=>{
    "use strict";
    Ab.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
});
export const Jl = c((eG, Ob)=>{
    "use strict";
    var JF = Fa();
    Ob.exports = JF.getPrototypeOf || null;
});

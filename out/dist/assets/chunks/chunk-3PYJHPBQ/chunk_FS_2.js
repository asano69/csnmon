import { a, c } from "../chunk-FXCI2R73.js";
const FS = c((W7, MS)=>{
    "use strict";
    var RS = typeof BigInt !== "undefined" && BigInt;
    MS.exports = a(()=>typeof RS === "function" && typeof BigInt === "function" && typeof RS(42) === "bigint" && typeof BigInt(42) === "bigint", "hasNativeBigInts");
});
export const jS = c((V7, Kf)=>{
    "use strict";
    var AN = FS()();
    if (AN) {
        DS = BigInt.prototype.valueOf;
        IS = a((e)=>{
            try {
                DS.call(e);
                return true;
            } catch  {}
            return false;
        }, "tryBigIntObject");
        Kf.exports = a((e)=>{
            if (e === null || typeof e === "undefined" || typeof e === "boolean" || typeof e === "string" || typeof e === "number" || typeof e === "symbol" || typeof e === "function") {
                return false;
            }
            if (typeof e === "bigint") {
                return true;
            }
            return IS(e);
        }, "isBigInt");
    } else {
        Kf.exports = a((e)=>false, "isBigInt");
    }
    var DS;
    var IS;
});

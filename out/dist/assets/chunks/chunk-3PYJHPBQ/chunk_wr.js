import { a, c } from "../chunk-FXCI2R73.js";
import { Aa, vr } from "./chunk_Hl.js";
import { Ma, Ra } from "./chunk_Fs.js";
import { br, ht } from "./chunk_ht.js";
import { Da } from "./chunk_Ds.js";
import { $r, Ft, Ke, Ua } from "./chunk_jb.js";
import { jS } from "./chunk_FS_2.js";
export const wr = c((T5, Z0)=>{
    "use strict";
    var $F = Aa();
    var zF = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toString = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var K0 = Ra();
    var YF = a((t)=>typeof t === "function" && toString.call(t) === "[object Function]", "isFunction");
    var J0 = Ma()();
    var VF = a((t, e, r, n)=>{
        if (e in t) {
            if (n === true) {
                if (t[e] === r) {
                    return;
                }
            } else if (!YF(n) || !n()) {
                return;
            }
        }
        if (J0) {
            K0(t, e, r, true);
        } else {
            K0(t, e, r);
        }
    }, "defineProperty");
    var Q0 = a(function(t, e) {
        const r = arguments.length > 2 ? arguments[2] : {};
        let n = $F(e);
        if (zF) {
            n = concat.call(n, Object.getOwnPropertySymbols(e));
        }
        for(let s = 0; s < n.length; s += 1){
            VF(t, n[s], e[n[s]], r[n[s]]);
        }
    }, "defineProperties");
    Q0.supportsDescriptors = !!J0;
    Z0.exports = Q0;
});
export const Pf = c((d7, Av)=>{
    "use strict";
    var Ev = Ke();
    var Nj = Ev("String.prototype.valueOf");
    var Bj = a((e)=>{
        try {
            Nj(e);
            return true;
        } catch  {
            return false;
        }
    }, "tryStringObject");
    var Uj = Ev("Object.prototype.toString");
    var qj = "[object String]";
    var $j = vr()();
    Av.exports = a((e)=>{
        if (typeof e === "string") {
            return true;
        }
        if (!e || typeof e !== "object") {
            return false;
        }
        if ($j) {
            return Bj(e);
        }
        return Uj(e) === qj;
    }, "isString");
});
const Uf = c((S7, Gv)=>{
    "use strict";
    var Vv = a((t)=>t !== t, "numberIsNaN");
    Gv.exports = a((e, r)=>{
        if (e === 0 && r === 0) {
            return 1 / e === 1 / r;
        }
        return !!(e === r || Vv(e) && Vv(r));
    }, "is");
});
const qf = c((_7, Kv)=>{
    "use strict";
    var Wj = Uf();
    Kv.exports = a(()=>{
        if (typeof Object.is === "function") {
            return Object.is;
        }
        return Wj;
    }, "getPolyfill");
});
const Qv = c((P7, Jv)=>{
    "use strict";
    var Yj = qf();
    var Vj = wr();
    Jv.exports = a(()=>{
        const is = Yj();
        Vj(Object, {
            is
        }, {
            is: a(()=>Object.is !== is, "testObjectIs")
        });
        return is;
    }, "shimObjectIs");
});
export const tS = c((E7, eS)=>{
    "use strict";
    var Gj = wr();
    var Kj = $r();
    var implementation = Uf();
    var getPolyfill = qf();
    var shim = Qv();
    var Xv = Kj(getPolyfill(), Object);
    Gj(Xv, {
        getPolyfill,
        implementation,
        shim
    });
    eS.exports = Xv;
});
export const zf = c((O7, aS)=>{
    "use strict";
    var Xj = $r();
    var oS = Ke();
    var eN = Ft();
    var $f = eN("%ArrayBuffer%", true);
    var nc = oS("ArrayBuffer.prototype.byteLength", true);
    var tN = oS("Object.prototype.toString");
    var iS = !!$f && !nc && new $f(0).slice;
    var sS = !!iS && Xj(iS);
    aS.exports = a(nc || sS ? (e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        try {
            if (nc) {
                nc(e);
            } else {
                sS(e, 0);
            }
            return true;
        } catch  {
            return false;
        }
    } : $f ? (e)=>tN(e) === "[object ArrayBuffer]" : (e)=>false, "isArrayBuffer");
});
export const lS = c((T7, uS)=>{
    "use strict";
    var cS = Ke();
    var rN = cS("Date.prototype.getDay");
    var nN = a((e)=>{
        try {
            rN(e);
            return true;
        } catch  {
            return false;
        }
    }, "tryDateGetDayCall");
    var iN = cS("Object.prototype.toString");
    var sN = "[object Date]";
    var oN = vr()();
    uS.exports = a((e)=>{
        if (typeof e !== "object" || e === null) {
            return false;
        }
        if (oN) {
            return nN(e);
        }
        return iN(e) === sN;
    }, "isDateObject");
});
export const Vf = c((M7, mS)=>{
    "use strict";
    var fS = Ke();
    var aN = vr()();
    var cN = Ua();
    var uN = br();
    var Yf;
    if (aN) {
        hS = fS("RegExp.prototype.exec");
        Hf = {};
        ic = a(()=>{
            throw Hf;
        }, "throwRegexMarker");
        Wf = {
            toString: ic,
            valueOf: ic
        };
        if (typeof Symbol.toPrimitive === "symbol") {
            Wf[Symbol.toPrimitive] = ic;
        }
        Yf = a((e)=>{
            if (!e || typeof e !== "object") {
                return false;
            }
            const r = uN(e, "lastIndex");
            const n = r && cN(r, "value");
            if (!n) {
                return false;
            }
            try {
                hS(e, Wf);
            } catch (error) {
                return error === Hf;
            }
        }, "isRegex");
    } else {
        dS = fS("Object.prototype.toString");
        pS = "[object RegExp]";
        Yf = a((e)=>{
            if (!e || typeof e !== "object" && typeof e !== "function") {
                return false;
            }
            return dS(e) === pS;
        }, "isRegex");
    }
    var hS;
    var Hf;
    var ic;
    var Wf;
    var dS;
    var pS;
    mS.exports = Yf;
});
export const bS = c((D7, yS)=>{
    "use strict";
    var lN = Ke();
    var gS = lN("SharedArrayBuffer.prototype.byteLength", true);
    yS.exports = a(gS ? (e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        try {
            gS(e);
            return true;
        } catch  {
            return false;
        }
    } : (e)=>false, "isSharedArrayBuffer");
});
const SS = c((j7, vS)=>{
    "use strict";
    var wS = Ke();
    var fN = wS("Number.prototype.toString");
    var hN = a((e)=>{
        try {
            fN(e);
            return true;
        } catch  {
            return false;
        }
    }, "tryNumberObject");
    var dN = wS("Object.prototype.toString");
    var pN = "[object Number]";
    var mN = vr()();
    vS.exports = a((e)=>{
        if (typeof e === "number") {
            return true;
        }
        if (!e || typeof e !== "object") {
            return false;
        }
        if (mN) {
            return hN(e);
        }
        return dN(e) === pN;
    }, "isNumberObject");
});
const CS = c((B7, _S)=>{
    "use strict";
    var xS = Ke();
    var gN = xS("Boolean.prototype.toString");
    var yN = xS("Object.prototype.toString");
    var bN = a((e)=>{
        try {
            gN(e);
            return true;
        } catch  {
            return false;
        }
    }, "booleanBrandCheck");
    var wN = "[object Boolean]";
    var vN = vr()();
    _S.exports = a((e)=>{
        if (typeof e === "boolean") {
            return true;
        }
        if (e === null || typeof e !== "object") {
            return false;
        }
        if (vN) {
            return bN(e);
        }
        return yN(e) === wN;
    }, "isBoolean");
});
const kS = c((q7, PS)=>{
    "use strict";
    var SN = Ke();
    var xN = Vf();
    var _N = SN("RegExp.prototype.exec");
    var CN = ht();
    PS.exports = a((e)=>{
        if (!xN(e)) {
            throw new CN("`regex` must be a RegExp");
        }
        return a((n)=>_N(e, n) !== null, "test");
    }, "regexTester");
});
const TS = c((z7, Gf)=>{
    "use strict";
    var LS = Ke();
    var PN = LS("Object.prototype.toString");
    var kN = Da()();
    var EN = kS();
    if (kN) {
        ES = LS("Symbol.prototype.toString");
        AS = EN(/^Symbol\(.*\)$/);
        OS = a((e)=>{
            if (typeof e.valueOf() !== "symbol") {
                return false;
            }
            return AS(ES(e));
        }, "isRealSymbolObject");
        Gf.exports = a((e)=>{
            if (typeof e === "symbol") {
                return true;
            }
            if (!e || typeof e !== "object" || PN(e) !== "[object Symbol]") {
                return false;
            }
            try {
                return OS(e);
            } catch  {
                return false;
            }
        }, "isSymbol");
    } else {
        Gf.exports = a((e)=>false, "isSymbol");
    }
    var ES;
    var AS;
    var OS;
});
export const BS = c((K7, NS)=>{
    "use strict";
    var ON = Pf();
    var LN = SS();
    var TN = CS();
    var RN = TS();
    var MN = jS();
    NS.exports = a((e)=>{
        if (e == null || typeof e !== "object" && typeof e !== "function") {
            return null;
        }
        if (ON(e)) {
            return "String";
        }
        if (LN(e)) {
            return "Number";
        }
        if (TN(e)) {
            return "Boolean";
        }
        if (RN(e)) {
            return "Symbol";
        }
        if (MN(e)) {
            return "BigInt";
        }
    }, "whichBoxedPrimitive");
});

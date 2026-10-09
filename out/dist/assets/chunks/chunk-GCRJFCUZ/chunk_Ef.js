import { a, c } from "../chunk-FXCI2R73.js";
import { HS } from "./chunk_jb.js";
export const Ef = c((m7, Tv)=>{
    "use strict";
    var kf = typeof Map === "function" && Map.prototype ? Map : null;
    var zj = typeof Set === "function" && Set.prototype ? Set : null;
    var Za;
    if (!kf) {
        Za = a((e)=>false, "isMap");
    }
    var Lv = kf ? Map.prototype.has : null;
    var Ov = zj ? Set.prototype.has : null;
    if (!Za && !Lv) {
        Za = a((e)=>false, "isMap");
    }
    Tv.exports = Za || a((e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        try {
            Lv.call(e);
            if (Ov) {
                try {
                    Ov.call(e);
                } catch  {
                    return true;
                }
            }
            return e instanceof kf;
        } catch  {}
        return false;
    }, "isMap");
});
export const Of = c((y7, Fv)=>{
    "use strict";
    var Hj = typeof Map === "function" && Map.prototype ? Map : null;
    var Af = typeof Set === "function" && Set.prototype ? Set : null;
    var Xa;
    if (!Af) {
        Xa = a((e)=>false, "isSet");
    }
    var Rv = Hj ? Map.prototype.has : null;
    var Mv = Af ? Set.prototype.has : null;
    if (!Xa && !Mv) {
        Xa = a((e)=>false, "isSet");
    }
    Fv.exports = Xa || a((e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        try {
            Mv.call(e);
            if (Rv) {
                try {
                    Rv.call(e);
                } catch  {
                    return true;
                }
            }
            return e instanceof Af;
        } catch  {}
        return false;
    }, "isSet");
});
const $S = c((Q7, qS)=>{
    "use strict";
    var sc = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
    var US = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
    var oc;
    if (!sc) {
        oc = a((e)=>false, "isWeakMap");
    }
    var Qf = sc ? sc.prototype.has : null;
    var Jf = US ? US.prototype.has : null;
    if (!oc && !Qf) {
        oc = a((e)=>false, "isWeakMap");
    }
    qS.exports = oc || a((e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        try {
            Qf.call(e, Qf);
            if (Jf) {
                try {
                    Jf.call(e, Jf);
                } catch  {
                    return true;
                }
            }
            return e instanceof sc;
        } catch  {}
        return false;
    }, "isWeakMap");
});
export const YS = c((tK, WS)=>{
    "use strict";
    var IN = Ef();
    var jN = Of();
    var NN = $S();
    var BN = HS();
    WS.exports = a((e)=>{
        if (e && typeof e === "object") {
            if (IN(e)) {
                return "Map";
            }
            if (jN(e)) {
                return "Set";
            }
            if (NN(e)) {
                return "WeakMap";
            }
            if (BN(e)) {
                return "WeakSet";
            }
        }
        return false;
    }, "whichCollection");
});

import { a, c } from "../chunk-FXCI2R73.js";
import { Aa, vr } from "./chunk_Hl.js";
import { wr } from "./chunk_wr.js";
import { Fa } from "./chunk_Fa.js";
import { Ds } from "./chunk_Ds.js";
import { $r, Ft, Ke } from "./chunk_jb.js";
const tf = c((PG, bw)=>{
    "use strict";
    var QD = Aa();
    var gw = Ds()();
    var yw = Ke();
    var Ha = Fa();
    var ZD = yw("Array.prototype.push");
    var mw = yw("Object.prototype.propertyIsEnumerable");
    var XD = gw ? Ha.getOwnPropertySymbols : null;
    bw.exports = a(function(e, r) {
        if (e == null) {
            throw new TypeError("target must be an object");
        }
        const n = Ha(e);
        if (arguments.length === 1) {
            return n;
        }
        for(let s = 1; s < arguments.length; ++s){
            const o = Ha(arguments[s]);
            const f = QD(o);
            const c = gw && (Ha.getOwnPropertySymbols || XD);
            if (c) {
                for(let u = c(o), d = 0; d < u.length; ++d){
                    const b = u[d];
                    if (mw(o, b)) {
                        ZD(f, b);
                    }
                }
            }
            for (const w of f){
                if (mw(o, w)) {
                    const _ = o[w];
                    n[w] = _;
                }
            }
        }
        return n;
    }, "assign");
});
const nf = c((EG, ww)=>{
    "use strict";
    var rf = tf();
    var eI = a(()=>{
        if (!Object.assign) {
            return false;
        }
        const t = "abcdefghijklmnopqrst";
        for(var e = t.split(""), r = {}, n = 0; n < e.length; ++n){
            r[e[n]] = e[n];
        }
        const s = {
            ...r
        };
        let o = "";
        for(const f in s){
            o += f;
        }
        return t !== o;
    }, "lacksProperEnumerationOrder");
    var tI = a(()=>{
        if (!Object.assign || !Object.preventExtensions) {
            return false;
        }
        const t = Object.preventExtensions({
            1: 2
        });
        try {
            Object.assign(t, "xy");
        } catch  {
            return t[1] === "y";
        }
        return false;
    }, "assignHasPendingExceptions");
    ww.exports = a(()=>{
        if (!Object.assign || eI() || tI()) {
            return rf;
        }
        return Object.assign;
    }, "getPolyfill");
});
const Sw = c((OG, vw)=>{
    "use strict";
    var rI = wr();
    var nI = nf();
    vw.exports = a(()=>{
        const assign = nI();
        rI(Object, {
            assign
        }, {
            assign: a(()=>Object.assign !== assign, "assign")
        });
        return assign;
    }, "shimAssign");
});
export const Pw = c((TG, Cw)=>{
    "use strict";
    var iI = wr();
    var sI = $r();
    var implementation = tf();
    var getPolyfill = nf();
    var shim = Sw();
    var cI = sI.apply(getPolyfill());
    var _w = a(function(e, r) {
        return cI(Object, arguments);
    }, "assign");
    iI(_w, {
        getPolyfill,
        implementation,
        shim
    });
    Cw.exports = _w;
});
export const sf = c((MG, Aw)=>{
    "use strict";
    var kw = Ft();
    var Ew = $r();
    var uI = Ew(kw("String.prototype.indexOf"));
    Aw.exports = a((e, r)=>{
        const n = kw(e, !!r);
        if (typeof n === "function" && uI(e, ".prototype.") > -1) {
            return Ew(n);
        }
        return n;
    }, "callBoundIntrinsic");
});
export const uf = c((GG, Ww)=>{
    "use strict";
    var TI = vr()();
    var RI = Ke();
    var cf = RI("Object.prototype.toString");
    var Wa = a((e)=>{
        if (TI && e && typeof e === "object" && Symbol.toStringTag in e) {
            return false;
        }
        return cf(e) === "[object Arguments]";
    }, "isArguments");
    var Hw = a((e)=>{
        if (Wa(e)) {
            return true;
        }
        return e !== null && typeof e === "object" && "length" in e && typeof e.length === "number" && e.length >= 0 && cf(e) !== "[object Array]" && "callee" in e && cf(e.callee) === "[object Function]";
    }, "isArguments");
    var MI = function() {
        return Wa(arguments);
    }();
    Wa.isLegacyArguments = Hw;
    Ww.exports = MI ? Wa : Hw;
});

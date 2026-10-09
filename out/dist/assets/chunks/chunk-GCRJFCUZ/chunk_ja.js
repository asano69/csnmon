import { a, c } from "../chunk-FXCI2R73.js";
export const ja = c((sG, Db)=>{
    "use strict";
    Db.exports = Function.prototype.apply;
});
const JS = c((nK, KS)=>{
    "use strict";
    var toString = Function.prototype.toString;
    var Xn = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var th;
    var cc;
    if (typeof Xn === "function" && typeof Object.defineProperty === "function") {
        try {
            th = Object.defineProperty({}, "length", {
                get: a(()=>{
                    throw cc;
                }, "get")
            });
            cc = {};
            Xn(()=>{
                throw 42;
            }, null, th);
        } catch (error) {
            if (error !== cc) {
                Xn = null;
            }
        }
    } else {
        Xn = null;
    }
    var UN = /^\s*class\b/;
    var rh = a((e)=>{
        try {
            const r = toString.call(e);
            return UN.test(r);
        } catch  {
            return false;
        }
    }, "isES6ClassFunction");
    var eh = a((e)=>{
        try {
            if (rh(e)) {
                return false;
            }
            toString.call(e);
            return true;
        } catch  {
            return false;
        }
    }, "tryFunctionToStr");
    var toString_1 = Object.prototype.toString;
    var qN = "[object Object]";
    var $N = "[object Function]";
    var zN = "[object GeneratorFunction]";
    var HN = "[object HTMLAllCollection]";
    var WN = "[object HTML document.all class]";
    var YN = "[object HTMLCollection]";
    var VN = typeof Symbol === "function" && !!Symbol.toStringTag;
    var GN = !(0 in [
        , 
    ]);
    var nh = a(()=>false, "isDocumentDotAll");
    if (typeof document === "object") {
        VS = document.all;
        if (toString_1.call(VS) === toString_1.call(document.all)) {
            nh = a((e)=>{
                if ((GN || !e) && (typeof e === "undefined" || typeof e === "object")) {
                    try {
                        const r = toString_1.call(e);
                        return (r === HN || r === WN || r === YN || r === qN) && e("") == null;
                    } catch  {}
                }
                return false;
            }, "isDocumentDotAll");
        }
    }
    var VS;
    KS.exports = a(Xn ? (e)=>{
        if (nh(e)) {
            return true;
        }
        if (!e || typeof e !== "function" && typeof e !== "object") {
            return false;
        }
        try {
            Xn(e, null, th);
        } catch (error) {
            if (error !== cc) {
                return false;
            }
        }
        return !rh(e) && eh(e);
    } : (e)=>{
        if (nh(e)) {
            return true;
        }
        if (!e || typeof e !== "function" && typeof e !== "object") {
            return false;
        }
        if (VN) {
            return eh(e);
        }
        if (rh(e)) {
            return false;
        }
        const r = toString_1.call(e);
        if (r !== $N && r !== zN && !/^\[object HTML/.test(r)) {
            return false;
        }
        return eh(e);
    }, "isCallable");
});
export const XS = c((sK, ZS)=>{
    "use strict";
    var KN = JS();
    var toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var QN = a((e, r, n)=>{
        for(let s = 0, o = e.length; s < o; s++){
            hasOwnProperty.call(e, s) && (n == null ? r(e[s], s, e) : r.call(n, e[s], s, e));
        }
    }, "forEachArray");
    var ZN = a((e, r, n)=>{
        for(let s = 0, o = e.length; s < o; s++){
            if (n == null) {
                r(e.charAt(s), s, e);
            } else {
                r.call(n, e.charAt(s), s, e);
            }
        }
    }, "forEachString");
    var XN = a((e, r, n)=>{
        for(const s in e){
            hasOwnProperty.call(e, s) && (n == null ? r(e[s], s, e) : r.call(n, e[s], s, e));
        }
    }, "forEachObject");
    function eB(t) {
        return toString.call(t) === "[object Array]";
    }
    a(eB, "isArray");
    ZS.exports = a(function(e, r, n) {
        if (!KN(r)) {
            throw new TypeError("iterator must be a function");
        }
        let s;
        if (arguments.length >= 3) {
            s = n;
        }
        if (eB(e)) {
            QN(e, r, s);
        } else if (typeof e === "string") {
            ZN(e, r, s);
        } else {
            XN(e, r, s);
        }
    }, "forEach");
});

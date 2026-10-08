import { a, c } from "../chunk-FXCI2R73.js";
import { Ma, Ra } from "./chunk_Fs.js";
import { ht } from "./chunk_ht.js";
import { Pf } from "./chunk_wr.js";
import { Da, Ds } from "./chunk_Ds.js";
import { Ft } from "./chunk_jb.js";
import { sf, uf } from "./chunk_tf.js";
import { kv } from "./chunk_Yw.js";
import { Cv } from "./chunk_pv.js";
import { Ef, Of } from "./chunk_Ef.js";
const Lw = c((DG, Ow)=>{
    "use strict";
    var Us = a(()=>typeof a(()=>{}, "f").name === "string", "functionsHaveNames");
    var Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    if (Object_getOwnPropertyDescriptor) {
        try {
            Object_getOwnPropertyDescriptor([], "length");
        } catch  {
            Object_getOwnPropertyDescriptor = null;
        }
    }
    Us.functionsHaveConfigurableNames = a(()=>{
        if (!Us() || !Object_getOwnPropertyDescriptor) {
            return false;
        }
        const e = Object_getOwnPropertyDescriptor(()=>{}, "name");
        return !!e && !!e.configurable;
    }, "functionsHaveConfigurableNames");
    var bind = Function.prototype.bind;
    Us.boundFunctionsHaveNames = a(()=>Us() && typeof bind === "function" && a(()=>{}, "f").bind().name !== "", "boundFunctionsHaveNames");
    Ow.exports = Us;
});
const Mw = c((jG, Rw)=>{
    "use strict";
    var Tw = Ra();
    var fI = Ma()();
    var hI = Lw().functionsHaveConfigurableNames();
    var dI = ht();
    Rw.exports = a(function(e, r) {
        if (typeof e !== "function") {
            throw new dI("`fn` is not a function");
        }
        const n = arguments.length > 2 && !!arguments[2];
        (!n || hI) && (fI ? Tw(e, "name", r, true, true) : Tw(e, "name", r));
        return e;
    }, "setFunctionName");
});
export const of = c((BG, Fw)=>{
    "use strict";
    var pI = Mw();
    var mI = ht();
    var gI = Object;
    Fw.exports = pI(a(function() {
        if (this == null || this !== gI(this)) {
            throw new mI("RegExp.prototype.flags getter called on non-object");
        }
        let e = "";
        if (this.hasIndices) {
            e += "d";
        }
        if (this.global) {
            e += "g";
        }
        if (this.ignoreCase) {
            e += "i";
        }
        if (this.multiline) {
            e += "m";
        }
        if (this.dotAll) {
            e += "s";
        }
        if (this.unicode) {
            e += "u";
        }
        if (this.unicodeSets) {
            e += "v";
        }
        if (this.sticky) {
            e += "y";
        }
        return e;
    }, "flags"), "get flags", true);
});
export const Yv = c((w7, rc)=>{
    "use strict";
    var Dv = uf();
    var Iv = Cv();
    if (Da()() || Ds()()) {
        ec = Symbol.iterator;
        rc.exports = a((e)=>{
            if (e != null && typeof e[ec] !== "undefined") {
                return e[ec]();
            }
            if (Dv(e)) {
                return Array.prototype[ec].call(e);
            }
        }, "getIterator");
    } else {
        jv = kv();
        Nv = Pf();
        Lf = Ft();
        Bv = Lf("%Map%", true);
        Uv = Lf("%Set%", true);
        xt = sf();
        Tf = xt("Array.prototype.push");
        Rf = xt("String.prototype.charCodeAt");
        qv = xt("String.prototype.slice");
        $v = a((e, r)=>{
            const e_length = e.length;
            if (r + 1 >= e_length) {
                return r + 1;
            }
            const s = Rf(e, r);
            if (s < 55296 || s > 56319) {
                return r + 1;
            }
            const o = Rf(e, r + 1);
            if (o < 56320 || o > 57343) {
                return r + 1;
            }
            return r + 2;
        }, "advanceStringIndex");
        tc = a((e)=>{
            let r = 0;
            return {
                next: a(()=>{
                    const done = r >= e.length;
                    let o;
                    if (!done) {
                        o = e[r];
                        r += 1;
                    }
                    return {
                        done,
                        value: o
                    };
                }, "next")
            };
        }, "getArrayIterator");
        Mf = a((e, r)=>{
            if (jv(e) || Dv(e)) {
                return tc(e);
            }
            if (Nv(e)) {
                let n = 0;
                return {
                    next: a(()=>{
                        const o = $v(e, n);
                        const value = qv(e, n, o);
                        n = o;
                        return {
                            done: o > e.length,
                            value
                        };
                    }, "next")
                };
            }
            if (r && typeof e["_es6-shim iterator_"] !== "undefined") {
                return e["_es6-shim iterator_"]();
            }
        }, "getNonCollectionIterator");
        if (!Bv && !Uv) {
            rc.exports = a((e)=>{
                if (e != null) {
                    return Mf(e, true);
                }
            }, "getIterator");
        } else {
            zv = Ef();
            Hv = Of();
            Ff = xt("Map.prototype.forEach", true);
            Df = xt("Set.prototype.forEach", true);
            if (typeof process === "undefined" || !process.versions || !process.versions.node) {
                If = xt("Map.prototype.iterator", true);
                jf = xt("Set.prototype.iterator", true);
            }
            Nf = xt("Map.prototype.@@iterator", true) || xt("Map.prototype._es6-shim iterator_", true);
            Bf = xt("Set.prototype.@@iterator", true) || xt("Set.prototype._es6-shim iterator_", true);
            Wv = a((e)=>{
                if (zv(e)) {
                    if (If) {
                        return Iv(If(e));
                    }
                    if (Nf) {
                        return Nf(e);
                    }
                    if (Ff) {
                        const r = [];
                        Ff(e, (s, o)=>{
                            Tf(r, [
                                o,
                                s
                            ]);
                        });
                        return tc(r);
                    }
                }
                if (Hv(e)) {
                    if (jf) {
                        return Iv(jf(e));
                    }
                    if (Bf) {
                        return Bf(e);
                    }
                    if (Df) {
                        const n = [];
                        Df(e, (s)=>{
                            Tf(n, s);
                        });
                        return tc(n);
                    }
                }
            }, "getCollectionIterator");
            rc.exports = a((e)=>Wv(e) || Mf(e), "getIterator");
        }
    }
    var ec;
    var jv;
    var Nv;
    var Lf;
    var Bv;
    var Uv;
    var xt;
    var Tf;
    var Rf;
    var qv;
    var $v;
    var tc;
    var Mf;
    var zv;
    var Hv;
    var Ff;
    var Df;
    var If;
    var jf;
    var Nf;
    var Bf;
    var Wv;
});

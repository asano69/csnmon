import { a, c } from "../chunk-FXCI2R73.js";
export const Fa = c((M5, X0)=>{
    "use strict";
    X0.exports = Object;
});
const Rb = c((tG, Tb)=>{
    "use strict";
    var QF = "Function.prototype.bind called on incompatible ";
    var toString = Object.prototype.toString;
    var Math_max = Math.max;
    var eD = "[object Function]";
    var Lb = a((e, r)=>{
        const n = [];
        for(let s = 0; s < e.length; s += 1){
            n[s] = e[s];
        }
        for(let o = 0; o < r.length; o += 1){
            n[o + e.length] = r[o];
        }
        return n;
    }, "concatty");
    var tD = a((e, r)=>{
        const n = [];
        for(let s = r || 0, o = 0; s < e.length; s += 1, o += 1){
            n[o] = e[s];
        }
        return n;
    }, "slicy");
    var rD = a((t, e)=>{
        let r = "";
        for(let n = 0; n < t.length; n += 1){
            r += t[n];
            if (n + 1 < t.length) {
                r += e;
            }
        }
        return r;
    }, "joiny");
    Tb.exports = a(function(e) {
        const r = this;
        if (typeof r !== "function" || toString.apply(r) !== eD) {
            throw new TypeError(QF + r);
        }
        const n = tD(arguments, 1);
        let s;
        const o = a(function() {
            if (this instanceof s) {
                const b = r.apply(this, Lb(n, arguments));
                if (Object(b) === b) {
                    return b;
                }
                return this;
            }
            return r.apply(e, Lb(n, arguments));
        }, "binder");
        for(var f = Math_max(0, r.length - n.length), c = [], u = 0; u < f; u++){
            c[u] = `\$${u}`;
        }
        s = Function("binder", `return function (${rD(c, ",")}){ return binder.apply(this,arguments); }`)(o);
        if (r.prototype) {
            const d = a(()=>{}, "Empty");
            d.prototype = r.prototype;
            s.prototype = new d;
            d.prototype = null;
        }
        return s;
    }, "bind");
});
export const Yn = c((nG, Mb)=>{
    "use strict";
    var nD = Rb();
    Mb.exports = Function.prototype.bind || nD;
});
export const Ia = c((iG, Fb)=>{
    "use strict";
    Fb.exports = Function.prototype.call;
});

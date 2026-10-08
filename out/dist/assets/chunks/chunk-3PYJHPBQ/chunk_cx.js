import { a, c } from "../chunk-FXCI2R73.js";
import { Aa, vr } from "./chunk_Hl.js";
import { br } from "./chunk_ht.js";
import { BS, Vf, bS, lS, tS, zf } from "./chunk_wr.js";
import { XS } from "./chunk_ja.js";
import { $r, Ba, Ft, Ke } from "./chunk_jb.js";
import { Pw, sf, uf } from "./chunk_tf.js";
import { Yv } from "./chunk_Lw.js";
import { $w } from "./chunk_af.js";
import { nS } from "./chunk_Yw.js";
import { _f } from "./chunk_pv.js";
import { YS } from "./chunk_Ef.js";
import { nx } from "./chunk_tx.js";
const cx = c((lK, ax)=>{
    "use strict";
    var hc = XS();
    var rB = nx();
    var ix = $r();
    var oh = Ke();
    var fc = br();
    var lc = Ba();
    var nB = oh("Object.prototype.toString");
    var ox = vr()();
    var sx = typeof globalThis === "undefined" ? global : globalThis;
    var sh = rB();
    var ah = oh("String.prototype.slice");
    var iB = oh("Array.prototype.indexOf", true) || a((e, r)=>{
        for(let n = 0; n < e.length; n += 1){
            if (e[n] === r) {
                return n;
            }
        }
        return -1;
    }, "indexOf");
    var dc = {
        __proto__: null
    };
    if (ox && fc && lc) {
        hc(sh, (t)=>{
            const e = new sx[t];
            if (Symbol.toStringTag in e && lc) {
                const r = lc(e);
                let n = fc(r, Symbol.toStringTag);
                if (!n && r) {
                    const s = lc(r);
                    n = fc(s, Symbol.toStringTag);
                }
                dc[`\$${t}`] = ix(n.get);
            }
        });
    } else {
        hc(sh, (t)=>{
            const e = new sx[t];
            const r = e.slice || e.set;
            if (r) {
                dc[`\$${t}`] = ix(r);
            }
        });
    }
    var sB = a((e)=>{
        let r = false;
        hc(dc, (n, s)=>{
            if (!r) {
                try {
                    if (`\$${n(e)}` === s) {
                        r = ah(s, 1);
                    }
                } catch  {}
            }
        });
        return r;
    }, "tryAllTypedArrays");
    var oB = a((e)=>{
        let r = false;
        hc(dc, (n, s)=>{
            if (!r) {
                try {
                    n(e);
                    r = ah(s, 1);
                } catch  {}
            }
        });
        return r;
    }, "tryAllSlices");
    ax.exports = a((e)=>{
        if (!e || typeof e !== "object") {
            return false;
        }
        if (!ox) {
            const r = ah(nB(e), 8, -1);
            if (iB(sh, r) > -1) {
                return r;
            }
            if (r !== "Object") {
                return false;
            }
            return oB(e);
        }
        if (fc) {
            return sB(e);
        }
        return null;
    }, "whichTypedArray");
});
const fx = c((hK, lx)=>{
    "use strict";
    var aB = Ke();
    var ux = aB("ArrayBuffer.prototype.byteLength", true);
    var cB = zf();
    lx.exports = a((e)=>{
        if (cB(e)) {
            if (ux) {
                return ux(e);
            }
            return e.byteLength;
        }
        return NaN;
    }, "byteLength");
});
export const lh = c((pK, Dx)=>{
    "use strict";
    var Rx = Pw();
    var It = sf();
    var hx = $w();
    var uB = Ft();
    var ei = Yv();
    var lB = _f();
    var dx = tS();
    var px = uf();
    var mx = nS();
    var gx = zf();
    var yx = lS();
    var bx = Vf();
    var wx = bS();
    var vx = Aa();
    var Sx = BS();
    var xx = YS();
    var _x = cx();
    var Cx = fx();
    var Px = It("SharedArrayBuffer.prototype.byteLength", true);
    var kx = It("Date.prototype.getTime");
    var Object_getPrototypeOf = Object.getPrototypeOf;
    var Ex = It("Object.prototype.toString");
    var mc = uB("%Set%", true);
    var uh = It("Map.prototype.has", true);
    var gc = It("Map.prototype.get", true);
    var Ax = It("Map.prototype.size", true);
    var yc = It("Set.prototype.add", true);
    var Mx = It("Set.prototype.delete", true);
    var bc = It("Set.prototype.has", true);
    var pc = It("Set.prototype.size", true);
    function Ox(t, e, r, n) {
        for(let s = ei(t), o; (o = s.next()) && !o.done;){
            if (At(e, o.value, r, n)) {
                Mx(t, o.value);
                return true;
            }
        }
        return false;
    }
    a(Ox, "setHasEqualElement");
    function Fx(t) {
        if (typeof t === "undefined") {
            return null;
        }
        if (typeof t !== "object") {
            if (typeof t === "symbol") {
                return false;
            }
            if (typeof t === "string" || typeof t === "number") {
                return +t == +t;
            }
            return true;
        }
    }
    a(Fx, "findLooseMatchingPrimitives");
    function fB(t, e, r, n, s, o) {
        const f = Fx(r);
        if (f != null) {
            return f;
        }
        const c = gc(e, f);
        const u = Rx({}, s, {
            strict: false
        });
        if (typeof c === "undefined" && !uh(e, f) || !At(n, c, u, o)) {
            return false;
        }
        return !uh(t, f) && At(n, c, u, o);
    }
    a(fB, "mapMightHaveLoosePrim");
    function hB(t, e, r) {
        const n = Fx(r);
        return n ?? (bc(e, n) && !bc(t, n));
    }
    a(hB, "setMightHaveLoosePrim");
    function Lx(t, e, r, n, s, o) {
        let u;
        for(let f = ei(t), c; (c = f.next()) && !c.done;){
            u = c.value;
            if (At(r, u, s, o) && At(n, gc(e, u), s, o)) {
                Mx(t, u);
                return true;
            }
        }
        return false;
    }
    a(Lx, "mapHasEqualEntry");
    function At(t, e, r, n) {
        const s = r || {};
        if (s.strict ? dx(t, e) : t === e) {
            return true;
        }
        const o = Sx(t);
        const f = Sx(e);
        if (o !== f) {
            return false;
        }
        if (!t || !e || typeof t !== "object" && typeof e !== "object") {
            if (s.strict) {
                return dx(t, e);
            }
            return t == e;
        }
        const c = n.has(t);
        const u = n.has(e);
        let d;
        if (c && u) {
            if (n.get(t) === n.get(e)) {
                return true;
            }
        } else {
            d = {};
        }
        if (!c) {
            n.set(t, d);
        }
        if (!u) {
            n.set(e, d);
        }
        return mB(t, e, s, n);
    }
    a(At, "internalDeepEqual");
    function Tx(t) {
        if (!t || typeof t !== "object" || typeof t.length !== "number" || typeof t.copy !== "function" || typeof t.slice !== "function" || t.length > 0 && typeof t[0] !== "number") {
            return false;
        }
        return !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
    }
    a(Tx, "isBuffer");
    function dB(t, e, r, n) {
        if (pc(t) !== pc(e)) {
            return false;
        }
        let c;
        let u;
        for(var s = ei(t), o = ei(e), f; (f = s.next()) && !f.done;){
            if (f.value && typeof f.value === "object") {
                if (!u) {
                    u = new mc;
                }
                yc(u, f.value);
            } else if (!bc(e, f.value)) {
                if (r.strict || !hB(t, e, f.value)) {
                    return false;
                }
                if (!u) {
                    u = new mc;
                }
                yc(u, f.value);
            }
        }
        if (u) {
            while((c = o.next()) && !c.done){
                if (c.value && typeof c.value === "object") {
                    if (!Ox(u, c.value, r.strict, n)) {
                        return false;
                    }
                } else if (!r.strict && !bc(t, c.value) && !Ox(u, c.value, r.strict, n)) {
                    return false;
                }
            }
            return pc(u) === 0;
        }
        return true;
    }
    a(dB, "setEquiv");
    function pB(t, e, r, n) {
        if (Ax(t) !== Ax(e)) {
            return false;
        }
        let c;
        let u;
        let d;
        let b;
        let y;
        for(var s = ei(t), o = ei(e), f; (f = s.next()) && !f.done;){
            d = f.value[0];
            b = f.value[1];
            if (d && typeof d === "object") {
                if (!u) {
                    u = new mc;
                }
                yc(u, d);
            } else {
                y = gc(e, d);
                if (typeof y === "undefined" && !uh(e, d) || !At(b, y, r, n)) {
                    if (r.strict || !fB(t, e, d, b, r, n)) {
                        return false;
                    }
                    if (!u) {
                        u = new mc;
                    }
                    yc(u, d);
                }
            }
        }
        if (u) {
            while((c = o.next()) && !c.done){
                d = c.value[0];
                y = c.value[1];
                if (d && typeof d === "object") {
                    if (!Lx(u, t, d, y, r, n)) {
                        return false;
                    }
                } else if (!r.strict && (!t.has(d) || !At(gc(t, d), y, r, n)) && !Lx(u, t, d, y, Rx({}, r, {
                    strict: false
                }), n)) {
                    return false;
                }
            }
            return pc(u) === 0;
        }
        return true;
    }
    a(pB, "mapEquiv");
    function mB(t, e, r, n) {
        let s;
        let o;
        if (typeof t != typeof e || t == null || e == null || Ex(t) !== Ex(e) || px(t) !== px(e)) {
            return false;
        }
        const f = mx(t);
        const c = mx(e);
        if (f !== c) {
            return false;
        }
        const u = t instanceof Error;
        const d = e instanceof Error;
        if (u !== d || (u || d) && (t.name !== e.name || t.message !== e.message)) {
            return false;
        }
        const b = bx(t);
        const y = bx(e);
        if (b !== y || (b || y) && (t.source !== e.source || hx(t) !== hx(e))) {
            return false;
        }
        const w = yx(t);
        const _ = yx(e);
        if (w !== _ || (w || _) && kx(t) !== kx(e) || r.strict && Object_getPrototypeOf && Object_getPrototypeOf(t) !== Object_getPrototypeOf(e)) {
            return false;
        }
        const A = _x(t);
        const F = _x(e);
        if (A !== F) {
            return false;
        }
        if (A || F) {
            if (t.length !== e.length) {
                return false;
            }
            for(s = 0; s < t.length; s++){
                if (t[s] !== e[s]) {
                    return false;
                }
            }
            return true;
        }
        const Y = Tx(t);
        const T = Tx(e);
        if (Y !== T) {
            return false;
        }
        if (Y || T) {
            if (t.length !== e.length) {
                return false;
            }
            for(s = 0; s < t.length; s++){
                if (t[s] !== e[s]) {
                    return false;
                }
            }
            return true;
        }
        const j = gx(t);
        const J = gx(e);
        if (j !== J) {
            return false;
        }
        if (j || J) {
            if (Cx(t) !== Cx(e)) {
                return false;
            }
            return typeof Uint8Array === "function" && At(new Uint8Array(t), new Uint8Array(e), r, n);
        }
        const W = wx(t);
        const ae = wx(e);
        if (W !== ae) {
            return false;
        }
        if (W || ae) {
            if (Px(t) !== Px(e)) {
                return false;
            }
            return typeof Uint8Array === "function" && At(new Uint8Array(t), new Uint8Array(e), r, n);
        }
        if (typeof t != typeof e) {
            return false;
        }
        const te = vx(t);
        const X = vx(e);
        if (te.length !== X.length) {
            return false;
        }
        te.sort();
        X.sort();
        for(s = te.length - 1; s >= 0; s--){
            if (te[s] != X[s]) {
                return false;
            }
        }
        for(s = te.length - 1; s >= 0; s--){
            o = te[s];
            if (!At(t[o], e[o], r, n)) {
                return false;
            }
        }
        const ne = xx(t);
        const ee = xx(e);
        if (ne !== ee) {
            return false;
        }
        if (ne === "Set" || ee === "Set") {
            return dB(t, e, r, n);
        }
        if (ne === "Map") {
            return pB(t, e, r, n);
        }
        return true;
    }
    a(mB, "objEquiv");
    Dx.exports = a((e, r, n)=>At(e, r, n, lB()), "deepEqual");
});

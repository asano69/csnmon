import { a, c } from "../chunk-FXCI2R73.js";
import { La } from "./chunk_Fs.js";
import { ht } from "./chunk_ht.js";
import { Ft, Ke, Ua } from "./chunk_jb.js";
import { Ws } from "./chunk_Yw.js";
const pv = c((e7, dv)=>{
    "use strict";
    var cj = Ws();
    var uj = ht();
    var Ka = a((t, e, r)=>{
        for(let n = t, s; (s = n.next) != null; n = s){
            if (s.key === e) {
                n.next = s.next;
                if (!r) {
                    s.next = t.next;
                    t.next = s;
                }
                return s;
            }
        }
    }, "listGetNode");
    var lj = a((t, e)=>{
        if (t) {
            const r = Ka(t, e);
            return r && r.value;
        }
    }, "listGet");
    var fj = a((t, e, r)=>{
        const n = Ka(t, e);
        if (n) {
            n.value = r;
        } else {
            t.next = {
                key: e,
                next: t.next,
                value: r
            };
        }
    }, "listSet");
    var hj = a((t, e)=>{
        if (t) {
            return !!Ka(t, e);
        }
        return false;
    }, "listHas");
    var dj = a((t, e)=>{
        if (t) {
            return Ka(t, e, true);
        }
    }, "listDelete");
    dv.exports = a(()=>{
        let e;
        var r = {
            assert: a((n)=>{
                if (!r.has(n)) {
                    throw new uj(`Side channel does not contain ${cj(n)}`);
                }
            }, "assert"),
            delete: a((n)=>{
                const s = dj(e, n);
                if (s && e && !e.next) {
                    e = undefined;
                }
                return !!s;
            }, "delete"),
            get: a((n)=>lj(e, n), "get"),
            has: a((n)=>hj(e, n), "has"),
            set: a((n, s)=>{
                if (!e) {
                    e = {
                        next: undefined
                    };
                }
                fj(e, n, s);
            }, "set")
        };
        return r;
    }, "getSideChannelList");
});
const xf = c((r7, gv)=>{
    "use strict";
    var pj = Ft();
    var Ys = Ke();
    var mj = Ws();
    var gj = ht();
    var mv = pj("%Map%", true);
    var yj = Ys("Map.prototype.get", true);
    var bj = Ys("Map.prototype.set", true);
    var wj = Ys("Map.prototype.has", true);
    var vj = Ys("Map.prototype.delete", true);
    var Sj = Ys("Map.prototype.size", true);
    gv.exports = !!mv && a(()=>{
        let e;
        var r = {
            assert: a((n)=>{
                if (!r.has(n)) {
                    throw new gj(`Side channel does not contain ${mj(n)}`);
                }
            }, "assert"),
            delete: a((n)=>{
                if (e) {
                    const s = vj(e, n);
                    if (Sj(e) === 0) {
                        e = undefined;
                    }
                    return s;
                }
                return false;
            }, "delete"),
            get: a((n)=>{
                if (e) {
                    return yj(e, n);
                }
            }, "get"),
            has: a((n)=>{
                if (e) {
                    return wj(e, n);
                }
                return false;
            }, "has"),
            set: a((n, s)=>{
                if (!e) {
                    e = new mv;
                }
                bj(e, n, s);
            }, "set")
        };
        return r;
    }, "getSideChannelMap");
});
const bv = c((i7, yv)=>{
    "use strict";
    var xj = Ft();
    var Qa = Ke();
    var _j = Ws();
    var Ja = xf();
    var Cj = ht();
    var Zn = xj("%WeakMap%", true);
    var Pj = Qa("WeakMap.prototype.get", true);
    var kj = Qa("WeakMap.prototype.set", true);
    var Ej = Qa("WeakMap.prototype.has", true);
    var Aj = Qa("WeakMap.prototype.delete", true);
    yv.exports = Zn ? a(()=>{
        let e;
        let r;
        var n = {
            assert: a((s)=>{
                if (!n.has(s)) {
                    throw new Cj(`Side channel does not contain ${_j(s)}`);
                }
            }, "assert"),
            delete: a((s)=>{
                if (Zn && s && (typeof s === "object" || typeof s === "function")) {
                    if (e) {
                        return Aj(e, s);
                    }
                } else if (Ja && r) {
                    return r.delete(s);
                }
                return false;
            }, "delete"),
            get: a((s)=>{
                if (Zn && s && (typeof s === "object" || typeof s === "function") && e) {
                    return Pj(e, s);
                }
                return r && r.get(s);
            }, "get"),
            has: a((s)=>{
                if (Zn && s && (typeof s === "object" || typeof s === "function") && e) {
                    return Ej(e, s);
                }
                return !!r && r.has(s);
            }, "has"),
            set: a((s, o)=>{
                if (Zn && s && (typeof s === "object" || typeof s === "function")) {
                    if (!e) {
                        e = new Zn;
                    }
                    kj(e, s, o);
                } else if (Ja) {
                    if (!r) {
                        r = Ja();
                    }
                    r.set(s, o);
                }
            }, "set")
        };
        return n;
    }, "getSideChannelWeakMap") : Ja;
});
export const _f = c((o7, wv)=>{
    "use strict";
    var Oj = ht();
    var Lj = Ws();
    var Tj = pv();
    var Rj = xf();
    var Mj = bv();
    var Fj = Mj || Rj || Tj;
    wv.exports = a(()=>{
        let e;
        var r = {
            assert: a((n)=>{
                if (!r.has(n)) {
                    const s = n && Object(n) === n ? "the given object key" : Lj(n);
                    throw new Oj(`Side channel does not contain ${s}`);
                }
            }, "assert"),
            delete: a((n)=>!!e && e.delete(n), "delete"),
            get: a((n)=>e && e.get(n), "get"),
            has: a((n)=>!!e && e.has(n), "has"),
            set: a((n, s)=>{
                if (!e) {
                    e = Fj();
                }
                e.set(n, s);
            }, "set")
        };
        return r;
    }, "getSideChannel");
});
const Sv = c((c7, vv)=>{
    "use strict";
    var Dj = Ua();
    var Vs = _f()();
    var Qt = ht();
    var Cf = {
        assert: a((t, e)=>{
            if (!t || typeof t !== "object" && typeof t !== "function") {
                throw new Qt("`O` is not an object");
            }
            if (typeof e !== "string") {
                throw new Qt("`slot` must be a string");
            }
            Vs.assert(t);
            if (!Cf.has(t, e)) {
                throw new Qt(`\`${e}\` is not present on \`O\``);
            }
        }, "assert"),
        get: a((t, e)=>{
            if (!t || typeof t !== "object" && typeof t !== "function") {
                throw new Qt("`O` is not an object");
            }
            if (typeof e !== "string") {
                throw new Qt("`slot` must be a string");
            }
            const r = Vs.get(t);
            return r && r[`\$${e}`];
        }, "get"),
        has: a((t, e)=>{
            if (!t || typeof t !== "object" && typeof t !== "function") {
                throw new Qt("`O` is not an object");
            }
            if (typeof e !== "string") {
                throw new Qt("`slot` must be a string");
            }
            const r = Vs.get(t);
            return !!r && Dj(r, `\$${e}`);
        }, "has"),
        set: a((t, e, r)=>{
            if (!t || typeof t !== "object" && typeof t !== "function") {
                throw new Qt("`O` is not an object");
            }
            if (typeof e !== "string") {
                throw new Qt("`slot` must be a string");
            }
            let n = Vs.get(t);
            if (!n) {
                n = {};
                Vs.set(t, n);
            }
            n[`\$${e}`] = r;
        }, "set")
    };
    if (Object.freeze) {
        Object.freeze(Cf);
    }
    vv.exports = Cf;
});
export const Cv = c((l7, _v)=>{
    "use strict";
    var Gs = Sv();
    var Ij = La();
    var xv = typeof StopIteration === "object" ? StopIteration : null;
    _v.exports = a((e)=>{
        if (!xv) {
            throw new Ij("this environment lacks StopIteration");
        }
        Gs.set(e, "[[Done]]", false);
        const r = {
            next: a(function() {
                const s = Gs.get(this, "[[Iterator]]");
                const done = !!Gs.get(s, "[[Done]]");
                try {
                    return {
                        done,
                        value: done ? undefined : s.next()
                    };
                } catch (error) {
                    Gs.set(s, "[[Done]]", true);
                    if (error !== xv) {
                        throw error;
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            }, "next")
        };
        Gs.set(r, "[[Iterator]]", e);
        return r;
    }, "getStopIterationIterator");
});

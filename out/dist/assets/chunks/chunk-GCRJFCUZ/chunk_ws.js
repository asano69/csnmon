import { a, c, e } from "../chunk-FXCI2R73.js";
export const ws = c((LW, bl)=>{
    "use strict";
    var mn = typeof Reflect === "object" ? Reflect : null;
    var Pg = mn && typeof mn.apply === "function" ? mn.apply : a((e, r, n)=>Function.prototype.apply.call(e, r, n), "ReflectApply");
    var Go;
    if (mn && typeof mn.ownKeys === "function") {
        Go = mn.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
        Go = a((e)=>Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)), "ReflectOwnKeys");
    } else {
        Go = a((e)=>Object.getOwnPropertyNames(e), "ReflectOwnKeys");
    }
    function yR(t) {
        if (console && console.warn) {
            console.warn(t);
        }
    }
    a(yR, "ProcessEmitWarning");
    var Eg = Number.isNaN || a((e)=>e !== e, "NumberIsNaN");
    function Te() {
        Te.init.call(this);
    }
    a(Te, "EventEmitter");
    bl.exports = Te;
    bl.exports.once = SR;
    Te.EventEmitter = Te;
    Te.prototype._events = undefined;
    Te.prototype._eventsCount = 0;
    Te.prototype._maxListeners = undefined;
    var kg = 10;
    function Ko(t) {
        if (typeof t !== "function") {
            throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof t}`);
        }
    }
    a(Ko, "checkListener");
    Object.defineProperty(Te, "defaultMaxListeners", {
        enumerable: true,
        get: a(()=>kg, "get"),
        set: a((t)=>{
            if (typeof t !== "number" || t < 0 || Eg(t)) {
                throw new RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ${t}.`);
            }
            kg = t;
        }, "set")
    });
    Te.init = function() {
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || undefined;
    };
    Te.prototype.setMaxListeners = a(function(e) {
        if (typeof e !== "number" || e < 0 || Eg(e)) {
            throw new RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ${e}.`);
        }
        this._maxListeners = e;
        return this;
    }, "setMaxListeners");
    function Ag(t) {
        if (t._maxListeners === undefined) {
            return Te.defaultMaxListeners;
        }
        return t._maxListeners;
    }
    a(Ag, "_getMaxListeners");
    Te.prototype.getMaxListeners = a(function() {
        return Ag(this);
    }, "getMaxListeners");
    Te.prototype.emit = a(function(e) {
        const r = [];
        for(var n = 1; n < arguments.length; n++){
            r.push(arguments[n]);
        }
        let s = e === "error";
        const _events = this._events;
        if (_events !== undefined) {
            s = s && _events.error === undefined;
        } else if (!s) {
            return false;
        }
        if (s) {
            let f;
            if (r.length > 0) {
                f = r[0];
            }
            if (f instanceof Error) {
                throw f;
            }
            const c = new Error(`Unhandled error.${f ? ` (${f.message})` : ""}`);
            c.context = f;
            throw c;
        }
        const u = _events[e];
        if (u === undefined) {
            return false;
        }
        if (typeof u === "function") {
            Pg(u, this, r);
        } else {
            for(var d = u.length, b = Mg(u, d), n = 0; n < d; ++n){
                Pg(b[n], this, r);
            }
        }
        return true;
    }, "emit");
    function Og(t, e, r, n) {
        let s;
        let o;
        let f;
        Ko(r);
        o = t._events;
        if (o === undefined) {
            o = t._events = Object.create(null);
            t._eventsCount = 0;
        } else {
            if (o.newListener !== undefined) {
                t.emit("newListener", e, r.listener ? r.listener : r);
                o = t._events;
            }
            f = o[e];
        }
        if (f === undefined) {
            f = o[e] = r;
            ++t._eventsCount;
        } else {
            if (typeof f === "function") {
                f = o[e] = n ? [
                    r,
                    f
                ] : [
                    f,
                    r
                ];
            } else if (n) {
                f.unshift(r);
            } else {
                f.push(r);
            }
            s = Ag(t);
            if (s > 0 && f.length > s && !f.warned) {
                f.warned = true;
                const c = new Error(`Possible EventEmitter memory leak detected. ${f.length} ${String(e)} listeners added. Use emitter.setMaxListeners() to increase limit`);
                c.name = "MaxListenersExceededWarning";
                c.emitter = t;
                c.type = e;
                c.count = f.length;
                yR(c);
            }
        }
        return t;
    }
    a(Og, "_addListener");
    Te.prototype.addListener = a(function(e, r) {
        return Og(this, e, r, false);
    }, "addListener");
    Te.prototype.on = Te.prototype.addListener;
    Te.prototype.prependListener = a(function(e, r) {
        return Og(this, e, r, true);
    }, "prependListener");
    function bR() {
        if (!this.fired) {
            this.target.removeListener(this.type, this.wrapFn);
            this.fired = true;
            if (arguments.length === 0) {
                return this.listener.call(this.target);
            }
            return this.listener.apply(this.target, arguments);
        }
    }
    a(bR, "onceWrapper");
    function Lg(target, type, listener) {
        const n = {
            fired: false,
            wrapFn: undefined,
            target,
            type,
            listener
        };
        const s = bR.bind(n);
        s.listener = listener;
        n.wrapFn = s;
        return s;
    }
    a(Lg, "_onceWrap");
    Te.prototype.once = a(function(e, r) {
        Ko(r);
        this.on(e, Lg(this, e, r));
        return this;
    }, "once");
    Te.prototype.prependOnceListener = a(function(e, r) {
        Ko(r);
        this.prependListener(e, Lg(this, e, r));
        return this;
    }, "prependOnceListener");
    Te.prototype.removeListener = a(function(e, r) {
        let n;
        let s;
        let o;
        let f;
        let c;
        Ko(r);
        s = this._events;
        if (s === undefined) {
            return this;
        }
        n = s[e];
        if (n === undefined) {
            return this;
        }
        if (n === r || n.listener === r) {
            if (--this._eventsCount === 0) {
                this._events = Object.create(null);
            } else {
                delete s[e];
                if (s.removeListener) {
                    this.emit("removeListener", e, n.listener || r);
                }
            }
        } else if (typeof n !== "function") {
            o = -1;
            for(f = n.length - 1; f >= 0; f--){
                if (n[f] === r || n[f].listener === r) {
                    c = n[f].listener;
                    o = f;
                    break;
                }
            }
            if (o < 0) {
                return this;
            }
            if (o === 0) {
                n.shift();
            } else {
                wR(n, o);
            }
            if (n.length === 1) {
                s[e] = n[0];
            }
            if (s.removeListener !== undefined) {
                this.emit("removeListener", e, c || r);
            }
        }
        return this;
    }, "removeListener");
    Te.prototype.off = Te.prototype.removeListener;
    Te.prototype.removeAllListeners = a(function(e) {
        let r;
        let n;
        let s;
        n = this._events;
        if (n === undefined) {
            return this;
        }
        if (n.removeListener === undefined) {
            if (arguments.length === 0) {
                this._events = Object.create(null);
                this._eventsCount = 0;
            } else {
                n[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]);
            }
            return this;
        }
        if (arguments.length === 0) {
            const o = Object.keys(n);
            let f;
            for(s = 0; s < o.length; ++s){
                f = o[s];
                if (f !== "removeListener") {
                    this.removeAllListeners(f);
                }
            }
            this.removeAllListeners("removeListener");
            this._events = Object.create(null);
            this._eventsCount = 0;
            return this;
        }
        r = n[e];
        if (typeof r === "function") {
            this.removeListener(e, r);
        } else if (r !== undefined) {
            for(s = r.length - 1; s >= 0; s--){
                this.removeListener(e, r[s]);
            }
        }
        return this;
    }, "removeAllListeners");
    function Tg({ _events }, e, r) {
        if (_events === undefined) {
            return [];
        }
        const s = _events[e];
        if (s === undefined) {
            return [];
        }
        if (typeof s === "function") {
            if (r) {
                return [
                    s.listener || s
                ];
            }
            return [
                s
            ];
        }
        if (r) {
            return vR(s);
        }
        return Mg(s, s.length);
    }
    a(Tg, "_listeners");
    Te.prototype.listeners = a(function(e) {
        return Tg(this, e, true);
    }, "listeners");
    Te.prototype.rawListeners = a(function(e) {
        return Tg(this, e, false);
    }, "rawListeners");
    Te.listenerCount = (t, e)=>{
        if (typeof t.listenerCount === "function") {
            return t.listenerCount(e);
        }
        return Rg.call(t, e);
    };
    Te.prototype.listenerCount = Rg;
    function Rg(t) {
        const _events = this._events;
        if (_events !== undefined) {
            const r = _events[t];
            if (typeof r === "function") {
                return 1;
            }
            if (r !== undefined) {
                return r.length;
            }
        }
        return 0;
    }
    a(Rg, "listenerCount");
    Te.prototype.eventNames = a(function() {
        if (this._eventsCount > 0) {
            return Go(this._events);
        }
        return [];
    }, "eventNames");
    function Mg(t, e) {
        const r = new Array(e);
        for(let n = 0; n < e; ++n){
            r[n] = t[n];
        }
        return r;
    }
    a(Mg, "arrayClone");
    function wR(t, e) {
        for(; e + 1 < t.length; e++){
            t[e] = t[e + 1];
        }
        t.pop();
    }
    a(wR, "spliceOne");
    function vR(t) {
        for(var e = new Array(t.length), r = 0; r < e.length; ++r){
            e[r] = t[r].listener || t[r];
        }
        return e;
    }
    a(vR, "unwrapListeners");
    function SR(t, e) {
        return new Promise((resolve, reject)=>{
            function s(f) {
                t.removeListener(e, o);
                reject(f);
            }
            a(s, "errorListener");
            function o() {
                if (typeof t.removeListener === "function") {
                    t.removeListener("error", s);
                }
                resolve([].slice.call(arguments));
            }
            a(o, "resolver");
            Fg(t, e, o, {
                once: true
            });
            if (e !== "error") {
                xR(t, s, {
                    once: true
                });
            }
        });
    }
    a(SR, "once");
    function xR(t, e, r) {
        if (typeof t.on === "function") {
            Fg(t, "error", e, r);
        }
    }
    a(xR, "addErrorHandlerIfEventEmitter");
    function Fg(t, e, r, n) {
        if (typeof t.on === "function") {
            if (n.once) {
                t.once(e, r);
            } else {
                t.on(e, r);
            }
        } else if (typeof t.addEventListener === "function") {
            t.addEventListener(e, a(function s(o) {
                if (n.once) {
                    t.removeEventListener(e, s);
                }
                r(o);
            }, "wrapListener"));
        } else {
            throw new TypeError(`The "emitter" argument must be of type EventEmitter. Received type ${typeof t}`);
        }
    }
    a(Fg, "eventTargetAgnosticAddListener");
});
export const Dg = e(ws(), 1);

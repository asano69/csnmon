import { a, c } from "../chunk-FXCI2R73.js";
const tx = c((aK, ex)=>{
    "use strict";
    ex.exports = [
        "Float16Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array"
    ];
});
export const nx = c((cK, rx)=>{
    "use strict";
    var ih = tx();
    var tB = typeof globalThis === "undefined" ? global : globalThis;
    rx.exports = a(()=>{
        const e = [];
        for(let r = 0; r < ih.length; r++){
            if (typeof tB[ih[r]] === "function") {
                e[e.length] = ih[r];
            }
        }
        return e;
    }, "availableTypedArrays");
});
export const MC = c((Are, RC)=>{
    RC.exports = function() {
        "use strict";
        function t() {
            this.readers = 0;
            this.queue = [];
        }
        a(t, "a");
        function e(o, f, c) {
            let u;
            if (typeof o !== "function") {
                if (!s.hasOwnProperty(o)) {
                    s[o] = new t;
                }
                u = s[o];
            } else {
                c = f;
                f = o;
                u = n;
            }
            if (!c) {
                c = {};
            }
            let d = null;
            if (c.hasOwnProperty("scope")) {
                d = c.scope;
            }
            const b = (()=>{
                let _ = false;
                return ()=>{
                    if (!_) {
                        _ = true;
                        u.readers--;
                        if (u.queue.length) {
                            u.queue[0]();
                        }
                    }
                };
            })();
            if (u.readers < 0 || u.queue.length) {
                let y = false;
                u.queue.push(()=>{
                    if (!y && u.readers >= 0) {
                        y = true;
                        u.queue.shift();
                        u.readers++;
                        f.call(d, b);
                        if (u.queue.length) {
                            u.queue[0]();
                        }
                    }
                });
                if (c.hasOwnProperty("timeout")) {
                    let w = null;
                    if (c.hasOwnProperty("timeoutCallback")) {
                        w = c.timeoutCallback;
                    }
                    setTimeout(()=>{
                        if (!y) {
                            y = true;
                            u.queue.shift();
                            if (w) {
                                w.call(c.scope);
                            }
                        }
                    }, c.timeout);
                }
            } else {
                u.readers++;
                f.call(c.scope, b);
            }
        }
        a(e, "b");
        function r(o, f, c) {
            let u;
            if (typeof o !== "function") {
                if (!s.hasOwnProperty(o)) {
                    s[o] = new t;
                }
                u = s[o];
            } else {
                c = f;
                f = o;
                u = n;
            }
            if (!c) {
                c = {};
            }
            let d = null;
            if (c.hasOwnProperty("scope")) {
                d = c.scope;
            }
            const b = (()=>{
                let _ = false;
                return ()=>{
                    if (!_) {
                        _ = true;
                        u.readers = 0;
                        if (u.queue.length) {
                            u.queue[0]();
                        }
                    }
                };
            })();
            if (u.readers || u.queue.length) {
                let y = false;
                u.queue.push(()=>{
                    if (!(y || u.readers)) {
                        y = true;
                        u.queue.shift();
                        u.readers = -1;
                        f.call(c.scope, b);
                    }
                });
                if (c.hasOwnProperty("timeout")) {
                    let w = null;
                    if (c.hasOwnProperty("timeoutCallback")) {
                        w = c.timeoutCallback;
                    }
                    setTimeout(()=>{
                        if (!y) {
                            y = true;
                            u.queue.shift();
                            if (w) {
                                w.call(d);
                            }
                        }
                    }, c.timeout);
                }
            } else {
                u.readers = -1;
                f.call(c.scope, b);
            }
        }
        a(r, "c");
        var n = new t;
        var s = {};
        this.readLock = e;
        this.writeLock = r;
        this.async = {
            readLock: a((o, f, c)=>{
                if (typeof o !== "function") {
                    e(o, function(u) {
                        f.call(this, null, u);
                    }, c);
                } else {
                    f = o;
                    c = f;
                    e(function(u) {
                        f.call(this, null, u);
                    }, c);
                }
            }, "readLock"),
            writeLock: a((o, f, c)=>{
                if (typeof o !== "function") {
                    r(o, function(u) {
                        f.call(this, null, u);
                    }, c);
                } else {
                    f = o;
                    c = f;
                    r(function(u) {
                        f.call(this, null, u);
                    }, c);
                }
            }, "writeLock")
        };
    };
});

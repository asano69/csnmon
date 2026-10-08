import { a, c, e } from "../chunk-FXCI2R73.js";
const lm = c((Oq, um)=>{
    var rn = 1000;
    var nn = rn * 60;
    var sn = nn * 60;
    var Dr = sn * 24;
    var VO = Dr * 7;
    var GO = Dr * 365.25;
    um.exports = (t, e)=>{
        e = e || {};
        const r = typeof t;
        if (r === "string" && t.length > 0) {
            return KO(t);
        }
        if (r === "number" && isFinite(t)) {
            if (e.long) {
                return QO(t);
            }
            return JO(t);
        }
        throw new Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(t)}`);
    };
    function KO(t) {
        t = String(t);
        if (!(t.length > 100)) {
            const e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                const r = parseFloat(e[1]);
                const n = (e[2] || "ms").toLowerCase();
                switch(n){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * GO;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * VO;
                    case "days":
                    case "day":
                    case "d":
                        return r * Dr;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * sn;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * nn;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * rn;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return;
                }
            }
        }
    }
    a(KO, "parse");
    function JO(t) {
        const e = Math.abs(t);
        if (e >= Dr) {
            return `${Math.round(t / Dr)}d`;
        }
        if (e >= sn) {
            return `${Math.round(t / sn)}h`;
        }
        if (e >= nn) {
            return `${Math.round(t / nn)}m`;
        }
        if (e >= rn) {
            return `${Math.round(t / rn)}s`;
        }
        return `${t}ms`;
    }
    a(JO, "fmtShort");
    function QO(t) {
        const e = Math.abs(t);
        if (e >= Dr) {
            return Oo(t, e, Dr, "day");
        }
        if (e >= sn) {
            return Oo(t, e, sn, "hour");
        }
        if (e >= nn) {
            return Oo(t, e, nn, "minute");
        }
        if (e >= rn) {
            return Oo(t, e, rn, "second");
        }
        return `${t} ms`;
    }
    a(QO, "fmtLong");
    function Oo(t, e, r, n) {
        const s = e >= r * 1.5;
        return `${Math.round(t / r)} ${n}${s ? "s" : ""}`;
    }
    a(Oo, "plural");
});
const hm = c((Tq, fm)=>{
    function ZO(t) {
        r.debug = r;
        r.default = r;
        r.coerce = u;
        r.disable = f;
        r.enable = s;
        r.enabled = c;
        r.humanize = lm();
        r.destroy = d;
        Object.keys(t).forEach((b)=>{
            r[b] = t[b];
        });
        r.names = [];
        r.skips = [];
        r.formatters = {};
        function e(b) {
            let y = 0;
            for(let w = 0; w < b.length; w++){
                y = (y << 5) - y + b.charCodeAt(w);
                y |= 0;
            }
            return r.colors[Math.abs(y) % r.colors.length];
        }
        a(e, "selectColor");
        r.selectColor = e;
        function r(b) {
            let y;
            let w = null;
            let _;
            let A;
            function F(...Y) {
                if (!F.enabled) {
                    return;
                }
                let T = F;
                let j = Number(new Date);
                let J = j - (y || j);
                T.diff = J;
                T.prev = y;
                T.curr = j;
                y = j;
                Y[0] = r.coerce(Y[0]);
                if (typeof Y[0] !== "string") {
                    Y.unshift("%O");
                }
                let W = 0;
                Y[0] = Y[0].replace(/%([a-zA-Z%])/g, (te, X)=>{
                    if (te === "%%") {
                        return "%";
                    }
                    W++;
                    let ne = r.formatters[X];
                    if (typeof ne === "function") {
                        let ee = Y[W];
                        te = ne.call(T, ee);
                        Y.splice(W, 1);
                        W--;
                    }
                    return te;
                });
                r.formatArgs.call(T, Y);
                (T.log || r.log).apply(T, Y);
            }
            a(F, "debug");
            F.namespace = b;
            F.useColors = r.useColors();
            F.color = r.selectColor(b);
            F.extend = n;
            F.destroy = r.destroy;
            Object.defineProperty(F, "enabled", {
                enumerable: true,
                configurable: false,
                get: a(()=>{
                    if (w !== null) {
                        return w;
                    }
                    if (_ !== r.namespaces) {
                        _ = r.namespaces;
                        A = r.enabled(b);
                    }
                    return A;
                }, "get"),
                set: a((Y)=>{
                    w = Y;
                }, "set")
            });
            if (typeof r.init === "function") {
                r.init(F);
            }
            return F;
        }
        a(r, "createDebug");
        function n(b, y) {
            let w = r(this.namespace + (typeof y === "undefined" ? ":" : y) + b);
            w.log = this.log;
            return w;
        }
        a(n, "extend");
        function s(b) {
            r.save(b);
            r.namespaces = b;
            r.names = [];
            r.skips = [];
            let y = (typeof b === "string" ? b : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (let w of y){
                if (w[0] === "-") {
                    r.skips.push(w.slice(1));
                } else {
                    r.names.push(w);
                }
            }
        }
        a(s, "enable");
        function o(b, y) {
            let w = 0;
            let _ = 0;
            let A = -1;
            let F = 0;
            while(w < b.length){
                if (_ < y.length && (y[_] === b[w] || y[_] === "*")) {
                    if (y[_] === "*") {
                        A = _;
                        F = w;
                        _++;
                    } else {
                        w++;
                        _++;
                    }
                } else if (A !== -1) {
                    _ = A + 1;
                    F++;
                    w = F;
                } else {
                    return false;
                }
            }
            while(_ < y.length && y[_] === "*"){
                _++;
            }
            return _ === y.length;
        }
        a(o, "matchesTemplate");
        function f() {
            let b = [
                ...r.names,
                ...r.skips.map((y)=>`-${y}`)
            ].join(",");
            r.enable("");
            return b;
        }
        a(f, "disable");
        function c(b) {
            for (let y of r.skips){
                if (o(b, y)) {
                    return false;
                }
            }
            for (let y of r.names){
                if (o(b, y)) {
                    return true;
                }
            }
            return false;
        }
        a(c, "enabled");
        function u(b) {
            if (b instanceof Error) {
                return b.stack || b.message;
            }
            return b;
        }
        a(u, "coerce");
        function d() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        a(d, "destroy");
        r.enable(r.load());
        return r;
    }
    a(ZO, "setup");
    fm.exports = ZO;
});
const dm = c((ot, Lo)=>{
    ot.formatArgs = eL;
    ot.save = tL;
    ot.load = rL;
    ot.useColors = XO;
    ot.storage = nL();
    ot.destroy = (()=>{
        let t = false;
        return ()=>{
            if (!t) {
                t = true;
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }
        };
    })();
    ot.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ];
    function XO() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
            return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
        }
        let t;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    a(XO, "useColors");
    function eL(t) {
        t[0] = `${(this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ")}+${Lo.exports.humanize(this.diff)}`;
        if (!this.useColors) {
            return;
        }
        let e = `color: ${this.color}`;
        t.splice(1, 0, e, "color: inherit");
        let r = 0;
        let n = 0;
        t[0].replace(/%[a-zA-Z%]/g, (s)=>{
            s !== "%%" && (r++, s === "%c" && (n = r));
        });
        t.splice(n, 0, e);
    }
    a(eL, "formatArgs");
    ot.log = console.debug || console.log || (()=>{});
    function tL(t) {
        try {
            if (t) {
                ot.storage.setItem("debug", t);
            } else {
                ot.storage.removeItem("debug");
            }
        } catch  {}
    }
    a(tL, "save");
    function rL() {
        let t;
        try {
            t = ot.storage.getItem("debug") || ot.storage.getItem("DEBUG");
        } catch  {}
        if (!t && typeof process !== "undefined" && "env" in process) {
            t = process.env.DEBUG;
        }
        return t;
    }
    a(rL, "load");
    function nL() {
        try {
            return localStorage;
        } catch  {}
    }
    a(nL, "localstorage");
    Lo.exports = hm()(ot);
    var { formatters } = Lo.exports;
    formatters.j = (t)=>{
        try {
            return JSON.stringify(t);
        } catch (error) {
            return `[UnexpectedJSONParseError]: ${error.message}`;
        }
    };
});
export const pm = e(dm(), 1);

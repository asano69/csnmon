import { a, c } from "../chunk-FXCI2R73.js";
const Yw = c(()=>{});
export const Ws = c((ZG, hv)=>{
    var wf = typeof Map === "function" && Map.prototype;
    var lf = Object.getOwnPropertyDescriptor && wf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var Va = wf && lf && typeof lf.get === "function" ? lf.get : null;
    var Vw = wf && Map.prototype.forEach;
    var vf = typeof Set === "function" && Set.prototype;
    var ff = Object.getOwnPropertyDescriptor && vf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var Ga = vf && ff && typeof ff.get === "function" ? ff.get : null;
    var Gw = vf && Set.prototype.forEach;
    var FI = typeof WeakMap === "function" && WeakMap.prototype;
    var $s = FI ? WeakMap.prototype.has : null;
    var DI = typeof WeakSet === "function" && WeakSet.prototype;
    var zs = DI ? WeakSet.prototype.has : null;
    var II = typeof WeakRef === "function" && WeakRef.prototype;
    var Kw = II ? WeakRef.prototype.deref : null;
    var valueOf = Boolean.prototype.valueOf;
    var toString = Object.prototype.toString;
    var toString_1 = Function.prototype.toString;
    var match = String.prototype.match;
    var slice = String.prototype.slice;
    var replace = String.prototype.replace;
    var toUpperCase = String.prototype.toUpperCase;
    var toLowerCase = String.prototype.toLowerCase;
    var test = RegExp.prototype.test;
    var concat = Array.prototype.concat;
    var join = Array.prototype.join;
    var slice_1 = Array.prototype.slice;
    var Math_floor = Math.floor;
    var pf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var Object_getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var mf = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var Qn = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var Hs = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Qn || true) ? Symbol.toStringTag : null;
    var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
    var Xw = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? (t)=>t.__proto__ : null);
    function ev(t, e) {
        if (t === Infinity || t === -Infinity || t !== t || t && t > -1000 && t < 1000 || test.call(/e/, e)) {
            return e;
        }
        const r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof t === "number") {
            const n = t < 0 ? -Math_floor(-t) : Math_floor(t);
            if (n !== t) {
                const s = String(n);
                const o = slice.call(e, s.length + 1);
                return `${replace.call(s, r, "$&_")}.${replace.call(replace.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")}`;
            }
        }
        return replace.call(e, r, "$&_");
    }
    a(ev, "addNumericSeparator");
    var gf = Yw();
    var gf_custom = gf.custom;
    var rv = uv(gf_custom) ? gf_custom : null;
    var av = {
        __proto__: null,
        double: '"',
        single: "'"
    };
    var zI = {
        __proto__: null,
        double: /(["\\])/g,
        single: /(['\\])/g
    };
    hv.exports = a(function t(e, r, n, s) {
        const o = r || {};
        if (Jt(o, "quoteStyle") && !Jt(av, o.quoteStyle)) {
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (Jt(o, "maxStringLength") && (typeof o.maxStringLength === "number" ? o.maxStringLength < 0 && o.maxStringLength !== Infinity : o.maxStringLength !== null)) {
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        const f = Jt(o, "customInspect") ? o.customInspect : true;
        if (typeof f !== "boolean" && f !== "symbol") {
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (Jt(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) {
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (Jt(o, "numericSeparator") && typeof o.numericSeparator !== "boolean") {
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        const o_numericSeparator = o.numericSeparator;
        if (typeof e === "undefined") {
            return "undefined";
        }
        if (e === null) {
            return "null";
        }
        if (typeof e === "boolean") {
            if (e) {
                return "true";
            }
            return "false";
        }
        if (typeof e === "string") {
            return fv(e, o);
        }
        if (typeof e === "number") {
            if (e === 0) {
                if (Infinity / e > 0) {
                    return "0";
                }
                return "-0";
            }
            const u = String(e);
            if (o_numericSeparator) {
                return ev(e, u);
            }
            return u;
        }
        if (typeof e === "bigint") {
            const d = `${String(e)}n`;
            if (o_numericSeparator) {
                return ev(e, d);
            }
            return d;
        }
        const b = typeof o.depth === "undefined" ? 5 : o.depth;
        if (typeof n === "undefined") {
            n = 0;
        }
        if (n >= b && b > 0 && typeof e === "object") {
            if (yf(e)) {
                return "[Array]";
            }
            return "[Object]";
        }
        const y = aj(o, n);
        if (typeof s === "undefined") {
            s = [];
        } else if (lv(s, e) >= 0) {
            return "[Circular]";
        }
        function w(x, q, B) {
            if (q) {
                s = slice_1.call(s);
                s.push(q);
            }
            if (B) {
                const I = {
                    depth: o.depth
                };
                if (Jt(o, "quoteStyle")) {
                    I.quoteStyle = o.quoteStyle;
                }
                return t(x, I, n + 1, s);
            }
            return t(x, o, n + 1, s);
        }
        a(w, "inspect");
        if (typeof e === "function" && !nv(e)) {
            const _ = ZI(e);
            const A = Ya(e, w);
            return `[Function${_ ? `: ${_}` : " (anonymous)"}]${A.length > 0 ? ` { ${join.call(A, ", ")} }` : ""}`;
        }
        if (uv(e)) {
            const F = Qn ? replace.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : mf.call(e);
            if (typeof e === "object" && !Qn) {
                return qs(F);
            }
            return F;
        }
        if (ij(e)) {
            let Y = `<${toLowerCase.call(String(e.nodeName))}`;
            for(let T = e.attributes || [], j = 0; j < T.length; j++){
                Y += ` ${T[j].name}=${cv(HI(T[j].value), "double", o)}`;
            }
            Y += ">";
            if (e.childNodes && e.childNodes.length) {
                Y += "...";
            }
            Y += `</${toLowerCase.call(String(e.nodeName))}>`;
            return Y;
        }
        if (yf(e)) {
            if (e.length === 0) {
                return "[]";
            }
            const J = Ya(e, w);
            if (y && !oj(J)) {
                return `[${bf(J, y)}]`;
            }
            return `[ ${join.call(J, ", ")} ]`;
        }
        if (YI(e)) {
            const W = Ya(e, w);
            if (!("cause" in Error.prototype) && "cause" in e && !propertyIsEnumerable.call(e, "cause")) {
                return `{ [${String(e)}] ${join.call(concat.call(`[cause]: ${w(e.cause)}`, W), ", ")} }`;
            }
            if (W.length === 0) {
                return `[${String(e)}]`;
            }
            return `{ [${String(e)}] ${join.call(W, ", ")} }`;
        }
        if (typeof e === "object" && f) {
            if (rv && typeof e[rv] === "function" && gf) {
                return gf(e, {
                    depth: b - n
                });
            }
            if (f !== "symbol" && typeof e.inspect === "function") {
                return e.inspect();
            }
        }
        if (XI(e)) {
            const ae = [];
            if (Vw) {
                Vw.call(e, (x, q)=>{
                    ae.push(`${w(q, e, true)} => ${w(x, e)}`);
                });
            }
            return iv("Map", Va.call(e), ae, y);
        }
        if (rj(e)) {
            const te = [];
            if (Gw) {
                Gw.call(e, (x)=>{
                    te.push(w(x, e));
                });
            }
            return iv("Set", Ga.call(e), te, y);
        }
        if (ej(e)) {
            return df("WeakMap");
        }
        if (nj(e)) {
            return df("WeakSet");
        }
        if (tj(e)) {
            return df("WeakRef");
        }
        if (GI(e)) {
            return qs(w(Number(e)));
        }
        if (JI(e)) {
            return qs(w(pf.call(e)));
        }
        if (KI(e)) {
            return qs(valueOf.call(e));
        }
        if (VI(e)) {
            return qs(w(String(e)));
        }
        if (typeof window !== "undefined" && e === window) {
            return "{ [object Window] }";
        }
        if (typeof globalThis !== "undefined" && e === globalThis || typeof global !== "undefined" && e === global) {
            return "{ [object globalThis] }";
        }
        if (!WI(e) && !nv(e)) {
            const X = Ya(e, w);
            const ne = Xw ? Xw(e) === Object.prototype : e instanceof Object || e.constructor === Object;
            const ee = e instanceof Object ? "" : "null prototype";
            const v = !ne && Hs && Object(e) === e && Hs in e ? slice.call(xr(e), 8, -1) : ee ? "Object" : "";
            const S = ne || typeof e.constructor !== "function" ? "" : e.constructor.name ? `${e.constructor.name} ` : "";
            const k = S + (v || ee ? `[${join.call(concat.call([], v || [], ee || []), ": ")}] ` : "");
            if (X.length === 0) {
                return `${k}{}`;
            }
            if (y) {
                return `${k}{${bf(X, y)}}`;
            }
            return `${k}{ ${join.call(X, ", ")} }`;
        }
        return String(e);
    }, "inspect_");
    function cv(t, e, r) {
        const n = r.quoteStyle || e;
        const s = av[n];
        return s + t + s;
    }
    a(cv, "wrapQuotes");
    function HI(t) {
        return replace.call(String(t), /"/g, "&quot;");
    }
    a(HI, "quote");
    function zr(t) {
        return !Hs || !(typeof t === "object" && (Hs in t || typeof t[Hs] !== "undefined"));
    }
    a(zr, "canTrustToString");
    function yf(t) {
        return xr(t) === "[object Array]" && zr(t);
    }
    a(yf, "isArray");
    function WI(t) {
        return xr(t) === "[object Date]" && zr(t);
    }
    a(WI, "isDate");
    function nv(t) {
        return xr(t) === "[object RegExp]" && zr(t);
    }
    a(nv, "isRegExp");
    function YI(t) {
        return xr(t) === "[object Error]" && zr(t);
    }
    a(YI, "isError");
    function VI(t) {
        return xr(t) === "[object String]" && zr(t);
    }
    a(VI, "isString");
    function GI(t) {
        return xr(t) === "[object Number]" && zr(t);
    }
    a(GI, "isNumber");
    function KI(t) {
        return xr(t) === "[object Boolean]" && zr(t);
    }
    a(KI, "isBoolean");
    function uv(t) {
        if (Qn) {
            return t && typeof t === "object" && t instanceof Symbol;
        }
        if (typeof t === "symbol") {
            return true;
        }
        if (!t || typeof t !== "object" || !mf) {
            return false;
        }
        try {
            mf.call(t);
            return true;
        } catch  {}
        return false;
    }
    a(uv, "isSymbol");
    function JI(t) {
        if (!t || typeof t !== "object" || !pf) {
            return false;
        }
        try {
            pf.call(t);
            return true;
        } catch  {}
        return false;
    }
    a(JI, "isBigInt");
    var QI = Object.prototype.hasOwnProperty || function(t) {
        return t in this;
    };
    function Jt(t, e) {
        return QI.call(t, e);
    }
    a(Jt, "has");
    function xr(t) {
        return toString.call(t);
    }
    a(xr, "toStr");
    function ZI(t) {
        if (t.name) {
            return t.name;
        }
        const e = match.call(toString_1.call(t), /^function\s*([\w$]+)/);
        if (e) {
            return e[1];
        }
        return null;
    }
    a(ZI, "nameOf");
    function lv(t, e) {
        if (t.indexOf) {
            return t.indexOf(e);
        }
        for(let r = 0, n = t.length; r < n; r++){
            if (t[r] === e) {
                return r;
            }
        }
        return -1;
    }
    a(lv, "indexOf");
    function XI(t) {
        if (!Va || !t || typeof t !== "object") {
            return false;
        }
        try {
            Va.call(t);
            try {
                Ga.call(t);
            } catch  {
                return true;
            }
            return t instanceof Map;
        } catch  {}
        return false;
    }
    a(XI, "isMap");
    function ej(t) {
        if (!$s || !t || typeof t !== "object") {
            return false;
        }
        try {
            $s.call(t, $s);
            try {
                zs.call(t, zs);
            } catch  {
                return true;
            }
            return t instanceof WeakMap;
        } catch  {}
        return false;
    }
    a(ej, "isWeakMap");
    function tj(t) {
        if (!Kw || !t || typeof t !== "object") {
            return false;
        }
        try {
            Kw.call(t);
            return true;
        } catch  {}
        return false;
    }
    a(tj, "isWeakRef");
    function rj(t) {
        if (!Ga || !t || typeof t !== "object") {
            return false;
        }
        try {
            Ga.call(t);
            try {
                Va.call(t);
            } catch  {
                return true;
            }
            return t instanceof Set;
        } catch  {}
        return false;
    }
    a(rj, "isSet");
    function nj(t) {
        if (!zs || !t || typeof t !== "object") {
            return false;
        }
        try {
            zs.call(t, zs);
            try {
                $s.call(t, $s);
            } catch  {
                return true;
            }
            return t instanceof WeakSet;
        } catch  {}
        return false;
    }
    a(nj, "isWeakSet");
    function ij(t) {
        if (!t || typeof t !== "object") {
            return false;
        }
        if (typeof HTMLElement !== "undefined" && t instanceof HTMLElement) {
            return true;
        }
        return typeof t.nodeName === "string" && typeof t.getAttribute === "function";
    }
    a(ij, "isElement");
    function fv(t, e) {
        if (t.length > e.maxStringLength) {
            const r = t.length - e.maxStringLength;
            const n = `... ${r} more character${r > 1 ? "s" : ""}`;
            return fv(slice.call(t, 0, e.maxStringLength), e) + n;
        }
        const s = zI[e.quoteStyle || "single"];
        s.lastIndex = 0;
        const o = replace.call(replace.call(t, s, "\\$1"), /[\x00-\x1f]/g, sj);
        return cv(o, "single", e);
    }
    a(fv, "inspectString");
    function sj(t) {
        const e = t.charCodeAt(0);
        const r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        }[e];
        if (r) {
            return `\\${r}`;
        }
        return `\\x${e < 16 ? "0" : ""}${toUpperCase.call(e.toString(16))}`;
    }
    a(sj, "lowbyte");
    function qs(t) {
        return `Object(${t})`;
    }
    a(qs, "markBoxed");
    function df(t) {
        return `${t} { ? }`;
    }
    a(df, "weakCollectionOf");
    function iv(t, e, r, n) {
        const s = n ? bf(r, n) : join.call(r, ", ");
        return `${t} (${e}) {${s}}`;
    }
    a(iv, "collectionOf");
    function oj(t) {
        for(let e = 0; e < t.length; e++){
            if (lv(t[e], `
`) >= 0) {
                return false;
            }
        }
        return true;
    }
    a(oj, "singleLineValues");
    function aj(t, e) {
        let base;
        if (t.indent === "	") {
            base = "	";
        } else if (typeof t.indent === "number" && t.indent > 0) {
            base = join.call(Array(t.indent + 1), " ");
        } else {
            return null;
        }
        return {
            base,
            prev: join.call(Array(e + 1), base)
        };
    }
    a(aj, "getIndent");
    function bf(t, e) {
        if (t.length === 0) {
            return "";
        }
        const r = `
` + e.prev + e.base;
        return r + join.call(t, `,${r}`) + `
` + e.prev;
    }
    a(bf, "indentedJoin");
    function Ya(t, e) {
        const r = yf(t);
        const n = [];
        if (r) {
            n.length = t.length;
            for(let s = 0; s < t.length; s++){
                n[s] = Jt(t, s) ? e(t[s], t) : "";
            }
        }
        const o = typeof Object_getOwnPropertySymbols === "function" ? Object_getOwnPropertySymbols(t) : [];
        let f;
        if (Qn) {
            f = {};
            for(let c = 0; c < o.length; c++){
                f[`\$${o[c]}`] = o[c];
            }
        }
        for(const u in t){
            Jt(t, u) && (r && String(Number(u)) === u && u < t.length || Qn && f[`\$${u}`] instanceof Symbol || (test.call(/[^\w$]/, u) ? n.push(`${e(u, t)}: ${e(t[u], t)}`) : n.push(`${u}: ${e(t[u], t)}`)));
        }
        if (typeof Object_getOwnPropertySymbols === "function") {
            for(let d = 0; d < o.length; d++){
                if (propertyIsEnumerable.call(t, o[d])) {
                    n.push(`[${e(o[d])}]: ${e(t[o[d]], t)}`);
                }
            }
        }
        return n;
    }
    a(Ya, "arrObjKeys");
});
export const kv = c((h7, Pv)=>{
    var toString = {}.toString;
    Pv.exports = Array.isArray || ((t)=>toString.call(t) == "[object Array]");
});
export const nS = c((A7, rS)=>{
    var toString = {}.toString;
    rS.exports = Array.isArray || ((t)=>toString.call(t) == "[object Array]");
});

import { a, c } from "../chunk-FXCI2R73.js";
import { Fs, La, Ma, Ra } from "./chunk_Fs.js";
import { Gl, br, cb, ht, ib, lb, ob, rb } from "./chunk_ht.js";
import { Fa, Ia, Yn } from "./chunk_Fa.js";
import { Cb, bb, gb, hb, pb, vb } from "./chunk_hb.js";
import { Da, Jl, Kl } from "./chunk_Ds.js";
import { ja } from "./chunk_ja.js";
const jb = c((oG, Ib)=>{
    "use strict";
    Ib.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
});
const Ql = c((aG, Nb)=>{
    "use strict";
    var iD = Yn();
    var sD = ja();
    var oD = Ia();
    var aD = jb();
    Nb.exports = aD || iD.call(oD, sD);
});
const Na = c((cG, Bb)=>{
    "use strict";
    var cD = Yn();
    var uD = ht();
    var lD = Ia();
    var fD = Ql();
    Bb.exports = a((e)=>{
        if (e.length < 1 || typeof e[0] !== "function") {
            throw new uD("a function is required");
        }
        return fD(cD, lD, e);
    }, "callBindBasic");
});
const Wb = c((lG, Hb)=>{
    "use strict";
    var hD = Na();
    var Ub = br();
    var $b;
    try {
        $b = [].__proto__ === Array.prototype;
    } catch (error) {
        if (!error || typeof error !== "object" || !("code" in error) || error.code !== "ERR_PROTO_ACCESS") {
            throw error;
        }
    }
    var Zl = !!$b && Ub && Ub(Object.prototype, "__proto__");
    var zb = Object;
    var zb_getPrototypeOf = zb.getPrototypeOf;
    Hb.exports = Zl && typeof Zl.get === "function" ? hD([
        Zl.get
    ]) : typeof zb_getPrototypeOf === "function" ? a((e)=>zb_getPrototypeOf(e == null ? e : zb(e)), "getDunder") : false;
});
export const Ba = c((hG, Kb)=>{
    "use strict";
    var Yb = Kl();
    var Vb = Jl();
    var Gb = Wb();
    Kb.exports = Yb ? a((e)=>Yb(e), "getProto") : Vb ? a((e)=>{
        if (!e || typeof e !== "object" && typeof e !== "function") {
            throw new TypeError("getProto: not an object");
        }
        return Vb(e);
    }, "getProto") : Gb ? a((e)=>Gb(e), "getProto") : null;
});
export const Ua = c((pG, Jb)=>{
    "use strict";
    var call = Function.prototype.call;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var mD = Yn();
    Jb.exports = mD.call(call, hasOwnProperty);
});
export const Ft = c((mG, rw)=>{
    "use strict";
    var ve;
    var gD = Fa();
    var yD = Gl();
    var bD = rb();
    var wD = ib();
    var vD = ob();
    var Jn = La();
    var Kn = ht();
    var SD = cb();
    var xD = lb();
    var _D = hb();
    var CD = pb();
    var PD = gb();
    var kD = bb();
    var ED = vb();
    var AD = Cb();
    var ew = Function;
    var Xl = a((t)=>{
        try {
            return ew(`"use strict"; return (${t}).constructor;`)();
        } catch  {}
    }, "getEvalledConstructor");
    var Is = br();
    var OD = Fs();
    var ef = a(()=>{
        throw new Kn;
    }, "throwTypeError");
    var LD = Is ? function() {
        try {
            arguments.callee;
            return ef;
        } catch  {
            try {
                return Is(arguments, "callee").get;
            } catch  {
                return ef;
            }
        }
    }() : ef;
    var Vn = Da()();
    var Ve = Ba();
    var TD = Jl();
    var RD = Kl();
    var tw = ja();
    var js = Ia();
    var Gn = {};
    var MD = typeof Uint8Array === "undefined" || !Ve ? ve : Ve(Uint8Array);
    var qr = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? ve : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? ve : ArrayBuffer,
        "%ArrayIteratorPrototype%": Vn && Ve ? Ve([][Symbol.iterator]()) : ve,
        "%AsyncFromSyncIteratorPrototype%": ve,
        "%AsyncFunction%": Gn,
        "%AsyncGenerator%": Gn,
        "%AsyncGeneratorFunction%": Gn,
        "%AsyncIteratorPrototype%": Gn,
        "%Atomics%": typeof Atomics === "undefined" ? ve : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? ve : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? ve : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? ve : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? ve : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": yD,
        "%eval%": eval,
        "%EvalError%": bD,
        "%Float16Array%": typeof Float16Array === "undefined" ? ve : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? ve : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? ve : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? ve : FinalizationRegistry,
        "%Function%": ew,
        "%GeneratorFunction%": Gn,
        "%Int8Array%": typeof Int8Array === "undefined" ? ve : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? ve : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? ve : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Vn && Ve ? Ve(Ve([][Symbol.iterator]())) : ve,
        "%JSON%": typeof JSON === "object" ? JSON : ve,
        "%Map%": typeof Map === "undefined" ? ve : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !Vn || !Ve ? ve : Ve(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": gD,
        "%Object.getOwnPropertyDescriptor%": Is,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? ve : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? ve : Proxy,
        "%RangeError%": wD,
        "%ReferenceError%": vD,
        "%Reflect%": typeof Reflect === "undefined" ? ve : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? ve : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !Vn || !Ve ? ve : Ve(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? ve : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Vn && Ve ? Ve(""[Symbol.iterator]()) : ve,
        "%Symbol%": Vn ? Symbol : ve,
        "%SyntaxError%": Jn,
        "%ThrowTypeError%": LD,
        "%TypedArray%": MD,
        "%TypeError%": Kn,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? ve : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? ve : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? ve : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? ve : Uint32Array,
        "%URIError%": SD,
        "%WeakMap%": typeof WeakMap === "undefined" ? ve : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? ve : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? ve : WeakSet,
        "%Function.prototype.call%": js,
        "%Function.prototype.apply%": tw,
        "%Object.defineProperty%": OD,
        "%Object.getPrototypeOf%": TD,
        "%Math.abs%": xD,
        "%Math.floor%": _D,
        "%Math.max%": CD,
        "%Math.min%": PD,
        "%Math.pow%": kD,
        "%Math.round%": ED,
        "%Math.sign%": AD,
        "%Reflect.getPrototypeOf%": RD
    };
    if (Ve) {
        try {
            null.error;
        } catch (error) {
            Qb = Ve(Ve(error));
            qr["%Error.prototype%"] = Qb;
        }
    }
    var Qb;
    var FD = a(function t(e) {
        let r;
        if (e === "%AsyncFunction%") {
            r = Xl("async function () {}");
        } else if (e === "%GeneratorFunction%") {
            r = Xl("function* () {}");
        } else if (e === "%AsyncGeneratorFunction%") {
            r = Xl("async function* () {}");
        } else if (e === "%AsyncGenerator%") {
            const n = t("%AsyncGeneratorFunction%");
            if (n) {
                r = n.prototype;
            }
        } else if (e === "%AsyncIteratorPrototype%") {
            const s = t("%AsyncGenerator%");
            if (s && Ve) {
                r = Ve(s.prototype);
            }
        }
        qr[e] = r;
        return r;
    }, "doEval");
    var Zb = {
        __proto__: null,
        "%ArrayBufferPrototype%": [
            "ArrayBuffer",
            "prototype"
        ],
        "%ArrayPrototype%": [
            "Array",
            "prototype"
        ],
        "%ArrayProto_entries%": [
            "Array",
            "prototype",
            "entries"
        ],
        "%ArrayProto_forEach%": [
            "Array",
            "prototype",
            "forEach"
        ],
        "%ArrayProto_keys%": [
            "Array",
            "prototype",
            "keys"
        ],
        "%ArrayProto_values%": [
            "Array",
            "prototype",
            "values"
        ],
        "%AsyncFunctionPrototype%": [
            "AsyncFunction",
            "prototype"
        ],
        "%AsyncGenerator%": [
            "AsyncGeneratorFunction",
            "prototype"
        ],
        "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%BooleanPrototype%": [
            "Boolean",
            "prototype"
        ],
        "%DataViewPrototype%": [
            "DataView",
            "prototype"
        ],
        "%DatePrototype%": [
            "Date",
            "prototype"
        ],
        "%ErrorPrototype%": [
            "Error",
            "prototype"
        ],
        "%EvalErrorPrototype%": [
            "EvalError",
            "prototype"
        ],
        "%Float32ArrayPrototype%": [
            "Float32Array",
            "prototype"
        ],
        "%Float64ArrayPrototype%": [
            "Float64Array",
            "prototype"
        ],
        "%FunctionPrototype%": [
            "Function",
            "prototype"
        ],
        "%Generator%": [
            "GeneratorFunction",
            "prototype"
        ],
        "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%Int8ArrayPrototype%": [
            "Int8Array",
            "prototype"
        ],
        "%Int16ArrayPrototype%": [
            "Int16Array",
            "prototype"
        ],
        "%Int32ArrayPrototype%": [
            "Int32Array",
            "prototype"
        ],
        "%JSONParse%": [
            "JSON",
            "parse"
        ],
        "%JSONStringify%": [
            "JSON",
            "stringify"
        ],
        "%MapPrototype%": [
            "Map",
            "prototype"
        ],
        "%NumberPrototype%": [
            "Number",
            "prototype"
        ],
        "%ObjectPrototype%": [
            "Object",
            "prototype"
        ],
        "%ObjProto_toString%": [
            "Object",
            "prototype",
            "toString"
        ],
        "%ObjProto_valueOf%": [
            "Object",
            "prototype",
            "valueOf"
        ],
        "%PromisePrototype%": [
            "Promise",
            "prototype"
        ],
        "%PromiseProto_then%": [
            "Promise",
            "prototype",
            "then"
        ],
        "%Promise_all%": [
            "Promise",
            "all"
        ],
        "%Promise_reject%": [
            "Promise",
            "reject"
        ],
        "%Promise_resolve%": [
            "Promise",
            "resolve"
        ],
        "%RangeErrorPrototype%": [
            "RangeError",
            "prototype"
        ],
        "%ReferenceErrorPrototype%": [
            "ReferenceError",
            "prototype"
        ],
        "%RegExpPrototype%": [
            "RegExp",
            "prototype"
        ],
        "%SetPrototype%": [
            "Set",
            "prototype"
        ],
        "%SharedArrayBufferPrototype%": [
            "SharedArrayBuffer",
            "prototype"
        ],
        "%StringPrototype%": [
            "String",
            "prototype"
        ],
        "%SymbolPrototype%": [
            "Symbol",
            "prototype"
        ],
        "%SyntaxErrorPrototype%": [
            "SyntaxError",
            "prototype"
        ],
        "%TypedArrayPrototype%": [
            "TypedArray",
            "prototype"
        ],
        "%TypeErrorPrototype%": [
            "TypeError",
            "prototype"
        ],
        "%Uint8ArrayPrototype%": [
            "Uint8Array",
            "prototype"
        ],
        "%Uint8ClampedArrayPrototype%": [
            "Uint8ClampedArray",
            "prototype"
        ],
        "%Uint16ArrayPrototype%": [
            "Uint16Array",
            "prototype"
        ],
        "%Uint32ArrayPrototype%": [
            "Uint32Array",
            "prototype"
        ],
        "%URIErrorPrototype%": [
            "URIError",
            "prototype"
        ],
        "%WeakMapPrototype%": [
            "WeakMap",
            "prototype"
        ],
        "%WeakSetPrototype%": [
            "WeakSet",
            "prototype"
        ]
    };
    var Ns = Yn();
    var qa = Ua();
    var DD = Ns.call(js, Array.prototype.concat);
    var ID = Ns.call(tw, Array.prototype.splice);
    var Xb = Ns.call(js, String.prototype.replace);
    var $a = Ns.call(js, String.prototype.slice);
    var jD = Ns.call(js, RegExp.prototype.exec);
    var ND = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var BD = /\\(\\)?/g;
    var UD = a((e)=>{
        const r = $a(e, 0, 1);
        const n = $a(e, -1);
        if (r === "%" && n !== "%") {
            throw new Jn("invalid intrinsic syntax, expected closing `%`");
        }
        if (n === "%" && r !== "%") {
            throw new Jn("invalid intrinsic syntax, expected opening `%`");
        }
        const s = [];
        Xb(e, ND, (o, f, c, u)=>{
            s[s.length] = c ? Xb(u, BD, "$1") : f || o;
        });
        return s;
    }, "stringToPath");
    var qD = a((e, r)=>{
        let n = e;
        let alias;
        if (qa(Zb, n)) {
            alias = Zb[n];
            n = `%${alias[0]}%`;
        }
        if (qa(qr, n)) {
            let o = qr[n];
            if (o === Gn) {
                o = FD(n);
            }
            if (typeof o === "undefined" && !r) {
                throw new Kn(`intrinsic ${e} exists, but is not available. Please file an issue!`);
            }
            return {
                alias,
                name: n,
                value: o
            };
        }
        throw new Jn(`intrinsic ${e} does not exist!`);
    }, "getBaseIntrinsic");
    rw.exports = a(function(e, r) {
        if (typeof e !== "string" || e.length === 0) {
            throw new Kn("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof r !== "boolean") {
            throw new Kn('"allowMissing" argument must be a boolean');
        }
        if (jD(/^%?[^%]*%?$/, e) === null) {
            throw new Jn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        const n = UD(e);
        let s = n.length > 0 ? n[0] : "";
        const o = qD(`%${s}%`, r);
        let o_name = o.name;
        let o_value = o.value;
        let u = false;
        const o_alias = o.alias;
        if (o_alias) {
            s = o_alias[0];
            ID(n, DD([
                0,
                1
            ], o_alias));
        }
        for(let b = 1, y = true; b < n.length; b += 1){
            const w = n[b];
            const _ = $a(w, 0, 1);
            const A = $a(w, -1);
            if ((_ === '"' || _ === "'" || _ === "`" || A === '"' || A === "'" || A === "`") && _ !== A) {
                throw new Jn("property names with quotes must have matching quotes");
            }
            if (w === "constructor" || !y) {
                u = true;
            }
            s += `.${w}`;
            o_name = `%${s}%`;
            if (qa(qr, o_name)) {
                o_value = qr[o_name];
            } else if (o_value != null) {
                if (!(w in o_value)) {
                    if (!r) {
                        throw new Kn(`base intrinsic for ${e} exists, but the property is not available.`);
                    }
                    return;
                }
                if (Is && b + 1 >= n.length) {
                    const F = Is(o_value, w);
                    y = !!F;
                    if (y && "get" in F && !("originalValue" in F.get)) {
                        o_value = F.get;
                    } else {
                        o_value = o_value[w];
                    }
                } else {
                    y = qa(o_value, w);
                    o_value = o_value[w];
                }
                if (y && !u) {
                    qr[o_name] = o_value;
                }
            }
        }
        return o_value;
    }, "GetIntrinsic");
});
const aw = c((yG, ow)=>{
    "use strict";
    var $D = Ft();
    var nw = Ra();
    var zD = Ma()();
    var iw = br();
    var sw = ht();
    var HD = $D("%Math.floor%");
    ow.exports = a(function(e, r) {
        if (typeof e !== "function") {
            throw new sw("`fn` is not a function");
        }
        if (typeof r !== "number" || r < 0 || r > 4294967295 || HD(r) !== r) {
            throw new sw("`length` must be a positive 32-bit integer");
        }
        const n = arguments.length > 2 && !!arguments[2];
        let s = true;
        let o = true;
        if ("length" in e && iw) {
            const f = iw(e, "length");
            if (f && !f.configurable) {
                s = false;
            }
            if (f && !f.writable) {
                o = false;
            }
        }
        (s || o || !n) && (zD ? nw(e, "length", r, true, true) : nw(e, "length", r));
        return e;
    }, "setFunctionLength");
});
const uw = c((wG, cw)=>{
    "use strict";
    var WD = Yn();
    var YD = ja();
    var VD = Ql();
    cw.exports = a(function() {
        return VD(WD, YD, arguments);
    }, "applyBind");
});
export const $r = c((SG, za)=>{
    "use strict";
    var GD = aw();
    var lw = Fs();
    var KD = Na();
    var fw = uw();
    za.exports = a(function(e) {
        const r = KD(arguments);
        const n = e.length - (arguments.length - 1);
        return GD(r, 1 + (n > 0 ? n : 0), true);
    }, "callBind");
    if (lw) {
        lw(za.exports, "apply", {
            value: fw
        });
    } else {
        za.exports.apply = fw;
    }
});
export const Ke = c((_G, pw)=>{
    "use strict";
    var hw = Ft();
    var dw = Na();
    var JD = dw([
        hw("%String.prototype.indexOf%")
    ]);
    pw.exports = a((e, r)=>{
        const n = hw(e, !!r);
        if (typeof n === "function" && JD(e, ".prototype.") > -1) {
            return dw([
                n
            ]);
        }
        return n;
    }, "callBoundIntrinsic");
});
export const HS = c((X7, Xf)=>{
    "use strict";
    var FN = Ft();
    var zS = Ke();
    var DN = FN("%WeakSet%", true);
    var Zf = zS("WeakSet.prototype.has", true);
    if (Zf) {
        ac = zS("WeakMap.prototype.has", true);
        Xf.exports = a((e)=>{
            if (!e || typeof e !== "object") {
                return false;
            }
            try {
                Zf(e, Zf);
                if (ac) {
                    try {
                        ac(e, ac);
                    } catch  {
                        return true;
                    }
                }
                return e instanceof DN;
            } catch  {}
            return false;
        }, "isWeakSet");
    } else {
        Xf.exports = a((e)=>false, "isWeakSet");
    }
    var ac;
});

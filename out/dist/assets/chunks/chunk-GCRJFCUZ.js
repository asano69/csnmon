import { Ji, yp, zc } from "./chunk-GCRJFCUZ/chunk_yp.js";
import { pm } from "./chunk-GCRJFCUZ/chunk_lm.js";
import { Dg, ws } from "./chunk-GCRJFCUZ/chunk_ws.js";
import { Cy } from "./chunk-GCRJFCUZ/chunk__y.js";
import { MC } from "./chunk-GCRJFCUZ/chunk_tx.js";
import { lh } from "./chunk-GCRJFCUZ/chunk_cx.js";
import { $i, dP, mP, wse } from "./chunk-GCRJFCUZ/chunk_dP.js";
import { PP } from "./chunk-GCRJFCUZ/chunk_wP.js";
import { cL } from "./chunk-GCRJFCUZ/chunk_sL.js";
import { HT, hs } from "./chunk-GCRJFCUZ/chunk_qT.js";
import { al, ol } from "./chunk-GCRJFCUZ/chunk_GT.js";
import { cl, dn } from "./chunk-GCRJFCUZ/chunk_og.js";
import { Bl, xa } from "./chunk-GCRJFCUZ/chunk_xa.js";
import { EP, Zt } from "./chunk-GCRJFCUZ/chunk_Zt.js";
import { no } from "./chunk-GCRJFCUZ/chunk_HB_2.js";
import { KB, uC } from "./chunk-GCRJFCUZ/chunk_uC.js";
import { U2 } from "./chunk-GCRJFCUZ/chunk_B2.js";
import { G2 } from "./chunk-GCRJFCUZ/chunk_pP.js";
import { a as a_1 } from "./chunk-FTBZRL4G.js";
import { A as A_1, C as C_1, G as G_1, J as J_1, K as K_1, b as b_1, c as c_1, e as e_1, g as g_1, i, k as k_1, m, x as x_1 } from "./chunk-UCL6J5NE.js";
import { a as a_2, b as b_2, c as c_2, d as d_1, e as e_2 } from "./chunk-FXCI2R73.js";
const Ip = c_2((aU, Dp)=>{
    Dp.exports = (t)=>t.source.replace(/\(\((?!\?)/g, (e)=>`${e}?:`).replace(/(^|[^\\])\((?!\?)/g, (e)=>`${e}?:`);
});
const wl = c_2((yn)=>{
    "use strict";
    Object.defineProperty(yn, "__esModule", {
        value: true
    });
    yn.When = yn.filterCaseLabel = undefined;
    var PR = [
        "children",
        "or",
        "and"
    ];
    var jg = a_2((e)=>e.filter((r)=>!PR.includes(r)), "filterCaseLabel");
    yn.filterCaseLabel = jg;
    var dr = a_2(function t(e) {
        if (e.and && e.or) {
            throw new Error('must not use "and" with "or".');
        }
        const r = jg(Object.keys(e));
        if (r.length > 1 && !e.and && !e.or) {
            throw new Error('must specify "and" or "or" operator.');
        }
        for (const u of r){
            if (e.or) {
                if (t.case(u)) {
                    return e.children || null;
                }
            } else if (!t.case(u)) {
                return null;
            }
        }
        if (e.or) {
            return null;
        }
        return e.children || null;
    }, "When");
    yn.When = dr;
    dr.cases = {};
    dr.case = (t, e)=>{
        if (e) {
            if (typeof e !== "function") {
                throw new Error("condition must be a function.");
            }
            if (dr.cases[t]) {
                throw new Error(`label "${t}" is already registerd.`);
            }
            dr.cases[t] = e;
            Object.defineProperty(dr, t, {
                get: e
            });
            return e;
        }
        if (typeof dr.cases[t] !== "function") {
            throw new Error(`label "${t}" is not registerd.`);
        }
        return dr.cases[t]();
    };
});
const Ng = c_2((Qo)=>{
    "use strict";
    Object.defineProperty(Qo, "__esModule", {
        value: true
    });
    Qo.WhenNot = undefined;
    var vl = wl();
    var kR = a_2((e)=>{
        if (e.and && e.or) {
            throw new Error('must not use "and" with "or".');
        }
        const r = vl.filterCaseLabel(Object.keys(e));
        if (r.length > 1 && !e.and && !e.or) {
            throw new Error('must specify "and" or "or" operator.');
        }
        for (const u of r){
            if (e.or) {
                if (vl.When.case(u)) {
                    return null;
                }
            } else if (!vl.When.case(u)) {
                return e.children || null;
            }
        }
        return e.or && e.children || null;
    }, "WhenNot");
    Qo.WhenNot = kR;
});
const vs = c_2((GW, Bg)=>{
    "use strict";
    var ER = wl();
    var AR = Ng();
    Bg.exports = {
        When: ER.When,
        WhenNot: AR.WhenNot
    };
});
const Yg = c_2((Zo)=>{
    "use strict";
    Object.defineProperty(Zo, "__esModule", {
        value: true
    });
    Zo.arabic = undefined;
    var RR = "ؠ-يٮ-ٯٱ-ەۮ-ۯۺ-ۿ";
    var MR = "ݐ-ݿ";
    var FR = `[${RR}${MR}]`;
    var DR = "[ً-ٰٟ]";
    var IR = `${FR}${DR}*`;
    Zo.arabic = IR;
});
const Gg = c_2((Xo)=>{
    "use strict";
    Object.defineProperty(Xo, "__esModule", {
        value: true
    });
    Xo.bengali = undefined;
    var Vg = "[\\u{0980}-\\u{09FF}]";
    var jR = "[\\u{0980}-\\u{0983}\\u{09BC}-\\u{09D7}\\u{09E2}\\u{09E3}\\u{09FE}]";
    var NR = "\\u{09CD}";
    var BR = `${Vg}(${NR}${Vg}|${jR})*`;
    Xo.bengali = BR;
});
const Jg = c_2((ea)=>{
    "use strict";
    Object.defineProperty(ea, "__esModule", {
        value: true
    });
    ea.devanagari = undefined;
    var Kg = "[\\u{0900}-\\u{097F}]";
    var UR = "[\\u{0900}-\\u{0903}\\u{093A}-\\u{0957}\\u{0962}\\u{0963}]";
    var qR = "\\u{094D}";
    var $R = `${Kg}(${qR}${Kg}|${UR})*`;
    ea.devanagari = $R;
});
const Zg = c_2((ta)=>{
    "use strict";
    Object.defineProperty(ta, "__esModule", {
        value: true
    });
    ta.gujarati = undefined;
    var Qg = "[\\u{0A80}-\\u{0AFF}]";
    var zR = "[\\u{0A81}-\\u{0A83}\\u{0ABC}\\u{0ABE}-\\u{0ACD}\\u{0AE2}\\u{0AE3}\\u{0AFA}-\\u{0AFF}]";
    var HR = "\\u{0ACD}";
    var WR = `${Qg}(${HR}${Qg}|${zR})*`;
    ta.gujarati = WR;
});
const Xg = c_2((ra)=>{
    "use strict";
    Object.defineProperty(ra, "__esModule", {
        value: true
    });
    ra.hebrew = undefined;
    var YR = "[א-ת]";
    var VR = "[֑-ׇֽֿׁׂׅׄ]";
    var GR = `${YR}${VR}*`;
    ra.hebrew = GR;
});
const ey = c_2((na)=>{
    "use strict";
    Object.defineProperty(na, "__esModule", {
        value: true
    });
    na.japaneseKana = undefined;
    var KR = "[\\u{3041}-\\u{3096}\\u{309D}-\\u{309F}]";
    var JR = "[\\u{30A0}-\\u{30FF}]";
    var QR = "[\\u{3099}-\\u{309A}]";
    var ZR = "[\\u{309B}-\\u{309C}]";
    var XR = `((${JR}|${KR})${QR}?|${ZR})`;
    na.japaneseKana = XR;
});
const ry = c_2((ia)=>{
    "use strict";
    Object.defineProperty(ia, "__esModule", {
        value: true
    });
    ia.kannada = undefined;
    var ty = "[\\u{0C80}-\\u{0CFF}]";
    var eM = "[\\u{0C81}-\\u{0C83}\\u{0CBC}\\u{0CBE}-\\u{0CCD}\\u{0CD5}\\u{0CD6}\\u{0CE2}\\u{0CE3}]";
    var tM = "\\u{0CCD}";
    var rM = `${ty}(${tM}${ty}|${eM})*`;
    ia.kannada = rM;
});
const iy = c_2((sa)=>{
    "use strict";
    Object.defineProperty(sa, "__esModule", {
        value: true
    });
    sa.khmer = undefined;
    var ny = "[\\u{1780}-\\u{17FF}]";
    var nM = "[\\u{17B6}-\\u{17D1}\\u{17D3}\\u{17DD}]";
    var iM = "\\u{17D2}";
    var sM = `${ny}(${iM}${ny}|${nM})*`;
    sa.khmer = sM;
});
const sy = c_2((oa)=>{
    "use strict";
    Object.defineProperty(oa, "__esModule", {
        value: true
    });
    oa.lao = undefined;
    var oM = "[\\u{0E80}-\\u{0EFF}]";
    var aM = "[\\u{0EB1}\\u{0EB4}-\\u{0EBC}\\u{0EC8}-\\u{0ECD}]";
    var cM = `${oM}${aM}*`;
    oa.lao = cM;
});
const ay = c_2((aa)=>{
    "use strict";
    Object.defineProperty(aa, "__esModule", {
        value: true
    });
    aa.malayalam = undefined;
    var oy = "[\\u{0D00}-\\u{0D7F}]";
    var uM = "[\\u{0D00}-\\u{0D03}\\u{0D3B}\\u{0D3C}\\u{0D3E}-\\u{0D4D}\\u{0D57}\\u{0D62}-\\u{0D63}]";
    var lM = "\\u{0D4D}";
    var fM = `${oy}(${lM}${oy}|${uM})*`;
    aa.malayalam = fM;
});
const uy = c_2((ca)=>{
    "use strict";
    Object.defineProperty(ca, "__esModule", {
        value: true
    });
    ca.myanmar = undefined;
    var cy = "[\\u{1000}-\\u{109F}]";
    var hM = [
        "\\u{102B}-\\u{1038}",
        "\\u{103A}-\\u{103E}",
        "\\u{1056}-\\u{1059}",
        "\\u{105E}-\\u{1060}",
        "\\u{1062}-\\u{1064}",
        "\\u{1067}-\\u{106D}",
        "\\u{1071}-\\u{1074}",
        "\\u{1082}-\\u{108D}",
        "\\u{108F}",
        "\\u{109A}-\\u{109D}"
    ];
    var dM = `[${hM.join("")}]`;
    var pM = "\\u{1039}";
    var mM = `${cy}(${pM}${cy}|${dM})*`;
    ca.myanmar = mM;
});
const ly = c_2((ua)=>{
    "use strict";
    Object.defineProperty(ua, "__esModule", {
        value: true
    });
    ua.tamil = undefined;
    var gM = "[\\u{0B80}-\\u{0BFF}]";
    var yM = "[\\u{0B82}-\\u{0B83}\\u{0BBE}-\\u{0BD7}\\u{0962}\\u{0963}]";
    var bM = `${gM}${yM}*`;
    ua.tamil = bM;
});
const hy = c_2((la)=>{
    "use strict";
    Object.defineProperty(la, "__esModule", {
        value: true
    });
    la.telugu = undefined;
    var fy = "[\\u{0C00}-\\u{0C7F}]";
    var wM = "[\\u{0C00}-\\u{0C04}\\u{0C3E}-\\u{0C56}\\u{0C62}\\u{0C63}]";
    var vM = "\\u{0C4D}";
    var SM = `${fy}(${vM}${fy}|${wM})*`;
    la.telugu = SM;
});
const dy = c_2((fa)=>{
    "use strict";
    Object.defineProperty(fa, "__esModule", {
        value: true
    });
    fa.thai = undefined;
    var xM = "[\\u0E00-\\u0E7F]";
    var _M = "[\\u0E31\\u0E33-\\u0E3A\\u0E47-\\u0E4E]";
    var CM = `${xM}${_M}*`;
    fa.thai = CM;
});
const py = c_2((ha)=>{
    "use strict";
    Object.defineProperty(ha, "__esModule", {
        value: true
    });
    ha.tibetan = undefined;
    var PM = "[\\u{0F00}-\\u{0FFF}]";
    var kM = "[\\0F18\\0F19\\0F35\\0F37\\0F39\\0F3E\\0F3F\\u{0F71}-\\u{0F87}\\u{0F8D}-\\u{0FBC}\\u{0FC6}]";
    var EM = `${PM}${kM}*`;
    ha.tibetan = EM;
});
const gy = c_2((pr)=>{
    "use strict";
    Object.defineProperty(pr, "__esModule", {
        value: true
    });
    pr.emojiVariation = pr.keyCap = pr.countryFlag = undefined;
    var AM = "[\\u{1F1E6}-\\u{1F1FF}]{2}";
    pr.countryFlag = AM;
    var OM = "[0-9#\\*][\\u{FE0F}]?\\u{20E3}";
    pr.keyCap = OM;
    var LM = [
        "[\\u{2600}-\\u{26FF}]",
        "[\\u{2700}-\\u{27BF}]",
        "[\\u{1F300}-\\u{1F5FF}]",
        "[\\u{1F600}-\\u{1F64F}]",
        "[\\u{1F680}-\\u{1F6FF}]",
        "[\\u{1F700}-\\u{1F77F}]",
        "[\\u{1F900}-\\u{1F9FF}]"
    ];
    var my = `(${LM.join("|")})`;
    var TM = "\\u{200D}";
    var RM = "[\\u{FE0E}\\u{FE0F}]";
    var MM = "[\\u{1F3FB}-\\u{1F3FF}]";
    var FM = `${my}(${TM}${my}|${MM}|${RM})*`;
    pr.emojiVariation = FM;
});
const mr = c_2((T4, yy)=>{
    "use strict";
    var DM = Yg();
    var IM = Gg();
    var jM = Jg();
    var NM = Zg();
    var BM = Xg();
    var UM = ey();
    var qM = ry();
    var $M = iy();
    var zM = sy();
    var HM = ay();
    var WM = uy();
    var YM = ly();
    var VM = hy();
    var GM = dy();
    var KM = py();
    var xl = gy();
    var JM = [
        xl.countryFlag,
        xl.keyCap,
        xl.emojiVariation,
        DM.arabic,
        IM.bengali,
        jM.devanagari,
        NM.gujarati,
        BM.hebrew,
        UM.japaneseKana,
        qM.kannada,
        $M.khmer,
        zM.lao,
        HM.malayalam,
        WM.myanmar,
        YM.tamil,
        VM.telugu,
        GM.thai,
        KM.tibetan,
        "."
    ];
    var QM = new RegExp(`(${JM.join("|")})`, "gu");
    function splitGraphemes(t) {
        return t.match(QM) || [];
    }
    a_2(splitGraphemes, "splitGraphemes");
    yy.exports = {
        splitGraphemes
    };
});
const Gy = c_2((xV, Vy)=>{
    "use strict";
    function wF(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    a_2(wF, "hasOwnProperty");
    Vy.exports = (t, e, r, n)=>{
        e = e || "&";
        r = r || "=";
        const s = {};
        if (typeof t !== "string" || t.length === 0) {
            return s;
        }
        const o = /\+/g;
        t = t.split(e);
        let f = 1000;
        if (n && typeof n.maxKeys === "number") {
            f = n.maxKeys;
        }
        let t_length = t.length;
        if (f > 0 && t_length > f) {
            t_length = f;
        }
        for(let u = 0; u < t_length; ++u){
            const d = t[u].replace(o, "%20");
            const b = d.indexOf(r);
            let y;
            let w;
            let _;
            let A;
            if (b >= 0) {
                y = d.substr(0, b);
                w = d.substr(b + 1);
            } else {
                y = d;
                w = "";
            }
            _ = decodeURIComponent(y);
            A = decodeURIComponent(w);
            if (wF(s, _)) {
                if (vF(s[_])) {
                    s[_].push(A);
                } else {
                    s[_] = [
                        s[_],
                        A
                    ];
                }
            } else {
                s[_] = A;
            }
        }
        return s;
    };
    var vF = Array.isArray || ((t)=>Object.prototype.toString.call(t) === "[object Array]");
});
const Qy = c_2((CV, Jy)=>{
    "use strict";
    var ks = a_2((t)=>{
        switch(typeof t){
            case "string":
                return t;
            case "boolean":
                if (t) {
                    return "true";
                }
                return "false";
            case "number":
                if (isFinite(t)) {
                    return t;
                }
                return "";
            default:
                return "";
        }
    }, "stringifyPrimitive");
    Jy.exports = (t, e, r, n)=>{
        e = e || "&";
        r = r || "=";
        if (t === null) {
            t = undefined;
        }
        if (typeof t === "object") {
            return Ky(xF(t), (s)=>{
                const o = encodeURIComponent(ks(s)) + r;
                if (SF(t[s])) {
                    return Ky(t[s], (f)=>o + encodeURIComponent(ks(f))).join(e);
                }
                return o + encodeURIComponent(ks(t[s]));
            }).join(e);
        }
        if (n) {
            return encodeURIComponent(ks(n)) + r + encodeURIComponent(ks(t));
        }
        return "";
    };
    var SF = Array.isArray || ((t)=>Object.prototype.toString.call(t) === "[object Array]");
    function Ky(t, e) {
        if (t.map) {
            return t.map(e);
        }
        const r = [];
        for(let n = 0; n < t.length; n++){
            r.push(e(t[n], n));
        }
        return r;
    }
    a_2(Ky, "map");
    var xF = Object.keys || ((t)=>{
        const e = [];
        for(const r in t){
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                e.push(r);
            }
        }
        return e;
    });
});
const On = c_2((Es)=>{
    "use strict";
    Es.decode = Es.parse = Gy();
    Es.encode = Es.stringify = Qy();
});
export const da = c_2((BV, t0)=>{
    t0.exports = a_2((e, { trailing } = {})=>{
        if (typeof e !== "function") {
            throw new Error("argument is not function.");
        }
        let n = false;
        let s = [];
        return (...o)=>new Promise((resolve, reject)=>{
                (async ()=>{
                    if (n) {
                        return s.push({
                            resolve,
                            args: o
                        });
                    }
                    n = true;
                    let u = await e(...o);
                    resolve(u);
                    while(s.length > 0){
                        let d = s.length;
                        if (trailing) {
                            let { args } = s[d - 1];
                            u = await e(...args);
                        }
                        s.splice(0, d).forEach(({ resolve })=>resolve(u));
                    }
                    n = false;
                })().catch((u)=>{
                    n = false;
                    s = [];
                    reject(u);
                });
            });
    }, "asyncThrottle");
});
export const ea = c_2((qV, r0)=>{
    "use strict";
    var CF = a_2((e)=>new Promise((resolve)=>setTimeout(resolve, e)), "delay");
    r0.exports = CF;
});
export const Fa = c_2(($l, zl)=>{
    ((t, e)=>{
        if (typeof $l === "object" && typeof zl !== "undefined") {
            zl.exports = e();
        } else if (typeof define === "function" && define.amd) {
            define(e);
        } else {
            t.page = e();
        }
    })($l, ()=>{
        "use strict";
        const t = Array.isArray || ((E)=>Object.prototype.toString.call(E) == "[object Array]");
        const e = j;
        const r = c;
        const n = u;
        const s = d;
        const o = T;
        var f = new RegExp([
            "(\\\\.)",
            "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"
        ].join("|"), "g");
        function c(E) {
            const O = [];
            let D = 0;
            let L = 0;
            let V = "";
            let ie;
            while((ie = f.exec(E)) != null){
                const ce = ie[0];
                const he = ie[1];
                const re = ie.index;
                V += E.slice(L, re);
                L = re + ce.length;
                if (he) {
                    V += he[1];
                    continue;
                }
                if (V) {
                    O.push(V);
                    V = "";
                }
                const ue = ie[2];
                const Ie = ie[3];
                const rr = ie[4];
                const nr = ie[5];
                const de = ie[6];
                const it = ie[7];
                const repeat = de === "+" || de === "*";
                const optional = de === "?" || de === "*";
                const delimiter = ue || "/";
                const Je = rr || nr || (it ? ".*" : `[^${delimiter}]+?`);
                O.push({
                    name: Ie || D++,
                    prefix: ue || "",
                    delimiter,
                    optional,
                    repeat,
                    pattern: y(Je)
                });
            }
            if (L < E.length) {
                V += E.substr(L);
            }
            if (V) {
                O.push(V);
            }
            return O;
        }
        a_2(c, "parse");
        function u(E) {
            return d(c(E));
        }
        a_2(u, "compile");
        function d(E) {
            const O = new Array(E.length);
            for(let D = 0; D < E.length; D++){
                if (typeof E[D] === "object") {
                    O[D] = new RegExp(`^${E[D].pattern}\$`);
                }
            }
            return (L)=>{
                let V = "";
                const ie = L || {};
                for(let ce = 0; ce < E.length; ce++){
                    const he = E[ce];
                    if (typeof he === "string") {
                        V += he;
                        continue;
                    }
                    const re = ie[he.name];
                    let ue;
                    if (re == null) {
                        if (he.optional) {
                            continue;
                        }
                        throw new TypeError(`Expected "${he.name}" to be defined`);
                    }
                    if (t(re)) {
                        if (!he.repeat) {
                            throw new TypeError(`Expected "${he.name}" to not repeat, but received "${re}"`);
                        }
                        if (re.length === 0) {
                            if (he.optional) {
                                continue;
                            }
                            throw new TypeError(`Expected "${he.name}" to not be empty`);
                        }
                        for(let Ie = 0; Ie < re.length; Ie++){
                            ue = encodeURIComponent(re[Ie]);
                            if (!O[ce].test(ue)) {
                                throw new TypeError(`Expected all "${he.name}" to match "${he.pattern}", but received "${ue}"`);
                            }
                            V += (Ie === 0 ? he.prefix : he.delimiter) + ue;
                        }
                        continue;
                    }
                    ue = encodeURIComponent(re);
                    if (!O[ce].test(ue)) {
                        throw new TypeError(`Expected "${he.name}" to match "${he.pattern}", but received "${ue}"`);
                    }
                    V += he.prefix + ue;
                }
                return V;
            };
        }
        a_2(d, "tokensToFunction");
        function b(E) {
            return E.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
        }
        a_2(b, "escapeString");
        function y(E) {
            return E.replace(/([=!:$\/()])/g, "\\$1");
        }
        a_2(y, "escapeGroup");
        function w(E, O) {
            E.keys = O;
            return E;
        }
        a_2(w, "attachKeys");
        function _(E) {
            if (E.sensitive) {
                return "";
            }
            return "i";
        }
        a_2(_, "flags");
        function A(E, O) {
            const D = E.source.match(/\((?!\?)/g);
            if (D) {
                for(let L = 0; L < D.length; L++){
                    O.push({
                        name: L,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        pattern: null
                    });
                }
            }
            return w(E, O);
        }
        a_2(A, "regexpToRegexp");
        function F(E, O, D) {
            const L = [];
            for(let V = 0; V < E.length; V++){
                L.push(j(E[V], O, D).source);
            }
            const ie = new RegExp(`(?:${L.join("|")})`, _(D));
            return w(ie, O);
        }
        a_2(F, "arrayToRegexp");
        function Y(E, O, D) {
            for(var L = c(E), V = T(L, D), ie = 0; ie < L.length; ie++){
                if (typeof L[ie] !== "string") {
                    O.push(L[ie]);
                }
            }
            return w(V, O);
        }
        a_2(Y, "stringToRegexp");
        function T(E, O) {
            O = O || {};
            const O_strict = O.strict;
            const L = O.end !== false;
            let V = "";
            const ie = E[E.length - 1];
            const ce = typeof ie === "string" && /\/$/.test(ie);
            for (const re of E){
                if (typeof re === "string") {
                    V += b(re);
                } else {
                    const ue = b(re.prefix);
                    let Ie = re.pattern;
                    if (re.repeat) {
                        Ie += `(?:${ue}${Ie})*`;
                    }
                    if (re.optional) {
                        if (ue) {
                            Ie = `(?:${ue}(${Ie}))?`;
                        } else {
                            Ie = `(${Ie})?`;
                        }
                    } else {
                        Ie = `${ue}(${Ie})`;
                    }
                    V += Ie;
                }
            }
            if (!O_strict) {
                V = `${ce ? V.slice(0, -2) : V}(?:\\/(?=\$))?`;
            }
            if (L) {
                V += "$";
            } else {
                V += O_strict && ce ? "" : "(?=\\/|$)";
            }
            return new RegExp(`^${V}`, _(O));
        }
        a_2(T, "tokensToRegExp");
        function j(E, O, D) {
            O = O || [];
            if (t(O)) {
                if (!D) {
                    D = {};
                }
            } else {
                D = O;
                O = [];
            }
            if (E instanceof RegExp) {
                return A(E, O, D);
            }
            if (t(E)) {
                return F(E, O, D);
            }
            return Y(E, O, D);
        }
        a_2(j, "pathToRegexp");
        e.parse = r;
        e.compile = n;
        e.tokensToFunction = s;
        e.tokensToRegExp = o;
        const J = typeof document !== "undefined";
        const W = typeof window !== "undefined";
        const ae = typeof history !== "undefined";
        const te = typeof process !== "undefined";
        const X = J && document.ontouchstart ? "touchstart" : "click";
        const ne = W && !!(window.history.location || window.location);
        function ee() {
            this.callbacks = [];
            this.exits = [];
            this.current = "";
            this.len = 0;
            this._decodeURLComponents = true;
            this._base = "";
            this._strict = false;
            this._running = false;
            this._hashbang = false;
            this.clickHandler = this.clickHandler.bind(this);
            this._onpopstate = this._onpopstate.bind(this);
        }
        a_2(ee, "Page");
        ee.prototype.configure = function(E) {
            const O = E || {};
            this._window = O.window || W && window;
            this._decodeURLComponents = O.decodeURLComponents !== false;
            this._popstate = O.popstate !== false && W;
            this._click = O.click !== false && J;
            this._hashbang = !!O.hashbang;
            const _window = this._window;
            if (this._popstate) {
                _window.addEventListener("popstate", this._onpopstate, false);
            } else if (W) {
                _window.removeEventListener("popstate", this._onpopstate, false);
            }
            if (this._click) {
                _window.document.addEventListener(X, this.clickHandler, false);
            } else if (J) {
                _window.document.removeEventListener(X, this.clickHandler, false);
            }
            if (this._hashbang && W && !ae) {
                _window.addEventListener("hashchange", this._onpopstate, false);
            } else if (W) {
                _window.removeEventListener("hashchange", this._onpopstate, false);
            }
        };
        ee.prototype.base = function(E) {
            if (arguments.length === 0) {
                return this._base;
            }
            this._base = E;
        };
        ee.prototype._getBase = function() {
            let _base = this._base;
            if (_base) {
                return _base;
            }
            const O = W && this._window && this._window.location;
            if (W && this._hashbang && O && O.protocol === "file:") {
                _base = O.pathname;
            }
            return _base;
        };
        ee.prototype.strict = function(E) {
            if (arguments.length === 0) {
                return this._strict;
            }
            this._strict = E;
        };
        ee.prototype.start = function(E) {
            const O = E || {};
            this.configure(O);
            if (O.dispatch !== false) {
                this._running = true;
                let D;
                if (ne) {
                    const L = this._window;
                    const V = L.location;
                    if (this._hashbang && ~V.hash.indexOf("#!")) {
                        D = V.hash.substr(2) + V.search;
                    } else if (this._hashbang) {
                        D = V.search + V.hash;
                    } else {
                        D = V.pathname + V.search + V.hash;
                    }
                }
                this.replace(D, null, true, O.dispatch);
            }
        };
        ee.prototype.stop = function() {
            if (this._running) {
                this.current = "";
                this.len = 0;
                this._running = false;
                const E = this._window;
                if (this._click) {
                    E.document.removeEventListener(X, this.clickHandler, false);
                }
                if (W) {
                    E.removeEventListener("popstate", this._onpopstate, false);
                }
                if (W) {
                    E.removeEventListener("hashchange", this._onpopstate, false);
                }
            }
        };
        ee.prototype.show = function(E, O, D, L) {
            const V = new q(E, O, this);
            const prevContext = this.prevContext;
            this.prevContext = V;
            this.current = V.path;
            if (D !== false) {
                this.dispatch(V, prevContext);
            }
            if (V.handled !== false && L !== false) {
                V.pushState();
            }
            return V;
        };
        ee.prototype.back = function(E, O) {
            const D = this;
            if (this.len > 0) {
                const L = this._window;
                if (ae) {
                    L.history.back();
                }
                this.len--;
            } else {
                setTimeout(E ? ()=>{
                    D.show(E, O);
                } : ()=>{
                    D.show(D._getBase(), O);
                });
            }
        };
        ee.prototype.redirect = function(E, O) {
            const D = this;
            if (typeof E === "string" && typeof O === "string") {
                S.call(this, E, (L)=>{
                    setTimeout(()=>{
                        D.replace(O);
                    }, 0);
                });
            }
            if (typeof E === "string" && typeof O === "undefined") {
                setTimeout(()=>{
                    D.replace(E);
                }, 0);
            }
        };
        ee.prototype.replace = function(E, O, D, L) {
            const V = new q(E, O, this);
            const prevContext = this.prevContext;
            this.prevContext = V;
            this.current = V.path;
            V.init = D;
            V.save();
            if (L !== false) {
                this.dispatch(V, prevContext);
            }
            return V;
        };
        ee.prototype.dispatch = function(E, O) {
            let D = 0;
            let L = 0;
            const V = this;
            function ie() {
                const he = V.exits[L++];
                if (!he) {
                    return ce();
                }
                he(O, ie);
            }
            a_2(ie, "nextExit");
            function ce() {
                const he = V.callbacks[D++];
                if (E.path !== V.current) {
                    E.handled = false;
                    return;
                }
                if (!he) {
                    return k.call(V, E);
                }
                he(E, ce);
            }
            a_2(ce, "nextEnter");
            if (O) {
                ie();
            } else {
                ce();
            }
        };
        ee.prototype.exit = function(E, O) {
            if (typeof E === "function") {
                return this.exit("*", E);
            }
            const D = new B(E, null, this);
            for(let L = 1; L < arguments.length; ++L){
                this.exits.push(D.middleware(arguments[L]));
            }
        };
        ee.prototype.clickHandler = function(E) {
            if (this._which(E) === 1 && !(E.metaKey || E.ctrlKey || E.shiftKey) && !E.defaultPrevented) {
                let O = E.target;
                const D = E.path || (E.composedPath ? E.composedPath() : null);
                if (D) {
                    for(let L = 0; L < D.length; L++){
                        if (D[L].nodeName && D[L].nodeName.toUpperCase() === "A" && D[L].href) {
                            O = D[L];
                            break;
                        }
                    }
                }
                while(O && O.nodeName.toUpperCase() !== "A"){
                    O = O.parentNode;
                }
                if (!(!O || O.nodeName.toUpperCase() !== "A")) {
                    const V = typeof O.href === "object" && O.href.constructor.name === "SVGAnimatedString";
                    if (!(O.hasAttribute("download") || O.getAttribute("rel") === "external")) {
                        const ie = O.getAttribute("href");
                        if (!(!this._hashbang && this._samePath(O) && (O.hash || ie === "#")) && !(ie && ie.indexOf("mailto:") > -1) && !(V ? O.target.baseVal : O.target) && !(!V && !this.sameOrigin(O.href))) {
                            let ce = V ? O.href.baseVal : O.pathname + O.search + (O.hash || "");
                            ce = ce[0] !== "/" ? `/${ce}` : ce;
                            if (te && ce.match(/^\/[a-zA-Z]:\//)) {
                                ce = ce.replace(/^\/[a-zA-Z]:\//, "/");
                            }
                            const he = ce;
                            const re = this._getBase();
                            if (ce.indexOf(re) === 0) {
                                ce = ce.substr(re.length);
                            }
                            if (this._hashbang) {
                                ce = ce.replace("#!", "");
                            }
                            if (!(re && he === ce && (!ne || this._window.location.protocol !== "file:"))) {
                                E.preventDefault();
                                this.show(he);
                            }
                        }
                    }
                }
            }
        };
        ee.prototype._onpopstate = (()=>{
            let E = false;
            if (W) {
                if (J && document.readyState === "complete") {
                    E = true;
                } else {
                    window.addEventListener("load", ()=>{
                        setTimeout(()=>{
                            E = true;
                        }, 0);
                    });
                }
                return a_2(function(D) {
                    if (E) {
                        const L = this;
                        if (D.state) {
                            const V = D.state.path;
                            L.replace(V, D.state);
                        } else if (ne) {
                            const ie = L._window.location;
                            L.show(ie.pathname + ie.search + ie.hash, undefined, undefined, false);
                        }
                    }
                }, "onpopstate");
            }
            return ()=>{};
        })();
        ee.prototype._which = function(E) {
            E = E || W && this._window.event;
            return E.which ?? E.button;
        };
        ee.prototype._toURL = function(E) {
            const _window = this._window;
            if (typeof URL === "function" && ne) {
                return new URL(E, _window.location.toString());
            }
            if (J) {
                const D = _window.document.createElement("a");
                D.href = E;
                return D;
            }
        };
        ee.prototype.sameOrigin = function(E) {
            if (!E || !ne) {
                return false;
            }
            const O = this._toURL(E);
            const _window = this._window;
            const D_location = _window.location;
            return D_location.protocol === O.protocol && D_location.hostname === O.hostname && (D_location.port === O.port || D_location.port === "" && (O.port == 80 || O.port == 443));
        };
        ee.prototype._samePath = function(E) {
            if (!ne) {
                return false;
            }
            const _window = this._window;
            const O_location = _window.location;
            return E.pathname === O_location.pathname && E.search === O_location.search;
        };
        ee.prototype._decodeURLEncodedURIComponent = function(E) {
            if (typeof E !== "string") {
                return E;
            }
            if (this._decodeURLComponents) {
                return decodeURIComponent(E.replace(/\+/g, " "));
            }
            return E;
        };
        function v() {
            const E = new ee;
            function O() {
                return S.apply(E, arguments);
            }
            a_2(O, "pageFn");
            O.callbacks = E.callbacks;
            O.exits = E.exits;
            O.base = E.base.bind(E);
            O.strict = E.strict.bind(E);
            O.start = E.start.bind(E);
            O.stop = E.stop.bind(E);
            O.show = E.show.bind(E);
            O.back = E.back.bind(E);
            O.redirect = E.redirect.bind(E);
            O.replace = E.replace.bind(E);
            O.dispatch = E.dispatch.bind(E);
            O.exit = E.exit.bind(E);
            O.configure = E.configure.bind(E);
            O.sameOrigin = E.sameOrigin.bind(E);
            O.clickHandler = E.clickHandler.bind(E);
            O.create = v;
            Object.defineProperty(O, "len", {
                get: a_2(()=>E.len, "get"),
                set: a_2((D)=>{
                    E.len = D;
                }, "set")
            });
            Object.defineProperty(O, "current", {
                get: a_2(()=>E.current, "get"),
                set: a_2((D)=>{
                    E.current = D;
                }, "set")
            });
            O.Context = q;
            O.Route = B;
            return O;
        }
        a_2(v, "createPage");
        function S(E, O) {
            if (typeof E === "function") {
                return S.call(this, "*", E);
            }
            if (typeof O === "function") {
                const D = new B(E, null, this);
                for(let L = 1; L < arguments.length; ++L){
                    this.callbacks.push(D.middleware(arguments[L]));
                }
            } else {
                if (typeof E === "string") {
                    this[typeof O === "string" ? "redirect" : "show"](E, O);
                } else {
                    this.start(E);
                }
            }
        }
        a_2(S, "page");
        function k(E) {
            if (!E.handled) {
                let O;
                const D = this;
                const L = D._window;
                if (D._hashbang) {
                    O = ne && this._getBase() + L.location.hash.replace("#!", "");
                } else {
                    O = ne && L.location.pathname + L.location.search;
                }
                if (O !== E.canonicalPath) {
                    D.stop();
                    E.handled = false;
                    if (ne) {
                        L.location.href = E.canonicalPath;
                    }
                }
            }
        }
        a_2(k, "unhandled");
        function x(E) {
            return E.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        a_2(x, "escapeRegExp");
        function q(E, O, D) {
            const L = this.page = D || S;
            const { _window, _hashbang } = L;
            const ce = L._getBase();
            if (E[0] === "/" && E.indexOf(ce) !== 0) {
                E = ce + (_hashbang ? "#!" : "") + E;
            }
            const he = E.indexOf("?");
            this.canonicalPath = E;
            const re = new RegExp(`^${x(ce)}`);
            this.path = E.replace(re, "") || "/";
            if (_hashbang) {
                this.path = this.path.replace("#!", "") || "/";
            }
            this.title = J && _window.document.title;
            this.state = O || {};
            this.state.path = E;
            this.querystring = ~he ? L._decodeURLEncodedURIComponent(E.slice(he + 1)) : "";
            this.pathname = L._decodeURLEncodedURIComponent(~he ? E.slice(0, he) : E);
            this.params = {};
            this.hash = "";
            if (!_hashbang) {
                if (!~this.path.indexOf("#")) {
                    return;
                }
                const ue = this.path.split("#");
                this.path = this.pathname = ue[0];
                this.hash = L._decodeURLEncodedURIComponent(ue[1]) || "";
                this.querystring = this.querystring.split("#")[0];
            }
        }
        a_2(q, "Context");
        q.prototype.pushState = function() {
            const page = this.page;
            const { _window, _hashbang } = page;
            page.len++;
            if (ae) {
                _window.history.pushState(this.state, this.title, _hashbang && this.path !== "/" ? `#!${this.path}` : this.canonicalPath);
            }
        };
        q.prototype.save = function() {
            const page = this.page;
            if (ae) {
                page._window.history.replaceState(this.state, this.title, page._hashbang && this.path !== "/" ? `#!${this.path}` : this.canonicalPath);
            }
        };
        function B(E, O, D) {
            const L = this.page = D || I;
            const V = O || {};
            V.strict = V.strict || L._strict;
            this.path = E === "*" ? "(.*)" : E;
            this.method = "GET";
            this.regexp = e(this.path, this.keys = [], V);
        }
        a_2(B, "Route");
        B.prototype.middleware = function(E) {
            const O = this;
            return (D, L)=>{
                if (O.match(D.path, D.params)) {
                    D.routePath = O.path;
                    return E(D, L);
                }
                L();
            };
        };
        B.prototype.match = function(E, O) {
            const keys = this.keys;
            const L = E.indexOf("?");
            const V = ~L ? E.slice(0, L) : E;
            const ie = this.regexp.exec(decodeURIComponent(V));
            if (!ie) {
                return false;
            }
            delete O[0];
            for(let ce = 1, he = ie.length; ce < he; ++ce){
                const re = keys[ce - 1];
                const ue = this.page._decodeURLEncodedURIComponent(ie[ce]);
                if (ue !== undefined || !hasOwnProperty.call(O, re.name)) {
                    O[re.name] = ue;
                }
            }
            return true;
        };
        var I = v();
        const Q = I;
        Q.default = I;
        return Q;
    });
});
const c_ = c_2((dQ, a_)=>{
    a_.exports = (t, e)=>{
        const r = [];
        function n(s, o) {
            if (o.length === 0) {
                if (typeof e === "function") {
                    e(s);
                } else {
                    r.push(s);
                }
                return;
            }
            for(let f = 0; f < o.length; f++){
                const c = o.concat();
                const u = c.splice(f, 1);
                n(s.concat(u), c);
            }
        }
        a_2(n, "pickEach");
        n([], t);
        if (typeof e !== "function") {
            return r;
        }
    };
});
const y_ = c_2((IQ, g_)=>{
    var Sc = [
        2147483648,
        0,
        0,
        0
    ];
    var vB = a_2((t)=>t >= 65 && t <= 90, "isupper");
    var SB = a_2((t)=>t >= 97 && t <= 122, "islower");
    var xB = a_2((t)=>{
        if (vB(t)) {
            return t + 32;
        }
        return t;
    }, "tolower");
    var _B = a_2((t)=>{
        if (SB(t)) {
            return t - 32;
        }
        return t;
    }, "toupper");
    g_.exports = a_2((e)=>{
        let r = [];
        let n = 0;
        let s = 0;
        let o = 2147483648;
        for(let d = 0; d < 65536; d++){
            r[d] = 0;
        }
        for (let d of c(e)){
            if (d === 32) {
                n |= o;
            } else {
                r[d] |= o;
                r[_B(d)] |= o;
                r[xB(d)] |= o;
                o = o >>> 1;
            }
        }
        s = o;
        function f([y, w, _, A] = Sc, b = "") {
            for (let F of c(b)){
                o = r[F];
                A = A & n | (A & o) >>> 1 | _ >>> 1 | _;
                _ = _ & n | (_ & o) >>> 1 | w >>> 1 | w;
                w = w & n | (w & o) >>> 1 | y >>> 1 | y;
                y = y & n | (y & o) >>> 1;
                w |= y >>> 1;
                _ |= w >>> 1;
                A |= _ >>> 1;
            }
            return [
                y,
                w,
                _,
                A
            ];
        }
        a_2(f, "getState");
        function c(d) {
            let b = [];
            for (let y of d.split("")){
                let w = y.charCodeAt(0);
                b.push(w);
            }
            return b;
        }
        a_2(c, "unpack");
        function u(d, b = 0) {
            let y = f(Sc, d);
            if (b >= Sc.length) {
                b = Sc.length - 1;
            }
            return (y[b] & s) !== 0;
        }
        a_2(u, "match");
        u.source = e;
        return u;
    }, "Asearch");
});
const hC = c_2((fte, fC)=>{
    "use strict";
    fC.exports = (t)=>{
        if (typeof t === "object") {
            return lC(t, []);
        }
        if (typeof t === "function") {
            return `[Function: ${t.name || "anonymous"}]`;
        }
        return t;
    };
    function lC(t, e) {
        let r;
        if (Array.isArray(t)) {
            r = [];
        } else {
            r = {};
        }
        e.push(t);
        Object.keys(t).forEach((n)=>{
            const s = t[n];
            if (typeof s !== "function") {
                if (!s || typeof s !== "object") {
                    r[n] = s;
                    return;
                }
                if (e.indexOf(t[n]) === -1) {
                    r[n] = lC(t[n], e.slice(0));
                    return;
                }
                r[n] = "[Circular]";
            }
        });
        if (typeof t.name === "string") {
            r.name = t.name;
        }
        if (typeof t.message === "string") {
            r.message = t.message;
        }
        if (typeof t.stack === "string") {
            r.stack = t.stack;
        }
        return r;
    }
    a_2(lC, "destroyCircular");
});
const pC = c_2((Dc)=>{
    "use strict";
    Object.defineProperty(Dc, "__esModule", {
        value: true
    });
    var XB = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
        if (t && typeof Symbol === "function" && t.constructor === Symbol) {
            return "symbol";
        }
        return typeof t;
    };
    Dc.default = e2;
    Dc.isSerializedError = dC;
    function e2(t) {
        if (dC(t)) {
            return Object.assign(new Error, {
                stack: undefined
            }, t);
        }
        return t;
    }
    a_2(e2, "deserializeError");
    function dC(t) {
        return t && (typeof t === "undefined" ? "undefined" : XB(t)) === "object" && typeof t.name === "string" && typeof t.message === "string";
    }
    a_2(dC, "isSerializedError");
});
const gC = c_2((mte, mC)=>{
    var _default = pC().default;
    mC.exports = _default;
});
const Qh = c_2((kr)=>{
    "use strict";
    Object.defineProperty(kr, "__esModule", {
        value: true
    });
    kr.SocketIOError = kr.TimeoutError = undefined;
    var r2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
        if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
        }
        return typeof t;
    };
    kr.convertErrorToObject = o2;
    kr.convertObjectToError = a2;
    var n2 = hC();
    var i2 = yC(n2);
    var s2 = gC();
    var Kh = yC(s2);
    function yC(t) {
        if (t && t.__esModule) {
            return t;
        }
        return {
            default: t
        };
    }
    a_2(yC, "_interopRequireDefault");
    function bC(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    a_2(bC, "_classCallCheck");
    function wC(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        if (e && (typeof e === "object" || typeof e === "function")) {
            return e;
        }
        return t;
    }
    a_2(wC, "_possibleConstructorReturn");
    function vC(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    a_2(vC, "_inherits");
    function Jh(t) {
        delete t.stack;
        return i2.default(t);
    }
    a_2(Jh, "serializeErrorWithoutStack");
    function o2(t) {
        if (t instanceof Error) {
            return Jh(t);
        }
        if (t instanceof Array) {
            return t.map(Jh);
        }
        const e = {};
        for(const r in t){
            if (t.hasOwnProperty(r)) {
                e[r] = Jh(t[r]);
            }
        }
        return e;
    }
    a_2(o2, "convertErrorToObject");
    function a2(t) {
        if (t instanceof Error) {
            return t;
        }
        if (t instanceof Array) {
            return t.map(Kh.default);
        }
        if ((typeof t === "undefined" ? "undefined" : r2(t)) !== "object") {
            return t;
        }
        let e = Kh.default(t);
        if (e !== t) {
            return e;
        }
        e = {};
        for(const r in t){
            e[r] = Kh.default(t[r]);
        }
        return e;
    }
    a_2(a2, "convertObjectToError");
    var gte = kr.TimeoutError = ((Error_1)=>{
        vC(e, Error_1);
        function e(r) {
            bC(this, e);
            const n = wC(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r));
            n.name = "TimeoutError";
            return n;
        }
        a_2(e, "TimeoutError");
        return e;
    })(Error);
    var yte = kr.SocketIOError = ((Error_1)=>{
        vC(e, Error_1);
        function e(r) {
            bC(this, e);
            const n = wC(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r));
            n.name = "SocketIOError";
            return n;
        }
        a_2(e, "SocketIOError");
        return e;
    })(Error);
});
const xC = c_2((vte, SC)=>{
    "use strict";
    function c2(t) {
        if (Array.isArray(t)) {
            for(var e = 0, r = Array(t.length); e < t.length; e++){
                r[e] = t[e];
            }
            return r;
        } else {
            return Array.from(t);
        }
    }
    a_2(c2, "_toConsumableArray");
    SC.exports = (...e)=>(...s)=>{
            const f = e.concat((...d)=>d.slice(0, s.length));
            const c = a_2(function u(...b) {
                return f.shift()(...c2(b.length > 0 ? b : s).concat([
                    u
                ]));
            }, "next");
            return c();
        };
});
const _C = c_2((Zh)=>{
    "use strict";
    Object.defineProperty(Zh, "__esModule", {
        value: true
    });
    var u2 = (()=>{
        function t(e, r) {
            for (const s of r){
                s.enumerable = s.enumerable || false;
                s.configurable = true;
                if ("value" in s) {
                    s.writable = true;
                }
                Object.defineProperty(e, s.key, s);
            }
        }
        a_2(t, "defineProperties");
        return (e, r, n)=>{
            if (r) {
                t(e.prototype, r);
            }
            if (n) {
                t(e, n);
            }
            return e;
        };
    })();
    var Ic = Qh();
    var l2 = xC();
    var f2 = h2(l2);
    function h2(t) {
        if (t && t.__esModule) {
            return t;
        }
        return {
            default: t
        };
    }
    a_2(h2, "_interopRequireDefault");
    function d2(t) {
        if (Array.isArray(t)) {
            for(var e = 0, r = Array(t.length); e < t.length; e++){
                r[e] = t[e];
            }
            return r;
        } else {
            return Array.from(t);
        }
    }
    a_2(d2, "_toConsumableArray");
    function p2(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    a_2(p2, "_classCallCheck");
    var m2 = (()=>{
        function t(e, r = {}) {
            p2(this, t);
            this.io = e;
            this.options = {
                event: "socket.io-request",
                timeout: 90000,
                ...r
            };
        }
        a_2(t, "SocketIORequest");
        u2(t, [
            {
                key: "request",
                value: a_2(function(r, n) {
                    const s = this;
                    if (typeof r !== "string") {
                        throw new Error('argument "method" is missing');
                    }
                    return new Promise((resolve, reject)=>{
                        s.io.emit(s.options.event, {
                            method: r,
                            data: n
                        }, (d)=>{
                            clearTimeout(u);
                            s.io.removeListener("disconnect", c);
                            if (d.error) {
                                return reject(Ic.convertObjectToError(d.error));
                            }
                            resolve(d.data);
                        });
                        var c = a_2(()=>{
                            clearTimeout(u);
                            reject(new Ic.SocketIOError("disconnect"));
                        }, "onDisconnect");
                        var u = setTimeout(()=>{
                            s.io.removeListener("disconnect", c);
                            reject(new Ic.TimeoutError(`exceeded ${s.options.timeout} (msec)`));
                        }, s.options.timeout);
                        s.io.once("disconnect", c);
                    });
                }, "request")
            },
            {
                key: "response",
                value: a_2(function(r, ...s) {
                    if (typeof r !== "string") {
                        throw new Error('argument "method" is missing');
                    }
                    if (s.find((c)=>typeof c !== "function")) {
                        throw new Error('"middlewares" must be a function');
                    }
                    const f = f2.default.apply(undefined, d2(s.concat()));
                    this.io.on(this.options.event, (c, u)=>{
                        if (c.method === r) {
                            const d = a_2((y)=>u({
                                    data: y
                                }), "res");
                            d.error = (b)=>u({
                                    error: Ic.convertErrorToObject(b)
                                });
                            f(c.data, d);
                        }
                    });
                }, "response")
            }
        ]);
        return t;
    })();
    Zh.default = m2;
});
const ed = c_2((Cte, Xh)=>{
    "use strict";
    var g2 = _C();
    var y2 = b2(g2);
    var CC = Qh();
    function b2(t) {
        if (t && t.__esModule) {
            return t;
        }
        return {
            default: t
        };
    }
    a_2(b2, "_interopRequireDefault");
    Xh.exports = (t, e)=>new y2.default(t, e);
    Object.assign(Xh.exports, {
        TimeoutError: CC.TimeoutError,
        SocketIOError: CC.SocketIOError
    });
});
const jp = e_2(Ip(), 1);
const RA = [
    "indent",
    "quote",
    "strong",
    "deco"
];
function U(t, e) {
    if (!(t instanceof RegExp)) {
        throw new Error("pattern is not a RegExp");
    }
    if (typeof e !== "function") {
        throw new Error("transformToNode is not a function");
    }
    let r = new RegExp(`(${jp.default(t)})`, t.flags);
    let n = a_2((s)=>xu(s, (o)=>{
            if (!t.test(o)) {
                return o;
            }
            let f = o.split(r).filter((c)=>c).map((c)=>{
                let u = c.match(t);
                if (u) {
                    return e(u);
                }
                return c;
            });
            if (f.length === 1) {
                return f[0];
            }
            return f;
        }), "nodeParser");
    n.pattern = t;
    return n;
}
a_2(U, "createNodeParser");
function xu(t, e) {
    return t && (typeof t === "string" ? e(t) : t instanceof Array ? b_1(t.map((r)=>xu(r, e))) : (RA.includes(t.type) && (t.children = xu(t.children, e)), t));
}
a_2(xu, "parseNodeTree");
function Pe(...t) {
    return (e)=>{
        for (let r of t){
            e = r(e);
        }
        return e;
    };
}
a_2(Pe, "combineNodeParsers");
const Np = U(/\[(\s+)\]/, ([t, e])=>({
        type: "blank",
        unit: {
            content: e,
            whole: t
        },
        children: e
    }));
function Ne() {
    return typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement === "function";
}
a_2(Ne, "hasDom");
const MA = Ne() ? `${location.protocol}//${location.host}` : process.env.APP_URL;
export const ha = new RegExp(`^${MA}/files/([a-z0-9]{24})(?:|\\.[a-zA-Z0-9]+)(?:|\\?[^\\s]*)$`);
const be = a_2((t)=>t.match(ha)[1], "parseFileId");
const FA = /\[(https?:\/\/(?=[^\]\s]+\])[^\]\s]+\.(?:mp4|webm|mov)(?:\?[^\]\s]+)?)\]/i;
const Bp = U(FA, ([t, e])=>({
        type: "video",
        unit: {
            whole: t,
            content: e
        },
        children: e,
        fileId: ha.test(e) ? be(e) : undefined
    }));
const DA = /\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?=[^\]\s]+\])[^\]\s]*\.(?:mp4|webm|mov)(?:\?[^\]\s]+)?))\]/i;
const IA = U(DA, ([t, e, r, n])=>({
        type: "videoLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            video: n
        },
        fileId: ha.test(n) ? be(n) : undefined,
        fileIds: [
            ha.test(n) && be(n),
            ha.test(r) && be(r)
        ].filter((s)=>s),
        children: e
    }));
const jA = /\[((https?:\/\/(?=[^\]\s]+\s+https?:\/\/[^\]\s]+\])[^\]\s]*\.(?:mp4|webm|mov)(?:\?[^\]\s]+)?)\s+(https?:\/\/[^\]\s]+))\]/i;
const NA = U(jA, ([t, e, r, n])=>({
        type: "videoLink",
        unit: {
            whole: t,
            content: e,
            video: r,
            link: n
        },
        fileId: ha.test(r) ? be(r) : undefined,
        fileIds: [
            ha.test(r) && be(r),
            ha.test(n) && be(n)
        ].filter((s)=>s),
        children: e
    }));
const Up = Pe(IA, NA);
const BA = U(/\[(https?:\/\/vimeo\.com\/([0-9]+)(?:\?[^\s\]]+|))\]/i, ([t, e, r])=>({
        type: "vimeo",
        unit: {
            whole: t,
            content: e,
            videoId: r,
            params: {}
        },
        children: e
    }));
const UA = U(/\[(https?:\/\/vimeo\.com\/([0-9]+)\/([a-z0-9]+)(?:\?[^\s\]]+|))\]/i, ([t, e, r, h])=>({
        type: "vimeo",
        unit: {
            whole: t,
            content: e,
            videoId: r,
            params: {
                h
            }
        },
        children: e
    }));
const qp = Pe(BA, UA);
const qA = U(/\[(https?:\/\/open\.spotify\.com\/(?:[^/]+\/|)(track|artist|playlist|album|episode|show)\/([a-zA-Z\d_-]+)(?:\?[^\s]{0,100}|))\]/i, ([t, e, r, n])=>({
        type: "spotify",
        unit: {
            whole: t,
            content: e,
            videoId: n,
            params: {
                type: r
            }
        },
        children: e
    }));
const $A = U(/\[(https?:\/\/anchor\.fm\/([a-zA-Z\d_-]+)\/episodes\/([a-zA-Z\d_-]+(?:\/[a-zA-Z\d_-]+)?)(?:\?[^\s]{0,100}|))\]/i, ([t, e, r, n])=>({
        type: "anchor-fm",
        unit: {
            whole: t,
            content: e,
            videoId: n,
            username: r
        },
        children: e
    }));
const zA = U(/\[(https?:\/\/podcasters\.spotify\.com\/pod\/show\/([a-zA-Z\d_-]+)\/episodes\/([a-zA-Z\d_-]+(?:\/[a-zA-Z\d_-]+)?)(?:\?[^\s]{0,100}|))\]/i, ([t, e, r, n])=>({
        type: "anchor-fm",
        unit: {
            whole: t,
            content: e,
            videoId: n,
            username: r
        },
        children: e
    }));
const $p = Pe(qA, $A, zA);
const HA = /\[(https?:\/\/[^\]\s]*\.(?:wav|mp3|weba|ogg|aac))\]/i;
const zp = U(HA, ([t, e])=>({
        type: "audio",
        unit: {
            whole: t,
            content: e
        },
        fileId: ha.test(e) ? be(e) : undefined,
        children: e
    }));
const WA = /\[((https?:\/\/[^\s\]]+\.(?:wav|mp3|weba|ogg|aac))(?=\s[^\]]*\])\s+([^\]]*))\]/i;
const YA = U(WA, ([t, e, r, n])=>({
        type: "audioLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            title: n
        },
        fileId: ha.test(r) ? be(r) : undefined,
        children: e
    }));
const VA = /\[(([^[\]]+)\s+(https?:\/\/[^\s\]]+\.(?:wav|mp3|weba|ogg|aac)))\]/i;
const GA = U(VA, ([t, e, r, n])=>({
        type: "audioLink",
        unit: {
            whole: t,
            content: e,
            title: r,
            link: n
        },
        fileId: ha.test(n) ? be(n) : undefined,
        children: e
    }));
const Hp = Pe(YA, GA);
const KA = /\[(https?:\/\/(?=[^\]\s]+\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?)\]/i;
const Wp = U(KA, ([t, e])=>({
        type: "image",
        unit: {
            whole: t,
            content: e
        },
        fileId: ha.test(e) ? be(e) : undefined,
        children: e
    }));
const JA = /\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?=[^\]\s]+\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?))\]/i;
const QA = U(JA, ([t, e, r, n])=>({
        type: "imageLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            image: n
        },
        fileId: ha.test(n) ? be(n) : undefined,
        fileIds: [
            ha.test(n) && be(n),
            ha.test(r) && be(r)
        ].filter((s)=>s),
        children: e
    }));
const ZA = /\[((https?:\/\/(?=[^\]\s]+\s+https?:\/\/[^\]\s]+\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?)\s+(https?:\/\/[^\]\s]+))\]/i;
const XA = U(ZA, ([t, e, r, n])=>({
        type: "imageLink",
        unit: {
            whole: t,
            content: e,
            image: r,
            link: n
        },
        fileId: ha.test(r) ? be(r) : undefined,
        fileIds: [
            ha.test(r) && be(r),
            ha.test(n) && be(n)
        ].filter((s)=>s),
        children: e
    }));
const Yp = Pe(QA, XA);
const eO = U(/\[(https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32}(?:\/raw)?)]/, ([t, e])=>({
        type: "gyazo",
        unit: {
            whole: t,
            content: e
        },
        children: e
    }));
const tO = U(/\[(https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+)\]/, ([t, e])=>({
        type: "gyazo",
        unit: {
            whole: t,
            content: e
        },
        children: e
    }));
const Vp = Pe(eO, tO);
const rO = /\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32}(?:\/raw)?))\]/;
const nO = U(rO, ([t, e, r, n])=>({
        type: "gyazoLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            gyazo: n
        },
        children: e
    }));
const iO = U(/\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+))\]/, ([t, e, r, n])=>({
        type: "gyazoLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            gyazo: n
        },
        children: e
    }));
const sO = /\[((https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32}(?:\/raw)?)\s+(https?:\/\/[^\]\s]+))\]/;
const oO = U(sO, ([t, e, r, n])=>({
        type: "gyazoLink",
        unit: {
            whole: t,
            content: e,
            link: n,
            gyazo: r
        },
        children: e
    }));
const aO = U(/\[((https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+)\s+(https?:\/\/[^\]\s]+))\]/, ([t, e, r, n])=>({
        type: "gyazoLink",
        unit: {
            whole: t,
            content: e,
            link: n,
            gyazo: r
        },
        children: e
    }));
const Gp = Pe(nO, iO, oO, aO);
const cO = U(/\[([^[\]]+)\]/, ([, t])=>({
        type: "link",
        unit: {
            page: t,
            get content () {
                return this.page;
            },
            get whole () {
                return `[${this.page}]`;
            }
        },
        children: t
    }));
const uO = U(/\[(([^[\]]+)#([a-f\d]{24,32}))\]/, ([, t, e, r])=>({
        type: "link",
        unit: {
            page: e,
            line: r,
            get content () {
                return `${this.page}#${this.line}`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    }));
const lO = U(/\[(\/([a-z0-9-]+)\/([^[\]]+))\]/i, ([, t, e, r])=>({
        type: "link",
        unit: {
            project: e,
            page: r,
            get content () {
                if (this.project) {
                    return `/${this.project}/${this.page}`;
                }
                return this.page;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    }));
const fO = U(/\[(\/([a-z0-9-]+)\/([^[\]]+)#([a-f\d]{24,32}))\]/i, ([, t, e, r, n])=>({
        type: "link",
        unit: {
            project: e,
            page: r,
            line: n,
            get content () {
                if (this.project) {
                    return `/${this.project}/${this.page}#${this.line}`;
                }
                return `${this.page}#${this.line}`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    }));
const hO = U(/\[(\/([a-z0-9-]+)\/?)\]/i, ([t, e, r])=>({
        type: "link",
        unit: {
            whole: t,
            content: e,
            project: r
        },
        children: e
    }));
const Kp = Pe(hO, fO, lO, uO, cO);
const dO = /(^|\s)#([^\s]+)/;
const Jp = U(dO, ([, t, e])=>{
    if (/^#+$/.test(e)) {
        if (t) {
            return [
                t,
                `#${e}`
            ];
        }
        return `#${e}`;
    }
    let r = {
        type: "hashTag",
        unit: {
            page: e,
            tag: "#",
            get content () {
                return this.page;
            },
            get whole () {
                return `#${this.page}`;
            }
        },
        children: `#${e}`
    };
    if (t) {
        return [
            t,
            r
        ];
    }
    return r;
});
const pO = U(/\[(([^[\]]+)\.icon)\]/, ([, t, e])=>({
        type: "icon",
        unit: {
            page: e,
            size: 1,
            get content () {
                return `${this.page}.icon`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    }));
const mO = U(/\[(([^[\]]+)\.icon([*x])([1-9]\d*))\]/, ([, t, e, r, n])=>{
    n = n - 0;
    return {
        type: "icon",
        unit: {
            page: e,
            size: n,
            get content () {
                return `${this.page}.icon${r}${n}`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    };
});
const gO = U(/\[(\/([a-zA-Z0-9-]+)\/([^[\]]+)\.icon)\]/, ([, t, e, r])=>({
        type: "icon",
        unit: {
            project: e,
            page: r,
            size: 1,
            get content () {
                if (this.project) {
                    return `/${this.project}/${this.page}.icon`;
                }
                return `${this.page}.icon`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    }));
const yO = U(/\[(\/([a-zA-Z0-9-]+)\/([^[\]]+)\.icon([*x])([1-9]\d*))\]/, ([, t, e, r, n, s])=>{
    s = s - 0;
    return {
        type: "icon",
        unit: {
            project: e,
            page: r,
            size: s,
            get content () {
                if (this.project) {
                    return `/${this.project}/${this.page}.icon${n}${s}`;
                }
                return `${this.page}.icon${n}${s}`;
            },
            get whole () {
                return `[${this.content}]`;
            }
        },
        children: t
    };
});
export const ia = Pe(gO, yO, pO, mO);
const bO = U(/\[\[(([^[\]]+)\.icon)\]\]/, ([, t, e])=>({
        type: "strong-icon",
        unit: {
            page: e,
            size: 1,
            get content () {
                return `${this.page}.icon`;
            },
            get whole () {
                return `[[${this.content}]]`;
            }
        },
        children: t
    }));
const wO = U(/\[\[(([^[\]]+)\.icon([*x])([1-9]\d*))\]\]/, ([, t, e, r, n])=>{
    n = n - 0;
    return {
        type: "strong-icon",
        unit: {
            page: e,
            size: n,
            get content () {
                return `${this.page}.icon${r}${this.size}`;
            },
            get whole () {
                return `[[${this.content}]]`;
            }
        },
        children: t
    };
});
const vO = U(/\[\[(\/([a-zA-Z0-9-]+)\/([^[\]]+)\.icon)\]\]/, ([, t, e, r])=>({
        type: "strong-icon",
        unit: {
            project: e,
            page: r,
            size: 1,
            get content () {
                return `/${this.project}/${this.page}.icon`;
            },
            get whole () {
                return `[[${this.content}]]`;
            }
        },
        children: t
    }));
const SO = U(/\[\[(\/([a-zA-Z0-9-]+)\/([^[\]]+)\.icon([*x])([1-9]\d*))\]\]/, ([, t, e, r, n, s])=>{
    s = s - 0;
    return {
        type: "strong-icon",
        unit: {
            project: e,
            page: r,
            size: s,
            get content () {
                return `/${this.project}/${this.page}.icon${n}${this.size}`;
            },
            get whole () {
                return `[[${this.content}]]`;
            }
        },
        children: t
    };
});
const Zp = Pe(vO, SO, bO, wO);
const xO = U(/\[\[(https?:\/\/(?=[^\]\s]+\]\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?)\]\]/i, ([t, e])=>({
        type: "strongImage",
        unit: {
            whole: t,
            content: e
        },
        children: e,
        fileId: ha.test(e) ? be(e) : undefined
    }));
const _O = U(/\[\[(https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32})\]\]/, ([t, e])=>({
        type: "strongGyazo",
        unit: {
            whole: t,
            content: e
        },
        children: e
    }));
const CO = U(/\[\[(https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+)\]\]/, ([t, e])=>({
        type: "strongGyazo",
        unit: {
            whole: t,
            content: e
        },
        children: e
    }));
const PO = U(/\[\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?=[^\]\s]+\]\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?))\]\]/, ([t, e, r, n])=>({
        type: "strongImageLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            image: n
        },
        fileId: ha.test(n) ? be(n) : undefined,
        children: e
    }));
const kO = U(/\[\[((https?:\/\/(?=[^\]\s]+\s+https?:\/\/[^\]\s]+\]\])[^\]\s]*\.(?:png|jpe?g|gif|svg|webp)(?:\?[^\]\s]+)?)\s+(https?:\/\/[^\]\s]+))\]\]/, ([t, e, r, n])=>({
        type: "strongImageLink",
        unit: {
            whole: t,
            content: e,
            link: n,
            image: r
        },
        fileId: ha.test(r) ? be(r) : undefined,
        children: e
    }));
const EO = U(/\[\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32}))\]\]/, ([t, e, r, n])=>({
        type: "strongGyazoLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            gyazo: n
        },
        children: e
    }));
const AO = U(/\[\[((https?:\/\/(?:[a-z][a-z0-9-]*[a-z0-9]\.|)gyazo\.com\/[0-9a-f]{32})\s+(https?:\/\/[^\]\s]+))\]\]/, ([t, e, r, n])=>({
        type: "strongGyazoLink",
        unit: {
            whole: t,
            content: e,
            gyazo: r,
            link: n
        },
        children: e
    }));
const OO = U(/\[\[((https?:\/\/[^\]\s]+)\s+(https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+))\]\]/, ([t, e, r, n])=>({
        type: "strongGyazoLink",
        unit: {
            whole: t,
            content: e,
            link: r,
            gyazo: n
        },
        children: e
    }));
const LO = U(/\[\[((https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.\s]+)\s+(https?:\/\/[^\]\s]+))\]\]/, ([t, e, r, n])=>({
        type: "strongGyazoLink",
        unit: {
            whole: t,
            content: e,
            link: n,
            gyazo: r
        },
        children: e
    }));
const Xp = Pe(_O, CO, xO, EO, AO, OO, LO, PO, kO);
const TO = /\[\[(https?:\/\/(?=[^\]\s]+\]\])[^\]\s]+\.(?:mp4|webm|mov)(?:\?[^\]\s]+)?)\]\]/i;
const em = U(TO, ([t, e])=>({
        type: "strongVideo",
        unit: {
            whole: t,
            content: e
        },
        children: e,
        fileId: ha.test(e) ? be(e) : undefined
    }));
const RO = U(/\[([!"#%&'()*+,\-./{|}<>_~]+) ((?:\[[^[\]]+\]|[^\]])+)\]/, ([t, e, r])=>({
        type: "deco",
        unit: {
            whole: t,
            content: r,
            deco: e,
            strong: e.includes("*") ? Math.min(e.match(/\*/g).length, 10) : 0,
            italic: e.includes("/"),
            strike: e.includes("-"),
            underline: e.includes("_")
        },
        children: r
    }));
const MO = U(/\[(\$ (.+? ))\]/, ([t, e, r])=>({
        type: "deco-formula",
        unit: {
            whole: t,
            content: e,
            formula: r
        },
        children: e
    }));
const FO = U(/\[(\$ ([^\]]+))\]/, ([t, e, r])=>({
        type: "deco-formula",
        unit: {
            whole: t,
            content: e,
            formula: r
        },
        children: e
    }));
const tm = Pe(RO, MO, FO);
const rm = U(/\[\[((?:[^[]|\[[^[]).*?\]*)\]\]/, ([, t])=>({
        type: "strong",
        unit: {
            content: t,
            whole: `[[${t}]]`
        },
        children: t
    }));
const nm = U(/(https?:\/\/[^\s]+)/, ([, t])=>({
        type: "url",
        unit: {
            content: t,
            whole: t
        },
        fileId: ha.test(t) ? be(t) : undefined,
        children: t
    }));
const DO = U(/\[(https?:\/\/[^\s\]]+)\]/, ([, t])=>({
        type: "urlLink",
        unit: {
            link: t,
            content: t,
            whole: `[${t}]`
        },
        fileId: ha.test(t) ? be(t) : undefined,
        children: t
    }));
const IO = U(/\[((https?:\/\/[^\s\]]+)(?=\s[^\]]*[^\s]\])(\s+)([^\]]*[^\s]))\]/, ([, t, e, r, n])=>({
        type: "urlLink",
        unit: {
            link: e,
            space: r,
            title: n,
            content: t,
            whole: `[${t}]`
        },
        fileId: ha.test(e) ? be(e) : undefined,
        fileIds: [
            ha.test(e) && be(e),
            ha.test(n) && be(n)
        ].filter((s)=>s),
        children: t
    }));
const jO = U(/\[(([^[\]]*[^\s])(\s+)(https?:\/\/[^\s\]]+))\]/, ([, t, e, r, n])=>({
        type: "urlLink",
        unit: {
            link: n,
            space: r,
            title: e,
            content: t,
            whole: `[${t}]`
        },
        fileId: ha.test(n) ? be(n) : undefined,
        fileIds: [
            ha.test(e) && be(e),
            ha.test(n) && be(n)
        ].filter((s)=>s),
        children: t
    }));
const im = Pe(IO, jO, DO);
function Qi(t) {
    let e = {};
    if (!t) {
        return e;
    }
    for (let r of t.split("&")){
        if (!r) {
            continue;
        }
        let [n, s] = r.split("=");
        if (n !== "v") {
            e[n] = s;
        }
    }
    if (e.t) {
        e.t = NO(e.t);
    }
    return e;
}
a_2(Qi, "parseParams");
function NO(t) {
    if (/^\d+$/.test(t)) {
        return parseInt(t);
    }
    let e = [
        [
            /(\d+)s/,
            (n)=>n
        ],
        [
            /(\d+)m/,
            (n)=>60 * n
        ],
        [
            /(\d+)h/,
            (n)=>3600 * n
        ]
    ];
    let r = 0;
    for (let [n, s] of e){
        if (n.test(t)) {
            r += s(parseInt(t.match(n)[1]));
        }
    }
    return r || t;
}
a_2(NO, "normalizeTime");
const BO = U(/\[(https?:\/\/(?:www\.|music\.|)youtube\.com\/watch\?(?=[^\s\]]+\])((?:[^\s\]]+&|)v=([a-zA-Z\d_-]+)(?:&[^\s\]]+|)))\]/, ([t, e, r, n])=>({
        type: "youtube",
        unit: {
            whole: t,
            content: e,
            videoId: n,
            params: Qi(r)
        },
        children: e
    }));
const UO = U(/\[(https?:\/\/youtu\.be\/([a-zA-Z\d_-]+)(?:\?([^\s\]]{0,100})|))\]/, ([t, e, r, n])=>({
        type: "youtube",
        unit: {
            whole: t,
            content: e,
            videoId: r,
            params: Qi(n)
        },
        children: e
    }));
const qO = U(/\[(https?:\/\/(?:www\.|)youtube\.com\/shorts\/([a-zA-Z\d_-]+)(?:\?([^\s\]]+)|))\]/, ([t, e, r, n])=>({
        type: "youtube",
        unit: {
            whole: t,
            content: e,
            videoId: r,
            params: Qi(n),
            type: "short"
        },
        children: e
    }));
const $O = U(/\[(https?:\/\/(?:www\.|music\.|)youtube\.com\/playlist\?(?=[^\s\]]+\])((?:[^\s\]]+&|)list=([a-zA-Z\d_-]+)(?:&[^\s\]]+|)))\]/, ([t, e, r, listId])=>({
        type: "youtube",
        unit: {
            whole: t,
            content: e,
            listId,
            params: Qi(r)
        },
        children: e
    }));
const zO = U(/\[(https?:\/\/(?:www\.|)youtube\.com\/live\/([a-zA-Z\d_-]+)(?:\?([^\s\]]+)|))\]/, ([t, e, r, n])=>({
        type: "youtube",
        unit: {
            whole: t,
            content: e,
            videoId: r,
            params: Qi(n),
            type: "live"
        },
        children: e
    }));
const sm = Pe(BO, UO, qO, $O, zO);
const _u = a_2((t)=>parseFloat(t.replace(/^N/, "").replace(/^S/, "-")), "normalizeLatitude");
const Cu = a_2((t)=>parseFloat(t.replace(/^E/, "").replace(/^W/, "-")), "normalizeLongitude");
const HO = U(/\[(([NS]\d+(?:\.\d+)?),([EW]\d+(?:\.\d+)?)(?:|,Z(\d+)))\]/, ([t, e, r, n, s])=>({
        type: "location",
        unit: {
            whole: t,
            content: e,
            latitude: _u(r),
            longitude: Cu(n),
            zoom: s && parseInt(s)
        },
        children: e
    }));
const WO = U(/\[(([NS]\d+(?:\.\d+)?),([EW]\d+(?:\.\d+)?)(?:|,Z(\d+)) ([^[\]]+))\]/, ([t, e, r, n, s, o])=>({
        type: "location",
        unit: {
            whole: t,
            content: e,
            latitude: _u(r),
            longitude: Cu(n),
            zoom: s && parseInt(s),
            title: o
        },
        children: e
    }));
const YO = U(/\[(([^[\]]+) ([NS]\d+(?:\.\d+)?),([EW]\d+(?:\.\d+)?)(?:|,Z(\d+)))\]/, ([t, e, r, n, s, o])=>({
        type: "location",
        unit: {
            whole: t,
            content: e,
            latitude: _u(n),
            longitude: Cu(s),
            zoom: o && parseInt(o),
            title: r
        },
        children: e
    }));
const om = Pe(HO, WO, YO);
const Eo = U(/^([\t\s]+)(.*)$/, ([t, e, r])=>({
        type: "indent",
        unit: {
            whole: t,
            tag: e,
            content: r
        },
        children: r
    }));
const am = U(/^(> ?)(.*?)$/, ([t, e, r])=>{
    let n = Eo(r);
    return {
        type: "quote",
        unit: {
            whole: t,
            tag: e,
            content: r
        },
        children: n
    };
});
const cm = U(/`((?:\\`|[^`])*)`/, ([t, e])=>({
        type: "code",
        unit: {
            whole: t,
            content: e
        },
        children: e
    }));
const Pu = class Pu {
    maxSize;
    cache;
    constructor(e = 1000){
        this.maxSize = e;
        this.cache = new Map;
    }
    has(e) {
        return this.cache.has(e);
    }
    set(e, r) {
        if (this.has(e)) {
            this.cache.delete(e);
        }
        this.cache.set(e, r);
        while(this.cache.size > this.maxSize){
            let n = this.cache.keys().next().value;
            this.cache.delete(n);
        }
    }
    get(e) {
        if (!this.has(e)) {
            return;
        }
        let r = this.cache.get(e);
        this.cache.delete(e);
        this.cache.set(e, r);
        return r;
    }
};
a_2(Pu, "LRUCache");
const Ao = Pu;
a_2(cL, "fileUrlToTitle");
export function r(t) {
    let e = typeof process !== "undefined" && process.pid ? process.pid : null;
    return pm.default(cL(t) + (e ? ` [pid.${e}]` : ""));
}
a_2(r, "createDebug");
const ku = class ku {
    constructor(e = []){
        if (!(e instanceof Array)) {
            throw new Error("ArgumentError: errors must be an Array");
        }
        this.errors = e;
    }
    get isValid() {
        return this.errors.length < 1;
    }
    get isInvalid() {
        return !this.isValid;
    }
    toString() {
        return this.errors.map((e)=>e.message || e).join(". ");
    }
};
a_2(ku, "ValidationResult");
const ft = ku;
const Zi = a_2((...t)=>{
    for (let { validator, message } of t){
        if (typeof validator !== "function") {
            throw new Error("validator must be a function.");
        }
        if (typeof message !== "string") {
            throw new Error("message must be a string.");
        }
    }
    let e = a_2((r)=>{
        let n = new ft;
        for (let { validator, message, next } of t){
            if (!validator(r) && (n.errors.push(message), !next)) {
                break;
            }
        }
        return n;
    }, "validate");
    Object.defineProperty(e, "mongooseFormat", {
        get: a_2(()=>t.map(({ validator, message })=>({
                    validator,
                    message
                })), "get")
    });
    e.validators = t;
    return e;
}, "combineValidators");
const uL = true;
const mm = {
    value: 2,
    message: "Name is too short"
};
const gm = {
    value: 48,
    message: "Name is too long"
};
const lL = [
    "landing",
    "product",
    "enterprise",
    "pricing",
    "try-enterprise",
    "contact",
    "terms",
    "privacy",
    "jp-commercial-act",
    "support",
    "case",
    "features",
    "business",
    "solution",
    "resource"
];
const fL = [
    "auth",
    "login",
    "logout",
    "oauth2"
];
const hL = [
    "_",
    ...fL,
    "api",
    "app.html",
    "assets",
    "file",
    "files",
    "billing",
    "billings",
    "cdn-cgi",
    "config",
    "feed",
    "index",
    "io",
    "new",
    "opensearch",
    "project",
    "projects",
    "search",
    "setting",
    "settings",
    "setup-profile",
    "slide",
    "socket.io",
    "stream",
    "user",
    "users",
    "v2",
    "v3",
    "v4"
].concat(uL ? lL : []).map((t)=>t.toLowerCase());
const To = Zi({
    validator: a_2((t)=>typeof t === "string", "validator"),
    message: "Name must be a String"
}, {
    validator: a_2((t)=>t.length >= mm.value, "validator"),
    message: mm.message,
    next: true
}, {
    validator: a_2((t)=>t.length <= gm.value, "validator"),
    message: gm.message,
    next: true
}, {
    validator: a_2((t)=>/^[a-z0-9][a-z0-9-]*[a-z0-9]$/i.test(t), "validator"),
    message: "Name can contain only alphabets, numbers and hyphens. It must start and end with alphabet or number",
    next: true
}, {
    validator: a_2((t)=>!hL.includes(t.toLowerCase()), "validator"),
    message: "the name is reserved for system",
    next: true
});
const ym = {
    value: 1,
    message: "Title is too short"
};
const Ro = {
    value: 240,
    message: "Title is too long"
};
const cr = Zi({
    validator: a_2((t)=>typeof t === "string", "validator"),
    message: "Title must be a String"
}, {
    validator: a_2((t)=>!!t, "validator"),
    message: "Title is missing"
}, {
    validator: a_2((t)=>t.length >= ym.value, "validator"),
    message: ym.message
}, {
    validator: a_2((t)=>t.length <= Ro.value, "validator"),
    message: Ro.message
}, {
    validator: a_2((t)=>!/[\r\n\u2028\u2029]/.test(t), "validator"),
    message: "Title should be one line (line-feed code is included)"
}, {
    validator: a_2((t)=>!/^[./]+$/.test(t), "validator"),
    message: "Title is an illegal string like a relative path."
}, {
    validator: a_2((t)=>!/[[\]]/.test(t), "validator"),
    message: "Title should not use bracket ([ ] is included)"
}, {
    validator: a_2((t)=>!/\.icon\s*$/.test(t), "validator"),
    message: 'Title should not ends with ".icon"'
}, {
    validator: a_2((t)=>!/https?:\/\//.test(t), "validator"),
    message: 'Title should not use "http://" and "https://" (URL is included)'
});
const Wq = Zi(...cr.validators, {
    validator: a_2((t)=>!/[A-Z]/.test(t), "validator"),
    message: "TitleLc must not includes capital letters"
});
const bm = typeof location === "object" ? `${location.protocol}//${location.host}` : process.env.APP_URL || "";
export function ja(t, e = "") {
    if (typeof t !== "string") {
        throw new Error("Argument Error: not string");
    }
    return t.replace(/^[a-z\d]+:/, e);
}
a_2(ja, "replaceProtocol");
const dL = [
    "https://safe-redirect-a.invalid",
    "http://safe-redirect-b.invalid"
];
export function ka(t) {
    for (let e of dL){
        let r;
        try {
            r = new URL(t, e);
        } catch  {
            return "/";
        }
        if (r.origin !== e) {
            return "/";
        }
    }
    return t;
}
a_2(ka, "safeRedirectUrl");
function wm(t) {
    if (bm && /^\/.+/.test(t)) {
        return bm + t;
    }
    return t;
}
a_2(wm, "toFullUrl");
export const la = /^https?:\/\/(?:i\.|)gyazo\.com\/([a-z\d]{32})/;
const Zq = a_2((t)=>t.match(la)[1], "parseGyazoId");
export const na = /^https?:\/\/([a-z0-9]{2,})\.gyazo\.com\/([a-z\d]{32})/;
export const oa = a_2((t)=>{
    let e = t.match(na);
    return {
        teamName: e[1],
        imageId: e[2]
    };
}, "parseGyazoTeamsUrl");
function e$(t) {
    return t.replace(/^http:/, "https:").replace(/^https:\/\/i\.gyazo\.com/, "https://gyazo.com").replace(/\/raw$/, "").replace(/\.[^.\s/]+$/i, "");
}
a_2(e$, "toGyazoPermalink");
export function qa(t) {
    return /^https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\/raw$/.test(t);
}
a_2(qa, "isGyazoRawURL");
export function ra(t) {
    return /^https?:\/\/(?:[a-z][a-z\d-]*[a-z\d]\.|i\.|)gyazo\.com\/[a-z\d]{32}\.[^.]+$/.test(t);
}
a_2(ra, "isGyazoExtURL");
export function sa(t) {
    if (qa(t)) {
        return t;
    }
    return `${t}/raw`;
}
a_2(sa, "toGyazoRawUrl");
export function ta(t, e) {
    if (qa(t)) {
        t = ja(t, "https:");
        if (e) {
            return t.replace(/\/raw$/, `/max_size/${e.size}`);
        }
        return t.replace(/\/raw$/, "/max_size/400");
    }
    if (ra(t)) {
        t = ja(t, "https:");
        if (e) {
            return t.replace(/\.[^.]+$/, `/max_size/${e.size}`);
        }
        return t.replace(/\.[^.]+$/, "/max_size/400");
    }
    return t;
}
a_2(ta, "toGyazoThumbnailUrl");
const size = 2000;
export function ua(t) {
    return ta(t, {
        size
    });
}
a_2(ua, "toGyazoLargeThumbnailUrl");
export function va(t, e) {
    if (e > 1) {
        return `${ua(t)} ${e}x`;
    }
    return null;
}
a_2(va, "toGyazoLargeThumbnailSrcSet");
function Sm(t) {
    return !!(t.type && t.unit) || typeof t === "string";
}
a_2(Sm, "isNode");
function ur(t, e) {
    if (typeof e === "function") {
        if (t instanceof Array) {
            return t.forEach((r)=>ur(r, e));
        }
        if (Sm(t)) {
            e(t);
        }
        if (t.children) {
            return ur(t.children, e);
        }
    }
}
a_2(ur, "eachNode");
function Lu(t) {
    let e = [];
    ur(t, (r)=>{
        switch(r.type){
            case "link":
                {
                    let { page, project } = r.unit;
                    if (!project && cr(page).isValid) {
                        e.push(page);
                    }
                    break;
                }
            case "hashTag":
                {
                    let { page } = r.unit;
                    if (cr(page).isValid) {
                        e.push(page);
                    }
                    break;
                }
        }
    });
    return J_1(e);
}
a_2(Lu, "getLinksFromNode");
function Tu(t) {
    let e = [];
    ur(t, (r)=>{
        if (r.type === "link") {
            let { page, project } = r.unit;
            if (To(project).isValid && cr(page).isValid) {
                e.push(`/${project}/${page}`);
            }
        }
    });
    return J_1(e);
}
a_2(Tu, "getProjectLinksFromNode");
function Ru(t) {
    let e = [];
    ur(t, (r)=>{
        switch(r.type){
            case "icon":
            case "strong-icon":
                {
                    let { project, page } = r.unit;
                    if (!project && cr(page).isValid) {
                        e.push(page);
                    }
                    break;
                }
        }
    });
    return J_1(e);
}
a_2(Ru, "getIconsFromNode");
function Mu(t) {
    let e = [];
    ur(t, (r)=>{
        switch(r.type){
            case "gyazo":
            case "strongGyazo":
                {
                    e.push(sa(r.children));
                    break;
                }
            case "gyazoLink":
            case "strongGyazoLink":
                {
                    e.push(sa(r.unit.gyazo));
                    break;
                }
            case "image":
            case "strongImage":
                {
                    e.push(r.unit.content);
                    break;
                }
            case "imageLink":
            case "strongImageLink":
                e.push(r.unit.image);
                break;
            case "youtube":
                {
                    if (!r.unit.videoId) {
                        break;
                    }
                    e.push(`https://i.ytimg.com/vi/${r.unit.videoId}/mqdefault.jpg`);
                    break;
                }
            case "vimeo":
                {
                    if (!r.unit.videoId) {
                        break;
                    }
                    e.push(wm(`/api/oembed-proxy/vimeo/thumbnail?url=${r.unit.content}`));
                    break;
                }
        }
    });
    return J_1(e);
}
a_2(Mu, "getImagesFromNode");
function Fu(t) {
    let e = [];
    ur(t, (r)=>{
        if (r.fileIds) {
            e.push(...r.fileIds);
        } else if (r.fileId) {
            e.push(r.fileId);
        }
    });
    return J_1(e);
}
a_2(Fu, "getFilesFromNode");
export function za(t) {
    if (typeof t === "string") {
        return /^\s+$/.test(t);
    }
    if (t instanceof Array) {
        return !t.find((e)=>za(e) === false);
    }
    switch(t.type){
        case "indent":
            return za(t.children);
        case "hashTag":
            return true;
        default:
            return false;
    }
}
a_2(za, "isHashTagOnlyNode");
const vL = r("src/share/scrapbox-parser/index.js");
const xm = Pe(Eo, am, cm, Np, tm, Zp, Xp, em, rm, sm, om, qp, $p, zp, Bp, Up, Vp, Wp, Gp, Yp, Hp, im, nm, ia, Kp, Jp);
const Du = new Ao(5000);
let _m = false;
export const Aa = a_2(()=>{
    vL("enableCache");
    _m = true;
}, "enableCache");
export const Ba = a_2((t, e)=>{
    if (!_m || e?.noCache) {
        return xm(t);
    }
    let r;
    if (Du.has(t)) {
        r = Du.get(t);
    } else {
        r = xm(t);
        Du.set(t, r);
    }
    return r;
}, "parseScrapboxSyntax");
const Iu = class Iu {
    _onChangeListeners;
    constructor(){
        this._onChangeListeners = [];
    }
    addChangeListener(e) {
        if (typeof e !== "function") {
            throw new Error("callback must be a function");
        }
        if (this._onChangeListeners.includes(e)) {
            throw new Error("already registerd");
        }
        this._onChangeListeners.push(e);
    }
    removeChangeListener(e) {
        this._onChangeListeners = this._onChangeListeners.filter((r)=>r !== e);
    }
    emitChange(event) {
        let store = this;
        for (let n of this._onChangeListeners){
            n({
                store,
                event
            });
        }
    }
    get listenersCount() {
        return this._onChangeListeners.length;
    }
};
a_2(Iu, "BaseStore");
const z = Iu;
function Xi(t, e) {
    return a_2(function() {
        return t.apply(e, arguments);
    }, "wrap");
}
a_2(Xi, "bind");
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const es = (({ hasOwnProperty })=>(e, r)=>hasOwnProperty.call(e, r))(Object.prototype);
const Em = a_2((t)=>typeof t === "string" && (t === "__proto__" || t === "constructor" || t === "prototype"), "isUnsafeObjectKey");
const Am = a_2((t, e, r)=>t === Object.prototype || !r && e === null, "isPrototypeBoundary");
const xL = a_2((t)=>{
    if (!Object.isExtensible(t)) {
        return false;
    }
    let e = Object.getOwnPropertyNames(t);
    if (Object.getOwnPropertySymbols) {
        e.push(...Object.getOwnPropertySymbols(t));
    }
    return e.every((r)=>{
        if (Em(r)) {
            return false;
        }
        let n = Object.getOwnPropertyDescriptor(t, r);
        return !!n && n.configurable && n.writable === true;
    });
}, "isSafeAndFullyMutable");
const hasOwnInPrototypeChain = a_2((t, e)=>{
    let r = t;
    let n = [];
    while(r != null){
        if (n.indexOf(r) !== -1) {
            return false;
        }
        n.push(r);
        let s = getPrototypeOf(r);
        if (Am(r, s, r === t)) {
            return false;
        }
        if (es(r, e)) {
            return true;
        }
        r = s;
    }
    return false;
}, "hasOwnInPrototypeChain");
const getSafeProp = a_2((t, e)=>{
    if (t != null && hasOwnInPrototypeChain(t, e)) {
        return t[e];
    }
}, "getSafeProp");
const toSafeFlatObject = a_2((t)=>{
    if (t == null || typeof t !== "object" && typeof t !== "function") {
        return t;
    }
    let e = getPrototypeOf(t);
    if (e === null && xL(t)) {
        return t;
    }
    let r = Object.create(null);
    let n = Object.create(null);
    let s = [];
    let o = t;
    while(o != null && s.indexOf(o) === -1){
        s.push(o);
        let f = o === t ? e : getPrototypeOf(o);
        if (Am(o, f, o === t)) {
            break;
        }
        let c = Object.getOwnPropertyNames(o);
        if (Object.getOwnPropertySymbols) {
            c.push(...Object.getOwnPropertySymbols(o));
        }
        for (let u of c){
            if (!(Em(u) || es(n, u))) {
                r[u] = t[u];
                n[u] = true;
            }
        }
        o = f;
    }
    return r;
}, "toSafeFlatObject");
const kindOf = ((t)=>(e)=>{
        let r = toString.call(e);
        return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = a_2((t)=>{
    t = t.toLowerCase();
    return (e)=>kindOf(e) === t;
}, "kindOfTest");
const Fo = a_2((t)=>(e)=>typeof e === t, "typeOfTest");
const { isArray } = Array;
const isUndefined = Fo("undefined");
function isBuffer(t) {
    return t !== null && !isUndefined(t) && t.constructor !== null && !isUndefined(t.constructor) && isFunction_1(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
a_2(isBuffer, "isBuffer");
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(t) {
    let e;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        e = ArrayBuffer.isView(t);
    } else {
        e = t && t.buffer && isArrayBuffer(t.buffer);
    }
    return e;
}
a_2(isArrayBufferView, "isArrayBufferView");
const isString = Fo("string");
var isFunction_1 = Fo("function");
const isNumber = Fo("number");
const isObject = a_2((t)=>t !== null && typeof t === "object", "isObject");
const isBoolean = a_2((t)=>t === true || t === false, "isBoolean");
const isPlainObject = a_2((t)=>{
    if (!isObject(t)) {
        return false;
    }
    let e = getPrototypeOf(t);
    return (e === null || e === Object.prototype || getPrototypeOf(e) === null) && !hasOwnInPrototypeChain(t, toStringTag) && !hasOwnInPrototypeChain(t, iterator);
}, "isPlainObject");
const isEmptyObject = a_2((t)=>{
    if (!isObject(t) || isBuffer(t)) {
        return false;
    }
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
    } catch  {
        return false;
    }
}, "isEmptyObject");
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isReactNativeBlob = a_2((t)=>!!(t && typeof t.uri !== "undefined"), "isReactNativeBlob");
const isReactNative = a_2((t)=>t && typeof t.getParts !== "undefined", "isReactNative");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const DL = kindOfTest("Set");
const isStream = a_2((t)=>isObject(t) && isFunction_1(t.pipe), "isStream");
function jL() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return {};
}
a_2(jL, "getGlobal");
const Cm = jL();
const Pm = typeof Cm.FormData !== "undefined" ? Cm.FormData : undefined;
const isFormData = a_2((t)=>{
    if (!t) {
        return false;
    }
    if (Pm && t instanceof Pm) {
        return true;
    }
    let e = getPrototypeOf(t);
    if (!e || e === Object.prototype || !isFunction_1(t.append)) {
        return false;
    }
    let r = kindOf(t);
    return r === "formdata" || r === "object" && isFunction_1(t.toString) && t.toString() === "[object FormData]";
}, "isFormData");
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
].map(kindOfTest);
const trim = a_2((t)=>{
    if (t.trim) {
        return t.trim();
    }
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, "trim");
function forEach(t, e, { allOwnKeys = false } = {}) {
    if (t === null || typeof t === "undefined") {
        return;
    }
    let n;
    let s;
    if (typeof t !== "object") {
        t = [
            t
        ];
    }
    if (isArray(t)) {
        n = 0;
        for(s = t.length; n < s; n++){
            e.call(null, t[n], n, t);
        }
    } else {
        if (isBuffer(t)) {
            return;
        }
        let o = allOwnKeys ? Object.getOwnPropertyNames(t) : Object.keys(t);
        let f = o.length;
        let c;
        for(n = 0; n < f; n++){
            c = o[n];
            e.call(null, t[c], c, t);
        }
    }
}
a_2(forEach, "forEach");
function findKey(t, e) {
    if (isBuffer(t)) {
        return null;
    }
    e = e.toLowerCase();
    let r = Object.keys(t);
    let r_length = r.length;
    let s;
    while(r_length-- > 0){
        s = r[r_length];
        if (e === s.toLowerCase()) {
            return s;
        }
    }
    return null;
}
a_2(findKey, "findKey");
const global_1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
const isContextDefined = a_2((t)=>!isUndefined(t) && t !== global_1, "isContextDefined");
function merge(...t) {
    let { caseless, skipUndefined } = isContextDefined(this) && this || {};
    let n = {};
    let s = a_2((o, f)=>{
        if (f === "__proto__" || f === "constructor" || f === "prototype") {
            return;
        }
        let c = caseless && typeof f === "string" && findKey(n, f) || f;
        let u = es(n, c) ? n[c] : undefined;
        if (isPlainObject(u) && isPlainObject(o)) {
            n[c] = merge(u, o);
        } else if (isPlainObject(o)) {
            n[c] = merge({}, o);
        } else if (isArray(o)) {
            n[c] = o.slice();
        } else if (!skipUndefined || !isUndefined(o)) {
            n[c] = o;
        }
    }, "assignValue");
    for(let o = 0, f = t.length; o < f; o++){
        let c = t[o];
        if (!c || isBuffer(c) || (forEach(c, s), typeof c !== "object" || isArray(c))) {
            continue;
        }
        let u = Object.getOwnPropertySymbols(c);
        for (const b of u){
            if (propertyIsEnumerable.call(c, b)) {
                s(c[b], b);
            }
        }
    }
    return n;
}
a_2(merge, "merge");
const extend = a_2((t, e, r, { allOwnKeys } = {})=>{
    forEach(e, (s, o)=>{
        if (r && isFunction_1(s)) {
            Object.defineProperty(t, o, {
                __proto__: null,
                value: Xi(s, r),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(t, o, {
                __proto__: null,
                value: s,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
    }, {
        allOwnKeys
    });
    return t;
}, "extend");
const stripBOM = a_2((t)=>{
    if (t.charCodeAt(0) === 65279) {
        t = t.slice(1);
    }
    return t;
}, "stripBOM");
const inherits = a_2((t, e, r, n)=>{
    t.prototype = Object.create(e.prototype, n);
    Object.defineProperty(t.prototype, "constructor", {
        __proto__: null,
        value: t,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(t, "super", {
        __proto__: null,
        value: e.prototype
    });
    if (r) {
        Object.assign(t.prototype, r);
    }
}, "inherits");
const toFlatObject = a_2((t, e, r, n)=>{
    let s;
    let o;
    let f;
    let c = {};
    e = e || {};
    if (t == null) {
        return e;
    }
    do {
        s = Object.getOwnPropertyNames(t);
        for(o = s.length; o-- > 0;){
            f = s[o];
            if ((!n || n(f, t, e)) && !c[f]) {
                e[f] = t[f];
                c[f] = true;
            }
        }
        t = r !== false && getPrototypeOf(t);
    }while (t && (!r || r(t, e)) && t !== Object.prototype)
    return e;
}, "toFlatObject");
const endsWith = a_2((t, e, r)=>{
    t = String(t);
    if (r === undefined || r > t.length) {
        r = t.length;
    }
    r -= e.length;
    let n = t.indexOf(e, r);
    return n !== -1 && n === r;
}, "endsWith");
const toArray = a_2((t)=>{
    if (!t) {
        return null;
    }
    if (isArray(t)) {
        return t;
    }
    let t_length = t.length;
    if (!isNumber(t_length)) {
        return null;
    }
    let r = new Array(t_length);
    while(t_length-- > 0){
        r[t_length] = t[t_length];
    }
    return r;
}, "toArray");
const isTypedArray = ((t)=>(e)=>t && e instanceof t)(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = a_2((t, e)=>{
    let n = (t && t[iterator]).call(t);
    let s;
    while((s = n.next()) && !s.done){
        let o = s.value;
        e.call(t, o[0], o[1]);
    }
}, "forEachEntry");
const matchAll = a_2((t, e)=>{
    let r;
    let n = [];
    while((r = t.exec(e)) !== null){
        n.push(r);
    }
    return n;
}, "matchAll");
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = a_2((t)=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, a_2((r, n, s)=>n.toUpperCase() + s, "replacer")), "toCamelCase");
var { propertyIsEnumerable } = Object.prototype;
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = a_2((t, e)=>{
    let r = Object.getOwnPropertyDescriptors(t);
    let n = {};
    forEach(r, (s, o)=>{
        let f;
        if ((f = e(s, o, t)) !== false) {
            n[o] = f || s;
        }
    });
    Object.defineProperties(t, n);
}, "reduceDescriptors");
const freezeMethods = a_2((t)=>{
    reduceDescriptors(t, (e, r)=>{
        if (isFunction_1(t) && [
            "arguments",
            "caller",
            "callee"
        ].includes(r)) {
            return false;
        }
        let n = t[r];
        if (isFunction_1(n)) {
            e.enumerable = false;
            if ("writable" in e) {
                e.writable = false;
                return;
            }
            if (!e.set) {
                e.set = ()=>{
                    throw Error(`Can not rewrite read-only method '${r}'`);
                };
            }
        }
    });
}, "freezeMethods");
const toObjectSet = a_2((t, e)=>{
    let r = {};
    let n = a_2((s)=>{
        s.forEach((o)=>{
            r[o] = true;
        });
    }, "define");
    if (isArray(t)) {
        n(t);
    } else {
        n(String(t).split(e));
    }
    return r;
}, "toObjectSet");
const noop = a_2(()=>{}, "noop");
const toFiniteNumber = a_2((t, e)=>{
    if (t != null && Number.isFinite(t = +t)) {
        return t;
    }
    return e;
}, "toFiniteNumber");
function isSpecCompliantForm(t) {
    return !!(t && isFunction_1(t.append) && t[toStringTag] === "FormData" && t[iterator]);
}
a_2(isSpecCompliantForm, "isSpecCompliantForm");
const toJSONObject = a_2((t)=>{
    let e = new WeakSet;
    let r = a_2((n)=>{
        if (isObject(n)) {
            if (e.has(n)) {
                return;
            }
            if (isBuffer(n)) {
                return n;
            }
            if (!("toJSON" in n)) {
                e.add(n);
                let s;
                if (DL(n)) {
                    s = [];
                    for (let o of n){
                        let f = r(o);
                        if (!isUndefined(f)) {
                            s.push(f);
                        }
                    }
                } else {
                    s = isArray(n) ? [] : {};
                    forEach(n, (o, f)=>{
                        let c = r(o);
                        if (!isUndefined(c)) {
                            s[f] = c;
                        }
                    });
                }
                e.delete(n);
                return s;
            }
        }
        return n;
    }, "visit");
    return r(t);
}, "toJSONObject");
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = a_2((t)=>t && (isObject(t) || isFunction_1(t)) && isFunction_1(t.then) && isFunction_1(t.catch), "isThenable");
const setImmediate_1 = ((t, e)=>{
    if (t) {
        return setImmediate;
    }
    if (e) {
        return ((r, n)=>{
            global_1.addEventListener("message", ({ source, data })=>{
                if (source === global_1 && data === r && n.length) {
                    n.shift()();
                }
            }, false);
            return (s)=>{
                n.push(s);
                global_1.postMessage(r, "*");
            };
        })(`axios@${Math.random()}`, []);
    }
    return (r)=>setTimeout(r);
})(typeof setImmediate === "function", isFunction_1(global_1.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(global_1) : typeof process !== "undefined" && process.nextTick || setImmediate_1;
const isIterable = a_2((t)=>t != null && isFunction_1(t[iterator]), "isIterable");
const isSafeIterable = a_2((t)=>t != null && hasOwnInPrototypeChain(t, iterator) && isIterable(t), "isSafeIterable");
const C = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isReactNativeBlob,
    isReactNative,
    isBlob,
    isRegExp,
    isFunction: isFunction_1,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty: es,
    hasOwnProp: es,
    hasOwnInPrototypeChain,
    getSafeProp,
    toSafeFlatObject,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: global_1,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: setImmediate_1,
    asap,
    isIterable,
    isSafeIterable
};
const pT = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
const Im = a_2((t)=>{
    let e = {};
    let r;
    let n;
    let s;
    if (t) {
        t.split(`
`).forEach(a_2((f)=>{
            s = f.indexOf(":");
            r = f.substring(0, s).trim().toLowerCase();
            n = f.substring(s + 1).trim();
            let c = C.hasOwnProp(e, r);
            !r || c && C.hasOwnProp(pT, r) || (r === "set-cookie" ? c ? e[r].push(n) : e[r] = [
                n
            ] : e[r] = c ? `${e[r]}, ${n}` : n);
        }, "parser"));
    }
    return e;
}, "default");
function mT(t) {
    let e = 0;
    let t_length = t.length;
    while(e < t_length){
        let n = t.charCodeAt(e);
        if (n !== 9 && n !== 32) {
            break;
        }
        e += 1;
    }
    while(t_length > e){
        let n = t.charCodeAt(t_length - 1);
        if (n !== 9 && n !== 32) {
            break;
        }
        t_length -= 1;
    }
    if (e === 0 && t_length === t.length) {
        return t;
    }
    return t.slice(e, t_length);
}
a_2(mT, "trimSPorHTAB");
const gT = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
const yT = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Bu(t, e) {
    if (C.isArray(t)) {
        return t.map((r)=>Bu(r, e));
    }
    return mT(String(t).replace(e, ""));
}
a_2(Bu, "sanitizeValue");
const jm = a_2((t)=>Bu(t, gT), "sanitizeHeaderValue");
const bT = a_2((t)=>Bu(t, yT), "sanitizeByteStringHeaderValue");
function Do(t) {
    let e = Object.create(null);
    C.forEach(t.toJSON(), (r, n)=>{
        e[n] = bT(r);
    });
    return e;
}
a_2(Do, "toByteStringHeaderObject");
const Nm = Symbol("internals");
function is(t) {
    return t && String(t).trim().toLowerCase();
}
a_2(is, "normalizeHeader");
function Io(t) {
    if (t === false || t == null) {
        return t;
    }
    if (C.isArray(t)) {
        return t.map(Io);
    }
    return jm(String(t));
}
a_2(Io, "normalizeValue");
function wT(t) {
    let e = Object.create(null);
    let r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    while(n = r.exec(t)){
        e[n[1]] = n[2];
    }
    return e;
}
a_2(wT, "parseTokens");
const vT = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Uu(t) {
    let e = 0;
    let t_length = t.length;
    while(e < t_length){
        let n = t.charCodeAt(e);
        if (n !== 9 && n !== 32) {
            break;
        }
        e += 1;
    }
    while(t_length > e){
        let n = t.charCodeAt(t_length - 1);
        if (n !== 9 && n !== 32) {
            break;
        }
        t_length -= 1;
    }
    if (e === 0 && t_length === t.length) {
        return t;
    }
    return t.slice(e, t_length);
}
a_2(Uu, "trimOWS");
function ST(t) {
    let e = t.length - 1;
    if (e < 1 || t.charCodeAt(0) !== 34 || t.charCodeAt(e) !== 34) {
        return t;
    }
    let r = "";
    for(let n = 1; n < e; n++){
        let s = t.charCodeAt(n);
        if (s === 34 || s === 92 && (n += 1, n >= e)) {
            return t;
        }
        r += t[n];
    }
    return r;
}
a_2(ST, "decodeQuotedString");
function xT(t) {
    let e = Object.create(null);
    let r = String(t);
    let n = 0;
    let s = false;
    let o = false;
    function f(c) {
        let u = Uu(r.slice(n, c));
        let d = u.indexOf("=");
        if (d < 1) {
            return;
        }
        let b = Uu(u.slice(0, d));
        if (!vT.test(b)) {
            return;
        }
        let y = b.toLowerCase();
        if (y === "__proto__" || y === "constructor" || y === "prototype") {
            return;
        }
        let w = Uu(u.slice(d + 1));
        e[y] = ST(w);
    }
    a_2(f, "parseParameter");
    for(let c = 0; c < r.length; c++){
        let u = r.charCodeAt(c);
        s ? o ? o = false : u === 92 ? o = true : u === 34 && (s = false) : u === 34 ? s = true : (u === 44 || u === 59) && (f(c), n = c + 1);
    }
    f(r.length);
    return e;
}
a_2(xT, "parseParameters");
const _T = a_2((t)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()), "isValidHeaderName");
function qu(t, e, r, n, s) {
    if (C.isFunction(n)) {
        return n.call(this, e, r);
    }
    if (s) {
        e = r;
    }
    if (C.isString(e)) {
        if (C.isString(n)) {
            return e.indexOf(n) !== -1;
        }
        if (C.isRegExp(n)) {
            return n.test(e);
        }
    }
}
a_2(qu, "matchHeaderValue");
function CT(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n)=>r.toUpperCase() + n);
}
a_2(CT, "formatHeader");
function PT(t, e) {
    let r = C.toCamelCase(` ${e}`);
    [
        "get",
        "set",
        "has"
    ].forEach((n)=>{
        Object.defineProperty(t, n + r, {
            __proto__: null,
            value: a_2(function(s, o, f) {
                return this[n].call(this, e, s, o, f);
            }, "value"),
            configurable: true
        });
    });
}
a_2(PT, "buildAccessors");
const $u = class $u {
    constructor(e){
        if (e) {
            this.set(e);
        }
    }
    set(e, r, n) {
        let s = this;
        function o(c, u, d) {
            let b = is(u);
            if (!b) {
                return;
            }
            let y = C.findKey(s, b);
            if (!y || s[y] === undefined || d === true || d === undefined && s[y] !== false) {
                s[y || u] = Io(c);
            }
        }
        a_2(o, "setHeader");
        let f = a_2((c, u)=>C.forEach(c, (d, b)=>o(d, b, u)), "setHeaders");
        if (C.isPlainObject(e) || e instanceof this.constructor) {
            f(e, r);
        } else if (C.isString(e) && (e = e.trim()) && !_T(e)) {
            f(Im(e), r);
        } else if (C.isObject(e) && C.isSafeIterable(e)) {
            let c = Object.create(null);
            let u;
            let d;
            for (let b of e){
                if (!C.isArray(b)) {
                    throw new TypeError("Object iterator must return a key-value pair");
                }
                d = b[0];
                if (C.hasOwnProp(c, d)) {
                    u = c[d];
                    c[d] = C.isArray(u) ? [
                        ...u,
                        b[1]
                    ] : [
                        u,
                        b[1]
                    ];
                } else {
                    c[d] = b[1];
                }
            }
            f(c, r);
        } else {
            if (e != null) {
                o(r, e, n);
            }
        }
        return this;
    }
    get(e, r) {
        e = is(e);
        if (e) {
            let n = C.findKey(this, e);
            if (n) {
                let s = this[n];
                if (!r) {
                    return s;
                }
                if (r === true) {
                    return wT(s);
                }
                if (C.isFunction(r)) {
                    return r.call(this, s, n);
                }
                if (C.isRegExp(r)) {
                    return r.exec(s);
                }
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(e, r) {
        e = is(e);
        if (e) {
            let n = C.findKey(this, e);
            return !!(n && this[n] !== undefined && (!r || qu(this, this[n], n, r)));
        }
        return false;
    }
    delete(e, r) {
        let n = this;
        let s = false;
        function o(f) {
            f = is(f);
            if (f) {
                let c = C.findKey(n, f);
                if (c && (!r || qu(n, n[c], c, r))) {
                    delete n[c];
                    s = true;
                }
            }
        }
        a_2(o, "deleteHeader");
        if (C.isArray(e)) {
            e.forEach(o);
        } else {
            o(e);
        }
        return s;
    }
    clear(e) {
        let r = Object.keys(this);
        let r_length = r.length;
        let s = false;
        while(r_length--){
            let o = r[r_length];
            if (!e || qu(this, this[o], o, e, true)) {
                delete this[o];
                s = true;
            }
        }
        return s;
    }
    normalize(e) {
        let r = this;
        let n = {};
        C.forEach(this, (s, o)=>{
            let f = C.findKey(n, o);
            if (f) {
                r[f] = Io(s);
                delete r[o];
                return;
            }
            let c = e ? CT(o) : String(o).trim();
            c !== o && delete r[o];
            r[c] = Io(s);
            n[c] = true;
        });
        return this;
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        let r = Object.create(null);
        C.forEach(this, (n, s)=>{
            if (n != null && n !== false) {
                r[s] = e && C.isArray(n) ? n.join(", ") : n;
            }
        });
        return r;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, r])=>`${e}: ${r}`).join(`
`);
    }
    getSetCookie() {
        let e = this.get("set-cookie");
        if (C.isArray(e)) {
            return e;
        }
        if (e == null || e === false) {
            return [];
        }
        return [
            e
        ];
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(e) {
        if (e instanceof this) {
            return e;
        }
        return new this(e);
    }
    static parseParameters(e) {
        return xT(e);
    }
    static concat(e, ...r) {
        let n = new this(e);
        r.forEach((s)=>n.set(s));
        return n;
    }
    static accessor(e) {
        let accessors = (this[Nm] = this[Nm] = {
            accessors: {}
        }).accessors;
        let prototype = this.prototype;
        function o(f) {
            let c = is(f);
            if (!accessors[c]) {
                PT(prototype, f);
                accessors[c] = true;
            }
        }
        a_2(o, "defineAccessor");
        if (C.isArray(e)) {
            e.forEach(o);
        } else {
            o(e);
        }
        return this;
    }
};
a_2($u, "AxiosHeaders");
const cn = $u;
cn.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
C.reduceDescriptors(cn.prototype, ({ value }, e)=>{
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: a_2(()=>value, "get"),
        set (n) {
            this[r] = n;
        }
    };
});
C.freezeMethods(cn);
const Be = cn;
const ss = "[REDACTED ****]";
function kT(t) {
    if (C.hasOwnProp(t, "toJSON")) {
        return true;
    }
    let e = Object.getPrototypeOf(t);
    while(e && e !== Object.prototype){
        if (C.hasOwnProp(e, "toJSON")) {
            return true;
        }
        e = Object.getPrototypeOf(e);
    }
    return false;
}
a_2(kT, "hasOwnOrPrototypeToJSON");
function ET(t, e) {
    let r = new Set(e.map((o)=>String(o).toLowerCase()));
    let n = [];
    let s = a_2((o)=>{
        if (o === null || typeof o !== "object" || C.isBuffer(o)) {
            return o;
        }
        if (n.indexOf(o) !== -1) {
            return;
        }
        if (o instanceof Be) {
            o = o.toJSON();
        }
        n.push(o);
        let f;
        if (C.isArray(o)) {
            f = [];
            o.forEach((c, u)=>{
                let d = s(c);
                if (!C.isUndefined(d)) {
                    f[u] = d;
                }
            });
        } else {
            if (!C.isPlainObject(o) && kT(o)) {
                n.pop();
                return o;
            }
            f = Object.create(null);
            for (let [c, u] of Object.entries(o)){
                let d = r.has(c.toLowerCase()) ? ss : s(u);
                if (!C.isUndefined(d)) {
                    f[c] = d;
                }
            }
        }
        n.pop();
        return f;
    }, "visit");
    return s(t);
}
a_2(ET, "redactConfig");
function Bm(t) {
    try {
        return String(t);
    } catch  {
        return "";
    }
}
a_2(Bm, "stringifySafely");
function AT(t) {
    return t.errors.map((r)=>{
        try {
            if (r && r.message) {
                return Bm(r.message);
            }
            return Bm(r);
        } catch  {
            return "";
        }
    }).filter(Boolean).join("; ") || t.name || "AggregateError";
}
a_2(AT, "aggregateErrorMessage");
const jo = class jo extends Error {
    static from(e, r, n, s, o, f) {
        let e_message = e.message;
        if (!e_message && C.isArray(e.errors) && e.errors.length) {
            e_message = AT(e);
        }
        let u = new jo(e_message, r || e.code, n, s, o);
        Object.defineProperty(u, "cause", {
            __proto__: null,
            value: e,
            writable: true,
            enumerable: false,
            configurable: true
        });
        u.name = e.name;
        if (e.status != null && u.status == null) {
            u.status = e.status;
        }
        if (f) {
            Object.assign(u, f);
        }
        return u;
    }
    constructor(e, r, n, s, o){
        super(e);
        Object.defineProperty(this, "message", {
            __proto__: null,
            value: e,
            enumerable: true,
            writable: true,
            configurable: true
        });
        this.name = "AxiosError";
        this.isAxiosError = true;
        if (r) {
            this.code = r;
        }
        if (n) {
            this.config = n;
        }
        if (s) {
            this.request = s;
        }
        if (o) {
            this.response = o;
            this.status = o.status;
        }
    }
    toJSON() {
        let config = this.config;
        let r = config && C.hasOwnProp(config, "redact") ? config.redact : undefined;
        let config_1 = C.isArray(r) && r.length > 0 ? ET(config, r) : C.toJSONObject(config);
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: config_1,
            code: this.code,
            status: this.status
        };
    }
};
a_2(jo, "AxiosError");
const Ge = jo;
Ge.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Ge.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Ge.ECONNABORTED = "ECONNABORTED";
Ge.ETIMEDOUT = "ETIMEDOUT";
Ge.ECONNREFUSED = "ECONNREFUSED";
Ge.ERR_NETWORK = "ERR_NETWORK";
Ge.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Ge.ERR_DEPRECATED = "ERR_DEPRECATED";
Ge.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Ge.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Ge.ERR_CANCELED = "ERR_CANCELED";
Ge.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Ge.ERR_INVALID_URL = "ERR_INVALID_URL";
Ge.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const K = Ge;
const http = null;
const Wu = 100;
function isVisitable(t) {
    return C.isPlainObject(t) || C.isArray(t);
}
a_2(isVisitable, "isVisitable");
function Um(t) {
    if (C.endsWith(t, "[]")) {
        return t.slice(0, -2);
    }
    return t;
}
a_2(Um, "removeBrackets");
function zu(t, e, r) {
    if (t) {
        return t.concat(e).map(a_2((s, o)=>{
            s = Um(s);
            if (!r && o) {
                return `[${s}]`;
            }
            return s;
        }, "each")).join(r ? "." : "");
    }
    return e;
}
a_2(zu, "renderKey");
function OT(t) {
    return C.isArray(t) && !t.some(isVisitable);
}
a_2(OT, "isFlatArray");
const LT = C.toFlatObject(C, {}, null, a_2((e)=>/^is[A-Z]/.test(e), "filter"));
function TT(t, e, r) {
    if (!C.isObject(t)) {
        throw new TypeError("target must be an object");
    }
    e = e || new (http || FormData);
    let n = a_2((j, J)=>{
        let W = C.getSafeProp(r, j);
        if (C.isUndefined(W)) {
            return J;
        }
        return W;
    }, "option");
    let s = n("metaTokens", true);
    let o = n("visitor") || defaultVisitor;
    let f = n("dots", false);
    let c = n("indexes", false);
    let u = n("Blob") || typeof Blob !== "undefined" && Blob;
    let d = n("maxDepth", Wu);
    let b = u && C.isSpecCompliantForm(e);
    let y = [];
    if (!C.isFunction(o)) {
        throw new TypeError("visitor must be a function");
    }
    function convertValue(j) {
        if (j === null) {
            return "";
        }
        if (C.isDate(j)) {
            return j.toISOString();
        }
        if (C.isBoolean(j)) {
            return j.toString();
        }
        if (!b && C.isBlob(j)) {
            throw new K("Blob is not supported. Use a Buffer instead.");
        }
        if (C.isArrayBuffer(j) || C.isTypedArray(j)) {
            if (b && typeof u === "function") {
                return new u([
                    j
                ]);
            }
            if (http && http.isBufferAvailable()) {
                return http.from(j);
            }
            throw new K("Blob is not supported. Use a Buffer instead.", K.ERR_NOT_SUPPORT);
        }
        return j;
    }
    a_2(convertValue, "convertValue");
    function _(j) {
        if (j > d) {
            throw new K(`Object is too deeply nested (${j} levels). Max depth: ${d}`, K.ERR_FORM_DATA_DEPTH_EXCEEDED);
        }
    }
    a_2(_, "throwIfMaxDepthExceeded");
    function A(j, J) {
        if (d === Infinity) {
            return JSON.stringify(j);
        }
        let W = [];
        return JSON.stringify(j, a_2(function(te, X) {
            if (!C.isObject(X)) {
                return X;
            }
            while(W.length && W[W.length - 1] !== this){
                W.pop();
            }
            W.push(X);
            _(J + W.length - 1);
            return X;
        }, "limitDepth"));
    }
    a_2(A, "stringifyWithDepthLimit");
    function defaultVisitor(j, J, W) {
        let ae = j;
        if (C.isReactNative(e) && C.isReactNativeBlob(j)) {
            e.append(zu(W, J, f), convertValue(j));
            return false;
        }
        if (j && !W && typeof j === "object") {
            if (C.endsWith(J, "{}")) {
                J = s ? J : J.slice(0, -2);
                j = A(j, 1);
            } else if (C.isArray(j) && OT(j) || (C.isFileList(j) || C.endsWith(J, "[]")) && (ae = C.toArray(j))) {
                J = Um(J);
                ae.forEach(a_2((X, ne)=>{
                    if (!(C.isUndefined(X) || X === null)) {
                        e.append(c === true ? zu([
                            J
                        ], ne, f) : c === null ? J : `${J}[]`, convertValue(X));
                    }
                }, "each"));
                return false;
            }
        }
        if (isVisitable(j)) {
            return true;
        }
        e.append(zu(W, J, f), convertValue(j));
        return false;
    }
    a_2(defaultVisitor, "defaultVisitor");
    let Y = Object.assign(LT, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function T(j, J, W = 0) {
        if (!C.isUndefined(j)) {
            _(W);
            if (y.indexOf(j) !== -1) {
                throw new Error(`Circular reference detected in ${J.join(".")}`);
            }
            y.push(j);
            C.forEach(j, a_2((te, X)=>{
                if ((!(C.isUndefined(te) || te === null) && o.call(e, te, C.isString(X) ? X.trim() : X, J, Y)) === true) {
                    T(te, J ? J.concat(X) : [
                        X
                    ], W + 1);
                }
            }, "each"));
            y.pop();
        }
    }
    a_2(T, "build");
    if (!C.isObject(t)) {
        throw new TypeError("data must be an object");
    }
    T(t);
    return e;
}
a_2(TT, "toFormData");
const hr = TT;
function qm(t) {
    let e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20/g, a_2((n)=>e[n], "replacer"));
}
a_2(qm, "encode");
function $m(t, e) {
    this._pairs = [];
    if (t) {
        hr(t, this, e);
    }
}
a_2($m, "AxiosURLSearchParams");
const $m_prototype = $m.prototype;
$m_prototype.append = a_2(function(e, r) {
    this._pairs.push([
        e,
        r
    ]);
}, "append");
$m_prototype.toString = a_2(function(e) {
    let r = e ? (n)=>e.call(this, n, qm) : qm;
    return this._pairs.map(a_2((s)=>`${r(s[0])}=${r(s[1])}`, "each"), "").join("&");
}, "toString");
const No = $m;
function RT(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
a_2(RT, "encode");
function os(t, e, serialize) {
    if (!e) {
        return t;
    }
    t = t || "";
    let n = C.isFunction(serialize) ? {
        serialize
    } : serialize;
    let s = C.getSafeProp(n, "encode") || RT;
    let o = C.getSafeProp(n, "serialize");
    let f;
    if (o) {
        f = o(e, n);
    } else {
        f = C.isURLSearchParams(e) ? e.toString() : new No(e, n).toString(s);
    }
    if (f) {
        let c = t.indexOf("#");
        if (c !== -1) {
            t = t.slice(0, c);
        }
        t += (t.indexOf("?") === -1 ? "?" : "&") + f;
    }
    return t;
}
a_2(os, "buildURL");
const as = Symbol("internals");
function Wm(t) {
    if (t) {
        return t.length;
    }
    return 0;
}
a_2(Wm, "countHandlers");
function Hm(t) {
    if (t) {
        while(t.length && t[t.length - 1] === null){
            t.pop();
        }
    }
}
a_2(Hm, "trimHandlers");
function cs({ handlers }, e) {
    let n = Wm(handlers);
    if (handlers !== e.handlersRef) {
        e.handlersRef = handlers;
        e.handlerEntries.clear();
    } else {
        n !== e.handlersLength && (n ? e.handlerEntries.forEach(a_2((o, f)=>{
            if (handlers[o.index] !== o.handler) {
                e.handlerEntries.delete(f);
            }
        }, "removeStaleEntry")) : e.handlerEntries.clear());
    }
    e.handlersLength = n;
}
a_2(cs, "syncHandlerEntries");
const Gu = class Gu {
    constructor(){
        this.handlers = [];
        this[as] = {
            handlersRef: this.handlers,
            handlersLength: this.handlers.length,
            handlerEntries: new Map,
            iterationDepth: 0,
            nextId: 0
        };
    }
    use(fulfilled, rejected, n) {
        let handler = {
            fulfilled,
            rejected,
            synchronous: n ? n.synchronous : false,
            runWhen: n ? n.runWhen : null
        };
        let o = this[as];
        if (this.handlers == null) {
            this.handlers = [];
        }
        cs(this, o);
        let f = o.nextId++;
        this.handlers.push(handler);
        o.handlerEntries.set(f, {
            handler,
            index: this.handlers.length - 1
        });
        o.handlersLength = this.handlers.length;
        return f;
    }
    eject(e) {
        let r = this[as];
        cs(this, r);
        let n = r.handlerEntries.get(e);
        if (n) {
            r.handlerEntries.delete(e);
            if (this.handlers[n.index] !== n.handler) {
                return;
            }
            this.handlers[n.index] = null;
            if (!r.iterationDepth) {
                Hm(this.handlers);
                r.handlersLength = this.handlers.length;
            }
        }
    }
    clear() {
        if (this.handlers) {
            this.handlers = [];
            cs(this, this[as]);
        }
    }
    forEach(e) {
        let r = this[as];
        cs(this, r);
        r.iterationDepth++;
        try {
            C.forEach(this.handlers, a_2((s)=>{
                if (s !== null) {
                    e(s);
                }
            }, "forEachHandler"));
        } finally{
            if (!--r.iterationDepth) {
                cs(this, r);
                Hm(this.handlers);
                r.handlersLength = Wm(this.handlers);
            }
        }
    }
};
a_2(Gu, "InterceptorManager");
const Vu = Gu;
const transitional_1 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true,
    advertiseZstdAcceptEncoding: false,
    validateStatusUndefinedResolves: true
};
const URLSearchParams_1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : No;
const FormData_1 = typeof FormData !== "undefined" ? FormData : null;
const Blob_1 = typeof Blob !== "undefined" ? Blob : null;
const Km = {
    isBrowser: true,
    classes: {
        URLSearchParams: URLSearchParams_1,
        FormData: FormData_1,
        Blob: Blob_1
    },
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};
const Qu = {};
d_1(Qu, {
    hasBrowserEnv: ()=>Ju,
    hasStandardBrowserEnv: ()=>MT,
    hasStandardBrowserWebWorkerEnv: ()=>FT,
    navigator: ()=>Ku,
    origin: ()=>DT
});
var Ju = typeof window !== "undefined" && typeof document !== "undefined";
var Ku = typeof navigator === "object" && navigator || undefined;
var MT = Ju && (!Ku || [
    "ReactNative",
    "NativeScript",
    "NS"
].indexOf(Ku.product) < 0);
var FT = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
var DT = Ju && window.location.href || "http://localhost";
const Fe = {
    ...Qu,
    ...Km
};
function Zu(t, e) {
    return hr(t, new Fe.classes.URLSearchParams, {
        visitor: a_2(function(r, n, s, o) {
            if (Fe.isNode && C.isBuffer(r)) {
                this.append(n, r.toString("base64"));
                return false;
            }
            return o.defaultVisitor.apply(this, arguments);
        }, "visitor"),
        ...e
    });
}
a_2(Zu, "toURLEncodedForm");
const Jm = Wu;
function Qm(t) {
    if (t > Jm) {
        throw new K(`FormData field is too deeply nested (${t} levels). Max depth: ${Jm}`, K.ERR_FORM_DATA_DEPTH_EXCEEDED);
    }
}
a_2(Qm, "throwIfDepthExceeded");
function IT(t) {
    let e = [];
    let r = /[^.[\]]+|\[([^.[\]]*)]/g;
    let n;
    while((n = r.exec(t)) !== null){
        Qm(e.length);
        e.push(n[0] === "[]" ? "" : n[1] || n[0]);
    }
    return e;
}
a_2(IT, "parsePropPath");
function jT(t) {
    let e = {};
    let r = Object.keys(t);
    let n;
    let r_length = r.length;
    let o;
    for(n = 0; n < r_length; n++){
        o = r[n];
        e[o] = t[o];
    }
    return e;
}
a_2(jT, "arrayToObject");
function NT(t) {
    function e(r, n, s, o) {
        Qm(o);
        let f = r[o++];
        if (f === "__proto__") {
            return true;
        }
        let c = Number.isFinite(+f);
        let u = o >= r.length;
        f = !f && C.isArray(s) ? s.length : f;
        if (u) {
            if (C.hasOwnProp(s, f)) {
                s[f] = C.isArray(s[f]) ? s[f].concat(n) : [
                    s[f],
                    n
                ];
            } else {
                s[f] = n;
            }
            return !c;
        }
        if (!C.hasOwnProp(s, f) || !C.isObject(s[f])) {
            s[f] = [];
        }
        if (e(r, n, s[f], o) && C.isArray(s[f])) {
            s[f] = jT(s[f]);
        }
        return !c;
    }
    a_2(e, "buildPath");
    if (C.isFormData(t) && C.isFunction(t.entries)) {
        let r = {};
        C.forEachEntry(t, (n, s)=>{
            e(IT(n), s, r, 0);
        });
        return r;
    }
    return null;
}
a_2(NT, "formDataToJSON");
const Bo = NT;
const BT = Object.freeze([
    "get",
    "delete",
    "head",
    "options",
    "post",
    "put",
    "patch",
    "purge",
    "link",
    "unlink",
    "query"
]);
const Uo = BT;
const ln = a_2((t, e)=>{
    if (t != null && C.hasOwnProp(t, e)) {
        return t[e];
    }
}, "own");
function UT(t, e, r) {
    if (C.isString(t)) {
        try {
            (e || JSON.parse)(t);
            return C.trim(t);
        } catch (error) {
            if (error.name !== "SyntaxError") {
                throw error;
            }
        }
    }
    return (r || JSON.stringify)(t);
}
a_2(UT, "stringifySafely");
var Xu = {
    transitional: transitional_1,
    adapter: [
        "xhr",
        "http",
        "fetch"
    ],
    transformRequest: [
        a_2(function(e, r) {
            let n = r.getContentType() || "";
            let s = n.indexOf("application/json") > -1;
            let o = C.isObject(e);
            if (o && C.isHTMLForm(e)) {
                e = new FormData(e);
            }
            if (C.isFormData(e)) {
                if (s) {
                    return JSON.stringify(Bo(e));
                }
                return e;
            }
            if (C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isFile(e) || C.isBlob(e) || C.isReadableStream(e)) {
                return e;
            }
            if (C.isArrayBufferView(e)) {
                return e.buffer;
            }
            if (C.isURLSearchParams(e)) {
                r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return e.toString();
            }
            let c;
            if (o) {
                let u = ln(this, "formSerializer");
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                    return Zu(e, u).toString();
                }
                if ((c = C.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    let d = ln(this, "env");
                    let b = d && d.FormData;
                    return hr(c ? {
                        "files[]": e
                    } : e, b && new b, u);
                }
            }
            if (o || s) {
                r.setContentType("application/json", false);
                return UT(e);
            }
            return e;
        }, "transformRequest")
    ],
    transformResponse: [
        a_2(function(e) {
            let r = ln(this, "transitional") || Xu.transitional;
            let n = r && r.forcedJSONParsing;
            let s = ln(this, "responseType");
            let o = s === "json";
            if (C.isResponse(e) || C.isReadableStream(e)) {
                return e;
            }
            if (e && C.isString(e) && (n && !s || o)) {
                let c = !(r && r.silentJSONParsing) && o;
                try {
                    return JSON.parse(e, ln(this, "parseReviver"));
                } catch (error) {
                    if (c) {
                        throw error.name === "SyntaxError" ? K.from(error, K.ERR_BAD_RESPONSE, this, null, ln(this, "response")) : error;
                    }
                }
            }
            return e;
        }, "transformResponse")
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Fe.classes.FormData,
        Blob: Fe.classes.Blob
    },
    validateStatus: a_2((e)=>e >= 200 && e < 300, "validateStatus"),
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
C.forEach(Uo, (t)=>{
    Xu.headers[t] = {};
});
const fn = Xu;
function us(t, e) {
    let r = this || fn;
    let n = e || r;
    let s = Be.from(n.headers);
    let n_data = n.data;
    C.forEach(t, a_2((c)=>{
        n_data = c.call(r, n_data, s.normalize(), e ? e.status : undefined);
    }, "transform"));
    s.normalize();
    return n_data;
}
a_2(us, "transformData");
function ls(t) {
    return !!(t && t.__CANCEL__);
}
a_2(ls, "isCancel");
const tl = class tl extends K {
    constructor(e, r, n){
        super(e ?? "canceled", K.ERR_CANCELED, r, n);
        this.name = "CanceledError";
        this.__CANCEL__ = true;
    }
};
a_2(tl, "CanceledError");
const Rt = tl;
function fs(t, e, r) {
    let validateStatus = r.config.validateStatus;
    if (!r.status || !validateStatus || validateStatus(r.status)) {
        t(r);
    } else {
        e(new K(`Request failed with status code ${r.status}`, r.status >= 400 && r.status < 500 ? K.ERR_BAD_REQUEST : K.ERR_BAD_RESPONSE, r.config, r.request, r));
    }
}
a_2(fs, "settle");
a_2(hs, "normalizeURLForProtocolCheck");
function ds(t) {
    let e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
    return e && e[1] || "";
}
a_2(ds, "parseProtocol");
function $T(t, e) {
    t = t || 10;
    let r = new Array(t);
    let n = new Array(t);
    let s = 0;
    let o = 0;
    let f;
    e = e !== undefined ? e : 1000;
    return a_2((u)=>{
        let d = Date.now();
        let b = n[o];
        if (!f) {
            f = d;
        }
        r[s] = u;
        n[s] = d;
        let y = o;
        let w = 0;
        while(y !== s){
            w += r[y++];
            y = y % t;
        }
        s = (s + 1) % t;
        if (s === o) {
            o = (o + 1) % t;
        }
        if (d - f < e) {
            return;
        }
        let _ = b && d - b;
        if (_) {
            return Math.round(w * 1000 / _);
        }
    }, "push");
}
a_2($T, "speedometer");
const Zm = $T;
function zT(t, e) {
    let r = 0;
    let n = 1000 / e;
    let s;
    let o;
    let f = a_2((b, y = Date.now())=>{
        r = y;
        s = null;
        if (o) {
            clearTimeout(o);
            o = null;
        }
        t(...b);
    }, "invoke");
    return [
        a_2((...b)=>{
            let y = Date.now();
            let w = y - r;
            if (w >= n) {
                f(b, y);
            } else {
                s = b;
                if (!o) {
                    o = setTimeout(()=>{
                        o = null;
                        f(s);
                    }, n - w);
                }
            }
        }, "throttled"),
        a_2(()=>s && f(s), "flush"),
        a_2((...b)=>f(b), "flushWith")
    ];
}
a_2(zT, "throttle");
const Xm = zT;
const hn = a_2((t, e, r = 3)=>{
    let n = 0;
    let s = Zm(50, 250);
    return Xm((event)=>{
        if (!event || !C.isNumber(event.loaded)) {
            return;
        }
        let o_loaded = event.loaded;
        let c = event.lengthComputable ? event.total : undefined;
        let loaded = Math.max(0, c != null ? Math.min(o_loaded, c) : o_loaded);
        let bytes = Math.max(0, loaded - n);
        let b = s(bytes);
        n = Math.max(n, loaded);
        let y = {
            loaded,
            total: c,
            progress: c ? loaded / c : undefined,
            bytes,
            rate: b || undefined,
            estimated: b && c ? (c - loaded) / b : undefined,
            event,
            lengthComputable: c != null,
            [e ? "download" : "upload"]: true
        };
        t(y);
    }, r);
}, "progressEventReducer");
const rl = a_2((t, e)=>{
    let lengthComputable = t != null;
    return [
        (loaded)=>e[0]({
                lengthComputable,
                total: t,
                loaded
            }),
        e[1]
    ];
}, "progressEventDecorator");
const nl = a_2((t, e = C.asap)=>(...r)=>e(()=>t(...r)), "asyncDecorator");
const eg = Fe.hasStandardBrowserEnv ? ((t, e)=>(r)=>{
        r = new URL(r, Fe.origin);
        return t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port);
    })(new URL(Fe.origin), Fe.navigator && /(msie|trident)/i.test(Fe.navigator.userAgent)) : ()=>true;
const tg = Fe.hasStandardBrowserEnv ? {
    write (t, e, r, n, s, o, f) {
        if (typeof document === "undefined") {
            return;
        }
        let c = [
            `${t}=${encodeURIComponent(e)}`
        ];
        if (C.isNumber(r)) {
            c.push(`expires=${new Date(r).toUTCString()}`);
        }
        if (C.isString(n)) {
            c.push(`path=${n}`);
        }
        if (C.isString(s)) {
            c.push(`domain=${s}`);
        }
        if (o === true) {
            c.push("secure");
        }
        if (C.isString(f)) {
            c.push(`SameSite=${f}`);
        }
        document.cookie = c.join("; ");
    },
    read (t) {
        if (typeof document === "undefined") {
            return null;
        }
        let e = document.cookie.split(";");
        for(let r = 0; r < e.length; r++){
            let n = e[r].replace(/^\s+/, "");
            let s = n.indexOf("=");
            if (s !== -1 && n.slice(0, s) === t) {
                try {
                    return decodeURIComponent(n.slice(s + 1));
                } catch  {
                    return n.slice(s + 1);
                }
            }
        }
        return null;
    },
    remove (t) {
        this.write(t, "", Date.now() - 86400000, "/");
    }
} : {
    write () {},
    read () {
        return null;
    },
    remove () {}
};
function il(t) {
    if (typeof t !== "string") {
        return false;
    }
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
a_2(il, "isAbsoluteURL");
function sl(t, e) {
    if (!e) {
        return t;
    }
    let t_length = t.length;
    while(t_length > 0 && t.charCodeAt(t_length - 1) === 47){
        t_length--;
    }
    return `${t.slice(0, t_length)}/${e.replace(/^\/+/, "")}`;
}
a_2(sl, "combineURLs");
function WT(t) {
    return t && t.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, r, n = "")=>`${r}${n}${ss}`);
}
a_2(WT, "redactFragment");
function YT(t) {
    let e = t.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${ss}@`);
    let r = e.indexOf("#");
    let s = (r === -1 ? e : e.slice(0, r)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${ss}`);
    if (r === -1) {
        return s;
    }
    return `${s}#${WT(e.slice(r + 1))}`;
}
a_2(YT, "redactSensitiveURLParts");
function rg(t, e) {
    if (typeof t === "string") {
        let r = hs(t);
        if (HT.test(r)) {
            throw new K(`Invalid URL ${JSON.stringify(YT(r))}: missing "//" after protocol`, K.ERR_INVALID_URL, e);
        }
    }
}
a_2(rg, "assertValidHttpProtocolURL");
function ps(t, e, r, n) {
    rg(e, n);
    let s = !il(e);
    if (t && (s || r === false)) {
        rg(t, n);
        return sl(t, e);
    }
    return e;
}
a_2(ps, "buildFullPath");
const ng = a_2((t)=>{
    if (t instanceof Be) {
        return {
            ...t
        };
    }
    return t;
}, "headersToObject");
const VT = a_2((t)=>{
    if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
        return Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter((e)=>Object.getOwnPropertyDescriptor(t, e).enumerable));
    }
    return Object.keys(t);
}, "ownEnumerableKeys");
function Pt(t, e) {
    t = t || {};
    e = e || {};
    let r = Object.create(null);
    Object.defineProperty(r, "hasOwnProperty", {
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: false,
        writable: true,
        configurable: true
    });
    function n(b, y, w, caseless) {
        if (C.isPlainObject(b) && C.isPlainObject(y)) {
            return C.merge.call({
                caseless
            }, b, y);
        }
        if (C.isPlainObject(y)) {
            return C.merge({}, y);
        }
        if (C.isArray(y)) {
            return y.slice();
        }
        return y;
    }
    a_2(n, "getMergedValue");
    function s(b, y, w, _) {
        if (C.isUndefined(y)) {
            if (!C.isUndefined(b)) {
                return n(undefined, b, w, _);
            }
        } else {
            return n(b, y, w, _);
        }
    }
    a_2(s, "mergeDeepProperties");
    function o(b, y) {
        if (!C.isUndefined(y)) {
            return n(undefined, y);
        }
    }
    a_2(o, "valueFromConfig2");
    function f(b, y) {
        if (C.isUndefined(y)) {
            if (!C.isUndefined(b)) {
                return n(undefined, b);
            }
        } else {
            return n(undefined, y);
        }
    }
    a_2(f, "defaultToConfig2");
    function c(b) {
        let y = C.hasOwnProp(e, "transitional") ? e.transitional : undefined;
        if (!C.isUndefined(y)) {
            if (C.isPlainObject(y)) {
                if (C.hasOwnProp(y, b)) {
                    return y[b];
                }
            } else {
                return;
            }
        }
        let w = C.hasOwnProp(t, "transitional") ? t.transitional : undefined;
        if (C.isPlainObject(w) && C.hasOwnProp(w, b)) {
            return w[b];
        }
    }
    a_2(c, "getMergedTransitionalOption");
    function validateStatus(b, y, w) {
        if (C.hasOwnProp(e, w)) {
            return n(b, y);
        }
        if (C.hasOwnProp(t, w)) {
            return n(undefined, b);
        }
    }
    a_2(validateStatus, "mergeDirectKeys");
    let d = {
        url: o,
        method: o,
        data: o,
        baseURL: f,
        transformRequest: f,
        transformResponse: f,
        paramsSerializer: f,
        timeout: f,
        timeoutErrorMessage: f,
        withCredentials: f,
        withXSRFToken: f,
        adapter: f,
        responseType: f,
        xsrfCookieName: f,
        xsrfHeaderName: f,
        onUploadProgress: f,
        onDownloadProgress: f,
        decompress: f,
        maxContentLength: f,
        maxBodyLength: f,
        beforeRedirect: f,
        transport: f,
        httpAgent: f,
        httpsAgent: f,
        cancelToken: f,
        socketPath: f,
        allowedSocketPaths: f,
        responseEncoding: f,
        validateStatus,
        headers: a_2((b, y, w)=>s(ng(b), ng(y), w, true), "headers")
    };
    C.forEach(VT({
        ...t,
        ...e
    }), a_2((y)=>{
        if (y === "__proto__" || y === "constructor" || y === "prototype") {
            return;
        }
        let w = C.hasOwnProp(d, y) ? d[y] : s;
        let _ = C.hasOwnProp(t, y) ? t[y] : undefined;
        let A = C.hasOwnProp(e, y) ? e[y] : undefined;
        let F = w(_, A, y);
        if (!(C.isUndefined(F) && w !== validateStatus)) {
            r[y] = F;
        }
    }, "computeConfigValue"));
    C.hasOwnProp(e, "validateStatus") && C.isUndefined(e.validateStatus) && c("validateStatusUndefinedResolves") === false && (C.hasOwnProp(t, "validateStatus") ? r.validateStatus = n(undefined, t.validateStatus) : delete r.validateStatus);
    return r;
}
a_2(Pt, "mergeConfig");
a_2(ol, "setFormDataHeaders");
const KT = a_2((t)=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r)=>String.fromCharCode(parseInt(r, 16))), "encodeUTF8");
function JT(t) {
    let e = Pt({}, t);
    let r = a_2((w)=>{
        if (C.hasOwnProp(e, w)) {
            return e[w];
        }
    }, "own");
    let n = r("data");
    let s = r("withXSRFToken");
    let o = r("xsrfHeaderName");
    let f = r("xsrfCookieName");
    let c = r("headers");
    let u = r("auth");
    let d = r("baseURL");
    let b = r("allowAbsoluteUrls");
    let y = r("url");
    e.headers = c = Be.from(c);
    e.url = os(ps(d, y, b, e), r("params"), r("paramsSerializer"));
    if (u) {
        let w = C.getSafeProp(u, "username") || "";
        let _ = C.getSafeProp(u, "password") || "";
        try {
            c.set("Authorization", `Basic ${btoa(`${w}:${_ ? KT(_) : ""}`)}`);
        } catch (error) {
            throw K.from(error, K.ERR_BAD_OPTION_VALUE, t);
        }
    }
    if (C.isFormData(n)) {
        let w = C.getSafeProp(n, "getHeaders");
        if (Fe.hasStandardBrowserEnv || Fe.hasStandardBrowserWebWorkerEnv || C.isReactNative(n)) {
            c.setContentType(undefined);
        } else if (C.isFunction(w)) {
            ol(c, w.call(n), r("formDataHeaderPolicy"));
        }
    }
    if (Fe.hasStandardBrowserEnv && (C.isFunction(s) && (s = s(e)), s === true || s == null && eg(e.url))) {
        let _ = o && f && tg.read(f);
        if (_) {
            c.set(o, _);
        }
    }
    return e;
}
a_2(JT, "resolveConfig");
const qo = JT;
const QT = typeof XMLHttpRequest !== "undefined";
const xhr = QT && ((t)=>new Promise(a_2((r, n)=>{
        let s = qo(t);
        let s_data = s.data;
        let f = Be.from(s.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = s;
        let b;
        let y;
        let w;
        let _;
        let A;
        let F;
        function Y() {
            if (_) {
                _();
            }
            if (A) {
                A();
            }
            if (s.cancelToken) {
                s.cancelToken.unsubscribe(b);
            }
            if (s.signal) {
                s.signal.removeEventListener("abort", b);
            }
        }
        a_2(Y, "done");
        let T = new XMLHttpRequest;
        T.open(s.method.toUpperCase(), s.url, true);
        T.timeout = s.timeout;
        function j(W) {
            if (!T) {
                return;
            }
            if (T.status === 0 && (ds(hs(s.url)) || ds(Fe.origin)) !== "file" && !(T.responseURL && T.responseURL.startsWith("file:"))) {
                n(new K("Request aborted", K.ECONNABORTED, t, T));
                Y();
                T = null;
                return;
            }
            try {
                W ? F && F(W) : A && A();
            } catch (error) {
                setTimeout(()=>{
                    throw error;
                });
            }
            if (!T) {
                return;
            }
            let headers = Be.from("getAllResponseHeaders" in T && T.getAllResponseHeaders());
            let X = {
                data: !responseType || responseType === "text" || responseType === "json" ? T.responseText : T.response,
                status: T.status,
                statusText: T.statusText,
                headers,
                config: t,
                request: T
            };
            fs(a_2((ee)=>{
                r(ee);
                Y();
            }, "_resolve"), a_2((ee)=>{
                n(ee);
                Y();
            }, "_reject"), X);
            T = null;
        }
        a_2(j, "onloadend");
        if ("onloadend" in T) {
            T.onloadend = j;
        } else {
            T.onreadystatechange = a_2(()=>{
                if (!(!T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.startsWith("file:")))) {
                    setTimeout(j);
                }
            }, "handleLoad");
        }
        T.onabort = a_2(()=>{
            if (T) {
                n(new K("Request aborted", K.ECONNABORTED, t, T));
                Y();
                T = null;
            }
        }, "handleAbort");
        T.onerror = a_2((ae)=>{
            let te = ae && ae.message ? ae.message : "Network Error";
            let X = new K(te, K.ERR_NETWORK, t, T);
            X.event = ae || null;
            n(X);
            Y();
            T = null;
        }, "handleError");
        T.ontimeout = a_2(()=>{
            let ae = s.timeout ? `timeout of ${s.timeout}ms exceeded` : "timeout exceeded";
            let te = s.transitional || transitional_1;
            if (s.timeoutErrorMessage) {
                ae = s.timeoutErrorMessage;
            }
            n(new K(ae, te.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, t, T));
            Y();
            T = null;
        }, "handleTimeout");
        if (s_data === undefined) {
            f.setContentType(null);
        }
        if ("setRequestHeader" in T) {
            C.forEach(Do(f), a_2((ae, te)=>{
                T.setRequestHeader(te, ae);
            }, "setRequestHeader"));
        }
        if (!C.isUndefined(s.withCredentials)) {
            T.withCredentials = !!s.withCredentials;
        }
        if (responseType && responseType !== "json") {
            T.responseType = s.responseType;
        }
        if (onDownloadProgress) {
            [w, A, F] = hn(onDownloadProgress, true);
            T.addEventListener("progress", w);
        }
        if (onUploadProgress && T.upload) {
            [y, _] = hn(onUploadProgress);
            T.upload.addEventListener("progress", y);
            T.upload.addEventListener("loadend", _);
        }
        if (s.cancelToken || s.signal) {
            b = a_2((W)=>{
                if (T) {
                    n(!W || W.type ? new Rt(null, t, T) : W);
                    T.abort();
                    Y();
                    T = null;
                }
            }, "onCanceled");
            if (s.cancelToken) {
                s.cancelToken.subscribe(b);
            }
            s.signal && (s.signal.aborted ? b() : s.signal.addEventListener("abort", b));
        }
        let J = ds(s.url);
        if (J && !Fe.protocols.includes(J)) {
            n(new K(`Unsupported protocol ${J}:`, K.ERR_BAD_REQUEST, t));
            Y();
            return;
        }
        T.send(s_data || null);
    }, "dispatchXhrRequest")));
const ZT = a_2((t, e)=>{
    t = t ? t.filter(Boolean) : [];
    if (!e && !t.length) {
        return;
    }
    let r = new AbortController;
    let n = false;
    let s = a_2(function(u) {
        if (!n) {
            n = true;
            f();
            let d = u instanceof Error ? u : this.reason;
            r.abort(d instanceof K ? d : new Rt(d instanceof Error ? d.message : d));
        }
    }, "onabort");
    let o = e && setTimeout(()=>{
        o = null;
        s(new K(`timeout of ${e}ms exceeded`, K.ETIMEDOUT));
    }, e);
    let f = a_2(()=>{
        if (t) {
            if (o) {
                clearTimeout(o);
            }
            o = null;
            t.forEach((u)=>{
                if (u.unsubscribe) {
                    u.unsubscribe(s);
                } else {
                    u.removeEventListener("abort", s);
                }
            });
            t = null;
        }
    }, "unsubscribe");
    t.forEach((u)=>{
        if (!n) {
            if (u.aborted) {
                s.call(u);
                return;
            }
            u.addEventListener("abort", s, {
                once: true
            });
        }
    });
    let { signal } = r;
    signal.unsubscribe = ()=>C.asap(f);
    return signal;
}, "composeSignals");
const sg = ZT;
a_2(cl, "estimateDataURLDecodedBytes");
const ug = 64 * 1024;
const cR = {
    cache: "default",
    redirect: "follow",
    referrer: "about:client",
    referrerPolicy: "",
    mode: "cors",
    integrity: "",
    keepalive: false,
    priority: "auto",
    window: null
};
const { isFunction } = C;
const uR = a_2((t)=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r)=>String.fromCharCode(parseInt(r, 16))), "encodeUTF8");
const lg = a_2((t)=>{
    if (!C.isString(t)) {
        return t;
    }
    try {
        return decodeURIComponent(t);
    } catch  {
        return t;
    }
}, "decodeURIComponentSafe");
const fg = a_2((t, ...e)=>{
    try {
        return !!t(...e);
    } catch  {
        return false;
    }
}, "test");
const lR = a_2((t)=>{
    let e = t.indexOf("://");
    let r = t;
    if (e !== -1) {
        r = r.slice(e + 3);
    }
    return r.includes("@") || r.includes(":");
}, "maybeWithAuthCredentials");
const fR = a_2((t)=>{
    let e = C.global !== undefined && C.global !== null ? C.global : globalThis;
    let { ReadableStream, TextEncoder } = e;
    t = C.merge.call({
        skipUndefined: true
    }, {
        Request: e.Request,
        Response: e.Response
    }, t);
    let { fetch: fetch_1, Request, Response } = t;
    let c = fetch_1 ? isFunction(fetch_1) : typeof fetch === "function";
    let u = isFunction(Request);
    let d = isFunction(Response);
    if (!c) {
        return false;
    }
    let b = c && isFunction(ReadableStream);
    let y = c && (typeof TextEncoder === "function" ? ((T)=>(j)=>T.encode(j))(new TextEncoder) : async (T)=>new Uint8Array(await new Request(T).arrayBuffer()));
    let w = u && b && fg(()=>{
        let T = false;
        let j = new Request(Fe.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex () {
                T = true;
                return "half";
            }
        });
        let J = j.headers.has("Content-Type");
        if (j.body != null) {
            j.body.cancel();
        }
        return T && !J;
    });
    let _ = d && b && fg(()=>C.isReadableStream(new Response("").body));
    let A = {
        stream: _ && ((T)=>T.body)
    };
    if (c) {
        [
            "text",
            "arrayBuffer",
            "blob",
            "formData",
            "stream"
        ].forEach((T)=>{
            if (!A[T]) {
                A[T] = (j, J)=>{
                    let W = j && j[T];
                    if (W) {
                        return W.call(j);
                    }
                    throw new K(`Response type '${T}' is not supported`, K.ERR_NOT_SUPPORT, J);
                };
            }
        });
    }
    let F = a_2(async (body)=>{
        if (body == null) {
            return 0;
        }
        if (C.isBlob(body)) {
            return body.size;
        }
        if (C.isSpecCompliantForm(body)) {
            return (await new Request(Fe.origin, {
                method: "POST",
                body
            }).arrayBuffer()).byteLength;
        }
        if (C.isArrayBufferView(body) || C.isArrayBuffer(body)) {
            return body.byteLength;
        }
        if (C.isURLSearchParams(body)) {
            body = `${body}`;
        }
        if (C.isString(body)) {
            return (await y(body)).byteLength;
        }
    }, "getBodyLength");
    let Y = a_2(async (T, j)=>{
        let J = C.toFiniteNumber(T.getContentLength());
        return J ?? F(j);
    }, "resolveBodyLength");
    return async (T)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions, maxContentLength, maxBodyLength, maxRedirects } = qo(T);
        let Q = C.isNumber(maxContentLength) && maxContentLength > -1;
        let De = C.isNumber(maxBodyLength) && maxBodyLength > -1;
        let E = a_2((re)=>{
            if (C.hasOwnProp(T, re)) {
                return T[re];
            }
        }, "own");
        let O = fetch_1 || fetch;
        responseType = responseType ? `${responseType}`.toLowerCase() : "text";
        let D = sg([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let L = null;
        let V = D && D.unsubscribe && (()=>{
            D.unsubscribe();
        });
        let ie;
        let ce = null;
        let he = a_2(()=>new K("Request body larger than maxBodyLength limit", K.ERR_BAD_REQUEST, T, L), "maxBodyLengthError");
        try {
            let re;
            let ue = E("auth");
            if (ue) {
                let oe = C.getSafeProp(ue, "username") || "";
                let Ue = C.getSafeProp(ue, "password") || "";
                re = {
                    username: oe,
                    password: Ue
                };
            }
            if (lR(url)) {
                let oe = new URL(url, Fe.origin);
                if (!re && (oe.username || oe.password)) {
                    let Ue = lg(oe.username);
                    let Tt = lg(oe.password);
                    re = {
                        username: Ue,
                        password: Tt
                    };
                }
                if (oe.username || oe.password) {
                    oe.username = "";
                    oe.password = "";
                    url = oe.href;
                }
            }
            if (re) {
                headers.delete("authorization");
                headers.set("Authorization", `Basic ${btoa(uR(`${re.username || ""}:${re.password || ""}`))}`);
            }
            if (Q && typeof url === "string" && url.startsWith("data:") && cl(url) > maxContentLength) {
                throw new K(`maxContentLength size of ${maxContentLength} exceeded`, K.ERR_BAD_RESPONSE, T, L);
            }
            if (De && method !== "get" && method !== "head") {
                let oe = await F(data);
                if (typeof oe === "number" && isFinite(oe) && (ie = oe, oe > maxBodyLength)) {
                    throw he();
                }
            }
            let Ie = De && (C.isReadableStream(data) || C.isStream(data));
            let rr = a_2((oe, Ue, Tt)=>al(oe, ug, (pt)=>{
                    if (De && pt > maxBodyLength) {
                        throw ce = he();
                    }
                    if (Ue) {
                        Ue(pt);
                    }
                }, Tt), "trackRequestStream");
            if (w && method !== "get" && method !== "head" && (onUploadProgress || Ie)) {
                ie = ie ?? await Y(headers, data);
                if (ie !== 0 || Ie) {
                    let oe = new Request(url, {
                        method: "POST",
                        body: data,
                        duplex: "half"
                    });
                    let Ue;
                    if (C.isFormData(data) && (Ue = oe.headers.get("content-type"))) {
                        headers.setContentType(Ue);
                    }
                    if (oe.body) {
                        let [Tt, pt] = onUploadProgress && rl(ie, hn(nl(onUploadProgress))) || [];
                        data = rr(oe.body, Tt, pt);
                    }
                }
            } else if (Ie && !u && b && method !== "get" && method !== "head") {
                data = rr(data);
            } else if (Ie && u && !w && method !== "get" && method !== "head") {
                throw new K("Stream request bodies are not supported by the current fetch implementation", K.ERR_NOT_SUPPORT, T, L);
            }
            if (!C.isString(withCredentials)) {
                withCredentials = withCredentials ? "include" : "omit";
            }
            let nr = u && "credentials" in Request.prototype;
            if (C.isFormData(data)) {
                let oe = headers.getContentType();
                if (oe && /^multipart\/form-data/i.test(oe) && !/boundary=/i.test(oe)) {
                    headers.delete("content-type");
                }
            }
            headers.set("User-Agent", `axios/${dn}`, false);
            let de = fetchOptions == null ? fetchOptions : Object.assign(Object.create(null), fetchOptions);
            de && (delete de.body, delete de.headers, delete de.method, delete de.signal, delete de.duplex, delete de.credentials);
            let it = Object.assign(Object.create(null), de, {
                signal: D,
                method: method.toUpperCase(),
                headers: Do(headers.normalize()),
                body: data,
                duplex: "half",
                credentials: nr ? withCredentials : undefined
            });
            if (u) {
                C.forEach(cR, (oe, Ue)=>{
                    if (it[Ue] === undefined) {
                        it[Ue] = oe;
                    }
                });
                if (it.signal === undefined) {
                    it.signal = null;
                }
                if (it.body === undefined) {
                    it.body = null;
                }
            }
            if (maxRedirects === 0) {
                it.redirect = "manual";
                if (de) {
                    de.redirect = "manual";
                }
            }
            L = u && new Request(url, it);
            let tt = await (u ? O(L, de) : O(url, it));
            let Nt = Be.from(tt.headers);
            if (Q) {
                let oe = C.toFiniteNumber(Nt.getContentLength());
                if (oe != null && oe > maxContentLength) {
                    throw new K(`maxContentLength size of ${maxContentLength} exceeded`, K.ERR_BAD_RESPONSE, T, L);
                }
            }
            let Lt = _ && (responseType === "stream" || responseType === "response");
            if (_ && tt.body && (onDownloadProgress || Q || Lt && V)) {
                let oe = {};
                [
                    "status",
                    "statusText",
                    "headers"
                ].forEach((mt)=>{
                    oe[mt] = tt[mt];
                });
                let Ue = C.toFiniteNumber(Nt.getContentLength());
                let [Tt, pt] = onDownloadProgress && rl(Ue, hn(nl(onDownloadProgress), true)) || [];
                let uo = 0;
                let Er = a_2((mt)=>{
                    if (Q && (uo = mt, uo > maxContentLength)) {
                        throw new K(`maxContentLength size of ${maxContentLength} exceeded`, K.ERR_BAD_RESPONSE, T, L);
                    }
                    if (Tt) {
                        Tt(mt);
                    }
                }, "onChunkProgress");
                tt = new Response(al(tt.body, ug, Er, ()=>{
                    if (pt) {
                        pt();
                    }
                    if (V) {
                        V();
                    }
                }), oe);
            }
            responseType = responseType || "text";
            let Je = await A[C.findKey(A, responseType) || "text"](tt, T);
            if (Q && !_ && !Lt) {
                let oe;
                Je != null && (typeof Je.byteLength === "number" ? oe = Je.byteLength : typeof Je.size === "number" ? oe = Je.size : typeof Je === "string" && (oe = typeof TextEncoder === "function" ? new TextEncoder().encode(Je).byteLength : Je.length));
                if (typeof oe === "number" && oe > maxContentLength) {
                    throw new K(`maxContentLength size of ${maxContentLength} exceeded`, K.ERR_BAD_RESPONSE, T, L);
                }
            }
            if (!Lt && V) {
                V();
            }
            return await new Promise((resolve, reject)=>{
                fs(resolve, reject, {
                    data: Je,
                    headers: Be.from(tt.headers),
                    status: tt.status,
                    statusText: tt.statusText,
                    config: T,
                    request: L
                });
            });
        } catch (error) {
            if (V) {
                V();
            }
            if (D && D.aborted && D.reason instanceof K) {
                let ue = D.reason;
                ue.config = T;
                if (L) {
                    ue.request = L;
                }
                if (error !== ue) {
                    Object.defineProperty(ue, "cause", {
                        __proto__: null,
                        value: error,
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                }
                throw ue;
            }
            if (ce) {
                if (L && !ce.request) {
                    ce.request = L;
                }
                throw ce;
            }
            if (error instanceof K) {
                if (L && !error.request) {
                    error.request = L;
                }
                throw error;
            }
            if (error && error.name === "TypeError" && /Load failed|fetch/i.test(error.message)) {
                let ue = new K("Network Error", K.ERR_NETWORK, T, L, error && error.response);
                Object.defineProperty(ue, "cause", {
                    __proto__: null,
                    value: error.cause || error,
                    writable: true,
                    enumerable: false,
                    configurable: true
                });
                throw ue;
            }
            throw K.from(error, error && error.code, T, L, error && error.response);
        }
    };
}, "factory");
const hR = new Map;
const ul = a_2((t)=>{
    let e = t && t.env || {};
    let { fetch, Request, Response } = e;
    let o = [
        Request,
        Response,
        fetch
    ];
    let o_length = o.length;
    let c = o_length;
    let u;
    let d;
    let b = hR;
    while(c--){
        u = o[c];
        d = b.get(u);
        if (d === undefined) {
            b.set(u, d = c ? new Map : fR(e));
        }
        b = d;
    }
    return d;
}, "getFetch");
const KH = ul();
const adapters = {
    http,
    xhr,
    fetch: {
        get: ul
    }
};
C.forEach(adapters, (t, value)=>{
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                __proto__: null,
                value
            });
        } catch  {}
        Object.defineProperty(t, "adapterName", {
            __proto__: null,
            value
        });
    }
});
const hg = a_2((t)=>`- ${t}`, "renderReason");
const pR = a_2((t)=>C.isFunction(t) || t === null || t === false, "isResolvedHandle");
function getAdapter_1(t, e) {
    t = C.isArray(t) ? t : [
        t
    ];
    let { length } = t;
    let n;
    let s;
    let o = {};
    for(let f = 0; f < length; f++){
        n = t[f];
        let c;
        s = n;
        if (!pR(n) && (s = adapters[(c = String(n)).toLowerCase()], s === undefined)) {
            throw new K(`Unknown adapter '${c}'`);
        }
        if (s && (C.isFunction(s) || (s = s.get(e)))) {
            break;
        }
        o[c || `#${f}`] = s;
    }
    if (!s) {
        let f = Object.entries(o).map(([u, d])=>`adapter ${u} ` + (d === false ? "is not supported by the environment" : "is not available in the build"));
        let c = length ? f.length > 1 ? `since :
` + f.map(hg).join(`
`) : ` ${hg(f[0])}` : "as no adapter specified";
        throw new K(`There is no suitable adapter to dispatch the request ${c}`, K.ERR_NOT_SUPPORT);
    }
    return s;
}
a_2(getAdapter_1, "getAdapter");
const zo = {
    getAdapter: getAdapter_1,
    adapters
};
function fl(t) {
    if (t.cancelToken) {
        t.cancelToken.throwIfRequested();
    }
    if (t.signal && t.signal.aborted) {
        throw new Rt(null, t);
    }
}
a_2(fl, "throwIfCancellationRequested");
function ms(t) {
    let e = C.toSafeFlatObject(t);
    fl(e);
    e.headers = Be.from(C.getSafeProp(e, "headers"));
    e.data = us.call(e, e.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(e.method) !== -1) {
        e.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    return zo.getAdapter(e.adapter || fn.adapter, e)(e).then(a_2((s)=>{
        fl(e);
        e.response = s;
        try {
            s.data = us.call(e, e.transformResponse, s);
        } finally{
            delete e.response;
        }
        s.headers = Be.from(s.headers);
        return s;
    }, "onAdapterResolution"), a_2((s)=>{
        if (!ls(s) && (fl(e), s && s.response)) {
            e.response = s.response;
            try {
                s.response.data = us.call(e, e.transformResponse, s.response);
            } finally{
                delete e.response;
            }
            s.response.headers = Be.from(s.response.headers);
        }
        return Promise.reject(s);
    }, "onAdapterRejection"));
}
a_2(ms, "dispatchRequest");
const validators = {};
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((t, e)=>{
    validators[t] = a_2((n)=>typeof n === t || `a${e < 1 ? "n " : " "}${t}`, "validator");
});
const dg = {};
validators.transitional = a_2((e, r, n)=>{
    function s(o, f) {
        return `[Axios v${dn}] Transitional option '${o}'${f}${n ? `. ${n}` : ""}`;
    }
    a_2(s, "formatMessage");
    return (o, f, c)=>{
        if (e === false) {
            throw new K(s(f, ` has been removed${r ? ` in ${r}` : ""}`), K.ERR_DEPRECATED);
        }
        if (r && !dg[f]) {
            dg[f] = true;
            console.warn(s(f, ` has been deprecated since v${r} and will be removed in the near future`));
        }
        if (e) {
            return e(o, f, c);
        }
        return true;
    };
}, "transitional");
validators.spelling = a_2((e)=>(r, n)=>{
        console.warn(`${n} is likely a misspelling of ${e}`);
        return true;
    }, "spelling");
function assertOptions(t, e, r) {
    if (typeof t !== "object" || t === null) {
        throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
    }
    let n = Object.keys(t);
    let n_length = n.length;
    while(n_length-- > 0){
        let o = n[n_length];
        let f = Object.prototype.hasOwnProperty.call(e, o) ? e[o] : undefined;
        if (f) {
            let c = t[o];
            let u = c === undefined || f(c, o, t);
            if (u !== true) {
                throw new K(`option ${o} must be ${u}`, K.ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (r !== true) {
            throw new K(`Unknown option ${o}`, K.ERR_BAD_OPTION);
        }
    }
}
a_2(assertOptions, "assertOptions");
const gs = {
    assertOptions,
    validators
};
const gs_validators = gs.validators;
const hl = class hl {
    constructor(e){
        this.defaults = e || {};
        this.interceptors = {
            request: new Vu,
            response: new Vu
        };
    }
    async request(e, r) {
        try {
            return await this._request(e, r);
        } catch (error) {
            if (error instanceof Error) {
                try {
                    let s = {};
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(s);
                    } else {
                        s = new Error;
                    }
                    let o = s.stack;
                    let f = "";
                    if (typeof o === "string") {
                        let c = o.indexOf(`
`);
                        f = c === -1 ? "" : o.slice(c + 1);
                    }
                    if (!error.stack) {
                        error.stack = f;
                    } else if (f) {
                        let c = f.indexOf(`
`);
                        let u = c === -1 ? -1 : f.indexOf(`
`, c + 1);
                        let d = u === -1 ? "" : f.slice(u + 1);
                        if (!String(error.stack).endsWith(d)) {
                            error.stack += `
` + f;
                        }
                    }
                } catch  {}
            }
            throw error;
        }
    }
    _request(e, r) {
        if (typeof e === "string") {
            r = r || {};
            r.url = e;
        } else {
            r = e || {};
        }
        r = Pt(this.defaults, r);
        let { transitional, paramsSerializer, headers } = r;
        if (transitional !== undefined) {
            gs.assertOptions(transitional, {
                silentJSONParsing: gs_validators.transitional(gs_validators.boolean),
                forcedJSONParsing: gs_validators.transitional(gs_validators.boolean),
                clarifyTimeoutError: gs_validators.transitional(gs_validators.boolean),
                legacyInterceptorReqResOrdering: gs_validators.transitional(gs_validators.boolean),
                advertiseZstdAcceptEncoding: gs_validators.transitional(gs_validators.boolean),
                validateStatusUndefinedResolves: gs_validators.transitional(gs_validators.boolean)
            }, false);
        }
        paramsSerializer != null && (C.isFunction(paramsSerializer) ? r.paramsSerializer = {
            serialize: paramsSerializer
        } : gs.assertOptions(paramsSerializer, {
            encode: gs_validators.function,
            serialize: gs_validators.function
        }, true));
        r.allowAbsoluteUrls !== undefined || (this.defaults.allowAbsoluteUrls !== undefined ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = true);
        gs.assertOptions(r, {
            baseUrl: gs_validators.spelling("baseURL"),
            withXsrfToken: gs_validators.spelling("withXSRFToken")
        }, true);
        r.method = (C.getSafeProp(r, "method") || C.getSafeProp(this.defaults, "method") || "get").toLowerCase();
        let f = headers && C.merge(headers.common, headers[r.method]);
        if (headers) {
            C.forEach(Uo.concat("common"), (A)=>{
                delete headers[A];
            });
        }
        r.headers = Be.concat(f, headers);
        let c = [];
        let u = true;
        this.interceptors.request.forEach(a_2((F)=>{
            if (typeof F.runWhen === "function" && F.runWhen(r) === false) {
                return;
            }
            u = u && F.synchronous;
            let Y = r.transitional || transitional_1;
            if (Y && Y.legacyInterceptorReqResOrdering) {
                c.unshift(F.fulfilled, F.rejected);
            } else {
                c.push(F.fulfilled, F.rejected);
            }
        }, "unshiftRequestInterceptors"));
        let d = [];
        this.interceptors.response.forEach(a_2((F)=>{
            d.push(F.fulfilled, F.rejected);
        }, "pushResponseInterceptors"));
        let b;
        let y = 0;
        let w;
        if (!u) {
            let A = [
                ms.bind(this),
                undefined
            ];
            A.unshift(...c);
            A.push(...d);
            w = A.length;
            for(b = Promise.resolve(r); y < w;){
                b = b.then(A[y++], A[y++]);
            }
            return b;
        }
        w = c.length;
        let _ = r;
        while(y < w){
            let A = c[y++];
            let F = c[y++];
            try {
                _ = A ? A(_) : _;
            } catch (error) {
                if (!F) {
                    b = Promise.reject(error);
                    break;
                }
                try {
                    let T = F.call(this, error);
                    if (C.isThenable(T)) {
                        b = Promise.resolve(T).then(()=>ms.call(this, _));
                    }
                } catch (err) {
                    b = Promise.reject(err);
                }
                break;
            }
        }
        if (!b) {
            try {
                b = ms.call(this, _);
            } catch (error) {
                b = Promise.reject(error);
            }
        }
        y = 0;
        for(w = d.length; y < w;){
            b = b.then(d[y++], d[y++]);
        }
        return b;
    }
    getUri(e) {
        e = Pt(this.defaults, e);
        let r = ps(e.baseURL, e.url, e.allowAbsoluteUrls, e);
        return os(r, e.params, e.paramsSerializer);
    }
};
a_2(hl, "Axios");
const pn = hl;
C.forEach([
    "delete",
    "get",
    "head",
    "options"
], a_2((e)=>{
    pn.prototype[e] = function(r, n) {
        return this.request(Pt(n || {}, {
            method: e,
            url: r,
            data: n && C.hasOwnProp(n, "data") ? n.data : undefined
        }));
    };
}, "forEachMethodNoData"));
C.forEach([
    "post",
    "put",
    "patch",
    "query"
], a_2((e)=>{
    function r(n) {
        return a_2(function(o, f, c) {
            return this.request(Pt(c || {}, {
                method: e,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: f
            }));
        }, "httpMethod");
    }
    a_2(r, "generateHTTPMethod");
    pn.prototype[e] = r();
    if (e !== "query") {
        pn.prototype[`${e}Form`] = r(true);
    }
}, "forEachMethodWithData"));
const ys = pn;
const Wo = class Wo {
    constructor(e){
        if (typeof e !== "function") {
            throw new TypeError("executor must be a function.");
        }
        let r;
        this.promise = new Promise(a_2((o)=>{
            r = o;
        }, "promiseExecutor"));
        let n = this;
        this.promise.then((s)=>{
            if (!n._listeners) {
                return;
            }
            let length = n._listeners.length;
            while(length-- > 0){
                n._listeners[length](s);
            }
            n._listeners = null;
        });
        this.promise.then = (s)=>{
            let o;
            let f = new Promise((resolve)=>{
                n.subscribe(resolve);
                o = resolve;
            }).then(s);
            f.cancel = a_2(()=>{
                n.unsubscribe(o);
            }, "reject");
            return f;
        };
        e(a_2((o, f, c)=>{
            if (!n.reason) {
                n.reason = new Rt(o, f, c);
                r(n.reason);
            }
        }, "cancel"));
    }
    throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(e);
        } else {
            this._listeners = [
                e
            ];
        }
    }
    unsubscribe(e) {
        if (!this._listeners) {
            return;
        }
        let r = this._listeners.indexOf(e);
        if (r !== -1) {
            this._listeners.splice(r, 1);
        }
    }
    toAbortSignal() {
        let e = new AbortController;
        let r = a_2((n)=>{
            e.abort(n);
        }, "abort");
        this.subscribe(r);
        e.signal.unsubscribe = ()=>this.unsubscribe(r);
        return e.signal;
    }
    static source() {
        let cancel;
        return {
            token: new Wo(a_2((s)=>{
                cancel = s;
            }, "executor")),
            cancel
        };
    }
};
a_2(Wo, "CancelToken");
const pg = Wo;
function pl(t) {
    return a_2((r)=>t(...r), "wrap");
}
a_2(pl, "spread");
function ml(t) {
    return C.isObject(t) && t.isAxiosError === true;
}
a_2(ml, "isAxiosError");
const Yo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    ContentTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    UnprocessableContent: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerReturnsAnUnknownError: 520,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Yo).forEach(([t, e])=>{
    if (Yo[e] === undefined) {
        Yo[e] = t;
    }
});
const mg = Yo;
function gg(t) {
    let e = new ys(t);
    let r = Xi(ys.prototype.request, e);
    C.extend(r, ys.prototype, e, {
        allOwnKeys: true
    });
    C.extend(r, e, null, {
        allOwnKeys: true
    });
    r.create = a_2((s)=>gg(Pt(t, s)), "create");
    return r;
}
a_2(gg, "createInstance");
const He = gg(fn);
He.Axios = ys;
He.CanceledError = Rt;
He.CancelToken = pg;
He.isCancel = ls;
He.VERSION = dn;
He.toFormData = hr;
He.AxiosError = K;
He.Cancel = He.CanceledError;
He.all = a_2((e)=>Promise.all(e), "all");
He.spread = pl;
He.isAxiosError = ml;
He.mergeConfig = Pt;
He.AxiosHeaders = Be;
He.formToJSON = (t)=>Bo(C.isHTMLForm(t) ? new FormData(t) : t);
He.getAdapter = zo.getAdapter;
He.HttpStatusCode = mg;
He.default = He;
const Ye = He;
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig, create } = Ye;
const bs = a_2((...t)=>(e)=>[
            e,
            ...t
        ].reduce((acc, item)=>item(acc)), "combineInterceptors");
const gl = a_2((...t)=>bs(...t, (e)=>Promise.reject(e)), "combineErrorInterceptors");
const yl = class yl {
    constructor(){
        this.interceptors = [];
        this.get = this.get.bind(this);
    }
    register(e) {
        this.interceptors.push(e);
    }
    get(e) {
        if (this.interceptors.length < 1) {
            return e;
        }
        return bs(...this.interceptors)(e);
    }
};
a_2(yl, "DefferedInterceptor");
const Br = yl;
const Vo = r("src/client/js/lib/api-client/interceptors/logger.js");
function yg(t) {
    let e = t.method.toUpperCase();
    let { url } = t;
    Vo(`${e} ${url}`, t);
    return t;
}
a_2(yg, "requestLogger");
function bg(t) {
    Vo("request error", t);
    return t;
}
a_2(bg, "requestErrorLogger");
function wg(t) {
    let e = t.config.method.toUpperCase();
    let { url } = t.config;
    Vo(`response of ${e} ${url}`, t);
    return t;
}
a_2(wg, "responseLogger");
function vg(t) {
    Vo("response error", t);
    return t;
}
a_2(vg, "responseErrorLogger");
const Ze = "notReady";
const source = "restoreCache";
const xg = "fallbackCache";
const _g = "fromCache";
const Xe = "fromRemote";
function Cg(t) {
    let e = t.headers["x-serviceworker-cached"];
    t.source = e ? xg : Xe;
    return t;
}
a_2(Cg, "setResponseSource");
export const x = Ye.create({
    timeout: 60000
});
const x_get = x.get;
let CR = 0;
const Ur = new Dg.EventEmitter;
x.get = async (t, e = {})=>{
    e.__requestId = CR++;
    Ur.emit("request", {
        url: t,
        config: e
    });
    try {
        let res = await x_get(t, e);
        Ur.emit("response", {
            url: t,
            config: e,
            res
        });
        return res;
    } catch (err) {
        Ur.emit("error", {
            url: t,
            config: e,
            err
        });
        throw err;
    }
};
const Jo = {
    request: new Br,
    requestError: new Br,
    response: new Br,
    responseError: new Br
};
x.interceptors.request.use(bs(yg, Jo.request.get), gl(bg, Jo.requestError.get));
x.interceptors.response.use(bs(wg, Cg, Jo.response.get), gl(vg, Jo.responseError.get));
function IW(t) {
    return !!(t.config && t.request);
}
a_2(IW, "isAxiosError");
let gn;
const APILoading = new (gn = class extends z {
    constructor(){
        super();
        this.requests = {};
        c_1(this, "onApiRequest", "onApiResponse", "onApiError");
    }
    initialize() {
        Ur.addListener("request", this.onApiRequest);
        Ur.addListener("response", this.onApiResponse);
        Ur.addListener("error", this.onApiError);
    }
    get requestsCount() {
        return Object.keys(this.requests).length;
    }
    onApiRequest({ config }) {
        if (!config.skipTrackLoading) {
            this.requests[config.__requestId] = config;
            this.emitChange("request");
        }
    }
    onApiResponse({ config }) {
        if (!config.skipTrackLoading) {
            delete this.requests[config.__requestId];
            this.emitChange("response");
        }
    }
    onApiError({ config }) {
        if (!config.skipTrackLoading) {
            delete this.requests[config.__requestId];
            this.emitChange("error");
        }
    }
}, a_2(gn, "APILoading"), gn);
const zg = e_2(vs(), 1);
const OR = r("src/client/js/lib/serviceworker-client/caches.js");
async function Ug(t) {
    let { key, date } = await LR() || {};
    if (date > $g(t)) {
        return key;
    }
    return null;
}
a_2(Ug, "findNewVersionCache");
async function LR() {
    return (await caches.keys()).map((t)=>({
            key: t,
            date: $g(t)
        })).filter(({ date })=>date).sort((t, e)=>{
        if (t.date < e.date) {
            return 1;
        }
        return -1;
    }).shift();
}
a_2(LR, "getNewestCachesKeyAndDate");
async function qg(t) {
    if (await caches.has(t)) {
        return (await (await caches.open(t)).keys()).length > 0;
    }
    return false;
}
a_2(qg, "cacheExists");
function $g(t) {
    if (!t) {
        return null;
    }
    let e = t.match(/(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})/);
    if (!e) {
        return null;
    }
    let r = parseInt(e[2]) - 1;
    return new Date(e[1], r, e[3], e[4], e[5], e[6]);
}
a_2($g, "getDateFromCacheKey");
async function JW() {
    OR("delete all cache");
    let t = await caches.keys();
    for (let e of t){
        try {
            let r = await caches.open(e);
            let n = await r.keys();
            for (let s of n){
                await r.delete(s.url);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return Promise.all(t.map((e)=>caches.delete(e)));
}
a_2(JW, "deleteAllCache");
let bn;
const AssetsCache = new (bn = class extends z {
    constructor(){
        super();
        this.newVersion = null;
        this.hasCache = false;
        c_1(this, "checkCacheStorage");
        if (Ne() && zg.When.enable_service_worker) {
            setInterval(this.checkCacheStorage, 1000);
        }
    }
    get version() {
        return document.documentElement.dataset.assetsVersion;
    }
    hasUpdate() {
        return !!this.newVersion;
    }
    async checkCacheStorage() {
        let e;
        let r;
        try {
            e = await Ug(this.version);
            r = await qg(this.version);
        } catch (error) {
            console.error(error);
            return;
        }
        if (e) {
            this.newVersion = e;
            this.emitChange();
        }
        if (this.hasCache !== r) {
            this.hasCache = r;
            this.emitChange();
        }
    }
}, a_2(bn, "AssetsCache"), bn);
const Sl = class Sl {
    controller = new AbortController;
    get signal() {
        return this.controller.signal;
    }
    abort() {
        this.controller.abort();
        this.controller = new AbortController;
    }
};
a_2(Sl, "RenewableAbortController");
const ke = Sl;
let wn;
const Billing = new (wn = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this.id = null;
        this.billing = null;
        this.projectName = null;
    }
    async load(e) {
        this.id = e;
        let { data } = await x.get(`/api/billings/${e}`, {
            signal: this.abortController.signal
        });
        this.billing = data;
        this.emitChange();
    }
    get() {
        return this.billing;
    }
    setProjectName(e) {
        this.projectName = e;
    }
    link({ billing, project }) {
        return x.post(`/api/billings/projects/${project.name}/${billing.id}`);
    }
    unlink({ project }) {
        return x.delete(`/api/billings/projects/${project.name}`);
    }
    async addPaidProject({ projectName }) {
        projectName = projectName.trim();
        if (To(projectName).isInvalid) {
            throw new Error("Project name is invalid.");
        }
        await x.post(`/api/billings/${this.id}/projects/${projectName}`);
        await this.load(this.id);
    }
    async removePaidProject({ projectId }) {
        await x.delete(`/api/billings/${this.id}/projects/${projectId}`);
        await this.load(this.id);
    }
    async updateCompanyName({ companyName }) {
        let { data } = await x.post(`/api/billings/${this.id}/company-name`, {
            companyName
        });
        Object.assign(this.billing, data);
        this.emitChange();
    }
    async addAdmin(email) {
        let { data } = await x.post(`/api/billings/${this.id}/admins`, {
            email
        });
        Object.assign(this.billing, data);
        this.emitChange();
    }
    async deleteAdmin(e) {
        let { data } = await x.delete(`/api/billings/${this.id}/admins/${e}`);
        Object.assign(this.billing, data);
        this.emitChange();
    }
}, a_2(wn, "Billing"), wn);
const TR = /^api-\d{4}-\d{2}-\d{2}$/;
async function St(t) {
    if (!window.caches) {
        return null;
    }
    let e = [];
    try {
        e = await caches.keys();
    } catch  {
        return null;
    }
    let r = e.filter((n)=>TR.test(n));
    for (let n of r.sort().reverse()){
        let o = await (await caches.open(n)).match(t);
        if (o) {
            return o;
        }
    }
    return null;
}
a_2(St, "findLatestApiCache");
const _l = e_2(mr(), 1);
Array.prototype.getIndexByTitleLc = function(t) {
    return this.map(fe).indexOf(fe(t));
};
function pa(t) {
    return t.replace(/ /g, "_");
}
a_2(pa, "spaceToUnderscore");
function fe(t) {
    return pa(t).toLowerCase();
}
a_2(fe, "toTitleLc");
function F4(t) {
    return t.replace(/_/g, " ");
}
a_2(F4, "revertTitleLc");
const noTail = true;
const by = [
    {
        char: "@"
    },
    {
        char: "$"
    },
    {
        char: "&"
    },
    {
        char: "+"
    },
    {
        char: "="
    },
    {
        char: ":",
        noTail
    },
    {
        char: ";",
        noTail
    },
    {
        char: '"',
        noTail
    },
    {
        char: ",",
        noTail
    }
];
function wy(t) {
    return !!by.find((e)=>e.char === t);
}
a_2(wy, "isNoEncodeChar");
function XM(t) {
    return wy(t) && !!by.find((e)=>e.char === t).noTail;
}
a_2(XM, "isNoTailChar");
function vn(t) {
    if (!t) {
        t = String(t);
    }
    let e = _l.splitGraphemes(t);
    return e.map((r, n)=>{
        let s = n === e.length - 1;
        if (wy(r) && (!s || !XM(r))) {
            return r;
        }
        if (r === " ") {
            return "_";
        }
        return encodeURIComponent(r);
    }).join("");
}
a_2(vn, "encodeTitleURI");
function eF(t) {
    return t.replace(/\s*[[\]]+\s*/g, " ").replace(/https?:\/\//g, "").replace(/\.icon\s*$/, "").trim();
}
a_2(eF, "cleanupForPageTitle");
function tF(t, e) {
    let r = _l.splitGraphemes(t);
    let n = 0;
    for (let s of r){
        if (n + s.length > e) {
            break;
        }
        n += s.length;
    }
    return t.slice(0, n);
}
a_2(tF, "extractGraphemesWithinStringLength");
function vy(t) {
    let e = "Untitled";
    for (let r of t){
        let n = tF(eF(r.text), Ro.value);
        if (cr(n).isValid) {
            e = n;
            break;
        }
    }
    if (e.toLowerCase() === "new") {
        e += "_";
    }
    return e;
}
a_2(vy, "getTitleFromLines");
const rF = r("src/client/js/stores/current-project.js");
let Sn;
const CurrentProject = new (Sn = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this.project = null;
        this.readyState = Ze;
    }
    initialize() {
        Ya.CurrentUser.addChangeListener(this.onChangeCurrentUser.bind(this));
    }
    onChangeCurrentUser() {
        if (!this.project || !this.project.users) {
            return;
        }
        let e = Ya.CurrentUser.get();
        this.project.users.forEach((r)=>{
            if (r.id === e.id) {
                r.displayName = e.displayName;
                r.name = e.name;
                this.emitChange();
            }
        });
    }
    apiPath(e) {
        return `/api/projects/${e}`;
    }
    hasRemoteData(e) {
        return this.readyState === Xe && this.project.name === e;
    }
    getCache(e) {
        return St(this.apiPath(e));
    }
    fetch(e) {
        return x.get(this.apiPath(e), {
            signal: this.abortController.signal
        });
    }
    set({ data, source }) {
        Ya.Sync.flushChange();
        rF("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        this.project = data;
        this.readyState = source;
        this.updateUserNameMap();
        this.emitChange("load");
    }
    async reload() {
        let e = await this.fetch(this.project.name);
        this.set(e);
    }
    async update(e) {
        let { data } = await x.post(`/api/projects/${this.project.name}`, e);
        this.project = data;
        this.emitChange();
        return this.project;
    }
    async addMember(e) {
        let { data } = await x.post(`/api/projects/${this.project.name}/members/${e}`);
        this.project = data;
        this.updateUserNameMap();
        this.emitChange();
        return this.project;
    }
    async removeMember(e) {
        let { data } = await x.delete(`/api/projects/${this.project.name}/members/${e}`);
        this.project = data;
        this.updateUserNameMap();
        this.emitChange();
        return this.project;
    }
    async addAdmin(e) {
        let { data } = await x.post(`/api/projects/${this.project.name}/members/admins/${e}`);
        this.project = data;
        this.emitChange();
        return this.project;
    }
    async removeAdmin(e) {
        let { data } = await x.delete(`/api/projects/${this.project.name}/members/admins/${e}`);
        this.project = data;
        this.emitChange();
        return this.project;
    }
    async transferOwner(e) {
        let { data } = await x.post(`/api/projects/${this.project.name}/members/transferOwner/${e}`);
        this.project = data;
        this.emitChange();
        return this.project;
    }
    leave() {
        return x.post(`/api/projects/${this.project.name}/members/leave`);
    }
    deleteAll() {
        return x.delete(`/api/projects/${this.project.name}`);
    }
    get() {
        return this.project;
    }
    get name() {
        return this.project && this.project.name;
    }
    get isOwnerPro() {
        if (this.project.users) {
            return this.project.users.find((r)=>r.id === this.project.owner).pro;
        }
        return false;
    }
    isOwner(e) {
        return this.project && this.project.owner === e;
    }
    isAdmin(e) {
        return this.project && this.project.admins && this.project.admins.includes(e);
    }
    updateUserNameMap() {
        if (!Array.isArray(this.project.users)) {
            return;
        }
        let e = new Map;
        for (let r of this.project.users){
            if (!r.name) {
                continue;
            }
            let n = fe(r.name);
            if (!e.has(n)) {
                e.set(n, {
                    isOwner: this.isOwner(r.id),
                    isAdmin: this.isAdmin(r.id),
                    ...r
                });
            }
        }
        this.userNameMap = e;
    }
    findUserByName(e) {
        return this.userNameMap?.get(fe(e));
    }
    findUser(e) {
        if (!this.project || !e) {
            return null;
        }
        let r = this.project.users?.find((c)=>c.id === e);
        if (r) {
            return r;
        }
        let n = this.project.memberSnapshots?.find((c)=>c.data.id === e);
        let s = n ? n.data : null;
        if (s) {
            s.isSnapshot = true;
            s.reason = n.reason;
            return s;
        }
        let o = this.project.serviceAccounts?.find((c)=>c.id === e);
        if (o) {
            return {
                id: o.id,
                displayName: o.usage,
                isServiceAccount: true
            };
        }
        let f = this.project.serviceAccountSnapshots?.find((c)=>c.id === e);
        if (f) {
            return {
                id: f.id,
                displayName: f.usage,
                isServiceAccount: true,
                isServiceAccountDeleted: true
            };
        }
        return null;
    }
}, a_2(Sn, "CurrentProject"), Sn);
const nF = r("src/client/js/stores/current-user.ts");
let xn;
const CurrentUser = new (xn = class extends z {
    _user;
    isGuest;
    readyState;
    abortController;
    constructor(){
        super();
        this.abortController = new ke;
        this._user = null;
        this.isGuest = false;
        this.readyState = Ze;
    }
    get isProjectMember() {
        if (!this._user) {
            return false;
        }
        let e = Ya.CurrentProject.get();
        if (e) {
            return e.isMember;
        }
        return false;
    }
    get isProjectOwner() {
        return this._user && Ya.CurrentProject.isOwner(this._user.id);
    }
    get isProjectAdmin() {
        return this._user && Ya.CurrentProject.isAdmin(this._user.id);
    }
    get hasProjectPrivilege() {
        return this.isProjectOwner || this.isProjectAdmin;
    }
    get isProviderEasyTrial() {
        return this._user && this._user.provider === "easy-trial";
    }
    apiPath() {
        return "/api/users/me";
    }
    hasRemoteData() {
        return this.readyState === Xe && !!(this._user || this.isGuest);
    }
    getCache() {
        return St(this.apiPath());
    }
    fetch() {
        return x.get(this.apiPath(), {
            signal: this.abortController.signal
        });
    }
    set({ data, source }) {
        nF("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        this.isGuest = data.isGuest;
        this.readyState = source;
        if (!this.isGuest) {
            this._user = data;
            this.emitChange();
        }
    }
    async update(e) {
        let { data } = await x.post("/api/users/me", e);
        this._user = data;
        this.emitChange();
        return this._user;
    }
    async addPageFilter(e) {
        let { data } = await x.post("/api/users/page-filter", e);
        this._user = data;
        this.emitChange();
        return this._user;
    }
    async deletePageFilter(e) {
        let { data } = await x.delete("/api/users/page-filter", {
            data: e
        });
        this._user = data;
        this.emitChange();
        return this._user;
    }
    get() {
        return this._user;
    }
}, a_2(xn, "CurrentUser"), xn);
const Ny = e_2(vs(), 1);
let Ee = null;
try {
    Ee = Cy.default.parse(navigator.userAgent);
} catch (error) {
    console.error(error.stack || error);
}
Ee && (typeof Ee.browser.version === "string" && (Ee.browser.majorVersion = parseInt(Ee.browser.version.split(".")[0])), Ee.browser.name === "Firefox" && Ee.os.name === "iOS" && (Ee.browser.name = "Firefox iOS"));
function Py() {
    return !!Ee && Ee.os.name === "macOS";
}
a_2(Py, "isMac");
function Pl() {
    return !!Ee && Ee.os.name === "iOS";
}
a_2(Pl, "isiOS");
function kl() {
    return !!Ee && (Ee.platform.model === "iPad" || Ee.os.name === "macOS" && document.ontouchstart !== undefined);
}
a_2(kl, "isiPadOS");
function El() {
    return !!Ee && Ee.os.name === "Android";
}
a_2(El, "isAndroid");
function iF() {
    return !!Ee && Ee.os.name === "Windows Phone";
}
a_2(iF, "isWindowsPhone");
function sF() {
    return Pl() || El() || iF() || kl();
}
a_2(sF, "isTouchDevice");
function nY() {
    return !sF();
}
a_2(nY, "isNotTouchDevice");
const oF = {
    Chrome: 50,
    Safari: 10,
    Firefox: 50,
    "Firefox iOS": 20
};
const iY = a_2(()=>!!Ee && Ee.browser.majorVersion >= oF[Ee.browser.name], "isTargetBrowser");
const sY = a_2(()=>!!Ee && Ee.browser.name === "Safari", "isSafari");
const oY = a_2(()=>!!Ee && Ee.browser.name === "Firefox", "isFirefox");
const aF = {
    Chrome: 67,
    Safari: 12,
    Firefox: 62
};
const aY = a_2(()=>{
    if (Ee && Ee.browser.majorVersion < aF[Ee.browser.name]) {
        return false;
    }
    return !!navigator.serviceWorker && !!window.caches;
}, "isTargetBrowserForServiceworker");
const cY = a_2(()=>typeof window?.matchMedia === "function" && (window.matchMedia("(display-mode: minimal-ui)").matches || window.matchMedia("(display-mode: standalone)").matches), "isStandAloneApp");
const ky = G_1(cF, 100, {
    leading: false
});
function cF(t) {
    let e = document.querySelector(".cursor");
    if (!e) {
        return;
    }
    let r = window.visualViewport?.height || window.innerHeight;
    let n = r < 600;
    let s = 100;
    let o = t?.marginBottom || El() && !n && 200 || 30;
    let scrollTop = document.documentElement.scrollTop;
    let c = e.getBoundingClientRect();
    let u = c.top + document.documentElement.scrollTop;
    let d = u + e.offsetHeight;
    let b = u - scrollTop;
    let y = d - scrollTop;
    if (b - s < 0) {
        document.documentElement.scrollTop = u - s;
    } else if (y > r - o) {
        document.documentElement.scrollTop = d - r + o;
    }
    let w = document.querySelector(".editor");
    w && (c.left < w.offsetLeft ? document.documentElement.scrollLeft > 0 && (document.documentElement.scrollLeft += c.left - w.offsetLeft) : window.innerWidth < c.left && (document.documentElement.scrollLeft += c.left - window.innerWidth * 2 / 3));
}
a_2(cF, "scroll");
const gr = e_2(a_1(), 1);
const Ey = e_2(mr(), 1);
const Gt = "֑-߿יִ-﷽ﹰ-ﻼ";
const _n = "	 -/:-@[-`{-~¡-¿";
const mY = a_2((t)=>new RegExp(`[${Gt}]`, "u").test(t), "includesRTLChar");
const Ay = a_2((t)=>new RegExp(`^[\\s${_n}]*[${Gt}]`, "u").test(t), "isRTLText");
const uF = new RegExp(`([${Gt}][${Gt}${_n}]*[${Gt}])`, "u");
const lF = new RegExp(`([^${Gt}${_n}][^${Gt}]*[^${Gt}${_n}])`, "u");
const Oy = a_2((t)=>new RegExp(`^[\\s${_n}]*[^${Gt}${_n}]`, "u").test(t), "isLTRText");
function fF({ text, pageDirection }) {
    let r = pageDirection === "RTL" ? lF : uF;
    let n = pageDirection === "LTR" ? "RTL" : "LTR";
    return text.split(r).filter((s)=>!!s).map((s)=>({
            text: s,
            graphemes: Ey.splitGraphemes(s),
            direction: r.test(s) ? n : pageDirection
        }));
}
a_2(fF, "splitTextByDirection");
function ma({ text, index, pageDirection }) {
    let n = 0;
    for (let s of fF({
        text,
        pageDirection
    })){
        n += s.graphemes.length;
        if (index < n) {
            return s.direction;
        }
    }
}
a_2(ma, "getCharDirectionAt");
function Cn(t, { vagueValue } = {}) {
    let r = Ya.Line.getAll()[t.line];
    if (!r) {
        return;
    }
    let r_text = r.text;
    if (r_text === undefined) {
        console.warn("WARNING: text data is null");
        return;
    }
    if (gr.default(".lines .line").eq(t.line).length < 1) {
        return;
    }
    let t_char = t.char;
    let f = t_char > 0 && t_char === r_text.charLength;
    let c = f ? r_text.charLength - 1 : t_char;
    let u = gr.default(`#L${r.id} span.c-${c}`);
    let d = f;
    if (f) {
        let F = gr.default(`#L${r.id} span.c-${t_char}`);
        if (F.length > 0) {
            u = F;
            d = false;
        }
    }
    if (u.length < 1 && (f || vagueValue)) {
        u = gr.default(`#L${r.id} .text *:last`);
    }
    if (u.length < 1) {
        return;
    }
    let b = gr.default(".lines").offset();
    let x_2 = u.offset().left - b.left;
    let w = u.offset().top - b.top;
    let height = u.height();
    let A = Ya.DisplayStyle.is("rtl") ? "RTL" : "LTR";
    ma({
        text: r_text,
        index: c,
        pageDirection: A
    }) === "RTL" && (f ? x_2 -= u.width() : x_2 += u.width());
    if (d) {
        x_2 += u.outerWidth();
    }
    if (u.prop("tagName") !== "SPAN") {
        height = 20;
    }
    return {
        x: x_2,
        y: w,
        height
    };
}
a_2(Cn, "getPointFromCharIndex");
function Al(t) {
    let r = Array.from(document.querySelectorAll(".lines .line"));
    for(let n = 0; n < r.length; n++){
        let s = r[n];
        let o = s.offsetTop;
        let f = s.offsetHeight;
        if (o - 5 < t.y && t.y < o + f + 5) {
            return n;
        }
    }
}
a_2(Al, "getLineIndexFromPoint");
function xs(t) {
    let e = {
        line: Al(t),
        char: undefined
    };
    let r = Ya.Line.getAll()[e.line];
    if (!r) {
        return;
    }
    let n = document.querySelector(".lines").getBoundingClientRect();
    let s = [];
    document.querySelectorAll(`#L${r.id} .char-index`).forEach((dom)=>{
        let d = parseInt(dom.getAttribute("data-char-index"));
        let { left, top, width, height } = dom.getBoundingClientRect();
        s.push({
            index: d,
            dom,
            x: left - n.left,
            y: top - n.top,
            height,
            width
        });
    });
    e.char = r.text.charLength;
    let o;
    let f = 10;
    let c = Ya.DisplayStyle.is("rtl") ? "RTL" : "LTR";
    for (let u of s){
        if (u.y <= t.y + f && t.y - f <= u.y + u.height) {
            if (u.x <= t.x && t.x <= u.x + u.width) {
                e.char = ma({
                    text: r.text,
                    index: u.index,
                    pageDirection: c
                }) === "RTL" ? t.x < u.x + u.width / 2 ? u.index + 1 : u.index : t.x > u.x + u.width / 2 ? u.index + 1 : u.index;
                return e;
            }
            let d = Math.abs(u.x + u.width / 2 - t.x);
            if (!o || d < o) {
                e.char = ma({
                    text: r.text,
                    index: u.index,
                    pageDirection: c
                }) === "RTL" ? t.x < u.x ? u.index + 1 : u.index : t.x > u.x ? u.index + 1 : u.index;
                o = d;
            }
        }
    }
    return e;
}
a_2(xs, "getCharIndexFromPoint");
function ga() {
    return gr.default("#compute-line .line");
}
a_2(ga, "getDOMNode");
function vY(t, e) {
    if (e) {
        ga().addClass("line-title");
    } else {
        ga().removeClass("line-title");
    }
    let r = t === "" ? " " : t;
    let n = gr.default("<span/>").text(r).html();
    ga().html(`<span>${n}</span>`);
    let s = ga().find("span");
    if (t === "") {
        return {
            width: 0,
            height: s.height()
        };
    }
    return {
        width: s.width() + 5,
        height: s.height()
    };
}
a_2(vY, "getTextRect");
const hF = r("src/client/js/stores/cursor/neighbour-char-position.js");
const Ol = new Map;
const Ly = a_2(({ position, line })=>`${position.line}_${line.text}`, "cacheKey");
function ya() {
    hF("initialize cache");
    Ol.clear();
}
a_2(ya, "initializeCache");
if (Ne()) {
    window.addEventListener("load", ()=>{
        Ya.Page.addChangeListener(ya);
        Ya.CurrentProject.addChangeListener(ya);
        window.addEventListener("resize", ya);
        Ya.DisplayStyle.addChangeListener(ya);
    });
}
function Ty({ position, line, pageDirection }) {
    let n = Ol.get(Ly({
        position,
        line
    }));
    if (!n) {
        n = [];
        document.querySelectorAll(`#L${line.id} .char-index`).forEach((u)=>{
            let d = parseInt(u.getAttribute("data-char-index"));
            let b = u.getBoundingClientRect();
            let x_2 = b.left + b.width / 2;
            let w = b.top + b.height / 2;
            let _ = {
                index: d,
                x: x_2,
                y: w
            };
            n.push(_);
        });
        Ol.set(Ly({
            position,
            line
        }), n);
    }
    let s;
    if (position.char < n.length) {
        s = n.find((u)=>u.index === position.char);
    } else {
        let u = n[n.length - 1];
        s = {
            index: u.index + 1,
            x: u.x + (pageDirection === "LTR" ? 1 : -1),
            y: u.y
        };
    }
    if (!s) {
        throw new Error(`line:${position.line} char:${position.char} is not found.`);
    }
    let o = {
        index: undefined,
        distance: undefined
    };
    let f = {
        index: undefined,
        distance: undefined
    };
    let c = 10;
    for (let u of n){
        if (position.char === u.index || Math.abs(u.y - s.y) > c) {
            continue;
        }
        let d = u.x > s.x ? f : o;
        let b = Math.abs(s.x - u.x);
        if (d.distance === undefined || b < d.distance) {
            d.index = u.index;
            d.distance = b;
        }
    }
    return {
        right: f.index,
        left: o.index
    };
}
a_2(Ty, "getNeighbourCharPosition");
function Ry({ position, pageDirection }) {
    let r = Ya.Line.getAll()[position.line];
    if (!r) {
        return position;
    }
    let n = {
        left: undefined,
        right: undefined
    };
    try {
        n = Ty({
            position,
            line: r,
            pageDirection
        });
    } catch (error) {
        console.error(error);
    }
    let { left, right } = n;
    right === undefined && (left === undefined ? right = position.char + (pageDirection === "LTR" ? 1 : -1) : right = position.char + (left > position.char ? -1 : 1));
    return Fy({
        line: position.line,
        char: right
    });
}
a_2(Ry, "getRightCharPosition");
function My({ position, pageDirection }) {
    let r = Ya.Line.getAll()[position.line];
    if (!r) {
        return position;
    }
    let n = {
        left: undefined,
        right: undefined
    };
    try {
        n = Ty({
            position,
            line: r,
            pageDirection
        });
    } catch (error) {
        console.error(error);
    }
    let { left, right } = n;
    left === undefined && (right === undefined ? left = position.char - (pageDirection === "LTR" ? 1 : -1) : left = position.char + (right > position.char ? -1 : 1));
    return Fy({
        line: position.line,
        char: left
    });
}
a_2(My, "getLeftCharPosition");
function Fy(t) {
    let e = Ya.Line.getAll();
    if (t.char < 0) {
        if (t.line > 0) {
            return {
                line: t.line - 1,
                char: e[t.line - 1].text.charLength
            };
        }
        return {
            line: t.line,
            char: 0
        };
    }
    let charLength = e[t.line].text.charLength;
    if (t.char > charLength) {
        if (t.line < e.length - 1) {
            return {
                line: t.line + 1,
                char: 0
            };
        }
        return {
            line: t.line,
            char: charLength
        };
    }
    return t;
}
a_2(Fy, "fixOverwrappedCharPosition");
const ba = e_2(mr(), 1);
function AY(t, e) {
    let r = Ll(t);
    let n = 0;
    for (let s of r){
        let o = ba.splitGraphemes(s.str).length;
        if (n + o > e) {
            return [
                n,
                n + o
            ];
        }
        n += o;
    }
    return [
        n,
        n
    ];
}
a_2(AY, "wordPosition");
function Dy(t, e) {
    let r = Ll(t);
    let n = 0;
    for (let s of r){
        let o = ba.splitGraphemes(s.str).length;
        if (n + o > e && s.type !== "space") {
            return n + o;
        }
        n += o;
    }
    return t.length;
}
a_2(Dy, "wordTailPosition");
function Iy(t, e) {
    let r = Ll(t);
    let t_length = t.length;
    for (let s of r.reverse()){
        let o = ba.splitGraphemes(s.str).length;
        if (t_length - o < e && s.type !== "space") {
            return t_length - o;
        }
        t_length -= o;
    }
    return 0;
}
a_2(Iy, "wordHeadPosition");
function dF(t) {
    let e = {
        space: /^[\s-]+$/,
        alphabet_number: /^[0-9a-zA-Z\u00C0-\u024F_]+$/,
        cyril: /^[\u0400-\u04F0\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA690]+$/,
        ascii: /^[\u0021-\u007E]+$/,
        zenkaku_kigou: /^[\u3001-\u303F]+$/,
        hiragana: /^[\u3040-\u309F]+$/,
        katanaka: /^[\u30A0-\u30FF]+$/,
        zenkaku_ascii: /^[\uFF01-\uFF60]+$/,
        hankaku_kana: /^[\uFF65-\uFF9F]+$/
    };
    for (let [r, n] of Object.entries(e)){
        if (n.test(t)) {
            return r;
        }
    }
    return "other";
}
a_2(dF, "charType");
function Ll(t) {
    let e = [];
    let r = t.split("");
    let n;
    let str = "";
    for (let o of r){
        let f = dF(o);
        if (n && n !== f) {
            e.push({
                str,
                type: n
            });
            str = "";
        }
        n = f;
        str += o;
    }
    if (str !== "") {
        e.push({
            str,
            type: n
        });
    }
    return e;
}
a_2(Ll, "splitWord");
function pF(t) {
    return t.text.match(/^(\s*)/)[0];
}
a_2(pF, "getIndentString");
function kt(t) {
    return pF(t).length;
}
a_2(kt, "countIndent");
function _s(t) {
    return /^\s*$/.test(t.text);
}
a_2(_s, "isEmptyLine");
function TY(t) {
    return `${1.5 * t}em`;
}
a_2(TY, "getIndentWidth");
const mF = 300;
const Tl = r("src/client/js/stores/cursor/index.js");
const jy = a_2(()=>{
    if (Ya.DisplayStyle.is("rtl")) {
        return "RTL";
    }
    return "LTR";
}, "getPageDirection");
let Pn;
const Cursor = new (Pn = class extends z {
    constructor(){
        super();
        this.clear();
    }
    get page() {
        return Ya.Page;
    }
    get lines() {
        return Ya.Line.getAll();
    }
    clear() {
        Tl("clear");
        this.data = {
            line: 0,
            char: 0
        };
        this.temporalHorizontalPoint = 0;
        this.visible = false;
        this.visiblePopupMenu = false;
        this.focusTextarea = false;
    }
    getPosition() {
        return {
            line: this.data.line,
            char: this.data.char
        };
    }
    getVisible() {
        return this.visible;
    }
    updateTemporalHorizontalPoint() {
        requestAnimationFrame(()=>{
            let e = Cn(this.data);
            if (e) {
                this.temporalHorizontalPoint = e.x;
            }
        });
    }
    setPosition(e, { scrollInView, source } = {
        scrollInView: true
    }) {
        this.data = {
            line: e.line,
            char: e.char
        };
        this.fixPosition();
        this.updateTemporalHorizontalPoint();
        this.visible = true;
        this.emitChange({
            source
        });
        if (scrollInView) {
            this.scrollViewport();
        }
    }
    showEditPopupMenu() {
        Tl("showEditPopupMenu");
        this.visiblePopupMenu = true;
        this.emitChange();
    }
    hidePopupMenu() {
        this.visiblePopupMenu = false;
        this.emitChange();
    }
    focus() {
        this.visible = true;
        this.focusTextarea = true;
        this.emitChange("focusTextInput");
        let height = window.visualViewport.height;
        for (let r of [
            250,
            500,
            750
        ]){
            setTimeout(()=>{
                if (height - window.visualViewport.height > 200) {
                    this.scrollViewport();
                }
            }, r);
        }
    }
    get hasFocus() {
        return this.focusTextarea;
    }
    blur() {
        Tl("blur");
        if (this.focusTextarea) {
            this.focusTextarea = false;
            this.emitChange();
        }
    }
    fixPosition() {
        let e = this.lines.length - 1;
        if (this.data.line > e) {
            this.data.line = e;
        }
        let r = this.lines[this.data.line]?.text.charLength || 0;
        if (this.data.char > r) {
            this.data.char = r;
        }
    }
    isAtLineHead() {
        return this.visible && this.data.char === 0;
    }
    isAtLineTail() {
        return this.visible && this.data.char >= this.lines[this.data.line]?.text.charLength;
    }
    show() {
        this.visible = true;
        this.emitChange();
    }
    hide() {
        if (Ny.When.touch_device) {
            this.focusTextarea = false;
        }
        this.visible = false;
        this.visiblePopupMenu = false;
        this.emitChange();
    }
    goUp() {
        let e = Cn(this.data);
        let r = {
            x: this.temporalHorizontalPoint,
            y: e.y - (this.data.line === 1 ? 40 : 16)
        };
        let n = xs(r);
        if (!n) {
            if (this.data.line < 1) {
                return this.goTop();
            }
            n = {
                line: this.data.line - 1,
                char: 0
            };
        }
        if (n.line === this.data.line && n.char === this.data.char && n.line > 0) {
            n.line -= 1;
        }
        this.data = n;
        this.fixPosition();
        this.scrollViewport();
        this.emitChange();
    }
    goPageUp() {
        let e = Cn(this.data);
        let r = {
            x: this.temporalHorizontalPoint,
            y: e.y - window.innerHeight
        };
        let n = xs(r) || {
            line: 0,
            char: 0
        };
        if (this.data.line === 0 && this.data.char <= n.char) {
            n.char = 0;
        }
        if (n.line === this.data.line && n.char === this.data.char && n.line > 0) {
            n.line -= 1;
        }
        this.data = n;
        this.fixPosition();
        this.emitChange();
        this.scrollViewport();
    }
    goDown() {
        let e = Cn(this.data);
        let r = {
            x: this.temporalHorizontalPoint,
            y: e.y + e.height + (this.data.line === 0 ? 40 : 20)
        };
        let n = xs(r);
        if (!n) {
            if (this.data.line >= this.lines.length - 1) {
                return this.goBottom();
            }
            n = {
                line: this.data.line + 1,
                char: 0
            };
        }
        if (n.line === this.data.line && n.char === this.data.char && this.lines.length - 1 > n.line) {
            n.line += 1;
        }
        this.data = n;
        this.fixPosition();
        this.emitChange();
        this.scrollViewport();
    }
    goPageDown() {
        let e = Cn(this.data);
        let r = {
            x: this.temporalHorizontalPoint,
            y: e.y + window.innerHeight + 16
        };
        let n = xs(r);
        if (!n) {
            n = {
                line: this.lines.length - 1,
                char: this.lines[this.lines.length - 1].text.charLength
            };
        }
        if (n.line === this.data.line && n.char === this.data.char && this.lines.length - 1 > n.line) {
            n.line += 1;
        }
        this.data = n;
        this.fixPosition();
        this.emitChange();
        this.scrollViewport();
    }
    getNextLineHead() {
        if (this.data.line >= this.lines.length - 1) {
            return {
                line: this.lines.length - 1,
                char: this.lines[this.lines.length - 1].text.charLength
            };
        }
        return {
            line: this.data.line + 1,
            char: 0
        };
    }
    getPrevLineTail() {
        if (this.data.line <= 0) {
            return {
                line: 0,
                char: 0
            };
        }
        return {
            line: this.data.line - 1,
            char: this.lines[this.data.line - 1]?.text.charLength || 0
        };
    }
    goBackward({ scrollInView } = {
        scrollInView: true
    }) {
        if (this.data.char <= 0) {
            this.data = this.getPrevLineTail();
            this.updateTemporalHorizontalPoint();
            this.emitChange();
            if (scrollInView) {
                this.scrollViewport();
            }
            return;
        }
        this.data.char -= 1;
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        if (scrollInView) {
            this.scrollViewport();
        }
    }
    goForward({ scrollInView } = {
        scrollInView: true
    }) {
        if (this.isAtLineTail()) {
            this.data = this.getNextLineHead();
            this.updateTemporalHorizontalPoint();
            this.emitChange();
            if (scrollInView) {
                this.scrollViewport();
            }
            return;
        }
        this.data.char += 1;
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        if (scrollInView) {
            this.scrollViewport();
        }
    }
    goLeft({ scrollInView } = {
        scrollInView: true
    }) {
        this.data = My({
            position: this.data,
            pageDirection: jy()
        });
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        if (scrollInView) {
            this.scrollViewport();
        }
    }
    goRight({ scrollInView } = {
        scrollInView: true
    }) {
        this.data = Ry({
            position: this.data,
            pageDirection: jy()
        });
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        if (scrollInView) {
            this.scrollViewport();
        }
    }
    goTop() {
        this.data.char = 0;
        this.data.line = 0;
        this.emitChange();
        this.scrollViewport();
    }
    goBottom() {
        this.data.char = this.lines[this.lines.length - 1].text.charLength;
        this.data.line = this.lines.length - 1;
        this.emitChange();
        this.scrollViewport();
    }
    goWordHead() {
        this.data = this.getWordHead();
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        this.scrollViewport();
    }
    getWordHead() {
        if (this.isAtLineHead()) {
            return this.getPrevLineTail();
        }
        let text = this.lines[this.data.line].text;
        return {
            line: this.data.line,
            char: Iy(text, this.data.char)
        };
    }
    goWordTail() {
        this.data = this.getWordTail();
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        this.scrollViewport();
    }
    getWordTail() {
        if (this.isAtLineTail()) {
            return this.getNextLineHead();
        }
        let text = this.lines[this.data.line].text;
        return {
            line: this.data.line,
            char: Dy(text, this.data.char)
        };
    }
    goLineHead() {
        let e = kt(this.lines[this.data.line]);
        this.data.char = e >= this.data.char ? 0 : e;
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        this.scrollViewport();
    }
    goLineTail() {
        this.data.char = this.lines[this.data.line]?.text.charLength || 0;
        this.updateTemporalHorizontalPoint();
        this.emitChange();
        this.scrollViewport();
    }
    goByAction(e) {
        switch(e){
            case "go-up":
                this.goUp();
                break;
            case "go-down":
                this.goDown();
                break;
            case "go-left":
                this.goLeft();
                break;
            case "go-right":
                this.goRight();
                break;
            case "go-backward":
                this.goBackward();
                break;
            case "go-forward":
                this.goForward();
                break;
            case "go-top":
                this.goTop();
                break;
            case "go-bottom":
                this.goBottom();
                break;
            case "go-word-head":
                this.goWordHead();
                break;
            case "go-word-tail":
                this.goWordTail();
                break;
            case "go-line-head":
                this.goLineHead();
                break;
            case "go-line-tail":
                this.goLineTail();
                break;
            case "go-pageup":
                this.goPageUp();
                break;
            case "go-pagedown":
                this.goPageDown();
                break;
        }
    }
    scrollViewport(e) {
        if (this.visible) {
            requestAnimationFrame(()=>ky(e));
        }
    }
    emitChange(e) {
        super.emitChange(e);
        this.sync();
    }
    sync() {
        if (Ya.Sync.hasUnpushedCommit) {
            if (!this.debounced) {
                this.debounced = g_1(this.syncNow, mF);
            }
            this.debounced();
        } else {
            this.syncNow();
        }
    }
    syncNow() {
        if (!Ya.CurrentUser.isProjectMember) {
            return;
        }
        let e = Ya.CurrentUser.get();
        if (!e) {
            return;
        }
        let { id, name, displayName } = e;
        let o = {
            user: {
                id,
                name,
                displayName
            },
            pageId: this.page.id,
            position: this.data,
            visible: this.visible
        };
        Ya.Socket.get()?.emit("cursor", o);
    }
}, a_2(Pn, "Cursor"), Pn);
const Rl = class Rl extends Error {
    constructor(){
        super();
        this.name = "DuplicateTitleError";
        this.message = "title is duplicated";
    }
};
a_2(Rl, "DuplicateTitleError");
const wa = Rl;
const Ml = class Ml extends Error {
    constructor(){
        super();
        this.name = "NotFastForwardError";
        this.message = "Not fast-forward";
    }
};
a_2(Ml, "NotFastForwardError");
const Mt = Ml;
const Cs = r("src/client/js/stores/sync/pull.js");
async function Uy(t) {
    Cs("pull...");
    let e;
    try {
        e = await Fl();
    } catch (error) {
        console.error(error.stack || error);
        return;
    }
    if (!(e.length < 1)) {
        gF(e, t);
    }
}
a_2(Uy, "pull");
async function Fl() {
    let head = Ya.Page.commitId || "";
    let name = Ya.CurrentProject.get().name;
    let { data } = await x.get(`/api/commits/${name}/${Ya.Page.id}`, {
        timeout: 10000,
        params: {
            head
        },
        skipTrackLoading: true
    });
    let { commits } = data;
    if (commits.length > 0) {
        Cs(`fetched ${commits.length} commits. head:`, head, "commits:", commits);
    } else {
        Cs("already up to date. head:", head);
    }
    return commits;
}
a_2(Fl, "fetchCommits");
function gF(t, e) {
    try {
        Ya.Page.patch(t);
        Cs(`patched ${t.length} commits`);
    } catch (error) {
        if (error.name === Mt.name) {
            Cs("failed to patch commits. head mismatch");
            e("retry");
        } else {
            throw error;
        }
    }
}
a_2(gF, "patch");
const Ps = e_2(Ji(), 1);
const eV = a_2(({ children })=>{
    if (yr() === "ja") {
        return Ps.default.createElement(Ps.default.Fragment, null, children);
    }
    return null;
}, "JP");
const tV = a_2(({ children })=>{
    if (yr() === "en") {
        return Ps.default.createElement(Ps.default.Fragment, null, children);
    }
    return null;
}, "EN");
const qy = a_2((t)=>t[yr()] || t.en, "localize");
function yr() {
    return Ya.CurrentUser.get()?.uiLanguage || $y() || "en";
}
a_2(yr, "getUILanguage");
function $y() {
    let { language } = navigator;
    if (!language || (language = language.substr(0, 2), ![
        "en",
        "ja"
    ].includes(language))) {
        return null;
    }
    return language;
}
a_2($y, "getBrowserLanguage");
export function aa() {
    return !!(navigator.languages?.includes("ja") || $y() === "ja" || yr() === "ja");
}
a_2(aa, "isJapaneseReader");
const zy = r("src/client/js/stores/disable-realtime-collaboration.ts");
let kn;
const DisableRealtimeCollaboration = new (kn = class extends z {
    state = "viewing";
    error = null;
    initialize() {
        Ya.Page.addChangeListener(({ event })=>{
            event === "load" && (this.state === "viewing" && this.error === null || (this.state !== "viewing" && Ya.Sync.discardUnpushedCommits(), this.state = "viewing", this.error = null, this.emitChange()));
        });
    }
    get enabled() {
        return !!Ya.CurrentProject.get()?.disableRealtimeCollaboration;
    }
    get isEditing() {
        return this.state === "editing" || this.state === "saving";
    }
    get canEdit() {
        return this.state === "editing";
    }
    async startEditing() {
        if (this.state !== "viewing") {
            return;
        }
        let e = Ya.Page.id;
        this.state = "pulling";
        this.error = null;
        this.emitChange();
        let r = a_2(()=>this.state !== "pulling" || Ya.Page.id !== e, "navigatedAway");
        try {
            if (Ya.Page.persistent) {
                let n = await Fl();
                if (r()) {
                    return;
                }
                if (n.length > 0) {
                    Ya.Page.patch(n);
                }
            }
        } catch (error) {
            zy("failed to pull the latest commits", error);
            if (r()) {
                return;
            }
            this.state = "viewing";
            this.error = "pull-failed";
            this.emitChange();
            return;
        }
        if (!r()) {
            this.state = "editing";
            this.emitChange();
            Ya.Cursor.focus();
        }
    }
    async save() {
        if (this.state !== "editing") {
            return;
        }
        let e = Ya.Page.id;
        this.state = "saving";
        this.error = null;
        this.emitChange();
        let r = null;
        try {
            await Ya.Sync.pushOverHttp();
        } catch (error) {
            zy("failed to save", error);
            r = yF(error);
        }
        if (!(this.state !== "saving" || Ya.Page.id !== e)) {
            this.error = r;
            this.state = r === null ? "viewing" : "editing";
            this.emitChange();
        }
    }
    cancelEditing() {
        if (this.state === "editing") {
            if (Ya.Sync.hasUnpushedCommit) {
                let e = qy({
                    ja: "未保存の編集を破棄しますか？",
                    en: "Discard unsaved edits?"
                });
                if (!confirm(e)) {
                    return;
                }
            }
            Ya.Sync.discardUnpushedCommits();
            location.reload();
        }
    }
}, a_2(kn, "DisableRealtimeCollaboration"), kn);
function yF({ response }) {
    if (response?.status === 409) {
        if (response.data?.error === "DuplicateTitle") {
            return "duplicate-title";
        }
        return "not-fast-forward";
    }
    return "save-failed";
}
a_2(yF, "saveErrorCode");
const bF = r("src/client/js/stores/display-style.js");
let En;
const DisplayStyle = new (En = class extends z {
    constructor(){
        super();
        this.style = {
            "hide-dots": false,
            presentation: false,
            "loading-css": true,
            rtl: false,
            touchclick: false,
            "window-has-focus": true
        };
        this.updateDocument();
    }
    initialize() {
        Ya.Layout.addChangeListener(({ store })=>{
            let n = store.get();
            if (this.style.presentation && n !== "page") {
                this.disable("presentation");
            }
        });
        let e;
        Ya.Line.addChangeListener(({ store })=>{
            let n = store.lines.at(0);
            !n || !n.text || e !== n.text && (Ay(n.text) ? this.enable("rtl") : Oy(n.text) && this.disable("rtl"), e = n.text);
        });
    }
    check(e) {
        if (!this.style.hasOwnProperty(e)) {
            throw new Error(`"${e}" is not style.`);
        }
    }
    enable(e) {
        this.check(e);
        if (this.style[e] !== true) {
            this.style[e] = true;
            this.updateDocument();
            this.emitChange();
        }
    }
    disable(e) {
        this.check(e);
        if (this.style[e] !== false) {
            this.style[e] = false;
            this.updateDocument();
            this.emitChange();
        }
    }
    is(e) {
        this.check(e);
        return this.style[e];
    }
    updateDocument() {
        if (!Ne()) {
            return;
        }
        bF(this.style);
        let e = Object.entries(this.style).filter(([, r])=>r).map(([r])=>r).join(" ");
        document.documentElement.setAttribute("data-display-style", e);
    }
}, a_2(En, "DisplayStyle"), En);
let An;
const Error_1 = new (An = class extends z {
    constructor(){
        super();
        this._error = null;
    }
    get() {
        return this._error;
    }
    set(e) {
        this._error = e;
        this.emitChange();
    }
}, a_2(An, "Error"), An);
const Zy = e_2(On(), 1);
export const ca = [
    "image",
    "pdf",
    "text"
];
let Ln;
const FileSearch = new (Ln = class extends z {
    constructor(){
        super();
        this.pages = [];
        this.targetCategories = ca;
        this.searching = false;
    }
    get() {
        return this.pages;
    }
    async search({ projectName, searchQuery }) {
        this.searching = true;
        this.emitChange();
        let n = Zy.default.stringify({
            sort: Ya.PageList.getPageSort(projectName),
            q: searchQuery,
            categories: this.targetCategories
        });
        let s = `/api/pages/${projectName}/search/files?${n}`;
        let { data } = await x.get(s);
        this.pages = data.pages;
        this.searching = false;
        this.emitChange();
    }
    toggleTargetCategory({ name, projectName, searchQuery }) {
        if (ca.includes(name)) {
            if (this.targetCategories.includes(name)) {
                this.targetCategories = this.targetCategories.filter((s)=>s !== name);
            } else {
                this.targetCategories = this.targetCategories.concat(name);
            }
            this.search({
                projectName,
                searchQuery
            });
        }
    }
}, a_2(Ln, "FileSearch"), Ln);
const _F = r("src/client/js/stores/google-map.js");
let Tn;
const GoogleMap = new (Tn = class extends z {
    renderScriptTag() {
        let e = document.getElementById("google-map-script");
        if (e) {
            return;
        }
        _F("render google-map-script tag");
        e = document.createElement("script");
        e.async = true;
        e.setAttribute("src", "/api/google-map/js-map");
        e.id = "google-map-script";
        document.getElementsByTagName("body")[0].appendChild(e);
    }
}, a_2(Tn, "GoogleMap"), Tn);
const Il = e_2(da(), 1);
const jl = e_2(ea(), 1);
const PF = r("src/client/js/stores/infobox.ts");
let Mn;
const Infobox = new (Mn = class extends z {
    abortController = new ke;
    data;
    updating;
    literateDatabaseUpdateQueue;
    updatingSafetyTimer;
    constructor(){
        super();
        this.data = null;
        this.updating = false;
        this.literateDatabaseUpdateQueue = [];
        this.updatingSafetyTimer = undefined;
        c_1(this, "onSyncSuccess", "updateResult", "updateLiterateDatabase");
        this.updateResult = Il.default(this.updateResult, {
            trailing: true
        });
        this.updateLiterateDatabase = Il.default(this.updateLiterateDatabase, {
            trailing: true
        });
    }
    initialize() {
        Ya.Sync.on("syncSuccess", this.onSyncSuccess);
    }
    onSyncSuccess(e) {
        if (!Ya.Settings.flags.ENABLE_INFOBOX || !Ya.CurrentProject.get()?.infobox || Ya.Sync.hasUnpushedCommit || Ya.Sync._noInfoboxUpdate) {
            return;
        }
        if (this.data?.infoboxResult?.length) {
            this.setUpdating(true);
        }
        if (e.changes?.find((n)=>Array.isArray(n.infoboxDefinition))) {
            this.updateLiterateDatabase();
        }
    }
    async updateResult() {
        let name = Ya.CurrentProject.name;
        let r = Ya.Page.id;
        let n = `/api/pages/${name}/${r}/infobox/update-result`;
        try {
            await x.post(n, {
                socketId: Ya.Socket.get()?.id
            });
        } catch (error) {
            await jl.default(5000);
            throw error;
        }
        await jl.default(5000);
    }
    async updateLiterateDatabase() {
        let name = Ya.CurrentProject.name;
        this.literateDatabaseUpdateQueue = (Ya.RelatedPage.links1hop || []).map((r)=>r.id);
        PF("updateLiterateDatabase", this.literateDatabaseUpdateQueue.length);
        await Promise.all(Array(3).fill(null).map(async ()=>{
            while(this.literateDatabaseUpdateQueue.length > 0){
                let r = this.literateDatabaseUpdateQueue.shift();
                let n = `/api/pages/${name}/${r}/infobox/update-result`;
                await x.post(n);
                this.emitChange();
            }
        }));
    }
    async fetch() {
        let name = Ya.CurrentProject.name;
        let r = Ya.Page.id;
        let n = `/api/pages/${name}/${r}/infobox`;
        let s = await x.get(n, {
            signal: this.abortController.signal
        });
        let { data } = s;
        data.cachedAt = s.headers["x-serviceworker-cached"];
        return data;
    }
    set(e, { by } = {}) {
        this.data = e;
        this.emitChange({
            type: "set",
            by
        });
    }
    get() {
        return this.data;
    }
    get result() {
        return this.data?.infoboxResult;
    }
    isEnable(e) {
        if (Array.isArray(this.data?.infoboxDisableLinks)) {
            return !this.data.infoboxDisableLinks.includes(fe(e));
        }
        return false;
    }
    setUpdating(e) {
        this.updating = e;
        this.emitChange();
        clearTimeout(this.updatingSafetyTimer);
        if (e && !this.data?.infoboxResult?.length) {
            this.updatingSafetyTimer = setTimeout(()=>{
                if (this.updating && !this.data?.infoboxResult?.length) {
                    this.setUpdating(false);
                }
            }, 30000);
        }
    }
    async updateDisableLinks({ title, action }) {
        let name = Ya.CurrentProject.name;
        let s = Ya.Page.id;
        let o = `/api/pages/${name}/${s}/infobox/disable-links`;
        let f = await x.post(o, {
            title,
            action
        });
        let { data } = f;
        this.set(data);
    }
}, a_2(Mn, "Infobox"), Mn);
const Nl = e_2(mr(), 1);
let Fn;
const InPageSearch = new (Fn = class extends z {
    isOpen;
    hasFocus;
    query;
    result;
    currentIndex;
    setRangeTimeoutId;
    constructor(){
        super();
        this.isOpen = false;
        this.hasFocus = false;
        this.result = [];
        this.query = "";
        this.currentIndex = 0;
        this.setRangeTimeoutId = undefined;
    }
    setQuery(e) {
        if (this.query !== e) {
            this.query = e;
            this.currentIndex = 0;
        }
        this.search();
    }
    search() {
        if (this.query === "") {
            this.currentIndex = 0;
            this.result = [];
            this.emitChange("search");
            return;
        }
        this.result = [];
        let e = this.query.toLowerCase();
        let r = Nl.splitGraphemes(e);
        Ya.Line.getAll().forEach((s, o)=>{
            let f = s.text.toLowerCase();
            let c = Nl.splitGraphemes(f);
            if (f.includes(e)) {
                for(let u = 0; u <= c.length - r.length; u++){
                    if (r.every((d, b)=>c[u + b] === d)) {
                        this.result.push({
                            start: {
                                line: o,
                                char: u
                            },
                            end: {
                                line: o,
                                char: u + r.length
                            }
                        });
                        u += r.length - 1;
                    }
                }
            }
        });
        let n = this.result[this.currentIndex];
        if (n) {
            if (this.setRangeTimeoutId) {
                clearTimeout(this.setRangeTimeoutId);
            }
            Ya.Cursor.setPosition(n.end, {
                scrollInView: true
            });
            Ya.Selection.setRange(n, {
                hidePopupMenu: true
            });
            this.setRangeTimeoutId = setTimeout(()=>Ya.Selection.setRange(n, {
                    hidePopupMenu: true
                }), 1);
        }
        this.emitChange("search");
    }
    next() {
        this.currentIndex++;
        if (this.currentIndex > this.result.length - 1) {
            this.currentIndex = 0;
        }
        this.search();
    }
    prev() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.result.length - 1;
        }
        this.search();
    }
    changeFocusState(e) {
        this.hasFocus = e;
        this.emitChange("change:focus");
    }
    open() {
        this.isOpen = true;
        this.search();
        this.emitChange("open");
    }
    close() {
        this.isOpen = false;
        Ya.Selection.clear();
        Ya.Cursor.hide();
        this.emitChange("close");
    }
    focus() {
        this.emitChange("focus");
    }
}, a_2(Fn, "InPageSearch"), Fn);
const kF = r("src/client/js/stores/invitation.js");
let Dn;
const Invitation = new (Dn = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this._invitation = null;
    }
    async loadByCode(e, r) {
        let { data } = await x.get(`/api/projects/${e}/invitations/${r}`, {
            signal: this.abortController.signal
        });
        this._invitation = data;
        this.emitChange();
        return this._invitation;
    }
    async load(e) {
        try {
            let { data } = await x.get(`/api/projects/${e}/invitations`, {
                signal: this.abortController.signal
            });
            this._invitation = data;
        } catch (error) {
            if (Ye.isCancel(error)) {
                return kF("canceled");
            }
            let n = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            this._invitation = {
                error: {
                    message: n
                }
            };
        }
        this.emitChange();
        return this._invitation;
    }
    join() {
        return x.post(`/api/projects/${this._invitation.project.name}/invitations/${this._invitation.code}`);
    }
    async createAndReset(e) {
        try {
            let { data } = await x.post(`/api/projects/${e}/invitations`);
            this._invitation = data;
        } catch (error) {
            let n = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            this._invitation = {
                error: {
                    message: n
                }
            };
        }
        this.emitChange();
        return this._invitation;
    }
    get() {
        return this._invitation;
    }
}, a_2(Dn, "Invitation"), Dn);
let In;
const Layout = new (In = class extends z {
    constructor(){
        super();
        this._layout = "launch";
    }
    get() {
        return this._layout;
    }
    set(e, { scrollToTop } = {
        scrollToTop: true
    }) {
        this._layout = e;
        if (scrollToTop) {
            window.scrollTo(0, 0);
        }
        this.emitChange();
    }
}, a_2(In, "Layout"), In);
const Pa = e_2(vs(), 1);
function a0(...t) {
    return (e, r)=>{
        for (let n of t){
            e = n(e, r);
        }
        return e;
    };
}
a_2(a0, "combineDecorators");
function Sa(t, e, r) {
    let n = kt(t[e]);
    let s = {
        indent: n,
        start: e,
        end: e,
        get length () {
            return this.end - this.start + 1;
        }
    };
    for(let o = e + 1; o < t.length; o++){
        let f = t[o];
        if (n >= kt(f)) {
            break;
        }
        s.end = o;
    }
    if (typeof r === "function") {
        for(let o = e; o < s.end + 1; o++){
            r(t[o], {
                start: e,
                end: s.end
            });
        }
    }
    return s;
}
a_2(Sa, "getBlock");
function c0(t) {
    if (t.length > 0) {
        t[0].title = true;
    }
    return t;
}
a_2(c0, "decorateTitle");
function As(t) {
    let number = -1;
    if (t.length < 1) {
        return t;
    }
    for(let r = 0; r < t.length; r++){
        t[r].section = {
            number,
            start: false,
            end: false
        };
        if (!_s(t[r]) && kt(t[r]) === 0 && (r === 0 || _s(t[r - 1]))) {
            number += 1;
            t[r].section.start = true;
            if (r > 0) {
                t[r - 1].section.end = true;
            }
            t[r].section.number = number;
        }
    }
    t[t.length - 1].section.end = true;
    return t;
}
a_2(As, "decorateSection");
a_2(Bl, "isInfoboxOption");
export function fa(t) {
    let e = {
        ExcludeTitleLine: false
    };
    let fields = [];
    for (let n of t){
        if (!Bl(n)) {
            fields.push(n);
            continue;
        }
        let s = n.split(/\t/)[0]?.trim();
        e[s] = true;
    }
    return {
        options: e,
        fields
    };
}
a_2(fa, "parseInfoboxRows");
function AF(t) {
    let e = t.match(/^\s*table:(.+)$/);
    if (e) {
        let [, r] = e;
        r = r.trim();
        if (r === "") {
            r = " ";
        }
        return {
            title: r
        };
    }
    return {};
}
a_2(AF, "detectTableBlockStart");
function u0(t) {
    for(let e = 1; e < t.length; e++){
        let { title } = AF(t[e].text);
        if (!title) {
            continue;
        }
        let n = kt(t[e]) + 1;
        let s = Sa(t, e, (o)=>{
            let cells = [
                " ".repeat(n)
            ];
            let c = [
                ...o.text.substr(n).split(/(\t)/)
            ];
            while(c.length > 0){
                cells.push(c.shift() + (c.shift() || ""));
            }
            let infoboxOption = xa.includes(title) && Bl(o.text.trim());
            o.tableBlock = {
                title,
                indent: n,
                cells,
                start: false,
                end: false,
                ...infoboxOption && {
                    infoboxOption
                }
            };
        });
        t[e].tableBlock.start = true;
        t[s.end].tableBlock.end = true;
        e = s.end;
    }
    return t;
}
a_2(u0, "decorateTableBlock");
function l0(t) {
    for (let e of t){
        if (e.title) {
            continue;
        }
        let r = e.text.match(/^\s*([%$]) (.+)/);
        if (r) {
            let [, n, command] = r;
            e.cli = {
                prefix: n,
                command
            };
        }
    }
    return t;
}
a_2(l0, "decorateCli");
function f0(t) {
    for (let e of t){
        if (e.title) {
            continue;
        }
        let r = e.text.match(/^\s*(\?) (.+)/);
        if (r) {
            let [, n, entry] = r;
            e.helpfeel = {
                prefix: n,
                entry
            };
        }
    }
    return t;
}
a_2(f0, "decorateHelpfeel");
function OF(t) {
    let e = t.match(/^\s*code:(.+)\(([^()]+)\)$/);
    if (!e) {
        e = t.match(/^\s*code:(.+)$/);
    }
    if (!e) {
        return {};
    }
    let [, r, n] = e;
    r = r.trim();
    if (!n) {
        n = r.split(".").pop();
    }
    return {
        filename: r,
        lang: n.toLowerCase()
    };
}
a_2(OF, "detectCodeBlockStart");
function Ul(t, { cursorLine } = {}) {
    for(let r = 1; r < t.length; r++){
        let { filename, lang } = OF(t[r].text);
        if (lang) {
            let indent = kt(t[r]) + 1;
            let f = Sa(t, r, (c, { start, end })=>{
                c.codeBlock = {
                    lang,
                    filename,
                    indent,
                    start: false,
                    end: false,
                    hasCursor: start <= cursorLine && cursorLine <= end
                };
            });
            t[r].codeBlock.start = true;
            t[f.end].codeBlock.end = true;
            r = f.end;
        }
    }
    return t;
}
a_2(Ul, "decorateCodeBlock");
function F8(t, e) {
    Ul(t);
    let r = false;
    let n = [];
    for (let s of t){
        if (s.id === e && s.codeBlock && s.codeBlock.start) {
            r = true;
            continue;
        }
        if (r) {
            if (!s.codeBlock || s.codeBlock.start) {
                break;
            }
            let o = s.text.substr(s.codeBlock.indent);
            n.push(o);
        }
    }
    return n;
}
a_2(F8, "getCodeTextStartsFromLineId");
function h0(t) {
    for (let e of t){
        if (e.title) {
            continue;
        }
        let r = e.text.match(/^\s*(\d+)\. /);
        if (r) {
            let [, n] = r;
            e.numberList = {
                digit: n.length
            };
        }
    }
    return t;
}
a_2(h0, "decorateNumberList");
function d0(t) {
    for (let e of t){
        if (e.title || e.numberList || e.codeBlock || e.tableBlock || e.cli || e.helpfeel) {
            continue;
        }
        let r = Ba(e.text);
        if (r.type === "deco-formula" || r.type === "indent" && r.children && r.children.type === "deco-formula" || r.children instanceof Array && r.children.length === 1 && r.children[0] && r.children[0].type === "deco-formula") {
            e.formulaLine = true;
        }
    }
    return t;
}
a_2(d0, "decorateFormula");
function p0(t) {
    for (let e of t){
        if (e.title || e.numberList || e.codeBlock || e.tableBlock || e.cli || e.helpfeel) {
            continue;
        }
        let r = Ba(e.text);
        if (r.type === "quote" || r.type === "indent" && r.children?.type === "quote") {
            e.quoteLine = true;
        }
    }
    return t;
}
a_2(p0, "decorateQuote");
const LF = a_2((t)=>[
        "image",
        "strongImage",
        "imageLink",
        "strongImageLink",
        "gyazo",
        "strongGyazo",
        "gyazoLink",
        "strongGyazoLink"
    ].includes(t), "isImageType");
var m0 = a_2((t)=>{
    if ([
        "indent",
        "quote"
    ].includes(t.type)) {
        return m0(t.children);
    }
    return t;
}, "skipIndentAndQuoteNode");
function g0(t) {
    for (let e of t){
        if (e.title || e.numberList || e.codeBlock || e.tableBlock || e.cli || e.helpfeel || e.formulaLine) {
            continue;
        }
        let r = m0(Ba(e.text));
        if (!(r instanceof Array)) {
            continue;
        }
        let n = r.filter((s)=>LF(s?.type));
        if (n.length > 1) {
            e.numberOfImages = n.length;
        }
    }
    return t;
}
a_2(g0, "decorateImage");
function TF(t) {
    if (Array.isArray(t)) {
        return t;
    }
    return [];
}
a_2(TF, "noEmptyLines");
const _a = a0(TF, Ne() ? structuredClone : e_1, c0, As, Ul, u0, l0, f0, h0, d0, p0, g0);
function RF(t) {
    return !t.title && !t.codeBlock && !t.cli && !t.helpfeel;
}
a_2(RF, "isBracketingLine");
function y0(t) {
    let links = [];
    let projectLinks = [];
    let images = [];
    let icons = [];
    let descriptions = [];
    let files = [];
    let helpfeels = [];
    let infoboxDefinition = [];
    let t_length = t.length;
    let charsCount = t.reduce((acc, item)=>acc + (item.text || "").charLength, 0);
    for (let y of _a(t)){
        if (y.title || y.codeBlock?.start) {
            continue;
        }
        let w = !!y.codeBlock || !!y.cli || !!y.helpfeel;
        if (descriptions.length < 5 && !_s(y)) {
            let _ = w ? `\`${y.text.trim().replace(/`/g, "\\`").slice(0, 198)}\`` : y.text.trim().slice(0, 200);
            descriptions.push(_);
        }
        if (y.helpfeel && !y.codeBlock && !y.tableBlock) {
            helpfeels.push(y.helpfeel.entry);
        }
        if (RF(y)) {
            let _ = Ba(y.text);
            links = links.concat(Lu(_));
            projectLinks = projectLinks.concat(Tu(_));
            icons = icons.concat(Ru(_));
            files = files.concat(Fu(_));
            if (!y.tableBlock) {
                images = images.concat(Mu(_));
            }
        }
        if (xa.includes(y.tableBlock?.title) && !y.tableBlock?.start) {
            let _ = y.text.trim();
            infoboxDefinition.push(_);
        }
    }
    links = J_1(links);
    projectLinks = J_1(projectLinks);
    images = J_1(images);
    icons = J_1(icons);
    files = J_1(files);
    helpfeels = J_1(helpfeels);
    return {
        links,
        projectLinks,
        icons,
        images,
        descriptions,
        files,
        helpfeels,
        infoboxDefinition,
        linesCount: t_length,
        charsCount
    };
}
a_2(y0, "getPageMetadataFromLines");
function jn({ userId = "0" } = {}) {
    let e = Math.floor(Math.random() * 16777215);
    return a_2(()=>{
        let n = Math.floor(Date.now() / 1000);
        e += 1;
        if (e > 16777215) {
            e = 0;
        }
        let s = Ca(n, 8);
        let o = Ca(userId.toString(), 6);
        let f = Ca(0, 4);
        let c = Ca(e, 6);
        return s + o + f + c;
    }, "generate");
}
a_2(jn, "IdGenerator");
function Ca(t, e) {
    let r = typeof t === "string" ? parseInt(t, 16).toString(16) : t.toString(16);
    if (r.length > e) {
        return r.slice(r.length - e);
    }
    return "0".repeat(e - r.length) + r;
}
a_2(Ca, "toString16");
function ct(t) {
    return /^[a-f\d]{24,32}$/.test(t);
}
a_2(ct, "isIdString");
function Os(t) {
    let e = t.find((r)=>r.deleted);
    if (e) {
        return [
            e
        ];
    }
    t = t.concat();
    for(let r = t.length - 1; r > -1; r--){
        let n = t[r];
        if (n) {
            if (n._delete) {
                for(let s = r - 1; s > -1; s--){
                    if (t[s] !== null) {
                        if (t[s]._update === n._delete) {
                            t[s] = null;
                            continue;
                        }
                        if (t[s]._insert) {
                            if (t[s]._insert === n._delete) {
                                break;
                            }
                            if (t[s].lines.id === n._delete) {
                                t[s] = null;
                                t[r] = null;
                                break;
                            }
                        }
                    }
                }
                continue;
            }
            if (n._update) {
                for(let s = r - 1; s > -1; s--){
                    if (t[s] !== null) {
                        if (t[s]._update === n._update) {
                            t[s] = null;
                            continue;
                        }
                        if (t[s]._insert && t[s].lines.id === n._update) {
                            t[s].lines.text = n.lines.text;
                            t[r] = null;
                            break;
                        }
                    }
                }
                continue;
            }
            if (n._insert) {
                for(let s = r - 1; s > -1; s--){
                    if (t[s] !== null && t[s]._delete && t[s]._delete === n.lines.id) {
                        t[s] = null;
                        t[r] = null;
                        break;
                    }
                }
                continue;
            }
            for (let s of [
                "title",
                "image",
                "links",
                "projectLinks",
                "icons",
                "descriptions",
                "files",
                "helpfeels",
                "infoboxDefinition",
                "infoboxResult",
                "infoboxDisableLinks",
                "charsCount",
                "linesCount"
            ]){
                if (n[s] !== undefined) {
                    for(let o = r - 1; o > -1; o--){
                        if (t[o] !== null && t[o][s] !== undefined) {
                            t[o] = null;
                        }
                    }
                    break;
                }
            }
        }
    }
    return t.filter((r)=>r);
}
a_2(Os, "compressChanges");
export const Da = {
    compress (t) {
        t.changes = Os(t.changes);
        return t;
    },
    validate (t) {
        let e = new ft;
        if (t) {
            if (t.kind !== "page") {
                e.errors.push(`commit.kind is "${t.kind}"`);
            }
            if (t.parentId && !ct(t.parentId)) {
                e.errors.push(`commit.parentId is not valid ID "${t.parentId}"`);
            }
            if (!(t.changes instanceof Array)) {
                e.errors.push("commit.changes is not Array");
            }
            if (!ct(t.pageId)) {
                e.errors.push(`commit.pageId is not valid ID "${t.pageId}"`);
            }
            if (!ct(t.userId)) {
                e.errors.push(`commit.userId is not valid ID "${t.userId}"`);
            }
            if (!ct(t.projectId)) {
                e.errors.push(`commit.projectId is not valid ID "${t.projectId}"`);
            }
            return e;
        }
        e.errors.push("commit.kind is not an PageCommit");
        return e;
    },
    create ({ parentId, changes, cursor, pageId, userId, projectId }) {
        return {
            kind: "page",
            parentId,
            changes,
            cursor,
            pageId,
            userId,
            projectId
        };
    }
};
const FF = {
    validate: a_2((t)=>{
        let e = new ft;
        if (!t || typeof t !== "object") {
            e.errors.push(`${t} is not an InsertChange`);
            return e;
        }
        if (t._insert !== "_end" && !ct(t._insert)) {
            e.errors.push(`change._insert is not valid lineId "${t._insert}"`);
        }
        if (t.lines) {
            return ct(t.lines.id) || e.errors.push(`change.lines.id is not valid lineId "${t.lines.id}"`), typeof t.lines.text !== "string" && e.errors.push(`change.lines.text is not string "${t.lines.text}"`), /[\r\n\u2028\u2029]/.test(t.lines.text) && e.errors.push(`change.lines.text cannot include line-feed "${t.lines.text}"`), e;
        }
        return e.errors.push("change.lines does not exist"), e;
    }, "validate"),
    create: a_2(({ positionId, lineId, text })=>({
            _insert: positionId,
            lines: {
                id: lineId,
                text
            }
        }), "create")
};
const Nn = FF;
const DF = {
    validate: a_2((t)=>{
        let e = new ft;
        if (!t || typeof t !== "object") {
            e.errors.push(`${t} is not an UpdateChange.`);
            return e;
        }
        if (!ct(t._update)) {
            e.errors.push(`change._update is not valid lineId "${t._update}"`);
        }
        if (t.lines) {
            return typeof t.lines.text !== "string" && e.errors.push(`change.lines.text is not string "${t.lines.text}"`), /[\r\n\u2028\u2029]/.test(t.lines.text) && e.errors.push(`change.lines.text cannot include line-feed "${t.lines.text}"`), e;
        }
        return e.errors.push("change.lines does not exist"), e;
    }, "validate"),
    create: a_2(({ lineId, text, noTimestampUpdate })=>({
            _update: lineId,
            lines: {
                text
            },
            noTimestampUpdate
        }), "create")
};
const Bn = DF;
const IF = {
    validate: a_2((t)=>{
        let e = new ft;
        if (!t || typeof t !== "object") {
            e.errors.push(`${t} is not a DeleteChange`);
            return e;
        }
        if (!ct(t._delete)) {
            e.errors.push(`change._delete is not valid lineId "${t._delete}"`);
        }
        if (typeof t.lines !== "number") {
            e.errors.push(`change.lines is not number "${t.lines}"`);
        }
        return e;
    }, "validate"),
    create: a_2(({ lineId })=>({
            _delete: lineId,
            lines: -1
        }), "create")
};
const Un = IF;
const b0 = a_2(()=>Math.round(Date.now() / 1000), "now");
const ql = class ql {
    constructor(e){
        this.lines = e || [];
    }
    indexById(e) {
        let r = 0;
        for (let n of this.lines){
            if (n.id === e) {
                return r;
            }
            r++;
        }
        return -1;
    }
    at(e) {
        return this.lines[e];
    }
    getById(e) {
        return this.lines.find((r)=>r.id === e);
    }
    all() {
        return this.lines;
    }
    get length() {
        return this.lines.length;
    }
    insert(e, r, n = true, { noInfoboxUpdate, timestamp } = {}) {
        if (this.indexById(r.id) > -1) {
            throw new Error("duplicated line id");
        }
        let f = e < this.lines.length ? this.lines[e].id : "_end";
        let c = timestamp ?? b0();
        r.created = c;
        r.updated = c;
        this.lines.splice(e, 0, r);
        if (n) {
            let u = r.id;
            let { text } = r;
            let b = Nn.create({
                positionId: f,
                lineId: u,
                text
            });
            let y = Un.create({
                lineId: u
            });
            Ya.Sync.insert(b, {
                noInfoboxUpdate
            });
            Ya.Undo.append({
                forward: b,
                reverse: y
            });
        }
    }
    delete(e, r = true) {
        let n = this.at(e).id;
        let text = this.at(e).text;
        let o = this.at(this.indexById(n) + 1);
        let f = o ? o.id : "_end";
        this.lines.splice(e, 1);
        if (r) {
            let c = Un.create({
                lineId: n
            });
            let u = Nn.create({
                positionId: f,
                lineId: n,
                text
            });
            Ya.Sync.delete(c);
            Ya.Undo.append({
                forward: c,
                reverse: u
            });
        }
    }
    update(e, { text, userId }, s = true, { noTimestampUpdate, noInfoboxUpdate, timestamp } = {}) {
        if (!noTimestampUpdate) {
            this.at(e).updated = timestamp ?? b0();
        }
        let text_1 = this.at(e).text;
        this.at(e).text = text;
        this.at(e).userId = userId;
        if (s) {
            let d = this.at(e).id;
            let b = Bn.create({
                lineId: d,
                text
            });
            let y = Bn.create({
                lineId: d,
                text: text_1
            });
            Ya.Sync.update(b, {
                noInfoboxUpdate
            });
            Ya.Undo.append({
                forward: b,
                reverse: y
            });
        }
        if (e === 0 && s) {
            Ya.SearchForm.setTitleJustEdited(text.trim());
        }
    }
    patchChanges({ changes, userId, created }, s) {
        for (let receivedChange of changes){
            if (receivedChange) {
                if (receivedChange._insert) {
                    let f = receivedChange._insert === "_end" ? this.lines.length : this.indexById(receivedChange._insert);
                    if (f < 0) {
                        throw new Error(`can not insert. ${receivedChange._insert} is not found`);
                    }
                    let c = {
                        ...receivedChange.lines,
                        userId
                    };
                    this.insert(f, c, false, {
                        timestamp: created
                    });
                    if (typeof s === "function") {
                        s({
                            lineNumber: f,
                            moveLine: 1,
                            receivedChange
                        });
                    }
                } else if (receivedChange._update) {
                    let f = this.indexById(receivedChange._update);
                    if (f < 0) {
                        throw new Error(`can not update. ${receivedChange._update} is not found`);
                    }
                    let c = {
                        ...receivedChange.lines,
                        userId
                    };
                    this.update(f, c, false, {
                        noTimestampUpdate: receivedChange.noTimestampUpdate,
                        timestamp: created
                    });
                    if (typeof s === "function") {
                        s({
                            lineNumber: f,
                            moveLine: 0,
                            receivedChange
                        });
                    }
                } else if (receivedChange._delete) {
                    let f = this.indexById(receivedChange._delete);
                    if (f < 0) {
                        throw new Error(`can not delete. ${receivedChange._delete} is not found`);
                    }
                    this.delete(f, false);
                    if (typeof s === "function") {
                        s({
                            lineNumber: f,
                            moveLine: -1,
                            receivedChange
                        });
                    }
                }
            }
        }
    }
    getTitle() {
        return vy(this.lines);
    }
    getPageMetadata() {
        return y0(this.lines);
    }
};
a_2(ql, "LineArray");
const Et = ql;
let qn;
export const Ea = new (qn = class {
    constructor(){
        if (Ne() && (!localStorage || !localStorage.emacsCutBuffer)) {
            this.set("");
        }
    }
    set(e) {
        try {
            localStorage.emacsCutBuffer = e;
        } catch (error) {
            this.localStorageError = error;
            this.buffer = e;
        }
    }
    get() {
        if (this.localStorageError) {
            return this.buffer;
        }
        return localStorage.emacsCutBuffer;
    }
    append(e) {
        this.set(this.get() + e);
    }
    prepend(e) {
        this.set(e + this.get());
    }
}, a_2(qn, "EmacsCutBuffer"), qn);
const jF = r("src/client/js/stores/line.js");
let $n;
const Line = new ($n = class extends z {
    constructor(){
        super();
        this.resetLines();
    }
    initialize() {
        Ya.CurrentUser.addChangeListener(()=>{
            this.generateNewId = jn({
                userId: Ya.CurrentUser.get().id
            });
        });
        if (Ya.Cursor) {
            Ya.Cursor.addChangeListener(({ event })=>{
                if (event && event.source === "mouse") {
                    this.moveLinesHorizontalFinish();
                }
            });
        }
    }
    resetLines() {
        this.lines = new Et;
        this.moveLinesHorizontalStartIsLineHead = null;
        this.moveLinesHorizontalEndIsLineHead = null;
    }
    setLines(e, { by } = {}) {
        this.lines = new Et(e);
        this.emitChange({
            by
        });
    }
    getAll() {
        return this.lines.all();
    }
    insertAfterLineId({ text, lineId }) {
        let n = {
            text,
            id: this.generateNewId(),
            userId: Ya.CurrentUser.get().id
        };
        this.lines.insert(this.lines.indexById(lineId) + 1, n);
        this.emitChange({
            by: "edit"
        });
    }
    insertAfterTitleLine(e) {
        let r = e.split(/[\r\n]/).reverse().map((n)=>{
            let s = this.generateNewId();
            let o = Ya.CurrentUser.get().id;
            this.lines.insert(1, {
                id: s,
                text: n,
                userId: o
            });
            return s;
        });
        this.emitChange({
            by: "edit"
        });
        return r;
    }
    insertAfterLastLine(e) {
        let r = e.split(/[\r\n]/).map((n)=>{
            let s = this.generateNewId();
            let o = Ya.CurrentUser.get().id;
            this.lines.insert(this.lines.length, {
                id: s,
                text: n,
                userId: o
            });
            return s;
        });
        this.emitChange({
            by: "edit"
        });
        return r;
    }
    addChar(e, r = Ya.Cursor.getPosition(), n = Ya.Selection.getRange(), s = true) {
        if (!Pa.When.enable_edit) {
            return;
        }
        let o = 50000;
        if (e.length > o) {
            alert("Your input is too large");
            e = e.slice(0, o);
        }
        if (n && Ya.Selection.hasSelection(n)) {
            r = this._deleteRange(n);
        }
        if (r.line >= this.lines.length) {
            this.insertAfterLastLine("");
            r = {
                line: this.lines.length - 1,
                char: 0
            };
        }
        let f = e.split(`
`);
        let text = this.lines.at(r.line).text;
        let u = text.charSubstr(0, r.char);
        let d = text.charSubstr(r.char);
        let b = u === "" && d !== "";
        let y = Ya.CurrentUser.get().id;
        for(let w = 0; w < f.length; w++){
            let _ = w === 0;
            let A = w === f.length - 1;
            let F = "";
            if (_) {
                F += u;
            }
            F += f[w];
            if (A) {
                F += d;
            }
            if (b) {
                if (A) {
                    this.lines.update(r.line + w, {
                        text: F,
                        userId: y
                    });
                } else {
                    let Y = this.generateNewId();
                    this.lines.insert(r.line + w, {
                        id: Y,
                        text: F,
                        userId: y
                    });
                }
            } else if (_) {
                if (!(u === F && d === "")) {
                    this.lines.update(r.line + w, {
                        text: F,
                        userId: y
                    });
                }
            } else {
                let Y = this.generateNewId();
                this.lines.insert(r.line + w, {
                    id: Y,
                    text: F,
                    userId: y
                });
            }
        }
        if (s) {
            if (f.length > 1) {
                r.char = f[f.length - 1].length;
            } else {
                r.char += f[0].charLength;
            }
            r.line += f.length - 1;
            Ya.Cursor.setPosition(r);
        }
        this.emitChange({
            by: "edit"
        });
    }
    _deleteRange(e) {
        if (!Pa.When.enable_edit || (e = Ya.Selection.normalizeOrder(e), e.end.line >= this.lines.length)) {
            return;
        }
        let r = this.lines.at(e.start.line).text.charSubstr(0, e.start.char);
        let n = this.lines.at(e.end.line).text.charSubstr(e.end.char);
        let s = r + n;
        this.lines.update(e.start.line, {
            text: s,
            userId: Ya.CurrentUser.get().id
        });
        let o = e.end.line - e.start.line;
        if (o > 0) {
            for(let c = 0; c < o; c++){
                this.lines.delete(e.end.line - c);
            }
        }
        let f = {
            line: e.start.line,
            char: e.start.char
        };
        Ya.Cursor.setPosition(f);
        Ya.Selection.clear();
        return f;
    }
    deleteRange(e) {
        if (!Pa.When.enable_edit) {
            return;
        }
        let r = this._deleteRange(e);
        this.emitChange({
            by: "edit"
        });
        return r;
    }
    deleteChar(e, r = Ya.Cursor.getPosition(), n = Ya.Selection.getRange(), s = true) {
        if (!Ya.CurrentUser.isProjectMember || r.line >= this.lines.length) {
            return;
        }
        let o;
        let f;
        let c;
        if (n && Ya.Selection.hasSelection(n)) {
            return this.deleteRange(n);
        }
        let u = Ya.CurrentUser.get().id;
        e > 0 ? Ya.Cursor.isAtLineTail() ? r.line < this.lines.all().length - 1 && (this.lines.at(r.line).text.length <= 0 ? this.lines.delete(r.line) : (this.lines.at(r.line + 1).text.length > 0 && (c = this.lines.at(r.line).text + this.lines.at(r.line + 1).text, this.lines.update(r.line, {
            text: c,
            userId: u
        })), this.lines.delete(r.line + 1))) : (f = this.lines.at(r.line).text, f = f.charSubstr(0, r.char) + f.charSubstr(r.char + e), this.lines.update(r.line, {
            text: f,
            userId: u
        })) : r.char === 0 ? r.line > 0 && (o = this.lines.at(r.line - 1).text.charLength, o <= 0 ? this.lines.delete(r.line - 1) : (this.lines.at(r.line).text.length > 0 && (c = this.lines.at(r.line - 1).text + this.lines.at(r.line).text, this.lines.update(r.line - 1, {
            text: c,
            userId: u
        })), this.lines.delete(r.line)), s && (r = {
            line: r.line - 1,
            char: o
        }, Ya.Cursor.setPosition(r))) : (f = this.lines.at(r.line).text, f = f.charSubstr(0, r.char + e) + f.charSubstr(r.char), this.lines.update(r.line, {
            text: f,
            userId: u
        }), s && (r.char += e, Ya.Cursor.setPosition(r)));
        this.emitChange({
            by: "edit"
        });
    }
    mergeCommit(e) {
        jF("mergeCommit");
        let r = Ya.Cursor.getPosition();
        let n = Ya.Selection.getRange();
        let lines = Ya.Page.lines;
        let o = Ya.Cursor.isAtLineTail();
        lines.patchChanges(e, ({ lineNumber, moveLine, receivedChange })=>{
            if (r.line >= lineNumber) {
                r.line += moveLine;
            }
            if (receivedChange._update && o && r.line === lineNumber) {
                r.char = receivedChange.lines.text.charLength;
            }
            if (n.start.line >= lineNumber) {
                n.start.line += moveLine;
            }
            if (n.end.line >= lineNumber) {
                n.end.line += moveLine;
            }
            Ya.Sync.rebase({
                receivedChange,
                lineNumber,
                originalLines: lines
            });
        });
        Ya.Sync.updateParentId({
            pageId: Ya.Page.id,
            commitId: e.id
        });
        Ya.Page.commitId = e.id;
        let f = e_1(lines);
        if (Ya.Sync.hasUnpushedCommit) {
            for (let c of Ya.Sync.commits){
                f.patchChanges(c);
            }
        }
        this.lines = f;
        this.emitChange({
            by: "remote"
        });
        if (Ya.Cursor.getVisible()) {
            Ya.Cursor.setPosition(r, {
                scrollInView: false
            });
        }
        if (Ya.Selection.hasSelection()) {
            Ya.Selection.setRange(n);
        }
    }
    isEmptyLine(e) {
        return this.lines.at(e).text === "";
    }
    getIndent(e) {
        return this.lines.at(e).text.match(/^(\s*)/)[0].length;
    }
    getBlock(e) {
        let r = this.getIndent(e);
        let n = {
            indent: r,
            start: e,
            end: e,
            get length () {
                return this.end - this.start + 1;
            }
        };
        for(let s = e + 1; s < this.lines.length; s++){
            let o = this.getIndent(s);
            if (r === 0) {
                if (o === 0) {
                    if (this.lines.at(s).text.length > 0) {
                        break;
                    }
                    continue;
                }
            } else {
                if (/^\s*$/.test(this.lines.at(s).text)) {
                    if (r < o) {
                        n.end = s;
                    }
                    continue;
                }
                if (r >= o) {
                    break;
                }
            }
            n.end = s;
        }
        return n;
    }
    moveBlockDown(e) {
        if (this.isEmptyLine(e) || e >= this.lines.length) {
            return;
        }
        Ya.Selection.clear();
        let r = this.getBlock(e);
        if (r.end + 1 >= this.lines.length) {
            return;
        }
        let n = C_1(r.end + 1, this.lines.length).find((u)=>r.indent === 0 || this.lines.at(u).text.length !== 0);
        if (this.getIndent(r.start) !== this.getIndent(n)) {
            return;
        }
        let s = this.getBlock(n);
        let o = C_1(r.start, r.end + 1).map((u)=>this.lines.at(u));
        let f = C_1(r.end + 1, s.start).map((u)=>this.lines.at(u));
        for(let u = 0; u < r.length + f.length; u++){
            this.lines.delete(r.start);
        }
        for(let u = 0; u < f.length; u++){
            let d = e_1(f[u]);
            d.id = this.generateNewId();
            this.lines.insert(r.start + s.length + u, d);
        }
        for(let u = 0; u < o.length; u++){
            let d = e_1(o[u]);
            d.id = this.generateNewId();
            this.lines.insert(r.start + s.length + f.length + u, d);
        }
        let c = Ya.Cursor.getPosition();
        c.line += s.length + f.length;
        Ya.Cursor.setPosition(c, {
            scrollInView: true
        });
        this.emitChange({
            by: "edit"
        });
    }
    moveBlockUp(e) {
        if (this.isEmptyLine(e) || e >= this.lines.length) {
            return;
        }
        Ya.Selection.clear();
        let r = this.getBlock(e);
        let n;
        for(let c = r.start - 1; c >= 0; c--){
            if (this.lines.at(c).text.length !== 0 && this.getIndent(c) < r.indent) {
                return;
            }
            if (this.getIndent(c) === r.indent && (r.indent === 0 || this.lines.at(c).text !== "")) {
                n = this.getBlock(c);
                break;
            }
        }
        if (!n) {
            return;
        }
        let s = C_1(n.end + 1, r.start).map((c)=>this.lines.at(c));
        let o = C_1(r.start, r.end + 1).map((c)=>this.lines.at(c));
        for(let c = 0; c < r.length + s.length; c++){
            this.lines.delete(n.end + 1);
        }
        for(let c = 0; c < o.length; c++){
            let u = e_1(o[c]);
            u.id = this.generateNewId();
            this.lines.insert(n.start + c, u);
        }
        for(let c = 0; c < s.length; c++){
            let u = e_1(s[c]);
            u.id = this.generateNewId();
            this.lines.insert(n.start + o.length + c, u);
        }
        let f = Ya.Cursor.getPosition();
        f.line = n.start;
        Ya.Cursor.setPosition(f, {
            scrollInView: true
        });
        this.emitChange({
            by: "edit"
        });
    }
    moveBlockLeft(e) {
        if (this.isEmptyLine(e)) {
            return;
        }
        Ya.Selection.clear();
        let r = this.getBlock(e);
        if (r.indent < 1) {
            return;
        }
        for(let s = r.start; s <= r.end; s++){
            this.deleteChar(-1, {
                line: s,
                char: 1
            }, null, false);
        }
        let n = Ya.Cursor.getPosition();
        if (!(n.char < 1)) {
            n.char -= 1;
            Ya.Cursor.setPosition(n);
            this.emitChange({
                by: "edit"
            });
        }
    }
    moveBlockRight(e) {
        if (this.isEmptyLine(e)) {
            return;
        }
        Ya.Selection.clear();
        let r = this.getBlock(e);
        for(let s = r.start; s <= r.end; s++){
            this.addChar(" ".repeat(1), {
                line: s,
                char: 0
            }, null, false);
        }
        let n = Ya.Cursor.getPosition();
        n.char += 1;
        Ya.Cursor.setPosition(n);
        this.emitChange({
            by: "edit"
        });
    }
    moveLinesHorizontalFinish() {
        this.moveLinesHorizontalStartIsLineHead = null;
        this.moveLinesHorizontalEndIsLineHead = null;
    }
    moveLinesHorizontal(e) {
        if (!Ya.CurrentUser.isProjectMember || e === 0) {
            return;
        }
        if (typeof e !== "number") {
            throw new Error("direction must be number");
        }
        let r = e_1(Ya.Cursor.getPosition());
        let { start, end } = Ya.Selection.getRange({
            normalizeOrder: true
        });
        if (this.moveLinesHorizontalStartIsLineHead === null) {
            this.moveLinesHorizontalStartIsLineHead = start.line !== end.line && start.char === 0;
        }
        if (this.moveLinesHorizontalEndIsLineHead === null) {
            this.moveLinesHorizontalEndIsLineHead = start.line !== end.line && end.char === 0;
        }
        if (start.line === end.line) {
            start.line = end.line = r.line;
        }
        let o = this.moveLinesHorizontalEndIsLineHead ? end.line - 1 : end.line;
        if (e < 0) {
            for(let f = start.line; f < o + 1; f++){
                if (this.lines.at(f).text.length > 0 && this.getIndent(f) < e * -1) {
                    return;
                }
            }
        }
        for(let f = start.line; f < o + 1; f++){
            f !== start.line && this.lines.at(f).text.length === 0 || (e > 0 ? this.addChar(" ".repeat(e), {
                line: f,
                char: 0
            }, null, false) : this.deleteChar(e, {
                line: f,
                char: e * -1
            }, null, false));
        }
        if (!this.moveLinesHorizontalStartIsLineHead) {
            start.char = x_1([
                0,
                start.char + e
            ]);
        }
        if (!this.moveLinesHorizontalEndIsLineHead) {
            end.char = x_1([
                0,
                end.char + e
            ]);
        }
        Ya.Selection.setRange({
            start,
            end
        });
        if (r.line === end.line && this.moveLinesHorizontalEndIsLineHead) {
            Ya.Cursor.setPosition(end);
        } else {
            r.char = x_1([
                0,
                r.char + e
            ]);
            Ya.Cursor.setPosition(r);
        }
        this.emitChange({
            by: "edit"
        });
    }
    moveLinesVertical(e) {
        if (!Ya.CurrentUser.isProjectMember || e === 0) {
            return;
        }
        if (e < -1) {
            e = -1;
        } else if (e > 1) {
            e = 1;
        }
        let r;
        let n;
        r = n = Ya.Cursor.getPosition().line;
        if (r >= this.lines.length) {
            return;
        }
        if (Ya.Selection.hasSelection()) {
            let o = Ya.Selection.getRange({
                normalizeOrder: true
            });
            r = o.start.line;
            n = o.end.line;
        }
        if (e === 0 || e < 0 && r < 1 || e > 0 && n > this.lines.length - 2) {
            return;
        }
        let s = C_1(r, n + 1).map((o)=>this.lines.at(o));
        for(let o = 0; o < s.length; o++){
            this.lines.delete(r);
        }
        for(let o = 0; o < s.length; o++){
            let f = e_1(s[o]);
            f.id = this.generateNewId();
            this.lines.insert(r + e + o, f);
        }
        if (Ya.Selection.hasSelection()) {
            let o = Ya.Selection.getRange({
                normalizeOrder: true
            });
            o.start.line += e;
            o.end.line += e;
            if (e === -1) {
                let f = o.start;
                o.start = e_1(o.end);
                o.end = e_1(f);
            }
            Ya.Selection.setRange(o);
            Ya.Cursor.setPosition(o.end, {
                scrollInView: true
            });
        } else {
            let o = Ya.Cursor.getPosition();
            o.line += e;
            Ya.Cursor.setPosition(o, {
                scrollInView: true
            });
        }
        this.emitChange({
            by: "edit"
        });
    }
    deleteInfront(e, r) {
        if (e.line >= this.lines.length) {
            return;
        }
        if (Ya.Selection.hasSelection()) {
            return this.deleteRange(Ya.Selection.getRange());
        }
        let n;
        if (Ya.Cursor.isAtLineHead()) {
            n = Ya.Cursor.getPrevLineTail();
        } else {
            let f = this.lines.at(e.line).text.match(/^(\s*)/)[0].length;
            n = {
                line: e.line,
                char: f >= e.char ? 0 : f
            };
        }
        let s = {
            start: n,
            end: e
        };
        let o = n.line === e.line ? this.lines.at(e.line).text.substring(n.char, e.char) : `
`;
        if (r) {
            Ea.prepend(o);
        } else {
            Ea.set(o);
        }
        return this.deleteRange(s);
    }
    deleteBehind(e, r) {
        if (e.line >= this.lines.length) {
            return;
        }
        if (Ya.Selection.hasSelection()) {
            return this.deleteRange(Ya.Selection.getRange());
        }
        let n;
        if (Ya.Cursor.isAtLineTail()) {
            n = Ya.Cursor.getNextLineHead();
        } else {
            n = {
                line: e.line,
                char: this.lines.at(e.line).text.length
            };
        }
        let s = {
            start: e,
            end: n
        };
        let o = this.lines.at(e.line).text.substring(e.char);
        if (r) {
            Ea.append(o.length > 0 ? o : `
`);
        } else {
            Ea.set(o);
        }
        return this.deleteRange(s);
    }
    deleteLeftWord() {
        if (Ya.Selection.hasSelection()) {
            return this.deleteRange(Ya.Selection.getRange());
        }
        let e = Ya.Cursor.getPosition();
        if (e.line >= this.lines.length) {
            return;
        }
        let r = {
            start: Ya.Cursor.getWordHead(),
            end: e
        };
        return this.deleteRange(r);
    }
    deleteRightWord() {
        if (Ya.Selection.hasSelection()) {
            return this.deleteRange(Ya.Selection.getRange());
        }
        let e = Ya.Cursor.getPosition();
        if (e.line >= this.lines.length) {
            return;
        }
        let r = {
            start: e,
            end: Ya.Cursor.getWordTail()
        };
        return this.deleteRange(r);
    }
}, a_2($n, "Line"), $n);
let zn;
const LineDOM = new (zn = class extends z {
    constructor(){
        super();
        this.update = this.update.bind(this);
    }
    update() {
        this.emitChange();
    }
}, a_2(zn, "LineDOM"), zn);
const S0 = e_2(a_1(), 1);
const x0 = e_2(Fa(), 1);
const NF = r("src/client/js/stores/line-permalink.js");
let Hn;
const LinePermalink = new (Hn = class extends z {
    constructor(){
        super();
        this.id = null;
        this.source = null;
        this.addChangeListener(({ store })=>{
            if (![
                "linkFrom",
                "searchQuery",
                "inPageSearch"
            ].includes(store.source)) {
                this.updateURL();
            }
        });
    }
    initialize() {
        Ya.Page.addChangeListener(()=>{
            setTimeout(()=>this.scroll(), 1000);
            setTimeout(()=>this.scroll(), 2000);
        });
        Ya.Layout.addChangeListener(({ store })=>{
            if (store.get() !== "page") {
                this.clear();
            }
        });
    }
    clear() {
        if (this.id !== null) {
            this.id = null;
            this.emitChange();
        }
    }
    set(e, { source }) {
        if (ct(e)) {
            NF(`set ${e}`);
            this.id = e;
            this.source = source;
            this.scroll();
            this.emitChange();
        }
    }
    get() {
        return this.id;
    }
    scroll() {
        if (!this.id) {
            return;
        }
        let e = S0.default(`.lines #L${this.id}`);
        if (e.length < 1) {
            return;
        }
        let top = e.offset().top;
        if (!(window.scrollY + 100 < top && top < window.scrollY + window.innerHeight - 10)) {
            window.scrollTo(0, top - 100);
        }
    }
    updateURL() {
        if (Ya.Layout.get() !== "page" || (location.hash.replace(/^#/, "") || null) === this.id) {
            return;
        }
        let name = Ya.CurrentProject.get().name;
        let title = Ya.Page.title;
        if (!name || !title) {
            return;
        }
        let s = `/${name}/${vn(title)}`;
        if (this.id) {
            s += `#${this.id}`;
        }
        x0.default.replace(s, null, null, false);
    }
}, a_2(Hn, "LinePermalink"), Hn);
const fh = e_2(lh(), 1);
let ti;
const MobileSelection = new (ti = class extends z {
    constructor(){
        super();
        this.HEAD = -1;
        this.TAIL = 1;
        this.startCursorPosition = null;
    }
    resetUserIconNums() {
        this.userIconNums = 0;
    }
    resetUserIconConfirm() {
        this.userIconConfirm = false;
    }
    confirmUserIcon() {
        this.userIconConfirm = true;
    }
    incrementUserIconNums() {
        this.userIconNums += 1;
        return this.userIconNums;
    }
    initialize() {
        this.movingSide = 0;
        this.rangeBefore = null;
        this.resetUserIconNums();
        this.resetUserIconConfirm();
    }
    setStartPosition(e) {
        this.startCursorPosition = e_1(e);
    }
    wordRange(e) {
        let r = e_1(e);
        let n = e_1(e);
        if (Ya.Cursor.isAtLineHead() && Ya.Cursor.isAtLineTail()) {
            if (r.line > 0) {
                r.line = r.line - 1;
                r.char = 0;
                n.char = 0;
            }
            return {
                start: r,
                end: n
            };
        }
        if (Ya.Cursor.isAtLineHead()) {
            r.char = 0;
            n = Ya.Cursor.getWordTail();
            return {
                start: r,
                end: n
            };
        }
        if (Ya.Cursor.isAtLineTail()) {
            r = Ya.Cursor.getWordHead();
            return {
                start: r,
                end: n
            };
        }
        r = Ya.Cursor.getWordHead();
        n = Ya.Cursor.getWordTail();
        return {
            start: r,
            end: n
        };
    }
    createSelection() {
        let e = Ya.Cursor.getPosition();
        requestAnimationFrame(()=>{
            this.initialize();
            let r = this.wordRange(e);
            Ya.Cursor.setPosition(e);
            Ya.Cursor.setPosition(r.end, {
                source: "mouse"
            });
            Ya.Selection.setRange(r);
            this.emitChange();
        });
        this.emitChange();
    }
    detectMovingSide({ range }) {
        let startCursorPosition = this.startCursorPosition;
        let n = 0;
        let s = 0;
        if (startCursorPosition.line === range.start.line && range.start.line === range.end.line) {
            n = Math.abs(startCursorPosition.char - range.start.char);
            s = Math.abs(startCursorPosition.char - range.end.char);
            if (n < s) {
                return this.HEAD;
            }
            return this.TAIL;
        }
        if (startCursorPosition.line <= range.start.line) {
            return this.HEAD;
        }
        if (startCursorPosition.line >= range.end.line) {
            return this.TAIL;
        }
        n = Math.abs(startCursorPosition.line - range.start.line);
        s = Math.abs(startCursorPosition.line - range.end.line);
        if (n < s) {
            return this.HEAD;
        }
        return this.TAIL;
    }
    moveSelection(e) {
        let r = {};
        let range = Ya.Selection.getRange();
        if (!this.movingSide) {
            this.movingSide = this.detectMovingSide({
                range
            });
        }
        if (this.movingSide === this.HEAD) {
            r.start = e;
            r.end = range.end;
        } else {
            r.start = range.start;
            r.end = e;
        }
        if (!fh.default(r.start, r.end)) {
            Ya.Selection.setRange(r);
            this.emitChange();
        }
    }
    pauseSelection() {
        this.movingSide = 0;
        let e = Ya.Selection.getRange({
            normalizeOrder: true
        });
        Ya.Selection.setRange(e);
        this.emitChange();
    }
    clearSelectionIfNotMoved() {
        let e = Ya.Selection.getRange();
        if (!this.rangeBefore) {
            this.rangeBefore = e_1(e);
        }
        if (Ya.Selection.hasSelection(e) && !this.movingSide && fh.default(this.rangeBefore, e)) {
            Ya.Selection.clear();
        } else {
            this.rangeBefore = e_1(e);
        }
    }
    getMovingSide() {
        return this.movingSide;
    }
}, a_2(ti, "MobileSelection"), ti);
let ri;
const Notification = new (ri = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this._notifications = [];
    }
    clear() {
        this._notifications = [];
        this.emitChange();
    }
    async load(e) {
        let { data } = await x.get(`/api/projects/${e}/notifications`, {
            signal: this.abortController.signal
        });
        this._notifications = data;
        this.emitChange();
        return this._notifications;
    }
    async create(e, r) {
        let { data } = await x.post(`/api/projects/${e}/notifications`, r);
        this._notifications.push(data);
        this.emitChange();
    }
    async delete(e, r) {
        await x.delete(`/api/projects/${e}/notifications/${r}`);
        this._notifications = this._notifications.filter((n)=>n.id !== r);
        this.emitChange();
    }
    get() {
        return this._notifications;
    }
}, a_2(ri, "Notification"), ri);
const hh = e_2(Fa(), 1);
const Nx = e_2(On(), 1);
function ni({ projectName, title, endpoint = "", commonQuery = {}, additionalQuery = {} }) {
    if (!projectName) {
        projectName = (Ya.CurrentProject.get() || {}).name;
    }
    if (!projectName) {
        return;
    }
    if (!title) {
        title = Ya.Page.title;
    }
    let o = `/api/pages/v2/${projectName}/${vn(title)}`;
    let f = endpoint ? `${o}/${endpoint}` : o;
    let c = {
        ...additionalQuery
    };
    if (commonQuery.followRename) {
        c.followRename = true;
    }
    if (commonQuery.titleHint) {
        c.titleHint = commonQuery.titleHint;
    }
    if (commonQuery.search) {
        c.search = commonQuery.search;
    }
    if (commonQuery.includeProjects) {
        c.projects = Object.entries(Ya.ProjectsLastAccessed.get()).sort(([, u], [, d])=>{
            if (u > d) {
                return -1;
            }
            return 1;
        }).map(([u])=>u).slice(0, 100);
    }
    return `${f}?${Nx.default.stringify(c)}`;
}
a_2(ni, "buildPagesApiUrl");
const et = r("src/client/js/stores/page.ts");
let ii;
const Page = new (ii = class extends z {
    abortController = new ke;
    id = null;
    title = "";
    persistent = false;
    deleted = false;
    lines = new Et;
    links = [];
    projectLinks = [];
    icons = [];
    image = null;
    descriptions = [];
    files = [];
    infoboxDefinition = null;
    commitId = null;
    data = null;
    lastAccessed = null;
    cachedAt = null;
    snapshotCreated = null;
    snapshotCount = null;
    prevSnapshotCreated = null;
    nextSnapshotLineIds = null;
    loaded = null;
    helpfeels = [];
    linesCount = null;
    charsCount = null;
    transitionContext = null;
    pageRank = 0;
    pin;
    disableUpdatePageAccessOnce;
    initialize() {
        this.reset();
        Ya.Layout.addChangeListener(({ store })=>{
            if (store.get() !== "page") {
                this.reset();
            }
        });
    }
    get() {
        return this.data;
    }
    async fetch({ projectName, title, titleHint, followRename, search }) {
        let f = ni({
            projectName,
            title,
            commonQuery: {
                followRename,
                titleHint,
                search
            }
        });
        let c = await x.get(f, {
            signal: this.abortController.signal
        });
        let { data } = c;
        data.cachedAt = c.headers["x-serviceworker-cached"];
        return data;
    }
    async set(e, { pageTransitionContext } = {}) {
        et("set", "fromRemote", e.title, e.id);
        Ya.Sync.flushChange();
        Ya.PageHistory.init();
        this.id = e.id;
        this.title = e.title;
        this.persistent = e.persistent;
        this.deleted = e.deleted;
        this.lines = new Et(e_1(e.lines));
        this.links = e.links;
        this.projectLinks = e.projectLinks;
        this.icons = e.icons;
        this.image = e.image;
        this.descriptions = e.descriptions;
        this.files = e.files;
        this.infoboxDefinition = e.infoboxDefinition;
        this.commitId = e.commitId;
        this.data = e;
        this.lastAccessed = e.lastAccessed;
        this.cachedAt = e.cachedAt;
        this.snapshotCreated = e.snapshotCreated;
        this.snapshotCount = e.snapshotCount;
        this.pageRank = e.pageRank;
        this.loaded = Math.floor(Date.now() / 1000);
        this.helpfeels = e.helpfeels;
        this.linesCount = e.linesCount;
        this.charsCount = e.charsCount;
        Ya.Line.setLines(e.lines, {
            by: "navigation"
        });
        Ya.RelatedPage.resetForPageTransition();
        let { infoboxDefinition, infoboxResult, infoboxDisableLinks } = e;
        Ya.Infobox.set({
            infoboxDefinition,
            infoboxResult,
            infoboxDisableLinks
        });
        Ya.Infobox.setUpdating(false);
        this.transitionContext = pageTransitionContext;
        this.emitChange("load");
    }
    reset() {
        if (this.id) {
            Ya.Sync.flushChange();
        }
        this.id = null;
        this.title = "";
        this.persistent = false;
        this.deleted = false;
        this.lines = new Et;
        this.links = [];
        this.projectLinks = [];
        this.icons = [];
        this.image = null;
        this.descriptions = [];
        this.commitId = null;
        this.data = null;
        this.lastAccessed = null;
        this.cachedAt = null;
        this.snapshotCreated = null;
        this.snapshotCount = null;
        this.prevSnapshotCreated = null;
        this.nextSnapshotLineIds = null;
        this.loaded = null;
        this.helpfeels = [];
        this.linesCount = null;
        this.charsCount = null;
        this.transitionContext = null;
        Ya.Line.resetLines();
        this.emitChange();
    }
    applySnapshot({ page, prevPage, nextPage }) {
        this.title = page.title;
        this.lines = new Et(e_1(page.lines));
        this.snapshotCreated = page.created;
        this.prevSnapshotCreated = prevPage?.created;
        this.nextSnapshotLineIds = nextPage ? nextPage.lines.map((s)=>s.id) : null;
        this.links = [];
        Ya.Line.setLines(page.lines, {
            by: "navigation"
        });
        this.emitChange();
    }
    setTitle(e, { from } = {}) {
        this.title = e;
        this.persistent = true;
        if (from === "self") {
            this.emitChange("setTitle:self");
        } else {
            this.emitChange("setTitle");
        }
    }
    get fromCacheStorage() {
        if (this.cachedAt) {
            return !navigator.onLine || new Date().getTime() - parseInt(this.cachedAt) > 30 * 1000;
        }
        return false;
    }
    setPin(e) {
        this.data.pin = e;
        this.emitChange();
    }
    delete() {
        et("push delete change");
        Ya.Sync.addChange({
            deleted: true
        });
        Ya.Sync.finishChange();
        if (Ya.DisableRealtimeCollaboration.enabled) {
            Ya.DisableRealtimeCollaboration.save();
        }
    }
    patch(e) {
        if (Ya.PageHistory.isEnable) {
            return;
        }
        let commitId = this.commitId;
        for (let n of e){
            if (n.pageId !== this.id) {
                et("pageId mismatch");
                return;
            }
            if (n.parentId !== commitId) {
                et("local HEAD and commit parent are mismatch");
                throw new Mt;
            }
            commitId = n.id;
        }
        for (let n of e){
            Ya.Line.mergeCommit(n);
            this.patchChanges(n.changes);
        }
    }
    async patchChanges(e, { from } = {}) {
        let name = Ya.CurrentProject.get().name;
        let s = {};
        for (let o of e){
            if (!o.lines) {
                Object.assign(s, o);
            }
        }
        if (s.deleted) {
            et("page has been deleted", this.title);
            hh.default(`/${name}/`);
            Ya.QuickSearch.delete(this.id);
            return;
        }
        if (s.title) {
            Ya.QuickSearch.update(this.id, {
                title: s.title
            });
            if (s.title !== this.title) {
                et("title has been changed:", s.title);
                this.setTitle(s.title, {
                    from
                });
                if (name && s.title) {
                    hh.default.replace(`/${name}/${vn(s.title)}`, null, null, false);
                }
            }
        }
        if (typeof s.pin === "number" && s.pin !== this.pin) {
            et("pin has been changed:", s.pin);
            this.setPin(s.pin);
        }
        if (s.links) {
            Ya.QuickSearch.update(this.id, {
                links: s.links
            });
            this.links = s.links;
        }
        if (s.projectLinks) {
            this.projectLinks = s.projectLinks;
        }
        if (s.links || s.projectLinks) {
            et("refresh related pages");
            let o = await Ya.RelatedPage.fetchRelatedPages();
            Ya.RelatedPage.compile({
                links: this.links,
                relatedPages: o
            }).catch(console.error);
        }
        if (s.icons) {
            this.icons = s.icons;
            et("refresh icons");
        }
        if (s.files) {
            this.files = s.files;
            et("refresh files");
        }
        if (s.infoboxDefinition) {
            this.infoboxDefinition = s.infoboxDefinition;
            et("refresh infoboxDefinition");
        }
        if (s.hasOwnProperty("image")) {
            Ya.QuickSearch.update(this.id, {
                image: s.image
            });
            this.image = s.image;
            et("refresh image");
        }
        if (s.descriptions) {
            this.descriptions = s.descriptions;
            et("refresh descriptions");
        }
        if (s.helpfeels) {
            this.helpfeels = s.helpfeels;
            et("refresh helpfeels");
        }
        if (s.linesCount) {
            this.linesCount = s.linesCount;
            et("refresh linesCount");
        }
        if (s.charsCount) {
            this.charsCount = s.charsCount;
            et("refresh charsCount");
        }
        if (!this.persistent) {
            this.persistent = true;
            this.emitChange();
        }
    }
    get hasSelfBackLink() {
        return this.links.map(fe).includes(this.title);
    }
}, a_2(ii, "Page"), ii);
export const Ha = "updated";
export const Ia = "related";
export const Ja = "pageRank";
export const Ka = {
    updated: {
        ja: "更新日時",
        en: "Modified"
    },
    updatedByMe: {
        ja: "自分の更新日時",
        en: "Modified by me"
    },
    created: {
        ja: "作成日時",
        en: "Created"
    },
    accessed: {
        ja: "最終アクセス",
        en: "Last visited"
    },
    linked: {
        ja: "被リンク数",
        en: "Most linked"
    },
    views: {
        ja: "閲覧数",
        en: "Most viewed"
    },
    title: {
        ja: "タイトル",
        en: "Title"
    }
};
export const La = {
    related: {
        ja: "関連度",
        en: "Related"
    },
    updated: {
        ja: "更新日時",
        en: "Modified"
    },
    created: {
        ja: "作成日時",
        en: "Created"
    },
    accessed: {
        ja: "最終アクセス",
        en: "Last visited"
    },
    linked: {
        ja: "被リンク数",
        en: "Most linked"
    },
    pageRank: {
        ja: "ページランク",
        en: "Page rank"
    },
    title: {
        ja: "タイトル",
        en: "Title"
    }
};
export const Ma = {
    pageRank: {
        ja: "ページランク",
        en: "Page rank"
    },
    updated: {
        ja: "更新日時",
        en: "Modified"
    }
};
const zx = [
    {
        key: "prioritizeOutlineKeys",
        default: true
    },
    {
        key: "pageSorts",
        default: {}
    },
    {
        key: "relatedPageSort",
        default: Ia
    },
    {
        key: "searchPageSorts",
        default: {}
    },
    {
        key: "lastProject",
        default: null
    },
    {
        key: "lastPagePath",
        default: null
    },
    {
        key: "pageAccessLogs",
        default: []
    },
    {
        key: "projectsLastAccessed",
        default: {}
    },
    {
        key: "userScriptSHA1",
        default: {}
    },
    {
        key: "projectScriptSHA1",
        default: {}
    },
    {
        key: "appendPageBody",
        default: null
    },
    {
        key: "drawPenColors",
        default: []
    },
    {
        key: "pageListMode",
        default: "grid"
    },
    {
        key: "gyazoUploadSettingVisited",
        default: false
    },
    {
        key: "gyazoIncidentSecondNoticeVisited",
        default: false
    }
];
const ph = class ph {
    constructor(){
        this.settings = {};
    }
    register(e) {
        if (!e.key || typeof e.key !== "string") {
            throw new Error('"key" is required');
        }
        if (e.default === undefined) {
            throw new Error('"default" is required');
        }
        if (this.settings[e.key]) {
            throw new Error(`${e.key} is already registerd`);
        }
        this.settings[e.key] = e;
    }
    set(e, r) {
        if (!this.settings[e]) {
            throw new Error(`"${e}" is not registerd key`);
        }
        try {
            localStorage.setItem(e, JSON.stringify(r));
        } catch (error) {
            console.error(error.stack);
        }
    }
    get(e) {
        let r = this.settings[e];
        if (!r) {
            throw new Error(`"${e}" is not registerd key`);
        }
        try {
            let n = JSON.parse(localStorage.getItem(e));
            return n ?? r.default;
        } catch  {
            return r.default;
        }
    }
    remove(e) {
        if (!this.settings[e]) {
            throw new Error(`"${e}" is not registerd key`);
        }
        try {
            localStorage.removeItem(e);
        } catch (error) {
            console.error(error.stack);
        }
    }
};
a_2(ph, "LocalSettings");
const dh = ph;
export const Na = new dh;
for (let t of zx){
    Na.register(t);
}
const wc = r("src/client/js/stores/page-access.js");
let si;
const PageAccess = new (si = class {
    initialize() {
        this.startPageStayReporter();
    }
    saveLocalStorage() {
        if (!Ya.Page.persistent) {
            return;
        }
        let e = Ya.Page.get().id;
        let r = Ya.CurrentProject.get().id;
        let accessed = Math.floor(Date.now() / 1000);
        let s = Na.get("pageAccessLogs");
        s.unshift({
            project: r,
            page: e,
            accessed
        });
        let o = K_1(s, (f)=>f.page).slice(0, 100);
        Na.set("pageAccessLogs", o);
    }
    getLogs() {
        let e = Na.get("pageAccessLogs");
        let r = Ya.CurrentProject.get().id;
        return e.filter((n)=>!!n.project && n.project === r).map((n)=>Ya.QuickSearch.findById(n.page)).filter((n)=>n);
    }
    access({ internalReferrer, navigationUI }) {
        let n = Ya.CurrentProject.get();
        let s = Ya.Page.get();
        if (!n || !s) {
            return;
        }
        let o = `/api/pages/${n.name}/${s.id}/accessed`;
        let f = {};
        if (n.plan === "business") {
            Object.assign(f, {
                internalReferrer,
                navigationUI
            });
        }
        wc("page-access", JSON.stringify(f));
        return x({
            url: o,
            method: "POST",
            data: f
        });
    }
    leave() {
        if (!Ya.Page.persistent) {
            return;
        }
        let e = Ya.Page.id;
        if (e && Ya.CurrentUser.get()) {
            wc("page-leave", JSON.stringify({
                pageId: e,
                projectId: Ya.CurrentProject.get().id
            }));
            Ya.Socket.get()?.emit("page-leave", {
                pageId: e,
                projectId: Ya.CurrentProject.get().id
            });
            this.saveLocalStorage();
        }
    }
    startPageStayReporter() {
        if (!Ne()) {
            return;
        }
        let e;
        let r;
        let n = a_2((o)=>{
            e = o;
            if (e !== false) {
                if (r) {
                    clearTimeout(r);
                }
                r = setTimeout(()=>{
                    e = false;
                    wc("active", e);
                }, 30 * 1000);
            }
        }, "activate");
        window.addEventListener("blur", ()=>n(false));
        window.addEventListener("focus", ()=>n(true));
        window.addEventListener("scroll", ()=>n(true), {
            passive: true
        });
        document.addEventListener("mousemove", ()=>n(true), {
            passive: true
        });
        document.addEventListener("touchstart", ()=>n(true), {
            passive: true
        });
        document.addEventListener("keydown", ()=>n(true), {
            passive: true
        });
        setInterval(a_2(()=>{
            if (!e || Ya.Layout.get() !== "page" || !Ya.Page.persistent) {
                return;
            }
            let o = Ya.CurrentProject.get();
            if (o?.plan !== "business" || !Ya.CurrentUser.get()) {
                return;
            }
            let f = Ya.Page.id;
            let projectId = o.id;
            if (!f || !projectId) {
                return;
            }
            let position;
            try {
                position = gB();
            } catch (error) {
                console.log(error);
                return;
            }
            let d = {
                pageId: f,
                projectId,
                position
            };
            wc("page-stay", JSON.stringify(d));
            Ya.Socket.get()?.emit("page-stay", d);
        }, "report"), 60 * 1000);
    }
}, a_2(si, "PageAccess"), si);
function gB() {
    let t = (visualViewport?.height || window.innerHeight) / 2;
    let e = document.querySelector("#editor");
    let r = e.getBoundingClientRect();
    if (r.height < t && r.y > 0) {
        let n = Wx(Ya.Line.lines.all());
        return {
            at: "editor",
            height: `${r.height}px`,
            scroll: "0%",
            text: n
        };
    }
    if (r.y < t && t < r.bottom + 100) {
        let scroll = `${Math.floor((t - r.y) / (r.height + 100) * 100)}%`;
        let s = Al({
            y: t + window.scrollY - e.offsetTop
        });
        let o = Ya.Line.lines.all().slice(Math.max(s - 3, 0), s + 3);
        let f = Wx(o);
        return {
            at: "editor",
            height: `${r.height}px`,
            scroll,
            text: f
        };
    }
    if (t > r.bottom) {
        let n = document.querySelector(".related-page-list").getBoundingClientRect();
        if (n.y < t && t < n.bottom) {
            return {
                at: "related-page-list"
            };
        }
    }
}
a_2(gB, "getStayPosition");
function Wx(t) {
    let e = "";
    for (let r of t.map((n)=>n.text.trim())){
        if (r.length > e.length) {
            e = r;
        }
    }
    return e.slice(0, 100);
}
a_2(Wx, "getReplesentativeText");
const Vx = e_2(Fa(), 1);
const yB = r("src/client/js/stores/page-history.js");
let oi;
const PageHistory = new (oi = class extends z {
    constructor(){
        super();
        this.isEnable = false;
        this.readyState = Ze;
    }
    get timestamps() {
        return e_1(this._timestamps || []);
    }
    init() {
        this.projectName = null;
        this.pageTitle = null;
        this.pageId = null;
        this.isEnable = false;
        this._snapshots = new Map;
        this._timestamps = [];
        this.specifiedIndex = null;
        this.emitChange();
    }
    hasRemoteData() {
        return this.readyState === Xe;
    }
    appendFreshData() {
        let e = !this.hasRemoteData() && Ya.Page.cachedAt ? parseInt(Ya.Page.cachedAt) : new Date().getTime();
        this._timestamps.push({
            id: "latest",
            created: Math.floor(e / 1000) - 1,
            isFresh: true
        });
        let r = Ya.Page.get();
        this._snapshots.set("latest", {
            title: Ya.Page.title,
            created: Math.floor(e / 1000) - 1,
            lines: e_1(r.lines)
        });
    }
    async enable({ snapshotId } = {}) {
        this.projectName = Ya.CurrentProject.name;
        this.pageTitle = (Ya.Page.get() || {}).title;
        if (!this.projectName || !this.pageTitle || Ya.Sync.hasUnpushedOrPushingCommit) {
            return;
        }
        await this.loadTimestamps();
        this.appendFreshData();
        if (snapshotId) {
            let n = this._timestamps.findIndex((s)=>s.id === snapshotId);
            if (n !== -1) {
                this.specifiedIndex = n;
            }
        } else {
            this.specifiedIndex = undefined;
        }
        let r = this.specifiedIndex >= 0 ? this.specifiedIndex : this._timestamps.length - 1;
        await this.showSnapshot(r);
        this.isEnable = true;
        this.emitChange("enable");
    }
    timestampsApiPath({ projectName, pageId, followingId }) {
        let s = followingId ? `?followingId=${followingId}` : "";
        return `/api/page-snapshots/${projectName}/${pageId}${s}`;
    }
    async fetchTimestamps({ followingId }) {
        let r = Ya.CurrentProject.get();
        let n = Ya.Page.get();
        if (!r || !n) {
            return null;
        }
        try {
            return await x.get(this.timestampsApiPath({
                projectName: r.name,
                pageId: n.id,
                followingId
            }));
        } catch (error) {
            console.error(error);
            alert(error.message || "Failed to fetch.");
        }
        return null;
    }
    async loadTimestamps(e) {
        let r = await this.fetchTimestamps({
            followingId: e
        });
        if (!r) {
            return;
        }
        this.setTimestamps(r);
        let n = r.headers["x-following-id"];
        if (n) {
            await this.loadTimestamps(n);
        }
    }
    setTimestamps({ data, source }) {
        yB("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        this.readyState = source;
        this.pageId = data.pageId;
        let n = K_1(data.timestamps.reverse(), "created") || [];
        this._timestamps.unshift(...n);
    }
    snapshotApiPath({ projectName, pageId, historyId }) {
        return `/api/page-snapshots/${projectName}/${pageId}/${historyId}`;
    }
    fetchSnapshot({ projectName, pageId, historyId }) {
        return x.get(this.snapshotApiPath({
            projectName,
            pageId,
            historyId
        }));
    }
    async getSnapshot(historyId) {
        let r = this._snapshots.get(historyId);
        if (r) {
            return r;
        }
        try {
            let n = Ya.CurrentProject.get();
            let s = Ya.Page.get();
            if (!n || !s) {
                return null;
            }
            let { data } = await this.fetchSnapshot({
                projectName: n.name,
                pageId: s.id,
                historyId
            });
            if (data.snapshot) {
                this._snapshots.set(historyId, data.snapshot);
            }
            return data.snapshot;
        } catch (error) {
            console.error(error);
            alert(error.message || "Failed to fetch.");
        }
    }
    async showSnapshot(e) {
        let r = this._timestamps[e].id;
        let n = this._timestamps[e - 1]?.id;
        let s = this._timestamps[e + 1]?.id;
        let [o, prevPage, nextPage] = await Promise.all([
            this.getSnapshot(r),
            n && this.getSnapshot(n),
            s && this.getSnapshot(s)
        ]);
        Ya.Page.applySnapshot({
            page: o,
            prevPage,
            nextPage
        });
        let u = `/${this.projectName}/history/${this.pageId}/${r}`;
        Vx.default.replace(u, null, null, false);
    }
}, a_2(oi, "PageHistory"), oi);
const Jx = e_2(On(), 1);
const Kx = r("src/client/js/stores/page-list.js");
let ai;
const PageList = new (ai = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this.pages = [];
        this.count = 0;
        this.skip = 0;
        this.limit = typeof window !== "object" ? 100 : window.innerHeight * window.innerWidth < 500 * 1000 ? 30 : 100;
        this.searchQuery = "";
        this.existsExactTitleMatchForSearchWord = false;
        this.loading = false;
        this.searchBackend = undefined;
        this.searchField = undefined;
        this.readyState = Ze;
        this.pageSorts = Object.create(null);
        this.searchTargetField = "lines";
        this.pageListMode = Na.get("pageListMode") || "grid";
    }
    get() {
        return this.pages;
    }
    apiPath({ projectName, searchQuery, skip }) {
        let s = Jx.default.stringify({
            skip,
            sort: searchQuery ? this.getSearchPageSort(projectName) : this.getPageSort(projectName),
            filterType: this.pageFilter?.type,
            filterValue: this.pageFilter?.value,
            limit: this.limit,
            q: searchQuery,
            field: this.searchTargetField
        });
        if (searchQuery) {
            return `/api/pages/${projectName}/search/query?${s}`;
        }
        return `/api/pages/${projectName}?${s}`;
    }
    hasRemoteData({ projectName, searchQuery }) {
        return this.readyState === Xe && this.projectName === projectName && this.searchQuery === searchQuery;
    }
    getCache({ projectName, searchQuery, skip } = {
        skip: 0
    }) {
        let s = this.apiPath({
            projectName,
            searchQuery,
            skip
        });
        return St(s);
    }
    async fetch({ projectName, searchQuery, skip } = {
        skip: 0
    }) {
        let s = this.apiPath({
            projectName,
            searchQuery,
            skip
        });
        this.loading = true;
        let o = await x.get(s, {
            signal: this.abortController.signal
        });
        this.loading = false;
        return o;
    }
    set({ data, source }) {
        Kx("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        if (data.skip === 0 || data.searchQuery) {
            this.pages = data.pages;
        } else {
            this.pages.splice(data.skip, data.limit, ...data.pages);
        }
        this.skip = data.skip;
        this.count = data.count;
        this.searchQuery = data.searchQuery;
        this.existsExactTitleMatchForSearchWord = data.existsExactTitleMatch;
        this.projectName = data.projectName;
        this.searchBackend = data.backend;
        this.searchField = data.field;
        this.readyState = source;
        this.emitChange();
    }
    async load({ skip } = {
        skip: 0
    }) {
        if (skip === 0) {
            this.abortController.abort();
        }
        let { projectName, searchQuery } = this;
        try {
            let s = await this.fetch({
                projectName,
                searchQuery,
                skip
            });
            this.set(s);
        } catch (error) {
            if (Ye.isCancel(error)) {
                return Kx("canceled");
            }
            throw error;
        }
    }
    hasNextPage() {
        return this.pages && this.count > this.pages.length;
    }
    loadNextPage() {
        this.loading || this.hasNextPage() && this.load({
            skip: this.skip + this.limit
        });
    }
    get isSearch() {
        return !!this.searchQuery;
    }
    getPageSort(e) {
        return this.pageSorts[e.toLowerCase()] || Na.get("pageSorts")[e.toLowerCase()] || Ha;
    }
    getSearchPageSort(e) {
        return Na.get("searchPageSorts")[e.toLowerCase()] || Ja;
    }
    setPageSort({ projectName, sort }) {
        if (![
            "updatedByMe"
        ].includes(sort)) {
            let n = Na.get("pageSorts");
            n[projectName.toLowerCase()] = sort;
            Na.set("pageSorts", n);
        }
        this.pageSorts[projectName.toLowerCase()] = sort;
        this.emitChange();
        this.load();
    }
    setSearchPageSort({ projectName, sort }) {
        let n = Na.get("searchPageSorts");
        n[projectName.toLowerCase()] = sort;
        Na.set("searchPageSorts", n);
        this.emitChange();
        this.load();
    }
    setSearchTargetField(e) {
        this.searchTargetField = e;
        this.emitChange();
        this.load();
    }
    setPageFilter(e) {
        this.pageFilter = e;
        this.emitChange();
        this.load();
    }
    getPageFilter() {
        return this.pageFilter;
    }
    getPageListMode() {
        return this.pageListMode;
    }
    setPageListMode(e) {
        Na.set("pageListMode", e);
        this.pageListMode = e;
        this.emitChange();
    }
    patchQuickSearchSocket(e) {
        for (let r of e.changes){
            let n = Object.create(null);
            if (typeof r.title === "string") {
                n.title = r.title;
            }
            if (Array.isArray(r.descriptions)) {
                n.descriptions = r.descriptions;
            }
            if (typeof r.image === "string" || r.image === null) {
                n.image = r.image;
            }
            if (Object.keys(n).length > 0) {
                let s = this.pages.find((o)=>o.id === e.pageId);
                if (s) {
                    Object.assign(s, n);
                    this.emitChange();
                }
            }
        }
    }
}, a_2(ai, "PageList"), ai);
let ci;
const PageMenu = new (ci = class extends z {
    constructor(){
        super();
        c_1(this, [
            "addItem",
            "reset"
        ]);
        this.reset();
    }
    initialize() {
        let e;
        Ya.CurrentProject.addChangeListener(()=>{
            if (e !== Ya.CurrentProject.name) {
                this.reset();
                e = Ya.CurrentProject.name;
            }
        });
    }
    reset() {
        this.menuName = "default";
        this.menus = new Map(Object.entries({
            default: {
                image: null,
                items: []
            }
        }));
    }
    pageMenu(e = "default") {
        this.menuName = e;
        return this;
    }
    removeAllItems() {
        if (this.menus.has(this.menuName)) {
            this.menus.get(this.menuName).items = [];
        }
    }
    addSeparator() {
        this._addToMenu({
            separator: true
        });
        this.emitChange();
    }
    addItem({ title, image, icon, onClick } = {}) {
        if (!title) {
            throw new Error("title is empty");
        }
        if (typeof onClick !== "function") {
            throw new Error("onClick is not a function");
        }
        this._addToMenu({
            title,
            image,
            icon,
            onClick,
            separator: false
        });
        this.emitChange();
    }
    _addToMenu(e) {
        if (e) {
            if (!this.menus.has(this.menuName)) {
                return console.error(`PageMenu("${this.menuName}") is not exists.`);
            }
            this.menus.get(this.menuName).items.push(e);
        }
    }
    addMenu({ title = "default", image, icon, onClick }) {
        if (!title) {
            throw new Error("title is empty");
        }
        if (typeof title !== "string") {
            throw new Error("title is not a string");
        }
        if (!image && !icon) {
            throw new Error("image and icon are both empty");
        }
        if (!this.menus.has(title)) {
            this.menus.set(title, {
                image,
                icon,
                items: [],
                onClick
            });
        }
        this.emitChange();
    }
}, a_2(ci, "PageMenu"), ci);
const bB = r("src/client/js/stores/page-transition-context.js");
let ui;
const PageTransitionContext = new (ui = class {
    constructor(){
        if (!Ne() || !window.localStorage) {
            this.data = new Map;
        }
    }
    set(e, r = {}) {
        r.internalReferrer = decodeURI(location.pathname + location.search);
        bB("set", e, r);
        if (window.localStorage) {
            let n = `page_${fe(e)}`;
            let s;
            try {
                s = JSON.parse(localStorage.pageTransitionContext || "{}");
            } catch  {
                s = Object.create(null);
            }
            s[n] = r;
            localStorage.pageTransitionContext = JSON.stringify(s);
        } else {
            let n = fe(e);
            this.data.set(n, r);
        }
    }
    pop(e) {
        if (window.localStorage) {
            let r = `page_${fe(e)}`;
            let n;
            try {
                n = JSON.parse(localStorage.pageTransitionContext || "{}");
            } catch  {
                n = Object.create(null);
            }
            let s = n[r] || Object.create(null);
            delete n[r];
            localStorage.pageTransitionContext = JSON.stringify(n);
            return s;
        } else {
            let r = fe(e);
            let n = this.data.get(r) || Object.create(null);
            this.data.delete(r);
            return n;
        }
    }
}, a_2(ui, "PageTransitionContext"), ui);
let li;
const PopupMenu = new (li = class {
    constructor(){
        c_1(this, [
            "addButton",
            "reset"
        ]);
        this.reset();
    }
    initialize() {
        let e;
        Ya.CurrentProject.addChangeListener(()=>{
            if (e !== Ya.CurrentProject.name) {
                this.reset();
                e = Ya.CurrentProject.name;
            }
        });
    }
    reset() {
        this.buttons = [];
    }
    addButton({ title, onClick } = {}) {
        if (!title) {
            throw new Error("title is empty");
        }
        if (typeof onClick !== "function") {
            throw new Error("onClick is not a function");
        }
        this.buttons.push({
            title,
            onClick
        });
    }
}, a_2(li, "PopupMenu"), li);
const t_ = e_2(vs(), 1);
let fi;
const PresentationMode = new (fi = class extends z {
    constructor(){
        super();
        this.sections = {};
        this.prevHomeSections = [];
        this.cursorVisible;
        c_1(this, "onKeyDown");
    }
    initialize() {
        if (t_.When.touch_device) {
            return;
        }
        Ya.DisplayStyle.addChangeListener(()=>{
            if (this.isEnable) {
                this.goSection(this.currentSection);
                window.addEventListener("keydown", this.onKeyDown, false);
            } else {
                window.removeEventListener("keydown", this.onKeyDown, false);
            }
        });
        let e = a_2(()=>{
            if (!this.isEnable) {
                return;
            }
            this.cursorVisible = Ya.Cursor.visible;
            let r = Ya.Cursor.getPosition()?.line;
            if (this.cursorVisible && r >= 0) {
                let s = As(e_1(Ya.Line.getAll()))[r];
                if (s?.section?.number >= 0) {
                    this.currentSection = s.section.number;
                }
            }
        }, "onStoreChange");
        Ya.Cursor.addChangeListener(e);
        Ya.Line.addChangeListener(e);
    }
    get isEnable() {
        return Ya.DisplayStyle.is("presentation");
    }
    get currentSection() {
        return this.sections[Ya.Page.id] || 0;
    }
    set currentSection(e) {
        this.sections[Ya.Page.id] = e;
        this.emitChange();
    }
    get lastSection() {
        let e = As(e_1(Ya.Line.getAll()));
        return i(e).section.number;
    }
    goNextSection() {
        if (this.currentSection < this.lastSection) {
            this.goSection(this.currentSection + 1);
        }
    }
    goPrevSection() {
        if (this.currentSection > 0) {
            this.goSection(this.currentSection - 1);
        }
    }
    goHomeSection() {
        if (this.currentSection > 0) {
            this.prevHomeSections.push(this.currentSection);
            this.goSection(0);
        }
    }
    goEndSection() {
        let e = this.prevHomeSections.pop();
        if (typeof e === "number" && e <= this.lastSection) {
            this.goSection(e);
        }
    }
    goSection(e) {
        this.currentSection = e;
        Ya.Cursor.hide();
        requestAnimationFrame(()=>window.scrollTo(0, 0));
    }
    onKeyDown(e) {
        if (!this.cursorVisible) {
            switch(e.keyCode){
                case Zt.LEFT:
                    {
                        e.preventDefault();
                        this.goPrevSection();
                        break;
                    }
                case Zt.RIGHT:
                    {
                        e.preventDefault();
                        this.goNextSection();
                        break;
                    }
                case Zt.HOME:
                    {
                        e.preventDefault();
                        this.goHomeSection();
                        break;
                    }
                case Zt.END:
                    {
                        e.preventDefault();
                        this.goEndSection();
                        break;
                    }
            }
        }
        if (e.keyCode === Zt.ESCAPE) {
            Ya.DisplayStyle.disable("presentation");
        }
    }
}, a_2(fi, "PresentationMode"), fi);
const n_ = r("src/client/js/stores/project-backup.js");
let hi;
const ProjectBackup = new (hi = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this.data = null;
        this.readyState = Ze;
    }
    async load() {
        n_("load");
        let r = `/api/project-backup/${Ya.CurrentProject.get().name}/list`;
        let n = await x.get(r, {
            signal: this.abortController.signal
        });
        n_("projectBackupList successfully loaded", n.data.backups.length);
        this.data = n.data;
        this.readyState = Xe;
        this.emitChange();
    }
}, a_2(hi, "ProjectBackup"), hi);
const s_ = e_2(On(), 1);
const wB = r("src/client/js/stores/project-list.js");
let di;
const ProjectList = new (di = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this._projects = [];
        this.readyState = Ze;
        c_1(this, [
            "saveLastProject",
            "reloadProjectInfo",
            "onSyncSuccess"
        ]);
    }
    initialize() {
        let e = false;
        Ya.CurrentUser.addChangeListener(()=>{
            if (!(e || Ya.CurrentUser.isGuest)) {
                this.load({
                    preventCancel: true
                });
                e = true;
            }
        });
        Ya.CurrentProject.addChangeListener(this.saveLastProject);
        Ya.CurrentProject.addChangeListener(this.reloadProjectInfo);
        Ya.Sync.on("syncSuccess", this.onSyncSuccess);
    }
    onSyncSuccess() {
        let e = Ya.CurrentProject.get();
        if (!e) {
            return;
        }
        let r = this._projects.find((n)=>n.id === e.id);
        if (r) {
            r.updated = Math.floor(Date.now() / 1000);
            this.emitChange();
        }
    }
    reloadProjectInfo() {
        let e = Ya.CurrentProject.get();
        let r = this.findById(e.id);
        if (r) {
            r.name = e.name;
            r.displayName = e.displayName;
            r.publicVisible = e.publicVisible;
            r.theme = e.theme;
            r.plan = e.plan;
            r.trialing = e.trialing;
            r.billingId = e.billingId;
            this.emitChange();
        }
    }
    apiPath() {
        let ids = k_1(Na.get("projectsLastAccessed")).filter(([n])=>/^[a-f\d]{24}$/.test(n)).sort((n, s)=>{
            if (n[1] > s[1]) {
                return -1;
            }
            return 1;
        }).map((n)=>n[0]).slice(0, 100).sort((n, s)=>{
            if (n > s) {
                return -1;
            }
            return 1;
        });
        return `/api/projects?${s_.default.stringify({
            ids
        })}`;
    }
    getCache() {
        return St(this.apiPath());
    }
    fetch({ preventCancel } = {
        preventCancel: false
    }) {
        let r = !preventCancel && this.abortController.signal;
        return x.get(this.apiPath(), {
            signal: r
        });
    }
    set({ data, source }) {
        wB("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        this.sortByAccessDate(data.projects);
        this._projects = data.projects;
        this.readyState = source;
        this.emitChange();
    }
    async load({ preventCancel } = {
        preventCancel: false
    }) {
        let r = await this.getCache();
        if (r) {
            this.set({
                data: await r.json(),
                source
            });
        }
        let n = await this.fetch({
            preventCancel
        });
        this.set(n);
    }
    sortByAccessDate(e) {
        let r = Na.get("projectsLastAccessed");
        e.sort((n, s)=>{
            if (r[n.id] > r[s.id]) {
                return -1;
            }
            return 1;
        });
    }
    findById(e) {
        if (e) {
            return this._projects.find((r)=>r.id === e);
        }
        return null;
    }
    saveLastProject() {
        let e = Ya.CurrentProject.get();
        if (!(!e || !Ya.CurrentUser.isProjectMember)) {
            Na.set("lastProject", e.id);
        }
    }
    get lastProjectId() {
        return Na.get("lastProject");
    }
    get lastProject() {
        return this.findById(this.lastProjectId);
    }
    async create({ projectName, publicVisible, plan, uploadImageTo, gyazoTeamsName }) {
        let { data } = await x.post("/api/projects", {
            projectName,
            publicVisible,
            plan,
            uploadImageTo,
            gyazoTeamsName
        });
        this.add(data);
    }
    add(e) {
        this._projects.unshift(e);
        this.emitChange();
    }
    remove(e) {
        if (!e || !e.id) {
            throw new Error("invalid project");
        }
        this._projects = this._projects.filter((r)=>r.id !== e.id);
        this.emitChange();
    }
    getAll() {
        return this._projects;
    }
    get() {
        return this._projects.filter((e)=>e.isMember);
    }
    getMemberProjects() {
        return this._projects.filter((e)=>e.isMember);
    }
    getWatchProjects() {
        return this._projects.filter((e)=>!e.isMember);
    }
}, a_2(di, "ProjectList"), di);
const u_ = e_2(c_(), 1);
const l_ = e_2(mr(), 1);
let pi;
const ProjectListFilter = new (pi = class extends z {
    constructor(){
        super();
        this.value = "";
    }
    set(e) {
        this.value = e;
        this.emitChange();
    }
    getFilter() {
        let e = this.value.trim();
        if (!e) {
            return null;
        }
        let r = e.split(/\s+/g).map((s)=>l_.splitGraphemes(s).map(m).join("\\s*"));
        let n;
        if (r.length < 5) {
            n = new RegExp(`(${u_.default(r).map((s)=>s.join(".*")).join("|")})`, "i");
        } else {
            n = new RegExp(m(e).replace(/\s+/g, ".*"), "i");
        }
        return (s)=>n.test(s);
    }
    focusHead() {
        this.emitChange("focus:head");
    }
    focusInput() {
        this.emitChange("focus:input");
    }
}, a_2(pi, "ProjectListFilter"), pi);
async function vc(t) {
    let e = new Uint8Array(t.length);
    for(let n = 0; n < t.length; n++){
        e[n] = t.charCodeAt(n) & 255;
    }
    let r = await crypto.subtle.digest("SHA-1", e);
    return Array.from(new Uint8Array(r)).map((n)=>n.toString(16).padStart(2, "0")).join("");
}
a_2(vc, "sha1hex");
const h_ = r("src/client/js/stores/projectscript.ts");
let mi;
const ProjectScript = new (mi = class extends z {
    waitingForApproval = false;
    sha1hash = null;
    loaded = false;
    constructor(){
        super();
        c_1(this, "load");
    }
    initialize() {
        let e = a_2(()=>{
            [
                "list",
                "page",
                "stream"
            ].includes(Ya.Layout.get()) && (this.loaded || this.load());
        }, "checkLoad");
        Ya.CurrentProject.addChangeListener(e);
        Ya.Layout.addChangeListener(e);
    }
    async load() {
        if (!this.shouldLoadScript) {
            return;
        }
        let e = Ya.CurrentProject.get();
        let r;
        try {
            r = (await this.fetchAsText()).data;
        } catch (error) {
            return console.error(error);
        }
        this.sha1hash = await vc(r);
        if (this.sha1hash !== Na.get("projectScriptSHA1")[e.id]) {
            this.waitingForApproval = Na.get("projectScriptSHA1")[e.id] !== undefined ? "updated" : "initial";
            h_("waitingForApproval", this.waitingForApproval);
            this.emitChange();
            return;
        }
        this.renderProjectScriptTag();
    }
    get shouldLoadScript() {
        if (!Ya.CurrentUser.isProjectMember) {
            return false;
        }
        let e = Ya.CurrentProject.get();
        if (e) {
            return (e.publicVisible === false && e.plan === "business" || Ya.Settings.flags.PAID_SERVER) && e.projectScript === true && !!this.src;
        }
        return false;
    }
    get src() {
        let e = Ya.CurrentProject.get();
        if (e?.name) {
            return `/api/code/${e.name}/settings/script.js?${Date.now()}`;
        }
        return null;
    }
    async fetchAsText() {
        return x.get(this.src);
    }
    renderProjectScriptTag() {
        if (!this.shouldLoadScript || !this.src || document.querySelector("script#project-script")) {
            return;
        }
        h_("render script tag");
        let e = Ya.CurrentProject.get();
        let r = Na.get("projectScriptSHA1");
        r[e.id] = this.sha1hash;
        Na.set("projectScriptSHA1", r);
        let n = document.createElement("script");
        n.async = true;
        n.setAttribute("src", this.src);
        n.setAttribute("type", "module");
        n.setAttribute("crossorigin", "use-credentials");
        n.id = "project-script";
        let s = document.createElement("script");
        s.noModule = true;
        s.async = true;
        s.setAttribute("src", this.src);
        s.id = "project-script-nomodule";
        let o = document.getElementsByTagName("body")[0];
        o?.appendChild(n);
        o?.appendChild(s);
        this.waitingForApproval = false;
        this.loaded = true;
        this.emitChange();
    }
}, a_2(mi, "ProjectScript"), mi);
const p_ = r("src/client/js/stores/projects-last-accessed.js");
let gi;
const ProjectsLastAccessed = new (gi = class {
    constructor(){
        this.key = "projectsLastAccessed";
        c_1(this, "reset", "startTimer", "stopTimer", "saveProjectsLastAccessed");
    }
    initialize() {
        Ya.ProjectList.addChangeListener(this.reset);
        Ya.CurrentProject.addChangeListener(this.startTimer);
    }
    get() {
        return Na.get(this.key);
    }
    set(e) {
        Na.set(this.key, e);
    }
    remove(e) {
        let r = this.get();
        delete r[e];
        this.set(r);
        let n = Ya.CurrentProject.get();
        if (n && n.id === e) {
            this.stopTimer();
        }
    }
    reset() {
        Ya.ProjectList.removeChangeListener(this.reset);
        let e = this.get();
        for (let r of Ya.ProjectList.get()){
            if (!e[r.id]) {
                e[r.id] = Math.floor(Date.now() / 1000);
            }
        }
        this.set(e);
    }
    startTimer() {
        if (!this.timer) {
            this.timer = setInterval(this.saveProjectsLastAccessed, 1000);
            p_("start timer");
        }
    }
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            p_("stop timer");
        }
    }
    saveProjectsLastAccessed() {
        let e = Ya.CurrentProject.get();
        if (!e) {
            return;
        }
        let r = this.get();
        r[e.id] = Math.floor(Date.now() / 1000);
        this.set(r);
    }
}, a_2(gi, "ProjectsLastAccessed"), gi);
const b_ = e_2(y_(), 1);
const gh = e_2(da(), 1);
const yi = e_2(ea(), 1);
const mh = a_2(()=>new Promise((resolve)=>{
        if (document.hasFocus()) {
            return resolve();
        }
        let e = a_2(()=>{
            window.removeEventListener("focus", e);
            resolve();
        }, "onFocus");
        window.addEventListener("focus", e);
    }), "waitDocumentFocus");
const rt = r("src/client/js/stores/quick-search.js");
let bi;
const QuickSearch = new (bi = class extends z {
    constructor(){
        super();
        this.load = gh.default(this.load.bind(this), {
            trailing: true
        });
        this.compile = gh.default(this.compile.bind(this), {
            trailing: true
        });
        this.reset();
        this._abortController = new ke;
    }
    initialize() {
        Ya.CurrentProject.addChangeListener(()=>{
            let name = Ya.CurrentProject.get().name;
            if (this.currentProjectName !== name) {
                this._abortController.abort();
                this.reset();
                this.currentProjectName = name;
                this.emitChange();
                this.load();
            }
        });
        Ya.Socket.addChangeListener(async ({ event })=>{
            if (event === "reconnect") {
                if (!document.hasFocus()) {
                    await mh();
                    await yi.default(3000);
                }
                this.load();
            }
        });
        Ya.Page.addChangeListener(()=>this.compile());
    }
    reset() {
        this.currentProjectName = null;
        this.readyState = Ze;
        this.sourceIsCache = false;
        this.source = null;
        this.pages = [];
        this.existsMap = new Map;
        this.titleLcMap = new Map;
        this.idMap = new Map;
        this.asearchResultsCache = [];
        this.keywordResultsCache = [];
        this.lastSearchResult = null;
        this.progress = null;
    }
    apiPath({ projectName, followingId }) {
        let n = followingId ? `?followingId=${followingId}` : "";
        return `/api/pages/${projectName}/search/titles${n}`;
    }
    async getCache(e) {
        let r = [];
        let n = a_2(async (s)=>{
            let o = await St(this.apiPath({
                projectName: e,
                followingId: s
            }));
            if (!o) {
                return;
            }
            let f = await o.json();
            r.push(...f);
            rt("getCaches", r.length);
            let c = o.headers.get("x-following-id");
            if (c) {
                await n(c);
            }
        }, "fetchCaches");
        await n();
        return r;
    }
    async fetch(e) {
        let r = [];
        let n = a_2(async (s)=>{
            let { data, headers } = await x.get(this.apiPath({
                projectName: e,
                followingId: s
            }), {
                signal: this._abortController.signal,
                skipTrackLoading: true
            });
            r.push(...data);
            rt("fetchPages", r.length);
            let c = headers["x-following-id"];
            if (c) {
                await n(c);
            }
        }, "fetchPages");
        await n();
        return r;
    }
    async load(e = Ya.CurrentProject.name) {
        rt("load", e);
        try {
            this.progress = "Loading from cache...";
            requestAnimationFrame(()=>this.emitChange("progress"));
            let r = await this.getCache(e);
            if (r) {
                this.progress = "Building index...";
                requestAnimationFrame(()=>this.emitChange("progress"));
                await this.set(r);
                this.sourceIsCache = true;
            }
        } catch (error) {
            console.error(error.stack || error);
        }
        rt("fetch", e);
        try {
            this.progress = "Loading from server...";
            requestAnimationFrame(()=>this.emitChange("progress"));
            let r = await this.fetch(e);
            this.progress = "Building index...";
            requestAnimationFrame(()=>this.emitChange("progress"));
            await this.set(r);
            this.sourceIsCache = false;
        } catch (error) {
            if (Ye.isCancel(error)) {
                return rt("canceled");
            }
            console.error(error.stack || error);
        }
        this.progress = null;
        requestAnimationFrame(()=>this.emitChange("progress"));
    }
    async set(e) {
        rt("set", e);
        this.source = e;
        return await this.compile();
    }
    async compile() {
        if (!this.source) {
            return;
        }
        if (!document.hasFocus()) {
            await Promise.race([
                yi.default((30 + Math.random() * 60) * 1000),
                mh()
            ]);
        }
        function e(w) {
            return w.replace(/\d+/g, "_").replace(/[#\-_/.,\s()<>{}（）]+[a-z]?$/i, "_").length;
        }
        a_2(e, "getLengthForSort");
        function r(w) {
            if (w.includes("_")) {
                return w.replaceAll("_", "");
            }
            return w;
        }
        a_2(r, "toSearchTitleLc");
        let n = new Map;
        let s = [];
        let o = [];
        for (let w of this.source){
            if (s.length % 1000 === 0) {
                await yi.default(document.hasFocus() ? 0 : 100);
            }
            if (s.length % 100000 === 0) {
                this.progress = `Building index ${Math.floor(s.length / this.source.length * 60)}%`;
                requestAnimationFrame(()=>this.emitChange("progress"));
            }
            let { id, title, updated, image } = w;
            if (!title) {
                continue;
            }
            let T = fe(title.normalize("NFC"));
            n.set(T, true);
            let j = true;
            let J = e(title);
            let W = w.links?.map(fe) || [];
            s.push({
                id,
                title,
                titleLc: T,
                searchTitleLc: r(T),
                titleLengthForSort: J,
                updated,
                exists: j,
                image,
                linksLc: W
            });
            if (Array.isArray(w.links)) {
                for (let ae of w.links){
                    if (!ae) {
                        continue;
                    }
                    let te = fe(ae.normalize("NFC"));
                    let updated_1 = 0;
                    let ne = false;
                    let ee = e(ae);
                    o.push({
                        title: ae,
                        titleLc: te,
                        searchTitleLc: r(te),
                        titleLengthForSort: ee,
                        updated: updated_1,
                        exists: ne
                    });
                    if (id !== Ya.Page.id) {
                        n.set(te, true);
                    }
                }
            }
        }
        let f = [];
        let c = new Map;
        let u = 0;
        for (let w of [
            s,
            o
        ]){
            for (let _ of w){
                u += 1;
                if (u % 1000 === 0) {
                    await yi.default(document.hasFocus() ? 0 : 100);
                }
                if (u % 100000 === 0) {
                    this.progress = `Building index ${Math.floor(u / (s.length + o.length) * 20 + 60)}%`;
                    requestAnimationFrame(()=>this.emitChange("progress"));
                }
                if (!c.has(_.titleLc)) {
                    c.set(_.titleLc, true);
                    f.push(_);
                }
            }
        }
        let d = f.sort((w, _)=>{
            if (w.titleLengthForSort === _.titleLengthForSort) {
                if (w.updated > _.updated) {
                    return -1;
                }
                return 1;
            }
            return w.titleLengthForSort - _.titleLengthForSort;
        });
        rt(`compiled ${d.length} pages, ${n.size} existsMap`);
        this.pages = d;
        this.existsMap = n;
        this.asearchResultsCache = [];
        this.keywordResultsCache = [];
        this.lastSearchResult = null;
        let b = new Map;
        let y = new Map;
        rt("convert map start");
        u = 0;
        for (let w of d){
            if (w) {
                if (typeof w.titleLc === "string" && w.titleLc) {
                    b.set(w.titleLc, w);
                }
                if (typeof w.id === "string" && w.id) {
                    y.set(w.id, w);
                }
                u += 1;
                if (u % 1000 === 0) {
                    await yi.default(document.hasFocus() ? 0 : 100);
                }
                if (u % 100000 === 0) {
                    this.progress = `Building index ${Math.floor(u / d.length * 20 + 80)}%`;
                    requestAnimationFrame(()=>this.emitChange("progress"));
                }
            }
        }
        this.titleLcMap = b;
        this.idMap = y;
        rt(`convert map(${u}) done`);
        this.readyState = this.sourceIsCache ? _g : Xe;
        requestAnimationFrame(()=>this.emitChange());
        return d;
    }
    update(e, r) {
        rt("update", e, r);
        if (!this.source) {
            return;
        }
        let n = this.source.find((o)=>o.id === e);
        let updated = Math.floor(Date.now() / 1000);
        if (n) {
            Object.assign(n, r);
            n.updated = updated;
        } else {
            this.source.unshift({
                ...r,
                id: e,
                updated
            });
        }
        this.compile();
    }
    delete(e) {
        rt("delete", e);
        if (this.source) {
            this.source = this.source.filter((r)=>r.id !== e);
            this.compile();
        }
    }
    updateLink({ from, to }) {
        let n = fe(from);
        if (this.source) {
            for (let s of this.source){
                if (Array.isArray(s?.links)) {
                    s.links = s.links.map((o)=>{
                        if (fe(o) === n) {
                            return to;
                        }
                        return o;
                    });
                }
            }
            this.compile();
        }
    }
    findById(e) {
        return this.idMap.get(e);
    }
    find(e) {
        let r = fe(e.normalize("NFC"));
        return this.titleLcMap.get(r);
    }
    exists(e) {
        return this.existsMap.has(fe(e));
    }
    keywordSearch(e = "", r = /\s+/) {
        if (e.length < 1) {
            return this.pages;
        }
        let n = e.trim().toLowerCase();
        let s = String(r);
        let o = this.keywordResultsCache.find((w)=>w.splitter === s && w.query === n);
        if (o) {
            rt(`keyword cache hit "${o.query}", ${o.results.length} pages`);
            return o.results;
        }
        let f = this.keywordResultsCache.find((w)=>w.splitter === s && n.startsWith(w.query));
        let c = n.split(r);
        let u = a_2((w)=>{
            for (let _ of c){
                if (!w.searchTitleLc.includes(_)) {
                    return false;
                }
            }
            return true;
        }, "matchesWords");
        let d = f?.results || this.pages;
        let b = [];
        let y = false;
        for (let w of d){
            if (u(w) && (b.push(w), b.length > 10000)) {
                y = true;
                break;
            }
        }
        if (!y) {
            for(this.keywordResultsCache.unshift({
                splitter: s,
                query: n,
                results: b
            }); this.keywordResultsCache.length > 10;){
                this.keywordResultsCache.pop();
            }
            rt(`keyword cached "${n}", ${b.length} pages`);
        }
        return b;
    }
    approximatePatternSearch(e = "") {
        if (e.length < 1) {
            return this.pages;
        }
        let r = b_.default(` ${e} `);
        let n = this.asearchResultsCache.find((c)=>e.includes(c.query));
        if (n) {
            rt(`asearch cache hit "${n.query}", ${n.results.length} pages`);
        }
        let s = !n && e.length > 3 && this.pages.length > 10000 && this.approximatePatternSearch(e.slice(0, 3));
        let o = n?.results || s || this.pages;
        let f = o.filter((c)=>r(c.title, 1));
        for(!n && o.length - f.length > 10000 && (this.asearchResultsCache.unshift({
            query: e,
            results: f
        }), rt(`asearch cached "${e}", ${f.length} pages`)); this.asearchResultsCache.length > 10;){
            this.asearchResultsCache.pop();
        }
        return f;
    }
    search(e = "", r = /\s+/) {
        e = e.trim();
        let n = String(r);
        let lastSearchResult = this.lastSearchResult;
        if (lastSearchResult && lastSearchResult.splitter === n && lastSearchResult.text === e) {
            return lastSearchResult.results;
        }
        let o = this.keywordSearch(e, r);
        if (e.length >= 3 && o.length <= 10) {
            let f = this.approximatePatternSearch(e);
            o = K_1(o.concat(f), "titleLc");
        }
        this.lastSearchResult = {
            splitter: n,
            text: e,
            results: o
        };
        return o;
    }
    linkSuggest(e = "", r) {
        let n = {
            limit: 6
        };
        let { limit, splitter } = {
            ...n,
            ...r
        };
        e = e.normalize("NFC");
        let f = new Map;
        for (let y of Ya.Page.icons){
            f.set(fe(y), true);
        }
        let c = [];
        let u = [];
        let d = [];
        let b = a_2(()=>c.length + u.length, "headLength");
        for (let y of this.search(e, splitter)){
            if (this.exists(y.titleLc) && !(y.title === Ya.Page.title && !y.image) && !(y.title === e && !y.image) && (b() < 3 && y.image ? f.has(y.titleLc) ? c.push(y) : Ya.CurrentProject.findUserByName(y.title) ? u.push(y) : d.push(y) : d.push(y), b() >= 3 && b() + d.length >= limit || d.length >= limit * 3)) {
                break;
            }
        }
        return [
            ...c,
            ...u,
            ...d
        ].slice(0, limit);
    }
    iconSuggest(e = "") {
        let r = this.linkSuggest(e, {
            limit: 10
        });
        let n = [];
        let s = [];
        for (let o of r){
            if (o.image) {
                n.push(o);
            } else {
                s.push(o);
            }
        }
        return n.concat(s).slice(0, 6);
    }
    hashTagSuggest(e = "", { limit } = {
        limit: 6
    }) {
        let n = [];
        if (/^_+/.test(e)) {
            let s = new RegExp(`^${m(e)}`, "i");
            n = this.pages.filter((o)=>pa(o.title) !== e && o.title !== Ya.Page.title && s.test(o.title));
        }
        if (/^_+$/.test(e) || n.length >= limit) {
            return n;
        }
        n.push(...this.linkSuggest(e, {
            limit: limit - n.length,
            splitter: /_+/g
        }).filter((s)=>pa(s.title) !== e));
        return K_1(n, "id");
    }
}, a_2(bi, "QuickSearch"), bi);
const A_ = e_2(da(), 1);
const xc = e_2(ea(), 1);
const yh = 1000;
async function v_(t) {
    let e = [];
    let r = a_2((n, s)=>{
        let o = Object.create(null);
        o[n] = s;
        e.push(o);
    }, "addChunk");
    for(let n in t){
        let s = t[n];
        if (Array.isArray(s)) {
            if (s.length === 0) {
                r(n, s);
            } else {
                for(let o = 0; o < s.length; o += yh){
                    r(n, s.slice(o, o + yh));
                    if (o % 1000 === 0) {
                        await xc.default(1);
                    }
                }
            }
        } else if (s instanceof Map) {
            if (s.size === 0) {
                r(n, s);
            } else {
                let o = new Map;
                let f = 0;
                for (let c of s.entries()){
                    o.set(...c);
                    f += 1;
                    if (f % yh === 0) {
                        r(n, o);
                        o = new Map;
                        await xc.default(1);
                    }
                }
                if (o.size > 0) {
                    r(n, o);
                }
            }
        } else {
            r(n, s);
        }
    }
    return e;
}
a_2(v_, "splitMessageToChunks");
async function S_(t) {
    if (!Array.isArray(t)) {
        return t;
    }
    let e = Object.create(null);
    for (let r of t){
        for(let n in r){
            let s = r[n];
            await xc.default(1);
            if (Array.isArray(s)) {
                if (e[n]) {
                    e[n].push(...s);
                } else {
                    e[n] = s;
                }
            } else if (s instanceof Map) {
                if (!e[n]) {
                    e[n] = s;
                } else {
                    for (let o of s.entries()){
                        e[n].set(...o);
                    }
                }
            } else {
                e[n] = s;
            }
        }
    }
    return e;
}
a_2(S_, "mergeChunksToMessage");
const bh = class bh {
    constructor(e){
        this.worker = e;
        this.generateId = jn();
    }
    postMessage({ title, body }) {
        return new Promise((resolve)=>{
            let s = this.generateId();
            console.time?.(`postMessage ${title} ${s} done`);
            let o = a_2((u)=>{
                this.worker.removeEventListener("message", c);
                console.timeEnd?.(`postMessage ${title} ${s} done`);
                resolve(u);
            }, "done");
            let f = [];
            let c = a_2(async (u)=>{
                u.data.id === s && (u.data.chunk ? (f.push(u.data.result), u.data.chunk === "end" && o({
                    title,
                    result: await S_(f)
                })) : o(u.data));
            }, "onMessage");
            this.worker.addEventListener("message", c);
            (async ()=>{
                let u = await v_(body);
                for(let d = 0; d < u.length; d++){
                    this.worker.postMessage({
                        title,
                        body: u[d],
                        id: s,
                        chunk: d === u.length - 1 ? "end" : d === 0 ? "start" : "chunk"
                    });
                }
            })();
        });
    }
};
a_2(bh, "DedicatedWorkerClient");
const _c = bh;
const CB = {
    related: a_2((t, e)=>{
        if (e.relatedScore !== t.relatedScore) {
            return e.relatedScore - t.relatedScore;
        }
        return e.updated - t.updated;
    }, "related"),
    created: a_2((t, e)=>e.created - t.created, "created"),
    updated: a_2((t, e)=>e.updated - t.updated, "updated"),
    accessed: a_2((t, e)=>e.accessed - t.accessed, "accessed"),
    linked: a_2((t, e)=>e.linked - t.linked, "linked"),
    pageRank: a_2((t, e)=>e.pageRank - t.pageRank, "pageRank"),
    title: a_2((t, e)=>{
        if (e.titleLc > t.titleLc) {
            return -1;
        }
        return 1;
    }, "title")
};
const wh = a_2(({ sort, pages })=>pages.sort(CB[sort]), "sortPages");
function PB(t) {
    let e = new Map;
    let r = new Map;
    for (let o of t || []){
        if (!Array.isArray(o) || o.length === 0) {
            continue;
        }
        let f = o[0];
        let c = fe(f);
        r.set(c, f);
        for (let u of o){
            e.set(fe(u), c);
        }
    }
    return {
        canonicalLcOf: a_2((o)=>e.get(o) ?? o, "canonicalLcOf"),
        canonicalTitleOf: a_2((o)=>{
            let f = e.get(fe(o));
            if (f) {
                return r.get(f);
            }
            return o;
        }, "canonicalTitleOf")
    };
}
a_2(PB, "buildSynonymMaps");
const kB = a_2(({ currentPageTitle, linksLc, relatedPages, canonicalLcOf = a_2((s)=>s, "canonicalLcOf") })=>{
    let s = [
        "linkTo",
        "linkFrom",
        ...linksLc
    ];
    let o = [
        ...relatedPages.links1hop,
        ...relatedPages.links2hop
    ];
    let f = new Set(linksLc);
    let c = canonicalLcOf(fe(currentPageTitle));
    for (let u of o){
        u.relations = [];
        if (f.has(canonicalLcOf(u.titleLc))) {
            u.relations.push("linkTo");
        }
        if (u.linksLc.some((d)=>canonicalLcOf(d) === c)) {
            u.relations.push("linkFrom");
        }
        for (let d of u.linksLc){
            let b = canonicalLcOf(d);
            if (f.has(b) && !u.relations.includes(b)) {
                u.relations.push(b);
            }
        }
    }
    for (let u of o){
        if (!Array.isArray(u.relations)) {
            continue;
        }
        let d = s.length - s.indexOf(u.relations[0]);
        u.relatedScore = d * 100 + u.relations.length;
    }
}, "calcPageRelatedScore");
function x_({ currentPageTitle, links, relatedPages, sort }) {
    let { canonicalLcOf, canonicalTitleOf } = PB(relatedPages.synonyms);
    let f = fe(currentPageTitle);
    let c = canonicalLcOf(f);
    for (let S of relatedPages.links1hop || []){
        S.linkFromLc = S.linksLc.includes(f) ? undefined : S.linksLc.find((k)=>canonicalLcOf(k) === c);
    }
    let u = [
        ...new Set(links.map((S)=>canonicalLcOf(fe(S))))
    ];
    kB({
        currentPageTitle,
        linksLc: u,
        relatedPages,
        canonicalLcOf
    });
    let links1hop = wh({
        sort,
        pages: relatedPages.links1hop || []
    });
    let b = new Set(relatedPages.hiddenHeadwordsLc || []);
    let projectLinks1hop = wh({
        sort,
        pages: relatedPages.projectLinks1hop || []
    });
    let w = [];
    let _ = new Map;
    let A = new Map;
    let F = new Map;
    for (let S of links){
        let k = fe(S);
        if (b.has(k)) {
            continue;
        }
        let x = canonicalLcOf(k);
        let q = _.get(x);
        if (q === undefined) {
            q = canonicalTitleOf(S);
            _.set(x, q);
            w.push(q);
            A.set(q, x);
            F.set(q, new Set);
        }
        F.get(q).add(k);
    }
    let Y = Object.create(null);
    for (let S of w){
        Y[S] = [];
    }
    for (let S of relatedPages.links1hop){
        let k = new Set(S.linksLc);
        for (let x of w){
            let q = F.get(x);
            let B = false;
            for (let I of q){
                if (k.has(I)) {
                    B = true;
                    break;
                }
            }
            if (B) {
                Y[x].push({
                    show: false,
                    ...S
                });
            }
        }
    }
    for (let S of relatedPages.links2hop){
        let k = new Map;
        for (let q of S.linksLc){
            let B = canonicalLcOf(q);
            if (!k.has(B)) {
                k.set(B, q);
            }
        }
        let show = true;
        for (let q of w){
            let linkFromLc = k.get(A.get(q));
            if (linkFromLc !== undefined) {
                Y[q].push({
                    show,
                    linkFromLc,
                    ...S
                });
                show = false;
            }
        }
    }
    for (let [S, k] of Object.entries(Y)){
        if (Array.isArray(k) && k.length > 0) {
            Y[S] = wh({
                sort,
                pages: Y[S] || []
            });
        } else {
            delete Y[S];
        }
    }
    let T = Object.entries(Y);
    let j = T.filter(([, S])=>S.length <= 100);
    let J = T.filter(([, S])=>S.length > 100).sort(([, S], [, k])=>S.length - k.length);
    let W = Object.create(null);
    for (let [S, k] of [
        ...j,
        ...J
    ]){
        W[S] = k;
    }
    let ae = new Set(links.map(fe).filter((S)=>!b.has(S)));
    let te = new Set;
    let X = a_2((S)=>{
        for (let k of S){
            for (let x of k.linksLc){
                if (ae.has(x)) {
                    te.add(x);
                }
            }
        }
    }, "collectBacklinkHeadwords");
    X(relatedPages.links1hop);
    X(relatedPages.links2hop);
    let existPagesLc = [
        ...relatedPages.links1hop.map((S)=>S.titleLc),
        ...relatedPages.links2hop.map((S)=>S.titleLc),
        ...te
    ].filter((S)=>S);
    let ee = new Set(existPagesLc);
    let emptyLinks = links.filter((S)=>{
        let k = fe(S);
        return k !== f && !ee.has(k);
    });
    return {
        links1hop,
        links2hop: W,
        existPagesLc,
        emptyLinks,
        projectLinks1hop
    };
}
a_2(x_, "compileRelatedPages");
const vh = class vh extends Error {
    constructor(){
        super("worker is not available");
        this.name = "WorkerNotFoundError";
    }
};
a_2(vh, "WorkerNotFoundError");
const Ks = vh;
const Cc = r("src/client/js/stores/related-page.ts");
const __ = 1000;
const C_ = 100000;
const P_ = 1000;
const k_ = 100000;
const E_ = 10000;
let wi;
const RelatedPage = new (wi = class extends z {
    abortController = new ke;
    _sort;
    _links;
    _data;
    _compileGeneration;
    searchQuery;
    isLoading;
    links2hopPending;
    worker;
    compile;
    links1hop;
    links2hop;
    existPagesLc;
    emptyLinks;
    projectLinks1hop;
    searchBackend;
    lastReportedValue;
    _searchAbortController;
    constructor(){
        super();
        this._sort = Na.get("relatedPageSort");
        this._links = [];
        this._data = null;
        this._compileGeneration = 0;
        this.searchQuery = "";
        this.isLoading = false;
        this.links2hopPending = false;
        this.compile = A_.default(this._compile.bind(this), {
            trailing: true
        });
        if (Ne() && Worker) {
            this.worker = new _c(new Worker("/assets/dedicated-worker.js"));
        }
    }
    abortSearchPagination() {
        this._searchAbortController?.abort();
        this._searchAbortController = new AbortController;
    }
    resetForPageTransition() {
        this._compileGeneration++;
        this._data = null;
        this._links = [];
        this.links1hop = [];
        this.links2hop = {};
        this.emptyLinks = [];
        this.projectLinks1hop = [];
        this.isLoading = true;
        this.links2hopPending = false;
        this.emitChange();
    }
    _requestApi(e, r, n = {}) {
        if (e) {
            return (r === "get" ? x.get(e, {
                signal: this.abortController.signal
            }) : x[r](e, n, {
                signal: this.abortController.signal
            })).then((o)=>{
                let { data } = o;
                data.cachedAt = o.headers["x-serviceworker-cached"];
                return data;
            }).catch((o)=>{
                if (o.response && o.response.status === 404) {
                    return null;
                }
                throw o;
            });
        }
        return Promise.resolve(null);
    }
    async fetchLinks1hop({ projectName, title, followRename, search, nextId = null, perPage = __ }) {
        let c = ni({
            projectName,
            title,
            endpoint: "links1hop",
            commonQuery: {
                followRename,
                search
            },
            additionalQuery: {
                ...nextId ? {
                    nextId
                } : {},
                perPage
            }
        });
        return this._requestApi(c, "get");
    }
    async fetchProjectLinks1hop({ projectName, title, followRename, search }) {
        let o = ni({
            projectName,
            title,
            endpoint: "projectLinks1hop",
            commonQuery: {
                followRename,
                search,
                includeProjects: true
            }
        });
        return this._requestApi(o, "get");
    }
    async fetchLinks2hop({ projectName, title, followRename, search, nextId = null, perPage = __ }) {
        let c = ni({
            projectName,
            title,
            endpoint: "links2hop",
            commonQuery: {
                followRename,
                search
            },
            additionalQuery: {
                ...nextId ? {
                    nextId
                } : {},
                perPage
            }
        });
        return this._requestApi(c, "get");
    }
    async fetchRelatedPages({ projectName, title, followRename, search } = {}) {
        let o = this._searchAbortController?.signal;
        let [links1hopData, projectLinks1hopData] = await Promise.all([
            this._fetchAllLinks1hop({
                projectName,
                title,
                followRename,
                search,
                signal: o
            }),
            this.fetchProjectLinks1hop({
                projectName,
                title,
                followRename,
                search
            })
        ]);
        let links2hopData = await this._fetchAllLinks2hop({
            projectName,
            title,
            followRename,
            search,
            signal: o
        });
        return this._buildRelatedPages({
            links1hopData,
            projectLinks1hopData,
            links2hopData,
            search
        });
    }
    async fetchRelatedPagesProgressive({ projectName, title, followRename, search } = {}) {
        let o = this._searchAbortController?.signal;
        let f = [];
        let c = "";
        let u = false;
        let projectLinks1hop = [];
        let b = [];
        {
            let [A, F] = await Promise.all([
                this.fetchLinks1hop({
                    projectName,
                    title,
                    followRename,
                    search
                }),
                this.fetchProjectLinks1hop({
                    projectName,
                    title,
                    followRename,
                    search
                })
            ]);
            c = A?.searchBackend ?? "";
            u = A?.hasBackLinksOrIcons ?? false;
            f = A?.links1hop ?? [];
            b = A?.synonyms ?? [];
            projectLinks1hop = F?.projectLinks1hop ?? [];
            this.links2hopPending = true;
            this.isLoading = false;
            this._compileProgressiveRelatedPages({
                search,
                searchBackend: c,
                allLinks1hop: f,
                hasBackLinksOrIcons: u,
                projectLinks1hop,
                allLinks2hop: [],
                hiddenHeadwordsLc: [],
                synonyms: b
            });
            let Y = A?.pagination?.nextId;
            while(A?.pagination?.hasNext && Y && !(o?.aborted || f.length >= (search ? P_ : C_))){
                let T = await this.fetchLinks1hop({
                    projectName,
                    title,
                    followRename,
                    search,
                    nextId: Y
                });
                if (!T || (f = f.concat(T.links1hop ?? []), b = T.synonyms ?? b, this._compileProgressiveRelatedPages({
                    search,
                    searchBackend: c,
                    allLinks1hop: f,
                    hasBackLinksOrIcons: u,
                    projectLinks1hop,
                    allLinks2hop: [],
                    hiddenHeadwordsLc: [],
                    synonyms: b
                }), !T.pagination?.hasNext)) {
                    break;
                }
                Y = T.pagination.nextId;
            }
        }
        let y = [];
        let w = [];
        let _ = [];
        {
            let A = null;
            while(!(o?.aborted || y.length >= (search ? E_ : k_))){
                let F = await this.fetchLinks2hop({
                    projectName,
                    title,
                    followRename,
                    search,
                    nextId: A
                });
                if (!F || (w = F.hiddenHeadwordsLc ?? w, _ = F.synonyms ?? _, y = y.concat(F.links2hop ?? []), this._compileProgressiveRelatedPages({
                    search,
                    searchBackend: c,
                    allLinks1hop: f,
                    hasBackLinksOrIcons: u,
                    projectLinks1hop,
                    allLinks2hop: y,
                    hiddenHeadwordsLc: w,
                    synonyms: [
                        ...b,
                        ..._
                    ]
                }), !F.pagination?.hasNext)) {
                    break;
                }
                A = F.pagination.nextId;
            }
        }
        return this._buildRelatedPages({
            links1hopData: {
                links1hop: f,
                searchBackend: c,
                hasBackLinksOrIcons: u,
                synonyms: b
            },
            projectLinks1hopData: {
                projectLinks1hop
            },
            links2hopData: {
                links2hop: y,
                hiddenHeadwordsLc: w,
                synonyms: _
            },
            search
        });
    }
    async _fetchAllLinks1hop({ projectName, title, followRename, search, signal }) {
        let f = [];
        let c = "";
        let u = false;
        let d = [];
        let b = null;
        while(!(signal?.aborted || f.length >= (search ? P_ : C_))){
            let y = await this.fetchLinks1hop({
                projectName,
                title,
                followRename,
                search,
                nextId: b
            });
            if (!y || (c = y.searchBackend ?? c, u = y.hasBackLinksOrIcons ?? u, d = y.synonyms ?? d, f = f.concat(y.links1hop ?? []), !y.pagination?.hasNext)) {
                break;
            }
            b = y.pagination.nextId;
        }
        return {
            links1hop: f,
            searchBackend: c,
            hasBackLinksOrIcons: u,
            synonyms: d
        };
    }
    async _fetchAllLinks2hop({ projectName, title, followRename, search, signal }) {
        let f = [];
        let c = [];
        let u = [];
        let d = null;
        while(!(signal?.aborted || f.length >= (search ? E_ : k_))){
            let b = await this.fetchLinks2hop({
                projectName,
                title,
                followRename,
                search,
                nextId: d
            });
            if (!b || (c = b.hiddenHeadwordsLc ?? c, u = b.synonyms ?? u, f = f.concat(b.links2hop ?? []), !b.pagination?.hasNext)) {
                break;
            }
            d = b.pagination.nextId;
        }
        return {
            links2hop: f,
            hiddenHeadwordsLc: c,
            synonyms: u
        };
    }
    _compileProgressiveRelatedPages({ search, searchBackend, allLinks1hop, hasBackLinksOrIcons, projectLinks1hop, allLinks2hop, hiddenHeadwordsLc, synonyms = [] }) {
        let d = new Set(allLinks1hop.map((_)=>_.titleLc));
        let b = allLinks2hop.filter((_)=>!d.has(_.titleLc));
        let y = {
            search: search || "",
            searchBackend,
            links1hop: [
                ...allLinks1hop
            ],
            hasBackLinksOrIcons,
            projectLinks1hop: [
                ...projectLinks1hop
            ],
            links2hop: [
                ...b
            ],
            charsCount: {
                links1hop: allLinks1hop.reduce((acc, item)=>acc + (item.charsCount || 0), 0),
                links2hop: b.reduce((acc, item)=>acc + (item.charsCount || 0), 0)
            },
            hiddenHeadwordsLc,
            synonyms
        };
        let _compileGeneration = this._compileGeneration;
        this.compile({
            links: Ya.Page.links || [],
            relatedPages: y
        }).catch((_)=>{
            if (_ instanceof Ks) {
                this.compileSync({
                    links: Ya.Page.links || [],
                    relatedPages: y,
                    generation: _compileGeneration
                });
            } else {
                console.error(_);
            }
        });
    }
    _buildRelatedPages({ links1hopData, projectLinks1hopData, links2hopData, search }) {
        let o = links1hopData?.links1hop ?? [];
        let f = new Set(o.map((u)=>u.titleLc));
        let c = (links2hopData?.links2hop ?? []).filter((u)=>!f.has(u.titleLc));
        return {
            search: search || "",
            searchBackend: links1hopData?.searchBackend ?? "",
            links1hop: o,
            hasBackLinksOrIcons: links1hopData?.hasBackLinksOrIcons ?? false,
            projectLinks1hop: projectLinks1hopData?.projectLinks1hop ?? [],
            links2hop: c,
            charsCount: {
                links1hop: o.reduce((acc, item)=>acc + (item.charsCount || 0), 0),
                links2hop: c.reduce((acc, item)=>acc + (item.charsCount || 0), 0)
            },
            hiddenHeadwordsLc: links2hopData?.hiddenHeadwordsLc ?? [],
            synonyms: [
                ...links1hopData?.synonyms ?? [],
                ...links2hopData?.synonyms ?? []
            ]
        };
    }
    compileSync({ links, relatedPages, generation }) {
        if (generation !== undefined && generation !== this._compileGeneration) {
            return;
        }
        if (relatedPages) {
            this.isLoading = false;
        }
        if (!relatedPages) {
            relatedPages = {
                search: "",
                searchBackend: "",
                links1hop: [],
                links2hop: [],
                projectLinks1hop: [],
                hiddenHeadwordsLc: []
            };
        }
        Cc("set", relatedPages);
        this._links = links;
        this._data = relatedPages;
        let { searchBackend, search } = relatedPages;
        let title = Ya.Page.title;
        let _sort = this._sort;
        let { links1hop, links2hop, existPagesLc, emptyLinks, projectLinks1hop } = x_({
            currentPageTitle: title,
            links,
            relatedPages,
            sort: _sort
        });
        Object.assign(this, {
            links1hop,
            links2hop,
            existPagesLc,
            emptyLinks,
            projectLinks1hop,
            searchBackend,
            searchQuery: search
        });
        this.emitChange();
    }
    async _compile({ links, relatedPages }) {
        if (!this.worker) {
            throw new Ks;
        }
        if (!Array.isArray(links)) {
            throw new Error("links is not an Array");
        }
        if (!Array.isArray(relatedPages?.links1hop)) {
            throw new Error("relatedPages.links1hop is not an Array");
        }
        if (!Array.isArray(relatedPages?.links2hop)) {
            throw new Error("relatedPages.links2hop is not an Array");
        }
        if (!Array.isArray(relatedPages?.projectLinks1hop)) {
            throw new Error("relatedPages.projectLinks1hop is not an Array");
        }
        Cc("compile", relatedPages);
        let _compileGeneration = this._compileGeneration;
        let { search, searchBackend } = relatedPages;
        let title_1 = Ya.Page.title;
        let _sort = this._sort;
        let { title, result } = await this.worker.postMessage({
            title: "related-page:compile",
            body: {
                currentPageTitle: title_1,
                links,
                relatedPages,
                sort: _sort
            }
        });
        if (_compileGeneration !== this._compileGeneration || title !== "related-page:compile") {
            return;
        }
        let { links1hop, links2hop, existPagesLc, emptyLinks, projectLinks1hop } = result;
        if (!links1hop || !links2hop || !existPagesLc || !emptyLinks || !projectLinks1hop) {
            throw new Error("invalid result");
        }
        Cc("compile done", {
            links1hop,
            links2hop
        });
        this._links = links;
        this._data = relatedPages;
        Object.assign(this, {
            links1hop,
            links2hop,
            existPagesLc,
            emptyLinks,
            projectLinks1hop,
            searchBackend,
            searchQuery: search
        });
        this.emitChange();
        return {
            title,
            result
        };
    }
    async patchQuickSearchSocket(e) {
        if (!Array.isArray(this.links1hop) || e.kind !== "page" || e.pageId === Ya.Page.id) {
            return;
        }
        let { links } = e.changes.find((c)=>Array.isArray(c.links)) || {};
        if (!Array.isArray(links)) {
            return;
        }
        let n = fe(Ya.Page.title);
        let s = new Set([
            n
        ]);
        for (let c of this._data?.synonyms ?? []){
            let u = c.map(fe);
            if (u.includes(n)) {
                for (let d of u){
                    s.add(d);
                }
            }
        }
        let o = links.some((c)=>s.has(fe(c)));
        let f = this.links1hop.some((c)=>c.id === e.pageId);
        if (o || f) {
            let c = await this.fetchRelatedPages();
            return this.compile({
                links: Ya.Page.links,
                relatedPages: c
            }).catch(console.error);
        }
    }
    exists(e) {
        if (this.existPagesLc) {
            return this.existPagesLc.includes(fe(e));
        }
        return false;
    }
    get linksFrom() {
        let e = fe(Ya.Page.title);
        return (this.links1hop || []).filter((r)=>r.linksLc.includes(e));
    }
    get() {
        return this._data;
    }
    get hasBackLinksOrIcons() {
        return this._data && this._data.hasBackLinksOrIcons;
    }
    get sort() {
        return this._sort;
    }
    set sort(e) {
        this._sort = e;
        Na.set("relatedPageSort", e);
        this.emitChange();
        if (this._data) {
            this.compile({
                links: this._links,
                relatedPages: this._data
            }).catch(console.error);
        }
    }
    resetReport() {
        this.lastReportedValue = null;
    }
    report(e, r) {
        !e && !this.lastReportedValue || this.lastReportedValue !== e && (this.postReport(e, r), this.lastReportedValue = e);
    }
    postReport(e, r) {
        let n = Ya.CurrentProject.get();
        Ya.CurrentUser.isProjectMember && (!Ya.Settings.flags.PAID_SERVER && n.plan !== "business" || (Cc("report search.2hop", e), x.post(`/api/projects/auditlogs/${n.name}/report`, {
            type: "search.2hop",
            value: e,
            pageId: r
        }).catch((s)=>{
            console.error('"search.2hop" report error:', s.response?.data.message || s.message);
        })));
    }
}, a_2(wi, "RelatedPage"), wi);
const EB = r("src/client/js/stores/search-form.js");
let vi;
const SearchForm = new (vi = class extends z {
    constructor(){
        super();
        c_1(this, "onLayoutStoreChange", "onPageStoreChange");
        this.reset();
    }
    initialize() {
        Ya.Layout.addChangeListener(this.onLayoutStoreChange);
        Ya.Page.addChangeListener(this.onPageStoreChange);
    }
    reset() {
        this.value = "";
        this.compositionMode = false;
        this.titleJustEdited = "";
        this.emitChange("reset");
    }
    get() {
        return {
            value: this.value,
            compositionMode: this.compositionMode,
            titleJustEdited: this.titleJustEdited
        };
    }
    set({ value, compositionMode, titleJustEdited }) {
        if (typeof value === "string") {
            this.value = value;
        }
        if (typeof titleJustEdited === "string") {
            this.titleJustEdited = titleJustEdited;
        }
        if (typeof compositionMode === "boolean") {
            this.compositionMode = compositionMode;
        }
        this.emitChange();
    }
    setTitleJustEdited(e) {
        this.titleJustEdited = e;
        this.emitChange("titleJustEdited");
    }
    onLayoutStoreChange() {
        Ya.Layout.get() === "list" && (Ya.PageList.isSearch || this.reset());
    }
    onPageStoreChange({ event }) {
        if (event === "load") {
            this.titleJustEdited = "";
            this.emitChange("pageLoad");
        }
    }
    reportOnDeleteChar() {
        if (!(this.compositionMode || new RegExp(this.value.split("").map(m).join(".*")).test(this.lastReportedValue))) {
            this.postReport(this.value);
            this.lastReportedValue = this.value;
        }
    }
    report() {
        this.compositionMode || this.lastReportedValue !== this.value && this.value && (this.postReport(this.value), this.lastReportedValue = this.value);
    }
    postReport(e) {
        let r = Ya.CurrentProject.get();
        Ya.CurrentUser.isProjectMember && (!Ya.Settings.flags.PAID_SERVER && r.plan !== "business" || (EB("report search.quick", e), x.post(`/api/projects/auditlogs/${r.name}/report`, {
            type: "search.quick",
            value: e
        }).catch((n)=>{
            console.error('"search.quick" report error:', n.response?.data.message || n.message);
        })));
    }
}, a_2(vi, "SearchForm"), vi);
const Sh = e_2(a_1(), 1);
let Si;
const Selection = new (Si = class extends z {
    constructor(){
        super();
        this.data = {
            start: {
                line: 0,
                char: 0
            },
            end: {
                line: 0,
                char: 0
            }
        };
        this.hidePopupMenu = false;
    }
    get lines() {
        return Ya.Line.getAll();
    }
    getRange({ normalizeOrder } = {}) {
        if (normalizeOrder) {
            return this.normalizeOrder(this.data);
        }
        return this.data;
    }
    setRange(e, r) {
        if (!e.start || !e.end) {
            throw new Error("invalid range");
        }
        this.data = e_1(e);
        this.fixRange();
        this.hidePopupMenu = !!r?.hidePopupMenu;
        this.emitChange();
    }
    clear() {
        this.data = {
            start: {
                line: 0,
                char: 0
            },
            end: {
                line: 0,
                char: 0
            }
        };
        this.emitChange();
    }
    normalizeOrder(e) {
        if (e.end.line * 10000 + e.end.char < e.start.line * 10000 + e.start.char) {
            let r = e.start;
            return {
                start: e_1(e.end),
                end: e_1(r)
            };
        }
        return e;
    }
    getSelectedText() {
        if (!this.hasSelection(this.data)) {
            return "";
        }
        let e = this.normalizeOrder(this.data);
        if (e.start.line === e.end.line) {
            if (this.lines[e.start.line]) {
                return this.lines[e.start.line].text.charSubstr(e.start.char, e.end.char - e.start.char);
            }
            return "";
        }
        let r = [];
        for(let n = e.start.line; n <= e.end.line; n++){
            let s = this.lines[n];
            let o = s ? s.text : undefined;
            if (o === undefined) {
                return "";
            }
            if (n === e.start.line && n === e.end.line) {
                o = o.charSubstr(e.start.char, e.end.char - e.start.char);
            } else if (n === e.start.line) {
                o = o.charSubstr(e.start.char);
            } else if (n === e.end.line) {
                o = o.charSubstr(0, e.end.char);
            }
            r.push(o);
        }
        return r.join(`
`);
    }
    getSelectionsHeight() {
        let e = Sh.default(".selection");
        if (e.length === 0) {
            return 0;
        }
        let r = e[0];
        let n = e[e.length - 1];
        return n.offsetTop + n.offsetHeight - r.offsetTop;
    }
    getSelectionTop() {
        let e = Sh.default(".selection");
        if (e.length === 0) {
            return 0;
        }
        return e[0].offsetTop;
    }
    selectAll() {
        let charLength = this.lines[this.lines.length - 1].text.charLength;
        let r = this.lines.length - 1;
        return this.setRange({
            start: {
                line: 0,
                char: 0
            },
            end: {
                line: r,
                char: charLength
            }
        });
    }
    hasSelection(e = this.data) {
        return !(e.start.line === e.end.line && e.start.char === e.end.char);
    }
    hasSingleLineSelection(e = this.data) {
        return e.start.line === e.end.line && e.start.char !== e.end.char;
    }
    hasMultiLinesSelection(e = this.data) {
        return e.start.line !== e.end.line;
    }
    hasSelectionAll() {
        if (!this.hasSelection()) {
            return false;
        }
        let { start, end } = this.normalizeOrder(this.data);
        return start.line === 0 && start.char === 0 && end.line === this.lines.length - 1 && end.char === this.lines[end.line].text.charLength;
    }
    fixRange() {
        this.fixPosition(this.data.start);
        this.fixPosition(this.data.end);
    }
    fixPosition(e) {
        let r = this.lines.length - 1;
        if (e.line > r) {
            e.line = r;
        }
        let n = this.lines[e.line]?.text.charLength || 0;
        if (e.char > n) {
            e.char = n;
        }
    }
}, a_2(Si, "Selection"), Si);
const AB = r("src/client/js/stores/settings.js");
let xi;
const Settings = new (xi = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this._data = null;
        this.readyState = Ze;
    }
    get() {
        return this._data;
    }
    apiPath() {
        return "/api/settings";
    }
    hasRemoteData() {
        return this.readyState === Xe && !!this._data;
    }
    getCache() {
        return St(this.apiPath());
    }
    fetch() {
        return x.get(this.apiPath(), {
            signal: this.abortController.signal
        });
    }
    set({ data, source }) {
        AB("set", source, data);
        if (!data) {
            throw new Error('argument "data" is empty');
        }
        if (!source) {
            throw new Error('argument "source" is empty');
        }
        this._data = data;
        this.readyState = source;
        this.emitChange("load");
    }
    get flags() {
        return this._data?.flags ?? {};
    }
    get envs() {
        return this._data?.envs ?? {};
    }
    get loginStrategy() {
        return this._data?.loginStrategy ?? {};
    }
}, a_2(xi, "Settings"), xi);
const OB = r("src/client/js/stores/shared-cursor.js");
let _i;
const SharedCursor = new (_i = class extends z {
    constructor(){
        super();
        c_1(this, "clear", "onSync", "checkExpiredSharedCursor");
        this.clear();
    }
    initialize() {
        Ya.Page.addChangeListener(this.clear);
        this.emitChangeDebounced = g_1(this.emitChange, 100);
        setInterval(this.checkExpiredSharedCursor, 10 * 1000);
    }
    clear() {
        OB("clear");
        this.cursors = {};
        this.emitChange();
    }
    getAll() {
        return this.cursors;
    }
    onSync(e) {
        if (e.pageId !== Ya.Page.id) {
            delete this.cursors[e.socketId];
        } else {
            e.updatedAt = Date.now();
            this.cursors[e.socketId] = e;
        }
        this.emitChangeDebounced();
    }
    checkExpiredSharedCursor() {
        let e = Date.now();
        let r = false;
        for (let [n, s] of Object.entries(this.cursors)){
            if (e - s.updatedAt > 30 * 1000) {
                delete this.cursors[n];
                r = true;
            }
        }
        if (r) {
            this.emitChange();
        }
    }
}, a_2(_i, "SharedCursor"), _i);
const Ot = Object.create(null);
Ot.open = "0";
Ot.close = "1";
Ot.ping = "2";
Ot.pong = "3";
Ot.message = "4";
Ot.upgrade = "5";
Ot.noop = "6";
const Js = Object.create(null);
Object.keys(Ot).forEach((t)=>{
    Js[Ot[t]] = t;
});
const Qs = {
    type: "error",
    data: "parser error"
};
const I_ = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const j_ = typeof ArrayBuffer === "function";
const N_ = a_2((t)=>{
    if (typeof ArrayBuffer.isView === "function") {
        return ArrayBuffer.isView(t);
    }
    return t && t.buffer instanceof ArrayBuffer;
}, "isView");
const Zs = a_2(({ type, data }, r, n)=>{
    if (I_ && data instanceof Blob) {
        if (r) {
            return n(data);
        }
        return F_(data, n);
    }
    if (j_ && (data instanceof ArrayBuffer || N_(data))) {
        if (r) {
            return n(data);
        }
        return F_(new Blob([
            data
        ]), n);
    }
    return n(Ot[type] + (data || ""));
}, "encodePacket");
var F_ = a_2((t, e)=>{
    let r = new FileReader;
    r.onload = ()=>{
        let n = r.result.split(",")[1];
        e(`b${n || ""}`);
    };
    return r.readAsDataURL(t);
}, "encodeBlobAsBase64");
function D_(t) {
    if (t instanceof Uint8Array) {
        return t;
    }
    if (t instanceof ArrayBuffer) {
        return new Uint8Array(t);
    }
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
a_2(D_, "toArray");
let xh;
function B_(t, e) {
    if (I_ && t.data instanceof Blob) {
        return t.data.arrayBuffer().then(D_).then(e);
    }
    if (j_ && (t.data instanceof ArrayBuffer || N_(t.data))) {
        return e(D_(t.data));
    }
    Zs(t, false, (r)=>{
        if (!xh) {
            xh = new TextEncoder;
        }
        e(xh.encode(r));
    });
}
a_2(B_, "encodePacketToBinary");
const U_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const Xs = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(let t = 0; t < U_.length; t++){
    Xs[U_.charCodeAt(t)] = t;
}
const q_ = a_2((t)=>{
    let e = t.length * 0.75;
    let t_length = t.length;
    let n;
    let s = 0;
    let o;
    let f;
    let c;
    let u;
    t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
    let d = new ArrayBuffer(e);
    let b = new Uint8Array(d);
    for(n = 0; n < t_length; n += 4){
        o = Xs[t.charCodeAt(n)];
        f = Xs[t.charCodeAt(n + 1)];
        c = Xs[t.charCodeAt(n + 2)];
        u = Xs[t.charCodeAt(n + 3)];
        b[s++] = o << 2 | f >> 4;
        b[s++] = (f & 15) << 4 | c >> 2;
        b[s++] = (c & 3) << 6 | u & 63;
    }
    return d;
}, "decode");
const LB = typeof ArrayBuffer === "function";
const eo = a_2((t, e)=>{
    if (typeof t !== "string") {
        return {
            type: "message",
            data: $_(t, e)
        };
    }
    let r = t.charAt(0);
    if (r === "b") {
        return {
            type: "message",
            data: TB(t.substring(1), e)
        };
    }
    if (Js[r]) {
        if (t.length > 1) {
            return {
                type: Js[r],
                data: t.substring(1)
            };
        }
        return {
            type: Js[r]
        };
    }
    return Qs;
}, "decodePacket");
var TB = a_2((t, e)=>{
    if (LB) {
        let r = q_(t);
        return $_(r, e);
    } else {
        return {
            base64: true,
            data: t
        };
    }
}, "decodeBase64Packet");
var $_ = a_2((t, e)=>{
    if (e === "blob") {
        if (t instanceof Blob) {
            return t;
        }
        return new Blob([
            t
        ]);
    }
    if (t instanceof ArrayBuffer) {
        return t;
    }
    return t.buffer;
}, "mapBinary");
const z_ = "";
const H_ = a_2((t, e)=>{
    let t_length = t.length;
    let n = new Array(t_length);
    let s = 0;
    t.forEach((o, f)=>{
        Zs(o, false, (c)=>{
            n[f] = c;
            if (++s === t_length) {
                e(n.join(z_));
            }
        });
    });
}, "encodePayload");
const W_ = a_2((t, e)=>{
    let r = t.split(z_);
    let n = [];
    for(let s = 0; s < r.length; s++){
        let o = eo(r[s], e);
        n.push(o);
        if (o.type === "error") {
            break;
        }
    }
    return n;
}, "decodePayload");
function Y_() {
    return new TransformStream({
        transform (t, e) {
            B_(t, (r)=>{
                let r_length = r.length;
                let s;
                if (r_length < 126) {
                    s = new Uint8Array(1);
                    new DataView(s.buffer).setUint8(0, r_length);
                } else if (r_length < 65536) {
                    s = new Uint8Array(3);
                    let o = new DataView(s.buffer);
                    o.setUint8(0, 126);
                    o.setUint16(1, r_length);
                } else {
                    s = new Uint8Array(9);
                    let o = new DataView(s.buffer);
                    o.setUint8(0, 127);
                    o.setBigUint64(1, BigInt(r_length));
                }
                if (t.data && typeof t.data !== "string") {
                    s[0] |= 128;
                }
                e.enqueue(s);
                e.enqueue(r);
            });
        }
    });
}
a_2(Y_, "createPacketEncoderStream");
let _h;
function Pc(t) {
    return t.reduce((acc, item)=>acc + item.length, 0);
}
a_2(Pc, "totalLength");
function kc(t, e) {
    if (t[0].length === e) {
        return t.shift();
    }
    let r = new Uint8Array(e);
    let n = 0;
    for(let s = 0; s < e; s++){
        r[s] = t[0][n++];
        if (n === t[0].length) {
            t.shift();
            n = 0;
        }
    }
    if (t.length && n < t[0].length) {
        t[0] = t[0].slice(n);
    }
    return r;
}
a_2(kc, "concatChunks");
function V_(t, e) {
    if (!_h) {
        _h = new TextDecoder;
    }
    let r = [];
    let n = 0;
    let s = -1;
    let o = false;
    return new TransformStream({
        transform (f, c) {
            for(r.push(f);;){
                if (n === 0) {
                    if (Pc(r) < 1) {
                        break;
                    }
                    let u = kc(r, 1);
                    o = (u[0] & 128) === 128;
                    s = u[0] & 127;
                    if (s < 126) {
                        n = 3;
                    } else if (s === 126) {
                        n = 1;
                    } else {
                        n = 2;
                    }
                } else if (n === 1) {
                    if (Pc(r) < 2) {
                        break;
                    }
                    let u = kc(r, 2);
                    s = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0);
                    n = 3;
                } else if (n === 2) {
                    if (Pc(r) < 8) {
                        break;
                    }
                    let u = kc(r, 8);
                    let d = new DataView(u.buffer, u.byteOffset, u.length);
                    let b = d.getUint32(0);
                    if (b > 2 ** 21 - 1) {
                        c.enqueue(Qs);
                        break;
                    }
                    s = b * 2 ** 32 + d.getUint32(4);
                    n = 3;
                } else {
                    if (Pc(r) < s) {
                        break;
                    }
                    let u = kc(r, s);
                    c.enqueue(eo(o ? u : _h.decode(u), e));
                    n = 0;
                }
                if (s === 0 || s > t) {
                    c.enqueue(Qs);
                    break;
                }
            }
        }
    });
}
a_2(V_, "createPacketDecoderStream");
const Ch = 4;
function Re(t) {
    if (t) {
        return RB(t);
    }
}
a_2(Re, "Emitter");
function RB(t) {
    for(const e in Re.prototype){
        t[e] = Re.prototype[e];
    }
    return t;
}
a_2(RB, "mixin");
Re.prototype.on = Re.prototype.addEventListener = function(t, e) {
    this._callbacks = this._callbacks || {};
    (this._callbacks[`\$${t}`] = this._callbacks[`\$${t}`] || []).push(e);
    return this;
};
Re.prototype.once = function(t, e) {
    function r() {
        this.off(t, r);
        e.apply(this, arguments);
    }
    a_2(r, "on");
    r.fn = e;
    this.on(t, r);
    return this;
};
Re.prototype.off = Re.prototype.removeListener = Re.prototype.removeAllListeners = Re.prototype.removeEventListener = function(t, e) {
    this._callbacks = this._callbacks || {};
    if (arguments.length == 0) {
        this._callbacks = {};
        return this;
    }
    const r = this._callbacks[`\$${t}`];
    if (!r) {
        return this;
    }
    if (arguments.length == 1) {
        delete this._callbacks[`\$${t}`];
        return this;
    }
    let n;
    for(let s = 0; s < r.length; s++){
        n = r[s];
        if (n === e || n.fn === e) {
            r.splice(s, 1);
            break;
        }
    }
    r.length === 0 && delete this._callbacks[`\$${t}`];
    return this;
};
Re.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    const e = new Array(arguments.length - 1);
    let r = this._callbacks[`\$${t}`];
    for(var n = 1; n < arguments.length; n++){
        e[n - 1] = arguments[n];
    }
    if (r) {
        r = r.slice(0);
        for(var n = 0, s = r.length; n < s; ++n){
            r[n].apply(this, e);
        }
    }
    return this;
};
Re.prototype.emitReserved = Re.prototype.emit;
Re.prototype.listeners = function(t) {
    this._callbacks = this._callbacks || {};
    return this._callbacks[`\$${t}`] || [];
};
Re.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length;
};
const Xt = typeof Promise === "function" && typeof Promise.resolve === "function" ? (e)=>Promise.resolve().then(e) : (e, r)=>r(e, 0);
const nt = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : Function("return this")();
const G_ = "arraybuffer";
function Ec(t, ...e) {
    return e.reduce((acc, item)=>{
        if (t.hasOwnProperty(item)) {
            acc[item] = t[item];
        }
        return acc;
    }, {});
}
a_2(Ec, "pick");
const { setTimeout: setTimeout_1, clearTimeout: clearTimeout_1 } = nt;
function er(t, e) {
    if (e.useNativeTimers) {
        t.setTimeoutFn = setTimeout_1.bind(nt);
        t.clearTimeoutFn = clearTimeout_1.bind(nt);
    } else {
        t.setTimeoutFn = nt.setTimeout.bind(nt);
        t.clearTimeoutFn = nt.clearTimeout.bind(nt);
    }
}
a_2(er, "installTimerFunctions");
const DB = 1.33;
function K_(t) {
    if (typeof t === "string") {
        return IB(t);
    }
    return Math.ceil((t.byteLength || t.size) * DB);
}
a_2(K_, "byteLength");
function IB(t) {
    let e = 0;
    let r = 0;
    for(let n = 0, s = t.length; n < s; n++){
        e = t.charCodeAt(n);
        if (e < 128) {
            r += 1;
        } else if (e < 2048) {
            r += 2;
        } else if (e < 55296 || e >= 57344) {
            r += 3;
        } else {
            n++;
            r += 4;
        }
    }
    return r;
}
a_2(IB, "utf8Length");
function Ac() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
a_2(Ac, "randomString");
function J_(t) {
    let e = "";
    for(let r in t){
        if (t.hasOwnProperty(r)) {
            if (e.length) {
                e += "&";
            }
            e += `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`;
        }
    }
    return e;
}
a_2(J_, "encode");
function Q_(t) {
    let e = {};
    let r = t.split("&");
    for(let n = 0, s = r.length; n < s; n++){
        let o = r[n].split("=");
        e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
    }
    return e;
}
a_2(Q_, "decode");
const Ph = class Ph extends Error {
    constructor(e, r, n){
        super(e);
        this.description = r;
        this.context = n;
        this.type = "TransportError";
    }
};
a_2(Ph, "TransportError");
const Oc = Ph;
const kh = class kh extends Re {
    constructor(e){
        super();
        this.writable = false;
        er(this, e);
        this.opts = e;
        this.query = e.query;
        this.socket = e.socket;
        this.supportsBinary = !e.forceBase64;
    }
    onError(e, r, n) {
        super.emitReserved("error", new Oc(e, r, n));
        return this;
    }
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    send(e) {
        if (this.readyState === "open") {
            this.write(e);
        }
    }
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    onData(e) {
        let r = eo(e, this.socket.binaryType);
        this.onPacket(r);
    }
    onPacket(e) {
        super.emitReserved("packet", e);
    }
    onClose(e) {
        this.readyState = "closed";
        super.emitReserved("close", e);
    }
    pause(e) {}
    createUri(e, r = {}) {
        return `${e}://${this._hostname()}${this._port()}${this.opts.path}${this._query(r)}`;
    }
    _hostname() {
        let hostname = this.opts.hostname;
        if (hostname.indexOf(":") === -1) {
            return hostname;
        }
        return `[${hostname}]`;
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return `:${this.opts.port}`;
        }
        return "";
    }
    _query(e) {
        let r = J_(e);
        if (r.length) {
            return `?${r}`;
        }
        return "";
    }
};
a_2(kh, "Transport");
const tr = kh;
const Eh = class Eh extends tr {
    constructor(){
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this._poll();
    }
    pause(e) {
        this.readyState = "pausing";
        let r = a_2(()=>{
            this.readyState = "paused";
            e();
        }, "pause");
        if (this._polling || !this.writable) {
            let n = 0;
            if (this._polling) {
                n++;
                this.once("pollComplete", ()=>{
                    if (!--n) {
                        r();
                    }
                });
            }
            if (!this.writable) {
                n++;
                this.once("drain", ()=>{
                    if (!--n) {
                        r();
                    }
                });
            }
        } else {
            r();
        }
    }
    _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    onData(e) {
        let r = a_2((n)=>{
            if (this.readyState === "opening" && n.type === "open") {
                this.onOpen();
            }
            if (n.type === "close") {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            this.onPacket(n);
        }, "callback");
        W_(e, this.socket.binaryType).forEach(r);
        if (this.readyState !== "closed") {
            this._polling = false;
            this.emitReserved("pollComplete");
            if (this.readyState === "open") {
                this._poll();
            }
        }
    }
    doClose() {
        let e = a_2(()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        }, "close");
        if (this.readyState === "open") {
            e();
        } else {
            this.once("open", e);
        }
    }
    write(e) {
        this.writable = false;
        H_(e, (r)=>{
            this.doWrite(r, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    uri() {
        let e = this.opts.secure ? "https" : "http";
        let r = this.query || {};
        if (this.opts.timestampRequests !== false) {
            r[this.opts.timestampParam] = Ac();
        }
        if (!this.supportsBinary && !r.sid) {
            r.b64 = 1;
        }
        return this.createUri(e, r);
    }
};
a_2(Eh, "Polling");
const to = Eh;
let Z_ = false;
try {
    Z_ = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest;
} catch  {}
const X_ = Z_;
function jB() {}
a_2(jB, "empty");
const Oh = class Oh extends to {
    constructor(e){
        super(e);
        if (typeof location !== "undefined") {
            let r = location.protocol === "https:";
            let n = location.port;
            if (!n) {
                n = r ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && e.hostname !== location.hostname || n !== e.port;
        }
    }
    doWrite(e, r) {
        let n = this.request({
            method: "POST",
            data: e
        });
        n.on("success", r);
        n.on("error", (s, o)=>{
            this.onError("xhr post error", s, o);
        });
    }
    doPoll() {
        let e = this.request();
        e.on("data", this.onData.bind(this));
        e.on("error", (r, n)=>{
            this.onError("xhr poll error", r, n);
        });
        this.pollXhr = e;
    }
};
a_2(Oh, "BaseXHR");
const Ah = Oh;
const Ci = class Ci extends Re {
    constructor(e, r, n){
        super();
        this.createRequest = e;
        er(this, n);
        this._opts = n;
        this._method = n.method || "GET";
        this._uri = r;
        this._data = n.data !== undefined ? n.data : null;
        this._create();
    }
    _create() {
        let e;
        let r = Ec(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        let n = this._xhr = this.createRequest(r);
        try {
            n.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    if (n.setDisableHeaderCheck) {
                        n.setDisableHeaderCheck(true);
                    }
                    for(let s in this._opts.extraHeaders){
                        if (this._opts.extraHeaders.hasOwnProperty(s)) {
                            n.setRequestHeader(s, this._opts.extraHeaders[s]);
                        }
                    }
                }
            } catch  {}
            if (this._method === "POST") {
                try {
                    n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch  {}
            }
            try {
                n.setRequestHeader("Accept", "*/*");
            } catch  {}
            if (!((e = this._opts.cookieJar) === null || e === undefined)) {
                e.addCookies(n);
            }
            if ("withCredentials" in n) {
                n.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                n.timeout = this._opts.requestTimeout;
            }
            n.onreadystatechange = ()=>{
                var s;
                n.readyState === 3 && ((s = this._opts.cookieJar) === null || s === undefined || s.parseCookies(n.getResponseHeader("set-cookie")));
                n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(()=>{
                    this._onError(typeof n.status === "number" ? n.status : 0);
                }, 0));
            };
            n.send(this._data);
        } catch (error) {
            this.setTimeoutFn(()=>{
                this._onError(error);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Ci.requestsCount++;
            Ci.requests[this._index] = this;
        }
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr);
        this._cleanup(true);
    }
    _cleanup(e) {
        if (!(typeof this._xhr === "undefined" || this._xhr === null)) {
            this._xhr.onreadystatechange = jB;
            if (e) {
                try {
                    this._xhr.abort();
                } catch  {}
            }
            typeof document !== "undefined" && delete Ci.requests[this._index];
            this._xhr = null;
        }
    }
    _onLoad() {
        let responseText = this._xhr.responseText;
        if (responseText !== null) {
            this.emitReserved("data", responseText);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    abort() {
        this._cleanup();
    }
};
a_2(Ci, "Request");
const _r = Ci;
_r.requestsCount = 0;
_r.requests = {};
if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
        attachEvent("onunload", eC);
    } else if (typeof addEventListener === "function") {
        let t = "onpagehide" in nt ? "pagehide" : "unload";
        addEventListener(t, eC, false);
    }
}
function eC() {
    for(let t in _r.requests){
        if (_r.requests.hasOwnProperty(t)) {
            _r.requests[t].abort();
        }
    }
}
a_2(eC, "unloadHandler");
const NB = (()=>{
    let t = tC({
        xdomain: false
    });
    return t && t.responseType !== null;
})();
const Lh = class Lh extends Ah {
    constructor(e){
        super(e);
        let r = e && e.forceBase64;
        this.supportsBinary = NB && !r;
    }
    request(e = {}) {
        Object.assign(e, {
            xd: this.xd
        }, this.opts);
        return new _r(tC, this.uri(), e);
    }
};
a_2(Lh, "XHR");
const polling = Lh;
function tC({ xdomain }) {
    try {
        if (typeof XMLHttpRequest !== "undefined" && (!xdomain || X_)) {
            return new XMLHttpRequest;
        }
    } catch  {}
    if (!xdomain) {
        try {
            return new nt[[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch  {}
    }
}
a_2(tC, "newRequest");
const rC = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
const Mh = class Mh extends tr {
    get name() {
        return "websocket";
    }
    doOpen() {
        let e = this.uri();
        let protocols = this.opts.protocols;
        let n = rC ? {} : Ec(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            n.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(e, protocols, n);
        } catch (error) {
            return this.emitReserved("error", error);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (context)=>this.onClose({
                description: "websocket connection closed",
                context
            });
        this.ws.onmessage = (e)=>this.onData(e.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(e) {
        this.writable = false;
        for(let r = 0; r < e.length; r++){
            let n = e[r];
            let s = r === e.length - 1;
            Zs(n, this.supportsBinary, (o)=>{
                try {
                    this.doWrite(n, o);
                } catch  {}
                if (s) {
                    Xt(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = ()=>{};
            this.ws.close();
            this.ws = null;
        }
    }
    uri() {
        let e = this.opts.secure ? "wss" : "ws";
        let r = this.query || {};
        if (this.opts.timestampRequests) {
            r[this.opts.timestampParam] = Ac();
        }
        if (!this.supportsBinary) {
            r.b64 = 1;
        }
        return this.createUri(e, r);
    }
};
a_2(Mh, "BaseWS");
const Rh = Mh;
const Th = nt.WebSocket || nt.MozWebSocket;
const Fh = class Fh extends Rh {
    createSocket(e, r, n) {
        if (rC) {
            return new Th(e, r, n);
        }
        if (r) {
            return new Th(e, r);
        }
        return new Th(e);
    }
    doWrite(e, r) {
        this.ws.send(r);
    }
};
a_2(Fh, "WS");
const websocket = Fh;
const Dh = class Dh extends tr {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (error) {
            return this.emitReserved("error", error);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((e)=>{
            this.onError("webtransport error", e);
        });
        this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((e)=>{
                let r = V_(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                let n = e.readable.pipeThrough(r).getReader();
                let s = Y_();
                s.readable.pipeTo(e.writable);
                this._writer = s.writable.getWriter();
                let o = a_2(()=>{
                    n.read().then(({ done, value })=>{
                        if (!done) {
                            this.onPacket(value);
                            o();
                        }
                    }).catch((c)=>{});
                }, "read");
                o();
                let f = {
                    type: "open"
                };
                if (this.query.sid) {
                    f.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(f).then(()=>this.onOpen());
            });
        });
    }
    write(e) {
        this.writable = false;
        for(let r = 0; r < e.length; r++){
            let n = e[r];
            let s = r === e.length - 1;
            this._writer.write(n).then(()=>{
                if (s) {
                    Xt(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        let e;
        if (!((e = this._transport) === null || e === undefined)) {
            e.close();
        }
    }
};
a_2(Dh, "WT");
const Ih = {
    websocket,
    webtransport: Dh,
    polling
};
const BB = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const UB = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
];
function ki(t) {
    if (t.length > 8000) {
        throw "URI too long";
    }
    let e = t;
    let r = t.indexOf("[");
    let n = t.indexOf("]");
    if (r != -1 && n != -1) {
        t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length);
    }
    let s = BB.exec(t || "");
    let o = {};
    let f = 14;
    while(f--){
        o[UB[f]] = s[f] || "";
    }
    if (r != -1 && n != -1) {
        o.source = e;
        o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":");
        o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        o.ipv6uri = true;
    }
    o.pathNames = qB(o, o.path);
    o.queryKey = $B(o, o.query);
    return o;
}
a_2(ki, "parse");
function qB(t, e) {
    let r = /\/{2,9}/g;
    let n = e.replace(r, "/").split("/");
    if (e.slice(0, 1) == "/" || e.length === 0) {
        n.splice(0, 1);
    }
    if (e.slice(-1) == "/") {
        n.splice(n.length - 1, 1);
    }
    return n;
}
a_2(qB, "pathNames");
function $B(t, e) {
    let r = {};
    e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (n, s, o)=>{
        if (s) {
            r[s] = o;
        }
    });
    return r;
}
a_2($B, "queryKey");
const jh = typeof addEventListener === "function" && typeof removeEventListener === "function";
const Lc = [];
if (jh) {
    addEventListener("offline", ()=>{
        Lc.forEach((t)=>t());
    }, false);
}
const Ei = class Ei extends Re {
    constructor(e, r){
        super();
        this.binaryType = G_;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        this._pingTimeoutTime = Infinity;
        if (e && typeof e === "object") {
            r = e;
            e = null;
        }
        if (e) {
            let n = ki(e);
            r.hostname = n.host;
            r.secure = n.protocol === "https" || n.protocol === "wss";
            r.port = n.port;
            if (n.query) {
                r.query = n.query;
            }
        } else {
            if (r.host) {
                r.hostname = ki(r.host).host;
            }
        }
        er(this, r);
        this.secure = r.secure ?? (typeof location !== "undefined" && location.protocol === "https:");
        if (r.hostname && !r.port) {
            r.port = this.secure ? "443" : "80";
        }
        this.hostname = r.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = r.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        r.transports.forEach((n)=>{
            let name = n.prototype.name;
            this.transports.push(name);
            this._transportsByName[name] = n;
        });
        this.opts = {
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false,
            ...r
        };
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = Q_(this.opts.query);
        }
        jh && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = ()=>{
            if (this.transport) {
                this.transport.removeAllListeners();
                this.transport.close();
            }
        }, addEventListener("beforeunload", this._beforeunloadEventListener, false)), this.hostname !== "localhost" && (this._offlineEventListener = ()=>{
            this._onClose("transport close", {
                description: "network connection lost"
            });
        }, Lc.push(this._offlineEventListener)));
        if (this.opts.withCredentials) {
            this._cookieJar = undefined;
        }
        this._open();
    }
    createTransport(e) {
        let r = {
            ...this.opts.query
        };
        r.EIO = Ch;
        r.transport = e;
        if (this.id) {
            r.sid = this.id;
        }
        let n = {
            ...this.opts,
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
            ...this.opts.transportOptions[e]
        };
        return new this._transportsByName[e](n);
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        let e = this.opts.rememberUpgrade && Ei.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        let r = this.createTransport(e);
        r.open();
        this.setTransport(r);
    }
    setTransport(e) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        this.transport = e;
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r)=>this._onClose("transport close", r));
    }
    onOpen() {
        this.readyState = "open";
        Ei.priorWebsocketSuccess = this.transport.name === "websocket";
        this.emitReserved("open");
        this.flush();
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.emitReserved("packet", e);
            this.emitReserved("heartbeat");
            switch(e.type){
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    let r = new Error("server error");
                    r.code = e.data;
                    this._onError(r);
                    break;
                case "message":
                    this.emitReserved("data", e.data);
                    this.emitReserved("message", e.data);
                    break;
            }
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e);
        this.id = e.sid;
        this.transport.query.sid = e.sid;
        this._pingInterval = e.pingInterval;
        this._pingTimeout = e.pingTimeout;
        this._maxPayload = e.maxPayload;
        this.onOpen();
        if (this.readyState !== "closed") {
            this._resetPingTimeout();
        }
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        let e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e;
        this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, e);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        this._prevBufferLen = 0;
        if (this.writeBuffer.length === 0) {
            this.emitReserved("drain");
        } else {
            this.flush();
        }
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            let e = this._getWritablePackets();
            this.transport.send(e);
            this._prevBufferLen = e.length;
            this.emitReserved("flush");
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) {
            return this.writeBuffer;
        }
        let r = 1;
        for(let n = 0; n < this.writeBuffer.length; n++){
            let s = this.writeBuffer[n].data;
            if (s) {
                r += K_(s);
            }
            if (n > 0 && r > this._maxPayload) {
                return this.writeBuffer.slice(0, n);
            }
            r += 2;
        }
        return this.writeBuffer;
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) {
            return true;
        }
        let e = Date.now() > this._pingTimeoutTime;
        if (e) {
            this._pingTimeoutTime = 0;
            Xt(()=>{
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return e;
    }
    write(e, r, n) {
        this._sendPacket("message", e, r, n);
        return this;
    }
    send(e, r, n) {
        this._sendPacket("message", e, r, n);
        return this;
    }
    _sendPacket(e, r, n, s) {
        if (typeof r === "function") {
            s = r;
            r = undefined;
        }
        if (typeof n === "function") {
            s = n;
            n = null;
        }
        if (this.readyState === "closing" || this.readyState === "closed") {
            return;
        }
        n = n || {};
        n.compress = n.compress !== false;
        let o = {
            type: e,
            data: r,
            options: n
        };
        this.emitReserved("packetCreate", o);
        this.writeBuffer.push(o);
        if (s) {
            this.once("flush", s);
        }
        this.flush();
    }
    close() {
        let e = a_2(()=>{
            this._onClose("forced close");
            this.transport.close();
        }, "close");
        let r = a_2(()=>{
            this.off("upgrade", r);
            this.off("upgradeError", r);
            e();
        }, "cleanupAndClose");
        let n = a_2(()=>{
            this.once("upgrade", r);
            this.once("upgradeError", r);
        }, "waitForUpgrade");
        if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", ()=>{
                    if (this.upgrading) {
                        n();
                    } else {
                        e();
                    }
                });
            } else if (this.upgrading) {
                n();
            } else {
                e();
            }
        }
        return this;
    }
    _onError(e) {
        Ei.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", e);
        this._onClose("transport error", e);
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (jh && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, false), this._offlineEventListener)) {
                let n = Lc.indexOf(this._offlineEventListener);
                if (n !== -1) {
                    Lc.splice(n, 1);
                }
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", e, r);
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
};
a_2(Ei, "SocketWithoutUpgrade");
const Hr = Ei;
Hr.protocol = Ch;
const Nh = class Nh extends Hr {
    constructor(){
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if (this.readyState === "open" && this.opts.upgrade) {
            for(let e = 0; e < this._upgrades.length; e++){
                this._probe(this._upgrades[e]);
            }
        }
    }
    _probe(e) {
        let r = this.createTransport(e);
        let n = false;
        Hr.priorWebsocketSuccess = false;
        let s = a_2(()=>{
            if (!n) {
                r.send([
                    {
                        type: "ping",
                        data: "probe"
                    }
                ]);
                r.once("packet", (y)=>{
                    if (!n) {
                        if (y.type === "pong" && y.data === "probe") {
                            this.upgrading = true;
                            this.emitReserved("upgrading", r);
                            if (!r) {
                                return;
                            }
                            Hr.priorWebsocketSuccess = r.name === "websocket";
                            this.transport.pause(()=>{
                                n || this.readyState !== "closed" && (b(), this.setTransport(r), r.send([
                                    {
                                        type: "upgrade"
                                    }
                                ]), this.emitReserved("upgrade", r), r = null, this.upgrading = false, this.flush());
                            });
                        } else {
                            let w = new Error("probe error");
                            w.transport = r.name;
                            this.emitReserved("upgradeError", w);
                        }
                    }
                });
            }
        }, "onTransportOpen");
        function o() {
            if (!n) {
                n = true;
                b();
                r.close();
                r = null;
            }
        }
        a_2(o, "freezeTransport");
        let f = a_2((y)=>{
            let w = new Error(`probe error: ${y}`);
            w.transport = r.name;
            o();
            this.emitReserved("upgradeError", w);
        }, "onerror");
        function c() {
            f("transport closed");
        }
        a_2(c, "onTransportClose");
        function u() {
            f("socket closed");
        }
        a_2(u, "onclose");
        function d(y) {
            if (r && y.name !== r.name) {
                o();
            }
        }
        a_2(d, "onupgrade");
        let b = a_2(()=>{
            r.removeListener("open", s);
            r.removeListener("error", f);
            r.removeListener("close", c);
            this.off("close", u);
            this.off("upgrading", d);
        }, "cleanup");
        r.once("open", s);
        r.once("error", f);
        r.once("close", c);
        this.once("close", u);
        this.once("upgrading", d);
        if (this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport") {
            this.setTimeoutFn(()=>{
                if (!n) {
                    r.open();
                }
            }, 200);
        } else {
            r.open();
        }
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades);
        super.onHandshake(e);
    }
    _filterUpgrades(e) {
        let r = [];
        for(let n = 0; n < e.length; n++){
            if (~this.transports.indexOf(e[n])) {
                r.push(e[n]);
            }
        }
        return r;
    }
};
a_2(Nh, "SocketWithUpgrade");
const Tc = Nh;
const Bh = class Bh extends Tc {
    constructor(e, r = {}){
        let n = typeof e === "object";
        let s = n ? {
            ...e
        } : {
            ...r
        };
        if (!s.transports || s.transports && typeof s.transports[0] === "string") {
            s.transports = (s.transports || [
                "polling",
                "websocket",
                "webtransport"
            ]).map((o)=>Ih[o]).filter((o)=>!!o);
        }
        super(n ? s : e, s);
    }
};
a_2(Bh, "Socket");
const Ai = Bh;
const gee = Ai.protocol;
function nC(t, e = "", r) {
    let n = t;
    r = r || typeof location !== "undefined" && location;
    if (t == null) {
        t = `${r.protocol}//${r.host}`;
    }
    if (typeof t === "string") {
        t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t);
        /^(https?|wss?):\/\//.test(t) || (typeof r !== "undefined" ? t = `${r.protocol}//${t}` : t = `https://${t}`);
        n = ki(t);
    }
    n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
    n.path = n.path || "/";
    let o = n.host.indexOf(":") !== -1 ? `[${n.host}]` : n.host;
    n.id = `${n.protocol}://${o}:${n.port}${e}`;
    n.href = `${n.protocol}://${o}${r && r.port === n.port ? "" : `:${n.port}`}`;
    return n;
}
a_2(nC, "url");
const Hh = {};
d_1(Hh, {
    Decoder: ()=>$h,
    Encoder: ()=>qh,
    PacketType: ()=>pe,
    isPacketValid: ()=>QB,
    protocol: ()=>cC
});
a_2(no, "isBinary");
function ro(t, e) {
    if (!t || typeof t !== "object") {
        return false;
    }
    if (Array.isArray(t)) {
        for(let r = 0, n = t.length; r < n; r++){
            if (ro(t[r])) {
                return true;
            }
        }
        return false;
    }
    if (no(t)) {
        return true;
    }
    if (t.toJSON && typeof t.toJSON === "function" && arguments.length === 1) {
        return ro(t.toJSON(), true);
    }
    for(let r in t){
        if (Object.prototype.hasOwnProperty.call(t, r) && ro(t[r])) {
            return true;
        }
    }
    return false;
}
a_2(ro, "hasBinary");
function sC(t) {
    let buffers = [];
    let t_data = t.data;
    let packet = t;
    packet.data = Rc(t_data, buffers);
    packet.attachments = buffers.length;
    return {
        packet,
        buffers
    };
}
a_2(sC, "deconstructPacket");
function Rc(t, e, r) {
    if (!t) {
        return t;
    }
    if (no(t)) {
        let n = {
            _placeholder: true,
            num: e.length
        };
        e.push(t);
        return n;
    } else if (Array.isArray(t)) {
        let n = new Array(t.length);
        for(let s = 0; s < t.length; s++){
            n[s] = Rc(t[s], e);
        }
        return n;
    } else if (typeof t === "object" && !(t instanceof Date)) {
        if (t.toJSON && typeof t.toJSON === "function" && !r) {
            return Rc(t.toJSON(), e, true);
        }
        let n = {};
        for(let s in t){
            if (Object.prototype.hasOwnProperty.call(t, s)) {
                n[s] = Rc(t[s], e);
            }
        }
        return n;
    }
    return t;
}
a_2(Rc, "_deconstructPacket");
function oC(t, e) {
    t.data = Uh(t.data, e);
    delete t.attachments;
    return t;
}
a_2(oC, "reconstructPacket");
function Uh(t, e) {
    if (!t) {
        return t;
    }
    if (t && t._placeholder === true) {
        if (typeof t.num === "number" && t.num >= 0 && t.num < e.length) {
            return e[t.num];
        }
        throw new Error("illegal attachments");
    } else if (Array.isArray(t)) {
        for(let r = 0; r < t.length; r++){
            t[r] = Uh(t[r], e);
        }
    } else if (typeof t === "object") {
        for(let r in t){
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                t[r] = Uh(t[r], e);
            }
        }
    }
    return t;
}
a_2(Uh, "_reconstructPacket");
var aC = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
var cC = 5;
var pe = {
    CONNECT: 0,
    0: "CONNECT",
    DISCONNECT: 1,
    1: "DISCONNECT",
    EVENT: 2,
    2: "EVENT",
    ACK: 3,
    3: "ACK",
    CONNECT_ERROR: 4,
    4: "CONNECT_ERROR",
    BINARY_EVENT: 5,
    5: "BINARY_EVENT",
    BINARY_ACK: 6,
    6: "BINARY_ACK"
};
const Wh = class Wh {
    constructor(e){
        this.replacer = e;
    }
    encode(e) {
        if ((e.type === pe.EVENT || e.type === pe.ACK) && ro(e)) {
            return this.encodeAsBinary({
                type: e.type === pe.EVENT ? pe.BINARY_EVENT : pe.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id
            });
        }
        return [
            this.encodeAsString(e)
        ];
    }
    encodeAsString(e) {
        let r = `${e.type}`;
        if (e.type === pe.BINARY_EVENT || e.type === pe.BINARY_ACK) {
            r += `${e.attachments}-`;
        }
        if (e.nsp && e.nsp !== "/") {
            r += `${e.nsp},`;
        }
        if (e.id != null) {
            r += e.id;
        }
        if (e.data != null) {
            r += JSON.stringify(e.data, this.replacer);
        }
        return r;
    }
    encodeAsBinary(e) {
        let r = sC(e);
        let n = this.encodeAsString(r.packet);
        let r_buffers = r.buffers;
        r_buffers.unshift(n);
        return r_buffers;
    }
};
a_2(Wh, "Encoder");
var qh = Wh;
const Fc = class Fc extends Re {
    constructor(reviver){
        super();
        this.opts = {
            reviver: undefined,
            maxAttachments: 10,
            ...typeof reviver === "function" ? {
                reviver
            } : reviver
        };
    }
    add(e) {
        let r;
        if (typeof e === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            r = this.decodeString(e);
            let n = r.type === pe.BINARY_EVENT;
            if (n || r.type === pe.BINARY_ACK) {
                r.type = n ? pe.EVENT : pe.ACK;
                this.reconstructor = new zh(r);
            } else {
                super.emitReserved("decoded", r);
            }
        } else if (no(e) || e.base64) {
            if (this.reconstructor) {
                r = this.reconstructor.takeBinaryData(e);
                if (r) {
                    this.reconstructor = null;
                    super.emitReserved("decoded", r);
                }
            } else {
                throw new Error("got binary data when not reconstructing a packet");
            }
        } else {
            throw new Error(`Unknown type: ${e}`);
        }
    }
    decodeString(e) {
        let r = 0;
        let n = {
            type: Number(e.charAt(0))
        };
        if (pe[n.type] === undefined) {
            throw new Error(`unknown packet type ${n.type}`);
        }
        if (n.type === pe.BINARY_EVENT || n.type === pe.BINARY_ACK) {
            let o = r + 1;
            while(e.charAt(++r) !== "-" && r != e.length);
            let f = e.substring(o, r);
            if (f != Number(f) || e.charAt(r) !== "-") {
                throw new Error("Illegal attachments");
            }
            let c = Number(f);
            if (!uC(c) || c < 1) {
                throw new Error("Illegal attachments");
            }
            if (c > this.opts.maxAttachments) {
                throw new Error("too many attachments");
            }
            n.attachments = c;
        }
        if (e.charAt(r + 1) === "/") {
            let o = r + 1;
            while(++r && !(e.charAt(r) === "," || r === e.length));
            n.nsp = e.substring(o, r);
        } else {
            n.nsp = "/";
        }
        let s = e.charAt(r + 1);
        if (s !== "" && Number(s) == s) {
            let o = r + 1;
            while(++r){
                let f = e.charAt(r);
                if (f == null || Number(f) != f) {
                    --r;
                    break;
                }
                if (r === e.length) {
                    break;
                }
            }
            n.id = Number(e.substring(o, r + 1));
        }
        if (e.charAt(++r)) {
            let o = this.tryParse(e.substr(r));
            if (Fc.isPayloadValid(n.type, o)) {
                n.data = o;
            } else {
                throw new Error("invalid payload");
            }
        }
        return n;
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.opts.reviver);
        } catch  {
            return false;
        }
    }
    static isPayloadValid(e, r) {
        switch(e){
            case pe.CONNECT:
                return Mc(r);
            case pe.DISCONNECT:
                return r === undefined;
            case pe.CONNECT_ERROR:
                return typeof r === "string" || Mc(r);
            case pe.EVENT:
            case pe.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] === "number" || typeof r[0] === "string" && aC.indexOf(r[0]) === -1);
            case pe.ACK:
            case pe.BINARY_ACK:
                return Array.isArray(r);
        }
    }
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
};
a_2(Fc, "Decoder");
var $h = Fc;
const Yh = class Yh {
    constructor(e){
        this.packet = e;
        this.buffers = [];
        this.reconPack = e;
    }
    takeBinaryData(e) {
        this.buffers.push(e);
        if (this.buffers.length === this.reconPack.attachments) {
            let r = oC(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return r;
        }
        return null;
    }
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
};
a_2(Yh, "BinaryReconstructor");
var zh = Yh;
function GB(t) {
    return typeof t === "string";
}
a_2(GB, "isNamespaceValid");
a_2(KB, "isAckIdValid");
function Mc(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
}
a_2(Mc, "isObject");
function JB(t, e) {
    switch(t){
        case pe.CONNECT:
            return e === undefined || Mc(e);
        case pe.DISCONNECT:
            return e === undefined;
        case pe.EVENT:
            return Array.isArray(e) && (typeof e[0] === "number" || typeof e[0] === "string" && aC.indexOf(e[0]) === -1);
        case pe.ACK:
            return Array.isArray(e);
        case pe.CONNECT_ERROR:
            return typeof e === "string" || Mc(e);
        default:
            return false;
    }
}
a_2(JB, "isDataValid");
function QB(t) {
    return GB(t.nsp) && KB(t.id) && JB(t.type, t.data);
}
a_2(QB, "isPacketValid");
function dt(t, e, r) {
    t.on(e, r);
    return a_2(()=>{
        t.off(e, r);
    }, "subDestroy");
}
a_2(dt, "on");
const ZB = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
const Vh = class Vh extends Re {
    constructor(e, r, n){
        super();
        this.connected = false;
        this.recovered = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this._queue = [];
        this._queueSeq = 0;
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = e;
        this.nsp = r;
        if (n && n.auth) {
            this.auth = n.auth;
        }
        this._opts = {
            ...n
        };
        if (this.io._autoConnect) {
            this.open();
        }
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) {
            return;
        }
        let e = this.io;
        this.subs = [
            dt(e, "open", this.onopen.bind(this)),
            dt(e, "packet", this.onpacket.bind(this)),
            dt(e, "error", this.onerror.bind(this)),
            dt(e, "close", this.onclose.bind(this))
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        if (this.connected) {
            return this;
        }
        this.subEvents();
        if (!this.io._reconnecting) {
            this.io.open();
        }
        if (this.io._readyState === "open") {
            this.onopen();
        }
        return this;
    }
    open() {
        return this.connect();
    }
    send(...e) {
        e.unshift("message");
        this.emit(...e);
        return this;
    }
    emit(e, ...r) {
        let o;
        if (ZB.hasOwnProperty(e)) {
            throw new Error(`"${e.toString()}" is a reserved event name`);
        }
        r.unshift(e);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(r);
            return this;
        }
        let f = {
            type: pe.EVENT,
            data: r
        };
        f.options = {};
        f.options.compress = this.flags.compress !== false;
        if (typeof r[r.length - 1] === "function") {
            let b = this.ids++;
            let y = r.pop();
            this._registerAckCallback(b, y);
            f.id = b;
        }
        let c = this.io.engine?.transport?.writable;
        let u = this.connected && !(!((o = this.io.engine) === null || o === undefined) && o._hasPingExpired());
        this.flags.volatile && !c || (u ? (this.notifyOutgoingListeners(f), this.packet(f)) : this.sendBuffer.push(f));
        this.flags = {};
        return this;
    }
    _registerAckCallback(e, r) {
        let s = this.flags.timeout ?? this._opts.ackTimeout;
        if (s === undefined) {
            this.acks[e] = r;
            return;
        }
        let o = this.io.setTimeoutFn(()=>{
            delete this.acks[e];
            for(let c = 0; c < this.sendBuffer.length; c++){
                if (this.sendBuffer[c].id === e) {
                    this.sendBuffer.splice(c, 1);
                }
            }
            r.call(this, new Error("operation has timed out"));
        }, s);
        let f = a_2((...c)=>{
            this.io.clearTimeoutFn(o);
            r.apply(this, c);
        }, "fn");
        f.withError = true;
        this.acks[e] = f;
    }
    emitWithAck(e, ...r) {
        return new Promise((resolve, reject)=>{
            let o = a_2((f, c)=>{
                if (f) {
                    return reject(f);
                }
                return resolve(c);
            }, "fn");
            o.withError = true;
            r.push(o);
            this.emit(e, ...r);
        });
    }
    _addToQueue(e) {
        let r;
        if (typeof e[e.length - 1] === "function") {
            r = e.pop();
        }
        let n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args: e,
            flags: {
                fromQueue: true,
                ...this.flags
            }
        };
        e.push((s, ...o)=>{
            this._queue[0];
            if (s !== null) {
                if (n.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (r) {
                        r(s);
                    }
                }
            } else {
                this._queue.shift();
                if (r) {
                    r(null, ...o);
                }
            }
            n.pending = false;
            return this._drainQueue();
        });
        this._queue.push(n);
        this._drainQueue();
    }
    _drainQueue(e = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        let r = this._queue[0];
        if (!(r.pending && !e)) {
            r.pending = true;
            r.tryCount++;
            this.flags = r.flags;
            this.emit(...r.args);
        }
    }
    packet(e) {
        e.nsp = this.nsp;
        this.io._packet(e);
    }
    onopen() {
        if (typeof this.auth === "function") {
            this.auth((e)=>{
                this._sendConnectPacket(e);
            });
        } else {
            this._sendConnectPacket(this.auth);
        }
    }
    _sendConnectPacket(e) {
        this.packet({
            type: pe.CONNECT,
            data: this._pid ? {
                pid: this._pid,
                offset: this._lastOffset,
                ...e
            } : e
        });
    }
    onerror(e) {
        if (!this.connected) {
            this.emitReserved("connect_error", e);
        }
    }
    onclose(e, r) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", e, r);
        this._clearAcks();
    }
    _clearAcks() {
        Object.keys(this.acks).forEach((e)=>{
            if (!this.sendBuffer.some((n)=>String(n.id) === e)) {
                let n = this.acks[e];
                delete this.acks[e];
                if (n.withError) {
                    n.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    onpacket(e) {
        if (e.nsp === this.nsp) {
            switch(e.type){
                case pe.CONNECT:
                    if (e.data && e.data.sid) {
                        this.onconnect(e.data.sid, e.data.pid);
                    } else {
                        this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    }
                    break;
                case pe.EVENT:
                case pe.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case pe.ACK:
                case pe.BINARY_ACK:
                    this.onack(e);
                    break;
                case pe.DISCONNECT:
                    this.ondisconnect();
                    break;
                case pe.CONNECT_ERROR:
                    this.destroy();
                    let n = new Error(e.data.message);
                    n.data = e.data.data;
                    this.emitReserved("connect_error", n);
                    break;
            }
        }
    }
    onevent(e) {
        let r = e.data || [];
        if (e.id != null) {
            r.push(this.ack(e.id));
        }
        if (this.connected) {
            this.emitEvent(r);
        } else {
            this.receiveBuffer.push(Object.freeze(r));
        }
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            let r = this._anyListeners.slice();
            for (let n of r){
                n.apply(this, e);
            }
        }
        super.emit.apply(this, e);
        if (this._pid && e.length && typeof e[e.length - 1] === "string") {
            this._lastOffset = e[e.length - 1];
        }
    }
    ack(e) {
        let r = this;
        let n = false;
        return (...s)=>{
            if (!n) {
                n = true;
                r.packet({
                    type: pe.ACK,
                    id: e,
                    data: s
                });
            }
        };
    }
    onack(e) {
        let r = this.acks[e.id];
        if (typeof r === "function") {
            delete this.acks[e.id];
            if (r.withError) {
                e.data.unshift(null);
            }
            r.apply(this, e.data);
        }
    }
    onconnect(e, r) {
        this.id = e;
        this.recovered = r && this._pid === r;
        this._pid = r;
        this.connected = true;
        this.emitBuffered();
        this._drainQueue(true);
        this.emitReserved("connect");
    }
    emitBuffered() {
        this.receiveBuffer.forEach((e)=>this.emitEvent(e));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((e)=>{
            this.notifyOutgoingListeners(e);
            this.packet(e);
        });
        this.sendBuffer = [];
    }
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    destroy() {
        if (this.subs) {
            this.subs.forEach((e)=>e());
            this.subs = undefined;
        }
        this.io._destroy(this);
    }
    disconnect() {
        if (this.connected) {
            this.packet({
                type: pe.DISCONNECT
            });
        }
        this.destroy();
        if (this.connected) {
            this.onclose("io client disconnect");
        }
        return this;
    }
    close() {
        return this.disconnect();
    }
    compress(e) {
        this.flags.compress = e;
        return this;
    }
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    timeout(e) {
        this.flags.timeout = e;
        return this;
    }
    onAny(e) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(e);
        return this;
    }
    prependAny(e) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(e);
        return this;
    }
    offAny(e) {
        if (!this._anyListeners) {
            return this;
        }
        if (e) {
            let r = this._anyListeners;
            for(let n = 0; n < r.length; n++){
                if (e === r[n]) {
                    r.splice(n, 1);
                    return this;
                }
            }
        } else {
            this._anyListeners = [];
        }
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(e);
        return this;
    }
    prependAnyOutgoing(e) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(e);
        return this;
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (e) {
            let r = this._anyOutgoingListeners;
            for(let n = 0; n < r.length; n++){
                if (e === r[n]) {
                    r.splice(n, 1);
                    return this;
                }
            }
        } else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let r = this._anyOutgoingListeners.slice();
            for (let n of r){
                n.apply(this, e.data);
            }
        }
    }
};
a_2(Vh, "Socket");
const Socket_1 = Vh;
function Wr(t) {
    t = t || {};
    this.ms = t.min || 100;
    this.max = t.max || 10000;
    this.factor = t.factor || 2;
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0;
    this.attempts = 0;
}
a_2(Wr, "Backoff");
Wr.prototype.duration = function() {
    let t = this.ms * this.factor ** this.attempts++;
    if (this.jitter) {
        const e = Math.random();
        const r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r;
    }
    return Math.min(t, this.max) | 0;
};
Wr.prototype.reset = function() {
    this.attempts = 0;
};
Wr.prototype.setMin = function(t) {
    this.ms = t;
};
Wr.prototype.setMax = function(t) {
    this.max = t;
};
Wr.prototype.setJitter = function(t) {
    this.jitter = t;
};
const Gh = class Gh extends Re {
    constructor(e, r){
        super();
        this.nsps = {};
        this.subs = [];
        if (e && typeof e === "object") {
            r = e;
            e = undefined;
        }
        r = r || {};
        r.path = r.path || "/socket.io";
        this.opts = r;
        er(this, r);
        this.reconnection(r.reconnection !== false);
        this.reconnectionAttempts(r.reconnectionAttempts || Infinity);
        this.reconnectionDelay(r.reconnectionDelay || 1000);
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5000);
        this.randomizationFactor(r.randomizationFactor ?? 0.5);
        this.backoff = new Wr({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(r.timeout ?? 20000);
        this._readyState = "closed";
        this.uri = e;
        let s = r.parser || Hh;
        this.encoder = new s.Encoder;
        this.decoder = new s.Decoder;
        this._autoConnect = r.autoConnect !== false;
        if (this._autoConnect) {
            this.open();
        }
    }
    reconnection(e) {
        if (arguments.length) {
            this._reconnection = !!e;
            if (!e) {
                this.skipReconnect = true;
            }
            return this;
        }
        return this._reconnection;
    }
    reconnectionAttempts(e) {
        if (e === undefined) {
            return this._reconnectionAttempts;
        }
        this._reconnectionAttempts = e;
        return this;
    }
    reconnectionDelay(e) {
        let r;
        if (e === undefined) {
            return this._reconnectionDelay;
        }
        this._reconnectionDelay = e;
        if (!((r = this.backoff) === null || r === undefined)) {
            r.setMin(e);
        }
        return this;
    }
    randomizationFactor(e) {
        let r;
        if (e === undefined) {
            return this._randomizationFactor;
        }
        this._randomizationFactor = e;
        if (!((r = this.backoff) === null || r === undefined)) {
            r.setJitter(e);
        }
        return this;
    }
    reconnectionDelayMax(e) {
        let r;
        if (e === undefined) {
            return this._reconnectionDelayMax;
        }
        this._reconnectionDelayMax = e;
        if (!((r = this.backoff) === null || r === undefined)) {
            r.setMax(e);
        }
        return this;
    }
    timeout(e) {
        if (arguments.length) {
            this._timeout = e;
            return this;
        }
        return this._timeout;
    }
    maybeReconnectOnOpen() {
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
        }
    }
    open(e) {
        if (~this._readyState.indexOf("open")) {
            return this;
        }
        this.engine = new Ai(this.uri, this.opts);
        let engine = this.engine;
        let n = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        let s = dt(engine, "open", ()=>{
            n.onopen();
            if (e) {
                e();
            }
        });
        let o = a_2((c)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", c);
            if (e) {
                e(c);
            } else {
                this.maybeReconnectOnOpen();
            }
        }, "onError");
        let f = dt(engine, "error", o);
        if (this._timeout !== false) {
            let c = this._timeout;
            let u = this.setTimeoutFn(()=>{
                s();
                o(new Error("timeout"));
                engine.close();
            }, c);
            if (this.opts.autoUnref) {
                u.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(u);
            });
        }
        this.subs.push(s);
        this.subs.push(f);
        return this;
    }
    connect(e) {
        return this.open(e);
    }
    onopen() {
        this.cleanup();
        this._readyState = "open";
        this.emitReserved("open");
        let engine = this.engine;
        this.subs.push(dt(engine, "ping", this.onping.bind(this)), dt(engine, "data", this.ondata.bind(this)), dt(engine, "error", this.onerror.bind(this)), dt(engine, "close", this.onclose.bind(this)), dt(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(e) {
        try {
            this.decoder.add(e);
        } catch (error) {
            this.onclose("parse error", error);
        }
    }
    ondecoded(e) {
        Xt(()=>{
            this.emitReserved("packet", e);
        }, this.setTimeoutFn);
    }
    onerror(e) {
        this.emitReserved("error", e);
    }
    socket(e, r) {
        let n = this.nsps[e];
        if (n) {
            if (this._autoConnect && !n.active) {
                n.connect();
            }
        } else {
            n = new Socket_1(this, e, r);
            this.nsps[e] = n;
        }
        return n;
    }
    _destroy(e) {
        let r = Object.keys(this.nsps);
        for (let n of r){
            if (this.nsps[n].active) {
                return;
            }
        }
        this._close();
    }
    _packet(e) {
        let r = this.encoder.encode(e);
        for(let n = 0; n < r.length; n++){
            this.engine.write(r[n], e.options);
        }
    }
    cleanup() {
        this.subs.forEach((e)=>e());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    disconnect() {
        return this._close();
    }
    onclose(e, r) {
        let n;
        this.cleanup();
        if (!((n = this.engine) === null || n === undefined)) {
            n.close();
        }
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", e, r);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) {
            return this;
        }
        let e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            let r = this.backoff.duration();
            this._reconnecting = true;
            let n = this.setTimeoutFn(()=>{
                if (!e.skipReconnect) {
                    this.emitReserved("reconnect_attempt", e.backoff.attempts);
                    if (!e.skipReconnect) {
                        e.open((s)=>{
                            if (s) {
                                e._reconnecting = false;
                                e.reconnect();
                                this.emitReserved("reconnect_error", s);
                            } else {
                                e.onreconnect();
                            }
                        });
                    }
                }
            }, r);
            if (this.opts.autoUnref) {
                n.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(n);
            });
        }
    }
    onreconnect() {
        let attempts = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempts);
    }
};
a_2(Gh, "Manager");
const Manager = Gh;
var io = {};
function so(t, e) {
    if (typeof t === "object") {
        e = t;
        t = undefined;
    }
    e = e || {};
    let r = nC(t, e.path || "/socket.io");
    let r_source = r.source;
    let s = r.id;
    let r_path = r.path;
    let f = io[s] && r_path in io[s].nsps;
    let c = e.forceNew || e["force new connection"] || e.multiplex === false || f;
    let u;
    if (c) {
        u = new Manager(r_source, e);
    } else {
        if (!io[s]) {
            io[s] = new Manager(r_source, e);
        }
        u = io[s];
    }
    if (r.query && !e.query) {
        e.query = r.queryKey;
    }
    return u.socket(r.path, e);
}
a_2(so, "lookup");
Object.assign(so, {
    Manager,
    Socket: Socket_1,
    io: so,
    connect: so
});
const PC = e_2(ed(), 1);
const w2 = r("src/client/js/stores/socket/join-room.js");
function td(t) {
    function e() {
        if (!Ya.Socket.connected) {
            return;
        }
        let n = Ya.Layout.get();
        let projectId = (Ya.CurrentProject.get() || {}).id;
        let o = n !== "page" ? null : (Ya.Page.get() || {}).id;
        return r({
            projectId,
            pageId: o,
            projectUpdatesStream: n === "stream"
        });
    }
    a_2(e, "changeRoom");
    async function r({ pageId, projectId, projectUpdatesStream }) {
        try {
            let f = await PC.default(t, {
                timeout: 5000
            }).request("room:join", {
                pageId,
                projectId,
                projectUpdatesStream
            });
            w2("room:join", f);
        } catch (error) {
            return console.error("room:join failed", error.stack || error.errors || error);
        }
    }
    a_2(r, "joinRoom");
    t.on("connect", e);
    t.once("connect", ()=>{
        Ya.Page.addChangeListener(({ event })=>{
            if (!/^setTitle/.test(event)) {
                e();
            }
        });
        let n;
        Ya.CurrentProject.addChangeListener(()=>{
            if (n !== Ya.CurrentProject.name) {
                e();
                n = Ya.CurrentProject.name;
            }
        });
        Ya.Layout.addChangeListener(e);
    });
}
a_2(td, "JoinRoomSocket");
const v2 = r("src/client/js/stores/socket/commit.js");
const S2 = new Date;
function rd(t) {
    t.on("commit", (e)=>{
        v2("received commit", e);
        if (e.kind === "page" && e.changes && e.changes.length > 0) {
            Ya.Sync.taskQueue.doFirst("receive", [
                e
            ]);
        }
        if (e.cursor != null) {
            Ya.SharedCursor.onSync(e);
        }
    });
    t.on("connect", ()=>{
        if (Ya.Layout.get() === "page" && new Date - S2 > 60 * 1000) {
            Ya.Sync.taskQueue.doFirst("pull");
        }
    });
}
a_2(rd, "CommitSocket");
const x2 = r("src/client/js/stores/socket/cursor.js");
function nd(t) {
    t.on("cursor", (e)=>{
        x2("received", e);
        Ya.SharedCursor.onSync(e);
    });
    t.on("disconnect", ()=>{
        Ya.SharedCursor.clear();
    });
}
a_2(nd, "CursorSocket");
const kC = r("src/client/js/stores/socket/quick-search.js");
function id(t) {
    t.on("quick-search:commit", (e)=>{
        kC("commit", e);
        let { pageId, projectId } = e;
        if (Ya.CurrentProject.get().id !== projectId) {
            return;
        }
        Ya.RelatedPage.patchQuickSearchSocket(e);
        Ya.PageList.patchQuickSearchSocket(e);
        if (e.changes.find((o)=>o.deleted)) {
            return Ya.QuickSearch.delete(pageId);
        }
        let s = Object.create(null);
        for (let o of e.changes){
            if (typeof o.title === "string") {
                s.title = o.title;
            }
            if (Array.isArray(o.links)) {
                s.links = o.links;
            }
            if (typeof o.image === "string" || o.image === null) {
                s.image = o.image;
            }
        }
        if (Object.keys(s).length > 0) {
            Ya.QuickSearch.update(pageId, s);
        }
    });
    t.on("quick-search:replace-link", ({ from, to })=>{
        kC("replace-link", {
            from,
            to
        });
        Ya.QuickSearch.updateLink({
            from,
            to
        });
    });
}
a_2(id, "QuickSearchSocket");
function sd(t) {
    t.on("projectUpdatesStream:commit", (e)=>{
        if (e.kind === "page") {
            Ya.Stream.patch(e);
        }
    });
    t.on("projectUpdatesStream:event", (e)=>{
        Ya.Stream.patchEvent(e);
    });
}
a_2(sd, "ProjectUpdateStreamSocket");
const jc = r("src/client/js/stores/socket/inactive-window.js");
const _2 = 3600 * 1000;
function EC({ socket, store }) {
    let r = null;
    let n = a_2(()=>{
        jc("window.onBlur");
        !r && (socket.disconnected || (r = setTimeout(()=>{
            r = null;
            store.inactiveWindow = true;
            jc("disconnect");
            socket.disconnect();
        }, _2)));
    }, "onBlur");
    let s = a_2(()=>{
        jc("window.onFocus");
        store.inactiveWindow = false;
        if (r) {
            clearTimeout(r);
            r = null;
        }
        if (socket.disconnected) {
            if (store.disabledByProject) {
                return;
            }
            jc("connect");
            socket.connect();
        }
    }, "onFocus");
    window.addEventListener("blur", n);
    window.addEventListener("focus", s);
}
a_2(EC, "DisconnectInactiveWindowSocket");
const Nc = r("src/client/js/stores/socket/infobox.ts");
function AC(t) {
    t.on("infobox:updating", (r)=>{
        Nc("infobox:updating", r);
        Ya.Infobox.setUpdating(r);
    });
    t.on("infobox:reload", async (r)=>{
        Nc("infobox:reload");
        let n;
        try {
            n = await Ya.Infobox.fetch();
        } catch (error) {
            if (Ye.isCancel(error)) {
                return Nc("canceled");
            }
            throw error;
        }
        let s = r?.socketId === Ya.Socket.get()?.id ? "self" : undefined;
        Ya.Infobox.set(n, {
            by: s
        });
        if (typeof r?.updating === "boolean") {
            Ya.Infobox.setUpdating(r.updating);
        }
    });
    let e = G_1(async ()=>{
        let r = await Ya.RelatedPage.fetchRelatedPages();
        Ya.RelatedPage.compile({
            links: Ya.Page.links,
            relatedPages: r
        }).catch(console.error);
    }, 5000);
    t.on("literate-database:reload", ()=>{
        Nc("literate-database:reload");
        e();
    });
}
a_2(AC, "InfoboxSocket");
const Bc = r("src/client/js/stores/socket/index.js");
let Ti;
const Socket = new (Ti = class extends z {
    constructor(){
        super();
        c_1(this, [
            "setup",
            "onUserChange",
            "onProjectChange"
        ]);
        this._socket = null;
        this.connected = false;
        this.gracefulShutdown = false;
        this.inactiveWindow = false;
        this.disabledByProject = false;
    }
    initialize() {
        Ya.CurrentUser.addChangeListener(this.onUserChange);
        Ya.CurrentProject.addChangeListener(this.onProjectChange);
    }
    onUserChange() {
        if (Ya.CurrentUser.get() && !this.disabledByProject) {
            this._create();
        }
        Ya.CurrentUser.removeChangeListener(this.onUserChange);
    }
    onProjectChange() {
        let e = !!Ya.CurrentProject.get()?.disableRealtimeCollaboration;
        if (e !== this.disabledByProject) {
            this.disabledByProject = e;
            e && this._socket?.disconnect();
            this.emitChange();
        }
    }
    _create() {
        let e = {
            reconnectionDelay: 5000,
            transports: [
                "websocket"
            ]
        };
        this._socket = so(location.origin, e);
        this.setup(this._socket);
    }
    get() {
        return this._socket;
    }
    setup(socket) {
        socket.on("connect", ()=>{
            Bc("connected!!");
            this.connected = true;
            this.emitChange("connect");
        });
        socket.on("disconnect", ()=>{
            Bc("disconnected!");
            this.connected = false;
            this.emitChange("disconnect");
        });
        socket.on("graceful-shutdown", ()=>{
            Bc("graceful-shutdown");
            this.gracefulShutdown = true;
            this.emitChange("graceful-shutdown");
        });
        socket.io.on("reconnect", ()=>{
            Bc("reconnected!");
            this.connected = true;
            if (this.gracefulShutdown) {
                this.gracefulShutdown = false;
                this.emitChange("reconnect:graceful-shutdown");
            } else {
                this.emitChange("reconnect");
            }
        });
        td(socket);
        rd(socket);
        nd(socket);
        id(socket);
        sd(socket);
        EC({
            socket,
            store: this
        });
        AC(socket);
    }
}, a_2(Ti, "Socket"), Ti);
const oo = r("src/client/js/stores/stream.js");
const ao = a_2(()=>Math.floor(Date.now() / 1000), "now");
let Ri;
const Stream = new (Ri = class extends z {
    constructor(){
        super();
        this.abortController = new ke;
        this.data = null;
        this.emitChangeThrottled = G_1(this.emitChange, 5000, {
            leading: true,
            trailing: true
        });
    }
    initialize() {
        Ya.Socket.addChangeListener(async ({ event })=>{
            if (event === "reconnect" && Ya.Layout.get() === "stream") {
                try {
                    if (document.hasFocus()) {
                        this.reload();
                    } else {
                        let r = a_2(()=>{
                            window.removeEventListener("focus", r);
                            setTimeout(()=>this.reload(), 3000);
                        }, "onFocus");
                        window.addEventListener("focus", r);
                    }
                } catch (error) {
                    if (Ye.isCancel(error)) {
                        return oo("canceled");
                    }
                    console.error(error.stack || error);
                }
            }
        });
    }
    get() {
        return this.data;
    }
    async fetch(e) {
        oo("fetch", e);
        let { data } = await x.get(`/api/stream/${e}/`, {
            signal: this.abortController.signal
        });
        return data;
    }
    set(e) {
        oo("set", e);
        this.data = e;
        this.emitChange();
    }
    async reload() {
        if (!this.data) {
            return;
        }
        let { projectName } = this.data;
        if (!projectName) {
            return;
        }
        oo("reload", projectName);
        let r = await this.fetch(projectName);
        this.set(r);
    }
    emitChangeOnTop() {
        if (!(window.scrollY > window.innerHeight * 2)) {
            this.emitChangeThrottled();
        }
    }
    patch(e) {
        oo("patch", e);
        if (e.changes.length < 1) {
            return;
        }
        if (e.changes.find((n)=>n.deleted)) {
            this.data.pages = this.data.pages.filter((n)=>n.id !== e.pageId);
            this.emitChange();
            return;
        }
        let r = this.data.pages.find((n)=>n.id === e.pageId);
        if (!r) {
            let n = Ya.QuickSearch.findById(e.pageId);
            let s = n ? n.title : null;
            r = {
                id: e.pageId,
                title: s,
                lines: [],
                icons: {}
            };
            if (s) {
                r.lines.push({
                    text: s
                });
            }
            this.data.pages.unshift(r);
        }
        for (let n of e.changes){
            if (n) {
                if (n._update) {
                    let s = r.lines.find((o)=>o.id === n._update);
                    if (s) {
                        s.text = n.lines.text;
                        s.updated = ao();
                    } else {
                        r.lines.push({
                            id: n._update,
                            text: n.lines.text,
                            created: ao(),
                            updated: ao()
                        });
                    }
                    continue;
                }
                if (n._insert) {
                    let s = r.lines.map((f)=>f.id).indexOf(n._insert);
                    let o = {
                        id: n.lines.id,
                        text: n.lines.text,
                        created: ao(),
                        updated: ao()
                    };
                    if (s >= 0) {
                        r.lines.splice(s, 0, o);
                    } else {
                        r.lines.push(o);
                    }
                    continue;
                }
                if (n._delete) {
                    r.lines = r.lines.filter((s)=>s.id !== n._delete);
                    continue;
                }
                if (n.title) {
                    r.title = n.title;
                    continue;
                }
                if (n.icons) {
                    r.iconsLc = n.icons.map(fe);
                    continue;
                }
            }
        }
        this.emitChangeOnTop();
    }
    patchEvent(e) {
        if (this.data) {
            if (!Array.isArray(this.data.events)) {
                this.data.events = [];
            }
            this.data.events.unshift(e);
            if (e.type === "member.join") {
                Ya.CurrentProject.reload();
            }
            this.emitChangeOnTop();
        }
    }
}, a_2(Ri, "Stream"), Ri);
let Mi;
const SuggestPopup = new (Mi = class extends z {
    constructor(){
        super();
        this.visible = false;
        this.isSelected = false;
    }
    initialize() {
        Ya.Selection.addChangeListener(({ store })=>{
            if (store.hasSelection()) {
                this.hide();
            }
        });
    }
    show() {
        this.visible = true;
        this.emitChange();
    }
    hide() {
        this.visible = false;
        this.isSelected = false;
        this.emitChange();
    }
    selectNext() {
        this.emitChange("select-next");
    }
    selectPrev() {
        this.emitChange("select-prev");
    }
    submit() {
        this.emitChange("submit");
    }
    submitIcon() {
        this.emitChange("submit-icon");
    }
}, a_2(Mi, "SuggestPopup"), Mi);
const ld = e_2(ed(), 1);
const jt = e_2(lh(), 1);
const jC = e_2(ws(), 1);
const ud = e_2(ea(), 1);
const FC = e_2(MC(), 1);
const DC = e_2(ws(), 1);
const od = class od extends DC.EventEmitter {
    constructor(e){
        super();
        if (typeof e !== "function") {
            throw new Error("Set execute function");
        }
        this.onExecute = e;
        this.lock = new FC.default;
        this.tasks = [];
    }
    doFirst(e, r) {
        this.tasks.unshift({
            task: e,
            data: r
        });
        this.emit("add", e);
        this._execute();
    }
    doLast(e, r) {
        this.tasks.push({
            task: e,
            data: r
        });
        this.emit("add", e);
        this._execute();
    }
    doLastOnlyOnce(e, r) {
        if (!(this.count(e) > 0)) {
            this.doLast(e, r);
        }
    }
    count(e) {
        return this.tasks.filter((r)=>r.task === e).length;
    }
    _execute() {
        this.lock.writeLock((e)=>{
            if (this.tasks.length < 1) {
                return e();
            }
            let { task, data } = this.tasks.shift();
            this.onExecute(task, data, e);
        });
    }
    waitForTaskAdd(e, { timeout }) {
        return new Promise((resolve)=>{
            let s = a_2((c)=>{
                clearTimeout(f);
                this.removeListener("add", o);
                resolve(c);
            }, "finish");
            let o = a_2((c)=>{
                if (c === e) {
                    s(true);
                }
            }, "onAdd");
            let f = setTimeout(()=>{
                s(false);
            }, timeout);
            this.on("add", o);
            if (this.tasks.find((c)=>c.task === e)) {
                s(true);
            }
        });
    }
};
a_2(od, "TaskQueue");
const co = od;
const Fi = r("src/client/js/stores/sync/resolve-conflict.js");
function ad(t, { receivedChange, lineNumber, originalLines }) {
    if (receivedChange) {
        if (receivedChange._delete) {
            for(let c = t.changes.length - 1; c >= 0; c--){
                let u = t.changes[c];
                if (u && (u._update === receivedChange._delete || u._delete === receivedChange._delete)) {
                    Fi("conflict! trying to update or delete the deleted line", c);
                    Fi("discard", u);
                    t.changes.splice(c, 1);
                }
            }
            let s = originalLines[lineNumber];
            let o = s ? s.id : "_end";
            let f = null;
            for (let c of t.changes){
                c && (c._insert === o && (f || (f = c.lines.id)), c._insert === receivedChange._delete && (Fi("conflict! the insert position line is deleted", c), Fi("swap the insert position", f || o), c._insert = f || o));
            }
        }
        if (receivedChange._insert) {
            for(let s = t.changes.length - 1; s >= 0; s--){
                let o = t.changes[s];
                if (o && o._insert && o.lines.id === receivedChange.lines.id) {
                    Fi("conflict! trying to insert the duplicated line id data", s);
                    Fi("discard", o);
                    t.changes.splice(s, 1);
                }
            }
        }
    }
}
a_2(ad, "resolveConflict");
const cd = r("src/client/js/stores/sync/receive.js");
function IC(t, e) {
    cd(`receive ${t.length} commits.`);
    try {
        Ya.Page.patch(t);
        cd("patch succeeded");
    } catch (error) {
        if (error.name === Mt.name) {
            cd("failed to patch commits. head mismatch");
            e("retry");
        } else {
            throw error;
        }
    }
}
a_2(IC, "receive");
const { TimeoutError, SocketIOError } = ld.default;
const Me = r("src/client/js/stores/sync/index.js");
const k2 = 300;
const timeout = 10000;
let Di;
const Sync = new (Di = class extends jC.EventEmitter {
    constructor(){
        super();
        this.commits = [];
        this.taskQueue = new co(this.onExecute.bind(this));
        this.cursor = null;
        this._pushingCommit = null;
        this.wasTimeout = false;
        this.titleDupTryCount = {};
        this._noInfoboxUpdate = false;
        this.finishLater = g_1(this.finishChange, k2);
    }
    get hasUnpushedCommit() {
        return this.commits.length > 0;
    }
    get hasUnpushedOrPushingCommit() {
        return this.commits.length > 0 || !!this._pushingCommit;
    }
    get numberOfChanges() {
        let e = this._pushingCommit ? this._pushingCommit.changes.length : 0;
        let r = this.commits.map((n)=>Os(n.changes).length).reduce((acc, item)=>acc + item, 0);
        return e + r;
    }
    showValidationError(e) {
        let r = `Failed to save. Please reload your browser. 

${e.toString()}`;
        alert(r);
        console.error(e.toString());
    }
    insert(e, { noInfoboxUpdate } = {}) {
        let n = Nn.validate(e);
        if (n.isInvalid) {
            return this.showValidationError(n);
        }
        this._noInfoboxUpdate = !!noInfoboxUpdate;
        this.addChange(e);
        this.finishLater();
    }
    update(e, { noInfoboxUpdate } = {}) {
        let n = Bn.validate(e);
        if (n.isInvalid) {
            return this.showValidationError(n);
        }
        this._noInfoboxUpdate = !!noInfoboxUpdate;
        this.addChange(e);
        this.finishLater();
    }
    delete(e, { noInfoboxUpdate } = {}) {
        let n = Un.validate(e);
        if (n.isInvalid) {
            return this.showValidationError(n);
        }
        this._noInfoboxUpdate = !!noInfoboxUpdate;
        this.addChange(e);
        this.finishLater();
    }
    addChange(e) {
        if (!this.hasUnpushedCommit || i(this.commits).pageId !== Ya.Page.id || i(this.commits).freeze) {
            this.commits.push(Da.create({
                parentId: Ya.Page.commitId,
                changes: [],
                cursor: this.cursor,
                pageId: Ya.Page.id,
                userId: Ya.CurrentUser.get().id,
                projectId: Ya.CurrentProject.get().id
            }));
        }
        i(this.commits).changes.push(e);
    }
    addPageCommit(e) {
        let r = Da.validate(e);
        if (r.isInvalid) {
            throw new Error(r.toString());
        }
        this.commits.push(e);
        this.finishLater();
    }
    updateParentId({ pageId, commitId }) {
        let n = 0;
        for (let s of this.commits){
            if (s.pageId === pageId) {
                s.parentId = commitId;
                n += 1;
            }
        }
        if (n > 0) {
            Me(`replaced parentId of ${n} unpushed commits to:`, commitId);
        }
    }
    rebase({ receivedChange, lineNumber, originalLines }) {
        let s = 0;
        if (this.hasUnpushedCommit) {
            for (let o of this.commits){
                if (o.pageId === Ya.Page.id) {
                    ad(o, {
                        receivedChange,
                        lineNumber,
                        originalLines: originalLines.lines
                    });
                    s += 1;
                }
            }
            if (s > 0) {
                Me(`rebased applied to ${s} commits`);
            }
        }
    }
    setCursor(e) {
        this.cursor = e;
    }
    flushChange() {
        Me("flush change");
        this.finishLater.flush();
    }
    finishChange() {
        Me("finish change");
        this.titleDupTryCount[Ya.Page.id] = 0;
        this.setMetadata();
        this.setTitle();
        if (!Ya.DisableRealtimeCollaboration.enabled) {
            this.taskQueue.doLastOnlyOnce("push");
        }
    }
    discardUnpushedCommits() {
        this.finishLater.cancel();
        this.commits = [];
    }
    async pushOverHttp() {
        this.flushChange();
        let e = Ya.Page.id;
        let r = this.commits.filter((c)=>c.pageId === e);
        if (r.length < 1) {
            return null;
        }
        for (let c of r){
            c.freeze = true;
        }
        let n = Da.create({
            parentId: r[0].parentId,
            changes: r.flatMap((c)=>c.changes),
            cursor: null,
            pageId: e,
            userId: Ya.CurrentUser.get().id,
            projectId: Ya.CurrentProject.get().id
        });
        Da.compress(n);
        if (n.changes.length < 1) {
            this.commits = this.commits.filter((c)=>!r.includes(c));
            return null;
        }
        let s = Da.validate(n);
        if (s.isInvalid) {
            this.showValidationError(s);
            throw new Error(s.toString());
        }
        let name = Ya.CurrentProject.get().name;
        let { data } = await x.post(`/api/commits-without-realtime-collaboration/${name}/${e}`, n);
        this.commits = this.commits.filter((c)=>!r.includes(c));
        this.emit("syncSuccess", n);
        if (Ya.Page.id === e) {
            Ya.Page.lines.patchChanges(n);
            Ya.Page.patchChanges(n.changes, {
                from: "self"
            });
            Ya.Page.commitId = data.commitId;
        }
        if (this.hasUnpushedCommit) {
            this.updateParentId({
                pageId: e,
                commitId: data.commitId
            });
        }
        this.titleDupTryCount[e] = 0;
        return data.commitId;
    }
    setMetadata() {
        let { links, projectLinks, icons, images, descriptions, files, helpfeels, infoboxDefinition, linesCount, charsCount } = Ya.Line.lines.getPageMetadata();
        let image = images[0] || null;
        let w = this.getLastMetadata();
        if (!jt.default(w.links, links)) {
            Me("links changed");
            this.addChange({
                links
            });
        }
        if (!jt.default(w.projectLinks, projectLinks)) {
            Me("projectLinks changed");
            this.addChange({
                projectLinks
            });
        }
        if (!jt.default(w.icons, icons)) {
            Me("icons changed");
            this.addChange({
                icons
            });
        }
        if (w.image !== image) {
            Me("image changed");
            this.addChange({
                image
            });
        }
        if (!jt.default(w.descriptions, descriptions)) {
            Me("descriptions changed");
            this.addChange({
                descriptions
            });
        }
        if (!jt.default(w.files, files)) {
            Me("files changed");
            this.addChange({
                files
            });
        }
        if (!jt.default(w.helpfeels, helpfeels)) {
            Me("helpfeels changed");
            this.addChange({
                helpfeels
            });
        }
        if (!jt.default(w.infoboxDefinition, infoboxDefinition)) {
            Me("infoboxDefinition changed", JSON.stringify(infoboxDefinition));
            this.addChange({
                infoboxDefinition
            });
        }
        if (!jt.default(w.linesCount, linesCount)) {
            Me("linesCount changed");
            this.addChange({
                linesCount
            });
        }
        if (!jt.default(w.charsCount, charsCount)) {
            Me("charsCount changed");
            this.addChange({
                charsCount
            });
        }
    }
    getLastMetadata() {
        let e = {};
        for (let r of [
            "links",
            "projectLinks",
            "icons",
            "image",
            "descriptions",
            "files",
            "helpfeels",
            "infoboxDefinition",
            "linesCount",
            "charsCount"
        ]){
            let n = Ya.Page[r];
            let s = this.getLastPropertyInQueue(r);
            e[r] = s !== undefined ? s : n;
        }
        return e;
    }
    getLastPropertyInQueue(e) {
        for(let r = this.commits.length - 1; r > -1; r--){
            let n = this.commits[r];
            let s = this.getLastPropertyInCommit(n, e);
            if (s !== undefined) {
                return s;
            }
        }
        if (this._pushingCommit) {
            let r = this.getLastPropertyInCommit(this._pushingCommit, e);
            if (r !== undefined) {
                return r;
            }
        }
    }
    getLastPropertyInCommit(e, r) {
        if (e.pageId === Ya.Page.id) {
            for(let n = e.changes.length - 1; n > -1; n--){
                let s = e.changes[n];
                if (s.hasOwnProperty(r)) {
                    return s[r];
                }
            }
        }
    }
    suggestUnDupTitle(e) {
        this.titleDupTryCount[e] += 1;
        return `${Ya.Line.lines.getTitle()}_${this.titleDupTryCount[e] + 1}`;
    }
    setTitle() {
        let e = Ya.Line.lines.getTitle();
        let r = Ya.Page.lines.getTitle();
        let n = this.getLastPropertyInQueue("title");
        if (e !== (n !== undefined ? n : r) || !Ya.Page.persistent) {
            Me("title changed", e);
            this.addChange({
                title: e
            });
        }
    }
    async onExecute(e, r, n) {
        Me(`execute task: ${e}, next tasks in queue:`, this.taskQueue.tasks.map((f)=>f.task));
        let s;
        let o = a_2((f)=>{
            s = f;
        }, "tellNextFunc");
        try {
            switch(e){
                case "push":
                    await this._push(o);
                    break;
                case "pull":
                    await Uy(o);
                    break;
                case "receive":
                    IC(r, o);
                    break;
            }
        } catch (error) {
            alert(`Oops, sorry. Could not ${e} the changes. Please report it to us if the problem persists.
-------
${error.message}`);
            n();
            throw error;
        }
        switch(s){
            case "retry":
                if (e === "push") {
                    if (await this.taskQueue.waitForTaskAdd("receive", {
                        timeout: 1000
                    })) {
                        Me("received some commits via websocket in 1 second");
                    } else {
                        Me("have not received commits via websocket in 1 second");
                        this.taskQueue.doFirst("pull");
                    }
                    this.taskQueue.doLastOnlyOnce("push");
                } else if (e === "receive") {
                    this.taskQueue.doLastOnlyOnce("pull");
                }
                break;
            case "wait":
                await ud.default(3000);
                if (e === "push") {
                    this.taskQueue.doLastOnlyOnce("push");
                }
                break;
        }
        n();
    }
    async _push(e) {
        if (!this.hasUnpushedCommit) {
            Me("push... everything up to date");
            return;
        }
        Me(`push... ${this.commits.length} commits to be send`);
        this.flushChange();
        let r = Da.compress(this.commits.shift());
        r.freeze = true;
        let n = Da.validate(r);
        if (n.isInvalid) {
            this.showValidationError(n);
            return;
        }
        this._pushingCommit = r;
        if (r.changes.length <= 0) {
            Me("commit has no changes");
            return;
        }
        let s;
        try {
            Me("push request", r);
            s = await ld.default(Ya.Socket.get(), {
                timeout
            }).request("commit", r);
            this._pushingCommit = null;
            this.wasTimeout = false;
        } catch (error) {
            this._pushingCommit = null;
            this.wasTimeout = false;
            Me(`push rejected: ${error.name}, ${error.message}`);
            let c = a_2(()=>{
                if (r.pageId !== Ya.Page.id) {
                    alert("Cannot save the last edit of the previous page.");
                    return true;
                }
                return false;
            }, "shouldAbandonOtherPage");
            switch(error.name){
                case TimeoutError.name:
                case SocketIOError.name:
                    this.commits.unshift(r);
                    this.wasTimeout = true;
                    e("wait");
                    return;
                case wa.name:
                    {
                        if (c()) {
                            return;
                        }
                        let u = this.suggestUnDupTitle(r.pageId);
                        for (let d of r.changes){
                            if (d.title) {
                                d.title = u;
                            }
                        }
                        this.commits.unshift(r);
                        await this._push(e);
                        return;
                    }
                case Mt.name:
                    {
                        if (c()) {
                            return;
                        }
                        let u = Math.floor(Math.random() * 2000) + 1000;
                        Me(`wait ${u} msec, then retry`);
                        await ud.default(u);
                        this.commits.unshift(r);
                        e("retry");
                        return;
                    }
                default:
                    throw error;
            }
        }
        Me("push succeeded", s);
        this.emit("syncSuccess", r);
        let { commitId } = s;
        if (Ya.Page.id === r.pageId) {
            Ya.Page.lines.patchChanges(r);
            Ya.Page.patchChanges(r.changes, {
                from: "self"
            });
            Ya.Page.commitId = commitId;
        }
        if (this.hasUnpushedCommit) {
            this.updateParentId({
                pageId: r.pageId,
                commitId
            });
        }
        this.cursor = null;
        this.titleDupTryCount[r.pageId] = 0;
        if (this.hasUnpushedCommit) {
            Me("push next commit");
            await this._push(e);
        }
    }
}, a_2(Di, "Sync"), Di);
let Ii;
const TableBlock = new (Ii = class extends z {
    constructor(){
        super();
        this.tables = Object.create(null);
        this.renderingTableId = null;
    }
    getRenderingTableId({ lineId, start, end }) {
        let renderingTableId = this.renderingTableId;
        if (start) {
            this.renderingTableId = `table-${lineId}`;
            return this.renderingTableId;
        }
        if (end) {
            this.renderingTableId = null;
        }
        return renderingTableId;
    }
    initialize() {
        Ya.DisplayStyle.addChangeListener(()=>{
            this.updateColWidthsAll();
        });
        Ya.PresentationMode.addChangeListener(()=>{
            if (Ya.DisplayStyle.is("presentation")) {
                this.updateColWidthsAll();
            }
        });
        Ya.Page.addChangeListener(({ store, event })=>{
            if (event === "load") {
                for (let n of Object.keys(this.tables)){
                    n !== store.id && delete this.tables[n];
                }
            }
        });
    }
    isTableHeadLine(e) {
        let r = Ya.Page.id;
        if (!r || !this.tables[r]) {
            return false;
        }
        return !!this.tables[r][`table-${e}`];
    }
    getTable(e) {
        let r = Ya.Page.id;
        if (r) {
            if (!this.tables[r]) {
                this.tables[r] = Object.create(null);
            }
            if (!this.tables[r][e]) {
                this.tables[r][e] = {
                    colNum: 0,
                    colWidths: []
                };
            }
            return this.tables[r][e];
        }
        return null;
    }
    getTablesInPage() {
        let e = Ya.Page.id;
        if (e && this.tables[e]) {
            return this.tables[e];
        }
        return [];
    }
    updateColNum({ tableId, col }) {
        let n = this.getTable(tableId);
        if (n && n.colNum < col) {
            n.colNum = col;
        }
    }
    updateColWidths({ tableId, forceUpdate } = {
        forceUpdate: false
    }) {
        let n = this.getTable(tableId);
        if (n) {
            n.colWidths = this.getColWidths(tableId);
            this.emitChange({
                tableId,
                forceUpdate
            });
        }
    }
    updateColWidthsAll() {
        let e = Object.keys(this.getTablesInPage());
        for (let tableId of e){
            requestAnimationFrame(()=>{
                this.updateColWidths({
                    tableId,
                    forceUpdate: true
                });
            });
        }
    }
    getColWidths(tableId) {
        let r = this.getTable(tableId);
        let n = [
            0
        ];
        if (!r) {
            return n;
        }
        for(let col = 1; col <= r.colNum; col++){
            n.push(this.getCellMaxWidth({
                tableId,
                col
            }));
        }
        return n;
    }
    getCellMaxWidth({ tableId, col }) {
        let n = `.col-${col}[data-table-id='${tableId}'] span.cell-text`;
        let s = Array.from(document.querySelectorAll(n));
        if (s.length === 0) {
            return 0;
        }
        let o = 4;
        if (Ya.DisplayStyle.is("presentation")) {
            let c = document.querySelector(`.col-${col}[data-table-id='${tableId}'] span.tab`);
            if (c && c.offsetWidth > 0) {
                o = c.offsetWidth;
            }
        }
        let f = s.map((c)=>{
            if (c) {
                return c.offsetWidth + 1;
            }
            return 0;
        });
        return Math.max(...f) + o + 1;
    }
}, a_2(Ii, "TableBlock"), Ii);
let ji;
const TimeStamp = new (ji = class {
    constructor(){
        this.initialize();
        c_1(this, [
            "addFormat",
            "removeAllFormats"
        ]);
        setTimeout(()=>{
            let e;
            Ya.CurrentProject.addChangeListener(()=>{
                if (e !== Ya.CurrentProject.name) {
                    this.initialize();
                    e = Ya.CurrentProject.name;
                }
            });
        });
    }
    initialize() {
        this.defaultFormats = [
            "YYYY/M/D",
            "[[]YYYY/M[]]/D",
            "YYYY/M/D HH:mm"
        ];
        this.customFormats = [];
    }
    getFormats() {
        return [
            ...this.customFormats,
            ...this.defaultFormats
        ];
    }
    addFormat(e) {
        if (!e) {
            throw new Error("timestamp format is empty");
        }
        if (typeof e === "string") {
            this.customFormats.push(e);
        } else if (typeof e === "function") {
            this.customFormats.push(e);
        } else {
            throw new Error("timestamp format is not a string or function");
        }
    }
    removeAllFormats() {
        this.defaultFormats = [];
        this.customFormats = [];
    }
}, a_2(ji, "TimeStamp"), ji);
const qC = r("src/client/js/stores/translation.js");
let Ni;
const Translation = new (Ni = class extends z {
    constructor(){
        super();
        this.isEnable = false;
    }
    enable() {
        qC("enable");
        this.isEnable = true;
        this.emitChange();
    }
    disable() {
        qC("disable");
        this.isEnable = false;
        this.emitChange();
    }
}, a_2(Ni, "Translation"), Ni);
const Uc = e_2(mr(), 1);
const fd = r("src/client/js/stores/undo.js");
const A2 = 200;
let Bi;
const Undo = new (Bi = class extends z {
    initialize() {
        this.undoList = [];
        this.redoList = [];
        this.changes = [];
        this.bundleLater.cancel();
    }
    constructor(){
        super();
        this.bundleLater = g_1(this.bundle, A2);
        this.initialize = this.initialize.bind(this);
        this.initialize();
        setTimeout(()=>{
            Ya.Page.addChangeListener(({ event })=>{
                if (event === "load") {
                    this.initialize();
                    this.emitChange();
                }
            });
        });
    }
    get isEmpty() {
        return this.undoList.length === 0;
    }
    append({ forward, reverse }) {
        if (!(!forward || !reverse)) {
            this.changes.push({
                forward,
                reverse
            });
            this.bundleLater();
        }
    }
    bundle() {
        this.undoList.push(this.changes);
        this.changes = [];
        this.redoList = [];
        this.emitChange();
    }
    undo() {
        this.bundleLater.flush();
        let e = this.undoList.pop();
        if (e) {
            fd("undo", e);
            this.redoList.push(e);
            this.apply(e.map((r)=>r.reverse).reverse());
            this.emitChange();
        }
    }
    redo() {
        this.bundleLater.flush();
        let e = this.redoList.pop();
        if (e) {
            fd("redo", e);
            this.undoList.push(e);
            this.apply(e.map((r)=>r.forward));
            this.emitChange();
        }
    }
    apply(changes) {
        let backupLines = e_1(Ya.Line.lines.all());
        try {
            Ya.Line.lines.patchChanges({
                changes,
                userId: Ya.CurrentUser.get().id
            });
            Ya.Line.emitChange();
        } catch  {
            fd("can not undo. conflicted");
            Ya.Line.setLines(backupLines);
            return;
        }
        O2({
            changes,
            lines: Ya.Line.lines.all(),
            backupLines
        });
        for (let n of changes){
            Ya.Sync.addChange(n);
        }
        Ya.Sync.finishLater();
    }
}, a_2(Bi, "Undo"), Bi);
function O2({ changes, lines, backupLines }) {
    let n = changes[changes.length - 1];
    let s = null;
    if (n._insert) {
        s = {
            line: lines.map((o)=>o.id).indexOf(n._insert),
            char: Uc.splitGraphemes(n.lines.text).length
        };
    } else if (n._update) {
        let o = backupLines.find((f)=>f.id === n._update);
        if (o) {
            s = {
                line: lines.map((f)=>f.id).indexOf(n._update),
                char: L2({
                    backupText: o.text,
                    changeText: n.lines.text
                })
            };
        }
    } else {
        if (n._delete) {
            s = {
                line: backupLines.map((o)=>o.id).indexOf(n._delete),
                char: 0
            };
        }
    }
    if (s) {
        return Ya.Cursor.setPosition(s);
    }
    return Ya.Cursor.fixPosition();
}
a_2(O2, "restoreCursorPosition");
function L2({ backupText, changeText }) {
    let r = Uc.splitGraphemes(backupText);
    let n = Uc.splitGraphemes(changeText);
    let s;
    for(s = 0; s < Math.min(r.length, n.length) && r[r.length - s - 1] === n[n.length - s - 1]; s++);
    return n.length - s;
}
a_2(L2, "compareStringFromTail");
const cP = e_2(ws(), 1);
const uP = e_2(Fa(), 1);
const lP = e_2(ea(), 1);
const T2 = r("src/share/cached-decorate-lines/index.js");
const HC = Ne() ? structuredClone : e_1;
let hd = [];
export function Qa(t) {
    if (R2(t, hd)) {
        return HC(hd);
    }
    T2("decorateLines");
    let e = _a(t);
    hd = HC(e);
    return e;
}
a_2(Qa, "cachedDecorateLines");
function R2(t, e) {
    if (t.length !== e.length) {
        return false;
    }
    for(let r = 0; r < t.length; r++){
        if (t[r].text !== e[r].text || t[r].updated !== e[r].updated) {
            return false;
        }
    }
    return true;
}
a_2(R2, "isSame");
const dd = e_2(On(), 1);
function M2() {
    return Ya.Settings.envs.FORCE_GYAZO_UPLOAD_TEAMS_NAME || Ya.CurrentProject.project.gyazoTeamsName || null;
}
a_2(M2, "getGyazoTeamsName");
export const Ra = a_2((t)=>t && /^image\/(jpe?g|gif|png|heic)$/i.test(t.type), "isGyazoUploadableFile");
async function VC(t) {
    let gyazoTeamsName = M2();
    let r = dd.default.stringify({
        gyazoTeamsName
    });
    let { data } = await x.get(`/api/login/gyazo/oauth-upload/token?${r}`);
    let data_token = data.token;
    if (data_token) {
        let o = new FormData;
        o.append("access_token", data_token);
        o.append("imagedata", t, t.name);
        o.append("title", Ya.Line.lines.getTitle());
        o.append("referer_url", location.href);
        let f = Ya.Settings.envs.GYAZO_OAUTH_UPLOAD_ENDPOINT || "https://upload.gyazo.com/api/upload";
        try {
            let u = (await Ye.post(f, o, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })).data.permalink_url;
            return {
                url: u,
                imageId: u.match(/[a-f0-9]{32}/)[0]
            };
        } catch (error) {
            throw error.response?.data?.message ? new Error(error.response.data.message) : error;
        }
    } else {
        let o = gyazoTeamsName ? "Gyazo Teams" : "Gyazo";
        let f = dd.default.stringify({
            gyazoTeamsName,
            redirect: location.pathname
        });
        let c = new Error(`Cannot upload an image.
Please connect to your ${o} account.`);
        c.redirectTo = `/login/gyazo/oauth-upload?${f}`;
        throw c;
    }
}
a_2(VC, "uploadGyazoWithOAuth");
async function GC(t) {
    let r = `/api/upload-files/${Ya.CurrentProject.get().id}`;
    let n = new FormData;
    n.append("file", t);
    n.append("name", t.name);
    let s;
    try {
        s = await x.post(r, n);
    } catch (error) {
        throw error.response?.data?.message ? new Error(error.response.data.message) : error;
    }
    return s.data;
}
a_2(GC, "uploadFile");
function F2(t) {
    if (t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")) {
        return t.default;
    }
    return t;
}
a_2(F2, "getDefaultExportFromCjs");
const KC = {
    exports: {}
};
((t)=>{
    (()=>{
        const e = "input is invalid type";
        const r = "finalize already called";
        let n = typeof window === "object";
        let s = n ? window : {};
        if (s.JS_MD5_NO_WINDOW) {
            n = false;
        }
        const o = typeof WorkerGlobalScope !== "undefined" && typeof self !== "undefined" && self instanceof WorkerGlobalScope;
        if (o) {
            s = self;
        }
        const f = !s.JS_MD5_NO_COMMON_JS && true && t.exports;
        const c = !s.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        const u = "0123456789abcdef".split("");
        const d = [
            128,
            32768,
            8388608,
            -2147483648
        ];
        const b = [
            0,
            8,
            16,
            24
        ];
        const y = [
            "hex",
            "array",
            "digest",
            "arrayBuffer"
        ];
        y.push("buffer");
        y.push("base64");
        const w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        let _ = [];
        let A;
        if (c) {
            const F = new ArrayBuffer(68);
            A = new Uint8Array(F);
            _ = new Uint32Array(F);
        }
        let Array_isArray = Array.isArray;
        if (s.JS_MD5_NO_NODE_JS || !Array_isArray) {
            Array_isArray = a_2((v)=>Object.prototype.toString.call(v) === "[object Array]", "isArray");
        }
        let ArrayBuffer_isView = ArrayBuffer.isView;
        if (c && (s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer_isView)) {
            ArrayBuffer_isView = a_2((v)=>typeof v === "object" && v.buffer && v.buffer.constructor === ArrayBuffer, "isView");
        }
        const j = a_2((v)=>{
            const S = typeof v;
            if (S === "string") {
                return [
                    v,
                    true
                ];
            }
            if (S !== "object" || v === null) {
                throw new Error(e);
            }
            if (c && v.constructor === ArrayBuffer) {
                return [
                    new Uint8Array(v),
                    false
                ];
            }
            if (!Array_isArray(v) && !ArrayBuffer_isView(v)) {
                throw new Error(e);
            }
            return [
                v,
                false
            ];
        }, "formatMessage");
        const J = a_2((v)=>(S)=>new X(true).update(S)[v](), "createOutputMethod");
        const W = a_2(()=>{
            const v = J("hex");
            v.create = ()=>new X;
            v.update = (x)=>v.create().update(x);
            for (const k of y){
                v[k] = J(k);
            }
            return v;
        }, "createMethod");
        const ae = a_2((v)=>(S, k)=>new ne(S, true).update(k)[v](), "createHmacOutputMethod");
        const te = a_2(()=>{
            const v = ae("hex");
            v.create = (x)=>new ne(x);
            v.update = (x, q)=>v.create(x).update(q);
            for (const k of y){
                v[k] = ae(k);
            }
            return v;
        }, "createHmacMethod");
        function X(v) {
            if (v) {
                _[0] = _[16] = _[1] = _[2] = _[3] = _[4] = _[5] = _[6] = _[7] = _[8] = _[9] = _[10] = _[11] = _[12] = _[13] = _[14] = _[15] = 0;
                this.blocks = _;
                this.buffer8 = A;
            } else if (c) {
                const S = new ArrayBuffer(68);
                this.buffer8 = new Uint8Array(S);
                this.blocks = new Uint32Array(S);
            } else {
                this.blocks = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
            }
            this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
            this.finalized = this.hashed = false;
            this.first = true;
        }
        a_2(X, "Md5");
        X.prototype.update = function(v) {
            if (this.finalized) {
                throw new Error(r);
            }
            const S = j(v);
            v = S[0];
            const k = S[1];
            let x;
            let B;
            for(let q = 0, I = v.length, Q = this.blocks, De = this.buffer8; q < I;){
                if (this.hashed) {
                    this.hashed = false;
                    Q[0] = Q[16];
                    Q[16] = Q[1] = Q[2] = Q[3] = Q[4] = Q[5] = Q[6] = Q[7] = Q[8] = Q[9] = Q[10] = Q[11] = Q[12] = Q[13] = Q[14] = Q[15] = 0;
                }
                if (k) {
                    if (c) {
                        for(B = this.start; q < I && B < 64; ++q){
                            x = v.charCodeAt(q);
                            if (x < 128) {
                                De[B++] = x;
                            } else if (x < 2048) {
                                De[B++] = 192 | x >>> 6;
                                De[B++] = 128 | x & 63;
                            } else if (x < 55296 || x >= 57344) {
                                De[B++] = 224 | x >>> 12;
                                De[B++] = 128 | x >>> 6 & 63;
                                De[B++] = 128 | x & 63;
                            } else {
                                x = 65536 + ((x & 1023) << 10 | v.charCodeAt(++q) & 1023);
                                De[B++] = 240 | x >>> 18;
                                De[B++] = 128 | x >>> 12 & 63;
                                De[B++] = 128 | x >>> 6 & 63;
                                De[B++] = 128 | x & 63;
                            }
                        }
                    } else {
                        for(B = this.start; q < I && B < 64; ++q){
                            x = v.charCodeAt(q);
                            if (x < 128) {
                                Q[B >>> 2] |= x << b[B++ & 3];
                            } else if (x < 2048) {
                                Q[B >>> 2] |= (192 | x >>> 6) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x & 63) << b[B++ & 3];
                            } else if (x < 55296 || x >= 57344) {
                                Q[B >>> 2] |= (224 | x >>> 12) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x >>> 6 & 63) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x & 63) << b[B++ & 3];
                            } else {
                                x = 65536 + ((x & 1023) << 10 | v.charCodeAt(++q) & 1023);
                                Q[B >>> 2] |= (240 | x >>> 18) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x >>> 12 & 63) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x >>> 6 & 63) << b[B++ & 3];
                                Q[B >>> 2] |= (128 | x & 63) << b[B++ & 3];
                            }
                        }
                    }
                } else if (c) {
                    for(B = this.start; q < I && B < 64; ++q){
                        De[B++] = v[q];
                    }
                } else {
                    for(B = this.start; q < I && B < 64; ++q){
                        Q[B >>> 2] |= v[q] << b[B++ & 3];
                    }
                }
                this.lastByteIndex = B;
                this.bytes += B - this.start;
                if (B >= 64) {
                    this.start = B - 64;
                    this.hash();
                    this.hashed = true;
                } else {
                    this.start = B;
                }
            }
            if (this.bytes > 4294967295) {
                this.hBytes += this.bytes / 4294967296 << 0;
                this.bytes = this.bytes % 4294967296;
            }
            return this;
        };
        X.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = true;
                const v = this.blocks;
                const S = this.lastByteIndex;
                v[S >>> 2] |= d[S & 3];
                if (S >= 56) {
                    if (!this.hashed) {
                        this.hash();
                    }
                    v[0] = v[16];
                    v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0;
                }
                v[14] = this.bytes << 3;
                v[15] = this.hBytes << 3 | this.bytes >>> 29;
                this.hash();
            }
        };
        X.prototype.hash = function() {
            let v;
            let S;
            let k;
            let x;
            let q;
            let B;
            const blocks = this.blocks;
            if (this.first) {
                v = blocks[0] - 680876937;
                v = (v << 7 | v >>> 25) - 271733879 << 0;
                x = (-1732584194 ^ v & 2004318071) + blocks[1] - 117830708;
                x = (x << 12 | x >>> 20) + v << 0;
                k = (-271733879 ^ x & (v ^ -271733879)) + blocks[2] - 1126478375;
                k = (k << 17 | k >>> 15) + x << 0;
                S = (v ^ k & (x ^ v)) + blocks[3] - 1316259209;
                S = (S << 22 | S >>> 10) + k << 0;
            } else {
                v = this.h0;
                S = this.h1;
                k = this.h2;
                x = this.h3;
                v += (x ^ S & (k ^ x)) + blocks[0] - 680876936;
                v = (v << 7 | v >>> 25) + S << 0;
                x += (k ^ v & (S ^ k)) + blocks[1] - 389564586;
                x = (x << 12 | x >>> 20) + v << 0;
                k += (S ^ x & (v ^ S)) + blocks[2] + 606105819;
                k = (k << 17 | k >>> 15) + x << 0;
                S += (v ^ k & (x ^ v)) + blocks[3] - 1044525330;
                S = (S << 22 | S >>> 10) + k << 0;
            }
            v += (x ^ S & (k ^ x)) + blocks[4] - 176418897;
            v = (v << 7 | v >>> 25) + S << 0;
            x += (k ^ v & (S ^ k)) + blocks[5] + 1200080426;
            x = (x << 12 | x >>> 20) + v << 0;
            k += (S ^ x & (v ^ S)) + blocks[6] - 1473231341;
            k = (k << 17 | k >>> 15) + x << 0;
            S += (v ^ k & (x ^ v)) + blocks[7] - 45705983;
            S = (S << 22 | S >>> 10) + k << 0;
            v += (x ^ S & (k ^ x)) + blocks[8] + 1770035416;
            v = (v << 7 | v >>> 25) + S << 0;
            x += (k ^ v & (S ^ k)) + blocks[9] - 1958414417;
            x = (x << 12 | x >>> 20) + v << 0;
            k += (S ^ x & (v ^ S)) + blocks[10] - 42063;
            k = (k << 17 | k >>> 15) + x << 0;
            S += (v ^ k & (x ^ v)) + blocks[11] - 1990404162;
            S = (S << 22 | S >>> 10) + k << 0;
            v += (x ^ S & (k ^ x)) + blocks[12] + 1804603682;
            v = (v << 7 | v >>> 25) + S << 0;
            x += (k ^ v & (S ^ k)) + blocks[13] - 40341101;
            x = (x << 12 | x >>> 20) + v << 0;
            k += (S ^ x & (v ^ S)) + blocks[14] - 1502002290;
            k = (k << 17 | k >>> 15) + x << 0;
            S += (v ^ k & (x ^ v)) + blocks[15] + 1236535329;
            S = (S << 22 | S >>> 10) + k << 0;
            v += (k ^ x & (S ^ k)) + blocks[1] - 165796510;
            v = (v << 5 | v >>> 27) + S << 0;
            x += (S ^ k & (v ^ S)) + blocks[6] - 1069501632;
            x = (x << 9 | x >>> 23) + v << 0;
            k += (v ^ S & (x ^ v)) + blocks[11] + 643717713;
            k = (k << 14 | k >>> 18) + x << 0;
            S += (x ^ v & (k ^ x)) + blocks[0] - 373897302;
            S = (S << 20 | S >>> 12) + k << 0;
            v += (k ^ x & (S ^ k)) + blocks[5] - 701558691;
            v = (v << 5 | v >>> 27) + S << 0;
            x += (S ^ k & (v ^ S)) + blocks[10] + 38016083;
            x = (x << 9 | x >>> 23) + v << 0;
            k += (v ^ S & (x ^ v)) + blocks[15] - 660478335;
            k = (k << 14 | k >>> 18) + x << 0;
            S += (x ^ v & (k ^ x)) + blocks[4] - 405537848;
            S = (S << 20 | S >>> 12) + k << 0;
            v += (k ^ x & (S ^ k)) + blocks[9] + 568446438;
            v = (v << 5 | v >>> 27) + S << 0;
            x += (S ^ k & (v ^ S)) + blocks[14] - 1019803690;
            x = (x << 9 | x >>> 23) + v << 0;
            k += (v ^ S & (x ^ v)) + blocks[3] - 187363961;
            k = (k << 14 | k >>> 18) + x << 0;
            S += (x ^ v & (k ^ x)) + blocks[8] + 1163531501;
            S = (S << 20 | S >>> 12) + k << 0;
            v += (k ^ x & (S ^ k)) + blocks[13] - 1444681467;
            v = (v << 5 | v >>> 27) + S << 0;
            x += (S ^ k & (v ^ S)) + blocks[2] - 51403784;
            x = (x << 9 | x >>> 23) + v << 0;
            k += (v ^ S & (x ^ v)) + blocks[7] + 1735328473;
            k = (k << 14 | k >>> 18) + x << 0;
            S += (x ^ v & (k ^ x)) + blocks[12] - 1926607734;
            S = (S << 20 | S >>> 12) + k << 0;
            q = S ^ k;
            v += (q ^ x) + blocks[5] - 378558;
            v = (v << 4 | v >>> 28) + S << 0;
            x += (q ^ v) + blocks[8] - 2022574463;
            x = (x << 11 | x >>> 21) + v << 0;
            B = x ^ v;
            k += (B ^ S) + blocks[11] + 1839030562;
            k = (k << 16 | k >>> 16) + x << 0;
            S += (B ^ k) + blocks[14] - 35309556;
            S = (S << 23 | S >>> 9) + k << 0;
            q = S ^ k;
            v += (q ^ x) + blocks[1] - 1530992060;
            v = (v << 4 | v >>> 28) + S << 0;
            x += (q ^ v) + blocks[4] + 1272893353;
            x = (x << 11 | x >>> 21) + v << 0;
            B = x ^ v;
            k += (B ^ S) + blocks[7] - 155497632;
            k = (k << 16 | k >>> 16) + x << 0;
            S += (B ^ k) + blocks[10] - 1094730640;
            S = (S << 23 | S >>> 9) + k << 0;
            q = S ^ k;
            v += (q ^ x) + blocks[13] + 681279174;
            v = (v << 4 | v >>> 28) + S << 0;
            x += (q ^ v) + blocks[0] - 358537222;
            x = (x << 11 | x >>> 21) + v << 0;
            B = x ^ v;
            k += (B ^ S) + blocks[3] - 722521979;
            k = (k << 16 | k >>> 16) + x << 0;
            S += (B ^ k) + blocks[6] + 76029189;
            S = (S << 23 | S >>> 9) + k << 0;
            q = S ^ k;
            v += (q ^ x) + blocks[9] - 640364487;
            v = (v << 4 | v >>> 28) + S << 0;
            x += (q ^ v) + blocks[12] - 421815835;
            x = (x << 11 | x >>> 21) + v << 0;
            B = x ^ v;
            k += (B ^ S) + blocks[15] + 530742520;
            k = (k << 16 | k >>> 16) + x << 0;
            S += (B ^ k) + blocks[2] - 995338651;
            S = (S << 23 | S >>> 9) + k << 0;
            v += (k ^ (S | ~x)) + blocks[0] - 198630844;
            v = (v << 6 | v >>> 26) + S << 0;
            x += (S ^ (v | ~k)) + blocks[7] + 1126891415;
            x = (x << 10 | x >>> 22) + v << 0;
            k += (v ^ (x | ~S)) + blocks[14] - 1416354905;
            k = (k << 15 | k >>> 17) + x << 0;
            S += (x ^ (k | ~v)) + blocks[5] - 57434055;
            S = (S << 21 | S >>> 11) + k << 0;
            v += (k ^ (S | ~x)) + blocks[12] + 1700485571;
            v = (v << 6 | v >>> 26) + S << 0;
            x += (S ^ (v | ~k)) + blocks[3] - 1894986606;
            x = (x << 10 | x >>> 22) + v << 0;
            k += (v ^ (x | ~S)) + blocks[10] - 1051523;
            k = (k << 15 | k >>> 17) + x << 0;
            S += (x ^ (k | ~v)) + blocks[1] - 2054922799;
            S = (S << 21 | S >>> 11) + k << 0;
            v += (k ^ (S | ~x)) + blocks[8] + 1873313359;
            v = (v << 6 | v >>> 26) + S << 0;
            x += (S ^ (v | ~k)) + blocks[15] - 30611744;
            x = (x << 10 | x >>> 22) + v << 0;
            k += (v ^ (x | ~S)) + blocks[6] - 1560198380;
            k = (k << 15 | k >>> 17) + x << 0;
            S += (x ^ (k | ~v)) + blocks[13] + 1309151649;
            S = (S << 21 | S >>> 11) + k << 0;
            v += (k ^ (S | ~x)) + blocks[4] - 145523070;
            v = (v << 6 | v >>> 26) + S << 0;
            x += (S ^ (v | ~k)) + blocks[11] - 1120210379;
            x = (x << 10 | x >>> 22) + v << 0;
            k += (v ^ (x | ~S)) + blocks[2] + 718787259;
            k = (k << 15 | k >>> 17) + x << 0;
            S += (x ^ (k | ~v)) + blocks[9] - 343485551;
            S = (S << 21 | S >>> 11) + k << 0;
            if (this.first) {
                this.h0 = v + 1732584193 << 0;
                this.h1 = S - 271733879 << 0;
                this.h2 = k - 1732584194 << 0;
                this.h3 = x + 271733878 << 0;
                this.first = false;
            } else {
                this.h0 = this.h0 + v << 0;
                this.h1 = this.h1 + S << 0;
                this.h2 = this.h2 + k << 0;
                this.h3 = this.h3 + x << 0;
            }
        };
        X.prototype.hex = function() {
            this.finalize();
            const v = this.h0;
            const S = this.h1;
            const k = this.h2;
            const x = this.h3;
            return u[v >>> 4 & 15] + u[v & 15] + u[v >>> 12 & 15] + u[v >>> 8 & 15] + u[v >>> 20 & 15] + u[v >>> 16 & 15] + u[v >>> 28 & 15] + u[v >>> 24 & 15] + u[S >>> 4 & 15] + u[S & 15] + u[S >>> 12 & 15] + u[S >>> 8 & 15] + u[S >>> 20 & 15] + u[S >>> 16 & 15] + u[S >>> 28 & 15] + u[S >>> 24 & 15] + u[k >>> 4 & 15] + u[k & 15] + u[k >>> 12 & 15] + u[k >>> 8 & 15] + u[k >>> 20 & 15] + u[k >>> 16 & 15] + u[k >>> 28 & 15] + u[k >>> 24 & 15] + u[x >>> 4 & 15] + u[x & 15] + u[x >>> 12 & 15] + u[x >>> 8 & 15] + u[x >>> 20 & 15] + u[x >>> 16 & 15] + u[x >>> 28 & 15] + u[x >>> 24 & 15];
        };
        X.prototype.toString = X.prototype.hex;
        X.prototype.digest = function() {
            this.finalize();
            const v = this.h0;
            const S = this.h1;
            const k = this.h2;
            const x = this.h3;
            return [
                v & 255,
                v >>> 8 & 255,
                v >>> 16 & 255,
                v >>> 24 & 255,
                S & 255,
                S >>> 8 & 255,
                S >>> 16 & 255,
                S >>> 24 & 255,
                k & 255,
                k >>> 8 & 255,
                k >>> 16 & 255,
                k >>> 24 & 255,
                x & 255,
                x >>> 8 & 255,
                x >>> 16 & 255,
                x >>> 24 & 255
            ];
        };
        X.prototype.array = X.prototype.digest;
        X.prototype.arrayBuffer = function() {
            this.finalize();
            const v = new ArrayBuffer(16);
            const S = new Uint32Array(v);
            S[0] = this.h0;
            S[1] = this.h1;
            S[2] = this.h2;
            S[3] = this.h3;
            return v;
        };
        X.prototype.buffer = X.prototype.arrayBuffer;
        X.prototype.base64 = function() {
            let v;
            let S;
            let k;
            let x = "";
            const q = this.array();
            for(var B = 0; B < 15;){
                v = q[B++];
                S = q[B++];
                k = q[B++];
                x += w[v >>> 2] + w[(v << 4 | S >>> 4) & 63] + w[(S << 2 | k >>> 6) & 63] + w[k & 63];
            }
            v = q[B];
            x += `${w[v >>> 2] + w[v << 4 & 63]}==`;
            return x;
        };
        function ne(v, S) {
            let k;
            const x = j(v);
            v = x[0];
            if (x[1]) {
                const q = [];
                const B = v.length;
                let I = 0;
                let Q;
                for(k = 0; k < B; ++k){
                    Q = v.charCodeAt(k);
                    if (Q < 128) {
                        q[I++] = Q;
                    } else if (Q < 2048) {
                        q[I++] = 192 | Q >>> 6;
                        q[I++] = 128 | Q & 63;
                    } else if (Q < 55296 || Q >= 57344) {
                        q[I++] = 224 | Q >>> 12;
                        q[I++] = 128 | Q >>> 6 & 63;
                        q[I++] = 128 | Q & 63;
                    } else {
                        Q = 65536 + ((Q & 1023) << 10 | v.charCodeAt(++k) & 1023);
                        q[I++] = 240 | Q >>> 18;
                        q[I++] = 128 | Q >>> 12 & 63;
                        q[I++] = 128 | Q >>> 6 & 63;
                        q[I++] = 128 | Q & 63;
                    }
                }
                v = q;
            }
            if (v.length > 64) {
                v = new X(true).update(v).array();
            }
            const De = [];
            const E = [];
            for(k = 0; k < 64; ++k){
                const O = v[k] || 0;
                De[k] = 92 ^ O;
                E[k] = 54 ^ O;
            }
            X.call(this, S);
            this.update(E);
            this.oKeyPad = De;
            this.inner = true;
            this.sharedMemory = S;
        }
        a_2(ne, "HmacMd5");
        ne.prototype = new X;
        ne.prototype.finalize = function() {
            X.prototype.finalize.call(this);
            if (this.inner) {
                this.inner = false;
                const v = this.array();
                X.call(this, this.sharedMemory);
                this.update(this.oKeyPad);
                this.update(v);
                X.prototype.finalize.call(this);
            }
        };
        const ee = W();
        ee.md5 = ee;
        ee.md5.hmac = te();
        if (f) {
            t.exports = ee;
        } else {
            s.md5 = ee;
        }
    })();
})(KC);
const KC_exports = KC.exports;
const JC = F2(KC_exports);
const $c = [
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10
];
const I2 = 1229472850;
const QC = 1883789683;
const pd = 9;
const j2 = 39.3701;
const qc = 33;
const md = a_2(()=>{
    if (Py() || Pl() || kl()) {
        return 72;
    }
    return 96;
}, "getBaseDpi");
const ZC = a_2((t)=>Math.round(t * j2), "toPixelsPerMeter");
function XC(t, e = 96) {
    if (t.byteLength < 8) {
        return null;
    }
    let r = new DataView(t);
    for(let c = 0; c < $c.length; c++){
        if (r.getUint8(c) !== $c[c]) {
            return null;
        }
    }
    let n = eP(r, t.byteLength);
    if (!n || n.end > t.byteLength) {
        return null;
    }
    let s = r.getUint32(n.start + 8);
    if (r.getUint8(n.start + 16) !== 1 || s <= 0) {
        return null;
    }
    let f = Math.round(s / ZC(e) * 100) / 100;
    return Math.max(f, 1);
}
a_2(XC, "parsePngPixelRatio");
function eP(t, e) {
    let r = 8;
    while(r + 12 <= e){
        let n = t.getUint32(r);
        if (t.getUint32(r + 4) === QC && n === pd) {
            return {
                start: r,
                end: r + 12 + n
            };
        }
        r += 12 + n;
    }
    return null;
}
a_2(eP, "findPhysChunk");
async function Dne(t, e) {
    let r = await t.arrayBuffer();
    let n = new Uint8Array(r);
    let s = new DataView(r);
    if (n.length < qc) {
        throw new Error("invalid PNG.");
    }
    for(let c = 0; c < $c.length; c++){
        if (n[c] !== $c[c]) {
            throw new Error("invalid PNG.");
        }
    }
    if (s.getUint32(12) !== I2) {
        throw new Error("invalid PNG.");
    }
    let o = eP(s, n.length);
    let f = o ? [
        n.subarray(qc, o.start),
        n.subarray(o.end)
    ] : [
        n.subarray(qc)
    ];
    return new Blob([
        n.subarray(0, qc),
        N2(e),
        ...f
    ], {
        type: t.type
    });
}
a_2(Dne, "insertPngPixelRatio");
function N2(t) {
    let e = Math.round(ZC(md()) * t);
    let r = new Uint8Array(8 + pd + 4);
    let n = new DataView(r.buffer);
    n.setUint32(0, pd);
    n.setUint32(4, QC);
    n.setUint32(8, e);
    n.setUint32(12, e);
    n.setUint8(16, 1);
    n.setUint32(17, U2(r.subarray(4, 17)));
    return r;
}
a_2(N2, "buildPhysChunk");
a_2(U2, "crc32");
function q2(t) {
    return new Promise((resolve)=>{
        let r = new FileReader;
        r.addEventListener("load", ()=>resolve(r.result), false);
        r.readAsArrayBuffer(t);
    });
}
a_2(q2, "readFileAsArrayBuffer");
async function tP(file) {
    let e = Ya.CurrentProject.get();
    if (!e) {
        return;
    }
    let r = await q2(file);
    let md5 = JC(r);
    let pixelRatio = XC(r, md());
    try {
        let o = await $2({
            md5,
            file,
            project: e
        });
        if (o.embedUrl) {
            return {
                url: o.embedUrl,
                originalname: o.originalname
            };
        }
        let { signedUrl, fileId } = o;
        await z2({
            signedUrl,
            file
        });
        let { embedUrl, originalname } = await H2({
            md5,
            fileId,
            project: e,
            pixelRatio
        });
        return {
            url: embedUrl,
            originalname
        };
    } catch (error) {
        let f = error;
        if (f.response) {
            if (f.response?.data?.message) {
                let c = new Error(`Upload failed.
` + f.response.data.message);
                if (f.response.status === 402) {
                    c.redirectTo = "/settings/file-capacity";
                }
                throw c;
            } else {
                throw new Error("Something went wrong while uploading. Please try again in 5 minutes.");
            }
        } else {
            throw new Error(`The server can\u2019t be reached.
Request has been terminated. Possible causes: the network is offline, the server is down, there is something wrong with the proxy server, or you may need to log in on public Wi-Fi.`);
        }
    }
}
a_2(tP, "uploadGcs");
async function $2({ md5, file, project }) {
    return (await x.post(`/api/gcs/${project.id}/upload-request`, {
        md5,
        size: file.size,
        contentType: file.type,
        name: file.name
    })).data;
}
a_2($2, "uploadRequest");
async function z2({ signedUrl, file }) {
    return Ye.put(signedUrl, file, {
        headers: {
            "Content-Type": file.type
        }
    });
}
a_2(z2, "upload");
async function H2({ md5, fileId, project, pixelRatio }) {
    return (await x.post(`/api/gcs/${project.id}/verify`, {
        md5,
        fileId,
        pixelRatio
    })).data;
}
a_2(H2, "verify");
export function Ta(t) {
    if (!Ya.CurrentUser.isProjectMember) {
        return null;
    }
    let { uploadImageTo, uploadFileTo } = Ya.CurrentProject.get();
    if (W2(t) && (uploadImageTo !== "gyazo" || Ra(t))) {
        return uploadImageTo;
    }
    return uploadFileTo;
}
a_2(Ta, "getUploadServiceName");
export async function Ua(t) {
    switch(Ta(t)){
        case "gcs":
            return tP(t);
        case "file":
            return GC(t);
        case "gyazo":
            return VC(t);
    }
    throw new Error("upload service does not exist.");
}
a_2(Ua, "upload");
export const Va = a_2(()=>Ya.Settings.flags.ENABLE_FILE_UPLOAD || Ya.Settings.flags.ENABLE_GYAZO_OAUTH_UPLOAD || Ya.Settings.flags.ENABLE_GCS_FILE, "isUploadEnable");
export const Wa = a_2((t)=>!!Ta(t), "isUploadableFile");
var W2 = a_2((t)=>t && /^image\/.+/.test(t.type), "isImageFile");
export function Xa(t) {
    let e = `[${t.url}]`;
    if (t.originalname && Ba(e).type === "urlLink") {
        return `[${t.originalname.replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim()} ${t.url}]`;
    }
    return e;
}
a_2(Xa, "uploadResultToText");
const aP = r("src/client/js/stores/userscript.js");
let Ui;
const UserScript = new (Ui = class extends z {
    constructor(){
        super();
        this.waitingForApproval = false;
        this.sha1hash = null;
        this.loaded = false;
        c_1(this, "reload");
    }
    initialize() {
        this.setup();
        let e;
        let r = a_2(()=>{
            if ([
                "list",
                "page",
                "stream"
            ].includes(Ya.Layout.get()) && e !== Ya.CurrentProject.name) {
                e = Ya.CurrentProject.name;
                this.reload();
            }
        }, "checkReload");
        Ya.CurrentProject.addChangeListener(r);
        Ya.Layout.addChangeListener(r);
    }
    setup() {
        if (!Ne()) {
            return;
        }
        let e = a_2(()=>jn({
                userId: Ya.CurrentUser.get().id
            })(), "generateNewId");
        if (!window.cosense) {
            window.cosense = new cP.EventEmitter;
        }
        if (!window.scrapbox) {
            window.scrapbox = window.cosense;
        }
        if (!window.cosense.PopupMenu) {
            window.cosense.PopupMenu = {
                addButton: Ya.PopupMenu.addButton
            };
        }
        if (!window.cosense.PageMenu) {
            window.cosense.PageMenu = (o)=>Ya.PageMenu.pageMenu(o);
            window.cosense.PageMenu.addMenu = ({ title, image, icon, onClick })=>Ya.PageMenu.addMenu({
                    title,
                    image,
                    icon,
                    onClick
                });
            window.cosense.PageMenu.addItem = ({ title, image, icon, onClick })=>Ya.PageMenu.pageMenu("default").addItem({
                    title,
                    image,
                    icon,
                    onClick
                });
            window.cosense.PageMenu.addSeparator = ()=>Ya.PageMenu.pageMenu("default").addSeparator();
            window.cosense.PageMenu.removeAllItems = ()=>Ya.PageMenu.pageMenu("default").removeAllItems();
        }
        if (!window.cosense.TimeStamp) {
            window.cosense.TimeStamp = {
                addFormat: Ya.TimeStamp.addFormat,
                removeAllFormats: Ya.TimeStamp.removeAllFormats
            };
        }
        if (!window.cosense.Page) {
            window.cosense.Page = {
                show (o) {
                    return new Promise((resolve, reject)=>{
                        if (typeof o !== "string" || o.length < 1) {
                            return reject(new Error("Invalid title."));
                        }
                        if (fe(Ya.Page.get()?.title || "") === fe(o)) {
                            return reject(new Error("Same page."));
                        }
                        let u = Ya.CurrentProject.get()?.name;
                        if (!u) {
                            return reject(new Error("projectName is empty."));
                        }
                        window.cosense.once("page:changed", ()=>{
                            let d = Ya.Page.get()?.title;
                            if (d) {
                                if (fe(d) !== fe(o)) {
                                    return reject(new Error(`You instructed to show "${o}", but "${d}" was shown.`));
                                }
                                return resolve();
                            }
                            return reject(new Error(`The page "${o}" was not shown.`));
                        });
                        uP.default(`/${u}/${o}`);
                    });
                },
                get created () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    let o = Ya.Page.get()?.created;
                    if (o) {
                        return new Date(o * 1000);
                    }
                    return null;
                },
                get updated () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    let o = Ya.Page.get()?.updated;
                    if (o) {
                        return new Date(o * 1000);
                    }
                    return null;
                },
                get lines () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    return Qa(Ya.Line.getAll()).map((o)=>{
                        if (o.title || o.codeBlock || o.tableBlock || o.cli || o.helpfeel) {
                            return o;
                        }
                        let f;
                        o.__defineGetter__("nodes", ()=>{
                            if (!f) {
                                f = Ba(o.text, {
                                    noCache: true
                                });
                            }
                            return f;
                        });
                        return o;
                    });
                },
                get title () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    return Ya.Page.title;
                },
                get id () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    return Ya.Page.id;
                },
                get metadata () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    return Ya.Line.lines.getPageMetadata();
                },
                insertLine (o, f, { noInfoboxUpdate } = {}) {
                    if (Ya.Layout.get() !== "page") {
                        return;
                    }
                    if (typeof o !== "string") {
                        throw new Error(`${o} is not a string`);
                    }
                    if (o.length > 10000) {
                        throw new Error("too long text");
                    }
                    if (f < 0 || f > Ya.Line.lines.length) {
                        throw new Error("invalid index");
                    }
                    let u = {
                        id: e(),
                        text: o,
                        userId: Ya.CurrentUser.get().id
                    };
                    Ya.Line.lines.insert(f, u, true, {
                        noInfoboxUpdate
                    });
                    let d = Ya.Cursor.getPosition();
                    if (f <= d.line) {
                        d.line += 1;
                        Ya.Cursor.setPosition(d);
                    }
                    Ya.Line.emitChange({
                        by: "userscript"
                    });
                },
                updateLine (o, f, { noInfoboxUpdate } = {}) {
                    if (Ya.Layout.get() !== "page") {
                        return;
                    }
                    if (typeof o !== "string") {
                        throw new Error(`${o} is not a string`);
                    }
                    if (o.length > 10000) {
                        throw new Error("too long text");
                    }
                    if (f < 0 || f >= Ya.Line.lines.length) {
                        throw new Error("invalid index");
                    }
                    let u = {
                        text: o,
                        userId: Ya.CurrentUser.get().id
                    };
                    Ya.Line.lines.update(f, u, true, {
                        noInfoboxUpdate
                    });
                    Ya.Line.emitChange({
                        by: "userscript"
                    });
                },
                async waitForSave () {
                    if (Ya.Layout.get() === "page") {
                        while(Ya.Sync.hasUnpushedOrPushingCommit){
                            await lP.default(10);
                        }
                    }
                },
                get cursor () {
                    if (Ya.Layout.get() !== "page") {
                        return null;
                    }
                    let { line, char } = Ya.Cursor.getPosition();
                    return {
                        line,
                        char,
                        hasFocus: Ya.Cursor.hasFocus
                    };
                },
                get selection () {
                    if (Ya.Layout.get() !== "page" || !Ya.Selection.hasSelection()) {
                        return null;
                    }
                    let { start, end } = Ya.Selection.getRange({
                        normalizeOrder: true
                    });
                    return {
                        start: {
                            line: start.line,
                            char: start.char
                        },
                        end: {
                            line: end.line,
                            char: end.char
                        }
                    };
                },
                infobox: {
                    get titles () {
                        return Ya.Infobox.result?.map(({ title })=>title);
                    },
                    get (o) {
                        if (typeof o !== "string" || o.length < 1) {
                            throw new Error("invalid title.");
                        }
                        return Ya.Infobox.result?.find((c)=>c.title === o)?.infobox;
                    }
                }
            };
        }
        if (!window.cosense.Project) {
            window.cosense.Project = {
                get name () {
                    return Ya.CurrentProject.get().name;
                },
                get publicVisible () {
                    return Ya.CurrentProject.get().publicVisible;
                },
                get plan () {
                    return Ya.CurrentProject.get().plan;
                },
                get additionalPlans () {
                    return Ya.CurrentProject.get().additionalPlans;
                },
                get pages () {
                    return e_1(Ya.QuickSearch.pages);
                },
                async upload (o) {
                    if (!(o instanceof Blob)) {
                        throw new Error("file is not a Blob object");
                    }
                    if (!Va()) {
                        throw new Error("upload is not enabled");
                    }
                    if (!Wa(o)) {
                        throw new Error("file is not uploadable");
                    }
                    let f;
                    try {
                        f = await Ua(o);
                    } catch (error) {
                        if (error.redirectTo) {
                            if (confirm(`An error occurred while uploading a file from UserScript.
` + error.message)) {
                                open(error.redirectTo);
                            }
                        } else {
                            alert(`An error occurred while uploading a file from UserScript.
` + error.message);
                        }
                        throw error;
                    }
                    let c = o.name ? Xa(f) : `[${f.url}]`;
                    if (f.warnings?.length > 0) {
                        for (let u of f.warnings){
                            console.warn(u);
                        }
                    }
                    return {
                        text: c,
                        url: f.url,
                        warnings: f.warnings ?? []
                    };
                }
            };
        }
        if (!window.cosense.Layout) {
            window.cosense.__defineGetter__("Layout", ()=>Ya.Layout.get());
        }
        if (!window.cosense.User) {
            window.cosense.User = {
                get name () {
                    return Ya.CurrentUser.get()?.name;
                },
                get email () {
                    return Ya.CurrentUser.get()?.email;
                },
                get uiLanguage () {
                    return yr();
                }
            };
        }
        if (!window.cosense.ai) {
            window.cosense.ai = {
                async prompt ({ system, user }) {
                    let c = Ya.CurrentProject.get()?.name;
                    if (!c) {
                        throw new Error("projectName is empty.");
                    }
                    return (await x.post(`/api/projects/${c}/ai/prompt`, {
                        system,
                        user
                    })).data;
                }
            };
        }
        Ya.Line.addChangeListener(({ event })=>{
            let f = event?.by;
            requestAnimationFrame(()=>window.cosense.emit("lines:changed", {
                    by: f
                }));
        });
        let r;
        Ya.Page.addChangeListener(({ store, event })=>{
            if (event === "load" && r !== store.get()?.title) {
                requestAnimationFrame(()=>window.cosense.emit("page:changed"));
                r = store.get()?.title;
            }
        });
        let n;
        Ya.CurrentProject.addChangeListener(({ store, event })=>{
            if (event === "load" && n !== store.get()?.name) {
                requestAnimationFrame(()=>window.cosense.emit("project:changed"));
                n = store.get()?.name;
            }
        });
        let s;
        Ya.Layout.addChangeListener(({ store })=>{
            if (s !== store.get()) {
                requestAnimationFrame(()=>window.cosense.emit("layout:changed"));
                s = store.get();
            }
        });
        Ya.Infobox.addChangeListener(({ event })=>{
            if (event?.type === "set") {
                requestAnimationFrame(()=>window.cosense.emit("infobox:changed", {
                        by: event.by
                    }));
            }
        });
    }
    async reload() {
        this.removeUserScriptTag();
        this.waitingForApproval = false;
        this.emitChange();
        if (!this.shouldLoadScript) {
            return;
        }
        let e = Ya.CurrentProject.get();
        let r;
        try {
            r = (await this.fetchAsText()).data;
        } catch (error) {
            return console.error(error.stack || error);
        }
        this.sha1hash = await vc(r);
        if (this.sha1hash !== Na.get("userScriptSHA1")[e.id]) {
            this.waitingForApproval = Na.get("userScriptSHA1")[e.id] !== undefined ? "updated" : "initial";
            aP("waitingForApproval", this.waitingForApproval);
            this.emitChange();
            return;
        }
        this.renderUserScriptTag();
    }
    get shouldLoadScript() {
        let e = Ya.CurrentUser.get();
        if (!e || !e.config || !e.config.userScript) {
            return false;
        }
        return Ya.CurrentUser.isProjectMember && !!this.src;
    }
    get src() {
        let e = Ya.CurrentProject.get();
        let r = Ya.CurrentUser.get();
        if (!e || !e.name || !r || !r.name) {
            return null;
        }
        return `/api/code/${e.name}/${r.name}/script.js?${Date.now()}`;
    }
    async fetchAsText() {
        return x.get(this.src);
    }
    removeUserScriptTag() {
        let e = document.getElementsByTagName("body")[0];
        for (let r of [
            "user-script",
            "user-script-nomodule"
        ]){
            let n = document.getElementById(r);
            if (n) {
                e.removeChild(n);
            }
        }
    }
    renderUserScriptTag() {
        if (!this.shouldLoadScript) {
            return;
        }
        aP("render script tag");
        let e = Ya.CurrentProject.get();
        let r = Na.get("userScriptSHA1");
        r[e.id] = this.sha1hash;
        Na.set("userScriptSHA1", r);
        let n = document.createElement("script");
        n.async = true;
        n.setAttribute("src", this.src);
        n.setAttribute("type", "module");
        n.setAttribute("crossorigin", "use-credentials");
        n.id = "user-script";
        let s = document.createElement("script");
        s.noModule = true;
        s.async = true;
        s.setAttribute("src", this.src);
        s.id = "user-script-nomodule";
        let o = document.getElementsByTagName("body")[0];
        o.appendChild(n);
        o.appendChild(s);
        this.waitingForApproval = false;
        this.loaded = true;
        this.emitChange();
    }
}, a_2(Ui, "UserScript"), Ui);
export const Ya = {
    APILoading,
    AssetsCache,
    Billing,
    CurrentProject,
    CurrentUser,
    Cursor,
    DisableRealtimeCollaboration,
    DisplayStyle,
    Error: Error_1,
    FileSearch,
    GoogleMap,
    Infobox,
    InPageSearch,
    Invitation,
    Layout,
    Line,
    LineDOM,
    LinePermalink,
    MobileSelection,
    Notification,
    Page,
    PageAccess,
    PageHistory,
    PageList,
    PageMenu,
    PageTransitionContext,
    PopupMenu,
    PresentationMode,
    ProjectBackup,
    ProjectList,
    ProjectListFilter,
    ProjectScript,
    ProjectsLastAccessed,
    QuickSearch,
    RelatedPage,
    SearchForm,
    Selection,
    Settings,
    SharedCursor,
    Socket,
    Stream,
    SuggestPopup,
    Sync,
    TableBlock,
    TimeStamp,
    Translation,
    Undo,
    UserScript
};
for (let t of Object.values(Ya)){
    if (t.initialize) {
        t.initialize();
    }
}
a_2(G2, "plur");
const K2 = a_2((t)=>mP.default.unix(t).locale(yr()).fromNow(), "getRelativeDate");
function gP(t) {
    try {
        return new Date(t * 1000).toLocaleString();
    } catch (error) {
        console.error(error.stack || error);
    }
    return null;
}
a_2(gP, "getAbsoluteDate");
export function bb({ unixtime }) {
    if (Date.now() / 1000 - unixtime > 3600 * 24 * 30) {
        return $i.default.createElement(cb, {
            unixtime
        });
    }
    return $i.default.createElement(db, {
        unixtime
    });
}
a_2(bb, "DateLabel");
export function cb({ unixtime }) {
    let e = gP(unixtime);
    if (e) {
        return $i.default.createElement("span", {
            className: "date-label absolute"
        }, e);
    }
    return $i.default.createElement(db, {
        unixtime
    });
}
a_2(cb, "AbsoluteDateLabel");
export function db({ unixtime }) {
    let e = gP(unixtime) || "";
    let r = K2(unixtime);
    return $i.default.createElement("span", {
        className: "date-label relative",
        title: e
    }, r);
}
a_2(db, "RelativeDateLabel");
a_2(wse, "useInfiniteScroll");
const Z2 = e_2(mr(), 1);
function xse(t, e = {}) {
    let words = X2(t);
    let n = {
        words: [],
        excludes: []
    };
    for (let s of words){
        let [, o] = s.match(/^-(.+)$/) || [];
        if (o) {
            n.excludes.push(o);
        } else {
            n.words.push(s);
        }
    }
    if (e.allowExcludeOnly !== true && n.words.length < 1 && n.excludes.length > 0) {
        return {
            words,
            excludes: []
        };
    }
    return n;
}
a_2(xse, "parseQuery");
function X2(t) {
    return (t.match(/(-?"[^"]+"|-?[^\s]+)/g) || []).map((e)=>e.replace(/^(-?)"/, (r, n)=>n).replace(/"$/, ""));
}
a_2(X2, "splitQueryToWords");
a_2(EP, "ActionLink");
EP.propTypes = {
    role: zc.default.string.isRequired,
    onClick: zc.default.func.isRequired,
    children: zc.default.node.isRequired
};
export { yp as a, Ji as b, Py as c, Pl as d, kl as e, El as f, iF as g, sF as h, nY as i, iY as j, sY as k, oY as l, aY as m, cY as n, z as o, Ye as p, CanceledError as q, Ze as s, source as t, xg as u, _g as v, Xe as w, IW as y, Ne as z, vs as A, JW as B, ft as C, Zi as D, gm as E, To as F, mr as G, cr as H, pa as I, fe as J, F4 as K, vn as L, eF as M, mY as N, Ay as O, Cn as P, Al as Q, xs as R, vY as S, AY as T, pF as U, kt as V, _s as W, TY as X, eV as Y, tV as Z, qy as _, yr as $, On as ba, F8 as ga, Zq as ma, e$ as pa, ur as wa, Lu as xa, Tu as ya, _a as Ca, lh as Ga, Zt as Oa, Ks as Pa, Dne as Sa, dP as Za, PP as _a, EP as $a, G2 as ab, wse as eb, xse as fb };

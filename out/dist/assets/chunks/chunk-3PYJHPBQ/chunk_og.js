import { a } from "../chunk-FXCI2R73.js";
const og = a((t)=>t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102, "isHexDigit");
const cg = a((t, e, r)=>e + 2 < r && og(t.charCodeAt(e + 1)) && og(t.charCodeAt(e + 2)), "isPercentEncodedByte");
const ag = a((t)=>{
    if (t <= 57) {
        return t - 48;
    }
    return (t & 223) - 55;
}, "hexValue");
const rR = a((t)=>t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || t === 43 || t === 47 || t === 45 || t === 95, "isBase64Char");
const nR = a((t)=>t === 9 || t === 10 || t === 12 || t === 13 || t === 32, "isBase64Whitespace");
const iR = a((t)=>{
    let e = Math.floor(t / 4);
    let r = t % 4;
    return e * 3 + (r === 2 ? 1 : r === 3 ? 2 : 0);
}, "base64Bytes");
const sR = a((t)=>{
    let t_length = t.length;
    let r = 0;
    t_length > 0 && t.charCodeAt(t_length - 1) === 61 && (r++, t_length > 1 && t.charCodeAt(t_length - 2) === 61 && r++);
    return Math.floor((t_length - r) * 3 / 4);
}, "estimateBase64BufferAllocation");
const oR = a((t)=>{
    let t_length = t.length;
    let r = 0;
    let n = 0;
    let s = false;
    for(let o = 0; o < t_length; o++){
        let f = t.charCodeAt(o);
        if (f === 37 && cg(t, o, t_length)) {
            f = ag(t.charCodeAt(o + 1)) * 16 + ag(t.charCodeAt(o + 2));
            o += 2;
        }
        if (!nR(f)) {
            if (f === 61) {
                n++;
                continue;
            }
            if (!rR(f) || n > 0) {
                s = true;
                continue;
            }
            r++;
        }
    }
    if (s || n > 2 || n > 0 && (r + n) % 4 !== 0 || r % 4 === 1) {
        return sR(t);
    }
    return iR(r);
}, "estimatePercentDecodedBase64Bytes");
const aR = a((t, e)=>{
    if (!t || typeof t !== "string" || !t.startsWith("data:")) {
        return 0;
    }
    let r = t.indexOf(",");
    if (r < 0) {
        return 0;
    }
    let n = t.slice(5, r);
    let s = t.slice(r + 1);
    if (/;base64/i.test(n)) {
        return e(s);
    }
    let f = 0;
    for(let c = 0, u = s.length; c < u; c++){
        let d = s.charCodeAt(c);
        if (d === 37 && cg(s, c, u)) {
            f += 1;
            c += 2;
        } else if (d < 128) {
            f += 1;
        } else if (d < 2048) {
            f += 2;
        } else if (d >= 55296 && d <= 56319 && c + 1 < u) {
            let b = s.charCodeAt(c + 1);
            if (b >= 56320 && b <= 57343) {
                f += 4;
                c++;
            } else {
                f += 3;
            }
        } else {
            f += 3;
        }
    }
    return f;
}, "estimateDataURLBytes");
export function cl(t) {
    let e = typeof t === "string" ? t.indexOf("#") : -1;
    return aR(e === -1 ? t : t.slice(0, e), oR);
}
export const dn = "1.20.0";

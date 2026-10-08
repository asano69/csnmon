import { a } from "../chunks/chunk-FXCI2R73.js";
import { nt } from "./chunk_nt.js";
export const k0 = "production";
let Md;
let xD;
let wD;
let Qc;
export function TD(e) {
    let nt__sentryDebugIds = nt._sentryDebugIds;
    let nt__debugIds = nt._debugIds;
    if (!nt__sentryDebugIds && !nt__debugIds) {
        return {};
    }
    let n = nt__sentryDebugIds ? Object.keys(nt__sentryDebugIds) : [];
    let o = nt__debugIds ? Object.keys(nt__debugIds) : [];
    if (Qc && n.length === xD && o.length === wD) {
        return Qc;
    }
    xD = n.length;
    wD = o.length;
    Qc = {};
    if (!Md) {
        Md = {};
    }
    let s = a((a, l)=>{
        for (let c of a){
            let m = l[c];
            let f = Md?.[c];
            if (f && Qc && m) {
                Qc[f[0]] = m;
                if (Md) {
                    Md[c] = [
                        f[0],
                        m
                    ];
                }
            } else if (m) {
                let g = e(c);
                for(let v = g.length - 1; v >= 0; v--){
                    let y = g[v]?.filename;
                    if (y && Qc && Md) {
                        Qc[y] = m;
                        Md[c] = [
                            y,
                            m
                        ];
                        break;
                    }
                }
            }
        }
    }, "processDebugIds");
    if (nt__sentryDebugIds) {
        s(n, nt__sentryDebugIds);
    }
    if (nt__debugIds) {
        s(o, nt__debugIds);
    }
    return Qc;
}

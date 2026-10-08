import { Xe } from "./chunk_Xe.js";
import { Fe } from "./chunk_Bse.js";
import { ka } from "./chunk_mw.js";
const qg = {};
const _M = {};
export function Uo(e, t) {
    qg[e] = qg[e] || [];
    qg[e].push(t);
    return ()=>{
        let r = qg[e];
        if (r) {
            let n = r.indexOf(t);
            if (n !== -1) {
                r.splice(n, 1);
            }
        }
    };
}
export function Fo(e, t) {
    if (!_M[e]) {
        _M[e] = true;
        try {
            t();
        } catch (error) {
            if (Xe) {
                Fe.error(`Error while instrumenting ${e}`, error);
            }
        }
    }
}
export function vi(e, t) {
    let r = e && qg[e];
    if (r) {
        for (let n of r){
            try {
                n(t);
            } catch (error) {
                if (Xe) {
                    Fe.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ka(n)}
Error:`, error);
                }
            }
        }
    }
}

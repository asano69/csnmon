import { G, b, ba } from "../chunks/chunk-3PYJHPBQ.js";
import { C } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const tI = e(ba(), 1);
export const pK = e(ge(), 1);
const Mf = e(b(), 1);
const AH = e(G(), 1);
const IH = e(ge(), 1);
export function Df(e, t = 0) {
    if (Mf.isValidElement(e)) {
        let result = Mf.default.createElement("span", {
            className: `char-index c-${t}`,
            "data-char-index": t,
            key: t
        }, e);
        t += 1;
        return {
            result,
            charIndex: t
        };
    }
    let result = [];
    if (typeof e === "string") {
        e = AH.splitGraphemes(e);
    }
    for (let n of e){
        result.push(Mf.default.createElement("span", {
            className: `char-index c-${t}`,
            "data-char-index": t,
            "data-char": typeof n === "string" ? n : null,
            key: t
        }, n));
        t += 1;
    }
    return {
        result,
        charIndex: t
    };
}
export const PH = a(({ charIndexRef, isProjectMember })=>(r = 1, n)=>{
        let o = C(charIndexRef.current, charIndexRef.current + r).map((l)=>`c-${l}`).concat("char-index empty-char-index");
        let charIndexRef_current = charIndexRef.current;
        charIndexRef.current += r;
        let a = isProjectMember ? " " : "";
        return Mf.default.createElement("span", {
            className: IH.default(o),
            "data-char-index": n?.head ? charIndexRef_current : charIndexRef.current,
            key: `empty-char-index${charIndexRef_current}`
        }, a);
    }, "createEmptyCharIndex");
export const ts = e(b(), 1);
export const Ii = e(b(), 1);

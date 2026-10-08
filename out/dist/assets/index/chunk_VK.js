import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { C } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
import { Df } from "./chunk_tI.js";
export const VK = e(ge(), 1);
const Zf = e(b(), 1);
const bK = e(ge(), 1);
export const Nu = a((e = undefined)=>{
    let tRef = Zf.useRef(0);
    tRef.current = 0;
    let getCharIndex = a(()=>tRef.current, "getCharIndex");
    let setCharIndex = a((a)=>{
        let { result, charIndex } = Df(a, tRef.current);
        tRef.current = charIndex;
        return result;
    }, "setCharIndex");
    let emptyCharIndex = a((a = 1)=>{
        let tRef_current = tRef.current;
        let c = C(tRef_current, tRef_current + a).map((g)=>`c-${g}`).concat("char-index empty-char-index");
        let m = tRef_current;
        tRef.current = tRef_current + a;
        return Zf.default.createElement("span", {
            className: bK.default(c),
            "data-char-index": tRef_current,
            key: `empty-char-index${m}`
        }, "");
    }, "emptyCharIndex");
    let addCharIndex = a((a)=>{
        tRef.current += a;
    }, "addCharIndex");
    Zf.useEffect(()=>{
        if (e) {
            tRef.current = 0;
        }
    }, [
        e
    ]);
    return {
        getCharIndex,
        setCharIndex,
        emptyCharIndex,
        addCharIndex
    };
}, "useCharIndex");

import { Za } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const B$ = [
    "http:",
    "https:",
    "mailto:"
];
const Hfe = {
    codeblock: /^\s*code:\s*[^\s+]/,
    tableblock: /^\s*table:\s*[^\s+]/
};
const jfe = {
    heading: /^#{1,6}\s[^\s]+$/,
    listItemDash: /^\s*-\s.+$/,
    listItemAsterisk: /^\s*\*\s.+$/,
    strong: /\*\*.+?\*\*/g
};
export function Gfe(e) {
    let t = e.split(`
`);
    if (t.length < 2) {
        return false;
    }
    for (let r of t){
        for (let n of Object.values(Hfe)){
            if (n.test(r)) {
                return false;
            }
        }
    }
    for (let r of t){
        for (let n of Object.values(jfe)){
            if (n.test(r)) {
                return true;
            }
        }
    }
    return false;
}
export const yH = e(Za(), 1);

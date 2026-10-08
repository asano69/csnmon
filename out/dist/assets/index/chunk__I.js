import { G, L, b, ea } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FTBZRL4G.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
export const _I = e(b(), 1);
const ox = e(b(), 1);
export const HK = a_1(({ project, page })=>{
    let [r, setR] = ox.useState(false);
    let src = `/api/pages/${project}/${L(page)}/icon`;
    if (r) {
        return `[${page}.icon]`;
    }
    return ox.default.createElement("img", {
        src,
        alt: page,
        className: "icon",
        onError: ()=>setR(true)
    });
}, "Icon");
export const tg = e(b(), 1);
export const H1 = e(a(), 1);
export const eY = e(ea(), 1);
export const CI = e(G(), 1);

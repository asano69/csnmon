import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const rc = e(b(), 1);
export const rr = e(b(), 1);
export const c8 = e(ge(), 1);
const ed = e(b(), 1);
export const u8 = a(({ title, loadErrorText })=>{
    let [r, setR] = ed.useState(false);
    let name = Ya.CurrentProject.name;
    ed.useEffect(()=>{
        setR(false);
    }, [
        name
    ]);
    if (r) {
        return ed.default.createElement(ed.default.Fragment, null, loadErrorText || "");
    }
    let src = `/api/pages/${name}/${title}/icon`;
    return ed.default.createElement("img", {
        src,
        className: "icon",
        onError: ()=>setR(true)
    });
}, "Icon");
export const Ls = e(b(), 1);
export const d8 = e(ge(), 1);

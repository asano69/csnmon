import { Ya, ta } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FXCI2R73.js";
const VZ = a(()=>document.getElementById("favicon"), "findFaviconTag");
const K_e = VZ().href;
export function Y_e() {
    let e = ta(Ya.CurrentProject.get().image);
    let t = VZ();
    if (t) {
        t.href = e || K_e;
    }
}

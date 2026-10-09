import { $a, b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const Dl = e(b(), 1);
export function U7({ projects }) {
    let r = projects.sort((a, l)=>a.name.length - l.name.length);
    let [n, setN] = Dl.useState(projects.length <= 3);
    if (!n) {
        r = r.slice(0, 3);
    }
    let s = projects.length > 1 ? `${projects.length} business projects` : "Business project";
    return Dl.default.createElement(Dl.default.Fragment, null, Dl.default.createElement("label", null, s), Dl.default.createElement("ul", null, r.map(({ name })=>Dl.default.createElement("li", {
            key: name
        }, Dl.default.createElement("a", {
            href: `/projects/${name}/settings/billing`
        }, `/${name}`))), " ", !n && Dl.default.createElement("li", null, "And", " ", Dl.default.createElement($a, {
        role: "button",
        onClick: ()=>setN(true)
    }, projects.length - 3, " more projects."))));
}

import { $a, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Te } from "./chunk_iq.js";
const Us = e(b(), 1);
export function wv({ projectNames }) {
    let [r, setR] = Us.useState(projectNames?.length < 4);
    function o({ name }) {
        return Us.default.createElement(Te, {
            href: `/projects/${name}/settings/members`
        }, "/", name);
    }
    a(o, "ProjectLink");
    if (r) {
        return Us.default.createElement("div", {
            className: "known-projects"
        }, Us.default.createElement("ul", null, projectNames.map((s)=>Us.default.createElement("li", {
                key: s
            }, Us.default.createElement(o, {
                name: s
            })))));
    }
    return Us.default.createElement("div", {
        className: "known-projects"
    }, Us.default.createElement("ul", null, projectNames.slice(0, 2).map((s)=>Us.default.createElement("li", {
            key: s
        }, Us.default.createElement(o, {
            name: s
        }))), " ", Us.default.createElement("li", null, "And", " ", Us.default.createElement($a, {
        onClick: ()=>setR(true),
        role: "button"
    }, projectNames.length - 3 + 1, " more projects."))));
}
export const dn = e(b(), 1);

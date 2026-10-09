import { Ya, b, ca } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Fv = e(b(), 1);
export function w9({ disabled, projectName, searchQuery }) {
    let { targetCategories } = Ya.FileSearch;
    let onChange = a((s)=>{
        let { value } = s.target;
        Ya.FileSearch.toggleTargetCategory({
            name: value,
            projectName,
            searchQuery
        });
    }, "onChange");
    return Fv.default.createElement("div", {
        className: "search-options file-search-options"
    }, ca.map((s)=>{
        let checked = targetCategories.includes(s);
        return Fv.default.createElement("div", {
            className: "checkbox",
            key: s
        }, Fv.default.createElement("label", null, Fv.default.createElement("input", {
            type: "checkbox",
            value: s,
            checked,
            onChange,
            disabled
        }), s));
    }));
}

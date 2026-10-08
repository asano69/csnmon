import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Ul = e(b(), 1);
export function x9() {
    let searchTargetField = Ya.PageList.searchTargetField;
    let onChange = a((r)=>{
        let value = r.target.value;
        if (value === "helpfeels") {
            let o = searchTargetField !== "helpfeels" ? "helpfeels" : "lines";
            Ya.PageList.setSearchTargetField(o);
        } else {
            switch(searchTargetField){
                case "lines":
                    Ya.PageList.setSearchTargetField("title");
                    break;
                case "title":
                    Ya.PageList.setSearchTargetField("lines");
                    break;
                default:
                    Ya.PageList.setSearchTargetField(value);
                    break;
            }
        }
    }, "onChange");
    return Ul.default.createElement("div", {
        className: "search-options page-search-options"
    }, Ul.default.createElement("div", {
        className: "checkbox"
    }, Ul.default.createElement("label", null, Ul.default.createElement("input", {
        type: "checkbox",
        value: "title",
        checked: [
            "title",
            "lines"
        ].includes(searchTargetField),
        disabled: [
            "title",
            "lines"
        ].includes(searchTargetField),
        onChange
    }), "Title")), Ul.default.createElement("div", {
        className: "checkbox"
    }, Ul.default.createElement("label", null, Ul.default.createElement("input", {
        type: "checkbox",
        value: "lines",
        checked: searchTargetField === "lines",
        onChange
    }), "Body")), Ul.default.createElement("div", {
        className: "checkbox"
    }, Ul.default.createElement("label", null, Ul.default.createElement("input", {
        type: "checkbox",
        value: "helpfeels",
        checked: searchTargetField === "helpfeels",
        onChange
    }), "Question")));
}

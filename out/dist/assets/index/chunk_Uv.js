import { Ja, Ma as items, Ya, _, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { bn } from "./chunk_jo.js";
import { Jp, rg } from "./chunk_Rt.js";
const Uv = e(b(), 1);
export function rZ({ projectName }) {
    if (Ya.PageList.searchBackend !== "elasticsearch") {
        return null;
    }
    let sort = Ya.PageList.getSearchPageSort(projectName);
    if (!items[sort]) {
        sort = Ja;
    }
    return Uv.default.createElement("div", {
        className: "page-sort-menu"
    }, Uv.default.createElement(bn, {
        className: "dropdown"
    }, Uv.default.createElement(Jp, null, _(items[sort])), Uv.default.createElement(rg, {
        onSelect: (sort)=>Ya.PageList.setSearchPageSort({
                projectName,
                sort
            }),
        sort,
        items
    })));
}

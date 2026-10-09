import { Y, Ya, Z, b, db, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const pn = e(b(), 1);
export const _K = e(ge(), 1);
const Qf = e(b(), 1);
export function aI({ updated }) {
    return Qf.default.createElement("div", {
        className: "menu-item",
        onClick: a(async ()=>{
            let r = Ya.CurrentProject.get();
            let n = Ya.Page.get();
            let o;
            try {
                o = await x.get(`/api/page-snapshots/${r.name}/${n.id}/find?updated=${updated}`);
            } catch (error) {
                console.error(error);
                return;
            }
            location.href = o.data.url;
        }, "onClick")
    }, Qf.default.createElement(Y, null, Qf.default.createElement(db, {
        unixtime: updated
    }), "のページを表示"), Qf.default.createElement(Z, null, "Show page from ", Qf.default.createElement(db, {
        unixtime: updated
    })));
}

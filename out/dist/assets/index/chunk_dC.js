import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const dC = e(b(), 1);
export function CH({ show }) {
    if (show) {
        return dC.default.createElement("div", {
            className: "overlay-box"
        }, "Uploading Image ", dC.default.createElement("i", {
            className: "fa fa-spinner"
        }));
    }
    return null;
}

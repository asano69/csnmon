import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const QV = e(b(), 1);
const _ve = /^https:\/\/(?:www\.|mobile\.|m\.|)(?:twitter|x)\.com\/([A-Za-z0-9_]*)\/(?:status|statuses)\/\d+/;
export const JS = a((e)=>_ve.test(e), "isTwitterURL");
export function XA({ url }) {
    if (JS(url)) {
        return QV.default.createElement("i", {
            className: "fab fa-twitter favicon"
        });
    }
    return null;
}

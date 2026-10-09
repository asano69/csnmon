import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const X1 = e(b(), 1);
const qm = e(b(), 1);
const gx = e(ge(), 1);
export const AY = a(({ field, sortBy, sortOrder, onClick })=>{
    let enable = field === sortBy;
    let s = enable && sortOrder === 1 ? "up" : "down";
    let a = gx.default("column-sort-button", {
        enable
    });
    return qm.default.createElement("button", {
        type: "button",
        className: a,
        onClick
    }, qm.default.createElement("i", {
        className: `fas fa-chevron-${s}`
    }));
}, "ColumnSortButton");
export const IY = a(({ showImage, onClick })=>{
    let r = gx.default("show-image-button", {
        enable: showImage
    });
    return qm.default.createElement("button", {
        type: "button",
        className: r,
        onClick
    }, qm.default.createElement("i", {
        className: "fas fa-image"
    }));
}, "ShowImageButton");
export const PY = a(({ showTimestamps, onClick })=>{
    let r = gx.default("show-timestamps-button", {
        enable: showTimestamps
    });
    return qm.default.createElement("button", {
        type: "button",
        className: r,
        onClick
    }, qm.default.createElement("i", {
        className: "fas fa-clock"
    }));
}, "ShowTimestampsButton");

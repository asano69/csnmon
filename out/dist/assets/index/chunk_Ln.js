import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { db } from "./chunk_nU.js";
export const Ln = e(b(), 1);
export const _q = e(db(), 1);
export const zi = Ln.forwardRef(a(({ id, placement = "top", style, arrowStyle, visible = true, children }, ref)=>Ln.default.createElement("div", {
        ref,
        id,
        role: "tooltip",
        className: `tooltip ${placement}${visible ? " in" : ""}`,
        style
    }, Ln.default.createElement("div", {
        className: "tooltip-arrow",
        style: arrowStyle
    }), Ln.default.createElement("div", {
        className: "tooltip-inner"
    }, children)), "Tooltip"));

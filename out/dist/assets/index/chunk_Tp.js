import { $a, A, Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Fi, bn } from "./chunk_jo.js";
export const Tp = e(b(), 1);
const su = e(b(), 1);
const hq = e(A(), 1);
export function kb() {
    let e = a(()=>{
        location.reload();
    }, "reload");
    let t = a(()=>{
        let title = Ya.Layout.get() === "page" ? Ya.Line.lines.getTitle() : document.title;
        let text = `${title} ${location.href}`;
        return navigator.share({
            title,
            text
        });
    }, "share");
    return su.default.createElement(hq.When, {
        standalone_app: true,
        and: true,
        touch_device: true
    }, su.default.createElement(bn, {
        as: "li",
        className: "dropdown browser-like-tool-menu"
    }, su.default.createElement(Fi, {
        className: "dropdown-toggle",
        role: "button"
    }, su.default.createElement("i", {
        className: "kamon kamon-kebab-vertical"
    })), su.default.createElement("ul", {
        className: "dropdown-menu dropdown-menu-right"
    }, su.default.createElement("li", null, su.default.createElement($a, {
        onClick: e,
        role: "menuitem"
    }, "Reload")), typeof navigator.share === "function" && su.default.createElement("li", null, su.default.createElement($a, {
        onClick: t,
        role: "menuitem"
    }, "Share")))));
}

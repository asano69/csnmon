import { $a, A, Ia, La as items, Y, Z, _, b, da, ea } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
import { Fi, bn } from "./chunk_jo.js";
export const Rt = e(b(), 1);
export const jI = e(A(), 1);
export const DY = e(da(), 1);
export const BY = e(ea(), 1);
export const UY = e(ge(), 1);
const wc = e(b(), 1);
const PI = e(ge(), 1);
const xc = e(b(), 1);
const tY = e(ge(), 1);
export const Jp = a(({ children })=>xc.default.createElement(Fi, {
        className: "btn tool-btn dropdown-toggle",
        role: "button",
        tabIndex: 0,
        id: "dropdownMenuSort"
    }, children, xc.default.createElement("span", {
        className: "kamon kamon-caret-down"
    })), "Button");
export const rg = a(({ sort, items, onSelect })=>{
    let n = [];
    for (let [o, s] of Object.entries(items)){
        if (s) {
            n.push(xc.default.createElement("li", {
                key: o
            }, xc.default.createElement($a, {
                role: "menuitem",
                onClick: ()=>onSelect(o),
                className: tY.default({
                    selected: sort === o
                })
            }, _(s))));
        }
    }
    return xc.default.createElement("ul", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "dropdownMenuSort"
    }, xc.default.createElement("li", {
        key: "header",
        className: "dropdown-header"
    }, xc.default.createElement(Y, null, "ソート"), xc.default.createElement(Z, null, "Sort by")), n);
}, "Menu");
const Bve = 2;
export function rY({ sort, onSelect }) {
    if (!items[sort]) {
        sort = Ia;
    }
    let n = Object.keys(items).slice(0, Bve);
    let selected = !n.includes(sort);
    return wc.default.createElement("div", {
        className: "page-sort-menu related-page-sort-menu"
    }, wc.default.createElement("div", {
        className: "sort-tabs",
        role: "group"
    }, n.map((s)=>wc.default.createElement($a, {
            key: s,
            role: "button",
            className: PI.default("btn tool-btn sort-tab", {
                selected: sort === s
            }),
            "aria-pressed": sort === s,
            onClick: ()=>onSelect(s)
        }, _(items[s])))), wc.default.createElement(bn, {
        className: "dropdown"
    }, wc.default.createElement(Fi, {
        className: PI.default("btn tool-btn dropdown-toggle", {
            selected,
            "tab-selected": !selected
        }),
        role: "button",
        tabIndex: 0,
        id: "dropdownMenuSort"
    }, wc.default.createElement("span", {
        className: "current-sort-label"
    }, _(items[sort])), wc.default.createElement("span", {
        className: "kamon kamon-caret-down"
    })), wc.default.createElement(rg, {
        sort,
        items,
        onSelect
    })));
}

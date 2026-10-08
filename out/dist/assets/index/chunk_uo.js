import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const uo = e(b(), 1);
const Lu = e(b(), 1);
export function g9({ project, children }) {
    return Lu.default.createElement("div", {
        className: "container new-billings-page"
    }, Lu.default.createElement("div", {
        className: "row"
    }, Lu.default.createElement("div", {
        className: "col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0"
    }, Lu.default.createElement("ol", {
        className: "breadcrumb"
    }, Lu.default.createElement("li", null, Lu.default.createElement("a", {
        href: `/projects/${project.name}/settings/billing`
    }, project.displayName, " (Billing)"))), Lu.default.createElement("h1", null, "Payment"), Lu.default.createElement("div", {
        className: "panel panel-default"
    }, Lu.default.createElement("div", {
        className: "panel-body"
    }, children)))));
}

import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const Ou = e(b(), 1);
export function Dx({ project, type }) {
    let r = project.publicVisible ? Ou.default.createElement(Ou.default.Fragment, null, Ou.default.createElement("label", null, "Your project is public."), Ou.default.createElement("p", {
        className: "help-block"
    }, "Anyone can access the uploaded ", type, "s.")) : Ou.default.createElement(Ou.default.Fragment, null, Ou.default.createElement("label", null, "Your project is private."), Ou.default.createElement("p", {
        className: "help-block"
    }, "Only project members can access the uploaded ", type, "s."));
    return Ou.default.createElement("div", {
        className: `file-${type}-setting advanced-setting`
    }, r);
}

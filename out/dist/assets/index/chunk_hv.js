import { Za, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { W8 } from "./chunk_SJ.js";
export const hv = e(b(), 1);
const tl = e(b(), 1);
const NJ = e(Za(), 1);
const kJ = a((e)=>NJ.default.unix(e).format("YYYY-MM-DD HH:mm"), "formatTimestamp");
export function V8({ token, onDeleted }) {
    return tl.default.createElement("div", {
        className: "account-list-item"
    }, tl.default.createElement("div", {
        className: "account-info"
    }, tl.default.createElement("div", {
        className: "account-name"
    }, token.name), tl.default.createElement("code", null, token.tokenPrefix, "…")), tl.default.createElement("div", {
        className: "account-created"
    }, tl.default.createElement("span", null, "Created at: "), tl.default.createElement("span", {
        className: "account-created-at"
    }, kJ(token.created)), token.lastUsedAt && tl.default.createElement("span", {
        className: "account-last-used-at"
    }, tl.default.createElement("span", null, " / Last used at: "), kJ(token.lastUsedAt))), tl.default.createElement("div", {
        className: "actions"
    }, tl.default.createElement(W8, {
        token,
        onDeleted
    })));
}

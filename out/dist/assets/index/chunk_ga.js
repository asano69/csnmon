import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { vn } from "./chunk_Nq.js";
const ga = e(b(), 1);
export function G8({ token, onDismiss }) {
    let [r, setR] = ga.useState(false);
    ga.useEffect(()=>{
        setR(false);
    }, [
        token
    ]);
    return ga.default.createElement("div", {
        role: "alert",
        className: "alert alert-success alert-dismissible"
    }, ga.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: onDismiss
    }, ga.default.createElement("span", {
        "aria-hidden": "true"
    }, "×"), ga.default.createElement("span", {
        className: "sr-only"
    }, "Close alert")), ga.default.createElement("p", null, "Copy this token now. It won't be shown again."), ga.default.createElement("div", {
        className: "issued-token"
    }, ga.default.createElement("input", {
        type: "text",
        className: "form-control",
        value: token,
        disabled: true
    }), ga.default.createElement("button", {
        type: "button",
        className: "btn btn-default btn-auto-block",
        onClick: a(async ()=>{
            try {
                await vn(token);
                setR(true);
            } catch  {
                alert(`Oops, copy failed. Please copy the link manually.
Your browser may not support the copy to clipboard feature.`);
            }
        }, "onClickCopy")
    }, r ? "Copied!" : "Copy")));
}

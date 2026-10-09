import { Y, Z, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { i9 } from "./chunk_ji.js";
const as = e(b(), 1);
export function n9() {
    let value = new URL(location).searchParams.get("token");
    let [t, setT] = as.useState(false);
    return as.default.createElement("div", {
        className: "container login-by-email-confirm-page"
    }, as.default.createElement("div", {
        className: "row"
    }, as.default.createElement("div", {
        className: "col-md-6 col-md-offset-3"
    }, as.default.createElement("div", {
        className: "text-center"
    }, as.default.createElement("h1", {
        style: {
            marginTop: "100px"
        }
    }, as.default.createElement(Y, null, "メール認証でログイン"), as.default.createElement(Z, null, "Log in with email")), as.default.createElement("form", {
        method: "GET",
        action: "/auth/email/callback",
        onSubmit: a((o)=>{
            if (t) {
                o.preventDefault();
                return;
            }
            setT(true);
        }, "onSubmit")
    }, as.default.createElement("button", {
        type: "submit",
        className: "btn btn-default btn-lg",
        disabled: t
    }, as.default.createElement(Y, null, "ログイン"), as.default.createElement(Z, null, "Confirm")), as.default.createElement("input", {
        type: "hidden",
        name: "token",
        value
    }))))));
}
export const Pv = i9;

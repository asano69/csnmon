import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Dv = e(b(), 1);
export const YX = a(({ status })=>{
    let t = status === "past_due";
    let r = status?.startsWith("incomplete");
    if (t) {
        return Dv.default.createElement("div", {
            className: "alert alert-danger"
        }, "Unable to process payment. Please update your card details or try a new card.");
    }
    if (r) {
        return Dv.default.createElement("div", {
            className: "alert alert-danger"
        }, "Payment has not been completed (status:", status, ").", Dv.default.createElement("br", null), "Your card issuer may require additional verification to complete the payment.", Dv.default.createElement("br", null), "Please update your card information. You may have received a verification request via email or SMS (e.g., 3D Secure authentication).");
    }
    return null;
}, "StatusError");

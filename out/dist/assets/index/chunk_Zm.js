import { b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const Zm = e(b(), 1);
const KX = e(ge(), 1);
export function zx({ billingId, children }) {
    let [r, setR] = Zm.default.useState(false);
    let [o, setO] = Zm.default.useState(null);
    let onClick = a(async ()=>{
        if (!r) {
            setR(true);
            setO(null);
            try {
                let { data } = await x.post(`/api/billings/${billingId}/create-customer-portal-session`);
                window.location.href = data.url;
            } catch (error) {
                setO(error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.");
                setR(false);
            }
        }
    }, "onClick");
    let className = KX.default("btn btn-default", {
        disabled: r
    });
    return Zm.default.createElement(Zm.default.Fragment, null, o && Zm.default.createElement("div", {
        className: "alert alert-danger"
    }, o), Zm.default.createElement("button", {
        disabled: r,
        onClick,
        className
    }, r ? "Loading..." : children));
}

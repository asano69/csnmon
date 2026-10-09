import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { xJ } from "./chunk_SJ.js";
const Bs = e(b(), 1);
export function j8({ onCreated }) {
    let [t, setT] = Bs.useState("");
    let [n, setN] = Bs.useState(false);
    let [s, setS] = Bs.useState(null);
    return Bs.default.createElement("div", null, Bs.default.createElement("form", {
        onSubmit: a(async (c)=>{
            c.preventDefault();
            if (!n) {
                setN(true);
                setS(null);
                try {
                    let m = await xJ(t);
                    onCreated(m);
                    setT("");
                } catch (error) {
                    setS(error.response?.data?.message || "Can't connect to the servers. Please try again later.");
                } finally{
                    setN(false);
                }
            }
        }, "onSubmit")
    }, s && Bs.default.createElement("div", {
        className: "alert alert-danger"
    }, s), Bs.default.createElement("div", {
        className: "form-group"
    }, Bs.default.createElement("h4", null, "New Personal Access Token"), Bs.default.createElement("label", {
        className: "control-label",
        htmlFor: "personalAccessTokenName"
    }, "Purpose of using token"), Bs.default.createElement("input", {
        type: "text",
        className: "form-control",
        id: "personalAccessTokenName",
        value: t,
        placeholder: "Claude Code",
        onChange: (c)=>setT(c.target.value)
    })), Bs.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-auto-block",
        disabled: n
    }, "Add")), Bs.default.createElement("hr", null));
}

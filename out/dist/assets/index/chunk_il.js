import { F, Ya, b, r } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const il = e(b(), 1);
const VX = e(ge(), 1);
const c_e = r("src/client/js/components/billings-info-page/add-project-form.jsx");
export function p9() {
    let e = "";
    try {
        let f = new URL(location).searchParams.get("addProject");
        if (F(f).isValid) {
            e = f;
        }
    } catch (error) {
        console.error(error);
    }
    let [t, setT] = il.useState(e);
    let [disabled, setDisabled] = il.useState(false);
    let [s, setS] = il.useState(!!e);
    async function onSubmit(m) {
        m.preventDefault();
        setDisabled(true);
        if (!t || !confirm(`Add project "${t}" to this billing?`)) {
            return setDisabled(false);
        }
        c_e("projectName:", t);
        try {
            await Ya.Billing.addPaidProject({
                projectName: t
            });
        } catch (error) {
            let g = error.response && error.response.data ? error.response.data.message : error.message || "Can’t connect to the servers. Please try again later.";
            alert(g);
            return setDisabled(false);
        }
        setDisabled(false);
        setT("");
    }
    a(onSubmit, "onSubmit");
    if (s) {
        let onClick = a(()=>{
            setT("");
            setS(false);
        }, "cancel");
        return il.default.createElement("form", {
            onSubmit,
            className: "add-project-form"
        }, il.default.createElement("input", {
            type: "text",
            placeholder: "Project name",
            className: "form-control project-name",
            onChange: (f)=>setT(f.target.value),
            value: t
        }), il.default.createElement("button", {
            type: "submit",
            className: VX.default("btn btn-primary", {
                "btn-highlight-blink": !!e
            }),
            disabled
        }, "Add"), il.default.createElement("button", {
            type: "button",
            className: "btn btn-default",
            disabled,
            onClick
        }, "Cancel"));
    }
    return il.default.createElement("div", {
        className: "add-project-button"
    }, il.default.createElement("button", {
        onClick: a(()=>{
            setS(true);
        }, "onClick"),
        className: "btn btn-default"
    }, "Add project"), il.default.createElement("a", {
        href: "/pricing#faqs",
        target: "_blank",
        className: "pricing"
    }, "Pricing"));
}

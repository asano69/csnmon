import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Gi = e(b(), 1);
export function d9({ companyName }) {
    let [t, setT] = Gi.useState(companyName);
    let [n, setN] = Gi.useState(false);
    let [disabled, setDisabled] = Gi.useState(false);
    let [l, setL] = Gi.useState(null);
    let onSubmit = a(async (y)=>{
        y.preventDefault();
        setL(null);
        setDisabled(true);
        let companyName_1 = t?.trim();
        if (!companyName_1) {
            setL("Company name is required.");
            return setDisabled(false);
        }
        try {
            if (companyName_1 !== companyName) {
                await Ya.Billing.updateCompanyName({
                    companyName: companyName_1
                });
            }
        } catch (error) {
            let T = error.response?.data?.message || "Can’t connect to the servers. Please try again later.";
            setL(T);
            return setDisabled(false);
        }
        setDisabled(false);
        setN(false);
    }, "onSubmit");
    let onChange = a((y)=>setT(y.target.value), "onChange");
    let onBlur = a(()=>setT(t.trim()), "onBlur");
    return Gi.default.createElement(Gi.default.Fragment, null, l && Gi.default.createElement("div", {
        className: "alert alert-danger"
    }, l), n ? a(()=>Gi.default.createElement("form", {
            onSubmit,
            className: "update-company-name-form"
        }, Gi.default.createElement("div", {
            className: "form-group"
        }, Gi.default.createElement("input", {
            type: "text",
            className: "form-control",
            placeholder: "Company Name",
            value: t,
            onChange,
            onBlur
        })), Gi.default.createElement("div", {
            className: "form-group buttons"
        }, Gi.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary",
            disabled
        }, "Update"), Gi.default.createElement("button", {
            type: "submit",
            className: "btn btn-default",
            onClick: a(()=>{
                setT(companyName);
                setN(false);
                setL(null);
            }, "onClick")
        }, "Cancel"))), "renderUpdateCompanyNameForm")() : a(()=>Gi.default.createElement("div", {
            className: "company-name-info"
        }, Gi.default.createElement("span", null, companyName), Gi.default.createElement("button", {
            type: "button",
            className: "btn btn-default",
            onClick: a(()=>{
                setN(true);
                setL(null);
            }, "onClick")
        }, "Change")), "renderCompanyNameInfo")());
}

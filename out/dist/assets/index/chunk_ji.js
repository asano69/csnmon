import { b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { o9 } from "./chunk_Vr_2.js";
const ji = e(b(), 1);
export const i9 = class i9 extends ji.Component {
    constructor(){
        super();
        c(this, "onSubmit");
    }
    componentDidMount() {
        this.emailInput.focus();
    }
    async onSubmit(t) {
        t.preventDefault();
        let value = this.emailInput.value;
        let value_1 = this.passwordInput.value;
        try {
            if ((await x.post("/auth/easy-trial", {
                email: value,
                password: value_1
            })).status === 200) {
                location.reload();
                location.replace("/");
            }
        } catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 422)) {
                alert(error.response.data.message || "Authentication failed.");
            } else {
                alert("Can’t connect to the servers. Please try again later.");
            }
        }
    }
    render() {
        return ji.default.createElement("div", {
            className: "container"
        }, ji.default.createElement("div", {
            className: "row"
        }, ji.default.createElement("div", {
            className: "col-md-6 col-md-offset-3"
        }, ji.default.createElement("div", null, ji.default.createElement("h1", {
            style: {
                marginTop: "100px"
            }
        }, "Log in"), ji.default.createElement("form", {
            onSubmit: this.onSubmit
        }, ji.default.createElement("div", {
            className: "form-group"
        }, ji.default.createElement("p", null, ji.default.createElement("label", {
            htmlFor: "email"
        }, "Email"), ji.default.createElement("input", {
            type: "email",
            className: "form-control",
            required: true,
            name: "email",
            id: "email",
            ref: (t)=>{
                this.emailInput = t;
            }
        })), ji.default.createElement("p", null, ji.default.createElement("label", {
            htmlFor: "password"
        }, "Password"), ji.default.createElement("input", {
            type: "password",
            className: "form-control",
            required: true,
            name: "password",
            id: "password",
            ref: (t)=>{
                this.passwordInput = t;
            }
        }))), ji.default.createElement("div", {
            className: "form-group"
        }, ji.default.createElement("button", {
            type: "submit",
            className: "btn btn-default"
        }, "Log in")))))));
    }
};
export const Ov = o9;

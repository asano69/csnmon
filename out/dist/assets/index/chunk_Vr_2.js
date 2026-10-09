import { Y, Ya, Z, b } from "../chunks/chunk-GCRJFCUZ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_Yz.js";
const Vr = e(b(), 1);
export const o9 = class o9 extends mt {
    constructor(t){
        super(t);
        c(this, "onSubmit", "onDismiss");
        this.subscribe(Ya.UserScript);
        this.state = {
            waitingForApproval: Ya.UserScript.waitingForApproval,
            dismissed: false
        };
    }
    onStoreChange({ store }) {
        if (store === Ya.UserScript) {
            this.setState({
                waitingForApproval: Ya.UserScript.waitingForApproval
            });
        }
    }
    onSubmit(t) {
        t.preventDefault();
        Ya.UserScript.renderUserScriptTag();
    }
    onDismiss() {
        this.setState({
            dismissed: true
        });
    }
    render() {
        if (this.state.dismissed || !Ya.UserScript.shouldLoadScript) {
            return null;
        }
        let { waitingForApproval } = this.state;
        if (!waitingForApproval) {
            return null;
        }
        let r = Ya.CurrentUser.get();
        let n = Ya.CurrentProject.get();
        return Vr.default.createElement("div", {
            className: "container"
        }, Vr.default.createElement("div", {
            className: "alert alert-info alert-dismissible userscript-alert text-center",
            role: "alert"
        }, Vr.default.createElement("form", {
            onSubmit: this.onSubmit
        }, Vr.default.createElement("button", {
            type: "button",
            className: "close",
            onClick: this.onDismiss,
            "aria-label": "Close"
        }, Vr.default.createElement("span", {
            "aria-hidden": "true"
        }, "×")), Vr.default.createElement("span", null, waitingForApproval == "initial" ? Vr.default.createElement(Vr.default.Fragment, null, Vr.default.createElement(Y, null, "UserScriptが設定されました。"), Vr.default.createElement(Z, null, "You have UserScript set in this project. ")) : Vr.default.createElement(Vr.default.Fragment, null, Vr.default.createElement(Y, null, "UserScriptが更新されました。"), Vr.default.createElement(Z, null, "Your UserScript has been updated. ")), Vr.default.createElement(Y, null, Vr.default.createElement("a", {
            href: `/${n.name}/${r.name}`
        }, "自分のページ"), "を確認してください。"), Vr.default.createElement(Z, null, "Please check", " ", Vr.default.createElement("a", {
            href: `/${n.name}/${r.name}`
        }, "your page"), ".")), Vr.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary"
        }, waitingForApproval === "initial" ? Vr.default.createElement(Vr.default.Fragment, null, Vr.default.createElement(Y, null, "新しいUserScriptを読み込む"), Vr.default.createElement(Z, null, "Load new UserScript")) : Vr.default.createElement(Vr.default.Fragment, null, Vr.default.createElement(Y, null, "UserScriptを読み込む"), Vr.default.createElement(Z, null, "Load UserScript"))))));
    }
};

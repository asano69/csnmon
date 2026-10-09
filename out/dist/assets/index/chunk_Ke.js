import { Fa, Y, Ya, Z, b, ka } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Ke = e(b(), 1);
const JX = e(Fa(), 1);
const m_e = a(({ message })=>Ke.default.createElement("div", {
        className: "alert alert-danger"
    }, message), "Error");
export const XX = a(()=>{
    let e = Ya.CurrentUser.get();
    let [t, setT] = Ke.useState(e.name ? e.name : "username");
    let [n, setN] = Ke.useState(e.displayName || "");
    let [s, setS] = Ke.useState(null);
    let [disabled, setDisabled] = Ke.useState(false);
    let m = a((k)=>{
        setT(k.target.value);
    }, "onChangeName");
    let f = a((k)=>{
        setN(k.target.value);
    }, "onChangeDisplayName");
    let onSubmit = a(async (k)=>{
        k.preventDefault();
        setDisabled(true);
        setS("");
        let _ = {
            name: t,
            displayName: n
        };
        try {
            await Ya.CurrentUser.update(_);
            setDisabled(false);
        } catch (error) {
            console.error(error);
            setS(error.response?.data.message || "Can't connect to the servers. Try again later.");
            setDisabled(false);
            return;
        }
        let S = new URL(location.href).searchParams.get("redirect");
        if (S && S[0] !== "/") {
            S = "/";
        }
        JX.default(ka(S || "/"));
    }, "onSubmit");
    let y = Math.floor(new Date().getTime() / 1000) - e.created < 1 * 3600;
    return Ke.default.createElement("div", {
        className: "vertical-middle-body"
    }, Ke.default.createElement("div", {
        className: "container"
    }, Ke.default.createElement("div", {
        className: "row"
    }, Ke.default.createElement("div", {
        className: "col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
    }, Ke.default.createElement("div", {
        className: "text-center"
    }, Ke.default.createElement("img", {
        src: "/assets/img/beaver.svg"
    }), Ke.default.createElement("h1", null, y ? Ke.default.createElement(Ke.default.Fragment, null, Ke.default.createElement(Y, null, "Cosenseへようこそ！"), Ke.default.createElement(Z, null, "Welcome to Cosense!")) : Ke.default.createElement(Ke.default.Fragment, null, Ke.default.createElement(Y, null, "おかえりなさい"), Ke.default.createElement(Z, null, "Welcome back"))), Ke.default.createElement("h4", null, y ? Ke.default.createElement(Ke.default.Fragment, null, Ke.default.createElement(Y, null, "プロフィールを作成する"), Ke.default.createElement(Z, null, "Create your profile")) : Ke.default.createElement(Ke.default.Fragment, null, Ke.default.createElement(Y, null, "プロフィールを更新する"), Ke.default.createElement(Z, null, "Update your profile")))), Ke.default.createElement("form", {
        onSubmit
    }, s && Ke.default.createElement(m_e, {
        message: s
    }), Ke.default.createElement("div", {
        className: "form-group"
    }, Ke.default.createElement("label", {
        htmlFor: "displayName"
    }, Ke.default.createElement(Y, null, "名前"), Ke.default.createElement(Z, null, "Name")), Ke.default.createElement("input", {
        id: "displayName",
        type: "text",
        className: "form-control input-lg",
        autoComplete: "off",
        required: true,
        placeholder: "Your name",
        value: n,
        onChange: f
    }), Ke.default.createElement("p", {
        className: "help-block"
    }, Ke.default.createElement(Y, null, "プロフィールアイコンに表示されます"), Ke.default.createElement(Z, null, "This will be displayed on your profile icon."))), Ke.default.createElement("div", {
        className: "form-group"
    }, Ke.default.createElement("label", {
        htmlFor: "name"
    }, Ke.default.createElement(Y, null, "ユーザー名"), Ke.default.createElement(Z, null, "Username")), Ke.default.createElement("div", {
        className: "input-group input-group-lg"
    }, Ke.default.createElement("span", {
        className: "input-group-addon"
    }, "@"), Ke.default.createElement("input", {
        id: "name",
        type: "text",
        className: "form-control",
        autoComplete: "off",
        required: true,
        placeholder: "username",
        value: t,
        onChange: m
    })), Ke.default.createElement("p", {
        className: "help-block"
    }, Ke.default.createElement(Y, null, "ユーザー名は自分のページのタイトルになります。自分のページを作成してプロフィール画像を設定すると、自分のアイコンとして使用できます。", Ke.default.createElement("br", null), "アイコンは", Ke.default.createElement("code", null, "ctrl + i"), "か", Ke.default.createElement("code", null, "[", t, ".icon]"), "を入力すると表示できます。"), Ke.default.createElement(Z, null, "The username is used as a page title of your page. Once you create your page with your profile picture, you can show your icon by typing ", Ke.default.createElement("code", null, "[", t, ".icon]"), " or pressing", " ", Ke.default.createElement("code", null, "ctrl + i"), " in texts.", Ke.default.createElement("br", null)))), Ke.default.createElement("div", {
        className: "text-center"
    }, Ke.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled
    }, Ke.default.createElement(Y, null, "決定"), Ke.default.createElement(Z, null, "Looks good"))))))));
}, "SetupProfilePage");

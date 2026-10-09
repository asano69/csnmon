import { $a, Y, Z, b, ba, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const Me = e(b(), 1);
const nr = e(b(), 1);
const bJ = e(ba(), 1);
export function q8({ setError, setSubmitting, submitting }) {
    let [n, setN] = nr.useState([]);
    nr.useEffect(()=>{
        getTokenList();
    }, []);
    let getTokenList = a(async ()=>{
        try {
            let { data } = await x.get("/api/login/gyazo/oauth-upload/token/list");
            setN(data.tokenList);
        } catch (error) {
            let l = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            setError(l);
        }
    }, "getTokenList");
    if (n.length === 0) {
        return null;
    }
    return nr.default.createElement("div", {
        className: "extension-item gyazo-oauth-upload"
    }, nr.default.createElement("div", {
        className: "icon"
    }, nr.default.createElement("img", {
        src: "/assets/img/gyazo.png",
        alt: "Gyazo Link"
    })), nr.default.createElement("div", {
        className: "title"
    }, "Gyazo OAuth Upload"), nr.default.createElement("div", {
        className: "description"
    }, nr.default.createElement(Y, null, "Gyazoへのアップロード方法をOAuthに変更します。"), nr.default.createElement(Z, null, "This extension changes the Gyazo upload method to OAuth.")), nr.default.createElement("div", {
        className: "token-list"
    }, n.map((a)=>nr.default.createElement(wye, {
            ...a,
            setError,
            setSubmitting,
            submitting,
            getTokenList,
            key: a.gyazoTeamsName || "personal"
        }))));
}
export function wye({ gyazoTeamsName, projects, hasToken, setError, setSubmitting, submitting, getTokenList }) {
    let l = bJ.default.stringify({
        gyazoTeamsName,
        redirect: location.pathname
    });
    let c = gyazoTeamsName ? `https://${gyazoTeamsName}.gyazo.com` : "https://gyazo.com";
    return nr.default.createElement("div", {
        className: "token-list-item"
    }, nr.default.createElement("label", {
        className: "name"
    }, c), nr.default.createElement("ul", {
        className: "project-list"
    }, nr.default.createElement(Tye, {
        projects
    })), nr.default.createElement("div", {
        className: "button"
    }, hasToken ? nr.default.createElement("button", {
        className: "btn btn-danger",
        disabled: submitting,
        onClick: a((gyazoTeamsName_1)=>async ()=>{
                setSubmitting(true);
                setError(null);
                try {
                    await x.post("/api/login/gyazo/oauth-upload/revoke", {
                        gyazoTeamsName: gyazoTeamsName_1
                    });
                    getTokenList();
                } catch (error) {
                    let v = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
                    setError(v);
                } finally{
                    setSubmitting(false);
                }
            }, "revokeGyazoOAuthUpload")(gyazoTeamsName)
    }, nr.default.createElement(Y, null, "取り消す"), nr.default.createElement(Z, null, "Revoke")) : nr.default.createElement("a", {
        className: "btn btn-default",
        href: `/login/gyazo/oauth-upload?${l}`,
        target: "_self"
    }, nr.default.createElement(Y, null, "接続する"), nr.default.createElement(Z, null, "Connect"))));
}
export function Tye({ projects }) {
    let [r, setR] = nr.useState(projects.length > 3);
    let o = r ? projects.slice(0, 3) : projects;
    let s = projects.length - 3;
    return nr.default.createElement(nr.default.Fragment, null, o.map((a)=>nr.default.createElement("li", {
            className: "project-list-item",
            key: a.name
        }, nr.default.createElement("a", {
            href: `/${a.name}`,
            rel: "external"
        }, "/", a.name))), r && nr.default.createElement("li", null, nr.default.createElement(Y, null, "ほか", nr.default.createElement($a, {
        role: "button",
        onClick: ()=>setR(false)
    }, s, "個のプロジェクト")), nr.default.createElement(Z, null, "And", " ", nr.default.createElement($a, {
        role: "button",
        onClick: ()=>setR(false)
    }, s, " more projects."))));
}

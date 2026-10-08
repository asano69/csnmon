import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Te } from "./chunk_iq.js";
const os = e(b(), 1);
export function K7({ state, updateState }) {
    let { FORCE_GYAZO_UPLOAD_TEAMS_NAME } = Ya.Settings.envs;
    let [n, setN] = os.useState(!!state.gyazoTeamsName);
    return os.default.createElement("div", {
        className: "gyazo-teams-setting advanced-setting"
    }, os.default.createElement("div", {
        className: "team-name"
    }, os.default.createElement("div", {
        className: "checkbox"
    }, os.default.createElement("label", null, os.default.createElement("input", {
        type: "checkbox",
        disabled: !!FORCE_GYAZO_UPLOAD_TEAMS_NAME,
        checked: n,
        onChange: a(()=>{
            setN(!n);
            if (n) {
                updateState({
                    gyazoTeamsName: null
                });
            }
        }, "onChangeCheckbox")
    }), " ", "Upload to Gyazo Teams")), os.default.createElement("label", null, "Team name"), os.default.createElement("div", {
        className: "input-group"
    }, os.default.createElement("div", {
        className: "input-group-addon"
    }, "https://"), os.default.createElement("input", {
        type: "text",
        id: "gyazo-teams-name",
        className: "form-control",
        disabled: !n || !!FORCE_GYAZO_UPLOAD_TEAMS_NAME,
        value: state.gyazoTeamsName || "",
        onChange: (a)=>updateState({
                gyazoTeamsName: a.target.value.trim() || null
            })
    }), os.default.createElement("div", {
        className: "input-group-addon"
    }, ".gyazo.com"))), os.default.createElement("p", {
        className: "help-block about-gyazo-teams"
    }, "Get advanced security, editing, and storage with Gyazo Teams.\xA0", os.default.createElement(Te, {
        href: "https://gyazo.com/teams"
    }, "Learn more")));
}

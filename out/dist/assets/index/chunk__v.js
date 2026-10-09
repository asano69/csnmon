import { A, Ya, b, r } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const _v = e(b(), 1);
export function s7({ state, updateState }) {
    if (Ya.Settings.envs.MICROSOFT_TENANT) {
        return null;
    }
    let { microsoftTenantId } = state;
    return _v.default.createElement("div", {
        className: "additional-input microsoft"
    }, _v.default.createElement("div", {
        className: "input-group"
    }, _v.default.createElement("div", {
        className: "input-group-addon"
    }, "Tenant ID"), _v.default.createElement("input", {
        className: "form-control",
        name: "microsoft-tenant-id",
        type: "text",
        value: microsoftTenantId,
        onChange: a((s)=>updateState({
                microsoftTenantId: s.target.value,
                message: null
            }), "onChange"),
        onBlur: a((s)=>updateState({
                microsoftTenantId: s.target.value.trim()
            }), "onBlur"),
        disabled: !Ya.CurrentUser.hasProjectPrivilege
    })));
}
export const LJ = r("src/client/js/components/project-settings-page/project-members-form/login-restriction/index.jsx");
export const wx = [
    "microsoft",
    "saml"
];
export const Pi = e(b(), 1);
export const Nx = e(A(), 1);

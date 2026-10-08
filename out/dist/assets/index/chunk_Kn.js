import { Y, Ya, Z, b, bb, cb } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Kn = e(b(), 1);
const xve = a((e)=>{
    if (e.name && e.displayName) {
        return `${e.name} (${e.displayName})`;
    }
    return e.name || e.displayName || e.email || "??";
}, "getUpdatedByText");
const vK = a(({ userId, email })=>{
    let r = Ya.CurrentProject.findUser(userId);
    if (!r) {
        return email || "";
    }
    let n = xve(r);
    if (r.isServiceAccount) {
        if (r.isServiceAccountDeleted) {
            return `${n} (deleted service account)`;
        }
        return `${n} (service account)`;
    }
    if (r.isSnapshot) {
        return `${n} (from snapshot, ${r.reason} member)`;
    }
    return n;
}, "getUpdatedBy");
export const yK = a(({ updated, userId, email, showMenuItems })=>{
    if (Ya.PageHistory.isEnable) {
        return Kn.default.createElement("div", {
            className: "description"
        }, Kn.default.createElement(Z, null, "updated ", Kn.default.createElement(bb, {
            unixtime: updated
        })), Kn.default.createElement(Y, null, Kn.default.createElement(bb, {
            unixtime: updated
        }), "に更新"), " ", "by ", vK({
            userId,
            email
        }));
    }
    if (showMenuItems) {
        if (Ya.CurrentUser.isProjectMember) {
            return Kn.default.createElement("div", {
                className: "description"
            }, Kn.default.createElement(Z, null, "updated ", Kn.default.createElement(cb, {
                unixtime: updated
            })), Kn.default.createElement(Y, null, Kn.default.createElement(cb, {
                unixtime: updated
            }), "に更新"), " ", "by ", vK({
                userId,
                email
            }));
        }
        return Kn.default.createElement("div", {
            className: "description"
        }, Kn.default.createElement(Z, null, "updated ", Kn.default.createElement(cb, {
            unixtime: updated
        })), Kn.default.createElement(Y, null, Kn.default.createElement(cb, {
            unixtime: updated
        }), "に更新"));
    }
    return Kn.default.createElement("div", {
        className: "description"
    }, Kn.default.createElement(Z, null, "updated ", Kn.default.createElement(bb, {
        unixtime: updated
    })), Kn.default.createElement(Y, null, Kn.default.createElement(bb, {
        unixtime: updated
    }), "に更新"));
}, "Description");

import { A, Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const li = e(b(), 1);
const V2 = e(A(), 1);
const Nde = a(({ project })=>{
    let length = project.users.length;
    let href = V2.When.project_privilege_user ? `/projects/${project.name}/settings/basic` : `/projects/${project.name}/settings/members`;
    return li.default.createElement(li.Fragment, null, li.default.createElement("li", {
        role: "separator",
        className: "divider"
    }), li.default.createElement("li", {
        className: "dropdown-header list-header"
    }, project.displayName, " (", length, " ", length > 1 ? "members" : "member", ")"), li.default.createElement("li", {
        className: "section section-right",
        style: {
            marginRight: 0
        }
    }, li.default.createElement("a", {
        href,
        rel: "external"
    }, "Project settings"), project.publicVisible === false && project.plan === "business" && li.default.createElement("a", {
        href: `/projects/${project.name}/metrics/basic`,
        rel: "external"
    }, "Metrics"), li.default.createElement(V2.When, {
        enable_billing: true
    }, li.default.createElement("a", {
        href: `/projects/${project.name}/settings/billing`,
        rel: "external"
    }, "Billing")), li.default.createElement("a", {
        href: `/stream/${project.name}/`,
        rel: "external"
    }, "Stream")));
}, "ProjectSettingsForMember");
const Cde = a(({ project })=>li.default.createElement(li.Fragment, null, li.default.createElement("li", {
        role: "separator",
        className: "divider"
    }), li.default.createElement("li", {
        className: "dropdown-header list-header"
    }, project.displayName), li.default.createElement("li", {
        className: "section section-right",
        style: {
            marginRight: 0
        }
    }, li.default.createElement("a", {
        href: `/stream/${project.name}/`
    }, "Stream"))), "ProjectSettingsForNonMember");
export function K2() {
    let project = Ya.CurrentProject.get();
    if (project) {
        if (V2.When.project_member_user) {
            return li.default.createElement(Nde, {
                project
            });
        }
        return li.default.createElement(Cde, {
            project
        });
    }
    return null;
}

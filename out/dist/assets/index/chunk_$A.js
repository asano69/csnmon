import { $a, Ya, b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const $A = e(b(), 1);
export function HA({ fileId, isCursorLine, permission }) {
    if (!fileId || !Ya.CurrentUser.isProjectMember) {
        return null;
    }
    let { sourceProject } = permission;
    if (!isCursorLine && sourceProject.publicVisible) {
        return null;
    }
    let o = [
        sourceProject.publicVisible ? `This file is in ${sourceProject.displayName} (/${sourceProject.name}) project.` : `Only members of ${sourceProject.displayName} (/${sourceProject.name}) can access this file.`,
        "Would you like to duplicate it to current project?"
    ];
    let onClick = a(async ()=>{
        if (confirm(o.join(`
`))) {
            try {
                let a = Ya.CurrentProject.get().id;
                await x.post(`/api/gcs/${a}/${fileId}/duplicate-between-projects`);
            } catch (error) {
                return alert(error?.response?.data?.message || "Can’t connect to the servers. Please try again later.");
            }
        }
    }, "onClick");
    return $A.default.createElement($a, {
        role: "button",
        title: o[0],
        className: "file-duplicate-between-projects-button link",
        onClick
    }, $A.default.createElement("i", {
        className: "fas fa-file-import icon"
    }));
}

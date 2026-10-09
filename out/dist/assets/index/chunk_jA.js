import { $a, Ya, _a, b, ba, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const jA = e(b(), 1);
export function GA({ fileId, isCursorLine }) {
    if (!isCursorLine || !fileId || !Ya.CurrentUser.isProjectMember) {
        return null;
    }
    return jA.default.createElement($a, {
        role: "button",
        title: "delete this file",
        className: "file-delete-button link",
        onClick: a(async ()=>{
            if (confirm("Are you sure you want to delete this file?")) {
                try {
                    await x.delete(`/api/gcs/${fileId}`);
                } catch (error) {
                    let s = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
                    return alert(s);
                }
            }
        }, "onClick")
    }, jA.default.createElement("i", {
        className: "kamon kamon-trash"
    }));
}
export const Un = e(b(), 1);
export const U1 = e(_a(), 1);
export const kK = e(ba(), 1);

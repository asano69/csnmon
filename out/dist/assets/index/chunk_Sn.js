import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const Sn = e(b(), 1);
const MJ = e(b(), 1);
export function u7() {
    async function onClick() {
        if (confirm("Are you sure you want to leave this project?")) {
            try {
                await Ya.CurrentProject.leave();
            } catch (error) {
                let r = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
                return alert(r);
            }
            location.href = "/";
        }
    }
    a(onClick, "onClick");
    return MJ.default.createElement("button", {
        className: "btn btn-sm btn-default btn-delete-member",
        onClick
    }, "Leave");
}

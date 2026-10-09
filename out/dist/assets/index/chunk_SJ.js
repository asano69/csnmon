import { b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const SJ = a(async ()=>{
    let { data } = await x.get("/api/settings/personal-access-tokens");
    return data;
}, "list");
export const xJ = a(async (name)=>{
    let { data } = await x.post("/api/settings/personal-access-tokens", {
        name
    });
    return data.personalAccessToken;
}, "create");
const wJ = a(async (e)=>{
    await x.delete(`/api/settings/personal-access-tokens/${e}`);
}, "remove");
const TJ = e(b(), 1);
export function W8({ token, onDeleted }) {
    async function onClick() {
        if (confirm("Are you sure you want to delete this personal access token?")) {
            try {
                await wJ(token.id);
                onDeleted(token.id);
            } catch (error) {
                alert(error.response?.data?.message || "Can't connect to the servers. Please try again later.");
            }
        }
    }
    a(onClick, "onClick");
    return TJ.default.createElement("button", {
        className: "btn btn-sm btn-default btn-delete-personal-access-token",
        onClick
    }, "Delete");
}

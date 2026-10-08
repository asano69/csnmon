import { Ya, p, r, y } from "../chunks/chunk-3PYJHPBQ.js";
import { vg } from "./chunk_L9.js";
export const w_e = r("src/client/js/routes/project-list.js");
const U_e = r("src/client/js/routes/project-invitation.js");
export function R9(e) {
    e("/projects/:projectName/invitations/:code", vg, async (t)=>{
        let { projectName, code } = t.params;
        try {
            if ((await Ya.Invitation.loadByCode(projectName, code)).isMember) {
                return e(`/${projectName}/`);
            }
            Ya.Layout.set("invitation-page");
        } catch (error) {
            if (p.isCancel(error)) {
                return U_e("canceled");
            }
            Ya.Error.set(error);
            Ya.Layout.set("error-page");
            if (!y(error)) {
                throw error;
            }
        }
    });
}

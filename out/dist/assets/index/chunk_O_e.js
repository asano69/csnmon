import { Ya, p, r, y } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FXCI2R73.js";
const O_e = r("src/client/js/routes/personal-settings.js");
export const L_e = a((e)=>async ()=>{
        try {
            await Ya.ProjectList.load();
            Ya.Layout.set(`settings-${e}-page`);
        } catch (error) {
            if (p.isCancel(error)) {
                return O_e("canceled");
            }
            Ya.Error.set(error);
            Ya.Layout.set("error-page");
            if (!y(error)) {
                throw error;
            }
        }
    }, "show");

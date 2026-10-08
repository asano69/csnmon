import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { gY } from "./chunk_ki.js";
const hY = /^([^\d]{3,})\s*([\d\-./()<>{}（）月火水木金土日年春夏秋冬]+|\d+ - [a-zA-Z])$/;
const Wve = /^対応\sby\s[^\s]+.*\d+\/\d+\/\d+/;
export function bY(e) {
    if (hY.test(e)) {
        let [, stackName] = e.match(hY);
        return {
            stackName,
            stackPreviewSize: 3
        };
    }
    let t = Ya.CurrentProject.get();
    if (t?.additionalPlans.kcs && Wve.test(e)) {
        return {
            stackName: gY(t).callLog,
            stackPreviewSize: 0
        };
    }
    return {
        stackName: null,
        stackPreviewSize: 3
    };
}
export const Et = e(b(), 1);

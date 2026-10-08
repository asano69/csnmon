import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const bN = e(b(), 1);
export const bR = a(()=>bN.default.createElement("div", {
        className: "history-back-button",
        onClick: a(()=>{
            if (history.length > 0) {
                history.back();
            }
        }, "onClick")
    }, bN.default.createElement("span", {
        className: "kamon kamon-direction-left"
    })), "HistoryBackButton");

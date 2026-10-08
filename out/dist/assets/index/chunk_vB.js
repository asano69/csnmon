import { nt } from "./chunk_nt.js";
const vB = nt;
export function Bd() {
    try {
        return vB.document.location.href;
    } catch  {
        return "";
    }
}
export function y3(e, t = 5) {
    if (!vB.HTMLElement) {
        return null;
    }
    let r = e;
    for(let n = 0; n < t; n++){
        if (!r) {
            return null;
        }
        if (r instanceof HTMLElement) {
            if (r.dataset.sentryComponent) {
                return r.dataset.sentryComponent;
            }
            if (r.dataset.sentryElement) {
                return r.dataset.sentryElement;
            }
        }
        r = r.parentNode;
    }
    return null;
}

import { Ba } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FXCI2R73.js";
import { kp } from "./chunk_wq.js";
const jme = [
    "gyazo",
    "image",
    "youtube",
    "vimeo",
    "video",
    "audio",
    "spotify",
    "anchor-fm"
];
export function NR(e) {
    let t = Ba(`[${e}]`);
    if (jme.includes(t.type)) {
        return `[${e}]
`;
    }
    return e;
}
export const CR = a((e)=>{
    try {
        new URL(e);
        return kp(e);
    } catch  {
        return e;
    }
}, "decodeEncodedUrl");

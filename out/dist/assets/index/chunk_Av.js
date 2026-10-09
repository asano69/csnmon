import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const Av = e(b(), 1);
export const bX = a(()=>{
    let e = `${location.protocol}//${location.host}`;
    let t = Ya.CurrentProject.get();
    let r = Ya.CurrentUser.get();
    let n = `${e}/api/pages/${t.name}/${r.name}/text`;
    return Av.default.createElement("div", null, Av.default.createElement("h4", null, "Usage"), Av.default.createElement("pre", null, Av.default.createElement("code", null, "curl ", n, " -H 'x-service-account-access-key: your_access_key'")));
}, "Usage");
export const Wr = e(b(), 1);
export const yX = e(ge(), 1);

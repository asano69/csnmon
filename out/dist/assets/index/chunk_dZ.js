import { Fa, ba } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const dZ = /^assets-\d{8}-\d{6}$/;
export async function mZ() {
    return (await caches.keys()).find((e)=>dZ.test(e));
}
export function fZ() {
    let e = document.getElementsByTagName("html")[0].getAttribute("data-assets-version");
    if (!dZ.test(e)) {
        throw new Error('Assets version "${version}" is invalid.');
    }
    return e;
}
export const bZ = e(Fa(), 1);
export const I9 = e(ba(), 1);

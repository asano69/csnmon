import { Ya, r } from "../chunks/chunk-GCRJFCUZ.js";
import { fZ, mZ } from "./chunk_dZ.js";
const gZ = r("src/client/js/routes/middlewares/assets-cache.js");
export async function hZ(e, t) {
    if (e.isNavigationByBrowser || Ya.Sync.hasUnpushedOrPushingCommit || typeof window.caches !== "object") {
        return t();
    }
    let documentVersion;
    let cacheVersion;
    try {
        documentVersion = fZ();
        cacheVersion = await mZ();
    } catch (error) {
        console.error(error);
        return t();
    }
    gZ(JSON.stringify({
        cacheVersion,
        documentVersion
    }));
    if (typeof cacheVersion === "string" && typeof documentVersion === "string" && cacheVersion !== documentVersion) {
        gZ("New assets-cache available. Reload browser.");
        location.href = e.path;
        return;
    }
    return t();
}

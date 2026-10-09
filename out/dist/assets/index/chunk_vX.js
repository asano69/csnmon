import { Ya, r } from "../chunks/chunk-GCRJFCUZ.js";
import { Mx } from "./chunk_Zn.js";
import { K7 } from "./chunk_os.js";
import { Dx } from "./chunk_Ou.js";
export const vX = r("src/client/js/components/project-settings-page/upload-settings-form/index.jsx");
export function n_e() {
    let { ENABLE_GCS_FILE, ENABLE_GYAZO_OAUTH_UPLOAD, ENABLE_FILE_UPLOAD } = Ya.Settings.flags;
    return [
        {
            name: "gcs",
            displayName: location.host,
            available: ENABLE_GCS_FILE,
            AdvancedSetting: Mx
        },
        {
            name: "gyazo",
            displayName: "gyazo.com",
            available: ENABLE_GYAZO_OAUTH_UPLOAD,
            AdvancedSetting: K7
        },
        {
            name: "file",
            displayName: "on-premise file upload",
            available: ENABLE_FILE_UPLOAD,
            AdvancedSetting: Dx
        }
    ];
}
export function i_e() {
    let { ENABLE_GCS_FILE, ENABLE_FILE_UPLOAD } = Ya.Settings.flags;
    return [
        {
            name: "gcs",
            displayName: location.host,
            available: ENABLE_GCS_FILE,
            AdvancedSetting: Mx
        },
        {
            name: "file",
            displayName: "on-premise file upload",
            available: ENABLE_FILE_UPLOAD,
            AdvancedSetting: Dx
        }
    ];
}

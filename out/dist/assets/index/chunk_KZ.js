import { Ya } from "../chunks/chunk-3PYJHPBQ.js";
const KZ = "data-project-theme";
export function YZ() {
    let e = Ya.Layout.get();
    let t = Ya.CurrentProject.get();
    if (t?.theme && ([
        "page",
        "list",
        "stream"
    ].includes(e) || e.startsWith("project-settings"))) {
        document.documentElement.setAttribute(KZ, t.theme);
        return;
    }
    document.documentElement.removeAttribute(KZ);
}

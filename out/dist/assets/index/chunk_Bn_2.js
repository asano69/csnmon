import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a } from "../chunks/chunk-X33G7CS5.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const Bn = e(b(), 1);
export const cI = e(ge(), 1);
const _c = e(b(), 1);
const EK = [
    "div",
    "span",
    "br"
];
const kve = [
    "br"
];
const Nve = a_1((e)=>{
    for (let t of e.querySelectorAll("*")){
        t.namespaceURI === "http://www.w3.org/1999/xhtml" && (EK.includes(t.tagName.toLowerCase()) || t.remove());
    }
}, "removeDisallowedHtml");
const Cve = a_1((e)=>{
    let t = document.createElement("textarea");
    let r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    for(let n = r.nextNode(); n; n = r.nextNode()){
        let o = n.nodeValue;
        if (o?.includes("&") && n.parentElement?.tagName.toLowerCase() !== "style") {
            t.innerHTML = o;
            n.nodeValue = t.value;
        }
    }
}, "decodeEntitiesInTextNodes");
const Ave = a_1((e)=>{
    document.getElementById(`d${e}`)?.remove();
}, "removeWorkingElement");
const Ive = a_1((e)=>{
    let t = a.sanitize(e, {
        USE_PROFILES: {
            svg: true,
            svgFilters: true
        },
        ADD_TAGS: [
            "foreignobject",
            ...EK
        ],
        ADD_ATTR: [
            "role"
        ],
        HTML_INTEGRATION_POINTS: {
            foreignobject: true
        },
        RETURN_DOM_FRAGMENT: true
    });
    Nve(t);
    Cve(t);
    let r = document.createElement("div");
    r.append(t);
    return r.innerHTML;
}, "sanitizeSVG");
export const SK = a_1(({ code, lineId })=>{
    let [r, setR] = _c.useState(undefined);
    let [o, setO] = _c.useState(undefined);
    _c.useEffect(()=>{
        (async ()=>{
            let a = `mermaid-preview-svg-${lineId}`;
            let l;
            try {
                let c = (await import("../chunks/mermaid.core-4LO6PTUD.js")).default;
                c.initialize({
                    flowchart: {
                        htmlLabels: false
                    },
                    dompurifyConfig: {
                        ALLOWED_TAGS: kve,
                        ALLOWED_ATTR: []
                    },
                    secure: [
                        ...c.mermaidAPI.defaultConfig.secure ?? [],
                        "htmlLabels",
                        "themeCSS"
                    ]
                });
                let m = await c.render(a, code);
                l = Ive(m.svg);
            } catch (error) {
                if (error instanceof Error) {
                    setO(error);
                } else {
                    console.error(error);
                }
                return;
            } finally{
                Ave(a);
            }
            setO(undefined);
            setR(l);
        })();
    }, [
        code
    ]);
    if (o) {
        return _c.default.createElement("div", {
            className: "mermaid-preview error",
            id: `mermaid-preview-${lineId}`
        }, o.message);
    }
    if (r) {
        return _c.default.createElement("div", {
            className: "mermaid-preview",
            id: `mermaid-preview-${lineId}`,
            dangerouslySetInnerHTML: {
                __html: r
            }
        });
    }
    return _c.default.createElement("div", {
        className: "mermaid-preview",
        id: `mermaid-preview-${lineId}`
    });
}, "MermaidPreview");

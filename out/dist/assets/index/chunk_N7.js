import { Ya, b, ba, r, z } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const N7 = a((e)=>e.replace(/[\r\n\u2028\u2029]/g, ""), "removeLineFeed");
export const VJ = a((e)=>e.replace(/[\b]/gm, ""), "removeTofu");
const Kye = z() ? `${location.protocol}//${location.host}` : process.env.APP_URL;
const Yye = new RegExp(`${Kye}/files/([a-z0-9]{24})(?:|\\.[a-zA-Z0-9]+)`);
const C7 = a((e)=>Yye.test(e), "shouldCheckFileUrls");
export const KJ = r("src/client/js/components/project-settings-page/project-page-data-form/import-pages.jsx");
export const Jye = {
    pages: [
        {
            title: "page1title",
            lines: [
                "page1title",
                "line2",
                "line3"
            ]
        },
        {
            title: "page2title",
            lines: [
                "page2title"
            ]
        }
    ]
};
export const A7 = a((e)=>{
    let duplicatePages = [];
    let newPages = [];
    let deleteFlagPages = [];
    for (let o of e){
        if (o.delete) {
            deleteFlagPages.push(o);
        } else if (Ya.QuickSearch.find(o.title)?.exists) {
            duplicatePages.push(o);
        } else {
            newPages.push(o);
        }
    }
    return {
        duplicatePages,
        newPages,
        deleteFlagPages
    };
}, "classifyPages");
export const Xye = a((e)=>e.some((t)=>{
        if (t.delete) {
            return false;
        }
        return t.lines.some((r)=>{
            switch(typeof r){
                case "string":
                    return C7(r);
                case "object":
                    return C7(r.text);
                default:
                    return false;
            }
        });
    }), "checkIncludeFile");
export const ha = e(b(), 1);
export const XJ = e(ba(), 1);
export const ZJ = e(ge(), 1);

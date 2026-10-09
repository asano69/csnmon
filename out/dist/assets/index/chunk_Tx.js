import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { m } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const Tx = e(b(), 1);
export function Au({ searchWords, children }) {
    if (!children) {
        return null;
    }
    if (!Array.isArray(searchWords) || searchWords.length < 1) {
        return children;
    }
    if (Array.isArray(children)) {
        return children.map((n, o)=>Tx.default.createElement(Au, {
                searchWords,
                key: o
            }, n));
    }
    if (typeof children !== "string") {
        return children;
    }
    let r = new RegExp(`(${searchWords.sort((n, o)=>{
        if (n.length < o.length) {
            return 1;
        }
        return -1;
    }).map(m).join("|")})`, "i");
    return children.split(r).filter((n)=>n.length > 0).map((n, o)=>{
        if (r.test(n)) {
            return Tx.default.createElement("span", {
                className: "search-matched",
                key: o
            }, n);
        }
        return Tx.default.createElement("span", {
            key: o
        }, n);
    });
}
export const kx = e(b(), 1);
export const Sv = e(b(), 1);
export const zJ = e(ge(), 1);

import { O, X, Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { n as n_1 } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { vn } from "./chunk_Nq.js";
import { ts } from "./chunk_tI.js";
import { Nu } from "./chunk_VK.js";
export function M1({ text, prefix, command }) {
    let [n, setN] = ts.useState(null);
    let { setCharIndex } = Nu();
    let length = text.match(/^\s*/)[0].length;
    let l = setCharIndex(n_1(Array(length), ts.default.createElement("span", {
        className: "pad"
    }, "	")));
    let c = Ya.DisplayStyle.is("rtl") ? {
        marginRight: X(length)
    } : {
        marginLeft: X(length)
    };
    let onClick = a(async (f)=>{
        f.preventDefault();
        await vn(command);
        setN("Copied");
        setTimeout(()=>{
            setN(null);
        }, 1000);
    }, "onClickCopyButton");
    return ts.default.createElement("span", {
        className: "text cli"
    }, ts.default.createElement("span", {
        className: "indent-mark",
        style: {
            width: X(length)
        }
    }, l, length > 0 && ts.default.createElement("span", {
        className: "dot"
    })), ts.default.createElement("span", {
        className: "indent",
        style: c
    }, ts.default.createElement("code", null, ts.default.createElement("span", {
        className: "prefix"
    }, setCharIndex(prefix)), ts.default.createElement("span", {
        className: "space"
    }, setCharIndex(" ")), ts.default.createElement("span", {
        className: "command"
    }, setCharIndex(command))), !O(command) && ts.default.createElement("span", {
        className: "tool-buttons"
    }, n || ts.default.createElement("span", {
        title: "Copy",
        className: "copy",
        onMouseDown: (f)=>{
            f.preventDefault();
        },
        onClick
    }, ts.default.createElement("i", {
        className: "far fa-copy"
    })))));
}
const yc = e(b(), 1);
export function D1({ text, prefix, entry }) {
    let { setCharIndex } = Nu();
    let length = text.match(/^\s*/)[0].length;
    let s = setCharIndex(n_1(Array(length), yc.default.createElement("span", {
        className: "pad"
    }, "	")));
    let a = Ya.DisplayStyle.is("rtl") ? {
        marginRight: X(length)
    } : {
        marginLeft: X(length)
    };
    return yc.default.createElement("span", {
        className: "text"
    }, yc.default.createElement("span", {
        className: "indent-mark",
        style: {
            width: X(length)
        }
    }, s, length > 0 && yc.default.createElement("span", {
        className: "dot"
    })), yc.default.createElement("span", {
        className: "indent",
        style: a
    }, yc.default.createElement("code", {
        className: "helpfeel"
    }, yc.default.createElement("span", {
        className: "prefix"
    }, setCharIndex(prefix)), setCharIndex(" "), yc.default.createElement("span", {
        className: "entry"
    }, setCharIndex(entry)))));
}

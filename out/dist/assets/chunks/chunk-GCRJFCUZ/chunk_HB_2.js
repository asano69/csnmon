import { a } from "../chunk-FXCI2R73.js";
const HB = typeof ArrayBuffer === "function";
const WB = a((t)=>{
    if (typeof ArrayBuffer.isView === "function") {
        return ArrayBuffer.isView(t);
    }
    return t.buffer instanceof ArrayBuffer;
}, "isView");
const toString = Object.prototype.toString;
const YB = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const VB = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
export function no(t) {
    return HB && (t instanceof ArrayBuffer || WB(t)) || YB && t instanceof Blob || VB && t instanceof File;
}

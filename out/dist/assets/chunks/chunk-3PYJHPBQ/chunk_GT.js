import { a } from "../chunk-FXCI2R73.js";
const GT = [
    "content-type",
    "content-length"
];
export function ol(t, e, r) {
    if (r !== "content-only") {
        t.set(e);
        return;
    }
    Object.entries(e || {}).forEach(([n, s])=>{
        if (GT.includes(n.toLowerCase())) {
            t.set(n, s);
        }
    });
}
const XT = a(function*(t, e) {
    let t_byteLength = t.byteLength;
    if (!e || t_byteLength < e) {
        yield t;
        return;
    }
    let n = 0;
    let s;
    while(n < t_byteLength){
        s = n + e;
        yield t.slice(n, s);
        n = s;
    }
}, "streamChunk");
const eR = a(async function*(t, e) {
    for await (let r of tR(t)){
        yield* XT(r, e);
    }
}, "readBytes");
var tR = a(async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield* t;
        return;
    }
    let e = t.getReader();
    try {
        while(true){
            let { done, value } = await e.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await e.cancel();
    }
}, "readStream");
export const al = a((t, e, r, n)=>{
    let s = eR(t, e);
    let o = 0;
    let f;
    let c = a((u)=>{
        if (!f) {
            f = true;
            if (n) {
                n(u);
            }
        }
    }, "_onFinish");
    return new ReadableStream({
        async pull (u) {
            try {
                let { done, value } = await s.next();
                if (done) {
                    c();
                    u.close();
                    return;
                }
                let y = value.byteLength;
                if (r) {
                    let w = o += y;
                    r(w);
                }
                u.enqueue(new Uint8Array(value));
            } catch (error) {
                c(error);
                throw error;
            }
        },
        cancel (u) {
            c(u);
            return s.return();
        }
    }, {
        highWaterMark: 2
    });
}, "trackStream");

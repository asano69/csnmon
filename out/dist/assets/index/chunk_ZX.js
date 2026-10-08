import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { g } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { X, ge } from "./chunk_ge.js";
const ZX = e(ge(), 1);
const ls = e(b(), 1);
export function b9() {
    let [e, setE] = ls.useState([]);
    let [r, setR] = ls.useState([]);
    let o = g(()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.body.scrollHeight;
        let v = Array.from(document.querySelectorAll(".telomere .unread"));
        if (v.length === Ya.Line.lines.length) {
            setE([]);
        } else {
            let _ = v.map((T)=>{
                let { top, height } = T.getBoundingClientRect();
                if (height > 0) {
                    return {
                        top: `${(top + scrollTop) / scrollHeight * 100}%`,
                        height: `${height / scrollHeight * 100}%`
                    };
                }
            }).filter((T)=>T);
            setE(_);
        }
        let b = Ya.SharedCursor.getAll();
        let y = [];
        let k = {};
        for(let _ in b){
            let T = b[_];
            if (!T.visible) {
                continue;
            }
            let S = T.position.line;
            if (!k[S]) {
                k[S] = T;
            }
        }
        for(let _ in k){
            let T = Ya.Line.getAll()[_];
            if (!T) {
                continue;
            }
            let S = document.querySelector(`.line#L${T.id}`);
            if (S) {
                let { top } = S.getBoundingClientRect();
                y.push({
                    top: `${(top + scrollTop) / scrollHeight * 100}%`
                });
            }
        }
        setR(y);
        setS(false);
    }, 100);
    X(Ya.Line, o);
    X(Ya.SharedCursor, o);
    ls.useEffect(o, []);
    ls.useEffect(()=>{
        if (typeof window.ResizeObserver !== "function") {
            return;
        }
        let scrollHeight = document.body.scrollHeight;
        let g = new ResizeObserver(()=>{
            if (scrollHeight !== document.body.scrollHeight) {
                o();
            }
            scrollHeight = document.body.scrollHeight;
        });
        g.observe(document.body);
        return ()=>{
            g.disconnect();
        };
    }, []);
    let [s, setS] = ls.useState(false);
    let lRef = ls.useRef(0);
    let c = a(()=>{
        window.clearTimeout(lRef.current);
        lRef.current = window.setTimeout(()=>{
            setS(true);
        }, 4 * 1000);
    }, "quietLater");
    ls.useEffect(()=>{
        if (!s) {
            c();
        }
    }, [
        s
    ]);
    ls.useEffect(()=>{
        let f = a(()=>setS(false), "onScroll");
        window.addEventListener("scroll", f, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", f);
        };
    }, []);
    let className = ZX.default("scroll-bar-overlay", {
        "scroll-bar-overlay-quiet": s
    });
    return ls.default.createElement("div", {
        className
    }, e.map((f, g)=>ls.default.createElement("div", {
            key: g,
            className: "unread-bar",
            style: f
        })), r.map((f, g)=>ls.default.createElement("div", {
            key: g,
            className: "shared-cursor-dot",
            style: f
        })));
}

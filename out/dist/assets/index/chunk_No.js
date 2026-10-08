import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const No = e(b(), 1);
export const WY = e(ge(), 1);
const Ai = e(b(), 1);
export const qY = a_1(({ children })=>{
    let [t, setT] = Ai.useState(false);
    let [n, setN] = Ai.useState(0);
    let [s, setS] = Ai.useState(0);
    let lRef = Ai.useRef(null);
    let c = a_1((g)=>{
        let g_target = g.target;
        if (g_target instanceof HTMLTableCellElement || g_target instanceof HTMLTableElement) {
            setT(true);
            if (lRef.current) {
                setN(g.pageX - lRef.current.offsetLeft);
                setS(lRef.current.scrollLeft);
            }
        }
    }, "startDragging");
    let m = a_1(()=>{
        setT(false);
    }, "stopDragging");
    return Ai.default.createElement("div", {
        className: "scroll-container",
        ref: lRef,
        onMouseDown: c,
        onMouseLeave: m,
        onMouseUp: m,
        onMouseMove: a_1((g)=>{
            if (!(!t || !lRef.current) && (g.preventDefault(), lRef.current)) {
                let b = (g.pageX - lRef.current.offsetLeft - n) * 3;
                lRef.current.scrollLeft = s - b;
            }
        }, "onDrag")
    }, children);
}, "ScrollContainer");
const Qve = a_1(({ onResizeStart, onResize })=>{
    let [r, setR] = Ai.useState(false);
    let o = a_1((l)=>{
        setR(true);
        onResizeStart(l);
    }, "startResizing");
    let s = a_1(()=>setR(false), "stopResizing");
    let a = a_1((l)=>{
        if (r) {
            onResize(l);
        }
    }, "handleResize");
    Ai.useEffect(()=>{
        if (r) {
            window.addEventListener("mousemove", a);
            window.addEventListener("mouseup", s);
            return ()=>{
                window.removeEventListener("mousemove", a);
                window.removeEventListener("mouseup", s);
            };
        }
    }, [
        r
    ]);
    return Ai.default.createElement("div", {
        className: "resizable-handle-wrapper",
        style: {
            position: "absolute",
            userSelect: "none",
            width: "20px",
            height: "100%",
            top: "0px",
            cursor: "col-resize",
            right: "-5px"
        },
        onMouseDown: o
    }, Ai.default.createElement("div", {
        className: "resizable-handle"
    }));
}, "ResizeHandler");
export const RY = a_1(({ mode = "auto", width, setWidth, children })=>{
    let oRef = Ai.useRef(null);
    let [s, setS] = Ai.useState(0);
    let [l, setL] = Ai.useState(0);
    Ai.useEffect(()=>{
        if (mode === "auto") {
            let m = oRef.current?.offsetWidth ?? 0;
            setWidth?.(`${m}px`);
        }
    }, [
        mode
    ]);
    return Ai.default.createElement("th", {
        ref: oRef,
        className: "resizable-th",
        style: {
            position: "relative",
            userSelect: "auto",
            width,
            height: "auto",
            boxSizing: "border-box",
            flexShrink: 0
        }
    }, children, Ai.default.createElement(Qve, {
        onResizeStart: (m)=>{
            setS(m.pageX);
            setL(oRef.current?.offsetWidth ?? 0);
        },
        onResize: (m)=>{
            if (!oRef.current) {
                return;
            }
            let f = l + (m.pageX - s);
            setWidth?.(`${f}px`);
        }
    }));
}, "ResizableTh");
export const Yr = e(b(), 1);

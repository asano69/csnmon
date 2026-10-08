import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { db } from "./chunk_nU.js";
import { ge } from "./chunk_ge.js";
const Tr = e(b(), 1);
const $q = e(db(), 1);
const zb = e(ge(), 1);
const bme = 350;
let Fb = 0;
const vme = a(()=>{
    if (Fb === 0) {
        document.body.classList.add("modal-open");
    }
    Fb += 1;
}, "lockBodyScroll");
const yme = a(()=>{
    Fb = Math.max(0, Fb - 1);
    if (Fb === 0) {
        document.body.classList.remove("modal-open");
    }
}, "unlockBodyScroll");
const HqContext = Tr.createContext(null);
export function _me({ show, onHide, className, children, ...rest }) {
    let sRef = Tr.useRef(null);
    let aRef = Tr.useRef(null);
    let lRef = Tr.useRef(false);
    let cRef = Tr.useRef(onHide);
    cRef.current = onHide;
    let mRef = Tr.useRef(false);
    let f = a(()=>{
        if (!mRef.current) {
            mRef.current = true;
            vme();
        }
    }, "acquireLock");
    let g = a(()=>{
        if (mRef.current) {
            mRef.current = false;
            yme();
        }
    }, "releaseLock");
    let [v, setV] = Tr.useState(show);
    let [y, setY] = Tr.useState(false);
    Tr.useEffect(()=>{
        if (show) {
            setV(true);
        }
    }, [
        show
    ]);
    Tr.useLayoutEffect(()=>{
        let sRef_current = sRef.current;
        if (!v || !sRef_current) {
            return;
        }
        if (show) {
            f();
            if (!sRef_current.open) {
                sRef_current.showModal();
            }
            sRef_current.offsetHeight;
            setY(true);
            return;
        }
        setY(false);
        let aRef_current = aRef.current;
        let P = false;
        let U = a(()=>{
            if (!P) {
                P = true;
                clearTimeout(H);
                aRef_current?.removeEventListener("transitionend", B);
                if (sRef_current.open) {
                    sRef_current.close();
                }
                g();
                setV(false);
            }
        }, "finish");
        let B = a((j)=>{
            if (j.target === aRef_current) {
                U();
            }
        }, "onTransitionEnd");
        let H = setTimeout(U, bme);
        aRef_current?.addEventListener("transitionend", B);
        return ()=>{
            P = true;
            clearTimeout(H);
            aRef_current?.removeEventListener("transitionend", B);
        };
    }, [
        show,
        v
    ]);
    Tr.useLayoutEffect(()=>{
        let sRef_current = sRef.current;
        if (!sRef_current) {
            return;
        }
        let C = a((P)=>{
            P.preventDefault();
            cRef.current();
        }, "onCancel");
        sRef_current.addEventListener("cancel", C);
        return ()=>sRef_current.removeEventListener("cancel", C);
    }, [
        v
    ]);
    Tr.useEffect(()=>g, []);
    if (!v) {
        return null;
    }
    let onPointerDown = a((S)=>{
        lRef.current = S.target === sRef.current;
    }, "onDialogPointerDown");
    let onClick = a((S)=>{
        if (S.target === sRef.current && lRef.current) {
            onHide();
        }
    }, "onDialogClick");
    return $q.createPortal(Tr.default.createElement("dialog", {
        ref: sRef,
        className: zb.default("modal", "fade", {
            in: y
        }, className),
        ...rest,
        onPointerDown,
        onClick
    }, Tr.default.createElement(HqContext.Provider, {
        value: onHide
    }, Tr.default.createElement("div", {
        className: "modal-dialog",
        ref: aRef
    }, Tr.default.createElement("div", {
        className: "modal-content"
    }, children)))), document.body);
}
export function Eme({ closeButton, className, children, ...rest }) {
    let o = Tr.useContext(HqContext);
    return Tr.default.createElement("div", {
        className: zb.default("modal-header", className),
        ...rest
    }, closeButton && Tr.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: o ?? undefined
    }, Tr.default.createElement("span", {
        "aria-hidden": "true"
    }, "×"), Tr.default.createElement("span", {
        className: "sr-only"
    }, "Close")), children);
}
export function Sme({ className, children, ...rest }) {
    return Tr.default.createElement("h4", {
        className: zb.default("modal-title", className),
        ...rest
    }, children);
}
export function xme({ className, children, ...rest }) {
    return Tr.default.createElement("div", {
        className: zb.default("modal-body", className),
        ...rest
    }, children);
}
export const Mt = e(b(), 1);

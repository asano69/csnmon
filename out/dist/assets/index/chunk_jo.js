import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const jo = e(b(), 1);
const dq = e(ge(), 1);
const MqContext = jo.createContext(null);
export function bn({ as = "div", open, defaultOpen = false, onToggle, className, onKeyDown, children, ...rest }) {
    let [c, setC] = jo.useState(defaultOpen);
    let open_1 = open ?? c;
    let gRef = jo.useRef(null);
    let vRef = jo.useRef(null);
    let b = a((_)=>{
        _ !== open_1 && (open === undefined && setC(_), onToggle?.(_));
    }, "setOpen");
    let toggle = a(()=>{
        let _ = !open_1;
        b(_);
        _ && vRef.current?.focus();
    }, "toggle");
    jo.useEffect(()=>{
        if (!open_1) {
            return;
        }
        let _ = a((T)=>{
            let T_target = T.target;
            if (!(T_target instanceof Element)) {
                return;
            }
            let C = T.composedPath();
            let P = a((H)=>C.some((j)=>j instanceof Element && j.matches(H)), "pathHas");
            let vRef_current = vRef.current;
            if (vRef_current && C.includes(vRef_current)) {
                return;
            }
            let gRef_current = gRef.current;
            if (gRef_current && C.includes(gRef_current) && P(".dropdown-menu") && !P(".expandable-menu")) {
                let H = C.find((j)=>j instanceof Element && j.matches("a"));
                if (H instanceof HTMLElement && H.dataset.keepOpen || !T_target.matches("a, button")) {
                    return;
                }
            }
            b(false);
        }, "onDocumentClick");
        document.addEventListener("click", _);
        return ()=>document.removeEventListener("click", _);
    });
    let onKeyDown_1 = a((_)=>{
        onKeyDown?.(_);
        if (![
            "ArrowUp",
            "ArrowDown",
            "Escape",
            " "
        ].includes(_.key) || !(_.target instanceof HTMLElement) || /^(input|textarea)$/i.test(_.target.tagName)) {
            return;
        }
        if (_.key === "Escape") {
            if (!open_1) {
                return;
            }
            _.preventDefault();
            _.stopPropagation();
            b(false);
            vRef.current?.focus();
            return;
        }
        _.preventDefault();
        _.stopPropagation();
        if (!open_1) {
            vRef.current?.click();
            return;
        }
        let T = Array.from(gRef.current?.querySelectorAll(".dropdown-menu li:not(.disabled) a") ?? []).filter((C)=>C.getClientRects().length > 0);
        if (T.length === 0) {
            return;
        }
        let S = T.indexOf(_.target);
        if (_.key === "ArrowUp" && S > 0) {
            S -= 1;
        }
        if (_.key === "ArrowDown" && S < T.length - 1) {
            S += 1;
        }
        if (S < 0) {
            S = 0;
        }
        T[S]?.focus();
    }, "handleKeyDown");
    return jo.default.createElement(as, {
        ...rest,
        ref: gRef,
        className: dq.default(className, {
            open: open_1
        }),
        onKeyDown: onKeyDown_1
    }, jo.default.createElement(MqContext.Provider, {
        value: {
            open: open_1,
            toggle,
            toggleRef: vRef
        }
    }, children));
}
export function Fi({ as = "a", onClick, children, ...rest }) {
    let o = jo.useContext(MqContext);
    if (o === null) {
        throw new Error("DropdownToggle must be used inside <Dropdown>");
    }
    let { open, toggle, toggleRef } = o;
    return jo.default.createElement(as, {
        ...rest,
        ref: toggleRef,
        onClick: a((m)=>{
            if (!m.currentTarget.matches(".disabled, :disabled")) {
                onClick?.(m);
                m.preventDefault();
                toggle();
            }
        }, "handleClick"),
        "aria-haspopup": "true",
        "aria-expanded": open
    }, children);
}

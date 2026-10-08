import { A } from "../chunk-UCL6J5NE.js";
import { a } from "../chunk-FXCI2R73.js";
import { bd } from "./chunk_yp.js";
export const Zt = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    RETURN: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESCAPE: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    UNDERSCORE: 189,
    CONVERT: 229,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91
};
const onMouseDown = a((t)=>t.preventDefault(), "preventDefault");
export function EP(t) {
    let onKeyUp = a((r)=>{
        if ([
            Zt.ENTER,
            Zt.SPACE
        ].includes(r.keyCode)) {
            t.onClick(r);
        }
    }, "onKeyUp");
    if (t.disabled) {
        let r = A(t, [
            "onClick"
        ]);
        return bd.default.createElement("a", {
            tabIndex: "-1",
            ...r,
            onMouseDown,
            "aria-disabled": true
        }, t.children);
    }
    return bd.default.createElement("a", {
        tabIndex: "0",
        ...t,
        onMouseDown,
        onKeyUp
    }, t.children);
}

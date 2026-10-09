import { a, c } from "../chunk-FXCI2R73.js";
const wP = c((Pse, bP)=>{
    "use strict";
    var eU = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    bP.exports = eU;
});
const _P = c((kse, xP)=>{
    "use strict";
    var tU = wP();
    function resetWarningCache() {}
    a(resetWarningCache, "emptyFunction");
    function checkPropTypes() {}
    a(checkPropTypes, "emptyFunctionWithReset");
    checkPropTypes.resetWarningCache = resetWarningCache;
    xP.exports = ()=>{
        function t(n, s, o, f, c, u) {
            if (u !== tU) {
                const d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                d.name = "Invariant Violation";
                throw d;
            }
        }
        a(t, "shim");
        t.isRequired = t;
        function e() {
            return t;
        }
        a(e, "getShim");
        const r = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes,
            resetWarningCache
        };
        r.PropTypes = r;
        return r;
    };
});
export const PP = c((Lse, CP)=>{
    CP.exports = _P()();
});

import { a, c } from "../chunk-FXCI2R73.js";
export const hb = c((U5, fb)=>{
    "use strict";
    fb.exports = Math.floor;
});
export const pb = c((q5, db)=>{
    "use strict";
    db.exports = Math.max;
});
export const gb = c(($5, mb)=>{
    "use strict";
    mb.exports = Math.min;
});
export const bb = c((z5, yb)=>{
    "use strict";
    yb.exports = Math.pow;
});
export const vb = c((H5, wb)=>{
    "use strict";
    wb.exports = Math.round;
});
const xb = c((W5, Sb)=>{
    "use strict";
    Sb.exports = Number.isNaN || a((e)=>e !== e, "isNaN");
});
export const Cb = c((V5, _b)=>{
    "use strict";
    var GF = xb();
    _b.exports = a((e)=>{
        if (GF(e) || e === 0) {
            return e;
        }
        if (e < 0) {
            return -1;
        }
        return 1;
    }, "sign");
});

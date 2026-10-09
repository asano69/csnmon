import { Ya, b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { HA } from "./chunk_$A.js";
import { GA } from "./chunk_jA.js";
const hc = e(b(), 1);
const GV = new Map;
export function Nn({ fileId, isCursorLine }) {
    let [r, setR] = hc.useState(null);
    hc.useEffect(()=>{
        if (fileId) {
            a(async ()=>{
                try {
                    let a = Ya.CurrentProject.get().id;
                    let l = GV.get(`${a}-${fileId}`);
                    if (l) {
                        setR(l);
                        return;
                    }
                    let c = await x.get(`/api/gcs/${a}/${fileId}/permission`);
                    setR(c.data);
                    GV.set(`${a}-${fileId}`, c.data);
                } catch (error) {
                    console.error(error);
                    setR(null);
                }
            }, "fetchPermission")();
        }
    }, [
        fileId
    ]);
    let o = {
        fileId,
        isCursorLine,
        permission: r
    };
    return hc.default.createElement(hc.default.Fragment, null, r?.deletable && hc.default.createElement(GA, {
        ...o
    }), r?.duplicatable && hc.default.createElement(HA, {
        ...o
    }));
}

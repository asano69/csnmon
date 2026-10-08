import { b, ba, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const WK = e(ba(), 1);
const Yp = e(b(), 1);
export async function Ove(text) {
    return (await x.get(`/api/deepl/translate?${WK.default.stringify({
        text
    })}`)).data?.result;
}
export const Ec = a((e, t)=>{
    let [r, setR] = Yp.useState(false);
    let [o, setO] = Yp.useState(undefined);
    let aRef = Yp.useRef(null);
    Yp.useEffect(()=>{
        if (typeof IntersectionObserver !== "function") {
            return;
        }
        let l = new IntersectionObserver(([m])=>{
            if (m?.isIntersecting) {
                aRef.current = setTimeout(()=>setR(true), 200);
            } else {
                if (aRef.current) {
                    clearTimeout(aRef.current);
                    aRef.current = null;
                }
                setR(false);
            }
        }, {
            rootMargin: "0px 0px 200px 0px"
        });
        let t_current = t.current;
        if (t_current) {
            l.observe(t_current);
        }
        return ()=>l.disconnect();
    }, [
        t
    ]);
    Yp.useEffect(()=>{
        if (r) {
            if (!e) {
                return setO(e);
            }
            (async ()=>{
                let l = await Ove(e);
                setO(l);
            })();
        }
    }, [
        e.trim(),
        r
    ]);
    return o;
}, "useIntersectionTranslate");

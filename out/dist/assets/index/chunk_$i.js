import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const $i = e(b(), 1);
const px = e(b(), 1);
export function dx(e) {
    let [t, setT] = px.useState(false);
    px.useEffect(()=>{
        if (typeof IntersectionObserver !== "function") {
            setT(true);
            return;
        }
        let n = new IntersectionObserver((s)=>{
            let a = s[0];
            if (a) {
                setT(a.isIntersecting);
            }
        }, {
            rootMargin: "0px",
            threshold: 0
        });
        let e_current = e.current;
        if (e_current) {
            n.observe(e_current);
        }
        return ()=>{
            if (e_current) {
                n.unobserve(e_current);
            }
            n.disconnect();
        };
    }, [
        e
    ]);
    return t;
}

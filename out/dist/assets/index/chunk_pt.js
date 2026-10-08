import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const pt = e(b(), 1);
const Fx = e(b(), 1);
const qX = "google-recaptcha-v3";
export function RX() {
    let load = Fx.useCallback(()=>{
        if (document.getElementById(qX)) {
            return;
        }
        let { RECAPTCHA_SITE_KEY } = Ya.Settings.envs;
        if (!Ya.Settings.flags.ENABLE_RECAPTCHA || !RECAPTCHA_SITE_KEY) {
            return;
        }
        let o = document.getElementsByTagName("head")[0];
        let s = document.createElement("script");
        s.async = true;
        s.type = "text/javascript";
        s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        s.id = qX;
        o.appendChild(s);
    }, []);
    let ready = Fx.useCallback(()=>new Promise((resolve)=>{
            load();
            if (typeof window.grecaptcha?.ready === "undefined") {
                window.grecaptcha = window.grecaptcha || {};
                window.grecaptcha.ready = (o)=>{
                    window.___grecaptcha_cfg ??= {};
                    window.___grecaptcha_cfg.fns ??= [];
                    window.___grecaptcha_cfg.fns.push(o);
                };
            }
            window.grecaptcha.ready(()=>resolve(window.grecaptcha));
        }), [
        load
    ]);
    let execute = Fx.useCallback(async (action)=>{
        let { RECAPTCHA_SITE_KEY } = Ya.Settings.envs;
        if (!Ya.Settings.flags.ENABLE_RECAPTCHA || !RECAPTCHA_SITE_KEY) {
            return;
        }
        let s = await ready();
        if (typeof action !== "string") {
            throw new Error('"action" must be a string');
        }
        return s.execute(RECAPTCHA_SITE_KEY, {
            action
        });
    }, [
        ready
    ]);
    return {
        load,
        ready,
        execute
    };
}

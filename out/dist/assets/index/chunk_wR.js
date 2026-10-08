import { F, J, K, Ya } from "../chunks/chunk-3PYJHPBQ.js";
const wR = new RegExp("^/([a-zA-Z\\d\\-]{2,})(?:/?|/([^/\\?]+))$");
export function TR(e) {
    let t;
    try {
        t = new URL(e);
    } catch  {
        return e;
    }
    let { host, pathname, hash } = t;
    let s = hash || "";
    if (host !== location.host) {
        return e;
    }
    let [, a, l] = pathname.match(wR) || [];
    if (F(a).isInvalid) {
        return e;
    }
    if (!l) {
        return `[/${a}]`;
    }
    let c;
    try {
        c = decodeURIComponent(l);
    } catch  {
        return `${e} (broken URL)`;
    }
    if (Ya.QuickSearch.exists(c)) {
        c = Ya.QuickSearch.find(c).title;
    } else {
        c = K(c);
    }
    if (a.toLowerCase() === Ya.CurrentProject.get().name.toLowerCase()) {
        return `[${c}${s}]`;
    }
    return `[/${a}/${c}${s}]`;
}
export const LN = /^(.+) (https?:\/\/[^\s]+)$/;
export function kR(e) {
    let [, t, r] = e.match(LN) || [];
    if (!t || !r) {
        return e;
    }
    let n;
    try {
        n = new URL(r);
    } catch  {
        return e;
    }
    let { host, pathname, hash } = n;
    let l = hash || "";
    if (host !== location.host) {
        return e;
    }
    let [, c, m] = pathname.match(wR) || [];
    if (F(c).isInvalid || !m) {
        return e;
    }
    let f;
    try {
        f = decodeURIComponent(m);
    } catch  {
        return `${e} (broken URL)`;
    }
    if (J(t) === J(f)) {
        if (c.toLowerCase() === Ya.CurrentProject.get().name.toLowerCase()) {
            return `[${t}${l}]`;
        }
        return `[/${c}/${t}${l}]`;
    }
    return e;
}

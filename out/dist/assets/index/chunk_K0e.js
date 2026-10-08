const K0e = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
const Y0e = "[^\"'=<>`\\x00-\\x20]+";
const J0e = "'[^']*'";
const X0e = '"[^"]*"';
const Z0e = `(?:${Y0e}|${J0e}|${X0e})`;
const Q0e = `(?:\\s+${K0e}(?:\\s*=\\s*${Z0e})?)`;
const d$ = `<[A-Za-z][A-Za-z0-9\\-]*${Q0e}*\\s*\\/?>`;
const m$ = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const efe = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->";
const tfe = "<[?][\\s\\S]*?[?]>";
const rfe = "<![A-Za-z][^>]*>";
const nfe = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
export const f$ = new RegExp(`^(?:${d$}|${m$}|${efe}|${tfe}|${rfe}|${nfe})`);
export const g$ = new RegExp(`^(?:${d$}|${m$})`);
const pfe = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
const dfe = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
export function I5(e, t) {
    let e_pos = e.pos;
    if (e.src.charCodeAt(e_pos) !== 60) {
        return false;
    }
    let e_pos_1 = e.pos;
    let e_posMax = e.posMax;
    while(true){
        if (++e_pos >= e_posMax) {
            return false;
        }
        let a = e.src.charCodeAt(e_pos);
        if (a === 60) {
            return false;
        }
        if (a === 62) {
            break;
        }
    }
    let s = e.src.slice(e_pos_1 + 1, e_pos);
    if (dfe.test(s)) {
        let a = e.md.normalizeLink(s);
        if (!e.md.validateLink(a)) {
            return false;
        }
        if (!t) {
            let l = e.push("link_open", "a", 1);
            l.attrs = [
                [
                    "href",
                    a
                ]
            ];
            l.markup = "autolink";
            l.info = "auto";
            let c = e.push("text", "", 0);
            c.content = e.md.normalizeLinkText(s);
            let m = e.push("link_close", "a", -1);
            m.markup = "autolink";
            m.info = "auto";
        }
        e.pos += s.length + 2;
        return true;
    }
    if (pfe.test(s)) {
        let a = e.md.normalizeLink(`mailto:${s}`);
        if (!e.md.validateLink(a)) {
            return false;
        }
        if (!t) {
            let l = e.push("link_open", "a", 1);
            l.attrs = [
                [
                    "href",
                    a
                ]
            ];
            l.markup = "autolink";
            l.info = "auto";
            let c = e.push("text", "", 0);
            c.content = e.md.normalizeLinkText(s);
            let m = e.push("link_close", "a", -1);
            m.markup = "autolink";
            m.info = "auto";
        }
        e.pos += s.length + 2;
        return true;
    }
    return false;
}

const n$ = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const U0e = /\((c|tm|r)\)/i;
const F0e = /\((c|tm|r)\)/ig;
const z0e = {
    c: "©",
    r: "®",
    tm: "™"
};
export function q0e(e, t) {
    return z0e[t.toLowerCase()];
}
export function R0e(e) {
    let t = 0;
    for(let r = e.length - 1; r >= 0; r--){
        let n = e[r];
        if (n.type === "text" && !t) {
            n.content = n.content.replace(F0e, q0e);
        }
        n.type === "link_open" && n.info === "auto" && t--;
        n.type === "link_close" && n.info === "auto" && t++;
    }
}
export function $0e(e) {
    let t = 0;
    for(let r = e.length - 1; r >= 0; r--){
        let n = e[r];
        if (n.type === "text" && !t && n$.test(n.content)) {
            n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
        }
        n.type === "link_open" && n.info === "auto" && t--;
        n.type === "link_close" && n.info === "auto" && t++;
    }
}
export function n5(e) {
    let t;
    if (e.md.options.typographer) {
        for(t = e.tokens.length - 1; t >= 0; t--){
            e.tokens[t].type === "inline" && (U0e.test(e.tokens[t].content) && R0e(e.tokens[t].children), n$.test(e.tokens[t].content) && $0e(e.tokens[t].children));
        }
    }
}

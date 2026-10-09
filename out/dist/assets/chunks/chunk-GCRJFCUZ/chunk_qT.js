const qT = /[\t\n\r]/g;
export function hs(t) {
    if (typeof t !== "string") {
        return t;
    }
    let e = 0;
    while(e < t.length && t.charCodeAt(e) <= 32){
        e++;
    }
    return t.slice(e).replace(qT, "");
}
export const HT = /^https?:(?!\/\/)/i;

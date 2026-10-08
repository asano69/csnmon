const L0e = /\r\n?|\n/g;
const M0e = /\0/g;
export function QN(e) {
    let t;
    t = e.src.replace(L0e, `
`);
    t = t.replace(M0e, "\uFFFD");
    e.src = t;
}

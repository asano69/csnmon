export const nt = globalThis;
export const Vl = "10.75.3";
export function Cd(e) {
    let t = e.__SENTRY__ = e.__SENTRY__ || {};
    t.version = t.version || Vl;
    return t[Vl] = t[Vl] || {};
}
export function fl(e, t, r = nt) {
    let n = r.__SENTRY__ = r.__SENTRY__ || {};
    let o = n[Vl] = n[Vl] || {};
    return o[e] || (o[e] = t());
}
export const v0 = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
export const Lse = "Sentry Logger ";
export const Ad = {};
export function Xs(e) {
    if (!("console" in nt)) {
        return e();
    }
    let nt_console = nt.console;
    let r = {};
    let n = Object.keys(Ad);
    n.forEach((o)=>{
        let s = Ad[o];
        r[o] = nt_console[o];
        nt_console[o] = s;
    });
    try {
        return e();
    } finally{
        n.forEach((o)=>{
            nt_console[o] = r[o];
        });
    }
}

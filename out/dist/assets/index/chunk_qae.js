const qae = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext"
];
export function Rae(e) {
    return Object.keys(e).some((t)=>qae.includes(t));
}

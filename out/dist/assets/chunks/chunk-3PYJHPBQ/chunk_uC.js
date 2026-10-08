export const uC = Number.isInteger || function(t) {
    return typeof t === "number" && isFinite(t) && Math.floor(t) === t;
};
export function KB(t) {
    return t === undefined || uC(t);
}

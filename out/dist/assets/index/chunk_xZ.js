let xZ;
export function wZ(e, t) {
    xZ = decodeURI(location.pathname + location.search);
    t();
}
export function TZ(e, t) {
    e.internalReferrer = xZ;
    t();
}

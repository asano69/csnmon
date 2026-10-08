const fi = 800;
const pi = 16;
export function ui(t) {
    let r = 0;
    let o = 0;
    return function() {
        const a = Date.now();
        const i = pi - (a - o);
        o = a;
        if (i > 0) {
            if (++r >= fi) {
                return arguments[0];
            }
        } else {
            r = 0;
        }
        return t(...arguments);
    };
}

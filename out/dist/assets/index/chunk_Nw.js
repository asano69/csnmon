export const Nw = "_sentrySpan";
const cue = /Minified React error #\d+;/i;
export function pue(e) {
    if (e && cue.test(e.message)) {
        return 1;
    }
    return 0;
}

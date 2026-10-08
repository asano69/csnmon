const Va = 9007199254740991;
const Ka = /^(?:0|[1-9]\d*)$/;
export function qa(t, r) {
    const o = typeof t;
    r = r ?? Va;
    return !!r && (o == "number" || o != "symbol" && Ka.test(t)) && t > -1 && t % 1 == 0 && t < r;
}

const To = 9007199254740991;
export function jo(t) {
    return typeof t === "number" && t > -1 && t % 1 == 0 && t <= To;
}

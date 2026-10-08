const mw = "<anonymous>";
export function ka(e) {
    try {
        if (!e || typeof e !== "function") {
            return mw;
        }
        return e.name || mw;
    } catch  {
        return mw;
    }
}

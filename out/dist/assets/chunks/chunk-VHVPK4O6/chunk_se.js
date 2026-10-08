const toString = Function.prototype.toString;
export function me(t) {
    if (t != null) {
        try {
            return toString.call(t);
        } catch  {}
        try {
            return `${t}`;
        } catch  {}
    }
    return "";
}

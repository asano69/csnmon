const sL = "scrapbox";
const oL = [
    "build/server",
    "src/client/js",
    "src/server",
    "src/share"
];
const aL = new RegExp(`.*(${oL.join("|")})`);
export function cL(t) {
    if (typeof t !== "string") {
        throw new Error("fileUrl is not string");
    }
    return t.replace(aL, sL).replace(/\..+$/, "").replace(/\/index$/, "").replace(/\//g, ":");
}

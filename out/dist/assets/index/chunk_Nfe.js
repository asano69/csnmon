export const Nfe = /^xn--/;
export const Cfe = /[^\0-\x7F]/;
export const Afe = /[\x2E\u3002\uFF0E\uFF61]/g;
const Ife = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
};
export const z5 = 35;
export const du = Math.floor;
export const q5 = String.fromCharCode;
export function Pp(e) {
    throw new RangeError(Ife[e]);
}

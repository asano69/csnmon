import { Dse, Mse, hM as isEnabled, pw } from "./chunk_Xe.js";
export function Bse(...e) {
    pw("log", ...e);
}
export function Use(...e) {
    pw("warn", ...e);
}
export function Fse(...e) {
    pw("error", ...e);
}
export const Fe = {
    enable: Mse,
    disable: Dse,
    isEnabled,
    log: Bse,
    warn: Use,
    error: Fse
};

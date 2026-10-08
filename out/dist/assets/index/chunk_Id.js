import { S0 } from "./chunk_E0.js";
export function Id() {
    return S0(()=>Math.random());
}
export function Kl() {
    return S0(()=>Date.now());
}

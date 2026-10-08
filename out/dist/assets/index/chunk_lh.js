import { nt } from "./chunk_nt.js";
export const lh = nt;
export function h3() {
    return "history" in lh && !!lh.history;
}
export function Dle() {
    if (!("fetch" in lh)) {
        return false;
    }
    try {
        new Headers;
        new Request("data:,");
        new Response;
        return true;
    } catch  {
        return false;
    }
}

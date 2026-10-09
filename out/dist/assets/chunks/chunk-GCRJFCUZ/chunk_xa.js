export const xa = [
    "infobox",
    "cosense"
];
const EF = [
    "ExcludeTitleLine"
];
export function Bl(t) {
    let e = t.split(/\t/)[0]?.trim();
    return EF.includes(e);
}

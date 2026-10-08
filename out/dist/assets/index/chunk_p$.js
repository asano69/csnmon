import { g$ } from "./chunk_K0e.js";
const p$ = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
const wm = [
    [
        /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
        /<\/(script|pre|style|textarea)>/i,
        true
    ],
    [
        /^<!--/,
        /-->/,
        true
    ],
    [
        /^<\?/,
        /\?>/,
        true
    ],
    [
        /^<![A-Za-z]/,
        />/,
        true
    ],
    [
        /^<!\[CDATA\[/,
        /\]\]>/,
        true
    ],
    [
        new RegExp(`^</?(${p$.join("|")})(?=(\\s|/?>|\$))`, "i"),
        /^$/,
        true
    ],
    [
        new RegExp(`${g$.source}\\s*\$`),
        /^$/,
        false
    ]
];
export function h5(e, t, r, n) {
    let o = e.bMarks[t] + e.tShift[t];
    let s = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(o) !== 60) {
        return false;
    }
    let a = e.src.slice(o, s);
    let l = 0;
    for(; l < wm.length && !wm[l][0].test(a); l++);
    if (l === wm.length) {
        return false;
    }
    if (n) {
        return wm[l][2];
    }
    let c = t + 1;
    let m = wm[l][1].test("");
    if (!wm[l][1].test(a)) {
        for(; c < r && !(e.sCount[c] < e.blkIndent && (m || !e.isEmpty(c))); c++){
            o = e.bMarks[c] + e.tShift[c];
            s = e.eMarks[c];
            a = e.src.slice(o, s);
            if (wm[l][1].test(a)) {
                a.length !== 0 && c++;
                break;
            }
        }
    }
    e.line = c;
    let f = e.push("html_block", "", 0);
    f.map = [
        t,
        c
    ];
    f.content = e.getLines(t, c, e.blkIndent, true);
    return true;
}

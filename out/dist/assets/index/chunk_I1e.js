const I1e = "([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity";
const P1e = {
    scope: "number",
    match: I1e,
    relevance: 0
};
export function OW(e) {
    let t = {
        className: "attr",
        begin: /(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,
        relevance: 1.01
    };
    let r = {
        match: /[{}[\],:]/,
        className: "punctuation",
        relevance: 0
    };
    let literal = [
        "true",
        "false",
        "null"
    ];
    let o = {
        scope: "literal",
        beginKeywords: literal.join(" ")
    };
    return {
        name: "JSON",
        aliases: [
            "jsonc",
            "json5"
        ],
        keywords: {
            literal
        },
        contains: [
            t,
            r,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            o,
            P1e,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
        ],
        illegal: "\\S"
    };
}

const Vf = "[0-9](_*[0-9])*";
const BS = `\\.(${Vf})`;
const US = "[0-9a-fA-F](_*[0-9a-fA-F])*";
const O1e = {
    className: "number",
    variants: [
        {
            begin: `(\\b(${Vf})((${BS})|\\.)?|(${BS}))[eE][+-]?(${Vf})[fFdD]?\\b`
        },
        {
            begin: `\\b(${Vf})((${BS})[fFdD]?\\b|\\.([fFdD]\\b)?)`
        },
        {
            begin: `(${BS})[fFdD]?\\b`
        },
        {
            begin: `\\b(${Vf})[fFdD]\\b`
        },
        {
            begin: `\\b0[xX]((${US})\\.?|(${US})?\\.(${US}))[pP][+-]?(${Vf})[fFdD]?\\b`
        },
        {
            begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
        },
        {
            begin: `\\b0[xX](${US})[lL]?\\b`
        },
        {
            begin: "\\b0(_*[0-7])*[lL]?\\b"
        },
        {
            begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
        }
    ],
    relevance: 0
};
export function DW(e) {
    let keywords = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
    };
    let r = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: {
            contains: [
                {
                    className: "symbol",
                    begin: /@\w+/
                }
            ]
        }
    };
    let n = {
        className: "symbol",
        begin: `${e.UNDERSCORE_IDENT_RE}@`
    };
    let o = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [
            e.C_NUMBER_MODE
        ]
    };
    let s = {
        className: "variable",
        begin: `\\\$${e.UNDERSCORE_IDENT_RE}`
    };
    let a = {
        className: "string",
        variants: [
            {
                begin: '"""',
                end: '"""(?=[^"])',
                contains: [
                    s,
                    o
                ]
            },
            {
                begin: "'",
                end: "'",
                illegal: /\n/,
                contains: [
                    e.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: '"',
                end: '"',
                illegal: /\n/,
                contains: [
                    e.BACKSLASH_ESCAPE,
                    s,
                    o
                ]
            }
        ]
    };
    o.contains.push(a);
    let l = {
        className: "meta",
        begin: `@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*${e.UNDERSCORE_IDENT_RE})?`
    };
    let c = {
        className: "meta",
        begin: `@${e.UNDERSCORE_IDENT_RE}`,
        contains: [
            {
                begin: /\(/,
                end: /\)/,
                contains: [
                    e.inherit(a, {
                        className: "string"
                    }),
                    "self"
                ]
            }
        ]
    };
    let m = O1e;
    let f = e.COMMENT("/\\*", "\\*/", {
        contains: [
            e.C_BLOCK_COMMENT_MODE
        ]
    });
    let g = {
        variants: [
            {
                className: "type",
                begin: e.UNDERSCORE_IDENT_RE
            },
            {
                begin: /\(/,
                end: /\)/,
                contains: []
            }
        ]
    };
    let v = g;
    v.variants[1].contains = [
        g
    ];
    g.variants[1].contains = [
        v
    ];
    return {
        name: "Kotlin",
        aliases: [
            "kt",
            "kts",
            "ktm",
            "ktx"
        ],
        keywords,
        contains: [
            e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }
                ]
            }),
            e.C_LINE_COMMENT_MODE,
            f,
            r,
            n,
            l,
            c,
            {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: true,
                excludeEnd: true,
                keywords,
                relevance: 5,
                contains: [
                    {
                        begin: `${e.UNDERSCORE_IDENT_RE}\\s*\\(`,
                        returnBegin: true,
                        relevance: 0,
                        contains: [
                            e.UNDERSCORE_TITLE_MODE
                        ]
                    },
                    {
                        className: "type",
                        begin: /</,
                        end: />/,
                        keywords: "reified",
                        relevance: 0
                    },
                    {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: true,
                        keywords,
                        relevance: 0,
                        contains: [
                            {
                                begin: /:/,
                                end: /[=,\/]/,
                                endsWithParent: true,
                                contains: [
                                    g,
                                    e.C_LINE_COMMENT_MODE,
                                    f
                                ],
                                relevance: 0
                            },
                            e.C_LINE_COMMENT_MODE,
                            f,
                            l,
                            c,
                            a,
                            e.C_NUMBER_MODE
                        ]
                    },
                    f
                ]
            },
            {
                begin: [
                    /class|interface|trait/,
                    /\s+/,
                    e.UNDERSCORE_IDENT_RE
                ],
                beginScope: {
                    3: "title.class"
                },
                keywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: true,
                illegal: "extends implements",
                contains: [
                    {
                        beginKeywords: "public protected internal private constructor"
                    },
                    e.UNDERSCORE_TITLE_MODE,
                    {
                        className: "type",
                        begin: /</,
                        end: />/,
                        excludeBegin: true,
                        excludeEnd: true,
                        relevance: 0
                    },
                    {
                        className: "type",
                        begin: /[,:]\s*/,
                        end: /[<\(,){\s]|$/,
                        excludeBegin: true,
                        returnEnd: true
                    },
                    l,
                    c
                ]
            },
            a,
            {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: `
`
            },
            m
        ]
    };
}

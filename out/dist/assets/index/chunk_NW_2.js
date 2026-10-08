import { a as a_1 } from "../chunks/chunk-FXCI2R73.js";
const NW = "[A-Za-z$_][0-9A-Za-z$_]*";
const k1e = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    "using"
];
const N1e = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
];
const CW = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly"
];
const AW = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
];
const IW = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
];
const C1e = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "self",
    "global"
];
const A1e = [].concat(IW, CW, AW);
export function PW(e) {
    let e_regex = e.regex;
    let r = a_1((he, { after })=>{
        let De = `</${he[0].slice(1)}`;
        return he.input.indexOf(De, after) !== -1;
    }, "hasClosingTag");
    let n = NW;
    let o = {
        begin: "<>",
        end: "</>"
    };
    let match = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    let a = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: a_1((he, Ue)=>{
            let after = he[0].length + he.index;
            let Be = he.input[after];
            if (Be === "<" || Be === ",") {
                Ue.ignoreMatch();
                return;
            }
            Be === ">" && (r(he, {
                after
            }) || Ue.ignoreMatch());
            let st;
            let Ft = he.input.substring(after);
            if (st = Ft.match(/^\s*=/)) {
                Ue.ignoreMatch();
                return;
            }
            if ((st = Ft.match(/^\s+extends\s+/)) && st.index === 0) {
                Ue.ignoreMatch();
                return;
            }
        }, "isTrulyOpeningTag")
    };
    let keywords = {
        $pattern: NW,
        keyword: k1e,
        literal: N1e,
        built_in: A1e,
        "variable.language": C1e
    };
    let c = "[0-9](_?[0-9])*";
    let m = `\\.(${c})`;
    let f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*";
    let g = {
        className: "number",
        variants: [
            {
                begin: `(\\b(${f})((${m})|\\.)?|(${m}))[eE][+-]?(${c})\\b`
            },
            {
                begin: `\\b(${f})\\b((${m})\\b|\\.)?|(${m})\\b`
            },
            {
                begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
            },
            {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            },
            {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            },
            {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            },
            {
                begin: "\\b0[0-7]+n?\\b"
            }
        ],
        relevance: 0
    };
    let v = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords,
        contains: []
    };
    let b = {
        begin: ".?html`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                e.BACKSLASH_ESCAPE,
                v
            ],
            subLanguage: "xml"
        }
    };
    let y = {
        begin: ".?css`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                e.BACKSLASH_ESCAPE,
                v
            ],
            subLanguage: "css"
        }
    };
    let k = {
        begin: ".?gql`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                e.BACKSLASH_ESCAPE,
                v
            ],
            subLanguage: "graphql"
        }
    };
    let _ = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
            e.BACKSLASH_ESCAPE,
            v
        ]
    };
    let S = {
        className: "comment",
        variants: [
            e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                relevance: 0,
                contains: [
                    {
                        begin: "(?=@[A-Za-z]+)",
                        relevance: 0,
                        contains: [
                            {
                                className: "doctag",
                                begin: "@[A-Za-z]+"
                            },
                            {
                                className: "type",
                                begin: "\\{",
                                end: "\\}",
                                excludeEnd: true,
                                excludeBegin: true,
                                relevance: 0
                            },
                            {
                                className: "variable",
                                begin: `${n}(?=\\s*(-)|\$)`,
                                endsParent: true,
                                relevance: 0
                            },
                            {
                                begin: /(?=[^\n])\s/,
                                relevance: 0
                            }
                        ]
                    }
                ]
            }),
            e.C_BLOCK_COMMENT_MODE,
            e.C_LINE_COMMENT_MODE
        ]
    };
    let C = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        b,
        y,
        k,
        _,
        {
            match: /\$\d+/
        },
        g
    ];
    v.contains = C.concat({
        begin: /\{/,
        end: /\}/,
        keywords,
        contains: [
            "self",
            ...C
        ]
    });
    let P = [].concat(S, v.contains);
    let U = P.concat([
        {
            begin: /(\s*)\(/,
            end: /\)/,
            keywords,
            contains: [
                "self"
            ].concat(P)
        }
    ]);
    let B = {
        className: "params",
        begin: /(\s*)\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords,
        contains: U
    };
    let H = {
        variants: [
            {
                match: [
                    /class/,
                    /\s+/,
                    n,
                    /\s+/,
                    /extends/,
                    /\s+/,
                    e_regex.concat(n, "(", e_regex.concat(/\./, n), ")*")
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            },
            {
                match: [
                    /class/,
                    /\s+/,
                    n
                ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ]
    };
    let CLASS_REFERENCE = {
        relevance: 0,
        match: e_regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
            _: [
                ...CW,
                ...AW
            ]
        }
    };
    let J = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
    };
    let Q = {
        variants: [
            {
                match: [
                    /function/,
                    /\s+/,
                    n,
                    /(?=\s*\()/
                ]
            },
            {
                match: [
                    /function/,
                    /\s*(?=\()/
                ]
            }
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        label: "func.def",
        contains: [
            B
        ],
        illegal: /%/
    };
    let pe = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
    };
    function Se(he) {
        return e_regex.concat("(?!", he.join("|"), ")");
    }
    a_1(Se, "noneOf");
    let Ge = {
        match: e_regex.concat(/\b/, Se([
            ...IW,
            "super",
            "import",
            "await"
        ].map((he)=>`${he}\\s*\\(`)), n, e_regex.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
    };
    let ie = {
        begin: e_regex.concat(/\./, e_regex.lookahead(e_regex.concat(n, /(?![0-9A-Za-z$_(])/))),
        end: n,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
    };
    let ue = {
        match: [
            /get|set/,
            /\s+/,
            n,
            /(?=\()/
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            {
                begin: /\(\)/
            },
            B
        ]
    };
    let begin = `(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|${e.UNDERSCORE_IDENT_RE})\\s*=>`;
    let oe = {
        match: [
            /const|var|let/,
            /\s+/,
            n,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            e_regex.lookahead(begin)
        ],
        keywords: "async",
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            B
        ]
    };
    return {
        name: "JavaScript",
        aliases: [
            "js",
            "jsx",
            "mjs",
            "cjs"
        ],
        keywords,
        exports: {
            PARAMS_CONTAINS: U,
            CLASS_REFERENCE
        },
        illegal: /#(?![$_A-Za-z])/,
        contains: [
            e.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }),
            J,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            b,
            y,
            k,
            _,
            S,
            {
                match: /\$\d+/
            },
            g,
            CLASS_REFERENCE,
            {
                scope: "attr",
                match: n + e_regex.lookahead(":"),
                relevance: 0
            },
            oe,
            {
                begin: `(${e.RE_STARTERS_RE}|\\b(case|return|throw)\\b)\\s*`,
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    S,
                    e.REGEXP_MODE,
                    {
                        className: "function",
                        begin,
                        returnBegin: true,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: e.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: true
                                    },
                                    {
                                        begin: /(\s*)\(/,
                                        end: /\)/,
                                        excludeBegin: true,
                                        excludeEnd: true,
                                        keywords,
                                        contains: U
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: /,/,
                        relevance: 0
                    },
                    {
                        match: /\s+/,
                        relevance: 0
                    },
                    {
                        variants: [
                            {
                                begin: o.begin,
                                end: o.end
                            },
                            {
                                match
                            },
                            {
                                begin: a.begin,
                                "on:begin": a.isTrulyOpeningTag,
                                end: a.end
                            }
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: a.begin,
                                end: a.end,
                                skip: true,
                                contains: [
                                    "self"
                                ]
                            }
                        ]
                    }
                ]
            },
            Q,
            {
                beginKeywords: "while if switch catch for"
            },
            {
                begin: `\\b(?!function)${e.UNDERSCORE_IDENT_RE}\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,
                returnBegin: true,
                label: "func.def",
                contains: [
                    B,
                    e.inherit(e.TITLE_MODE, {
                        begin: n,
                        className: "title.function"
                    })
                ]
            },
            {
                match: /\.\.\./,
                relevance: 0
            },
            ie,
            {
                match: `\\\$${n}`,
                relevance: 0
            },
            {
                match: [
                    /\bconstructor(?=\s*\()/
                ],
                className: {
                    1: "title.function"
                },
                contains: [
                    B
                ]
            },
            Ge,
            pe,
            H,
            ue,
            {
                match: /\$[(.]/
            }
        ]
    };
}

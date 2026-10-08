import { a as a_1 } from "../chunks/chunk-FXCI2R73.js";
export const rG = a_1((e)=>(t)=>{
        var tokens = t.consumeArg().tokens;
        var tokens_1 = t.consumeArg().tokens;
        var tokens_2 = t.consumeArg().tokens;
        var tokens_3 = t.consumeArg().tokens;
        var a = t.macros.get("|");
        var l = t.macros.get("\\|");
        t.macros.beginGroup();
        var c = a_1((g)=>(v)=>{
                if (e) {
                    v.macros.set("|", a);
                    if (tokens_2.length) {
                        v.macros.set("\\|", l);
                    }
                }
                var b = g;
                if (!g && tokens_2.length) {
                    var y = v.future();
                    if (y.text === "|") {
                        v.popToken();
                        b = true;
                    }
                }
                return {
                    tokens: b ? tokens_2 : tokens_1,
                    numArgs: 0
                };
            }, "midMacro");
        t.macros.set("|", c(false));
        if (tokens_2.length) {
            t.macros.set("\\|", c(true));
        }
        var tokens_4 = t.consumeArg().tokens;
        var f = t.expandTokens([
            ...tokens_3,
            ...tokens_4,
            ...tokens
        ]);
        t.macros.endGroup();
        return {
            tokens: f.reverse(),
            numArgs: 0
        };
    }, "braketHelper");
const u1e = [
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
const c1e = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
];
const p1e = [
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
const d1e = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
];
const m1e = [
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
const f1e = [
    ...m1e,
    ...p1e,
    ...d1e
];
export function HG(e) {
    let t = [
        "npm",
        "print"
    ];
    let r = [
        "yes",
        "no",
        "on",
        "off"
    ];
    let n = [
        "then",
        "unless",
        "until",
        "loop",
        "by",
        "when",
        "and",
        "or",
        "is",
        "isnt",
        "not"
    ];
    let o = [
        "var",
        "const",
        "let",
        "function",
        "static"
    ];
    let s = a_1((y)=>(k)=>!y.includes(k), "excluding");
    let keywords = {
        keyword: u1e.concat(n).filter(s(o)),
        literal: c1e.concat(r),
        built_in: f1e.concat(t)
    };
    let l = "[A-Za-z$_][0-9A-Za-z$_]*";
    let c = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords
    };
    let m = [
        e.BINARY_NUMBER_MODE,
        e.inherit(e.C_NUMBER_MODE, {
            starts: {
                end: "(\\s*/)?",
                relevance: 0
            }
        }),
        {
            className: "string",
            variants: [
                {
                    begin: /'''/,
                    end: /'''/,
                    contains: [
                        e.BACKSLASH_ESCAPE
                    ]
                },
                {
                    begin: /'/,
                    end: /'/,
                    contains: [
                        e.BACKSLASH_ESCAPE
                    ]
                },
                {
                    begin: /"""/,
                    end: /"""/,
                    contains: [
                        e.BACKSLASH_ESCAPE,
                        c
                    ]
                },
                {
                    begin: /"/,
                    end: /"/,
                    contains: [
                        e.BACKSLASH_ESCAPE,
                        c
                    ]
                }
            ]
        },
        {
            className: "regexp",
            variants: [
                {
                    begin: "///",
                    end: "///",
                    contains: [
                        c,
                        e.HASH_COMMENT_MODE
                    ]
                },
                {
                    begin: "//[gim]{0,3}(?=\\W)",
                    relevance: 0
                },
                {
                    begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
                }
            ]
        },
        {
            begin: `@${l}`
        },
        {
            subLanguage: "javascript",
            excludeBegin: true,
            excludeEnd: true,
            variants: [
                {
                    begin: "```",
                    end: "```"
                },
                {
                    begin: "`",
                    end: "`"
                }
            ]
        }
    ];
    c.contains = m;
    let f = e.inherit(e.TITLE_MODE, {
        begin: l
    });
    let g = "(\\(.*\\)\\s*)?\\B[-=]>";
    let v = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: true,
        contains: [
            {
                begin: /\(/,
                end: /\)/,
                keywords,
                contains: [
                    "self"
                ].concat(m)
            }
        ]
    };
    let b = {
        variants: [
            {
                match: [
                    /class\s+/,
                    l,
                    /\s+extends\s+/,
                    l
                ]
            },
            {
                match: [
                    /class\s+/,
                    l
                ]
            }
        ],
        scope: {
            2: "title.class",
            4: "title.class.inherited"
        },
        keywords
    };
    return {
        name: "CoffeeScript",
        aliases: [
            "coffee",
            "cson",
            "iced"
        ],
        keywords,
        illegal: /\/\*/,
        contains: [
            ...m,
            e.COMMENT("###", "###"),
            e.HASH_COMMENT_MODE,
            {
                className: "function",
                begin: `^\\s*${l}\\s*=\\s*${g}`,
                end: "[-=]>",
                returnBegin: true,
                contains: [
                    f,
                    v
                ]
            },
            {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [
                    {
                        className: "function",
                        begin: g,
                        end: "[-=]>",
                        returnBegin: true,
                        contains: [
                            v
                        ]
                    }
                ]
            },
            b,
            {
                begin: `${l}:`,
                end: ":",
                returnBegin: true,
                returnEnd: true,
                relevance: 0
            }
        ]
    };
}

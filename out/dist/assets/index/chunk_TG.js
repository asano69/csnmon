import { Fa, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a as a_1, c, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const TG = c((BGe, wG)=>{
    function dG(e) {
        if (e instanceof Map) {
            e.clear = e.delete = e.set = ()=>{
                throw new Error("map is read-only");
            };
        } else if (e instanceof Set) {
            e.add = e.clear = e.delete = ()=>{
                throw new Error("set is read-only");
            };
        }
        Object.freeze(e);
        Object.getOwnPropertyNames(e).forEach((t)=>{
            let r = e[t];
            let n = typeof r;
            if ((n === "object" || n === "function") && !Object.isFrozen(r)) {
                dG(r);
            }
        });
        return e;
    }
    a_1(dG, "deepFreeze");
    var PA = class PA {
        constructor(t){
            if (t.data === undefined) {
                t.data = {};
            }
            this.data = t.data;
            this.isMatchIgnored = false;
        }
        ignoreMatch() {
            this.isMatchIgnored = true;
        }
    };
    a_1(PA, "Response");
    var NS = PA;
    function mG(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    a_1(mG, "escapeHTML");
    function $p(e, ...t) {
        let r = Object.create(null);
        for(let n in e){
            r[n] = e[n];
        }
        t.forEach((n)=>{
            for(let o in n){
                r[o] = n[o];
            }
        });
        return r;
    }
    a_1($p, "inherit$1");
    var _be = "</span>";
    var sG = a_1((e)=>!!e.scope, "emitsWrappingTags");
    var Ebe = a_1((e, { prefix })=>{
        if (e.startsWith("language:")) {
            return e.replace("language:", "language-");
        }
        if (e.includes(".")) {
            let r = e.split(".");
            return [
                `${prefix}${r.shift()}`,
                ...r.map((n, o)=>`${n}${"_".repeat(o + 1)}`)
            ].join(" ");
        }
        return `${prefix}${e}`;
    }, "scopeToCSSClass");
    var OA = class OA {
        constructor(t, r){
            this.buffer = "";
            this.classPrefix = r.classPrefix;
            t.walk(this);
        }
        addText(t) {
            this.buffer += mG(t);
        }
        openNode(t) {
            if (!sG(t)) {
                return;
            }
            let r = Ebe(t.scope, {
                prefix: this.classPrefix
            });
            this.span(r);
        }
        closeNode(t) {
            if (sG(t)) {
                this.buffer += _be;
            }
        }
        value() {
            return this.buffer;
        }
        span(t) {
            this.buffer += `<span class="${t}">`;
        }
    };
    a_1(OA, "HTMLRenderer");
    var TA = OA;
    var aG = a_1((e = {})=>{
        let t = {
            children: []
        };
        Object.assign(t, e);
        return t;
    }, "newNode");
    var AS = class AS {
        constructor(){
            this.rootNode = aG();
            this.stack = [
                this.rootNode
            ];
        }
        get top() {
            return this.stack[this.stack.length - 1];
        }
        get root() {
            return this.rootNode;
        }
        add(t) {
            this.top.children.push(t);
        }
        openNode(scope) {
            let r = aG({
                scope
            });
            this.add(r);
            this.stack.push(r);
        }
        closeNode() {
            if (this.stack.length > 1) {
                return this.stack.pop();
            }
        }
        closeAllNodes() {
            while(this.closeNode());
        }
        toJSON() {
            return JSON.stringify(this.rootNode, null, 4);
        }
        walk(t) {
            return this.constructor._walk(t, this.rootNode);
        }
        static _walk(t, r) {
            if (typeof r === "string") {
                t.addText(r);
            } else if (r.children) {
                t.openNode(r);
                r.children.forEach((n)=>this._walk(t, n));
                t.closeNode(r);
            }
            return t;
        }
        static _collapse(t) {
            typeof t !== "string" && t.children && (t.children.every((r)=>typeof r === "string") ? t.children = [
                t.children.join("")
            ] : t.children.forEach((r)=>{
                AS._collapse(r);
            }));
        }
    };
    a_1(AS, "TokenTree");
    var kA = AS;
    var LA = class LA extends kA {
        constructor(t){
            super();
            this.options = t;
        }
        addText(t) {
            if (t !== "") {
                this.add(t);
            }
        }
        startScope(t) {
            this.openNode(t);
        }
        endScope() {
            this.closeNode();
        }
        __addSublanguage({ root }, r) {
            if (r) {
                root.scope = `language:${r}`;
            }
            this.add(root);
        }
        toHTML() {
            return new TA(this, this.options).value();
        }
        finalize() {
            this.closeAllNodes();
            return true;
        }
    };
    a_1(LA, "TokenTreeEmitter");
    var __emitter = LA;
    function v1(e) {
        if (e) {
            if (typeof e === "string") {
                return e;
            }
            return e.source;
        }
        return null;
    }
    a_1(v1, "source");
    function lookahead(e) {
        return concat("(?=", e, ")");
    }
    a_1(lookahead, "lookahead");
    function Sbe(e) {
        return concat("(?:", e, ")*");
    }
    a_1(Sbe, "anyNumberOfTimes");
    function xbe(e) {
        return concat("(?:", e, ")?");
    }
    a_1(xbe, "optional");
    function concat(...e) {
        return e.map((r)=>v1(r)).join("");
    }
    a_1(concat, "concat");
    function wbe(e) {
        let t = e[e.length - 1];
        if (typeof t === "object" && t.constructor === Object) {
            e.splice(e.length - 1, 1);
            return t;
        }
        return {};
    }
    a_1(wbe, "stripOptionsFromArgs");
    function either(...e) {
        return `(${wbe(e).capture ? "" : "?:"}${e.map((n)=>v1(n)).join("|")})`;
    }
    a_1(either, "either");
    function gG(e) {
        return new RegExp(`${e.toString()}|`).exec("").length - 1;
    }
    a_1(gG, "countMatchGroups");
    function Tbe(e, t) {
        let r = e && e.exec(t);
        return r && r.index === 0;
    }
    a_1(Tbe, "startsWith");
    var kbe = new RegExp(either(/\[(?:[^\\\]]|\\.)*\]/, /\(\?<(?![=!])[^>]+>/, /\(\?'[^']+'/, /\(\??/, /\\([1-9][0-9]*)/, /\\./));
    function AA(e, { joinWith }) {
        let r = 0;
        return e.map((n)=>{
            r += 1;
            let o = r;
            let s = v1(n);
            let a = "";
            while(s.length > 0){
                let l = kbe.exec(s);
                if (!l) {
                    a += s;
                    break;
                }
                a += s.substring(0, l.index);
                s = s.substring(l.index + l[0].length);
                if (l[0][0] === "\\" && l[1]) {
                    a += `\\${String(Number(l[1]) + o)}`;
                } else {
                    a += l[0];
                    (l[0] === "(" || /^\(\?[<']/.test(l[0])) && r++;
                }
            }
            return a;
        }).map((n)=>`(${n})`).join(joinWith);
    }
    a_1(AA, "_rewriteBackreferences");
    var Nbe = /\b\B/;
    var hG = "[a-zA-Z]\\w*";
    var IA = "[a-zA-Z_]\\w*";
    var bG = "\\b\\d+(\\.\\d+)?";
    var vG = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var yG = "\\b(0b[01]+)";
    var Cbe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var Abe = a_1((e = {})=>{
        let begin = /^#![ ]*\//;
        if (e.binary) {
            e.begin = concat(begin, /.*\b/, e.binary, /\b.*/);
        }
        return $p({
            scope: "meta",
            begin,
            end: /$/,
            relevance: 0,
            "on:begin": a_1((r, n)=>{
                if (r.index !== 0) {
                    n.ignoreMatch();
                }
            }, "on:begin")
        }, e);
    }, "SHEBANG");
    var BACKSLASH_ESCAPE = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
    };
    var Ibe = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [
            BACKSLASH_ESCAPE
        ]
    };
    var Pbe = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [
            BACKSLASH_ESCAPE
        ]
    };
    var Obe = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = a_1((begin, end, r = {})=>{
        let n = $p({
            scope: "comment",
            begin,
            end,
            contains: []
        }, r);
        n.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: true,
            relevance: 0
        });
        let o = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        n.contains.push({
            begin: concat(/[ ]+/, "(", o, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        });
        return n;
    }, "COMMENT");
    var Lbe = COMMENT("//", "$");
    var Mbe = COMMENT("/\\*", "\\*/");
    var Dbe = COMMENT("#", "$");
    var Bbe = {
        scope: "number",
        begin: bG,
        relevance: 0
    };
    var Ube = {
        scope: "number",
        begin: vG,
        relevance: 0
    };
    var Fbe = {
        scope: "number",
        begin: yG,
        relevance: 0
    };
    var zbe = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
            BACKSLASH_ESCAPE,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [
                    BACKSLASH_ESCAPE
                ]
            }
        ]
    };
    var qbe = {
        scope: "title",
        begin: hG,
        relevance: 0
    };
    var Rbe = {
        scope: "title",
        begin: IA,
        relevance: 0
    };
    var METHOD_GUARD = {
        begin: `\\.\\s*${IA}`,
        relevance: 0
    };
    var Hbe = a_1((e)=>Object.assign(e, {
            "on:begin": a_1((t, r)=>{
                r.data._beginMatch = t[1];
            }, "on:begin"),
            "on:end": a_1((t, r)=>{
                if (r.data._beginMatch !== t[1]) {
                    r.ignoreMatch();
                }
            }, "on:end")
        }), "END_SAME_AS_BEGIN");
    var kS = Object.freeze({
        __proto__: null,
        APOS_STRING_MODE: Ibe,
        BACKSLASH_ESCAPE,
        BINARY_NUMBER_MODE: Fbe,
        BINARY_NUMBER_RE: yG,
        COMMENT,
        C_BLOCK_COMMENT_MODE: Mbe,
        C_LINE_COMMENT_MODE: Lbe,
        C_NUMBER_MODE: Ube,
        C_NUMBER_RE: vG,
        END_SAME_AS_BEGIN: Hbe,
        HASH_COMMENT_MODE: Dbe,
        IDENT_RE: hG,
        MATCH_NOTHING_RE: Nbe,
        METHOD_GUARD,
        NUMBER_MODE: Bbe,
        NUMBER_RE: bG,
        PHRASAL_WORDS_MODE: Obe,
        QUOTE_STRING_MODE: Pbe,
        REGEXP_MODE: zbe,
        RE_STARTERS_RE: Cbe,
        SHEBANG: Abe,
        TITLE_MODE: qbe,
        UNDERSCORE_IDENT_RE: IA,
        UNDERSCORE_TITLE_MODE: Rbe
    });
    function jbe(e, t) {
        if (e.input[e.index - 1] === ".") {
            t.ignoreMatch();
        }
    }
    a_1(jbe, "skipIfHasPrecedingDot");
    function Gbe(e, t) {
        if (e.className !== undefined) {
            e.scope = e.className;
            delete e.className;
        }
    }
    a_1(Gbe, "scopeClassName");
    function Wbe(e, t) {
        if (t && e.beginKeywords) {
            e.begin = `\\b(${e.beginKeywords.split(" ").join("|")})(?!\\.)(?=\\b|\\s)`;
            e.__beforeBegin = jbe;
            e.keywords = e.keywords || e.beginKeywords;
            delete e.beginKeywords;
            if (e.relevance === undefined) {
                e.relevance = 0;
            }
        }
    }
    a_1(Wbe, "beginKeywords");
    function Vbe(e, t) {
        if (Array.isArray(e.illegal)) {
            e.illegal = either(...e.illegal);
        }
    }
    a_1(Vbe, "compileIllegal");
    function Kbe(e, t) {
        if (e.match) {
            if (e.begin || e.end) {
                throw new Error("begin & end are not supported with match");
            }
            e.begin = e.match;
            delete e.match;
        }
    }
    a_1(Kbe, "compileMatch");
    function Ybe(e, t) {
        if (e.relevance === undefined) {
            e.relevance = 1;
        }
    }
    a_1(Ybe, "compileRelevance");
    var Jbe = a_1((e, t)=>{
        if (!e.beforeMatch) {
            return;
        }
        if (e.starts) {
            throw new Error("beforeMatch cannot be used with starts");
        }
        let r = {
            ...e
        };
        Object.keys(e).forEach((n)=>{
            delete e[n];
        });
        e.keywords = r.keywords;
        e.begin = concat(r.beforeMatch, lookahead(r.begin));
        e.starts = {
            relevance: 0,
            contains: [
                Object.assign(r, {
                    endsParent: true
                })
            ]
        };
        e.relevance = 0;
        delete r.beforeMatch;
    }, "beforeMatchExt");
    var Xbe = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        "list",
        "value"
    ];
    var Zbe = "keyword";
    function _G(e, t, r = Zbe) {
        let n = Object.create(null);
        if (typeof e === "string") {
            o(r, e.split(" "));
        } else if (Array.isArray(e)) {
            o(r, e);
        } else {
            Object.keys(e).forEach((s)=>{
                Object.assign(n, _G(e[s], t, s));
            });
        }
        return n;
        function o(s, a) {
            if (t) {
                a = a.map((l)=>l.toLowerCase());
            }
            a.forEach((l)=>{
                let c = l.split("|");
                n[c[0]] = [
                    s,
                    Qbe(c[0], c[1])
                ];
            });
        }
        a_1(o, "compileList");
    }
    a_1(_G, "compileKeywords");
    function Qbe(e, t) {
        if (t) {
            return Number(t);
        }
        if (e1e(e)) {
            return 0;
        }
        return 1;
    }
    a_1(Qbe, "scoreForKeyword");
    function e1e(e) {
        return Xbe.includes(e.toLowerCase());
    }
    a_1(e1e, "commonKeyword");
    var lG = {};
    var Pm = a_1((e)=>{
        console.error(e);
    }, "error");
    var uG = a_1((e, ...t)=>{
        console.log(`WARN: ${e}`, ...t);
    }, "warn");
    var Hf = a_1((e, t)=>{
        if (!lG[`${e}/${t}`]) {
            console.log(`Deprecated as of ${e}. ${t}`);
            lG[`${e}/${t}`] = true;
        }
    }, "deprecated");
    var CS = new Error;
    function EG(e, t, { key }) {
        let n = 0;
        let o = e[key];
        let s = {};
        let a = {};
        for(let l = 1; l <= t.length; l++){
            a[l + n] = o[l];
            s[l + n] = true;
            n += gG(t[l - 1]);
        }
        e[key] = a;
        e[key]._emit = s;
        e[key]._multi = true;
    }
    a_1(EG, "remapScopeNames");
    function t1e(e) {
        if (Array.isArray(e.begin)) {
            if (e.skip || e.excludeBegin || e.returnBegin) {
                Pm("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
                throw CS;
            }
            if (typeof e.beginScope !== "object" || e.beginScope === null) {
                Pm("beginScope must be object");
                throw CS;
            }
            EG(e, e.begin, {
                key: "beginScope"
            });
            e.begin = AA(e.begin, {
                joinWith: ""
            });
        }
    }
    a_1(t1e, "beginMultiClass");
    function r1e(e) {
        if (Array.isArray(e.end)) {
            if (e.skip || e.excludeEnd || e.returnEnd) {
                Pm("skip, excludeEnd, returnEnd not compatible with endScope: {}");
                throw CS;
            }
            if (typeof e.endScope !== "object" || e.endScope === null) {
                Pm("endScope must be object");
                throw CS;
            }
            EG(e, e.end, {
                key: "endScope"
            });
            e.end = AA(e.end, {
                joinWith: ""
            });
        }
    }
    a_1(r1e, "endMultiClass");
    function n1e(e) {
        if (e.scope && typeof e.scope === "object" && e.scope !== null) {
            e.beginScope = e.scope;
            delete e.scope;
        }
    }
    a_1(n1e, "scopeSugar");
    function i1e(e) {
        n1e(e);
        if (typeof e.beginScope === "string") {
            e.beginScope = {
                _wrap: e.beginScope
            };
        }
        if (typeof e.endScope === "string") {
            e.endScope = {
                _wrap: e.endScope
            };
        }
        t1e(e);
        r1e(e);
    }
    a_1(i1e, "MultiClass");
    function o1e(e) {
        function t(c, m) {
            return new RegExp(v1(c), `m${e.case_insensitive ? "i" : ""}${e.unicodeRegex ? "u" : ""}${m ? "g" : ""}`);
        }
        a_1(t, "langRe");
        let a = class a {
            constructor(){
                this.matchIndexes = {};
                this.regexes = [];
                this.matchAt = 1;
                this.position = 0;
            }
            addRule(m, f) {
                f.position = this.position++;
                this.matchIndexes[this.matchAt] = f;
                this.regexes.push([
                    f,
                    m
                ]);
                this.matchAt += gG(m) + 1;
            }
            compile() {
                if (this.regexes.length === 0) {
                    this.exec = ()=>null;
                }
                let m = this.regexes.map((f)=>f[1]);
                this.matcherRe = t(AA(m, {
                    joinWith: "|"
                }), true);
                this.lastIndex = 0;
            }
            exec(m) {
                this.matcherRe.lastIndex = this.lastIndex;
                let f = this.matcherRe.exec(m);
                if (!f) {
                    return null;
                }
                let g = f.findIndex((b, y)=>y > 0 && b !== undefined);
                let v = this.matchIndexes[g];
                f.splice(0, g);
                return Object.assign(f, v);
            }
        };
        a_1(a, "MultiRegex");
        let r = a;
        let l = class l {
            constructor(){
                this.rules = [];
                this.multiRegexes = [];
                this.count = 0;
                this.lastIndex = 0;
                this.regexIndex = 0;
            }
            getMatcher(m) {
                if (this.multiRegexes[m]) {
                    return this.multiRegexes[m];
                }
                let f = new r;
                this.rules.slice(m).forEach(([g, v])=>f.addRule(g, v));
                f.compile();
                this.multiRegexes[m] = f;
                return f;
            }
            resumingScanAtSamePosition() {
                return this.regexIndex !== 0;
            }
            considerAll() {
                this.regexIndex = 0;
            }
            addRule(m, f) {
                this.rules.push([
                    m,
                    f
                ]);
                f.type === "begin" && this.count++;
            }
            exec(m) {
                let f = this.getMatcher(this.regexIndex);
                f.lastIndex = this.lastIndex;
                let g = f.exec(m);
                if (this.resumingScanAtSamePosition() && !(g && g.index === this.lastIndex)) {
                    let v = this.getMatcher(0);
                    v.lastIndex = this.lastIndex + 1;
                    g = v.exec(m);
                }
                if (g) {
                    this.regexIndex += g.position + 1;
                    if (this.regexIndex === this.count) {
                        this.considerAll();
                    }
                }
                return g;
            }
        };
        a_1(l, "ResumableMultiRegex");
        let n = l;
        function o(c) {
            let m = new n;
            c.contains.forEach((rule)=>m.addRule(rule.begin, {
                    rule,
                    type: "begin"
                }));
            if (c.terminatorEnd) {
                m.addRule(c.terminatorEnd, {
                    type: "end"
                });
            }
            if (c.illegal) {
                m.addRule(c.illegal, {
                    type: "illegal"
                });
            }
            return m;
        }
        a_1(o, "buildModeRegex");
        function s(c, m) {
            let f = c;
            if (c.isCompiled) {
                return f;
            }
            [
                Gbe,
                Kbe,
                i1e,
                Jbe
            ].forEach((v)=>v(c, m));
            e.compilerExtensions.forEach((v)=>v(c, m));
            c.__beforeBegin = null;
            [
                Wbe,
                Vbe,
                Ybe
            ].forEach((v)=>v(c, m));
            c.isCompiled = true;
            let g = null;
            if (typeof c.keywords === "object" && c.keywords.$pattern) {
                c.keywords = {
                    ...c.keywords
                };
                g = c.keywords.$pattern;
                delete c.keywords.$pattern;
            }
            g = g || /\w+/;
            if (c.keywords) {
                c.keywords = _G(c.keywords, e.case_insensitive);
            }
            f.keywordPatternRe = t(g, true);
            if (m) {
                if (!c.begin) {
                    c.begin = /\B|\b/;
                }
                f.beginRe = t(f.begin);
                if (!c.end && !c.endsWithParent) {
                    c.end = /\B|\b/;
                }
                if (c.end) {
                    f.endRe = t(f.end);
                }
                f.terminatorEnd = v1(f.end) || "";
                if (c.endsWithParent && m.terminatorEnd) {
                    f.terminatorEnd += (c.end ? "|" : "") + m.terminatorEnd;
                }
            }
            if (c.illegal) {
                f.illegalRe = t(c.illegal);
            }
            if (!c.contains) {
                c.contains = [];
            }
            c.contains = [].concat(...c.contains.map((v)=>s1e(v === "self" ? c : v)));
            c.contains.forEach((v)=>{
                s(v, f);
            });
            if (c.starts) {
                s(c.starts, m);
            }
            f.matcher = o(f);
            return f;
        }
        a_1(s, "compileMode");
        if (!e.compilerExtensions) {
            e.compilerExtensions = [];
        }
        if (e.contains && e.contains.includes("self")) {
            throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }
        e.classNameAliases = $p(e.classNameAliases || {});
        return s(e);
    }
    a_1(o1e, "compileLanguage");
    function SG(e) {
        if (e) {
            return e.endsWithParent || SG(e.starts);
        }
        return false;
    }
    a_1(SG, "dependencyOnParent");
    function s1e(e) {
        if (e.variants && !e.cachedVariants) {
            e.cachedVariants = e.variants.map((t)=>$p(e, {
                    variants: null
                }, t));
        }
        if (e.cachedVariants) {
            return e.cachedVariants;
        }
        if (SG(e)) {
            return $p(e, {
                starts: e.starts ? $p(e.starts) : null
            });
        }
        if (Object.isFrozen(e)) {
            return $p(e);
        }
        return e;
    }
    a_1(s1e, "expandOrCloneMode");
    var a1e = "11.12.0";
    var MA = class MA extends Error {
        constructor(t, r){
            super(t);
            this.name = "HTMLInjectionError";
            this.html = r;
        }
    };
    a_1(MA, "HTMLInjectionError");
    var CA = MA;
    var wA = mG;
    var inherit = $p;
    var pG = Symbol("nomatch");
    var l1e = 7;
    var xG = a_1((e)=>{
        let t = Object.create(null);
        let r = Object.create(null);
        let n = [];
        let o = true;
        let s = "Could not find the language '{}', did you forget to load/include a language module?";
        let _top = {
            disableAutodetect: true,
            name: "Plain text",
            contains: []
        };
        let l = {
            ignoreUnescapedHTML: false,
            throwUnescapedHTML: false,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            cssSelector: "pre code",
            languages: null,
            __emitter
        };
        function c(K) {
            return l.noHighlightRe.test(K);
        }
        a_1(c, "shouldNotHighlight");
        function m(K) {
            let oe = `${K.className} `;
            oe += K.parentNode ? K.parentNode.className : "";
            let he = l.languageDetectRe.exec(oe);
            if (he) {
                let Ue = getLanguage(he[1]);
                if (!Ue) {
                    uG(s.replace("{}", he[1]));
                    uG("Falling back to no-highlight mode for this block.", K);
                }
                if (Ue) {
                    return he[1];
                }
                return "no-highlight";
            }
            return oe.split(/\s+/).find((Ue)=>c(Ue) || getLanguage(Ue));
        }
        a_1(m, "blockLanguage");
        function highlight(K, oe, he) {
            let code = "";
            let De = "";
            if (typeof oe === "object") {
                code = K;
                he = oe.ignoreIllegals;
                De = oe.language;
            } else {
                Hf("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
                Hf("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`);
                De = K;
                code = oe;
            }
            if (he === undefined) {
                he = true;
            }
            let Be = {
                code,
                language: De
            };
            ie("before:highlight", Be);
            let st = Be.result ? Be.result : g(Be.language, Be.code, he);
            st.code = Be.code;
            ie("after:highlight", st);
            return st;
        }
        a_1(highlight, "highlight");
        function g(K, oe, he, Ue) {
            let De = Object.create(null);
            function Be(ke, qe) {
                return ke.keywords[qe];
            }
            a_1(Be, "keywordData");
            function st() {
                if (!Ne.keywords) {
                    _emitter.addText(At);
                    return;
                }
                let ke = 0;
                Ne.keywordPatternRe.lastIndex = 0;
                let qe = Ne.keywordPatternRe.exec(At);
                let ft = "";
                while(qe){
                    ft += At.substring(ke, qe.index);
                    let zt = se.case_insensitive ? qe[0].toLowerCase() : qe[0];
                    let ri = Be(Ne, zt);
                    if (ri) {
                        let [qs, yg] = ri;
                        _emitter.addText(ft);
                        ft = "";
                        De[zt] = (De[zt] || 0) + 1;
                        if (De[zt] <= l1e) {
                            relevance += yg;
                        }
                        if (qs.startsWith("_")) {
                            ft += qe[0];
                        } else {
                            let _g = se.classNameAliases[qs] || qs;
                            cr(qe[0], _g);
                        }
                    } else {
                        ft += qe[0];
                    }
                    ke = Ne.keywordPatternRe.lastIndex;
                    qe = Ne.keywordPatternRe.exec(At);
                }
                ft += At.substring(ke);
                _emitter.addText(ft);
            }
            a_1(st, "processKeywords");
            function Ft() {
                if (At === "") {
                    return;
                }
                let ke = null;
                if (typeof Ne.subLanguage === "string") {
                    if (!t[Ne.subLanguage]) {
                        _emitter.addText(At);
                        return;
                    }
                    ke = g(Ne.subLanguage, At, true, Qe[Ne.subLanguage]);
                    Qe[Ne.subLanguage] = ke._top;
                } else {
                    ke = highlightAuto(At, Ne.subLanguage.length ? Ne.subLanguage : null);
                }
                if (Ne.relevance > 0) {
                    relevance += ke.relevance;
                }
                _emitter.__addSublanguage(ke._emitter, ke.language);
            }
            a_1(Ft, "processSubLanguage");
            function Pt() {
                if (Ne.subLanguage != null) {
                    Ft();
                } else {
                    st();
                }
                At = "";
            }
            a_1(Pt, "processBuffer");
            function cr(ke, qe) {
                if (ke !== "") {
                    _emitter.startScope(qe);
                    _emitter.addText(ke);
                    _emitter.endScope();
                }
            }
            a_1(cr, "emitKeyword");
            function Wi(ke, qe) {
                let ft = 1;
                let zt = qe.length - 1;
                while(ft <= zt){
                    if (!ke._emit[ft]) {
                        ft++;
                        continue;
                    }
                    let ri = se.classNameAliases[ke[ft]] || ke[ft];
                    let qs = qe[ft];
                    if (ri) {
                        cr(qs, ri);
                    } else {
                        At = qs;
                        st();
                        At = "";
                    }
                    ft++;
                }
            }
            a_1(Wi, "emitMultiClass");
            function mn(ke, qe) {
                if (ke.scope && typeof ke.scope === "string") {
                    _emitter.openNode(se.classNameAliases[ke.scope] || ke.scope);
                }
                ke.beginScope && (ke.beginScope._wrap ? (cr(At, se.classNameAliases[ke.beginScope._wrap] || ke.beginScope._wrap), At = "") : ke.beginScope._multi && (Wi(ke.beginScope, qe), At = ""));
                Ne = Object.create(ke, {
                    parent: {
                        value: Ne
                    }
                });
                return Ne;
            }
            a_1(mn, "startNewMode");
            function Ye(ke, qe, ft) {
                let zt = Tbe(ke.endRe, ft);
                if (zt) {
                    if (ke["on:end"]) {
                        let ri = new NS(ke);
                        ke["on:end"](qe, ri);
                        if (ri.isMatchIgnored) {
                            zt = false;
                        }
                    }
                    if (zt) {
                        while(ke.endsParent && ke.parent){
                            ke = ke.parent;
                        }
                        return ke;
                    }
                }
                if (ke.endsWithParent) {
                    return Ye(ke.parent, qe, ft);
                }
            }
            a_1(Ye, "endOfMode");
            function Er(ke) {
                if (Ne.matcher.regexIndex === 0) {
                    At += ke[0];
                    return 1;
                }
                Ic = true;
                return 0;
            }
            a_1(Er, "doIgnore");
            function Br(ke) {
                let qe = ke[0];
                let ke_rule = ke.rule;
                let zt = new NS(ke_rule);
                let ri = [
                    ke_rule.__beforeBegin,
                    ke_rule["on:begin"]
                ];
                for (let qs of ri){
                    if (qs && (qs(ke, zt), zt.isMatchIgnored)) {
                        return Er(qe);
                    }
                }
                if (ke_rule.skip) {
                    At += qe;
                } else {
                    if (ke_rule.excludeBegin) {
                        At += qe;
                    }
                    Pt();
                    if (!ke_rule.returnBegin && !ke_rule.excludeBegin) {
                        At = qe;
                    }
                }
                mn(ke_rule, ke);
                if (ke_rule.returnBegin) {
                    return 0;
                }
                return qe.length;
            }
            a_1(Br, "doBeginMatch");
            function gi(ke) {
                let qe = ke[0];
                let ft = oe.substring(ke.index);
                let zt = Ye(Ne, ke, ft);
                if (!zt) {
                    return pG;
                }
                let ri = Ne;
                if (Ne.endScope && Ne.endScope._wrap) {
                    Pt();
                    cr(qe, Ne.endScope._wrap);
                } else if (Ne.endScope && Ne.endScope._multi) {
                    Pt();
                    Wi(Ne.endScope, ke);
                } else if (ri.skip) {
                    At += qe;
                } else {
                    if (!(ri.returnEnd || ri.excludeEnd)) {
                        At += qe;
                    }
                    Pt();
                    if (ri.excludeEnd) {
                        At = qe;
                    }
                }
                do {
                    if (Ne.scope) {
                        _emitter.closeNode();
                    }
                    if (!Ne.skip && !Ne.subLanguage) {
                        relevance += Ne.relevance;
                    }
                    Ne = Ne.parent;
                }while (Ne !== zt.parent)
                if (zt.starts) {
                    mn(zt.starts, ke);
                }
                if (ri.returnEnd) {
                    return 0;
                }
                return qe.length;
            }
            a_1(gi, "doEndMatch");
            function us() {
                let ke = [];
                for(let qe = Ne; qe !== se; qe = qe.parent){
                    if (qe.scope) {
                        ke.unshift(qe.scope);
                    }
                }
                ke.forEach((qe)=>_emitter.openNode(qe));
            }
            a_1(us, "processContinuations");
            let Ur = {};
            function ei(ke, qe) {
                let ft = qe && qe[0];
                At += ke;
                if (ft == null) {
                    Pt();
                    return 0;
                }
                if (Ur.type === "begin" && qe.type === "end" && Ur.index === qe.index && ft === "") {
                    At += oe.slice(qe.index, qe.index + 1);
                    if (!o) {
                        let zt = new Error(`0 width match regex (${K})`);
                        zt.languageName = K;
                        zt.badRule = Ur.rule;
                        throw zt;
                    }
                    return 1;
                }
                Ur = qe;
                if (qe.type === "begin") {
                    return Br(qe);
                }
                if (qe.type === "illegal" && !he) {
                    let zt = new Error(`Illegal lexeme "${ft}" for mode "${Ne.scope || "<unnamed>"}"`);
                    zt.mode = Ne;
                    throw zt;
                } else if (qe.type === "end") {
                    let zt = gi(qe);
                    if (zt !== pG) {
                        return zt;
                    }
                }
                if (qe.type === "illegal" && ft === "") {
                    if (!(qe.index === oe.length)) {
                        At += `
`;
                    }
                    return 1;
                }
                if (ba > 100000 && ba > qe.index * 3) {
                    throw new Error("potential infinite loop, way more iterations than matches");
                }
                At += ft;
                return ft.length;
            }
            a_1(ei, "processLexeme");
            let se = getLanguage(K);
            if (!se) {
                Pm(s.replace("{}", K));
                throw new Error(`Unknown language: "${K}"`);
            }
            let Ae = o1e(se);
            let Ht = "";
            let Ne = Ue || Ae;
            let Qe = {};
            let _emitter = new l.__emitter(l);
            us();
            let At = "";
            let relevance = 0;
            let index = 0;
            let ba = 0;
            let Ic = false;
            try {
                if (se.__emitTokens) {
                    se.__emitTokens(oe, _emitter);
                } else {
                    for(Ne.matcher.considerAll();;){
                        ba++;
                        if (Ic) {
                            Ic = false;
                        } else {
                            Ne.matcher.considerAll();
                        }
                        Ne.matcher.lastIndex = index;
                        let ke = Ne.matcher.exec(oe);
                        if (!ke) {
                            break;
                        }
                        let qe = oe.substring(index, ke.index);
                        let ft = ei(qe, ke);
                        index = ke.index + ft;
                    }
                    ei(oe.substring(index));
                }
                _emitter.finalize();
                Ht = _emitter.toHTML();
                return {
                    language: K,
                    value: Ht,
                    relevance,
                    illegal: false,
                    _emitter,
                    _top: Ne
                };
            } catch (errorRaised) {
                if (errorRaised.message && errorRaised.message.includes("Illegal")) {
                    return {
                        language: K,
                        value: wA(oe),
                        illegal: true,
                        relevance: 0,
                        _illegalBy: {
                            message: errorRaised.message,
                            index,
                            context: oe.slice(index - 100, index + 100),
                            mode: errorRaised.mode,
                            resultSoFar: Ht
                        },
                        _emitter
                    };
                }
                if (o) {
                    return {
                        language: K,
                        value: wA(oe),
                        illegal: false,
                        relevance: 0,
                        errorRaised,
                        _emitter,
                        _top: Ne
                    };
                }
                throw errorRaised;
            }
        }
        a_1(g, "_highlight");
        function v(K) {
            let oe = {
                value: wA(K),
                illegal: false,
                relevance: 0,
                _top,
                _emitter: new l.__emitter(l)
            };
            oe._emitter.addText(K);
            return oe;
        }
        a_1(v, "justTextHighlightResult");
        function highlightAuto(K, oe) {
            oe = oe || l.languages || Object.keys(t);
            let he = v(K);
            let Ue = oe.filter(getLanguage).filter(autoDetection).map((Pt)=>g(Pt, K, false));
            Ue.unshift(he);
            let De = Ue.sort((Pt, cr)=>{
                if (Pt.relevance !== cr.relevance) {
                    return cr.relevance - Pt.relevance;
                }
                if (Pt.language && cr.language) {
                    if (getLanguage(Pt.language).supersetOf === cr.language) {
                        return 1;
                    }
                    if (getLanguage(cr.language).supersetOf === Pt.language) {
                        return -1;
                    }
                }
                return 0;
            });
            let [Be, st] = De;
            let Ft = Be;
            Ft.secondBest = st;
            return Ft;
        }
        a_1(highlightAuto, "highlightAuto");
        function y(K, oe, he) {
            let Ue = oe && r[oe] || he;
            K.classList.add("hljs");
            K.classList.add(`language-${Ue}`);
        }
        a_1(y, "updateClassName");
        function highlightElement(el) {
            let oe = null;
            let he = m(el);
            if (c(he)) {
                return;
            }
            ie("before:highlightElement", {
                el,
                language: he
            });
            if (el.dataset.highlighted) {
                console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", el);
                return;
            }
            if (el.children.length > 0 && (l.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(el)), l.throwUnescapedHTML)) {
                throw new CA("One of your code blocks includes unescaped HTML.", el.innerHTML);
            }
            oe = el;
            let oe_textContent = oe.textContent;
            let result = he ? highlight(oe_textContent, {
                language: he,
                ignoreIllegals: true
            }) : highlightAuto(oe_textContent);
            el.innerHTML = result.value;
            el.dataset.highlighted = "yes";
            y(el, he, result.language);
            el.result = {
                language: result.language,
                re: result.relevance,
                relevance: result.relevance
            };
            if (result.secondBest) {
                el.secondBest = {
                    language: result.secondBest.language,
                    relevance: result.secondBest.relevance
                };
            }
            ie("after:highlightElement", {
                el,
                result,
                text: oe_textContent
            });
        }
        a_1(highlightElement, "highlightElement");
        function configure(K) {
            l = inherit(l, K);
        }
        a_1(configure, "configure");
        let initHighlighting = a_1(()=>{
            highlightAll();
            Hf("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        }, "initHighlighting");
        function initHighlightingOnLoad() {
            highlightAll();
            Hf("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        a_1(initHighlightingOnLoad, "initHighlightingOnLoad");
        let C = false;
        function highlightAll() {
            function K() {
                highlightAll();
            }
            a_1(K, "boot");
            if (document.readyState === "loading") {
                if (!C) {
                    window.addEventListener("DOMContentLoaded", K, false);
                }
                C = true;
                return;
            }
            document.querySelectorAll(l.cssSelector).forEach(highlightElement);
        }
        a_1(highlightAll, "highlightAll");
        function registerLanguage(languageName, oe) {
            let he = null;
            try {
                he = oe(e);
            } catch (error) {
                Pm("Language definition for '{}' could not be registered.".replace("{}", languageName));
                if (o) {
                    Pm(error);
                } else {
                    throw error;
                }
                he = _top;
            }
            if (!he.name) {
                he.name = languageName;
            }
            t[languageName] = he;
            he.rawDefinition = oe.bind(null, e);
            if (he.aliases) {
                registerAliases(he.aliases, {
                    languageName
                });
            }
        }
        a_1(registerLanguage, "registerLanguage");
        function unregisterLanguage(K) {
            delete t[K];
            for (let oe of Object.keys(r)){
                r[oe] === K && delete r[oe];
            }
        }
        a_1(unregisterLanguage, "unregisterLanguage");
        function listLanguages() {
            return Object.keys(t);
        }
        a_1(listLanguages, "listLanguages");
        function getLanguage(K) {
            K = (K || "").toLowerCase();
            return t[K] || t[r[K]];
        }
        a_1(getLanguage, "getLanguage");
        function registerAliases(K, { languageName }) {
            if (typeof K === "string") {
                K = [
                    K
                ];
            }
            K.forEach((he)=>{
                r[he.toLowerCase()] = languageName;
            });
        }
        a_1(registerAliases, "registerAliases");
        function autoDetection(K) {
            let oe = getLanguage(K);
            return oe && !oe.disableAutodetect;
        }
        a_1(autoDetection, "autoDetection");
        function pe(K) {
            if (K["before:highlightBlock"] && !K["before:highlightElement"]) {
                K["before:highlightElement"] = (oe)=>{
                    K["before:highlightBlock"]({
                        block: oe.el,
                        ...oe
                    });
                };
            }
            if (K["after:highlightBlock"] && !K["after:highlightElement"]) {
                K["after:highlightElement"] = (oe)=>{
                    K["after:highlightBlock"]({
                        block: oe.el,
                        ...oe
                    });
                };
            }
        }
        a_1(pe, "upgradePluginAPI");
        function addPlugin(K) {
            pe(K);
            n.push(K);
        }
        a_1(addPlugin, "addPlugin");
        function removePlugin(K) {
            let oe = n.indexOf(K);
            if (oe !== -1) {
                n.splice(oe, 1);
            }
        }
        a_1(removePlugin, "removePlugin");
        function ie(K, oe) {
            let he = K;
            n.forEach((Ue)=>{
                if (Ue[he]) {
                    Ue[he](oe);
                }
            });
        }
        a_1(ie, "fire");
        function highlightBlock(K) {
            Hf("10.7.0", "highlightBlock will be removed entirely in v12.0");
            Hf("10.7.0", "Please use highlightElement now.");
            return highlightElement(K);
        }
        a_1(highlightBlock, "deprecateHighlightBlock");
        Object.assign(e, {
            highlight,
            highlightAuto,
            highlightAll,
            highlightElement,
            highlightBlock,
            configure,
            initHighlighting,
            initHighlightingOnLoad,
            registerLanguage,
            unregisterLanguage,
            listLanguages,
            getLanguage,
            registerAliases,
            autoDetection,
            inherit,
            addPlugin,
            removePlugin
        });
        e.debugMode = ()=>{
            o = false;
        };
        e.safeMode = ()=>{
            o = true;
        };
        e.versionString = a1e;
        e.regex = {
            concat,
            lookahead,
            either,
            optional: xbe,
            anyNumberOfTimes: Sbe
        };
        for(let K in kS){
            if (typeof kS[K] === "object") {
                dG(kS[K]);
            }
        }
        Object.assign(e, kS);
        return e;
    }, "HLJS");
    var jf = xG({});
    jf.newInstance = ()=>xG({});
    wG.exports = jf;
    jf.HighlightJS = jf;
    jf.default = jf;
});
const kG = e(TG(), 1);
export const fe = kG.default;
export const yt = e(b(), 1);
export const YJ = e(Fa(), 1);
export const JJ = e(ge(), 1);

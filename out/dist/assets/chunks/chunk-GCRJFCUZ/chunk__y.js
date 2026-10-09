import { a, c, e } from "../chunk-FXCI2R73.js";
const _y = c((Ss, Cl)=>{
    ((t, e)=>{
        if (typeof Ss === "object" && typeof Cl === "object") {
            Cl.exports = e();
        } else if (typeof define === "function" && define.amd) {
            define([], e);
        } else if (typeof Ss === "object") {
            Ss.bowser = e();
        } else {
            t.bowser = e();
        }
    })(Ss, ()=>((t)=>{
            const e = {};
            function r(i) {
                if (e[i]) {
                    return e[i].exports;
                }
                const s = e[i] = {
                    i,
                    l: false,
                    exports: {}
                };
                t[i].call(s.exports, s, s.exports, r);
                s.l = true;
                return s.exports;
            }
            a(r, "r");
            r.m = t;
            r.c = e;
            r.d = (n, s, get)=>{
                if (!r.o(n, s)) {
                    Object.defineProperty(n, s, {
                        enumerable: true,
                        get
                    });
                }
            };
            r.r = (n)=>{
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    });
                }
                Object.defineProperty(n, "__esModule", {
                    value: true
                });
            };
            r.t = (n, s)=>{
                if (1 & s) {
                    n = r(n);
                }
                if (8 & s || 4 & s && typeof n === "object" && n && n.__esModule) {
                    return n;
                }
                const o = Object.create(null);
                r.r(o);
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: n
                });
                if (2 & s && typeof n !== "string") {
                    for(const f in n){
                        r.d(o, f, ((c)=>n[c]).bind(null, f));
                    }
                }
                return o;
            };
            r.n = (n)=>{
                const s = n && n.__esModule ? ()=>n.default : ()=>n;
                r.d(s, "a", s);
                return s;
            };
            r.o = (n, s)=>Object.prototype.hasOwnProperty.call(n, s);
            r.p = "";
            return r(r.s = 90);
        })({
            17: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                const n = r(18);
                const s = (()=>{
                    function o() {}
                    a(o, "e");
                    o.getFirstMatch = (f, c)=>{
                        const u = c.match(f);
                        return u && u.length > 0 && u[1] || "";
                    };
                    o.getSecondMatch = (f, c)=>{
                        const u = c.match(f);
                        return u && u.length > 1 && u[2] || "";
                    };
                    o.matchAndReturnConst = (f, c, u)=>{
                        if (f.test(c)) {
                            return u;
                        }
                    };
                    o.getWindowsVersionName = (f)=>{
                        switch(f){
                            case "NT":
                                return "NT";
                            case "XP":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return;
                        }
                    };
                    o.getMacOSVersionName = (f)=>{
                        const c = f.split(".").splice(0, 2).map((b)=>parseInt(b, 10) || 0);
                        c.push(0);
                        const u = c[0];
                        const d = c[1];
                        if (u === 10) {
                            switch(d){
                                case 5:
                                    return "Leopard";
                                case 6:
                                    return "Snow Leopard";
                                case 7:
                                    return "Lion";
                                case 8:
                                    return "Mountain Lion";
                                case 9:
                                    return "Mavericks";
                                case 10:
                                    return "Yosemite";
                                case 11:
                                    return "El Capitan";
                                case 12:
                                    return "Sierra";
                                case 13:
                                    return "High Sierra";
                                case 14:
                                    return "Mojave";
                                case 15:
                                    return "Catalina";
                                default:
                                    return;
                            }
                        }
                        switch(u){
                            case 11:
                                return "Big Sur";
                            case 12:
                                return "Monterey";
                            case 13:
                                return "Ventura";
                            case 14:
                                return "Sonoma";
                            case 15:
                                return "Sequoia";
                            default:
                                return;
                        }
                    };
                    o.getAndroidVersionName = (f)=>{
                        const c = f.split(".").splice(0, 2).map((u)=>parseInt(u, 10) || 0);
                        c.push(0);
                        if (!(c[0] === 1 && c[1] < 5)) {
                            if (c[0] === 1 && c[1] < 6) {
                                return "Cupcake";
                            }
                            if (c[0] === 1 && c[1] >= 6) {
                                return "Donut";
                            }
                            if (c[0] === 2 && c[1] < 2) {
                                return "Eclair";
                            }
                            if (c[0] === 2 && c[1] === 2) {
                                return "Froyo";
                            }
                            if (c[0] === 2 && c[1] > 2) {
                                return "Gingerbread";
                            }
                            if (c[0] === 3) {
                                return "Honeycomb";
                            }
                            if (c[0] === 4 && c[1] < 1) {
                                return "Ice Cream Sandwich";
                            }
                            if (c[0] === 4 && c[1] < 4) {
                                return "Jelly Bean";
                            }
                            if (c[0] === 4 && c[1] >= 4) {
                                return "KitKat";
                            }
                            if (c[0] === 5) {
                                return "Lollipop";
                            }
                            if (c[0] === 6) {
                                return "Marshmallow";
                            }
                            if (c[0] === 7) {
                                return "Nougat";
                            }
                            if (c[0] === 8) {
                                return "Oreo";
                            }
                            if (c[0] === 9) {
                                return "Pie";
                            }
                            return undefined;
                        }
                    };
                    o.getVersionPrecision = (f)=>f.split(".").length;
                    o.compareVersions = (f, c, u = false)=>{
                        const d = o.getVersionPrecision(f);
                        const b = o.getVersionPrecision(c);
                        let y = Math.max(d, b);
                        let w = 0;
                        const _ = o.map([
                            f,
                            c
                        ], (A)=>{
                            const F = y - o.getVersionPrecision(A);
                            const Y = A + new Array(F + 1).join(".0");
                            return o.map(Y.split("."), (T)=>new Array(20 - T.length).join("0") + T).reverse();
                        });
                        if (u) {
                            w = y - Math.min(d, b);
                        }
                        for(y -= 1; y >= w;){
                            if (_[0][y] > _[1][y]) {
                                return 1;
                            }
                            if (_[0][y] === _[1][y]) {
                                if (y === w) {
                                    return 0;
                                }
                                y -= 1;
                            } else if (_[0][y] < _[1][y]) {
                                return -1;
                            }
                        }
                    };
                    o.map = (f, c)=>{
                        let u;
                        const d = [];
                        if (Array.prototype.map) {
                            return Array.prototype.map.call(f, c);
                        }
                        for(u = 0; u < f.length; u += 1){
                            d.push(c(f[u]));
                        }
                        return d;
                    };
                    o.find = (f, c)=>{
                        let u;
                        let d;
                        if (Array.prototype.find) {
                            return Array.prototype.find.call(f, c);
                        }
                        u = 0;
                        for(d = f.length; u < d; u += 1){
                            const b = f[u];
                            if (c(b, u)) {
                                return b;
                            }
                        }
                    };
                    o.assign = (f, ...y)=>{
                        let c;
                        let u;
                        const d = f;
                        if (Object.assign) {
                            return Object.assign(...[
                                f
                            ].concat(y));
                        }
                        const _ = a(()=>{
                            const A = y[c];
                            if (typeof A === "object" && A !== null) {
                                Object.keys(A).forEach((F)=>{
                                    d[F] = A[F];
                                });
                            }
                        }, "s");
                        c = 0;
                        for(u = y.length; c < u; c += 1){
                            _();
                        }
                        return f;
                    };
                    o.getBrowserAlias = (f)=>n.BROWSER_ALIASES_MAP[f];
                    o.getBrowserTypeByAlias = (f)=>n.BROWSER_MAP[f] || "";
                    return o;
                })();
                e.default = s;
                t.exports = e.default;
            },
            18: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = undefined;
                e.BROWSER_ALIASES_MAP = {
                    AmazonBot: "amazonbot",
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    BaiduSpider: "baiduspider",
                    Bada: "bada",
                    BingCrawler: "bingcrawler",
                    Brave: "brave",
                    BlackBerry: "blackberry",
                    "ChatGPT-User": "chatgpt_user",
                    Chrome: "chrome",
                    ClaudeBot: "claudebot",
                    Chromium: "chromium",
                    Diffbot: "diffbot",
                    DuckDuckBot: "duckduckbot",
                    DuckDuckGo: "duckduckgo",
                    Electron: "electron",
                    Epiphany: "epiphany",
                    FacebookExternalHit: "facebookexternalhit",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    GPTBot: "gptbot",
                    "Internet Explorer": "ie",
                    InternetArchiveCrawler: "internetarchivecrawler",
                    "K-Meleon": "k_meleon",
                    LibreWolf: "librewolf",
                    Linespider: "linespider",
                    Maxthon: "maxthon",
                    "Meta-ExternalAds": "meta_externalads",
                    "Meta-ExternalAgent": "meta_externalagent",
                    "Meta-ExternalFetcher": "meta_externalfetcher",
                    "Meta-WebIndexer": "meta_webindexer",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    "OAI-SearchBot": "oai_searchbot",
                    Omgilibot: "omgilibot",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    "Pale Moon": "pale_moon",
                    PerplexityBot: "perplexitybot",
                    "Perplexity-User": "perplexity_user",
                    PhantomJS: "phantomjs",
                    PingdomBot: "pingdombot",
                    Puffin: "puffin",
                    QQ: "qq",
                    QQLite: "qqlite",
                    QupZilla: "qupzilla",
                    Roku: "roku",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SlackBot: "slackbot",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    "Sogou Browser": "sogou",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    YahooSlurp: "yahooslurp",
                    "Yandex Browser": "yandex",
                    YandexBot: "yandexbot",
                    YouBot: "youbot"
                };
                e.BROWSER_MAP = {
                    amazonbot: "AmazonBot",
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    baiduspider: "BaiduSpider",
                    bada: "Bada",
                    bingcrawler: "BingCrawler",
                    blackberry: "BlackBerry",
                    brave: "Brave",
                    chatgpt_user: "ChatGPT-User",
                    chrome: "Chrome",
                    claudebot: "ClaudeBot",
                    chromium: "Chromium",
                    diffbot: "Diffbot",
                    duckduckbot: "DuckDuckBot",
                    duckduckgo: "DuckDuckGo",
                    edge: "Microsoft Edge",
                    electron: "Electron",
                    epiphany: "Epiphany",
                    facebookexternalhit: "FacebookExternalHit",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    google_search: "Google Search",
                    googlebot: "Googlebot",
                    gptbot: "GPTBot",
                    ie: "Internet Explorer",
                    internetarchivecrawler: "InternetArchiveCrawler",
                    k_meleon: "K-Meleon",
                    librewolf: "LibreWolf",
                    linespider: "Linespider",
                    maxthon: "Maxthon",
                    meta_externalads: "Meta-ExternalAds",
                    meta_externalagent: "Meta-ExternalAgent",
                    meta_externalfetcher: "Meta-ExternalFetcher",
                    meta_webindexer: "Meta-WebIndexer",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    oai_searchbot: "OAI-SearchBot",
                    omgilibot: "Omgilibot",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    pale_moon: "Pale Moon",
                    perplexitybot: "PerplexityBot",
                    perplexity_user: "Perplexity-User",
                    phantomjs: "PhantomJS",
                    pingdombot: "PingdomBot",
                    puffin: "Puffin",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    qupzilla: "QupZilla",
                    roku: "Roku",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    slackbot: "SlackBot",
                    sleipnir: "Sleipnir",
                    sogou: "Sogou Browser",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yahooslurp: "YahooSlurp",
                    yandex: "Yandex Browser",
                    yandexbot: "YandexBot",
                    youbot: "YouBot"
                };
                e.PLATFORMS_MAP = {
                    bot: "bot",
                    desktop: "desktop",
                    mobile: "mobile",
                    tablet: "tablet",
                    tv: "tv"
                };
                e.OS_MAP = {
                    Android: "Android",
                    Bada: "Bada",
                    BlackBerry: "BlackBerry",
                    ChromeOS: "Chrome OS",
                    HarmonyOS: "HarmonyOS",
                    iOS: "iOS",
                    Linux: "Linux",
                    MacOS: "macOS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku",
                    Tizen: "Tizen",
                    WebOS: "WebOS",
                    Windows: "Windows",
                    WindowsPhone: "Windows Phone"
                };
                e.ENGINE_MAP = {
                    Blink: "Blink",
                    EdgeHTML: "EdgeHTML",
                    Gecko: "Gecko",
                    Presto: "Presto",
                    Trident: "Trident",
                    WebKit: "WebKit"
                };
            },
            90: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                let n;
                const s = (n = r(91)) && n.__esModule ? n : {
                    default: n
                };
                const o = r(18);
                function f(u, d) {
                    for (const y of d){
                        y.enumerable = y.enumerable || false;
                        y.configurable = true;
                        if ("value" in y) {
                            y.writable = true;
                        }
                        Object.defineProperty(u, y.key, y);
                    }
                }
                a(f, "o");
                const c = (()=>{
                    function u() {}
                    a(u, "e");
                    let d;
                    let b;
                    let y;
                    u.getParser = (w, _ = false, A = null)=>{
                        if (typeof w !== "string") {
                            throw new Error("UserAgent should be a string");
                        }
                        return new s.default(w, _, A);
                    };
                    u.parse = (w, _ = null)=>new s.default(w, _).getResult();
                    d = u;
                    y = [
                        {
                            key: "BROWSER_MAP",
                            get: a(()=>o.BROWSER_MAP, "get")
                        },
                        {
                            key: "ENGINE_MAP",
                            get: a(()=>o.ENGINE_MAP, "get")
                        },
                        {
                            key: "OS_MAP",
                            get: a(()=>o.OS_MAP, "get")
                        },
                        {
                            key: "PLATFORMS_MAP",
                            get: a(()=>o.PLATFORMS_MAP, "get")
                        }
                    ];
                    if (b = null) {
                        f(d.prototype, b);
                    }
                    if (y) {
                        f(d, y);
                    }
                    return u;
                })();
                e.default = c;
                t.exports = e.default;
            },
            91: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                const n = u(r(92));
                const s = u(r(93));
                const o = u(r(94));
                const f = u(r(95));
                const c = u(r(17));
                function u(b) {
                    if (b && b.__esModule) {
                        return b;
                    }
                    return {
                        default: b
                    };
                }
                a(u, "u");
                const d = (()=>{
                    function b(w, _ = false, A = null) {
                        if (w == null || w === "") {
                            throw new Error("UserAgent parameter can't be empty");
                        }
                        this._ua = w;
                        let F = false;
                        if (typeof _ === "boolean") {
                            F = _;
                            this._hints = A;
                        } else {
                            this._hints = _ != null && typeof _ === "object" ? _ : null;
                        }
                        this.parsedResult = {};
                        if (F !== true) {
                            this.parse();
                        }
                    }
                    a(b, "e");
                    const b_prototype = b.prototype;
                    b_prototype.getHints = function() {
                        return this._hints;
                    };
                    b_prototype.hasBrand = function(w) {
                        if (!this._hints || !Array.isArray(this._hints.brands)) {
                            return false;
                        }
                        const _ = w.toLowerCase();
                        return this._hints.brands.some((A)=>A.brand && A.brand.toLowerCase() === _);
                    };
                    b_prototype.getBrandVersion = function(w) {
                        if (this._hints && Array.isArray(this._hints.brands)) {
                            const _ = w.toLowerCase();
                            const A = this._hints.brands.find((F)=>F.brand && F.brand.toLowerCase() === _);
                            if (A) {
                                return A.version;
                            }
                            return undefined;
                        }
                    };
                    b_prototype.getUA = function() {
                        return this._ua;
                    };
                    b_prototype.test = function(w) {
                        return w.test(this._ua);
                    };
                    b_prototype.parseBrowser = function() {
                        const w = this;
                        this.parsedResult.browser = {};
                        const _ = c.default.find(n.default, (A)=>{
                            if (typeof A.test === "function") {
                                return A.test(w);
                            }
                            if (Array.isArray(A.test)) {
                                return A.test.some((F)=>w.test(F));
                            }
                            throw new Error("Browser's test function is not valid");
                        });
                        if (_) {
                            this.parsedResult.browser = _.describe(this.getUA(), this);
                        }
                        return this.parsedResult.browser;
                    };
                    b_prototype.getBrowser = function() {
                        if (this.parsedResult.browser) {
                            return this.parsedResult.browser;
                        }
                        return this.parseBrowser();
                    };
                    b_prototype.getBrowserName = function(w) {
                        if (w) {
                            return String(this.getBrowser().name).toLowerCase() || "";
                        }
                        return this.getBrowser().name || "";
                    };
                    b_prototype.getBrowserVersion = function() {
                        return this.getBrowser().version;
                    };
                    b_prototype.getOS = function() {
                        if (this.parsedResult.os) {
                            return this.parsedResult.os;
                        }
                        return this.parseOS();
                    };
                    b_prototype.parseOS = function() {
                        const w = this;
                        this.parsedResult.os = {};
                        const _ = c.default.find(s.default, (A)=>{
                            if (typeof A.test === "function") {
                                return A.test(w);
                            }
                            if (Array.isArray(A.test)) {
                                return A.test.some((F)=>w.test(F));
                            }
                            throw new Error("Browser's test function is not valid");
                        });
                        if (_) {
                            this.parsedResult.os = _.describe(this.getUA());
                        }
                        return this.parsedResult.os;
                    };
                    b_prototype.getOSName = function(w) {
                        const name = this.getOS().name;
                        if (w) {
                            return String(name).toLowerCase() || "";
                        }
                        return name || "";
                    };
                    b_prototype.getOSVersion = function() {
                        return this.getOS().version;
                    };
                    b_prototype.getPlatform = function() {
                        if (this.parsedResult.platform) {
                            return this.parsedResult.platform;
                        }
                        return this.parsePlatform();
                    };
                    b_prototype.getPlatformType = function(w = false) {
                        const type = this.getPlatform().type;
                        if (w) {
                            return String(type).toLowerCase() || "";
                        }
                        return type || "";
                    };
                    b_prototype.parsePlatform = function() {
                        const w = this;
                        this.parsedResult.platform = {};
                        const _ = c.default.find(o.default, (A)=>{
                            if (typeof A.test === "function") {
                                return A.test(w);
                            }
                            if (Array.isArray(A.test)) {
                                return A.test.some((F)=>w.test(F));
                            }
                            throw new Error("Browser's test function is not valid");
                        });
                        if (_) {
                            this.parsedResult.platform = _.describe(this.getUA());
                        }
                        return this.parsedResult.platform;
                    };
                    b_prototype.getEngine = function() {
                        if (this.parsedResult.engine) {
                            return this.parsedResult.engine;
                        }
                        return this.parseEngine();
                    };
                    b_prototype.getEngineName = function(w) {
                        if (w) {
                            return String(this.getEngine().name).toLowerCase() || "";
                        }
                        return this.getEngine().name || "";
                    };
                    b_prototype.parseEngine = function() {
                        const w = this;
                        this.parsedResult.engine = {};
                        const _ = c.default.find(f.default, (A)=>{
                            if (typeof A.test === "function") {
                                return A.test(w);
                            }
                            if (Array.isArray(A.test)) {
                                return A.test.some((F)=>w.test(F));
                            }
                            throw new Error("Browser's test function is not valid");
                        });
                        if (_) {
                            this.parsedResult.engine = _.describe(this.getUA());
                        }
                        return this.parsedResult.engine;
                    };
                    b_prototype.parse = function() {
                        this.parseBrowser();
                        this.parseOS();
                        this.parsePlatform();
                        this.parseEngine();
                        return this;
                    };
                    b_prototype.getResult = function() {
                        return c.default.assign({}, this.parsedResult);
                    };
                    b_prototype.satisfies = function(w) {
                        const _ = this;
                        const A = {};
                        let F = 0;
                        const Y = {};
                        let T = 0;
                        Object.keys(w).forEach((ee)=>{
                            const v = w[ee];
                            if (typeof v === "string") {
                                Y[ee] = v;
                                T += 1;
                            } else if (typeof v === "object") {
                                A[ee] = v;
                                F += 1;
                            }
                        });
                        if (F > 0) {
                            const j = Object.keys(A);
                            const J = c.default.find(j, (ee)=>_.isOS(ee));
                            if (J) {
                                const W = this.satisfies(A[J]);
                                if (W !== undefined) {
                                    return W;
                                }
                            }
                            const ae = c.default.find(j, (ee)=>_.isPlatform(ee));
                            if (ae) {
                                const te = this.satisfies(A[ae]);
                                if (te !== undefined) {
                                    return te;
                                }
                            }
                        }
                        if (T > 0) {
                            const X = Object.keys(Y);
                            const ne = c.default.find(X, (ee)=>_.isBrowser(ee, true));
                            if (ne !== undefined) {
                                return this.compareVersion(Y[ne]);
                            }
                        }
                    };
                    b_prototype.isBrowser = function(w, _ = false) {
                        const A = this.getBrowserName().toLowerCase();
                        let F = w.toLowerCase();
                        const Y = c.default.getBrowserTypeByAlias(F);
                        if (_ && Y) {
                            F = Y.toLowerCase();
                        }
                        return F === A;
                    };
                    b_prototype.compareVersion = function(w) {
                        let _ = [
                            0
                        ];
                        let A = w;
                        let F = false;
                        const Y = this.getBrowserVersion();
                        if (typeof Y === "string") {
                            if (w[0] === ">" || w[0] === "<") {
                                A = w.substr(1);
                                if (w[1] === "=") {
                                    F = true;
                                    A = w.substr(2);
                                } else {
                                    _ = [];
                                }
                                if (w[0] === ">") {
                                    _.push(1);
                                } else {
                                    _.push(-1);
                                }
                            } else if (w[0] === "=") {
                                A = w.substr(1);
                            } else if (w[0] === "~") {
                                F = true;
                                A = w.substr(1);
                            }
                            return _.indexOf(c.default.compareVersions(Y, A, F)) > -1;
                        }
                    };
                    b_prototype.isOS = function(w) {
                        return this.getOSName(true) === String(w).toLowerCase();
                    };
                    b_prototype.isPlatform = function(w) {
                        return this.getPlatformType(true) === String(w).toLowerCase();
                    };
                    b_prototype.isEngine = function(w) {
                        return this.getEngineName(true) === String(w).toLowerCase();
                    };
                    b_prototype.is = function(w, _ = false) {
                        return this.isBrowser(w, _) || this.isOS(w) || this.isPlatform(w);
                    };
                    b_prototype.some = function(w = []) {
                        const _ = this;
                        return w.some((A)=>_.is(A));
                    };
                    return b;
                })();
                e.default = d;
                t.exports = e.default;
            },
            92: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                let n;
                const s = (n = r(17)) && n.__esModule ? n : {
                    default: n
                };
                const o = /version\/(\d+(\.?_?\d+)+)/i;
                const f = [
                    {
                        test: [
                            /gptbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "GPTBot"
                            };
                            const d = s.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /chatgpt-user/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "ChatGPT-User"
                            };
                            const d = s.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /oai-searchbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "OAI-SearchBot"
                            };
                            const d = s.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /claudebot/i,
                            /claude-web/i,
                            /claude-user/i,
                            /claude-searchbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "ClaudeBot"
                            };
                            const d = s.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /omgilibot/i,
                            /webzio-extended/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Omgilibot"
                            };
                            const d = s.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /diffbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Diffbot"
                            };
                            const d = s.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /perplexitybot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "PerplexityBot"
                            };
                            const d = s.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /perplexity-user/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Perplexity-User"
                            };
                            const d = s.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /youbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "YouBot"
                            };
                            const d = s.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /meta-webindexer/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Meta-WebIndexer"
                            };
                            const d = s.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /meta-externalads/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Meta-ExternalAds"
                            };
                            const d = s.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /meta-externalagent/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Meta-ExternalAgent"
                            };
                            const d = s.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /meta-externalfetcher/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Meta-ExternalFetcher"
                            };
                            const d = s.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /googlebot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Googlebot"
                            };
                            const d = s.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /linespider/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Linespider"
                            };
                            const d = s.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /amazonbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "AmazonBot"
                            };
                            const d = s.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /bingbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "BingCrawler"
                            };
                            const d = s.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /baiduspider/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "BaiduSpider"
                            };
                            const d = s.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /duckduckbot/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "DuckDuckBot"
                            };
                            const d = s.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /ia_archiver/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "InternetArchiveCrawler"
                            };
                            const d = s.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /facebookexternalhit/i,
                            /facebookcatalog/i
                        ],
                        describe: a(()=>({
                                name: "FacebookExternalHit"
                            }), "describe")
                    },
                    {
                        test: [
                            /slackbot/i,
                            /slack-imgProxy/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "SlackBot"
                            };
                            const d = s.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /yahoo!?[\s/]*slurp/i
                        ],
                        describe: a(()=>({
                                name: "YahooSlurp"
                            }), "describe")
                    },
                    {
                        test: [
                            /yandexbot/i,
                            /yandexmobilebot/i
                        ],
                        describe: a(()=>({
                                name: "YandexBot"
                            }), "describe")
                    },
                    {
                        test: [
                            /pingdom/i
                        ],
                        describe: a(()=>({
                                name: "PingdomBot"
                            }), "describe")
                    },
                    {
                        test: [
                            /opera/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Opera"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /opr\/|opios/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Opera"
                            };
                            const d = s.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /SamsungBrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Samsung Internet for Android"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /Whale/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "NAVER Whale Browser"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /PaleMoon/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Pale Moon"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /MZBrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "MZ Browser"
                            };
                            const d = s.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /focus/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Focus"
                            };
                            const d = s.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /swing/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Swing"
                            };
                            const d = s.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /coast/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Opera Coast"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /opt\/\d+(?:.?_?\d+)+/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Opera Touch"
                            };
                            const d = s.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /yabrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Yandex Browser"
                            };
                            const d = s.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /ucbrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "UC Browser"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /Maxthon|mxios/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Maxthon"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /epiphany/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Epiphany"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /puffin/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Puffin"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /sleipnir/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Sleipnir"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /k-meleon/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "K-Meleon"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /micromessenger/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "WeChat"
                            };
                            const d = s.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /qqbrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: /qqbrowserlite/i.test(c) ? "QQ Browser Lite" : "QQ Browser"
                            };
                            const d = s.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /msie|trident/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Internet Explorer"
                            };
                            const d = s.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /\sedg\//i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Microsoft Edge"
                            };
                            const d = s.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /edg([ea]|ios)/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Microsoft Edge"
                            };
                            const d = s.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /vivaldi/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Vivaldi"
                            };
                            const d = s.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /seamonkey/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "SeaMonkey"
                            };
                            const d = s.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /sailfish/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Sailfish"
                            };
                            const d = s.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /silk/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Amazon Silk"
                            };
                            const d = s.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /phantom/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "PhantomJS"
                            };
                            const d = s.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /slimerjs/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "SlimerJS"
                            };
                            const d = s.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /blackberry|\bbb\d+/i,
                            /rim\stablet/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "BlackBerry"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /(web|hpw)[o0]s/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "WebOS Browser"
                            };
                            const d = s.default.getFirstMatch(o, c) || s.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /bada/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Bada"
                            };
                            const d = s.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /tizen/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Tizen"
                            };
                            const d = s.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /qupzilla/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "QupZilla"
                            };
                            const d = s.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /librewolf/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "LibreWolf"
                            };
                            const d = s.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /firefox|iceweasel|fxios/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Firefox"
                            };
                            const d = s.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /electron/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Electron"
                            };
                            const d = s.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /sogoumobilebrowser/i,
                            /metasr/i,
                            /se 2\.[x]/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Sogou Browser"
                            };
                            const d = s.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                            const b = s.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, c);
                            const y = s.default.getFirstMatch(/se ([\d.]+)x/i, c);
                            const w = d || b || y;
                            if (w) {
                                u.version = w;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /MiuiBrowser/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Miui"
                            };
                            const d = s.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: a((c)=>!!c.hasBrand("DuckDuckGo") || c.test(/\sDdg\/[\d.]+$/i), "test"),
                        describe: a((c, u)=>{
                            const d = {
                                name: "DuckDuckGo"
                            };
                            if (u) {
                                const b = u.getBrandVersion("DuckDuckGo");
                                if (b) {
                                    d.version = b;
                                    return d;
                                }
                            }
                            const y = s.default.getFirstMatch(/\sDdg\/([\d.]+)$/i, c);
                            if (y) {
                                d.version = y;
                            }
                            return d;
                        }, "describe")
                    },
                    {
                        test: a((c)=>c.hasBrand("Brave"), "test"),
                        describe: a((c, u)=>{
                            const d = {
                                name: "Brave"
                            };
                            if (u) {
                                const b = u.getBrandVersion("Brave");
                                if (b) {
                                    d.version = b;
                                    return d;
                                }
                            }
                            return d;
                        }, "describe")
                    },
                    {
                        test: [
                            /chromium/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Chromium"
                            };
                            const d = s.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, c) || s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /chrome|crios|crmo/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Chrome"
                            };
                            const d = s.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /GSA/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Google Search"
                            };
                            const d = s.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: a((c)=>{
                            const u = !c.test(/like android/i);
                            const d = c.test(/android/i);
                            return u && d;
                        }, "test"),
                        describe: a((c)=>{
                            const u = {
                                name: "Android Browser"
                            };
                            const d = s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /playstation 4/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "PlayStation 4"
                            };
                            const d = s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /safari|applewebkit/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: "Safari"
                            };
                            const d = s.default.getFirstMatch(o, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /.*/i
                        ],
                        describe: a((c)=>{
                            const u = c.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                            return {
                                name: s.default.getFirstMatch(u, c),
                                version: s.default.getSecondMatch(u, c)
                            };
                        }, "describe")
                    }
                ];
                e.default = f;
                t.exports = e.default;
            },
            93: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                let n;
                const s = (n = r(17)) && n.__esModule ? n : {
                    default: n
                };
                const o = r(18);
                const f = [
                    {
                        test: [
                            /Roku\/DVP/
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, c);
                            return {
                                name: o.OS_MAP.Roku,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /windows phone/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, c);
                            return {
                                name: o.OS_MAP.WindowsPhone,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /windows /i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, c);
                            const versionName = s.default.getWindowsVersionName(u);
                            return {
                                name: o.OS_MAP.Windows,
                                version: u,
                                versionName
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /Macintosh(.*?) FxiOS(.*?)\//
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: o.OS_MAP.iOS
                            };
                            const d = s.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /macintosh/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, c).replace(/[_\s]/g, ".");
                            const d = s.default.getMacOSVersionName(u);
                            const b = {
                                name: o.OS_MAP.MacOS,
                                version: u
                            };
                            if (d) {
                                b.versionName = d;
                            }
                            return b;
                        }, "describe")
                    },
                    {
                        test: [
                            /(ipod|iphone|ipad)/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, c).replace(/[_\s]/g, ".");
                            return {
                                name: o.OS_MAP.iOS,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /OpenHarmony/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, c);
                            return {
                                name: o.OS_MAP.HarmonyOS,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: a((c)=>{
                            const u = !c.test(/like android/i);
                            const d = c.test(/android/i);
                            return u && d;
                        }, "test"),
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, c);
                            const d = s.default.getAndroidVersionName(u);
                            const b = {
                                name: o.OS_MAP.Android,
                                version: u
                            };
                            if (d) {
                                b.versionName = d;
                            }
                            return b;
                        }, "describe")
                    },
                    {
                        test: [
                            /(web|hpw)[o0]s/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, c);
                            const d = {
                                name: o.OS_MAP.WebOS
                            };
                            if (u && u.length) {
                                d.version = u;
                            }
                            return d;
                        }, "describe")
                    },
                    {
                        test: [
                            /blackberry|\bbb\d+/i,
                            /rim\stablet/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, c) || s.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, c) || s.default.getFirstMatch(/\bbb(\d+)/i, c);
                            return {
                                name: o.OS_MAP.BlackBerry,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /bada/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, c);
                            return {
                                name: o.OS_MAP.Bada,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /tizen/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, c);
                            return {
                                name: o.OS_MAP.Tizen,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /linux/i
                        ],
                        describe: a(()=>({
                                name: o.OS_MAP.Linux
                            }), "describe")
                    },
                    {
                        test: [
                            /CrOS/
                        ],
                        describe: a(()=>({
                                name: o.OS_MAP.ChromeOS
                            }), "describe")
                    },
                    {
                        test: [
                            /PlayStation 4/
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, c);
                            return {
                                name: o.OS_MAP.PlayStation4,
                                version: u
                            };
                        }, "describe")
                    }
                ];
                e.default = f;
                t.exports = e.default;
            },
            94: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                let n;
                const s = (n = r(17)) && n.__esModule ? n : {
                    default: n
                };
                const o = r(18);
                const f = [
                    {
                        test: [
                            /googlebot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Google"
                            }), "describe")
                    },
                    {
                        test: [
                            /linespider/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Line"
                            }), "describe")
                    },
                    {
                        test: [
                            /amazonbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Amazon"
                            }), "describe")
                    },
                    {
                        test: [
                            /gptbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "OpenAI"
                            }), "describe")
                    },
                    {
                        test: [
                            /chatgpt-user/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "OpenAI"
                            }), "describe")
                    },
                    {
                        test: [
                            /oai-searchbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "OpenAI"
                            }), "describe")
                    },
                    {
                        test: [
                            /baiduspider/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Baidu"
                            }), "describe")
                    },
                    {
                        test: [
                            /bingbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Bing"
                            }), "describe")
                    },
                    {
                        test: [
                            /duckduckbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "DuckDuckGo"
                            }), "describe")
                    },
                    {
                        test: [
                            /claudebot/i,
                            /claude-web/i,
                            /claude-user/i,
                            /claude-searchbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Anthropic"
                            }), "describe")
                    },
                    {
                        test: [
                            /omgilibot/i,
                            /webzio-extended/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Webz.io"
                            }), "describe")
                    },
                    {
                        test: [
                            /diffbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Diffbot"
                            }), "describe")
                    },
                    {
                        test: [
                            /perplexitybot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Perplexity AI"
                            }), "describe")
                    },
                    {
                        test: [
                            /perplexity-user/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Perplexity AI"
                            }), "describe")
                    },
                    {
                        test: [
                            /youbot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "You.com"
                            }), "describe")
                    },
                    {
                        test: [
                            /ia_archiver/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Internet Archive"
                            }), "describe")
                    },
                    {
                        test: [
                            /meta-webindexer/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Meta"
                            }), "describe")
                    },
                    {
                        test: [
                            /meta-externalads/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Meta"
                            }), "describe")
                    },
                    {
                        test: [
                            /meta-externalagent/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Meta"
                            }), "describe")
                    },
                    {
                        test: [
                            /meta-externalfetcher/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Meta"
                            }), "describe")
                    },
                    {
                        test: [
                            /facebookexternalhit/i,
                            /facebookcatalog/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Meta"
                            }), "describe")
                    },
                    {
                        test: [
                            /slackbot/i,
                            /slack-imgProxy/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Slack"
                            }), "describe")
                    },
                    {
                        test: [
                            /yahoo/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Yahoo"
                            }), "describe")
                    },
                    {
                        test: [
                            /yandexbot/i,
                            /yandexmobilebot/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Yandex"
                            }), "describe")
                    },
                    {
                        test: [
                            /pingdom/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.bot,
                                vendor: "Pingdom"
                            }), "describe")
                    },
                    {
                        test: [
                            /huawei/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/(can-l01)/i, c) && "Nova";
                            const d = {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Huawei"
                            };
                            if (u) {
                                d.model = u;
                            }
                            return d;
                        }, "describe")
                    },
                    {
                        test: [
                            /nexus\s*(?:7|8|9|10).*/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Nexus"
                            }), "describe")
                    },
                    {
                        test: [
                            /ipad/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }), "describe")
                    },
                    {
                        test: [
                            /Macintosh(.*?) FxiOS(.*?)\//
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }), "describe")
                    },
                    {
                        test: [
                            /kftt build/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Amazon",
                                model: "Kindle Fire HD 7"
                            }), "describe")
                    },
                    {
                        test: [
                            /silk/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Amazon"
                            }), "describe")
                    },
                    {
                        test: [
                            /tablet(?! pc)/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet
                            }), "describe")
                    },
                    {
                        test: a((c)=>{
                            const u = c.test(/ipod|iphone/i);
                            const d = c.test(/like (ipod|iphone)/i);
                            return u && !d;
                        }, "test"),
                        describe: a((c)=>{
                            const model = s.default.getFirstMatch(/(ipod|iphone)/i, c);
                            return {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Apple",
                                model
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /nexus\s*[0-6].*/i,
                            /galaxy nexus/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Nexus"
                            }), "describe")
                    },
                    {
                        test: [
                            /Nokia/i
                        ],
                        describe: a((c)=>{
                            const u = s.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, c);
                            const d = {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Nokia"
                            };
                            if (u) {
                                d.model = u;
                            }
                            return d;
                        }, "describe")
                    },
                    {
                        test: [
                            /[^-]mobi/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getBrowserName(true) === "blackberry", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "BlackBerry"
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getBrowserName(true) === "bada", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getBrowserName() === "windows phone", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Microsoft"
                            }), "describe")
                    },
                    {
                        test: a((c)=>{
                            const u = Number(String(c.getOSVersion()).split(".")[0]);
                            return c.getOSName(true) === "android" && u >= 3;
                        }, "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tablet
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "android", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.mobile
                            }), "describe")
                    },
                    {
                        test: [
                            /smart-?tv|smarttv/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tv
                            }), "describe")
                    },
                    {
                        test: [
                            /netcast/i
                        ],
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tv
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "macos", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.desktop,
                                vendor: "Apple"
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "windows", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.desktop
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "linux", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.desktop
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "playstation 4", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tv
                            }), "describe")
                    },
                    {
                        test: a((c)=>c.getOSName(true) === "roku", "test"),
                        describe: a(()=>({
                                type: o.PLATFORMS_MAP.tv
                            }), "describe")
                    }
                ];
                e.default = f;
                t.exports = e.default;
            },
            95: function(t, e, r) {
                "use strict";
                e.__esModule = true;
                e.default = undefined;
                let n;
                const s = (n = r(17)) && n.__esModule ? n : {
                    default: n
                };
                const o = r(18);
                const f = [
                    {
                        test: a((c)=>c.getBrowserName(true) === "microsoft edge", "test"),
                        describe: a((c)=>{
                            if (/\sedg\//i.test(c)) {
                                return {
                                    name: o.ENGINE_MAP.Blink
                                };
                            }
                            const u = s.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, c);
                            return {
                                name: o.ENGINE_MAP.EdgeHTML,
                                version: u
                            };
                        }, "describe")
                    },
                    {
                        test: [
                            /trident/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: o.ENGINE_MAP.Trident
                            };
                            const d = s.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: a((c)=>c.test(/presto/i), "test"),
                        describe: a((c)=>{
                            const u = {
                                name: o.ENGINE_MAP.Presto
                            };
                            const d = s.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: a((c)=>{
                            const u = c.test(/gecko/i);
                            const d = c.test(/like gecko/i);
                            return u && !d;
                        }, "test"),
                        describe: a((c)=>{
                            const u = {
                                name: o.ENGINE_MAP.Gecko
                            };
                            const d = s.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    },
                    {
                        test: [
                            /(apple)?webkit\/537\.36/i
                        ],
                        describe: a(()=>({
                                name: o.ENGINE_MAP.Blink
                            }), "describe")
                    },
                    {
                        test: [
                            /(apple)?webkit/i
                        ],
                        describe: a((c)=>{
                            const u = {
                                name: o.ENGINE_MAP.WebKit
                            };
                            const d = s.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, c);
                            if (d) {
                                u.version = d;
                            }
                            return u;
                        }, "describe")
                    }
                ];
                e.default = f;
                t.exports = e.default;
            }
        }));
});
export const Cy = e(_y(), 1);

import { a as a_1, c, e } from "../chunks/chunk-FXCI2R73.js";
const wX = c((xX, Bx)=>{
    ((e)=>{
        "use strict";
        let t = "(0?\\d+|0x[a-f0-9]+)";
        let r = {
            fourOctet: new RegExp(`^${t}\\.${t}\\.${t}\\.${t}$`, "i"),
            threeOctet: new RegExp(`^${t}\\.${t}\\.${t}$`, "i"),
            twoOctet: new RegExp(`^${t}\\.${t}$`, "i"),
            longValue: new RegExp(`^${t}$`, "i")
        };
        let n = new RegExp("^0[0-7]+$", "i");
        let o = new RegExp("^0x[a-f0-9]+$", "i");
        let s = "%[0-9a-z]{1,}";
        let a = "(?:[0-9a-f]+::?)+";
        let l = {
            zoneIndex: new RegExp(s, "i"),
            native: new RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${s})?$`, "i"),
            deprecatedTransitional: new RegExp(`^(?:::)(${t}\\.${t}\\.${t}\\.${t}(${s})?)$`, "i"),
            transitional: new RegExp(`^((?:${a})|(?:::)(?:${a})?)${t}\\.${t}\\.${t}\\.${t}(${s})?$`, "i")
        };
        function c(b, parts) {
            if (b.indexOf("::") !== b.lastIndexOf("::")) {
                return null;
            }
            let k = 0;
            let _ = -1;
            let zoneId = (b.match(l.zoneIndex) || [])[0];
            let S;
            let C;
            for(zoneId && (zoneId = zoneId.substring(1), b = b.replace(/%.+$/, "")); (_ = b.indexOf(":", _ + 1)) >= 0;){
                k++;
            }
            b.substr(0, 2) === "::" && k--;
            b.substr(-2, 2) === "::" && k--;
            if (k >= parts) {
                return null;
            }
            C = parts - k;
            for(S = ":"; C--;){
                S += "0:";
            }
            b = b.replace("::", S);
            if (b[0] === ":") {
                b = b.slice(1);
            }
            if (b[b.length - 1] === ":") {
                b = b.slice(0, -1);
            }
            parts = (()=>{
                let P = b.split(":");
                let U = [];
                for(let B = 0; B < P.length; B++){
                    U.push(P[B].length > 4 ? NaN : parseInt(P[B], 16));
                }
                return U;
            })();
            return {
                parts,
                zoneId
            };
        }
        a_1(c, "expandIPv6");
        function m(b, y, k, _) {
            if (b.length !== y.length) {
                throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
            }
            let T = 0;
            let S;
            while(_ > 0){
                S = k - _;
                if (S < 0) {
                    S = 0;
                }
                if (b[T] >> S !== y[T] >> S) {
                    return false;
                }
                _ -= k;
                T += 1;
            }
            return true;
        }
        a_1(m, "matchCIDR");
        function f(b) {
            if (o.test(b)) {
                return parseInt(b, 16);
            }
            if (b[0] === "0" && !isNaN(parseInt(b[1], 10))) {
                if (n.test(b)) {
                    return parseInt(b, 8);
                }
                throw new Error(`ipaddr: cannot parse ${b} as octal`);
            }
            return parseInt(b, 10);
        }
        a_1(f, "parseIntAuto");
        function g(b, y) {
            while(b.length < y){
                b = `0${b}`;
            }
            return b;
        }
        a_1(g, "padPart");
        let v = {};
        v.IPv4 = (()=>{
            function b(y) {
                if (y.length !== 4) {
                    throw new Error("ipaddr: ipv4 octet count should be 4");
                }
                let k;
                let _;
                for(k = 0; k < y.length; k++){
                    _ = y[k];
                    if (!(_ >= 0 && _ <= 255)) {
                        throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
                    }
                }
                this.octets = y;
            }
            a_1(b, "IPv4");
            b.prototype.SpecialRanges = {
                unspecified: [
                    [
                        new b([
                            0,
                            0,
                            0,
                            0
                        ]),
                        8
                    ]
                ],
                broadcast: [
                    [
                        new b([
                            255,
                            255,
                            255,
                            255
                        ]),
                        32
                    ]
                ],
                multicast: [
                    [
                        new b([
                            224,
                            0,
                            0,
                            0
                        ]),
                        4
                    ]
                ],
                linkLocal: [
                    [
                        new b([
                            169,
                            254,
                            0,
                            0
                        ]),
                        16
                    ]
                ],
                loopback: [
                    [
                        new b([
                            127,
                            0,
                            0,
                            0
                        ]),
                        8
                    ]
                ],
                carrierGradeNat: [
                    [
                        new b([
                            100,
                            64,
                            0,
                            0
                        ]),
                        10
                    ]
                ],
                private: [
                    [
                        new b([
                            10,
                            0,
                            0,
                            0
                        ]),
                        8
                    ],
                    [
                        new b([
                            172,
                            16,
                            0,
                            0
                        ]),
                        12
                    ],
                    [
                        new b([
                            192,
                            168,
                            0,
                            0
                        ]),
                        16
                    ]
                ],
                reserved: [
                    [
                        new b([
                            192,
                            0,
                            0,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            192,
                            0,
                            2,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            192,
                            88,
                            99,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            198,
                            18,
                            0,
                            0
                        ]),
                        15
                    ],
                    [
                        new b([
                            198,
                            51,
                            100,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            203,
                            0,
                            113,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            240,
                            0,
                            0,
                            0
                        ]),
                        4
                    ]
                ],
                as112: [
                    [
                        new b([
                            192,
                            175,
                            48,
                            0
                        ]),
                        24
                    ],
                    [
                        new b([
                            192,
                            31,
                            196,
                            0
                        ]),
                        24
                    ]
                ],
                amt: [
                    [
                        new b([
                            192,
                            52,
                            193,
                            0
                        ]),
                        24
                    ]
                ]
            };
            b.prototype.kind = ()=>"ipv4";
            b.prototype.match = function(y, k) {
                let _;
                if (k === undefined) {
                    _ = y;
                    y = _[0];
                    k = _[1];
                }
                if (y.kind() !== "ipv4") {
                    throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
                }
                return m(this.octets, y.octets, 8, k);
            };
            b.prototype.prefixLengthFromSubnetMask = function() {
                let y = 0;
                let k = false;
                let _ = {
                    0: 8,
                    128: 7,
                    192: 6,
                    224: 5,
                    240: 4,
                    248: 3,
                    252: 2,
                    254: 1,
                    255: 0
                };
                let T;
                let S;
                let C;
                for(T = 3; T >= 0; T -= 1){
                    S = this.octets[T];
                    if (S in _) {
                        C = _[S];
                        if (k && C !== 0) {
                            return null;
                        }
                        if (C !== 8) {
                            k = true;
                        }
                        y += C;
                    } else {
                        return null;
                    }
                }
                return 32 - y;
            };
            b.prototype.range = function() {
                return v.subnetMatch(this, this.SpecialRanges);
            };
            b.prototype.toByteArray = function() {
                return this.octets.slice(0);
            };
            b.prototype.toIPv4MappedAddress = function() {
                return v.IPv6.parse(`::ffff:${this.toString()}`);
            };
            b.prototype.toNormalizedString = function() {
                return this.toString();
            };
            b.prototype.toString = function() {
                return this.octets.join(".");
            };
            return b;
        })();
        v.IPv4.broadcastAddressFromCIDR = function(b) {
            try {
                let y = this.parseCIDR(b);
                let k = y[0].toByteArray();
                let _ = this.subnetMaskFromPrefixLength(y[1]).toByteArray();
                let T = [];
                let S = 0;
                while(S < 4){
                    T.push(parseInt(k[S], 10) | parseInt(_[S], 10) ^ 255);
                    S++;
                }
                return new this(T);
            } catch (error) {
                throw new Error("ipaddr: the address does not have IPv4 CIDR format", {
                    cause: error
                });
            }
        };
        v.IPv4.isIPv4 = function(b) {
            return this.parser(b) !== null;
        };
        v.IPv4.isValid = function(b) {
            try {
                new this(this.parser(b));
                return true;
            } catch  {
                return false;
            }
        };
        v.IPv4.isValidCIDR = function(b) {
            try {
                this.parseCIDR(b);
                return true;
            } catch  {
                return false;
            }
        };
        v.IPv4.isValidFourPartDecimal = (b)=>!!(v.IPv4.isValid(b) && b.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/));
        v.IPv4.isValidCIDRFourPartDecimal = (b)=>{
            let y = b.match(/^(.+)\/(\d+)$/);
            if (!v.IPv4.isValidCIDR(b) || !y) {
                return false;
            }
            return v.IPv4.isValidFourPartDecimal(y[1]);
        };
        v.IPv4.networkAddressFromCIDR = function(b) {
            let y;
            let k;
            let _;
            let T;
            let S;
            try {
                y = this.parseCIDR(b);
                _ = y[0].toByteArray();
                S = this.subnetMaskFromPrefixLength(y[1]).toByteArray();
                T = [];
                for(k = 0; k < 4;){
                    T.push(parseInt(_[k], 10) & parseInt(S[k], 10));
                    k++;
                }
                return new this(T);
            } catch (error) {
                throw new Error("ipaddr: the address does not have IPv4 CIDR format", {
                    cause: error
                });
            }
        };
        v.IPv4.parse = function(b) {
            let y = this.parser(b);
            if (y === null) {
                throw new Error("ipaddr: string is not formatted like an IPv4 Address");
            }
            return new this(y);
        };
        v.IPv4.parseCIDR = function(b) {
            let y;
            if (y = b.match(/^(.+)\/(\d+)$/)) {
                let k = parseInt(y[2]);
                if (k >= 0 && k <= 32) {
                    let _ = [
                        this.parse(y[1]),
                        k
                    ];
                    Object.defineProperty(_, "toString", {
                        value: a_1(function() {
                            return this.join("/");
                        }, "value")
                    });
                    return _;
                }
            }
            throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
        };
        v.IPv4.parser = (b)=>{
            let y;
            let k;
            let _;
            if (y = b.match(r.fourOctet)) {
                return (()=>{
                    let T = y.slice(1, 6);
                    let S = [];
                    for(let C = 0; C < T.length; C++){
                        k = T[C];
                        S.push(f(k));
                    }
                    return S;
                })();
            }
            if (y = b.match(r.longValue)) {
                _ = f(y[1]);
                if (_ > 4294967295 || _ < 0) {
                    throw new Error("ipaddr: address outside defined range");
                }
                return (()=>{
                    let T = [];
                    let S;
                    for(S = 0; S <= 24; S += 8){
                        T.push(_ >> S & 255);
                    }
                    return T;
                })().reverse();
            } else {
                if (y = b.match(r.twoOctet)) {
                    return (()=>{
                        let T = y.slice(1, 4);
                        let S = [];
                        _ = f(T[1]);
                        if (_ > 16777215 || _ < 0) {
                            throw new Error("ipaddr: address outside defined range");
                        }
                        S.push(f(T[0]));
                        S.push(_ >> 16 & 255);
                        S.push(_ >> 8 & 255);
                        S.push(_ & 255);
                        return S;
                    })();
                }
                if (y = b.match(r.threeOctet)) {
                    return (()=>{
                        let T = y.slice(1, 5);
                        let S = [];
                        _ = f(T[2]);
                        if (_ > 65535 || _ < 0) {
                            throw new Error("ipaddr: address outside defined range");
                        }
                        S.push(f(T[0]));
                        S.push(f(T[1]));
                        S.push(_ >> 8 & 255);
                        S.push(_ & 255);
                        return S;
                    })();
                }
                return null;
            }
        };
        v.IPv4.subnetMaskFromPrefixLength = function(b) {
            b = parseInt(b);
            if (Number.isNaN(b) || b < 0 || b > 32) {
                throw new Error("ipaddr: invalid IPv4 prefix length");
            }
            let y = [
                0,
                0,
                0,
                0
            ];
            let k = 0;
            let _ = Math.floor(b / 8);
            while(k < _){
                y[k] = 255;
                k++;
            }
            if (_ < 4) {
                y[_] = 2 ** (b % 8) - 1 << 8 - b % 8;
            }
            return new this(y);
        };
        v.IPv6 = (()=>{
            function b(y, k) {
                let _;
                let T;
                if (y.length === 16) {
                    this.parts = [];
                    for(_ = 0; _ <= 14; _ += 2){
                        this.parts.push(y[_] << 8 | y[_ + 1]);
                    }
                } else if (y.length === 8) {
                    this.parts = y;
                } else {
                    throw new Error("ipaddr: ipv6 part count should be 8 or 16");
                }
                for(_ = 0; _ < this.parts.length; _++){
                    T = this.parts[_];
                    if (!(T >= 0 && T <= 65535)) {
                        throw new Error("ipaddr: ipv6 part should fit in 16 bits");
                    }
                }
                if (k) {
                    this.zoneId = k;
                }
            }
            a_1(b, "IPv6");
            b.prototype.SpecialRanges = {
                unspecified: [
                    new b([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    128
                ],
                linkLocal: [
                    new b([
                        65152,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    10
                ],
                multicast: [
                    new b([
                        65280,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    8
                ],
                loopback: [
                    new b([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ]),
                    128
                ],
                uniqueLocal: [
                    new b([
                        64512,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    7
                ],
                ipv4Mapped: [
                    new b([
                        0,
                        0,
                        0,
                        0,
                        0,
                        65535,
                        0,
                        0
                    ]),
                    96
                ],
                deprecatedSiteLocal: [
                    new b([
                        65216,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    10
                ],
                discard: [
                    new b([
                        256,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    64
                ],
                rfc6145: [
                    new b([
                        0,
                        0,
                        0,
                        0,
                        65535,
                        0,
                        0,
                        0
                    ]),
                    96
                ],
                rfc6052: [
                    [
                        new b([
                            100,
                            65435,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        96
                    ],
                    [
                        new b([
                            100,
                            65435,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        48
                    ]
                ],
                "6to4": [
                    new b([
                        8194,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    16
                ],
                teredo: [
                    new b([
                        8193,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    32
                ],
                benchmarking: [
                    new b([
                        8193,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    48
                ],
                amt: [
                    new b([
                        8193,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    32
                ],
                as112v6: [
                    [
                        new b([
                            8193,
                            4,
                            274,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        48
                    ],
                    [
                        new b([
                            9760,
                            79,
                            32768,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        48
                    ]
                ],
                deprecatedOrchid: [
                    new b([
                        8193,
                        16,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    28
                ],
                orchid2: [
                    new b([
                        8193,
                        32,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    28
                ],
                droneRemoteIdProtocolEntityTags: [
                    new b([
                        8193,
                        48,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    28
                ],
                segmentRouting: [
                    new b([
                        24320,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    16
                ],
                reserved: [
                    [
                        new b([
                            8193,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        23
                    ],
                    [
                        new b([
                            8193,
                            3512,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        32
                    ],
                    [
                        new b([
                            16383,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]),
                        20
                    ]
                ]
            };
            b.prototype.isIPv4MappedAddress = function() {
                return this.range() === "ipv4Mapped";
            };
            b.prototype.kind = ()=>"ipv6";
            b.prototype.match = function(y, k) {
                let _;
                if (k === undefined) {
                    _ = y;
                    y = _[0];
                    k = _[1];
                }
                if (y.kind() !== "ipv6") {
                    throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
                }
                return m(this.parts, y.parts, 16, k);
            };
            b.prototype.prefixLengthFromSubnetMask = function() {
                let y = 0;
                let k = false;
                let _ = {
                    0: 16,
                    32768: 15,
                    49152: 14,
                    57344: 13,
                    61440: 12,
                    63488: 11,
                    64512: 10,
                    65024: 9,
                    65280: 8,
                    65408: 7,
                    65472: 6,
                    65504: 5,
                    65520: 4,
                    65528: 3,
                    65532: 2,
                    65534: 1,
                    65535: 0
                };
                let T;
                let S;
                for(let C = 7; C >= 0; C -= 1){
                    T = this.parts[C];
                    if (T in _) {
                        S = _[T];
                        if (k && S !== 0) {
                            return null;
                        }
                        if (S !== 16) {
                            k = true;
                        }
                        y += S;
                    } else {
                        return null;
                    }
                }
                return 128 - y;
            };
            b.prototype.range = function() {
                return v.subnetMatch(this, this.SpecialRanges);
            };
            b.prototype.toByteArray = function() {
                let y;
                let k = [];
                let parts = this.parts;
                for(let T = 0; T < parts.length; T++){
                    y = parts[T];
                    k.push(y >> 8);
                    k.push(y & 255);
                }
                return k;
            };
            b.prototype.toFixedLengthString = function() {
                let y = (function() {
                    let _ = [];
                    for(let T = 0; T < this.parts.length; T++){
                        _.push(g(this.parts[T].toString(16), 4));
                    }
                    return _;
                }).call(this).join(":");
                let k = "";
                if (this.zoneId) {
                    k = `%${this.zoneId}`;
                }
                return y + k;
            };
            b.prototype.toIPv4Address = function() {
                if (!this.isIPv4MappedAddress()) {
                    throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
                }
                let y = this.parts.slice(-2);
                let k = y[0];
                let _ = y[1];
                return new v.IPv4([
                    k >> 8,
                    k & 255,
                    _ >> 8,
                    _ & 255
                ]);
            };
            b.prototype.toNormalizedString = function() {
                let y = (function() {
                    let _ = [];
                    for(let T = 0; T < this.parts.length; T++){
                        _.push(this.parts[T].toString(16));
                    }
                    return _;
                }).call(this).join(":");
                let k = "";
                if (this.zoneId) {
                    k = `%${this.zoneId}`;
                }
                return y + k;
            };
            b.prototype.toRFC5952String = function() {
                let y = /((^|:)(0(:|$)){2,})/g;
                let k = "";
                if (this.zoneId) {
                    k = `%${this.zoneId}`;
                }
                let _ = this.toNormalizedString();
                let T = _.slice(0, _.length - k.length);
                let S = 0;
                let C = -1;
                let P = -1;
                let U;
                while(U = y.exec(T)){
                    let B = (U[0].match(/0/g) || []).length;
                    if (B > P) {
                        P = B;
                        S = U.index;
                        C = U[0].length;
                    }
                }
                if (C < 0) {
                    return T + k;
                }
                return `${T.substring(0, S)}::${T.substring(S + C)}${k}`;
            };
            b.prototype.toString = function() {
                return this.toRFC5952String();
            };
            return b;
        })();
        v.IPv6.broadcastAddressFromCIDR = function(b) {
            try {
                let y = this.parseCIDR(b);
                let k = y[0].toByteArray();
                let _ = this.subnetMaskFromPrefixLength(y[1]).toByteArray();
                let T = [];
                let S = 0;
                while(S < 16){
                    T.push(parseInt(k[S], 10) | parseInt(_[S], 10) ^ 255);
                    S++;
                }
                return new this(T);
            } catch (error) {
                throw new Error("ipaddr: the address does not have IPv6 CIDR format", {
                    cause: error
                });
            }
        };
        v.IPv6.isIPv6 = function(b) {
            return this.parser(b) !== null;
        };
        v.IPv6.isValid = function(b) {
            if (typeof b === "string" && b.indexOf(":") === -1) {
                return false;
            }
            try {
                let y = this.parser(b);
                new this(y.parts, y.zoneId);
                return true;
            } catch  {
                return false;
            }
        };
        v.IPv6.isValidCIDR = function(b) {
            if (typeof b === "string" && b.indexOf(":") === -1) {
                return false;
            }
            try {
                this.parseCIDR(b);
                return true;
            } catch  {
                return false;
            }
        };
        v.IPv6.networkAddressFromCIDR = function(b) {
            let y;
            let k;
            let _;
            let T;
            let S;
            try {
                y = this.parseCIDR(b);
                _ = y[0].toByteArray();
                S = this.subnetMaskFromPrefixLength(y[1]).toByteArray();
                T = [];
                for(k = 0; k < 16;){
                    T.push(parseInt(_[k], 10) & parseInt(S[k], 10));
                    k++;
                }
                return new this(T);
            } catch (error) {
                throw new Error("ipaddr: the address does not have IPv6 CIDR format", {
                    cause: error
                });
            }
        };
        v.IPv6.parse = function(b) {
            let y = this.parser(b);
            if (y === null) {
                throw new Error("ipaddr: string is not formatted like an IPv6 Address");
            }
            return new this(y.parts, y.zoneId);
        };
        v.IPv6.parseCIDR = function(b) {
            let y;
            let k;
            let _;
            if ((k = b.match(/^(.+)\/(\d+)$/)) && (y = parseInt(k[2]), y >= 0 && y <= 128)) {
                _ = [
                    this.parse(k[1]),
                    y
                ];
                Object.defineProperty(_, "toString", {
                    value: a_1(function() {
                        return this.join("/");
                    }, "value")
                });
                return _;
            }
            throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
        };
        v.IPv6.parser = function(b) {
            let y;
            let k;
            let _;
            let T;
            let S;
            let C;
            if (_ = b.match(l.deprecatedTransitional)) {
                return this.parser(`::ffff:${_[1]}`);
            }
            if (l.native.test(b)) {
                return c(b, 8);
            }
            if ((_ = b.match(l.transitional)) && (C = _[6] || "", y = _[1], _[1].endsWith("::") || (y = y.slice(0, -1)), y = c(y + C, 6), y && y.parts)) {
                S = [
                    parseInt(_[2]),
                    parseInt(_[3]),
                    parseInt(_[4]),
                    parseInt(_[5])
                ];
                for(k = 0; k < S.length; k++){
                    T = S[k];
                    if (!(T >= 0 && T <= 255)) {
                        return null;
                    }
                }
                y.parts.push(S[0] << 8 | S[1]);
                y.parts.push(S[2] << 8 | S[3]);
                return {
                    parts: y.parts,
                    zoneId: y.zoneId
                };
            }
            return null;
        };
        v.IPv6.subnetMaskFromPrefixLength = function(b) {
            b = parseInt(b);
            if (Number.isNaN(b) || b < 0 || b > 128) {
                throw new Error("ipaddr: invalid IPv6 prefix length");
            }
            let y = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            let k = 0;
            let _ = Math.floor(b / 8);
            while(k < _){
                y[k] = 255;
                k++;
            }
            if (_ < 16) {
                y[_] = 2 ** (b % 8) - 1 << 8 - b % 8;
            }
            return new this(y);
        };
        v.fromByteArray = (b)=>{
            let b_length = b.length;
            if (b_length === 4) {
                return new v.IPv4(b);
            }
            if (b_length === 16) {
                return new v.IPv6(b);
            }
            throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
        };
        v.isValid = (b)=>v.IPv6.isValid(b) || v.IPv4.isValid(b);
        v.isValidCIDR = (b)=>v.IPv6.isValidCIDR(b) || v.IPv4.isValidCIDR(b);
        v.parse = (b)=>{
            if (v.IPv6.isValid(b)) {
                return v.IPv6.parse(b);
            }
            if (v.IPv4.isValid(b)) {
                return v.IPv4.parse(b);
            }
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
        };
        v.parseCIDR = (b)=>{
            try {
                return v.IPv6.parseCIDR(b);
            } catch  {
                try {
                    return v.IPv4.parseCIDR(b);
                } catch (error) {
                    throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format", {
                        cause: error
                    });
                }
            }
        };
        v.process = function(b) {
            let y = this.parse(b);
            if (y.kind() === "ipv6" && y.isIPv4MappedAddress()) {
                return y.toIPv4Address();
            }
            return y;
        };
        v.subnetMatch = (b, y, k)=>{
            let _;
            let T;
            let S;
            let C;
            if (k == null) {
                k = "unicast";
            }
            for(T in y){
                if (Object.prototype.hasOwnProperty.call(y, T)) {
                    S = y[T];
                    if (S[0] && !(S[0] instanceof Array)) {
                        S = [
                            S
                        ];
                    }
                    for(_ = 0; _ < S.length; _++){
                        C = S[_];
                        if (b.kind() === C[0].kind() && b.match(...C)) {
                            return T;
                        }
                    }
                }
            }
            return k;
        };
        if (typeof Bx !== "undefined" && Bx.exports) {
            Bx.exports = v;
        } else {
            e.ipaddr = v;
        }
    })(xX);
});
const ud = e(wX(), 1);
export function Ux(e) {
    if (e.includes("/")) {
        return ud.default.IPv4.isValidCIDRFourPartDecimal(e) || ud.default.IPv6.isValidCIDR(e);
    }
    return ud.default.IPv4.isValidFourPartDecimal(e) || ud.default.IPv6.isValid(e);
}
export function X7(e) {
    if (e.includes("/")) {
        let [addr, r] = ud.default.parseCIDR(e);
        return {
            addr,
            prefixLength: r
        };
    } else {
        let addr = ud.default.parse(e);
        let r = addr.kind() === "ipv4" ? 32 : 128;
        return {
            addr,
            prefixLength: r
        };
    }
}
export function TX({ remoteIpAddress, allowList }) {
    if (allowList.length === 0) {
        return true;
    }
    if (!remoteIpAddress) {
        return false;
    }
    let r = ud.default.parse(remoteIpAddress);
    let n = allowList.map((o)=>{
        if (typeof o === "string") {
            return X7(o);
        }
        return o;
    });
    for (let o of n){
        if (r.kind() === o.addr.kind() && r.match(o.addr, o.prefixLength)) {
            return true;
        }
    }
    return false;
}

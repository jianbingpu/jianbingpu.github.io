!
function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    e.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return e.d(n, "a", n),
        n
    },
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = "",
    e(e.s = 815)
} ([, , ,
function(t, e, n) {
    "use strict";
    function r(t, e) {
        function n() {
            this.constructor = t
        }
        b(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    function o(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0,
        r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]]);
        return n
    }
    function i(t, e, n, r) {
        var o, i = arguments.length,
        a = i < 3 ? e: null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
        else for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
        return i > 3 && a && Object.defineProperty(e, n, a),
        a
    }
    function a(t, e) {
        return function(n, r) {
            e(n, r, t)
        }
    }
    function s(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    }
    function c(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch(t) {
                    i(t)
                }
            }
            function s(t) {
                try {
                    c(r.
                    throw (t))
                } catch(t) {
                    i(t)
                }
            }
            function c(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }).then(a, s)
            }
            c((r = r.apply(t, e || [])).next())
        })
    }
    function u(t, e) {
        function n(t) {
            return function(e) {
                return r([t, e])
            }
        }
        function r(n) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (o = 1, i && (a = i[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(i, n[1])).done) return a;
                switch (i = 0, a && (n = [0, a.value]), n[0]) {
                case 0:
                case 1:
                    a = n;
                    break;
                case 4:
                    return c.label++,
                    {
                        value: n[1],
                        done: !1
                    };
                case 5:
                    c.label++,
                    i = n[1],
                    n = [0];
                    continue;
                case 7:
                    n = c.ops.pop(),
                    c.trys.pop();
                    continue;
                default:
                    if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                        c = 0;
                        continue
                    }
                    if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        c.label = n[1];
                        break
                    }
                    if (6 === n[0] && c.label < a[1]) {
                        c.label = a[1],
                        a = n;
                        break
                    }
                    if (a && c.label < a[2]) {
                        c.label = a[2],
                        c.ops.push(n);
                        break
                    }
                    a[2] && c.ops.pop(),
                    c.trys.pop();
                    continue
                }
                n = e.call(t, c)
            } catch(t) {
                n = [6, t],
                i = 0
            } finally {
                o = a = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var o, i, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }),
        s
    }
    function l(t, e) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
    }
    function f(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
        n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0),
                {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }
    function h(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
        a = [];
        try {
            for (; (void 0 === e || e-->0) && !(r = i.next()).done;) a.push(r.value)
        } catch(t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.
                return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }
    function p() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(h(arguments[e]));
        return t
    }
    function d(t) {
        return this instanceof d ? (this.v = t, this) : new d(t)
    }
    function g(t, e, n) {
        function r(t) {
            l[t] && (u[t] = function(e) {
                return new Promise(function(n, r) {
                    f.push([t, e, n, r]) > 1 || o(t, e)
                })
            })
        }
        function o(t, e) {
            try {
                i(l[t](e))
            } catch(t) {
                c(f[0][3], t)
            }
        }
        function i(t) {
            t.value instanceof d ? Promise.resolve(t.value.v).then(a, s) : c(f[0][2], t)
        }
        function a(t) {
            o("next", t)
        }
        function s(t) {
            o("throw", t)
        }
        function c(t, e) {
            t(e),
            f.shift(),
            f.length && o(f[0][0], f[0][1])
        }
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var u, l = n.apply(t, e || []),
        f = [];
        return u = {},
        r("next"),
        r("throw"),
        r("return"),
        u[Symbol.asyncIterator] = function() {
            return this
        },
        u
    }
    function y(t) {
        function e(e, o) {
            t[e] && (n[e] = function(n) {
                return (r = !r) ? {
                    value: d(t[e](n)),
                    done: "return" === e
                }: o ? o(n) : n
            })
        }
        var n, r;
        return n = {},
        e("next"),
        e("throw",
        function(t) {
            throw t
        }),
        e("return"),
        n[Symbol.iterator] = function() {
            return this
        },
        n
    }
    function v(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e = t[Symbol.asyncIterator];
        return e ? e.call(t) : "function" == typeof f ? f(t) : t[Symbol.iterator]()
    }
    function m(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
        }) : t.raw = e,
        t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.__extends = r,
    n.d(e, "__assign",
    function() {
        return w
    }),
    e.__rest = o,
    e.__decorate = i,
    e.__param = a,
    e.__metadata = s,
    e.__awaiter = c,
    e.__generator = u,
    e.__exportStar = l,
    e.__values = f,
    e.__read = h,
    e.__spread = p,
    e.__await = d,
    e.__asyncGenerator = g,
    e.__asyncDelegator = y,
    e.__asyncValues = v,
    e.__makeTemplateObject = m;
    var b = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(t, e) {
        t.__proto__ = e
    } ||
    function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
    },
    w = Object.assign ||
    function(t) {
        for (var e, n = 1,
        r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        }
        return t
    }
},
function(t, e, n) {
    var r = n(62)("wks"),
    o = n(29),
    i = n(6).Symbol,
    a = "function" == typeof i; (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i: o)("Symbol." + t))
    }).store = r
},
,
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
, , ,
function(t, e, n) {
    t.exports = !n(30)(function() {
        return 7 != Object.defineProperty({},
        "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
},
, , ,
function(t, e, n) {
    var r = n(6),
    o = n(17),
    i = n(12),
    a = n(29)("src"),
    s = Function.toString,
    c = ("" + s).split("toString");
    n(25).inspectSource = function(t) {
        return s.call(t)
    },
    (t.exports = function(t, e, n, s) {
        var u = "function" == typeof n;
        u && (i(n, "name") || o(n, "name", e)),
        t[e] !== n && (u && (i(n, a) || o(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n: s ? t[e] ? t[e] = n: o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString",
    function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
},
function(t, e, n) {
    var r = n(18),
    o = n(36);
    t.exports = n(11) ?
    function(t, e, n) {
        return r.f(t, e, o(1, n))
    }: function(t, e, n) {
        return t[e] = n,
        t
    }
},
function(t, e, n) {
    var r = n(19),
    o = n(63),
    i = n(65),
    a = Object.defineProperty;
    e.f = n(11) ? Object.defineProperty: function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch(t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value),
        t
    }
},
function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
, , , , ,
function(t, e) {
    var n = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
},
function(t, e) {
    t.exports = {}
},
, ,
function(t, e) {
    var n = 0,
    r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "": t, ")_", (++n + r).toString(36))
    }
},
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(t) {
            return ! 0
        }
    }
},
function(t, e, n) {
    var r = n(106);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            };
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e, n) {
    var r = n(110),
    o = n(38);
    t.exports = function(t) {
        return r(o(t))
    }
},
,
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
,
function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
},
function(t, e) {
    var n = Math.ceil,
    r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
    }
},
function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e, n) {
    "use strict";
    var r = n(105),
    o = n(67),
    i = n(16),
    a = n(17),
    s = n(12),
    c = n(26),
    u = n(107),
    l = n(41),
    f = n(114),
    h = n(4)("iterator"),
    p = !([].keys && "next" in [].keys()),
    d = function() {
        return this
    };
    t.exports = function(t, e, n, g, y, v, m) {
        u(n, e, g);
        var b, w, x, k = function(t) {
            if (!p && t in O) return O[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this, t)
                }
            }
            return function() {
                return new n(this, t)
            }
        },
        S = e + " Iterator",
        E = "values" == y,
        T = !1,
        O = t.prototype,
        _ = O[h] || O["@@iterator"] || y && O[y],
        M = !p && _ || k(y),
        I = y ? E ? k("entries") : M: void 0,
        j = "Array" == e ? O.entries || _: _;
        if (j && (x = f(j.call(new t))) !== Object.prototype && x.next && (l(x, S, !0), r || s(x, h) || a(x, h, d)), E && _ && "values" !== _.name && (T = !0, M = function() {
            return _.call(this)
        }), r && !m || !p && !T && O[h] || a(O, h, M), c[e] = M, c[S] = d, y) if (b = {
            values: E ? M: k("values"),
            keys: v ? M: k("keys"),
            entries: I
        },
        m) for (w in b) w in O || i(O, w, b[w]);
        else o(o.P + o.F * (p || T), e, b);
        return b
    }
},
function(t, e, n) {
    var r = n(62)("keys"),
    o = n(29);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
},
function(t, e, n) {
    var r = n(18).f,
    o = n(12),
    i = n(4)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t: t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
},
function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
},
function(t, e, n) {
    var r = n(161)("wks"),
    o = n(101),
    i = n(34).Symbol,
    a = "function" == typeof i; (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i: o)("Symbol." + t))
    }).store = r
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3);
    n(102);
    var o = n(93);
    r.__exportStar(n(134), e),
    r.__exportStar(n(83), e),
    r.__exportStar(n(135), e);
    var i = n(136);
    e.JKA = i.JKA,
    e.APP_INFO = null,
    e.mountAppInfo = function(t) {
        e.APP_INFO = t
    },
    e.JKD = null,
    e.mountJKD = function(t) {
        e.JKD = t
    },
    e.BRAND_ICONS = o.brandAssets
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0,
            n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }
    var i = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    a = {
        type: "logger",
        log: function(t) {
            this.output("log", t)
        },
        warn: function(t) {
            this.output("warn", t)
        },
        error: function(t) {
            this.output("error", t)
        },
        output: function(t, e) {
            var n;
            console && console[t] && (n = console)[t].apply(n, o(e))
        }
    },
    s = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(this, t),
            this.init(e, n)
        }
        return t.prototype.init = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.prefix = e.prefix || "i18next:",
            this.logger = t || a,
            this.options = e,
            this.debug = e.debug
        },
        t.prototype.setDebug = function(t) {
            this.debug = t
        },
        t.prototype.log = function() {
            for (var t = arguments.length,
            e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return this.forward(e, "log", "", !0)
        },
        t.prototype.warn = function() {
            for (var t = arguments.length,
            e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return this.forward(e, "warn", "", !0)
        },
        t.prototype.error = function() {
            for (var t = arguments.length,
            e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return this.forward(e, "error", "")
        },
        t.prototype.deprecate = function() {
            for (var t = arguments.length,
            e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
        },
        t.prototype.forward = function(t, e, n, r) {
            return r && !this.debug ? null: ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]), this.logger[e](t))
        },
        t.prototype.create = function(e) {
            return new t(this.logger, i({
                prefix: this.prefix + ":" + e + ":"
            },
            this.options))
        },
        t
    } ();
    e.a = new s
},
function(t, e) {
    var n = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
},
,
function(t, e, n) {
    var r = n(81),
    o = n(191),
    i = n(155),
    a = Object.defineProperty;
    e.f = n(49) ? Object.defineProperty: function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch(t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value),
        t
    }
},
function(t, e, n) {
    t.exports = !n(92)(function() {
        return 7 != Object.defineProperty({},
        "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
},
, ,
function(t, e, n) { !
    function(e, n) {
        t.exports = n()
    } (0,
    function() {
        return function(t) {
            function e(n) {
                if (r[n]) return r[n].exports;
                var o = r[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(o.exports, o, o.exports, e),
                o.l = !0,
                o.exports
            }
            var n = window.webpackJsonp;
            window.webpackJsonp = function(r, i, a) {
                for (var s, c, u, l = 0,
                f = []; l < r.length; l++) c = r[l],
                o[c] && f.push(o[c][0]),
                o[c] = 0;
                for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                for (n && n(r, i, a); f.length;) f.shift()();
                if (a) for (l = 0; l < a.length; l++) u = e(e.s = a[l]);
                return u
            };
            var r = {},
            o = {
                1 : 0
            };
            return e.e = function(t) {
                function n() {
                    s.onerror = s.onload = null,
                    clearTimeout(c);
                    var e = o[t];
                    0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), o[t] = void 0)
                }
                var r = o[t];
                if (0 === r) return new Promise(function(t) {
                    t()
                });
                if (r) return r[2];
                var i = new Promise(function(e, n) {
                    r = o[t] = [e, n]
                });
                r[2] = i;
                var a = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
                s.type = "text/javascript",
                s.charset = "utf-8",
                s.async = !0,
                s.timeout = 12e4,
                e.nc && s.setAttribute("nonce", e.nc),
                s.src = e.p + "" + t + ".js";
                var c = setTimeout(n, 12e4);
                return s.onerror = s.onload = n,
                a.appendChild(s),
                i
            },
            e.m = t,
            e.c = r,
            e.i = function(t) {
                return t
            },
            e.d = function(t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            },
            e.n = function(t) {
                var n = t && t.__esModule ?
                function() {
                    return t.
                default
                }:
                function() {
                    return t
                };
                return e.d(n, "a", n),
                n
            },
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            e.p = "",
            e.oe = function(t) {
                throw console.error(t),
                t
            },
            e(e.s = 1)
        } ([function(t, e) {
            var n;
            n = function() {
                return this
            } ();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch(t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            n.d(e, "debugDetector",
            function() {
                return l
            }),
            n.d(e, "DebugWrapper",
            function() {
                return f
            });
            var r = n(3),
            o = (n.n(r), n(9)),
            i = n(6),
            a = n(7),
            s = n(8),
            c = this && this.__assign || Object.assign ||
            function(t) {
                for (var e, n = 1,
                r = arguments.length; n < r; n++) {
                    e = arguments[n];
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
                return t
            },
            u = document.location,
            l = function(t) {
                var e = n.i(o.a)(u.search);
                return e.hasOwnProperty("debug") && (t = "false" !== e.debug),
                t
            },
            f = function() {
                function t(e) {
                    this.options = c({},
                    t.defaultOptions, e);
                    var n = this.options,
                    o = n.sentryDsn,
                    i = n.middlewareObject;
                    o && this.enableSentry(o),
                    i && (this.middlewareManager = new r.MiddlewareManager(this), this.middlewareManager.use(i))
                }
                return t.prototype.isDebugEnabled = function() {
                    return this.options.isDebug
                },
                t.prototype.switchDebuggingMode = function(t) {
                    this.options.isDebug = t
                },
                t.prototype.enableSentry = function(t, e) {
                    s.a.supervise(t, e)
                },
                t.prototype.log = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    this.isDebugEnabled() && i.a.log.apply(i.a, [t].concat(e))
                },
                t.prototype.error = function(t) {
                    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                    var a;
                    a = n.i(o.b)(t) ? t.message: t,
                    i.a.error.apply(i.a, [a].concat(e))
                },
                t.prototype.getTimingResults = function() {
                    return a.a.getTimingResults()
                },
                t
            } ();
            f.defaultOptions = {
                isDebug: !0,
                middlewareObject: null
            }
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                return "object" == typeof t && null !== t
            }
            function o(t) {
                switch ({}.toString.call(t)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return ! 0;
                default:
                    return t instanceof Error
                }
            }
            function i(t) {
                function e(e, n) {
                    var r = t(e) || e;
                    return n ? n(r) || r: r
                }
                return e
            }
            t.exports = {
                isObject: r,
                isError: o,
                wrappedCallback: i
            }
        },
        function(t, e, n) {
            var r, r; !
            function(e) {
                t.exports = function() {
                    return function t(e, n, o) {
                        function i(s, c) {
                            if (!n[s]) {
                                if (!e[s]) {
                                    var u = "function" == typeof r && r;
                                    if (!c && u) return r(s, !0);
                                    if (a) return a(s, !0);
                                    var l = new Error("Cannot find module '" + s + "'");
                                    throw l.code = "MODULE_NOT_FOUND",
                                    l
                                }
                                var f = n[s] = {
                                    exports: {}
                                };
                                e[s][0].call(f.exports,
                                function(t) {
                                    return i(e[s][1][t] || t)
                                },
                                f, f.exports, t, e, n, o)
                            }
                            return n[s].exports
                        }
                        for (var a = "function" == typeof r && r,
                        s = 0; s < o.length; s++) i(o[s]);
                        return i
                    } ({
                        1 : [function(t, e, n) {
                            "use strict";
                            function r(t) {
                                if (Array.isArray(t)) {
                                    for (var e = 0,
                                    n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                    return n
                                }
                                return Array.from(t)
                            }
                            function o(t, e) {
                                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }
                            function i() {
                                for (var t = arguments.length,
                                e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                if (0 === e.length) return function(t) {
                                    return t
                                };
                                if (e = e.filter(function(t) {
                                    return "function" == typeof t
                                }), 1 === e.length) return e[0];
                                var r = e[e.length - 1],
                                o = e.slice(0, -1);
                                return function() {
                                    return o.reduceRight(function(t, e) {
                                        return e(t)
                                    },
                                    r.apply(void 0, arguments))
                                }
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                            function(t) {
                                return typeof t
                            }: function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                            },
                            s = function() {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var r = e[n];
                                        r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(t, r.key, r)
                                    }
                                }
                                return function(e, n, r) {
                                    return n && t(e.prototype, n),
                                    r && t(e, r),
                                    e
                                }
                            } ();
                            n.compose = i;
                            var c = [],
                            u = n.MiddlewareManager = function() {
                                function t(e) {
                                    var n;
                                    o(this, t);
                                    var r = c.find(function(t) {
                                        return t._target === e
                                    });
                                    void 0 === r && (this._target = e, this._methods = {},
                                    this._methodMiddlewares = {},
                                    c.push(this), r = this);
                                    for (var i = arguments.length,
                                    a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                                    return (n = r).use.apply(n, a),
                                    r
                                }
                                return s(t, [{
                                    key: "_methodIsValid",
                                    value: function(t) {
                                        return ! /^_+|_+$|constructor/g.test(t)
                                    }
                                },
                                {
                                    key: "_applyToMethod",
                                    value: function(t) {
                                        var e = this;
                                        if ("string" == typeof t && this._methodIsValid(t)) {
                                            var n = this._methods[t] || this._target[t];
                                            if ("function" == typeof n) {
                                                this._methods[t] = n,
                                                void 0 === this._methodMiddlewares[t] && (this._methodMiddlewares[t] = []);
                                                for (var o = arguments.length,
                                                a = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
                                                a.forEach(function(n) {
                                                    return "function" == typeof n && e._methodMiddlewares[t].push(n(e._target))
                                                }),
                                                this._target[t] = i.apply(void 0, r(this._methodMiddlewares[t]))(n.bind(this._target))
                                            }
                                        }
                                    }
                                },
                                {
                                    key: "use",
                                    value: function(t) {
                                        for (var e = this,
                                        n = arguments.length,
                                        r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                        return "object" === (void 0 === t ? "undefined": a(t)) ? Array.prototype.slice.call(arguments).forEach(function(t) {
                                            "object" === (void 0 === t ? "undefined": a(t)) && (t.middlewareMethods || (Object.keys(t).length ? Object.keys(t) : Object.getOwnPropertyNames(Object.getPrototypeOf(t)))).forEach(function(n) {
                                                "function" == typeof t[n] && e._methodIsValid(n) && e._applyToMethod(n, t[n].bind(t))
                                            })
                                        }) : this._applyToMethod.apply(this, [t].concat(r)),
                                        this
                                    }
                                }]),
                                t
                            } ();
                            "undefined" != typeof window && (window.MiddlewareManager = u)
                        },
                        {}]
                    },
                    {},
                    [1])(1)
                } ()
            } ()
        },
        , ,
        function(t, e, n) {
            "use strict";
            n.d(e, "a",
            function() {
                return o
            });
            var r = function() {
                function t() {}
                return t.prototype.log = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    console.log.apply(console, [t].concat(e))
                },
                t.prototype.error = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    console.error.apply(console, [t].concat(e))
                },
                t
            } (),
            o = new r
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a",
            function() {
                return c
            });
            var r = this && this.__assign || Object.assign ||
            function(t) {
                for (var e, n = 1,
                r = arguments.length; n < r; n++) {
                    e = arguments[n];
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
                return t
            },
            o = window.performance,
            i = function(t) {
                return null != t
            },
            a = function(t) {
                return function(e) {
                    return ! t(e)
                }
            } (i),
            s = function() {
                function t() {}
                return t.prototype.parseTiming = function(t) {
                    if ([function() {
                        return t instanceof PerformanceTiming
                    }].some(function(t) {
                        return ! t()
                    })) return null;
                    var e = r({},
                    t.toJSON());
                    return e.domReadyTime = t.domComplete - t.domInteractive,
                    e.readyStart = t.fetchStart - t.navigationStart,
                    e.redirectTime = t.redirectEnd - t.redirectStart,
                    e.appcacheTime = t.domainLookupStart - t.fetchStart,
                    e.unloadEventTime = t.unloadEventEnd - t.unloadEventStart,
                    e.lookupDomainTime = t.domainLookupEnd - t.domainLookupStart,
                    e.connectTime = t.connectEnd - t.connectStart,
                    e.requestTime = t.responseEnd - t.requestStart,
                    e.initDomTreeTime = t.domInteractive - t.responseEnd,
                    e.totalTime = t.domContentLoadedEventEnd - t.navigationStart,
                    e
                },
                t.prototype.getTimingResults = function() {
                    if (void 0 === o) return {};
                    var t = o.timing,
                    e = this.parseTiming(t);
                    return a(e) ? {}: e
                },
                t
            } (),
            c = new s
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a",
            function() {
                return i
            });
            var r = n(15),
            o = (n.n(r),
            function() {
                function t() {}
                return t.prototype.supervise = function(t, e) {
                    r.config(t, e).install()
                },
                t
            } ()),
            i = new o
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a",
            function() {
                return r
            }),
            n.d(e, "b",
            function() {
                return o
            });
            var r = function(t) {
                var e = {};
                return t.replace(/^\?/g, "").split("&").map(function(t) {
                    var n = decodeURIComponent(t).split("="),
                    r = n[0],
                    o = n[1];
                    e[r] = o
                }),
                e
            },
            o = function(t) {
                return t && "object" == typeof t && !Array.isArray(t) && null !== t
            }
        },
        , ,
        function(t, e, n) {
            "use strict";
            function r(t) {
                this.name = "RavenConfigError",
                this.message = t
            }
            r.prototype = new Error,
            r.prototype.constructor = r,
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var r = function(t, e, n) {
                var r = t[e],
                o = t;
                if (e in t) {
                    var i = "warn" === e ? "warning": e;
                    t[e] = function() {
                        var t = [].slice.call(arguments),
                        e = "" + t.join(" "),
                        a = {
                            level: i,
                            logger: "console",
                            extra: {
                                arguments: t
                            }
                        };
                        n && n(e, a),
                        r && Function.prototype.apply.call(r, o, t)
                    }
                }
            };
            t.exports = {
                wrapMethod: r
            }
        },
        function(t, e, n) {
            "use strict"; (function(e) {
                function r() {
                    return + new Date
                }
                function o(t, e) {
                    return s(e) ?
                    function(n) {
                        return e(n, t)
                    }: e
                }
                function i() {
                    this._hasJSON = !("object" != typeof JSON || !JSON.stringify),
                    this._hasDocument = !a(D),
                    this._hasNavigator = !a(N),
                    this._lastCapturedException = null,
                    this._lastData = null,
                    this._lastEventId = null,
                    this._globalServer = null,
                    this._globalKey = null,
                    this._globalProject = null,
                    this._globalContext = {},
                    this._globalOptions = {
                        logger: "javascript",
                        ignoreErrors: [],
                        ignoreUrls: [],
                        whitelistUrls: [],
                        includePaths: [],
                        crossOrigin: "anonymous",
                        collectWindowErrors: !0,
                        maxMessageLength: 0,
                        maxUrlLength: 250,
                        stackTraceLimit: 50,
                        autoBreadcrumbs: !0,
                        instrument: !0,
                        sampleRate: 1
                    },
                    this._ignoreOnError = 0,
                    this._isRavenInstalled = !1,
                    this._originalErrorStackTraceLimit = Error.stackTraceLimit,
                    this._originalConsole = P.console || {},
                    this._originalConsoleMethods = {},
                    this._plugins = [],
                    this._startTime = r(),
                    this._wrappedBuiltIns = [],
                    this._breadcrumbs = [],
                    this._lastCapturedEvent = null,
                    this._keypressTimeout,
                    this._location = P.location,
                    this._lastHref = this._location && this._location.href,
                    this._resetBackoff();
                    for (var t in this._originalConsole) this._originalConsoleMethods[t] = this._originalConsole[t]
                }
                function a(t) {
                    return void 0 === t
                }
                function s(t) {
                    return "function" == typeof t
                }
                function c(t) {
                    return "[object String]" === R.toString.call(t)
                }
                function u(t) {
                    for (var e in t) return ! 1;
                    return ! 0
                }
                function l(t, e) {
                    var n, r;
                    if (a(t.length)) for (n in t) d(t, n) && e.call(null, n, t[n]);
                    else if (r = t.length) for (n = 0; n < r; n++) e.call(null, n, t[n])
                }
                function f(t, e) {
                    return e ? (l(e,
                    function(e, n) {
                        t[e] = n
                    }), t) : t
                }
                function h(t) {
                    return !! Object.isFrozen && Object.isFrozen(t)
                }
                function p(t, e) {
                    return ! e || t.length <= e ? t: t.substr(0, e) + "…"
                }
                function d(t, e) {
                    return R.hasOwnProperty.call(t, e)
                }
                function g(t) {
                    for (var e, n = [], r = 0, o = t.length; r < o; r++) e = t[r],
                    c(e) ? n.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && n.push(e.source);
                    return new RegExp(n.join("|"), "i")
                }
                function y(t) {
                    var e = [];
                    return l(t,
                    function(t, n) {
                        e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
                    }),
                    e.join("&")
                }
                function v(t) {
                    var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!e) return {};
                    var n = e[6] || "",
                    r = e[8] || "";
                    return {
                        protocol: e[2],
                        host: e[4],
                        path: e[5],
                        relative: e[5] + n + r
                    }
                }
                function m() {
                    var t = P.crypto || P.msCrypto;
                    if (!a(t) && t.getRandomValues) {
                        var e = new Uint16Array(8);
                        t.getRandomValues(e),
                        e[3] = 4095 & e[3] | 16384,
                        e[4] = 16383 & e[4] | 32768;
                        var n = function(t) {
                            for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                            return e
                        };
                        return n(e[0]) + n(e[1]) + n(e[2]) + n(e[3]) + n(e[4]) + n(e[5]) + n(e[6]) + n(e[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
                    function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e: 3 & e | 8).toString(16)
                    })
                }
                function b(t) {
                    for (var e, n = [], r = 0, o = 0, i = " > ".length; t && r++<5 && !("html" === (e = w(t)) || r > 1 && o + n.length * i + e.length >= 80);) n.push(e),
                    o += e.length,
                    t = t.parentNode;
                    return n.reverse().join(" > ")
                }
                function w(t) {
                    var e, n, r, o, i, a = [];
                    if (!t || !t.tagName) return "";
                    if (a.push(t.tagName.toLowerCase()), t.id && a.push("#" + t.id), (e = t.className) && c(e)) for (n = e.split(/\s+/), i = 0; i < n.length; i++) a.push("." + n[i]);
                    var s = ["type", "name", "title", "alt"];
                    for (i = 0; i < s.length; i++) r = s[i],
                    (o = t.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                    return a.join("")
                }
                function x(t, e) {
                    return !! ( !! t ^ !!e)
                }
                function k(t, e) {
                    return ! x(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && S(t.stacktrace, e.stacktrace))
                }
                function S(t, e) {
                    if (x(t, e)) return ! 1;
                    var n = t.frames,
                    r = e.frames;
                    if (n.length !== r.length) return ! 1;
                    for (var o, i, a = 0; a < n.length; a++) if (o = n[a], i = r[a], o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.
                    function !== i.
                    function) return ! 1;
                    return ! 0
                }
                function E(t, e, n, r) {
                    var o = t[e];
                    t[e] = n(o),
                    r && r.push([t, e, o])
                }
                var T = n(16),
                O = n(17),
                _ = n(12),
                M = n(2),
                I = M.isError,
                j = M.isObject,
                C = n(13).wrapMethod,
                A = "source protocol user pass host port path".split(" "),
                L = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                P = "undefined" != typeof window ? window: void 0 !== e ? e: "undefined" != typeof self ? self: {},
                D = P.document,
                N = P.navigator;
                i.prototype = {
                    VERSION: "3.17.0",
                    debug: !1,
                    TraceKit: T,
                    config: function(t, e) {
                        var n = this;
                        if (n._globalServer) return this._logDebug("error", "Error: Raven has already been configured"),
                        n;
                        if (!t) return n;
                        var r = n._globalOptions;
                        e && l(e,
                        function(t, e) {
                            "tags" === t || "extra" === t || "user" === t ? n._globalContext[t] = e: r[t] = e
                        }),
                        n.setDSN(t),
                        r.ignoreErrors.push(/^Script error\.?$/),
                        r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
                        r.ignoreErrors = g(r.ignoreErrors),
                        r.ignoreUrls = !!r.ignoreUrls.length && g(r.ignoreUrls),
                        r.whitelistUrls = !!r.whitelistUrls.length && g(r.whitelistUrls),
                        r.includePaths = g(r.includePaths),
                        r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
                        var o = {
                            xhr: !0,
                            console: !0,
                            dom: !0,
                            location: !0
                        },
                        i = r.autoBreadcrumbs;
                        "[object Object]" === {}.toString.call(i) ? i = f(o, i) : !1 !== i && (i = o),
                        r.autoBreadcrumbs = i;
                        var a = {
                            tryCatch: !0
                        },
                        s = r.instrument;
                        return "[object Object]" === {}.toString.call(s) ? s = f(a, s) : !1 !== s && (s = a),
                        r.instrument = s,
                        T.collectWindowErrors = !!r.collectWindowErrors,
                        n
                    },
                    install: function() {
                        var t = this;
                        return t.isSetup() && !t._isRavenInstalled && (T.report.subscribe(function() {
                            t._handleOnErrorStackInfo.apply(t, arguments)
                        }), t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch(), t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs(), t._drainPlugins(), t._isRavenInstalled = !0),
                        Error.stackTraceLimit = t._globalOptions.stackTraceLimit,
                        this
                    },
                    setDSN: function(t) {
                        var e = this,
                        n = e._parseDSN(t),
                        r = n.path.lastIndexOf("/"),
                        o = n.path.substr(1, r);
                        e._dsn = t,
                        e._globalKey = n.user,
                        e._globalSecret = n.pass && n.pass.substr(1),
                        e._globalProject = n.path.substr(r + 1),
                        e._globalServer = e._getGlobalServer(n),
                        e._globalEndpoint = e._globalServer + "/" + o + "api/" + e._globalProject + "/store/",
                        this._resetBackoff()
                    },
                    context: function(t, e, n) {
                        return s(t) && (n = e || [], e = t, t = void 0),
                        this.wrap(t, e).apply(this, n)
                    },
                    wrap: function(t, e, n) {
                        function r() {
                            var r = [],
                            i = arguments.length,
                            a = !t || t && !1 !== t.deep;
                            for (n && s(n) && n.apply(this, arguments); i--;) r[i] = a ? o.wrap(t, arguments[i]) : arguments[i];
                            try {
                                return e.apply(this, r)
                            } catch(e) {
                                throw o._ignoreNextOnError(),
                                o.captureException(e, t),
                                e
                            }
                        }
                        var o = this;
                        if (a(e) && !s(t)) return t;
                        if (s(t) && (e = t, t = void 0), !s(e)) return e;
                        try {
                            if (e.__raven__) return e;
                            if (e.__raven_wrapper__) return e.__raven_wrapper__
                        } catch(t) {
                            return e
                        }
                        for (var i in e) d(e, i) && (r[i] = e[i]);
                        return r.prototype = e.prototype,
                        e.__raven_wrapper__ = r,
                        r.__raven__ = !0,
                        r.__inner__ = e,
                        r
                    },
                    uninstall: function() {
                        return T.report.uninstall(),
                        this._restoreBuiltIns(),
                        Error.stackTraceLimit = this._originalErrorStackTraceLimit,
                        this._isRavenInstalled = !1,
                        this
                    },
                    captureException: function(t, e) {
                        if (!I(t)) return this.captureMessage(t, f({
                            trimHeadFrames: 1,
                            stacktrace: !0
                        },
                        e));
                        this._lastCapturedException = t;
                        try {
                            var n = T.computeStackTrace(t);
                            this._handleStackInfo(n, e)
                        } catch(e) {
                            if (t !== e) throw e
                        }
                        return this
                    },
                    captureMessage: function(t, e) {
                        if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
                            e = e || {};
                            var n = f({
                                message: t + ""
                            },
                            e);
                            if (this._globalOptions.stacktrace || e && e.stacktrace) {
                                var r;
                                try {
                                    throw new Error(t)
                                } catch(t) {
                                    r = t
                                }
                                r.name = null,
                                e = f({
                                    fingerprint: t,
                                    trimHeadFrames: (e.trimHeadFrames || 0) + 1
                                },
                                e);
                                var o = T.computeStackTrace(r),
                                i = this._prepareFrames(o, e);
                                n.stacktrace = {
                                    frames: i.reverse()
                                }
                            }
                            return this._send(n),
                            this
                        }
                    },
                    captureBreadcrumb: function(t) {
                        var e = f({
                            timestamp: r() / 1e3
                        },
                        t);
                        if (s(this._globalOptions.breadcrumbCallback)) {
                            var n = this._globalOptions.breadcrumbCallback(e);
                            if (j(n) && !u(n)) e = n;
                            else if (!1 === n) return this
                        }
                        return this._breadcrumbs.push(e),
                        this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
                        this
                    },
                    addPlugin: function(t) {
                        var e = [].slice.call(arguments, 1);
                        return this._plugins.push([t, e]),
                        this._isRavenInstalled && this._drainPlugins(),
                        this
                    },
                    setUserContext: function(t) {
                        return this._globalContext.user = t,
                        this
                    },
                    setExtraContext: function(t) {
                        return this._mergeContext("extra", t),
                        this
                    },
                    setTagsContext: function(t) {
                        return this._mergeContext("tags", t),
                        this
                    },
                    clearContext: function() {
                        return this._globalContext = {},
                        this
                    },
                    getContext: function() {
                        return JSON.parse(O(this._globalContext))
                    },
                    setEnvironment: function(t) {
                        return this._globalOptions.environment = t,
                        this
                    },
                    setRelease: function(t) {
                        return this._globalOptions.release = t,
                        this
                    },
                    setDataCallback: function(t) {
                        var e = this._globalOptions.dataCallback;
                        return this._globalOptions.dataCallback = o(e, t),
                        this
                    },
                    setBreadcrumbCallback: function(t) {
                        var e = this._globalOptions.breadcrumbCallback;
                        return this._globalOptions.breadcrumbCallback = o(e, t),
                        this
                    },
                    setShouldSendCallback: function(t) {
                        var e = this._globalOptions.shouldSendCallback;
                        return this._globalOptions.shouldSendCallback = o(e, t),
                        this
                    },
                    setTransport: function(t) {
                        return this._globalOptions.transport = t,
                        this
                    },
                    lastException: function() {
                        return this._lastCapturedException
                    },
                    lastEventId: function() {
                        return this._lastEventId
                    },
                    isSetup: function() {
                        return ! (!this._hasJSON || !this._globalServer && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), 1))
                    },
                    afterLoad: function() {
                        var t = P.RavenConfig;
                        t && this.config(t.dsn, t.config).install()
                    },
                    showReportDialog: function(t) {
                        if (D) {
                            t = t || {};
                            var e = t.eventId || this.lastEventId();
                            if (!e) throw new _("Missing eventId");
                            var n = t.dsn || this._dsn;
                            if (!n) throw new _("Missing DSN");
                            var r = encodeURIComponent,
                            o = "";
                            o += "?eventId=" + r(e),
                            o += "&dsn=" + r(n);
                            var i = t.user || this._globalContext.user;
                            i && (i.name && (o += "&name=" + r(i.name)), i.email && (o += "&email=" + r(i.email)));
                            var a = this._getGlobalServer(this._parseDSN(n)),
                            s = D.createElement("script");
                            s.async = !0,
                            s.src = a + "/api/embed/error-page/" + o,
                            (D.head || D.body).appendChild(s)
                        }
                    },
                    _ignoreNextOnError: function() {
                        var t = this;
                        this._ignoreOnError += 1,
                        setTimeout(function() {
                            t._ignoreOnError -= 1
                        })
                    },
                    _triggerEvent: function(t, e) {
                        var n, r;
                        if (this._hasDocument) {
                            e = e || {},
                            t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1),
                            D.createEvent ? (n = D.createEvent("HTMLEvents"), n.initEvent(t, !0, !0)) : (n = D.createEventObject(), n.eventType = t);
                            for (r in e) d(e, r) && (n[r] = e[r]);
                            if (D.createEvent) D.dispatchEvent(n);
                            else try {
                                D.fireEvent("on" + n.eventType.toLowerCase(), n)
                            } catch(t) {}
                        }
                    },
                    _breadcrumbEventHandler: function(t) {
                        var e = this;
                        return function(n) {
                            if (e._keypressTimeout = null, e._lastCapturedEvent !== n) {
                                e._lastCapturedEvent = n;
                                var r;
                                try {
                                    r = b(n.target)
                                } catch(t) {
                                    r = "<unknown>"
                                }
                                e.captureBreadcrumb({
                                    category: "ui." + t,
                                    message: r
                                })
                            }
                        }
                    },
                    _keypressEventHandler: function() {
                        var t = this;
                        return function(e) {
                            var n;
                            try {
                                n = e.target
                            } catch(t) {
                                return
                            }
                            var r = n && n.tagName;
                            if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                                var o = t._keypressTimeout;
                                o || t._breadcrumbEventHandler("input")(e),
                                clearTimeout(o),
                                t._keypressTimeout = setTimeout(function() {
                                    t._keypressTimeout = null
                                },
                                1e3)
                            }
                        }
                    },
                    _captureUrlChange: function(t, e) {
                        var n = v(this._location.href),
                        r = v(e),
                        o = v(t);
                        this._lastHref = e,
                        n.protocol === r.protocol && n.host === r.host && (e = r.relative),
                        n.protocol === o.protocol && n.host === o.host && (t = o.relative),
                        this.captureBreadcrumb({
                            category: "navigation",
                            data: {
                                to: e,
                                from: t
                            }
                        })
                    },
                    _instrumentTryCatch: function() {
                        function t(t) {
                            return function(n, r) {
                                for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
                                var a = o[0];
                                return s(a) && (o[0] = e.wrap(a)),
                                t.apply ? t.apply(this, o) : t(o[0], o[1])
                            }
                        }
                        var e = this,
                        n = e._wrappedBuiltIns,
                        r = this._globalOptions.autoBreadcrumbs;
                        E(P, "setTimeout", t, n),
                        E(P, "setInterval", t, n),
                        P.requestAnimationFrame && E(P, "requestAnimationFrame",
                        function(t) {
                            return function(n) {
                                return t(e.wrap(n))
                            }
                        },
                        n);
                        for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], i = 0; i < o.length; i++) !
                        function(t) {
                            var o = P[t] && P[t].prototype;
                            o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (E(o, "addEventListener",
                            function(n) {
                                return function(o, i, a, s) {
                                    try {
                                        i && i.handleEvent && (i.handleEvent = e.wrap(i.handleEvent))
                                    } catch(t) {}
                                    var c, u, l;
                                    return r && r.dom && ("EventTarget" === t || "Node" === t) && (u = e._breadcrumbEventHandler("click"), l = e._keypressEventHandler(), c = function(t) {
                                        if (t) {
                                            var e;
                                            try {
                                                e = t.type
                                            } catch(t) {
                                                return
                                            }
                                            return "click" === e ? u(t) : "keypress" === e ? l(t) : void 0
                                        }
                                    }),
                                    n.call(this, o, e.wrap(i, void 0, c), a, s)
                                }
                            },
                            n), E(o, "removeEventListener",
                            function(t) {
                                return function(e, n, r, o) {
                                    try {
                                        n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__: n)
                                    } catch(t) {}
                                    return t.call(this, e, n, r, o)
                                }
                            },
                            n))
                        } (o[i])
                    },
                    _instrumentBreadcrumbs: function() {
                        function t(t, n) {
                            t in n && s(n[t]) && E(n, t,
                            function(t) {
                                return e.wrap(t)
                            })
                        }
                        var e = this,
                        n = this._globalOptions.autoBreadcrumbs,
                        r = e._wrappedBuiltIns;
                        if (n.xhr && "XMLHttpRequest" in P) {
                            var o = XMLHttpRequest.prototype;
                            E(o, "open",
                            function(t) {
                                return function(n, r) {
                                    return c(r) && -1 === r.indexOf(e._globalKey) && (this.__raven_xhr = {
                                        method: n,
                                        url: r,
                                        status_code: null
                                    }),
                                    t.apply(this, arguments)
                                }
                            },
                            r),
                            E(o, "send",
                            function(n) {
                                return function(r) {
                                    function o() {
                                        if (i.__raven_xhr && (1 === i.readyState || 4 === i.readyState)) {
                                            try {
                                                i.__raven_xhr.status_code = i.status
                                            } catch(t) {}
                                            e.captureBreadcrumb({
                                                type: "http",
                                                category: "xhr",
                                                data: i.__raven_xhr
                                            })
                                        }
                                    }
                                    for (var i = this,
                                    a = ["onload", "onerror", "onprogress"], c = 0; c < a.length; c++) t(a[c], i);
                                    return "onreadystatechange" in i && s(i.onreadystatechange) ? E(i, "onreadystatechange",
                                    function(t) {
                                        return e.wrap(t, void 0, o)
                                    }) : i.onreadystatechange = o,
                                    n.apply(this, arguments)
                                }
                            },
                            r)
                        }
                        n.xhr && "fetch" in P && E(P, "fetch",
                        function(t) {
                            return function(n, r) {
                                for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
                                var a, s = o[0],
                                c = "GET";
                                "string" == typeof s ? a = s: (a = s.url, s.method && (c = s.method)),
                                o[1] && o[1].method && (c = o[1].method);
                                var u = {
                                    method: c,
                                    url: a,
                                    status_code: null
                                };
                                return e.captureBreadcrumb({
                                    type: "http",
                                    category: "fetch",
                                    data: u
                                }),
                                t.apply(this, o).then(function(t) {
                                    return u.status_code = t.status,
                                    t
                                })
                            }
                        },
                        r),
                        n.dom && this._hasDocument && (D.addEventListener ? (D.addEventListener("click", e._breadcrumbEventHandler("click"), !1), D.addEventListener("keypress", e._keypressEventHandler(), !1)) : (D.attachEvent("onclick", e._breadcrumbEventHandler("click")), D.attachEvent("onkeypress", e._keypressEventHandler())));
                        var i = P.chrome,
                        a = i && i.app && i.app.runtime,
                        u = !a && P.history && history.pushState;
                        if (n.location && u) {
                            var f = P.onpopstate;
                            P.onpopstate = function() {
                                var t = e._location.href;
                                if (e._captureUrlChange(e._lastHref, t), f) return f.apply(this, arguments)
                            },
                            E(history, "pushState",
                            function(t) {
                                return function() {
                                    var n = arguments.length > 2 ? arguments[2] : void 0;
                                    return n && e._captureUrlChange(e._lastHref, n + ""),
                                    t.apply(this, arguments)
                                }
                            },
                            r)
                        }
                        if (n.console && "console" in P && console.log) {
                            var h = function(t, n) {
                                e.captureBreadcrumb({
                                    message: t,
                                    level: n.level,
                                    category: "console"
                                })
                            };
                            l(["debug", "info", "warn", "error", "log"],
                            function(t, e) {
                                C(console, e, h)
                            })
                        }
                    },
                    _restoreBuiltIns: function() {
                        for (var t; this._wrappedBuiltIns.length;) {
                            t = this._wrappedBuiltIns.shift();
                            var e = t[0],
                            n = t[1],
                            r = t[2];
                            e[n] = r
                        }
                    },
                    _drainPlugins: function() {
                        var t = this;
                        l(this._plugins,
                        function(e, n) {
                            var r = n[0],
                            o = n[1];
                            r.apply(t, [t].concat(o))
                        })
                    },
                    _parseDSN: function(t) {
                        var e = L.exec(t),
                        n = {},
                        r = 7;
                        try {
                            for (; r--;) n[A[r]] = e[r] || ""
                        } catch(e) {
                            throw new _("Invalid DSN: " + t)
                        }
                        if (n.pass && !this._globalOptions.allowSecretKey) throw new _("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                        return n
                    },
                    _getGlobalServer: function(t) {
                        var e = "//" + t.host + (t.port ? ":" + t.port: "");
                        return t.protocol && (e = t.protocol + ":" + e),
                        e
                    },
                    _handleOnErrorStackInfo: function() {
                        this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
                    },
                    _handleStackInfo: function(t, e) {
                        var n = this._prepareFrames(t, e);
                        this._triggerEvent("handle", {
                            stackInfo: t,
                            options: e
                        }),
                        this._processException(t.name, t.message, t.url, t.lineno, n, e)
                    },
                    _prepareFrames: function(t, e) {
                        var n = this,
                        r = [];
                        if (t.stack && t.stack.length && (l(t.stack,
                        function(t, e) {
                            var o = n._normalizeFrame(e);
                            o && r.push(o)
                        }), e && e.trimHeadFrames)) for (var o = 0; o < e.trimHeadFrames && o < r.length; o++) r[o].in_app = !1;
                        return r = r.slice(0, this._globalOptions.stackTraceLimit)
                    },
                    _normalizeFrame: function(t) {
                        if (t.url) {
                            var e = {
                                filename: t.url,
                                lineno: t.line,
                                colno: t.column,
                                function: t.func || "?"
                            };
                            return e.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(e.filename) || /(Raven|TraceKit)\./.test(e.
                            function) || /raven\.(min\.)?js$/.test(e.filename)),
                            e
                        }
                    },
                    _processException: function(t, e, n, r, o, i) {
                        var a;
                        if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) && (e += "", o && o.length ? (n = o[0].filename || n, o.reverse(), a = {
                            frames: o
                        }) : n && (a = {
                            frames: [{
                                filename: n,
                                lineno: r,
                                in_app: !0
                            }]
                        }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                            var s = f({
                                exception: {
                                    values: [{
                                        type: t,
                                        value: e,
                                        stacktrace: a
                                    }]
                                },
                                culprit: n
                            },
                            i);
                            this._send(s)
                        }
                    },
                    _trimPacket: function(t) {
                        var e = this._globalOptions.maxMessageLength;
                        if (t.message && (t.message = p(t.message, e)), t.exception) {
                            var n = t.exception.values[0];
                            n.value = p(n.value, e)
                        }
                        var r = t.request;
                        return r && (r.url && (r.url = p(r.url, this._globalOptions.maxUrlLength)), r.Referer && (r.Referer = p(r.Referer, this._globalOptions.maxUrlLength))),
                        t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs),
                        t
                    },
                    _trimBreadcrumbs: function(t) {
                        for (var e, n, r, o = ["to", "from", "url"], i = 0; i < t.values.length; ++i) if (n = t.values[i], n.hasOwnProperty("data") && j(n.data) && !h(n.data)) {
                            r = f({},
                            n.data);
                            for (var a = 0; a < o.length; ++a) e = o[a],
                            r.hasOwnProperty(e) && (r[e] = p(r[e], this._globalOptions.maxUrlLength));
                            t.values[i].data = r
                        }
                    },
                    _getHttpData: function() {
                        if (this._hasNavigator || this._hasDocument) {
                            var t = {};
                            return this._hasNavigator && N.userAgent && (t.headers = {
                                "User-Agent": navigator.userAgent
                            }),
                            this._hasDocument && (D.location && D.location.href && (t.url = D.location.href), D.referrer && (t.headers || (t.headers = {}), t.headers.Referer = D.referrer)),
                            t
                        }
                    },
                    _resetBackoff: function() {
                        this._backoffDuration = 0,
                        this._backoffStart = null
                    },
                    _shouldBackoff: function() {
                        return this._backoffDuration && r() - this._backoffStart < this._backoffDuration
                    },
                    _isRepeatData: function(t) {
                        var e = this._lastData;
                        return ! (!e || t.message !== e.message || t.culprit !== e.culprit) && (t.stacktrace || e.stacktrace ? S(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || k(t.exception, e.exception))
                    },
                    _setBackoffState: function(t) {
                        if (!this._shouldBackoff()) {
                            var e = t.status;
                            if (400 === e || 401 === e || 429 === e) {
                                var n;
                                try {
                                    n = t.getResponseHeader("Retry-After"),
                                    n = 1e3 * parseInt(n, 10)
                                } catch(t) {}
                                this._backoffDuration = n || 2 * this._backoffDuration || 1e3,
                                this._backoffStart = r()
                            }
                        }
                    },
                    _send: function(t) {
                        var e = this._globalOptions,
                        n = {
                            project: this._globalProject,
                            logger: e.logger,
                            platform: "javascript"
                        },
                        o = this._getHttpData();
                        if (o && (n.request = o), t.trimHeadFrames && delete t.trimHeadFrames, t = f(n, t), t.tags = f(f({},
                        this._globalContext.tags), t.tags), t.extra = f(f({},
                        this._globalContext.extra), t.extra), t.extra["session:duration"] = r() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (t.breadcrumbs = {
                            values: [].slice.call(this._breadcrumbs, 0)
                        }), u(t.tags) && delete t.tags, this._globalContext.user && (t.user = this._globalContext.user), e.environment && (t.environment = e.environment), e.release && (t.release = e.release), e.serverName && (t.server_name = e.serverName), s(e.dataCallback) && (t = e.dataCallback(t) || t), t && !u(t) && (!s(e.shouldSendCallback) || e.shouldSendCallback(t))) return this._shouldBackoff() ? void this._logDebug("warn", "Raven dropped error due to backoff: ", t) : void("number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t))
                    },
                    _getUuid: function() {
                        return m()
                    },
                    _sendProcessedPayload: function(t, e) {
                        var n = this,
                        r = this._globalOptions;
                        if (this.isSetup()) {
                            if (this._lastEventId = t.event_id || (t.event_id = this._getUuid()), t = this._trimPacket(t), !this._globalOptions.allowDuplicates && this._isRepeatData(t)) return void this._logDebug("warn", "Raven dropped repeat event: ", t);
                            this._lastData = t,
                            this._logDebug("debug", "Raven about to send:", t);
                            var o = {
                                sentry_version: "7",
                                sentry_client: "raven-js/" + this.VERSION,
                                sentry_key: this._globalKey
                            };
                            this._globalSecret && (o.sentry_secret = this._globalSecret);
                            var i = t.exception && t.exception.values[0];
                            this.captureBreadcrumb({
                                category: "sentry",
                                message: i ? (i.type ? i.type + ": ": "") + i.value: t.message,
                                event_id: t.event_id,
                                level: t.level || "error"
                            });
                            var a = this._globalEndpoint; (r.transport || this._makeRequest).call(this, {
                                url: a,
                                auth: o,
                                data: t,
                                options: r,
                                onSuccess: function() {
                                    n._resetBackoff(),
                                    n._triggerEvent("success", {
                                        data: t,
                                        src: a
                                    }),
                                    e && e()
                                },
                                onError: function(r) {
                                    n._logDebug("error", "Raven transport failed to send: ", r),
                                    r.request && n._setBackoffState(r.request),
                                    n._triggerEvent("failure", {
                                        data: t,
                                        src: a
                                    }),
                                    r = r || new Error("Raven send failed (no additional details provided)"),
                                    e && e(r)
                                }
                            })
                        }
                    },
                    _makeRequest: function(t) {
                        var e = new XMLHttpRequest;
                        if ("withCredentials" in e || "undefined" != typeof XDomainRequest) {
                            var n = t.url;
                            "withCredentials" in e ? e.onreadystatechange = function() {
                                if (4 === e.readyState) if (200 === e.status) t.onSuccess && t.onSuccess();
                                else if (t.onError) {
                                    var n = new Error("Sentry error code: " + e.status);
                                    n.request = e,
                                    t.onError(n)
                                }
                            }: (e = new XDomainRequest, n = n.replace(/^https?:/, ""), t.onSuccess && (e.onload = t.onSuccess), t.onError && (e.onerror = function() {
                                var n = new Error("Sentry error code: XDomainRequest");
                                n.request = e,
                                t.onError(n)
                            })),
                            e.open("POST", n + "?" + y(t.auth)),
                            e.send(O(t.data))
                        }
                    },
                    _logDebug: function(t) {
                        this._originalConsoleMethods[t] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1))
                    },
                    _mergeContext: function(t, e) {
                        a(e) ? delete this._globalContext[t] : this._globalContext[t] = f(this._globalContext[t] || {},
                        e)
                    }
                };
                var R = Object.prototype;
                "undefined" != typeof __DEV__ && __DEV__ && (i.utils = {
                    isUndefined: a,
                    isFunction: s,
                    isString: c,
                    isObject: j,
                    isEmptyObject: u,
                    isError: I,
                    each: l,
                    objectMerge: f,
                    truncate: p,
                    hasKey: d,
                    joinRegExp: g,
                    urlencode: y,
                    uuid4: m,
                    htmlTreeAsString: b,
                    htmlElementAsString: w,
                    parseUrl: v,
                    fill: E
                }),
                i.prototype.setUser = i.prototype.setUserContext,
                i.prototype.setReleaseContext = i.prototype.setRelease,
                t.exports = i
            }).call(e, n(0))
        },
        function(t, e, n) {
            "use strict"; (function(e) {
                var r = n(14),
                o = "undefined" != typeof window ? window: void 0 !== e ? e: "undefined" != typeof self ? self: {},
                i = o.Raven,
                a = new r;
                a.noConflict = function() {
                    return o.Raven = i,
                    a
                },
                a.afterLoad(),
                t.exports = a
            }).call(e, n(0))
        },
        function(t, e, n) {
            "use strict"; (function(e) {
                function r() {
                    return "undefined" == typeof document || void 0 === document.location ? "": document.location.href
                }
                var o = n(2),
                i = {
                    collectWindowErrors: !0,
                    debug: !1
                },
                a = "undefined" != typeof window ? window: void 0 !== e ? e: "undefined" != typeof self ? self: {},
                s = [].slice,
                c = "?",
                u = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                i.report = function() {
                    function t(t) {
                        h(),
                        m.push(t)
                    }
                    function e(t) {
                        for (var e = m.length - 1; e >= 0; --e) m[e] === t && m.splice(e, 1)
                    }
                    function n() {
                        p(),
                        m = []
                    }
                    function l(t, e) {
                        var n = null;
                        if (!e || i.collectWindowErrors) {
                            for (var r in m) if (m.hasOwnProperty(r)) try {
                                m[r].apply(null, [t].concat(s.call(arguments, 2)))
                            } catch(t) {
                                n = t
                            }
                            if (n) throw n
                        }
                    }
                    function f(t, e, n, a, s) {
                        var f = null;
                        if (x) i.computeStackTrace.augmentStackTraceWithInitialElement(x, e, n, t),
                        d();
                        else if (s && o.isError(s)) f = i.computeStackTrace(s),
                        l(f, !0);
                        else {
                            var h, p = {
                                url: e,
                                line: n,
                                column: a
                            },
                            g = void 0,
                            v = t;
                            if ("[object String]" === {}.toString.call(t)) {
                                var h = t.match(u);
                                h && (g = h[1], v = h[2])
                            }
                            p.func = c,
                            f = {
                                name: g,
                                message: v,
                                url: r(),
                                stack: [p]
                            },
                            l(f, !0)
                        }
                        return !! y && y.apply(this, arguments)
                    }
                    function h() {
                        v || (y = a.onerror, a.onerror = f, v = !0)
                    }
                    function p() {
                        v && (a.onerror = y, v = !1, y = void 0)
                    }
                    function d() {
                        var t = x,
                        e = b;
                        b = null,
                        x = null,
                        w = null,
                        l.apply(null, [t, !1].concat(e))
                    }
                    function g(t, e) {
                        var n = s.call(arguments, 1);
                        if (x) {
                            if (w === t) return;
                            d()
                        }
                        var r = i.computeStackTrace(t);
                        if (x = r, w = t, b = n, setTimeout(function() {
                            w === t && d()
                        },
                        r.incomplete ? 2e3: 0), !1 !== e) throw t
                    }
                    var y, v, m = [],
                    b = null,
                    w = null,
                    x = null;
                    return g.subscribe = t,
                    g.unsubscribe = e,
                    g.uninstall = n,
                    g
                } (),
                i.computeStackTrace = function() {
                    function t(t) {
                        if (void 0 !== t.stack && t.stack) {
                            for (var e, n, o, i = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                            a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                            s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                            u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                            l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                            f = t.stack.split("\n"), h = [], p = (/^(.*) is undefined$/.exec(t.message), 0), d = f.length; p < d; ++p) {
                                if (n = i.exec(f[p])) {
                                    var g = n[2] && 0 === n[2].indexOf("native"),
                                    y = n[2] && 0 === n[2].indexOf("eval");
                                    y && (e = l.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]),
                                    o = {
                                        url: g ? null: n[2],
                                        func: n[1] || c,
                                        args: g ? [n[2]] : [],
                                        line: n[3] ? +n[3] : null,
                                        column: n[4] ? +n[4] : null
                                    }
                                } else if (n = s.exec(f[p])) o = {
                                    url: n[2],
                                    func: n[1] || c,
                                    args: [],
                                    line: +n[3],
                                    column: n[4] ? +n[4] : null
                                };
                                else {
                                    if (! (n = a.exec(f[p]))) continue;
                                    var y = n[3] && n[3].indexOf(" > eval") > -1;
                                    y && (e = u.exec(n[3])) ? (n[3] = e[1], n[4] = e[2], n[5] = null) : 0 !== p || n[5] || void 0 === t.columnNumber || (h[0].column = t.columnNumber + 1),
                                    o = {
                                        url: n[3],
                                        func: n[1] || c,
                                        args: n[2] ? n[2].split(",") : [],
                                        line: n[4] ? +n[4] : null,
                                        column: n[5] ? +n[5] : null
                                    }
                                } ! o.func && o.line && (o.func = c),
                                h.push(o)
                            }
                            return h.length ? {
                                name: t.name,
                                message: t.message,
                                url: r(),
                                stack: h
                            }: null
                        }
                    }
                    function e(t, e, n, r) {
                        var o = {
                            url: e,
                            line: n
                        };
                        if (o.url && o.line) {
                            if (t.incomplete = !1, o.func || (o.func = c), t.stack.length > 0 && t.stack[0].url === o.url) {
                                if (t.stack[0].line === o.line) return ! 1;
                                if (!t.stack[0].line && t.stack[0].func === o.func) return t.stack[0].line = o.line,
                                !1
                            }
                            return t.stack.unshift(o),
                            t.partial = !0,
                            !0
                        }
                        return t.incomplete = !0,
                        !1
                    }
                    function n(t, a) {
                        for (var s, u, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                        f = [], h = {},
                        p = !1, d = n.caller; d && !p; d = d.caller) if (d !== o && d !== i.report) {
                            if (u = {
                                url: null,
                                func: c,
                                line: null,
                                column: null
                            },
                            d.name ? u.func = d.name: (s = l.exec(d.toString())) && (u.func = s[1]), void 0 === u.func) try {
                                u.func = s.input.substring(0, s.input.indexOf("{"))
                            } catch(t) {}
                            h["" + d] ? p = !0 : h["" + d] = !0,
                            f.push(u)
                        }
                        a && f.splice(0, a);
                        var g = {
                            name: t.name,
                            message: t.message,
                            url: r(),
                            stack: f
                        };
                        return e(g, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description),
                        g
                    }
                    function o(e, o) {
                        var a = null;
                        o = null == o ? 0 : +o;
                        try {
                            if (a = t(e)) return a
                        } catch(t) {
                            if (i.debug) throw t
                        }
                        try {
                            if (a = n(e, o + 1)) return a
                        } catch(t) {
                            if (i.debug) throw t
                        }
                        return {
                            name: e.name,
                            message: e.message,
                            url: r()
                        }
                    }
                    return o.augmentStackTraceWithInitialElement = e,
                    o.computeStackTraceFromStackProp = t,
                    o
                } (),
                t.exports = i
            }).call(e, n(0))
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
                return - 1
            }
            function o(t, e, n, r) {
                return JSON.stringify(t, i(e, r), n)
            }
            function i(t, e) {
                var n = [],
                o = [];
                return null == e && (e = function(t, e) {
                    return n[0] === e ? "[Circular ~]": "[Circular ~." + o.slice(0, r(n, e)).join(".") + "]"
                }),
                function(i, a) {
                    if (n.length > 0) {
                        var s = r(n, this);~s ? n.splice(s + 1) : n.push(this),
                        ~s ? o.splice(s, 1 / 0, i) : o.push(i),
                        ~r(n, a) && (a = e.call(this, i, a))
                    } else n.push(a);
                    return null == t ? a: t.call(this, i, a)
                }
            }
            e = t.exports = o,
            e.getSerialize = i
        }])
    })
},
function(t, e) {
    var n;
    n = function() {
        return this
    } ();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch(t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
},
function(t, e, n) {
    var r = n(48),
    o = n(100);
    t.exports = n(49) ?
    function(t, e, n) {
        return r.f(t, e, o(1, n))
    }: function(t, e, n) {
        return t[e] = n,
        t
    }
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
, ,
function(t, e, n) {
    "use strict";
    var r = n(60),
    o = {};
    o[n(4)("toStringTag")] = "z",
    o + "" != "[object z]" && n(16)(Object.prototype, "toString",
    function() {
        return "[object " + r(this) + "]"
    },
    !0)
},
function(t, e, n) {
    var r = n(61),
    o = n(4)("toStringTag"),
    i = "Arguments" == r(function() {
        return arguments
    } ()),
    a = function(t, e) {
        try {
            return t[e]
        } catch(t) {}
    };
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = a(e = Object(t), o)) ? n: i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments": s
    }
},
function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
},
function(t, e, n) {
    var r = n(6),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
},
function(t, e, n) {
    t.exports = !n(11) && !n(30)(function() {
        return 7 != Object.defineProperty(n(64)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e, n) {
    var r = n(7),
    o = n(6).document,
    i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
},
function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e, n) {
    "use strict";
    var r = n(104)(!0);
    n(39)(String, "String",
    function(t) {
        this._t = String(t),
        this._i = 0
    },
    function() {
        var t, e = this._t,
        n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        }: (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
},
function(t, e, n) {
    var r = n(6),
    o = n(25),
    i = n(17),
    a = n(16),
    s = n(31),
    c = function(t, e, n) {
        var u, l, f, h, p = t & c.F,
        d = t & c.G,
        g = t & c.S,
        y = t & c.P,
        v = t & c.B,
        m = d ? r: g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
        b = d ? o: o[e] || (o[e] = {}),
        w = b.prototype || (b.prototype = {});
        d && (n = e);
        for (u in n) l = !p && m && void 0 !== m[u],
        f = (l ? m: n)[u],
        h = v && l ? s(f, r) : y && "function" == typeof f ? s(Function.call, f) : f,
        m && a(m, u, f, t & c.U),
        b[u] != f && i(b, u, h),
        y && w[u] != f && (w[u] = f)
    };
    r.core = o,
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    t.exports = c
},
function(t, e, n) {
    var r = n(19),
    o = n(108),
    i = n(71),
    a = n(40)("IE_PROTO"),
    s = function() {},
    c = function() {
        var t, e = n(64)("iframe"),
        r = i.length;
        for (e.style.display = "none", n(113).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
        return c()
    };
    t.exports = Object.create ||
    function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(),
        void 0 === e ? n: o(n, e)
    }
},
function(t, e, n) {
    var r = n(109),
    o = n(71);
    t.exports = Object.keys ||
    function(t) {
        return r(t, o)
    }
},
function(t, e, n) {
    var r = n(37),
    o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e, n) {
    for (var r = n(116), o = n(69), i = n(16), a = n(6), s = n(17), c = n(26), u = n(4), l = u("iterator"), f = u("toStringTag"), h = c.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    },
    d = o(p), g = 0; g < d.length; g++) {
        var y, v = d[g],
        m = p[v],
        b = a[v],
        w = b && b.prototype;
        if (w && (w[l] || s(w, l, h), w[f] || s(w, f, v), c[v] = h, m)) for (y in r) w[y] || i(w, y, r[y], !0)
    }
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
},
function(t, e, n) {
    "use strict";
    var r = n(18).f,
    o = n(68),
    i = n(75),
    a = n(31),
    s = n(76),
    c = n(77),
    u = n(39),
    l = n(73),
    f = n(122),
    h = n(11),
    p = n(78).fastKey,
    d = n(42),
    g = h ? "_s": "size",
    y = function(t, e) {
        var n, r = p(e);
        if ("F" !== r) return t._i[r];
        for (n = t._f; n; n = n.n) if (n.k == e) return n
    };
    t.exports = {
        getConstructor: function(t, e, n, u) {
            var l = t(function(t, r) {
                s(t, l, e, "_i"),
                t._t = e,
                t._i = o(null),
                t._f = void 0,
                t._l = void 0,
                t[g] = 0,
                void 0 != r && c(r, n, t[u], t)
            });
            return i(l.prototype, {
                clear: function() {
                    for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0,
                    r.p && (r.p = r.p.n = void 0),
                    delete n[r.i];
                    t._f = t._l = void 0,
                    t[g] = 0
                },
                delete: function(t) {
                    var n = d(this, e),
                    r = y(n, t);
                    if (r) {
                        var o = r.n,
                        i = r.p;
                        delete n._i[r.i],
                        r.r = !0,
                        i && (i.n = o),
                        o && (o.p = i),
                        n._f == r && (n._f = o),
                        n._l == r && (n._l = i),
                        n[g]--
                    }
                    return !! r
                },
                forEach: function(t) {
                    d(this, e);
                    for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n: this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !! y(d(this, e), t)
                }
            }),
            h && r(l.prototype, "size", {
                get: function() {
                    return d(this, e)[g]
                }
            }),
            l
        },
        def: function(t, e, n) {
            var r, o, i = y(t, e);
            return i ? i.v = n: (t._l = i = {
                i: o = p(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            },
            t._f || (t._f = i), r && (r.n = i), t[g]++, "F" !== o && (t._i[o] = i)),
            t
        },
        getEntry: y,
        setStrong: function(t, e, n) {
            u(t, e,
            function(t, n) {
                this._t = d(t, e),
                this._k = n,
                this._l = void 0
            },
            function() {
                for (var t = this,
                e = t._k,
                n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n: t._t._f) ? "keys" == e ? l(0, n.k) : "values" == e ? l(0, n.v) : l(0, [n.k, n.v]) : (t._t = void 0, l(1))
            },
            n ? "entries": "values", !n, !0),
            f(e)
        }
    }
},
function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t
    }
},
function(t, e) {
    t.exports = function(t, e, n, r) {
        if (! (t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
},
function(t, e, n) {
    var r = n(31),
    o = n(119),
    i = n(120),
    a = n(19),
    s = n(70),
    c = n(121),
    u = {},
    l = {},
    e = t.exports = function(t, e, n, f, h) {
        var p, d, g, y, v = h ?
        function() {
            return t
        }: c(t),
        m = r(n, f, e ? 2 : 1),
        b = 0;
        if ("function" != typeof v) throw TypeError(t + " is not iterable!");
        if (i(v)) {
            for (p = s(t.length); p > b; b++) if ((y = e ? m(a(d = t[b])[0], d[1]) : m(t[b])) === u || y === l) return y
        } else for (g = v.call(t); ! (d = g.next()).done;) if ((y = o(g, m, d.value, e)) === u || y === l) return y
    };
    e.BREAK = u,
    e.RETURN = l
},
function(t, e, n) {
    var r = n(29)("meta"),
    o = n(7),
    i = n(12),
    a = n(18).f,
    s = 0,
    c = Object.isExtensible ||
    function() {
        return ! 0
    },
    u = !n(30)(function() {
        return c(Object.preventExtensions({}))
    }),
    l = function(t) {
        a(t, r, {
            value: {
                i: "O" + ++s,
                w: {}
            }
        })
    },
    f = function(t, e) {
        if (!o(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
        if (!i(t, r)) {
            if (!c(t)) return "F";
            if (!e) return "E";
            l(t)
        }
        return t[r].i
    },
    h = function(t, e) {
        if (!i(t, r)) {
            if (!c(t)) return ! 0;
            if (!e) return ! 1;
            l(t)
        }
        return t[r].w
    },
    p = function(t) {
        return u && d.NEED && c(t) && !i(t, r) && l(t),
        t
    },
    d = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: f,
        getWeak: h,
        onFreeze: p
    }
},
function(t, e, n) {
    "use strict";
    var r = n(6),
    o = n(67),
    i = n(16),
    a = n(75),
    s = n(78),
    c = n(77),
    u = n(76),
    l = n(7),
    f = n(30),
    h = n(123),
    p = n(41),
    d = n(124);
    t.exports = function(t, e, n, g, y, v) {
        var m = r[t],
        b = m,
        w = y ? "set": "add",
        x = b && b.prototype,
        k = {},
        S = function(t) {
            var e = x[t];
            i(x, t, "delete" == t ?
            function(t) {
                return ! (v && !l(t)) && e.call(this, 0 === t ? 0 : t)
            }: "has" == t ?
            function(t) {
                return ! (v && !l(t)) && e.call(this, 0 === t ? 0 : t)
            }: "get" == t ?
            function(t) {
                return v && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            }: "add" == t ?
            function(t) {
                return e.call(this, 0 === t ? 0 : t),
                this
            }: function(t, n) {
                return e.call(this, 0 === t ? 0 : t, n),
                this
            })
        };
        if ("function" == typeof b && (v || x.forEach && !f(function() { (new b).entries().next()
        }))) {
            var E = new b,
            T = E[w](v ? {}: -0, 1) != E,
            O = f(function() {
                E.has(1)
            }),
            _ = h(function(t) {
                new b(t)
            }),
            M = !v && f(function() {
                for (var t = new b,
                e = 5; e--;) t[w](e, e);
                return ! t.has( - 0)
            });
            _ || (b = e(function(e, n) {
                u(e, b, t);
                var r = d(new m, e, b);
                return void 0 != n && c(n, y, r[w], r),
                r
            }), b.prototype = x, x.constructor = b),
            (O || M) && (S("delete"), S("has"), y && S("get")),
            (M || T) && S(w),
            v && x.clear && delete x.clear
        } else b = g.getConstructor(e, t, y, w),
        a(b.prototype, n),
        s.NEED = !0;
        return p(b, t),
        k[t] = b,
        o(o.G + o.W + o.F * (b != m), k),
        v || g.setStrong(b, t, y),
        b
    }
},
function(t, e, n) {
    var r = n(34),
    o = n(46),
    i = n(172),
    a = n(55),
    s = function(t, e, n) {
        var c, u, l, f = t & s.F,
        h = t & s.G,
        p = t & s.S,
        d = t & s.P,
        g = t & s.B,
        y = t & s.W,
        v = h ? o: o[e] || (o[e] = {}),
        m = v.prototype,
        b = h ? r: p ? r[e] : (r[e] || {}).prototype;
        h && (n = e);
        for (c in n)(u = !f && b && void 0 !== b[c]) && c in v || (l = u ? b[c] : n[c], v[c] = h && "function" != typeof b[c] ? n[c] : g && u ? i(l, r) : y && b[c] == l ?
        function(t) {
            var e = function(e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e);
                    case 2:
                        return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype,
            e
        } (l) : d && "function" == typeof l ? i(Function.call, l) : l, d && ((v.virtual || (v.virtual = {}))[c] = l, t & s.R && m && !m[c] && a(m, c, l)))
    };
    s.F = 1,
    s.G = 2,
    s.S = 4,
    s.P = 8,
    s.B = 16,
    s.W = 32,
    s.U = 64,
    s.R = 128,
    t.exports = s
},
function(t, e, n) {
    var r = n(56);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
function(t, e, n) {
    var r = n(200),
    o = n(158);
    t.exports = function(t) {
        return r(o(t))
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(53);
    e.DEBUG = r.debugDetector(!1),
    e.ENV = "production",
    e.isIOS = function(t) {
        return /iPhone|iPod/.test(t)
    },
    e.isAndroid = function(t) {
        return /Android/.test(t)
    }
},
, , , ,
function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout,
        setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch(e) {
            try {
                return l.call(null, t, 0)
            } catch(e) {
                return l.call(this, t, 0)
            }
        }
    }
    function i(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout,
        clearTimeout(t);
        try {
            return f(t)
        } catch(e) {
            try {
                return f.call(null, t)
            } catch(e) {
                return f.call(this, t)
            }
        }
    }
    function a() {
        g && p && (g = !1, p.length ? d = p.concat(d) : y = -1, d.length && s())
    }
    function s() {
        if (!g) {
            var t = o(a);
            g = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++y < e;) p && p[y].run();
                y = -1,
                e = d.length
            }
            p = null,
            g = !1,
            i(t)
        }
    }
    function c(t, e) {
        this.fun = t,
        this.array = e
    }
    function u() {}
    var l, f, h = t.exports = {}; !
    function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout: n
        } catch(t) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout: r
        } catch(t) {
            f = r
        }
    } ();
    var p, d = [],
    g = !1,
    y = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new c(t, e)),
        1 !== d.length || g || o(s)
    },
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = u,
    h.addListener = u,
    h.once = u,
    h.off = u,
    h.removeListener = u,
    h.removeAllListeners = u,
    h.emit = u,
    h.prependListener = u,
    h.prependOnceListener = u,
    h.listeners = function(t) {
        return []
    },
    h.binding = function(t) {
        throw new Error("process.binding is not supported")
    },
    h.cwd = function() {
        return "/"
    },
    h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    },
    h.umask = function() {
        return 0
    }
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t() {
            r(this, t),
            this.observers = {}
        }
        return t.prototype.on = function(t, e) {
            var n = this;
            t.split(" ").forEach(function(t) {
                n.observers[t] = n.observers[t] || [],
                n.observers[t].push(e)
            })
        },
        t.prototype.off = function(t, e) {
            var n = this;
            this.observers[t] && this.observers[t].forEach(function() {
                if (e) {
                    var r = n.observers[t].indexOf(e);
                    r > -1 && n.observers[t].splice(r, 1)
                } else delete n.observers[t]
            })
        },
        t.prototype.emit = function(t) {
            for (var e = arguments.length,
            n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            if (this.observers[t]) { [].concat(this.observers[t]).forEach(function(t) {
                    t.apply(void 0, n)
                })
            }
            if (this.observers["*"]) { [].concat(this.observers["*"]).forEach(function(e) {
                    var r;
                    e.apply(e, (r = [t]).concat.apply(r, n))
                })
            }
        },
        t
    } ();
    e.a = o
},
, ,
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(t) {
            return ! 0
        }
    }
},
function(t, e, n) { !
    function(e, n) {
        t.exports = n()
    } (0,
    function() {
        return function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, e),
                o.l = !0,
                o.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.i = function(t) {
                return t
            },
            e.d = function(t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            },
            e.n = function(t) {
                var n = t && t.__esModule ?
                function() {
                    return t.
                default
                }:
                function() {
                    return t
                };
                return e.d(n, "a", n),
                n
            },
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            e.p = "",
            e(e.s = 0)
        } ([function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            n.d(e, "brandAssets",
            function() {
                return l
            });
            var r = n(2),
            o = n.n(r),
            i = n(4),
            a = n.n(i);
            n.d(e, "brandInfos",
            function() {
                return a.a
            });
            var s = n(3),
            c = n.n(s);
            n.d(e, "brandColors",
            function() {
                return c.a
            });
            var u = n(1);
            n.d(e, "loadHeadIcons",
            function() {
                return u.a
            }),
            n.d(e, "updateBrandColors",
            function() {
                return u.b
            });
            var l = {
                favicon: o.a["favicon.ico"],
                touchicon: o.a["touchicon@2x.png"],
                circle: o.a["icon-circle.svg"],
                round: o.a["icon-round.svg"],
                square: o.a["icon-square.svg"]
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a",
            function() {
                return a
            }),
            n.d(e, "b",
            function() {
                return s
            });
            var r = n(0),
            o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            i = Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            a = function(t) {
                var e = document.getElementsByTagName("head")[0],
                n = {
                    favicon: r.brandAssets.favicon,
                    touchicon: r.brandAssets.touchicon
                };
                t = i({},
                n, t);
                var o = document.querySelector("link[rel*='icon']") || document.createElement("link");
                o.type = "image/x-icon",
                o.rel = "shortcut icon",
                o.href = t.favicon,
                e.appendChild(o);
                var a = document.querySelector("link[rel='apple-touch-icon']") || document.createElement("link");
                a.rel = "apple-touch-icon",
                a.href = t.touchicon,
                e.appendChild(a)
            },
            s = function(t) {
                if (t && "object" === (void 0 === t ? "undefined": o(t))) for (var e in t) {
                    var n = t[e];
                    r.brandColors[e] = n
                }
            }
        },
        function(t, e) {
            t.exports = {
                "favicon.ico": "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAI5ElEQVR4nNWb329cRxXHP2fu7Hq9XlzH+akoOCLUoQoRMlawokigtDIkRbykqirxgEIeeOQf4Kl/BA+VkIjySBuIBJSo1EgVoiC5xY1QExJHMvnZpmm8cW3HWe/eO4eHu7te7967vrt77cRHsrwz98ycH/OdM+fOnRESkF7FMFAYJmsPIzJOwClgEiGHJulhE0kApQRM4fEeRmeo+LN8tVyUb+OSNI8lvbOrgBdMgJ4BfoCRESxZHJYK2ZRMSIcylDH4+JRxegf4O8glAm9aRh4txzWLdIC+ieEXQxMYOYvHpAp7xCePw4YMm2NDz1SzxuCrZUWUhwRM4fQCv1mYljdbEdHiAJ0bymuW1yUjZ4FxHIM4zHNrdBwJYHAYFoEZregFKXNRDi2sNLLZxoIWd+R4ys8lyzkCjhCQ33aG10iBAINjCI/jkpVBhIIWd/xWhh+Xamymzq8YVvQNspzDcXRbG18jBRzgkyfgKJZzLOsbqmt2139wf+gYGTlLwBH85yC690LK+jgVoiFHwBEycpa7Q8dqjwyAPtxdADkHjG/rkW82vLHOQdW2cVTO6dzuAtQQUPEnyDBJwOC2Nr653IyC0AmDZJhE/AkAozcxOD2DYR8Nc2PbUJSh7csGwz5Ez+hNjKWvMIxwclvN+yg9oxAQx1MhB5zEFIYtxh7GkwP1JOd5piSGR9W1TgWLkQM4e9ggMkbmOUtrmykO1knrovrKkEVkzOL0VQIs2va1IEXSjVPpmirNOsW16wT+td8+FuVV0btDqwjZDd6L0iFVEAE8iIm3IUJ9BIepKy2dGxlX11gWShYj2a0Lfgrkof8nkH89kmM1UD4rfsiQ+wPD3i1CZ23a4OTs1kZ+BfHAvgi5H0ZyOB/eX3qF0pPjTL7wa17q/ycejjpiup0GMeh4Buu+ApXYp0IAKFdWXuad4q+48uR0qLtqdIDrNA9oavuMHOC3f4xDsTzyDzLvj6DqRfBEtEtqeAM9m7Vf43eqavqFO10GV/217mFUg7jyBjxb7wAFNNiQSQFBEXXIZqwAVdoaB2jDf4nRpIFlDQW6Pv6nHABhsx0QKVjDv0TtFMERmTylNB02xwEbKtLGAUp93EME6PopkHIcSNcBSaDYbU6TxMikOjRQeg5IKrijxKsaEdKAf4zc3h3QieBeEBDVd6fyI+o6d0Cv0ItKUDaS99wsg70KriOgSxikZXjHCEhrBHqhTYoD7R2wGZFXw29WHVHKy6A2lLf2ZaiuRAdTIE0URVA0AtKEfII3skSUkk6NSagQ5YAel5W27bpdBjeaAnHymouxMSCtPDspn3SRfnQhP9LopuetW2JdZlSJ2imABbMjppPw65Vq03tgBwOkCXgaybZ7mAb0WuokD5lvxnQGvoOKC+dqy5vzpuQBacF/Q6EOJBMan/1ORAchrfjKU18Jqu0FjQ1k9c8HiXVolZccAXE8iQRX3+m9AzBwBuzemI5gvqQsV8Kp4ImPEZ910TNJcOtgwKK3xXueDrpmtDqQHGRGofAaDJwOkRDVXJV7S8pSddM4y1P6eAI40KbA2QqMrgbRtnvY3Zyrrq6mD8zXwNsDmW9B//eh/yTY/REdhLRYdswtKk8qYS8FU6Rg5gl3iXvRKb6c7jKoQWhw37Fwrtt9YA9C9iXIjID0RTQKyalydT7g9iKUnWA8x07zGTvMA1QTfhrrwpZ0lsFanQZgdsLgz8LRlhxIkmxbub8c8OF9Zb4EToQBWWS/vcGw+RySfhfolIc4BCTpMHIEDARF0EqY7CQw3qnycMXx11sBswtQcYJ6wtftNb6R+YS8fAV46S3DTeWUl0EPgnmo3AK3CN6uCMaQWRVKATxcCbj8P5/pLwTfCYhh0Mwz1vc+B+1/kstPwtd2Geyyg5YAqCWozIVIWOeA0GinUHawUnHceBzw7pzj9pIgIoCQkad8L/cnxnJ/YdA8ioz+7XXoTO/0EyFVtDwH/iM0M1r/pukUKk4plhzXiwEffaFcfyz4zmAFFENGVjmRv8ipwlvs926uzf0tQ0Aq5EHlLk/L8zwRx9JqOMfvLjnmFuHOEjxeDTdFrAEjGcrAXnub04NvcWLgd7xgioQH1jb/0IZt/PbYXeBrqhcL/m1u3rnInxf289+VMQIXjrAIGDEgFofi1HEge43jA7/nxMA77PRu4WFQYka+l7oInjBjCS8btB6R6ykeKEey71IqBJSDX3KjNIEAGakwYObZm7nFob5/cyT3D0b7PqLfPMKiSOOMTGMwNioLJescU5LlR1Ih+qhMF4FQFKz4jPX/jQGzxGxpAitl9tg77LZ3GPI+p88skKVMRqopcz3XT3AwKo24laHsykxZgcsYXoGmo3I9eVwQoM+UGM39i5HsDIKSER+Lj1c9BRJSGP03NDzNPCAU6wtctuL0ChUpA/meOtSmnxoGlyxlsma1LnXN0JgzP92OeBK+Rp9XKIvqFVtSf7YvsPfESAHt8PU4om79l+/a6HbeT2RdWjyCT6D3ShV/1twzy0WUD9RSqjNHdaoR5ai6JO2SGNGuXZT8pP0AWEooH9ybXy6a0VGcIpdwPKieRkikSKMOtWRHE7Rra0TSds2U1BkAgiPggYpcGv0xzgAYz05LhSkMi/W8IEKRdTr3YkA3SOkEhRpTDvOvRXymTNZOQzUSyaEvl0HPo8xgWFm32baVBhBT7nYaNVJo/AowI+h5OfrlMjR+Gntx4WMqegHDNTxKzbvSuhUGdIqmpHzh8eQShmta0Qt8d+Hj2qO6A0RwWHmbMucxfFpDQh3uzUK3yoBe4gesjbzwqZQ5b4bkbWmIda0XJz8Zymt/9eKkMq7hPSLTNfQ2kyeurkaCE8OiSnhx0ixyUV5ef3Ey/ursT4cmkOrVWdgjAXkNGnaQujGiW6OS9NNAYvDVa7g6q3qBPya8OrtOzvVdBWi4PC0yopYsQcPl6a1CQDujlfrlafEpo9XL0yqXwJuW8Q4vT7f0fxWDVxgGe1hVxtVxygiTQK7l2O8WO0AEcJQcTInhPVGdQfxZssmuz/8fpIUgnreVeHQAAAAASUVORK5CYII=",
                "icon-circle.svg": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDAgNDAiPjxkZWZzPjxyZWN0IGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIyMCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjkwLjM3NCUiIHgyPSI3OC42MDQlIiB5MT0iNjguMTk4JSIgeTI9IjY4LjE5OCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1RUMxRjkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM1RUI4RjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0ZGRTQxMSIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNLjk4OSAyMC44M2EuNTIuNTIgMCAwIDEtLjA1NC4wMWwxLjcyIDEuNjc3YzEuNjU0LS4xNTIgMy4yNzMtLjU4NyA0LjQ2NS0xLjAxOCAxLjE5My0uNDMyIDIuMTc0LS45ODcgMi45NDUtMS42NjdhNi4yMjcgNi4yMjcgMCAwIDAgMS43MTMtMi40NWMuMzctLjk1NC41NTUtMi4wNTUuNTU1LTMuMzAzVjcuOTE1YzAtMS4zOS4wMDUtMi41OTUuMDE1LTMuNjE0LjAxLTEuMDIuMDE2LTEuOTQuMDE2LTIuNzYzTDEwLjQ0LjAwM2MwIC44MjEtLjAwNSAxLjc0MS0uMDE1IDIuNzYtLjAxIDEuMDE5LS4wMTUgMi4yMjQtLjAxNSAzLjYxNHY2LjE2NGMwIDEuMjQ4LS4xODUgMi4zNDktLjU1NSAzLjMwMmE2LjIyNyA2LjIyNyAwIDAgMS0xLjcxMyAyLjQ1Yy0uNzcuNjgtMS43NTIgMS4yMzYtMi45NDUgMS42NjctMS4xNzcuNDI2LTIuNTguNzE2LTQuMjA4Ljg3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuOTQ5IDkuMzU5KSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMy4zOSA5LjM1OWMwIC44MjItLjAwNiAxLjc0My0uMDE2IDIuNzYyLS4wMSAxLjAyLS4wMTUgMi4yMjUtLjAxNSAzLjYxNVYyMS45YzAgMS4yNDgtLjE4NSAyLjM0OS0uNTU2IDMuMzAyYTYuMjI3IDYuMjI3IDAgMCAxLTEuNzEyIDIuNDVjLS43NzEuNjgtMS43NTMgMS4yMzYtMi45NDUgMS42NjctMS4xOTIuNDMxLTIuNjE1LjcyMy00LjI2OS44NzVsLS45MjgtMy45ODdhMTYuNzIgMTYuNzIgMCAwIDAgMi4yMzctLjQwNCA0LjY2IDQuNjYgMCAwIDAgMS42NzQtLjc5OWMuNTA3LS4zOTUuODktLjg5MiAxLjE1LTEuNDkxLjI1OC0uNTk5LjM4Ny0xLjM5LjM4Ny0yLjM3NCAwLS43OTIuMDAzLTEuNjI2LjAwOC0yLjUwNC4wMDUtLjg3Ny4wMDctMS43ODMuMDA3LTIuNzE2IDAtMS42MjQtLjAwNy0yLjkxNS0uMDIyLTMuODc0LS4wMTYtLjk1OS0uMDI4LTEuODU0LS4wMzgtMi42ODZoNS4wMzd6Ii8+PC9nPjwvc3ZnPg==",
                "icon-round.svg": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEyIDMxMiI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIzMTIiIGhlaWdodD0iMzEyIiByeD0iNzAiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI5MC4zNzQlIiB4Mj0iNzguNjA0JSIgeTE9IjY4LjE5OCUiIHkyPSI2OC4xOTglIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNUVDMUY5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNUVCOEY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkU0MTEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTcuNzExIDE2Mi40NzFhNC4wNiA0LjA2IDAgMCAxLS40MjEuMDc0bDEzLjQxOSAxMy4wODhjMTIuOS0xLjE4NyAyNS41MzItNC41OCAzNC44My03Ljk0NCA5LjMtMy4zNjMgMTYuOTU3LTcuNjk2IDIyLjk3MS0xMi45OTkgNi4wMTUtNS4zMDIgMTAuNDY3LTExLjY3MyAxMy4zNTUtMTkuMTEyIDIuODg5LTcuNDQgNC4zMzMtMTYuMDI2IDQuMzMzLTI1Ljc2VjYxLjc0YzAtMTAuODQzLjA0LTIwLjI0LjExOS0yOC4xOTQuMDc5LTcuOTU0LjExOS0xNS4xMzYuMTE5LTIxLjU0NmwtMTUtMTEuOTczYzAgNi40MDMtLjA0IDEzLjU3Ni0uMTIgMjEuNTE5LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMTg2IDMuMzIyLTIwLjEzIDUuNTgyLTMyLjgyOSA2Ljc4MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMSA3MykiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTgyLjQzNiA3M2MwIDYuNDEtLjA0IDEzLjU5Mi0uMTIgMjEuNTQ2LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMyAzLjM2My0yMC4zOTkgNS42MzgtMzMuMjk5IDYuODI1TDEwMSAyMDQuNDEzYzYuNjQ4LS43OTIgMTIuNDY1LTEuODQgMTcuNDUtMy4xNDYgNC45ODYtMS4zMDYgOS4zMzktMy4zODMgMTMuMDU5LTYuMjMyIDMuOTU3LTMuMDg3IDYuOTQ0LTYuOTY1IDguOTYyLTExLjYzNCAyLjAxOC00LjY3IDMuMDI3LTEwLjg0MiAzLjAyNy0xOC41MTkgMC02LjE3My4wMi0xMi42ODIuMDYtMTkuNTI4LjA0LTYuODQ1LjA2LTEzLjkwOS4wNi0yMS4xOSAwLTEyLjY2Mi0uMDYtMjIuNzMzLS4xNzktMzAuMjEyQTU3MjAuMSA1NzIwLjEgMCAwIDEgMTQzLjE0MiA3M2gzOS4yOTR6Ii8+PC9nPjwvc3ZnPg==",
                "icon-square.svg": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMTIgMzEyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIzOS44ODclIiB4Mj0iNzkuOTcxJSIgeTE9IjMxLjkzMyUiIHkyPSIxMDcuNjA3JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRTQxMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZFQ0IxMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iOTAuMzc0JSIgeDI9Ijc4LjYwNCUiIHkxPSI2OC4xOTglIiB5Mj0iNjguMTk4JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzVFQzFGOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzVFQjhGOSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGgzMTJ2MzEySDB6Ii8+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGgzMTJ2MzEySDB6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTcuNzExIDE2Mi40NzFhNC4wNiA0LjA2IDAgMCAxLS40MjEuMDc0bDEzLjQxOSAxMy4wODhjMTIuOS0xLjE4NyAyNS41MzItNC41OCAzNC44My03Ljk0NCA5LjMtMy4zNjMgMTYuOTU3LTcuNjk2IDIyLjk3MS0xMi45OTkgNi4wMTUtNS4zMDIgMTAuNDY3LTExLjY3MyAxMy4zNTUtMTkuMTEyIDIuODg5LTcuNDQgNC4zMzMtMTYuMDI2IDQuMzMzLTI1Ljc2VjYxLjc0YzAtMTAuODQzLjA0LTIwLjI0LjExOS0yOC4xOTQuMDc5LTcuOTU0LjExOS0xNS4xMzYuMTE5LTIxLjU0NmwtMTUtMTEuOTczYzAgNi40MDMtLjA0IDEzLjU3Ni0uMTIgMjEuNTE5LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMTg2IDMuMzIyLTIwLjEzIDUuNTgyLTMyLjgyOSA2Ljc4MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMSA3MykiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTgyLjQzNiA3M2MwIDYuNDEtLjA0IDEzLjU5Mi0uMTIgMjEuNTQ2LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMyAzLjM2My0yMC4zOTkgNS42MzgtMzMuMjk5IDYuODI1TDEwMSAyMDQuNDEzYzYuNjQ4LS43OTIgMTIuNDY1LTEuODQgMTcuNDUtMy4xNDYgNC45ODYtMS4zMDYgOS4zMzktMy4zODMgMTMuMDU5LTYuMjMyIDMuOTU3LTMuMDg3IDYuOTQ0LTYuOTY1IDguOTYyLTExLjYzNCAyLjAxOC00LjY3IDMuMDI3LTEwLjg0MiAzLjAyNy0xOC41MTkgMC02LjE3My4wMi0xMi42ODIuMDYtMTkuNTI4LjA0LTYuODQ1LjA2LTEzLjkwOS4wNi0yMS4xOSAwLTEyLjY2Mi0uMDYtMjIuNzMzLS4xNzktMzAuMjEyQTU3MjAuMSA1NzIwLjEgMCAwIDEgMTQzLjE0MiA3M2gzOS4yOTR6Ii8+PC9nPjwvc3ZnPg==",
                "touchicon@2x.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABQVBMVEX/5BH/////4hH/4BH/3BH/2hH+1xH/0hH/1RH/2BH/0BH/3xH/3hH/1BH/1xH+zBH/zxFeuPlewfn/zhFev/levvlevfleuflevPmXztb/zRGXzdZeu/n/7W3/7X3/7nVluvT/74f/7oP+/O7C3cT/7XD/3Rn/+dWYz9Wl0s///vlsv+38+eP599ucz9O12MjI4cP/9br/8qT/8ZzBzGr81xRkwvH/+t1zwtug0dGt1svn68X+9sPV48KNwrWbyKH/8Y+wyoTRzlXWz03/40L/3y3t1StgufV7w+V7xdH/983v8Mv/+cq528fb5cLL4sL/98CJybuTw67/9az/8ZeozI//6m/J11/Lzl3/5VH01SJouuqHxt2Py9l6vtH08tDr7cj/9rSPwLOPwrHY5a/c00Pe0z/i3Dri0jr14SD31RzN4zGIAAASkUlEQVR42uyby6rUQBCG24oeGJKVOIKIiqKoG6+g6MoHUFRUXAuC+P4vYOqSqhM7VR3HZCYt/p2unO3HX9XVndOT/uu//ssV9OPfEMA/QQLwL1iCEP9GbiFE/ZmFBFB7agEFVNXFrlbgq1YQGCapYpAkEKlqEOBISjWDUOfgWX1qAap6EFqpagfRjEo1g0ACQak7tSB5GE3/1AEiDIaRozSpDgGHaQioyBEAnp4fzeYdAe3kLkMdIKWsahBk4zUyHP28hMIhTwWOACpILFQFIIEfvdiSbYOA7ap8IcumHYEBwjMDJ2vzqQUAQf+rAwS0Azq7KsGArYNYQvmtY/OOAIQcZsemQSyf/AaIr82DCEl5wc3VbgkEaGDwLXHVbgakWByNw9G2DY10cqEPwWlcCgNcK5CibTcAgvIoBAEfxw8G2YQjvYIKJwanwimgmi04AuJGcuyIcqoX+bGF1IJwmYrWKZymLp1KoC8vo1w7yAUMmwARgKDMeTg6l1YdjXQagYSobbgQDDBKrO4kjoDEmCKoD6UQQ7q1QV5ecPQdazzYTrnFwY8hEMX6IPc9kPdf3QMgz4BEi8Nw2tOBXN3/jHa4DgRhmCE4EWJ9R956IE+u7q+8gFxh1xhjEACG04Ls91cuf8khOAbNw8wYUVzsLqY19SFy5PLlyz/yT6BxaYzLojWO44OYIz3Ji68KoVXumaGzE5iRHxfXBXnqgdxFR1AfR7UBfhenxFIzRhi9epa0pr6FICTOqPAIyEFyijkspYhi9Rr55IJQaqGgVN8UNZtoCgUORCFPTgVijmgDjNPKpCTKsD7IMw/knYE0kcSPfEsiOcUs64M8PxTE8koZhIMhBOVYjsBnD+TxfgDREs8Of9Y8rD4EAKdirA4CkN6UQZxNuh6dmIE7uXhhEEcCSeCCvL46rFoTHIZj6pTDUI4AAkAc6bYLsndA2A6yxPpGO16n6HUMR+wU64NosWcYTGCtw0gYQBGOlFqAuuOBPFSQyZM4w1hSSVrxens8EPvedjMCsdQykhyCOFRSGuuDgEwHJHJES6PRwx9OkxgyrUsrOSK65YG8GoMIQH4UZ0lGuQyXlgUBMIQyyBVNLfZB11uzolUfIiso9DDLuZC0NMogj7QhahsfhBQ8f7ejyykEAmNKK6HEIFmxny9wiiLZqftmIAjGpSAwZro3B2RUGx0/5zh45BTiB5MsAwIwsMwGeaDFfr7Gu4kaD3VJtBSIqxszQMZZpRyyE/EqfEgo0zKZdTiIfVOgUEwqg/mNZa2LYWUQJjE72mxv6EMQxlKOgAT4u9QaZFnFPkQYsuIuBQK6q/L+jemCXFeQbK1ChhhDGBYCAUKZNgSPrzh9kGva2fPy8OwQH7gF5vrbDuhKQGJHDERJgrQyiqVAitdfcJZSyxxhBuscMYajxe8i2UfcKLV0r4VWaOuIOQKM3aXdgXd44vufUATR1PrtEyjK2ZAghstxAAjw8EBosGbVSMcK2zjJtWJHYbfUDwcaG6Z7ZUcGOxwvjKGPHgyx/FlxEEtYHTlIXOy6sQq6X1QcjDHfEQaQp4hRdmSvIIrQOfWNcUqcUvRG/UFSBaVhFDlIXCN2bOoyDAaJMgof1tkCe1z//sutco0UqkNwcpEZ4sdcR6Kkiq8V3yo7Ujh0OFlllqjm1AbPA+6G3So3xMI3BXxNeoHieLY768OM1IJwhwvRFZ4ZII4XGJ0WeB5iIOmfv7iNJCO4cnGzXCNu33A4yA0r8TO1pJxablkUbipEINd1+c0h9ODk9Q16KYpYEjsiEOmPLhW3ONiSQxxhDk871vDm8iBPipdYk3/DO1KL+iMQ+0aFdjgNEF9KQIE4egU7Qwh+VRNnFQrjnXJnz1ZchnGKwyQIzBMWO6SwbUyztDKRQ0Hizm4UNIK8MkPO1BOjmWQoqJBVDGEg5dQSAA9CAFRCYH9jOOAoHl2eHN8Om++IUERL1YiDc0smRecbT+kGaPluGM5fnZxnq1cxDIcV91YUFBFxIbhxK+69QFBU3IqiiN//A9iMf5/W3MSR09Nzr77x4Zc06RKQOiES3pUcq5zCADpGyOx/nMeaGhkEaujCiLb9fwbpQhRepRQmARCLHzbrZ/PquD+eW67G70funWb/nydWzJ2wCEM0oILnws2rN6/b3Lrfckc9kQWkCHHOG6JIkdlRI5n9TXlDNOkeZn8gKGT2P97jlz6xWQdHUdv/52BPS1z/KAck+pNDmE9Jk2fhU9U9/vJaDYejA8jKm38efiMCBEoDxsKh5NteJWgc8mnWxShvzUlXRjle1bpuL/4cI2mIOwQYfcTtaaQhaFMcE6LK4gVEHHTFIDnzN66VVVXOwNuDw3xM5DBB5Ke1UBRDbh3ev+/VsOB2+s+ulcQGJFOkm0cRH8Iiz9oGkt7/876+4qRd3KmxZ2V6yP9D31ZYMjwmOZpNISI0guDxYd3a1aJIfvsv5xgrEYdYjLpsDSzP7GFPiMksVt5egcDROv/nSy8ACrF2bYuRUo/8kq9aVMM5bPUwBzmWB/tUGXp8EyYtj6saBiM+JSCCkukhn9zwqY3hBgSC5CB7Asg6CnXHgGWcnFtoK02TQwj8XXIa6xj1iXu3eP7T+hJkF8Eexip5V/cYdzMKkcFef8QUpCmSbg0UUf4bB0rMe+N3S0UiyLRWpWL4x6nMqxzAPgqxGpAQGokU9sU4cbiSp9v+v1MkLuQagz8ui8SHB7m2RXDIZ2lFqqJKWX47j9SNVdwoSB0jhAZyLAgWMa5iSK9NMJSj27LoV4VLSRu18GOTS29xHC1AgiKAzFNxUUAmHUbgMO1xh4ogtRrmVNmFs4UQv5HkHAcB0aqK1GEM3lwbg/BubfuuVb+abdOyqTKUPhtqV3QltJH7kr3x0znItV09sw869B86x1iLeAYXFE2AM8ZvIKlbLTWR/S3//W6vlud2ZHQtojysKUhPies8m/Gq6FqIkZOMNga4foIdLjhO7OzBfmmYcOBavSKxkJDeXiL8Nz0UBCkSiAHDpZBPefrz8NUC5OnOXYta6xkY85qCf6ir3LOEInKIa+X/G49njZA33MgbtR7Rdu7seeRWH2+XyBtSkJgphWWNcbwSAhOkgfxpTYEBdypGHGVpu/f4DyB7FosP51SQYk1B+sVPAwEoLkkDqe/xcx3FHmn1oeJVK88uL+34oMh9/vnsEWz2oiqUVEuGh9uy6uZ4XBpxy0GYTaVJ5Ng2gl0oqqm4D7iMtyBAYSAZg0e5AIABQ+ZVe7mMn4X6tqbIwrVMhV6RCISF+EIIwdCfIomEuLKskWdZVah3BDiAiRH+hqGqsG0NpOcRF4Jxy7AocL0yDAxCoG8Johy/wYyaLEXx6iy1VWVHG0iPkUcUIvKNawqbjSGQ4FQLlmX1Oi71CBDWup2JQ1SVDPeNinwfV3R1qOpTQBmkhAM5Bg6XpQuyJsTIBiiWWlNwjsmCP5V2eZuAeEK8tMjggkLu81dDXClibDiCvI1DekBQYiwPMShme/MvHMe3jSDfLMA7ibJM8785/QkFUgiDPmrLBpdK7vH3KxxUufl4W9sp4SBGej4XDULeSLIGII4AyITSD6ubzXqAgZH//mzb1BaZ/djCsyx1iJkcSzFIkwcIF2ShCByzhVo9PY107685WqAPily4byUVXuVaKInBIIV9MdwKEBXDPt2jxglgea2mPX/L8WTbBHLD0rmPt87RVw6DIGMCVDWk2wRIv1Ba3OPXlh8L+xc9CPYdAiEMU33bDAwghGOOcmxUZCxxp0lgcR1l1YLlL0GubeumeaQlQ10fWXJN4TcS5ZgSuX7UUCS7/mcM2mUsZqf/JhEaAq6ljtXdaXMMDmwM8QVHVKRBpCtVBpG4FduxB/7McWXfbyA73ppf9RBZ5PEohYux0AHHioqgxxTfqRK/bWAe/qNXLTCIkde2UEVpqIZXCQJONabxxJaNCPahuM2jYz7G82ev+h1kmooryZJVbqcwQaQtibK+gfQoj/f4E4tnLv6QzSPIdSJ8s6U/RSkKwx7llSLxHn+zpUk4xDOCXExrdkkdEeTrb1NxY4EkhjhqLKnH+vXrGwgk7lb1tTnrJzuTlYgPty1lz89rZIipGEsPU9IZBTDRGoOhLDOfQos/YCx5WH2pIuXg52PblrR3t7tT2WAVIVoHCBgZiD7LhCIWJBmFfqIdDBh9vA123wtDU2Mpl5q9qsYQEPEsUWSkyOVYZe/SG/x7R3+68n5bbne8Yre8t6RnzVL4k2LIayDYH+6/F/cG7i6E+HTo5LbCHtwyMbxUjwg+44AihVAGbQ7y2z3+tMbNKaQ7dARXyu22DlXM/5Y0UKAoUDpIuQLq3qRvfsCttfPP/0jxUQB6XRKcilksEEuOuD0qcCxAhKQerKxFEBVESP6A8aAFBzVuSIBMnLBKDQgmECiiHmVwWDO7kVN8ue07HLrEY1IkqwrkjfZdEkE7+fwO4msKGUV1T4vtP7GU49yUxknicDjGAkWsTORAAPLne/zVGbdp0+xlZLj0+mcDcI58dUReDIQMBAOkyuQKAQsMk1PpZ7U8v2Nc/+Hr6pYAF2u5WWhgBYXYkoqkEAD8KTrY3gfh1lv5Aw0NlkC1BZvVkFZgLFAiSIpRhLj7Vcdg8+zcuTvnfSq+rkV312IxGy92OXS8LTE0wv8BhDK9FASKvl3mH/b4pXkaD04VV9XzGK8htsqzrPgfYJKxag5xgYCClbYFB1PxUONqw6PSWsRaAqEdIPHKWT7oWnMzDLb3vS0EIWvMNIvFNkiIj6TEBSUK0nCW5Teuq5oEDpeFg3vj9v7mCAFJrHLrsmppClFDekBgKC75wsDpT+5BaMO7/PDk0glwDA1p1VAlgiRaKAuuVd3j5wrHfJIVEeQLlC2OEOFLpL9JiXq8LW0rtn0AEQT5pIqQ/H47bd9/+es1Be1ZOUwxkoLEA9wkUY5BkVWlGYVzTNv7MEAhDDpYBUXY5VCC1KucIJXEKVyOCaS6N/fbCbfeuD3Q92gshaNEseOkCNoSq8Ypl8JJtm9f5rfmyhD3xoWBYVfc5dBf2ehHDBhwKTDq0jAFMSnAAKS1usBVBqLDiDqIi6FdslIVBip5UoQ6ygeGRiEgFux/vsOIHt2v9DExPDisrVWSJdfVpSVTQCjqWcdWgmNgUdcq7vHPQ1U4y2pnkRYFlf1EiRswgiRwBBQkSbxqffcqeVWRFKNxzHe1yOOL5MF6OnsdYbRVio7BmkI2FZc+EcMxnGGBsYiREOa/z5mMZErd/XeFmO5xhOF2AUHayPNGqYVi2LvdOYzCQRID47eT9vaTxAZ5w/LfEqEhDYw1SJJmDkiqvOGhgW1ZlkD47MkcidgeplEWFz5xahDJ2qd5Vx3iRHkGMakhNkFs37IlBaGk4hAoxVWYijdLp7BgFKmvGnSdwTG2azdy6LOsvHHGtSa8zP/G/YqVwyCGOVYV5WAUHGhC5hgxjKODQNINd+o03ltF4gaGdkxjsQyhe1M2UCGIQZhjdQZvW8SWJRUJEyWj4TLgYh7ed2r0yeay9RYHhiCB5fcESJhvsed3EOYboyJzqbg4N9LnG2F3oM7gdUmSkwCBHLDsBoQlNweZR1uSiEBMawos86DDgoPt8XLITRlGKWKcixTyogh3zpa+N74orzxlEN7xJI9w/LaO+79zcQtwUoc8xIaYkgDidWG3eSpu9vvtJgt1gVhyFuuh8V9TcVCgsAiX1pXoAICo/Tbohhtnm3XdkFscsxDl9vifBckkmSMcOaQbUXYryLAvME/FwZqLEYvyv5qKV0tu+uThHWYd+vqIO2PgWuHGmTy/3eNXQfwuymalCBaivCAxjmqtCoYlKpJgpsiqpTE8ffgYZZaUIvqIgZHMOHKn6gljfXAq4fGkIV0gseE3WVPwOmQddUiniOdf1Ka0UWRAB8jrQ+QIRS4+FRUxm+Obu7FGYChrfQ00Wd/5/Xh0OvnL63Qn6QYEJCJAARLXFNb9tqYgHPFYFQx/3OMAYE0x4NrbAH4Tg6rqtzgHhLBQDHYLFkOVdGE2Tm3ITs2fhlrr8hnHPI81mF4b/sGWJVPx1jEV95WRuDk+7gtoq5YUMjUYbKGgNIRjSZbdHaTXtb3X0GB736qqZMh1ij8fOowMMULAUITfHIvgyIIdEuorw5C2IMg2nYAopn/1qgKOZS5FBiQ8oEiD/Q9rCvoT4REXQZ2iXlOo0zgpMCS/xCLQMoUYvco5+gWONAcahStRzccLDhXDSAjvCSSNjqiIQrCmsM5YfrvH/7sU4TCP0iwlhrQ8LMKGTWfRTA7G7uBc+gVECVyN1hRBP9SG5RXAesGtArHQsEb6Gz0relBuvwCZEl3fCep1VgAAAABJRU5ErkJggg=="
            }
        },
        function(t, e) {
            t.exports = {
                brand: "#FFE411",
                darkBrand: "#FECB11",
                accent: "#03A9F4",
                blue: "#03A9F4",
                red: "#E4583E",
                amber: "#FFAF38",
                green: "#1BAF5D",
                purple: "#797EC9",
                white: "#FFFFFF",
                gray97: "#F7F7F7",
                gray93: "#EEEEEE",
                gray90: "#E5E5E5",
                gray85: "#D9D9D9",
                gray80: "#CCCCCC",
                gray65: "#A6A6A6",
                gray61: "#9B9B9B",
                gray50: "#808080",
                black: "#383838",
                pureBlack: "#000000"
            }
        },
        function(t, e) {
            t.exports = {
               
            }
        }])
    })
},
function(t, e, n) { (function(e, r) { !
        function(e, n) {
            t.exports = n()
        } (0,
        function() {
            "use strict";
            function t(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }
            function o(t) {
                return "function" == typeof t
            }
            function i(t) {
                H = t
            }
            function a(t) {
                V = t
            }
            function s() {
                return void 0 !== G ?
                function() {
                    G(u)
                }: c()
            }
            function c() {
                var t = setTimeout;
                return function() {
                    return t(u, 1)
                }
            }
            function u() {
                for (var t = 0; t < U; t += 2) { (0, J[t])(J[t + 1]),
                    J[t] = void 0,
                    J[t + 1] = void 0
                }
                U = 0
            }
            function l(t, e) {
                var n = this,
                r = new this.constructor(h);
                void 0 === r[Z] && C(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    V(function() {
                        return M(o, r, i, n._result)
                    })
                } else E(n, r, t, e);
                return r
            }
            function f(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(h);
                return w(n, t),
                n
            }
            function h() {}
            function p() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function d() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function g(t) {
                try {
                    return t.then
                } catch(t) {
                    return nt.error = t,
                    nt
                }
            }
            function y(t, e, n, r) {
                try {
                    t.call(e, n, r)
                } catch(t) {
                    return t
                }
            }
            function v(t, e, n) {
                V(function(t) {
                    var r = !1,
                    o = y(n, e,
                    function(n) {
                        r || (r = !0, e !== n ? w(t, n) : k(t, n))
                    },
                    function(e) {
                        r || (r = !0, S(t, e))
                    },
                    "Settle: " + (t._label || " unknown promise")); ! r && o && (r = !0, S(t, o))
                },
                t)
            }
            function m(t, e) {
                e._state === tt ? k(t, e._result) : e._state === et ? S(t, e._result) : E(e, void 0,
                function(e) {
                    return w(t, e)
                },
                function(e) {
                    return S(t, e)
                })
            }
            function b(t, e, n) {
                e.constructor === t.constructor && n === l && e.constructor.resolve === f ? m(t, e) : n === nt ? (S(t, nt.error), nt.error = null) : void 0 === n ? k(t, e) : o(n) ? v(t, e, n) : k(t, e)
            }
            function w(e, n) {
                e === n ? S(e, p()) : t(n) ? b(e, n, g(n)) : k(e, n)
            }
            function x(t) {
                t._onerror && t._onerror(t._result),
                T(t)
            }
            function k(t, e) {
                t._state === $ && (t._result = e, t._state = tt, 0 !== t._subscribers.length && V(T, t))
            }
            function S(t, e) {
                t._state === $ && (t._state = et, t._result = e, V(x, t))
            }
            function E(t, e, n, r) {
                var o = t._subscribers,
                i = o.length;
                t._onerror = null,
                o[i] = e,
                o[i + tt] = n,
                o[i + et] = r,
                0 === i && t._state && V(T, t)
            }
            function T(t) {
                var e = t._subscribers,
                n = t._state;
                if (0 !== e.length) {
                    for (var r = void 0,
                    o = void 0,
                    i = t._result,
                    a = 0; a < e.length; a += 3) r = e[a],
                    o = e[a + n],
                    r ? M(n, r, o, i) : o(i);
                    t._subscribers.length = 0
                }
            }
            function O() {
                this.error = null
            }
            function _(t, e) {
                try {
                    return t(e)
                } catch(t) {
                    return rt.error = t,
                    rt
                }
            }
            function M(t, e, n, r) {
                var i = o(n),
                a = void 0,
                s = void 0,
                c = void 0,
                u = void 0;
                if (i) {
                    if (a = _(n, r), a === rt ? (u = !0, s = a.error, a.error = null) : c = !0, e === a) return void S(e, d())
                } else a = r,
                c = !0;
                e._state !== $ || (i && c ? w(e, a) : u ? S(e, s) : t === tt ? k(e, a) : t === et && S(e, a))
            }
            function I(t, e) {
                try {
                    e(function(e) {
                        w(t, e)
                    },
                    function(e) {
                        S(t, e)
                    })
                } catch(e) {
                    S(t, e)
                }
            }
            function j() {
                return ot++
            }
            function C(t) {
                t[Z] = ot++,
                t._state = void 0,
                t._result = void 0,
                t._subscribers = []
            }
            function A() {
                return new Error("Array Methods must be provided an Array")
            }
            function A() {
                return new Error("Array Methods must be provided an Array")
            }
            function L(t) {
                return new it(this, t).promise
            }
            function P(t) {
                var e = this;
                return new e(z(t) ?
                function(n, r) {
                    for (var o = t.length,
                    i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
                }: function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }
            function D(t) {
                var e = this,
                n = new e(h);
                return S(n, t),
                n
            }
            function N() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function R() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function B() {
                var t = void 0;
                if (void 0 !== r) t = r;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch(t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch(t) {}
                    if ("[object Promise]" === n && !e.cast) return
                }
                t.Promise = at
            }
            var F = void 0;
            F = Array.isArray ? Array.isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var z = F,
            U = 0,
            G = void 0,
            H = void 0,
            V = function(t, e) {
                J[U] = t,
                J[U + 1] = e,
                2 === (U += 2) && (H ? H(u) : X())
            },
            W = "undefined" != typeof window ? window: void 0,
            Y = W || {},
            Q = Y.MutationObserver || Y.WebKitMutationObserver,
            q = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
            K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            J = new Array(1e3),
            X = void 0;
            X = q ?
            function() {
                return function() {
                    return e.nextTick(u)
                }
            } () : Q ?
            function() {
                var t = 0,
                e = new Q(u),
                n = document.createTextNode("");
                return e.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = t = ++t % 2
                }
            } () : K ?
            function() {
                var t = new MessageChannel;
                return t.port1.onmessage = u,
                function() {
                    return t.port2.postMessage(0)
                }
            } () : void 0 === W ?
            function() {
                try {
                    var t = n(130);
                    return G = t.runOnLoop || t.runOnContext,
                    s()
                } catch(t) {
                    return c()
                }
            } () : c();
            var Z = Math.random().toString(36).substring(16),
            $ = void 0,
            tt = 1,
            et = 2,
            nt = new O,
            rt = new O,
            ot = 0,
            it = function() {
                function t(t, e) {
                    this._instanceConstructor = t,
                    this.promise = new t(h),
                    this.promise[Z] || C(this.promise),
                    z(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && k(this.promise, this._result))) : S(this.promise, A())
                }
                return t.prototype._enumerate = function(t) {
                    for (var e = 0; this._state === $ && e < t.length; e++) this._eachEntry(t[e], e)
                },
                t.prototype._eachEntry = function(t, e) {
                    var n = this._instanceConstructor,
                    r = n.resolve;
                    if (r === f) {
                        var o = g(t);
                        if (o === l && t._state !== $) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof o) this._remaining--,
                        this._result[e] = t;
                        else if (n === at) {
                            var i = new n(h);
                            b(i, t, o),
                            this._willSettleAt(i, e)
                        } else this._willSettleAt(new n(function(e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                },
                t.prototype._settledAt = function(t, e, n) {
                    var r = this.promise;
                    r._state === $ && (this._remaining--, t === et ? S(r, n) : this._result[e] = n),
                    0 === this._remaining && k(r, this._result)
                },
                t.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    E(t, void 0,
                    function(t) {
                        return n._settledAt(tt, e, t)
                    },
                    function(t) {
                        return n._settledAt(et, e, t)
                    })
                },
                t
            } (),
            at = function() {
                function t(e) {
                    this[Z] = j(),
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    h !== e && ("function" != typeof e && N(), this instanceof t ? I(this, e) : R())
                }
                return t.prototype.
                catch = function(t) {
                    return this.then(null, t)
                },
                t.prototype.
                finally = function(t) {
                    var e = this,
                    n = e.constructor;
                    return e.then(function(e) {
                        return n.resolve(t()).then(function() {
                            return e
                        })
                    },
                    function(e) {
                        return n.resolve(t()).then(function() {
                            throw e
                        })
                    })
                },
                t
            } ();
            return at.prototype.then = l,
            at.all = L,
            at.race = P,
            at.resolve = f,
            at.reject = D,
            at._setScheduler = i,
            at._setAsap = a,
            at._asap = V,
            at.polyfill = B,
            at.Promise = at,
            at
        })
    }).call(e, n(88), n(54))
},
function(t, e, n) {
    n(131),
    t.exports = self.fetch.bind(self)
},
, ,
function(t, e, n) {
    "use strict";
    function r(t) {
        return null == t ? "": "" + t
    }
    function o(t, e, n) {
        t.forEach(function(t) {
            e[t] && (n[t] = e[t])
        })
    }
    function i(t, e, n) {
        function r(t) {
            return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
        }
        function o() {
            return ! t || "string" == typeof t
        }
        for (var i = "string" != typeof e ? [].concat(e) : e.split("."); i.length > 1;) {
            if (o()) return {};
            var a = r(i.shift()); ! t[a] && n && (t[a] = new n),
            t = t[a]
        }
        return o() ? {}: {
            obj: t,
            k: r(i.shift())
        }
    }
    function a(t, e, n) {
        var r = i(t, e, Object);
        r.obj[r.k] = n
    }
    function s(t, e, n, r) {
        var o = i(t, e, Object),
        a = o.obj,
        s = o.k;
        a[s] = a[s] || [],
        r && (a[s] = a[s].concat(n)),
        r || a[s].push(n)
    }
    function c(t, e) {
        var n = i(t, e),
        r = n.obj,
        o = n.k;
        if (r) return r[o]
    }
    function u(t, e, n) {
        for (var r in e) r in t ? "string" == typeof t[r] || t[r] instanceof String || "string" == typeof e[r] || e[r] instanceof String ? n && (t[r] = e[r]) : u(t[r], e[r], n) : t[r] = e[r];
        return t
    }
    function l(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    function f(t) {
        return "string" == typeof t ? t.replace(/[&<>"'\/]/g,
        function(t) {
            return h[t]
        }) : t
    }
    e.e = r,
    e.a = o,
    e.h = a,
    e.f = s,
    e.d = c,
    e.b = u,
    e.g = l,
    e.c = f;
    var h = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.makeCancelable = function(t) {
        var e = !1,
        n = new Promise(function(n, r) {
            t.then(function(t) {
                return e ? r({
                    isCanceled: !0
                }) : n(t)
            }),
            t.
            catch(function(t) {
                return r(e ? {
                    isCanceled: !0
                }: t)
            })
        });
        return n.cancel = function() {
            e = !0
        },
        n
    },
    e.createEmptyPromise = function() {
        var t, e = new Promise(function(e, n) {
            t = {
                resolve: e,
                reject: n
            }
        });
        return e.resolve = t.resolve,
        e.reject = t.reject,
        e
    }
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
},
function(t, e) {
    var n = 0,
    r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "": t, ")_", (++n + r).toString(36))
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(103),
    n(128),
    n(94).polyfill(),
    n(95);
    var r = n(132),
    o = n(133);
    r.init({
        hacks: o.
    default
    })
},
function(t, e, n) {
    n(59),
    n(66),
    n(72),
    n(118),
    t.exports = n(25).Map
},
function(t, e, n) {
    var r = n(37),
    o = n(38);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(o(e)),
            c = r(n),
            u = s.length;
            return c < 0 || c >= u ? t ? "": void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i: t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
},
function(t, e) {
    t.exports = !1
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e, n) {
    "use strict";
    var r = n(68),
    o = n(36),
    i = n(41),
    a = {};
    n(17)(a, n(4)("iterator"),
    function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
},
function(t, e, n) {
    var r = n(18),
    o = n(19),
    i = n(69);
    t.exports = n(11) ? Object.defineProperties: function(t, e) {
        o(t);
        for (var n, a = i(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
        return t
    }
},
function(t, e, n) {
    var r = n(12),
    o = n(32),
    i = n(111)(!1),
    a = n(40)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
        c = 0,
        u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; e.length > c;) r(s, n = e[c++]) && (~i(u, n) || u.push(n));
        return u
    }
},
function(t, e, n) {
    var r = n(61);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
},
function(t, e, n) {
    var r = n(32),
    o = n(70),
    i = n(112);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = r(e),
            u = o(c.length),
            l = i(a, u);
            if (t && n != n) {
                for (; u > l;) if ((s = c[l++]) != s) return ! 0
            } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
            return ! t && -1
        }
    }
},
function(t, e, n) {
    var r = n(37),
    o = Math.max,
    i = Math.min;
    t.exports = function(t, e) {
        return t = r(t),
        t < 0 ? o(t + e, 0) : i(t, e)
    }
},
function(t, e, n) {
    var r = n(6).document;
    t.exports = r && r.documentElement
},
function(t, e, n) {
    var r = n(12),
    o = n(115),
    i = n(40)("IE_PROTO"),
    a = Object.prototype;
    t.exports = Object.getPrototypeOf ||
    function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? a: null
    }
},
function(t, e, n) {
    var r = n(38);
    t.exports = function(t) {
        return Object(r(t))
    }
},
function(t, e, n) {
    "use strict";
    var r = n(117),
    o = n(73),
    i = n(26),
    a = n(32);
    t.exports = n(39)(Array, "Array",
    function(t, e) {
        this._t = a(t),
        this._i = 0,
        this._k = e
    },
    function() {
        var t = this._t,
        e = this._k,
        n = this._i++;
        return ! t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    },
    "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
},
function(t, e, n) {
    var r = n(4)("unscopables"),
    o = Array.prototype;
    void 0 == o[r] && n(17)(o, r, {}),
    t.exports = function(t) {
        o[r][t] = !0
    }
},
function(t, e, n) {
    "use strict";
    var r = n(74),
    o = n(42);
    t.exports = n(79)("Map",
    function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    },
    {
        get: function(t) {
            var e = r.getEntry(o(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(o(this, "Map"), 0 === t ? 0 : t, e)
        }
    },
    r, !0)
},
function(t, e, n) {
    var r = n(19);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch(e) {
            var i = t.
            return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
},
function(t, e, n) {
    var r = n(26),
    o = n(4)("iterator"),
    i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
},
function(t, e, n) {
    var r = n(60),
    o = n(4)("iterator"),
    i = n(26);
    t.exports = n(25).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
},
function(t, e, n) {
    "use strict";
    var r = n(6),
    o = n(18),
    i = n(11),
    a = n(4)("species");
    t.exports = function(t) {
        var e = r[t];
        i && e && !e[a] && o.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
},
function(t, e, n) {
    var r = n(4)("iterator"),
    o = !1;
    try {
        var i = [7][r]();
        i.
        return = function() {
            o = !0
        },
        Array.from(i,
        function() {
            throw 2
        })
    } catch(t) {}
    t.exports = function(t, e) {
        if (!e && !o) return ! 1;
        var n = !1;
        try {
            var i = [7],
            a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            },
            i[r] = function() {
                return a
            },
            t(i)
        } catch(t) {}
        return n
    }
},
function(t, e, n) {
    var r = n(7),
    o = n(125).set;
    t.exports = function(t, e, n) {
        var i, a = e.constructor;
        return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i),
        t
    }
},
function(t, e, n) {
    var r = n(7),
    o = n(19),
    i = function(t, e) {
        if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ?
        function(t, e, r) {
            try {
                r = n(31)(Function.call, n(126).f(Object.prototype, "__proto__").set, 2),
                r(t, []),
                e = !(t instanceof Array)
            } catch(t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n),
                e ? t.__proto__ = n: r(t, n),
                t
            }
        } ({},
        !1) : void 0),
        check: i
    }
},
function(t, e, n) {
    var r = n(127),
    o = n(36),
    i = n(32),
    a = n(65),
    s = n(12),
    c = n(63),
    u = Object.getOwnPropertyDescriptor;
    e.f = n(11) ? u: function(t, e) {
        if (t = i(t), e = a(e, !0), c) try {
            return u(t, e)
        } catch(t) {}
        if (s(t, e)) return o(!r.f.call(t, e), t[e])
    }
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
function(t, e, n) {
    n(59),
    n(66),
    n(72),
    n(129),
    t.exports = n(25).Set
},
function(t, e, n) {
    "use strict";
    var r = n(74),
    o = n(42);
    t.exports = n(79)("Set",
    function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    },
    {
        add: function(t) {
            return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    },
    r)
},
function(t, e) {},
function(t, e) { !
    function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function n(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function r(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return v.iterable && (e[Symbol.iterator] = function() {
                return e
            }),
            e
        }
        function o(t) {
            this.map = {},
            t instanceof o ? t.forEach(function(t, e) {
                this.append(e, t)
            },
            this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            },
            this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            },
            this)
        }
        function i(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }
        function a(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                },
                t.onerror = function() {
                    n(t.error)
                }
            })
        }
        function s(t) {
            var e = new FileReader,
            n = a(e);
            return e.readAsArrayBuffer(t),
            n
        }
        function c(t) {
            var e = new FileReader,
            n = a(e);
            return e.readAsText(t),
            n
        }
        function u(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
            return n.join("")
        }
        function l(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function f() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t, t) if ("string" == typeof t) this._bodyText = t;
                else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (v.arrayBuffer && v.blob && b(t)) this._bodyArrayBuffer = l(t.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = l(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            },
            v.blob && (this.blob = function() {
                var t = i(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            },
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }),
            this.text = function() {
                var t = i(this);
                if (t) return t;
                if (this._bodyBlob) return c(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(u(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            },
            v.formData && (this.formData = function() {
                return this.text().then(d)
            }),
            this.json = function() {
                return this.text().then(JSON.parse)
            },
            this
        }
        function h(t) {
            var e = t.toUpperCase();
            return x.indexOf(e) > -1 ? e: t
        }
        function p(t, e) {
            e = e || {};
            var n = e.body;
            if (t instanceof p) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new o(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function d(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            e
        }
        function g(t) {
            var e = new o;
            return t.split(/\r?\n/).forEach(function(t) {
                var n = t.split(":"),
                r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o)
                }
            }),
            e
        }
        function y(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = "status" in e ? e.status: 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText" in e ? e.statusText: "OK",
            this.headers = new o(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            var v = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t &&
                function() {
                    try {
                        return new Blob,
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } (),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (v.arrayBuffer) var m = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            b = function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            },
            w = ArrayBuffer.isView ||
            function(t) {
                return t && m.indexOf(Object.prototype.toString.call(t)) > -1
            };
            o.prototype.append = function(t, r) {
                t = e(t),
                r = n(r);
                var o = this.map[t];
                this.map[t] = o ? o + "," + r: r
            },
            o.prototype.delete = function(t) {
                delete this.map[e(t)]
            },
            o.prototype.get = function(t) {
                return t = e(t),
                this.has(t) ? this.map[t] : null
            },
            o.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            },
            o.prototype.set = function(t, r) {
                this.map[e(t)] = n(r)
            },
            o.prototype.forEach = function(t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            },
            o.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }),
                r(t)
            },
            o.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                r(t)
            },
            o.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }),
                r(t)
            },
            v.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function() {
                return new p(this, {
                    body: this._bodyInit
                })
            },
            f.call(p.prototype),
            f.call(y.prototype),
            y.prototype.clone = function() {
                return new y(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            },
            y.error = function() {
                var t = new y(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            };
            var k = [301, 302, 303, 307, 308];
            y.redirect = function(t, e) {
                if ( - 1 === k.indexOf(e)) throw new RangeError("Invalid status code");
                return new y(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            },
            t.Headers = o,
            t.Request = p,
            t.Response = y,
            t.fetch = function(t, e) {
                return new Promise(function(n, r) {
                    var o = new p(t, e),
                    i = new XMLHttpRequest;
                    i.onload = function() {
                        var t = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: g(i.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in i ? i.responseURL: t.headers.get("X-Request-URL");
                        var e = "response" in i ? i.response: i.responseText;
                        n(new y(e, t))
                    },
                    i.onerror = function() {
                        r(new TypeError("Network request failed"))
                    },
                    i.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    },
                    i.open(o.method, o.url, !0),
                    "include" === o.credentials && (i.withCredentials = !0),
                    "responseType" in i && v.blob && (i.responseType = "blob"),
                    o.headers.forEach(function(t, e) {
                        i.setRequestHeader(e, t)
                    }),
                    i.send(void 0 === o._bodyInit ? null: o._bodyInit)
                })
            },
            t.fetch.polyfill = !0
        }
    } ("undefined" != typeof self ? self: this)
},
function(t, e, n) {
    var r, o, i; !
    function() { !
        function(n, a) {
            "use strict";
            o = [],
            r = a,
            void 0 !== (i = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = i)
        } (0,
        function() {
            "use strict";
            function t(t, e) {
                var n;
                return function() {
                    var r = this,
                    o = arguments,
                    i = function() {
                        t.apply(r, o)
                    };
                    clearTimeout(n),
                    n = setTimeout(i, e)
                }
            }
            function e() {
                try {
                    return window.self !== window.top
                } catch(t) {
                    return ! 0
                }
            }
            function n(n) {
                if (!w) {
                    if (!0 === n && (n = {
                        force: !0
                    }), y = n || {},
                    y.isMobileSafari = M, y.isBadStockAndroid = I, !y.ignoreVmax || y.force || O || (T = !1), O || !y.force && !M && !T && !I && !_ && (!y.hacks || !y.hacks.required(y))) return window.console && O && console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),
                    {
                        init: function() {}
                    };
                    window.dispatchEvent(new j("viewport-units-buggyfill-init")),
                    y.hacks && y.hacks.initialize(y),
                    w = !0,
                    b = document.createElement("style"),
                    b.id = "patched-viewport",
                    document[y.appendToBody ? "body": "head"].appendChild(b),
                    h(function() {
                        var n = t(o, y.refreshDebounceWait || 100);
                        window.addEventListener("orientationchange", n, !0),
                        window.addEventListener("pageshow", n, !0),
                        (y.force || T || e()) && (window.addEventListener("resize", n, !0), y._listeningToResize = !0),
                        y.hacks && y.hacks.initializeEvents(y, o, n),
                        o()
                    })
                }
            }
            function r() {
                b.textContent = c(),
                b.parentNode.appendChild(b),
                window.dispatchEvent(new j("viewport-units-buggyfill-style"))
            }
            function o() {
                w && (a(), setTimeout(function() {
                    r()
                },
                1))
            }
            function i(t) {
                try {
                    if (!t.cssRules) return
                } catch(t) {
                    if ("SecurityError" !== t.name) throw t;
                    return
                }
                for (var e = [], n = 0; n < t.cssRules.length; n++) {
                    var r = t.cssRules[n];
                    e.push(r)
                }
                return e
            }
            function a() {
                return m = [],
                E.call(document.styleSheets,
                function(t) {
                    var e = i(t);
                    e && "patched-viewport" !== t.ownerNode.id && "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") && (t.media && t.media.mediaText && window.matchMedia && !window.matchMedia(t.media.mediaText).matches || E.call(e, s))
                }),
                m
            }
            function s(t) {
                if (7 === t.type) {
                    var e;
                    try {
                        e = t.cssText
                    } catch(t) {
                        return
                    }
                    return k.lastIndex = 0,
                    void(k.test(e) && !S.test(e) && (m.push([t, null, e]), y.hacks && y.hacks.findDeclarations(m, t, null, e)))
                }
                if (!t.style) {
                    if (!t.cssRules) return;
                    return void E.call(t.cssRules,
                    function(t) {
                        s(t)
                    })
                }
                E.call(t.style,
                function(e) {
                    var n = t.style.getPropertyValue(e);
                    t.style.getPropertyPriority(e) && (n += " !important"),
                    k.lastIndex = 0,
                    k.test(n) && (m.push([t, e, n]), y.hacks && y.hacks.findDeclarations(m, t, e, n))
                })
            }
            function c() {
                v = f();
                var t, e, n = [],
                r = [];
                return m.forEach(function(o) {
                    var i = u.apply(null, o),
                    a = i.selector.length ? i.selector.join(" {\n") + " {\n": "",
                    s = new Array(i.selector.length + 1).join("\n}");
                    if (!a || a !== t) return r.length && (n.push(t + r.join("\n") + e), r.length = 0),
                    void(a ? (t = a, e = s, r.push(i.content)) : (n.push(i.content), t = null, e = null));
                    a && !t && (t = a, e = s),
                    r.push(i.content)
                }),
                r.length && n.push(t + r.join("\n") + e),
                _ && n.push("* { content: normal !important; }"),
                n.join("\n\n")
            }
            function u(t, e, n) {
                var r, o = [];
                r = n.replace(k, l),
                y.hacks && (r = y.hacks.overwriteDeclaration(t, e, r)),
                e && (o.push(t.selectorText), r = e + ": " + r + ";");
                for (var i = t.parentRule; i;) i.media ? o.unshift("@media " + i.media.mediaText) : i.conditionText && o.unshift("@supports " + i.conditionText),
                i = i.parentRule;
                return {
                    selector: o,
                    content: r
                }
            }
            function l(t, e, n) {
                var r = v[n];
                return parseFloat(e) / 100 * r + "px"
            }
            function f() {
                var t = window.innerHeight,
                e = window.innerWidth;
                return {
                    vh: t,
                    vw: e,
                    vmax: Math.max(e, t),
                    vmin: Math.min(e, t)
                }
            }
            function h(t) {
                var e = 0,
                n = function() {--e || t()
                };
                E.call(document.styleSheets,
                function(t) {
                    t.href && p(t.href) !== p(location.href) && "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") && (e++, d(t.ownerNode, n))
                }),
                e || t()
            }
            function p(t) {
                return t.slice(0, t.indexOf("/", t.indexOf("://") + 3))
            }
            function d(t, e) {
                g(t.href,
                function() {
                    var n = document.createElement("style");
                    n.media = t.media,
                    n.setAttribute("data-href", t.href),
                    n.textContent = this.responseText,
                    t.parentNode.replaceChild(n, t),
                    e()
                },
                e)
            }
            function g(t, e, n) {
                var r = new XMLHttpRequest;
                if ("withCredentials" in r) r.open("GET", t, !0);
                else {
                    if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                    r = new XDomainRequest,
                    r.open("GET", t)
                }
                return r.onload = e,
                r.onerror = n,
                r.send(),
                r
            }
            var y, v, m, b, w = !1,
            x = window.navigator.userAgent,
            k = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
            S = /(https?:)?\/\//,
            E = [].forEach,
            T = /MSIE [0-9]\./i.test(x),
            O = /MSIE [0-8]\./i.test(x),
            _ = x.indexOf("Opera Mini") > -1,
            M = /(iPhone|iPod|iPad).+AppleWebKit/i.test(x) &&
            function() {
                var t = x.match(/OS (\d)/);
                return t && t.length > 1 && parseInt(t[1]) < 10
            } (),
            I = function() {
                return x.indexOf(" Android ") > -1 && (x.indexOf("Version/") > -1 && parseFloat((x.match("Android ([0-9.]+)") || [])[1]) <= 4.4)
            } ();
            T || (T = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));
            try {
                new j("test")
            } catch(t) {
                var j = function(t, e) {
                    var n;
                    return e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    },
                    n = document.createEvent("CustomEvent"),
                    n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                    n
                };
                j.prototype = window.Event.prototype,
                window.CustomEvent = j
            }
            return {
                version: "0.6.1",
                findProperties: a,
                getCss: c,
                init: n,
                refresh: o
            }
        })
    } ()
},
function(t, e, n) {
    var r, o, i; !
    function() { !
        function(n, a) {
            "use strict";
            o = [],
            r = a,
            void 0 !== (i = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = i)
        } (0,
        function() {
            "use strict";
            function t(t, r, o, i) {
                "content" === o && i.indexOf("viewport-units-buggyfill") > -1 && i.replace(n, "").split(";").forEach(function(n) {
                    var o = n.split(":");
                    if (2 === o.length) {
                        var i = o[0].trim();
                        if ("viewport-units-buggyfill" !== i) {
                            var a = o[1].trim();
                            if (t.push([r, i, a]), e.test(a)) {
                                var s = a.replace(e, "-webkit-calc(");
                                t.push([r, i, s])
                            }
                        }
                    }
                })
            }
            var e = /calc\(/g,
            n = /["']/g,
            r = window.navigator.userAgent,
            o = /MSIE [0-9]\./i.test(r);
            return o || (o = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./)),
            {
                required: function(t) {
                    return t.isMobileSafari || o
                },
                initialize: function() {},
                initializeEvents: function(t, e, n) {
                    t.force || o && !t._listeningToResize && (window.addEventListener("resize", n, !0), t._listeningToResize = !0)
                },
                findDeclarations: function(e, n, r, o) {
                    null !== r && t(e, n, r, o)
                },
                overwriteDeclaration: function(t, e, n) {
                    return o && "filter" === e && (n = n.replace(/px/g, "")),
                    n
                }
            }
        })
    } ()
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.CONFIG = {
        NAME: "Jike Hybrid",
        ANALYTICS: {
            GOOGLE: "UA-73053793-12",
            USER_ID: "undefined"
        },
        WECHAT: {
            APPID: "wxdb7628ad99d93dc4",
            SIGNATURE_URL: ""
        },
        SENTRY_DSN: ""
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(53),
    o = n(44),
    i = function() {
        var t = o.CONFIG;
        return new r.DebugWrapper({
            isDebug: o.DEBUG,
            sentryDsn: t.SENTRY_DSN
        })
    };
    e.enableDevTool = function(t) {
        var e = o.CONFIG;
        o.mountAppInfo(t),
        o.mountJKD(i()),
        o.DEBUG && (console.groupCollapsed("Dev Info"), console.log("NAME:", e.NAME), console.log("EXPOSED:", "jike"), console.groupEnd(), window.jike = o)
    }
},
function(t, e, n) { !
    function(e, n) {
        t.exports = n()
    } (0,
    function() {
        return function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, e),
                o.l = !0,
                o.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.i = function(t) {
                return t
            },
            e.d = function(t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            },
            e.n = function(t) {
                var n = t && t.__esModule ?
                function() {
                    return t.
                default
                }:
                function() {
                    return t
                };
                return e.d(n, "a", n),
                n
            },
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            e.p = "",
            e(e.s = 72)
        } ([function(t, e, n) {
            "use strict";
            var r = n(35)("wks"),
            o = n(14),
            i = n(1).Symbol,
            a = "function" == typeof i; (t.exports = function(t) {
                return r[t] || (r[t] = a && i[t] || (a ? i: o)("Symbol." + t))
            }).store = r
        },
        function(t, e, n) {
            "use strict";
            var r = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
            "number" == typeof __g && (__g = r)
        },
        function(t, e, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            };
            t.exports = function(t) {
                return "object" === (void 0 === t ? "undefined": r(t)) ? null !== t: "function" == typeof t
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = !n(12)(function() {
                return 7 != Object.defineProperty({},
                "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        function(t, e, n) {
            "use strict";
            var r = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return r.call(t, e)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(2);
            t.exports = function(t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(7),
            o = n(17);
            t.exports = n(3) ?
            function(t, e, n) {
                return r.f(t, e, o(1, n))
            }: function(t, e, n) {
                return t[e] = n,
                t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(5),
            o = n(29),
            i = n(37),
            a = Object.defineProperty;
            e.f = n(3) ? Object.defineProperty: function(t, e, n) {
                if (r(t), e = i(e, !0), r(n), o) try {
                    return a(t, e, n)
                } catch(t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value),
                t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
            o = n(6),
            i = n(4),
            a = n(14)("src"),
            s = Function.toString,
            c = ("" + s).split("toString");
            n(10).inspectSource = function(t) {
                return s.call(t)
            },
            (t.exports = function(t, e, n, s) {
                var u = "function" == typeof n;
                u && (i(n, "name") || o(n, "name", e)),
                t[e] !== n && (u && (i(n, a) || o(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n: s ? t[e] ? t[e] = n: o(t, e, n) : (delete t[e], o(t, e, n)))
            })(Function.prototype, "toString",
            function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        },
        function(t, e, n) {
            "use strict";
            t.exports = {}
        },
        function(t, e, n) {
            "use strict";
            var r = t.exports = {
                version: "2.5.1"
            };
            "number" == typeof __e && (__e = r)
        },
        function(t, e, n) {
            "use strict";
            var r = n(43);
            t.exports = function(t, e, n) {
                if (r(t), void 0 === e) return t;
                switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                try {
                    return !! t()
                } catch(t) {
                    return ! 0
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(50),
            o = n(15);
            t.exports = function(t) {
                return r(o(t))
            }
        },
        function(t, e, n) {
            "use strict";
            var r = 0,
            o = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "": t, ")_", (++r + o).toString(36))
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(55),
            o = n(27),
            i = n(8),
            a = n(6),
            s = n(4),
            c = n(9),
            u = n(53),
            l = n(18),
            f = n(58),
            h = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = function() {
                return this
            };
            t.exports = function(t, e, n, g, y, v, m) {
                u(n, e, g);
                var b, w, x, k = function(t) {
                    if (!p && t in O) return O[t];
                    switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                S = e + " Iterator",
                E = "values" == y,
                T = !1,
                O = t.prototype,
                _ = O[h] || O["@@iterator"] || y && O[y],
                M = _ || k(y),
                I = y ? E ? k("entries") : M: void 0,
                j = "Array" == e ? O.entries || _: _;
                if (j && (x = f(j.call(new t))) !== Object.prototype && x.next && (l(x, S, !0), r || s(x, h) || a(x, h, d)), E && _ && "values" !== _.name && (T = !0, M = function() {
                    return _.call(this)
                }), r && !m || !p && !T && O[h] || a(O, h, M), c[e] = M, c[S] = d, y) if (b = {
                    values: E ? M: k("values"),
                    keys: v ? M: k("keys"),
                    entries: I
                },
                m) for (w in b) w in O || i(O, w, b[w]);
                else o(o.P + o.F * (p || T), e, b);
                return b
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(7).f,
            o = n(4),
            i = n(0)("toStringTag");
            t.exports = function(t, e, n) {
                t && !o(t = n ? t: t.prototype, i) && r(t, i, {
                    configurable: !0,
                    value: e
                })
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(35)("keys"),
            o = n(14);
            t.exports = function(t) {
                return r[t] || (r[t] = o(t))
            }
        },
        function(t, e, n) {
            "use strict";
            var r = Math.ceil,
            o = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? o: r)(t)
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = /^\s*\{([\s\S]*) \}\s*$/,
            o = /[\s"']*([^:,"']+)[\s"']*:[\s"']*([^:,"']+)[\s"']*,?/g;
            e.removeElement = function(t) {
                t.parentNode.removeChild(t)
            },
            e.parseEventOptions = function(t) {
                if (t) {
                    var e = r.exec(t);
                    if (e && (t = e[1]), t && t.length) {
                        for (var n = o.exec(t), i = {}; n;) {
                            var a = n[1],
                            s = n[2];
                            n = o.exec(t),
                            i[a] = s
                        }
                        return i
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t, e, n, r) {
                if (! (t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(24),
            o = n(0)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            } ()),
            a = function(t, e) {
                try {
                    return t[e]
                } catch(t) {}
            };
            t.exports = function(t) {
                var e, n, s;
                return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = a(e = Object(t), o)) ? n: i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments": s
            }
        },
        function(t, e, n) {
            "use strict";
            var r = {}.toString;
            t.exports = function(t) {
                return r.call(t).slice(8, -1)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(2),
            o = n(1).document,
            i = r(o) && r(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {}
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
            o = n(10),
            i = n(6),
            a = n(8),
            s = n(11),
            c = function t(e, n, c) {
                var u, l, f, h, p = e & t.F,
                d = e & t.G,
                g = e & t.S,
                y = e & t.P,
                v = e & t.B,
                m = d ? r: g ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                b = d ? o: o[n] || (o[n] = {}),
                w = b.prototype || (b.prototype = {});
                d && (c = n);
                for (u in c) l = !p && m && void 0 !== m[u],
                f = (l ? m: c)[u],
                h = v && l ? s(f, r) : y && "function" == typeof f ? s(Function.call, f) : f,
                m && a(m, u, f, e & t.U),
                b[u] != f && i(b, u, h),
                y && w[u] != f && (w[u] = f)
            };
            r.core = o,
            c.F = 1,
            c.G = 2,
            c.S = 4,
            c.P = 8,
            c.B = 16,
            c.W = 32,
            c.U = 64,
            c.R = 128,
            t.exports = c
        },
        function(t, e, n) {
            "use strict";
            var r = n(11),
            o = n(52),
            i = n(51),
            a = n(5),
            s = n(36),
            c = n(66),
            u = {},
            l = {},
            f = t.exports = function(t, e, n, f, h) {
                var p, d, g, y, v = h ?
                function() {
                    return t
                }: c(t),
                m = r(n, f, e ? 2 : 1),
                b = 0;
                if ("function" != typeof v) throw TypeError(t + " is not iterable!");
                if (i(v)) {
                    for (p = s(t.length); p > b; b++) if ((y = e ? m(a(d = t[b])[0], d[1]) : m(t[b])) === u || y === l) return y
                } else for (g = v.call(t); ! (d = g.next()).done;) if ((y = o(g, m, d.value, e)) === u || y === l) return y
            };
            f.BREAK = u,
            f.RETURN = l
        },
        function(t, e, n) {
            "use strict";
            t.exports = !n(3) && !n(12)(function() {
                return 7 != Object.defineProperty(n(25)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            o = n(14)("meta"),
            i = n(2),
            a = n(4),
            s = n(7).f,
            c = 0,
            u = Object.isExtensible ||
            function() {
                return ! 0
            },
            l = !n(12)(function() {
                return u(Object.preventExtensions({}))
            }),
            f = function(t) {
                s(t, o, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            h = function(t, e) {
                if (!i(t)) return "symbol" == (void 0 === t ? "undefined": r(t)) ? t: ("string" == typeof t ? "S": "P") + t;
                if (!a(t, o)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[o].i
            },
            p = function(t, e) {
                if (!a(t, o)) {
                    if (!u(t)) return ! 0;
                    if (!e) return ! 1;
                    f(t)
                }
                return t[o].w
            },
            d = function(t) {
                return l && g.NEED && u(t) && !a(t, o) && f(t),
                t
            },
            g = t.exports = {
                KEY: o,
                NEED: !1,
                fastKey: h,
                getWeak: p,
                onFreeze: d
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(5),
            o = n(56),
            i = n(26),
            a = n(19)("IE_PROTO"),
            s = function() {},
            c = function() {
                var t, e = n(25)("iframe"),
                r = i.length;
                for (e.style.display = "none", n(48).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
                return c()
            };
            t.exports = Object.create ||
            function(t, e) {
                var n;
                return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(),
                void 0 === e ? n: o(n, e)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(59),
            o = n(26);
            t.exports = Object.keys ||
            function(t) {
                return r(t, o)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(8);
            t.exports = function(t, e, n) {
                for (var o in e) r(t, o, e[o], n);
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            t.exports = function(t) {
                return o[t] || (o[t] = {})
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(20),
            o = Math.min;
            t.exports = function(t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(2);
            t.exports = function(t, e) {
                if (!r(t)) return t;
                var n, o;
                if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
                if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(2);
            t.exports = function(t, e) {
                if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.BaseProvider = void 0;
            var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            } (),
            i = n(21);
            e.BaseProvider = function() {
                function t() {
                    r(this, t)
                }
                return o(t, [{
                    key: "enableDebug",
                    value: function() {}
                },
                {
                    key: "setUser",
                    value: function() {}
                },
                {
                    key: "pageview",
                    value: function() {}
                },
                {
                    key: "event",
                    value: function() {}
                },
                {
                    key: "createScript",
                    value: function(t, e) {
                        var n = document.createElement("script");
                        return n.async = 1,
                        n.src = t,
                        e && (n.id = e),
                        n
                    }
                },
                {
                    key: "loadScript",
                    value: function(t, e) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = arguments[3];
                        t.onerror = function() {
                            window[e] = null,
                            (0, i.removeElement)(t)
                        },
                        t.onload = function() {
                            r && r(),
                            n && (0, i.removeElement)(t)
                        };
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(t, o)
                    }
                }]),
                t
            } ()
        },
        function(t, e, n) {
            "use strict";
            n(69),
            n(70),
            n(71),
            n(68),
            t.exports = n(10).Map
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(73),
            o = n(74);
            e.
        default = {
                google: r.Google,
                sensors: o.Sensors
            }
        },
        function(t, e) {
            t.exports = {
                name: "jk-analytics",
                version: "0.1.6",
                description: "I am a log maker, so I write logs JIKE by JIKE.",
                license: "MIT",
                main: "lib/index.js",
                scripts: {
                    clean: "rm -rf lib",
                    start: "npm run watch",
                    watch: "webpack --watch",
                    build: "npm run clean && webpack"
                },
                repository: {
                    type: "git",
                    url: "git+ssh://git@github.com:ruguoapp/JK-Analytics.git"
                },
                author: {
                    name: "Sune Bear",
                    email: "hi@sunebear.com",
                    url: "http://sunebear.com"
                },
                dependencies: {
                    "core-js": "^2.4.1"
                },
                devDependencies: {
                    "babel-core": "^6.14.0",
                    "babel-loader": "^6.2.5",
                    "babel-preset-es2015": "^6.24.1",
                    "babel-preset-stage-0": "^6.24.1",
                    "eslint-loader": "^1.7.1",
                    "jk-standard": "0.0.4",
                    webpack: "^2.3.2"
                }
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(0)("unscopables"),
            o = Array.prototype;
            void 0 == o[r] && n(6)(o, r, {}),
            t.exports = function(t) {
                o[r][t] = !0
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(13),
            o = n(36),
            i = n(64);
            t.exports = function(t) {
                return function(e, n, a) {
                    var s, c = r(e),
                    u = o(c.length),
                    l = i(a, u);
                    if (t && n != n) {
                        for (; u > l;) if ((s = c[l++]) != s) return ! 0
                    } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                    return ! t && -1
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(7).f,
            o = n(32),
            i = n(34),
            a = n(11),
            s = n(22),
            c = n(28),
            u = n(16),
            l = n(30),
            f = n(62),
            h = n(3),
            p = n(31).fastKey,
            d = n(38),
            g = h ? "_s": "size",
            y = function(t, e) {
                var n, r = p(e);
                if ("F" !== r) return t._i[r];
                for (n = t._f; n; n = n.n) if (n.k == e) return n
            };
            t.exports = {
                getConstructor: function(t, e, n, u) {
                    var l = t(function(t, r) {
                        s(t, l, e, "_i"),
                        t._t = e,
                        t._i = o(null),
                        t._f = void 0,
                        t._l = void 0,
                        t[g] = 0,
                        void 0 != r && c(r, n, t[u], t)
                    });
                    return i(l.prototype, {
                        clear: function() {
                            for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0,
                            r.p && (r.p = r.p.n = void 0),
                            delete n[r.i];
                            t._f = t._l = void 0,
                            t[g] = 0
                        },
                        delete: function(t) {
                            var n = d(this, e),
                            r = y(n, t);
                            if (r) {
                                var o = r.n,
                                i = r.p;
                                delete n._i[r.i],
                                r.r = !0,
                                i && (i.n = o),
                                o && (o.p = i),
                                n._f == r && (n._f = o),
                                n._l == r && (n._l = i),
                                n[g]--
                            }
                            return !! r
                        },
                        forEach: function(t) {
                            d(this, e);
                            for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n: this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
                        },
                        has: function(t) {
                            return !! y(d(this, e), t)
                        }
                    }),
                    h && r(l.prototype, "size", {
                        get: function() {
                            return d(this, e)[g]
                        }
                    }),
                    l
                },
                def: function(t, e, n) {
                    var r, o, i = y(t, e);
                    return i ? i.v = n: (t._l = i = {
                        i: o = p(e, !0),
                        k: e,
                        v: n,
                        p: r = t._l,
                        n: void 0,
                        r: !1
                    },
                    t._f || (t._f = i), r && (r.n = i), t[g]++, "F" !== o && (t._i[o] = i)),
                    t
                },
                getEntry: y,
                setStrong: function(t, e, n) {
                    u(t, e,
                    function(t, n) {
                        this._t = d(t, e),
                        this._k = n,
                        this._l = void 0
                    },
                    function() {
                        for (var t = this,
                        e = t._k,
                        n = t._l; n && n.r;) n = n.p;
                        return t._t && (t._l = n = n ? n.n: t._t._f) ? "keys" == e ? l(0, n.k) : "values" == e ? l(0, n.v) : l(0, [n.k, n.v]) : (t._t = void 0, l(1))
                    },
                    n ? "entries": "values", !n, !0),
                    f(e)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
            o = n(27),
            i = n(8),
            a = n(34),
            s = n(31),
            c = n(28),
            u = n(22),
            l = n(2),
            f = n(12),
            h = n(54),
            p = n(18),
            d = n(49);
            t.exports = function(t, e, n, g, y, v) {
                var m = r[t],
                b = m,
                w = y ? "set": "add",
                x = b && b.prototype,
                k = {},
                S = function(t) {
                    var e = x[t];
                    i(x, t, "delete" == t ?
                    function(t) {
                        return ! (v && !l(t)) && e.call(this, 0 === t ? 0 : t)
                    }: "has" == t ?
                    function(t) {
                        return ! (v && !l(t)) && e.call(this, 0 === t ? 0 : t)
                    }: "get" == t ?
                    function(t) {
                        return v && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    }: "add" == t ?
                    function(t) {
                        return e.call(this, 0 === t ? 0 : t),
                        this
                    }: function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n),
                        this
                    })
                };
                if ("function" == typeof b && (v || x.forEach && !f(function() { (new b).entries().next()
                }))) {
                    var E = new b,
                    T = E[w](v ? {}: -0, 1) != E,
                    O = f(function() {
                        E.has(1)
                    }),
                    _ = h(function(t) {
                        new b(t)
                    }),
                    M = !v && f(function() {
                        for (var t = new b,
                        e = 5; e--;) t[w](e, e);
                        return ! t.has( - 0)
                    });
                    _ || (b = e(function(e, n) {
                        u(e, b, t);
                        var r = d(new m, e, b);
                        return void 0 != n && c(n, y, r[w], r),
                        r
                    }), b.prototype = x, x.constructor = b),
                    (O || M) && (S("delete"), S("has"), y && S("get")),
                    (M || T) && S(w),
                    v && x.clear && delete x.clear
                } else b = g.getConstructor(e, t, y, w),
                a(b.prototype, n),
                s.NEED = !0;
                return p(b, t),
                k[t] = b,
                o(o.G + o.W + o.F * (b != m), k),
                v || g.setStrong(b, t, y),
                b
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1).document;
            t.exports = r && r.documentElement
        },
        function(t, e, n) {
            "use strict";
            var r = n(2),
            o = n(61).set;
            t.exports = function(t, e, n) {
                var i, a = e.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i),
                t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(24);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
                return "String" == r(t) ? t.split("") : Object(t)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(9),
            o = n(0)("iterator"),
            i = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (r.Array === t || i[o] === t)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(5);
            t.exports = function(t, e, n, o) {
                try {
                    return o ? e(r(n)[0], n[1]) : e(n)
                } catch(e) {
                    var i = t.
                    return;
                    throw void 0 !== i && r(i.call(t)),
                    e
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(32),
            o = n(17),
            i = n(18),
            a = {};
            n(6)(a, n(0)("iterator"),
            function() {
                return this
            }),
            t.exports = function(t, e, n) {
                t.prototype = r(a, {
                    next: o(1, n)
                }),
                i(t, e + " Iterator")
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(0)("iterator"),
            o = !1;
            try {
                var i = [7][r]();
                i.
                return = function() {
                    o = !0
                },
                Array.from(i,
                function() {
                    throw 2
                })
            } catch(t) {}
            t.exports = function(t, e) {
                if (!e && !o) return ! 1;
                var n = !1;
                try {
                    var i = [7],
                    a = i[r]();
                    a.next = function() {
                        return {
                            done: n = !0
                        }
                    },
                    i[r] = function() {
                        return a
                    },
                    t(i)
                } catch(t) {}
                return n
            }
        },
        function(t, e, n) {
            "use strict";
            t.exports = !1
        },
        function(t, e, n) {
            "use strict";
            var r = n(7),
            o = n(5),
            i = n(33);
            t.exports = n(3) ? Object.defineProperties: function(t, e) {
                o(t);
                for (var n, a = i(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(60),
            o = n(17),
            i = n(13),
            a = n(37),
            s = n(4),
            c = n(29),
            u = Object.getOwnPropertyDescriptor;
            e.f = n(3) ? u: function(t, e) {
                if (t = i(t), e = a(e, !0), c) try {
                    return u(t, e)
                } catch(t) {}
                if (s(t, e)) return o(!r.f.call(t, e), t[e])
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(4),
            o = n(65),
            i = n(19)("IE_PROTO"),
            a = Object.prototype;
            t.exports = Object.getPrototypeOf ||
            function(t) {
                return t = o(t),
                r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? a: null
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(4),
            o = n(13),
            i = n(45)(!1),
            a = n(19)("IE_PROTO");
            t.exports = function(t, e) {
                var n, s = o(t),
                c = 0,
                u = [];
                for (n in s) n != a && r(s, n) && u.push(n);
                for (; e.length > c;) r(s, n = e[c++]) && (~i(u, n) || u.push(n));
                return u
            }
        },
        function(t, e, n) {
            "use strict";
            e.f = {}.propertyIsEnumerable
        },
        function(t, e, n) {
            "use strict";
            var r = n(2),
            o = n(5),
            i = function(t, e) {
                if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
            t.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ?
                function(t, e, r) {
                    try {
                        r = n(11)(Function.call, n(57).f(Object.prototype, "__proto__").set, 2),
                        r(t, []),
                        e = !(t instanceof Array)
                    } catch(t) {
                        e = !0
                    }
                    return function(t, n) {
                        return i(t, n),
                        e ? t.__proto__ = n: r(t, n),
                        t
                    }
                } ({},
                !1) : void 0),
                check: i
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
            o = n(7),
            i = n(3),
            a = n(0)("species");
            t.exports = function(t) {
                var e = r[t];
                i && e && !e[a] && o.f(e, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(20),
            o = n(15);
            t.exports = function(t) {
                return function(e, n) {
                    var i, a, s = String(o(e)),
                    c = r(n),
                    u = s.length;
                    return c < 0 || c >= u ? t ? "": void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i: t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(20),
            o = Math.max,
            i = Math.min;
            t.exports = function(t, e) {
                return t = r(t),
                t < 0 ? o(t + e, 0) : i(t, e)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(15);
            t.exports = function(t) {
                return Object(r(t))
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(23),
            o = n(0)("iterator"),
            i = n(9);
            t.exports = n(10).getIteratorMethod = function(t) {
                if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(44),
            o = n(30),
            i = n(9),
            a = n(13);
            t.exports = n(16)(Array, "Array",
            function(t, e) {
                this._t = a(t),
                this._i = 0,
                this._k = e
            },
            function() {
                var t = this._t,
                e = this._k,
                n = this._i++;
                return ! t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
            },
            "values"),
            i.Arguments = i.Array,
            r("keys"),
            r("values"),
            r("entries")
        },
        function(t, e, n) {
            "use strict";
            var r = n(46),
            o = n(38);
            t.exports = n(47)("Map",
            function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            {
                get: function(t) {
                    var e = r.getEntry(o(this, "Map"), t);
                    return e && e.v
                },
                set: function(t, e) {
                    return r.def(o(this, "Map"), 0 === t ? 0 : t, e)
                }
            },
            r, !0)
        },
        function(t, e, n) {
            "use strict";
            var r = n(23),
            o = {};
            o[n(0)("toStringTag")] = "z",
            o + "" != "[object z]" && n(8)(Object.prototype, "toString",
            function() {
                return "[object " + r(this) + "]"
            },
            !0)
        },
        function(t, e, n) {
            "use strict";
            var r = n(63)(!0);
            n(16)(String, "String",
            function(t) {
                this._t = String(t),
                this._i = 0
            },
            function() {
                var t, e = this._t,
                n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                }: (t = r(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        },
        function(t, e, n) {
            "use strict";
            for (var r = n(67), o = n(33), i = n(8), a = n(1), s = n(6), c = n(9), u = n(0), l = u("iterator"), f = u("toStringTag"), h = c.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            },
            d = o(p), g = 0; g < d.length; g++) {
                var y, v = d[g],
                m = p[v],
                b = a[v],
                w = b && b.prototype;
                if (w && (w[l] || s(w, l, h), w[f] || s(w, f, v), c[v] = h, m)) for (y in r) w[y] || i(w, y, r[y], !0)
            }
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t: {
                default:
                    t
                }
            }
            function o(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.JKA = e.AnalyticsWrapper = void 0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            a = Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            } ();
            n(40);
            var c = n(21),
            u = n(41),
            l = r(u),
            f = n(42),
            h = r(f),
            p = e.AnalyticsWrapper = function() {
                function t() {
                    var e = this;
                    o(this, t),
                    this.version = h.
                default.version,
                    this.debug = !1,
                    this.config = {},
                    this.providers = new Map,
                    this.mixPayload = {};
                    var n = document.getElementById("jka-providers");
                    n && (this.config = a({},
                    n.dataset), Object.keys(this.config).map(function(t) {
                        e.registerProvider(t)
                    }), this.delegateEvents(), (0, c.removeElement)(n))
                }
                return s(t, [{
                    key: "registerProperty",
                    value: function(t, e) {
                        this.mixPayload[t] = e
                    }
                },
                {
                    key: "unregisterProperty",
                    value: function(t) {
                        delete this.mixPayload[t]
                    }
                },
                {
                    key: "registerProvider",
                    value: function(t) {
                        var e = this.config[t],
                        n = l.
                    default[t];
                        e && n && this.providers.set(t, new n({
                            account: e
                        }))
                    }
                },
                {
                    key: "enableDebug",
                    value: function() {
                        this.debug = !0;
                        var t = !0,
                        e = !1,
                        n = void 0;
                        try {
                            for (var r, o = this.providers.values()[Symbol.iterator](); ! (t = (r = o.next()).done); t = !0) {
                                r.value.enableDebug()
                            }
                        } catch(t) {
                            e = !0,
                            n = t
                        } finally {
                            try { ! t && o.
                                return && o.
                                return ()
                            } finally {
                                if (e) throw n
                            }
                        }
                    }
                },
                {
                    key: "setUser",
                    value: function(t, e) {
                        try {
                            this.debug && console.log("JKA Set User " + t + ": ", e);
                            var n = !0,
                            r = !1,
                            o = void 0;
                            try {
                                for (var i, a = this.providers.values()[Symbol.iterator](); ! (n = (i = a.next()).done); n = !0) {
                                    i.value.setUser(t, e)
                                }
                            } catch(t) {
                                r = !0,
                                o = t
                            } finally {
                                try { ! n && a.
                                    return && a.
                                    return ()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        } catch(t) {
                            this.debug && console.error(t)
                        }
                    }
                },
                {
                    key: "setCurrentPage",
                    value: function(t) {
                        this.registerProperty("page", t)
                    }
                },
                {
                    key: "pageview",
                    value: function() {
                        try {
                            for (var t = arguments.length,
                            e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            if (this.debug) {
                                var r; (r = console).log.apply(r, ["JKA Pageview Options: "].concat(e))
                            }
                            var o = !0,
                            i = !1,
                            a = void 0;
                            try {
                                for (var s, c = this.providers.values()[Symbol.iterator](); ! (o = (s = c.next()).done); o = !0) {
                                    var u = s.value;
                                    u.pageview.apply(u, e)
                                }
                            } catch(t) {
                                i = !0,
                                a = t
                            } finally {
                                try { ! o && c.
                                    return && c.
                                    return ()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        } catch(t) {}
                    }
                },
                {
                    key: "event",
                    value: function(t) {
                        if ("object" === (void 0 === t ? "undefined": i(t)) && t) {
                            t = a({},
                            this.mixPayload, t);
                            try {
                                this.debug && console.log("JKA Event Options: ", t);
                                var e = !0,
                                n = !1,
                                r = void 0;
                                try {
                                    for (var o, s = this.providers.values()[Symbol.iterator](); ! (e = (o = s.next()).done); e = !0) {
                                        var c = o.value;
                                        try {
                                            c.event(t)
                                        } catch(t) {
                                            this.debug && console.trace("Error on JKA provider: " + c.name + ", " + t)
                                        }
                                    }
                                } catch(t) {
                                    n = !0,
                                    r = t
                                } finally {
                                    try { ! e && s.
                                        return && s.
                                        return ()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                            } catch(t) {}
                        }
                    }
                },
                {
                    key: "delegateEvents",
                    value: function() {
                        var t = this,
                        e = function(e) {
                            var n = function() {
                                for (var n = e.target; n && n.dataset;) {
                                    var r = (0, c.parseEventOptions)(n.dataset.jka);
                                    r && t.event(r),
                                    n = n.parentElement
                                }
                            };
                            window.setTimeout(n, 0)
                        };
                        document.body.addEventListener("click", e, !0)
                    }
                }]),
                t
            } ();
            e.JKA = new p
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }
            function o(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ! e || "object" != typeof e && "function" != typeof e ? t: e
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Google = void 0;
            var s = Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            } (),
            l = n(39);
            e.Google = function(t) {
               
            } (l.BaseProvider)
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }
            function o(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ! e || "object" != typeof e && "function" != typeof e ? t: e
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Sensors = void 0;
            var s = Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            } (),
            l = n(39);
            e.Sensors = function(t) {
            } (l.BaseProvider)
        }])
    })
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(254),
    o = n(83),
    i = n(264);
    r.
default.init({
        debug:
        o.DEBUG,
        lng: "zh-Hans",
        fallbackLng: "zh-Hans",
        resources: {
            "zh-Hans": {
                translation: i.zhHans
            },
            "en-US": {
                translation: i.enUS
            }
        }
    },
    function() {
        r.
    default.changeLanguage(navigator.language)
    }),
    e.i18n = r.
default,
    e.__ = e.i18n.t.bind(e.i18n)
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(99),
    o = {
        credentials: !0
    };
    e.request = function(t, e, n, i) {
        return void 0 === e && (e = "GET"),
        void 0 === i && (i = o),
        r.makeCancelable(window.fetch(t, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: i.credentials ? "include": "omit",
            method: e,
            body: "object" == typeof n ? JSON.stringify(n) : n
        }).then(function(t) {
            return t.status >= 200 && t.status < 300 ? t.json().
            catch(function() {
                return ""
            }) : Promise.reject(t)
        }))
    }
},
function(t, e, n) {
    var r = n(192),
    o = n(162);
    t.exports = Object.keys ||
    function(t) {
        return r(t, o)
    }
},
function(t, e) {
    t.exports = {}
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
, , , , , , , , , ,
function(t, e) {
    t.exports = !0
},
function(t, e, n) {
    var r = n(48).f,
    o = n(50),
    i = n(43)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t: t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
},
,
function(t, e, n) {
    var r = n(56);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e, n) {
    var r = n(81),
    o = n(271),
    i = n(162),
    a = n(160)("IE_PROTO"),
    s = function() {},
    c = function() {
        var t, e = n(175)("iframe"),
        r = i.length;
        for (e.style.display = "none", n(242).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
        return c()
    };
    t.exports = Object.create ||
    function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(),
        void 0 === e ? n: o(n, e)
    }
},
function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
},
function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e) {
    var n = Math.ceil,
    r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
    }
},
function(t, e, n) {
    var r = n(161)("keys"),
    o = n(101);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
},
function(t, e, n) {
    var r = n(34),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    e.__esModule = !0;
    var o = n(280),
    i = r(o),
    a = n(282),
    s = r(a),
    c = "function" == typeof s.
default && "symbol" == typeof i.
default ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof s.
    default && t.constructor === s.
    default && t !== s.
    default.prototype ? "symbol": typeof t
    };
    e.
default = "function" == typeof s.
default && "symbol" === c(i.
default) ?
    function(t) {
        return void 0 === t ? "undefined": c(t)
    }: function(t) {
        return t && "function" == typeof s.
    default && t.constructor === s.
    default && t !== s.
    default.prototype ? "symbol": void 0 === t ? "undefined": c(t)
    }
},
function(t, e, n) {
    e.f = n(43)
},
function(t, e, n) {
    var r = n(34),
    o = n(46),
    i = n(152),
    a = n(164),
    s = n(48).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {}: r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
},
, , , , , ,
function(t, e, n) {
    var r = n(190);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            };
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e) {
    e.f = Object.getOwnPropertySymbols
},
,
function(t, e, n) {
    var r = n(56),
    o = n(34).document,
    i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
},
, , , , , , , , , , , ,
function(t, e, n) {
    "use strict";
    e.a = {
        processors: {},
        addPostProcessor: function(t) {
            this.processors[t.name] = t
        },
        handle: function(t, e, n, r, o) {
            var i = this;
            return t.forEach(function(t) {
                i.processors[t] && (e = i.processors[t].process(e, n, r, o))
            }),
            e
        }
    }
},
function(t, e, n) {
    "use strict";
    function r(t) {
        return t.interpolation = {
            unescapeSuffix: "HTML"
        },
        t.interpolation.prefix = t.interpolationPrefix || "__",
        t.interpolation.suffix = t.interpolationSuffix || "__",
        t.interpolation.escapeValue = t.escapeInterpolation || !1,
        t.interpolation.nestingPrefix = t.reusePrefix || "$t(",
        t.interpolation.nestingSuffix = t.reuseSuffix || ")",
        t
    }
    function o(t) {
        return t.resStore && (t.resources = t.resStore),
        t.ns && t.ns.defaultNs ? (t.defaultNS = t.ns.defaultNs, t.ns = t.ns.namespaces) : t.defaultNS = t.ns || "translation",
        t.fallbackToDefaultNS && t.defaultNS && (t.fallbackNS = t.defaultNS),
        t.saveMissing = t.sendMissing,
        t.saveMissingTo = t.sendMissingTo || "current",
        t.returnNull = !t.fallbackOnNull,
        t.returnEmptyString = !t.fallbackOnEmpty,
        t.returnObjects = t.returnObjectTrees,
        t.joinArrays = "\n",
        t.returnedObjectHandler = t.objectTreeKeyHandler,
        t.parseMissingKeyHandler = t.parseMissingKey,
        t.appendNamespaceToMissingKey = !0,
        t.nsSeparator = t.nsseparator || ":",
        t.keySeparator = t.keyseparator || ".",
        "sprintf" === t.shortcutFunction && (t.overloadTranslationOptionHandler = function(t) {
            for (var e = [], n = 1; n < t.length; n++) e.push(t[n]);
            return {
                postProcess: "sprintf",
                sprintf: e
            }
        }),
        t.whitelist = t.lngWhitelist,
        t.preload = t.preload,
        "current" === t.load && (t.load = "currentOnly"),
        "unspecific" === t.load && (t.load = "languageOnly"),
        t.backend = t.backend || {},
        t.backend.loadPath = t.resGetPath || "locales/__lng__/__ns__.json",
        t.backend.addPath = t.resPostPath || "locales/add/__lng__/__ns__",
        t.backend.allowMultiLoading = t.dynamicLoad,
        t.cache = t.cache || {},
        t.cache.prefix = "res_",
        t.cache.expirationTime = 6048e5,
        t.cache.enabled = t.useLocalStorage,
        t = r(t),
        t.defaultVariables && (t.interpolation.defaultVariables = t.defaultVariables),
        t
    }
    function i(t) {
        return t = r(t),
        t.joinArrays = "\n",
        t
    }
    function a(t) {
        return (t.interpolationPrefix || t.interpolationSuffix || void 0 !== t.escapeInterpolation) && (t = r(t)),
        t.nsSeparator = t.nsseparator,
        t.keySeparator = t.keyseparator,
        t.returnObjects = t.returnObjectTrees,
        t
    }
    function s(t) {
        t.lng = function() {
            return c.a.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),
            t.services.languageUtils.toResolveHierarchy(t.language)[0]
        },
        t.preload = function(e, n) {
            c.a.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),
            t.loadLanguages(e, n)
        },
        t.setLng = function(e, n, r) {
            return c.a.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),
            "function" == typeof n && (r = n, n = {}),
            n || (n = {}),
            !0 === n.fixLng && r ? r(null, t.getFixedT(e)) : t.changeLanguage(e, r)
        },
        t.addPostProcessor = function(e, n) {
            c.a.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),
            t.use({
                type: "postProcessor",
                name: e,
                process: n
            })
        }
    }
    e.b = o,
    e.c = i,
    e.d = a,
    e.a = s;
    var c = n(45)
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e, n) {
    t.exports = !n(49) && !n(92)(function() {
        return 7 != Object.defineProperty(n(175)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e, n) {
    var r = n(50),
    o = n(82),
    i = n(272)(!1),
    a = n(160)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
        c = 0,
        u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; e.length > c;) r(s, n = e[c++]) && (~i(u, n) || u.push(n));
        return u
    }
},
function(t, e, n) {
    "use strict";
    var r = n(152),
    o = n(80),
    i = n(194),
    a = n(55),
    s = n(50),
    c = n(140),
    u = n(275),
    l = n(153),
    f = n(276),
    h = n(43)("iterator"),
    p = !([].keys && "next" in [].keys()),
    d = function() {
        return this
    };
    t.exports = function(t, e, n, g, y, v, m) {
        u(n, e, g);
        var b, w, x, k = function(t) {
            if (!p && t in O) return O[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this, t)
                }
            }
            return function() {
                return new n(this, t)
            }
        },
        S = e + " Iterator",
        E = "values" == y,
        T = !1,
        O = t.prototype,
        _ = O[h] || O["@@iterator"] || y && O[y],
        M = !p && _ || k(y),
        I = y ? E ? k("entries") : M: void 0,
        j = "Array" == e ? O.entries || _: _;
        if (j && (x = f(j.call(new t))) !== Object.prototype && x.next && (l(x, S, !0), r || s(x, h) || a(x, h, d)), E && _ && "values" !== _.name && (T = !0, M = function() {
            return _.call(this)
        }), r && !m || !p && !T && O[h] || a(O, h, M), c[e] = M, c[S] = d, y) if (b = {
            values: E ? M: k("values"),
            keys: v ? M: k("keys"),
            entries: I
        },
        m) for (w in b) w in O || i(O, w, b[w]);
        else o(o.P + o.F * (p || T), e, b);
        return b
    }
},
function(t, e, n) {
    t.exports = n(55)
},
function(t, e, n) {
    var r = n(192),
    o = n(162).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames ||
    function(t) {
        return r(t, o)
    }
},
, , ,
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.NOOP = function() {}
},
function(t, e, n) {
    var r = n(157);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
},
function(t, e, n) {
    var r = n(158);
    t.exports = function(t) {
        return Object(r(t))
    }
},
function(t, e, n) {
    var r = n(141),
    o = n(100),
    i = n(82),
    a = n(155),
    s = n(50),
    c = n(191),
    u = Object.getOwnPropertyDescriptor;
    e.f = n(49) ? u: function(t, e) {
        if (t = i(t), e = a(e, !0), c) try {
            return u(t, e)
        } catch(t) {}
        if (s(t, e)) return o(!r.f.call(t, e), t[e])
    }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            Object.defineProperty(e, "exports", {
                enumerable: !0
            }),
            e.webpackPolyfill = 1
        }
        return e
    }
},
function(t, e, n) {
    var r = n(159),
    o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
},
function(t, e, n) {
    var r = n(34).document;
    t.exports = r && r.documentElement
},
function(t, e) {},
function(t, e, n) {
    "use strict";
    var r = n(274)(!0);
    n(193)(String, "String",
    function(t) {
        this._t = String(t),
        this._i = 0
    },
    function() {
        var t, e = this._t,
        n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        }: (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
},
function(t, e, n) {
    n(277);
    for (var r = n(34), o = n(55), i = n(140), a = n(43)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var u = s[c],
        l = r[u],
        f = l && l.prototype;
        f && !f[a] && o(f, a, u),
        i[u] = i.Array
    }
},
, , , , , ,
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3);
    r.__exportStar(n(253), e),
    r.__exportStar(n(267), e)
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3),
    o = n(137),
    i = n(44),
    a = n(138),
    s = n(199),
    c = window.navigator.userAgent,
    u = window.location,
    l = "" + u.origin + u.pathname + u.search,
    f = function() {
        function t() {}
        return t.prototype.initialize = function(e) {
            if (this.options = r.__assign({},
            t.defaultOptions, e), this.state = {
                sdkIsReady: !1
            },
            this.sdk = null, !this.isInWeChat()) return null;
            this._configureSDK()
        },
        t.prototype.isInWeChat = function() {
            return /MicroMessenger/i.test(c)
        },
        t.prototype._configureSDK = function() {
            var t = this,
            e = this.options.initCallback;
            this._loadSDK(function() {
                t.sdk = window.wx,
                t._getSignature(),
                e()
            })
        },
        t.prototype._loadSDK = function(t) {
            if (void 0 === t && (t = s.NOOP), window.wx) return t();
            var e = document.createElement("script"),
            n = document.head;
            e.src = "//res.wx.qq.com/open/js/jweixin-1.0.0.js",
            e.onload = function() {
                t()
            },
            n.appendChild(e)
        },
        t.prototype._getSignature = function(t) {
            var e = this;
            void 0 === t && (t = l);
            var n = this.options,
            r = n.appId,
            o = n.signatureUrl,
            s = this.sdk,
            c = s.ready,
            u = s.config,
            f = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareWeibo"];
            a.request(o, "POST", {
                url: t
            },
            {}).then(function(t) {
                u({
                    debug: i.DEBUG,
                    appId: r,
                    nonceStr: t.noncestr,
                    timestamp: t.timestamp,
                    signature: t.signature,
                    jsApiList: f
                }),
                c(function() {
                    e.state.sdkIsReady = !0
                })
            })
        },
        t.prototype.updateShareInfo = function(t) {
            var e = this,
            n = this.sdk,
            r = this.state.sdkIsReady;
            n && (r ? this._updateSDKShareConfig(t) : this.sdk.ready(function() {
                e._updateSDKShareConfig(t)
            }))
        },
        t.prototype._updateSDKShareConfig = function(t) {
            this.shareConfig = t = r.__assign({},
            this.shareConfig, t),
            this.sdk.onMenuShareTimeline(r.__assign({},
            t, {
                success: function() {
                    i.JKA.event({
                        page: t.page || t.title,
                        action: o.__("wechat.share.moment")
                    })
                }
            })),
            this.sdk.onMenuShareAppMessage(r.__assign({},
            t, {
                success: function() {
                    i.JKA.event({
                        page: t.page || t.title,
                        action: o.__("wechat.share.message")
                    })
                }
            })),
            this.sdk.onMenuShareWeibo(t)
        },
        t.defaultOptions = {
            appId: i.CONFIG.WECHAT.APPID,
            signatureUrl: i.CONFIG.WECHAT.SIGNATURE_URL,
            initCallback: s.NOOP
        },
        t
    } ();
    e.weChat = new f
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n.d(e, "changeLanguage",
    function() {
        return o
    }),
    n.d(e, "cloneInstance",
    function() {
        return i
    }),
    n.d(e, "createInstance",
    function() {
        return a
    }),
    n.d(e, "dir",
    function() {
        return s
    }),
    n.d(e, "exists",
    function() {
        return c
    }),
    n.d(e, "getFixedT",
    function() {
        return u
    }),
    n.d(e, "init",
    function() {
        return l
    }),
    n.d(e, "loadLanguages",
    function() {
        return f
    }),
    n.d(e, "loadNamespaces",
    function() {
        return h
    }),
    n.d(e, "loadResources",
    function() {
        return p
    }),
    n.d(e, "off",
    function() {
        return d
    }),
    n.d(e, "on",
    function() {
        return g
    }),
    n.d(e, "setDefaultNamespace",
    function() {
        return y
    }),
    n.d(e, "t",
    function() {
        return v
    }),
    n.d(e, "use",
    function() {
        return m
    });
    var r = n(255);
    e.
default = r.a;
    var o = r.a.changeLanguage.bind(r.a),
    i = r.a.cloneInstance.bind(r.a),
    a = r.a.createInstance.bind(r.a),
    s = r.a.dir.bind(r.a),
    c = r.a.exists.bind(r.a),
    u = r.a.getFixedT.bind(r.a),
    l = r.a.init.bind(r.a),
    f = r.a.loadLanguages.bind(r.a),
    h = r.a.loadNamespaces.bind(r.a),
    p = r.a.loadResources.bind(r.a),
    d = r.a.off.bind(r.a),
    g = r.a.on.bind(r.a),
    y = r.a.setDefaultNamespace.bind(r.a),
    v = r.a.t.bind(r.a),
    m = r.a.use.bind(r.a)
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var o = n[r],
            i = Object.getOwnPropertyDescriptor(e, o);
            i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
        }
        return t
    }
    function o(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! e || "object" != typeof e && "function" != typeof e ? t: e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
    }
    function s() {}
    var c = n(45),
    u = n(89),
    l = n(256),
    f = n(257),
    h = n(258),
    p = n(259),
    d = n(260),
    g = n(261),
    y = n(262),
    v = n(263),
    m = n(188),
    b = n(189),
    w = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    x = function(t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments[1];
            o(this, e);
            var a = i(this, t.call(this));
            if (a.options = Object(v.b)(n), a.services = {},
            a.logger = c.a, a.modules = {
                external: []
            },
            r && !a.isInitialized && !n.isClone) {
                var s;
                if (!a.options.initImmediate) return s = a.init(n, r),
                i(a, s);
                setTimeout(function() {
                    a.init(n, r)
                },
                0)
            }
            return a
        }
        return a(e, t),
        e.prototype.init = function(t, e) {
            function n(t) {
                return t ? "function" == typeof t ? new t: t: null
            }
            var r = this;
            if ("function" == typeof t && (e = t, t = {}), t || (t = {}), "v1" === t.compatibilityAPI ? this.options = w({},
            Object(v.a)(), Object(v.b)(b.b(t)), {}) : "v1" === t.compatibilityJSON ? this.options = w({},
            Object(v.a)(), Object(v.b)(b.c(t)), {}) : this.options = w({},
            Object(v.a)(), this.options, Object(v.b)(t)), this.format = this.options.interpolation.format, e || (e = s), !this.options.isClone) {
                this.modules.logger ? c.a.init(n(this.modules.logger), this.options) : c.a.init(null, this.options);
                var o = new h.a(this.options);
                this.store = new l.a(this.options.resources, this.options);
                var i = this.services;
                i.logger = c.a,
                i.resourceStore = this.store,
                i.resourceStore.on("added removed",
                function(t, e) {
                    i.cacheConnector.save()
                }),
                i.languageUtils = o,
                i.pluralResolver = new p.a(o, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }),
                i.interpolator = new d.a(this.options),
                i.backendConnector = new g.a(n(this.modules.backend), i.resourceStore, i, this.options),
                i.backendConnector.on("*",
                function(t) {
                    for (var e = arguments.length,
                    n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    r.emit.apply(r, [t].concat(n))
                }),
                i.backendConnector.on("loaded",
                function(t) {
                    i.cacheConnector.save()
                }),
                i.cacheConnector = new y.a(n(this.modules.cache), i.resourceStore, i, this.options),
                i.cacheConnector.on("*",
                function(t) {
                    for (var e = arguments.length,
                    n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    r.emit.apply(r, [t].concat(n))
                }),
                this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)),
                this.translator = new f.a(this.services, this.options),
                this.translator.on("*",
                function(t) {
                    for (var e = arguments.length,
                    n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    r.emit.apply(r, [t].concat(n))
                }),
                this.modules.external.forEach(function(t) {
                    t.init && t.init(r)
                })
            } ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"].forEach(function(t) {
                r[t] = function() {
                    var e;
                    return (e = r.store)[t].apply(e, arguments)
                }
            }),
            "v1" === this.options.compatibilityAPI && b.a(this);
            var a = function() {
                r.changeLanguage(r.options.lng,
                function(t, n) {
                    r.isInitialized = !0,
                    r.logger.log("initialized", r.options),
                    r.emit("initialized", r.options),
                    e(t, n)
                })
            };
            return this.options.resources || !this.options.initImmediate ? a() : setTimeout(a, 0),
            this
        },
        e.prototype.loadResources = function() {
            var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
            if (this.options.resources) e(null);
            else {
                if (this.language && "cimode" === this.language.toLowerCase()) return e();
                var n = [],
                r = function(e) {
                    if (e) {
                        t.services.languageUtils.toResolveHierarchy(e).forEach(function(t) {
                            n.indexOf(t) < 0 && n.push(t)
                        })
                    }
                };
                if (this.language) r(this.language);
                else {
                    this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t) {
                        return r(t)
                    })
                }
                this.options.preload && this.options.preload.forEach(function(t) {
                    return r(t)
                }),
                this.services.cacheConnector.load(n, this.options.ns,
                function() {
                    t.services.backendConnector.load(n, t.options.ns, e)
                })
            }
        },
        e.prototype.reloadResources = function(t, e) {
            t || (t = this.languages),
            e || (e = this.options.ns),
            this.services.backendConnector.reload(t, e)
        },
        e.prototype.use = function(t) {
            return "backend" === t.type && (this.modules.backend = t),
            "cache" === t.type && (this.modules.cache = t),
            ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t),
            "languageDetector" === t.type && (this.modules.languageDetector = t),
            "postProcessor" === t.type && m.a.addPostProcessor(t),
            "3rdParty" === t.type && this.modules.external.push(t),
            this
        },
        e.prototype.changeLanguage = function(t, e) {
            var n = this,
            r = function(t, r) {
                r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)),
                e && e(t,
                function() {
                    return n.t.apply(n, arguments)
                })
            },
            o = function(t) {
                t && (n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t), n.translator.changeLanguage(t), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)),
                n.loadResources(function(e) {
                    r(e, t)
                })
            };
            t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(t) : o(this.services.languageDetector.detect())
        },
        e.prototype.getFixedT = function(t, e) {
            var n = this,
            r = function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = w({},
                r);
                return o.lng = o.lng || t.lng,
                o.lngs = o.lngs || t.lngs,
                o.ns = o.ns || t.ns,
                n.t(e, o)
            };
            return "string" == typeof t ? r.lng = t: r.lngs = t,
            r.ns = e,
            r
        },
        e.prototype.t = function() {
            var t;
            return this.translator && (t = this.translator).translate.apply(t, arguments)
        },
        e.prototype.exists = function() {
            var t;
            return this.translator && (t = this.translator).exists.apply(t, arguments)
        },
        e.prototype.setDefaultNamespace = function(t) {
            this.options.defaultNS = t
        },
        e.prototype.loadNamespaces = function(t, e) {
            var n = this;
            if (!this.options.ns) return e && e();
            "string" == typeof t && (t = [t]),
            t.forEach(function(t) {
                n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
            }),
            this.loadResources(e)
        },
        e.prototype.loadLanguages = function(t, e) {
            "string" == typeof t && (t = [t]);
            var n = this.options.preload || [],
            r = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (!r.length) return e();
            this.options.preload = n.concat(r),
            this.loadResources(e)
        },
        e.prototype.dir = function(t) {
            return t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
            t ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl": "ltr": "rtl"
        },
        e.prototype.createInstance = function() {
            return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            arguments[1])
        },
        e.prototype.cloneInstance = function() {
            var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            o = w({},
            this.options, n, {
                isClone: !0
            }),
            i = new e(o, r);
            return ["store", "services", "language"].forEach(function(e) {
                i[e] = t[e]
            }),
            i.translator = new f.a(i.services, i.options),
            i.translator.on("*",
            function(t) {
                for (var e = arguments.length,
                n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                i.emit.apply(i, [t].concat(n))
            }),
            i.init(o, r),
            i
        },
        e
    } (u.a);
    e.a = new x
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var o = n[r],
            i = Object.getOwnPropertyDescriptor(e, o);
            i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
        }
        return t
    }
    function o(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! e || "object" != typeof e && "function" != typeof e ? t: e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
    }
    var s = n(89),
    c = n(98),
    u = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    l = function(t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                ns: ["translation"],
                defaultNS: "translation"
            };
            o(this, e);
            var a = i(this, t.call(this));
            return a.data = n,
            a.options = r,
            a
        }
        return a(e, t),
        e.prototype.addNamespaces = function(t) {
            this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
        },
        e.prototype.removeNamespaces = function(t) {
            var e = this.options.ns.indexOf(t);
            e > -1 && this.options.ns.splice(e, 1)
        },
        e.prototype.getResource = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = r.keySeparator || this.options.keySeparator;
            void 0 === o && (o = ".");
            var i = [t, e];
            return n && "string" != typeof n && (i = i.concat(n)),
            n && "string" == typeof n && (i = i.concat(o ? n.split(o) : n)),
            t.indexOf(".") > -1 && (i = t.split(".")),
            c.d(this.data, i)
        },
        e.prototype.addResource = function(t, e, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                silent: !1
            },
            i = this.options.keySeparator;
            void 0 === i && (i = ".");
            var a = [t, e];
            n && (a = a.concat(i ? n.split(i) : n)),
            t.indexOf(".") > -1 && (a = t.split("."), r = e, e = a[1]),
            this.addNamespaces(e),
            c.h(this.data, a, r),
            o.silent || this.emit("added", t, e, n, r)
        },
        e.prototype.addResources = function(t, e, n) {
            for (var r in n)"string" == typeof n[r] && this.addResource(t, e, r, n[r], {
                silent: !0
            });
            this.emit("added", t, e, n)
        },
        e.prototype.addResourceBundle = function(t, e, n, r, o) {
            var i = [t, e];
            t.indexOf(".") > -1 && (i = t.split("."), r = n, n = e, e = i[1]),
            this.addNamespaces(e);
            var a = c.d(this.data, i) || {};
            r ? c.b(a, n, o) : a = u({},
            a, n),
            c.h(this.data, i, a),
            this.emit("added", t, e, n)
        },
        e.prototype.removeResourceBundle = function(t, e) {
            this.hasResourceBundle(t, e) && delete this.data[t][e],
            this.removeNamespaces(e),
            this.emit("removed", t, e)
        },
        e.prototype.hasResourceBundle = function(t, e) {
            return void 0 !== this.getResource(t, e)
        },
        e.prototype.getResourceBundle = function(t, e) {
            return e || (e = this.options.defaultNS),
            "v1" === this.options.compatibilityAPI ? u({},
            this.getResource(t, e)) : this.getResource(t, e)
        },
        e.prototype.toJSON = function() {
            return this.data
        },
        e
    } (s.a);
    e.a = l
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var o = n[r],
            i = Object.getOwnPropertyDescriptor(e, o);
            i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
        }
        return t
    }
    function o(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! e || "object" != typeof e && "function" != typeof e ? t: e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
    }
    var s = n(45),
    c = n(89),
    u = n(188),
    l = n(189),
    f = n(98),
    h = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    },
    d = function(t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, e);
            var a = i(this, t.call(this));
            return f.a(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, a),
            a.options = r,
            a.logger = s.a.create("translator"),
            a
        }
        return a(e, t),
        e.prototype.changeLanguage = function(t) {
            t && (this.language = t)
        },
        e.prototype.exists = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                interpolation: {}
            };
            return "v1" === this.options.compatibilityAPI && (e = l.d(e)),
            void 0 !== this.resolve(t, e)
        },
        e.prototype.extractFromKey = function(t, e) {
            var n = e.nsSeparator || this.options.nsSeparator;
            void 0 === n && (n = ":");
            var r = e.keySeparator || this.options.keySeparator || ".",
            o = e.ns || this.options.defaultNS;
            if (n && t.indexOf(n) > -1) {
                var i = t.split(n); (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()),
                t = i.join(r)
            }
            return "string" == typeof o && (o = [o]),
            {
                key: t,
                namespaces: o
            }
        },
        e.prototype.translate = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("object" !== (void 0 === e ? "undefined": p(e)) ? e = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (e = l.d(e)), void 0 === t || null === t || "" === t) return "";
            "number" == typeof t && (t = String(t)),
            "string" == typeof t && (t = [t]);
            var n = e.keySeparator || this.options.keySeparator || ".",
            r = this.extractFromKey(t[t.length - 1], e),
            o = r.key,
            i = r.namespaces,
            a = i[i.length - 1],
            s = e.lng || this.language,
            c = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (s && "cimode" === s.toLowerCase()) {
                if (c) {
                    return a + (e.nsSeparator || this.options.nsSeparator) + o
                }
                return o
            }
            var u = this.resolve(t, e),
            f = Object.prototype.toString.apply(u),
            d = ["[object Number]", "[object Function]", "[object RegExp]"],
            g = void 0 !== e.joinArrays ? e.joinArrays: this.options.joinArrays;
            if (u && "string" != typeof u && d.indexOf(f) < 0 && (!g || "[object Array]" !== f)) {
                if (!e.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                this.options.returnedObjectHandler ? this.options.returnedObjectHandler(o, u, e) : "key '" + o + " (" + this.language + ")' returned an object instead of string.";
                if (e.keySeparator || this.options.keySeparator) {
                    var y = "[object Array]" === f ? [] : {};
                    for (var v in u) Object.prototype.hasOwnProperty.call(u, v) && (y[v] = this.translate("" + o + n + v, h({},
                    e, {
                        joinArrays: !1,
                        ns: i
                    })));
                    u = y
                }
            } else if (g && "[object Array]" === f)(u = u.join(g)) && (u = this.extendTranslation(u, o, e));
            else {
                var m = !1,
                b = !1;
                if (this.isValidLookup(u) || void 0 === e.defaultValue || (m = !0, u = e.defaultValue), this.isValidLookup(u) || (b = !0, u = o), b || m) {
                    this.logger.log("missingKey", s, a, o, u);
                    var w = [],
                    x = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && x && x[0]) for (var k = 0; k < x.length; k++) w.push(x[k]);
                    else "all" === this.options.saveMissingTo ? w = this.languageUtils.toResolveHierarchy(e.lng || this.language) : w.push(e.lng || this.language);
                    this.options.saveMissing && (this.options.missingKeyHandler ? this.options.missingKeyHandler(w, a, o, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(w, a, o, u)),
                    this.emit("missingKey", w, a, o, u)
                }
                u = this.extendTranslation(u, o, e),
                b && u === o && this.options.appendNamespaceToMissingKey && (u = a + ":" + o),
                b && this.options.parseMissingKeyHandler && (u = this.options.parseMissingKeyHandler(u))
            }
            return u
        },
        e.prototype.extendTranslation = function(t, e, n) {
            var r = this;
            n.interpolation && this.interpolator.init(h({},
            n, {
                interpolation: h({},
                this.options.interpolation, n.interpolation)
            }));
            var o = n.replace && "string" != typeof n.replace ? n.replace: n;
            this.options.interpolation.defaultVariables && (o = h({},
            this.options.interpolation.defaultVariables, o)),
            t = this.interpolator.interpolate(t, o, n.lng || this.language),
            !1 !== n.nest && (t = this.interpolator.nest(t,
            function() {
                return r.translate.apply(r, arguments)
            },
            n)),
            n.interpolation && this.interpolator.reset();
            var i = n.postProcess || this.options.postProcess,
            a = "string" == typeof i ? [i] : i;
            return void 0 !== t && a && a.length && !1 !== n.applyPostProcessor && (t = u.a.handle(a, t, e, n, this)),
            t
        },
        e.prototype.resolve = function(t) {
            var e = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = void 0;
            return "string" == typeof t && (t = [t]),
            t.forEach(function(t) {
                if (!e.isValidLookup(r)) {
                    var o = e.extractFromKey(t, n),
                    i = o.key,
                    a = o.namespaces;
                    e.options.fallbackNS && (a = a.concat(e.options.fallbackNS));
                    var s = void 0 !== n.count && "string" != typeof n.count,
                    c = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                    u = n.lngs ? n.lngs: e.languageUtils.toResolveHierarchy(n.lng || e.language);
                    a.forEach(function(t) {
                        e.isValidLookup(r) || u.forEach(function(o) {
                            if (!e.isValidLookup(r)) {
                                var a = i,
                                u = [a],
                                l = void 0;
                                s && (l = e.pluralResolver.getSuffix(o, n.count)),
                                s && c && u.push(a + l),
                                c && u.push(a += "" + e.options.contextSeparator + n.context),
                                s && u.push(a += l);
                                for (var f = void 0; f = u.pop();) e.isValidLookup(r) || (r = e.getResource(o, t, f, n))
                            }
                        })
                    })
                }
            }),
            r
        },
        e.prototype.isValidLookup = function(t) {
            return ! (void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
        },
        e.prototype.getResource = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return this.resourceStore.getResource(t, e, n, r)
        },
        e
    } (c.a);
    e.a = d
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function o(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    var i = n(45),
    a = function() {
        function t(e) {
            r(this, t),
            this.options = e,
            this.whitelist = this.options.whitelist || !1,
            this.logger = i.a.create("languageUtils")
        }
        return t.prototype.getScriptPartFromCode = function(t) {
            if (!t || t.indexOf("-") < 0) return null;
            var e = t.split("-");
            return 2 === e.length ? null: (e.pop(), this.formatLanguageCode(e.join("-")))
        },
        t.prototype.getLanguagePartFromCode = function(t) {
            if (!t || t.indexOf("-") < 0) return t;
            var e = t.split("-");
            return this.formatLanguageCode(e[0])
        },
        t.prototype.formatLanguageCode = function(t) {
            if ("string" == typeof t && t.indexOf("-") > -1) {
                var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                n = t.split("-");
                return this.options.lowerCaseLng ? n = n.map(function(t) {
                    return t.toLowerCase()
                }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = o(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = o(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = o(n[2].toLowerCase()))),
                n.join("-")
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
        },
        t.prototype.isWhitelisted = function(t) {
            return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)),
            !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1
        },
        t.prototype.getFallbackCodes = function(t, e) {
            if (!t) return [];
            if ("string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
            if (!e) return t.
        default || [];
            var n = t[e];
            return n || (n = t[this.getScriptPartFromCode(e)]),
            n || (n = t[this.formatLanguageCode(e)]),
            n || (n = t.
        default),
            n || []
        },
        t.prototype.toResolveHierarchy = function(t, e) {
            var n = this,
            r = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
            o = [],
            i = function(t) {
                t && (n.isWhitelisted(t) ? o.push(t) : n.logger.warn("rejecting non-whitelisted language code: " + t))
            };
            return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" == typeof t && i(this.formatLanguageCode(t)),
            r.forEach(function(t) {
                o.indexOf(t) < 0 && i(n.formatLanguageCode(t))
            }),
            o
        },
        t
    } ();
    e.a = a
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function o() {
        var t = {};
        return a.forEach(function(e) {
            e.lngs.forEach(function(n) {
                t[n] = {
                    numbers: e.nr,
                    plurals: s[e.fc]
                }
            })
        }),
        t
    }
    var i = n(45),
    a = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    },
    {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    },
    {
        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    },
    {
        lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    },
    {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    },
    {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    },
    {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    },
    {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    },
    {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    },
    {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    },
    {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    },
    {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    },
    {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    },
    {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    },
    {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    },
    {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    },
    {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    },
    {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    },
    {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    },
    {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    },
    {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    },
    {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }],
    s = {
        1 : function(t) {
            return Number(t > 1)
        },
        2 : function(t) {
            return Number(1 != t)
        },
        3 : function(t) {
            return 0
        },
        4 : function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        5 : function(t) {
            return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
        },
        6 : function(t) {
            return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
        },
        7 : function(t) {
            return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        8 : function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
        },
        9 : function(t) {
            return Number(t >= 2)
        },
        10 : function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
        },
        11 : function(t) {
            return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
        },
        12 : function(t) {
            return Number(t % 10 != 1 || t % 100 == 11)
        },
        13 : function(t) {
            return Number(0 !== t)
        },
        14 : function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
        },
        15 : function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        16 : function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
        },
        17 : function(t) {
            return Number(1 == t || t % 10 == 1 ? 0 : 1)
        },
        18 : function(t) {
            return Number(0 == t ? 0 : 1 == t ? 1 : 2)
        },
        19 : function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
        },
        20 : function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
        },
        21 : function(t) {
            return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
        }
    },
    c = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(this, t),
            this.languageUtils = e,
            this.options = n,
            this.logger = i.a.create("pluralResolver"),
            this.rules = o()
        }
        return t.prototype.addRule = function(t, e) {
            this.rules[t] = e
        },
        t.prototype.getRule = function(t) {
            return this.rules[this.languageUtils.getLanguagePartFromCode(t)]
        },
        t.prototype.needsPlural = function(t) {
            var e = this.getRule(t);
            return e && e.numbers.length > 1
        },
        t.prototype.getSuffix = function(t, e) {
            var n = this,
            r = this.getRule(t);
            if (r) {
                if (1 === r.numbers.length) return "";
                var o = r.noAbs ? r.plurals(e) : r.plurals(Math.abs(e)),
                i = r.numbers[o];
                this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural": 1 === i && (i = ""));
                var a = function() {
                    return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                };
                return "v1" === this.options.compatibilityJSON ? 1 === i ? "": "number" == typeof i ? "_plural_" + i.toString() : a() : "v2" === this.options.compatibilityJSON || 2 === r.numbers.length && 1 === r.numbers[0] ? a() : 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
            }
            return this.logger.warn("no plural rule found for: " + t),
            ""
        },
        t
    } ();
    e.a = c
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = n(98),
    i = n(45),
    a = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    s = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, t),
            this.logger = i.a.create("interpolator"),
            this.init(e, !0)
        }
        return t.prototype.init = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments[1] && (this.options = t, this.format = t.interpolation && t.interpolation.format ||
            function(t) {
                return t
            },
            this.escape = t.interpolation && t.interpolation.escape || o.c),
            t.interpolation || (t.interpolation = {
                escapeValue: !0
            });
            var e = t.interpolation;
            this.escapeValue = void 0 === e.escapeValue || e.escapeValue,
            this.prefix = e.prefix ? o.g(e.prefix) : e.prefixEscaped || "{{",
            this.suffix = e.suffix ? o.g(e.suffix) : e.suffixEscaped || "}}",
            this.formatSeparator = e.formatSeparator ? e.formatSeparator: e.formatSeparator || ",",
            this.unescapePrefix = e.unescapeSuffix ? "": e.unescapePrefix || "-",
            this.unescapeSuffix = this.unescapePrefix ? "": e.unescapeSuffix || "",
            this.nestingPrefix = e.nestingPrefix ? o.g(e.nestingPrefix) : e.nestingPrefixEscaped || o.g("$t("),
            this.nestingSuffix = e.nestingSuffix ? o.g(e.nestingSuffix) : e.nestingSuffixEscaped || o.g(")"),
            this.resetRegExp()
        },
        t.prototype.reset = function() {
            this.options && this.init(this.options)
        },
        t.prototype.resetRegExp = function() {
            var t = this.prefix + "(.+?)" + this.suffix;
            this.regexp = new RegExp(t, "g");
            var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
            this.regexpUnescape = new RegExp(e, "g");
            var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
            this.nestingRegexp = new RegExp(n, "g")
        },
        t.prototype.interpolate = function(t, e, n) {
            function r(t) {
                return t.replace(/\$/g, "$$$$")
            }
            var i = this,
            a = void 0,
            s = void 0,
            c = function(t) {
                if (t.indexOf(i.formatSeparator) < 0) return o.d(e, t);
                var r = t.split(i.formatSeparator),
                a = r.shift().trim(),
                s = r.join(i.formatSeparator).trim();
                return i.format(o.d(e, a), s, n)
            };
            for (this.resetRegExp(); a = this.regexpUnescape.exec(t);) s = c(a[1].trim()),
            t = t.replace(a[0], s),
            this.regexpUnescape.lastIndex = 0;
            for (; a = this.regexp.exec(t);) s = c(a[1].trim()),
            "string" != typeof s && (s = o.e(s)),
            s || (this.logger.warn("missed to pass in variable " + a[1] + " for interpolating " + t), s = ""),
            s = r(this.escapeValue ? this.escape(s) : s),
            t = t.replace(a[0], s),
            this.regexp.lastIndex = 0;
            return t
        },
        t.prototype.nest = function(t, e) {
            function n(t) {
                if (t.indexOf(",") < 0) return t;
                var e = t.split(",");
                t = e.shift();
                var n = e.join(",");
                n = this.interpolate(n, c),
                n = n.replace(/'/g, '"');
                try {
                    c = JSON.parse(n)
                } catch(e) {
                    this.logger.error("failed parsing options string in nesting for key " + t, e)
                }
                return t
            }
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = void 0,
            s = void 0,
            c = a({},
            r);
            for (c.applyPostProcessor = !1; i = this.nestingRegexp.exec(t);) {
                if ((s = e(n.call(this, i[1].trim()), c)) && i[0] === t && "string" != typeof s) return s;
                "string" != typeof s && (s = o.e(s)),
                s || (this.logger.warn("missed to resolve " + i[1] + " for nesting " + t), s = ""),
                t = t.replace(i[0], s),
                this.regexp.lastIndex = 0
            }
            return t
        },
        t
    } ();
    e.a = s
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var o = n[r],
            i = Object.getOwnPropertyDescriptor(e, o);
            i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
        }
        return t
    }
    function o(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! e || "object" != typeof e && "function" != typeof e ? t: e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
    }
    function s(t, e) {
        for (var n = t.indexOf(e); - 1 !== n;) t.splice(n, 1),
        n = t.indexOf(e)
    }
    var c = n(98),
    u = n(45),
    l = n(89),
    f = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    h = function() {
        function t(t, e) {
            var n = [],
            r = !0,
            o = !1,
            i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); ! (r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch(t) {
                o = !0,
                i = t
            } finally {
                try { ! r && s.
                    return && s.
                    return ()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    p = function(t) {
        function e(n, r, a) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            o(this, e);
            var c = i(this, t.call(this));
            return c.backend = n,
            c.store = r,
            c.services = a,
            c.options = s,
            c.logger = u.a.create("backendConnector"),
            c.state = {},
            c.queue = [],
            c.backend && c.backend.init && c.backend.init(a, s.backend, s),
            c
        }
        return a(e, t),
        e.prototype.queueLoad = function(t, e, n) {
            var r = this,
            o = [],
            i = [],
            a = [],
            s = [];
            return t.forEach(function(t) {
                var n = !0;
                e.forEach(function(e) {
                    var a = t + "|" + e;
                    r.store.hasResourceBundle(t, e) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? i.indexOf(a) < 0 && i.push(a) : (r.state[a] = 1, n = !1, i.indexOf(a) < 0 && i.push(a), o.indexOf(a) < 0 && o.push(a), s.indexOf(e) < 0 && s.push(e)))
                }),
                n || a.push(t)
            }),
            (o.length || i.length) && this.queue.push({
                pending: i,
                loaded: {},
                errors: [],
                callback: n
            }),
            {
                toLoad: o,
                pending: i,
                toLoadLanguages: a,
                toLoadNamespaces: s
            }
        },
        e.prototype.loaded = function(t, e, n) {
            var r = this,
            o = t.split("|"),
            i = h(o, 2),
            a = i[0],
            u = i[1];
            e && this.emit("failedLoading", a, u, e),
            n && this.store.addResourceBundle(a, u, n),
            this.state[t] = e ? -1 : 2,
            this.queue.forEach(function(n) {
                c.f(n.loaded, [a], u),
                s(n.pending, t),
                e && n.errors.push(e),
                0 !== n.pending.length || n.done || (r.emit("loaded", n.loaded), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
            }),
            this.queue = this.queue.filter(function(t) {
                return ! t.done
            })
        },
        e.prototype.read = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            o = this,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
            a = arguments[5];
            return t.length ? this.backend[n](t, e,
            function(s, c) {
                if (s && c && r < 5) return void setTimeout(function() {
                    o.read.call(o, t, e, n, r + 1, 2 * i, a)
                },
                i);
                a(s, c)
            }) : a(null, {})
        },
        e.prototype.load = function(t, e, n) {
            var r = this;
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            n && n();
            var o = f({},
            this.backend.options, this.options.backend);
            "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)),
            "string" == typeof e && (e = [e]);
            var i = this.queueLoad(t, e, n);
            if (!i.toLoad.length) return i.pending.length || n(),
            null;
            o.allowMultiLoading && this.backend.readMulti ? this.read(i.toLoadLanguages, i.toLoadNamespaces, "readMulti", null, null,
            function(t, e) {
                t && r.logger.warn("loading namespaces " + i.toLoadNamespaces.join(", ") + " for languages " + i.toLoadLanguages.join(", ") + " via multiloading failed", t),
                !t && e && r.logger.log("successfully loaded namespaces " + i.toLoadNamespaces.join(", ") + " for languages " + i.toLoadLanguages.join(", ") + " via multiloading", e),
                i.toLoad.forEach(function(n) {
                    var o = n.split("|"),
                    i = h(o, 2),
                    a = i[0],
                    s = i[1],
                    u = c.d(e, [a, s]);
                    if (u) r.loaded(n, t, u);
                    else {
                        var l = "loading namespace " + s + " for language " + a + " via multiloading failed";
                        r.loaded(n, l),
                        r.logger.error(l)
                    }
                })
            }) : i.toLoad.forEach(function(t) {
                r.loadOne(t)
            })
        },
        e.prototype.reload = function(t, e) {
            var n = this;
            this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
            var r = f({},
            this.backend.options, this.options.backend);
            "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)),
            "string" == typeof e && (e = [e]),
            r.allowMultiLoading && this.backend.readMulti ? this.read(t, e, "readMulti", null, null,
            function(r, o) {
                r && n.logger.warn("reloading namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading failed", r),
                !r && o && n.logger.log("successfully reloaded namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading", o),
                t.forEach(function(t) {
                    e.forEach(function(e) {
                        var i = c.d(o, [t, e]);
                        if (i) n.loaded(t + "|" + e, r, i);
                        else {
                            var a = "reloading namespace " + e + " for language " + t + " via multiloading failed";
                            n.loaded(t + "|" + e, a),
                            n.logger.error(a)
                        }
                    })
                })
            }) : t.forEach(function(t) {
                e.forEach(function(e) {
                    n.loadOne(t + "|" + e, "re")
                })
            })
        },
        e.prototype.loadOne = function(t) {
            var e = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = t.split("|"),
            o = h(r, 2),
            i = o[0],
            a = o[1];
            this.read(i, a, "read", null, null,
            function(r, o) {
                r && e.logger.warn(n + "loading namespace " + a + " for language " + i + " failed", r),
                !r && o && e.logger.log(n + "loaded namespace " + a + " for language " + i, o),
                e.loaded(t, r, o)
            })
        },
        e.prototype.saveMissing = function(t, e, n, r) {
            this.backend && this.backend.create && this.backend.create(t, e, n, r),
            t && t[0] && this.store.addResource(t[0], e, n, r)
        },
        e
    } (l.a);
    e.a = p
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var o = n[r],
            i = Object.getOwnPropertyDescriptor(e, o);
            i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
        }
        return t
    }
    function o(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! e || "object" != typeof e && "function" != typeof e ? t: e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
    }
    var s = n(45),
    c = n(89),
    u = Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    l = function(t) {
        function e(n, r, a) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            o(this, e);
            var u = i(this, t.call(this));
            return u.cache = n,
            u.store = r,
            u.services = a,
            u.options = c,
            u.logger = s.a.create("cacheConnector"),
            u.cache && u.cache.init && u.cache.init(a, c.cache, c),
            u
        }
        return a(e, t),
        e.prototype.load = function(t, e, n) {
            var r = this;
            if (!this.cache) return n && n();
            var o = u({},
            this.cache.options, this.options.cache),
            i = "string" == typeof t ? this.services.languageUtils.toResolveHierarchy(t) : t;
            o.enabled ? this.cache.load(i,
            function(t, e) {
                if (t && r.logger.error("loading languages " + i.join(", ") + " from cache failed", t), e) for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) for (var a in e[o]) if (Object.prototype.hasOwnProperty.call(e[o], a) && "i18nStamp" !== a) {
                    var s = e[o][a];
                    s && r.store.addResourceBundle(o, a, s)
                }
                n && n()
            }) : n && n()
        },
        e.prototype.save = function() {
            this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
        },
        e
    } (c.a);
    e.a = l
},
function(t, e, n) {
    "use strict";
    function r() {
        return {
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            whitelist: !1,
            nonExplicitWhitelist: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            saveMissing: !1,
            saveMissingTo: "fallback",
            missingKeyHandler: !1,
            postProcess: !1,
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: function() {},
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: function(t) {
                return {
                    defaultValue: t[1]
                }
            },
            interpolation: {
                escapeValue: !0,
                format: function(t, e, n) {
                    return t
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                defaultVariables: void 0
            }
        }
    }
    function o(t) {
        return "string" == typeof t.ns && (t.ns = [t.ns]),
        "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
        "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
        t.whitelist && t.whitelist.indexOf("cimode") < 0 && t.whitelist.push("cimode"),
        t
    }
    n.d(e, "a",
    function() {
        return r
    }),
    e.b = o
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3);
    r.__exportStar(n(265), e),
    r.__exportStar(n(266), e)
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.enUS = {}
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.zhHans = {
        
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.runJikeAppUrlSchema = function(t) {
        location.href = t
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(269),
        __esModule: !0
    }
},
function(t, e, n) {
    n(270);
    var r = n(46).Object;
    t.exports = function(t, e) {
        return r.create(t, e)
    }
},
function(t, e, n) {
    var r = n(80);
    r(r.S, "Object", {
        create: n(156)
    })
},
function(t, e, n) {
    var r = n(48),
    o = n(81),
    i = n(139);
    t.exports = n(49) ? Object.defineProperties: function(t, e) {
        o(t);
        for (var n, a = i(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
        return t
    }
},
function(t, e, n) {
    var r = n(82),
    o = n(241),
    i = n(273);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = r(e),
            u = o(c.length),
            l = i(a, u);
            if (t && n != n) {
                for (; u > l;) if ((s = c[l++]) != s) return ! 0
            } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
            return ! t && -1
        }
    }
},
function(t, e, n) {
    var r = n(159),
    o = Math.max,
    i = Math.min;
    t.exports = function(t, e) {
        return t = r(t),
        t < 0 ? o(t + e, 0) : i(t, e)
    }
},
function(t, e, n) {
    var r = n(159),
    o = n(158);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(o(e)),
            c = r(n),
            u = s.length;
            return c < 0 || c >= u ? t ? "": void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i: t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
},
function(t, e, n) {
    "use strict";
    var r = n(156),
    o = n(100),
    i = n(153),
    a = {};
    n(55)(a, n(43)("iterator"),
    function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
},
function(t, e, n) {
    var r = n(50),
    o = n(201),
    i = n(160)("IE_PROTO"),
    a = Object.prototype;
    t.exports = Object.getPrototypeOf ||
    function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? a: null
    }
},
function(t, e, n) {
    "use strict";
    var r = n(278),
    o = n(279),
    i = n(140),
    a = n(82);
    t.exports = n(193)(Array, "Array",
    function(t, e) {
        this._t = a(t),
        this._i = 0,
        this._k = e
    },
    function() {
        var t = this._t,
        e = this._k,
        n = this._i++;
        return ! t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    },
    "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
},
function(t, e) {
    t.exports = function() {}
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(281),
        __esModule: !0
    }
},
function(t, e, n) {
    n(244),
    n(245),
    t.exports = n(164).f("iterator")
},
function(t, e, n) {
    t.exports = {
    default:
        n(283),
        __esModule: !0
    }
},
function(t, e, n) {
    n(284),
    n(243),
    n(289),
    n(290),
    t.exports = n(46).Symbol
},
function(t, e, n) {
    "use strict";
    var r = n(34),
    o = n(50),
    i = n(49),
    a = n(80),
    s = n(194),
    c = n(285).KEY,
    u = n(92),
    l = n(161),
    f = n(153),
    h = n(101),
    p = n(43),
    d = n(164),
    g = n(165),
    y = n(286),
    v = n(287),
    m = n(81),
    b = n(56),
    w = n(82),
    x = n(155),
    k = n(100),
    S = n(156),
    E = n(288),
    T = n(202),
    O = n(48),
    _ = n(139),
    M = T.f,
    I = O.f,
    j = E.f,
    C = r.Symbol,
    A = r.JSON,
    L = A && A.stringify,
    P = p("_hidden"),
    D = p("toPrimitive"),
    N = {}.propertyIsEnumerable,
    R = l("symbol-registry"),
    B = l("symbols"),
    F = l("op-symbols"),
    z = Object.prototype,
    U = "function" == typeof C,
    G = r.QObject,
    H = !G || !G.prototype || !G.prototype.findChild,
    V = i && u(function() {
        return 7 != S(I({},
        "a", {
            get: function() {
                return I(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ?
    function(t, e, n) {
        var r = M(z, e);
        r && delete z[e],
        I(t, e, n),
        r && t !== z && I(z, e, r)
    }: I,
    W = function(t) {
        var e = B[t] = S(C.prototype);
        return e._k = t,
        e
    },
    Y = U && "symbol" == typeof C.iterator ?
    function(t) {
        return "symbol" == typeof t
    }: function(t) {
        return t instanceof C
    },
    Q = function(t, e, n) {
        return t === z && Q(F, e, n),
        m(t),
        e = x(e, !0),
        m(n),
        o(B, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1), n = S(n, {
            enumerable: k(0, !1)
        })) : (o(t, P) || I(t, P, k(1, {})), t[P][e] = !0), V(t, e, n)) : I(t, e, n)
    },
    q = function(t, e) {
        m(t);
        for (var n, r = y(e = w(e)), o = 0, i = r.length; i > o;) Q(t, n = r[o++], e[n]);
        return t
    },
    K = function(t, e) {
        return void 0 === e ? S(t) : q(S(t), e)
    },
    J = function(t) {
        var e = N.call(this, t = x(t, !0));
        return ! (this === z && o(B, t) && !o(F, t)) && (!(e || !o(this, t) || !o(B, t) || o(this, P) && this[P][t]) || e)
    },
    X = function(t, e) {
        if (t = w(t), e = x(e, !0), t !== z || !o(B, e) || o(F, e)) {
            var n = M(t, e);
            return ! n || !o(B, e) || o(t, P) && t[P][e] || (n.enumerable = !0),
            n
        }
    },
    Z = function(t) {
        for (var e, n = j(w(t)), r = [], i = 0; n.length > i;) o(B, e = n[i++]) || e == P || e == c || r.push(e);
        return r
    },
    $ = function(t) {
        for (var e, n = t === z,
        r = j(n ? F: w(t)), i = [], a = 0; r.length > a;) ! o(B, e = r[a++]) || n && !o(z, e) || i.push(B[e]);
        return i
    };
    U || (C = function() {
        if (this instanceof C) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
        e = function(n) {
            this === z && e.call(F, n),
            o(this, P) && o(this[P], t) && (this[P][t] = !1),
            V(this, t, k(1, n))
        };
        return i && H && V(z, t, {
            configurable: !0,
            set: e
        }),
        W(t)
    },
    s(C.prototype, "toString",
    function() {
        return this._k
    }), T.f = X, O.f = Q, n(195).f = E.f = Z, n(141).f = J, n(173).f = $, i && !n(152) && s(z, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return W(p(t))
    }),
    a(a.G + a.W + a.F * !U, {
        Symbol: C
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) p(tt[et++]);
    for (var nt = _(p.store), rt = 0; nt.length > rt;) g(nt[rt++]);
    a(a.S + a.F * !U, "Symbol", {
        for: function(t) {
            return o(R, t += "") ? R[t] : R[t] = C(t)
        },
        keyFor: function(t) {
            if (!Y(t)) throw TypeError(t + " is not a symbol!");
            for (var e in R) if (R[e] === t) return e
        },
        useSetter: function() {
            H = !0
        },
        useSimple: function() {
            H = !1
        }
    }),
    a(a.S + a.F * !U, "Object", {
        create: K,
        defineProperty: Q,
        defineProperties: q,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: $
    }),
    A && a(a.S + a.F * (!U || u(function() {
        var t = C();
        return "[null]" != L([t]) || "{}" != L({
            a: t
        }) || "{}" != L(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (b(e) || void 0 !== t) && !Y(t)) return v(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
            }),
            r[1] = e,
            L.apply(A, r)
        }
    }),
    C.prototype[D] || n(55)(C.prototype, D, C.prototype.valueOf),
    f(C, "Symbol"),
    f(Math, "Math", !0),
    f(r.JSON, "JSON", !0)
},
function(t, e, n) {
    var r = n(101)("meta"),
    o = n(56),
    i = n(50),
    a = n(48).f,
    s = 0,
    c = Object.isExtensible ||
    function() {
        return ! 0
    },
    u = !n(92)(function() {
        return c(Object.preventExtensions({}))
    }),
    l = function(t) {
        a(t, r, {
            value: {
                i: "O" + ++s,
                w: {}
            }
        })
    },
    f = function(t, e) {
        if (!o(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
        if (!i(t, r)) {
            if (!c(t)) return "F";
            if (!e) return "E";
            l(t)
        }
        return t[r].i
    },
    h = function(t, e) {
        if (!i(t, r)) {
            if (!c(t)) return ! 0;
            if (!e) return ! 1;
            l(t)
        }
        return t[r].w
    },
    p = function(t) {
        return u && d.NEED && c(t) && !i(t, r) && l(t),
        t
    },
    d = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: f,
        getWeak: h,
        onFreeze: p
    }
},
function(t, e, n) {
    var r = n(139),
    o = n(173),
    i = n(141);
    t.exports = function(t) {
        var e = r(t),
        n = o.f;
        if (n) for (var a, s = n(t), c = i.f, u = 0; s.length > u;) c.call(t, a = s[u++]) && e.push(a);
        return e
    }
},
function(t, e, n) {
    var r = n(157);
    t.exports = Array.isArray ||
    function(t) {
        return "Array" == r(t)
    }
},
function(t, e, n) {
    var r = n(82),
    o = n(195).f,
    i = {}.toString,
    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    s = function(t) {
        try {
            return o(t)
        } catch(t) {
            return a.slice()
        }
    };
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? s(t) : o(r(t))
    }
},
function(t, e, n) {
    n(165)("asyncIterator")
},
function(t, e, n) {
    n(165)("observable")
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e, n) {
    "use strict";
    function r(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t,
            n = r
        }),
        this.resolve = o(e),
        this.reject = o(n)
    }
    var o = n(190);
    t.exports.f = function(t) {
        return new r(t)
    }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e, n) {
    var r = n(157),
    o = n(43)("toStringTag"),
    i = "Arguments" == r(function() {
        return arguments
    } ()),
    a = function(t, e) {
        try {
            return t[e]
        } catch(t) {}
    };
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = a(e = Object(t), o)) ? n: i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments": s
    }
},
function(t, e, n) {
    var r = n(81),
    o = n(190),
    i = n(43)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e: o(n)
    }
},
function(t, e, n) {
    var r, o, i, a = n(172),
    s = n(830),
    c = n(242),
    u = n(175),
    l = n(34),
    f = l.process,
    h = l.setImmediate,
    p = l.clearImmediate,
    d = l.MessageChannel,
    g = l.Dispatch,
    y = 0,
    v = {},
    m = function() {
        var t = +this;
        if (v.hasOwnProperty(t)) {
            var e = v[t];
            delete v[t],
            e()
        }
    },
    b = function(t) {
        m.call(t.data)
    };
    h && p || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return v[++y] = function() {
            s("function" == typeof t ? t: Function(t), e)
        },
        r(y),
        y
    },
    p = function(t) {
        delete v[t]
    },
    "process" == n(157)(f) ? r = function(t) {
        f.nextTick(a(m, t, 1))
    }: g && g.now ? r = function(t) {
        g.now(a(m, t, 1))
    }: d ? (o = new d, i = o.port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    },
    l.addEventListener("message", b, !1)) : r = "onreadystatechange" in u("script") ?
    function(t) {
        c.appendChild(u("script")).onreadystatechange = function() {
            c.removeChild(this),
            m.call(t)
        }
    }: function(t) {
        setTimeout(a(m, t, 1), 0)
    }),
    t.exports = {
        set: h,
        clear: p
    }
},
function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch(t) {
            return {
                e: !0,
                v: t
            }
        }
    }
},
function(t, e, n) {
    var r = n(81),
    o = n(56),
    i = n(376);
    t.exports = function(t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e),
        n.promise
    }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e, n) {
    t.exports = n(816)
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3),
    o = n(817),
    i = n(44),
    a = n(252);
    n(818),
    n(819),
    n(820),
    n(821);
    var s = n(838),
    c = n(839),
    u = n(841),
    l = (window.tracking, window.html2canvas, window.navigator.userAgent.toLocaleLowerCase().indexOf("jike") >= 0),
    f = [n(843), n(844), n(845), n(846), n(847), n(848), n(849), n(850), n(851), n(852), n(853), n(854), n(855), n(856), n(857), n(858)];//改这里
    e.$ = function(t, e) {
        var n = (e || document).querySelectorAll(t);
        return 0 === n.length ? null: 1 === n.length ? n[0] : Array.prototype.slice.call(n)
    };
    var h = function(t) {
        for (var e = atob(t.split(",")[1]), n = t.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(e.length), o = new Uint8Array(r), i = 0; i < e.length; i++) o[i] = e.charCodeAt(i);
        return new Blob([r], {
            type: n
        })
    },
    p = function() {
        function t() {
            var t = this;
            i.enableDevTool(o),
            this.editableImages = [],
            this.$editor = e.$(".edit-wrap"),
            this.$fileInput = e.$(".file-input"),
            this.$originImage = e.$(".origin-image"),
            this.$output = e.$(".output"),
            this.renderBadgeList(),
            this.$fileInput.addEventListener("change",
            function(e) {
                var n = e.target.files[0],
                r = new FileReader;
                r.readAsDataURL(n),
                r.onload = function(e) {
                    var n = e.target.result;
                    u.getOrientation(n,
                    function(e) {
                        u.getImgData(n, e,
                        function(e) {
                            t.setEditorBg(e),
                            t.addEditableIamge(f[Math.floor(1 * Math.random())]),
                            t.switchView("edit")
                        })
                    })
                },
                i.JKA.event({
                    action: "上传图片"
                })
            }),
            e.$(".btn-confirm-edit").addEventListener("click",
            function() {
                t.generateOutput(),
                i.JKA.event({
                    action: "确定生成图片"
                })
            }),
            l ? this.requestProfile().then(function(e) {
                t.profile = e.user,
                t.setEditorBg(t.profile.avatarImage.picUrl),
                t.addEditableIamge(f[Math.floor(3 * Math.random()) + 1]),
                t.switchView("edit")
            }).
            catch(function() {}) : this.switchView("upload")
        }
        return t.prototype.switchView = function(t) {
            e.$(".view").forEach(function(t) {
                t.classList.remove("is-active")
            }),
            e.$(".view-" + t).classList.add("is-active")
        },
        t.prototype.setEditorBg = function(t) {
            this.editorBg = t,
            e.$(".origin-image").crossOrigin = "anonymous",
            this.$originImage.src = t
        },
        t.prototype.renderBadgeList = function() {
            var t = this;
            f.forEach(function(n) {
                var r = document.createElement("li");
                r.classList.add("badge-item"),
                r.style.backgroundImage = "url(" + n + ")",
                e.$(".badge-list").appendChild(r),
                r.addEventListener("click",
                function() {
                    t.addEditableIamge(n)
                })
            })
        },
        t.prototype.addEditableIamge = function(t) {
            var n = this,
            r = new c.EditableImage({
                src: t,
                $parent: this.$editor,
                left: .35 * e.$(".view-wrap").clientWidth,
                top: 50,
                onDestory: function() {
                    n.$editor.removeChild(r.$el),
                    n.editableImages = n.editableImages.filter(function(t) {
                        return t !== r
                    })
                }
            });
            this.editableImages.push(r)
        },
        t.prototype.generateOutput = function() {
            e.$(".loading-wrap").style.display = "block";
            var t = document.createElement("canvas"),
            n = t.getContext("2d"),
            r = this.$originImage,
            o = r.naturalWidth,
            i = r.width,
            a = r.naturalHeight,
            s = r.height;
            t.width = o,
            t.height = a;
            var c = o / i;
            n.clearRect(0, 0, i, s),
            n.drawImage(this.$originImage, 0, 0),
            this.editableImages.forEach(function(t) {
                var e = t.top,
                r = t.left,
                i = t.scale,
                a = t.angle,
                s = t.$image,
                u = s.naturalWidth,
                l = s.naturalHeight,
                f = .3 * o * i,
                h = f / u * l,
                p = (r + 1) * c - f / i * (i / 2 - .5),
                d = (e + 1) * c - h / i * (i / 2 - .5);
                n.save(),
                n.translate(p + f / 2, d + h / 2),
                n.rotate(a * Math.PI / 180),
                n.drawImage(s, 0, 0, u, l, -f / 2, -h / 2, f, h),
                n.restore()
            }),
            this.$output.src = e.$(".output2").src = t.toDataURL("image/jpeg", 1),
            //l ? this.editAvatar(this.$output.src) : this.switchView("result")
            this.switchView("result")
        },
        t.prototype.requestProfile = function() {
            return window.fetch("", {
                mode: "cors",
                credentials: "include"
            }).then(function(t) {
                return t.json()
            })
        },
        t.prototype.editAvatar = function(t) {
            var n = this,
            r = h(t);
            s.fileAPI.upload(r).then(function(t) {
                var r = new Headers;
                r.append("Content-Type", "application/json"),
                window.fetch("", {
                    mode: "cors",
                    credentials: "include",
                    method: "POST",
                    headers: r,
                    body: JSON.stringify({
                        avatarImageKey: t.key
                    })
                }).then(function(t) {
                    n.switchView("jike"),
                    e.$(".loading-wrap").style.display = "none"
                }).
                catch(function(t) {
                    e.$(".loading-wrap").style.display = "none",
                    n.toast(decodeURIComponent("网页错误2"), "error")
                })
            }).
            catch(function(t) {
                e.$(".loading-wrap").style.display = "none",
                n.toast(decodeURIComponent("网页错误1"), "error")
            })
        },
        t.prototype.toast = function(t, e, n) {
            /*void 0 === e && (e = "success"),
            void 0 === n && (n = 3e3)
            window.location.href = "jike://ui.jk/toast/show?message=" + t + "&status=" + e + "&duration=" + n*/
        },
        t
    } ();
    new p;
},
function(t, e) {
    t.exports = {
        NAME: "christmas-hat",
        ENABLED: !0
    }
},
function(t, e) {},
function(t, e) { !
    function(t, e) {
        t.tracking = t.tracking || {},
        tracking.inherits = function(t, e) {
            function n() {}
            n.prototype = e.prototype,
            t.superClass_ = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t,
            t.base = function(t, n) {
                var r = Array.prototype.slice.call(arguments, 2);
                return e.prototype[n].apply(t, r)
            }
        },
        tracking.initUserMedia_ = function(e, n) {
            t.navigator.getUserMedia({
                video: !0,
                audio: !(!n || !n.audio)
            },
            function(n) {
                try {
                    e.src = t.URL.createObjectURL(n)
                } catch(t) {
                    e.src = n
                }
            },
            function() {
                throw Error("Cannot capture user camera.")
            })
        },
        tracking.isNode = function(t) {
            return t.nodeType || this.isWindow(t)
        },
        tracking.isWindow = function(t) {
            return !! (t && t.alert && t.document)
        },
        tracking.one = function(t, e) {
            return this.isNode(t) ? t: (e || document).querySelector(t)
        },
        tracking.track = function(t, e, n) {
            if (! (t = tracking.one(t))) throw new Error("Element not found, try a different element or selector.");
            if (!e) throw new Error("Tracker not specified, try `tracking.track(element, new tracking.FaceTracker())`.");
            switch (t.nodeName.toLowerCase()) {
            case "canvas":
                return this.trackCanvas_(t, e, n);
            case "img":
                return this.trackImg_(t, e, n);
            case "video":
                return n && n.camera && this.initUserMedia_(t, n),
                this.trackVideo_(t, e, n);
            default:
                throw new Error("Element not supported, try in a canvas, img, or video.")
            }
        },
        tracking.trackCanvas_ = function(t, e) {
            var n = this,
            r = new tracking.TrackerTask(e);
            return r.on("run",
            function() {
                n.trackCanvasInternal_(t, e)
            }),
            r.run()
        },
        tracking.trackCanvasInternal_ = function(t, e) {
            var n = t.width,
            r = t.height,
            o = t.getContext("2d"),
            i = o.getImageData(0, 0, n, r);
            e.track(i.data, n, r)
        },
        tracking.trackImg_ = function(t, e) {
            var n = t.width,
            r = t.height,
            o = document.createElement("canvas");
            o.width = n,
            o.height = r;
            var i = new tracking.TrackerTask(e);
            return i.on("run",
            function() {
                tracking.Canvas.loadImage(o, t.src, 0, 0, n, r,
                function() {
                    tracking.trackCanvasInternal_(o, e)
                })
            }),
            i.run()
        },
        tracking.trackVideo_ = function(e, n) {
            var r, o, i = document.createElement("canvas"),
            a = i.getContext("2d"),
            s = function() {
                r = e.offsetWidth,
                o = e.offsetHeight,
                i.width = r,
                i.height = o
            };
            s(),
            e.addEventListener("resize", s);
            var c, u = function() {
                c = t.requestAnimationFrame(function() {
                    if (e.readyState === e.HAVE_ENOUGH_DATA) {
                        try {
                            a.drawImage(e, 0, 0, r, o)
                        } catch(t) {}
                        tracking.trackCanvasInternal_(i, n)
                    }
                    u()
                })
            },
            l = new tracking.TrackerTask(n);
            return l.on("stop",
            function() {
                t.cancelAnimationFrame(c)
            }),
            l.on("run",
            function() {
                u()
            }),
            l.run()
        },
        t.URL || (t.URL = t.URL || t.webkitURL || t.msURL || t.oURL),
        navigator.getUserMedia || (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
    } (window),
    function() {
        tracking.EventEmitter = function() {},
        tracking.EventEmitter.prototype.events_ = null,
        tracking.EventEmitter.prototype.addListener = function(t, e) {
            if ("function" != typeof e) throw new TypeError("Listener must be a function");
            return this.events_ || (this.events_ = {}),
            this.emit("newListener", t, e),
            this.events_[t] || (this.events_[t] = []),
            this.events_[t].push(e),
            this
        },
        tracking.EventEmitter.prototype.listeners = function(t) {
            return this.events_ && this.events_[t]
        },
        tracking.EventEmitter.prototype.emit = function(t) {
            var e = this.listeners(t);
            if (e) {
                for (var n = Array.prototype.slice.call(arguments, 1), r = 0; r < e.length; r++) e[r] && e[r].apply(this, n);
                return ! 0
            }
            return ! 1
        },
        tracking.EventEmitter.prototype.on = tracking.EventEmitter.prototype.addListener,
        tracking.EventEmitter.prototype.once = function(t, e) {
            var n = this;
            n.on(t,
            function r() {
                n.removeListener(t, r),
                e.apply(this, arguments)
            })
        },
        tracking.EventEmitter.prototype.removeAllListeners = function(t) {
            return this.events_ ? (t ? delete this.events_[t] : delete this.events_, this) : this
        },
        tracking.EventEmitter.prototype.removeListener = function(t, e) {
            if ("function" != typeof e) throw new TypeError("Listener must be a function");
            if (!this.events_) return this;
            var n = this.listeners(t);
            if (Array.isArray(n)) {
                var r = n.indexOf(e);
                if (r < 0) return this;
                n.splice(r, 1)
            }
            return this
        },
        tracking.EventEmitter.prototype.setMaxListeners = function() {
            throw new Error("Not implemented")
        }
    } (),
    function() {
        tracking.Canvas = {},
        tracking.Canvas.loadImage = function(t, e, n, r, o, i, a) {
            var s = this,
            c = new window.Image;
            c.crossOrigin = "*",
            c.onload = function() {
                var e = t.getContext("2d");
                t.width = o,
                t.height = i,
                e.drawImage(c, n, r, o, i),
                a && a.call(s),
                c = null
            },
            c.src = e
        }
    } (),
    function() {
        tracking.DisjointSet = function(t) {
            if (void 0 === t) throw new Error("DisjointSet length not specified.");
            this.length = t,
            this.parent = new Uint32Array(t);
            for (var e = 0; e < t; e++) this.parent[e] = e
        },
        tracking.DisjointSet.prototype.length = null,
        tracking.DisjointSet.prototype.parent = null,
        tracking.DisjointSet.prototype.find = function(t) {
            return this.parent[t] === t ? t: this.parent[t] = this.find(this.parent[t])
        },
        tracking.DisjointSet.prototype.union = function(t, e) {
            var n = this.find(t),
            r = this.find(e);
            this.parent[n] = r
        }
    } (),
    function() {
        tracking.Image = {},
        tracking.Image.blur = function(t, e, n, r) {
            if ((r = Math.abs(r)) <= 1) throw new Error("Diameter should be greater than 1.");
            for (var o = r / 2,
            i = Math.ceil(r) + (1 - Math.ceil(r) % 2), a = new Float32Array(i), s = (o + .5) / 3, c = s * s, u = 1 / Math.sqrt(2 * Math.PI * c), l = -1 / (2 * s * s), f = 0, h = Math.floor(i / 2), p = 0; p < i; p++) {
                var d = p - h,
                g = u * Math.exp(d * d * l);
                a[p] = g,
                f += g
            }
            for (var y = 0; y < a.length; y++) a[y] /= f;
            return this.separableConvolve(t, e, n, a, a, !1)
        },
        tracking.Image.computeIntegralImage = function(t, e, n, r, o, i, a) {
            if (arguments.length < 4) throw new Error("You should specify at least one output array in the order: sum, square, tilted, sobel.");
            var s;
            a && (s = tracking.Image.sobel(t, e, n));
            for (var c = 0; c < n; c++) for (var u = 0; u < e; u++) {
                var l = c * e * 4 + 4 * u,
                f = ~~ (.299 * t[l] + .587 * t[l + 1] + .114 * t[l + 2]);
                if (r && this.computePixelValueSAT_(r, e, c, u, f), o && this.computePixelValueSAT_(o, e, c, u, f * f), i) {
                    var h = l - 4 * e,
                    p = ~~ (.299 * t[h] + .587 * t[h + 1] + .114 * t[h + 2]);
                    this.computePixelValueRSAT_(i, e, c, u, f, p || 0)
                }
                a && this.computePixelValueSAT_(a, e, c, u, s[l])
            }
        },
        tracking.Image.computePixelValueRSAT_ = function(t, e, n, r, o, i) {
            var a = n * e + r;
            t[a] = (t[a - e - 1] || 0) + (t[a - e + 1] || 0) - (t[a - e - e] || 0) + o + i
        },
        tracking.Image.computePixelValueSAT_ = function(t, e, n, r, o) {
            var i = n * e + r;
            t[i] = (t[i - e] || 0) + (t[i - 1] || 0) + o - (t[i - e - 1] || 0)
        },
        tracking.Image.grayscale = function(t, e, n, r) {
            for (var o = new Uint8ClampedArray(r ? t.length: t.length >> 2), i = 0, a = 0, s = 0; s < n; s++) for (var c = 0; c < e; c++) {
                var u = .299 * t[a] + .587 * t[a + 1] + .114 * t[a + 2];
                o[i++] = u,
                r && (o[i++] = u, o[i++] = u, o[i++] = t[a + 3]),
                a += 4
            }
            return o
        },
        tracking.Image.horizontalConvolve = function(t, e, n, r, o) {
            for (var i = r.length,
            a = Math.floor(i / 2), s = new Float32Array(e * n * 4), c = o ? 1 : 0, u = 0; u < n; u++) for (var l = 0; l < e; l++) {
                for (var f = u,
                h = l,
                p = 4 * (u * e + l), d = 0, g = 0, y = 0, v = 0, m = 0; m < i; m++) {
                    var b = f,
                    w = Math.min(e - 1, Math.max(0, h + m - a)),
                    x = 4 * (b * e + w),
                    k = r[m];
                    d += t[x] * k,
                    g += t[x + 1] * k,
                    y += t[x + 2] * k,
                    v += t[x + 3] * k
                }
                s[p] = d,
                s[p + 1] = g,
                s[p + 2] = y,
                s[p + 3] = v + c * (255 - v)
            }
            return s
        },
        tracking.Image.verticalConvolve = function(t, e, n, r, o) {
            for (var i = r.length,
            a = Math.floor(i / 2), s = new Float32Array(e * n * 4), c = o ? 1 : 0, u = 0; u < n; u++) for (var l = 0; l < e; l++) {
                for (var f = u,
                h = l,
                p = 4 * (u * e + l), d = 0, g = 0, y = 0, v = 0, m = 0; m < i; m++) {
                    var b = Math.min(n - 1, Math.max(0, f + m - a)),
                    w = h,
                    x = 4 * (b * e + w),
                    k = r[m];
                    d += t[x] * k,
                    g += t[x + 1] * k,
                    y += t[x + 2] * k,
                    v += t[x + 3] * k
                }
                s[p] = d,
                s[p + 1] = g,
                s[p + 2] = y,
                s[p + 3] = v + c * (255 - v)
            }
            return s
        },
        tracking.Image.separableConvolve = function(t, e, n, r, o, i) {
            var a = this.verticalConvolve(t, e, n, o, i);
            return this.horizontalConvolve(a, e, n, r, i)
        },
        tracking.Image.sobel = function(t, e, n) {
            t = this.grayscale(t, e, n, !0);
            for (var r = new Float32Array(e * n * 4), o = new Float32Array([ - 1, 0, 1]), i = new Float32Array([1, 2, 1]), a = this.separableConvolve(t, e, n, o, i), s = this.separableConvolve(t, e, n, i, o), c = 0; c < r.length; c += 4) {
                var u = a[c],
                l = s[c],
                f = Math.sqrt(l * l + u * u);
                r[c] = f,
                r[c + 1] = f,
                r[c + 2] = f,
                r[c + 3] = 255
            }
            return r
        }
    } (),
    function() {
        tracking.ViolaJones = {},
        tracking.ViolaJones.REGIONS_OVERLAP = .5,
        tracking.ViolaJones.classifiers = {},
        tracking.ViolaJones.detect = function(t, e, n, r, o, i, a, s) {
            var c, u = 0,
            l = [],
            f = new Int32Array(e * n),
            h = new Int32Array(e * n),
            p = new Int32Array(e * n);
            a > 0 && (c = new Int32Array(e * n)),
            tracking.Image.computeIntegralImage(t, e, n, f, h, p, c);
            for (var d = s[0], g = s[1], y = r * o, v = y * d | 0, m = y * g | 0; v < e && m < n;) {
                for (var b = y * i + .5 | 0,
                w = 0; w < n - m; w += b) for (var x = 0; x < e - v; x += b) a > 0 && this.isTriviallyExcluded(a, c, w, x, e, v, m) || this.evalStages_(s, f, h, p, w, x, e, v, m, y) && (l[u++] = {
                    width: v,
                    height: m,
                    x: x,
                    y: w
                });
                y *= o,
                v = y * d | 0,
                m = y * g | 0
            }
            return this.mergeRectangles_(l)
        },
        tracking.ViolaJones.isTriviallyExcluded = function(t, e, n, r, o, i, a) {
            var s = n * o + r,
            c = s + i,
            u = s + a * o,
            l = u + i;
            return (e[s] - e[c] - e[u] + e[l]) / (i * a * 255) < t
        },
        tracking.ViolaJones.evalStages_ = function(t, e, n, r, o, i, a, s, c, u) {
            var l = 1 / (s * c),
            f = o * a + i,
            h = f + s,
            p = f + c * a,
            d = p + s,
            g = (e[f] - e[h] - e[p] + e[d]) * l,
            y = (n[f] - n[h] - n[p] + n[d]) * l - g * g,
            v = 1;
            y > 0 && (v = Math.sqrt(y));
            for (var m = t.length,
            b = 2; b < m;) {
                for (var w = 0,
                x = t[b++], k = t[b++]; k--;) {
                    for (var S = 0,
                    E = t[b++], T = t[b++], O = 0; O < T; O++) {
                        var _, M, I, j, C = i + t[b++] * u + .5 | 0,
                        A = o + t[b++] * u + .5 | 0,
                        L = t[b++] * u + .5 | 0,
                        P = t[b++] * u + .5 | 0,
                        D = t[b++];
                        E ? (_ = C - P + L + (A + L + P - 1) * a, M = C + (A - 1) * a, I = C - P + (A + P - 1) * a, j = C + L + (A + L - 1) * a, S += (r[_] + r[M] - r[I] - r[j]) * D) : (_ = A * a + C, M = _ + L, I = _ + P * a, j = I + L, S += (e[_] - e[M] - e[I] + e[j]) * D)
                    }
                    var N = t[b++],
                    R = t[b++],
                    B = t[b++];
                    w += S * l < N * v ? R: B
                }
                if (w < x) return ! 1
            }
            return ! 0
        },
        tracking.ViolaJones.mergeRectangles_ = function(t) {
            for (var e = new tracking.DisjointSet(t.length), n = 0; n < t.length; n++) for (var r = t[n], o = 0; o < t.length; o++) {
                var i = t[o];
                if (tracking.Math.intersectRect(r.x, r.y, r.x + r.width, r.y + r.height, i.x, i.y, i.x + i.width, i.y + i.height)) {
                    var a = Math.max(r.x, i.x),
                    s = Math.max(r.y, i.y),
                    c = Math.min(r.x + r.width, i.x + i.width),
                    u = Math.min(r.y + r.height, i.y + i.height),
                    l = (a - c) * (s - u),
                    f = r.width * r.height,
                    h = i.width * i.height;
                    l / (f * (f / h)) >= this.REGIONS_OVERLAP && l / (h * (f / h)) >= this.REGIONS_OVERLAP && e.union(n, o)
                }
            }
            for (var p = {},
            d = 0; d < e.length; d++) {
                var g = e.find(d);
                p[g] ? (p[g].total++, p[g].width += t[d].width, p[g].height += t[d].height, p[g].x += t[d].x, p[g].y += t[d].y) : p[g] = {
                    total: 1,
                    width: t[d].width,
                    height: t[d].height,
                    x: t[d].x,
                    y: t[d].y
                }
            }
            var y = [];
            return Object.keys(p).forEach(function(t) {
                var e = p[t];
                y.push({
                    total: e.total,
                    width: e.width / e.total + .5 | 0,
                    height: e.height / e.total + .5 | 0,
                    x: e.x / e.total + .5 | 0,
                    y: e.y / e.total + .5 | 0
                })
            }),
            y
        }
    } (),
    function() {
        tracking.Brief = {},
        tracking.Brief.N = 512,
        tracking.Brief.randomImageOffsets_ = {},
        tracking.Brief.randomWindowOffsets_ = null,
        tracking.Brief.getDescriptors = function(t, e, n) {
            for (var r = new Int32Array((n.length >> 1) * (this.N >> 5)), o = 0, i = this.getRandomOffsets_(e), a = 0, s = 0; s < n.length; s += 2) for (var c = e * n[s + 1] + n[s], u = 0, l = 0, f = this.N; l < f; l++) t[i[u++] + c] < t[i[u++] + c] && (o |= 1 << (31 & l)),
            l + 1 & 31 || (r[a++] = o, o = 0);
            return r
        },
        tracking.Brief.match = function(t, e, n, r) {
            for (var o = t.length >> 1,
            i = n.length >> 1,
            a = new Array(o), s = 0; s < o; s++) {
                for (var c = 1 / 0,
                u = 0,
                l = 0; l < i; l++) {
                    for (var f = 0,
                    h = 0,
                    p = this.N >> 5; h < p; h++) f += tracking.Math.hammingWeight(e[s * p + h] ^ r[l * p + h]);
                    f < c && (c = f, u = l)
                }
                a[s] = {
                    index1: s,
                    index2: u,
                    keypoint1: [t[2 * s], t[2 * s + 1]],
                    keypoint2: [n[2 * u], n[2 * u + 1]],
                    confidence: 1 - c / this.N
                }
            }
            return a
        },
        tracking.Brief.reciprocalMatch = function(t, e, n, r) {
            var o = [];
            if (0 === t.length || 0 === n.length) return o;
            for (var i = tracking.Brief.match(t, e, n, r), a = tracking.Brief.match(n, r, t, e), s = 0; s < i.length; s++) a[i[s].index2].index2 === s && o.push(i[s]);
            return o
        },
        tracking.Brief.getRandomOffsets_ = function(t) {
            if (!this.randomWindowOffsets_) {
                for (var e = 0,
                n = new Int32Array(4 * this.N), r = 0; r < this.N; r++) n[e++] = Math.round(tracking.Math.uniformRandom( - 15, 16)),
                n[e++] = Math.round(tracking.Math.uniformRandom( - 15, 16)),
                n[e++] = Math.round(tracking.Math.uniformRandom( - 15, 16)),
                n[e++] = Math.round(tracking.Math.uniformRandom( - 15, 16));
                this.randomWindowOffsets_ = n
            }
            if (!this.randomImageOffsets_[t]) {
                for (var o = 0,
                i = new Int32Array(2 * this.N), a = 0; a < this.N; a++) i[o++] = this.randomWindowOffsets_[4 * a] * t + this.randomWindowOffsets_[4 * a + 1],
                i[o++] = this.randomWindowOffsets_[4 * a + 2] * t + this.randomWindowOffsets_[4 * a + 3];
                this.randomImageOffsets_[t] = i
            }
            return this.randomImageOffsets_[t]
        }
    } (),
    function() {
        tracking.Fast = {},
        tracking.Fast.THRESHOLD = 40,
        tracking.Fast.circles_ = {},
        tracking.Fast.findCorners = function(t, e, n, r) {
            var o = this.getCircleOffsets_(e),
            i = new Int32Array(16),
            a = [];
            void 0 === r && (r = this.THRESHOLD);
            for (var s = 3; s < n - 3; s++) for (var c = 3; c < e - 3; c++) {
                for (var u = s * e + c,
                l = t[u], f = 0; f < 16; f++) i[f] = t[u + o[f]];
                this.isCorner(l, i, r) && (a.push(c, s), c += 3)
            }
            return a
        },
        tracking.Fast.isBrighter = function(t, e, n) {
            return t - e > n
        },
        tracking.Fast.isCorner = function(t, e, n) {
            if (this.isTriviallyExcluded(e, t, n)) return ! 1;
            for (var r = 0; r < 16; r++) {
                for (var o = !0,
                i = !0,
                a = 0; a < 9; a++) {
                    var s = e[r + a & 15];
                    if (!this.isBrighter(t, s, n) && (i = !1, !1 === o)) break;
                    if (!this.isDarker(t, s, n) && (o = !1, !1 === i)) break
                }
                if (i || o) return ! 0
            }
            return ! 1
        },
        tracking.Fast.isDarker = function(t, e, n) {
            return e - t > n
        },
        tracking.Fast.isTriviallyExcluded = function(t, e, n) {
            var r = 0,
            o = t[8],
            i = t[12],
            a = t[4],
            s = t[0];
            return this.isBrighter(s, e, n) && r++,
            this.isBrighter(a, e, n) && r++,
            this.isBrighter(o, e, n) && r++,
            this.isBrighter(i, e, n) && r++,
            r < 3 && (r = 0, this.isDarker(s, e, n) && r++, this.isDarker(a, e, n) && r++, this.isDarker(o, e, n) && r++, this.isDarker(i, e, n) && r++, r < 3)
        },
        tracking.Fast.getCircleOffsets_ = function(t) {
            if (this.circles_[t]) return this.circles_[t];
            var e = new Int32Array(16);
            return e[0] = -t - t - t,
            e[1] = e[0] + 1,
            e[2] = e[1] + t + 1,
            e[3] = e[2] + t + 1,
            e[4] = e[3] + t,
            e[5] = e[4] + t,
            e[6] = e[5] + t - 1,
            e[7] = e[6] + t - 1,
            e[8] = e[7] - 1,
            e[9] = e[8] - 1,
            e[10] = e[9] - t - 1,
            e[11] = e[10] - t - 1,
            e[12] = e[11] - t,
            e[13] = e[12] - t,
            e[14] = e[13] - t + 1,
            e[15] = e[14] - t + 1,
            this.circles_[t] = e,
            e
        }
    } (),
    function() {
        tracking.Math = {},
        tracking.Math.distance = function(t, e, n, r) {
            var o = n - t,
            i = r - e;
            return Math.sqrt(o * o + i * i)
        },
        tracking.Math.hammingWeight = function(t) {
            return t -= t >> 1 & 1431655765,
            16843009 * ((t = (858993459 & t) + (t >> 2 & 858993459)) + (t >> 4) & 252645135) >> 24
        },
        tracking.Math.uniformRandom = function(t, e) {
            return t + Math.random() * (e - t)
        },
        tracking.Math.intersectRect = function(t, e, n, r, o, i, a, s) {
            return ! (o > n || a < t || i > r || s < e)
        }
    } (),
    function() {
        tracking.Matrix = {},
        tracking.Matrix.forEach = function(t, e, n, r, o) {
            o = o || 1;
            for (var i = 0; i < n; i += o) for (var a = 0; a < e; a += o) {
                var s = i * e * 4 + 4 * a;
                r.call(this, t[s], t[s + 1], t[s + 2], t[s + 3], s, i, a)
            }
        }
    } (),
    function() {
        tracking.EPnP = {},
        tracking.EPnP.solve = function(t, e, n) {}
    } (),
    function() {
        tracking.Tracker = function() {
            tracking.Tracker.base(this, "constructor")
        },
        tracking.inherits(tracking.Tracker, tracking.EventEmitter),
        tracking.Tracker.prototype.track = function() {}
    } (),
    function() {
        tracking.TrackerTask = function(t) {
            if (tracking.TrackerTask.base(this, "constructor"), !t) throw new Error("Tracker instance not specified.");
            this.setTracker(t)
        },
        tracking.inherits(tracking.TrackerTask, tracking.EventEmitter),
        tracking.TrackerTask.prototype.tracker_ = null,
        tracking.TrackerTask.prototype.running_ = !1,
        tracking.TrackerTask.prototype.getTracker = function() {
            return this.tracker_
        },
        tracking.TrackerTask.prototype.inRunning = function() {
            return this.running_
        },
        tracking.TrackerTask.prototype.setRunning = function(t) {
            this.running_ = t
        },
        tracking.TrackerTask.prototype.setTracker = function(t) {
            this.tracker_ = t
        },
        tracking.TrackerTask.prototype.run = function() {
            var t = this;
            if (!this.inRunning()) return this.setRunning(!0),
            this.reemitTrackEvent_ = function(e) {
                t.emit("track", e)
            },
            this.tracker_.on("track", this.reemitTrackEvent_),
            this.emit("run"),
            this
        },
        tracking.TrackerTask.prototype.stop = function() {
            if (this.inRunning()) return this.setRunning(!1),
            this.emit("stop"),
            this.tracker_.removeListener("track", this.reemitTrackEvent_),
            this
        }
    } (),
    function() {
        tracking.ColorTracker = function(t) {
            tracking.ColorTracker.base(this, "constructor"),
            "string" == typeof t && (t = [t]),
            t && (t.forEach(function(t) {
                if (!tracking.ColorTracker.getColor(t)) throw new Error('Color not valid, try `new tracking.ColorTracker("magenta")`.')
            }), this.setColors(t))
        },
        tracking.inherits(tracking.ColorTracker, tracking.Tracker),
        tracking.ColorTracker.knownColors_ = {},
        tracking.ColorTracker.neighbours_ = {},
        tracking.ColorTracker.registerColor = function(t, e) {
            tracking.ColorTracker.knownColors_[t] = e
        },
        tracking.ColorTracker.getColor = function(t) {
            return tracking.ColorTracker.knownColors_[t]
        },
        tracking.ColorTracker.prototype.colors = ["magenta"],
        tracking.ColorTracker.prototype.minDimension = 20,
        tracking.ColorTracker.prototype.maxDimension = 1 / 0,
        tracking.ColorTracker.prototype.minGroupSize = 30,
        tracking.ColorTracker.prototype.calculateDimensions_ = function(t, e) {
            for (var n = -1,
            r = -1,
            o = 1 / 0,
            i = 1 / 0,
            a = 0; a < e; a += 2) {
                var s = t[a],
                c = t[a + 1];
                s < o && (o = s),
                s > n && (n = s),
                c < i && (i = c),
                c > r && (r = c)
            }
            return {
                width: n - o,
                height: r - i,
                x: o,
                y: i
            }
        },
        tracking.ColorTracker.prototype.getColors = function() {
            return this.colors
        },
        tracking.ColorTracker.prototype.getMinDimension = function() {
            return this.minDimension
        },
        tracking.ColorTracker.prototype.getMaxDimension = function() {
            return this.maxDimension
        },
        tracking.ColorTracker.prototype.getMinGroupSize = function() {
            return this.minGroupSize
        },
        tracking.ColorTracker.prototype.getNeighboursForWidth_ = function(t) {
            if (tracking.ColorTracker.neighbours_[t]) return tracking.ColorTracker.neighbours_[t];
            var e = new Int32Array(8);
            return e[0] = 4 * -t,
            e[1] = 4 * -t + 4,
            e[2] = 4,
            e[3] = 4 * t + 4,
            e[4] = 4 * t,
            e[5] = 4 * t - 4,
            e[6] = -4,
            e[7] = 4 * -t - 4,
            tracking.ColorTracker.neighbours_[t] = e,
            e
        },
        tracking.ColorTracker.prototype.mergeRectangles_ = function(t) {
            for (var e, n = [], r = this.getMinDimension(), o = this.getMaxDimension(), i = 0; i < t.length; i++) {
                var a = t[i];
                e = !0;
                for (var s = i + 1; s < t.length; s++) {
                    var c = t[s];
                    if (tracking.Math.intersectRect(a.x, a.y, a.x + a.width, a.y + a.height, c.x, c.y, c.x + c.width, c.y + c.height)) {
                        e = !1;
                        var u = Math.min(a.x, c.x),
                        l = Math.min(a.y, c.y),
                        f = Math.max(a.x + a.width, c.x + c.width),
                        h = Math.max(a.y + a.height, c.y + c.height);
                        c.height = h - l,
                        c.width = f - u,
                        c.x = u,
                        c.y = l;
                        break
                    }
                }
                e && a.width >= r && a.height >= r && a.width <= o && a.height <= o && n.push(a)
            }
            return n
        },
        tracking.ColorTracker.prototype.setColors = function(t) {
            this.colors = t
        },
        tracking.ColorTracker.prototype.setMinDimension = function(t) {
            this.minDimension = t
        },
        tracking.ColorTracker.prototype.setMaxDimension = function(t) {
            this.maxDimension = t
        },
        tracking.ColorTracker.prototype.setMinGroupSize = function(t) {
            this.minGroupSize = t
        },
        tracking.ColorTracker.prototype.track = function(t, e, n) {
            var r = this,
            o = this.getColors();
            if (!o) throw new Error('Colors not specified, try `new tracking.ColorTracker("magenta")`.');
            var i = [];
            o.forEach(function(o) {
                i = i.concat(r.trackColor_(t, e, n, o))
            }),
            this.emit("track", {
                data: i
            })
        },
        tracking.ColorTracker.prototype.trackColor_ = function(n, r, o, i) {
            var a, s, c, u, l, f = tracking.ColorTracker.knownColors_[i],
            h = new Int32Array(n.length >> 2),
            p = new Int8Array(n.length),
            d = this.getMinGroupSize(),
            g = this.getNeighboursForWidth_(r),
            y = new Int32Array(n.length),
            v = [],
            m = -4;
            if (!f) return v;
            for (var b = 0; b < o; b++) for (var w = 0; w < r; w++) if (m += 4, !p[m]) {
                for (a = 0, l = -1, y[++l] = m, y[++l] = b, y[++l] = w, p[m] = 1; l >= 0;) if (c = y[l--], s = y[l--], u = y[l--], f(n[u], n[u + 1], n[u + 2], n[u + 3], u, s, c)) {
                    h[a++] = c,
                    h[a++] = s;
                    for (var x = 0; x < g.length; x++) {
                        var k = u + g[x],
                        S = s + t[x],
                        E = c + e[x]; ! p[k] && S >= 0 && S < o && E >= 0 && E < r && (y[++l] = k, y[++l] = S, y[++l] = E, p[k] = 1)
                    }
                }
                if (a >= d) {
                    var T = this.calculateDimensions_(h, a);
                    T && (T.color = i, v.push(T))
                }
            }
            return this.mergeRectangles_(v)
        },
        tracking.ColorTracker.registerColor("cyan",
        function(t, e, n) {
            var r = t - 0,
            o = e - 255,
            i = n - 255;
            return e - t >= 50 && n - t >= 70 || r * r + o * o + i * i < 6400
        }),
        tracking.ColorTracker.registerColor("magenta",
        function(t, e, n) {
            var r = t - 255,
            o = e - 0,
            i = n - 255;
            return t - e >= 50 && n - e >= 50 || r * r + o * o + i * i < 19600
        }),
        tracking.ColorTracker.registerColor("yellow",
        function(t, e, n) {
            var r = t - 255,
            o = e - 255,
            i = n - 0;
            return t - n >= 50 && e - n >= 50 || r * r + o * o + i * i < 1e4
        });
        var t = new Int32Array([ - 1, -1, 0, 1, 1, 1, 0, -1]),
        e = new Int32Array([0, 1, 1, 1, 0, -1, -1, -1])
    } (),
    function() {
        tracking.ObjectTracker = function(t) {
            tracking.ObjectTracker.base(this, "constructor"),
            t && (Array.isArray(t) || (t = [t]), Array.isArray(t) && t.forEach(function(e, n) {
                if ("string" == typeof e && (t[n] = tracking.ViolaJones.classifiers[e]), !t[n]) throw new Error('Object classifier not valid, try `new tracking.ObjectTracker("face")`.')
            })),
            this.setClassifiers(t)
        },
        tracking.inherits(tracking.ObjectTracker, tracking.Tracker),
        tracking.ObjectTracker.prototype.edgesDensity = .2,
        tracking.ObjectTracker.prototype.initialScale = 1,
        tracking.ObjectTracker.prototype.scaleFactor = 1.25,
        tracking.ObjectTracker.prototype.stepSize = 1.5,
        tracking.ObjectTracker.prototype.getClassifiers = function() {
            return this.classifiers
        },
        tracking.ObjectTracker.prototype.getEdgesDensity = function() {
            return this.edgesDensity
        },
        tracking.ObjectTracker.prototype.getInitialScale = function() {
            return this.initialScale
        },
        tracking.ObjectTracker.prototype.getScaleFactor = function() {
            return this.scaleFactor
        },
        tracking.ObjectTracker.prototype.getStepSize = function() {
            return this.stepSize
        },
        tracking.ObjectTracker.prototype.track = function(t, e, n) {
            var r = this,
            o = this.getClassifiers();
            if (!o) throw new Error('Object classifier not specified, try `new tracking.ObjectTracker("face")`.');
            var i = [];
            o.forEach(function(o) {
                i = i.concat(tracking.ViolaJones.detect(t, e, n, r.getInitialScale(), r.getScaleFactor(), r.getStepSize(), r.getEdgesDensity(), o))
            }),
            this.emit("track", {
                data: i
            })
        },
        tracking.ObjectTracker.prototype.setClassifiers = function(t) {
            this.classifiers = t
        },
        tracking.ObjectTracker.prototype.setEdgesDensity = function(t) {
            this.edgesDensity = t
        },
        tracking.ObjectTracker.prototype.setInitialScale = function(t) {
            this.initialScale = t
        },
        tracking.ObjectTracker.prototype.setScaleFactor = function(t) {
            this.scaleFactor = t
        },
        tracking.ObjectTracker.prototype.setStepSize = function(t) {
            this.stepSize = t
        }
    } ()
},
function(t, e) {
    tracking.ViolaJones.classifiers.face = new Float64Array([20, 20, .822689414024353, 3, 0, 2, 3, 7, 14, 4, -1, 3, 9, 14, 2, 2, .004014195874333382, .0337941907346249, .8378106951713562, 0, 2, 1, 2, 18, 4, -1, 7, 2, 6, 4, 3, .0151513395830989, .1514132022857666, .7488812208175659, 0, 2, 1, 7, 15, 9, -1, 1, 10, 15, 3, 3, .004210993181914091, .0900492817163467, .6374819874763489, 6.956608772277832, 16, 0, 2, 5, 6, 2, 6, -1, 5, 9, 2, 3, 2, .0016227109590545297, .0693085864186287, .7110946178436279, 0, 2, 7, 5, 6, 3, -1, 9, 5, 2, 3, 3, .002290664939209819, .1795803010463715, .6668692231178284, 0, 2, 4, 0, 12, 9, -1, 4, 3, 12, 3, 3, .005002570804208517, .1693672984838486, .6554006934165955, 0, 2, 6, 9, 10, 8, -1, 6, 13, 10, 4, 2, .007965989410877228, .5866332054138184, .0914145186543465, 0, 2, 3, 6, 14, 8, -1, 3, 10, 14, 4, 2, -.003522701095789671, .1413166970014572, .6031895875930786, 0, 2, 14, 1, 6, 10, -1, 14, 1, 3, 10, 2, .0366676896810532, .3675672113895416, .7920318245887756, 0, 2, 7, 8, 5, 12, -1, 7, 12, 5, 4, 3, .009336147457361221, .6161385774612427, .2088509947061539, 0, 2, 1, 1, 18, 3, -1, 7, 1, 6, 3, 3, .008696131408214569, .2836230993270874, .6360273957252502, 0, 2, 1, 8, 17, 2, -1, 1, 9, 17, 1, 2, .0011488880263641477, .2223580926656723, .5800700783729553, 0, 2, 16, 6, 4, 2, -1, 16, 7, 4, 1, 2, -.002148468978703022, .2406464070081711, .5787054896354675, 0, 2, 5, 17, 2, 2, -1, 5, 18, 2, 1, 2, .002121906029060483, .5559654831886292, .136223703622818, 0, 2, 14, 2, 6, 12, -1, 14, 2, 3, 12, 2, -.0939491465687752, .8502737283706665, .4717740118503571, 0, 3, 4, 0, 4, 12, -1, 4, 0, 2, 6, 2, 6, 6, 2, 6, 2, .0013777789426967502, .5993673801422119, .2834529876708984, 0, 2, 2, 11, 18, 8, -1, 8, 11, 6, 8, 3, .0730631574988365, .4341886043548584, .7060034275054932, 0, 2, 5, 7, 10, 2, -1, 5, 8, 10, 1, 2, .00036767389974556863, .3027887940406799, .6051574945449829, 0, 2, 15, 11, 5, 3, -1, 15, 12, 5, 1, 3, -.0060479710809886456, .17984339594841, .5675256848335266, 9.498542785644531, 21, 0, 2, 5, 3, 10, 9, -1, 5, 6, 10, 3, 3, -.0165106896311045, .6644225120544434, .1424857974052429, 0, 2, 9, 4, 2, 14, -1, 9, 11, 2, 7, 2, .002705249935388565, .6325352191925049, .1288477033376694, 0, 2, 3, 5, 4, 12, -1, 3, 9, 4, 4, 3, .002806986914947629, .1240288019180298, .6193193197250366, 0, 2, 4, 5, 12, 5, -1, 8, 5, 4, 5, 3, -.0015402400167658925, .1432143002748489, .5670015811920166, 0, 2, 5, 6, 10, 8, -1, 5, 10, 10, 4, 2, -.0005638627917505801, .1657433062791824, .5905207991600037, 0, 2, 8, 0, 6, 9, -1, 8, 3, 6, 3, 3, .0019253729842603207, .2695507109165192, .5738824009895325, 0, 2, 9, 12, 1, 8, -1, 9, 16, 1, 4, 2, -.005021484103053808, .1893538981676102, .5782774090766907, 0, 2, 0, 7, 20, 6, -1, 0, 9, 20, 2, 3, .0026365420781075954, .2309329062700272, .5695425868034363, 0, 2, 7, 0, 6, 17, -1, 9, 0, 2, 17, 3, -.0015127769438549876, .2759602069854736, .5956642031669617, 0, 2, 9, 0, 6, 4, -1, 11, 0, 2, 4, 3, -.0101574398577213, .1732538044452667, .5522047281265259, 0, 2, 5, 1, 6, 4, -1, 7, 1, 2, 4, 3, -.011953660286963, .1339409947395325, .5559014081954956, 0, 2, 12, 1, 6, 16, -1, 14, 1, 2, 16, 3, .004885949194431305, .3628703951835632, .6188849210739136, 0, 3, 0, 5, 18, 8, -1, 0, 5, 9, 4, 2, 9, 9, 9, 4, 2, -.0801329165697098, .0912110507488251, .5475944876670837, 0, 3, 8, 15, 10, 4, -1, 13, 15, 5, 2, 2, 8, 17, 5, 2, 2, .0010643280111253262, .3715142905712128, .5711399912834167, 0, 3, 3, 1, 4, 8, -1, 3, 1, 2, 4, 2, 5, 5, 2, 4, 2, -.0013419450260698795, .5953313708305359, .331809788942337, 0, 3, 3, 6, 14, 10, -1, 10, 6, 7, 5, 2, 3, 11, 7, 5, 2, -.0546011403203011, .1844065934419632, .5602846145629883, 0, 2, 2, 1, 6, 16, -1, 4, 1, 2, 16, 3, .0029071690514683723, .3594244122505188, .6131715178489685, 0, 2, 0, 18, 20, 2, -1, 0, 19, 20, 1, 2, .0007471871795132756, .5994353294372559, .3459562957286835, 0, 2, 8, 13, 4, 3, -1, 8, 14, 4, 1, 3, .004301380831748247, .4172652065753937, .6990845203399658, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .004501757211983204, .4509715139865875, .7801457047462463, 0, 2, 0, 12, 9, 6, -1, 0, 14, 9, 2, 3, .0241385009139776, .5438212752342224, .1319826990365982, 18.4129695892334, 39, 0, 2, 5, 7, 3, 4, -1, 5, 9, 3, 2, 2, .001921223010867834, .1415266990661621, .6199870705604553, 0, 2, 9, 3, 2, 16, -1, 9, 11, 2, 8, 2, -.00012748669541906565, .6191074252128601, .1884928941726685, 0, 2, 3, 6, 13, 8, -1, 3, 10, 13, 4, 2, .0005140993162058294, .1487396955490112, .5857927799224854, 0, 2, 12, 3, 8, 2, -1, 12, 3, 4, 2, 2, .004187860991805792, .2746909856796265, .6359239816665649, 0, 2, 8, 8, 4, 12, -1, 8, 12, 4, 4, 3, .005101571790874004, .5870851278305054, .2175628989934921, 0, 3, 11, 3, 8, 6, -1, 15, 3, 4, 3, 2, 11, 6, 4, 3, 2, -.002144844038411975, .5880944728851318, .2979590892791748, 0, 2, 7, 1, 6, 19, -1, 9, 1, 2, 19, 3, -.0028977119363844395, .2373327016830444, .5876647233963013, 0, 2, 9, 0, 6, 4, -1, 11, 0, 2, 4, 3, -.0216106791049242, .1220654994249344, .5194202065467834, 0, 2, 3, 1, 9, 3, -1, 6, 1, 3, 3, 3, -.004629931878298521, .263123095035553, .5817409157752991, 0, 3, 8, 15, 10, 4, -1, 13, 15, 5, 2, 2, 8, 17, 5, 2, 2, .000593937118537724, .363862007856369, .5698544979095459, 0, 2, 0, 3, 6, 10, -1, 3, 3, 3, 10, 2, .0538786612451077, .4303531050682068, .7559366226196289, 0, 2, 3, 4, 15, 15, -1, 3, 9, 15, 5, 3, .0018887349870055914, .2122603058815002, .561342716217041, 0, 2, 6, 5, 8, 6, -1, 6, 7, 8, 2, 3, -.0023635339457541704, .563184916973114, .2642767131328583, 0, 3, 4, 4, 12, 10, -1, 10, 4, 6, 5, 2, 4, 9, 6, 5, 2, .0240177996456623, .5797107815742493, .2751705944538117, 0, 2, 6, 4, 4, 4, -1, 8, 4, 2, 4, 2, .00020543030404951423, .2705242037773132, .575256884098053, 0, 2, 15, 11, 1, 2, -1, 15, 12, 1, 1, 2, .0008479019743390381, .5435624718666077, .2334876954555512, 0, 2, 3, 11, 2, 2, -1, 3, 12, 2, 1, 2, .0014091329649090767, .5319424867630005, .2063155025243759, 0, 2, 16, 11, 1, 3, -1, 16, 12, 1, 1, 3, .0014642629539594054, .5418980717658997, .3068861067295075, 0, 3, 3, 15, 6, 4, -1, 3, 15, 3, 2, 2, 6, 17, 3, 2, 2, .0016352549428120255, .3695372939109802, .6112868189811707, 0, 2, 6, 7, 8, 2, -1, 6, 8, 8, 1, 2, .0008317275205627084, .3565036952495575, .6025236248970032, 0, 2, 3, 11, 1, 3, -1, 3, 12, 1, 1, 3, -.0020998890977352858, .1913982033729553, .5362827181816101, 0, 2, 6, 0, 12, 2, -1, 6, 1, 12, 1, 2, -.0007421398186124861, .3835555016994476, .552931010723114, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .0032655049581080675, .4312896132469177, .7101895809173584, 0, 2, 7, 15, 6, 2, -1, 7, 16, 6, 1, 2, .0008913499186746776, .3984830975532532, .6391963958740234, 0, 2, 0, 5, 4, 6, -1, 0, 7, 4, 2, 3, -.0152841797098517, .2366732954978943, .5433713793754578, 0, 2, 4, 12, 12, 2, -1, 8, 12, 4, 2, 3, .004838141147047281, .5817500948905945, .3239189088344574, 0, 2, 6, 3, 1, 9, -1, 6, 6, 1, 3, 3, -.0009109317907132208, .5540593862533569, .2911868989467621, 0, 2, 10, 17, 3, 2, -1, 11, 17, 1, 2, 3, -.006127506028860807, .1775255054235458, .5196629166603088, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.00044576259097084403, .3024170100688934, .5533593893051147, 0, 2, 7, 6, 6, 4, -1, 9, 6, 2, 4, 3, .0226465407758951, .4414930939674377, .6975377202033997, 0, 2, 7, 17, 3, 2, -1, 8, 17, 1, 2, 3, -.0018804960418492556, .2791394889354706, .5497952103614807, 0, 2, 10, 17, 3, 3, -1, 11, 17, 1, 3, 3, .007088910788297653, .5263199210166931, .2385547012090683, 0, 2, 8, 12, 3, 2, -1, 8, 13, 3, 1, 2, .0017318050377070904, .4319379031658173, .6983600854873657, 0, 2, 9, 3, 6, 2, -1, 11, 3, 2, 2, 3, -.006848270073533058, .3082042932510376, .5390920042991638, 0, 2, 3, 11, 14, 4, -1, 3, 13, 14, 2, 2, -15062530110299122e-21, .552192211151123, .3120366036891937, 0, 3, 1, 10, 18, 4, -1, 10, 10, 9, 2, 2, 1, 12, 9, 2, 2, .0294755697250366, .5401322841644287, .1770603060722351, 0, 2, 0, 10, 3, 3, -1, 0, 11, 3, 1, 3, .008138732984662056, .5178617835044861, .121101900935173, 0, 2, 9, 1, 6, 6, -1, 11, 1, 2, 6, 3, .0209429506212473, .5290294289588928, .3311221897602081, 0, 2, 8, 7, 3, 6, -1, 9, 7, 1, 6, 3, -.009566552937030792, .7471994161605835, .4451968967914581, 15.324139595031738, 33, 0, 2, 1, 0, 18, 9, -1, 1, 3, 18, 3, 3, -.00028206960996612906, .2064086049795151, .6076732277870178, 0, 2, 12, 10, 2, 6, -1, 12, 13, 2, 3, 2, .00167906004935503, .5851997137069702, .1255383938550949, 0, 2, 0, 5, 19, 8, -1, 0, 9, 19, 4, 2, .0006982791237533092, .094018429517746, .5728961229324341, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, .0007895901217125356, .1781987994909287, .5694308876991272, 0, 2, 5, 3, 6, 1, -1, 7, 3, 2, 1, 3, -.002856049919500947, .1638399064540863, .5788664817810059, 0, 2, 11, 3, 6, 1, -1, 13, 3, 2, 1, 3, -.0038122469559311867, .2085440009832382, .5508564710617065, 0, 2, 5, 10, 4, 6, -1, 5, 13, 4, 3, 2, .0015896620461717248, .5702760815620422, .1857215017080307, 0, 2, 11, 3, 6, 1, -1, 13, 3, 2, 1, 3, .0100783398374915, .5116943120956421, .2189770042896271, 0, 2, 4, 4, 12, 6, -1, 4, 6, 12, 2, 3, -.0635263025760651, .7131379842758179, .4043813049793243, 0, 2, 15, 12, 2, 6, -1, 15, 14, 2, 2, 3, -.009103149175643921, .2567181885242462, .54639732837677, 0, 2, 9, 3, 2, 2, -1, 10, 3, 1, 2, 2, -.002403500024229288, .1700665950775147, .559097409248352, 0, 2, 9, 3, 3, 1, -1, 10, 3, 1, 1, 3, .001522636041045189, .5410556793212891, .2619054019451141, 0, 2, 1, 1, 4, 14, -1, 3, 1, 2, 14, 2, .0179974399507046, .3732436895370483, .6535220742225647, 0, 3, 9, 0, 4, 4, -1, 11, 0, 2, 2, 2, 9, 2, 2, 2, 2, -.00645381910726428, .2626481950283051, .5537446141242981, 0, 2, 7, 5, 1, 14, -1, 7, 12, 1, 7, 2, -.0118807600811124, .2003753930330277, .5544745922088623, 0, 2, 19, 0, 1, 4, -1, 19, 2, 1, 2, 2, .0012713660253211856, .5591902732849121, .303197592496872, 0, 2, 5, 5, 6, 4, -1, 8, 5, 3, 4, 2, .0011376109905540943, .2730407118797302, .5646508932113647, 0, 2, 9, 18, 3, 2, -1, 10, 18, 1, 2, 3, -.00426519988104701, .1405909061431885, .5461820960044861, 0, 2, 8, 18, 3, 2, -1, 9, 18, 1, 2, 3, -.0029602861031889915, .1795035004615784, .5459290146827698, 0, 2, 4, 5, 12, 6, -1, 4, 7, 12, 2, 3, -.008844822645187378, .5736783146858215, .280921995639801, 0, 2, 3, 12, 2, 6, -1, 3, 14, 2, 2, 3, -.006643068976700306, .2370675951242447, .5503826141357422, 0, 2, 10, 8, 2, 12, -1, 10, 12, 2, 4, 3, .003999780863523483, .5608199834823608, .3304282128810883, 0, 2, 7, 18, 3, 2, -1, 8, 18, 1, 2, 3, -.004122172016650438, .1640105992555618, .5378993153572083, 0, 2, 9, 0, 6, 2, -1, 11, 0, 2, 2, 3, .0156249096617103, .5227649211883545, .2288603931665421, 0, 2, 5, 11, 9, 3, -1, 5, 12, 9, 1, 3, -.0103564197197557, .7016193866729736, .4252927899360657, 0, 2, 9, 0, 6, 2, -1, 11, 0, 2, 2, 3, -.008796080946922302, .2767347097396851, .5355830192565918, 0, 2, 1, 1, 18, 5, -1, 7, 1, 6, 5, 3, .1622693985700607, .434224009513855, .744257926940918, 0, 3, 8, 0, 4, 4, -1, 10, 0, 2, 2, 2, 8, 2, 2, 2, 2, .0045542530715465546, .5726485848426819, .2582125067710877, 0, 2, 3, 12, 1, 3, -1, 3, 13, 1, 1, 3, -.002130920998752117, .2106848061084747, .5361018776893616, 0, 2, 8, 14, 5, 3, -1, 8, 15, 5, 1, 3, -.0132084200158715, .7593790888786316, .4552468061447144, 0, 3, 5, 4, 10, 12, -1, 5, 4, 5, 6, 2, 10, 10, 5, 6, 2, -.0659966766834259, .125247597694397, .5344039797782898, 0, 2, 9, 6, 9, 12, -1, 9, 10, 9, 4, 3, .007914265617728233, .3315384089946747, .5601043105125427, 0, 3, 2, 2, 12, 14, -1, 2, 2, 6, 7, 2, 8, 9, 6, 7, 2, .0208942797034979, .5506049990653992, .2768838107585907, 21.010639190673828, 44, 0, 2, 4, 7, 12, 2, -1, 8, 7, 4, 2, 3, .0011961159761995077, .1762690991163254, .6156241297721863, 0, 2, 7, 4, 6, 4, -1, 7, 6, 6, 2, 2, -.0018679830245673656, .6118106842041016, .1832399964332581, 0, 2, 4, 5, 11, 8, -1, 4, 9, 11, 4, 2, -.00019579799845814705, .0990442633628845, .5723816156387329, 0, 2, 3, 10, 16, 4, -1, 3, 12, 16, 2, 2, -.0008025565766729414, .5579879879951477, .2377282977104187, 0, 2, 0, 0, 16, 2, -1, 0, 1, 16, 1, 2, -.0024510810617357492, .2231457978487015, .5858935117721558, 0, 2, 7, 5, 6, 2, -1, 9, 5, 2, 2, 3, .0005036185029894114, .2653993964195252, .5794103741645813, 0, 3, 3, 2, 6, 10, -1, 3, 2, 3, 5, 2, 6, 7, 3, 5, 2, .0040293349884450436, .5803827047348022, .2484865039587021, 0, 2, 10, 5, 8, 15, -1, 10, 10, 8, 5, 3, -.0144517095759511, .1830351948738098, .5484204888343811, 0, 3, 3, 14, 8, 6, -1, 3, 14, 4, 3, 2, 7, 17, 4, 3, 2, .0020380979403853416, .3363558948040009, .6051092743873596, 0, 2, 14, 2, 2, 2, -1, 14, 3, 2, 1, 2, -.0016155190533027053, .2286642044782639, .5441246032714844, 0, 2, 1, 10, 7, 6, -1, 1, 13, 7, 3, 2, .0033458340913057327, .5625913143157959, .2392338067293167, 0, 2, 15, 4, 4, 3, -1, 15, 4, 2, 3, 2, .0016379579901695251, .3906993865966797, .5964621901512146, 0, 3, 2, 9, 14, 6, -1, 2, 9, 7, 3, 2, 9, 12, 7, 3, 2, .0302512105554342, .524848222732544, .1575746983289719, 0, 2, 5, 7, 10, 4, -1, 5, 9, 10, 2, 2, .037251990288496, .4194310903549194, .6748418807983398, 0, 3, 6, 9, 8, 8, -1, 6, 9, 4, 4, 2, 10, 13, 4, 4, 2, -.0251097902655602, .1882549971342087, .5473451018333435, 0, 2, 14, 1, 3, 2, -1, 14, 2, 3, 1, 2, -.005309905856847763, .133997306227684, .5227110981941223, 0, 2, 1, 4, 4, 2, -1, 3, 4, 2, 2, 2, .0012086479691788554, .3762088119983673, .6109635829925537, 0, 2, 11, 10, 2, 8, -1, 11, 14, 2, 4, 2, -.0219076797366142, .266314297914505, .5404006838798523, 0, 2, 0, 0, 5, 3, -1, 0, 1, 5, 1, 3, .0054116579703986645, .5363578796386719, .2232273072004318, 0, 3, 2, 5, 18, 8, -1, 11, 5, 9, 4, 2, 2, 9, 9, 4, 2, .069946326315403, .5358232855796814, .2453698068857193, 0, 2, 6, 6, 1, 6, -1, 6, 9, 1, 3, 2, .00034520021290518343, .2409671992063522, .5376930236816406, 0, 2, 19, 1, 1, 3, -1, 19, 2, 1, 1, 3, .0012627709656953812, .5425856709480286, .3155693113803864, 0, 2, 7, 6, 6, 6, -1, 9, 6, 2, 6, 3, .0227195098996162, .4158405959606171, .6597865223884583, 0, 2, 19, 1, 1, 3, -1, 19, 2, 1, 1, 3, -.001811100053600967, .2811253070831299, .5505244731903076, 0, 2, 3, 13, 2, 3, -1, 3, 14, 2, 1, 3, .0033469670452177525, .526002824306488, .1891465038061142, 0, 3, 8, 4, 8, 12, -1, 12, 4, 4, 6, 2, 8, 10, 4, 6, 2, .00040791751234792173, .5673509240150452, .3344210088253021, 0, 2, 5, 2, 6, 3, -1, 7, 2, 2, 3, 3, .0127347996458411, .5343592166900635, .2395612001419067, 0, 2, 6, 1, 9, 10, -1, 6, 6, 9, 5, 2, -.007311972789466381, .6010890007019043, .4022207856178284, 0, 2, 0, 4, 6, 12, -1, 2, 4, 2, 12, 3, -.0569487512111664, .8199151158332825, .4543190896511078, 0, 2, 15, 13, 2, 3, -1, 15, 14, 2, 1, 3, -.005011659115552902, .2200281023979187, .5357710719108582, 0, 2, 7, 14, 5, 3, -1, 7, 15, 5, 1, 3, .006033436860889196, .4413081109523773, .7181751132011414, 0, 2, 15, 13, 3, 3, -1, 15, 14, 3, 1, 3, .0039437441155314445, .547886073589325, .2791733145713806, 0, 2, 6, 14, 8, 3, -1, 6, 15, 8, 1, 3, -.0036591119132936, .635786771774292, .3989723920822144, 0, 2, 15, 13, 3, 3, -1, 15, 14, 3, 1, 3, -.0038456181064248085, .3493686020374298, .5300664901733398, 0, 2, 2, 13, 3, 3, -1, 2, 14, 3, 1, 3, -.007192626129835844, .1119614988565445, .5229672789573669, 0, 3, 4, 7, 12, 12, -1, 10, 7, 6, 6, 2, 4, 13, 6, 6, 2, -.0527989417314529, .2387102991342545, .54534512758255, 0, 2, 9, 7, 2, 6, -1, 10, 7, 1, 6, 2, -.007953766733407974, .7586917877197266, .4439376890659332, 0, 2, 8, 9, 5, 2, -1, 8, 10, 5, 1, 2, -.0027344180271029472, .2565476894378662, .5489321947097778, 0, 2, 8, 6, 3, 4, -1, 9, 6, 1, 4, 3, -.0018507939530536532, .6734347939491272, .4252474904060364, 0, 2, 9, 6, 2, 8, -1, 9, 10, 2, 4, 2, .0159189198166132, .548835277557373, .2292661964893341, 0, 2, 7, 7, 3, 6, -1, 8, 7, 1, 6, 3, -.0012687679845839739, .6104331016540527, .4022389948368073, 0, 2, 11, 3, 3, 3, -1, 12, 3, 1, 3, 3, .006288391072303057, .5310853123664856, .1536193042993546, 0, 2, 5, 4, 6, 1, -1, 7, 4, 2, 1, 3, -.0062259892001748085, .1729111969470978, .524160623550415, 0, 2, 5, 6, 10, 3, -1, 5, 7, 10, 1, 3, -.0121325999498367, .659775972366333, .4325182139873505, 23.918790817260742, 50, 0, 2, 7, 3, 6, 9, -1, 7, 6, 6, 3, 3, -.0039184908382594585, .6103435158729553, .1469330936670303, 0, 2, 6, 7, 9, 1, -1, 9, 7, 3, 1, 3, .0015971299726516008, .2632363140583038, .5896466970443726, 0, 2, 2, 8, 16, 8, -1, 2, 12, 16, 4, 2, .0177801102399826, .587287425994873, .1760361939668655, 0, 2, 14, 6, 2, 6, -1, 14, 9, 2, 3, 2, .0006533476989716291, .1567801982164383, .5596066117286682, 0, 2, 1, 5, 6, 15, -1, 1, 10, 6, 5, 3, -.00028353091329336166, .1913153976202011, .5732036232948303, 0, 2, 10, 0, 6, 9, -1, 10, 3, 6, 3, 3, .0016104689566418529, .2914913892745972, .5623080730438232, 0, 2, 6, 6, 7, 14, -1, 6, 13, 7, 7, 2, -.0977506190538406, .194347694516182, .5648233294487, 0, 2, 13, 7, 3, 6, -1, 13, 9, 3, 2, 3, .0005518235848285258, .3134616911411285, .5504639744758606, 0, 2, 1, 8, 15, 4, -1, 6, 8, 5, 4, 3, -.0128582203760743, .253648191690445, .5760142803192139, 0, 2, 11, 2, 3, 10, -1, 11, 7, 3, 5, 2, .004153023939579725, .5767722129821777, .36597740650177, 0, 2, 3, 7, 4, 6, -1, 3, 9, 4, 2, 3, .0017092459602281451, .2843191027641296, .5918939113616943, 0, 2, 13, 3, 6, 10, -1, 15, 3, 2, 10, 3, .007521735969930887, .4052427113056183, .6183109283447266, 0, 3, 5, 7, 8, 10, -1, 5, 7, 4, 5, 2, 9, 12, 4, 5, 2, .0022479810286313295, .578375518321991, .3135401010513306, 0, 3, 4, 4, 12, 12, -1, 10, 4, 6, 6, 2, 4, 10, 6, 6, 2, .0520062111318111, .5541312098503113, .1916636973619461, 0, 2, 1, 4, 6, 9, -1, 3, 4, 2, 9, 3, .0120855299755931, .4032655954360962, .6644591093063354, 0, 2, 11, 3, 2, 5, -1, 11, 3, 1, 5, 2, 14687820112158079e-21, .3535977900028229, .5709382891654968, 0, 2, 7, 3, 2, 5, -1, 8, 3, 1, 5, 2, 7139518857002258e-21, .3037444949150085, .5610269904136658, 0, 2, 10, 14, 2, 3, -1, 10, 15, 2, 1, 3, -.0046001640148460865, .7181087136268616, .4580326080322266, 0, 2, 5, 12, 6, 2, -1, 8, 12, 3, 2, 2, .0020058949012309313, .5621951818466187, .2953684031963348, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .004505027085542679, .4615387916564941, .7619017958641052, 0, 2, 4, 11, 12, 6, -1, 4, 14, 12, 3, 2, .0117468303069472, .5343837141990662, .1772529035806656, 0, 2, 11, 11, 5, 9, -1, 11, 14, 5, 3, 3, -.0583163388073444, .1686245948076248, .5340772271156311, 0, 2, 6, 15, 3, 2, -1, 6, 16, 3, 1, 2, .00023629379575140774, .3792056143283844, .6026803851127625, 0, 2, 11, 0, 3, 5, -1, 12, 0, 1, 5, 3, -.007815618067979813, .151286706328392, .5324323773384094, 0, 2, 5, 5, 6, 7, -1, 8, 5, 3, 7, 2, -.0108761601150036, .2081822007894516, .5319945216178894, 0, 2, 13, 0, 1, 9, -1, 13, 3, 1, 3, 3, -.0027745519764721394, .4098246991634369, .5210328102111816, 0, 3, 3, 2, 4, 8, -1, 3, 2, 2, 4, 2, 5, 6, 2, 4, 2, -.0007827638182789087, .5693274140357971, .3478842079639435, 0, 2, 13, 12, 4, 6, -1, 13, 14, 4, 2, 3, .0138704096898437, .5326750874519348, .2257698029279709, 0, 2, 3, 12, 4, 6, -1, 3, 14, 4, 2, 3, -.0236749108880758, .1551305055618286, .5200707912445068, 0, 2, 13, 11, 3, 4, -1, 13, 13, 3, 2, 2, -14879409718560055e-21, .5500566959381104, .3820176124572754, 0, 2, 4, 4, 4, 3, -1, 4, 5, 4, 1, 3, .00361906411126256, .4238683879375458, .6639748215675354, 0, 2, 7, 5, 11, 8, -1, 7, 9, 11, 4, 2, -.0198171101510525, .2150038033723831, .5382357835769653, 0, 2, 7, 8, 3, 4, -1, 8, 8, 1, 4, 3, -.0038154039066284895, .6675711274147034, .4215297102928162, 0, 2, 9, 1, 6, 1, -1, 11, 1, 2, 1, 3, -.0049775829538702965, .2267289012670517, .5386328101158142, 0, 2, 5, 5, 3, 3, -1, 5, 6, 3, 1, 3, .002244102070108056, .4308691024780273, .6855735778808594, 0, 3, 0, 9, 20, 6, -1, 10, 9, 10, 3, 2, 0, 12, 10, 3, 2, .0122824599966407, .5836614966392517, .3467479050159454, 0, 2, 8, 6, 3, 5, -1, 9, 6, 1, 5, 3, -.002854869933798909, .7016944885253906, .4311453998088837, 0, 2, 11, 0, 1, 3, -1, 11, 1, 1, 1, 3, -.0037875669077038765, .2895345091819763, .5224946141242981, 0, 2, 4, 2, 4, 2, -1, 4, 3, 4, 1, 2, -.0012201230274513364, .2975570857524872, .5481644868850708, 0, 2, 12, 6, 4, 3, -1, 12, 7, 4, 1, 3, .010160599835217, .4888817965984345, .8182697892189026, 0, 2, 5, 0, 6, 4, -1, 7, 0, 2, 4, 3, -.0161745697259903, .1481492966413498, .5239992737770081, 0, 2, 9, 7, 3, 8, -1, 10, 7, 1, 8, 3, .0192924607545137, .4786309897899628, .7378190755844116, 0, 2, 9, 7, 2, 2, -1, 10, 7, 1, 2, 2, -.003247953951358795, .7374222874641418, .4470643997192383, 0, 3, 6, 7, 14, 4, -1, 13, 7, 7, 2, 2, 6, 9, 7, 2, 2, -.009380348026752472, .3489154875278473, .5537996292114258, 0, 2, 0, 5, 3, 6, -1, 0, 7, 3, 2, 3, -.0126061299815774, .2379686981439591, .5315443277359009, 0, 2, 13, 11, 3, 4, -1, 13, 13, 3, 2, 2, -.0256219301372766, .1964688003063202, .5138769745826721, 0, 2, 4, 11, 3, 4, -1, 4, 13, 3, 2, 2, -7574149640277028e-20, .5590522885322571, .3365853130817413, 0, 3, 5, 9, 12, 8, -1, 11, 9, 6, 4, 2, 5, 13, 6, 4, 2, -.0892108827829361, .0634046569466591, .516263484954834, 0, 2, 9, 12, 1, 3, -1, 9, 13, 1, 1, 3, -.002767048077657819, .732346773147583, .4490706026554108, 0, 2, 10, 15, 2, 4, -1, 10, 17, 2, 2, 2, .0002715257869567722, .411483496427536, .5985518097877502, 24.52787971496582, 51, 0, 2, 7, 7, 6, 1, -1, 9, 7, 2, 1, 3, .001478621968999505, .266354501247406, .6643316745758057, 0, 3, 12, 3, 6, 6, -1, 15, 3, 3, 3, 2, 12, 6, 3, 3, 2, -.001874165958724916, .6143848896026611, .2518512904644013, 0, 2, 0, 4, 10, 6, -1, 0, 6, 10, 2, 3, -.001715100952424109, .5766341090202332, .2397463023662567, 0, 3, 8, 3, 8, 14, -1, 12, 3, 4, 7, 2, 8, 10, 4, 7, 2, -.0018939269939437509, .5682045817375183, .2529144883155823, 0, 2, 4, 4, 7, 15, -1, 4, 9, 7, 5, 3, -.005300605203956366, .1640675961971283, .5556079745292664, 0, 3, 12, 2, 6, 8, -1, 15, 2, 3, 4, 2, 12, 6, 3, 4, 2, -.0466625317931175, .6123154163360596, .4762830138206482, 0, 3, 2, 2, 6, 8, -1, 2, 2, 3, 4, 2, 5, 6, 3, 4, 2, -.000794313324149698, .5707858800888062, .2839404046535492, 0, 2, 2, 13, 18, 7, -1, 8, 13, 6, 7, 3, .0148916700854898, .4089672863483429, .6006367206573486, 0, 3, 4, 3, 8, 14, -1, 4, 3, 4, 7, 2, 8, 10, 4, 7, 2, -.0012046529445797205, .5712450742721558, .2705289125442505, 0, 2, 18, 1, 2, 6, -1, 18, 3, 2, 2, 3, .006061938125640154, .526250422000885, .3262225985527039, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.0025286648888140917, .6853830814361572, .4199256896972656, 0, 2, 18, 1, 2, 6, -1, 18, 3, 2, 2, 3, -.005901021882891655, .3266282081604004, .5434812903404236, 0, 2, 0, 1, 2, 6, -1, 0, 3, 2, 2, 3, .005670276004821062, .5468410849571228, .2319003939628601, 0, 2, 1, 5, 18, 6, -1, 1, 7, 18, 2, 3, -.003030410036444664, .557066798210144, .2708238065242767, 0, 2, 0, 2, 6, 7, -1, 3, 2, 3, 7, 2, .002980364952236414, .3700568974018097, .5890625715255737, 0, 2, 7, 3, 6, 14, -1, 7, 10, 6, 7, 2, -.0758405104279518, .2140070050954819, .5419948101043701, 0, 2, 3, 7, 13, 10, -1, 3, 12, 13, 5, 2, .0192625392228365, .5526772141456604, .2726590037345886, 0, 2, 11, 15, 2, 2, -1, 11, 16, 2, 1, 2, .00018888259364757687, .3958011865615845, .6017209887504578, 0, 3, 2, 11, 16, 4, -1, 2, 11, 8, 2, 2, 10, 13, 8, 2, 2, .0293695498257875, .5241373777389526, .1435758024454117, 0, 3, 13, 7, 6, 4, -1, 16, 7, 3, 2, 2, 13, 9, 3, 2, 2, .0010417619487270713, .3385409116744995, .5929983258247375, 0, 2, 6, 10, 3, 9, -1, 6, 13, 3, 3, 3, .0026125640142709017, .5485377907752991, .3021597862243652, 0, 2, 14, 6, 1, 6, -1, 14, 9, 1, 3, 2, .0009697746718302369, .3375276029109955, .553203284740448, 0, 2, 5, 10, 4, 1, -1, 7, 10, 2, 1, 2, .0005951265920884907, .563174307346344, .3359399139881134, 0, 2, 3, 8, 15, 5, -1, 8, 8, 5, 5, 3, -.1015655994415283, .0637350380420685, .5230425000190735, 0, 2, 1, 6, 5, 4, -1, 1, 8, 5, 2, 2, .0361566990613937, .5136963129043579, .1029528975486755, 0, 2, 3, 1, 17, 6, -1, 3, 3, 17, 2, 3, .003462414024397731, .3879320025444031, .5558289289474487, 0, 2, 6, 7, 8, 2, -1, 10, 7, 4, 2, 2, .0195549800992012, .5250086784362793, .1875859946012497, 0, 2, 9, 7, 3, 2, -1, 10, 7, 1, 2, 3, -.0023121440317481756, .667202889919281, .4679641127586365, 0, 2, 8, 7, 3, 2, -1, 9, 7, 1, 2, 3, -.001860528951510787, .7163379192352295, .4334670901298523, 0, 2, 8, 9, 4, 2, -1, 8, 10, 4, 1, 2, -.0009402636205777526, .302136093378067, .5650203227996826, 0, 2, 8, 8, 4, 3, -1, 8, 9, 4, 1, 3, -.005241833161562681, .1820009052753449, .5250256061553955, 0, 2, 9, 5, 6, 4, -1, 9, 5, 3, 4, 2, .00011729019752237946, .3389188051223755, .544597327709198, 0, 2, 8, 13, 4, 3, -1, 8, 14, 4, 1, 3, .0011878840159624815, .4085349142551422, .6253563165664673, 0, 3, 4, 7, 12, 6, -1, 10, 7, 6, 3, 2, 4, 10, 6, 3, 2, -.0108813596889377, .3378399014472961, .5700082778930664, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .0017354859737679362, .4204635918140411, .6523038744926453, 0, 2, 9, 7, 3, 3, -1, 9, 8, 3, 1, 3, -.00651190523058176, .2595216035842896, .5428143739700317, 0, 2, 7, 4, 3, 8, -1, 8, 4, 1, 8, 3, -.0012136430013924837, .6165143847465515, .3977893888950348, 0, 2, 10, 0, 3, 6, -1, 11, 0, 1, 6, 3, -.010354240424931, .1628028005361557, .5219504833221436, 0, 2, 6, 3, 4, 8, -1, 8, 3, 2, 8, 2, .0005585883045569062, .3199650943279266, .5503574013710022, 0, 2, 14, 3, 6, 13, -1, 14, 3, 3, 13, 2, .0152996499091387, .4103994071483612, .6122388243675232, 0, 2, 8, 13, 3, 6, -1, 8, 16, 3, 3, 2, -.021588210016489, .103491298854351, .519738495349884, 0, 2, 14, 3, 6, 13, -1, 14, 3, 3, 13, 2, -.1283462941646576, .8493865132331848, .4893102943897247, 0, 3, 0, 7, 10, 4, -1, 0, 7, 5, 2, 2, 5, 9, 5, 2, 2, -.0022927189711481333, .3130157887935638, .5471575260162354, 0, 2, 14, 3, 6, 13, -1, 14, 3, 3, 13, 2, .0799151062965393, .4856320917606354, .6073989272117615, 0, 2, 0, 3, 6, 13, -1, 3, 3, 3, 13, 2, -.0794410929083824, .8394674062728882, .462453305721283, 0, 2, 9, 1, 4, 1, -1, 9, 1, 2, 1, 2, -.00528000108897686, .1881695985794067, .5306698083877563, 0, 2, 8, 0, 2, 1, -1, 9, 0, 1, 1, 2, .0010463109938427806, .5271229147911072, .2583065927028656, 0, 3, 10, 16, 4, 4, -1, 12, 16, 2, 2, 2, 10, 18, 2, 2, 2, .00026317298761568964, .4235304892063141, .5735440850257874, 0, 2, 9, 6, 2, 3, -1, 10, 6, 1, 3, 2, -.0036173160187900066, .6934396028518677, .4495444893836975, 0, 2, 4, 5, 12, 2, -1, 8, 5, 4, 2, 3, .0114218797534704, .590092122554779, .4138193130493164, 0, 2, 8, 7, 3, 5, -1, 9, 7, 1, 5, 3, -.0019963278900831938, .6466382741928101, .4327239990234375, 27.153350830078125, 56, 0, 2, 6, 4, 8, 6, -1, 6, 6, 8, 2, 3, -.00996912457048893, .6142324209213257, .2482212036848068, 0, 2, 9, 5, 2, 12, -1, 9, 11, 2, 6, 2, .0007307305932044983, .5704951882362366, .2321965992450714, 0, 2, 4, 6, 6, 8, -1, 4, 10, 6, 4, 2, .0006404530140571296, .2112251967191696, .5814933180809021, 0, 2, 12, 2, 8, 5, -1, 12, 2, 4, 5, 2, .004542401991784573, .2950482070446014, .586631178855896, 0, 2, 0, 8, 18, 3, -1, 0, 9, 18, 1, 3, 9247744310414419e-20, .2990990877151489, .5791326761245728, 0, 2, 8, 12, 4, 8, -1, 8, 16, 4, 4, 2, -.008660314604640007, .2813029885292053, .5635542273521423, 0, 2, 0, 2, 8, 5, -1, 4, 2, 4, 5, 2, .008051581680774689, .3535369038581848, .6054757237434387, 0, 2, 13, 11, 3, 4, -1, 13, 13, 3, 2, 2, .00043835240649059415, .5596532225608826, .2731510996818543, 0, 2, 5, 11, 6, 1, -1, 7, 11, 2, 1, 3, -981689736363478e-19, .5978031754493713, .3638561069965363, 0, 2, 11, 3, 3, 1, -1, 12, 3, 1, 1, 3, -.0011298790341243148, .2755252122879028, .5432729125022888, 0, 2, 7, 13, 5, 3, -1, 7, 14, 5, 1, 3, .006435615010559559, .4305641949176788, .7069833278656006, 0, 2, 11, 11, 7, 6, -1, 11, 14, 7, 3, 2, -.0568293295800686, .2495242953300476, .5294997096061707, 0, 2, 2, 11, 7, 6, -1, 2, 14, 7, 3, 2, .004066816996783018, .5478553175926208, .2497723996639252, 0, 2, 12, 14, 2, 6, -1, 12, 16, 2, 2, 3, 481647984997835e-19, .3938601016998291, .5706356167793274, 0, 2, 8, 14, 3, 3, -1, 8, 15, 3, 1, 3, .00617950176820159, .440760612487793, .7394766807556152, 0, 2, 11, 0, 3, 5, -1, 12, 0, 1, 5, 3, .006498575210571289, .5445243120193481, .2479152977466583, 0, 2, 6, 1, 4, 9, -1, 8, 1, 2, 9, 2, -.0010211090557277203, .2544766962528229, .5338971018791199, 0, 2, 10, 3, 6, 1, -1, 12, 3, 2, 1, 3, -.005424752831459045, .2718858122825623, .5324069261550903, 0, 2, 8, 8, 3, 4, -1, 8, 10, 3, 2, 2, -.0010559899965301156, .3178288042545319, .553450882434845, 0, 2, 8, 12, 4, 2, -1, 8, 13, 4, 1, 2, .0006646580877713859, .4284219145774841, .6558194160461426, 0, 2, 5, 18, 4, 2, -1, 5, 19, 4, 1, 2, -.00027524109464138746, .5902860760688782, .3810262978076935, 0, 2, 2, 1, 18, 6, -1, 2, 3, 18, 2, 3, .004229320213198662, .381648987531662, .5709385871887207, 0, 2, 6, 0, 3, 2, -1, 7, 0, 1, 2, 3, -.0032868210691958666, .1747743934392929, .5259544253349304, 0, 3, 13, 8, 6, 2, -1, 16, 8, 3, 1, 2, 13, 9, 3, 1, 2, .0001561187964398414, .3601722121238709, .5725612044334412, 0, 2, 6, 10, 3, 6, -1, 6, 13, 3, 3, 2, -7362138148891972e-21, .540185809135437, .3044497072696686, 0, 3, 0, 13, 20, 4, -1, 10, 13, 10, 2, 2, 0, 15, 10, 2, 2, -.014767250046134, .3220770061016083, .5573434829711914, 0, 2, 7, 7, 6, 5, -1, 9, 7, 2, 5, 3, .0244895908981562, .4301528036594391, .6518812775611877, 0, 2, 11, 0, 2, 2, -1, 11, 1, 2, 1, 2, -.000376520911231637, .356458306312561, .5598236918449402, 0, 3, 1, 8, 6, 2, -1, 1, 8, 3, 1, 2, 4, 9, 3, 1, 2, 736576885174145e-20, .3490782976150513, .556189775466919, 0, 3, 0, 2, 20, 2, -1, 10, 2, 10, 1, 2, 0, 3, 10, 1, 2, -.0150999398902059, .1776272058486939, .5335299968719482, 0, 2, 7, 14, 5, 3, -1, 7, 15, 5, 1, 3, -.0038316650316119194, .6149687767028809, .4221394062042236, 0, 3, 7, 13, 6, 6, -1, 10, 13, 3, 3, 2, 7, 16, 3, 3, 2, .0169254001230001, .5413014888763428, .2166585028171539, 0, 2, 9, 12, 2, 3, -1, 9, 13, 2, 1, 3, -.003047785023227334, .6449490785598755, .4354617893695831, 0, 2, 16, 11, 1, 6, -1, 16, 13, 1, 2, 3, .003214058931916952, .5400155186653137, .3523217141628265, 0, 2, 3, 11, 1, 6, -1, 3, 13, 1, 2, 3, -.004002320114523172, .2774524092674255, .5338417291641235, 0, 3, 4, 4, 14, 12, -1, 11, 4, 7, 6, 2, 4, 10, 7, 6, 2, .0074182129465043545, .567673921585083, .3702817857265472, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, -.008876458741724491, .7749221920967102, .4583688974380493, 0, 2, 12, 3, 3, 3, -1, 13, 3, 1, 3, 3, .002731173997744918, .5338721871376038, .3996661007404327, 0, 2, 6, 6, 8, 3, -1, 6, 7, 8, 1, 3, -.0025082379579544067, .5611963272094727, .377749890089035, 0, 2, 12, 3, 3, 3, -1, 13, 3, 1, 3, 3, -.008054107427597046, .291522890329361, .5179182887077332, 0, 3, 3, 1, 4, 10, -1, 3, 1, 2, 5, 2, 5, 6, 2, 5, 2, -.0009793881326913834, .5536432862281799, .3700192868709564, 0, 2, 5, 7, 10, 2, -1, 5, 7, 5, 2, 2, -.005874590948224068, .3754391074180603, .5679376125335693, 0, 2, 8, 7, 3, 3, -1, 9, 7, 1, 3, 3, -.00449367193505168, .7019699215888977, .4480949938297272, 0, 2, 15, 12, 2, 3, -1, 15, 13, 2, 1, 3, -.00543892290443182, .2310364991426468, .5313386917114258, 0, 2, 7, 8, 3, 4, -1, 8, 8, 1, 4, 3, -.0007509464048780501, .5864868760108948, .4129343032836914, 0, 2, 13, 4, 1, 12, -1, 13, 10, 1, 6, 2, 14528800420521293e-21, .3732407093048096, .5619621276855469, 0, 3, 4, 5, 12, 12, -1, 4, 5, 6, 6, 2, 10, 11, 6, 6, 2, .0407580696046352, .5312091112136841, .2720521986484528, 0, 2, 7, 14, 7, 3, -1, 7, 15, 7, 1, 3, .006650593131780624, .4710015952587128, .6693493723869324, 0, 2, 3, 12, 2, 3, -1, 3, 13, 2, 1, 3, .0045759351924061775, .5167819261550903, .1637275964021683, 0, 3, 3, 2, 14, 2, -1, 10, 2, 7, 1, 2, 3, 3, 7, 1, 2, .0065269311890006065, .5397608876228333, .2938531935214996, 0, 2, 0, 1, 3, 10, -1, 1, 1, 1, 10, 3, -.0136603796854615, .7086488008499146, .453220009803772, 0, 2, 9, 0, 6, 5, -1, 11, 0, 2, 5, 3, .0273588690906763, .5206481218338013, .3589231967926025, 0, 2, 5, 7, 6, 2, -1, 8, 7, 3, 2, 2, .0006219755159690976, .3507075905799866, .5441123247146606, 0, 2, 7, 1, 6, 10, -1, 7, 6, 6, 5, 2, -.0033077080734074116, .5859522819519043, .402489185333252, 0, 2, 1, 1, 18, 3, -1, 7, 1, 6, 3, 3, -.0106311095878482, .6743267178535461, .4422602951526642, 0, 2, 16, 3, 3, 6, -1, 16, 5, 3, 2, 3, .0194416493177414, .5282716155052185, .1797904968261719, 34.55411148071289, 71, 0, 2, 6, 3, 7, 6, -1, 6, 6, 7, 3, 2, -.005505216773599386, .5914731025695801, .2626559138298035, 0, 2, 4, 7, 12, 2, -1, 8, 7, 4, 2, 3, .001956227933987975, .2312581986188889, .5741627216339111, 0, 2, 0, 4, 17, 10, -1, 0, 9, 17, 5, 2, -.008892478421330452, .1656530052423477, .5626654028892517, 0, 2, 3, 4, 15, 16, -1, 3, 12, 15, 8, 2, .0836383774876595, .5423449873924255, .1957294940948486, 0, 2, 7, 15, 6, 4, -1, 7, 17, 6, 2, 2, .0012282270472496748, .3417904078960419, .5992503762245178, 0, 2, 15, 2, 4, 9, -1, 15, 2, 2, 9, 2, .0057629169896245, .3719581961631775, .6079903841018677, 0, 2, 2, 3, 3, 2, -1, 2, 4, 3, 1, 2, -.0016417410224676132, .2577486038208008, .5576915740966797, 0, 2, 13, 6, 7, 9, -1, 13, 9, 7, 3, 3, .0034113149158656597, .2950749099254608, .5514171719551086, 0, 2, 8, 11, 4, 3, -1, 8, 12, 4, 1, 3, -.0110693201422691, .7569358944892883, .4477078914642334, 0, 3, 0, 2, 20, 6, -1, 10, 2, 10, 3, 2, 0, 5, 10, 3, 2, .0348659716546535, .5583708882331848, .2669621109962463, 0, 3, 3, 2, 6, 10, -1, 3, 2, 3, 5, 2, 6, 7, 3, 5, 2, .0006570109981112182, .5627313256263733, .2988890111446381, 0, 2, 13, 10, 3, 4, -1, 13, 12, 3, 2, 2, -.0243391301482916, .2771185040473938, .5108863115310669, 0, 2, 4, 10, 3, 4, -1, 4, 12, 3, 2, 2, .0005943520227447152, .5580651760101318, .3120341897010803, 0, 2, 7, 5, 6, 3, -1, 9, 5, 2, 3, 3, .0022971509024500847, .3330250084400177, .5679075717926025, 0, 2, 7, 6, 6, 8, -1, 7, 10, 6, 4, 2, -.0037801829166710377, .2990534901618958, .5344808101654053, 0, 2, 0, 11, 20, 6, -1, 0, 14, 20, 3, 2, -.13420669734478, .1463858932256699, .5392568111419678, 0, 3, 4, 13, 4, 6, -1, 4, 13, 2, 3, 2, 6, 16, 2, 3, 2, .0007522454834543169, .3746953904628754, .5692734718322754, 0, 3, 6, 0, 8, 12, -1, 10, 0, 4, 6, 2, 6, 6, 4, 6, 2, -.040545541793108, .2754747867584229, .5484297871589661, 0, 2, 2, 0, 15, 2, -1, 2, 1, 15, 1, 2, .0012572970008477569, .3744584023952484, .5756075978279114, 0, 2, 9, 12, 2, 3, -1, 9, 13, 2, 1, 3, -.007424994837492704, .7513859272003174, .4728231132030487, 0, 2, 3, 12, 1, 2, -1, 3, 13, 1, 1, 2, .0005090812919661403, .540489673614502, .2932321131229401, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.001280845026485622, .6169779896736145, .4273349046707153, 0, 2, 7, 3, 3, 1, -1, 8, 3, 1, 1, 3, -.0018348860321566463, .2048496007919312, .5206472277641296, 0, 2, 17, 7, 3, 6, -1, 17, 9, 3, 2, 3, .0274848695844412, .5252984762191772, .1675522029399872, 0, 2, 7, 2, 3, 2, -1, 8, 2, 1, 2, 3, .0022372419480234385, .5267782807350159, .2777658104896545, 0, 2, 11, 4, 5, 3, -1, 11, 5, 5, 1, 3, -.008863529190421104, .69545578956604, .4812048971652985, 0, 2, 4, 4, 5, 3, -1, 4, 5, 5, 1, 3, .004175397101789713, .4291887879371643, .6349195837974548, 0, 2, 19, 3, 1, 2, -1, 19, 4, 1, 1, 2, -.0017098189564421773, .2930536866188049, .5361248850822449, 0, 2, 5, 5, 4, 3, -1, 5, 6, 4, 1, 3, .006532854866236448, .4495325088500977, .7409694194793701, 0, 2, 17, 7, 3, 6, -1, 17, 9, 3, 2, 3, -.009537290781736374, .3149119913578033, .5416501760482788, 0, 2, 0, 7, 3, 6, -1, 0, 9, 3, 2, 3, .0253109894692898, .5121892094612122, .1311707943677902, 0, 2, 14, 2, 6, 9, -1, 14, 5, 6, 3, 3, .0364609695971012, .5175911784172058, .2591339945793152, 0, 2, 0, 4, 5, 6, -1, 0, 6, 5, 2, 3, .0208543296903372, .5137140154838562, .1582316011190414, 0, 2, 10, 5, 6, 2, -1, 12, 5, 2, 2, 3, -.0008720774785615504, .5574309825897217, .439897894859314, 0, 2, 4, 5, 6, 2, -1, 6, 5, 2, 2, 3, -15227000403683633e-21, .5548940896987915, .3708069920539856, 0, 2, 8, 1, 4, 6, -1, 8, 3, 4, 2, 3, -.0008431650931015611, .3387419879436493, .5554211139678955, 0, 2, 0, 2, 3, 6, -1, 0, 4, 3, 2, 3, .0036037859972566366, .5358061790466309, .3411171138286591, 0, 2, 6, 6, 8, 3, -1, 6, 7, 8, 1, 3, -.006805789191275835, .6125202775001526, .4345862865447998, 0, 2, 0, 1, 5, 9, -1, 0, 4, 5, 3, 3, -.0470216609537601, .2358165979385376, .519373893737793, 0, 2, 16, 0, 4, 15, -1, 16, 0, 2, 15, 2, -.0369541086256504, .7323111295700073, .4760943949222565, 0, 2, 1, 10, 3, 2, -1, 1, 11, 3, 1, 2, .0010439479956403375, .5419455170631409, .3411330878734589, 0, 2, 14, 4, 1, 10, -1, 14, 9, 1, 5, 2, -.00021050689974799752, .2821694016456604, .5554947257041931, 0, 2, 0, 1, 4, 12, -1, 2, 1, 2, 12, 2, -.0808315873146057, .9129930138587952, .4697434902191162, 0, 2, 11, 11, 4, 2, -1, 11, 11, 2, 2, 2, -.0003657905908767134, .6022670269012451, .3978292942047119, 0, 2, 5, 11, 4, 2, -1, 7, 11, 2, 2, 2, -.00012545920617412776, .5613213181495667, .384553998708725, 0, 2, 3, 8, 15, 5, -1, 8, 8, 5, 5, 3, -.0687864869832993, .2261611968278885, .5300496816635132, 0, 2, 0, 0, 6, 10, -1, 3, 0, 3, 10, 2, .0124157899990678, .4075691998004913, .5828812122344971, 0, 2, 11, 4, 3, 2, -1, 12, 4, 1, 2, 3, -.004717481788247824, .2827253937721252, .5267757773399353, 0, 2, 8, 12, 3, 8, -1, 8, 16, 3, 4, 2, .0381368584930897, .5074741244316101, .1023615971207619, 0, 2, 8, 14, 5, 3, -1, 8, 15, 5, 1, 3, -.0028168049175292253, .6169006824493408, .4359692931175232, 0, 2, 7, 14, 4, 3, -1, 7, 15, 4, 1, 3, .008130360394716263, .4524433016777039, .76060950756073, 0, 2, 11, 4, 3, 2, -1, 12, 4, 1, 2, 3, .006005601957440376, .5240408778190613, .185971200466156, 0, 3, 3, 15, 14, 4, -1, 3, 15, 7, 2, 2, 10, 17, 7, 2, 2, .0191393196582794, .5209379196166992, .2332071959972382, 0, 3, 2, 2, 16, 4, -1, 10, 2, 8, 2, 2, 2, 4, 8, 2, 2, .0164457596838474, .5450702905654907, .3264234960079193, 0, 2, 0, 8, 6, 12, -1, 3, 8, 3, 12, 2, -.0373568907380104, .6999046802520752, .4533241987228394, 0, 2, 5, 7, 10, 2, -1, 5, 7, 5, 2, 2, -.0197279006242752, .2653664946556091, .54128098487854, 0, 2, 9, 7, 2, 5, -1, 10, 7, 1, 5, 2, .0066972579807043076, .4480566084384918, .7138652205467224, 0, 3, 13, 7, 6, 4, -1, 16, 7, 3, 2, 2, 13, 9, 3, 2, 2, .0007445752853527665, .4231350123882294, .5471320152282715, 0, 2, 0, 13, 8, 2, -1, 0, 14, 8, 1, 2, .0011790640419349074, .5341702103614807, .3130455017089844, 0, 3, 13, 7, 6, 4, -1, 16, 7, 3, 2, 2, 13, 9, 3, 2, 2, .0349806100130081, .5118659734725952, .343053013086319, 0, 3, 1, 7, 6, 4, -1, 1, 7, 3, 2, 2, 4, 9, 3, 2, 2, .0005685979267582297, .3532187044620514, .5468639731407166, 0, 2, 12, 6, 1, 12, -1, 12, 12, 1, 6, 2, -.0113406497985125, .2842353880405426, .5348700881004333, 0, 2, 9, 5, 2, 6, -1, 10, 5, 1, 6, 2, -.00662281084805727, .6883640289306641, .4492664933204651, 0, 2, 14, 12, 2, 3, -1, 14, 13, 2, 1, 3, -.008016033098101616, .1709893941879273, .5224308967590332, 0, 2, 4, 12, 2, 3, -1, 4, 13, 2, 1, 3, .0014206819469109178, .5290846228599548, .299338310956955, 0, 2, 8, 12, 4, 3, -1, 8, 13, 4, 1, 3, -.002780171111226082, .6498854160308838, .4460499882698059, 0, 3, 5, 2, 2, 4, -1, 5, 2, 1, 2, 2, 6, 4, 1, 2, 2, -.0014747589593753219, .3260438144207001, .5388113260269165, 0, 2, 5, 5, 11, 3, -1, 5, 6, 11, 1, 3, -.0238303393125534, .7528941035270691, .4801219999790192, 0, 2, 7, 6, 4, 12, -1, 7, 12, 4, 6, 2, .00693697901442647, .5335165858268738, .3261427879333496, 0, 2, 12, 13, 8, 5, -1, 12, 13, 4, 5, 2, .008280625566840172, .458039402961731, .5737829804420471, 0, 2, 7, 6, 1, 12, -1, 7, 12, 1, 6, 2, -.0104395002126694, .2592320144176483, .5233827829360962, 39.1072883605957, 80, 0, 2, 1, 2, 6, 3, -1, 4, 2, 3, 3, 2, .0072006587870419025, .325888603925705, .6849808096885681, 0, 3, 9, 5, 6, 10, -1, 12, 5, 3, 5, 2, 9, 10, 3, 5, 2, -.002859358908608556, .5838881134986877, .2537829875946045, 0, 3, 5, 5, 8, 12, -1, 5, 5, 4, 6, 2, 9, 11, 4, 6, 2, .0006858052802272141, .5708081722259521, .2812424004077911, 0, 2, 0, 7, 20, 6, -1, 0, 9, 20, 2, 3, .007958019152283669, .2501051127910614, .5544260740280151, 0, 2, 4, 2, 2, 2, -1, 4, 3, 2, 1, 2, -.0012124150525778532, .2385368049144745, .5433350205421448, 0, 2, 4, 18, 12, 2, -1, 8, 18, 4, 2, 3, .00794261321425438, .3955070972442627, .6220757961273193, 0, 2, 7, 4, 4, 16, -1, 7, 12, 4, 8, 2, .0024630590341985226, .5639708042144775, .2992357909679413, 0, 2, 7, 6, 7, 8, -1, 7, 10, 7, 4, 2, -.006039659958332777, .218651294708252, .541167676448822, 0, 2, 6, 3, 3, 1, -1, 7, 3, 1, 1, 3, -.0012988339876756072, .23507060110569, .5364584922790527, 0, 2, 11, 15, 2, 4, -1, 11, 17, 2, 2, 2, .00022299369447864592, .380411297082901, .572960615158081, 0, 2, 3, 5, 4, 8, -1, 3, 9, 4, 4, 2, .0014654280385002494, .2510167956352234, .5258268713951111, 0, 2, 7, 1, 6, 12, -1, 7, 7, 6, 6, 2, -.0008121004211716354, .5992823839187622, .3851158916950226, 0, 2, 4, 6, 6, 2, -1, 6, 6, 2, 2, 3, -.0013836020370945334, .5681396126747131, .3636586964130402, 0, 2, 16, 4, 4, 6, -1, 16, 6, 4, 2, 3, -.0279364492744207, .1491317003965378, .5377560257911682, 0, 2, 3, 3, 5, 2, -1, 3, 4, 5, 1, 2, -.0004691955109592527, .3692429959774017, .5572484731674194, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.004982965998351574, .6758509278297424, .4532504081726074, 0, 2, 2, 16, 4, 2, -1, 2, 17, 4, 1, 2, .001881530974060297, .5368022918701172, .2932539880275726, 0, 3, 7, 13, 6, 6, -1, 10, 13, 3, 3, 2, 7, 16, 3, 3, 2, -.0190675500780344, .1649377048015595, .5330067276954651, 0, 2, 7, 0, 3, 4, -1, 8, 0, 1, 4, 3, -.0046906559728085995, .1963925957679749, .5119361877441406, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, .005977713968604803, .467117190361023, .7008398175239563, 0, 2, 0, 4, 4, 6, -1, 0, 6, 4, 2, 3, -.0333031304180622, .1155416965484619, .5104162096977234, 0, 2, 5, 6, 12, 3, -1, 9, 6, 4, 3, 3, .0907441079616547, .5149660110473633, .1306173056364059, 0, 2, 7, 6, 6, 14, -1, 9, 6, 2, 14, 3, .0009355589863844216, .3605481088161469, .543985903263092, 0, 2, 9, 7, 3, 3, -1, 10, 7, 1, 3, 3, .0149016501381993, .4886212050914764, .7687569856643677, 0, 2, 6, 12, 2, 4, -1, 6, 14, 2, 2, 2, .0006159411859698594, .5356813073158264, .3240939080715179, 0, 2, 10, 12, 7, 6, -1, 10, 14, 7, 2, 3, -.0506709888577461, .1848621964454651, .5230404138565063, 0, 2, 1, 0, 15, 2, -1, 1, 1, 15, 1, 2, .0006866574985906482, .3840579986572266, .5517945885658264, 0, 2, 14, 0, 6, 6, -1, 14, 0, 3, 6, 2, .008371243253350258, .4288564026355743, .6131753921508789, 0, 2, 5, 3, 3, 1, -1, 6, 3, 1, 1, 3, -.0012953069526702166, .2913674116134644, .528073787689209, 0, 2, 14, 0, 6, 6, -1, 14, 0, 3, 6, 2, -.0419416800141335, .7554799914360046, .4856030941009522, 0, 2, 0, 3, 20, 10, -1, 0, 8, 20, 5, 2, -.0235293805599213, .2838279902935028, .5256081223487854, 0, 2, 14, 0, 6, 6, -1, 14, 0, 3, 6, 2, .0408574491739273, .4870935082435608, .6277297139167786, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.0254068691283464, .7099707722663879, .4575029015541077, 0, 2, 19, 15, 1, 2, -1, 19, 16, 1, 1, 2, -.00041415440500713885, .4030886888504028, .5469412207603455, 0, 2, 0, 2, 4, 8, -1, 2, 2, 2, 8, 2, .0218241196125746, .4502024054527283, .6768701076507568, 0, 3, 2, 1, 18, 4, -1, 11, 1, 9, 2, 2, 2, 3, 9, 2, 2, .0141140399500728, .5442860722541809, .3791700005531311, 0, 2, 8, 12, 1, 2, -1, 8, 13, 1, 1, 2, 6721459067193791e-20, .4200463891029358, .5873476266860962, 0, 3, 5, 2, 10, 6, -1, 10, 2, 5, 3, 2, 5, 5, 5, 3, 2, -.00794176384806633, .3792561888694763, .5585265755653381, 0, 2, 9, 7, 2, 4, -1, 10, 7, 1, 4, 2, -.00721444096416235, .7253103852272034, .4603548943996429, 0, 2, 9, 7, 3, 3, -1, 10, 7, 1, 3, 3, .002581733977422118, .4693301916122437, .5900238752365112, 0, 2, 4, 5, 12, 8, -1, 8, 5, 4, 8, 3, .1340931951999664, .5149213075637817, .1808844953775406, 0, 2, 15, 15, 4, 3, -1, 15, 16, 4, 1, 3, .0022962710354477167, .5399743914604187, .3717867136001587, 0, 2, 8, 18, 3, 1, -1, 9, 18, 1, 1, 3, -.002157584996894002, .2408495992422104, .5148863792419434, 0, 2, 9, 13, 4, 3, -1, 9, 14, 4, 1, 3, -.004919618833810091, .6573588252067566, .4738740026950836, 0, 2, 7, 13, 4, 3, -1, 7, 14, 4, 1, 3, .0016267469618469477, .4192821979522705, .6303114295005798, 0, 2, 19, 15, 1, 2, -1, 19, 16, 1, 1, 2, .00033413388882763684, .5540298223495483, .3702101111412048, 0, 2, 0, 15, 8, 4, -1, 0, 17, 8, 2, 2, -.0266980808228254, .1710917949676514, .5101410746574402, 0, 2, 9, 3, 6, 4, -1, 11, 3, 2, 4, 3, -.0305618792772293, .1904218047857285, .5168793797492981, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .002851154888048768, .4447506964206696, .6313853859901428, 0, 2, 3, 14, 14, 6, -1, 3, 16, 14, 2, 3, -.0362114794552326, .2490727007389069, .5377349257469177, 0, 2, 6, 3, 6, 6, -1, 6, 6, 6, 3, 2, -.002411518944427371, .5381243228912354, .3664236962795258, 0, 2, 5, 11, 10, 6, -1, 5, 14, 10, 3, 2, -.0007725320174358785, .5530232191085815, .3541550040245056, 0, 2, 3, 10, 3, 4, -1, 4, 10, 1, 4, 3, .0002948172914329916, .4132699072360992, .5667243003845215, 0, 2, 13, 9, 2, 2, -1, 13, 9, 1, 2, 2, -.006233456078916788, .0987872332334518, .5198668837547302, 0, 2, 5, 3, 6, 4, -1, 7, 3, 2, 4, 3, -.0262747295200825, .0911274924874306, .5028107166290283, 0, 2, 9, 7, 3, 3, -1, 10, 7, 1, 3, 3, .005321226082742214, .4726648926734924, .6222720742225647, 0, 2, 2, 12, 2, 3, -1, 2, 13, 2, 1, 3, -.004112905822694302, .2157457023859024, .5137804746627808, 0, 2, 9, 8, 3, 12, -1, 9, 12, 3, 4, 3, .0032457809429615736, .5410770773887634, .3721776902675629, 0, 3, 3, 14, 4, 6, -1, 3, 14, 2, 3, 2, 5, 17, 2, 3, 2, -.0163597092032433, .7787874937057495, .4685291945934296, 0, 2, 16, 15, 2, 2, -1, 16, 16, 2, 1, 2, .00032166109303943813, .5478987097740173, .4240373969078064, 0, 2, 2, 15, 2, 2, -1, 2, 16, 2, 1, 2, .000644524407107383, .5330560803413391, .3501324951648712, 0, 2, 8, 12, 4, 3, -1, 8, 13, 4, 1, 3, -.0078909732401371, .6923521161079407, .4726569056510925, 0, 2, 0, 7, 20, 1, -1, 10, 7, 10, 1, 2, .048336211591959, .50559002161026, .0757492035627365, 0, 2, 7, 6, 8, 3, -1, 7, 6, 4, 3, 2, -.000751781277358532, .3783741891384125, .5538573861122131, 0, 2, 5, 7, 8, 2, -1, 9, 7, 4, 2, 2, -.002495391061529517, .3081651031970978, .5359612107276917, 0, 2, 9, 7, 3, 5, -1, 10, 7, 1, 5, 3, -.0022385010961443186, .663395881652832, .4649342894554138, 0, 2, 8, 7, 3, 5, -1, 9, 7, 1, 5, 3, -.0017988430336117744, .6596844792366028, .4347187876701355, 0, 2, 11, 1, 3, 5, -1, 12, 1, 1, 5, 3, .008786091580986977, .523183286190033, .2315579950809479, 0, 2, 6, 2, 3, 6, -1, 7, 2, 1, 6, 3, .003671538084745407, .520425021648407, .2977376878261566, 0, 2, 14, 14, 6, 5, -1, 14, 14, 3, 5, 2, -.0353364497423172, .7238878011703491, .4861505031585693, 0, 2, 9, 8, 2, 2, -1, 9, 9, 2, 1, 2, -.0006918924045749009, .3105022013187408, .5229824781417847, 0, 2, 10, 7, 1, 3, -1, 10, 8, 1, 1, 3, -.003394610946998, .3138968050479889, .5210173726081848, 0, 3, 6, 6, 2, 2, -1, 6, 6, 1, 1, 2, 7, 7, 1, 1, 2, .0009856928372755647, .4536580145359039, .6585097908973694, 0, 3, 2, 11, 18, 4, -1, 11, 11, 9, 2, 2, 2, 13, 9, 2, 2, -.0501631014049053, .1804454028606415, .5198916792869568, 0, 3, 6, 6, 2, 2, -1, 6, 6, 1, 1, 2, 7, 7, 1, 1, 2, -.0022367259953171015, .7255702018737793, .4651359021663666, 0, 2, 0, 15, 20, 2, -1, 0, 16, 20, 1, 2, .0007432628772221506, .4412921071052551, .5898545980453491, 0, 2, 4, 14, 2, 3, -1, 4, 15, 2, 1, 3, -.0009348518215119839, .3500052988529205, .5366017818450928, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .0174979399889708, .4912194907665253, .8315284848213196, 0, 2, 8, 7, 2, 3, -1, 8, 8, 2, 1, 3, -.0015200000489130616, .3570275902748108, .537056028842926, 0, 2, 9, 10, 2, 3, -1, 9, 11, 2, 1, 3, .0007800394087098539, .4353772103786469, .5967335104942322, 50.61048126220703, 103, 0, 2, 5, 4, 10, 4, -1, 5, 6, 10, 2, 2, -.00999455526471138, .6162583231925964, .3054533004760742, 0, 3, 9, 7, 6, 4, -1, 12, 7, 3, 2, 2, 9, 9, 3, 2, 2, -.001108522992581129, .5818294882774353, .3155578076839447, 0, 2, 4, 7, 3, 6, -1, 4, 9, 3, 2, 3, .001036438043229282, .2552052140235901, .5692911744117737, 0, 3, 11, 15, 4, 4, -1, 13, 15, 2, 2, 2, 11, 17, 2, 2, 2, .000682113110087812, .3685089945793152, .5934931039810181, 0, 2, 7, 8, 4, 2, -1, 7, 9, 4, 1, 2, -.0006805734010413289, .2332392036914825, .5474792122840881, 0, 2, 13, 1, 4, 3, -1, 13, 1, 2, 3, 2, .0002606878988444805, .325745701789856, .5667545795440674, 0, 3, 5, 15, 4, 4, -1, 5, 15, 2, 2, 2, 7, 17, 2, 2, 2, .0005160737200640142, .3744716942310333, .5845472812652588, 0, 2, 9, 5, 4, 7, -1, 9, 5, 2, 7, 2, .0008500752155669034, .3420371115207672, .5522807240486145, 0, 2, 5, 6, 8, 3, -1, 9, 6, 4, 3, 2, -.0018607829697430134, .2804419994354248, .5375424027442932, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.001503397012129426, .2579050958156586, .5498952269554138, 0, 2, 7, 15, 5, 3, -1, 7, 16, 5, 1, 3, .0023478909861296415, .4175156056880951, .6313710808753967, 0, 2, 11, 10, 4, 3, -1, 11, 10, 2, 3, 2, -.00028880240279249847, .5865169763565063, .4052666127681732, 0, 2, 6, 9, 8, 10, -1, 6, 14, 8, 5, 2, .008940547704696655, .5211141109466553, .231865406036377, 0, 2, 10, 11, 6, 2, -1, 10, 11, 3, 2, 2, -.0193277392536402, .2753432989120483, .5241525769233704, 0, 2, 4, 11, 6, 2, -1, 7, 11, 3, 2, 2, -.0002020206011366099, .5722978711128235, .3677195906639099, 0, 2, 11, 3, 8, 1, -1, 11, 3, 4, 1, 2, .002117906929925084, .4466108083724976, .5542430877685547, 0, 2, 6, 3, 3, 2, -1, 7, 3, 1, 2, 3, -.0017743760254234076, .2813253104686737, .5300959944725037, 0, 2, 14, 5, 6, 5, -1, 14, 5, 3, 5, 2, .004223445896059275, .439970999956131, .5795428156852722, 0, 2, 7, 5, 2, 12, -1, 7, 11, 2, 6, 2, -.0143752200528979, .2981117963790894, .5292059183120728, 0, 2, 8, 11, 4, 3, -1, 8, 12, 4, 1, 3, -.0153491804376245, .7705215215682983, .4748171865940094, 0, 2, 4, 1, 2, 3, -1, 5, 1, 1, 3, 2, 15152279956964776e-21, .3718844056129456, .5576897263526917, 0, 2, 18, 3, 2, 6, -1, 18, 5, 2, 2, 3, -.009129391983151436, .3615196049213409, .5286766886711121, 0, 2, 0, 3, 2, 6, -1, 0, 5, 2, 2, 3, .0022512159775942564, .5364704728126526, .3486298024654388, 0, 2, 9, 12, 2, 3, -1, 9, 13, 2, 1, 3, -.0049696918576955795, .6927651762962341, .4676836133003235, 0, 2, 7, 13, 4, 3, -1, 7, 14, 4, 1, 3, -.0128290103748441, .7712153792381287, .4660735130310059, 0, 2, 18, 0, 2, 6, -1, 18, 2, 2, 2, 3, -.009366006590425968, .3374983966350555, .5351287722587585, 0, 2, 0, 0, 2, 6, -1, 0, 2, 2, 2, 3, .0032452319283038378, .5325189828872681, .3289610147476196, 0, 2, 8, 14, 6, 3, -1, 8, 15, 6, 1, 3, -.0117235602810979, .6837652921676636, .4754300117492676, 0, 2, 7, 4, 2, 4, -1, 8, 4, 1, 4, 2, 2925794069597032e-20, .357208788394928, .5360502004623413, 0, 2, 8, 5, 4, 6, -1, 8, 7, 4, 2, 3, -22244219508138485e-21, .5541427135467529, .3552064001560211, 0, 2, 6, 4, 2, 2, -1, 7, 4, 1, 2, 2, .005088150966912508, .5070844292640686, .1256462037563324, 0, 3, 3, 14, 14, 4, -1, 10, 14, 7, 2, 2, 3, 16, 7, 2, 2, .0274296794086695, .5269560217857361, .1625818014144898, 0, 3, 6, 15, 6, 2, -1, 6, 15, 3, 1, 2, 9, 16, 3, 1, 2, -.00641428679227829, .7145588994026184, .4584197103977203, 0, 2, 14, 15, 6, 2, -1, 14, 16, 6, 1, 2, .003347995923832059, .5398612022399902, .3494696915149689, 0, 2, 2, 12, 12, 8, -1, 2, 16, 12, 4, 2, -.0826354920864105, .2439192980527878, .5160226225852966, 0, 2, 7, 7, 7, 2, -1, 7, 8, 7, 1, 2, .0010261740535497665, .3886891901493073, .5767908096313477, 0, 2, 0, 2, 18, 2, -1, 0, 3, 18, 1, 2, -.0016307090409100056, .3389458060264587, .5347700715065002, 0, 2, 9, 6, 2, 5, -1, 9, 6, 1, 5, 2, .0024546680506318808, .4601413905620575, .638724684715271, 0, 2, 7, 5, 3, 8, -1, 8, 5, 1, 8, 3, -.0009947651997208595, .5769879221916199, .4120396077632904, 0, 2, 9, 6, 3, 4, -1, 10, 6, 1, 4, 3, .0154091902077198, .4878709018230438, .7089822292327881, 0, 2, 4, 13, 3, 2, -1, 4, 14, 3, 1, 2, .001178440055809915, .5263553261756897, .2895244956016541, 0, 2, 9, 4, 6, 3, -1, 11, 4, 2, 3, 3, -.0277019198983908, .149882897734642, .5219606757164001, 0, 2, 5, 4, 6, 3, -1, 7, 4, 2, 3, 3, -.0295053999871016, .024893319234252, .4999816119670868, 0, 2, 14, 11, 5, 2, -1, 14, 12, 5, 1, 2, .0004515943001024425, .5464622974395752, .4029662907123566, 0, 2, 1, 2, 6, 9, -1, 3, 2, 2, 9, 3, .007177263963967562, .4271056950092316, .5866296887397766, 0, 2, 14, 6, 6, 13, -1, 14, 6, 3, 13, 2, -.0741820484399796, .6874179244041443, .4919027984142304, 0, 3, 3, 6, 14, 8, -1, 3, 6, 7, 4, 2, 10, 10, 7, 4, 2, -.0172541607171297, .3370676040649414, .534873902797699, 0, 2, 16, 0, 4, 11, -1, 16, 0, 2, 11, 2, .0148515598848462, .4626792967319489, .6129904985427856, 0, 3, 3, 4, 12, 12, -1, 3, 4, 6, 6, 2, 9, 10, 6, 6, 2, .0100020002573729, .5346122980117798, .3423453867435455, 0, 2, 11, 4, 5, 3, -1, 11, 5, 5, 1, 3, .0020138120744377375, .4643830060958862, .5824304223060608, 0, 2, 4, 11, 4, 2, -1, 4, 12, 4, 1, 2, .0015135470312088728, .5196396112442017, .2856149971485138, 0, 2, 10, 7, 2, 2, -1, 10, 7, 1, 2, 2, .003138143103569746, .4838162958621979, .5958529710769653, 0, 2, 8, 7, 2, 2, -1, 9, 7, 1, 2, 2, -.005145044066011906, .8920302987098694, .4741412103176117, 0, 2, 9, 17, 3, 2, -1, 10, 17, 1, 2, 3, -.004473670851439238, .2033942937850952, .5337278842926025, 0, 2, 5, 6, 3, 3, -1, 5, 7, 3, 1, 3, .001962847076356411, .457163393497467, .6725863218307495, 0, 2, 10, 0, 3, 3, -1, 11, 0, 1, 3, 3, .005426045041531324, .5271108150482178, .2845670878887177, 0, 3, 5, 6, 6, 2, -1, 5, 6, 3, 1, 2, 8, 7, 3, 1, 2, .0004961146041750908, .4138312935829163, .5718597769737244, 0, 2, 12, 16, 4, 3, -1, 12, 17, 4, 1, 3, .009372878819704056, .5225151181221008, .2804847061634064, 0, 2, 3, 12, 3, 2, -1, 3, 13, 3, 1, 2, .0006050089723430574, .523676872253418, .3314523994922638, 0, 2, 9, 12, 3, 2, -1, 9, 13, 3, 1, 2, .0005679255118593574, .4531059861183167, .6276971101760864, 0, 3, 1, 11, 16, 4, -1, 1, 11, 8, 2, 2, 9, 13, 8, 2, 2, .0246443394571543, .5130851864814758, .2017143964767456, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, -.0102904504165053, .7786595225334167, .4876641035079956, 0, 2, 4, 4, 5, 3, -1, 4, 5, 5, 1, 3, .002062941901385784, .4288598895072937, .5881264209747314, 0, 2, 12, 16, 4, 3, -1, 12, 17, 4, 1, 3, -.005051948130130768, .3523977994918823, .5286008715629578, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, -.0057692620903253555, .6841086149215698, .4588094055652618, 0, 2, 9, 0, 2, 2, -1, 9, 1, 2, 1, 2, -.0004578994121402502, .356552004814148, .5485978126525879, 0, 2, 8, 9, 4, 2, -1, 8, 10, 4, 1, 2, -.0007591883768327534, .336879312992096, .5254197120666504, 0, 2, 8, 8, 4, 3, -1, 8, 9, 4, 1, 3, -.001773725962266326, .3422161042690277, .5454015135765076, 0, 2, 0, 13, 6, 3, -1, 2, 13, 2, 3, 3, -.008561046794056892, .6533612012863159, .4485856890678406, 0, 2, 16, 14, 3, 2, -1, 16, 15, 3, 1, 2, .0017277270089834929, .5307580232620239, .3925352990627289, 0, 2, 1, 18, 18, 2, -1, 7, 18, 6, 2, 3, -.0281996093690395, .685745894908905, .4588584005832672, 0, 2, 16, 14, 3, 2, -1, 16, 15, 3, 1, 2, -.001778110978193581, .4037851095199585, .5369856953620911, 0, 2, 1, 14, 3, 2, -1, 1, 15, 3, 1, 2, .00033177141449414194, .539979875087738, .3705750107765198, 0, 2, 7, 14, 6, 3, -1, 7, 15, 6, 1, 3, .0026385399978607893, .4665437042713165, .6452730894088745, 0, 2, 5, 14, 8, 3, -1, 5, 15, 8, 1, 3, -.0021183069329708815, .5914781093597412, .4064677059650421, 0, 2, 10, 6, 4, 14, -1, 10, 6, 2, 14, 2, -.0147732896730304, .3642038106918335, .5294762849807739, 0, 2, 6, 6, 4, 14, -1, 8, 6, 2, 14, 2, -.0168154407292604, .2664231956005096, .5144972801208496, 0, 2, 13, 5, 2, 3, -1, 13, 6, 2, 1, 3, -.006337014026939869, .6779531240463257, .4852097928524017, 0, 2, 7, 16, 6, 1, -1, 9, 16, 2, 1, 3, -44560048991115764e-21, .5613964796066284, .4153054058551788, 0, 2, 9, 12, 3, 3, -1, 9, 13, 3, 1, 3, -.0010240620467811823, .5964478254318237, .4566304087638855, 0, 2, 7, 0, 3, 3, -1, 8, 0, 1, 3, 3, -.00231616897508502, .2976115047931671, .5188159942626953, 0, 2, 4, 0, 16, 18, -1, 4, 9, 16, 9, 2, .5321757197380066, .5187839269638062, .220263198018074, 0, 2, 1, 1, 16, 14, -1, 1, 8, 16, 7, 2, -.1664305031299591, .1866022944450378, .5060343146324158, 0, 2, 3, 9, 15, 4, -1, 8, 9, 5, 4, 3, .112535297870636, .5212125182151794, .1185022965073586, 0, 2, 6, 12, 7, 3, -1, 6, 13, 7, 1, 3, .009304686449468136, .4589937031269074, .6826149225234985, 0, 2, 14, 15, 2, 3, -1, 14, 16, 2, 1, 3, -.004625509958714247, .3079940974712372, .5225008726119995, 0, 3, 2, 3, 16, 14, -1, 2, 3, 8, 7, 2, 10, 10, 8, 7, 2, -.1111646965146065, .2101044058799744, .5080801844596863, 0, 3, 16, 2, 4, 18, -1, 18, 2, 2, 9, 2, 16, 11, 2, 9, 2, -.0108884396031499, .5765355229377747, .4790464043617249, 0, 2, 4, 15, 2, 3, -1, 4, 16, 2, 1, 3, .005856430158019066, .5065100193023682, .1563598960638046, 0, 3, 16, 2, 4, 18, -1, 18, 2, 2, 9, 2, 16, 11, 2, 9, 2, .0548543892800808, .49669149518013, .7230510711669922, 0, 2, 1, 1, 8, 3, -1, 1, 2, 8, 1, 3, -.0111973397433758, .2194979041814804, .5098798274993896, 0, 2, 8, 11, 4, 3, -1, 8, 12, 4, 1, 3, .004406907130032778, .4778401851654053, .6770902872085571, 0, 2, 5, 11, 5, 9, -1, 5, 14, 5, 3, 3, -.0636652931571007, .1936362981796265, .5081024169921875, 0, 2, 16, 0, 4, 11, -1, 16, 0, 2, 11, 2, -.009808149188756943, .599906325340271, .4810341000556946, 0, 2, 7, 0, 6, 1, -1, 9, 0, 2, 1, 3, -.0021717099007219076, .3338333964347839, .5235472917556763, 0, 2, 16, 3, 3, 7, -1, 17, 3, 1, 7, 3, -.0133155202493072, .6617069840431213, .4919213056564331, 0, 2, 1, 3, 3, 7, -1, 2, 3, 1, 7, 3, .002544207964092493, .4488744139671326, .6082184910774231, 0, 2, 7, 8, 6, 12, -1, 7, 12, 6, 4, 3, .0120378397405148, .540939211845398, .3292432129383087, 0, 2, 0, 0, 4, 11, -1, 2, 0, 2, 11, 2, -.0207010507583618, .6819120049476624, .4594995975494385, 0, 2, 14, 0, 6, 20, -1, 14, 0, 3, 20, 2, .0276082791388035, .4630792140960693, .5767282843589783, 0, 2, 0, 3, 1, 2, -1, 0, 4, 1, 1, 2, .0012370620388537645, .5165379047393799, .2635016143321991, 0, 3, 5, 5, 10, 8, -1, 10, 5, 5, 4, 2, 5, 9, 5, 4, 2, -.037669338285923, .2536393105983734, .5278980135917664, 0, 3, 4, 7, 12, 4, -1, 4, 7, 6, 2, 2, 10, 9, 6, 2, 2, -.0018057259730994701, .3985156118869782, .5517500042915344, 54.62007141113281, 111, 0, 2, 2, 1, 6, 4, -1, 5, 1, 3, 4, 2, .004429902881383896, .2891018092632294, .633522629737854, 0, 3, 9, 7, 6, 4, -1, 12, 7, 3, 2, 2, 9, 9, 3, 2, 2, -.0023813319858163595, .621178925037384, .3477487862110138, 0, 2, 5, 6, 2, 6, -1, 5, 9, 2, 3, 2, .0022915711160749197, .2254412025213242, .5582118034362793, 0, 3, 9, 16, 6, 4, -1, 12, 16, 3, 2, 2, 9, 18, 3, 2, 2, .0009945794008672237, .3711710870265961, .5930070877075195, 0, 2, 9, 4, 2, 12, -1, 9, 10, 2, 6, 2, .0007716466789133847, .565172016620636, .334799587726593, 0, 2, 7, 1, 6, 18, -1, 9, 1, 2, 18, 3, -.001138641033321619, .3069126009941101, .5508630871772766, 0, 2, 4, 12, 12, 2, -1, 8, 12, 4, 2, 3, -.0001640303962631151, .576282799243927, .3699047863483429, 0, 2, 8, 8, 6, 2, -1, 8, 9, 6, 1, 2, 29793529392918572e-21, .2644244134426117, .5437911152839661, 0, 2, 8, 0, 3, 6, -1, 9, 0, 1, 6, 3, .008577490225434303, .5051138997077942, .1795724928379059, 0, 2, 11, 18, 3, 2, -1, 11, 19, 3, 1, 2, -.0002603268949314952, .5826969146728516, .4446826875209808, 0, 2, 1, 1, 17, 4, -1, 1, 3, 17, 2, 2, -.006140463054180145, .3113852143287659, .5346971750259399, 0, 2, 11, 8, 4, 12, -1, 11, 8, 2, 12, 2, -.0230869501829147, .32779461145401, .533119797706604, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, -.0142436502501369, .7381709814071655, .4588063061237335, 0, 2, 12, 3, 2, 17, -1, 12, 3, 1, 17, 2, .0194871295243502, .5256630778312683, .2274471968412399, 0, 2, 4, 7, 6, 1, -1, 6, 7, 2, 1, 3, -.0009668110869824886, .5511230826377869, .3815006911754608, 0, 2, 18, 3, 2, 3, -1, 18, 4, 2, 1, 3, .003147470997646451, .5425636768341064, .2543726861476898, 0, 2, 8, 4, 3, 4, -1, 8, 6, 3, 2, 2, -.00018026070029009134, .5380191802978516, .3406304121017456, 0, 2, 4, 5, 12, 10, -1, 4, 10, 12, 5, 2, -.006026626098901033, .3035801947116852, .54205721616745, 0, 2, 5, 18, 4, 2, -1, 7, 18, 2, 2, 2, .00044462960795499384, .3990997076034546, .5660110116004944, 0, 2, 17, 2, 3, 6, -1, 17, 4, 3, 2, 3, .002260976005345583, .5562806725502014, .3940688073635101, 0, 2, 7, 7, 6, 6, -1, 9, 7, 2, 6, 3, .0511330589652061, .4609653949737549, .7118561863899231, 0, 2, 17, 2, 3, 6, -1, 17, 4, 3, 2, 3, -.0177863091230392, .2316166013479233, .5322144031524658, 0, 2, 8, 0, 3, 4, -1, 9, 0, 1, 4, 3, -.004967962857335806, .233077198266983, .5122029185295105, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .002066768938675523, .4657444059848785, .6455488204956055, 0, 2, 0, 12, 6, 3, -1, 0, 13, 6, 1, 3, .007441376801580191, .5154392123222351, .236163392663002, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, -.003627727972343564, .6219773292541504, .4476661086082459, 0, 2, 3, 12, 2, 3, -1, 3, 13, 2, 1, 3, -.005353075917810202, .1837355047464371, .5102208256721497, 0, 2, 5, 6, 12, 7, -1, 9, 6, 4, 7, 3, .1453091949224472, .5145987272262573, .1535930931568146, 0, 2, 0, 2, 3, 6, -1, 0, 4, 3, 2, 3, .0024394490756094456, .5343660116195679, .3624661862850189, 0, 2, 14, 6, 1, 3, -1, 14, 7, 1, 1, 3, -.003128339070826769, .6215007901191711, .4845592081546783, 0, 2, 2, 0, 3, 14, -1, 3, 0, 1, 14, 3, .0017940260004252195, .4299261868000031, .5824198126792908, 0, 2, 12, 14, 5, 6, -1, 12, 16, 5, 2, 3, .0362538211047649, .5260334014892578, .1439467966556549, 0, 2, 4, 14, 5, 6, -1, 4, 16, 5, 2, 3, -.005174672231078148, .350653886795044, .5287045240402222, 0, 3, 11, 10, 2, 2, -1, 12, 10, 1, 1, 2, 11, 11, 1, 1, 2, .0006538329762406647, .4809640944004059, .6122040152549744, 0, 2, 5, 0, 3, 14, -1, 6, 0, 1, 14, 3, -.0264802295714617, .1139362007379532, .5045586228370667, 0, 2, 10, 15, 2, 3, -1, 10, 16, 2, 1, 3, -.0030440660193562508, .6352095007896423, .4794734120368958, 0, 2, 0, 2, 2, 3, -1, 0, 3, 2, 1, 3, .0036993520334362984, .5131118297576904, .2498510926961899, 0, 2, 5, 11, 12, 6, -1, 5, 14, 12, 3, 2, -.0003676293126773089, .54213947057724, .3709532022476196, 0, 2, 6, 11, 3, 9, -1, 6, 14, 3, 3, 3, -.041382260620594, .1894959956407547, .5081691741943359, 0, 3, 11, 10, 2, 2, -1, 12, 10, 1, 1, 2, 11, 11, 1, 1, 2, -.0010532729793339968, .645436704158783, .4783608913421631, 0, 2, 5, 6, 1, 3, -1, 5, 7, 1, 1, 3, -.0021648600231856108, .6215031147003174, .449982613325119, 0, 2, 4, 9, 13, 3, -1, 4, 10, 13, 1, 3, -.0005674774874933064, .3712610900402069, .5419334769248962, 0, 2, 1, 7, 15, 6, -1, 6, 7, 5, 6, 3, .173758402466774, .5023643970489502, .1215742006897926, 0, 2, 4, 5, 12, 6, -1, 8, 5, 4, 6, 3, -.0029049699660390615, .3240267932415009, .5381883978843689, 0, 2, 8, 10, 4, 3, -1, 8, 11, 4, 1, 3, .0012299539521336555, .4165507853031158, .5703486204147339, 0, 2, 15, 14, 1, 3, -1, 15, 15, 1, 1, 3, -.0005432923790067434, .3854042887687683, .554754912853241, 0, 2, 1, 11, 5, 3, -1, 1, 12, 5, 1, 3, -.008329725824296474, .2204494029283524, .5097082853317261, 0, 2, 7, 1, 7, 12, -1, 7, 7, 7, 6, 2, -.00010417630255687982, .560706615447998, .4303036034107208, 0, 3, 0, 1, 6, 10, -1, 0, 1, 3, 5, 2, 3, 6, 3, 5, 2, .0312047004699707, .4621657133102417, .6982004046440125, 0, 2, 16, 1, 4, 3, -1, 16, 2, 4, 1, 3, .007894350215792656, .5269594192504883, .226906806230545, 0, 2, 5, 5, 2, 3, -1, 5, 6, 2, 1, 3, -.004364531021565199, .6359223127365112, .4537956118583679, 0, 2, 12, 2, 3, 5, -1, 13, 2, 1, 5, 3, .007679305970668793, .5274767875671387, .274048388004303, 0, 2, 0, 3, 4, 6, -1, 0, 5, 4, 2, 3, -.0254311393946409, .2038519978523254, .5071732997894287, 0, 2, 8, 12, 4, 2, -1, 8, 13, 4, 1, 2, .0008200060110539198, .4587455093860626, .6119868159294128, 0, 2, 8, 18, 3, 1, -1, 9, 18, 1, 1, 3, .002928460016846657, .5071274042129517, .2028204947710037, 0, 3, 11, 10, 2, 2, -1, 12, 10, 1, 1, 2, 11, 11, 1, 1, 2, 4525647091213614e-20, .4812104105949402, .5430821776390076, 0, 3, 7, 10, 2, 2, -1, 7, 10, 1, 1, 2, 8, 11, 1, 1, 2, .0013158309739083052, .4625813961029053, .6779323220252991, 0, 2, 11, 11, 4, 4, -1, 11, 13, 4, 2, 2, .0015870389761403203, .5386291742324829, .3431465029716492, 0, 2, 8, 12, 3, 8, -1, 9, 12, 1, 8, 3, -.0215396601706743, .025942500680685, .5003222823143005, 0, 2, 13, 0, 6, 3, -1, 13, 1, 6, 1, 3, .014334480278194, .5202844738960266, .1590632945299149, 0, 2, 8, 8, 3, 4, -1, 9, 8, 1, 4, 3, -.008388138376176357, .728248119354248, .4648044109344482, 0, 3, 5, 7, 10, 10, -1, 10, 7, 5, 5, 2, 5, 12, 5, 5, 2, .00919068418443203, .556235671043396, .3923191130161285, 0, 3, 3, 18, 8, 2, -1, 3, 18, 4, 1, 2, 7, 19, 4, 1, 2, -.005845305975526571, .6803392767906189, .4629127979278565, 0, 2, 10, 2, 6, 8, -1, 12, 2, 2, 8, 3, -.0547077991068363, .2561671137809753, .5206125974655151, 0, 2, 4, 2, 6, 8, -1, 6, 2, 2, 8, 3, .009114277549088001, .518962025642395, .3053877055644989, 0, 2, 11, 0, 3, 7, -1, 12, 0, 1, 7, 3, -.0155750000849366, .1295074969530106, .5169094800949097, 0, 2, 7, 11, 2, 1, -1, 8, 11, 1, 1, 2, -.0001205060034408234, .5735098123550415, .4230825006961823, 0, 2, 15, 14, 1, 3, -1, 15, 15, 1, 1, 3, .0012273970060050488, .5289878249168396, .4079791903495789, 0, 3, 7, 15, 2, 2, -1, 7, 15, 1, 1, 2, 8, 16, 1, 1, 2, -.0012186600361019373, .6575639843940735, .4574409127235413, 0, 2, 15, 14, 1, 3, -1, 15, 15, 1, 1, 3, -.0033256649039685726, .3628047108650208, .5195019841194153, 0, 2, 6, 0, 3, 7, -1, 7, 0, 1, 7, 3, -.0132883097976446, .1284265965223312, .504348874092102, 0, 2, 18, 1, 2, 7, -1, 18, 1, 1, 7, 2, -.0033839771058410406, .6292240023612976, .475750595331192, 0, 2, 2, 0, 8, 20, -1, 2, 10, 8, 10, 2, -.2195422053337097, .148773193359375, .5065013766288757, 0, 2, 3, 0, 15, 6, -1, 3, 2, 15, 2, 3, .004911170806735754, .425610214471817, .5665838718414307, 0, 2, 4, 3, 12, 2, -1, 4, 4, 12, 1, 2, -.00018744950648397207, .4004144072532654, .5586857199668884, 0, 2, 16, 0, 4, 5, -1, 16, 0, 2, 5, 2, -.00521786417812109, .6009116172790527, .4812706112861633, 0, 2, 7, 0, 3, 4, -1, 8, 0, 1, 4, 3, -.0011111519997939467, .3514933884143829, .5287089943885803, 0, 2, 16, 0, 4, 5, -1, 16, 0, 2, 5, 2, .004403640050441027, .4642275869846344, .5924085974693298, 0, 2, 1, 7, 6, 13, -1, 3, 7, 2, 13, 3, .1229949966073036, .5025529265403748, .0691524818539619, 0, 2, 16, 0, 4, 5, -1, 16, 0, 2, 5, 2, -.0123135102912784, .5884591937065125, .4934012889862061, 0, 2, 0, 0, 4, 5, -1, 2, 0, 2, 5, 2, .004147103987634182, .4372239112854004, .589347779750824, 0, 2, 14, 12, 3, 6, -1, 14, 14, 3, 2, 3, -.003550264984369278, .4327551126480103, .5396270155906677, 0, 2, 3, 12, 3, 6, -1, 3, 14, 3, 2, 3, -.0192242693156004, .1913134008646011, .5068330764770508, 0, 2, 16, 1, 4, 3, -1, 16, 2, 4, 1, 3, .0014395059552043676, .5308178067207336, .424353301525116, 0, 3, 8, 7, 2, 10, -1, 8, 7, 1, 5, 2, 9, 12, 1, 5, 2, -.00677519990131259, .6365395784378052, .4540086090564728, 0, 2, 11, 11, 4, 4, -1, 11, 13, 4, 2, 2, .007011963054537773, .5189834237098694, .302619993686676, 0, 2, 0, 1, 4, 3, -1, 0, 2, 4, 1, 3, .005401465110480785, .5105062127113342, .2557682991027832, 0, 2, 13, 4, 1, 3, -1, 13, 5, 1, 1, 3, .0009027498890645802, .4696914851665497, .5861827731132507, 0, 2, 7, 15, 3, 5, -1, 8, 15, 1, 5, 3, .0114744501188397, .5053645968437195, .152717798948288, 0, 2, 9, 7, 3, 5, -1, 10, 7, 1, 5, 3, -.006702343001961708, .6508980989456177, .4890604019165039, 0, 2, 8, 7, 3, 5, -1, 9, 7, 1, 5, 3, -.0020462959073483944, .6241816878318787, .4514600038528442, 0, 2, 10, 6, 4, 14, -1, 10, 6, 2, 14, 2, -.009995156899094582, .3432781100273132, .5400953888893127, 0, 2, 0, 5, 5, 6, -1, 0, 7, 5, 2, 3, -.0357007086277008, .1878059059381485, .5074077844619751, 0, 2, 9, 5, 6, 4, -1, 9, 5, 3, 4, 2, .0004558456130325794, .3805277049541473, .5402569770812988, 0, 2, 0, 0, 18, 10, -1, 6, 0, 6, 10, 3, -.0542606003582478, .6843714714050293, .4595097005367279, 0, 2, 10, 6, 4, 14, -1, 10, 6, 2, 14, 2, .0060600461438298225, .5502905249595642, .450052797794342, 0, 2, 6, 6, 4, 14, -1, 8, 6, 2, 14, 2, -.006479183211922646, .3368858098983765, .5310757160186768, 0, 2, 13, 4, 1, 3, -1, 13, 5, 1, 1, 3, -.0014939469983801246, .6487640142440796, .4756175875663757, 0, 2, 5, 1, 2, 3, -1, 6, 1, 1, 3, 2, 14610530342906713e-21, .403457909822464, .5451064109802246, 0, 3, 18, 1, 2, 18, -1, 19, 1, 1, 9, 2, 18, 10, 1, 9, 2, -.00723219383507967, .6386873722076416, .4824739992618561, 0, 2, 2, 1, 4, 3, -1, 2, 2, 4, 1, 3, -.004064581822603941, .2986421883106232, .5157335996627808, 0, 3, 18, 1, 2, 18, -1, 19, 1, 1, 9, 2, 18, 10, 1, 9, 2, .0304630808532238, .5022199749946594, .7159956097602844, 0, 3, 1, 14, 4, 6, -1, 1, 14, 2, 3, 2, 3, 17, 2, 3, 2, -.008054491132497787, .6492452025413513, .4619275033473969, 0, 2, 10, 11, 7, 6, -1, 10, 13, 7, 2, 3, .0395051389932632, .5150570869445801, .2450613975524902, 0, 3, 0, 10, 6, 10, -1, 0, 10, 3, 5, 2, 3, 15, 3, 5, 2, .008453020825982094, .4573669135570526, .6394037008285522, 0, 2, 11, 0, 3, 4, -1, 12, 0, 1, 4, 3, -.0011688120430335402, .3865512013435364, .548366129398346, 0, 2, 5, 10, 5, 6, -1, 5, 13, 5, 3, 2, .002807067008689046, .5128579139709473, .2701480090618134, 0, 2, 14, 6, 1, 8, -1, 14, 10, 1, 4, 2, .000473652093205601, .4051581919193268, .5387461185455322, 0, 3, 1, 7, 18, 6, -1, 1, 7, 9, 3, 2, 10, 10, 9, 3, 2, .0117410803213716, .5295950174331665, .3719413876533508, 0, 2, 9, 7, 2, 2, -1, 9, 7, 1, 2, 2, .0031833238899707794, .4789406955242157, .6895126104354858, 0, 2, 5, 9, 4, 5, -1, 7, 9, 2, 5, 2, .0007024150108918548, .5384489297866821, .3918080925941467, 50.16973114013672, 102, 0, 2, 7, 6, 6, 3, -1, 9, 6, 2, 3, 3, .0170599296689034, .3948527872562408, .7142534852027893, 0, 2, 1, 0, 18, 4, -1, 7, 0, 6, 4, 3, .0218408405780792, .3370316028594971, .6090016961097717, 0, 2, 7, 15, 2, 4, -1, 7, 17, 2, 2, 2, .00024520049919374287, .3500576019287109, .5987902283668518, 0, 2, 1, 0, 19, 9, -1, 1, 3, 19, 3, 3, .008327260613441467, .3267528116703033, .5697240829467773, 0, 2, 3, 7, 3, 6, -1, 3, 9, 3, 2, 3, .0005714829894714057, .3044599890708923, .5531656742095947, 0, 3, 13, 7, 4, 4, -1, 15, 7, 2, 2, 2, 13, 9, 2, 2, 2, .0006737398798577487, .3650012016296387, .567263126373291, 0, 3, 3, 7, 4, 4, -1, 3, 7, 2, 2, 2, 5, 9, 2, 2, 2, 3468159047770314e-20, .3313541114330292, .5388727188110352, 0, 2, 9, 6, 10, 8, -1, 9, 10, 10, 4, 2, -.005856339819729328, .2697942852973938, .5498778820037842, 0, 2, 3, 8, 14, 12, -1, 3, 14, 14, 6, 2, .00851022731512785, .5269358158111572, .2762879133224487, 0, 3, 6, 5, 10, 12, -1, 11, 5, 5, 6, 2, 6, 11, 5, 6, 2, -.0698172077536583, .2909603118896484, .5259246826171875, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.0008611367084085941, .5892577171325684, .4073697924613953, 0, 2, 9, 5, 6, 5, -1, 9, 5, 3, 5, 2, .0009714924963191152, .3523564040660858, .5415862202644348, 0, 2, 9, 4, 2, 4, -1, 9, 6, 2, 2, 2, -1472749045206001e-20, .5423017740249634, .3503156006336212, 0, 2, 9, 5, 6, 5, -1, 9, 5, 3, 5, 2, .0484202913939953, .51939457654953, .3411195874214172, 0, 2, 5, 5, 6, 5, -1, 8, 5, 3, 5, 2, .0013257140526548028, .315776914358139, .5335376262664795, 0, 2, 11, 2, 6, 1, -1, 13, 2, 2, 1, 3, 1492214960308047e-20, .4451299905776978, .5536553859710693, 0, 2, 3, 2, 6, 1, -1, 5, 2, 2, 1, 3, -.002717339899390936, .3031741976737976, .5248088836669922, 0, 2, 13, 5, 2, 3, -1, 13, 6, 2, 1, 3, .0029219500720500946, .4781453013420105, .6606041789054871, 0, 2, 0, 10, 1, 4, -1, 0, 12, 1, 2, 2, -.0019804988987743855, .3186308145523071, .5287625193595886, 0, 2, 13, 5, 2, 3, -1, 13, 6, 2, 1, 3, -.004001210909336805, .6413596868515015, .4749928116798401, 0, 2, 8, 18, 3, 2, -1, 9, 18, 1, 2, 3, -.004349199123680592, .1507498025894165, .5098996758460999, 0, 2, 6, 15, 9, 2, -1, 6, 16, 9, 1, 2, .0013490889687091112, .4316158890724182, .5881167054176331, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .0185970701277256, .4735553860664368, .9089794158935547, 0, 2, 18, 4, 2, 4, -1, 18, 6, 2, 2, 2, -.001856237999163568, .3553189039230347, .5577837228775024, 0, 2, 5, 5, 2, 3, -1, 5, 6, 2, 1, 3, .002294043079018593, .4500094950199127, .6580877900123596, 0, 2, 15, 16, 3, 2, -1, 15, 17, 3, 1, 2, .00029982850537635386, .5629242062568665, .3975878953933716, 0, 2, 0, 0, 3, 9, -1, 0, 3, 3, 3, 3, .0035455459728837013, .5381547212600708, .3605485856533051, 0, 2, 9, 7, 3, 3, -1, 9, 8, 3, 1, 3, .009610472247004509, .5255997180938721, .1796745955944061, 0, 2, 8, 7, 3, 3, -1, 8, 8, 3, 1, 3, -.0062783220782876015, .227285698056221, .5114030241966248, 0, 2, 9, 5, 2, 6, -1, 9, 5, 1, 6, 2, .0034598479978740215, .4626308083534241, .6608219146728516, 0, 2, 8, 6, 3, 4, -1, 9, 6, 1, 4, 3, -.0013112019514665008, .6317539811134338, .4436857998371124, 0, 3, 7, 6, 8, 12, -1, 11, 6, 4, 6, 2, 7, 12, 4, 6, 2, .002687617903575301, .5421109795570374, .4054022133350372, 0, 3, 5, 6, 8, 12, -1, 5, 6, 4, 6, 2, 9, 12, 4, 6, 2, .003911816980689764, .5358477830886841, .3273454904556274, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, -.014206450432539, .7793576717376709, .4975781142711639, 0, 2, 2, 16, 3, 2, -1, 2, 17, 3, 1, 2, .0007170552853494883, .5297319889068604, .3560903966426849, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, .001663501956500113, .467809408903122, .5816481709480286, 0, 2, 2, 12, 6, 6, -1, 2, 14, 6, 2, 3, .0033686188980937004, .5276734232902527, .3446420133113861, 0, 2, 7, 13, 6, 3, -1, 7, 14, 6, 1, 3, .0127995302900672, .4834679961204529, .7472159266471863, 0, 2, 6, 14, 6, 3, -1, 6, 15, 6, 1, 3, .0033901201095432043, .4511859118938446, .6401721239089966, 0, 2, 14, 15, 5, 3, -1, 14, 16, 5, 1, 3, .004707077983766794, .533565878868103, .355522096157074, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .0014819339849054813, .4250707030296326, .5772724151611328, 0, 2, 14, 15, 5, 3, -1, 14, 16, 5, 1, 3, -.0069995759986341, .3003320097923279, .5292900204658508, 0, 2, 5, 3, 6, 2, -1, 7, 3, 2, 2, 3, .0159390103071928, .5067319273948669, .1675581932067871, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, .007637734990566969, .4795069992542267, .7085601091384888, 0, 2, 1, 15, 5, 3, -1, 1, 16, 5, 1, 3, .006733404006808996, .5133113265037537, .2162470072507858, 0, 3, 8, 13, 4, 6, -1, 10, 13, 2, 3, 2, 8, 16, 2, 3, 2, -.012858809903264, .1938841938972473, .525137186050415, 0, 2, 7, 8, 3, 3, -1, 8, 8, 1, 3, 3, -.0006227080011740327, .5686538219451904, .419786810874939, 0, 2, 12, 0, 5, 4, -1, 12, 2, 5, 2, 2, -.0005265168147161603, .4224168956279755, .5429695844650269, 0, 3, 0, 2, 20, 2, -1, 0, 2, 10, 1, 2, 10, 3, 10, 1, 2, .0110750999301672, .5113775134086609, .2514517903327942, 0, 2, 1, 0, 18, 4, -1, 7, 0, 6, 4, 3, -.0367282517254353, .7194662094116211, .4849618971347809, 0, 2, 4, 3, 6, 1, -1, 6, 3, 2, 1, 3, -.00028207109426148236, .3840261995792389, .539444625377655, 0, 2, 4, 18, 13, 2, -1, 4, 19, 13, 1, 2, -.0027489690110087395, .593708872795105, .4569182097911835, 0, 2, 2, 10, 3, 6, -1, 2, 12, 3, 2, 3, .0100475195795298, .5138576030731201, .2802298069000244, 0, 3, 14, 12, 6, 8, -1, 17, 12, 3, 4, 2, 14, 16, 3, 4, 2, -.008149784058332443, .6090037226676941, .4636121094226837, 0, 3, 4, 13, 10, 6, -1, 4, 13, 5, 3, 2, 9, 16, 5, 3, 2, -.006883388850837946, .3458611071109772, .5254660248756409, 0, 2, 14, 12, 1, 2, -1, 14, 13, 1, 1, 2, -140393603942357e-19, .5693104267120361, .4082083106040955, 0, 2, 8, 13, 4, 3, -1, 8, 14, 4, 1, 3, .001549841952510178, .4350537061691284, .5806517004966736, 0, 2, 14, 12, 2, 2, -1, 14, 13, 2, 1, 2, -.006784149911254644, .1468873023986816, .5182775259017944, 0, 2, 4, 12, 2, 2, -1, 4, 13, 2, 1, 2, .00021705629478674382, .5293524265289307, .345617413520813, 0, 2, 8, 12, 9, 2, -1, 8, 13, 9, 1, 2, .00031198898795992136, .4652450978755951, .5942413806915283, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .005450753029435873, .4653508961200714, .7024846076965332, 0, 2, 11, 10, 3, 6, -1, 11, 13, 3, 3, 2, -.00025818689027801156, .5497295260429382, .3768967092037201, 0, 2, 5, 6, 9, 12, -1, 5, 12, 9, 6, 2, -.0174425393342972, .3919087946414948, .5457497835159302, 0, 2, 11, 10, 3, 6, -1, 11, 13, 3, 3, 2, -.045343529433012, .1631357073783875, .5154908895492554, 0, 2, 6, 10, 3, 6, -1, 6, 13, 3, 3, 2, .0019190689781680703, .514589786529541, .2791895866394043, 0, 2, 5, 4, 11, 3, -1, 5, 5, 11, 1, 3, -.006017786916345358, .6517636179924011, .4756332933902741, 0, 2, 7, 1, 5, 10, -1, 7, 6, 5, 5, 2, -.004072073847055435, .5514652729034424, .4092685878276825, 0, 2, 2, 8, 18, 2, -1, 2, 9, 18, 1, 2, .00039855059003457427, .316524088382721, .5285550951957703, 0, 2, 7, 17, 5, 3, -1, 7, 18, 5, 1, 3, -.0065418570302426815, .6853377819061279, .4652808904647827, 0, 2, 5, 9, 12, 1, -1, 9, 9, 4, 1, 3, .003484508953988552, .5484588146209717, .4502759873867035, 0, 3, 0, 14, 6, 6, -1, 0, 14, 3, 3, 2, 3, 17, 3, 3, 2, -.0136967804282904, .6395779848098755, .4572555124759674, 0, 2, 5, 9, 12, 1, -1, 9, 9, 4, 1, 3, -.017347140237689, .2751072943210602, .5181614756584167, 0, 2, 3, 9, 12, 1, -1, 7, 9, 4, 1, 3, -.004088542889803648, .3325636088848114, .5194984078407288, 0, 2, 14, 10, 6, 7, -1, 14, 10, 3, 7, 2, -.009468790143728256, .5942280888557434, .485181987285614, 0, 2, 1, 0, 16, 2, -1, 1, 1, 16, 1, 2, .0017084840219467878, .4167110919952393, .5519806146621704, 0, 2, 10, 9, 10, 9, -1, 10, 12, 10, 3, 3, .009480909444391727, .5433894991874695, .4208514988422394, 0, 2, 0, 1, 10, 2, -1, 5, 1, 5, 2, 2, -.004738965071737766, .6407189965248108, .4560655057430267, 0, 2, 17, 3, 2, 3, -1, 17, 4, 2, 1, 3, .006576105020940304, .5214555263519287, .2258227020502091, 0, 2, 1, 3, 2, 3, -1, 1, 4, 2, 1, 3, -.0021690549328923225, .3151527941226959, .5156704783439636, 0, 2, 9, 7, 3, 6, -1, 10, 7, 1, 6, 3, .014660170301795, .4870837032794952, .668994128704071, 0, 2, 6, 5, 4, 3, -1, 8, 5, 2, 3, 2, .00017231999663636088, .3569748997688294, .5251078009605408, 0, 2, 7, 5, 6, 6, -1, 9, 5, 2, 6, 3, -.0218037609010935, .8825920820236206, .496632993221283, 0, 3, 3, 4, 12, 12, -1, 3, 4, 6, 6, 2, 9, 10, 6, 6, 2, -.0947361066937447, .1446162015199661, .5061113834381104, 0, 2, 9, 2, 6, 15, -1, 11, 2, 2, 15, 3, .0055825551971793175, .5396478772163391, .4238066077232361, 0, 2, 2, 2, 6, 17, -1, 4, 2, 2, 17, 3, .001951709040440619, .4170410931110382, .5497786998748779, 0, 2, 14, 10, 6, 7, -1, 14, 10, 3, 7, 2, .0121499001979828, .4698367118835449, .5664274096488953, 0, 2, 0, 10, 6, 7, -1, 3, 10, 3, 7, 2, -.007516962010413408, .6267772912979126, .4463135898113251, 0, 2, 9, 2, 6, 15, -1, 11, 2, 2, 15, 3, -.0716679096221924, .3097011148929596, .5221003293991089, 0, 2, 5, 2, 6, 15, -1, 7, 2, 2, 15, 3, -.0882924199104309, .0811238884925842, .5006365180015564, 0, 2, 17, 9, 3, 6, -1, 17, 11, 3, 2, 3, .0310630798339844, .5155503749847412, .1282255947589874, 0, 2, 6, 7, 6, 6, -1, 8, 7, 2, 6, 3, .0466218404471874, .4699777960777283, .736396074295044, 0, 3, 1, 10, 18, 6, -1, 10, 10, 9, 3, 2, 1, 13, 9, 3, 2, -.0121894897893071, .3920530080795288, .5518996715545654, 0, 2, 0, 9, 10, 9, -1, 0, 12, 10, 3, 3, .0130161102861166, .5260658264160156, .3685136139392853, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, -.003495289944112301, .6339294910430908, .4716280996799469, 0, 2, 5, 12, 3, 4, -1, 5, 14, 3, 2, 2, -4401503974804655e-20, .5333027243614197, .3776184916496277, 0, 2, 3, 3, 16, 12, -1, 3, 9, 16, 6, 2, -.1096649020910263, .1765342056751251, .5198346972465515, 0, 3, 1, 1, 12, 12, -1, 1, 1, 6, 6, 2, 7, 7, 6, 6, 2, -.0009027955820783973, .5324159860610962, .3838908076286316, 0, 3, 10, 4, 2, 4, -1, 11, 4, 1, 2, 2, 10, 6, 1, 2, 2, .0007112664170563221, .4647929966449738, .5755224227905273, 0, 3, 0, 9, 10, 2, -1, 0, 9, 5, 1, 2, 5, 10, 5, 1, 2, -.003125027986243367, .323670893907547, .5166770815849304, 0, 2, 9, 11, 3, 3, -1, 9, 12, 3, 1, 3, .002414467977359891, .4787439107894898, .6459717750549316, 0, 2, 3, 12, 9, 2, -1, 3, 13, 9, 1, 2, .00044391240226104856, .4409308135509491, .6010255813598633, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.0002261118934256956, .4038113951683044, .5493255853652954, 66.66912078857422, 135, 0, 2, 3, 4, 13, 6, -1, 3, 6, 13, 2, 3, -.0469012893736362, .660017192363739, .3743801116943359, 0, 3, 9, 7, 6, 4, -1, 12, 7, 3, 2, 2, 9, 9, 3, 2, 2, -.001456834957934916, .578399121761322, .3437797129154205, 0, 2, 1, 0, 6, 8, -1, 4, 0, 3, 8, 2, .005559836979955435, .3622266948223114, .5908216238021851, 0, 2, 9, 5, 2, 12, -1, 9, 11, 2, 6, 2, .0007317048730328679, .550041913986206, .2873558104038239, 0, 2, 4, 4, 3, 10, -1, 4, 9, 3, 5, 2, .001331800944171846, .267316997051239, .5431019067764282, 0, 2, 6, 17, 8, 3, -1, 6, 18, 8, 1, 3, .00024347059661522508, .3855027854442596, .574138879776001, 0, 2, 0, 5, 10, 6, -1, 0, 7, 10, 2, 3, -.0030512469820678234, .5503209829330444, .3462845087051392, 0, 2, 13, 2, 3, 2, -1, 13, 3, 3, 1, 2, -.0006865719915367663, .3291221857070923, .5429509282112122, 0, 2, 7, 5, 4, 5, -1, 9, 5, 2, 5, 2, .001466820016503334, .3588382005691528, .5351811051368713, 0, 2, 12, 14, 3, 6, -1, 12, 16, 3, 2, 3, .0003202187072020024, .429684191942215, .5700234174728394, 0, 2, 1, 11, 8, 2, -1, 1, 12, 8, 1, 2, .0007412218837998807, .5282164812088013, .3366870880126953, 0, 2, 7, 13, 6, 3, -1, 7, 14, 6, 1, 3, .0038330298848450184, .4559567868709564, .6257336139678955, 0, 2, 0, 5, 3, 6, -1, 0, 7, 3, 2, 3, -.0154564399272203, .2350116968154907, .512945294380188, 0, 2, 13, 2, 3, 2, -1, 13, 3, 3, 1, 2, .002679677912965417, .5329415202140808, .4155062139034271, 0, 3, 4, 14, 4, 6, -1, 4, 14, 2, 3, 2, 6, 17, 2, 3, 2, .0028296569362282753, .4273087978363037, .5804538130760193, 0, 2, 13, 2, 3, 2, -1, 13, 3, 3, 1, 2, -.0039444249123334885, .2912611961364746, .5202686190605164, 0, 2, 8, 2, 4, 12, -1, 8, 6, 4, 4, 3, .002717955969274044, .5307688117027283, .3585677146911621, 0, 3, 14, 0, 6, 8, -1, 17, 0, 3, 4, 2, 14, 4, 3, 4, 2, .005907762795686722, .470377504825592, .5941585898399353, 0, 2, 7, 17, 3, 2, -1, 8, 17, 1, 2, 3, -.004224034957587719, .2141567021608353, .5088796019554138, 0, 2, 8, 12, 4, 2, -1, 8, 13, 4, 1, 2, .0040725888684391975, .4766413867473602, .6841061115264893, 0, 3, 6, 0, 8, 12, -1, 6, 0, 4, 6, 2, 10, 6, 4, 6, 2, .0101495301350951, .5360798835754395, .3748497068881989, 0, 3, 14, 0, 2, 10, -1, 15, 0, 1, 5, 2, 14, 5, 1, 5, 2, -.00018864999583456665, .5720130205154419, .3853805065155029, 0, 3, 5, 3, 8, 6, -1, 5, 3, 4, 3, 2, 9, 6, 4, 3, 2, -.0048864358104765415, .3693122863769531, .5340958833694458, 0, 3, 14, 0, 6, 10, -1, 17, 0, 3, 5, 2, 14, 5, 3, 5, 2, .0261584799736738, .4962374866008759, .6059989929199219, 0, 2, 9, 14, 1, 2, -1, 9, 15, 1, 1, 2, .0004856075975112617, .4438945949077606, .6012468934059143, 0, 2, 15, 10, 4, 3, -1, 15, 11, 4, 1, 3, .0112687097862363, .5244250297546387, .1840388029813767, 0, 2, 8, 14, 2, 3, -1, 8, 15, 2, 1, 3, -.0028114619199186563, .6060283780097961, .4409897029399872, 0, 3, 3, 13, 14, 4, -1, 10, 13, 7, 2, 2, 3, 15, 7, 2, 2, -.005611272994428873, .3891170918941498, .5589237213134766, 0, 2, 1, 10, 4, 3, -1, 1, 11, 4, 1, 3, .008568009361624718, .5069345831871033, .2062619030475617, 0, 2, 9, 11, 6, 1, -1, 11, 11, 2, 1, 3, -.00038172779022715986, .5882201790809631, .41926109790802, 0, 2, 5, 11, 6, 1, -1, 7, 11, 2, 1, 3, -.00017680290329735726, .5533605813980103, .400336891412735, 0, 2, 3, 5, 16, 15, -1, 3, 10, 16, 5, 3, .006511253770440817, .3310146927833557, .5444191098213196, 0, 2, 6, 12, 4, 2, -1, 8, 12, 2, 2, 2, -6594868318643421e-20, .5433831810951233, .3944905996322632, 0, 3, 4, 4, 12, 10, -1, 10, 4, 6, 5, 2, 4, 9, 6, 5, 2, .006993905175477266, .5600358247756958, .4192714095115662, 0, 2, 8, 6, 3, 4, -1, 9, 6, 1, 4, 3, -.0046744439750909805, .6685466766357422, .4604960978031158, 0, 3, 8, 12, 4, 8, -1, 10, 12, 2, 4, 2, 8, 16, 2, 4, 2, .0115898502990603, .5357121229171753, .2926830053329468, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .013007840141654, .4679817855358124, .730746328830719, 0, 2, 12, 2, 3, 2, -1, 13, 2, 1, 2, 3, -.0011008579749614, .3937501013278961, .5415065288543701, 0, 2, 8, 15, 3, 2, -1, 8, 16, 3, 1, 2, .0006047264905646443, .4242376089096069, .5604041218757629, 0, 2, 6, 0, 9, 14, -1, 9, 0, 3, 14, 3, -.0144948400557041, .3631210029125214, .5293182730674744, 0, 2, 9, 6, 2, 3, -1, 10, 6, 1, 3, 2, -.005305694881826639, .686045229434967, .4621821045875549, 0, 2, 10, 8, 2, 3, -1, 10, 9, 2, 1, 3, -.00081829127157107, .3944096863269806, .542043924331665, 0, 2, 0, 9, 4, 6, -1, 0, 11, 4, 2, 3, -.0190775208175182, .1962621957063675, .5037891864776611, 0, 2, 6, 0, 8, 2, -1, 6, 1, 8, 1, 2, .00035549470339901745, .4086259007453919, .5613973140716553, 0, 2, 6, 14, 7, 3, -1, 6, 15, 7, 1, 3, .0019679730758070946, .448912113904953, .5926123261451721, 0, 2, 8, 10, 8, 9, -1, 8, 13, 8, 3, 3, .006918914150446653, .5335925817489624, .3728385865688324, 0, 2, 5, 2, 3, 2, -1, 6, 2, 1, 2, 3, .002987277926877141, .5111321210861206, .2975643873214722, 0, 3, 14, 1, 6, 8, -1, 17, 1, 3, 4, 2, 14, 5, 3, 4, 2, -.006226461846381426, .5541489720344543, .4824537932872772, 0, 3, 0, 1, 6, 8, -1, 0, 1, 3, 4, 2, 3, 5, 3, 4, 2, .013353300280869, .4586423933506012, .6414797902107239, 0, 3, 1, 2, 18, 6, -1, 10, 2, 9, 3, 2, 1, 5, 9, 3, 2, .0335052385926247, .5392425060272217, .3429994881153107, 0, 2, 9, 3, 2, 1, -1, 10, 3, 1, 1, 2, -.0025294460356235504, .1703713983297348, .5013315081596375, 0, 3, 13, 2, 4, 6, -1, 15, 2, 2, 3, 2, 13, 5, 2, 3, 2, -.001280162949115038, .5305461883544922, .4697405099868774, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .007068738806992769, .4615545868873596, .643650472164154, 0, 2, 13, 5, 1, 3, -1, 13, 6, 1, 1, 3, .0009688049904070795, .4833599030971527, .6043894290924072, 0, 2, 2, 16, 5, 3, -1, 2, 17, 5, 1, 3, .003964765928685665, .5187637209892273, .323181688785553, 0, 3, 13, 2, 4, 6, -1, 15, 2, 2, 3, 2, 13, 5, 2, 3, 2, -.022057730704546, .4079256951808929, .520098090171814, 0, 3, 3, 2, 4, 6, -1, 3, 2, 2, 3, 2, 5, 5, 2, 3, 2, -.0006690631271339953, .533160924911499, .3815600872039795, 0, 2, 13, 5, 1, 2, -1, 13, 6, 1, 1, 2, -.0006700932863168418, .5655422210693359, .4688901901245117, 0, 2, 5, 5, 2, 2, -1, 5, 6, 2, 1, 2, .000742845528293401, .4534381031990051, .6287400126457214, 0, 2, 13, 9, 2, 2, -1, 13, 9, 1, 2, 2, .0022227810695767403, .5350633263587952, .3303655982017517, 0, 2, 5, 9, 2, 2, -1, 6, 9, 1, 2, 2, -.005413052160292864, .1113687008619309, .500543475151062, 0, 2, 13, 17, 3, 2, -1, 13, 18, 3, 1, 2, -14520040167553816e-21, .5628737807273865, .4325133860111237, 0, 3, 6, 16, 4, 4, -1, 6, 16, 2, 2, 2, 8, 18, 2, 2, 2, .00023369169502984732, .4165835082530975, .5447791218757629, 0, 2, 9, 16, 2, 3, -1, 9, 17, 2, 1, 3, .004289454780519009, .4860391020774841, .6778649091720581, 0, 2, 0, 13, 9, 6, -1, 0, 15, 9, 2, 3, .0059103150852024555, .52623051404953, .3612113893032074, 0, 2, 9, 14, 2, 6, -1, 9, 17, 2, 3, 2, .0129005396738648, .5319377183914185, .32502880692482, 0, 2, 9, 15, 2, 3, -1, 9, 16, 2, 1, 3, .004698297940194607, .461824506521225, .6665925979614258, 0, 2, 1, 10, 18, 6, -1, 1, 12, 18, 2, 3, .0104398597031832, .550567090511322, .3883604109287262, 0, 2, 8, 11, 4, 2, -1, 8, 12, 4, 1, 2, .0030443191062659025, .4697853028774262, .7301844954490662, 0, 2, 7, 9, 6, 2, -1, 7, 10, 6, 1, 2, -.0006159375188872218, .3830839097499847, .5464984178543091, 0, 2, 8, 8, 2, 3, -1, 8, 9, 2, 1, 3, -.0034247159492224455, .256630003452301, .5089530944824219, 0, 2, 17, 5, 3, 4, -1, 18, 5, 1, 4, 3, -.009353856556117535, .6469966173171997, .49407958984375, 0, 2, 1, 19, 18, 1, -1, 7, 19, 6, 1, 3, .0523389987647533, .4745982885360718, .787877082824707, 0, 2, 9, 0, 3, 2, -1, 10, 0, 1, 2, 3, .0035765620414167643, .5306664705276489, .2748498022556305, 0, 2, 1, 8, 1, 6, -1, 1, 10, 1, 2, 3, .0007155531784519553, .541312575340271, .4041908979415894, 0, 2, 12, 17, 8, 3, -1, 12, 17, 4, 3, 2, -.0105166798457503, .6158512234687805, .4815283119678497, 0, 2, 0, 5, 3, 4, -1, 1, 5, 1, 4, 3, .007734792772680521, .4695805907249451, .7028980851173401, 0, 2, 9, 7, 2, 3, -1, 9, 8, 2, 1, 3, -.004322677850723267, .2849566042423248, .5304684042930603, 0, 3, 7, 11, 2, 2, -1, 7, 11, 1, 1, 2, 8, 12, 1, 1, 2, -.0025534399319440126, .7056984901428223, .4688892066478729, 0, 2, 11, 3, 2, 5, -1, 11, 3, 1, 5, 2, .00010268510231981054, .3902932107448578, .5573464035987854, 0, 2, 7, 3, 2, 5, -1, 8, 3, 1, 5, 2, 7139518857002258e-21, .368423193693161, .526398777961731, 0, 2, 15, 13, 2, 3, -1, 15, 14, 2, 1, 3, -.0016711989883333445, .3849175870418549, .5387271046638489, 0, 2, 5, 6, 2, 3, -1, 5, 7, 2, 1, 3, .004926044959574938, .4729771912097931, .7447251081466675, 0, 2, 4, 19, 15, 1, -1, 9, 19, 5, 1, 3, .0043908702209591866, .4809181094169617, .5591921806335449, 0, 2, 1, 19, 15, 1, -1, 6, 19, 5, 1, 3, -.0177936293184757, .6903678178787231, .4676927030086517, 0, 2, 15, 13, 2, 3, -1, 15, 14, 2, 1, 3, .002046966925263405, .5370690226554871, .3308162093162537, 0, 2, 5, 0, 4, 15, -1, 7, 0, 2, 15, 2, .0298914890736341, .5139865279197693, .3309059143066406, 0, 2, 9, 6, 2, 5, -1, 9, 6, 1, 5, 2, .0015494900289922953, .466023713350296, .6078342795372009, 0, 2, 9, 5, 2, 7, -1, 10, 5, 1, 7, 2, .001495696953497827, .4404835999011993, .5863919854164124, 0, 2, 16, 11, 3, 3, -1, 16, 12, 3, 1, 3, .0009588592802174389, .5435971021652222, .4208523035049439, 0, 2, 1, 11, 3, 3, -1, 1, 12, 3, 1, 3, .0004964370164088905, .5370578169822693, .4000622034072876, 0, 2, 6, 6, 8, 3, -1, 6, 7, 8, 1, 3, -.00272808107547462, .5659412741661072, .4259642958641052, 0, 2, 0, 15, 6, 2, -1, 0, 16, 6, 1, 2, .0023026480339467525, .5161657929420471, .3350869119167328, 0, 2, 1, 0, 18, 6, -1, 7, 0, 6, 6, 3, .2515163123607636, .4869661927223206, .714730978012085, 0, 2, 6, 0, 3, 4, -1, 7, 0, 1, 4, 3, -.004632802214473486, .27274489402771, .5083789825439453, 0, 3, 14, 10, 4, 10, -1, 16, 10, 2, 5, 2, 14, 15, 2, 5, 2, -.0404344908893108, .6851438879966736, .5021767020225525, 0, 2, 3, 2, 3, 2, -1, 4, 2, 1, 2, 3, 14972220014897175e-21, .428446501493454, .5522555112838745, 0, 2, 11, 2, 2, 2, -1, 11, 3, 2, 1, 2, -.00024050309730228037, .4226118922233582, .5390074849128723, 0, 3, 2, 10, 4, 10, -1, 2, 10, 2, 5, 2, 4, 15, 2, 5, 2, .0236578397452831, .4744631946086884, .7504366040229797, 0, 3, 0, 13, 20, 6, -1, 10, 13, 10, 3, 2, 0, 16, 10, 3, 2, -.00814491044729948, .424505889415741, .5538362860679626, 0, 2, 0, 5, 2, 15, -1, 1, 5, 1, 15, 2, -.003699213033542037, .5952357053756714, .4529713094234467, 0, 3, 1, 7, 18, 4, -1, 10, 7, 9, 2, 2, 1, 9, 9, 2, 2, -.0067718601785600185, .4137794077396393, .5473399758338928, 0, 2, 0, 0, 2, 17, -1, 1, 0, 1, 17, 2, .004266953095793724, .4484114944934845, .5797994136810303, 0, 3, 2, 6, 16, 6, -1, 10, 6, 8, 3, 2, 2, 9, 8, 3, 2, .0017791989957913756, .5624858736991882, .4432444870471954, 0, 2, 8, 14, 1, 3, -1, 8, 15, 1, 1, 3, .0016774770338088274, .4637751877307892, .63642418384552, 0, 2, 8, 15, 4, 2, -1, 8, 16, 4, 1, 2, .0011732629500329494, .4544503092765808, .5914415717124939, 0, 3, 5, 2, 8, 2, -1, 5, 2, 4, 1, 2, 9, 3, 4, 1, 2, .000869981711730361, .5334752798080444, .3885917961597443, 0, 2, 6, 11, 8, 6, -1, 6, 14, 8, 3, 2, .0007637834060005844, .5398585200309753, .374494194984436, 0, 2, 9, 13, 2, 2, -1, 9, 14, 2, 1, 2, .00015684569370932877, .4317873120307922, .5614616274833679, 0, 2, 18, 4, 2, 6, -1, 18, 6, 2, 2, 3, -.0215113703161478, .1785925030708313, .5185542702674866, 0, 2, 9, 12, 2, 2, -1, 9, 13, 2, 1, 2, .00013081369979772717, .4342499077320099, .5682849884033203, 0, 2, 18, 4, 2, 6, -1, 18, 6, 2, 2, 3, .021992040798068, .5161716938018799, .2379394024610519, 0, 2, 9, 13, 1, 3, -1, 9, 14, 1, 1, 3, -.0008013650076463819, .598676323890686, .4466426968574524, 0, 2, 18, 4, 2, 6, -1, 18, 6, 2, 2, 3, -.008273609913885593, .410821795463562, .5251057147979736, 0, 2, 0, 4, 2, 6, -1, 0, 6, 2, 2, 3, .0036831789184361696, .5173814296722412, .339751809835434, 0, 2, 9, 12, 3, 3, -1, 9, 13, 3, 1, 3, -.007952568121254444, .6888983249664307, .4845924079418182, 0, 2, 3, 13, 2, 3, -1, 3, 14, 2, 1, 3, .0015382299898192286, .5178567171096802, .3454113900661469, 0, 2, 13, 13, 4, 3, -1, 13, 14, 4, 1, 3, -.0140435304492712, .1678421050310135, .518866777420044, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .0014315890148282051, .436825692653656, .5655773878097534, 0, 2, 5, 2, 10, 6, -1, 5, 4, 10, 2, 3, -.0340142287313938, .7802296280860901, .4959217011928558, 0, 2, 3, 13, 4, 3, -1, 3, 14, 4, 1, 3, -.0120272999629378, .1585101038217545, .503223180770874, 0, 2, 3, 7, 15, 5, -1, 8, 7, 5, 5, 3, .1331661939620972, .5163304805755615, .2755128145217896, 0, 2, 3, 7, 12, 2, -1, 7, 7, 4, 2, 3, -.0015221949433907866, .372831791639328, .5214552283287048, 0, 2, 10, 3, 3, 9, -1, 11, 3, 1, 9, 3, -.000939292716793716, .5838379263877869, .4511165022850037, 0, 2, 8, 6, 4, 6, -1, 10, 6, 2, 6, 2, .0277197398245335, .4728286862373352, .7331544756889343, 0, 2, 9, 7, 4, 3, -1, 9, 8, 4, 1, 3, .003103015013039112, .5302202105522156, .4101563096046448, 0, 2, 0, 9, 4, 9, -1, 2, 9, 2, 9, 2, .0778612196445465, .4998334050178528, .127296194434166, 0, 2, 9, 13, 3, 5, -1, 10, 13, 1, 5, 3, -.0158549398183823, .0508333593606949, .5165656208992004, 0, 2, 7, 7, 6, 3, -1, 9, 7, 2, 3, 3, -.00497253006324172, .6798133850097656, .4684231877326965, 0, 2, 9, 7, 3, 5, -1, 10, 7, 1, 5, 3, -.0009767650626599789, .6010771989822388, .4788931906223297, 0, 2, 5, 7, 8, 2, -1, 9, 7, 4, 2, 2, -.0024647710379213095, .3393397927284241, .5220503807067871, 0, 2, 5, 9, 12, 2, -1, 9, 9, 4, 2, 3, -.006793770007789135, .4365136921405792, .5239663124084473, 0, 2, 5, 6, 10, 3, -1, 10, 6, 5, 3, 2, .0326080210506916, .505272388458252, .2425214946269989, 0, 2, 10, 12, 3, 1, -1, 11, 12, 1, 1, 3, -.0005851442110724747, .5733973979949951, .4758574068546295, 0, 2, 0, 1, 11, 15, -1, 0, 6, 11, 5, 3, -.0296326000243425, .3892289102077484, .5263597965240479, 67.69892120361328, 137, 0, 2, 1, 0, 18, 6, -1, 7, 0, 6, 6, 3, .0465508513152599, .3276950120925903, .6240522861480713, 0, 2, 7, 7, 6, 1, -1, 9, 7, 2, 1, 3, .007953712716698647, .4256485104560852, .6942939162254333, 0, 3, 5, 16, 6, 4, -1, 5, 16, 3, 2, 2, 8, 18, 3, 2, 2, .0006822156137786806, .3711487054824829, .59007328748703, 0, 2, 6, 5, 9, 8, -1, 6, 9, 9, 4, 2, -.00019348249770700932, .2041133940219879, .53005450963974, 0, 2, 5, 10, 2, 6, -1, 5, 13, 2, 3, 2, -.0002671050897333771, .5416126251220703, .3103179037570953, 0, 3, 7, 6, 8, 10, -1, 11, 6, 4, 5, 2, 7, 11, 4, 5, 2, .0027818060480058193, .5277832746505737, .3467069864273071, 0, 3, 5, 6, 8, 10, -1, 5, 6, 4, 5, 2, 9, 11, 4, 5, 2, -.000467790785478428, .5308231115341187, .3294492065906525, 0, 2, 9, 5, 2, 2, -1, 9, 6, 2, 1, 2, -30335160772665404e-21, .577387273311615, .3852097094058991, 0, 2, 5, 12, 8, 2, -1, 5, 13, 8, 1, 2, .0007803800981491804, .4317438900470734, .6150057911872864, 0, 2, 10, 2, 8, 2, -1, 10, 3, 8, 1, 2, -.004255385138094425, .2933903932571411, .5324292778968811, 0, 3, 4, 0, 2, 10, -1, 4, 0, 1, 5, 2, 5, 5, 1, 5, 2, -.0002473561035003513, .5468844771385193, .3843030035495758, 0, 2, 9, 10, 2, 2, -1, 9, 11, 2, 1, 2, -.00014724259381182492, .4281542897224426, .5755587220191956, 0, 2, 2, 8, 15, 3, -1, 2, 9, 15, 1, 3, .0011864770203828812, .374730110168457, .5471466183662415, 0, 2, 8, 13, 4, 3, -1, 8, 14, 4, 1, 3, .0023936580400913954, .4537783861160278, .6111528873443604, 0, 2, 7, 2, 3, 2, -1, 8, 2, 1, 2, 3, -.0015390539774671197, .2971341907978058, .518953800201416, 0, 2, 7, 13, 6, 3, -1, 7, 14, 6, 1, 3, -.007196879014372826, .6699066758155823, .4726476967334747, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.0004149978922214359, .3384954035282135, .5260317921638489, 0, 2, 17, 2, 3, 6, -1, 17, 4, 3, 2, 3, .004435983020812273, .539912223815918, .3920140862464905, 0, 2, 1, 5, 3, 4, -1, 2, 5, 1, 4, 3, .0026606200262904167, .4482578039169312, .6119617819786072, 0, 2, 14, 8, 4, 6, -1, 14, 10, 4, 2, 3, -.0015287200221791863, .3711237907409668, .5340266227722168, 0, 2, 1, 4, 3, 8, -1, 2, 4, 1, 8, 3, -.0047397250309586525, .603108823299408, .4455145001411438, 0, 2, 8, 13, 4, 6, -1, 8, 16, 4, 3, 2, -.0148291299119592, .2838754057884216, .5341861844062805, 0, 2, 3, 14, 2, 2, -1, 3, 15, 2, 1, 2, .0009227555710822344, .5209547281265259, .3361653983592987, 0, 2, 14, 8, 4, 6, -1, 14, 10, 4, 2, 3, .0835298076272011, .5119969844818115, .0811644494533539, 0, 2, 2, 8, 4, 6, -1, 2, 10, 4, 2, 3, -.0007563314866274595, .331712007522583, .5189831256866455, 0, 2, 10, 14, 1, 6, -1, 10, 17, 1, 3, 2, .009840385988354683, .524759829044342, .233495905995369, 0, 2, 7, 5, 3, 6, -1, 8, 5, 1, 6, 3, -.0015953830443322659, .5750094056129456, .4295622110366821, 0, 3, 11, 2, 2, 6, -1, 12, 2, 1, 3, 2, 11, 5, 1, 3, 2, 34766020689858124e-21, .4342445135116577, .5564029216766357, 0, 2, 6, 6, 6, 5, -1, 8, 6, 2, 5, 3, .0298629105091095, .4579147100448608, .6579188108444214, 0, 2, 17, 1, 3, 6, -1, 17, 3, 3, 2, 3, .0113255903124809, .5274311900138855, .3673888146877289, 0, 2, 8, 7, 3, 5, -1, 9, 7, 1, 5, 3, -.008782864548265934, .7100368738174438, .4642167091369629, 0, 2, 9, 18, 3, 2, -1, 10, 18, 1, 2, 3, .004363995976746082, .5279216170310974, .2705877125263214, 0, 2, 8, 18, 3, 2, -1, 9, 18, 1, 2, 3, .004180472809821367, .5072525143623352, .2449083030223846, 0, 2, 12, 3, 5, 2, -1, 12, 4, 5, 1, 2, -.0004566851130221039, .4283105134963989, .5548691153526306, 0, 2, 7, 1, 5, 12, -1, 7, 7, 5, 6, 2, -.0037140368949621916, .5519387722015381, .4103653132915497, 0, 2, 1, 0, 18, 4, -1, 7, 0, 6, 4, 3, -.025304289534688, .6867002248764038, .48698890209198, 0, 2, 4, 2, 2, 2, -1, 4, 3, 2, 1, 2, -.0003445408074185252, .3728874027729034, .528769314289093, 0, 3, 11, 14, 4, 2, -1, 13, 14, 2, 1, 2, 11, 15, 2, 1, 2, -.0008393523166887462, .6060152053833008, .4616062045097351, 0, 2, 0, 2, 3, 6, -1, 0, 4, 3, 2, 3, .0172800496220589, .5049635767936707, .1819823980331421, 0, 2, 9, 7, 2, 3, -1, 9, 8, 2, 1, 3, -.006359507795423269, .1631239950656891, .5232778787612915, 0, 2, 5, 5, 1, 3, -1, 5, 6, 1, 1, 3, .0010298109846189618, .446327805519104, .6176549196243286, 0, 2, 10, 10, 6, 1, -1, 10, 10, 3, 1, 2, .0010117109632119536, .5473384857177734, .4300698935985565, 0, 2, 4, 10, 6, 1, -1, 7, 10, 3, 1, 2, -.010308800265193, .1166985034942627, .5000867247581482, 0, 2, 9, 17, 3, 3, -1, 9, 18, 3, 1, 3, .005468201823532581, .4769287109375, .6719213724136353, 0, 2, 4, 14, 1, 3, -1, 4, 15, 1, 1, 3, -.0009169646073132753, .3471089899539948, .5178164839744568, 0, 2, 12, 5, 3, 3, -1, 12, 6, 3, 1, 3, .002392282010987401, .4785236120223999, .6216310858726501, 0, 2, 4, 5, 12, 3, -1, 4, 6, 12, 1, 3, -.007557381875813007, .5814796090126038, .4410085082054138, 0, 2, 9, 8, 2, 3, -1, 9, 9, 2, 1, 3, -.0007702403236180544, .387800008058548, .546572208404541, 0, 2, 4, 9, 3, 3, -1, 5, 9, 1, 3, 3, -.00871259905397892, .1660051047801971, .4995836019515991, 0, 2, 6, 0, 9, 17, -1, 9, 0, 3, 17, 3, -.0103063201531768, .4093391001224518, .5274233818054199, 0, 2, 9, 12, 1, 3, -1, 9, 13, 1, 1, 3, -.002094097901135683, .6206194758415222, .4572280049324036, 0, 2, 9, 5, 2, 15, -1, 9, 10, 2, 5, 3, .006809905171394348, .5567759275436401, .4155600070953369, 0, 2, 8, 14, 2, 3, -1, 8, 15, 2, 1, 3, -.0010746059706434608, .5638927817344666, .4353024959564209, 0, 2, 10, 14, 1, 3, -1, 10, 15, 1, 1, 3, .0021550289820879698, .4826265871524811, .6749758124351501, 0, 2, 7, 1, 6, 5, -1, 9, 1, 2, 5, 3, .0317423194646835, .5048379898071289, .188324898481369, 0, 2, 0, 0, 20, 2, -1, 0, 0, 10, 2, 2, -.0783827230334282, .2369548976421356, .5260158181190491, 0, 2, 2, 13, 5, 3, -1, 2, 14, 5, 1, 3, .005741511937230825, .5048828721046448, .2776469886302948, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.0029014600440859795, .6238604784011841, .4693317115306854, 0, 2, 2, 5, 9, 15, -1, 2, 10, 9, 5, 3, -.0026427931152284145, .3314141929149628, .5169777274131775, 0, 3, 5, 0, 12, 10, -1, 11, 0, 6, 5, 2, 5, 5, 6, 5, 2, -.1094966009259224, .2380045056343079, .5183441042900085, 0, 2, 5, 1, 2, 3, -1, 6, 1, 1, 3, 2, 7407591328956187e-20, .406963586807251, .5362150073051453, 0, 2, 10, 7, 6, 1, -1, 12, 7, 2, 1, 3, -.0005059380200691521, .5506706237792969, .437459409236908, 0, 3, 3, 1, 2, 10, -1, 3, 1, 1, 5, 2, 4, 6, 1, 5, 2, -.0008213177789002657, .5525709986686707, .4209375977516174, 0, 2, 13, 7, 2, 1, -1, 13, 7, 1, 1, 2, -60276539443293586e-21, .5455474853515625, .4748266041278839, 0, 2, 4, 13, 4, 6, -1, 4, 15, 4, 2, 3, .006806514225900173, .5157995820045471, .3424577116966248, 0, 2, 13, 7, 2, 1, -1, 13, 7, 1, 1, 2, .0017202789895236492, .5013207793235779, .6331263780593872, 0, 2, 5, 7, 2, 1, -1, 6, 7, 1, 1, 2, -.0001301692973356694, .5539718270301819, .4226869940757752, 0, 3, 2, 12, 18, 4, -1, 11, 12, 9, 2, 2, 2, 14, 9, 2, 2, -.004801638890057802, .4425095021724701, .5430780053138733, 0, 3, 5, 7, 2, 2, -1, 5, 7, 1, 1, 2, 6, 8, 1, 1, 2, -.002539931097999215, .7145782113075256, .4697605073451996, 0, 2, 16, 3, 4, 2, -1, 16, 4, 4, 1, 2, -.0014278929447755218, .4070445001125336, .539960503578186, 0, 3, 0, 2, 2, 18, -1, 0, 2, 1, 9, 2, 1, 11, 1, 9, 2, -.0251425504684448, .7884690761566162, .4747352004051209, 0, 3, 1, 2, 18, 4, -1, 10, 2, 9, 2, 2, 1, 4, 9, 2, 2, -.0038899609353393316, .4296191930770874, .5577110052108765, 0, 2, 9, 14, 1, 3, -1, 9, 15, 1, 1, 3, .004394745919853449, .4693162143230438, .702394425868988, 0, 3, 2, 12, 18, 4, -1, 11, 12, 9, 2, 2, 2, 14, 9, 2, 2, .0246784202754498, .5242322087287903, .3812510073184967, 0, 3, 0, 12, 18, 4, -1, 0, 12, 9, 2, 2, 9, 14, 9, 2, 2, .0380476787686348, .5011739730834961, .1687828004360199, 0, 2, 11, 4, 5, 3, -1, 11, 5, 5, 1, 3, .007942486554384232, .4828582108020783, .6369568109512329, 0, 2, 6, 4, 7, 3, -1, 6, 5, 7, 1, 3, -.0015110049862414598, .5906485915184021, .4487667977809906, 0, 2, 13, 17, 3, 3, -1, 13, 18, 3, 1, 3, .0064201741479337215, .5241097807884216, .2990570068359375, 0, 2, 8, 1, 3, 4, -1, 9, 1, 1, 4, 3, -.0029802159406244755, .3041465878486633, .5078489780426025, 0, 2, 11, 4, 2, 4, -1, 11, 4, 1, 4, 2, -.0007458007894456387, .4128139019012451, .5256826281547546, 0, 2, 0, 17, 9, 3, -1, 3, 17, 3, 3, 3, -.0104709500446916, .5808395147323608, .4494296014308929, 0, 3, 11, 0, 2, 8, -1, 12, 0, 1, 4, 2, 11, 4, 1, 4, 2, .009336920455098152, .524655282497406, .265894889831543, 0, 3, 0, 8, 6, 12, -1, 0, 8, 3, 6, 2, 3, 14, 3, 6, 2, .0279369000345469, .4674955010414124, .7087256908416748, 0, 2, 10, 7, 4, 12, -1, 10, 13, 4, 6, 2, .007427767850458622, .5409486889839172, .3758518099784851, 0, 2, 5, 3, 8, 14, -1, 5, 10, 8, 7, 2, -.0235845092684031, .3758639991283417, .5238550901412964, 0, 2, 14, 10, 6, 1, -1, 14, 10, 3, 1, 2, .0011452640173956752, .4329578876495361, .5804247260093689, 0, 2, 0, 4, 10, 4, -1, 0, 6, 10, 2, 2, -.0004346866044215858, .5280618071556091, .3873069882392883, 0, 2, 10, 0, 5, 8, -1, 10, 4, 5, 4, 2, .0106485402211547, .4902113080024719, .5681251883506775, 0, 3, 8, 1, 4, 8, -1, 8, 1, 2, 4, 2, 10, 5, 2, 4, 2, -.0003941805043723434, .5570880174636841, .4318251013755798, 0, 2, 9, 11, 6, 1, -1, 11, 11, 2, 1, 3, -.00013270479394122958, .5658439993858337, .4343554973602295, 0, 2, 8, 9, 3, 4, -1, 9, 9, 1, 4, 3, -.002012551063671708, .6056739091873169, .4537523984909058, 0, 2, 18, 4, 2, 6, -1, 18, 6, 2, 2, 3, .0024854319635778666, .5390477180480957, .4138010144233704, 0, 2, 8, 8, 3, 4, -1, 9, 8, 1, 4, 3, .0018237880431115627, .4354828894138336, .5717188715934753, 0, 2, 7, 1, 13, 3, -1, 7, 2, 13, 1, 3, -.0166566595435143, .3010913133621216, .521612286567688, 0, 2, 7, 13, 6, 1, -1, 9, 13, 2, 1, 3, .0008034955826587975, .5300151109695435, .3818396925926209, 0, 2, 12, 11, 3, 6, -1, 12, 13, 3, 2, 3, .003417037893086672, .5328028798103333, .4241400063037872, 0, 2, 5, 11, 6, 1, -1, 7, 11, 2, 1, 3, -.00036222729249857366, .5491728186607361, .418697714805603, 0, 3, 1, 4, 18, 10, -1, 10, 4, 9, 5, 2, 1, 9, 9, 5, 2, -.1163002029061317, .1440722048282623, .522645115852356, 0, 2, 8, 6, 4, 9, -1, 8, 9, 4, 3, 3, -.0146950101479888, .7747725248336792, .4715717136859894, 0, 2, 8, 6, 4, 3, -1, 8, 7, 4, 1, 3, .0021972130052745342, .5355433821678162, .3315644860267639, 0, 2, 8, 7, 3, 3, -1, 9, 7, 1, 3, 3, -.00046965209185145795, .5767235159873962, .4458136856555939, 0, 2, 14, 15, 4, 3, -1, 14, 16, 4, 1, 3, .006514499895274639, .5215674042701721, .3647888898849487, 0, 2, 5, 10, 3, 10, -1, 6, 10, 1, 10, 3, .0213000606745481, .4994204938411713, .1567950993776321, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, .0031881409231573343, .4742200076580048, .6287270188331604, 0, 2, 0, 8, 1, 6, -1, 0, 10, 1, 2, 3, .0009001977741718292, .5347954034805298, .394375205039978, 0, 2, 10, 15, 1, 3, -1, 10, 16, 1, 1, 3, -.005177227780222893, .6727191805839539, .5013138055801392, 0, 2, 2, 15, 4, 3, -1, 2, 16, 4, 1, 3, -.004376464989036322, .3106675148010254, .5128793120384216, 0, 3, 18, 3, 2, 8, -1, 19, 3, 1, 4, 2, 18, 7, 1, 4, 2, .002629996044561267, .488631010055542, .5755215883255005, 0, 3, 0, 3, 2, 8, -1, 0, 3, 1, 4, 2, 1, 7, 1, 4, 2, -.002045868895947933, .6025794148445129, .4558076858520508, 0, 3, 3, 7, 14, 10, -1, 10, 7, 7, 5, 2, 3, 12, 7, 5, 2, .0694827064871788, .5240747928619385, .2185259014368057, 0, 2, 0, 7, 19, 3, -1, 0, 8, 19, 1, 3, .0240489393472672, .501186728477478, .2090622037649155, 0, 2, 12, 6, 3, 3, -1, 12, 7, 3, 1, 3, .003109534038230777, .4866712093353272, .7108548283576965, 0, 2, 0, 6, 1, 3, -1, 0, 7, 1, 1, 3, -.00125032605137676, .3407891094684601, .5156195163726807, 0, 2, 12, 6, 3, 3, -1, 12, 7, 3, 1, 3, -.0010281190043315291, .557557225227356, .443943202495575, 0, 2, 5, 6, 3, 3, -1, 5, 7, 3, 1, 3, -.008889362215995789, .6402000784873962, .4620442092418671, 0, 2, 8, 2, 4, 2, -1, 8, 3, 4, 1, 2, -.0006109480164013803, .3766441941261292, .5448899865150452, 0, 2, 6, 3, 4, 12, -1, 8, 3, 2, 12, 2, -.005768635775893927, .3318648934364319, .5133677124977112, 0, 2, 13, 6, 2, 3, -1, 13, 7, 2, 1, 3, .0018506490159779787, .4903570115566254, .6406934857368469, 0, 2, 0, 10, 20, 4, -1, 0, 12, 20, 2, 2, -.0997994691133499, .1536051034927368, .5015562176704407, 0, 2, 2, 0, 17, 14, -1, 2, 7, 17, 7, 2, -.3512834906578064, .0588231310248375, .5174378752708435, 0, 3, 0, 0, 6, 10, -1, 0, 0, 3, 5, 2, 3, 5, 3, 5, 2, -.0452445708215237, .6961488723754883, .4677872955799103, 0, 2, 14, 6, 6, 4, -1, 14, 6, 3, 4, 2, .0714815780520439, .5167986154556274, .1038092970848084, 0, 2, 0, 6, 6, 4, -1, 3, 6, 3, 4, 2, .0021895780228078365, .4273078143596649, .5532060861587524, 0, 2, 13, 2, 7, 2, -1, 13, 3, 7, 1, 2, -.0005924265133216977, .46389439702034, .5276389122009277, 0, 2, 0, 2, 7, 2, -1, 0, 3, 7, 1, 2, .0016788389766588807, .530164897441864, .3932034969329834, 0, 3, 6, 11, 14, 2, -1, 13, 11, 7, 1, 2, 6, 12, 7, 1, 2, -.0022163488902151585, .5630694031715393, .4757033884525299, 0, 3, 8, 5, 2, 2, -1, 8, 5, 1, 1, 2, 9, 6, 1, 1, 2, .00011568699846975505, .4307535886764526, .5535702705383301, 0, 2, 13, 9, 2, 3, -1, 13, 9, 1, 3, 2, -.007201728876680136, .144488200545311, .5193064212799072, 0, 2, 1, 1, 3, 12, -1, 2, 1, 1, 12, 3, .0008908127201721072, .4384432137012482, .5593621134757996, 0, 2, 17, 4, 1, 3, -1, 17, 5, 1, 1, 3, .00019605009583756328, .5340415835380554, .4705956876277924, 0, 2, 2, 4, 1, 3, -1, 2, 5, 1, 1, 3, .0005202214233577251, .5213856101036072, .3810079097747803, 0, 2, 14, 5, 1, 3, -1, 14, 6, 1, 1, 3, .0009458857239224017, .4769414961338043, .6130738854408264, 0, 2, 7, 16, 2, 3, -1, 7, 17, 2, 1, 3, 916984718060121e-19, .4245009124279022, .5429363250732422, 0, 3, 8, 13, 4, 6, -1, 10, 13, 2, 3, 2, 8, 16, 2, 3, 2, .002183320000767708, .5457730889320374, .419107586145401, 0, 2, 5, 5, 1, 3, -1, 5, 6, 1, 1, 3, -.0008603967144154012, .5764588713645935, .4471659958362579, 0, 2, 16, 0, 4, 20, -1, 16, 0, 2, 20, 2, -.0132362395524979, .6372823119163513, .4695009887218475, 0, 3, 5, 1, 2, 6, -1, 5, 1, 1, 3, 2, 6, 4, 1, 3, 2, .0004337670106906444, .5317873954772949, .394582986831665, 69.22987365722656, 140, 0, 2, 5, 4, 10, 4, -1, 5, 6, 10, 2, 2, -.024847149848938, .6555516719818115, .3873311877250671, 0, 2, 15, 2, 4, 12, -1, 15, 2, 2, 12, 2, .006134861148893833, .374807208776474, .5973997712135315, 0, 2, 7, 6, 4, 12, -1, 7, 12, 4, 6, 2, .006449849810451269, .542549192905426, .2548811137676239, 0, 2, 14, 5, 1, 8, -1, 14, 9, 1, 4, 2, .0006349121103994548, .2462442070245743, .5387253761291504, 0, 3, 1, 4, 14, 10, -1, 1, 4, 7, 5, 2, 8, 9, 7, 5, 2, .0014023890253156424, .5594322085380554, .3528657853603363, 0, 3, 11, 6, 6, 14, -1, 14, 6, 3, 7, 2, 11, 13, 3, 7, 2, .0003004400059580803, .3958503901958466, .576593816280365, 0, 3, 3, 6, 6, 14, -1, 3, 6, 3, 7, 2, 6, 13, 3, 7, 2, .00010042409849120304, .3698996901512146, .5534998178482056, 0, 2, 4, 9, 15, 2, -1, 9, 9, 5, 2, 3, -.005084149073809385, .3711090981960297, .5547800064086914, 0, 2, 7, 14, 6, 3, -1, 7, 15, 6, 1, 3, -.0195372607558966, .7492755055427551, .4579297006130219, 0, 3, 6, 3, 14, 4, -1, 13, 3, 7, 2, 2, 6, 5, 7, 2, 2, -7453274065483129e-21, .5649787187576294, .390406996011734, 0, 2, 1, 9, 15, 2, -1, 6, 9, 5, 2, 3, -.0036079459823668003, .3381088078022003, .5267801284790039, 0, 2, 6, 11, 8, 9, -1, 6, 14, 8, 3, 3, .002069750102236867, .5519291162490845, .3714388906955719, 0, 2, 7, 4, 3, 8, -1, 8, 4, 1, 8, 3, -.0004646384040825069, .5608214735984802, .4113566875457764, 0, 2, 14, 6, 2, 6, -1, 14, 9, 2, 3, 2, .0007549045258201659, .3559206128120422, .532935619354248, 0, 3, 5, 7, 6, 4, -1, 5, 7, 3, 2, 2, 8, 9, 3, 2, 2, -.0009832223877310753, .5414795875549316, .3763205111026764, 0, 2, 1, 1, 18, 19, -1, 7, 1, 6, 19, 3, -.0199406407773495, .634790301322937, .4705299139022827, 0, 2, 1, 2, 6, 5, -1, 4, 2, 3, 5, 2, .0037680300883948803, .3913489878177643, .5563716292381287, 0, 2, 12, 17, 6, 2, -1, 12, 18, 6, 1, 2, -.009452850557863712, .2554892897605896, .5215116739273071, 0, 2, 2, 17, 6, 2, -1, 2, 18, 6, 1, 2, .002956084907054901, .5174679160118103, .3063920140266419, 0, 2, 17, 3, 3, 6, -1, 17, 5, 3, 2, 3, .009107873775064945, .5388448238372803, .2885963022708893, 0, 2, 8, 17, 3, 3, -1, 8, 18, 3, 1, 3, .0018219229532405734, .4336043000221252, .58521968126297, 0, 2, 10, 13, 2, 6, -1, 10, 16, 2, 3, 2, .0146887395530939, .5287361741065979, .2870005965232849, 0, 2, 7, 13, 6, 3, -1, 7, 14, 6, 1, 3, -.0143879903480411, .701944887638092, .4647370874881744, 0, 2, 17, 3, 3, 6, -1, 17, 5, 3, 2, 3, -.0189866498112679, .2986552119255066, .5247011780738831, 0, 2, 8, 13, 2, 3, -1, 8, 14, 2, 1, 3, .0011527639580890536, .4323473870754242, .593166172504425, 0, 2, 9, 3, 6, 2, -1, 11, 3, 2, 2, 3, .0109336702153087, .5286864042282104, .3130319118499756, 0, 2, 0, 3, 3, 6, -1, 0, 5, 3, 2, 3, -.0149327302351594, .2658419013023377, .508407711982727, 0, 2, 8, 5, 4, 6, -1, 8, 7, 4, 2, 3, -.0002997053961735219, .5463526844978333, .374072402715683, 0, 2, 5, 5, 3, 2, -1, 5, 6, 3, 1, 2, .004167762119323015, .4703496992588043, .7435721755027771, 0, 2, 10, 1, 3, 4, -1, 11, 1, 1, 4, 3, -.00639053201302886, .2069258987903595, .5280538201332092, 0, 2, 1, 2, 5, 9, -1, 1, 5, 5, 3, 3, .004502960946410894, .518264889717102, .348354309797287, 0, 2, 13, 6, 2, 3, -1, 13, 7, 2, 1, 3, -.009204036556184292, .680377721786499, .4932360053062439, 0, 2, 0, 6, 14, 3, -1, 7, 6, 7, 3, 2, .0813272595405579, .5058398842811584, .2253051996231079, 0, 2, 2, 11, 18, 8, -1, 2, 15, 18, 4, 2, -.150792807340622, .2963424921035767, .5264679789543152, 0, 2, 5, 6, 2, 3, -1, 5, 7, 2, 1, 3, .0033179009333252907, .4655495882034302, .7072932124137878, 0, 3, 10, 6, 4, 2, -1, 12, 6, 2, 1, 2, 10, 7, 2, 1, 2, .0007740280125290155, .4780347943305969, .5668237805366516, 0, 3, 6, 6, 4, 2, -1, 6, 6, 2, 1, 2, 8, 7, 2, 1, 2, .0006819954141974449, .4286996126174927, .5722156763076782, 0, 2, 10, 1, 3, 4, -1, 11, 1, 1, 4, 3, .0053671570494771, .5299307107925415, .3114621937274933, 0, 2, 7, 1, 2, 7, -1, 8, 1, 1, 7, 2, 9701866656541824e-20, .3674638867378235, .5269461870193481, 0, 2, 4, 2, 15, 14, -1, 4, 9, 15, 7, 2, -.1253408938646317, .2351492047309876, .5245791077613831, 0, 2, 8, 7, 3, 2, -1, 9, 7, 1, 2, 3, -.005251626949757338, .7115936875343323, .4693767130374908, 0, 3, 2, 3, 18, 4, -1, 11, 3, 9, 2, 2, 2, 5, 9, 2, 2, -.007834210991859436, .4462651014328003, .5409085750579834, 0, 2, 9, 7, 2, 2, -1, 10, 7, 1, 2, 2, -.001131006982177496, .5945618748664856, .4417662024497986, 0, 2, 13, 9, 2, 3, -1, 13, 9, 1, 3, 2, .0017601120052859187, .5353249907493591, .3973453044891357, 0, 2, 5, 2, 6, 2, -1, 7, 2, 2, 2, 3, -.00081581249833107, .3760268092155457, .5264726877212524, 0, 2, 9, 5, 2, 7, -1, 9, 5, 1, 7, 2, -.003868758911266923, .6309912800788879, .4749819934368134, 0, 2, 5, 9, 2, 3, -1, 6, 9, 1, 3, 2, .0015207129763439298, .5230181813240051, .3361223936080933, 0, 2, 6, 0, 14, 18, -1, 6, 9, 14, 9, 2, .545867383480072, .5167139768600464, .1172635033726692, 0, 2, 2, 16, 6, 3, -1, 2, 17, 6, 1, 3, .0156501904129982, .4979439079761505, .1393294930458069, 0, 2, 9, 7, 3, 6, -1, 10, 7, 1, 6, 3, -.0117318602278829, .7129650712013245, .4921196103096008, 0, 2, 7, 8, 4, 3, -1, 7, 9, 4, 1, 3, -.006176512222737074, .2288102954626083, .5049701929092407, 0, 2, 7, 12, 6, 3, -1, 7, 13, 6, 1, 3, .0022457661107182503, .4632433950901032, .6048725843429565, 0, 2, 9, 12, 2, 3, -1, 9, 13, 2, 1, 3, -.005191586911678314, .6467421054840088, .4602192938327789, 0, 2, 7, 12, 6, 2, -1, 9, 12, 2, 2, 3, -.0238278806209564, .1482000946998596, .5226079225540161, 0, 2, 5, 11, 4, 6, -1, 5, 14, 4, 3, 2, .0010284580057486892, .5135489106178284, .3375957012176514, 0, 2, 11, 12, 7, 2, -1, 11, 13, 7, 1, 2, -.0100788502022624, .2740561068058014, .5303567051887512, 0, 3, 6, 10, 8, 6, -1, 6, 10, 4, 3, 2, 10, 13, 4, 3, 2, .002616893034428358, .533267080783844, .3972454071044922, 0, 2, 11, 10, 3, 4, -1, 11, 12, 3, 2, 2, .000543853675480932, .5365604162216187, .4063411951065064, 0, 2, 9, 16, 2, 3, -1, 9, 17, 2, 1, 3, .005351051222532988, .4653759002685547, .6889045834541321, 0, 2, 13, 3, 1, 9, -1, 13, 6, 1, 3, 3, -.0015274790348485112, .5449501276016235, .3624723851680756, 0, 2, 1, 13, 14, 6, -1, 1, 15, 14, 2, 3, -.0806244164705276, .1656087040901184, .5000287294387817, 0, 2, 13, 6, 1, 6, -1, 13, 9, 1, 3, 2, .0221920292824507, .5132731199264526, .2002808004617691, 0, 2, 0, 4, 3, 8, -1, 1, 4, 1, 8, 3, .007310063112527132, .4617947936058044, .6366536021232605, 0, 2, 18, 0, 2, 18, -1, 18, 0, 1, 18, 2, -.006406307220458984, .5916250944137573, .4867860972881317, 0, 2, 2, 3, 6, 2, -1, 2, 4, 6, 1, 2, -.0007641504053026438, .388840913772583, .5315797924995422, 0, 2, 9, 0, 8, 6, -1, 9, 2, 8, 2, 3, .0007673448999412358, .4159064888954163, .5605279803276062, 0, 2, 6, 6, 1, 6, -1, 6, 9, 1, 3, 2, .0006147450185380876, .3089022040367127, .5120148062705994, 0, 2, 14, 8, 6, 3, -1, 14, 9, 6, 1, 3, -.005010527092963457, .3972199857234955, .5207306146621704, 0, 2, 0, 0, 2, 18, -1, 1, 0, 1, 18, 2, -.008690913207828999, .6257408261299133, .4608575999736786, 0, 3, 1, 18, 18, 2, -1, 10, 18, 9, 1, 2, 1, 19, 9, 1, 2, -.016391459852457, .2085209935903549, .5242266058921814, 0, 2, 3, 15, 2, 2, -1, 3, 16, 2, 1, 2, .00040973909199237823, .5222427248954773, .3780320882797241, 0, 2, 8, 14, 5, 3, -1, 8, 15, 5, 1, 3, -.002524228999391198, .5803927183151245, .4611890017986298, 0, 2, 8, 14, 2, 3, -1, 8, 15, 2, 1, 3, .0005094531225040555, .4401271939277649, .5846015810966492, 0, 2, 12, 3, 3, 3, -1, 13, 3, 1, 3, 3, .001965641975402832, .5322325229644775, .4184590876102448, 0, 2, 7, 5, 6, 2, -1, 9, 5, 2, 2, 3, .0005629889783449471, .3741844892501831, .5234565734863281, 0, 2, 15, 5, 5, 2, -1, 15, 6, 5, 1, 2, -.0006794679793529212, .4631041884422302, .5356478095054626, 0, 2, 0, 5, 5, 2, -1, 0, 6, 5, 1, 2, .007285634987056255, .5044670104980469, .2377564013004303, 0, 2, 17, 14, 1, 6, -1, 17, 17, 1, 3, 2, -.0174594894051552, .7289121150970459, .5050435066223145, 0, 2, 2, 9, 9, 3, -1, 5, 9, 3, 3, 3, -.0254217498004436, .6667134761810303, .4678100049495697, 0, 2, 12, 3, 3, 3, -1, 13, 3, 1, 3, 3, -.0015647639520466328, .4391759037971497, .532362699508667, 0, 2, 0, 0, 4, 18, -1, 2, 0, 2, 18, 2, .0114443600177765, .4346440136432648, .5680012106895447, 0, 2, 17, 6, 1, 3, -1, 17, 7, 1, 1, 3, -.0006735255010426044, .44771409034729, .5296812057495117, 0, 2, 2, 14, 1, 6, -1, 2, 17, 1, 3, 2, .009319420903921127, .4740200042724609, .7462607026100159, 0, 2, 19, 8, 1, 2, -1, 19, 9, 1, 1, 2, .00013328490604180843, .536506175994873, .475213497877121, 0, 2, 5, 3, 3, 3, -1, 6, 3, 1, 3, 3, -.007881579920649529, .1752219051122665, .5015255212783813, 0, 2, 9, 16, 2, 3, -1, 9, 17, 2, 1, 3, -.005798568017780781, .7271236777305603, .4896200895309448, 0, 2, 2, 6, 1, 3, -1, 2, 7, 1, 1, 3, -.0003892249951604754, .4003908932209015, .5344941020011902, 0, 3, 12, 4, 8, 2, -1, 16, 4, 4, 1, 2, 12, 5, 4, 1, 2, -.0019288610201328993, .5605612993240356, .4803955852985382, 0, 3, 0, 4, 8, 2, -1, 0, 4, 4, 1, 2, 4, 5, 4, 1, 2, .008421415463089943, .4753246903419495, .7623608708381653, 0, 2, 2, 16, 18, 4, -1, 2, 18, 18, 2, 2, .008165587671101093, .5393261909484863, .419164389371872, 0, 2, 7, 15, 2, 4, -1, 7, 17, 2, 2, 2, .00048280550981871784, .4240800142288208, .5399821996688843, 0, 2, 4, 0, 14, 3, -1, 4, 1, 14, 1, 3, -.002718663075938821, .4244599938392639, .5424923896789551, 0, 2, 0, 0, 4, 20, -1, 2, 0, 2, 20, 2, -.0125072300434113, .5895841717720032, .4550411105155945, 0, 3, 12, 4, 4, 8, -1, 14, 4, 2, 4, 2, 12, 8, 2, 4, 2, -.0242865197360516, .2647134959697723, .518917977809906, 0, 3, 6, 7, 2, 2, -1, 6, 7, 1, 1, 2, 7, 8, 1, 1, 2, -.0029676330741494894, .734768271446228, .4749749898910523, 0, 2, 10, 6, 2, 3, -1, 10, 7, 2, 1, 3, -.0125289997085929, .2756049931049347, .5177599787712097, 0, 2, 8, 7, 3, 2, -1, 8, 8, 3, 1, 2, -.0010104000102728605, .3510560989379883, .5144724249839783, 0, 2, 8, 2, 6, 12, -1, 8, 8, 6, 6, 2, -.0021348530426621437, .5637925863265991, .466731995344162, 0, 2, 4, 0, 11, 12, -1, 4, 4, 11, 4, 3, .0195642597973347, .4614573121070862, .6137639880180359, 0, 2, 14, 9, 6, 11, -1, 16, 9, 2, 11, 3, -.0971463471651077, .2998378872871399, .5193555951118469, 0, 2, 0, 14, 4, 3, -1, 0, 15, 4, 1, 3, .00450145686045289, .5077884793281555, .3045755922794342, 0, 2, 9, 10, 2, 3, -1, 9, 11, 2, 1, 3, .006370697170495987, .486101895570755, .6887500882148743, 0, 2, 5, 11, 3, 2, -1, 5, 12, 3, 1, 2, -.009072152897715569, .1673395931720734, .5017563104629517, 0, 2, 9, 15, 3, 3, -1, 10, 15, 1, 3, 3, -.005353720858693123, .2692756950855255, .524263322353363, 0, 2, 8, 8, 3, 4, -1, 9, 8, 1, 4, 3, -.0109328404068947, .7183864116668701, .4736028909683228, 0, 2, 9, 15, 3, 3, -1, 10, 15, 1, 3, 3, .008235607296228409, .5223966836929321, .2389862984418869, 0, 2, 7, 7, 3, 2, -1, 8, 7, 1, 2, 3, -.0010038160253316164, .5719355940818787, .4433943033218384, 0, 3, 2, 10, 16, 4, -1, 10, 10, 8, 2, 2, 2, 12, 8, 2, 2, .004085912834852934, .5472841858863831, .4148836135864258, 0, 2, 2, 3, 4, 17, -1, 4, 3, 2, 17, 2, .1548541933298111, .4973812103271484, .0610615983605385, 0, 2, 15, 13, 2, 7, -1, 15, 13, 1, 7, 2, .00020897459762636572, .4709174036979675, .542388916015625, 0, 2, 2, 2, 6, 1, -1, 5, 2, 3, 1, 2, .0003331699117552489, .4089626967906952, .5300992131233215, 0, 2, 5, 2, 12, 4, -1, 9, 2, 4, 4, 3, -.0108134001493454, .6104369759559631, .4957334101200104, 0, 3, 6, 0, 8, 12, -1, 6, 0, 4, 6, 2, 10, 6, 4, 6, 2, .0456560105085373, .5069689154624939, .2866660058498383, 0, 3, 13, 7, 2, 2, -1, 14, 7, 1, 1, 2, 13, 8, 1, 1, 2, .0012569549726322293, .484691709280014, .631817102432251, 0, 2, 0, 12, 20, 6, -1, 0, 14, 20, 2, 3, -.120150700211525, .0605261400341988, .4980959892272949, 0, 2, 14, 7, 2, 3, -1, 14, 7, 1, 3, 2, -.00010533799650147557, .5363109707832336, .4708042144775391, 0, 2, 0, 8, 9, 12, -1, 3, 8, 3, 12, 3, -.2070319056510925, .059660330414772, .497909814119339, 0, 2, 3, 0, 16, 2, -1, 3, 0, 8, 2, 2, .00012909180077258497, .4712977111339569, .5377997756004333, 0, 2, 6, 15, 3, 3, -1, 6, 16, 3, 1, 3, .000388185289921239, .4363538026809692, .5534191131591797, 0, 2, 8, 15, 6, 3, -1, 8, 16, 6, 1, 3, -.0029243610333651304, .5811185836791992, .4825215935707092, 0, 2, 0, 10, 1, 6, -1, 0, 12, 1, 2, 3, .0008388233254663646, .5311700105667114, .403813898563385, 0, 2, 10, 9, 4, 3, -1, 10, 10, 4, 1, 3, -.0019061550265178084, .3770701885223389, .526001513004303, 0, 2, 9, 15, 2, 3, -1, 9, 16, 2, 1, 3, .00895143486559391, .4766167998313904, .7682183980941772, 0, 2, 5, 7, 10, 1, -1, 5, 7, 5, 1, 2, .0130834598094225, .5264462828636169, .3062222003936768, 0, 2, 4, 0, 12, 19, -1, 10, 0, 6, 19, 2, -.2115933001041412, .6737198233604431, .4695810079574585, 0, 3, 0, 6, 20, 6, -1, 10, 6, 10, 3, 2, 0, 9, 10, 3, 2, .0031493250280618668, .5644835233688354, .4386953115463257, 0, 3, 3, 6, 2, 2, -1, 3, 6, 1, 1, 2, 4, 7, 1, 1, 2, .00039754100725986063, .4526061117649078, .5895630121231079, 0, 3, 15, 6, 2, 2, -1, 16, 6, 1, 1, 2, 15, 7, 1, 1, 2, -.0013814480043947697, .6070582270622253, .4942413866519928, 0, 3, 3, 6, 2, 2, -1, 3, 6, 1, 1, 2, 4, 7, 1, 1, 2, -.0005812218878418207, .5998213291168213, .4508252143859863, 0, 2, 14, 4, 1, 12, -1, 14, 10, 1, 6, 2, -.002390532987192273, .420558899641037, .5223848223686218, 0, 3, 2, 5, 16, 10, -1, 2, 5, 8, 5, 2, 10, 10, 8, 5, 2, .0272689294070005, .5206447243690491, .3563301861286163, 0, 2, 9, 17, 3, 2, -1, 10, 17, 1, 2, 3, -.0037658358924090862, .3144704103469849, .5218814015388489, 0, 2, 1, 4, 2, 2, -1, 1, 5, 2, 1, 2, -.0014903489500284195, .338019609451294, .5124437212944031, 0, 2, 5, 0, 15, 5, -1, 10, 0, 5, 5, 3, -.0174282304942608, .5829960703849792, .4919725954532623, 0, 2, 0, 0, 15, 5, -1, 5, 0, 5, 5, 3, -.0152780301868916, .6163144707679749, .4617887139320374, 0, 2, 11, 2, 2, 17, -1, 11, 2, 1, 17, 2, .0319956094026566, .5166357159614563, .171276405453682, 0, 2, 7, 2, 2, 17, -1, 8, 2, 1, 17, 2, -.003825671039521694, .3408012092113495, .5131387710571289, 0, 2, 15, 11, 2, 9, -1, 15, 11, 1, 9, 2, -.00851864367723465, .6105518937110901, .4997941851615906, 0, 2, 3, 11, 2, 9, -1, 4, 11, 1, 9, 2, .0009064162150025368, .4327270984649658, .5582311153411865, 0, 2, 5, 16, 14, 4, -1, 5, 16, 7, 4, 2, .0103448498994112, .4855653047561646, .5452420115470886, 79.24907684326172, 160, 0, 2, 1, 4, 18, 1, -1, 7, 4, 6, 1, 3, .007898182608187199, .333252489566803, .5946462154388428, 0, 3, 13, 7, 6, 4, -1, 16, 7, 3, 2, 2, 13, 9, 3, 2, 2, .0016170160379260778, .3490641117095947, .5577868819236755, 0, 2, 9, 8, 2, 12, -1, 9, 12, 2, 4, 3, -.0005544974119402468, .5542566180229187, .3291530013084412, 0, 2, 12, 1, 6, 6, -1, 12, 3, 6, 2, 3, .001542898011393845, .3612579107284546, .5545979142189026, 0, 3, 5, 2, 6, 6, -1, 5, 2, 3, 3, 2, 8, 5, 3, 3, 2, -.0010329450014978647, .3530139029026032, .5576140284538269, 0, 3, 9, 16, 6, 4, -1, 12, 16, 3, 2, 2, 9, 18, 3, 2, 2, .0007769815856590867, .3916778862476349, .5645321011543274, 0, 2, 1, 2, 18, 3, -1, 7, 2, 6, 3, 3, .143203005194664, .4667482078075409, .7023633122444153, 0, 2, 7, 4, 9, 10, -1, 7, 9, 9, 5, 2, -.007386649027466774, .3073684871196747, .5289257764816284, 0, 2, 5, 9, 4, 4, -1, 7, 9, 2, 4, 2, -.0006293674232438207, .562211811542511, .4037049114704132, 0, 2, 11, 10, 3, 6, -1, 11, 13, 3, 3, 2, .0007889352855272591, .5267661213874817, .3557874858379364, 0, 2, 7, 11, 5, 3, -1, 7, 12, 5, 1, 3, -.0122280502691865, .6668320894241333, .4625549912452698, 0, 3, 7, 11, 6, 6, -1, 10, 11, 3, 3, 2, 7, 14, 3, 3, 2, .0035420239437371492, .5521438121795654, .3869673013687134, 0, 2, 0, 0, 10, 9, -1, 0, 3, 10, 3, 3, -.0010585320414975286, .3628678023815155, .5320926904678345, 0, 2, 13, 14, 1, 6, -1, 13, 16, 1, 2, 3, 14935660146875307e-21, .4632444977760315, .5363323092460632, 0, 2, 0, 2, 3, 6, -1, 0, 4, 3, 2, 3, .005253770854324102, .5132231712341309, .3265708982944489, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, -.008233802393078804, .6693689823150635, .4774140119552612, 0, 2, 6, 14, 1, 6, -1, 6, 16, 1, 2, 3, 2186681012972258e-20, .405386209487915, .5457931160926819, 0, 2, 9, 15, 2, 3, -1, 9, 16, 2, 1, 3, -.0038150229956954718, .645499587059021, .4793178141117096, 0, 2, 6, 4, 3, 3, -1, 7, 4, 1, 3, 3, .0011105879675596952, .5270407199859619, .3529678881168366, 0, 2, 9, 0, 11, 3, -1, 9, 1, 11, 1, 3, -.005770768970251083, .3803547024726868, .5352957844734192, 0, 2, 0, 6, 20, 3, -1, 0, 7, 20, 1, 3, -.003015833906829357, .533940315246582, .3887133002281189, 0, 2, 10, 1, 1, 2, -1, 10, 2, 1, 1, 2, -.0008545368909835815, .3564616143703461, .5273603796958923, 0, 2, 9, 6, 2, 6, -1, 10, 6, 1, 6, 2, .0110505102202296, .4671907126903534, .6849737763404846, 0, 2, 5, 8, 12, 1, -1, 9, 8, 4, 1, 3, .0426058396697044, .51514732837677, .0702200904488564, 0, 2, 3, 8, 12, 1, -1, 7, 8, 4, 1, 3, -.0030781750101596117, .3041661083698273, .5152602195739746, 0, 2, 9, 7, 3, 5, -1, 10, 7, 1, 5, 3, -.005481572821736336, .6430295705795288, .4897229969501495, 0, 2, 3, 9, 6, 2, -1, 6, 9, 3, 2, 2, .003188186092302203, .5307493209838867, .3826209902763367, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, .00035947180003859103, .4650047123432159, .5421904921531677, 0, 2, 7, 0, 6, 1, -1, 9, 0, 2, 1, 3, -.004070503171533346, .2849679887294769, .5079116225242615, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, -.0145941702648997, .2971645891666412, .5128461718559265, 0, 2, 7, 10, 2, 1, -1, 8, 10, 1, 1, 2, -.00011947689927183092, .563109815120697, .4343082010746002, 0, 2, 6, 4, 9, 13, -1, 9, 4, 3, 13, 3, -.0006934464909136295, .4403578042984009, .5359959006309509, 0, 2, 6, 8, 4, 2, -1, 6, 9, 4, 1, 2, 14834799912932795e-21, .3421008884906769, .5164697766304016, 0, 2, 16, 2, 4, 6, -1, 16, 2, 2, 6, 2, .009029698558151722, .4639343023300171, .6114075183868408, 0, 2, 0, 17, 6, 3, -1, 0, 18, 6, 1, 3, -.008064081892371178, .2820158898830414, .5075494050979614, 0, 2, 10, 10, 3, 10, -1, 10, 15, 3, 5, 2, .0260621197521687, .5208905935287476, .2688778042793274, 0, 2, 8, 7, 3, 5, -1, 9, 7, 1, 5, 3, .0173146594315767, .4663713872432709, .6738539934158325, 0, 2, 10, 4, 4, 3, -1, 10, 4, 2, 3, 2, .0226666405797005, .5209349989891052, .2212723940610886, 0, 2, 8, 4, 3, 8, -1, 9, 4, 1, 8, 3, -.002196592977270484, .6063101291656494, .4538190066814423, 0, 2, 6, 6, 9, 13, -1, 9, 6, 3, 13, 3, -.009528247639536858, .4635204970836639, .5247430801391602, 0, 3, 6, 0, 8, 12, -1, 6, 0, 4, 6, 2, 10, 6, 4, 6, 2, .00809436198323965, .5289440155029297, .3913882076740265, 0, 2, 14, 2, 6, 8, -1, 16, 2, 2, 8, 3, -.0728773325681686, .7752001881599426, .4990234971046448, 0, 2, 6, 0, 3, 6, -1, 7, 0, 1, 6, 3, -.006900952197611332, .2428039014339447, .5048090219497681, 0, 2, 14, 2, 6, 8, -1, 16, 2, 2, 8, 3, -.0113082397729158, .5734364986419678, .4842376112937927, 0, 2, 0, 5, 6, 6, -1, 0, 8, 6, 3, 2, .0596132017672062, .5029836297035217, .2524977028369904, 0, 3, 9, 12, 6, 2, -1, 12, 12, 3, 1, 2, 9, 13, 3, 1, 2, -.0028624620754271746, .6073045134544373, .4898459911346436, 0, 2, 8, 17, 3, 2, -1, 9, 17, 1, 2, 3, .00447814492508769, .5015289187431335, .2220316976308823, 0, 3, 11, 6, 2, 2, -1, 12, 6, 1, 1, 2, 11, 7, 1, 1, 2, -.001751324045471847, .6614428758621216, .4933868944644928, 0, 2, 1, 9, 18, 2, -1, 7, 9, 6, 2, 3, .0401634201407433, .5180878043174744, .3741044998168945, 0, 3, 11, 6, 2, 2, -1, 12, 6, 1, 1, 2, 11, 7, 1, 1, 2, .0003476894926279783, .4720416963100433, .5818032026290894, 0, 2, 3, 4, 12, 8, -1, 7, 4, 4, 8, 3, .00265516503714025, .3805010914802551, .5221335887908936, 0, 2, 13, 11, 5, 3, -1, 13, 12, 5, 1, 3, -.008770627900958061, .294416606426239, .5231295228004456, 0, 2, 9, 10, 2, 3, -1, 9, 11, 2, 1, 3, -.005512209143489599, .7346177101135254, .4722816944122315, 0, 2, 14, 7, 2, 3, -1, 14, 7, 1, 3, 2, .0006867204210720956, .5452876091003418, .424241304397583, 0, 2, 5, 4, 1, 3, -1, 5, 5, 1, 1, 3, .0005601966986432672, .439886212348938, .5601285099983215, 0, 2, 13, 4, 2, 3, -1, 13, 5, 2, 1, 3, .0024143769405782223, .4741686880588532, .6136621832847595, 0, 2, 5, 4, 2, 3, -1, 5, 5, 2, 1, 3, -.0015680900542065501, .604455292224884, .4516409933567047, 0, 2, 9, 8, 2, 3, -1, 9, 9, 2, 1, 3, -.0036827491130679846, .2452459037303925, .5294982194900513, 0, 2, 8, 9, 2, 2, -1, 8, 10, 2, 1, 2, -.000294091907562688, .3732838034629822, .5251451134681702, 0, 2, 15, 14, 1, 4, -1, 15, 16, 1, 2, 2, .00042847759323194623, .5498809814453125, .4065535068511963, 0, 2, 3, 12, 2, 2, -1, 3, 13, 2, 1, 2, -.004881707020103931, .2139908969402313, .4999957084655762, 0, 3, 12, 15, 2, 2, -1, 13, 15, 1, 1, 2, 12, 16, 1, 1, 2, .00027272020815871656, .465028703212738, .581342875957489, 0, 2, 9, 13, 2, 2, -1, 9, 14, 2, 1, 2, .00020947199664078653, .4387486875057221, .5572792887687683, 0, 2, 4, 11, 14, 9, -1, 4, 14, 14, 3, 3, .0485011897981167, .5244972705841064, .3212889134883881, 0, 2, 7, 13, 4, 3, -1, 7, 14, 4, 1, 3, -.004516641143709421, .605681300163269, .4545882046222687, 0, 2, 15, 14, 1, 4, -1, 15, 16, 1, 2, 2, -.0122916800901294, .2040929049253464, .5152214169502258, 0, 2, 4, 14, 1, 4, -1, 4, 16, 1, 2, 2, .0004854967992287129, .5237604975700378, .3739503026008606, 0, 2, 14, 0, 6, 13, -1, 16, 0, 2, 13, 3, .0305560491979122, .4960533976554871, .5938246250152588, 0, 3, 4, 1, 2, 12, -1, 4, 1, 1, 6, 2, 5, 7, 1, 6, 2, -.00015105320198927075, .5351303815841675, .4145204126834869, 0, 3, 11, 14, 6, 6, -1, 14, 14, 3, 3, 2, 11, 17, 3, 3, 2, .0024937440175563097, .4693366885185242, .5514941215515137, 0, 3, 3, 14, 6, 6, -1, 3, 14, 3, 3, 2, 6, 17, 3, 3, 2, -.012382130138576, .6791396737098694, .4681667983531952, 0, 2, 14, 17, 3, 2, -1, 14, 18, 3, 1, 2, -.005133346188813448, .3608739078044891, .5229160189628601, 0, 2, 3, 17, 3, 2, -1, 3, 18, 3, 1, 2, .0005191927775740623, .5300073027610779, .3633613884449005, 0, 2, 14, 0, 6, 13, -1, 16, 0, 2, 13, 3, .1506042033433914, .515731692314148, .2211782038211823, 0, 2, 0, 0, 6, 13, -1, 2, 0, 2, 13, 3, .007714414969086647, .4410496950149536, .5776609182357788, 0, 2, 10, 10, 7, 6, -1, 10, 12, 7, 2, 3, .009444352239370346, .5401855111122131, .375665009021759, 0, 3, 6, 15, 2, 2, -1, 6, 15, 1, 1, 2, 7, 16, 1, 1, 2, .00025006249779835343, .4368270933628082, .5607374906539917, 0, 3, 6, 11, 8, 6, -1, 10, 11, 4, 3, 2, 6, 14, 4, 3, 2, -.003307715058326721, .4244799017906189, .551823079586029, 0, 3, 7, 6, 2, 2, -1, 7, 6, 1, 1, 2, 8, 7, 1, 1, 2, .0007404891075566411, .4496962130069733, .5900576710700989, 0, 3, 2, 2, 16, 6, -1, 10, 2, 8, 3, 2, 2, 5, 8, 3, 2, .0440920516848564, .5293493270874023, .3156355023384094, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .0033639909233897924, .4483296871185303, .5848662257194519, 0, 2, 11, 7, 3, 10, -1, 11, 12, 3, 5, 2, -.003976007923483849, .4559507071971893, .5483639240264893, 0, 2, 6, 7, 3, 10, -1, 6, 12, 3, 5, 2, .0027716930489987135, .534178614616394, .3792484104633331, 0, 2, 10, 7, 3, 2, -1, 11, 7, 1, 2, 3, -.00024123019829858094, .5667188763618469, .4576973021030426, 0, 2, 8, 12, 4, 2, -1, 8, 13, 4, 1, 2, .0004942566738463938, .4421244859695435, .5628787279129028, 0, 2, 10, 1, 1, 3, -1, 10, 2, 1, 1, 3, -.0003887646889779717, .4288370907306671, .5391063094139099, 0, 3, 1, 2, 4, 18, -1, 1, 2, 2, 9, 2, 3, 11, 2, 9, 2, -.0500488989055157, .6899513006210327, .4703742861747742, 0, 2, 12, 4, 4, 12, -1, 12, 10, 4, 6, 2, -.0366354808211327, .2217779010534287, .5191826224327087, 0, 2, 0, 0, 1, 6, -1, 0, 2, 1, 2, 3, .0024273579474538565, .5136224031448364, .3497397899627686, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, .001955803018063307, .4826192855834961, .640838086605072, 0, 2, 8, 7, 4, 3, -1, 8, 8, 4, 1, 3, -.0017494610510766506, .3922835886478424, .5272685289382935, 0, 2, 10, 7, 3, 2, -1, 11, 7, 1, 2, 3, .0139550799503922, .507820188999176, .8416504859924316, 0, 2, 7, 7, 3, 2, -1, 8, 7, 1, 2, 3, -.00021896739781368524, .5520489811897278, .4314234852790833, 0, 2, 9, 4, 6, 1, -1, 11, 4, 2, 1, 3, -.0015131309628486633, .3934605121612549, .5382571220397949, 0, 2, 8, 7, 2, 3, -1, 9, 7, 1, 3, 2, -.004362280014902353, .7370628714561462, .4736475944519043, 0, 3, 12, 7, 8, 6, -1, 16, 7, 4, 3, 2, 12, 10, 4, 3, 2, .0651605874300003, .5159279704093933, .328159511089325, 0, 3, 0, 7, 8, 6, -1, 0, 7, 4, 3, 2, 4, 10, 4, 3, 2, -.0023567399475723505, .3672826886177063, .5172886252403259, 0, 3, 18, 2, 2, 10, -1, 19, 2, 1, 5, 2, 18, 7, 1, 5, 2, .0151466596871614, .5031493902206421, .6687604188919067, 0, 2, 0, 2, 6, 4, -1, 3, 2, 3, 4, 2, -.0228509604930878, .676751971244812, .4709596931934357, 0, 2, 9, 4, 6, 1, -1, 11, 4, 2, 1, 3, .004886765033006668, .5257998108863831, .4059878885746002, 0, 3, 7, 15, 2, 2, -1, 7, 15, 1, 1, 2, 8, 16, 1, 1, 2, .0017619599821045995, .4696272909641266, .6688278913497925, 0, 2, 11, 13, 1, 6, -1, 11, 16, 1, 3, 2, -.0012942519970238209, .4320712983608246, .5344281792640686, 0, 2, 8, 13, 1, 6, -1, 8, 16, 1, 3, 2, .0109299495816231, .4997706115245819, .1637486070394516, 0, 2, 14, 3, 2, 1, -1, 14, 3, 1, 1, 2, 2995848990394734e-20, .4282417893409729, .5633224248886108, 0, 2, 8, 15, 2, 3, -1, 8, 16, 2, 1, 3, -.0065884361974895, .677212119102478, .4700526893138886, 0, 2, 12, 15, 7, 4, -1, 12, 17, 7, 2, 2, .0032527779694646597, .531339704990387, .4536148905754089, 0, 2, 4, 14, 12, 3, -1, 4, 15, 12, 1, 3, -.00404357397928834, .5660061836242676, .4413388967514038, 0, 2, 10, 3, 3, 2, -1, 11, 3, 1, 2, 3, -.0012523540062829852, .3731913864612579, .5356451869010925, 0, 2, 4, 12, 2, 2, -1, 4, 13, 2, 1, 2, .00019246719602961093, .5189986228942871, .3738811016082764, 0, 2, 10, 11, 4, 6, -1, 10, 14, 4, 3, 2, -.038589671254158, .2956373989582062, .51888108253479, 0, 3, 7, 13, 2, 2, -1, 7, 13, 1, 1, 2, 8, 14, 1, 1, 2, .0001548987056594342, .4347135126590729, .5509533286094666, 0, 3, 4, 11, 14, 4, -1, 11, 11, 7, 2, 2, 4, 13, 7, 2, 2, -.0337638482451439, .3230330049991608, .5195475816726685, 0, 2, 1, 18, 18, 2, -1, 7, 18, 6, 2, 3, -.008265706710517406, .5975489020347595, .4552114009857178, 0, 3, 11, 18, 2, 2, -1, 12, 18, 1, 1, 2, 11, 19, 1, 1, 2, 14481440302915871e-21, .4745678007602692, .5497426986694336, 0, 3, 7, 18, 2, 2, -1, 7, 18, 1, 1, 2, 8, 19, 1, 1, 2, 14951299817766994e-21, .4324473142623901, .5480644106864929, 0, 2, 12, 18, 8, 2, -1, 12, 19, 8, 1, 2, -.018741799518466, .1580052971839905, .517853319644928, 0, 2, 7, 14, 6, 2, -1, 7, 15, 6, 1, 2, .0017572239739820361, .4517636895179749, .5773764252662659, 0, 3, 8, 12, 4, 8, -1, 10, 12, 2, 4, 2, 8, 16, 2, 4, 2, -.0031391119118779898, .4149647951126099, .5460842251777649, 0, 2, 4, 9, 3, 3, -1, 4, 10, 3, 1, 3, 6665677938144654e-20, .4039090871810913, .5293084979057312, 0, 2, 7, 10, 6, 2, -1, 9, 10, 2, 2, 3, .006774342153221369, .4767651855945587, .612195611000061, 0, 2, 5, 0, 4, 15, -1, 7, 0, 2, 15, 2, -.0073868161998689175, .3586258888244629, .5187280774116516, 0, 2, 8, 6, 12, 14, -1, 12, 6, 4, 14, 3, .0140409301966429, .4712139964103699, .5576155781745911, 0, 2, 5, 16, 3, 3, -1, 5, 17, 3, 1, 3, -.005525832995772362, .2661027014255524, .5039281249046326, 0, 2, 8, 1, 12, 19, -1, 12, 1, 4, 19, 3, .3868423998355866, .5144339799880981, .2525899112224579, 0, 2, 3, 0, 3, 2, -1, 3, 1, 3, 1, 2, .0001145924034062773, .4284994900226593, .5423371195793152, 0, 2, 10, 12, 4, 5, -1, 10, 12, 2, 5, 2, -.0184675697237253, .3885835111141205, .5213062167167664, 0, 2, 6, 12, 4, 5, -1, 8, 12, 2, 5, 2, -.0004590701137203723, .541256308555603, .4235909879207611, 0, 3, 11, 11, 2, 2, -1, 12, 11, 1, 1, 2, 11, 12, 1, 1, 2, .0012527540093287826, .4899305105209351, .6624091267585754, 0, 2, 0, 2, 3, 6, -1, 0, 4, 3, 2, 3, .001491060946136713, .5286778211593628, .4040051996707916, 0, 3, 11, 11, 2, 2, -1, 12, 11, 1, 1, 2, 11, 12, 1, 1, 2, -.0007543556275777519, .6032990217208862, .4795120060443878, 0, 2, 7, 6, 4, 10, -1, 7, 11, 4, 5, 2, -.0069478838704526424, .408440113067627, .5373504161834717, 0, 3, 11, 11, 2, 2, -1, 12, 11, 1, 1, 2, 11, 12, 1, 1, 2, .0002809292054735124, .4846062958240509, .5759382247924805, 0, 2, 2, 13, 5, 2, -1, 2, 14, 5, 1, 2, .0009607371757738292, .5164741277694702, .3554979860782623, 0, 3, 11, 11, 2, 2, -1, 12, 11, 1, 1, 2, 11, 12, 1, 1, 2, -.0002688392996788025, .5677582025527954, .4731765985488892, 0, 3, 7, 11, 2, 2, -1, 7, 11, 1, 1, 2, 8, 12, 1, 1, 2, .0021599370520561934, .4731487035751343, .7070567011833191, 0, 2, 14, 13, 3, 3, -1, 14, 14, 3, 1, 3, .005623530130833387, .5240243077278137, .2781791985034943, 0, 2, 3, 13, 3, 3, -1, 3, 14, 3, 1, 3, -.005024399142712355, .2837013900279999, .5062304139137268, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, -.009761163964867592, .7400717735290527, .4934569001197815, 0, 2, 8, 7, 3, 3, -1, 8, 8, 3, 1, 3, .004151510074734688, .5119131207466125, .3407008051872253, 0, 2, 13, 5, 3, 3, -1, 13, 6, 3, 1, 3, .006246508099138737, .4923788011074066, .6579058766365051, 0, 2, 0, 9, 5, 3, -1, 0, 10, 5, 1, 3, -.007059747818857431, .2434711009263992, .503284215927124, 0, 2, 13, 5, 3, 3, -1, 13, 6, 3, 1, 3, -.0020587709732353687, .590031087398529, .469508707523346, 0, 3, 9, 12, 2, 8, -1, 9, 12, 1, 4, 2, 10, 16, 1, 4, 2, -.0024146060459315777, .3647317886352539, .5189201831817627, 0, 3, 11, 7, 2, 2, -1, 12, 7, 1, 1, 2, 11, 8, 1, 1, 2, -.0014817609917372465, .6034948229789734, .4940128028392792, 0, 2, 0, 16, 6, 4, -1, 3, 16, 3, 4, 2, -.0063016400672495365, .5818989872932434, .4560427963733673, 0, 2, 10, 6, 2, 3, -1, 10, 7, 2, 1, 3, .00347634288482368, .5217475891113281, .3483993113040924, 0, 2, 9, 5, 2, 6, -1, 9, 7, 2, 2, 3, -.0222508702427149, .2360700070858002, .5032082796096802, 0, 2, 12, 15, 8, 4, -1, 12, 15, 4, 4, 2, -.030612550675869, .6499186754226685, .4914919137954712, 0, 2, 0, 14, 8, 6, -1, 4, 14, 4, 6, 2, .013057479634881, .4413323104381561, .5683764219284058, 0, 2, 9, 0, 3, 2, -1, 10, 0, 1, 2, 3, -.0006009574281051755, .4359731078147888, .5333483219146729, 0, 2, 4, 15, 4, 2, -1, 6, 15, 2, 2, 2, -.0004151425091549754, .550406277179718, .4326060116291046, 0, 2, 12, 7, 3, 13, -1, 13, 7, 1, 13, 3, -.013776290230453, .4064112901687622, .5201548933982849, 0, 2, 5, 7, 3, 13, -1, 6, 7, 1, 13, 3, -.0322965085506439, .0473519712686539, .4977194964885712, 0, 2, 9, 6, 3, 9, -1, 9, 9, 3, 3, 3, .0535569787025452, .4881733059883118, .666693925857544, 0, 2, 4, 4, 7, 12, -1, 4, 10, 7, 6, 2, .008188954554498196, .5400037169456482, .4240820109844208, 0, 3, 12, 12, 2, 2, -1, 13, 12, 1, 1, 2, 12, 13, 1, 1, 2, .00021055320394225419, .4802047908306122, .5563852787017822, 0, 3, 6, 12, 2, 2, -1, 6, 12, 1, 1, 2, 7, 13, 1, 1, 2, -.00243827304802835, .7387793064117432, .4773685038089752, 0, 3, 8, 9, 4, 2, -1, 10, 9, 2, 1, 2, 8, 10, 2, 1, 2, .003283557016402483, .5288546085357666, .3171291947364807, 0, 3, 3, 6, 2, 2, -1, 3, 6, 1, 1, 2, 4, 7, 1, 1, 2, .00237295706756413, .4750812947750092, .7060170769691467, 0, 2, 16, 6, 3, 2, -1, 16, 7, 3, 1, 2, -.0014541699783876538, .3811730146408081, .533073902130127, 87.69602966308594, 177, 0, 2, 0, 7, 19, 4, -1, 0, 9, 19, 2, 2, .0557552389800549, .4019156992435455, .6806036829948425, 0, 2, 10, 2, 10, 1, -1, 10, 2, 5, 1, 2, .002473024884238839, .3351148962974548, .5965719819068909, 0, 2, 9, 4, 2, 12, -1, 9, 10, 2, 6, 2, -.00035031698644161224, .5557708144187927, .3482286930084229, 0, 2, 12, 18, 4, 1, -1, 12, 18, 2, 1, 2, .0005416763015091419, .426085889339447, .5693380832672119, 0, 3, 1, 7, 6, 4, -1, 1, 7, 3, 2, 2, 4, 9, 3, 2, 2, .0007719367858953774, .3494240045547485, .5433688759803772, 0, 2, 12, 0, 6, 13, -1, 14, 0, 2, 13, 3, -.0015999219613149762, .4028499126434326, .5484359264373779, 0, 2, 2, 0, 6, 13, -1, 4, 0, 2, 13, 3, -.00011832080053864047, .3806901872158051, .5425465106964111, 0, 2, 10, 5, 8, 8, -1, 10, 9, 8, 4, 2, .0003290903114248067, .262010008096695, .5429521799087524, 0, 2, 8, 3, 2, 5, -1, 9, 3, 1, 5, 2, .0002951810893137008, .379976898431778, .5399264097213745, 0, 2, 8, 4, 9, 1, -1, 11, 4, 3, 1, 3, 9046671038959175e-20, .4433645009994507, .5440226197242737, 0, 2, 3, 4, 9, 1, -1, 6, 4, 3, 1, 3, 15007190086180344e-21, .3719654977321625, .5409119725227356, 0, 2, 1, 0, 18, 10, -1, 7, 0, 6, 10, 3, .1393561065196991, .552539587020874, .4479042887687683, 0, 2, 7, 17, 5, 3, -1, 7, 18, 5, 1, 3, .0016461990308016539, .4264501035213471, .5772169828414917, 0, 2, 7, 11, 6, 1, -1, 9, 11, 2, 1, 3, .0004998443182557821, .4359526038169861, .5685871243476868, 0, 2, 2, 2, 3, 2, -1, 2, 3, 3, 1, 2, -.001097128028050065, .3390136957168579, .5205408930778503, 0, 2, 8, 12, 4, 2, -1, 8, 13, 4, 1, 2, .0006691989256069064, .4557456076145172, .598065972328186, 0, 2, 6, 10, 3, 6, -1, 6, 13, 3, 3, 2, .0008647104259580374, .5134841203689575, .2944033145904541, 0, 2, 11, 4, 2, 4, -1, 11, 4, 1, 4, 2, -.0002718259929679334, .3906578123569489, .5377181172370911, 0, 2, 7, 4, 2, 4, -1, 8, 4, 1, 4, 2, 3024949910468422e-20, .3679609894752502, .5225688815116882, 0, 2, 9, 6, 2, 4, -1, 9, 6, 1, 4, 2, -.008522589690983295, .7293102145195007, .4892365038394928, 0, 2, 6, 13, 8, 3, -1, 6, 14, 8, 1, 3, .0016705560265108943, .43453249335289, .5696138143539429, 0, 2, 9, 15, 3, 4, -1, 10, 15, 1, 4, 3, -.0071433838456869125, .2591280043125153, .5225623846054077, 0, 2, 9, 2, 2, 17, -1, 10, 2, 1, 17, 2, -.0163193698972464, .6922279000282288, .4651575982570648, 0, 2, 7, 0, 6, 1, -1, 9, 0, 2, 1, 3, .004803426098078489, .5352262854576111, .3286302983760834, 0, 2, 8, 15, 3, 4, -1, 9, 15, 1, 4, 3, -.0075421929359436035, .2040544003248215, .5034546256065369, 0, 2, 7, 13, 7, 3, -1, 7, 14, 7, 1, 3, -.0143631100654602, .6804888844490051, .4889059066772461, 0, 2, 8, 16, 3, 3, -1, 9, 16, 1, 3, 3, .0008906358852982521, .5310695767402649, .3895480930805206, 0, 2, 6, 2, 8, 10, -1, 6, 7, 8, 5, 2, -.004406019113957882, .5741562843322754, .4372426867485046, 0, 2, 2, 5, 8, 8, -1, 2, 9, 8, 4, 2, -.0001886254030978307, .2831785976886749, .5098205208778381, 0, 2, 14, 16, 2, 2, -1, 14, 17, 2, 1, 2, -.0037979281041771173, .3372507989406586, .5246580243110657, 0, 2, 4, 16, 2, 2, -1, 4, 17, 2, 1, 2, .00014627049677073956, .5306674242019653, .391171008348465, 0, 2, 10, 11, 4, 6, -1, 10, 14, 4, 3, 2, -49164638767251745e-21, .5462496280670166, .3942720890045166, 0, 2, 6, 11, 4, 6, -1, 6, 14, 4, 3, 2, -.0335825011134148, .2157824039459229, .5048211812973022, 0, 2, 10, 14, 1, 3, -1, 10, 15, 1, 1, 3, -.0035339309833943844, .6465312242507935, .4872696995735169, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .005014411173760891, .4617668092250824, .6248074769973755, 0, 3, 10, 0, 4, 6, -1, 12, 0, 2, 3, 2, 10, 3, 2, 3, 2, .0188173707574606, .5220689177513123, .2000052034854889, 0, 2, 0, 3, 20, 2, -1, 0, 4, 20, 1, 2, -.001343433978036046, .4014537930488586, .53016197681427, 0, 3, 12, 0, 8, 2, -1, 16, 0, 4, 1, 2, 12, 1, 4, 1, 2, .001755796023644507, .4794039130210877, .5653169751167297, 0, 2, 2, 12, 10, 8, -1, 2, 16, 10, 4, 2, -.0956374630331993, .2034195065498352, .5006706714630127, 0, 3, 17, 7, 2, 10, -1, 18, 7, 1, 5, 2, 17, 12, 1, 5, 2, -.0222412291914225, .7672473192214966, .5046340227127075, 0, 3, 1, 7, 2, 10, -1, 1, 7, 1, 5, 2, 2, 12, 1, 5, 2, -.0155758196488023, .7490342259407043, .4755851030349731, 0, 2, 15, 10, 3, 6, -1, 15, 12, 3, 2, 3, .005359911825507879, .5365303754806519, .4004670977592468, 0, 2, 4, 4, 6, 2, -1, 6, 4, 2, 2, 3, -.0217634998261929, .0740154981613159, .4964174926280975, 0, 2, 0, 5, 20, 6, -1, 0, 7, 20, 2, 3, -.165615901350975, .2859103083610535, .5218086242675781, 0, 3, 0, 0, 8, 2, -1, 0, 0, 4, 1, 2, 4, 1, 4, 1, 2, .0001646132004680112, .4191615879535675, .5380793213844299, 0, 2, 1, 0, 18, 4, -1, 7, 0, 6, 4, 3, -.008907750248908997, .6273192763328552, .4877404868602753, 0, 2, 1, 13, 6, 2, -1, 1, 14, 6, 1, 2, .0008634644909761846, .5159940719604492, .3671025931835175, 0, 2, 10, 8, 3, 4, -1, 11, 8, 1, 4, 3, -.0013751760125160217, .5884376764297485, .4579083919525147, 0, 2, 6, 1, 6, 1, -1, 8, 1, 2, 1, 3, -.0014081239933148026, .3560509979724884, .5139945149421692, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, -.003934288863092661, .5994288921356201, .466427206993103, 0, 2, 1, 6, 18, 2, -1, 10, 6, 9, 2, 2, -.0319669283926487, .3345462083816528, .5144183039665222, 0, 2, 15, 11, 1, 2, -1, 15, 12, 1, 1, 2, -15089280168467667e-21, .5582656264305115, .441405713558197, 0, 2, 6, 5, 1, 2, -1, 6, 6, 1, 1, 2, .0005199447041377425, .4623680114746094, .6168993711471558, 0, 2, 13, 4, 1, 3, -1, 13, 5, 1, 1, 3, -.0034220460802316666, .6557074785232544, .4974805116653442, 0, 2, 2, 15, 1, 2, -1, 2, 16, 1, 1, 2, .00017723299970384687, .5269501805305481, .3901908099651337, 0, 2, 12, 4, 4, 3, -1, 12, 5, 4, 1, 3, .0015716759953647852, .4633373022079468, .5790457725524902, 0, 2, 0, 0, 7, 3, -1, 0, 1, 7, 1, 3, -.00890413299202919, .2689608037471771, .5053591132164001, 0, 2, 9, 12, 6, 2, -1, 9, 12, 3, 2, 2, .00040677518700249493, .5456603169441223, .4329898953437805, 0, 2, 5, 4, 2, 3, -1, 5, 5, 2, 1, 3, .0067604780197143555, .4648993909358978, .6689761877059937, 0, 2, 18, 4, 2, 3, -1, 18, 5, 2, 1, 3, .0029100088868290186, .5309703946113586, .3377839922904968, 0, 2, 3, 0, 8, 6, -1, 3, 2, 8, 2, 3, .0013885459629818797, .4074738919734955, .5349133014678955, 0, 3, 0, 2, 20, 6, -1, 10, 2, 10, 3, 2, 0, 5, 10, 3, 2, -.0767642632126808, .1992176026105881, .522824227809906, 0, 2, 4, 7, 2, 4, -1, 5, 7, 1, 4, 2, -.00022688310127705336, .5438501834869385, .4253072142601013, 0, 2, 3, 10, 15, 2, -1, 8, 10, 5, 2, 3, -.006309415213763714, .4259178936481476, .5378909707069397, 0, 2, 3, 0, 12, 11, -1, 9, 0, 6, 11, 2, -.1100727990269661, .6904156804084778, .4721749126911163, 0, 2, 13, 0, 2, 6, -1, 13, 0, 1, 6, 2, .0002861965913325548, .4524914920330048, .5548306107521057, 0, 2, 0, 19, 2, 1, -1, 1, 19, 1, 1, 2, 2942532955785282e-20, .5370373725891113, .4236463904380798, 0, 3, 16, 10, 4, 10, -1, 18, 10, 2, 5, 2, 16, 15, 2, 5, 2, -.0248865708708763, .6423557996749878, .4969303905963898, 0, 2, 4, 8, 10, 3, -1, 4, 9, 10, 1, 3, .0331488512456417, .4988475143909454, .1613811999559403, 0, 2, 14, 12, 3, 3, -1, 14, 13, 3, 1, 3, .0007849169196560979, .541602611541748, .4223009049892426, 0, 3, 0, 10, 4, 10, -1, 0, 10, 2, 5, 2, 2, 15, 2, 5, 2, .004708718974143267, .4576328992843628, .6027557849884033, 0, 2, 18, 3, 2, 6, -1, 18, 5, 2, 2, 3, .0024144479539245367, .530897319316864, .4422498941421509, 0, 2, 6, 6, 1, 3, -1, 6, 7, 1, 1, 3, .0019523180089890957, .4705634117126465, .666332483291626, 0, 2, 7, 7, 7, 2, -1, 7, 8, 7, 1, 2, .0013031980488449335, .4406126141548157, .5526962280273438, 0, 2, 0, 3, 2, 6, -1, 0, 5, 2, 2, 3, .004473549779504538, .5129023790359497, .3301498889923096, 0, 2, 11, 1, 3, 1, -1, 12, 1, 1, 1, 3, -.002665286883711815, .3135471045970917, .5175036191940308, 0, 2, 5, 0, 2, 6, -1, 6, 0, 1, 6, 2, .0001366677024634555, .4119370877742767, .530687689781189, 0, 2, 1, 1, 18, 14, -1, 7, 1, 6, 14, 3, -.0171264503151178, .6177806258201599, .4836578965187073, 0, 2, 4, 6, 8, 3, -1, 8, 6, 4, 3, 2, -.0002660143072716892, .3654330968856812, .5169736742973328, 0, 2, 9, 12, 6, 2, -1, 9, 12, 3, 2, 2, -.022932380437851, .349091500043869, .5163992047309875, 0, 2, 5, 12, 6, 2, -1, 8, 12, 3, 2, 2, .0023316550068557262, .5166299939155579, .3709389865398407, 0, 2, 10, 7, 3, 5, -1, 11, 7, 1, 5, 3, .016925660893321, .501473605632782, .8053988218307495, 0, 2, 7, 7, 3, 5, -1, 8, 7, 1, 5, 3, -.008985882624983788, .6470788717269897, .465702086687088, 0, 2, 13, 0, 3, 10, -1, 14, 0, 1, 10, 3, -.0118746999651194, .3246378898620606, .5258755087852478, 0, 2, 4, 11, 3, 2, -1, 4, 12, 3, 1, 2, .00019350569345988333, .5191941857337952, .3839643895626068, 0, 2, 17, 3, 3, 6, -1, 18, 3, 1, 6, 3, .005871349014341831, .4918133914470673, .6187043190002441, 0, 2, 1, 8, 18, 10, -1, 1, 13, 18, 5, 2, -.2483879029750824, .1836802959442139, .4988150000572205, 0, 2, 13, 0, 3, 10, -1, 14, 0, 1, 10, 3, .0122560001909733, .5227053761482239, .3632029891014099, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .0008399017970077693, .4490250051021576, .5774148106575012, 0, 2, 16, 3, 3, 7, -1, 17, 3, 1, 7, 3, .002540736924856901, .4804787039756775, .5858299136161804, 0, 2, 4, 0, 3, 10, -1, 5, 0, 1, 10, 3, -.0148224299773574, .2521049976348877, .5023537278175354, 0, 2, 16, 3, 3, 7, -1, 17, 3, 1, 7, 3, -.005797395948320627, .5996695756912231, .4853715002536774, 0, 2, 0, 9, 1, 2, -1, 0, 10, 1, 1, 2, .000726621481589973, .5153716802597046, .3671779930591583, 0, 2, 18, 1, 2, 10, -1, 18, 1, 1, 10, 2, -.0172325801104307, .6621719002723694, .4994656145572662, 0, 2, 0, 1, 2, 10, -1, 1, 1, 1, 10, 2, .007862408645451069, .4633395075798035, .6256101727485657, 0, 2, 10, 16, 3, 4, -1, 11, 16, 1, 4, 3, -.004734362009912729, .3615573048591614, .5281885266304016, 0, 2, 2, 8, 3, 3, -1, 3, 8, 1, 3, 3, .0008304847870022058, .4442889094352722, .5550957918167114, 0, 3, 11, 0, 2, 6, -1, 12, 0, 1, 3, 2, 11, 3, 1, 3, 2, .00766021991148591, .5162935256958008, .2613354921340942, 0, 3, 7, 0, 2, 6, -1, 7, 0, 1, 3, 2, 8, 3, 1, 3, 2, -.004104837775230408, .2789632081985474, .5019031763076782, 0, 2, 16, 3, 3, 7, -1, 17, 3, 1, 7, 3, .004851257894188166, .4968984127044678, .5661668181419373, 0, 2, 1, 3, 3, 7, -1, 2, 3, 1, 7, 3, .0009989645332098007, .4445607960224152, .5551813244819641, 0, 2, 14, 1, 6, 16, -1, 16, 1, 2, 16, 3, -.2702363133430481, .0293882098048925, .515131413936615, 0, 2, 0, 1, 6, 16, -1, 2, 1, 2, 16, 3, -.0130906803533435, .5699399709701538, .4447459876537323, 0, 3, 2, 0, 16, 8, -1, 10, 0, 8, 4, 2, 2, 4, 8, 4, 2, -.009434279054403305, .4305466115474701, .5487895011901855, 0, 2, 6, 8, 5, 3, -1, 6, 9, 5, 1, 3, -.0015482039889320731, .3680317103862763, .512808084487915, 0, 2, 9, 7, 3, 3, -1, 10, 7, 1, 3, 3, .005374613218009472, .4838916957378388, .6101555824279785, 0, 2, 8, 8, 4, 3, -1, 8, 9, 4, 1, 3, .0015786769799888134, .5325223207473755, .4118548035621643, 0, 2, 9, 6, 2, 4, -1, 9, 6, 1, 4, 2, .003685605013743043, .4810948073863983, .6252303123474121, 0, 2, 0, 7, 15, 1, -1, 5, 7, 5, 1, 3, .009388701990246773, .520022988319397, .3629410862922669, 0, 2, 8, 2, 7, 9, -1, 8, 5, 7, 3, 3, .0127926301211119, .4961709976196289, .673801600933075, 0, 3, 1, 7, 16, 4, -1, 1, 7, 8, 2, 2, 9, 9, 8, 2, 2, -.003366104094311595, .4060279130935669, .5283598899841309, 0, 2, 6, 12, 8, 2, -1, 6, 13, 8, 1, 2, .00039771420415490866, .4674113988876343, .5900775194168091, 0, 2, 8, 11, 3, 3, -1, 8, 12, 3, 1, 3, .0014868030557408929, .4519116878509522, .6082053780555725, 0, 3, 4, 5, 14, 10, -1, 11, 5, 7, 5, 2, 4, 10, 7, 5, 2, -.0886867493391037, .2807899117469788, .5180991888046265, 0, 2, 4, 12, 3, 2, -1, 4, 13, 3, 1, 2, -7429611287079751e-20, .5295584201812744, .408762514591217, 0, 2, 9, 11, 6, 1, -1, 11, 11, 2, 1, 3, -14932939848222304e-21, .5461400151252747, .4538542926311493, 0, 2, 4, 9, 7, 6, -1, 4, 11, 7, 2, 3, .005916223861277103, .5329161286354065, .4192134141921997, 0, 2, 7, 10, 6, 3, -1, 7, 11, 6, 1, 3, .001114164013415575, .4512017965316773, .5706217288970947, 0, 2, 9, 11, 2, 2, -1, 9, 12, 2, 1, 2, 8924936264520511e-20, .4577805995941162, .5897638201713562, 0, 2, 0, 5, 20, 6, -1, 0, 7, 20, 2, 3, .0025319510605186224, .5299603939056396, .3357639014720917, 0, 2, 6, 4, 6, 1, -1, 8, 4, 2, 1, 3, .0124262003228068, .4959059059619904, .1346601992845535, 0, 2, 9, 11, 6, 1, -1, 11, 11, 2, 1, 3, .0283357501029968, .5117079019546509, .0006104363710619509, 0, 2, 5, 11, 6, 1, -1, 7, 11, 2, 1, 3, .006616588216274977, .4736349880695343, .7011628150939941, 0, 2, 10, 16, 3, 4, -1, 11, 16, 1, 4, 3, .008046876639127731, .5216417908668518, .3282819986343384, 0, 2, 8, 7, 3, 3, -1, 9, 7, 1, 3, 3, -.001119398046284914, .5809860825538635, .4563739001750946, 0, 2, 2, 12, 16, 8, -1, 2, 16, 16, 4, 2, .0132775902748108, .5398362278938293, .4103901088237763, 0, 2, 0, 15, 15, 2, -1, 0, 16, 15, 1, 2, .0004879473999608308, .424928605556488, .5410590767860413, 0, 2, 15, 4, 5, 6, -1, 15, 6, 5, 2, 3, .0112431701272726, .526996374130249, .3438215851783752, 0, 2, 9, 5, 2, 4, -1, 10, 5, 1, 4, 2, -.0008989666821435094, .5633075833320618, .4456613063812256, 0, 2, 8, 10, 9, 6, -1, 8, 12, 9, 2, 3, .006667715962976217, .5312889218330383, .4362679123878479, 0, 2, 2, 19, 15, 1, -1, 7, 19, 5, 1, 3, .0289472993463278, .4701794981956482, .657579779624939, 0, 2, 10, 16, 3, 4, -1, 11, 16, 1, 4, 3, -.0234000496566296, 0, .5137398838996887, 0, 2, 0, 15, 20, 4, -1, 0, 17, 20, 2, 2, -.0891170501708984, .0237452797591686, .4942430853843689, 0, 2, 10, 16, 3, 4, -1, 11, 16, 1, 4, 3, -.0140546001493931, .3127323091030121, .511751115322113, 0, 2, 7, 16, 3, 4, -1, 8, 16, 1, 4, 3, .008123939856886864, .50090491771698, .2520025968551636, 0, 2, 9, 16, 3, 3, -1, 9, 17, 3, 1, 3, -.004996465053409338, .6387143731117249, .4927811920642853, 0, 2, 8, 11, 4, 6, -1, 8, 14, 4, 3, 2, .0031253970228135586, .5136849880218506, .3680452108383179, 0, 2, 9, 6, 2, 12, -1, 9, 10, 2, 4, 3, .006766964215785265, .5509843826293945, .4363631904125214, 0, 2, 8, 17, 4, 3, -1, 8, 18, 4, 1, 3, -.002371144015341997, .6162335276603699, .4586946964263916, 0, 3, 9, 18, 8, 2, -1, 13, 18, 4, 1, 2, 9, 19, 4, 1, 2, -.005352279171347618, .6185457706451416, .4920490980148315, 0, 2, 1, 18, 8, 2, -1, 1, 19, 8, 1, 2, -.0159688591957092, .1382617950439453, .4983252882957459, 0, 2, 13, 5, 6, 15, -1, 15, 5, 2, 15, 3, .004767606034874916, .4688057899475098, .5490046143531799, 0, 2, 9, 8, 2, 2, -1, 9, 9, 2, 1, 2, -.002471469109877944, .2368514984846115, .5003952980041504, 0, 2, 9, 5, 2, 3, -1, 9, 5, 1, 3, 2, -.0007103378884494305, .5856394171714783, .4721533060073853, 0, 2, 1, 5, 6, 15, -1, 3, 5, 2, 15, 3, -.1411755979061127, .0869000628590584, .4961591064929962, 0, 3, 4, 1, 14, 8, -1, 11, 1, 7, 4, 2, 4, 5, 7, 4, 2, .1065180972218514, .5138837099075317, .1741005033254623, 0, 3, 2, 4, 4, 16, -1, 2, 4, 2, 8, 2, 4, 12, 2, 8, 2, -.0527447499334812, .7353636026382446, .4772881865501404, 0, 2, 12, 4, 3, 12, -1, 12, 10, 3, 6, 2, -.00474317604675889, .3884406089782715, .5292701721191406, 0, 3, 4, 5, 10, 12, -1, 4, 5, 5, 6, 2, 9, 11, 5, 6, 2, .0009967676596716046, .5223492980003357, .4003424048423767, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .00802841316908598, .4959106147289276, .7212964296340942, 0, 2, 5, 4, 2, 3, -1, 5, 5, 2, 1, 3, .0008602585876360536, .4444884061813355, .55384761095047, 0, 3, 12, 2, 4, 10, -1, 14, 2, 2, 5, 2, 12, 7, 2, 5, 2, .0009319150121882558, .539837121963501, .4163244068622589, 0, 2, 6, 4, 7, 3, -1, 6, 5, 7, 1, 3, -.002508206060156226, .5854265093803406, .456250011920929, 0, 3, 2, 0, 18, 2, -1, 11, 0, 9, 1, 2, 2, 1, 9, 1, 2, -.0021378761157393456, .4608069062232971, .5280259251594543, 0, 3, 0, 0, 18, 2, -1, 0, 0, 9, 1, 2, 9, 1, 9, 1, 2, -.002154604997485876, .3791126906871796, .5255997180938721, 0, 3, 13, 13, 4, 6, -1, 15, 13, 2, 3, 2, 13, 16, 2, 3, 2, -.007621400989592075, .5998609066009521, .4952073991298676, 0, 3, 3, 13, 4, 6, -1, 3, 13, 2, 3, 2, 5, 16, 2, 3, 2, .002205536002293229, .4484206140041351, .5588530898094177, 0, 2, 10, 12, 2, 6, -1, 10, 15, 2, 3, 2, .0012586950324475765, .5450747013092041, .4423840939998627, 0, 3, 5, 9, 10, 10, -1, 5, 9, 5, 5, 2, 10, 14, 5, 5, 2, -.005092672072350979, .4118275046348572, .5263035893440247, 0, 3, 11, 4, 4, 2, -1, 13, 4, 2, 1, 2, 11, 5, 2, 1, 2, -.0025095739401876926, .5787907838821411, .4998494982719421, 0, 2, 7, 12, 6, 8, -1, 10, 12, 3, 8, 2, -.0773275569081306, .8397865891456604, .481112003326416, 0, 3, 12, 2, 4, 10, -1, 14, 2, 2, 5, 2, 12, 7, 2, 5, 2, -.041485819965601, .240861102938652, .5176993012428284, 0, 2, 8, 11, 2, 1, -1, 9, 11, 1, 1, 2, .00010355669655837119, .4355360865592957, .5417054295539856, 0, 2, 10, 5, 1, 12, -1, 10, 9, 1, 4, 3, .0013255809899419546, .5453971028327942, .4894095063209534, 0, 2, 0, 11, 6, 9, -1, 3, 11, 3, 9, 2, -.00805987324565649, .5771024227142334, .4577918946743012, 0, 3, 12, 2, 4, 10, -1, 14, 2, 2, 5, 2, 12, 7, 2, 5, 2, .019058620557189, .5169867873191833, .3400475084781647, 0, 3, 4, 2, 4, 10, -1, 4, 2, 2, 5, 2, 6, 7, 2, 5, 2, -.0350578911602497, .2203243970870972, .5000503063201904, 0, 3, 11, 4, 4, 2, -1, 13, 4, 2, 1, 2, 11, 5, 2, 1, 2, .005729605909436941, .5043408274650574, .6597570776939392, 0, 2, 0, 14, 6, 3, -1, 0, 15, 6, 1, 3, -.0116483299061656, .2186284959316254, .4996652901172638, 0, 3, 11, 4, 4, 2, -1, 13, 4, 2, 1, 2, 11, 5, 2, 1, 2, .0014544479781761765, .5007681846618652, .5503727793693542, 0, 2, 6, 1, 3, 2, -1, 7, 1, 1, 2, 3, -.00025030909455381334, .4129841029644013, .524167001247406, 0, 3, 11, 4, 4, 2, -1, 13, 4, 2, 1, 2, 11, 5, 2, 1, 2, -.000829072727356106, .541286826133728, .4974496066570282, 0, 3, 5, 4, 4, 2, -1, 5, 4, 2, 1, 2, 7, 5, 2, 1, 2, .0010862209601327777, .460552990436554, .5879228711128235, 0, 3, 13, 0, 2, 12, -1, 14, 0, 1, 6, 2, 13, 6, 1, 6, 2, .0002000050008064136, .5278854966163635, .4705209136009216, 0, 2, 6, 0, 3, 10, -1, 7, 0, 1, 10, 3, .0029212920926511288, .5129609704017639, .375553697347641, 0, 2, 3, 0, 17, 8, -1, 3, 4, 17, 4, 2, .0253874007612467, .4822691977024078, .5790768265724182, 0, 2, 0, 4, 20, 4, -1, 0, 6, 20, 2, 2, -.00319684692658484, .5248395204544067, .3962840139865875, 90.25334930419922, 182, 0, 2, 0, 3, 8, 2, -1, 4, 3, 4, 2, 2, .005803173873573542, .3498983979225159, .596198320388794, 0, 2, 8, 11, 4, 3, -1, 8, 12, 4, 1, 3, -.009000306949019432, .6816636919975281, .4478552043437958, 0, 3, 5, 7, 6, 4, -1, 5, 7, 3, 2, 2, 8, 9, 3, 2, 2, -.00115496595390141, .5585706233978271, .3578251004219055, 0, 2, 8, 3, 4, 9, -1, 8, 6, 4, 3, 3, -.0011069850297644734, .5365036129951477, .3050428032875061, 0, 2, 8, 15, 1, 4, -1, 8, 17, 1, 2, 2, .00010308309720130637, .363909512758255, .5344635844230652, 0, 2, 4, 5, 12, 7, -1, 8, 5, 4, 7, 3, -.005098483990877867, .2859157025814056, .5504264831542969, 0, 3, 4, 2, 4, 10, -1, 4, 2, 2, 5, 2, 6, 7, 2, 5, 2, .0008257220033556223, .5236523747444153, .3476041853427887, 0, 2, 3, 0, 17, 2, -1, 3, 1, 17, 1, 2, .009978332556784153, .4750322103500366, .621964693069458, 0, 2, 2, 2, 16, 15, -1, 2, 7, 16, 5, 3, -.0374025292694569, .334337592124939, .527806282043457, 0, 2, 15, 2, 5, 2, -1, 15, 3, 5, 1, 2, .0048548257909715176, .5192180871963501, .3700444102287293, 0, 2, 9, 3, 2, 2, -1, 10, 3, 1, 2, 2, -.001866447040811181, .2929843962192535, .5091944932937622, 0, 2, 4, 5, 16, 15, -1, 4, 10, 16, 5, 3, .0168888904154301, .3686845898628235, .5431225895881653, 0, 2, 7, 13, 5, 6, -1, 7, 16, 5, 3, 2, -.005837262142449617, .3632183969020844, .5221335887908936, 0, 2, 10, 7, 3, 2, -1, 11, 7, 1, 2, 3, -.00147137395106256, .5870683789253235, .4700650870800018, 0, 2, 8, 3, 3, 1, -1, 9, 3, 1, 1, 3, -.0011522950371727347, .3195894956588745, .5140954256057739, 0, 2, 9, 16, 3, 3, -1, 9, 17, 3, 1, 3, -.004256030078977346, .6301859021186829, .4814921021461487, 0, 2, 0, 2, 5, 2, -1, 0, 3, 5, 1, 2, -.006737829186022282, .1977048069238663, .5025808215141296, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, .0113826701417565, .495413213968277, .6867045760154724, 0, 2, 1, 7, 12, 1, -1, 5, 7, 4, 1, 3, .005179470870643854, .5164427757263184, .3350647985935211, 0, 2, 7, 5, 6, 14, -1, 7, 12, 6, 7, 2, -.1174378991127014, .2315246015787125, .5234413743019104, 0, 3, 0, 0, 8, 10, -1, 0, 0, 4, 5, 2, 4, 5, 4, 5, 2, .0287034492939711, .4664297103881836, .6722521185874939, 0, 2, 9, 1, 3, 2, -1, 10, 1, 1, 2, 3, .004823103081434965, .5220875144004822, .2723532915115356, 0, 2, 8, 1, 3, 2, -1, 9, 1, 1, 2, 3, .0026798530016094446, .5079277157783508, .2906948924064636, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, .008050408214330673, .4885950982570648, .6395021080970764, 0, 2, 7, 4, 6, 16, -1, 7, 12, 6, 8, 2, .004805495962500572, .5197256803512573, .365666389465332, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, -.0022420159075409174, .6153467893600464, .4763701856136322, 0, 2, 2, 3, 2, 6, -1, 2, 5, 2, 2, 3, -.0137577103450894, .2637344896793366, .5030903220176697, 0, 2, 14, 2, 6, 9, -1, 14, 5, 6, 3, 3, -.1033829972147942, .2287521958351135, .5182461142539978, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, -.009443208575248718, .6953303813934326, .4694949090480804, 0, 2, 9, 17, 3, 2, -1, 10, 17, 1, 2, 3, .0008027118165045977, .5450655221939087, .4268783926963806, 0, 2, 5, 5, 2, 3, -1, 5, 6, 2, 1, 3, -.004194566980004311, .6091387867927551, .4571642875671387, 0, 2, 13, 11, 3, 6, -1, 13, 13, 3, 2, 3, .0109422104433179, .5241063237190247, .3284547030925751, 0, 2, 3, 14, 2, 6, -1, 3, 17, 2, 3, 2, -.0005784106906503439, .5387929081916809, .4179368913173676, 0, 2, 14, 3, 6, 2, -1, 14, 4, 6, 1, 2, -.002088862005621195, .4292691051959992, .5301715731620789, 0, 2, 0, 8, 16, 2, -1, 0, 9, 16, 1, 2, .0032383969519287348, .379234790802002, .5220744013786316, 0, 2, 14, 3, 6, 2, -1, 14, 4, 6, 1, 2, .004907502792775631, .5237283110618591, .4126757979393005, 0, 2, 0, 0, 5, 6, -1, 0, 2, 5, 2, 3, -.0322779417037964, .1947655975818634, .4994502067565918, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, -.008971123024821281, .6011285185813904, .4929032027721405, 0, 2, 4, 11, 3, 6, -1, 4, 13, 3, 2, 3, .0153210898861289, .5009753704071045, .2039822041988373, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, .002085556974634528, .4862189888954163, .5721694827079773, 0, 2, 9, 5, 1, 3, -1, 9, 6, 1, 1, 3, .005061502102762461, .5000218749046326, .1801805943250656, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, -.0037174751050770283, .5530117154121399, .4897592961788178, 0, 2, 6, 6, 8, 12, -1, 6, 12, 8, 6, 2, -.0121705001220107, .4178605973720551, .5383723974227905, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, .004624839872121811, .4997169971466065, .5761327147483826, 0, 2, 5, 12, 9, 2, -1, 8, 12, 3, 2, 3, -.0002104042941937223, .5331807136535645, .4097681045532227, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, -.0146417804062366, .5755925178527832, .5051776170730591, 0, 2, 4, 5, 4, 3, -1, 4, 6, 4, 1, 3, .00331994891166687, .4576976895332336, .6031805872917175, 0, 2, 6, 6, 9, 2, -1, 9, 6, 3, 2, 3, .003723687957972288, .4380396902561188, .541588306427002, 0, 2, 4, 11, 1, 3, -1, 4, 12, 1, 1, 3, .0008295116131193936, .5163031816482544, .3702219128608704, 0, 2, 14, 12, 6, 6, -1, 14, 12, 3, 6, 2, -.0114084901288152, .6072946786880493, .4862565100193024, 0, 2, 7, 0, 3, 7, -1, 8, 0, 1, 7, 3, -.004532012157142162, .3292475938796997, .5088962912559509, 0, 2, 9, 8, 3, 3, -1, 10, 8, 1, 3, 3, .00512760179117322, .4829767942428589, .6122708916664124, 0, 2, 8, 8, 3, 3, -1, 9, 8, 1, 3, 3, .00985831581056118, .4660679996013641, .6556177139282227, 0, 2, 5, 10, 11, 3, -1, 5, 11, 11, 1, 3, .036985918879509, .5204849243164062, .1690472066402435, 0, 2, 5, 7, 10, 1, -1, 10, 7, 5, 1, 2, .004649116192013025, .5167322158813477, .3725225031375885, 0, 2, 9, 7, 3, 2, -1, 10, 7, 1, 2, 3, -.004266470205038786, .6406493186950684, .4987342953681946, 0, 2, 8, 7, 3, 2, -1, 9, 7, 1, 2, 3, -.0004795659042429179, .5897293090820312, .4464873969554901, 0, 2, 11, 9, 4, 2, -1, 11, 9, 2, 2, 2, .0036827160511165857, .5441560745239258, .347266286611557, 0, 2, 5, 9, 4, 2, -1, 7, 9, 2, 2, 2, -.0100598800927401, .2143162935972214, .500482976436615, 0, 2, 14, 10, 2, 4, -1, 14, 12, 2, 2, 2, -.0003036184061784297, .538642406463623, .4590323865413666, 0, 2, 7, 7, 3, 2, -1, 8, 7, 1, 2, 3, -.0014545479789376259, .5751184225082397, .4497095048427582, 0, 2, 14, 17, 6, 3, -1, 14, 18, 6, 1, 3, .0016515209572389722, .5421937704086304, .4238520860671997, 0, 3, 4, 5, 12, 12, -1, 4, 5, 6, 6, 2, 10, 11, 6, 6, 2, -.007846863940358162, .4077920913696289, .5258157253265381, 0, 3, 6, 9, 8, 8, -1, 10, 9, 4, 4, 2, 6, 13, 4, 4, 2, -.005125985015183687, .422927588224411, .5479453206062317, 0, 2, 0, 4, 15, 4, -1, 5, 4, 5, 4, 3, -.0368909612298012, .6596375703811646, .4674678146839142, 0, 2, 13, 2, 4, 1, -1, 13, 2, 2, 1, 2, .0002403563994448632, .4251135885715485, .5573202967643738, 0, 2, 4, 12, 2, 2, -1, 4, 13, 2, 1, 2, -15150169929256663e-21, .5259246826171875, .4074114859104157, 0, 2, 8, 13, 4, 3, -1, 8, 14, 4, 1, 3, .0022108471021056175, .4671722948551178, .5886352062225342, 0, 2, 9, 13, 2, 3, -1, 9, 14, 2, 1, 3, -.0011568620102480054, .5711066126823425, .4487161934375763, 0, 2, 13, 11, 2, 3, -1, 13, 12, 2, 1, 3, .004999629221856594, .5264198184013367, .2898327112197876, 0, 3, 7, 12, 4, 4, -1, 7, 12, 2, 2, 2, 9, 14, 2, 2, 2, -.0014656189596280456, .3891738057136536, .5197871923446655, 0, 3, 10, 11, 2, 2, -1, 11, 11, 1, 1, 2, 10, 12, 1, 1, 2, -.0011975039960816503, .5795872807502747, .4927955865859985, 0, 2, 8, 17, 3, 2, -1, 9, 17, 1, 2, 3, -.0044954330660402775, .2377603054046631, .5012555122375488, 0, 3, 10, 11, 2, 2, -1, 11, 11, 1, 1, 2, 10, 12, 1, 1, 2, .00014997160178609192, .4876626133918762, .5617607831954956, 0, 2, 0, 17, 6, 3, -1, 0, 18, 6, 1, 3, .002639150945469737, .516808807849884, .3765509128570557, 0, 3, 10, 11, 2, 2, -1, 11, 11, 1, 1, 2, 10, 12, 1, 1, 2, -.0002936813107226044, .5446649193763733, .4874630868434906, 0, 3, 8, 11, 2, 2, -1, 8, 11, 1, 1, 2, 9, 12, 1, 1, 2, .0014211760135367513, .4687897861003876, .669133186340332, 0, 2, 12, 5, 8, 4, -1, 12, 5, 4, 4, 2, .0794276371598244, .5193443894386292, .273294597864151, 0, 2, 0, 5, 8, 4, -1, 4, 5, 4, 4, 2, .0799375027418137, .4971731007099152, .1782083958387375, 0, 2, 13, 2, 4, 1, -1, 13, 2, 2, 1, 2, .0110892597585917, .5165994763374329, .3209475874900818, 0, 2, 3, 2, 4, 1, -1, 5, 2, 2, 1, 2, .00016560709627810866, .4058471918106079, .5307276248931885, 0, 3, 10, 0, 4, 2, -1, 12, 0, 2, 1, 2, 10, 1, 2, 1, 2, -.0053354292176663876, .3445056974887848, .5158129930496216, 0, 2, 7, 12, 3, 1, -1, 8, 12, 1, 1, 3, .0011287260567769408, .4594863057136536, .6075533032417297, 0, 3, 8, 11, 4, 8, -1, 10, 11, 2, 4, 2, 8, 15, 2, 4, 2, -.0219692196696997, .1680400967597961, .5228595733642578, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.00021775320055894554, .3861596882343292, .5215672850608826, 0, 2, 3, 18, 15, 2, -1, 3, 19, 15, 1, 2, .00020200149447191507, .5517979264259338, .4363039135932922, 0, 3, 2, 6, 2, 12, -1, 2, 6, 1, 6, 2, 3, 12, 1, 6, 2, -.0217331498861313, .7999460101127625, .4789851009845734, 0, 2, 9, 8, 2, 3, -1, 9, 9, 2, 1, 3, -.0008439993252977729, .4085975885391235, .5374773144721985, 0, 2, 7, 10, 3, 2, -1, 8, 10, 1, 2, 3, -.00043895249837078154, .5470405220985413, .4366143047809601, 0, 2, 11, 11, 3, 1, -1, 12, 11, 1, 1, 3, .0015092400135472417, .4988996982574463, .5842149257659912, 0, 2, 6, 11, 3, 1, -1, 7, 11, 1, 1, 3, -.003554783994331956, .6753690242767334, .4721005856990814, 0, 3, 9, 2, 4, 2, -1, 11, 2, 2, 1, 2, 9, 3, 2, 1, 2, .00048191400128416717, .541585385799408, .4357109069824219, 0, 2, 4, 12, 2, 3, -1, 4, 13, 2, 1, 3, -.00602643983438611, .2258509993553162, .499188095331192, 0, 2, 2, 1, 18, 3, -1, 8, 1, 6, 3, 3, -.0116681400686502, .625655472278595, .4927498996257782, 0, 2, 5, 1, 4, 14, -1, 7, 1, 2, 14, 2, -.0028718370012938976, .3947784900665283, .524580180644989, 0, 2, 8, 16, 12, 3, -1, 8, 16, 6, 3, 2, .0170511696487665, .4752511084079742, .5794224143028259, 0, 2, 1, 17, 18, 3, -1, 7, 17, 6, 3, 3, -.0133520802482963, .6041104793548584, .4544535875320435, 0, 2, 9, 14, 2, 6, -1, 9, 17, 2, 3, 2, -.0003930180100724101, .4258275926113129, .5544905066490173, 0, 2, 9, 12, 1, 8, -1, 9, 16, 1, 4, 2, .0030483349692076445, .5233420133590698, .3780272901058197, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, -.00435792887583375, .6371889114379883, .4838674068450928, 0, 2, 9, 6, 2, 12, -1, 9, 10, 2, 4, 3, .0056661018170416355, .5374705791473389, .4163666069507599, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, 6067733920644969e-20, .4638795852661133, .5311625003814697, 0, 2, 0, 1, 4, 8, -1, 2, 1, 2, 8, 2, .0367381609976292, .4688656032085419, .6466524004936218, 0, 3, 9, 1, 6, 2, -1, 12, 1, 3, 1, 2, 9, 2, 3, 1, 2, .008652813732624054, .5204318761825562, .2188657969236374, 0, 2, 1, 3, 12, 14, -1, 1, 10, 12, 7, 2, -.1537135988473892, .1630371958017349, .4958840012550354, 0, 3, 8, 12, 4, 2, -1, 10, 12, 2, 1, 2, 8, 13, 2, 1, 2, -.00041560421232134104, .577445924282074, .4696458876132965, 0, 3, 1, 9, 10, 2, -1, 1, 9, 5, 1, 2, 6, 10, 5, 1, 2, -.0012640169588848948, .3977175951004028, .5217198133468628, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, -.003547334112226963, .6046528220176697, .480831503868103, 0, 2, 6, 8, 8, 3, -1, 6, 9, 8, 1, 3, 3001906952704303e-20, .3996723890304565, .5228201150894165, 0, 2, 9, 15, 5, 3, -1, 9, 16, 5, 1, 3, .00131130195222795, .4712158143520355, .5765997767448425, 0, 2, 8, 7, 4, 3, -1, 8, 8, 4, 1, 3, -.0013374709524214268, .4109584987163544, .5253170132637024, 0, 2, 7, 7, 6, 2, -1, 7, 8, 6, 1, 2, .0208767093718052, .5202993750572205, .1757981926202774, 0, 3, 5, 7, 8, 2, -1, 5, 7, 4, 1, 2, 9, 8, 4, 1, 2, -.007549794856458902, .6566609740257263, .4694975018501282, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, .0241885501891375, .5128673911094666, .3370220959186554, 0, 2, 4, 7, 4, 2, -1, 4, 8, 4, 1, 2, -.002935882890596986, .658078670501709, .4694541096687317, 0, 2, 14, 2, 6, 9, -1, 14, 5, 6, 3, 3, .0575579293072224, .5146445035934448, .2775259912014008, 0, 2, 4, 9, 3, 3, -1, 5, 9, 1, 3, 3, -.0011343370424583554, .3836601972579956, .5192667245864868, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, .0168169997632504, .5085592865943909, .6177260875701904, 0, 2, 0, 2, 6, 9, -1, 0, 5, 6, 3, 3, .005053517874330282, .5138763189315796, .3684791922569275, 0, 2, 17, 3, 3, 6, -1, 18, 3, 1, 6, 3, -.004587471019476652, .5989655256271362, .4835202097892761, 0, 2, 0, 3, 3, 6, -1, 1, 3, 1, 6, 3, .001688246033154428, .4509486854076386, .5723056793212891, 0, 2, 17, 14, 1, 2, -1, 17, 15, 1, 1, 2, -.0016554000321775675, .3496770858764648, .5243319272994995, 0, 2, 4, 9, 4, 3, -1, 6, 9, 2, 3, 2, -.0193738006055355, .1120536997914314, .496871292591095, 0, 2, 12, 9, 3, 3, -1, 12, 10, 3, 1, 3, .0103744501248002, .5148196816444397, .4395213127136231, 0, 2, 5, 9, 3, 3, -1, 5, 10, 3, 1, 3, .00014973050565458834, .4084999859333038, .526988685131073, 0, 3, 9, 5, 6, 8, -1, 12, 5, 3, 4, 2, 9, 9, 3, 4, 2, -.042981930077076, .6394104957580566, .501850426197052, 0, 3, 5, 5, 6, 8, -1, 5, 5, 3, 4, 2, 8, 9, 3, 4, 2, .008306593634188175, .470755398273468, .6698353290557861, 0, 2, 16, 1, 4, 6, -1, 16, 4, 4, 3, 2, -.0041285790503025055, .4541369080543518, .5323647260665894, 0, 2, 1, 0, 6, 20, -1, 3, 0, 2, 20, 3, .0017399420030415058, .433396190404892, .5439866185188293, 0, 2, 12, 11, 3, 2, -1, 13, 11, 1, 2, 3, .00011739750334527344, .4579687118530273, .5543426275253296, 0, 2, 5, 11, 3, 2, -1, 6, 11, 1, 2, 3, .00018585780344437808, .4324643909931183, .5426754951477051, 0, 2, 9, 4, 6, 1, -1, 11, 4, 2, 1, 3, .005558769218623638, .525722086429596, .3550611138343811, 0, 2, 0, 0, 8, 3, -1, 4, 0, 4, 3, 2, -.007985156029462814, .6043018102645874, .4630635976791382, 0, 2, 15, 0, 2, 5, -1, 15, 0, 1, 5, 2, .0006059412262402475, .4598254859447479, .55331951379776, 0, 2, 4, 1, 3, 2, -1, 5, 1, 1, 2, 3, -.0002298304025316611, .4130752086639404, .5322461128234863, 0, 2, 7, 0, 6, 15, -1, 9, 0, 2, 15, 3, .0004374021082185209, .4043039977550507, .5409289002418518, 0, 2, 6, 11, 3, 1, -1, 7, 11, 1, 1, 3, .0002948202018160373, .4494963884353638, .5628852248191833, 0, 2, 12, 0, 3, 4, -1, 13, 0, 1, 4, 3, .0103126596659422, .5177510976791382, .2704316973686218, 0, 2, 5, 4, 6, 1, -1, 7, 4, 2, 1, 3, -.007724110968410969, .1988019049167633, .4980553984642029, 0, 2, 12, 7, 3, 2, -1, 12, 8, 3, 1, 2, -.004679720848798752, .6644750237464905, .5018296241760254, 0, 2, 0, 1, 4, 6, -1, 0, 4, 4, 3, 2, -.005075545981526375, .3898304998874664, .5185269117355347, 0, 2, 12, 7, 3, 2, -1, 12, 8, 3, 1, 2, .00224797404371202, .4801808893680573, .5660336017608643, 0, 2, 2, 16, 3, 3, -1, 2, 17, 3, 1, 3, .0008332700817845762, .5210919976234436, .3957188129425049, 0, 3, 13, 8, 6, 10, -1, 16, 8, 3, 5, 2, 13, 13, 3, 5, 2, -.0412793308496475, .6154541969299316, .5007054209709167, 0, 2, 0, 9, 5, 2, -1, 0, 10, 5, 1, 2, -.0005093018990010023, .3975942134857178, .5228403806686401, 0, 3, 12, 11, 2, 2, -1, 13, 11, 1, 1, 2, 12, 12, 1, 1, 2, .0012568780221045017, .4979138076305389, .5939183235168457, 0, 2, 3, 15, 3, 3, -1, 3, 16, 3, 1, 3, .008004849776625633, .4984497129917145, .1633366048336029, 0, 2, 12, 7, 3, 2, -1, 12, 8, 3, 1, 2, -.0011879300000146031, .5904964804649353, .4942624866962433, 0, 2, 5, 7, 3, 2, -1, 5, 8, 3, 1, 2, .0006194895249791443, .4199557900428772, .5328726172447205, 0, 2, 9, 5, 9, 9, -1, 9, 8, 9, 3, 3, .006682985927909613, .5418602824211121, .490588903427124, 0, 2, 5, 0, 3, 7, -1, 6, 0, 1, 7, 3, -.0037062340416014194, .3725939095020294, .5138000249862671, 0, 2, 5, 2, 12, 5, -1, 9, 2, 4, 5, 3, -.0397394113242626, .6478961110115051, .5050346851348877, 0, 3, 6, 11, 2, 2, -1, 6, 11, 1, 1, 2, 7, 12, 1, 1, 2, .0014085009461268783, .4682339131832123, .6377884149551392, 0, 2, 15, 15, 3, 2, -1, 15, 16, 3, 1, 2, .0003932268882635981, .5458530187606812, .415048211812973, 0, 2, 2, 15, 3, 2, -1, 2, 16, 3, 1, 2, -.0018979819724336267, .3690159916877747, .5149704217910767, 0, 3, 14, 12, 6, 8, -1, 17, 12, 3, 4, 2, 14, 16, 3, 4, 2, -.0139704402536154, .6050562858581543, .4811357855796814, 0, 2, 2, 8, 15, 6, -1, 7, 8, 5, 6, 3, -.1010081991553307, .2017080038785934, .4992361962795258, 0, 2, 2, 2, 18, 17, -1, 8, 2, 6, 17, 3, -.0173469204455614, .5713148713111877, .4899486005306244, 0, 2, 5, 1, 4, 1, -1, 7, 1, 2, 1, 2, .000156197595060803, .4215388894081116, .5392642021179199, 0, 2, 5, 2, 12, 5, -1, 9, 2, 4, 5, 3, .1343892961740494, .5136151909828186, .3767612874507904, 0, 2, 3, 2, 12, 5, -1, 7, 2, 4, 5, 3, -.0245822407305241, .7027357816696167, .4747906923294067, 0, 3, 4, 9, 12, 4, -1, 10, 9, 6, 2, 2, 4, 11, 6, 2, 2, -.0038553720805794, .4317409098148346, .5427716970443726, 0, 3, 5, 15, 6, 2, -1, 5, 15, 3, 1, 2, 8, 16, 3, 1, 2, -.002316524973139167, .594269871711731, .4618647992610931, 0, 2, 10, 14, 2, 3, -1, 10, 15, 2, 1, 3, -.004851812031120062, .6191568970680237, .4884895086288452, 0, 3, 0, 13, 20, 2, -1, 0, 13, 10, 1, 2, 10, 14, 10, 1, 2, .002469993894919753, .5256664752960205, .4017199873924255, 0, 3, 4, 9, 12, 8, -1, 10, 9, 6, 4, 2, 4, 13, 6, 4, 2, .0454969592392445, .5237867832183838, .2685773968696594, 0, 2, 8, 13, 3, 6, -1, 8, 16, 3, 3, 2, -.0203195996582508, .213044598698616, .4979738891124725, 0, 2, 10, 12, 2, 2, -1, 10, 13, 2, 1, 2, .0002699499891605228, .481404185295105, .5543122291564941, 0, 3, 9, 12, 2, 2, -1, 9, 12, 1, 1, 2, 10, 13, 1, 1, 2, -.0018232699949294329, .6482579708099365, .4709989130496979, 0, 3, 4, 11, 14, 4, -1, 11, 11, 7, 2, 2, 4, 13, 7, 2, 2, -.006301579065620899, .4581927955150604, .5306236147880554, 0, 2, 8, 5, 4, 2, -1, 8, 6, 4, 1, 2, -.0002413949987385422, .5232086777687073, .4051763117313385, 0, 2, 10, 10, 6, 3, -1, 12, 10, 2, 3, 3, -.001033036969602108, .5556201934814453, .4789193868637085, 0, 2, 2, 14, 1, 2, -1, 2, 15, 1, 1, 2, .0001804116036510095, .5229442715644836, .4011810123920441, 0, 3, 13, 8, 6, 12, -1, 16, 8, 3, 6, 2, 13, 14, 3, 6, 2, -.0614078603684902, .62986820936203, .5010703206062317, 0, 3, 1, 8, 6, 12, -1, 1, 8, 3, 6, 2, 4, 14, 3, 6, 2, -.0695439130067825, .7228280901908875, .4773184061050415, 0, 2, 10, 0, 6, 10, -1, 12, 0, 2, 10, 3, -.0705426633358002, .2269513010978699, .5182529091835022, 0, 3, 5, 11, 8, 4, -1, 5, 11, 4, 2, 2, 9, 13, 4, 2, 2, .0024423799477517605, .5237097144126892, .4098151028156281, 0, 3, 10, 16, 8, 4, -1, 14, 16, 4, 2, 2, 10, 18, 4, 2, 2, .0015494349645450711, .4773750901222229, .5468043088912964, 0, 2, 7, 7, 6, 6, -1, 9, 7, 2, 6, 3, -.0239142198115587, .7146975994110107, .4783824980258942, 0, 2, 10, 2, 4, 10, -1, 10, 2, 2, 10, 2, -.0124536901712418, .2635296881198883, .5241122841835022, 0, 2, 6, 1, 4, 9, -1, 8, 1, 2, 9, 2, -.00020760179904755205, .3623757064342499, .5113608837127686, 0, 2, 12, 19, 2, 1, -1, 12, 19, 1, 1, 2, 29781080229440704e-21, .4705932140350342, .5432801842689514, 104.74919891357422, 211, 0, 2, 1, 2, 4, 9, -1, 3, 2, 2, 9, 2, .0117727499455214, .3860518932342529, .6421167254447937, 0, 2, 7, 5, 6, 4, -1, 9, 5, 2, 4, 3, .0270375702530146, .4385654926300049, .675403892993927, 0, 2, 9, 4, 2, 4, -1, 9, 6, 2, 2, 2, -3641950024757534e-20, .5487101078033447, .34233158826828, 0, 2, 14, 5, 2, 8, -1, 14, 9, 2, 4, 2, .001999540952965617, .3230532109737396, .5400317907333374, 0, 2, 7, 6, 5, 12, -1, 7, 12, 5, 6, 2, .0045278300531208515, .5091639757156372, .2935043871402741, 0, 2, 14, 6, 2, 6, -1, 14, 9, 2, 3, 2, .00047890920541249216, .4178153872489929, .5344064235687256, 0, 2, 4, 6, 2, 6, -1, 4, 9, 2, 3, 2, .0011720920447260141, .2899182140827179, .5132070779800415, 0, 3, 8, 15, 10, 4, -1, 13, 15, 5, 2, 2, 8, 17, 5, 2, 2, .0009530570241622627, .428012490272522, .5560845136642456, 0, 2, 6, 18, 2, 2, -1, 7, 18, 1, 2, 2, 15099150004971307e-21, .4044871926307678, .5404760241508484, 0, 2, 11, 3, 6, 2, -1, 11, 4, 6, 1, 2, -.0006081790197640657, .4271768927574158, .5503466129302979, 0, 2, 2, 0, 16, 6, -1, 2, 2, 16, 2, 3, .003322452073916793, .3962723910808563, .5369734764099121, 0, 2, 11, 3, 6, 2, -1, 11, 4, 6, 1, 2, -.0011037490330636501, .4727177917957306, .5237749814987183, 0, 2, 4, 11, 10, 3, -1, 4, 12, 10, 1, 3, -.0014350269921123981, .5603008270263672, .4223509132862091, 0, 2, 11, 3, 6, 2, -1, 11, 4, 6, 1, 2, .0020767399109899998, .5225917100906372, .4732725918292999, 0, 2, 3, 3, 6, 2, -1, 3, 4, 6, 1, 2, -.00016412809782195836, .3999075889587402, .5432739853858948, 0, 2, 16, 0, 4, 7, -1, 16, 0, 2, 7, 2, .008830243721604347, .4678385853767395, .6027327179908752, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, -.0105520701035857, .3493967056274414, .5213974714279175, 0, 2, 9, 16, 3, 3, -1, 9, 17, 3, 1, 3, -.00227316003292799, .6185818910598755, .4749062955379486, 0, 2, 4, 6, 6, 2, -1, 6, 6, 2, 2, 3, -.0008478633244521916, .5285341143608093, .3843482136726379, 0, 2, 15, 11, 1, 3, -1, 15, 12, 1, 1, 3, .0012081359745934606, .536064088344574, .3447335958480835, 0, 2, 5, 5, 2, 3, -1, 5, 6, 2, 1, 3, .002651273040100932, .4558292031288147, .6193962097167969, 0, 2, 10, 9, 2, 2, -1, 10, 10, 2, 1, 2, -.0011012479662895203, .368023008108139, .5327628254890442, 0, 2, 3, 1, 4, 3, -1, 5, 1, 2, 3, 2, .0004956151824444532, .396059513092041, .5274940729141235, 0, 2, 16, 0, 4, 7, -1, 16, 0, 2, 7, 2, -.0439017713069916, .7020444869995117, .4992839097976685, 0, 2, 0, 0, 20, 1, -1, 10, 0, 10, 1, 2, .0346903502941132, .5049164295196533, .276660293340683, 0, 2, 15, 11, 1, 3, -1, 15, 12, 1, 1, 3, -.002744219033047557, .2672632932662964, .5274971127510071, 0, 2, 0, 4, 3, 4, -1, 1, 4, 1, 4, 3, .003331658896058798, .4579482972621918, .6001101732254028, 0, 2, 16, 3, 3, 6, -1, 16, 5, 3, 2, 3, -.0200445707887411, .3171594142913818, .523571789264679, 0, 2, 1, 3, 3, 6, -1, 1, 5, 3, 2, 3, .0013492030557245016, .5265362858772278, .4034324884414673, 0, 3, 6, 2, 12, 6, -1, 12, 2, 6, 3, 2, 6, 5, 6, 3, 2, .0029702018946409225, .5332456827163696, .4571984112262726, 0, 2, 8, 10, 4, 3, -1, 8, 11, 4, 1, 3, .006303998176008463, .4593310952186585, .6034635901451111, 0, 3, 4, 2, 14, 6, -1, 11, 2, 7, 3, 2, 4, 5, 7, 3, 2, -.0129365902394056, .4437963962554932, .5372971296310425, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, .004014872945845127, .4680323898792267, .6437833905220032, 0, 2, 15, 13, 2, 3, -1, 15, 14, 2, 1, 3, -.002640167949721217, .3709631860256195, .5314332842826843, 0, 2, 8, 12, 4, 3, -1, 8, 13, 4, 1, 3, .0139184398576617, .4723555147647858, .713080883026123, 0, 2, 15, 11, 1, 3, -1, 15, 12, 1, 1, 3, -.00045087869511917233, .4492394030094147, .5370404124259949, 0, 2, 7, 13, 5, 2, -1, 7, 14, 5, 1, 2, .00025384349282830954, .4406864047050476, .5514402985572815, 0, 2, 7, 12, 6, 3, -1, 7, 13, 6, 1, 3, .002271000063046813, .4682416915893555, .5967984199523926, 0, 2, 5, 11, 4, 4, -1, 5, 13, 4, 2, 2, .002412077970802784, .5079392194747925, .3018598854541779, 0, 2, 11, 4, 3, 3, -1, 12, 4, 1, 3, 3, -3602567085181363e-20, .560103714466095, .4471096992492676, 0, 2, 6, 4, 3, 3, -1, 7, 4, 1, 3, 3, -.0074905529618263245, .2207535058259964, .4989944100379944, 0, 2, 16, 5, 3, 6, -1, 17, 5, 1, 6, 3, -.017513120546937, .6531215906143188, .5017648935317993, 0, 2, 3, 6, 12, 7, -1, 7, 6, 4, 7, 3, .1428163051605225, .4967963099479675, .1482062041759491, 0, 2, 16, 5, 3, 6, -1, 17, 5, 1, 6, 3, .005534526892006397, .4898946881294251, .5954223871231079, 0, 2, 3, 13, 2, 3, -1, 3, 14, 2, 1, 3, -.0009632359142415226, .3927116990089417, .519607424736023, 0, 2, 16, 5, 3, 6, -1, 17, 5, 1, 6, 3, -.0020370010752230883, .5613325238227844, .4884858131408691, 0, 2, 1, 5, 3, 6, -1, 2, 5, 1, 6, 3, .0016614829655736685, .4472880065441132, .5578880906105042, 0, 2, 1, 9, 18, 1, -1, 7, 9, 6, 1, 3, -.0031188090797513723, .3840532898902893, .5397477746009827, 0, 2, 0, 9, 8, 7, -1, 4, 9, 4, 7, 2, -.006400061771273613, .5843983888626099, .4533218145370483, 0, 2, 12, 11, 8, 2, -1, 12, 12, 8, 1, 2, .0003131960111204535, .5439221858978271, .4234727919101715, 0, 2, 0, 11, 8, 2, -1, 0, 12, 8, 1, 2, -.0182220991700888, .1288464963436127, .4958404898643494, 0, 2, 9, 13, 2, 3, -1, 9, 14, 2, 1, 3, .008796924725174904, .49512979388237, .7153480052947998, 0, 3, 4, 10, 12, 4, -1, 4, 10, 6, 2, 2, 10, 12, 6, 2, 2, -.004239507019519806, .3946599960327148, .5194936990737915, 0, 2, 9, 3, 3, 7, -1, 10, 3, 1, 7, 3, .009708627127110958, .4897503852844238, .6064900159835815, 0, 2, 7, 2, 3, 5, -1, 8, 2, 1, 5, 3, -.003993417136371136, .3245440125465393, .5060828924179077, 0, 3, 9, 12, 4, 6, -1, 11, 12, 2, 3, 2, 9, 15, 2, 3, 2, -.0167850591242313, .1581953018903732, .5203778743743896, 0, 2, 8, 7, 3, 6, -1, 9, 7, 1, 6, 3, .018272090703249, .4680935144424439, .6626979112625122, 0, 2, 15, 4, 4, 2, -1, 15, 5, 4, 1, 2, .00568728381767869, .5211697816848755, .3512184917926788, 0, 2, 8, 7, 3, 3, -1, 9, 7, 1, 3, 3, -.0010739039862528443, .5768386125564575, .4529845118522644, 0, 2, 14, 2, 6, 4, -1, 14, 4, 6, 2, 2, -.00370938703417778, .4507763087749481, .5313581228256226, 0, 2, 7, 16, 6, 1, -1, 9, 16, 2, 1, 3, -.0002111070934915915, .5460820198059082, .4333376884460449, 0, 2, 15, 13, 2, 3, -1, 15, 14, 2, 1, 3, .0010670139454305172, .5371856093406677, .4078390896320343, 0, 2, 8, 7, 3, 10, -1, 9, 7, 1, 10, 3, .0035943021066486835, .4471287131309509, .5643836259841919, 0, 2, 11, 10, 2, 6, -1, 11, 12, 2, 2, 3, -.005177603103220463, .4499393105506897, .5280330181121826, 0, 2, 6, 10, 4, 1, -1, 8, 10, 2, 1, 2, -.00025414369883947074, .5516173243522644, .4407708048820496, 0, 2, 10, 9, 2, 2, -1, 10, 10, 2, 1, 2, .006352256052196026, .5194190144538879, .2465227991342545, 0, 2, 8, 9, 2, 2, -1, 8, 10, 2, 1, 2, -.00044205080484971404, .3830705881118774, .5139682292938232, 0, 3, 12, 7, 2, 2, -1, 13, 7, 1, 1, 2, 12, 8, 1, 1, 2, .0007448872784152627, .4891090989112854, .5974786877632141, 0, 3, 5, 7, 2, 2, -1, 5, 7, 1, 1, 2, 6, 8, 1, 1, 2, -.0035116379149258137, .7413681745529175, .4768764972686768, 0, 2, 13, 0, 3, 14, -1, 14, 0, 1, 14, 3, -.0125409103929996, .3648819029331207, .5252826809883118, 0, 2, 4, 0, 3, 14, -1, 5, 0, 1, 14, 3, .009493185207247734, .5100492835044861, .362958699464798, 0, 2, 13, 4, 3, 14, -1, 14, 4, 1, 14, 3, .0129611501470208, .5232442021369934, .4333561062812805, 0, 2, 9, 14, 2, 3, -1, 9, 15, 2, 1, 3, .004720944911241531, .4648149013519287, .6331052780151367, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, -.0023119079414755106, .5930309891700745, .4531058073043823, 0, 2, 4, 2, 3, 16, -1, 5, 2, 1, 16, 3, -.002826229901984334, .3870477974414825, .5257101058959961, 0, 2, 7, 2, 8, 10, -1, 7, 7, 8, 5, 2, -.0014311339473351836, .552250325679779, .4561854898929596, 0, 2, 6, 14, 7, 3, -1, 6, 15, 7, 1, 3, .0019378310535103083, .4546220898628235, .5736966729164124, 0, 3, 9, 2, 10, 12, -1, 14, 2, 5, 6, 2, 9, 8, 5, 6, 2, .00026343559147790074, .5345739126205444, .4571875035762787, 0, 2, 6, 7, 8, 2, -1, 6, 8, 8, 1, 2, .0007825752254575491, .3967815935611725, .5220187902450562, 0, 2, 8, 13, 4, 6, -1, 8, 16, 4, 3, 2, -.0195504408329725, .282964289188385, .5243508219718933, 0, 2, 6, 6, 1, 3, -1, 6, 7, 1, 1, 3, .00043914958951063454, .4590066969394684, .589909017086029, 0, 2, 16, 2, 4, 6, -1, 16, 4, 4, 2, 3, .0214520003646612, .523141086101532, .2855378985404968, 0, 3, 6, 6, 4, 2, -1, 6, 6, 2, 1, 2, 8, 7, 2, 1, 2, .0005897358059883118, .4397256970405579, .550642192363739, 0, 2, 16, 2, 4, 6, -1, 16, 4, 4, 2, 3, -.0261576101183891, .3135079145431519, .5189175009727478, 0, 2, 0, 2, 4, 6, -1, 0, 4, 4, 2, 3, -.0139598604291677, .3213272988796234, .5040717720985413, 0, 2, 9, 6, 2, 6, -1, 9, 6, 1, 6, 2, -.006369901821017265, .6387544870376587, .4849506914615631, 0, 2, 3, 4, 6, 10, -1, 3, 9, 6, 5, 2, -.008561382070183754, .2759132087230682, .5032019019126892, 0, 2, 9, 5, 2, 6, -1, 9, 5, 1, 6, 2, .000966229010373354, .4685640931129456, .5834879279136658, 0, 2, 3, 13, 2, 3, -1, 3, 14, 2, 1, 3, .0007655026856809855, .5175207257270813, .389642208814621, 0, 2, 13, 13, 3, 2, -1, 13, 14, 3, 1, 2, -.008183334022760391, .2069136947393417, .5208122134208679, 0, 3, 2, 16, 10, 4, -1, 2, 16, 5, 2, 2, 7, 18, 5, 2, 2, -.009397693909704685, .6134091019630432, .4641222953796387, 0, 3, 5, 6, 10, 6, -1, 10, 6, 5, 3, 2, 5, 9, 5, 3, 2, .004802898038178682, .5454108119010925, .439521998167038, 0, 2, 7, 14, 1, 3, -1, 7, 15, 1, 1, 3, -.003568056970834732, .6344485282897949, .4681093990802765, 0, 2, 14, 16, 6, 3, -1, 14, 17, 6, 1, 3, .0040733120404183865, .5292683243751526, .4015620052814484, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .0012568129459396005, .4392988085746765, .5452824831008911, 0, 2, 7, 4, 10, 3, -1, 7, 5, 10, 1, 3, -.0029065010603517294, .5898832082748413, .4863379895687103, 0, 2, 0, 4, 5, 4, -1, 0, 6, 5, 2, 2, -.00244093406945467, .4069364964962006, .5247421860694885, 0, 2, 13, 11, 3, 9, -1, 13, 14, 3, 3, 3, .0248307008296251, .5182725787162781, .3682524859905243, 0, 2, 4, 11, 3, 9, -1, 4, 14, 3, 3, 3, -.0488540083169937, .1307577937841415, .496128112077713, 0, 2, 9, 7, 2, 1, -1, 9, 7, 1, 1, 2, -.001611037994734943, .6421005725860596, .4872662127017975, 0, 2, 5, 0, 6, 17, -1, 7, 0, 2, 17, 3, -.0970094799995422, .0477693490684032, .495098888874054, 0, 2, 10, 3, 6, 3, -1, 10, 3, 3, 3, 2, .0011209240183234215, .4616267085075378, .5354745984077454, 0, 2, 2, 2, 15, 4, -1, 7, 2, 5, 4, 3, -.001306409016251564, .626185417175293, .4638805985450745, 0, 3, 8, 2, 8, 2, -1, 12, 2, 4, 1, 2, 8, 3, 4, 1, 2, .00045771620352752507, .5384417772293091, .4646640121936798, 0, 2, 8, 1, 3, 6, -1, 8, 3, 3, 2, 3, -.0006314995116554201, .3804047107696533, .51302570104599, 0, 2, 9, 17, 2, 2, -1, 9, 18, 2, 1, 2, .0001450597046641633, .4554310142993927, .5664461851119995, 0, 2, 0, 0, 2, 14, -1, 1, 0, 1, 14, 2, -.0164745505899191, .6596958041191101, .4715859889984131, 0, 2, 12, 0, 7, 3, -1, 12, 1, 7, 1, 3, .0133695797994733, .519546627998352, .3035964965820313, 0, 2, 1, 14, 1, 2, -1, 1, 15, 1, 1, 2, .00010271780047332868, .522917628288269, .4107066094875336, 0, 3, 14, 12, 2, 8, -1, 15, 12, 1, 4, 2, 14, 16, 1, 4, 2, -.0055311559699475765, .6352887749671936, .4960907101631165, 0, 2, 1, 0, 7, 3, -1, 1, 1, 7, 1, 3, -.0026187049224972725, .3824546039104462, .5140984058380127, 0, 3, 14, 12, 2, 8, -1, 15, 12, 1, 4, 2, 14, 16, 1, 4, 2, .005083426833152771, .4950439929962158, .6220818758010864, 0, 3, 6, 0, 8, 12, -1, 6, 0, 4, 6, 2, 10, 6, 4, 6, 2, .0798181593418121, .4952335953712463, .1322475969791412, 0, 2, 6, 1, 8, 9, -1, 6, 4, 8, 3, 3, -.0992265865206718, .7542728781700134, .5008416771888733, 0, 2, 5, 2, 2, 2, -1, 5, 3, 2, 1, 2, -.0006517401780001819, .3699302971363068, .5130121111869812, 0, 3, 13, 14, 6, 6, -1, 16, 14, 3, 3, 2, 13, 17, 3, 3, 2, -.018996849656105, .6689178943634033, .4921202957630158, 0, 3, 0, 17, 20, 2, -1, 0, 17, 10, 1, 2, 10, 18, 10, 1, 2, .0173468999564648, .4983300864696503, .1859198063611984, 0, 3, 10, 3, 2, 6, -1, 11, 3, 1, 3, 2, 10, 6, 1, 3, 2, .0005508210160769522, .4574424028396606, .5522121787071228, 0, 2, 5, 12, 6, 2, -1, 8, 12, 3, 2, 2, .002005605027079582, .5131744742393494, .3856469988822937, 0, 2, 10, 7, 6, 13, -1, 10, 7, 3, 13, 2, -.007768819108605385, .4361700117588043, .5434309244155884, 0, 2, 5, 15, 10, 5, -1, 10, 15, 5, 5, 2, .0508782789111137, .4682720899581909, .6840639710426331, 0, 2, 10, 4, 4, 10, -1, 10, 4, 2, 10, 2, -.0022901780903339386, .4329245090484619, .5306099057197571, 0, 2, 5, 7, 2, 1, -1, 6, 7, 1, 1, 2, -.00015715380141045898, .5370057225227356, .4378164112567902, 0, 2, 10, 3, 6, 7, -1, 10, 3, 3, 7, 2, .1051924005150795, .5137274265289307, .0673614665865898, 0, 2, 4, 3, 6, 7, -1, 7, 3, 3, 7, 2, .002719891956076026, .4112060964107513, .5255665183067322, 0, 2, 1, 7, 18, 5, -1, 7, 7, 6, 5, 3, .0483377799391747, .5404623746871948, .4438967108726502, 0, 2, 3, 17, 4, 3, -1, 5, 17, 2, 3, 2, .0009570376132614911, .4355969130992889, .5399510860443115, 0, 3, 8, 14, 12, 6, -1, 14, 14, 6, 3, 2, 8, 17, 6, 3, 2, -.0253712590783834, .5995175242424011, .5031024813652039, 0, 3, 0, 13, 20, 4, -1, 0, 13, 10, 2, 2, 10, 15, 10, 2, 2, .0524579510092735, .4950287938117981, .1398351043462753, 0, 3, 4, 5, 14, 2, -1, 11, 5, 7, 1, 2, 4, 6, 7, 1, 2, -.0123656298965216, .639729917049408, .496410608291626, 0, 3, 1, 2, 10, 12, -1, 1, 2, 5, 6, 2, 6, 8, 5, 6, 2, -.1458971947431564, .1001669988036156, .494632214307785, 0, 2, 6, 1, 14, 3, -1, 6, 2, 14, 1, 3, -.0159086007624865, .3312329947948456, .5208340883255005, 0, 2, 8, 16, 2, 3, -1, 8, 17, 2, 1, 3, .00039486068999394774, .4406363964080811, .5426102876663208, 0, 2, 9, 17, 3, 2, -1, 10, 17, 1, 2, 3, -.0052454001270234585, .2799589931964874, .5189967155456543, 0, 3, 5, 15, 4, 2, -1, 5, 15, 2, 1, 2, 7, 16, 2, 1, 2, -.005042179953306913, .6987580060958862, .4752142131328583, 0, 2, 10, 15, 1, 3, -1, 10, 16, 1, 1, 3, .0029812189750373363, .4983288943767548, .6307479739189148, 0, 3, 8, 16, 4, 4, -1, 8, 16, 2, 2, 2, 10, 18, 2, 2, 2, -.007288430817425251, .298233300447464, .5026869773864746, 0, 2, 6, 11, 8, 6, -1, 6, 14, 8, 3, 2, .0015094350092113018, .5308442115783691, .3832970857620239, 0, 2, 2, 13, 5, 2, -1, 2, 14, 5, 1, 2, -.009334079921245575, .2037964016199112, .4969817101955414, 0, 3, 13, 14, 6, 6, -1, 16, 14, 3, 3, 2, 13, 17, 3, 3, 2, .0286671407520771, .5025696754455566, .6928027272224426, 0, 2, 1, 9, 18, 4, -1, 7, 9, 6, 4, 3, .1701968014240265, .4960052967071533, .1476442962884903, 0, 3, 13, 14, 6, 6, -1, 16, 14, 3, 3, 2, 13, 17, 3, 3, 2, -.003261447884142399, .5603063702583313, .4826056063175201, 0, 2, 0, 2, 1, 6, -1, 0, 4, 1, 2, 3, .0005576927796937525, .5205562114715576, .4129633009433746, 0, 2, 5, 0, 15, 20, -1, 5, 10, 15, 10, 2, .3625833988189697, .5221652984619141, .3768612146377564, 0, 3, 1, 14, 6, 6, -1, 1, 14, 3, 3, 2, 4, 17, 3, 3, 2, -.0116151301190257, .6022682785987854, .4637489914894104, 0, 3, 8, 14, 4, 6, -1, 10, 14, 2, 3, 2, 8, 17, 2, 3, 2, -.004079519771039486, .4070447087287903, .5337479114532471, 0, 2, 7, 11, 2, 1, -1, 8, 11, 1, 1, 2, .0005720430053770542, .4601835012435913, .5900393128395081, 0, 2, 9, 17, 3, 2, -1, 10, 17, 1, 2, 3, .000675433489959687, .5398252010345459, .4345428943634033, 0, 2, 8, 17, 3, 2, -1, 9, 17, 1, 2, 3, .0006329569732770324, .5201563239097595, .4051358997821808, 0, 3, 12, 14, 4, 6, -1, 14, 14, 2, 3, 2, 12, 17, 2, 3, 2, .00124353205319494, .4642387926578522, .5547441244125366, 0, 3, 4, 14, 4, 6, -1, 4, 14, 2, 3, 2, 6, 17, 2, 3, 2, -.004736385773867369, .6198567152023315, .4672552049160004, 0, 3, 13, 14, 2, 6, -1, 14, 14, 1, 3, 2, 13, 17, 1, 3, 2, -.006465846206992865, .6837332844734192, .5019000768661499, 0, 3, 5, 14, 2, 6, -1, 5, 14, 1, 3, 2, 6, 17, 1, 3, 2, .000350173213519156, .4344803094863892, .5363622903823853, 0, 2, 7, 0, 6, 12, -1, 7, 4, 6, 4, 3, .00015754920605104417, .4760079085826874, .5732020735740662, 0, 2, 0, 7, 12, 2, -1, 4, 7, 4, 2, 3, .009977436624467373, .5090985894203186, .3635039925575256, 0, 2, 10, 3, 3, 13, -1, 11, 3, 1, 13, 3, -.0004146452993154526, .5570064783096313, .4593802094459534, 0, 2, 7, 3, 3, 13, -1, 8, 3, 1, 13, 3, -.00035888899583369493, .5356845855712891, .4339134991168976, 0, 2, 10, 8, 6, 3, -1, 10, 9, 6, 1, 3, .0004046325047966093, .4439803063869476, .5436776876449585, 0, 2, 3, 11, 3, 2, -1, 4, 11, 1, 2, 3, -.0008218478760682046, .4042294919490814, .5176299214363098, 0, 3, 13, 12, 6, 8, -1, 16, 12, 3, 4, 2, 13, 16, 3, 4, 2, .005946741905063391, .4927651882171631, .5633779764175415, 0, 2, 7, 6, 6, 5, -1, 9, 6, 2, 5, 3, -.0217533893883228, .8006293773651123, .480084091424942, 0, 2, 17, 11, 2, 7, -1, 17, 11, 1, 7, 2, -.0145403798669577, .3946054875850678, .5182222723960876, 0, 2, 3, 13, 8, 2, -1, 7, 13, 4, 2, 2, -.0405107699334621, .0213249903172255, .4935792982578278, 0, 2, 6, 9, 8, 3, -1, 6, 10, 8, 1, 3, -.0005845826817676425, .4012795984745026, .5314025282859802, 0, 2, 4, 3, 4, 3, -1, 4, 4, 4, 1, 3, .005515180062502623, .4642418920993805, .5896260738372803, 0, 2, 11, 3, 4, 3, -1, 11, 4, 4, 1, 3, -.006062622182071209, .6502159237861633, .5016477704048157, 0, 2, 1, 4, 17, 12, -1, 1, 8, 17, 4, 3, .0945358425378799, .5264708995819092, .4126827120780945, 0, 2, 11, 3, 4, 3, -1, 11, 4, 4, 1, 3, .004731505177915096, .4879199862480164, .5892447829246521, 0, 2, 4, 8, 6, 3, -1, 4, 9, 6, 1, 3, -.0005257147131487727, .391728013753891, .5189412832260132, 0, 2, 12, 3, 5, 3, -1, 12, 4, 5, 1, 3, -.002546404954046011, .5837599039077759, .498570591211319, 0, 2, 1, 11, 2, 7, -1, 2, 11, 1, 7, 2, -.0260756891220808, .1261983960866928, .4955821931362152, 0, 3, 15, 12, 2, 8, -1, 16, 12, 1, 4, 2, 15, 16, 1, 4, 2, -.00547797093167901, .5722513794898987, .5010265707969666, 0, 2, 4, 8, 11, 3, -1, 4, 9, 11, 1, 3, .005133774131536484, .527326226234436, .4226376116275787, 0, 3, 9, 13, 6, 2, -1, 12, 13, 3, 1, 2, 9, 14, 3, 1, 2, .000479449809063226, .4450066983699799, .5819587111473083, 0, 2, 6, 13, 4, 3, -1, 6, 14, 4, 1, 3, -.0021114079281687737, .5757653117179871, .451171487569809, 0, 2, 9, 12, 3, 3, -1, 10, 12, 1, 3, 3, -.0131799904629588, .1884381026029587, .5160734057426453, 0, 2, 5, 3, 3, 3, -1, 5, 4, 3, 1, 3, -.004796809982508421, .6589789986610413, .4736118912696838, 0, 2, 9, 4, 2, 3, -1, 9, 5, 2, 1, 3, .0067483168095350266, .5259429812431335, .3356395065784454, 0, 2, 0, 2, 16, 3, -1, 0, 3, 16, 1, 3, .0014623369788751006, .5355271100997925, .4264092147350311, 0, 3, 15, 12, 2, 8, -1, 16, 12, 1, 4, 2, 15, 16, 1, 4, 2, .004764515906572342, .5034406781196594, .5786827802658081, 0, 3, 3, 12, 2, 8, -1, 3, 12, 1, 4, 2, 4, 16, 1, 4, 2, .0068066660314798355, .475660502910614, .6677829027175903, 0, 2, 14, 13, 3, 6, -1, 14, 15, 3, 2, 3, .0036608621012419462, .5369611978530884, .4311546981334686, 0, 2, 3, 13, 3, 6, -1, 3, 15, 3, 2, 3, .0214496403932571, .4968641996383667, .1888816058635712, 0, 3, 6, 5, 10, 2, -1, 11, 5, 5, 1, 2, 6, 6, 5, 1, 2, .004167890176177025, .4930733144283295, .5815368890762329, 0, 2, 2, 14, 14, 6, -1, 2, 17, 14, 3, 2, .008646756410598755, .5205205082893372, .4132595062255859, 0, 2, 10, 14, 1, 3, -1, 10, 15, 1, 1, 3, -.0003611407882999629, .5483555197715759, .4800927937030792, 0, 3, 4, 16, 2, 2, -1, 4, 16, 1, 1, 2, 5, 17, 1, 1, 2, .0010808729566633701, .4689902067184448, .6041421294212341, 0, 2, 10, 6, 2, 3, -1, 10, 7, 2, 1, 3, .005771995987743139, .5171142220497131, .3053277134895325, 0, 3, 0, 17, 20, 2, -1, 0, 17, 10, 1, 2, 10, 18, 10, 1, 2, .001572077046148479, .5219978094100952, .4178803861141205, 0, 2, 13, 6, 1, 3, -1, 13, 7, 1, 1, 3, -.0019307859474793077, .5860369801521301, .4812920093536377, 0, 2, 8, 13, 3, 2, -1, 9, 13, 1, 2, 3, -.007892627269029617, .1749276965856552, .497173398733139, 0, 2, 12, 2, 3, 3, -1, 13, 2, 1, 3, 3, -.002222467912361026, .434258908033371, .521284818649292, 0, 3, 3, 18, 2, 2, -1, 3, 18, 1, 1, 2, 4, 19, 1, 1, 2, .0019011989934369922, .4765186905860901, .689205527305603, 0, 2, 9, 16, 3, 4, -1, 10, 16, 1, 4, 3, .0027576119173318148, .5262191295623779, .4337486028671265, 0, 2, 6, 6, 1, 3, -1, 6, 7, 1, 1, 3, .005178744904696941, .4804069101810455, .7843729257583618, 0, 2, 13, 1, 5, 2, -1, 13, 2, 5, 1, 2, -.0009027334162965417, .412084698677063, .5353423953056335, 0, 3, 7, 14, 6, 2, -1, 7, 14, 3, 1, 2, 10, 15, 3, 1, 2, .005179795902222395, .4740372896194458, .6425960063934326, 0, 2, 11, 3, 3, 4, -1, 12, 3, 1, 4, 3, -.0101140001788735, .2468792051076889, .5175017714500427, 0, 2, 1, 13, 12, 6, -1, 5, 13, 4, 6, 3, -.0186170600354671, .5756294131278992, .4628978967666626, 0, 2, 14, 11, 5, 2, -1, 14, 12, 5, 1, 2, .0059225959703326225, .5169625878334045, .3214271068572998, 0, 3, 2, 15, 14, 4, -1, 2, 15, 7, 2, 2, 9, 17, 7, 2, 2, -.006294507998973131, .3872014880180359, .5141636729240417, 0, 3, 3, 7, 14, 2, -1, 10, 7, 7, 1, 2, 3, 8, 7, 1, 2, .0065353019163012505, .4853048920631409, .6310489773750305, 0, 2, 1, 11, 4, 2, -1, 1, 12, 4, 1, 2, .0010878399480134249, .5117315053939819, .3723258972167969, 0, 2, 14, 0, 6, 14, -1, 16, 0, 2, 14, 3, -.0225422400981188, .5692740082740784, .4887112975120544, 0, 2, 4, 11, 1, 3, -1, 4, 12, 1, 1, 3, -.003006566083058715, .2556012868881226, .5003992915153503, 0, 2, 14, 0, 6, 14, -1, 16, 0, 2, 14, 3, .007474127225577831, .4810872972011566, .5675926804542542, 0, 2, 1, 10, 3, 7, -1, 2, 10, 1, 7, 3, .0261623207479715, .4971194863319397, .1777237057685852, 0, 2, 8, 12, 9, 2, -1, 8, 13, 9, 1, 2, .0009435273823328316, .4940010905265808, .549125075340271, 0, 2, 0, 6, 20, 1, -1, 10, 6, 10, 1, 2, .0333632417023182, .5007612109184265, .2790724039077759, 0, 2, 8, 4, 4, 4, -1, 8, 4, 2, 4, 2, -.0151186501607299, .7059578895568848, .4973031878471375, 0, 2, 0, 0, 2, 2, -1, 0, 1, 2, 1, 2, .0009864894673228264, .5128620266914368, .3776761889457703, 105.76110076904297, 213, 0, 2, 5, 3, 10, 9, -1, 5, 6, 10, 3, 3, -.0951507985591888, .6470757126808167, .4017286896705627, 0, 2, 15, 2, 4, 10, -1, 15, 2, 2, 10, 2, .006270234007388353, .399982213973999, .574644923210144, 0, 2, 8, 2, 2, 7, -1, 9, 2, 1, 7, 2, .000300180894555524, .355877012014389, .5538809895515442, 0, 2, 7, 4, 12, 1, -1, 11, 4, 4, 1, 3, .0011757409665733576, .425653487443924, .5382617712020874, 0, 2, 3, 4, 9, 1, -1, 6, 4, 3, 1, 3, 4423526843311265e-20, .3682908117771149, .5589926838874817, 0, 2, 15, 10, 1, 4, -1, 15, 12, 1, 2, 2, -29936920327600092e-21, .5452470183372498, .4020367860794067, 0, 2, 4, 10, 6, 4, -1, 7, 10, 3, 4, 2, .003007319988682866, .5239058136940002, .3317843973636627, 0, 2, 15, 9, 1, 6, -1, 15, 12, 1, 3, 2, -.0105138896033168, .4320689141750336, .5307983756065369, 0, 2, 7, 17, 6, 3, -1, 7, 18, 6, 1, 3, .008347682654857635, .4504637122154236, .6453298926353455, 0, 3, 14, 3, 2, 16, -1, 15, 3, 1, 8, 2, 14, 11, 1, 8, 2, -.0031492270063608885, .4313425123691559, .5370525121688843, 0, 2, 4, 9, 1, 6, -1, 4, 12, 1, 3, 2, -1443564997316571e-20, .5326603055000305, .381797194480896, 0, 2, 12, 1, 5, 2, -1, 12, 2, 5, 1, 2, -.00042855090578086674, .430516391992569, .5382009744644165, 0, 3, 6, 18, 4, 2, -1, 6, 18, 2, 1, 2, 8, 19, 2, 1, 2, .00015062429883982986, .4235970973968506, .5544965267181396, 0, 3, 2, 4, 16, 10, -1, 10, 4, 8, 5, 2, 2, 9, 8, 5, 2, .0715598315000534, .5303059816360474, .2678802907466888, 0, 2, 6, 5, 1, 10, -1, 6, 10, 1, 5, 2, .0008409518050029874, .3557108938694, .5205433964729309, 0, 2, 4, 8, 15, 2, -1, 9, 8, 5, 2, 3, .0629865005612373, .5225362777709961, .2861376106739044, 0, 2, 1, 8, 15, 2, -1, 6, 8, 5, 2, 3, -.0033798629883676767, .3624185919761658, .5201697945594788, 0, 2, 9, 5, 3, 6, -1, 9, 7, 3, 2, 3, -.00011810739670181647, .547447681427002, .3959893882274628, 0, 2, 5, 7, 8, 2, -1, 9, 7, 4, 2, 2, -.0005450560129247606, .3740422129631043, .5215715765953064, 0, 2, 9, 11, 2, 3, -1, 9, 12, 2, 1, 3, -.0018454910023137927, .5893052220344543, .4584448933601379, 0, 2, 1, 0, 16, 3, -1, 1, 1, 16, 1, 3, -.0004383237101137638, .4084582030773163, .5385351181030273, 0, 2, 11, 2, 7, 2, -1, 11, 3, 7, 1, 2, -.002400083001703024, .377745509147644, .5293580293655396, 0, 2, 5, 1, 10, 18, -1, 5, 7, 10, 6, 3, -.0987957417964935, .2963612079620361, .5070089101791382, 0, 2, 17, 4, 3, 2, -1, 18, 4, 1, 2, 3, .0031798239797353745, .4877632856369019, .6726443767547607, 0, 2, 8, 13, 1, 3, -1, 8, 14, 1, 1, 3, .00032406419632025063, .4366911053657532, .5561109781265259, 0, 2, 3, 14, 14, 6, -1, 3, 16, 14, 2, 3, -.0325472503900528, .31281578540802, .5308616161346436, 0, 2, 0, 2, 3, 4, -1, 1, 2, 1, 4, 3, -.007756113074719906, .6560224890708923, .4639872014522553, 0, 2, 12, 1, 5, 2, -1, 12, 2, 5, 1, 2, .0160272493958473, .5172680020332336, .3141897916793823, 0, 2, 3, 1, 5, 2, -1, 3, 2, 5, 1, 2, 710023505234858e-20, .4084446132183075, .5336294770240784, 0, 2, 10, 13, 2, 3, -1, 10, 14, 2, 1, 3, .007342280820012093, .4966922104358673, .660346508026123, 0, 2, 8, 13, 2, 3, -1, 8, 14, 2, 1, 3, -.0016970280557870865, .5908237099647522, .4500182867050171, 0, 2, 14, 12, 2, 3, -1, 14, 13, 2, 1, 3, .0024118260480463505, .5315160751342773, .3599720895290375, 0, 2, 7, 2, 2, 3, -1, 7, 3, 2, 1, 3, -.005530093796551228, .2334040999412537, .4996814131736755, 0, 3, 5, 6, 10, 4, -1, 10, 6, 5, 2, 2, 5, 8, 5, 2, 2, -.0026478730142116547, .5880935788154602, .4684734046459198, 0, 2, 9, 13, 1, 6, -1, 9, 16, 1, 3, 2, .0112956296652555, .4983777105808258, .1884590983390808, 0, 3, 10, 12, 2, 2, -1, 11, 12, 1, 1, 2, 10, 13, 1, 1, 2, -.000669528788421303, .5872138142585754, .4799019992351532, 0, 2, 4, 12, 2, 3, -1, 4, 13, 2, 1, 3, .0014410680159926414, .5131189227104187, .350101113319397, 0, 2, 14, 4, 6, 6, -1, 14, 6, 6, 2, 3, .0024637870956212282, .5339372158050537, .4117639064788818, 0, 2, 8, 17, 2, 3, -1, 8, 18, 2, 1, 3, .0003311451873742044, .4313383102416992, .5398246049880981, 0, 2, 16, 4, 4, 6, -1, 16, 6, 4, 2, 3, -.0335572697222233, .26753368973732, .5179154872894287, 0, 2, 0, 4, 4, 6, -1, 0, 6, 4, 2, 3, .0185394193977118, .4973869919776917, .2317177057266235, 0, 2, 14, 6, 2, 3, -1, 14, 6, 1, 3, 2, -.00029698139405809343, .552970826625824, .4643664062023163, 0, 2, 4, 9, 8, 1, -1, 8, 9, 4, 1, 2, -.0004557725915219635, .5629584193229675, .4469191133975983, 0, 2, 8, 12, 4, 3, -1, 8, 13, 4, 1, 3, -.0101589802652597, .6706212759017944, .4925918877124786, 0, 2, 5, 12, 10, 6, -1, 5, 14, 10, 2, 3, -22413829356082715e-21, .5239421725273132, .3912901878356934, 0, 2, 11, 12, 1, 2, -1, 11, 13, 1, 1, 2, 7203496352303773e-20, .4799438118934631, .5501788854598999, 0, 2, 8, 15, 4, 2, -1, 8, 16, 4, 1, 2, -.006926720961928368, .6930009722709656, .4698084890842438, 0, 3, 6, 9, 8, 8, -1, 10, 9, 4, 4, 2, 6, 13, 4, 4, 2, -.007699783891439438, .409962385892868, .5480883121490479, 0, 3, 7, 12, 4, 6, -1, 7, 12, 2, 3, 2, 9, 15, 2, 3, 2, -.007313054986298084, .3283475935459137, .5057886242866516, 0, 2, 10, 11, 3, 1, -1, 11, 11, 1, 1, 3, .0019650589674711227, .4978047013282776, .6398249864578247, 0, 3, 9, 7, 2, 10, -1, 9, 7, 1, 5, 2, 10, 12, 1, 5, 2, .007164760027080774, .4661160111427307, .6222137212753296, 0, 2, 8, 0, 6, 6, -1, 10, 0, 2, 6, 3, -.0240786392241716, .2334644943475723, .5222162008285522, 0, 2, 3, 11, 2, 6, -1, 3, 13, 2, 2, 3, -.0210279691964388, .1183653995394707, .4938226044178009, 0, 2, 16, 12, 1, 2, -1, 16, 13, 1, 1, 2, .00036017020465806127, .5325019955635071, .4116711020469666, 0, 3, 1, 14, 6, 6, -1, 1, 14, 3, 3, 2, 4, 17, 3, 3, 2, -.0172197297215462, .6278762221336365, .4664269089698792, 0, 2, 13, 1, 3, 6, -1, 14, 1, 1, 6, 3, -.007867214269936085, .3403415083885193, .5249736905097961, 0, 2, 8, 8, 2, 2, -1, 8, 9, 2, 1, 2, -.000447773898486048, .3610411882400513, .5086259245872498, 0, 2, 9, 9, 3, 3, -1, 10, 9, 1, 3, 3, .005548601038753986, .4884265959262848, .6203498244285583, 0, 2, 8, 7, 3, 3, -1, 8, 8, 3, 1, 3, -.00694611482322216, .262593001127243, .5011097192764282, 0, 2, 14, 0, 2, 3, -1, 14, 0, 1, 3, 2, .00013569870498031378, .4340794980525971, .5628312230110168, 0, 2, 1, 0, 18, 9, -1, 7, 0, 6, 9, 3, -.0458802506327629, .6507998704910278, .4696274995803833, 0, 2, 11, 5, 4, 15, -1, 11, 5, 2, 15, 2, -.0215825606137514, .3826502859592438, .5287616848945618, 0, 2, 5, 5, 4, 15, -1, 7, 5, 2, 15, 2, -.0202095396816731, .3233368098735809, .5074477195739746, 0, 2, 14, 0, 2, 3, -1, 14, 0, 1, 3, 2, .005849671084433794, .5177603960037231, .4489670991897583, 0, 2, 4, 0, 2, 3, -1, 5, 0, 1, 3, 2, -5747637987951748e-20, .4020850956439972, .5246363878250122, 0, 3, 11, 12, 2, 2, -1, 12, 12, 1, 1, 2, 11, 13, 1, 1, 2, -.001151310047134757, .6315072178840637, .490515410900116, 0, 3, 7, 12, 2, 2, -1, 7, 12, 1, 1, 2, 8, 13, 1, 1, 2, .0019862831104546785, .4702459871768951, .6497151255607605, 0, 2, 12, 0, 3, 4, -1, 13, 0, 1, 4, 3, -.005271951202303171, .3650383949279785, .5227652788162231, 0, 2, 4, 11, 3, 3, -1, 4, 12, 3, 1, 3, .0012662699446082115, .5166100859642029, .387761801481247, 0, 2, 12, 7, 4, 2, -1, 12, 8, 4, 1, 2, -.006291944067925215, .737589418888092, .5023847818374634, 0, 2, 8, 10, 3, 2, -1, 9, 10, 1, 2, 3, .000673601112794131, .4423226118087769, .5495585799217224, 0, 2, 9, 9, 3, 2, -1, 10, 9, 1, 2, 3, -.0010523450328037143, .5976396203041077, .4859583079814911, 0, 2, 8, 9, 3, 2, -1, 9, 9, 1, 2, 3, -.00044216238893568516, .5955939292907715, .4398930966854096, 0, 2, 12, 0, 3, 4, -1, 13, 0, 1, 4, 3, .0011747940443456173, .5349888205528259, .4605058133602142, 0, 2, 5, 0, 3, 4, -1, 6, 0, 1, 4, 3, .005245743785053492, .5049191117286682, .2941577136516571, 0, 3, 4, 14, 12, 4, -1, 10, 14, 6, 2, 2, 4, 16, 6, 2, 2, -.0245397202670574, .2550177872180939, .5218586921691895, 0, 2, 8, 13, 2, 3, -1, 8, 14, 2, 1, 3, .0007379304151982069, .4424861073493958, .5490816235542297, 0, 2, 10, 10, 3, 8, -1, 10, 14, 3, 4, 2, .0014233799884095788, .5319514274597168, .4081355929374695, 0, 3, 8, 10, 4, 8, -1, 8, 10, 2, 4, 2, 10, 14, 2, 4, 2, -.0024149110540747643, .4087659120559692, .5238950252532959, 0, 2, 10, 8, 3, 1, -1, 11, 8, 1, 1, 3, -.0012165299849584699, .567457914352417, .4908052980899811, 0, 2, 9, 12, 1, 6, -1, 9, 15, 1, 3, 2, -.0012438809499144554, .4129425883293152, .5256118178367615, 0, 2, 10, 8, 3, 1, -1, 11, 8, 1, 1, 3, .006194273941218853, .5060194134712219, .7313653230667114, 0, 2, 7, 8, 3, 1, -1, 8, 8, 1, 1, 3, -.0016607169527560472, .5979632139205933, .4596369862556458, 0, 2, 5, 2, 15, 14, -1, 5, 9, 15, 7, 2, -.0273162592202425, .4174365103244782, .5308842062950134, 0, 3, 2, 1, 2, 10, -1, 2, 1, 1, 5, 2, 3, 6, 1, 5, 2, -.00158455700147897, .56158047914505, .4519486129283905, 0, 2, 14, 14, 2, 3, -1, 14, 15, 2, 1, 3, -.0015514739789068699, .4076187014579773, .5360785126686096, 0, 2, 2, 7, 3, 3, -1, 3, 7, 1, 3, 3, .0003844655875582248, .4347293972969055, .5430442094802856, 0, 2, 17, 4, 3, 3, -1, 17, 5, 3, 1, 3, -.0146722598001361, .1659304946660996, .5146093964576721, 0, 2, 0, 4, 3, 3, -1, 0, 5, 3, 1, 3, .008160888217389584, .4961819052696228, .1884745955467224, 0, 3, 13, 5, 6, 2, -1, 16, 5, 3, 1, 2, 13, 6, 3, 1, 2, .0011121659772470593, .4868263900279999, .6093816161155701, 0, 2, 4, 19, 12, 1, -1, 8, 19, 4, 1, 3, -.007260377053171396, .6284325122833252, .4690375924110413, 0, 2, 12, 12, 2, 4, -1, 12, 14, 2, 2, 2, -.00024046430189628154, .5575000047683716, .4046044051647186, 0, 2, 3, 15, 1, 3, -1, 3, 16, 1, 1, 3, -.00023348190006799996, .4115762114524841, .5252848267555237, 0, 2, 11, 16, 6, 4, -1, 11, 16, 3, 4, 2, .005573648028075695, .4730072915554047, .5690100789070129, 0, 2, 2, 10, 3, 10, -1, 3, 10, 1, 10, 3, .0306237693876028, .4971886873245239, .1740095019340515, 0, 2, 12, 8, 2, 4, -1, 12, 8, 1, 4, 2, .0009207479888573289, .5372117757797241, .4354872107505798, 0, 2, 6, 8, 2, 4, -1, 7, 8, 1, 4, 2, -4355073906481266e-20, .5366883873939514, .4347316920757294, 0, 2, 10, 14, 2, 3, -1, 10, 14, 1, 3, 2, -.006645271088927984, .3435518145561218, .516053318977356, 0, 2, 5, 1, 10, 3, -1, 10, 1, 5, 3, 2, .0432219989597797, .4766792058944702, .7293652892112732, 0, 2, 10, 7, 3, 2, -1, 11, 7, 1, 2, 3, .0022331769578158855, .5029315948486328, .5633171200752258, 0, 2, 5, 6, 9, 2, -1, 8, 6, 3, 2, 3, .0031829739455133677, .4016092121601105, .5192136764526367, 0, 2, 9, 8, 2, 2, -1, 9, 9, 2, 1, 2, -.00018027749320026487, .4088315963745117, .5417919754981995, 0, 3, 2, 11, 16, 6, -1, 2, 11, 8, 3, 2, 10, 14, 8, 3, 2, -.0052934689447283745, .407567709684372, .5243561863899231, 0, 3, 12, 7, 2, 2, -1, 13, 7, 1, 1, 2, 12, 8, 1, 1, 2, .0012750959722325206, .4913282990455627, .6387010812759399, 0, 2, 9, 5, 2, 3, -1, 9, 6, 2, 1, 3, .004338532220572233, .5031672120094299, .2947346866130829, 0, 2, 9, 7, 3, 2, -1, 10, 7, 1, 2, 3, .00852507445961237, .4949789047241211, .6308869123458862, 0, 2, 5, 1, 8, 12, -1, 5, 7, 8, 6, 2, -.0009426635224372149, .5328366756439209, .4285649955272675, 0, 2, 13, 5, 2, 2, -1, 13, 6, 2, 1, 2, .0013609660090878606, .4991525113582611, .5941501259803772, 0, 2, 5, 5, 2, 2, -1, 5, 6, 2, 1, 2, .0004478250921238214, .4573504030704498, .5854480862617493, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, .001336005050688982, .4604358971118927, .584905207157135, 0, 2, 4, 14, 2, 3, -1, 4, 15, 2, 1, 3, -.0006096754805184901, .3969388902187347, .522942304611206, 0, 2, 12, 4, 3, 3, -1, 12, 5, 3, 1, 3, -.002365678083151579, .5808320045471191, .4898357093334198, 0, 2, 5, 4, 3, 3, -1, 5, 5, 3, 1, 3, .001073434017598629, .435121089220047, .5470039248466492, 0, 3, 9, 14, 2, 6, -1, 10, 14, 1, 3, 2, 9, 17, 1, 3, 2, .0021923359017819166, .535506010055542, .3842903971672058, 0, 2, 8, 14, 3, 2, -1, 9, 14, 1, 2, 3, .005496861878782511, .5018138885498047, .2827191948890686, 0, 2, 9, 5, 6, 6, -1, 11, 5, 2, 6, 3, -.0753688216209412, .1225076019763947, .5148826837539673, 0, 2, 5, 5, 6, 6, -1, 7, 5, 2, 6, 3, .0251344703137875, .4731766879558563, .702544629573822, 0, 2, 13, 13, 1, 2, -1, 13, 14, 1, 1, 2, -2935859993158374e-20, .5430532097816467, .465608686208725, 0, 2, 0, 2, 10, 2, -1, 0, 3, 10, 1, 2, -.0005835591000504792, .4031040072441101, .5190119743347168, 0, 2, 13, 13, 1, 2, -1, 13, 14, 1, 1, 2, -.0026639450807124376, .4308126866817474, .5161771178245544, 0, 3, 5, 7, 2, 2, -1, 5, 7, 1, 1, 2, 6, 8, 1, 1, 2, -.0013804089976474643, .621982991695404, .4695515930652618, 0, 2, 13, 5, 2, 7, -1, 13, 5, 1, 7, 2, .0012313219485804439, .5379363894462585, .4425831139087677, 0, 2, 6, 13, 1, 2, -1, 6, 14, 1, 1, 2, -14644179827882908e-21, .5281640291213989, .4222503006458283, 0, 2, 11, 0, 3, 7, -1, 12, 0, 1, 7, 3, -.0128188095986843, .2582092881202698, .5179932713508606, 0, 3, 0, 3, 2, 16, -1, 0, 3, 1, 8, 2, 1, 11, 1, 8, 2, .0228521898388863, .4778693020343781, .7609264254570007, 0, 2, 11, 0, 3, 7, -1, 12, 0, 1, 7, 3, .0008230597013607621, .5340992212295532, .4671724140644074, 0, 2, 6, 0, 3, 7, -1, 7, 0, 1, 7, 3, .0127701200544834, .4965761005878449, .1472366005182266, 0, 2, 11, 16, 8, 4, -1, 11, 16, 4, 4, 2, -.0500515103340149, .641499400138855, .5016592144966125, 0, 2, 1, 16, 8, 4, -1, 5, 16, 4, 4, 2, .0157752707600594, .4522320032119751, .5685362219810486, 0, 2, 13, 5, 2, 7, -1, 13, 5, 1, 7, 2, -.0185016207396984, .2764748930931091, .5137959122657776, 0, 2, 5, 5, 2, 7, -1, 6, 5, 1, 7, 2, .0024626250378787518, .5141941905021667, .3795408010482788, 0, 2, 18, 6, 2, 14, -1, 18, 13, 2, 7, 2, .0629161670804024, .5060648918151855, .658043384552002, 0, 2, 6, 10, 3, 4, -1, 6, 12, 3, 2, 2, -21648500478477217e-21, .5195388197898865, .401988685131073, 0, 2, 14, 7, 1, 2, -1, 14, 8, 1, 1, 2, .0021180990152060986, .4962365031242371, .5954458713531494, 0, 3, 0, 1, 18, 6, -1, 0, 1, 9, 3, 2, 9, 4, 9, 3, 2, -.0166348908096552, .3757933080196381, .517544686794281, 0, 2, 14, 7, 1, 2, -1, 14, 8, 1, 1, 2, -.002889947034418583, .6624013781547546, .5057178735733032, 0, 2, 0, 6, 2, 14, -1, 0, 13, 2, 7, 2, .076783262193203, .4795796871185303, .8047714829444885, 0, 2, 17, 0, 3, 12, -1, 18, 0, 1, 12, 3, .003917067777365446, .4937882125377655, .5719941854476929, 0, 2, 0, 6, 18, 3, -1, 0, 7, 18, 1, 3, -.0726706013083458, .0538945607841015, .4943903982639313, 0, 2, 6, 0, 14, 16, -1, 6, 8, 14, 8, 2, .5403950214385986, .5129774212837219, .1143338978290558, 0, 2, 0, 0, 3, 12, -1, 1, 0, 1, 12, 3, .0029510019812732935, .4528343975543976, .5698574185371399, 0, 2, 13, 0, 3, 7, -1, 14, 0, 1, 7, 3, .0034508369863033295, .5357726812362671, .4218730926513672, 0, 2, 5, 7, 1, 2, -1, 5, 8, 1, 1, 2, -.0004207793972454965, .5916172862052917, .4637925922870636, 0, 2, 14, 4, 6, 6, -1, 14, 6, 6, 2, 3, .0033051050268113613, .5273385047912598, .438204288482666, 0, 2, 5, 7, 7, 2, -1, 5, 8, 7, 1, 2, .0004773506079800427, .4046528041362763, .5181884765625, 0, 2, 8, 6, 6, 9, -1, 8, 9, 6, 3, 3, -.0259285103529692, .7452235817909241, .5089386105537415, 0, 2, 5, 4, 6, 1, -1, 7, 4, 2, 1, 3, -.002972979098558426, .3295435905456543, .5058795213699341, 0, 3, 13, 0, 6, 4, -1, 16, 0, 3, 2, 2, 13, 2, 3, 2, 2, .005850832909345627, .4857144057750702, .5793024897575378, 0, 2, 1, 2, 18, 12, -1, 1, 6, 18, 4, 3, -.0459675192832947, .4312731027603149, .5380653142929077, 0, 2, 3, 2, 17, 12, -1, 3, 6, 17, 4, 3, .1558596044778824, .5196170210838318, .1684713959693909, 0, 2, 5, 14, 7, 3, -1, 5, 15, 7, 1, 3, .0151648297905922, .4735757112503052, .6735026836395264, 0, 2, 10, 14, 1, 3, -1, 10, 15, 1, 1, 3, -.0010604249546304345, .5822926759719849, .4775702953338623, 0, 2, 3, 14, 3, 3, -1, 3, 15, 3, 1, 3, .006647629197686911, .4999198913574219, .231953501701355, 0, 2, 14, 4, 6, 6, -1, 14, 6, 6, 2, 3, -.0122311301529408, .4750893115997315, .5262982249259949, 0, 2, 0, 4, 6, 6, -1, 0, 6, 6, 2, 3, .005652888212352991, .5069767832756042, .3561818897724152, 0, 2, 12, 5, 4, 3, -1, 12, 6, 4, 1, 3, .0012977829901501536, .4875693917274475, .5619062781333923, 0, 2, 4, 5, 4, 3, -1, 4, 6, 4, 1, 3, .0107815898954868, .4750770032405853, .6782308220863342, 0, 2, 18, 0, 2, 6, -1, 18, 2, 2, 2, 3, .002865477930754423, .5305461883544922, .4290736019611359, 0, 2, 8, 1, 4, 9, -1, 10, 1, 2, 9, 2, .0028663428965955973, .4518479108810425, .5539351105690002, 0, 2, 6, 6, 8, 2, -1, 6, 6, 4, 2, 2, -.005198332015424967, .4149119853973389, .5434188842773438, 0, 3, 6, 5, 4, 2, -1, 6, 5, 2, 1, 2, 8, 6, 2, 1, 2, .005373999010771513, .471789687871933, .6507657170295715, 0, 2, 10, 5, 2, 3, -1, 10, 6, 2, 1, 3, -.0146415298804641, .2172164022922516, .5161777138710022, 0, 2, 9, 5, 1, 3, -1, 9, 6, 1, 1, 3, -15042580344015732e-21, .533738374710083, .4298836886882782, 0, 2, 9, 10, 2, 2, -1, 9, 11, 2, 1, 2, -.0001187566012958996, .4604594111442566, .5582447052001953, 0, 2, 0, 8, 4, 3, -1, 0, 9, 4, 1, 3, .0169955305755138, .4945895075798035, .0738800764083862, 0, 2, 6, 0, 8, 6, -1, 6, 3, 8, 3, 2, -.0350959412753582, .70055091381073, .4977591037750244, 0, 3, 1, 0, 6, 4, -1, 1, 0, 3, 2, 2, 4, 2, 3, 2, 2, .0024217350874096155, .4466265141963959, .5477694272994995, 0, 2, 13, 0, 3, 7, -1, 14, 0, 1, 7, 3, -.0009634033776819706, .4714098870754242, .5313338041305542, 0, 2, 9, 16, 2, 2, -1, 9, 17, 2, 1, 2, .00016391130338888615, .4331546127796173, .5342242121696472, 0, 2, 11, 4, 6, 10, -1, 11, 9, 6, 5, 2, -.0211414601653814, .2644700109958649, .5204498767852783, 0, 2, 0, 10, 19, 2, -1, 0, 11, 19, 1, 2, .0008777520270086825, .5208349823951721, .4152742922306061, 0, 2, 9, 5, 8, 9, -1, 9, 8, 8, 3, 3, -.0279439203441143, .6344125270843506, .5018811821937561, 0, 2, 4, 0, 3, 7, -1, 5, 0, 1, 7, 3, .006729737855494022, .5050438046455383, .3500863909721375, 0, 3, 8, 6, 4, 12, -1, 10, 6, 2, 6, 2, 8, 12, 2, 6, 2, .0232810396701097, .4966318011283875, .6968677043914795, 0, 2, 0, 2, 6, 4, -1, 0, 4, 6, 2, 2, -.0116449799388647, .3300260007381439, .5049629807472229, 0, 2, 8, 15, 4, 3, -1, 8, 16, 4, 1, 3, .0157643090933561, .4991598129272461, .7321153879165649, 0, 2, 8, 0, 3, 7, -1, 9, 0, 1, 7, 3, -.001361147966235876, .3911735117435455, .5160670876502991, 0, 2, 9, 5, 3, 4, -1, 10, 5, 1, 4, 3, -.0008152233785949647, .5628911256790161, .49497190117836, 0, 2, 8, 5, 3, 4, -1, 9, 5, 1, 4, 3, -.0006006627227179706, .585359513759613, .4550595879554749, 0, 2, 7, 6, 6, 1, -1, 9, 6, 2, 1, 3, .0004971551825292408, .4271470010280609, .5443599224090576, 0, 3, 7, 14, 4, 4, -1, 7, 14, 2, 2, 2, 9, 16, 2, 2, 2, .0023475370835512877, .5143110752105713, .3887656927108765, 0, 3, 13, 14, 4, 6, -1, 15, 14, 2, 3, 2, 13, 17, 2, 3, 2, -.008926156908273697, .6044502258300781, .497172087430954, 0, 2, 7, 8, 1, 8, -1, 7, 12, 1, 4, 2, -.013919910416007, .2583160996437073, .5000367760658264, 0, 3, 16, 0, 2, 8, -1, 17, 0, 1, 4, 2, 16, 4, 1, 4, 2, .0010209949687123299, .4857374131679535, .5560358166694641, 0, 3, 2, 0, 2, 8, -1, 2, 0, 1, 4, 2, 3, 4, 1, 4, 2, -.0027441629208624363, .5936884880065918, .464577704668045, 0, 2, 6, 1, 14, 3, -1, 6, 2, 14, 1, 3, -.0162001308053732, .3163014948368073, .5193495154380798, 0, 2, 7, 9, 3, 10, -1, 7, 14, 3, 5, 2, .004333198070526123, .5061224102973938, .3458878993988037, 0, 2, 9, 14, 2, 2, -1, 9, 15, 2, 1, 2, .0005849793087691069, .4779017865657806, .5870177745819092, 0, 2, 7, 7, 6, 8, -1, 7, 11, 6, 4, 2, -.0022466450463980436, .4297851026058197, .5374773144721985, 0, 2, 9, 7, 3, 6, -1, 9, 10, 3, 3, 2, .0023146099410951138, .5438671708106995, .4640969932079315, 0, 2, 7, 13, 3, 3, -1, 7, 14, 3, 1, 3, .008767912164330482, .472689300775528, .6771789789199829, 0, 2, 9, 9, 2, 2, -1, 9, 10, 2, 1, 2, -.00022448020172305405, .4229173064231873, .5428048968315125, 0, 2, 0, 1, 18, 2, -1, 6, 1, 6, 2, 3, -.007433602120727301, .6098880767822266, .4683673977851868, 0, 2, 7, 1, 6, 14, -1, 7, 8, 6, 7, 2, -.0023189240600913763, .5689436793327332, .4424242079257965, 0, 2, 1, 9, 18, 1, -1, 7, 9, 6, 1, 3, -.0021042178850620985, .3762221038341522, .5187087059020996, 0, 2, 9, 7, 2, 2, -1, 9, 7, 1, 2, 2, .000460348412161693, .4699405133724213, .5771207213401794, 0, 2, 9, 3, 2, 9, -1, 10, 3, 1, 9, 2, .0010547629790380597, .4465216994285584, .5601701736450195, 0, 2, 18, 14, 2, 3, -1, 18, 15, 2, 1, 3, .0008714881842024624, .544980525970459, .3914709091186523, 0, 2, 7, 11, 3, 1, -1, 8, 11, 1, 1, 3, .00033364820410497487, .4564009010791779, .5645738840103149, 0, 2, 10, 8, 3, 4, -1, 11, 8, 1, 4, 3, -.0014853250468149781, .5747377872467041, .4692778885364533, 0, 2, 7, 14, 3, 6, -1, 8, 14, 1, 6, 3, .0030251620337367058, .5166196823120117, .3762814104557037, 0, 2, 10, 8, 3, 4, -1, 11, 8, 1, 4, 3, .005028074141591787, .5002111792564392, .6151527166366577, 0, 2, 7, 8, 3, 4, -1, 8, 8, 1, 4, 3, -.0005816451157443225, .5394598245620728, .4390751123428345, 0, 2, 7, 9, 6, 9, -1, 7, 12, 6, 3, 3, .0451415292918682, .5188326835632324, .206303596496582, 0, 2, 0, 14, 2, 3, -1, 0, 15, 2, 1, 3, -.001079562003724277, .3904685080051422, .5137907266616821, 0, 2, 11, 12, 1, 2, -1, 11, 13, 1, 1, 2, .00015995999274309725, .4895322918891907, .5427504181861877, 0, 2, 4, 3, 8, 3, -1, 8, 3, 4, 3, 2, -.0193592701107264, .6975228786468506, .4773507118225098, 0, 2, 0, 4, 20, 6, -1, 0, 4, 10, 6, 2, .207255095243454, .5233635902404785, .3034991919994354, 0, 2, 9, 14, 1, 3, -1, 9, 15, 1, 1, 3, -.00041953290929086506, .5419396758079529, .4460186064243317, 0, 2, 8, 14, 4, 3, -1, 8, 15, 4, 1, 3, .0022582069505006075, .4815764129161835, .6027408838272095, 0, 2, 0, 15, 14, 4, -1, 0, 17, 14, 2, 2, -.0067811207845807076, .3980278968811035, .5183305740356445, 0, 2, 1, 14, 18, 6, -1, 1, 17, 18, 3, 2, .0111543098464608, .543123185634613, .4188759922981262, 0, 3, 0, 0, 10, 6, -1, 0, 0, 5, 3, 2, 5, 3, 5, 3, 2, .0431624315679073, .4738228023052216, .6522961258888245])
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t, e) {
        var r, r, o = n(268),
        i = n.n(o),
        a = n(822),
        s = n.n(a),
        c = n(163),
        u = n.n(c); !
        function(r) {
            if ("object" === ("undefined" == typeof exports ? "undefined": u()(exports)) && void 0 !== e) e.exports = r();
            else if ("function" == typeof define && n(837)) define([], r);
            else {
                var o;
                o = "undefined" != typeof window ? window: void 0 !== t ? t: "undefined" != typeof self ? self: this,
                o.html2canvas = r()
            }
        } (function() {
            var e;
            return function t(e, n, o) {
                function i(s, c) {
                    if (!n[s]) {
                        if (!e[s]) {
                            var u = "function" == typeof r && r;
                            if (!c && u) return r(s, !0);
                            if (a) return a(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND",
                            l
                        }
                        var f = n[s] = {
                            exports: {}
                        };
                        e[s][0].call(f.exports,
                        function(t) {
                            var n = e[s][1][t];
                            return i(n || t)
                        },
                        f, f.exports, t, e, n, o)
                    }
                    return n[s].exports
                }
                for (var a = "function" == typeof r && r,
                s = 0; s < o.length; s++) i(o[s]);
                return i
            } ({
                1 : [function(n, r, o) { (function(t) { !
                        function(n) {
                            function i(t) {
                                throw new RangeError(D[t])
                            }
                            function a(t, e) {
                                for (var n = t.length,
                                r = []; n--;) r[n] = e(t[n]);
                                return r
                            }
                            function s(t, e) {
                                var n = t.split("@"),
                                r = "";
                                return n.length > 1 && (r = n[0] + "@", t = n[1]),
                                t = t.replace(P, "."),
                                r + a(t.split("."), e).join(".")
                            }
                            function c(t) {
                                for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++),
                                e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
                                return r
                            }
                            function l(t) {
                                return a(t,
                                function(t) {
                                    var e = "";
                                    return t > 65535 && (t -= 65536, e += B(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t),
                                    e += B(t)
                                }).join("")
                            }
                            function f(t) {
                                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : E
                            }
                            function h(t, e) {
                                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                            }
                            function p(t, e, n) {
                                var r = 0;
                                for (t = n ? R(t / M) : t >> 1, t += R(t / e); t > N * O >> 1; r += E) t = R(t / N);
                                return R(r + (N + 1) * t / (t + _))
                            }
                            function d(t) {
                                var e, n, r, o, a, s, c, u, h, d, g = [],
                                y = t.length,
                                v = 0,
                                m = j,
                                b = I;
                                for (n = t.lastIndexOf(C), n < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && i("not-basic"),
                                g.push(t.charCodeAt(r));
                                for (o = n > 0 ? n + 1 : 0; o < y;) {
                                    for (a = v, s = 1, c = E; o >= y && i("invalid-input"), u = f(t.charCodeAt(o++)), (u >= E || u > R((S - v) / s)) && i("overflow"), v += u * s, h = c <= b ? T: c >= b + O ? O: c - b, !(u < h); c += E) d = E - h,
                                    s > R(S / d) && i("overflow"),
                                    s *= d;
                                    e = g.length + 1,
                                    b = p(v - a, e, 0 == a),
                                    R(v / e) > S - m && i("overflow"),
                                    m += R(v / e),
                                    v %= e,
                                    g.splice(v++, 0, m)
                                }
                                return l(g)
                            }
                            function g(t) {
                                var e, n, r, o, a, s, u, l, f, d, g, y, v, m, b, w = [];
                                for (t = c(t), y = t.length, e = j, n = 0, a = I, s = 0; s < y; ++s)(g = t[s]) < 128 && w.push(B(g));
                                for (r = o = w.length, o && w.push(C); r < y;) {
                                    for (u = S, s = 0; s < y; ++s)(g = t[s]) >= e && g < u && (u = g);
                                    for (v = r + 1, u - e > R((S - n) / v) && i("overflow"), n += (u - e) * v, e = u, s = 0; s < y; ++s) if (g = t[s], g < e && ++n > S && i("overflow"), g == e) {
                                        for (l = n, f = E; d = f <= a ? T: f >= a + O ? O: f - a, !(l < d); f += E) b = l - d,
                                        m = E - d,
                                        w.push(B(h(d + b % m, 0))),
                                        l = R(b / m);
                                        w.push(B(h(l, 0))),
                                        a = p(n, v, r == o),
                                        n = 0,
                                        ++r
                                    }++n,
                                    ++e
                                }
                                return w.join("")
                            }
                            function y(t) {
                                return s(t,
                                function(t) {
                                    return A.test(t) ? d(t.slice(4).toLowerCase()) : t
                                })
                            }
                            function v(t) {
                                return s(t,
                                function(t) {
                                    return L.test(t) ? "xn--" + g(t) : t
                                })
                            }
                            var m = "object" == (void 0 === o ? "undefined": u()(o)) && o && !o.nodeType && o,
                            b = "object" == (void 0 === r ? "undefined": u()(r)) && r && !r.nodeType && r,
                            w = "object" == (void 0 === t ? "undefined": u()(t)) && t;
                            w.global !== w && w.window !== w && w.self !== w || (n = w);
                            var x, k, S = 2147483647,
                            E = 36,
                            T = 1,
                            O = 26,
                            _ = 38,
                            M = 700,
                            I = 72,
                            j = 128,
                            C = "-",
                            A = /^xn--/,
                            L = /[^\x20-\x7E]/,
                            P = /[\x2E\u3002\uFF0E\uFF61]/g,
                            D = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            },
                            N = E - T,
                            R = Math.floor,
                            B = String.fromCharCode;
                            if (x = {
                                version: "1.3.2",
                                ucs2: {
                                    decode: c,
                                    encode: l
                                },
                                decode: d,
                                encode: g,
                                toASCII: v,
                                toUnicode: y
                            },
                            "function" == typeof e && "object" == u()(e.amd) && e.amd) e("punycode",
                            function() {
                                return x
                            });
                            else if (m && b) if (r.exports == m) b.exports = x;
                            else for (k in x) x.hasOwnProperty(k) && (m[k] = x[k]);
                            else n.punycode = x
                        } (this)
                    }).call(this, void 0 !== t ? t: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
                },
                {}],
                2 : [function(t, e, n) {
                    function r(t, e, n) { ! t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
                    }
                    function o(t, e) {
                        try {
                            e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                        } catch(e) {
                            c("Unable to copy canvas content from", t, e)
                        }
                    }
                    function i(t, e) {
                        for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), r = t.firstChild; r;) ! 0 !== e && 1 === r.nodeType && "SCRIPT" === r.nodeName || n.appendChild(i(r, e)),
                        r = r.nextSibling;
                        return 1 === t.nodeType && (n._scrollTop = t.scrollTop, n._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? o(t, n) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (n.value = t.value)),
                        n
                    }
                    function a(t) {
                        if (1 === t.nodeType) {
                            t.scrollTop = t._scrollTop,
                            t.scrollLeft = t._scrollLeft;
                            for (var e = t.firstChild; e;) a(e),
                            e = e.nextSibling
                        }
                    }
                    var c = t("./log");
                    e.exports = function(t, e, n, o, c, u, l) {
                        var f = i(t.documentElement, c.javascriptEnabled),
                        h = e.createElement("iframe");
                        return h.className = "html2canvas-container",
                        h.style.visibility = "hidden",
                        h.style.position = "fixed",
                        h.style.left = "-10000px",
                        h.style.top = "0px",
                        h.style.border = "0",
                        h.width = n,
                        h.height = o,
                        h.scrolling = "no",
                        e.body.appendChild(h),
                        new s.a(function(e) {
                            var n = h.contentWindow.document;
                            h.contentWindow.onload = h.onload = function() {
                                var t = setInterval(function() {
                                    n.body.childNodes.length > 0 && (a(n.documentElement), clearInterval(t), "view" === c.type && (h.contentWindow.scrollTo(u, l), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || h.contentWindow.scrollY === l && h.contentWindow.scrollX === u || (n.documentElement.style.top = -l + "px", n.documentElement.style.left = -u + "px", n.documentElement.style.position = "absolute")), e(h))
                                },
                                50)
                            },
                            n.open(),
                            n.write("<!DOCTYPE html><html></html>"),
                            r(t, u, l),
                            n.replaceChild(n.adoptNode(f), n.documentElement),
                            n.close()
                        })
                    }
                },
                {
                    "./log": 13
                }],
                3 : [function(t, e, n) {
                    function r(t) {
                        this.r = 0,
                        this.g = 0,
                        this.b = 0,
                        this.a = null;
                        this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
                    }
                    r.prototype.darken = function(t) {
                        var e = 1 - t;
                        return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
                    },
                    r.prototype.isTransparent = function() {
                        return 0 === this.a
                    },
                    r.prototype.isBlack = function() {
                        return 0 === this.r && 0 === this.g && 0 === this.b
                    },
                    r.prototype.fromArray = function(t) {
                        return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])),
                        Array.isArray(t)
                    };
                    var o = /^#([a-f0-9]{3})$/i;
                    r.prototype.hex3 = function(t) {
                        var e = null;
                        return null !== (e = t.match(o)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)),
                        null !== e
                    };
                    var i = /^#([a-f0-9]{6})$/i;
                    r.prototype.hex6 = function(t) {
                        var e = null;
                        return null !== (e = t.match(i)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)),
                        null !== e
                    };
                    var a = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                    r.prototype.rgb = function(t) {
                        var e = null;
                        return null !== (e = t.match(a)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])),
                        null !== e
                    };
                    var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                    r.prototype.rgba = function(t) {
                        var e = null;
                        return null !== (e = t.match(s)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])),
                        null !== e
                    },
                    r.prototype.toString = function() {
                        return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")": "rgb(" + [this.r, this.g, this.b].join(",") + ")"
                    },
                    r.prototype.namedColor = function(t) {
                        t = t.toLowerCase();
                        var e = c[t];
                        if (e) this.r = e[0],
                        this.g = e[1],
                        this.b = e[2];
                        else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0,
                        !0;
                        return !! e
                    },
                    r.prototype.isColor = !0;
                    var c = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    };
                    e.exports = r
                },
                {}],
                4 : [function(t, n, r) {
                    function o(t, e) {
                        var n = T++;
                        if (e = e || {},
                        e.logging && (b.options.logging = !0, b.options.start = Date.now()), e.async = void 0 === e.async || e.async, e.allowTaint = void 0 !== e.allowTaint && e.allowTaint, e.removeContainer = void 0 === e.removeContainer || e.removeContainer, e.javascriptEnabled = void 0 !== e.javascriptEnabled && e.javascriptEnabled, e.imageTimeout = void 0 === e.imageTimeout ? 1e4: e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer: g, e.strict = !!e.strict, "string" == typeof t) {
                            if ("string" != typeof e.proxy) return s.a.reject("Proxy must be used when rendering url");
                            var r = null != e.width ? e.width: window.innerWidth,
                            o = null != e.height ? e.height: window.innerHeight;
                            return k(p(t), e.proxy, document, r, o, e).then(function(t) {
                                return c(t.contentWindow.document.documentElement, t, e, r, o)
                            })
                        }
                        var i = (void 0 === t ? [document.documentElement] : t.length ? t: [t])[0];
                        return i.setAttribute(E + n, n),
                        a(i.ownerDocument, e, i.ownerDocument.defaultView.innerWidth, i.ownerDocument.defaultView.innerHeight, n).then(function(t) {
                            return "function" == typeof e.onrendered && (b("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)),
                            t
                        })
                    }
                    function a(t, e, n, r, o) {
                        return x(t, t, n, r, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(i) {
                            b("Document cloned");
                            var a = E + o,
                            u = "[" + a + "='" + o + "']";
                            t.querySelector(u).removeAttribute(a);
                            var l = i.contentWindow,
                            f = l.document.querySelector(u);
                            return ("function" == typeof e.onclone ? s.a.resolve(e.onclone(l.document)) : s.a.resolve(!0)).then(function() {
                                return c(f, i, e, n, r)
                            })
                        })
                    }
                    function c(t, e, n, r, o) {
                        var i = e.contentWindow,
                        a = new d(i.document),
                        s = new y(n, a),
                        c = S(t),
                        p = "view" === n.type ? r: f(i.document),
                        g = "view" === n.type ? o: h(i.document),
                        m = new n.renderer(p, g, s, n, document);
                        return new v(t, m, a, s, n).ready.then(function() {
                            b("Finished rendering");
                            var r;
                            return r = "view" === n.type ? l(m.canvas, {
                                width: m.canvas.width,
                                height: m.canvas.height,
                                top: 0,
                                left: 0,
                                x: 0,
                                y: 0
                            }) : t === i.document.body || t === i.document.documentElement || null != n.canvas ? m.canvas: l(m.canvas, {
                                width: null != n.width ? n.width: c.width,
                                height: null != n.height ? n.height: c.height,
                                top: c.top,
                                left: c.left,
                                x: 0,
                                y: 0
                            }),
                            u(e, n),
                            r
                        })
                    }
                    function u(t, e) {
                        e.removeContainer && (t.parentNode.removeChild(t), b("Cleaned up container"))
                    }
                    function l(t, e) {
                        var n = document.createElement("canvas"),
                        r = Math.min(t.width - 1, Math.max(0, e.left)),
                        o = Math.min(t.width, Math.max(1, e.left + e.width)),
                        i = Math.min(t.height - 1, Math.max(0, e.top)),
                        a = Math.min(t.height, Math.max(1, e.top + e.height));
                        n.width = e.width,
                        n.height = e.height;
                        var s = o - r,
                        c = a - i;
                        return b("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", s, "height:", c),
                        b("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", i),
                        n.getContext("2d").drawImage(t, r, i, s, c, e.x, e.y, s, c),
                        n
                    }
                    function f(t) {
                        return Math.max(4 * Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), 4 * Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), 4 * Math.max(t.body.clientWidth, t.documentElement.clientWidth))
                    }
                    function h(t) {
                        return Math.max(4 * Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), 4 * Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), 4 * Math.max(t.body.clientHeight, t.documentElement.clientHeight))
                    }
                    function p(t) {
                        var e = document.createElement("a");
                        return e.href = t,
                        e.href = e.href,
                        e
                    }
                    var d = t("./support"),
                    g = t("./renderers/canvas"),
                    y = t("./imageloader"),
                    v = t("./nodeparser"),
                    m = t("./nodecontainer"),
                    b = t("./log"),
                    w = t("./utils"),
                    x = t("./clone"),
                    k = t("./proxy").loadUrlDocument,
                    S = w.getBounds,
                    E = "data-html2canvas-node",
                    T = 0;
                    o.CanvasRenderer = g,
                    o.NodeContainer = m,
                    o.log = b,
                    o.utils = w;
                    var O = "undefined" == typeof document || "function" != typeof i.a || "function" != typeof document.createElement("canvas").getContext ?
                    function() {
                        return s.a.reject("No canvas support")
                    }: o;
                    n.exports = O,
                    "function" == typeof e && e.amd && e("html2canvas", [],
                    function() {
                        return O
                    })
                },
                {
                    "./clone": 2,
                    "./imageloader": 11,
                    "./log": 13,
                    "./nodecontainer": 14,
                    "./nodeparser": 15,
                    "./proxy": 16,
                    "./renderers/canvas": 20,
                    "./support": 22,
                    "./utils": 26
                }],
                5 : [function(t, e, n) {
                    function r(t) {
                        if (this.src = t, o("DummyImageContainer for", t), !this.promise || !this.image) {
                            o("Initiating DummyImageContainer"),
                            r.prototype.image = new Image;
                            var e = this.image;
                            r.prototype.promise = new s.a(function(t, n) {
                                e.onload = t,
                                e.onerror = n,
                                e.src = i(),
                                !0 === e.complete && t(e)
                            })
                        }
                    }
                    var o = t("./log"),
                    i = t("./utils").smallImage;
                    e.exports = r
                },
                {
                    "./log": 13,
                    "./utils": 26
                }],
                6 : [function(t, e, n) {
                    function r(t, e) {
                        var n, r, i = document.createElement("div"),
                        a = document.createElement("img"),
                        s = document.createElement("span");
                        i.style.visibility = "hidden",
                        i.style.fontFamily = t,
                        i.style.fontSize = e,
                        i.style.margin = 0,
                        i.style.padding = 0,
                        document.body.appendChild(i),
                        a.src = o(),
                        a.width = 1,
                        a.height = 1,
                        a.style.margin = 0,
                        a.style.padding = 0,
                        a.style.verticalAlign = "baseline",
                        s.style.fontFamily = t,
                        s.style.fontSize = e,
                        s.style.margin = 0,
                        s.style.padding = 0,
                        s.appendChild(document.createTextNode("Hidden Text")),
                        i.appendChild(s),
                        i.appendChild(a),
                        n = a.offsetTop - s.offsetTop + 1,
                        i.removeChild(s),
                        i.appendChild(document.createTextNode("Hidden Text")),
                        i.style.lineHeight = "normal",
                        a.style.verticalAlign = "super",
                        r = a.offsetTop - i.offsetTop + 1,
                        document.body.removeChild(i),
                        this.baseline = n,
                        this.lineWidth = 1,
                        this.middle = r
                    }
                    var o = t("./utils").smallImage;
                    e.exports = r
                },
                {
                    "./utils": 26
                }],
                7 : [function(t, e, n) {
                    function r() {
                        this.data = {}
                    }
                    var o = t("./font");
                    r.prototype.getMetrics = function(t, e) {
                        return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new o(t, e)),
                        this.data[t + "-" + e]
                    },
                    e.exports = r
                },
                {
                    "./font": 6
                }],
                8 : [function(t, e, n) {
                    function r(e, n, r) {
                        this.image = null,
                        this.src = e;
                        var o = this,
                        a = i(e);
                        this.promise = (n ? new s.a(function(t) {
                            "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                                t(e)
                            }: t(e)
                        }) : this.proxyLoad(r.proxy, a, r)).then(function(e) {
                            return t("./core")(e.contentWindow.document.documentElement, {
                                type: "view",
                                width: e.width,
                                height: e.height,
                                proxy: r.proxy,
                                javascriptEnabled: r.javascriptEnabled,
                                removeContainer: r.removeContainer,
                                allowTaint: r.allowTaint,
                                imageTimeout: r.imageTimeout / 2
                            })
                        }).then(function(t) {
                            return o.image = t
                        })
                    }
                    var o = t("./utils"),
                    i = o.getBounds,
                    a = t("./proxy").loadUrlDocument;
                    r.prototype.proxyLoad = function(t, e, n) {
                        var r = this.src;
                        return a(r.src, t, r.ownerDocument, e.width, e.height, n)
                    },
                    e.exports = r
                },
                {
                    "./core": 4,
                    "./proxy": 16,
                    "./utils": 26
                }],
                9 : [function(t, e, n) {
                    function r(t) {
                        this.src = t.value,
                        this.colorStops = [],
                        this.type = null,
                        this.x0 = .5,
                        this.y0 = .5,
                        this.x1 = .5,
                        this.y1 = .5,
                        this.promise = s.a.resolve(!0)
                    }
                    r.TYPES = {
                        LINEAR: 1,
                        RADIAL: 2
                    },
                    r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,
                    e.exports = r
                },
                {}],
                10 : [function(t, e, n) {
                    function r(t, e) {
                        this.src = t,
                        this.image = new Image;
                        var n = this;
                        this.tainted = null,
                        this.promise = new s.a(function(r, o) {
                            n.image.onload = r,
                            n.image.onerror = o,
                            e && (n.image.crossOrigin = "anonymous"),
                            n.image.src = t,
                            !0 === n.image.complete && r(n.image)
                        })
                    }
                    e.exports = r
                },
                {}],
                11 : [function(t, e, n) {
                    function r(t, e) {
                        this.link = null,
                        this.options = t,
                        this.support = e,
                        this.origin = this.getOrigin(window.location.href)
                    }
                    var o = t("./log"),
                    i = t("./imagecontainer"),
                    a = t("./dummyimagecontainer"),
                    c = t("./proxyimagecontainer"),
                    u = t("./framecontainer"),
                    l = t("./svgcontainer"),
                    f = t("./svgnodecontainer"),
                    h = t("./lineargradientcontainer"),
                    p = t("./webkitgradientcontainer"),
                    d = t("./utils").bind;
                    r.prototype.findImages = function(t) {
                        var e = [];
                        return t.reduce(function(t, e) {
                            switch (e.node.nodeName) {
                            case "IMG":
                                return t.concat([{
                                    args:
                                    [e.node.src],
                                    method: "url"
                                }]);
                            case "svg":
                            case "IFRAME":
                                return t.concat([{
                                    args:
                                    [e.node],
                                    method: e.node.nodeName
                                }])
                            }
                            return t
                        },
                        []).forEach(this.addImage(e, this.loadImage), this),
                        e
                    },
                    r.prototype.findBackgroundImage = function(t, e) {
                        return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this),
                        t
                    },
                    r.prototype.addImage = function(t, e) {
                        return function(n) {
                            n.args.forEach(function(r) {
                                this.imageExists(t, r) || (t.splice(0, 0, e.call(this, n)), o("Added image #" + t.length, "string" == typeof r ? r.substring(0, 100) : r))
                            },
                            this)
                        }
                    },
                    r.prototype.hasImageBackground = function(t) {
                        return "none" !== t.method
                    },
                    r.prototype.loadImage = function(t) {
                        if ("url" === t.method) {
                            var e = t.args[0];
                            return ! this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new i(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(e) || !0 === this.options.allowTaint || this.isSVG(e) ? new i(e, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new i(e, !0) : this.options.proxy ? new c(e, this.options.proxy) : new a(e) : new l(e)
                        }
                        return "linear-gradient" === t.method ? new h(t) : "gradient" === t.method ? new p(t) : "svg" === t.method ? new f(t.args[0], this.support.svg) : "IFRAME" === t.method ? new u(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new a(t)
                    },
                    r.prototype.isSVG = function(t) {
                        return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t)
                    },
                    r.prototype.imageExists = function(t, e) {
                        return t.some(function(t) {
                            return t.src === e
                        })
                    },
                    r.prototype.isSameOrigin = function(t) {
                        return this.getOrigin(t) === this.origin
                    },
                    r.prototype.getOrigin = function(t) {
                        var e = this.link || (this.link = document.createElement("a"));
                        return e.href = t,
                        e.href = e.href,
                        e.protocol + e.hostname + e.port
                    },
                    r.prototype.getPromise = function(t) {
                        return this.timeout(t, this.options.imageTimeout).
                        catch(function() {
                            return new a(t.src).promise.then(function(e) {
                                t.image = e
                            })
                        })
                    },
                    r.prototype.get = function(t) {
                        var e = null;
                        return this.images.some(function(n) {
                            return (e = n).src === t
                        }) ? e: null
                    },
                    r.prototype.fetch = function(t) {
                        return this.images = t.reduce(d(this.findBackgroundImage, this), this.findImages(t)),
                        this.images.forEach(function(t, e) {
                            t.promise.then(function() {
                                o("Succesfully loaded image #" + (e + 1), t)
                            },
                            function(n) {
                                o("Failed loading image #" + (e + 1), t, n)
                            })
                        }),
                        this.ready = s.a.all(this.images.map(this.getPromise, this)),
                        o("Finished searching images"),
                        this
                    },
                    r.prototype.timeout = function(t, e) {
                        var n, r = s.a.race([t.promise, new s.a(function(r, i) {
                            n = setTimeout(function() {
                                o("Timed out loading image", t),
                                i(t)
                            },
                            e)
                        })]).then(function(t) {
                            return clearTimeout(n),
                            t
                        });
                        return r.
                        catch(function() {
                            clearTimeout(n)
                        }),
                        r
                    },
                    e.exports = r
                },
                {
                    "./dummyimagecontainer": 5,
                    "./framecontainer": 8,
                    "./imagecontainer": 10,
                    "./lineargradientcontainer": 12,
                    "./log": 13,
                    "./proxyimagecontainer": 17,
                    "./svgcontainer": 23,
                    "./svgnodecontainer": 24,
                    "./utils": 26,
                    "./webkitgradientcontainer": 27
                }],
                12 : [function(t, e, n) {
                    function r(t) {
                        o.apply(this, arguments),
                        this.type = o.TYPES.LINEAR;
                        var e = r.REGEXP_DIRECTION.test(t.args[0]) || !o.REGEXP_COLORSTOP.test(t.args[0]);
                        e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
                            switch (t) {
                            case "left":
                                this.x0 = 0,
                                this.x1 = 1;
                                break;
                            case "top":
                                this.y0 = 0,
                                this.y1 = 1;
                                break;
                            case "right":
                                this.x0 = 1,
                                this.x1 = 0;
                                break;
                            case "bottom":
                                this.y0 = 1,
                                this.y1 = 0;
                                break;
                            case "to":
                                var n = this.y0,
                                r = this.x0;
                                this.y0 = this.y1,
                                this.x0 = this.x1,
                                this.x1 = r,
                                this.y1 = n;
                                break;
                            case "center":
                                break;
                            default:
                                var o = .01 * parseFloat(t, 10);
                                if (isNaN(o)) break;
                                0 === e ? (this.y0 = o, this.y1 = 1 - this.y0) : (this.x0 = o, this.x1 = 1 - this.x0)
                            }
                        },
                        this) : (this.y0 = 0, this.y1 = 1),
                        this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                            var e = t.match(o.REGEXP_COLORSTOP),
                            n = +e[2],
                            r = 0 === n ? "%": e[3];
                            return {
                                color: new a(e[1]),
                                stop: "%" === r ? n / 100 : null
                            }
                        }),
                        null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
                        null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
                        this.colorStops.forEach(function(t, e) {
                            null === t.stop && this.colorStops.slice(e).some(function(n, r) {
                                return null !== n.stop && (t.stop = (n.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop, !0)
                            },
                            this)
                        },
                        this)
                    }
                    var o = t("./gradientcontainer"),
                    a = t("./color");
                    r.prototype = i()(o.prototype),
                    r.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,
                    e.exports = r
                },
                {
                    "./color": 3,
                    "./gradientcontainer": 9
                }],
                13 : [function(t, e, n) {
                    var r = function t() {
                        t.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - t.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
                    };
                    r.options = {
                        logging: !1
                    },
                    e.exports = r
                },
                {}],
                14 : [function(t, e, n) {
                    function r(t, e) {
                        this.node = t,
                        this.parent = e,
                        this.stack = null,
                        this.bounds = null,
                        this.borders = null,
                        this.clip = [],
                        this.backgroundClip = [],
                        this.offsetBounds = null,
                        this.visible = null,
                        this.computedStyles = null,
                        this.colors = {},
                        this.styles = {},
                        this.backgroundImages = null,
                        this.transformData = null,
                        this.transformMatrix = null,
                        this.isPseudoElement = !1,
                        this.opacity = null
                    }
                    function o(t) {
                        var e = t.options[t.selectedIndex || 0];
                        return e ? e.text || "": ""
                    }
                    function i(t) {
                        if (t && "matrix" === t[1]) return t[2].split(",").map(function(t) {
                            return parseFloat(t.trim())
                        });
                        if (t && "matrix3d" === t[1]) {
                            var e = t[2].split(",").map(function(t) {
                                return parseFloat(t.trim())
                            });
                            return [e[0], e[1], e[4], e[5], e[12], e[13]]
                        }
                    }
                    function a(t) {
                        return - 1 !== t.toString().indexOf("%")
                    }
                    function s(t) {
                        return t.replace("px", "")
                    }
                    function c(t) {
                        return parseFloat(t)
                    }
                    var u = t("./color"),
                    l = t("./utils"),
                    f = l.getBounds,
                    h = l.parseBackgrounds,
                    p = l.offsetBounds;
                    r.prototype.cloneTo = function(t) {
                        t.visible = this.visible,
                        t.borders = this.borders,
                        t.bounds = this.bounds,
                        t.clip = this.clip,
                        t.backgroundClip = this.backgroundClip,
                        t.computedStyles = this.computedStyles,
                        t.styles = this.styles,
                        t.backgroundImages = this.backgroundImages,
                        t.opacity = this.opacity
                    },
                    r.prototype.getOpacity = function() {
                        return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
                    },
                    r.prototype.assignStack = function(t) {
                        this.stack = t,
                        t.children.push(this)
                    },
                    r.prototype.isElementVisible = function() {
                        return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible: "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
                    },
                    r.prototype.css = function(t) {
                        return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before": ":after") : this.computedStyle(null)),
                        this.styles[t] || (this.styles[t] = this.computedStyles[t])
                    },
                    r.prototype.prefixedCss = function(t) {
                        var e = ["webkit", "moz", "ms", "o"],
                        n = this.css(t);
                        return void 0 === n && e.some(function(e) {
                            return void 0 !== (n = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)))
                        },
                        this),
                        void 0 === n ? null: n
                    },
                    r.prototype.computedStyle = function(t) {
                        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
                    },
                    r.prototype.cssInt = function(t) {
                        var e = parseInt(this.css(t), 10);
                        return isNaN(e) ? 0 : e
                    },
                    r.prototype.color = function(t) {
                        return this.colors[t] || (this.colors[t] = new u(this.css(t)))
                    },
                    r.prototype.cssFloat = function(t) {
                        var e = parseFloat(this.css(t));
                        return isNaN(e) ? 0 : e
                    },
                    r.prototype.fontWeight = function() {
                        var t = this.css("fontWeight");
                        switch (parseInt(t, 10)) {
                        case 401:
                            t = "bold";
                            break;
                        case 400:
                            t = "normal"
                        }
                        return t
                    },
                    r.prototype.parseClip = function() {
                        var t = this.css("clip").match(this.CLIP);
                        return t ? {
                            top: parseInt(t[1], 10),
                            right: parseInt(t[2], 10),
                            bottom: parseInt(t[3], 10),
                            left: parseInt(t[4], 10)
                        }: null
                    },
                    r.prototype.parseBackgroundImages = function() {
                        return this.backgroundImages || (this.backgroundImages = h(this.css("backgroundImage")))
                    },
                    r.prototype.cssList = function(t, e) {
                        var n = (this.css(t) || "").split(",");
                        return n = n[e || 0] || n[0] || "auto",
                        n = n.trim().split(" "),
                        1 === n.length && (n = [n[0], a(n[0]) ? "auto": n[0]]),
                        n
                    },
                    r.prototype.parseBackgroundSize = function(t, e, n) {
                        var r, o, i = this.cssList("backgroundSize", n);
                        if (a(i[0])) r = t.width * parseFloat(i[0]) / 100;
                        else {
                            if (/contain|cover/.test(i[0])) {
                                var s = t.width / t.height,
                                c = e.width / e.height;
                                return s < c ^ "contain" === i[0] ? {
                                    width: t.height * c,
                                    height: t.height
                                }: {
                                    width: t.width,
                                    height: t.width / c
                                }
                            }
                            r = parseInt(i[0], 10)
                        }
                        return o = "auto" === i[0] && "auto" === i[1] ? e.height: "auto" === i[1] ? r / e.width * e.height: a(i[1]) ? t.height * parseFloat(i[1]) / 100 : parseInt(i[1], 10),
                        "auto" === i[0] && (r = o / e.height * e.width),
                        {
                            width: r,
                            height: o
                        }
                    },
                    r.prototype.parseBackgroundPosition = function(t, e, n, r) {
                        var o, i, s = this.cssList("backgroundPosition", n);
                        return o = a(s[0]) ? (t.width - (r || e).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10),
                        i = "auto" === s[1] ? o / e.width * e.height: a(s[1]) ? (t.height - (r || e).height) * parseFloat(s[1]) / 100 : parseInt(s[1], 10),
                        "auto" === s[0] && (o = i / e.height * e.width),
                        {
                            left: o,
                            top: i
                        }
                    },
                    r.prototype.parseBackgroundRepeat = function(t) {
                        return this.cssList("backgroundRepeat", t)[0]
                    },
                    r.prototype.parseTextShadows = function() {
                        var t = this.css("textShadow"),
                        e = [];
                        if (t && "none" !== t) for (var n = t.match(this.TEXT_SHADOW_PROPERTY), r = 0; n && r < n.length; r++) {
                            var o = n[r].match(this.TEXT_SHADOW_VALUES);
                            e.push({
                                color: new u(o[0]),
                                offsetX: o[1] ? parseFloat(o[1].replace("px", "")) : 0,
                                offsetY: o[2] ? parseFloat(o[2].replace("px", "")) : 0,
                                blur: o[3] ? o[3].replace("px", "") : 0
                            })
                        }
                        return e
                    },
                    r.prototype.parseTransform = function() {
                        if (!this.transformData) if (this.hasTransform()) {
                            var t = this.parseBounds(),
                            e = this.prefixedCss("transformOrigin").split(" ").map(s).map(c);
                            e[0] += t.left,
                            e[1] += t.top,
                            this.transformData = {
                                origin: e,
                                matrix: this.parseTransformMatrix()
                            }
                        } else this.transformData = {
                            origin: [0, 0],
                            matrix: [1, 0, 0, 1, 0, 0]
                        };
                        return this.transformData
                    },
                    r.prototype.parseTransformMatrix = function() {
                        if (!this.transformMatrix) {
                            var t = this.prefixedCss("transform"),
                            e = t ? i(t.match(this.MATRIX_PROPERTY)) : null;
                            this.transformMatrix = e || [1, 0, 0, 1, 0, 0]
                        }
                        return this.transformMatrix
                    },
                    r.prototype.parseBounds = function() {
                        return this.bounds || (this.bounds = this.hasTransform() ? p(this.node) : f(this.node))
                    },
                    r.prototype.hasTransform = function() {
                        return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
                    },
                    r.prototype.getValue = function() {
                        var t = this.node.value || "";
                        return "SELECT" === this.node.tagName ? t = o(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")),
                        0 === t.length ? this.node.placeholder || "": t
                    },
                    r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/,
                    r.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
                    r.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
                    r.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,
                    e.exports = r
                },
                {
                    "./color": 3,
                    "./utils": 26
                }],
                15 : [function(t, e, n) {
                    function r(t, e, n, r, o) {
                        U("Starting NodeParser"),
                        this.renderer = e,
                        this.options = o,
                        this.range = null,
                        this.support = n,
                        this.renderQueue = [],
                        this.stack = new q(!0, 1, t.ownerDocument, null);
                        var i = new H(t, null);
                        if (o.background && e.rectangle(0, 0, e.width, e.height, new Q(o.background)), t === t.ownerDocument.documentElement) {
                            var a = new H(i.color("backgroundColor").isTransparent() ? t.ownerDocument.body: t.ownerDocument.documentElement, null);
                            e.rectangle(0, 0, e.width, e.height, a.color("backgroundColor"))
                        }
                        i.visibile = i.isElementVisible(),
                        this.createPseudoHideStyles(t.ownerDocument),
                        this.disableAnimations(t.ownerDocument),
                        this.nodes = N([i].concat(this.getChildren(i)).filter(function(t) {
                            return t.visible = t.isElementVisible()
                        }).map(this.getPseudoElements, this)),
                        this.fontMetrics = new Y,
                        U("Fetched nodes, total:", this.nodes.length),
                        U("Calculate overflow clips"),
                        this.calculateOverflowClips(),
                        U("Start fetching images"),
                        this.images = r.fetch(this.nodes.filter(M)),
                        this.ready = this.images.ready.then(J(function() {
                            return U("Images loaded, starting parsing"),
                            U("Creating stacking contexts"),
                            this.createStackingContexts(),
                            U("Sorting stacking contexts"),
                            this.sortStackingContexts(this.stack),
                            this.parse(this.stack),
                            U("Render queue created with " + this.renderQueue.length + " items"),
                            new s.a(J(function(t) {
                                o.async ? "function" == typeof o.async ? o.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
                            },
                            this))
                        },
                        this))
                    }
                    function o(t) {
                        return t.parent && t.parent.clip.length
                    }
                    function i(t) {
                        return t.replace(/(\-[a-z])/g,
                        function(t) {
                            return t.toUpperCase().replace("-", "")
                        })
                    }
                    function a() {}
                    function c(t, e, n, r) {
                        return t.map(function(o, i) {
                            if (o.width > 0) {
                                var a = e.left,
                                s = e.top,
                                c = e.width,
                                u = e.height - t[2].width;
                                switch (i) {
                                case 0:
                                    u = t[0].width,
                                    o.args = h({
                                        c1: [a, s],
                                        c2: [a + c, s],
                                        c3: [a + c - t[1].width, s + u],
                                        c4: [a + t[3].width, s + u]
                                    },
                                    r[0], r[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                                    break;
                                case 1:
                                    a = e.left + e.width - t[1].width,
                                    c = t[1].width,
                                    o.args = h({
                                        c1: [a + c, s],
                                        c2: [a + c, s + u + t[2].width],
                                        c3: [a, s + u],
                                        c4: [a, s + t[0].width]
                                    },
                                    r[1], r[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                                    break;
                                case 2:
                                    s = s + e.height - t[2].width,
                                    u = t[2].width,
                                    o.args = h({
                                        c1: [a + c, s + u],
                                        c2: [a, s + u],
                                        c3: [a + t[3].width, s],
                                        c4: [a + c - t[3].width, s]
                                    },
                                    r[2], r[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                                    break;
                                case 3:
                                    c = t[3].width,
                                    o.args = h({
                                        c1: [a, s + u + t[2].width],
                                        c2: [a, s],
                                        c3: [a + c, s + t[0].width],
                                        c4: [a + c, s + u]
                                    },
                                    r[3], r[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                                }
                            }
                            return o
                        })
                    }
                    function u(t, e, n, r) {
                        var o = (Math.sqrt(2) - 1) / 3 * 4,
                        i = n * o,
                        a = r * o,
                        s = t + n,
                        c = e + r;
                        return {
                            topLeft: f({
                                x: t,
                                y: c
                            },
                            {
                                x: t,
                                y: c - a
                            },
                            {
                                x: s - i,
                                y: e
                            },
                            {
                                x: s,
                                y: e
                            }),
                            topRight: f({
                                x: t,
                                y: e
                            },
                            {
                                x: t + i,
                                y: e
                            },
                            {
                                x: s,
                                y: c - a
                            },
                            {
                                x: s,
                                y: c
                            }),
                            bottomRight: f({
                                x: s,
                                y: e
                            },
                            {
                                x: s,
                                y: e + a
                            },
                            {
                                x: t + i,
                                y: c
                            },
                            {
                                x: t,
                                y: c
                            }),
                            bottomLeft: f({
                                x: s,
                                y: c
                            },
                            {
                                x: s - i,
                                y: c
                            },
                            {
                                x: t,
                                y: e + a
                            },
                            {
                                x: t,
                                y: e
                            })
                        }
                    }
                    function l(t, e, n) {
                        var r = t.left,
                        o = t.top,
                        i = t.width,
                        a = t.height,
                        s = e[0][0] < i / 2 ? e[0][0] : i / 2,
                        c = e[0][1] < a / 2 ? e[0][1] : a / 2,
                        l = e[1][0] < i / 2 ? e[1][0] : i / 2,
                        f = e[1][1] < a / 2 ? e[1][1] : a / 2,
                        h = e[2][0] < i / 2 ? e[2][0] : i / 2,
                        p = e[2][1] < a / 2 ? e[2][1] : a / 2,
                        d = e[3][0] < i / 2 ? e[3][0] : i / 2,
                        g = e[3][1] < a / 2 ? e[3][1] : a / 2,
                        y = i - l,
                        v = a - p,
                        m = i - h,
                        b = a - g;
                        return {
                            topLeftOuter: u(r, o, s, c).topLeft.subdivide(.5),
                            topLeftInner: u(r + n[3].width, o + n[0].width, Math.max(0, s - n[3].width), Math.max(0, c - n[0].width)).topLeft.subdivide(.5),
                            topRightOuter: u(r + y, o, l, f).topRight.subdivide(.5),
                            topRightInner: u(r + Math.min(y, i + n[3].width), o + n[0].width, y > i + n[3].width ? 0 : l - n[3].width, f - n[0].width).topRight.subdivide(.5),
                            bottomRightOuter: u(r + m, o + v, h, p).bottomRight.subdivide(.5),
                            bottomRightInner: u(r + Math.min(m, i - n[3].width), o + Math.min(v, a + n[0].width), Math.max(0, h - n[1].width), p - n[2].width).bottomRight.subdivide(.5),
                            bottomLeftOuter: u(r, o + b, d, g).bottomLeft.subdivide(.5),
                            bottomLeftInner: u(r + n[3].width, o + b, Math.max(0, d - n[3].width), g - n[2].width).bottomLeft.subdivide(.5)
                        }
                    }
                    function f(t, e, n, r) {
                        var o = function(t, e, n) {
                            return {
                                x: t.x + (e.x - t.x) * n,
                                y: t.y + (e.y - t.y) * n
                            }
                        };
                        return {
                            start: t,
                            startControl: e,
                            endControl: n,
                            end: r,
                            subdivide: function(i) {
                                var a = o(t, e, i),
                                s = o(e, n, i),
                                c = o(n, r, i),
                                u = o(a, s, i),
                                l = o(s, c, i),
                                h = o(u, l, i);
                                return [f(t, a, u, h), f(h, l, c, r)]
                            },
                            curveTo: function(t) {
                                t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y])
                            },
                            curveToReversed: function(r) {
                                r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
                            }
                        }
                    }
                    function h(t, e, n, r, o, i, a) {
                        var s = [];
                        return e[0] > 0 || e[1] > 0 ? (s.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(s)) : s.push(["line", t.c1[0], t.c1[1]]),
                        n[0] > 0 || n[1] > 0 ? (s.push(["line", i[0].start.x, i[0].start.y]), i[0].curveTo(s), s.push(["line", a[0].end.x, a[0].end.y]), a[0].curveToReversed(s)) : (s.push(["line", t.c2[0], t.c2[1]]), s.push(["line", t.c3[0], t.c3[1]])),
                        e[0] > 0 || e[1] > 0 ? (s.push(["line", o[1].end.x, o[1].end.y]), o[1].curveToReversed(s)) : s.push(["line", t.c4[0], t.c4[1]]),
                        s
                    }
                    function p(t, e, n, r, o, i, a) {
                        e[0] > 0 || e[1] > 0 ? (t.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(t), r[1].curveTo(t)) : t.push(["line", i, a]),
                        (n[0] > 0 || n[1] > 0) && t.push(["line", o[0].start.x, o[0].start.y])
                    }
                    function d(t) {
                        return t.cssInt("zIndex") < 0
                    }
                    function g(t) {
                        return t.cssInt("zIndex") > 0
                    }
                    function y(t) {
                        return 0 === t.cssInt("zIndex")
                    }
                    function v(t) {
                        return - 1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"))
                    }
                    function m(t) {
                        return t instanceof q
                    }
                    function b(t) {
                        return t.node.data.trim().length > 0
                    }
                    function w(t) {
                        return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
                    }
                    function x(t) {
                        return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                            var n = t.css("border" + e + "Radius"),
                            r = n.split(" ");
                            return r.length <= 1 && (r[1] = r[0]),
                            r.map(L)
                        })
                    }
                    function k(t) {
                        return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
                    }
                    function S(t) {
                        return "auto" !== ( - 1 !== ["absolute", "relative", "fixed"].indexOf(t.css("position")) ? t.css("zIndex") : "auto")
                    }
                    function E(t) {
                        return "static" !== t.css("position")
                    }
                    function T(t) {
                        return "none" !== t.css("float")
                    }
                    function O(t) {
                        return - 1 !== ["inline-block", "inline-table"].indexOf(t.css("display"))
                    }
                    function _(t) {
                        var e = this;
                        return function() {
                            return ! t.apply(e, arguments)
                        }
                    }
                    function M(t) {
                        return t.node.nodeType === Node.ELEMENT_NODE
                    }
                    function I(t) {
                        return ! 0 === t.isPseudoElement
                    }
                    function j(t) {
                        return t.node.nodeType === Node.TEXT_NODE
                    }
                    function C(t) {
                        return function(e, n) {
                            return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length)
                        }
                    }
                    function A(t) {
                        return t.getOpacity() < 1
                    }
                    function L(t) {
                        return parseInt(t, 10)
                    }
                    function P(t) {
                        return t.width
                    }
                    function D(t) {
                        return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName)
                    }
                    function N(t) {
                        return [].concat.apply([], t)
                    }
                    function R(t) {
                        var e = t.substr(0, 1);
                        return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
                    }
                    function B(t) {
                        for (var e, n = [], r = 0, o = !1; t.length;) F(t[r]) === o ? (e = t.splice(0, r), e.length && n.push(G.ucs2.encode(e)), o = !o, r = 0) : r++,
                        r >= t.length && (e = t.splice(0, r), e.length && n.push(G.ucs2.encode(e)));
                        return n
                    }
                    function F(t) {
                        return - 1 !== [32, 13, 10, 9, 45].indexOf(t)
                    }
                    function z(t) {
                        return /[^\u0000-\u00ff]/.test(t)
                    }
                    var U = t("./log"),
                    G = t("punycode"),
                    H = t("./nodecontainer"),
                    V = t("./textcontainer"),
                    W = t("./pseudoelementcontainer"),
                    Y = t("./fontmetrics"),
                    Q = t("./color"),
                    q = t("./stackingcontext"),
                    K = t("./utils"),
                    J = K.bind,
                    X = K.getBounds,
                    Z = K.parseBackgrounds,
                    $ = K.offsetBounds;
                    r.prototype.calculateOverflowClips = function() {
                        this.nodes.forEach(function(t) {
                            if (M(t)) {
                                I(t) && t.appendToDOM(),
                                t.borders = this.parseBorders(t);
                                var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                                n = t.parseClip();
                                n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                                t.clip = o(t) ? t.parent.clip.concat(e) : e,
                                t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip,
                                I(t) && t.cleanDOM()
                            } else j(t) && (t.clip = o(t) ? t.parent.clip: []);
                            I(t) || (t.bounds = null)
                        },
                        this)
                    },
                    r.prototype.asyncRenderer = function(t, e, n) {
                        n = n || Date.now(),
                        this.paint(t[this.renderIndex++]),
                        t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(J(function() {
                            this.asyncRenderer(t, e)
                        },
                        this), 0)
                    },
                    r.prototype.createPseudoHideStyles = function(t) {
                        this.createStyles(t, "." + W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
                    },
                    r.prototype.disableAnimations = function(t) {
                        this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
                    },
                    r.prototype.createStyles = function(t, e) {
                        var n = t.createElement("style");
                        n.innerHTML = e,
                        t.body.appendChild(n)
                    },
                    r.prototype.getPseudoElements = function(t) {
                        var e = [[t]];
                        if (t.node.nodeType === Node.ELEMENT_NODE) {
                            var n = this.getPseudoElement(t, ":before"),
                            r = this.getPseudoElement(t, ":after");
                            n && e.push(n),
                            r && e.push(r)
                        }
                        return N(e)
                    },
                    r.prototype.getPseudoElement = function(t, e) {
                        var n = t.computedStyle(e);
                        if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
                        for (var r = R(n.content), o = "url" === r.substr(0, 3), a = document.createElement(o ? "img": "html2canvaspseudoelement"), s = new W(a, t, e), c = n.length - 1; c >= 0; c--) {
                            var u = i(n.item(c));
                            a.style[u] = n[u]
                        }
                        if (a.className = W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, o) return a.src = Z(r)[0].args[0],
                        [s];
                        var l = document.createTextNode(r);
                        return a.appendChild(l),
                        [s, new V(l, s)]
                    },
                    r.prototype.getChildren = function(t) {
                        return N([].filter.call(t.node.childNodes, k).map(function(e) {
                            var n = [e.nodeType === Node.TEXT_NODE ? new V(e, t) : new H(e, t)].filter(D);
                            return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
                        },
                        this))
                    },
                    r.prototype.newStackingContext = function(t, e) {
                        var n = new q(e, t.getOpacity(), t.node, t.parent);
                        t.cloneTo(n),
                        (e ? n.getParentStack(this) : n.parent.stack).contexts.push(n),
                        t.stack = n
                    },
                    r.prototype.createStackingContexts = function() {
                        this.nodes.forEach(function(t) {
                            M(t) && (this.isRootElement(t) || A(t) || S(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : M(t) && (E(t) && y(t) || O(t) || T(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
                        },
                        this)
                    },
                    r.prototype.isBodyWithTransparentRoot = function(t) {
                        return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
                    },
                    r.prototype.isRootElement = function(t) {
                        return null === t.parent
                    },
                    r.prototype.sortStackingContexts = function(t) {
                        t.contexts.sort(C(t.contexts.slice(0))),
                        t.contexts.forEach(this.sortStackingContexts, this)
                    },
                    r.prototype.parseTextBounds = function(t) {
                        return function(e, n, r) {
                            if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                                if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                    var o = r.slice(0, n).join("").length;
                                    return this.getRangeBounds(t.node, o, e.length)
                                }
                                if (t.node && "string" == typeof t.node.data) {
                                    var i = t.node.splitText(e.length),
                                    a = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                    return t.node = i,
                                    a
                                }
                            } else this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));
                            return {}
                        }
                    },
                    r.prototype.getWrapperBounds = function(t, e) {
                        var n = t.ownerDocument.createElement("html2canvaswrapper"),
                        r = t.parentNode,
                        o = t.cloneNode(!0);
                        n.appendChild(t.cloneNode(!0)),
                        r.replaceChild(n, t);
                        var i = e ? $(n) : X(n);
                        return r.replaceChild(o, n),
                        i
                    },
                    r.prototype.getRangeBounds = function(t, e, n) {
                        var r = this.range || (this.range = t.ownerDocument.createRange());
                        return r.setStart(t, e),
                        r.setEnd(t, e + n),
                        r.getBoundingClientRect()
                    },
                    r.prototype.parse = function(t) {
                        var e = t.contexts.filter(d),
                        n = t.children.filter(M),
                        r = n.filter(_(T)),
                        o = r.filter(_(E)).filter(_(v)),
                        i = n.filter(_(E)).filter(T),
                        s = r.filter(_(E)).filter(v),
                        c = t.contexts.concat(r.filter(E)).filter(y),
                        u = t.children.filter(j).filter(b),
                        l = t.contexts.filter(g);
                        e.concat(o).concat(i).concat(s).concat(c).concat(u).concat(l).forEach(function(t) {
                            this.renderQueue.push(t),
                            m(t) && (this.parse(t), this.renderQueue.push(new a))
                        },
                        this)
                    },
                    r.prototype.paint = function(t) {
                        try {
                            t instanceof a ? this.renderer.ctx.restore() : j(t) ? (I(t.parent) && t.parent.appendToDOM(), this.paintText(t), I(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
                        } catch(t) {
                            if (U(t), this.options.strict) throw t
                        }
                    },
                    r.prototype.paintNode = function(t) {
                        m(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
                        "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
                    },
                    r.prototype.paintElement = function(t) {
                        var e = t.parseBounds();
                        this.renderer.clip(t.backgroundClip,
                        function() {
                            this.renderer.renderBackground(t, e, t.borders.borders.map(P))
                        },
                        this),
                        this.renderer.clip(t.clip,
                        function() {
                            this.renderer.renderBorders(t.borders.borders)
                        },
                        this),
                        this.renderer.clip(t.backgroundClip,
                        function() {
                            switch (t.node.nodeName) {
                            case "svg":
                            case "IFRAME":
                                var n = this.images.get(t.node);
                                n ? this.renderer.renderImage(t, e, t.borders, n) : U("Error loading <" + t.node.nodeName + ">", t.node);
                                break;
                            case "IMG":
                                var r = this.images.get(t.node.src);
                                r ? this.renderer.renderImage(t, e, t.borders, r) : U("Error loading <img>", t.node.src);
                                break;
                            case "CANVAS":
                                this.renderer.renderImage(t, e, t.borders, {
                                    image: t.node
                                });
                                break;
                            case "SELECT":
                            case "INPUT":
                            case "TEXTAREA":
                                this.paintFormValue(t)
                            }
                        },
                        this)
                    },
                    r.prototype.paintCheckbox = function(t) {
                        var e = t.parseBounds(),
                        n = Math.min(e.width, e.height),
                        r = {
                            width: n - 1,
                            height: n - 1,
                            top: e.top,
                            left: e.left
                        },
                        o = [3, 3],
                        i = [o, o, o, o],
                        a = [1, 1, 1, 1].map(function(t) {
                            return {
                                color: new Q("#A5A5A5"),
                                width: t
                            }
                        }),
                        s = l(r, i, a);
                        this.renderer.clip(t.backgroundClip,
                        function() {
                            this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new Q("#DEDEDE")),
                            this.renderer.renderBorders(c(a, r, s, i)),
                            t.node.checked && (this.renderer.font(new Q("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", r.left + n / 6, r.top + n - 1))
                        },
                        this)
                    },
                    r.prototype.paintRadio = function(t) {
                        var e = t.parseBounds(),
                        n = Math.min(e.width, e.height) - 2;
                        this.renderer.clip(t.backgroundClip,
                        function() {
                            this.renderer.circleStroke(e.left + 1, e.top + 1, n, new Q("#DEDEDE"), 1, new Q("#A5A5A5")),
                            t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new Q("#424242"))
                        },
                        this)
                    },
                    r.prototype.paintFormValue = function(t) {
                        var e = t.getValue();
                        if (e.length > 0) {
                            var n = t.node.ownerDocument,
                            r = n.createElement("html2canvaswrapper"); ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function(e) {
                                try {
                                    r.style[e] = t.css(e)
                                } catch(t) {
                                    U("html2canvas: Parse: Exception caught in renderFormValue: " + t.message)
                                }
                            });
                            var o = t.parseBounds();
                            r.style.position = "fixed",
                            r.style.left = o.left + "px",
                            r.style.top = o.top + "px",
                            r.textContent = e,
                            n.body.appendChild(r),
                            this.paintText(new V(r.firstChild, t)),
                            n.body.removeChild(r)
                        }
                    },
                    r.prototype.paintText = function(t) {
                        t.applyTextTransform();
                        var e = G.ucs2.decode(t.node.data),
                        n = this.options.letterRendering && !w(t) || z(t.node.data) ? e.map(function(t) {
                            return G.ucs2.encode([t])
                        }) : B(e),
                        r = t.parent.fontWeight(),
                        o = t.parent.css("fontSize"),
                        i = t.parent.css("fontFamily"),
                        a = t.parent.parseTextShadows();
                        this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), r, o, i),
                        a.length ? this.renderer.fontShadow(a[0].color, a[0].offsetX, a[0].offsetY, a[0].blur) : this.renderer.clearShadow(),
                        this.renderer.clip(t.parent.clip,
                        function() {
                            n.map(this.parseTextBounds(t), this).forEach(function(e, r) {
                                e && (this.renderer.text(n[r], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(i, o)))
                            },
                            this)
                        },
                        this)
                    },
                    r.prototype.renderTextDecoration = function(t, e, n) {
                        switch (t.css("textDecoration").split(" ")[0]) {
                        case "underline":
                            this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                            break;
                        case "overline":
                            this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                            break;
                        case "line-through":
                            this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
                        }
                    };
                    var tt = {
                        inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
                    };
                    r.prototype.parseBorders = function(t) {
                        var e = t.parseBounds(),
                        n = x(t),
                        r = ["Top", "Right", "Bottom", "Left"].map(function(e, n) {
                            var r = t.css("border" + e + "Style"),
                            o = t.color("border" + e + "Color");
                            "inset" === r && o.isBlack() && (o = new Q([255, 255, 255, o.a]));
                            var i = tt[r] ? tt[r][n] : null;
                            return {
                                width: t.cssInt("border" + e + "Width"),
                                color: i ? o[i[0]](i[1]) : o,
                                args: null
                            }
                        }),
                        o = l(e, n, r);
                        return {
                            clip: this.parseBackgroundClip(t, o, r, n, e),
                            borders: c(r, e, o, n)
                        }
                    },
                    r.prototype.parseBackgroundClip = function(t, e, n, r, o) {
                        var i = t.css("backgroundClip"),
                        a = [];
                        switch (i) {
                        case "content-box":
                        case "padding-box":
                            p(a, r[0], r[1], e.topLeftInner, e.topRightInner, o.left + n[3].width, o.top + n[0].width),
                            p(a, r[1], r[2], e.topRightInner, e.bottomRightInner, o.left + o.width - n[1].width, o.top + n[0].width),
                            p(a, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, o.left + o.width - n[1].width, o.top + o.height - n[2].width),
                            p(a, r[3], r[0], e.bottomLeftInner, e.topLeftInner, o.left + n[3].width, o.top + o.height - n[2].width);
                            break;
                        default:
                            p(a, r[0], r[1], e.topLeftOuter, e.topRightOuter, o.left, o.top),
                            p(a, r[1], r[2], e.topRightOuter, e.bottomRightOuter, o.left + o.width, o.top),
                            p(a, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, o.left + o.width, o.top + o.height),
                            p(a, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, o.left, o.top + o.height)
                        }
                        return a
                    },
                    e.exports = r
                },
                {
                    "./color": 3,
                    "./fontmetrics": 7,
                    "./log": 13,
                    "./nodecontainer": 14,
                    "./pseudoelementcontainer": 18,
                    "./stackingcontext": 21,
                    "./textcontainer": 25,
                    "./utils": 26,
                    punycode: 1
                }],
                16 : [function(t, e, n) {
                    function r(t, e, n) {
                        var r = "withCredentials" in new XMLHttpRequest;
                        if (!e) return s.a.reject("No proxy configured");
                        var o = a(r),
                        u = c(e, t, o);
                        return r ? f(u) : i(n, u, o).then(function(t) {
                            return g(t.content)
                        })
                    }
                    function o(t, e, n) {
                        var r = "crossOrigin" in new Image,
                        o = a(r),
                        u = c(e, t, o);
                        return r ? s.a.resolve(u) : i(n, u, o).then(function(t) {
                            return "data:" + t.type + ";base64," + t.content
                        })
                    }
                    function i(t, e, n) {
                        return new s.a(function(r, o) {
                            var i = t.createElement("script"),
                            a = function() {
                                delete window.html2canvas.proxy[n],
                                t.body.removeChild(i)
                            };
                            window.html2canvas.proxy[n] = function(t) {
                                a(),
                                r(t)
                            },
                            i.src = e,
                            i.onerror = function(t) {
                                a(),
                                o(t)
                            },
                            t.body.appendChild(i)
                        })
                    }
                    function a(t) {
                        return t ? "": "html2canvas_" + Date.now() + "_" + ++y + "_" + Math.round(1e5 * Math.random())
                    }
                    function c(t, e, n) {
                        return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n: "")
                    }
                    function u(t) {
                        return function(e) {
                            var n, r = new DOMParser;
                            try {
                                n = r.parseFromString(e, "text/html")
                            } catch(t) {
                                p("DOMParser not supported, falling back to createHTMLDocument"),
                                n = document.implementation.createHTMLDocument("");
                                try {
                                    n.open(),
                                    n.write(e),
                                    n.close()
                                } catch(t) {
                                    p("createHTMLDocument write not supported, falling back to document.body.innerHTML"),
                                    n.body.innerHTML = e
                                }
                            }
                            var o = n.querySelector("base");
                            if (!o || !o.href.host) {
                                var i = n.createElement("base");
                                i.href = t,
                                n.head.insertBefore(i, n.head.firstChild)
                            }
                            return n
                        }
                    }
                    function l(t, e, n, o, i, a) {
                        return new r(t, e, window.document).then(u(t)).then(function(t) {
                            return d(t, n, o, i, a, 0, 0)
                        })
                    }
                    var f = t("./xhr"),
                    h = t("./utils"),
                    p = t("./log"),
                    d = t("./clone"),
                    g = h.decode64,
                    y = 0;
                    n.Proxy = r,
                    n.ProxyURL = o,
                    n.loadUrlDocument = l
                },
                {
                    "./clone": 2,
                    "./log": 13,
                    "./utils": 26,
                    "./xhr": 28
                }],
                17 : [function(t, e, n) {
                    function r(t, e) {
                        var n = document.createElement("a");
                        n.href = t,
                        t = n.href,
                        this.src = t,
                        this.image = new Image;
                        var r = this;
                        this.promise = new s.a(function(n, i) {
                            r.image.crossOrigin = "Anonymous",
                            r.image.onload = n,
                            r.image.onerror = i,
                            new o(t, e, document).then(function(t) {
                                r.image.src = t
                            }).
                            catch(i)
                        })
                    }
                    var o = t("./proxy").ProxyURL;
                    e.exports = r
                },
                {
                    "./proxy": 16
                }],
                18 : [function(t, e, n) {
                    function r(t, e, n) {
                        o.call(this, t, e),
                        this.isPseudoElement = !0,
                        this.before = ":before" === n
                    }
                    var o = t("./nodecontainer");
                    r.prototype.cloneTo = function(t) {
                        r.prototype.cloneTo.call(this, t),
                        t.isPseudoElement = !0,
                        t.before = this.before
                    },
                    r.prototype = i()(o.prototype),
                    r.prototype.appendToDOM = function() {
                        this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node),
                        this.parent.node.className += " " + this.getHideClass()
                    },
                    r.prototype.cleanDOM = function() {
                        this.node.parentNode.removeChild(this.node),
                        this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
                    },
                    r.prototype.getHideClass = function() {
                        return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE": "AFTER")]
                    },
                    r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before",
                    r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after",
                    e.exports = r
                },
                {
                    "./nodecontainer": 14
                }],
                19 : [function(t, e, n) {
                    function r(t, e, n, r, o) {
                        this.width = t,
                        this.height = e,
                        this.images = n,
                        this.options = r,
                        this.document = o
                    }
                    var o = t("./log");
                    r.prototype.renderImage = function(t, e, n, r) {
                        var o = t.cssInt("paddingLeft"),
                        i = t.cssInt("paddingTop"),
                        a = t.cssInt("paddingRight"),
                        s = t.cssInt("paddingBottom"),
                        c = n.borders,
                        u = e.width - (c[1].width + c[3].width + o + a),
                        l = e.height - (c[0].width + c[2].width + i + s);
                        this.drawImage(r, 0, 0, r.image.width || u, r.image.height || l, e.left + o + c[3].width, e.top + i + c[0].width, u, l)
                    },
                    r.prototype.renderBackground = function(t, e, n) {
                        e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n))
                    },
                    r.prototype.renderBackgroundColor = function(t, e) {
                        var n = t.color("backgroundColor");
                        n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
                    },
                    r.prototype.renderBorders = function(t) {
                        t.forEach(this.renderBorder, this)
                    },
                    r.prototype.renderBorder = function(t) {
                        t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
                    },
                    r.prototype.renderBackgroundImage = function(t, e, n) {
                        t.parseBackgroundImages().reverse().forEach(function(r, i, a) {
                            switch (r.method) {
                            case "url":
                                var s = this.images.get(r.args[0]);
                                s ? this.renderBackgroundRepeating(t, e, s, a.length - (i + 1), n) : o("Error loading background-image", r.args[0]);
                                break;
                            case "linear-gradient":
                            case "gradient":
                                var c = this.images.get(r.value);
                                c ? this.renderBackgroundGradient(c, e, n) : o("Error loading background-image", r.args[0]);
                                break;
                            case "none":
                                break;
                            default:
                                o("Unknown background-image type", r.args[0])
                            }
                        },
                        this)
                    },
                    r.prototype.renderBackgroundRepeating = function(t, e, n, r, o) {
                        var i = t.parseBackgroundSize(e, n.image, r),
                        a = t.parseBackgroundPosition(e, n.image, r, i);
                        switch (t.parseBackgroundRepeat(r)) {
                        case "repeat-x":
                        case "repeat no-repeat":
                            this.backgroundRepeatShape(n, a, i, e, e.left + o[3], e.top + a.top + o[0], 99999, i.height, o);
                            break;
                        case "repeat-y":
                        case "no-repeat repeat":
                            this.backgroundRepeatShape(n, a, i, e, e.left + a.left + o[3], e.top + o[0], i.width, 99999, o);
                            break;
                        case "no-repeat":
                            this.backgroundRepeatShape(n, a, i, e, e.left + a.left + o[3], e.top + a.top + o[0], i.width, i.height, o);
                            break;
                        default:
                            this.renderBackgroundRepeat(n, a, i, {
                                top: e.top,
                                left: e.left
                            },
                            o[3], o[0])
                        }
                    },
                    e.exports = r
                },
                {
                    "./log": 13
                }],
                20 : [function(t, e, n) {
                    function r(t, e) {
                        a.apply(this, arguments),
                        this.canvas = this.options.canvas || this.document.createElement("canvas"),
                        this.options.canvas || (this.canvas.width = t, this.canvas.height = e),
                        this.ctx = this.canvas.getContext("2d"),
                        this.taintCtx = this.document.createElement("canvas").getContext("2d"),
                        this.ctx.textBaseline = "bottom",
                        this.variables = {},
                        c("Initialized CanvasRenderer with size", t, "x", e)
                    }
                    function o(t) {
                        return t.length > 0
                    }
                    var a = t("../renderer"),
                    s = t("../lineargradientcontainer"),
                    c = t("../log");
                    r.prototype = i()(a.prototype),
                    r.prototype.setFillStyle = function(t) {
                        return this.ctx.fillStyle = "object" === (void 0 === t ? "undefined": u()(t)) && t.isColor ? t.toString() : t,
                        this.ctx
                    },
                    r.prototype.rectangle = function(t, e, n, r, o) {
                        this.setFillStyle(o).fillRect(t, e, n, r)
                    },
                    r.prototype.circle = function(t, e, n, r) {
                        this.setFillStyle(r),
                        this.ctx.beginPath(),
                        this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0),
                        this.ctx.closePath(),
                        this.ctx.fill()
                    },
                    r.prototype.circleStroke = function(t, e, n, r, o, i) {
                        this.circle(t, e, n, r),
                        this.ctx.strokeStyle = i.toString(),
                        this.ctx.stroke()
                    },
                    r.prototype.drawShape = function(t, e) {
                        this.shape(t),
                        this.setFillStyle(e).fill()
                    },
                    r.prototype.taints = function(t) {
                        if (null === t.tainted) {
                            this.taintCtx.drawImage(t.image, 0, 0);
                            try {
                                this.taintCtx.getImageData(0, 0, 1, 1),
                                t.tainted = !1
                            } catch(e) {
                                this.taintCtx = document.createElement("canvas").getContext("2d"),
                                t.tainted = !0
                            }
                        }
                        return t.tainted
                    },
                    r.prototype.drawImage = function(t, e, n, r, o, i, a, s, c) {
                        this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, n, r, o, i, a, s, c)
                    },
                    r.prototype.clip = function(t, e, n) {
                        this.ctx.save(),
                        t.filter(o).forEach(function(t) {
                            this.shape(t).clip()
                        },
                        this),
                        e.call(n),
                        this.ctx.restore()
                    },
                    r.prototype.shape = function(t) {
                        return this.ctx.beginPath(),
                        t.forEach(function(t, e) {
                            "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo": t[0] + "To"].apply(this.ctx, t.slice(1))
                        },
                        this),
                        this.ctx.closePath(),
                        this.ctx
                    },
                    r.prototype.font = function(t, e, n, r, o, i) {
                        this.setFillStyle(t).font = [e, n, r, o, i].join(" ").split(",")[0]
                    },
                    r.prototype.fontShadow = function(t, e, n, r) {
                        this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", r)
                    },
                    r.prototype.clearShadow = function() {
                        this.setVariable("shadowColor", "rgba(0,0,0,0)")
                    },
                    r.prototype.setOpacity = function(t) {
                        this.ctx.globalAlpha = t
                    },
                    r.prototype.setTransform = function(t) {
                        this.ctx.translate(t.origin[0], t.origin[1]),
                        this.ctx.transform.apply(this.ctx, t.matrix),
                        this.ctx.translate( - t.origin[0], -t.origin[1])
                    },
                    r.prototype.setVariable = function(t, e) {
                        return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e),
                        this
                    },
                    r.prototype.text = function(t, e, n) {
                        this.ctx.fillText(t, e, n)
                    },
                    r.prototype.backgroundRepeatShape = function(t, e, n, r, o, i, a, s, c) {
                        var u = [["line", Math.round(o), Math.round(i)], ["line", Math.round(o + a), Math.round(i)], ["line", Math.round(o + a), Math.round(s + i)], ["line", Math.round(o), Math.round(s + i)]];
                        this.clip([u],
                        function() {
                            this.renderBackgroundRepeat(t, e, n, r, c[3], c[0])
                        },
                        this)
                    },
                    r.prototype.renderBackgroundRepeat = function(t, e, n, r, o, i) {
                        var a = Math.round(r.left + e.left + o),
                        s = Math.round(r.top + e.top + i);
                        this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")),
                        this.ctx.translate(a, s),
                        this.ctx.fill(),
                        this.ctx.translate( - a, -s)
                    },
                    r.prototype.renderBackgroundGradient = function(t, e) {
                        if (t instanceof s) {
                            var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                            t.colorStops.forEach(function(t) {
                                n.addColorStop(t.stop, t.color.toString())
                            }),
                            this.rectangle(e.left, e.top, e.width, e.height, n)
                        }
                    },
                    r.prototype.resizeImage = function(t, e) {
                        var n = t.image;
                        if (n.width === e.width && n.height === e.height) return n;
                        var r, o = document.createElement("canvas");
                        return o.width = e.width,
                        o.height = e.height,
                        r = o.getContext("2d"),
                        r.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height),
                        o
                    },
                    e.exports = r
                },
                {
                    "../lineargradientcontainer": 12,
                    "../log": 13,
                    "../renderer": 19
                }],
                21 : [function(t, e, n) {
                    function r(t, e, n, r) {
                        o.call(this, n, r),
                        this.ownStacking = t,
                        this.contexts = [],
                        this.children = [],
                        this.opacity = (this.parent ? this.parent.stack.opacity: 1) * e
                    }
                    var o = t("./nodecontainer");
                    r.prototype = i()(o.prototype),
                    r.prototype.getParentStack = function(t) {
                        var e = this.parent ? this.parent.stack: null;
                        return e ? e.ownStacking ? e: e.getParentStack(t) : t.stack
                    },
                    e.exports = r
                },
                {
                    "./nodecontainer": 14
                }],
                22 : [function(t, e, n) {
                    function r(t) {
                        this.rangeBounds = this.testRangeBounds(t),
                        this.cors = this.testCORS(),
                        this.svg = this.testSVG()
                    }
                    r.prototype.testRangeBounds = function(t) {
                        var e, n, r, o, i = !1;
                        return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (n = t.createElement("boundtest"), n.style.height = "123px", n.style.display = "block", t.body.appendChild(n), e.selectNode(n), r = e.getBoundingClientRect(), o = r.height, 123 === o && (i = !0), t.body.removeChild(n))),
                        i
                    },
                    r.prototype.testCORS = function() {
                        return void 0 !== (new Image).crossOrigin
                    },
                    r.prototype.testSVG = function() {
                        var t = new Image,
                        e = document.createElement("canvas"),
                        n = e.getContext("2d");
                        t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            n.drawImage(t, 0, 0),
                            e.toDataURL()
                        } catch(t) {
                            return ! 1
                        }
                        return ! 0
                    },
                    e.exports = r
                },
                {}],
                23 : [function(t, e, n) {
                    function r(t) {
                        this.src = t,
                        this.image = null;
                        var e = this;
                        this.promise = this.hasFabric().then(function() {
                            return e.isInline(t) ? s.a.resolve(e.inlineFormatting(t)) : o(t)
                        }).then(function(t) {
                            return new s.a(function(n) {
                                window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
                            })
                        })
                    }
                    var o = t("./xhr"),
                    i = t("./utils").decode64;
                    r.prototype.hasFabric = function() {
                        return window.html2canvas.svg && window.html2canvas.svg.fabric ? s.a.resolve() : s.a.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
                    },
                    r.prototype.inlineFormatting = function(t) {
                        return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
                    },
                    r.prototype.removeContentType = function(t) {
                        return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
                    },
                    r.prototype.isInline = function(t) {
                        return /^data:image\/svg\+xml/i.test(t)
                    },
                    r.prototype.createCanvas = function(t) {
                        var e = this;
                        return function(n, r) {
                            var o = new window.html2canvas.svg.fabric.StaticCanvas("c");
                            e.image = o.lowerCanvasEl,
                            o.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, r)).renderAll(),
                            t(o.lowerCanvasEl)
                        }
                    },
                    r.prototype.decode64 = function(t) {
                        return "function" == typeof window.atob ? window.atob(t) : i(t)
                    },
                    e.exports = r
                },
                {
                    "./utils": 26,
                    "./xhr": 28
                }],
                24 : [function(t, e, n) {
                    function r(t, e) {
                        this.src = t,
                        this.image = null;
                        var n = this;
                        this.promise = e ? new s.a(function(e, r) {
                            n.image = new Image,
                            n.image.onload = e,
                            n.image.onerror = r,
                            n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t),
                            !0 === n.image.complete && e(n.image)
                        }) : this.hasFabric().then(function() {
                            return new s.a(function(e) {
                                window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
                            })
                        })
                    }
                    var o = t("./svgcontainer");
                    r.prototype = i()(o.prototype),
                    e.exports = r
                },
                {
                    "./svgcontainer": 23
                }],
                25 : [function(t, e, n) {
                    function r(t, e) {
                        a.call(this, t, e)
                    }
                    function o(t, e, n) {
                        if (t.length > 0) return e + n.toUpperCase()
                    }
                    var a = t("./nodecontainer");
                    r.prototype = i()(a.prototype),
                    r.prototype.applyTextTransform = function() {
                        this.node.data = this.transform(this.parent.css("textTransform"))
                    },
                    r.prototype.transform = function(t) {
                        var e = this.node.data;
                        switch (t) {
                        case "lowercase":
                            return e.toLowerCase();
                        case "capitalize":
                            return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, o);
                        case "uppercase":
                            return e.toUpperCase();
                        default:
                            return e
                        }
                    },
                    e.exports = r
                },
                {
                    "./nodecontainer": 14
                }],
                26 : [function(t, e, n) {
                    n.smallImage = function() {
                        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    },
                    n.bind = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    },
                    n.decode64 = function(t) {
                        var e, n, r, o, i, a, s, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        l = t.length,
                        f = "";
                        for (e = 0; e < l; e += 4) n = u.indexOf(t[e]),
                        r = u.indexOf(t[e + 1]),
                        o = u.indexOf(t[e + 2]),
                        i = u.indexOf(t[e + 3]),
                        a = n << 2 | r >> 4,
                        s = (15 & r) << 4 | o >> 2,
                        c = (3 & o) << 6 | i,
                        f += 64 === o ? String.fromCharCode(a) : 64 === i || -1 === i ? String.fromCharCode(a, s) : String.fromCharCode(a, s, c);
                        return f
                    },
                    n.getBounds = function(t) {
                        if (t.getBoundingClientRect) {
                            var e = t.getBoundingClientRect(),
                            n = null == t.offsetWidth ? e.width: t.offsetWidth;
                            return {
                                top: e.top,
                                bottom: e.bottom || e.top + e.height,
                                right: e.left + n,
                                left: e.left,
                                width: n,
                                height: null == t.offsetHeight ? e.height: t.offsetHeight
                            }
                        }
                        return {}
                    },
                    n.offsetBounds = function(t) {
                        var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: t.offsetTop + e.top,
                            bottom: t.offsetTop + t.offsetHeight + e.top,
                            right: t.offsetLeft + e.left + t.offsetWidth,
                            left: t.offsetLeft + e.left,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    },
                    n.parseBackgrounds = function(t) {
                        var e, n, r, o, i, a, s, c = " \r\n\t",
                        u = [],
                        l = 0,
                        f = 0,
                        h = function() {
                            e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)), n && s.push(n), "-" === e.substr(0, 1) && (o = e.indexOf("-", 1) + 1) > 0 && (r = e.substr(0, o), e = e.substr(o)), u.push({
                                prefix: r,
                                method: e.toLowerCase(),
                                value: i,
                                args: s,
                                image: null
                            })),
                            s = [],
                            e = r = n = i = ""
                        };
                        return s = [],
                        e = r = n = i = "",
                        t.split("").forEach(function(t) {
                            if (! (0 === l && c.indexOf(t) > -1)) {
                                switch (t) {
                                case '"':
                                    a ? a === t && (a = null) : a = t;
                                    break;
                                case "(":
                                    if (a) break;
                                    if (0 === l) return l = 1,
                                    void(i += t);
                                    f++;
                                    break;
                                case ")":
                                    if (a) break;
                                    if (1 === l) {
                                        if (0 === f) return l = 0,
                                        i += t,
                                        void h();
                                        f--
                                    }
                                    break;
                                case ",":
                                    if (a) break;
                                    if (0 === l) return void h();
                                    if (1 === l && 0 === f && !e.match(/^url$/i)) return s.push(n),
                                    n = "",
                                    void(i += t)
                                }
                                i += t,
                                0 === l ? e += t: n += t
                            }
                        }),
                        h(),
                        u
                    }
                },
                {}],
                27 : [function(t, e, n) {
                    function r(t) {
                        o.apply(this, arguments),
                        this.type = "linear" === t.args[0] ? o.TYPES.LINEAR: o.TYPES.RADIAL
                    }
                    var o = t("./gradientcontainer");
                    r.prototype = i()(o.prototype),
                    e.exports = r
                },
                {
                    "./gradientcontainer": 9
                }],
                28 : [function(t, e, n) {
                    function r(t) {
                        return new s.a(function(e, n) {
                            var r = new XMLHttpRequest;
                            r.open("GET", t),
                            r.onload = function() {
                                200 === r.status ? e(r.responseText) : n(new Error(r.statusText))
                            },
                            r.onerror = function() {
                                n(new Error("Network Error"))
                            },
                            r.send()
                        })
                    }
                    e.exports = r
                },
                {}]
            },
            {},
            [4])(4)
        })
    }.call(e, n(54), n(240)(t))
},
function(t, e, n) {
    t.exports = {
    default:
        n(823),
        __esModule: !0
    }
},
function(t, e, n) {
    n(243),
    n(244),
    n(245),
    n(824),
    n(835),
    n(836),
    t.exports = n(46).Promise
},
function(t, e, n) {
    "use strict";
    var r, o, i, a, s = n(152),
    c = n(34),
    u = n(172),
    l = n(723),
    f = n(80),
    h = n(56),
    p = n(190),
    d = n(825),
    g = n(826),
    y = n(724),
    v = n(725).set,
    m = n(831)(),
    b = n(376),
    w = n(726),
    x = n(727),
    k = c.TypeError,
    S = c.process,
    E = c.Promise,
    T = "process" == l(S),
    O = function() {},
    _ = o = b.f,
    M = !!
    function() {
        try {
            var t = E.resolve(1),
            e = (t.constructor = {})[n(43)("species")] = function(t) {
                t(O, O)
            };
            return (T || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e
        } catch(t) {}
    } (),
    I = function(t) {
        var e;
        return ! (!h(t) || "function" != typeof(e = t.then)) && e
    },
    j = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            m(function() {
                for (var r = t._v,
                o = 1 == t._s,
                i = 0; n.length > i;) !
                function(e) {
                    var n, i, a = o ? e.ok: e.fail,
                    s = e.resolve,
                    c = e.reject,
                    u = e.domain;
                    try {
                        a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? n = r: (u && u.enter(), n = a(r), u && u.exit()), n === e.promise ? c(k("Promise-chain cycle")) : (i = I(n)) ? i.call(n, s, c) : s(n)) : c(r)
                    } catch(t) {
                        c(t)
                    }
                } (n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && C(t)
            })
        }
    },
    C = function(t) {
        v.call(c,
        function() {
            var e, n, r, o = t._v,
            i = A(t);
            if (i && (e = w(function() {
                T ? S.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
            }), t._h = T || A(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
        })
    },
    A = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
    },
    L = function(t) {
        v.call(c,
        function() {
            var e;
            T ? S.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    },
    P = function(t) {
        var e = this;
        e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), j(e, !0))
    },
    D = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t) throw k("Promise can't be resolved itself"); (e = I(t)) ? m(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, u(D, r, 1), u(P, r, 1))
                    } catch(t) {
                        P.call(r, t)
                    }
                }) : (n._v = t, n._s = 1, j(n, !1))
            } catch(t) {
                P.call({
                    _w: n,
                    _d: !1
                },
                t)
            }
        }
    };
    M || (E = function(t) {
        d(this, E, "Promise", "_h"),
        p(t),
        r.call(this);
        try {
            t(u(D, this, 1), u(P, this, 1))
        } catch(t) {
            P.call(this, t)
        }
    },
    r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    },
    r.prototype = n(832)(E.prototype, {
        then: function(t, e) {
            var n = _(y(this, E));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = T ? S.domain: void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && j(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r;
        this.promise = t,
        this.resolve = u(D, t, 1),
        this.reject = u(P, t, 1)
    },
    b.f = _ = function(t) {
        return t === E || t === a ? new i(t) : o(t)
    }),
    f(f.G + f.W + f.F * !M, {
        Promise: E
    }),
    n(153)(E, "Promise"),
    n(833)("Promise"),
    a = n(46).Promise,
    f(f.S + f.F * !M, "Promise", {
        reject: function(t) {
            var e = _(this);
            return (0, e.reject)(t),
            e.promise
        }
    }),
    f(f.S + f.F * (s || !M), "Promise", {
        resolve: function(t) {
            return x(s && this === a ? E: this, t)
        }
    }),
    f(f.S + f.F * !(M && n(834)(function(t) {
        E.all(t).
        catch(O)
    })), "Promise", {
        all: function(t) {
            var e = this,
            n = _(e),
            r = n.resolve,
            o = n.reject,
            i = w(function() {
                var n = [],
                i = 0,
                a = 1;
                g(t, !1,
                function(t) {
                    var s = i++,
                    c = !1;
                    n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                        c || (c = !0, n[s] = t, --a || r(n))
                    },
                    o)
                }),
                --a || r(n)
            });
            return i.e && o(i.v),
            n.promise
        },
        race: function(t) {
            var e = this,
            n = _(e),
            r = n.reject,
            o = w(function() {
                g(t, !1,
                function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o.e && r(o.v),
            n.promise
        }
    })
},
function(t, e) {
    t.exports = function(t, e, n, r) {
        if (! (t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
},
function(t, e, n) {
    var r = n(172),
    o = n(827),
    i = n(828),
    a = n(81),
    s = n(241),
    c = n(829),
    u = {},
    l = {},
    e = t.exports = function(t, e, n, f, h) {
        var p, d, g, y, v = h ?
        function() {
            return t
        }: c(t),
        m = r(n, f, e ? 2 : 1),
        b = 0;
        if ("function" != typeof v) throw TypeError(t + " is not iterable!");
        if (i(v)) {
            for (p = s(t.length); p > b; b++) if ((y = e ? m(a(d = t[b])[0], d[1]) : m(t[b])) === u || y === l) return y
        } else for (g = v.call(t); ! (d = g.next()).done;) if ((y = o(g, m, d.value, e)) === u || y === l) return y
    };
    e.BREAK = u,
    e.RETURN = l
},
function(t, e, n) {
    var r = n(81);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch(e) {
            var i = t.
            return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
},
function(t, e, n) {
    var r = n(140),
    o = n(43)("iterator"),
    i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
},
function(t, e, n) {
    var r = n(723),
    o = n(43)("iterator"),
    i = n(140);
    t.exports = n(46).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
},
function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
},
function(t, e, n) {
    var r = n(34),
    o = n(725).set,
    i = r.MutationObserver || r.WebKitMutationObserver,
    a = r.process,
    s = r.Promise,
    c = "process" == n(157)(a);
    t.exports = function() {
        var t, e, n, u = function() {
            var r, o;
            for (c && (r = a.domain) && r.exit(); t;) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch(r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (c) n = function() {
            a.nextTick(u)
        };
        else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
            var l = s.resolve();
            n = function() {
                l.then(u)
            }
        } else n = function() {
            o.call(r, u)
        };
        else {
            var f = !0,
            h = document.createTextNode("");
            new i(u).observe(h, {
                characterData: !0
            }),
            n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o, n()),
            e = o
        }
    }
},
function(t, e, n) {
    var r = n(55);
    t.exports = function(t, e, n) {
        for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
},
function(t, e, n) {
    "use strict";
    var r = n(34),
    o = n(46),
    i = n(48),
    a = n(49),
    s = n(43)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        a && e && !e[s] && i.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
},
function(t, e, n) {
    var r = n(43)("iterator"),
    o = !1;
    try {
        var i = [7][r]();
        i.
        return = function() {
            o = !0
        },
        Array.from(i,
        function() {
            throw 2
        })
    } catch(t) {}
    t.exports = function(t, e) {
        if (!e && !o) return ! 1;
        var n = !1;
        try {
            var i = [7],
            a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            },
            i[r] = function() {
                return a
            },
            t(i)
        } catch(t) {}
        return n
    }
},
function(t, e, n) {
    "use strict";
    var r = n(80),
    o = n(46),
    i = n(34),
    a = n(724),
    s = n(727);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, o.Promise || i.Promise),
            n = "function" == typeof t;
            return this.then(n ?
            function(n) {
                return s(e, t()).then(function() {
                    return n
                })
            }: t, n ?
            function(n) {
                return s(e, t()).then(function() {
                    throw n
                })
            }: t)
        }
    })
},
function(t, e, n) {
    "use strict";
    var r = n(80),
    o = n(376),
    i = n(726);
    r(r.S, "Promise", {
        try: function(t) {
            var e = o.f(this),
            n = i(t);
            return (n.e ? e.reject: e.resolve)(n.v),
            e.promise
        }
    })
},
function(t, e) { (function(e) {
        t.exports = e
    }).call(e, {})
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(138);
    e.fileAPI = {
        fetchRemoteSrc: function(t) {
            return r.request("", "POST", {
                bucket: "jike",
                url: t
            })
        },
        srcToFile: function(t) {
            return window.fetch(t, {
                mode: "no-cors",
                credentials: "include"
            }).then(function(t) {
                return t.arrayBuffer()
            }).then(function(t) {
                return new File([t], "src-to-file.png", {
                    type: "image/png"
                })
            })
        },
        upload: function(t) {
            return r.request("").then(function(e) {
                var n = new FormData;
                return n.append("token", e.uptoken),
                n.append("file", t),
                window.fetch("", {
                    method: "POST",
                    body: n
                }).then(function(t) {
                    return t.ok ? t.json() : t.json().then(function(e) {
                        throw Error(e.error || t.statusText)
                    })
                })
            })
        }
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(840),
    o = 100,
    i = function() {
        function t(t) {
            var e = this;
            this.onDestory = t.onDestory,
            this.top = t.top || 1,
            this.left = t.left || 1,
            this.scale = t.scale || 1,
            this.angle = t.angle || 0,
            this.$el = document.createElement("div"),
            this.$el.classList.add("editable-image"),
            this.$el.style.zIndex = "" + o++,
            this.$el.addEventListener("touchmove",
            function(t) {
                t.preventDefault()
            },
            !1),
            this.$destory = document.createElement("div"),
            this.$destory.innerText = "×",
            this.$destory.classList.add("btn-destory"),
            this.$el.appendChild(this.$destory),
            this.$destory.addEventListener("click",
            function() {
                e.onDestory()
            }),
            this.$image = new Image,
            //this.$image.crossOrigin = "anonymous",
            this.$image.src = t.src,
            this.$el.appendChild(this.$image),
            t.$parent && (this.$parent = t.$parent, this.$parent.appendChild(this.$el)),
            this.setStyle(),
            new r(this.$image, {
                rotate: function(t) {
                    e.angle += t.angle,
                    e.setStyle()
                },
                pinch: function(t) {
                    e.scale *= (t.zoom - 1) / 10 + 1,
                    e.scale < .5 && (e.scale = .5),
                    e.scale > 5 && (e.scale = 5),
                    e.setStyle()
                },
                pressMove: function(t) {
                    e.top += t.deltaY,
                    e.left += t.deltaX,
                    e.setStyle()
                }
            })
        }
        return t.prototype.setStyle = function() {
            var t = this,
            e = t.top,
            n = t.left,
            r = t.scale,
            o = t.angle;
            e && (this.$el.style.top = e + "px"),
            n && (this.$el.style.left = n + "px"),
            (r || o) && (this.$el.style.transform = this.$el.style.webkitTransform = "rotate(" + (o || 0) + "deg) scale(" + (r || 1) + ")")
        },
        t
    } ();
    e.EditableImage = i
},
function(t, e, n) { !
    function() {
        function e(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }
        function n(t, e) {
            return t.x * e.x + t.y * e.y
        }
        function r(t, r) {
            var o = e(t) * e(r);
            if (0 === o) return 0;
            var i = n(t, r) / o;
            return i > 1 && (i = 1),
            Math.acos(i)
        }
        function o(t, e) {
            return t.x * e.y - e.x * t.y
        }
        function i(t, e) {
            var n = r(t, e);
            return o(t, e) > 0 && (n *= -1),
            180 * n / Math.PI
        }
        function a(t, e) {
            var n = new s(t);
            return n.add(e),
            n
        }
        var s = function(t) {
            this.handlers = [],
            this.el = t
        };
        s.prototype.add = function(t) {
            this.handlers.push(t)
        },
        s.prototype.del = function(t) {
            t || (this.handlers = []);
            for (var e = this.handlers.length; e >= 0; e--) this.handlers[e] === t && this.handlers.splice(e, 1)
        },
        s.prototype.dispatch = function() {
            for (var t = 0,
            e = this.handlers.length; t < e; t++) {
                var n = this.handlers[t];
                "function" == typeof n && n.apply(this.el, arguments)
            }
        };
        var c = function(t, e) {
            this.element = "string" == typeof t ? document.querySelector(t) : t,
            this.start = this.start.bind(this),
            this.move = this.move.bind(this),
            this.end = this.end.bind(this),
            this.cancel = this.cancel.bind(this),
            this.element.addEventListener("touchstart", this.start, !1),
            this.element.addEventListener("touchmove", this.move, !1),
            this.element.addEventListener("touchend", this.end, !1),
            this.element.addEventListener("touchcancel", this.cancel, !1),
            this.preV = {
                x: null,
                y: null
            },
            this.pinchStartLen = null,
            this.zoom = 1,
            this.isDoubleTap = !1;
            var n = function() {};
            this.rotate = a(this.element, e.rotate || n),
            this.touchStart = a(this.element, e.touchStart || n),
            this.multipointStart = a(this.element, e.multipointStart || n),
            this.multipointEnd = a(this.element, e.multipointEnd || n),
            this.pinch = a(this.element, e.pinch || n),
            this.swipe = a(this.element, e.swipe || n),
            this.tap = a(this.element, e.tap || n),
            this.doubleTap = a(this.element, e.doubleTap || n),
            this.longTap = a(this.element, e.longTap || n),
            this.singleTap = a(this.element, e.singleTap || n),
            this.pressMove = a(this.element, e.pressMove || n),
            this.twoFingerPressMove = a(this.element, e.twoFingerPressMove || n),
            this.touchMove = a(this.element, e.touchMove || n),
            this.touchEnd = a(this.element, e.touchEnd || n),
            this.touchCancel = a(this.element, e.touchCancel || n),
            this._cancelAllHandler = this.cancelAll.bind(this),
            window.removeEventListener("scroll", this._cancelAllHandler),
            window.addEventListener("scroll", this._cancelAllHandler),
            this.delta = null,
            this.last = null,
            this.now = null,
            this.tapTimeout = null,
            this.singleTapTimeout = null,
            this.longTapTimeout = null,
            this.swipeTimeout = null,
            this.x1 = this.x2 = this.y1 = this.y2 = null,
            this.preTapPosition = {
                x: null,
                y: null
            }
        };
        c.prototype = {
            start: function(t) {
                if (t.touches) {
                    this.now = Date.now(),
                    this.x1 = t.touches[0].pageX,
                    this.y1 = t.touches[0].pageY,
                    this.delta = this.now - (this.last || this.now),
                    this.touchStart.dispatch(t, this.element),
                    null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30),
                    this.preTapPosition.x = this.x1,
                    this.preTapPosition.y = this.y1,
                    this.last = this.now;
                    var n = this.preV;
                    if (t.touches.length > 1) {
                        this._cancelLongTap(),
                        this._cancelSingleTap();
                        var r = {
                            x: t.touches[1].pageX - this.x1,
                            y: t.touches[1].pageY - this.y1
                        };
                        n.x = r.x,
                        n.y = r.y,
                        this.pinchStartLen = e(n),
                        this.multipointStart.dispatch(t, this.element)
                    }
                    this._preventTap = !1,
                    this.longTapTimeout = setTimeout(function() {
                        this.longTap.dispatch(t, this.element),
                        this._preventTap = !0
                    }.bind(this), 750)
                }
            },
            move: function(t) {
                if (t.touches) {
                    var n = this.preV,
                    r = t.touches.length,
                    o = t.touches[0].pageX,
                    a = t.touches[0].pageY;
                    if (this.isDoubleTap = !1, r > 1) {
                        var s = t.touches[1].pageX,
                        c = t.touches[1].pageY,
                        u = {
                            x: t.touches[1].pageX - o,
                            y: t.touches[1].pageY - a
                        };
                        null !== n.x && (this.pinchStartLen > 0 && (t.zoom = e(u) / this.pinchStartLen, this.pinch.dispatch(t, this.element)), t.angle = i(u, n), this.rotate.dispatch(t, this.element)),
                        n.x = u.x,
                        n.y = u.y,
                        null !== this.x2 && null !== this.sx2 ? (t.deltaX = (o - this.x2 + s - this.sx2) / 2, t.deltaY = (a - this.y2 + c - this.sy2) / 2) : (t.deltaX = 0, t.deltaY = 0),
                        this.twoFingerPressMove.dispatch(t, this.element),
                        this.sx2 = s,
                        this.sy2 = c
                    } else null !== this.x2 ? (t.deltaX = o - this.x2, t.deltaY = a - this.y2) : (t.deltaX = 0, t.deltaY = 0),
                    this.pressMove.dispatch(t, this.element);
                    this.touchMove.dispatch(t, this.element),
                    this._cancelLongTap(),
                    this.x2 = o,
                    this.y2 = a,
                    r > 1 && t.preventDefault()
                }
            },
            end: function(t) {
                if (t.changedTouches) {
                    this._cancelLongTap();
                    var e = this;
                    t.touches.length < 2 && this.multipointEnd.dispatch(t, this.element),
                    this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (t.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        e.swipe.dispatch(t, this.element)
                    },
                    0)) : (this.tapTimeout = setTimeout(function() {
                        e._preventTap || e.tap.dispatch(t, this.element),
                        e.isDoubleTap && (e.doubleTap.dispatch(t, this.element), clearTimeout(e.singleTapTimeout), e.isDoubleTap = !1)
                    },
                    0), e.isDoubleTap || (e.singleTapTimeout = setTimeout(function() {
                        e.singleTap.dispatch(t, this.element)
                    },
                    250))),
                    this.touchEnd.dispatch(t, this.element),
                    this.preV.x = 0,
                    this.preV.y = 0,
                    this.zoom = 1,
                    this.pinchStartLen = null,
                    this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            },
            cancelAll: function() {
                this._preventTap = !0,
                clearTimeout(this.singleTapTimeout),
                clearTimeout(this.tapTimeout),
                clearTimeout(this.longTapTimeout),
                clearTimeout(this.swipeTimeout)
            },
            cancel: function(t) {
                this.cancelAll(),
                this.touchCancel.dispatch(t, this.element)
            },
            _cancelLongTap: function() {
                clearTimeout(this.longTapTimeout)
            },
            _cancelSingleTap: function() {
                clearTimeout(this.singleTapTimeout)
            },
            _swipeDirection: function(t, e, n, r) {
                return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left": "Right": n - r > 0 ? "Up": "Down"
            },
            on: function(t, e) {
                this[t] && this[t].add(e)
            },
            off: function(t, e) {
                this[t] && this[t].del(e)
            },
            destroy: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
                this.tapTimeout && clearTimeout(this.tapTimeout),
                this.longTapTimeout && clearTimeout(this.longTapTimeout),
                this.swipeTimeout && clearTimeout(this.swipeTimeout),
                this.element.removeEventListener("touchstart", this.start),
                this.element.removeEventListener("touchmove", this.move),
                this.element.removeEventListener("touchend", this.end),
                this.element.removeEventListener("touchcancel", this.cancel),
                this.rotate.del(),
                this.touchStart.del(),
                this.multipointStart.del(),
                this.multipointEnd.del(),
                this.pinch.del(),
                this.swipe.del(),
                this.tap.del(),
                this.doubleTap.del(),
                this.longTap.del(),
                this.singleTap.del(),
                this.pressMove.del(),
                this.twoFingerPressMove.del(),
                this.touchMove.del(),
                this.touchEnd.del(),
                this.touchCancel.del(),
                this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null,
                null
            }
        },
        t.exports = c
    } ()
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        var n = new Image;
        n.onload = function() {
            i.getData(n,
            function() {
                e(i.getTag(this, "Orientation"))
            })
        },
        n.src = t
    }
    function o(t, e, n) {
        var r = new Image;
        r.onload = function() {
            var t, o, i, a, s = 0;
            t = r.naturalWidth,
            o = r.naturalHeight;
            var c = Math.max(t, o);
            if (c > 1024) {
                var u = Math.min(t, o);
                u = u / c * 1024,
                c = 1024,
                t > o ? (t = c, o = u) : (t = u, o = c)
            }
            var l = document.createElement("canvas");
            l.width = i = t,
            l.height = a = o;
            var f = l.getContext("2d");
            switch (e) {
            case 3:
                s = 180,
                t = -i,
                o = -a;
                break;
            case 6:
                l.width = a,
                l.height = i,
                s = 90,
                t = i,
                o = -a;
                break;
            case 8:
                l.width = a,
                l.height = i,
                s = 270,
                t = -i,
                o = a
            }
            f.rotate(s * Math.PI / 180),
            f.drawImage(r, 0, 0, t, o),
            n(l.toDataURL("image/jpeg", .5))
        },
        r.src = t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(842);
    e.getOrientation = r,
    e.getImgData = o
},
function(t, e, r) {
    var o, i; (function() {
        function r(t) {
            return !! t.exifdata
        }
        function a(t, e) {
            e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "",
            t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
            for (var n = atob(t), r = n.length, o = new ArrayBuffer(r), i = new Uint8Array(o), a = 0; a < r; a++) i[a] = n.charCodeAt(a);
            return o
        }
        function s(t, e) {
            var n = new XMLHttpRequest;
            n.open("GET", t, !0),
            n.responseType = "blob",
            n.onload = function(t) {
                200 != this.status && 0 !== this.status || e(this.response)
            },
            n.send()
        }
        function c(t, e) {
            function n(n) {
                var r = u(n);
                t.exifdata = r || {};
                var o = l(n);
                if (t.iptcdata = o || {},
                k.isXmpEnabled) {
                    var i = m(n);
                    t.xmpdata = i || {}
                }
                e && e.call(t)
            }
            if (t.src) if (/^data\:/i.test(t.src)) {
                var r = a(t.src);
                n(r)
            } else if (/^blob\:/i.test(t.src)) {
                var o = new FileReader;
                o.onload = function(t) {
                    n(t.target.result)
                },
                s(t.src,
                function(t) {
                    o.readAsArrayBuffer(t)
                })
            } else {
                var i = new XMLHttpRequest;
                i.onload = function() {
                    if (200 != this.status && 0 !== this.status) throw "Could not load image";
                    n(i.response),
                    i = null
                },
                i.open("GET", t.src, !0),
                i.responseType = "arraybuffer",
                i.send(null)
            } else if (self.FileReader && (t instanceof self.Blob || t instanceof self.File)) {
                var o = new FileReader;
                o.onload = function(t) {
                    x && console.log("Got file of length " + t.target.result.byteLength),
                    n(t.target.result)
                },
                o.readAsArrayBuffer(t)
            }
        }
        function u(t) {
            var e = new DataView(t);
            if (x && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return x && console.log("Not a valid JPEG"),
            !1;
            for (var n, r = 2,
            o = t.byteLength; r < o;) {
                if (255 != e.getUint8(r)) return x && console.log("Not a valid marker at offset " + r + ", found: " + e.getUint8(r)),
                !1;
                if (n = e.getUint8(r + 1), x && console.log(n), 225 == n) return x && console.log("Found 0xFFE1 marker"),
                v(e, r + 4, e.getUint16(r + 2));
                r += 2 + e.getUint16(r + 2)
            }
        }
        function l(t) {
            var e = new DataView(t);
            if (x && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return x && console.log("Not a valid JPEG"),
            !1;
            for (var n = 2,
            r = t.byteLength; n < r;) {
                if (function(t, e) {
                    return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5)
                } (e, n)) {
                    var o = e.getUint8(n + 7);
                    o % 2 != 0 && (o += 1),
                    0 === o && (o = 4);
                    return f(t, n + 8 + o, e.getUint16(n + 6 + o))
                }
                n++
            }
        }
        function f(t, e, n) {
            for (var r, o, i, a, s = new DataView(t), c = {},
            u = e; u < e + n;) 28 === s.getUint8(u) && 2 === s.getUint8(u + 1) && (a = s.getUint8(u + 2)) in M && (i = s.getInt16(u + 3), i + 5, o = M[a], r = y(s, u + 5, i), c.hasOwnProperty(o) ? c[o] instanceof Array ? c[o].push(r) : c[o] = [c[o], r] : c[o] = r),
            u++;
            return c
        }
        function h(t, e, n, r, o) {
            var i, a, s, c = t.getUint16(n, !o),
            u = {};
            for (s = 0; s < c; s++) i = n + 12 * s + 2,
            a = r[t.getUint16(i, !o)],
            !a && x && console.log("Unknown tag: " + t.getUint16(i, !o)),
            u[a] = p(t, i, e, n, o);
            return u
        }
        function p(t, e, n, r, o) {
            var i, a, s, c, u, l, f = t.getUint16(e + 2, !o),
            h = t.getUint32(e + 4, !o),
            p = t.getUint32(e + 8, !o) + n;
            switch (f) {
            case 1:
            case 7:
                if (1 == h) return t.getUint8(e + 8, !o);
                for (i = h > 4 ? p: e + 8, a = [], c = 0; c < h; c++) a[c] = t.getUint8(i + c);
                return a;
            case 2:
                return i = h > 4 ? p: e + 8,
                y(t, i, h - 1);
            case 3:
                if (1 == h) return t.getUint16(e + 8, !o);
                for (i = h > 2 ? p: e + 8, a = [], c = 0; c < h; c++) a[c] = t.getUint16(i + 2 * c, !o);
                return a;
            case 4:
                if (1 == h) return t.getUint32(e + 8, !o);
                for (a = [], c = 0; c < h; c++) a[c] = t.getUint32(p + 4 * c, !o);
                return a;
            case 5:
                if (1 == h) return u = t.getUint32(p, !o),
                l = t.getUint32(p + 4, !o),
                s = new Number(u / l),
                s.numerator = u,
                s.denominator = l,
                s;
                for (a = [], c = 0; c < h; c++) u = t.getUint32(p + 8 * c, !o),
                l = t.getUint32(p + 4 + 8 * c, !o),
                a[c] = new Number(u / l),
                a[c].numerator = u,
                a[c].denominator = l;
                return a;
            case 9:
                if (1 == h) return t.getInt32(e + 8, !o);
                for (a = [], c = 0; c < h; c++) a[c] = t.getInt32(p + 4 * c, !o);
                return a;
            case 10:
                if (1 == h) return t.getInt32(p, !o) / t.getInt32(p + 4, !o);
                for (a = [], c = 0; c < h; c++) a[c] = t.getInt32(p + 8 * c, !o) / t.getInt32(p + 4 + 8 * c, !o);
                return a
            }
        }
        function d(t, e, n) {
            var r = t.getUint16(e, !n);
            return t.getUint32(e + 2 + 12 * r, !n)
        }
        function g(t, e, n, r) {
            var o = d(t, e + n, r);
            if (!o) return {};
            if (o > t.byteLength) return {};
            var i = h(t, e, e + o, O, r);
            if (i.Compression) switch (i.Compression) {
            case 6:
                if (i.JpegIFOffset && i.JpegIFByteCount) {
                    var a = e + i.JpegIFOffset,
                    s = i.JpegIFByteCount;
                    i.blob = new Blob([new Uint8Array(t.buffer, a, s)], {
                        type: "image/jpeg"
                    })
                }
                break;
            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", i.Compression)
            } else 2 == i.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented.");
            return i
        }
        function y(t, e, r) {
            var o = "";
            for (n = e; n < e + r; n++) o += String.fromCharCode(t.getUint8(n));
            return o
        }
        function v(t, e) {
            if ("Exif" != y(t, e, 4)) return x && console.log("Not valid EXIF data! " + y(t, e, 4)),
            !1;
            var n, r, o, i, a, s = e + 6;
            if (18761 == t.getUint16(s)) n = !1;
            else {
                if (19789 != t.getUint16(s)) return x && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),
                !1;
                n = !0
            }
            if (42 != t.getUint16(s + 2, !n)) return x && console.log("Not valid TIFF data! (no 0x002A)"),
            !1;
            var c = t.getUint32(s + 4, !n);
            if (c < 8) return x && console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(s + 4, !n)),
            !1;
            if (r = h(t, s, s + c, E, n), r.ExifIFDPointer) {
                i = h(t, s, s + r.ExifIFDPointer, S, n);
                for (o in i) {
                    switch (o) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        i[o] = _[o][i[o]];
                        break;
                    case "ExifVersion":
                    case "FlashpixVersion":
                        i[o] = String.fromCharCode(i[o][0], i[o][1], i[o][2], i[o][3]);
                        break;
                    case "ComponentsConfiguration":
                        i[o] = _.Components[i[o][0]] + _.Components[i[o][1]] + _.Components[i[o][2]] + _.Components[i[o][3]]
                    }
                    r[o] = i[o]
                }
            }
            if (r.GPSInfoIFDPointer) {
                a = h(t, s, s + r.GPSInfoIFDPointer, T, n);
                for (o in a) {
                    switch (o) {
                    case "GPSVersionID":
                        a[o] = a[o][0] + "." + a[o][1] + "." + a[o][2] + "." + a[o][3]
                    }
                    r[o] = a[o]
                }
            }
            return r.thumbnail = g(t, s, c, n),
            r
        }
        function m(t) {
            if ("DOMParser" in self) {
                var e = new DataView(t);
                if (x && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return x && console.log("Not a valid JPEG"),
                !1;
                for (var n = 2,
                r = t.byteLength,
                o = new DOMParser; n < r - 4;) {
                    if ("http" == y(e, n, 4)) {
                        var i = n - 1,
                        a = e.getUint16(n - 2) - 1,
                        s = y(e, i, a),
                        c = s.indexOf("xmpmeta>") + 8;
                        s = s.substring(s.indexOf("<x:xmpmeta"), c);
                        var u = s.indexOf("x:xmpmeta") + 10;
                        s = s.slice(0, u) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + s.slice(u);
                        return w(o.parseFromString(s, "text/xml"))
                    }
                    n++
                }
            }
        }
        function b(t) {
            var e = {};
            if (1 == t.nodeType) {
                if (t.attributes.length > 0) {
                    e["@attributes"] = {};
                    for (var n = 0; n < t.attributes.length; n++) {
                        var r = t.attributes.item(n);
                        e["@attributes"][r.nodeName] = r.nodeValue
                    }
                }
            } else if (3 == t.nodeType) return t.nodeValue;
            if (t.hasChildNodes()) for (var o = 0; o < t.childNodes.length; o++) {
                var i = t.childNodes.item(o),
                a = i.nodeName;
                if (null == e[a]) e[a] = b(i);
                else {
                    if (null == e[a].push) {
                        var s = e[a];
                        e[a] = [],
                        e[a].push(s)
                    }
                    e[a].push(b(i))
                }
            }
            return e
        }
        function w(t) {
            try {
                var e = {};
                if (t.children.length > 0) for (var n = 0; n < t.children.length; n++) {
                    var r = t.children.item(n),
                    o = r.attributes;
                    for (var i in o) {
                        var a = o[i],
                        s = a.nodeName,
                        c = a.nodeValue;
                        void 0 !== s && (e[s] = c)
                    }
                    var u = r.nodeName;
                    if (void 0 === e[u]) e[u] = b(r);
                    else {
                        if (void 0 === e[u].push) {
                            var l = e[u];
                            e[u] = [],
                            e[u].push(l)
                        }
                        e[u].push(b(r))
                    }
                } else e = t.textContent;
                return e
            } catch(t) {
                console.log(t.message)
            }
        }
        var x = !1,
        k = function(t) {
            return t instanceof k ? t: this instanceof k ? void(this.EXIFwrapped = t) : new k(t)
        };
        void 0 !== t && t.exports && (e = t.exports = k),
        e.EXIF = k;
        var S = k.Tags = {
            36864 : "ExifVersion",
            40960 : "FlashpixVersion",
            40961 : "ColorSpace",
            40962 : "PixelXDimension",
            40963 : "PixelYDimension",
            37121 : "ComponentsConfiguration",
            37122 : "CompressedBitsPerPixel",
            37500 : "MakerNote",
            37510 : "UserComment",
            40964 : "RelatedSoundFile",
            36867 : "DateTimeOriginal",
            36868 : "DateTimeDigitized",
            37520 : "SubsecTime",
            37521 : "SubsecTimeOriginal",
            37522 : "SubsecTimeDigitized",
            33434 : "ExposureTime",
            33437 : "FNumber",
            34850 : "ExposureProgram",
            34852 : "SpectralSensitivity",
            34855 : "ISOSpeedRatings",
            34856 : "OECF",
            37377 : "ShutterSpeedValue",
            37378 : "ApertureValue",
            37379 : "BrightnessValue",
            37380 : "ExposureBias",
            37381 : "MaxApertureValue",
            37382 : "SubjectDistance",
            37383 : "MeteringMode",
            37384 : "LightSource",
            37385 : "Flash",
            37396 : "SubjectArea",
            37386 : "FocalLength",
            41483 : "FlashEnergy",
            41484 : "SpatialFrequencyResponse",
            41486 : "FocalPlaneXResolution",
            41487 : "FocalPlaneYResolution",
            41488 : "FocalPlaneResolutionUnit",
            41492 : "SubjectLocation",
            41493 : "ExposureIndex",
            41495 : "SensingMethod",
            41728 : "FileSource",
            41729 : "SceneType",
            41730 : "CFAPattern",
            41985 : "CustomRendered",
            41986 : "ExposureMode",
            41987 : "WhiteBalance",
            41988 : "DigitalZoomRation",
            41989 : "FocalLengthIn35mmFilm",
            41990 : "SceneCaptureType",
            41991 : "GainControl",
            41992 : "Contrast",
            41993 : "Saturation",
            41994 : "Sharpness",
            41995 : "DeviceSettingDescription",
            41996 : "SubjectDistanceRange",
            40965 : "InteroperabilityIFDPointer",
            42016 : "ImageUniqueID"
        },
        E = k.TiffTags = {
            256 : "ImageWidth",
            257 : "ImageHeight",
            34665 : "ExifIFDPointer",
            34853 : "GPSInfoIFDPointer",
            40965 : "InteroperabilityIFDPointer",
            258 : "BitsPerSample",
            259 : "Compression",
            262 : "PhotometricInterpretation",
            274 : "Orientation",
            277 : "SamplesPerPixel",
            284 : "PlanarConfiguration",
            530 : "YCbCrSubSampling",
            531 : "YCbCrPositioning",
            282 : "XResolution",
            283 : "YResolution",
            296 : "ResolutionUnit",
            273 : "StripOffsets",
            278 : "RowsPerStrip",
            279 : "StripByteCounts",
            513 : "JPEGInterchangeFormat",
            514 : "JPEGInterchangeFormatLength",
            301 : "TransferFunction",
            318 : "WhitePoint",
            319 : "PrimaryChromaticities",
            529 : "YCbCrCoefficients",
            532 : "ReferenceBlackWhite",
            306 : "DateTime",
            270 : "ImageDescription",
            271 : "Make",
            272 : "Model",
            305 : "Software",
            315 : "Artist",
            33432 : "Copyright"
        },
        T = k.GPSTags = {
            0 : "GPSVersionID",
            1 : "GPSLatitudeRef",
            2 : "GPSLatitude",
            3 : "GPSLongitudeRef",
            4 : "GPSLongitude",
            5 : "GPSAltitudeRef",
            6 : "GPSAltitude",
            7 : "GPSTimeStamp",
            8 : "GPSSatellites",
            9 : "GPSStatus",
            10 : "GPSMeasureMode",
            11 : "GPSDOP",
            12 : "GPSSpeedRef",
            13 : "GPSSpeed",
            14 : "GPSTrackRef",
            15 : "GPSTrack",
            16 : "GPSImgDirectionRef",
            17 : "GPSImgDirection",
            18 : "GPSMapDatum",
            19 : "GPSDestLatitudeRef",
            20 : "GPSDestLatitude",
            21 : "GPSDestLongitudeRef",
            22 : "GPSDestLongitude",
            23 : "GPSDestBearingRef",
            24 : "GPSDestBearing",
            25 : "GPSDestDistanceRef",
            26 : "GPSDestDistance",
            27 : "GPSProcessingMethod",
            28 : "GPSAreaInformation",
            29 : "GPSDateStamp",
            30 : "GPSDifferential"
        },
        O = k.IFD1Tags = {
            256 : "ImageWidth",
            257 : "ImageHeight",
            258 : "BitsPerSample",
            259 : "Compression",
            262 : "PhotometricInterpretation",
            273 : "StripOffsets",
            274 : "Orientation",
            277 : "SamplesPerPixel",
            278 : "RowsPerStrip",
            279 : "StripByteCounts",
            282 : "XResolution",
            283 : "YResolution",
            284 : "PlanarConfiguration",
            296 : "ResolutionUnit",
            513 : "JpegIFOffset",
            514 : "JpegIFByteCount",
            529 : "YCbCrCoefficients",
            530 : "YCbCrSubSampling",
            531 : "YCbCrPositioning",
            532 : "ReferenceBlackWhite"
        },
        _ = k.StringValues = {
            ExposureProgram: {
                0 : "Not defined",
                1 : "Manual",
                2 : "Normal program",
                3 : "Aperture priority",
                4 : "Shutter priority",
                5 : "Creative program",
                6 : "Action program",
                7 : "Portrait mode",
                8 : "Landscape mode"
            },
            MeteringMode: {
                0 : "Unknown",
                1 : "Average",
                2 : "CenterWeightedAverage",
                3 : "Spot",
                4 : "MultiSpot",
                5 : "Pattern",
                6 : "Partial",
                255 : "Other"
            },
            LightSource: {
                0 : "Unknown",
                1 : "Daylight",
                2 : "Fluorescent",
                3 : "Tungsten (incandescent light)",
                4 : "Flash",
                9 : "Fine weather",
                10 : "Cloudy weather",
                11 : "Shade",
                12 : "Daylight fluorescent (D 5700 - 7100K)",
                13 : "Day white fluorescent (N 4600 - 5400K)",
                14 : "Cool white fluorescent (W 3900 - 4500K)",
                15 : "White fluorescent (WW 3200 - 3700K)",
                17 : "Standard light A",
                18 : "Standard light B",
                19 : "Standard light C",
                20 : "D55",
                21 : "D65",
                22 : "D75",
                23 : "D50",
                24 : "ISO studio tungsten",
                255 : "Other"
            },
            Flash: {
                0 : "Flash did not fire",
                1 : "Flash fired",
                5 : "Strobe return light not detected",
                7 : "Strobe return light detected",
                9 : "Flash fired, compulsory flash mode",
                13 : "Flash fired, compulsory flash mode, return light not detected",
                15 : "Flash fired, compulsory flash mode, return light detected",
                16 : "Flash did not fire, compulsory flash mode",
                24 : "Flash did not fire, auto mode",
                25 : "Flash fired, auto mode",
                29 : "Flash fired, auto mode, return light not detected",
                31 : "Flash fired, auto mode, return light detected",
                32 : "No flash function",
                65 : "Flash fired, red-eye reduction mode",
                69 : "Flash fired, red-eye reduction mode, return light not detected",
                71 : "Flash fired, red-eye reduction mode, return light detected",
                73 : "Flash fired, compulsory flash mode, red-eye reduction mode",
                77 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                79 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                89 : "Flash fired, auto mode, red-eye reduction mode",
                93 : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                95 : "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            SensingMethod: {
                1 : "Not defined",
                2 : "One-chip color area sensor",
                3 : "Two-chip color area sensor",
                4 : "Three-chip color area sensor",
                5 : "Color sequential area sensor",
                7 : "Trilinear sensor",
                8 : "Color sequential linear sensor"
            },
            SceneCaptureType: {
                0 : "Standard",
                1 : "Landscape",
                2 : "Portrait",
                3 : "Night scene"
            },
            SceneType: {
                1 : "Directly photographed"
            },
            CustomRendered: {
                0 : "Normal process",
                1 : "Custom process"
            },
            WhiteBalance: {
                0 : "Auto white balance",
                1 : "Manual white balance"
            },
            GainControl: {
                0 : "None",
                1 : "Low gain up",
                2 : "High gain up",
                3 : "Low gain down",
                4 : "High gain down"
            },
            Contrast: {
                0 : "Normal",
                1 : "Soft",
                2 : "Hard"
            },
            Saturation: {
                0 : "Normal",
                1 : "Low saturation",
                2 : "High saturation"
            },
            Sharpness: {
                0 : "Normal",
                1 : "Soft",
                2 : "Hard"
            },
            SubjectDistanceRange: {
                0 : "Unknown",
                1 : "Macro",
                2 : "Close view",
                3 : "Distant view"
            },
            FileSource: {
                3 : "DSC"
            },
            Components: {
                0 : "",
                1 : "Y",
                2 : "Cb",
                3 : "Cr",
                4 : "R",
                5 : "G",
                6 : "B"
            }
        },
        M = {
            120 : "caption",
            110 : "credit",
            25 : "keywords",
            55 : "dateCreated",
            80 : "byline",
            85 : "bylineTitle",
            122 : "captionWriter",
            105 : "headline",
            116 : "copyright",
            15 : "category"
        };
        k.enableXmp = function() {
            k.isXmpEnabled = !0
        },
        k.disableXmp = function() {
            k.isXmpEnabled = !1
        },
        k.getData = function(t, e) {
            return ! ((self.Image && t instanceof self.Image || self.HTMLImageElement && t instanceof self.HTMLImageElement) && !t.complete) && (r(t) ? e && e.call(t) : c(t, e), !0)
        },
        k.getTag = function(t, e) {
            if (r(t)) return t.exifdata[e]
        },
        k.getIptcTag = function(t, e) {
            if (r(t)) return t.iptcdata[e]
        },
        k.getAllTags = function(t) {
            if (!r(t)) return {};
            var e, n = t.exifdata,
            o = {};
            for (e in n) n.hasOwnProperty(e) && (o[e] = n[e]);
            return o
        },
        k.getAllIptcTags = function(t) {
            if (!r(t)) return {};
            var e, n = t.iptcdata,
            o = {};
            for (e in n) n.hasOwnProperty(e) && (o[e] = n[e]);
            return o
        },
        k.pretty = function(t) {
            if (!r(t)) return "";
            var e, n = t.exifdata,
            o = "";
            for (e in n) n.hasOwnProperty(e) && ("object" == typeof n[e] ? n[e] instanceof Number ? o += e + " : " + n[e] + " [" + n[e].numerator + "/" + n[e].denominator + "]\r\n": o += e + " : [" + n[e].length + " values]\r\n": o += e + " : " + n[e] + "\r\n");
            return o
        },
        k.readFromBinaryFile = function(t) {
            return u(t)
        },
        o = [],
        void 0 !== (i = function() {
            return k
        }.apply(e, o)) && (t.exports = i)
    }).call(this)
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mz/1.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mz/2.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mz/3.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/1.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/2.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/3.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/4.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/5.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/6.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/mj/7.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/1.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/2.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/3.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/4.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/5.png"
},
function(t, e, n) {
    t.exports = n.p + "img/tl/qt/6.png"
}]);

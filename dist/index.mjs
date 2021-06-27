import t from "assert";

function e() {
    e = function (t, e) {
        return new u(t, void 0, e);
    };
    var t = RegExp.prototype,
        o = new WeakMap();
    function u(t, e, r) {
        var i = new RegExp(t, e);
        return o.set(i, r || o.get(t)), n(i, u.prototype);
    }
    function i(t, e) {
        var r = o.get(e);
        return Object.keys(r).reduce(function (e, n) {
            return (e[n] = t[r[n]]), e;
        }, Object.create(null));
    }
    return (
        r(u, RegExp),
        (u.prototype.exec = function (e) {
            var r = t.exec.call(this, e);
            return r && (r.groups = i(r, this)), r;
        }),
        (u.prototype[Symbol.replace] = function (e, r) {
            if ("string" == typeof r) {
                var n = o.get(this);
                return t[Symbol.replace].call(
                    this,
                    e,
                    r.replace(/\$<([^>]+)>/g, function (t, e) {
                        return "$" + n[e];
                    })
                );
            }
            if ("function" == typeof r) {
                var u = this;
                return t[Symbol.replace].call(this, e, function () {
                    var t = arguments;
                    return (
                        "object" != typeof t[t.length - 1] &&
                            (t = [].slice.call(t)).push(i(t, u)),
                        r.apply(this, t)
                    );
                });
            }
            return t[Symbol.replace].call(this, e, r);
        }),
        e.apply(this, arguments)
    );
}

function r(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0,
        },
    })),
        e && n(t, e);
}

function n(t, e) {
    return (n =
        Object.setPrototypeOf ||
        function (t, e) {
            return (t.__proto__ = e), t;
        })(t, e);
}

function o(r) {
    t(Array.isArray(r));
    var n = (function (t) {
            var r = Object.create(null);
            return (
                t
                    .filter(function (t) {
                        return t.startsWith("--");
                    })
                    .map(function (t) {
                        return e(/\x2D\x2D(.+?)=(.+)/g, {
                            key: 1,
                            value: 2,
                        }).exec(t);
                    })
                    .forEach(function (t) {
                        var e = null == t ? void 0 : t.groups,
                            n = null == e ? void 0 : e.key,
                            o = null == e ? void 0 : e.value;
                        n && o && (r[n] = o);
                    }),
                r
            );
        })(r),
        o = r.filter(function (t) {
            return "string" == typeof t && !t.startsWith("-");
        });
    return (n[Symbol.iterator] = o[Symbol.iterator].bind(o)), n;
}

export default o;
//# sourceMappingURL=index.mjs.map

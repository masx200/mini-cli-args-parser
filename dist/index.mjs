import t from "assert";

function e() {
    e = function (t, e) {
        return new i(t, void 0, e);
    };
    var t = RegExp.prototype,
        o = new WeakMap();
    function i(t, e, r) {
        var u = new RegExp(t, e);
        return o.set(u, r || o.get(t)), n(u, i.prototype);
    }
    function u(t, e) {
        var r = o.get(e);
        return Object.keys(r).reduce(function (e, n) {
            return (e[n] = t[r[n]]), e;
        }, Object.create(null));
    }
    return (
        r(i, RegExp),
        (i.prototype.exec = function (e) {
            var r = t.exec.call(this, e);
            return r && (r.groups = u(r, this)), r;
        }),
        (i.prototype[Symbol.replace] = function (e, r) {
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
                var i = this;
                return t[Symbol.replace].call(this, e, function () {
                    var t = arguments;
                    return (
                        "object" != typeof t[t.length - 1] &&
                            (t = [].slice.call(t)).push(u(t, i)),
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
        Object.defineProperty(t, "prototype", {
            writable: !1,
        }),
        e && n(t, e);
}

function n(t, e) {
    return (
        (n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                  return (t.__proto__ = e), t;
              }),
        n(t, e)
    );
}

function o(r) {
    t(Array.isArray(r));
    var n = (function (t) {
            var r = Object.create(null);
            return (
                t
                    .filter((t) => t.startsWith("--"))
                    .map((t) =>
                        e(/\x2D\x2D(.+?)=(.+)/g, {
                            key: 1,
                            value: 2,
                        }).exec(t)
                    )
                    .forEach((t) => {
                        var e = null == t ? void 0 : t.groups,
                            n = null == e ? void 0 : e.key,
                            o = null == e ? void 0 : e.value;
                        n && o && (r[n] = o);
                    }),
                r
            );
        })(r),
        o = r.filter((t) => "string" == typeof t && !t.startsWith("-"));
    return (n[Symbol.iterator] = o[Symbol.iterator].bind(o)), n;
}

export { o as default };
//# sourceMappingURL=index.mjs.map

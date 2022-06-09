"use strict";

function t(t) {
    return t && "object" == typeof t && "default" in t
        ? t
        : {
              default: t,
          };
}

var e = t(require("assert"));

function r() {
    r = function (t, e) {
        return new u(t, void 0, e);
    };
    var t = RegExp.prototype,
        e = new WeakMap();
    function u(t, r, n) {
        var i = new RegExp(t, r);
        return e.set(i, n || e.get(t)), o(i, u.prototype);
    }
    function i(t, r) {
        var n = e.get(r);
        return Object.keys(n).reduce(function (e, r) {
            return (e[r] = t[n[r]]), e;
        }, Object.create(null));
    }
    return (
        n(u, RegExp),
        (u.prototype.exec = function (e) {
            var r = t.exec.call(this, e);
            return r && (r.groups = i(r, this)), r;
        }),
        (u.prototype[Symbol.replace] = function (r, n) {
            if ("string" == typeof n) {
                var o = e.get(this);
                return t[Symbol.replace].call(
                    this,
                    r,
                    n.replace(/\$<([^>]+)>/g, function (t, e) {
                        return "$" + o[e];
                    })
                );
            }
            if ("function" == typeof n) {
                var u = this;
                return t[Symbol.replace].call(this, r, function () {
                    var t = arguments;
                    return (
                        "object" != typeof t[t.length - 1] &&
                            (t = [].slice.call(t)).push(i(t, u)),
                        n.apply(this, t)
                    );
                });
            }
            return t[Symbol.replace].call(this, r, n);
        }),
        r.apply(this, arguments)
    );
}

function n(t, e) {
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
        e && o(t, e);
}

function o(t, e) {
    return (
        (o = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                  return (t.__proto__ = e), t;
              }),
        o(t, e)
    );
}

module.exports = function (t) {
    e.default(Array.isArray(t));
    var n = (function (t) {
            var e = Object.create(null);
            return (
                t
                    .filter((t) => t.startsWith("--"))
                    .map((t) =>
                        r(/\x2D\x2D(.+?)=(.+)/g, {
                            key: 1,
                            value: 2,
                        }).exec(t)
                    )
                    .forEach((t) => {
                        var r = null == t ? void 0 : t.groups,
                            n = null == r ? void 0 : r.key,
                            o = null == r ? void 0 : r.value;
                        n && o && (e[n] = o);
                    }),
                e
            );
        })(t),
        o = t.filter((t) => "string" == typeof t && !t.startsWith("-"));
    return (n[Symbol.iterator] = o[Symbol.iterator].bind(o)), n;
};
//# sourceMappingURL=index.cjs.map

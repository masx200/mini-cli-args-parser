"use strict";

function t(t) {
    return t && "object" == typeof t && "default" in t ? t : {
        default: t
    };
}

var e = t(require("assert"));

function r() {
    r = function(t, e) {
        return new i(t, void 0, e);
    };
    var t = RegExp.prototype, e = new WeakMap;
    function i(t, r, o) {
        var u = new RegExp(t, r);
        return e.set(u, o || e.get(t)), n(u, i.prototype);
    }
    function u(t, r) {
        var o = e.get(r);
        return Object.keys(o).reduce((function(e, r) {
            var n = o[r];
            if ("number" == typeof n) e[r] = t[n]; else {
                for (var i = 0; void 0 === t[n[i]] && i + 1 < n.length; ) i++;
                e[r] = t[n[i]];
            }
            return e;
        }), Object.create(null));
    }
    return o(i, RegExp), i.prototype.exec = function(e) {
        var r = t.exec.call(this, e);
        if (r) {
            r.groups = u(r, this);
            var o = r.indices;
            o && (o.groups = u(o, this));
        }
        return r;
    }, i.prototype[Symbol.replace] = function(r, o) {
        if ("string" == typeof o) {
            var n = e.get(this);
            return t[Symbol.replace].call(this, r, o.replace(/\$<([^>]+)>/g, (function(t, e) {
                var r = n[e];
                return "$" + (Array.isArray(r) ? r.join("$") : r);
            })));
        }
        if ("function" == typeof o) {
            var i = this;
            return t[Symbol.replace].call(this, r, (function() {
                var t = arguments;
                return "object" != typeof t[t.length - 1] && (t = [].slice.call(t)).push(u(t, i)), 
                o.apply(this, t);
            }));
        }
        return t[Symbol.replace].call(this, r, o);
    }, r.apply(this, arguments);
}

function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && n(t, e);
}

function n(t, e) {
    return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, n(t, e);
}

function i(t) {
    e.default(Array.isArray(t));
    var o = function(t) {
        var e = Object.create(null);
        return t.filter((t => t.startsWith("--"))).map((t => r(/\x2D\x2D(.+?)=(.+)/g, {
            key: 1,
            value: 2
        }).exec(t))).forEach((t => {
            var r = null == t ? void 0 : t.groups, o = null == r ? void 0 : r.key, n = null == r ? void 0 : r.value;
            o && n && (e[o] = n);
        })), e;
    }(t), n = t.filter((t => "string" == typeof t && !t.startsWith("-")));
    return o[Symbol.iterator] = n[Symbol.iterator].bind(n), o;
}

module.exports = function(t) {
    const e = [], r = [], o = [];
    for (const n of t) {
        if ("--" === n) {
            o.push(...t.slice(t.indexOf(n) + 1));
            break;
        }
        n.startsWith("-") && !n.includes("=") ? e.push(n) : r.push(n);
    }
    const n = i(r);
    for (const t of e) if (t.startsWith("--") && t.length > 2 && "-" !== t[2]) n[t.slice(2)] = !0; else if (t.startsWith("-") && t.length > 1 && "-" !== t[1]) for (const e of t.slice(1)) n[e] = !0;
    const u = [ ...n ];
    return n[Symbol.iterator] = () => [ ...u, ...o ][Symbol.iterator](), n;
};
//# sourceMappingURL=index.cjs.map

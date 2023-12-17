import t from "assert";

function e() {
    e = function(t, e) {
        return new i(t, void 0, e);
    };
    var t = RegExp.prototype, n = new WeakMap;
    function i(t, e, r) {
        var c = new RegExp(t, e);
        return n.set(c, r || n.get(t)), o(c, i.prototype);
    }
    function c(t, e) {
        var r = n.get(e);
        return Object.keys(r).reduce((function(e, o) {
            var n = r[o];
            if ("number" == typeof n) e[o] = t[n]; else {
                for (var i = 0; void 0 === t[n[i]] && i + 1 < n.length; ) i++;
                e[o] = t[n[i]];
            }
            return e;
        }), Object.create(null));
    }
    return r(i, RegExp), i.prototype.exec = function(e) {
        var r = t.exec.call(this, e);
        if (r) {
            r.groups = c(r, this);
            var o = r.indices;
            o && (o.groups = c(o, this));
        }
        return r;
    }, i.prototype[Symbol.replace] = function(e, r) {
        if ("string" == typeof r) {
            var o = n.get(this);
            return t[Symbol.replace].call(this, e, r.replace(/\$<([^>]+)>/g, (function(t, e) {
                var r = o[e];
                return "$" + (Array.isArray(r) ? r.join("$") : r);
            })));
        }
        if ("function" == typeof r) {
            var i = this;
            return t[Symbol.replace].call(this, e, (function() {
                var t = arguments;
                return "object" != typeof t[t.length - 1] && (t = [].slice.call(t)).push(c(t, i)), 
                r.apply(this, t);
            }));
        }
        return t[Symbol.replace].call(this, e, r);
    }, e.apply(this, arguments);
}

function r(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && o(t, e);
}

function o(t, e) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, o(t, e);
}

function n(r) {
    t(Array.isArray(r));
    var o = function(t) {
        var r = Object.create(null);
        return t.filter((t => t.startsWith("--"))).map((t => e(/\x2D\x2D(.+?)=(.+)/g, {
            key: 1,
            value: 2
        }).exec(t))).forEach((t => {
            var e = null == t ? void 0 : t.groups, o = null == e ? void 0 : e.key, n = null == e ? void 0 : e.value;
            o && n && (r[o] = n);
        })), r;
    }(r), n = r.filter((t => "string" == typeof t && !t.startsWith("-")));
    return o[Symbol.iterator] = n[Symbol.iterator].bind(n), o;
}

function i(t) {
    const e = [], r = [], o = [];
    for (const n of t) {
        if ("--" === n) {
            o.push(...t.slice(t.indexOf(n) + 1));
            break;
        }
        n.startsWith("-") && !n.includes("=") ? e.push(n) : r.push(n);
    }
    const i = n(r);
    for (const t of e) if (t.startsWith("--") && t.length > 2 && "-" !== t[2]) i[t.slice(2)] = !0; else if (t.startsWith("-") && t.length > 1 && "-" !== t[1]) for (const e of t.slice(1)) i[e] = !0;
    const c = [ ...i ];
    return i[Symbol.iterator] = () => [ ...c, ...o ][Symbol.iterator](), i;
}

export { i as default };
//# sourceMappingURL=index.mjs.map

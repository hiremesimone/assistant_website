/*!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-04-10T19:48Z
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , d = f.toString
      , p = d.call(Object)
      , h = {}
      , g = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , m = function(e) {
        return null != e && e === e.window
    }
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var i, o, a = (n = n || r).createElement("script");
        if (a.text = e,
        t)
            for (i in v)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && a.setAttribute(i, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
        return new b.fn.init(e,t)
    }
      , w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.4.0",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    b.extend = b.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    b.extend({
        expando: "jQuery" + ("3.4.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (T(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var C = /*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
    function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ue(), S = ue(), A = ue(), k = ue(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, L = {}.hasOwnProperty, D = [], j = D.pop, q = D.push, H = D.push, O = D.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + R + "*(" + $ + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + R + "*\\]", W = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", B = new RegExp(R + "+","g"), _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), F = new RegExp("^" + R + "*," + R + "*"), z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), X = new RegExp(W), V = new RegExp("^" + $ + "$"), Y = {
            ID: new RegExp("^#(" + $ + ")"),
            CLASS: new RegExp("^\\.(" + $ + ")"),
            TAG: new RegExp("^(" + $ + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + M + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            d()
        }, ae = be((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(D = O.call(w.childNodes), w.childNodes),
            D[w.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: D.length ? function(e, t) {
                    q.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, r, i) {
            var o, s, l, c, f, h, v, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t),
            t = t || p,
            g)) {
                if (11 !== T && (f = K.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return H.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === T && U.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length; s--; )
                            h[s] = "#" + c + " " + xe(h[s]);
                        v = h.join(","),
                        y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return H.apply(r, y.querySelectorAll(v)),
                        r
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(_, "$1"), t, r, i)
        }
        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function le(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t
        }
        function de(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function me(e) {
            return le((function(t) {
                return t = +t,
                le((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }
                ))
            }
            ))
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        o = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML")
        }
        ,
        d = se.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
            g = !o(p),
            w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
            n.attributes = ce((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = ce((function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = Z.test(p.getElementsByClassName),
            n.getById = ce((function(e) {
                return h.appendChild(e).id = b,
                !p.getElementsByName || !p.getElementsByName(b).length
            }
            )),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = Z.test(p.querySelectorAll)) && (ce((function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + M + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            }
            )),
            ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            }
            ))),
            (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", W)
            }
            )),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Z.test(h.compareDocumentPosition),
            x = t || Z.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o)
                    return de(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? de(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && d(e),
            n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    k(t, !0)
                }
            return se(t, p, null, [e]).length > 0
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e),
            x(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (i = r.push(o));
                for (; i--; )
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = se.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += i(t);
            return n
        }
        ,
        (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && E(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = se.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (d = t; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [T, p, x];
                                        break
                                    }
                            } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]),
                                d !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                            e[r = P(e, o[a])] = !(n[r] = o[a])
                    }
                    )) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: le((function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(_, "$1"));
                    return r[b] ? le((function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    )) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: le((function(e) {
                    return function(t) {
                        return se(e, t).length > 0
                    }
                }
                )),
                contains: le((function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return (t.textContent || i(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: le((function(e) {
                    return V.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me((function() {
                    return [0]
                }
                )),
                last: me((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: me((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: me((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: me((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: me((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                    return e
                }
                )),
                gt: me((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = pe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = he(t);
        function ye() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, d = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return d[2] = l[2];
                                if (c[o] = d,
                                d[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function we(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(e, t, n, r, i, o) {
            return r && !r[b] && (r = Ce(r)),
            i && !i[b] && (i = Ce(i, o)),
            le((function(o, a, s, u) {
                var l, c, f, d = [], p = [], h = a.length, g = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : Te(g, d, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u),
                r)
                    for (l = Te(v, p),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [],
                            c = v.length; c--; )
                                (f = v[c]) && l.push(m[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && (l = i ? P(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = Te(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : H.apply(a, v)
            }
            ))
        }
        function Ee(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                return e === t
            }
            ), s, !0), f = be((function(e) {
                return P(t, e) > -1
            }
            ), s, !0), d = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    d = [be(we(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                            ;
                        return Ce(u > 1 && we(d), u > 1 && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(_, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                    }
                    d.push(n)
                }
            return we(d)
        }
        return ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = se.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = S[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = z.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(_, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(i = Y[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, i = [], o = [], s = A[e + " "];
            if (!s) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                (s = A(e, function(e, t) {
                    var n = t.length > 0
                      , i = e.length > 0
                      , o = function(o, a, s, u, c) {
                        var f, h, m, v = 0, y = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                        for (c && (l = a === p || a || c); y !== S && null != (f = C[y]); y++) {
                            if (i && f) {
                                for (h = 0,
                                a || f.ownerDocument === p || (d(f),
                                s = !g); m = e[h++]; )
                                    if (m(f, a || p, s)) {
                                        u.push(f);
                                        break
                                    }
                                c && (T = E)
                            }
                            n && ((f = !m && f) && v--,
                            o && x.push(f))
                        }
                        if (v += y,
                        n && y !== v) {
                            for (h = 0; m = t[h++]; )
                                m(x, b, a, s);
                            if (o) {
                                if (v > 0)
                                    for (; y--; )
                                        x[y] || b[y] || (b[y] = j.call(u));
                                b = Te(b)
                            }
                            H.apply(u, b),
                            c && !o && b.length > 0 && v + t.length > 1 && se.uniqueSort(u)
                        }
                        return c && (T = E,
                        l = w),
                        x
                    };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }
        ,
        u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && xe(u)))
                            return H.apply(n, i),
                            n;
                        break
                    }
            }
            return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        d(),
        n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }
        )),
        ce((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || fe("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || fe("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        ce((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || fe(M, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        se
    }(e);
    b.find = C,
    b.expr = C.selectors,
    b.expr[":"] = b.expr.pseudos,
    b.uniqueSort = b.unique = C.uniqueSort,
    b.text = C.getText,
    b.isXMLDoc = C.isXML,
    b.contains = C.contains,
    b.escapeSelector = C.escape;
    var E = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && b(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , A = b.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function L(e, t, n) {
        return g(t) ? b.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }
        )) : t.nodeType ? b.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? b.grep(e, (function(e) {
            return u.call(t, e) > -1 !== n
        }
        )) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    b.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(b(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (b.contains(i[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(L(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(L(this, e || [], !0))
        },
        is: function(e) {
            return !!L(this, "string" == typeof e && A.test(e) ? b(e) : e || [], !1).length
        }
    });
    var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof b ? t[0] : t,
                b.merge(this, b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                N.test(i[1]) && b.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }
    ).prototype = b.fn,
    D = b(r);
    var q = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && b(e);
            if (!A.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(b(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (k(e, "template") && (e = e.content || e),
            b.merge([], e.childNodes))
        }
    }, (function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = b.filter(r, i)),
            this.length > 1 && (H[e] || b.uniqueSort(i),
            q.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }
    ));
    var P = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(P) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    b.each(n, (function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    }
                    ))
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return b.each(arguments, (function(e, t) {
                    for (var n; (n = b.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= s && s--
                }
                )),
                this
            },
            has: function(e) {
                return e ? b.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    b.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return b.Deferred((function(t) {
                        b.each(n, (function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]]((function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, M, i), a(o, n, R, i)) : (o++,
                                    l.call(e, a(o, n, M, i), a(o, n, R, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== R && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return b.Deferred((function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : M, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : M)),
                        n[2][3].add(a(0, e, g(r) ? r : R))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? b.extend(e, i) : i
                }
            }
              , o = {};
            return b.each(n, (function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add((function() {
                    r = s
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }
            )),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = b.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            for (; n--; )
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    b.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var W = b.Deferred();
    function B() {
        r.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        b.ready()
    }
    b.fn.ready = function(e) {
        return W.then(e).catch((function(e) {
            b.readyException(e)
        }
        )),
        this
    }
    ,
    b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0,
            !0 !== e && --b.readyWait > 0 || W.resolveWith(r, [b]))
        }
    }),
    b.ready.then = W.then,
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(b.ready) : (r.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(b(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , F = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(F, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = b.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var G = new Y
      , Q = new Y
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function K(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Q.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    b.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)),
                        K(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            }
            )) : _(this, (function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = K(o, e)) ? n : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }
            ))
        }
    }),
    b.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = G.get(e, t),
                n && (!r || Array.isArray(n) ? r = G.access(e, t, b.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, (function() {
                b.dequeue(e, t)
            }
            ), o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: b.Callbacks("once memory").add((function() {
                    G.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                b.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = b.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = G.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = r.documentElement
      , ie = function(e) {
        return b.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.attachShadow && (ie = function(e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === b.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return b.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (b.cssNumber[t] ? "" : "px"), c = e.nodeType && (b.cssNumber[t] || "px" !== l && +u) && te.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                b.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            b.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = b.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = G.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            G.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? b(this).show() : b(this).hide()
            }
            ))
        }
    });
    var de = /^(?:checkbox|radio)$/i
      , pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && k(e, t) ? b.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var ye = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === x(o))
                    b.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (pe.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    b.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (f.textContent = "",
        p = 0; o = d[p++]; )
            if (r && b.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = ie(o),
            a = me(f.appendChild(o), "script"),
            l && ve(a),
            n)
                for (c = 0; o = a[c++]; )
                    he.test(o.type || "") && n.push(o);
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return r.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return b().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = b.guid++)),
        e.each((function() {
            b.event.add(this, t, i, r, n)
        }
        ))
    }
    function ke(e, t, n) {
        n ? (G.set(e, t, !1),
        b.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a)
                        (b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments),
                    G.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (i = G.get(this, t)) || r ? G.set(this, t, !1) : i = void 0,
                    a !== i)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i
                } else
                    a && (G.set(this, t, b.event.trigger(b.extend(a.shift(), b.Event.prototype), a, this)),
                    e.stopImmediatePropagation())
            }
        })) : b.event.add(e, t, Ce)
    }
    b.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = G.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && b.find.matchesSelector(re, i),
                n.guid || (n.guid = b.guid++),
                (u = m.events) || (u = m.events = {}),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(P) || [""]).length; l--; )
                    p = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = b.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = b.event.special[p] || {},
                    c = b.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && b.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    b.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = G.hasData(e) && G.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                    if (p = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = b.event.special[p] || {},
                        d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || b.removeEvent(e, p, m.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            b.event.remove(e, p + t[l], n, r, !0);
                b.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = b.event.fix(e), u = new Array(arguments.length), l = (G.get(this, "events") || {})[s.type] || [], c = b.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = b.event.handlers.call(this, s, l),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && void 0 === G.get(t, "click") && ke(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && void 0 === G.get(t, "click") && ke(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    b.Event = function(e, t) {
        if (!(this instanceof b.Event))
            return new b.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && b.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[b.expando] = !0
    }
    ,
    b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp),
    b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        b.event.special[e] = {
            setup: function() {
                return ke(this, e, Se),
                !1
            },
            trigger: function() {
                return ke(this, e),
                !0
            },
            delegateType: t
        }
    }
    )),
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || b.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    b.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each((function() {
                b.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Le = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e),
            a = G.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        b.event.add(t, i, l[i][n]);
            Q.hasData(e) && (s = Q.access(e),
            u = b.extend({}, s),
            Q.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, d = e.length, p = d - 1, m = t[0], v = g(m);
        if (v || d > 1 && "string" == typeof m && !h.checkClone && De.test(m))
            return e.each((function(i) {
                var o = e.eq(i);
                v && (t[0] = m.call(this, i, o.html())),
                Re(o, t, n, r)
            }
            ));
        if (d && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = b.map(me(i, "script"), He)).length; f < d; f++)
                l = i,
                f !== p && (l = b.clone(l, !0, !0),
                u && b.merge(s, me(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                b.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !G.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }) : y(l.textContent.replace(je, ""), l, c))
        }
        return e
    }
    function $e(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || b.cleanData(me(r)),
            r.parentNode && (n && ie(r) && ve(me(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = me(s),
                r = 0,
                i = (o = me(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || me(e),
                    a = a || me(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = me(s, "script")).length > 0 && ve(a, !u && me(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    b.fn.extend({
        detach: function(e) {
            return $e(this, e, !0)
        },
        remove: function(e) {
            return $e(this, e)
        },
        text: function(e) {
            return _(this, (function(e) {
                return void 0 === e ? b.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Re(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (b.cleanData(me(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return b.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return _(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (b.cleanData(me(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, (function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(me(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        b.fn[e] = function(e) {
            for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                b(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ));
    var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , We = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(ne.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = b.style(e, t)),
        !h.pixelBoxStyles() && Ie.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 12 === n(c.offsetWidth / 3),
                re.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        b.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"]
      , Ue = r.createElement("div").style
      , Xe = {};
    function Ve(e) {
        var t = b.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--; )
                if ((e = ze[n] + t)in Ue)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Je = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += b.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= b.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= b.css(e, "border" + ne[a] + "Width", !0, i))) : (u += b.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += b.css(e, "border" + ne[a] + "Width", !0, i) : s += b.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function et(e, t, n) {
        var r = We(e)
          , i = (!h.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ie.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === b.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Ve(s)),
                a = b.cssHooks[t] || b.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (b.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Ve(s)),
            (a = b.cssHooks[t] || b.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Je && (i = Je[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    b.each(["height", "width"], (function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !Ye.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Qe, (function() {
                        return et(e, t, r)
                    }
                    ))
            },
            set: function(e, n, r) {
                var i, o = We(e), a = !h.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === b.css(e, "boxSizing", !1, o), u = r ? Ke(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)),
                u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = b.css(e, t)),
                Ze(0, n, u)
            }
        }
    }
    )),
    b.cssHooks.marginLeft = Fe(h.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (b.cssHooks[e + t].set = Ze)
    }
    )),
    b.fn.extend({
        css: function(e, t) {
            return _(this, (function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = b.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    b.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || b.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    b.fx = tt.prototype.init,
    b.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, b.fx.interval),
        b.fx.tick())
    }
    function st() {
        return e.setTimeout((function() {
            nt = void 0
        }
        )),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o = 0, a = ct.prefilters.length, s = b.Deferred().always((function() {
            delete u.elem
        }
        )), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {},
                easing: b.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = b.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); o < a; o++)
            if (r = ct.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return b.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    b.Animation = b.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ct.tweeners[n] = ct.tweeners[n] || [],
                ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && ae(e), m = G.get(e, "fxshow");
            for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always((function() {
                d.always((function() {
                    a.unqueued--,
                    b.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (i = t[r],
                it.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    p[r] = m && m[r] || b.style(e, r)
                }
            if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = m && m.display) && (l = G.get(e, "display")),
                "none" === (c = b.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = b.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (d.done((function() {
                    h.display = l
                }
                )),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                u = !1,
                p)
                    u || (m ? "hidden"in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                        display: l
                    }),
                    o && (m.hidden = !g),
                    g && fe([e], !0),
                    d.done((function() {
                        for (r in g || fe([e]),
                        G.remove(e, "fxshow"),
                        p)
                            b.style(e, r, p[r])
                    }
                    ))),
                    u = lt(g ? m[r] : 0, r, d),
                    r in m || (m[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }),
    b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && b.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e)
              , o = b.speed(t, n, r)
              , a = function() {
                var t = ct(this, b.extend({}, e), o);
                (i || G.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = b.timers
                  , a = G.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || b.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = G.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    b.each(["toggle", "show", "hide"], (function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }
    )),
    b.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    )),
    b.timers = [],
    b.fx.tick = function() {
        var e, t = 0, n = b.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || b.fx.stop(),
        nt = void 0
    }
    ,
    b.fx.timer = function(e) {
        b.timers.push(e),
        b.fx.start()
    }
    ,
    b.fx.interval = 13,
    b.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    b.fx.stop = function() {
        rt = null
    }
    ,
    b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    b.fn.delay = function(t, n) {
        return t = b.fx && b.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }
        ))
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var ft, dt = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return _(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                b.removeAttr(this, e)
            }
            ))
        }
    }),
    b.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ft : void 0)),
                void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ft = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    b.each(b.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = dt[t] || b.find.attr;
        dt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = dt[a],
            dt[a] = i,
            i = null != n(e, t, r) ? a : null,
            dt[a] = o),
            i
        }
    }
    ));
    var pt = /^(?:input|select|textarea|button)$/i
      , ht = /^(?:a|area)$/i;
    function gt(e) {
        return (e.match(P) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return _(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[b.propFix[e] || e]
            }
            ))
        }
    }),
    b.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t,
                i = b.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        b.propFix[this.toLowerCase()] = this
    }
    )),
    b.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each((function(t) {
                    b(this).addClass(e.call(this, t, mt(this)))
                }
                ));
            if ((t = vt(e)).length)
                for (; n = this[u++]; )
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each((function(t) {
                    b(this).removeClass(e.call(this, t, mt(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; n = this[u++]; )
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                b(this).toggleClass(e.call(this, n, mt(this), t), t)
            }
            )) : this.each((function() {
                var t, i, o, a;
                if (r)
                    for (i = 0,
                    o = b(this),
                    a = vt(e); t = a[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && G.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e),
            this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }),
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : gt(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    b.each(["radio", "checkbox"], (function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = b.inArray(b(e).val(), t) > -1
            }
        },
        h.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    h.focusin = "onfocusin"in e;
    var xt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    b.extend(b.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, d, p, h, v = [i || r], y = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !xt.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (x = y.split("."),
            y = x.shift(),
            x.sort()),
            c = y.indexOf(":") < 0 && "on" + y,
            (t = t[b.expando] ? t : new b.Event(y,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : b.makeArray(n, [t]),
            p = b.event.special[y] || {},
            o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !m(i)) {
                    for (l = p.delegateType || y,
                    xt.test(l + y) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
                    h = s,
                    t.type = a > 1 ? l : p.bindType || y,
                    (d = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) && d.apply && V(s) && (t.result = d.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !V(i) || c && g(i[y]) && !m(i) && ((u = i[c]) && (i[c] = null),
                b.event.triggered = y,
                t.isPropagationStopped() && h.addEventListener(y, bt),
                i[y](),
                t.isPropagationStopped() && h.removeEventListener(y, bt),
                b.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(r, null, t)
        }
    }),
    b.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                b.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return b.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = G.access(r, t);
                i || r.addEventListener(e, n, !0),
                G.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = G.access(r, t) - 1;
                i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0),
                G.remove(r, t))
            }
        }
    }
    ));
    var wt = e.location
      , Tt = Date.now()
      , Ct = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t),
        n
    }
    ;
    var Et = /\[\]$/
      , St = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function Nt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            b.each(t, (function(t, i) {
                n || Et.test(e) ? r(e, i) : Nt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }
            ));
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                Nt(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e))
            b.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                Nt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && kt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
            }
            )).map((function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }
            )).get()
        }
    });
    var Lt = /%20/g
      , Dt = /#.*$/
      , jt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ht = /^(?:GET|HEAD)$/
      , Ot = /^\/\//
      , Pt = {}
      , Mt = {}
      , Rt = "*/".concat("*")
      , $t = r.createElement("a");
    function It(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(P) || [];
            if (g(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Wt(e, t, n, r) {
        var i = {}
          , o = e === Mt;
        function a(s) {
            var u;
            return i[s] = !0,
            b.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }
            )),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function Bt(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(!0, e, r),
        e
    }
    $t.href = wt.href,
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, b.ajaxSettings), t) : Bt(b.ajaxSettings, e)
        },
        ajaxPrefilter: It(Pt),
        ajaxTransport: It(Mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, d, p, h = b.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? b(g) : b.event, v = b.Deferred(), y = b.Callbacks("once memory"), x = h.statusCode || {}, w = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = qt.exec(a); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    S(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || wt.href) + "").replace(Ot, wt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = b.param(h.data, h.traditional)),
            Wt(Pt, h, n, E),
            c)
                return E;
            for (d in (f = b.event && h.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Ht.test(h.type),
            o = h.url.replace(Dt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (Ct.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(jt, "$1"),
            p = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + p),
            h.url = o + p),
            h.ifModified && (b.lastModified[o] && E.setRequestHeader("If-Modified-Since", b.lastModified[o]),
            b.etag[o] && E.setRequestHeader("If-None-Match", b.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                E.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            y.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = Wt(Mt, h, n, E)) {
                if (E.readyState = 1,
                f && m.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                    E.abort("timeout")
                }
                ), h.timeout));
                try {
                    c = !1,
                    i.send(w, S)
                } catch (e) {
                    if (c)
                        throw e;
                    S(-1, e)
                }
            } else
                S(-1, "No Transport");
            function S(t, n, r, s) {
                var l, d, p, w, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(h, E, r)),
                w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (b.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                d = w.data,
                l = !(p = w.error))) : (p = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [d, C, E]) : v.rejectWith(g, [E, C, p]),
                E.statusCode(x),
                x = void 0,
                f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? d : p]),
                y.fireWith(g, [E, C]),
                f && (m.trigger("ajaxComplete", [E, h]),
                --b.active || b.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }),
    b.each(["get", "post"], (function(e, t) {
        b[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    }
    )),
    b._evalUrl = function(e, t) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                b.globalEval(e, t)
            }
        })
    }
    ,
    b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = b(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each((function(t) {
                b(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = b(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = g(e);
            return this.each((function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                b(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }
    ,
    b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , Ft = b.ajaxSettings.xhr();
    h.cors = !!Ft && "withCredentials"in Ft,
    h.ajax = Ft = !!Ft,
    b.ajaxTransport((function(t) {
        var n, r;
        if (h.cors || Ft && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && r()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    b.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e),
                e
            }
        }
    }),
    b.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    b.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(i, o) {
                    t = b("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var zt, Ut = [], Xt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || b.expando + "_" + Tt++;
            return this[e] = !0,
            e
        }
    }),
    b.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Xt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || b.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always((function() {
                void 0 === o ? b(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Ut.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }
            )),
            "script"
    }
    )),
    h.createHTMLDocument = ((zt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === zt.childNodes.length),
    b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        a = !n && [],
        (o = N.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && b(a).remove(),
        b.merge([], o.childNodes)));
        var i, o, a
    }
    ,
    b.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = gt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    b.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"), c = b(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = b.css(e, "top"),
            u = b.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, b.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    b.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    b.offset.setOffset(this, e, t)
                }
                ));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === b.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0),
                    i.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", !0),
                    left: t.left - i.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            }
            ))
        }
    }),
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(r) {
            return _(this, (function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }
            ), e, r, arguments.length)
        }
    }
    )),
    b.each(["top", "left"], (function(e, t) {
        b.cssHooks[t] = Fe(h.pixelPosition, (function(e, n) {
            if (n)
                return n = _e(e, t),
                Ie.test(n) ? b(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    b.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            b.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return _(this, (function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }
                ), t, a ? i : void 0, a)
            }
        }
        ))
    }
    )),
    b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    )),
    b.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    b.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || b.guid++,
            i
    }
    ,
    b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }
    ,
    b.isArray = Array.isArray,
    b.parseJSON = JSON.parse,
    b.nodeName = k,
    b.isFunction = g,
    b.isWindow = m,
    b.camelCase = X,
    b.type = x,
    b.now = Date.now,
    b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return b
    }
    ));
    var Vt = e.jQuery
      , Yt = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Yt),
        t && e.jQuery === b && (e.jQuery = Vt),
        b
    }
    ,
    t || (e.jQuery = e.$ = b),
    b
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    var t, n, r, i = [], o = document, a = window, s = o.documentElement;
    function u() {
        if (i.length) {
            var r, u, l, c = 0, f = e.map(i, (function(e) {
                var t = e.data.selector
                  , n = e.$element;
                return t ? n.find(t) : n
            }
            ));
            for (t = t || ((l = {
                height: a.innerHeight,
                width: a.innerWidth
            }).height || !(r = o.compatMode) && e.support.boxModel || (l = {
                height: (u = "CSS1Compat" === r ? s : o.body).clientHeight,
                width: u.clientWidth
            }),
            l),
            n = n || {
                top: a.pageYOffset || s.scrollTop || o.body.scrollTop,
                left: a.pageXOffset || s.scrollLeft || o.body.scrollLeft
            }; c < i.length; c++)
                if (e.contains(s, f[c][0])) {
                    var d = e(f[c])
                      , p = {
                        height: d[0].offsetHeight,
                        width: d[0].offsetWidth
                    }
                      , h = d.offset()
                      , g = d.data("inview");
                    if (!n || !t)
                        return;
                    h.top + p.height > n.top - 150 && h.top + 150 < n.top + t.height && h.left + p.width > n.left && h.left < n.left + t.width ? g || d.data("inview", !0).trigger("inview", [!0]) : g && d.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    e.event.special.inview = {
        add: function(t) {
            i.push({
                data: t,
                $element: e(this),
                element: this
            }),
            !r && i.length && (r = setInterval(u, 150))
        },
        remove: function(e) {
            for (var t = 0; t < i.length; t++) {
                var n = i[t];
                if (n.element === this && n.data.guid === e.guid) {
                    i.splice(t, 1);
                    break
                }
            }
            i.length || (clearInterval(r),
            r = null)
        }
    },
    e(a).on("scroll resize scrollstop", (function() {
        t = n = null
    }
    )),
    !s.addEventListener && s.attachEvent && s.attachEvent("onfocusin", (function() {
        n = null
    }
    ))
}
)),
function(e, t, n) {
    "use strict";
    Object.defineProperty(HTMLInputElement.prototype, "validity", {
        get: function() {
            return function(e) {
                var n = e.getAttribute("type") || input.nodeName.toLowerCase()
                  , r = "number" === n || "range" === n
                  , i = e.value.length
                  , o = !0;
                if ("radio" === e.type && e.name) {
                    var a = t.getElementsByName(e.name);
                    if (a.length > 0)
                        for (var s = 0; s < a.length; s++)
                            if (a[s].form === e.form && e.checked) {
                                e = a[s];
                                break
                            }
                }
                var u = {
                    badInput: r && i > 0 && !/[-+]?[0-9]/.test(e.value),
                    patternMismatch: e.hasAttribute("pattern") && i > 0 && !1 === new RegExp(e.getAttribute("pattern")).test(e.value),
                    rangeOverflow: e.hasAttribute("max") && r && e.value > 0 && Number(e.value) > Number(e.getAttribute("max")),
                    rangeUnderflow: e.hasAttribute("min") && r && e.value > 0 && Number(e.value) < Number(e.getAttribute("min")),
                    stepMismatch: r && (e.hasAttribute("step") && "any" !== e.getAttribute("step") && Number(e.value) % Number(e.getAttribute("step")) != 0 || !e.hasAttribute("step") && Number(e.value) % 1 != 0),
                    tooLong: e.hasAttribute("maxLength") && e.getAttribute("maxLength") > 0 && i > parseInt(e.getAttribute("maxLength"), 10),
                    tooShort: e.hasAttribute("minLength") && e.getAttribute("minLength") > 0 && i > 0 && i < parseInt(e.getAttribute("minLength"), 10),
                    typeMismatch: i > 0 && ("email" === n && !/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e.value) || "url" === n && !/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,5})?(?:[\/?#]\S*)?$/.test(e.value)),
                    valueMissing: e.hasAttribute("required") && (("checkbox" === n || "radio" === n) && !e.checked || "select" === n && e.options[e.selectedIndex].value < 1 || "checkbox" !== n && "radio" !== n && "select" !== n && i < 1)
                };
                for (var l in u)
                    if (u.hasOwnProperty(l) && u[l]) {
                        o = !1;
                        break
                    }
                return u.valid = o,
                u
            }(this)
        },
        configurable: !0
    })
}(window, document),
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self && ((!("classList"in document.createElement("_")) || document.createElementNS && !("classList"in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(e) {
    "use strict";
    if ("Element"in e) {
        var t = e.Element.prototype
          , n = Object
          , r = String.prototype.trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
          , i = Array.prototype.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e)
                    return t;
            return -1
        }
          , o = function(e, t) {
            this.name = e,
            this.code = DOMException[e],
            this.message = t
        }
          , a = function(e, t) {
            if ("" === t)
                throw new o("SYNTAX_ERR","An invalid or illegal string was specified");
            if (/\s/.test(t))
                throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");
            return i.call(e, t)
        }
          , s = function(e) {
            for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; i < o; i++)
                this.push(n[i]);
            this._updateClassName = function() {
                e.setAttribute("class", this.toString())
            }
        }
          , u = s.prototype = []
          , l = function() {
            return new s(this)
        };
        if (o.prototype = Error.prototype,
        u.item = function(e) {
            return this[e] || null
        }
        ,
        u.contains = function(e) {
            return -1 !== a(this, e += "")
        }
        ,
        u.add = function() {
            var e, t = arguments, n = 0, r = t.length, i = !1;
            do {
                e = t[n] + "",
                -1 === a(this, e) && (this.push(e),
                i = !0)
            } while (++n < r);i && this._updateClassName()
        }
        ,
        u.remove = function() {
            var e, t, n = arguments, r = 0, i = n.length, o = !1;
            do {
                for (e = n[r] + "",
                t = a(this, e); -1 !== t; )
                    this.splice(t, 1),
                    o = !0,
                    t = a(this, e)
            } while (++r < i);o && this._updateClassName()
        }
        ,
        u.toggle = function(e, t) {
            e += "";
            var n = this.contains(e)
              , r = n ? !0 !== t && "remove" : !1 !== t && "add";
            return r && this[r](e),
            !0 === t || !1 === t ? t : !n
        }
        ,
        u.toString = function() {
            return this.join(" ")
        }
        ,
        n.defineProperty) {
            var c = {
                get: l,
                enumerable: !0,
                configurable: !0
            };
            try {
                n.defineProperty(t, "classList", c)
            } catch (e) {
                void 0 !== e.number && -2146823252 !== e.number || (c.enumerable = !1,
                n.defineProperty(t, "classList", c))
            }
        } else
            n.prototype.__defineGetter__ && t.__defineGetter__("classList", l)
    }
}(self),
function() {
    "use strict";
    var e = document.createElement("_");
    if (e.classList.add("c1", "c2"),
    !e.classList.contains("c2")) {
        var t = function(e) {
            var t = DOMTokenList.prototype[e];
            DOMTokenList.prototype[e] = function(e) {
                var n, r = arguments.length;
                for (n = 0; n < r; n++)
                    e = arguments[n],
                    t.call(this, e)
            }
        };
        t("add"),
        t("remove")
    }
    if (e.classList.toggle("c3", !1),
    e.classList.contains("c3")) {
        var n = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(e, t) {
            return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
        }
    }
    e = null
}());
for (var forms = document.querySelectorAll(".validate"), i = 0; i < forms.length; i++)
    forms[i].setAttribute("novalidate", !0);
var hasError = function(e) {
    if (!e.disabled && "file" !== e.type && "reset" !== e.type && "submit" !== e.type && "button" !== e.type) {
        var t = e.validity;
        if (!t.valid) {
            if (t.valueMissing)
                return "Please fill out this field.";
            if (t.typeMismatch) {
                if ("email" === e.type)
                    return "Please enter an email address.";
                if ("url" === e.type)
                    return "Please enter a URL."
            }
            return t.tooShort ? "Please lengthen this text to " + e.getAttribute("minLength") + " characters or more. You are currently using " + e.value.length + " characters." : t.tooLong ? "Please shorten this text to no more than " + e.getAttribute("maxLength") + " characters. You are currently using " + e.value.length + " characters." : t.patternMismatch ? e.hasAttribute("title") ? e.getAttribute("title") : "Please match the requested format." : t.badInput ? "Please enter a number." : t.stepMismatch ? "Please select a valid value." : t.rangeOverflow ? "Please select a value that is no more than " + e.getAttribute("max") + "." : t.rangeUnderflow ? "Please select a value that is no less than " + e.getAttribute("min") + "." : "The value you entered for this field is invalid."
        }
    }
}
  , showError = function(e, t) {
    if (e.classList.add("error"),
    "radio" === e.type && e.name) {
        var n = e.form.querySelectorAll('[name="' + e.name + '"]');
        if (n.length > 0) {
            for (var r = 0; r < n.length; r++)
                n[r].classList.add("error");
            e = n[n.length - 1]
        }
    }
    var i = e.id || e.name;
    if (i) {
        var o, a = e.form.querySelector(".error-message#error-for-" + i);
        if (!a)
            (a = document.createElement("div")).className = "error-message",
            a.id = "error-for-" + i,
            "radio" !== e.type && "checkbox" !== e.type || (o = e.form.querySelector('label[for="' + i + '"]') || e.parentNode) && o.parentNode.insertBefore(a, o.nextSibling),
            o || e.parentNode.insertBefore(a, e.nextSibling);
        e.setAttribute("aria-describedby", "error-for-" + i),
        a.innerHTML = t,
        a.style.display = "block",
        a.style.visibility = "visible"
    }
}
  , removeError = function(e) {
    if (e.classList.remove("error"),
    e.removeAttribute("aria-describedby"),
    "radio" === e.type && e.name) {
        var t = e.form.querySelectorAll('[name="' + e.name + '"]');
        if (t.length > 0) {
            for (var n = 0; n < t.length; n++)
                t[n].classList.remove("error");
            e = t[t.length - 1]
        }
    }
    var r = e.id || e.name;
    if (r) {
        var i = e.form.querySelector(".error-message#error-for-" + r);
        i && (i.innerHTML = "",
        i.style.display = "none",
        i.style.visibility = "hidden")
    }
}
  , serialize = function(e) {
    var t = "";
    for (i = 0; i < e.elements.length; i++) {
        var n = e.elements[i];
        n.name && !n.disabled && "file" !== n.type && "reset" !== n.type && "submit" !== n.type && "button" !== n.type && (("checkbox" !== n.type && "radio" !== n.type || n.checked) && (t += "&" + encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value)))
    }
    return t
};
window.displayMailChimpStatus = function(e) {
    if (e.result && e.msg && mcStatus) {
        if (mcStatus.innerHTML = e.msg,
        "error" === e.result)
            return mcStatus.classList.remove("success-message"),
            void mcStatus.classList.add("error-message");
        mcStatus.classList.remove("error-message"),
        mcStatus.classList.add("success-message")
    }
}
;
var submitMailChimpForm = function(e) {
    var t = e.getAttribute("action");
    t = t.replace("/post?u=", "/post-json?u="),
    t += serialize(e) + "&c=displayMailChimpStatus";
    var n = window.document.getElementsByTagName("script")[0]
      , r = window.document.createElement("script");
    r.src = t,
    window.mcStatus = e.querySelector(".mc-status"),
    n.parentNode.insertBefore(r, n),
    r.onload = function() {
        this.remove()
    }
};
document.addEventListener("blur", (function(e) {
    if (e.target.form.classList.contains("validate")) {
        var t = hasError(e.target);
        t ? showError(e.target, t) : removeError(e.target)
    }
}
), !0),
document.addEventListener("submit", (function(e) {
    if (e.target.classList.contains("validate")) {
        e.preventDefault();
        for (var t, n, r = e.target.elements, i = 0; i < r.length; i++)
            (t = hasError(r[i])) && (showError(r[i], t),
            n || (n = r[i]));
        n && n.focus(),
        submitMailChimpForm(e.target)
    }
}
), !1),
$((function() {
    $(".wrapper").hide(),
    $(".wrapper").fadeIn(600),
    $(".highlight:odd").each((function() {
        $(this).addClass("other")
    }
    )),
    $('a[href*="#"]').click((function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
                return $("html,body").animate({
                    scrollTop: e.offset().top - 0
                }, 700),
                !1
        }
    }
    )),
    $(window).scroll((function() {
        $(document).scrollTop() > 600 ? $(".books").addClass("scroll") : $(".books").removeClass("scroll")
    }
    )),
    $(".highlight").on("inview", (function(e, t) {
        t ? $(this).addClass("active") : $(this).removeClass("active")
    }
    )),
    $("header .newsletter").hover((function() {
        $(this).addClass("hover")
    }
    ), (function() {
        "" == $(this).find("input").val() && $(this).removeClass("hover")
    }
    )),
    $("form input").on("click", (function() {
        $(this).parent().addClass("active")
    }
    )),
    $("form input").on("focus", (function() {
        $(this).parent().addClass("active")
    }
    )),
    $("form input").on("blur", (function() {
        "" == $(this).val() && $(this).parent().removeClass("active")
    }
    ))
}
));

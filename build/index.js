/*!
 *
 *   prss v1.2.0
 *   https://github.com/prss-io/prss-client
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function(t, n) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = n())
        : 'function' == typeof define && define.amd
        ? define([], n)
        : 'object' == typeof exports
        ? (exports.PRSS = n())
        : (t.PRSS = n());
})(window, function() {
    return (function(t) {
        var n = {};
        function r(e) {
            if (n[e]) return n[e].exports;
            var o = (n[e] = { i: e, l: !1, exports: {} });
            return t[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
            (r.m = t),
            (r.c = n),
            (r.d = function(t, n, e) {
                r.o(t, n) ||
                    Object.defineProperty(t, n, { enumerable: !0, get: e });
            }),
            (r.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (r.t = function(t, n) {
                if ((1 & n && (t = r(t)), 8 & n)) return t;
                if (4 & n && 'object' == typeof t && t && t.__esModule)
                    return t;
                var e = Object.create(null);
                if (
                    (r.r(e),
                    Object.defineProperty(e, 'default', {
                        enumerable: !0,
                        value: t
                    }),
                    2 & n && 'string' != typeof t)
                )
                    for (var o in t)
                        r.d(
                            e,
                            o,
                            function(n) {
                                return t[n];
                            }.bind(null, o)
                        );
                return e;
            }),
            (r.n = function(t) {
                var n =
                    t && t.__esModule
                        ? function() {
                              return t.default;
                          }
                        : function() {
                              return t;
                          };
                return r.d(n, 'a', n), n;
            }),
            (r.o = function(t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (r.p = ''),
            r((r.s = 0))
        );
    })([
        function(t, n, r) {
            'use strict';
            function e(t) {
                return (
                    (function(t) {
                        if (Array.isArray(t)) return f(t);
                    })(t) ||
                    (function(t) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(t)
                        )
                            return Array.from(t);
                    })(t) ||
                    a(t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function o(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n &&
                        (e = e.filter(function(n) {
                            return Object.getOwnPropertyDescriptor(
                                t,
                                n
                            ).enumerable;
                        })),
                        r.push.apply(r, e);
                }
                return r;
            }
            function u(t) {
                for (var n, r = 1; r < arguments.length; r++)
                    (n = null == arguments[r] ? {} : arguments[r]),
                        r % 2
                            ? o(Object(n), !0).forEach(function(r) {
                                  i(t, r, n[r]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  t,
                                  Object.getOwnPropertyDescriptors(n)
                              )
                            : o(Object(n)).forEach(function(r) {
                                  Object.defineProperty(
                                      t,
                                      r,
                                      Object.getOwnPropertyDescriptor(n, r)
                                  );
                              });
                return t;
            }
            function i(t, n, r) {
                return (
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = r),
                    t
                );
            }
            function c(t, n) {
                return (
                    (function(t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function(t, n) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(t)
                        ) {
                            var r = [],
                                e = !0,
                                o = !1,
                                u = void 0;
                            try {
                                for (
                                    var i, c = t[Symbol.iterator]();
                                    !(e = (i = c.next()).done) &&
                                    (r.push(i.value), !n || r.length !== n);
                                    e = !0
                                );
                            } catch (t) {
                                (o = !0), (u = t);
                            } finally {
                                try {
                                    e || null == c.return || c.return();
                                } finally {
                                    if (o) throw u;
                                }
                            }
                            return r;
                        }
                    })(t, n) ||
                    a(t, n) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function a(t, n) {
                if (t) {
                    if ('string' == typeof t) return f(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                        'Object' === r &&
                            t.constructor &&
                            (r = t.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(r)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? f(t, n)
                            : void 0
                    );
                }
            }
            function f(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, e = Array(n); r < n; r++) e[r] = t[r];
                return e;
            }
            r.r(n),
                r.d(n, 'init', function() {
                    return s;
                }),
                r.d(n, 'getProp', function() {
                    return p;
                }),
                r.d(n, 'getJsonProp', function() {
                    return y;
                }),
                r.d(n, 'propExists', function() {
                    return h;
                }),
                r.d(n, 'objGet', function() {
                    return m;
                }),
                r.d(n, 'getAllProps', function() {
                    return b;
                }),
                r.d(n, 'getSiteUrl', function() {
                    return g;
                }),
                r.d(n, 'getPathUrl', function() {
                    return v;
                }),
                r.d(n, 'timeAgo', function() {
                    return S;
                }),
                r.d(n, 'formattedDate', function() {
                    return O;
                }),
                r.d(n, 'getStructurePaths', function() {
                    return j;
                }),
                r.d(n, 'getRawPostItem', function() {
                    return w;
                }),
                r.d(n, 'getItem', function() {
                    return P;
                }),
                r.d(n, 'getItems', function() {
                    return A;
                }),
                r.d(n, 'walkStructure', function() {
                    return I;
                }),
                r.d(n, 'shuffle', function() {
                    return x;
                }),
                r.d(n, 'hasItem', function() {
                    return D;
                }),
                r.d(n, 'findInStructure', function() {
                    return M;
                }),
                r.d(n, 'getItemChildren', function() {
                    return k;
                }),
                r.d(n, 'truncateStr', function() {
                    return E;
                }),
                r.d(n, 'processPRSSLinks', function() {
                    return R;
                });
            var l = null,
                d = null,
                s = function(t) {
                    (l = t),
                        (window.onload = function() {
                            R();
                        });
                },
                p = function(t) {
                    if (!l)
                        throw new Error(
                            'PRSS Site Configuration is not defined!'
                        );
                    return m(t, l);
                },
                y = function(t) {
                    var n;
                    if (h(t))
                        try {
                            n = JSON.parse(p(t));
                        } catch (n) {
                            console.error(
                                "Prop '".concat(t, "' could not be parsed."),
                                n
                            );
                        }
                    return n;
                },
                h = function(t) {
                    return void 0 !== p(t);
                },
                m = function(t, n) {
                    return t.split('.').reduce(function(t, n) {
                        return t ? t[n] : '';
                    }, n);
                },
                b = function() {
                    return l;
                },
                g = function() {
                    return 'localhost' === location.hostname ||
                        '127.0.0.1' === location.hostname
                        ? location.origin
                        : p('site.url');
                },
                v = function() {
                    var t =
                            0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : '',
                        n = g();
                    return (
                        n && n.length && '/' !== n[n.length - 1] && (n += '/'),
                        t && t.length && '/' !== t[t.length - 1] && (t += '/'),
                        n + t
                    );
                },
                S = function(t) {
                    var n = (function(t) {
                            for (
                                var n = 0,
                                    r = [
                                        ['year', 31536e3],
                                        ['month', 2592e3],
                                        ['day', 86400],
                                        ['hour', 3600],
                                        ['minute', 60],
                                        ['second', 1]
                                    ];
                                n < r.length;
                                n++
                            ) {
                                var e = c(r[n], 2),
                                    o = e[0],
                                    u = e[1],
                                    i = Math.floor(t / u);
                                if (1 <= i) return { interval: i, epoch: o };
                            }
                        })(Math.floor((new Date() - new Date(t)) / 1e3)),
                        r = n.interval,
                        e = n.epoch,
                        o = 1 === r ? '' : 's';
                    return ''
                        .concat(r, ' ')
                        .concat(e)
                        .concat(o, ' ago');
                },
                O = function(t) {
                    var n = new Date(t),
                        r = new Intl.DateTimeFormat('en', {
                            year: 'numeric'
                        }).format(n),
                        e = new Intl.DateTimeFormat('en', {
                            month: 'short'
                        }).format(n),
                        o = new Intl.DateTimeFormat('en', {
                            day: '2-digit'
                        }).format(n);
                    return ''
                        .concat(o, ' ')
                        .concat(e, ', ')
                        .concat(r);
                },
                j = function t(n) {
                    var r =
                            1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : '',
                        e =
                            2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : [];
                    return (
                        n.forEach(function(n) {
                            var o = n.key,
                                u = ''.concat(r, '/').concat(o);
                            e.push(u), n.children && t(n.children, u, e);
                        }),
                        e
                    );
                },
                w = function(t) {
                    return (PRSSItems || []).find(function(n) {
                        return n.uuid === t;
                    });
                },
                P = function(t) {
                    return A().find(function(n) {
                        return n.uuid === t;
                    });
                },
                A = function(t, n) {
                    if (!PRSSItems) return [];
                    var r = p('site').structure,
                        e = j(r),
                        o =
                            d ||
                            e.map(function(t) {
                                var n,
                                    r = t
                                        .split('/')
                                        .map(function(t) {
                                            return t ? (n = w(t)).slug : '';
                                        })
                                        .slice(2)
                                        .join('/');
                                return n
                                    ? u({}, n, { path: r, url: v(r) })
                                    : null;
                            });
                    !d && o.length && (d = o);
                    var i = o;
                    return (
                        t &&
                            (i = i.filter(function(n) {
                                return n.template === t;
                            })),
                        n &&
                            (i = i.sort(function(t, n) {
                                return n.createdAt - t.createdAt;
                            })),
                        i
                    );
                },
                I = function(t) {
                    var n =
                            1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                        r = e(t),
                        o = function(t) {
                            var r = t.key,
                                e = t.children,
                                i = void 0 === e ? [] : e,
                                c = w(r);
                            return c
                                ? u({ key: r }, n ? n(c) : {}, {
                                      children: i.map(o)
                                  })
                                : t;
                        };
                    return (r = r.map(function(t) {
                        return o(t);
                    }));
                },
                x = function() {
                    for (
                        var t,
                            n,
                            r = Math.floor,
                            o =
                                0 < arguments.length && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                            u = e(o),
                            i = u.length;
                        0 !== i;

                    )
                        (n = r(Math.random() * i)),
                            (t = u[(i -= 1)]),
                            (u[i] = u[n]),
                            (u[n] = t);
                    return u;
                },
                D = function(t, n) {
                    return JSON.stringify(n).includes(t);
                },
                M = function(t) {
                    var n,
                        r = p('site').structure,
                        e = function(r) {
                            return r.key === t
                                ? ((n = r), !0)
                                : !!r.children && r.children.some(e);
                        };
                    return r.some(e), n;
                },
                k = function(t) {
                    var n = M(t);
                    return (n && n.children ? n.children : []).map(function(t) {
                        return P(t.key);
                    });
                },
                E = function(t) {
                    var n =
                        1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : 50;
                    return t.length > n ? t.substring(0, n) + '...' : t;
                },
                R = function() {
                    document
                        .querySelectorAll('a[data-prss-path]')
                        .forEach(function(t) {
                            var n = t.getAttribute('data-prss-path');
                            t.setAttribute('href', v(n));
                        });
                };
        }
    ]);
});

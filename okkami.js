!(function (t) {
  var e = {}
  function n(o) {
    if (e[o]) return e[o].exports
    var r = (e[o] = { i: o, l: !1, exports: {} })
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 })
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e]
            }.bind(null, r)
          )
      return o
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, "a", e), e
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = "https://cdn.smooch.io/"),
    n((n.s = 528))
})({
  139: function (t, e, n) {
    "use strict"
    n.d(e, "a", function () {
      return o
    })
    var o = "web-messenger-container"
  },
  205: function (t, e, n) {
    "use strict"
    n.d(e, "a", function () {
      return o
    })
    var o = {
      lg: { minHeight: 668, minWidth: 1200 },
      md: [
        { minHeight: 508, minWidth: 768, maxWidth: 1199 },
        { minHeight: 508, maxHeight: 667, minWidth: 768 },
      ],
      sm: { maxHeight: 507, minWidth: 768 },
      xs: { maxWidth: 767 },
    }
  },
  246: function (t, e, n) {
    "use strict"
    n.d(e, "a", function () {
      return x
    }),
      n.d(e, "b", function () {
        return E
      })
    var o = n(462),
      r = n.n(o)
    function i(t) {
      ;("complete" !== document.readyState &&
        "loaded" !== document.readyState &&
        "interactive" !== document.readyState) ||
      !document.body
        ? document.addEventListener("DOMContentLoaded", function () {
            t()
          })
        : t()
    }
    function a(t) {
      var e = ["screen"]
      return (
        t.minHeight && e.push("(min-height: ".concat(t.minHeight, "px)")),
        t.maxHeight && e.push("(max-height: ".concat(t.maxHeight, "px)")),
        t.minWidth && e.push("(min-width: ".concat(t.minWidth, "px)")),
        t.maxWidth && e.push("(max-width: ".concat(t.maxWidth, "px)")),
        e.join(" and ")
      )
    }
    var s = n(313),
      c = n.n(s),
      u = n(205),
      d = ["lg", "md", "sm", "xs"]
    function l(t) {
      for (var e = 0; e < d.length; e++) {
        var n = d[e],
          o = u.a[n]
        "[object Array]" !== Object.prototype.toString.call(o) && (o = [o])
        for (var r = 0; r < o.length; r++) {
          t({ rule: o[r], size: n })
        }
      }
    }
    var h = n(139)
    function f() {
      return (f =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
          }
          return t
        }).apply(this, arguments)
    }
    function p(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return m(t)
        })(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t)
        })(t) ||
        (function (t, e) {
          if (!t) return
          if ("string" == typeof t) return m(t, e)
          var n = Object.prototype.toString.call(t).slice(8, -1)
          "Object" === n && t.constructor && (n = t.constructor.name)
          if ("Map" === n || "Set" === n) return Array.from(n)
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return m(t, e)
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        })()
      )
    }
    function m(t, e) {
      ;(null == e || e > t.length) && (e = t.length)
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n]
      return o
    }
    var y,
      v,
      g,
      b,
      w,
      x = {},
      _ = [],
      C = [],
      O = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent),
      S = /PhantomJS/.test(navigator.userAgent) && !0,
      j = [
        "init",
        "login",
        "on",
        "off",
        "logout",
        "sendMessage",
        "triggerPostback",
        "createConversation",
        "updateConversation",
        "updateUser",
        "getDisplayedConversation",
        "getConversationById",
        "getConversations",
        "getMoreConversations",
        "hasMoreConversations",
        "getUser",
        "open",
        "close",
        "isOpened",
        "loadConversation",
        "setDelegate",
        "markAllAsRead",
        "showNotificationChannelPrompt",
        "setPredefinedMessage",
        "startTyping",
        "stopTyping",
      ]

    if (O) {
      var M = document.createElement("a")
      ;(M.href = "https://smooch.io/live-web-chat/?utm_source=widget"),
        (M.text = "Powered by Zendesk Sunshine"),
        i(function () {
          document.body.appendChild(M)
        })
    }
    function W() {
      var t = document.createElement("link")
      ;(t.rel = "stylesheet"),
        (t.type = "text/css"),
        (t.href = "https://cdn.smooch.io/smooch.5.3.9.css"),
        document.body.appendChild(t)
    }
    function A(t) {
      var e
      ;(window.__onWebMessengerFrameReady__ = function () {}),
        (y = t),
        g ||
          ((e = v),
          l(function (t) {
            var n = t.rule,
              o = t.size
            c.a.register(a(n), function () {
              e.contentWindow.postMessage(
                { type: "sizeChange", value: o },
                "".concat(location.protocol, "//").concat(location.host)
              )
            })
          }))
      for (var n = j[0], o = 0; o < j.length; n = j[++o]) x[n] = y[n]
      if (C) {
        for (var r = C[0], i = 0; i < C.length; r = C[++i]) {
          var s
          ;(s = y).on.apply(s, p(r.args))
        }
        C = void 0
      }
      if (w) {
        var u,
          d = (u = y).init.apply(u, p(w))
        w = void 0
        for (var h = _[0], f = 0; f < _.length; h = _[++f])
          d = "then" === h.type ? d.then(h.next) : d.catch(h.next)
        _ = []
      }
    }
    var H = function (t) {
      return t.contentWindow && t.contentWindow.document
    }
    function q() {
      if (!v) {
        var t = null,
          e = !1
        ;((v = document.createElement("iframe")).id = h.a),
          (v.frameBorder = 0),
          (v.allowFullscreen = !0),
          (v.allowTransparency = !0),
          (v.scrolling = "no"),
          (v.className = r.a.iframe)
        var n = function () {
          ;(e = !0), clearInterval(t), delete v.onload
          var n = H(v)
          n.open(),
            n.write(
              "\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            "
                .concat(
                  "",
                  '\n                            <link rel="stylesheet" href="'
                )
                .concat(
                  "https://cdn.smooch.io/frame.5.3.9.css",
                  '" type="text/css" />\n                            <script src="'
                )
                .concat(
                  "https://cdn.smooch.io/frame.5.3.9.min.js",
                  '" async crossorigin="anonymous"></script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    '
                )
            ),
            n.close()
        }
        ;(t = setInterval(function () {
          var t = H(v)
          e ||
            !t ||
            ("complete" !== t.readyState && "interactive" !== t.readyState) ||
            n()
        }, 1e3)),
          (v.onload = function () {
            e || n()
          })
      }
      g ? b && (b.appendChild(v), (b = void 0)) : document.body.appendChild(v)
    }
    var I = {
      VERSION: "5.3.9",
      on: function () {
        C || (C = [])
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        C.push({ args: e })
      },
      init: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        ;(w = e),
          (g = e.length > 0 && !!e[0].embedded),
          O ||
            S ||
            i(function () {
              W(), q()
            })
        var o = {
          then: function (t) {
            return _.push({ type: "then", next: t }), o
          },
          catch: function (t) {
            return _.push({ type: "catch", next: t }), o
          },
        }
        return o
      },
      render: function (t) {
        v ? t.appendChild(v) : (b = t)
      },
      destroy: function () {
        y &&
          (y.destroy(),
          v.remove ? v.remove() : v.parentNode.removeChild(v),
          l(function (t) {
            var e = t.rule
            c.a.unregister(a(e))
          }),
          E())
      },
    }
    function E() {
      if (!document.getElementById(h.a)) {
        ;(y = void 0), (v = void 0), (window.__onWebMessengerFrameReady__ = A)
        for (var t = j[0], e = 0; e < j.length; t = j[++e]) x[t] && delete x[t]
        f(x, I)
      }
    }
  },
  313: function (t, e, n) {
    var o = n(531)
    t.exports = new o()
  },
  344: function (t, e) {
    t.exports = {
      isFunction: function (t) {
        return "function" == typeof t
      },
      isArray: function (t) {
        return "[object Array]" === Object.prototype.toString.apply(t)
      },
      each: function (t, e) {
        for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++);
      },
    }
  },
  44: function (t, e) {
    var n
    n = (function () {
      return this
    })()
    try {
      n = n || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  },
  462: function (t, e, n) {
    t.exports = {
      iframe: "_2ChX4GFAl1-UBiWknYZyEQ",
      displayButton: "avcHn2VQJenBvoR5hilPG",
      widgetClosed: "_3fQbteJd3oQu4il3LpMKkX",
      "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7",
      "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0",
      "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV",
      "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M",
      displayTab: "_3dtqBiGeC8k3yop4A-9Lwm",
      widgetOpened: "_2TELtk5nDKlQudVSivRjpt",
      widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn",
    }
  },
  528: function (t, e, n) {
    "use strict"
    n.r(e),
      function (t) {
        var e = n(246),
          o = n(139)
        document.getElementById(o.a) ||
          (Object(e.b)(),
          window.__onWebMessengerHostReady__
            ? window.__onWebMessengerHostReady__(e.a)
            : (t.Smooch = e.a))
      }.call(this, n(44))
  },
  531: function (t, e, n) {
    var o = n(532),
      r = n(344),
      i = r.each,
      a = r.isFunction,
      s = r.isArray
    function c() {
      if (!window.matchMedia)
        throw new Error(
          "matchMedia not present, legacy browsers require a polyfill"
        )
      ;(this.queries = {}),
        (this.browserIsIncapable = !window.matchMedia("only all").matches)
    }
    ;(c.prototype = {
      constructor: c,
      register: function (t, e, n) {
        var r = this.queries,
          c = n && this.browserIsIncapable
        return (
          r[t] || (r[t] = new o(t, c)),
          a(e) && (e = { match: e }),
          s(e) || (e = [e]),
          i(e, function (e) {
            a(e) && (e = { match: e }), r[t].addHandler(e)
          }),
          this
        )
      },
      unregister: function (t, e) {
        var n = this.queries[t]
        return (
          n && (e ? n.removeHandler(e) : (n.clear(), delete this.queries[t])),
          this
        )
      },
    }),
      (t.exports = c)
  },
  532: function (t, e, n) {
    var o = n(533),
      r = n(344).each
    function i(t, e) {
      ;(this.query = t),
        (this.isUnconditional = e),
        (this.handlers = []),
        (this.mql = window.matchMedia(t))
      var n = this
      ;(this.listener = function (t) {
        ;(n.mql = t.currentTarget || t), n.assess()
      }),
        this.mql.addListener(this.listener)
    }
    ;(i.prototype = {
      constuctor: i,
      addHandler: function (t) {
        var e = new o(t)
        this.handlers.push(e), this.matches() && e.on()
      },
      removeHandler: function (t) {
        var e = this.handlers
        r(e, function (n, o) {
          if (n.equals(t)) return n.destroy(), !e.splice(o, 1)
        })
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional
      },
      clear: function () {
        r(this.handlers, function (t) {
          t.destroy()
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0)
      },
      assess: function () {
        var t = this.matches() ? "on" : "off"
        r(this.handlers, function (e) {
          e[t]()
        })
      },
    }),
      (t.exports = i)
  },
  533: function (t, e) {
    function n(t) {
      ;(this.options = t), !t.deferSetup && this.setup()
    }
    ;(n.prototype = {
      constructor: n,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0)
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match()
      },
      off: function () {
        this.options.unmatch && this.options.unmatch()
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off()
      },
      equals: function (t) {
        return this.options === t || this.options.match === t
      },
    }),
      (t.exports = n)
  },
})

window.Okkami = {}
window.Okkami.init = function (options) {
  var locale = options.locale || "en-US"
  var customOptions = {}
  if (options.customColors) {
    customOptions.customColors = options.customColors
  }
  var initializeOptions = {
    integrationId: options.integrationId,
    prechatCapture: options.prechatCapture,
    customText: options.customText,
    notificationChannelPromptEnabled: options.notificationChannelPromptEnabled,
    canUserSeeConversationList: false,
    locale: locale,
    ...customOptions,
  }
  var prevLoginType = window.localStorage.getItem(`${options.integrationId}.prevLoginType`)

  if (options.userName && options.userName.length > 0) {
    delete initializeOptions.prechatCapture

    if (prevLoginType === 'anonymous') {
      window.Okkami.logout(options.integrationId)
    }
  }

  Smooch.init(initializeOptions).then(function () {
    if (options.userName && options.userName.length > 0) {
      Smooch.updateUser({
        givenName: options.userName,
        surName: options.lastName,
        emailAddress: emailAddress,
      })
      window.localStorage.setItem(`${options.integrationId}.prevLoginType`, 'user')
    } else {
      window.localStorage.setItem(`${options.integrationId}.prevLoginType`, 'anonymous')
    }
  })

  Smooch.on("widget:opened", function () {
    let iframe = document.getElementById(
      "web-messenger-container"
    ).contentWindow
    let logo = iframe.document.querySelector(
      "#conversation > div.messages-container > div.logo"
    )

    if (logo) {
      logo.remove()
    }
  })
}

window.Okkami.logout = function(integrationId){
  window.localStorage.removeItem(`${integrationId}.appUserId`)
  window.localStorage.removeItem(`${integrationId}.sessionToken`)
}

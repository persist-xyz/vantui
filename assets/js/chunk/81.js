/*! For license information please see 81.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    560: function (t, a, r) {
      'use strict'
      r.r(a),
        r.d(a, 'taro_tabbar', function () {
          return y
        })
      var n = r(6),
        s = r.n(n),
        i = r(28),
        l = r.n(i),
        b = r(32),
        c = r.n(b),
        d = r(27),
        h = r.n(d),
        u = r(10),
        f = r.n(u),
        g = r(55),
        p = r.n(g),
        _ = r(147),
        m = r(77),
        T = r(90),
        B = r(611),
        __spreadArray = function (t, a) {
          for (var r = 0, n = a.length, s = t.length; r < n; r++, s++)
            t[s] = a[r]
          return t
        }
      function isAbsolute(t) {
        return '/' === t.charAt(0)
      }
      function spliceOne(t, a) {
        for (var r = a, n = r + 1, s = t.length; n < s; r += 1, n += 1)
          t[r] = t[n]
        t.pop()
      }
      var w = function splitUrl(t) {
          var a,
            r = t || '',
            n = { path: null, query: null, fragment: null }
          return (
            (a = l()(r).call(r, '#')) > -1 &&
              ((n.fragment = r.substring(a + 1)), (r = r.substring(0, a))),
            (a = l()(r).call(r, '?')) > -1 &&
              ((n.query = r.substring(a + 1)), (r = r.substring(0, a))),
            (n.path = r),
            n
          )
        },
        H = function TabbarItem(t) {
          var a = t.index,
            r = t.isSelected,
            n = void 0 !== r && r,
            s = t.textColor,
            i = t.iconPath,
            l = t.badgeText,
            b = t.showRedDot,
            c = void 0 !== b && b,
            d = t.text,
            h = t.onSelect,
            u = Object(B.a)('weui-tabbar__item', { 'weui-bar__item_on': n })
          return Object(_.e)(
            'a',
            {
              key: a,
              href: 'javascript:;',
              class: u,
              onClick: function v() {
                h(a)
              },
            },
            Object(_.e)(
              'span',
              { style: { display: 'inline-block', position: 'relative' } },
              Object(_.e)('img', {
                src: i,
                alt: '',
                class: 'weui-tabbar__icon',
              }),
              !!l &&
                Object(_.e)(
                  'span',
                  {
                    class: 'weui-badge taro-tabbar-badge',
                    style: {
                      position: 'absolute',
                      top: '-2px',
                      right: '-13px',
                    },
                  },
                  l,
                ),
              c &&
                Object(_.e)('span', {
                  class: 'weui-badge weui-badge_dot',
                  style: { position: 'absolute', top: '0', right: '-6px' },
                }),
            ),
            Object(_.e)(
              'p',
              { class: 'weui-tabbar__label', style: { color: s } },
              d,
            ),
          )
        },
        x = function addLeadingSlash(t) {
          return '/' === t[0] ? t : '/' + t
        },
        C = function stripBasename(t, a) {
          return (function hasBasename(t, a) {
            return new RegExp('^' + a + '(\\/|\\?|#|$)', 'i').test(t)
          })(t, a)
            ? t.substr(a.length)
            : t
        },
        y = (function () {
          function e(t) {
            var a = this
            Object(_.g)(this, t),
              (this.onLongPress = Object(_.c)(this, 'longpress', 7)),
              (this.homePage = ''),
              (this.customRoutes = []),
              (this.tabbarPos = 'bottom'),
              (this.selectedIndex = -1),
              (this.status = 0),
              (this.getOriginUrl = function (t) {
                var r,
                  n = c()((r = a.customRoutes)).call(r, function (a) {
                    var r = a[1]
                    return w(r).path === w(t).path
                  })
                return n.length ? n[0][0] : t
              }),
              (this.getSelectedIndex = function (t) {
                var r,
                  n = -1
                return (
                  h()((r = a.list)).call(r, function (a, r) {
                    var s = a.pagePath
                    w(t).path === w(s).path && (n = r)
                  }),
                  n
                )
              }),
              (this.switchTab = function (t) {
                ;(a.selectedIndex = t), Object(m.h)({ url: a.list[t].pagePath })
              }),
              (this.switchTabHandler = function (t) {
                var r = t.url,
                  n = t.successHandler,
                  i = t.errorHandler,
                  l = (function resolvePathname(t, a) {
                    void 0 === a && (a = '')
                    var r,
                      n = (t && t.split('/')) || [],
                      i = (a && a.split('/')) || [],
                      l = t && isAbsolute(t),
                      b = a && isAbsolute(a),
                      c = l || b
                    if (
                      (t && isAbsolute(t)
                        ? (i = n)
                        : n.length && (i.pop(), (i = s()(i).call(i, n))),
                      !i.length)
                    )
                      return '/'
                    if (i.length) {
                      var d = i[i.length - 1]
                      r = '.' === d || '..' === d || '' === d
                    } else r = !1
                    for (var h = 0, u = i.length; u >= 0; u--) {
                      var f = i[u]
                      '.' === f
                        ? spliceOne(i, u)
                        : '..' === f
                        ? (spliceOne(i, u), h++)
                        : h && (spliceOne(i, u), h--)
                    }
                    if (!c) for (; h--; h) i.unshift('..')
                    !c ||
                      '' === i[0] ||
                      (i[0] && isAbsolute(i[0])) ||
                      i.unshift('')
                    var g = i.join('/')
                    return r && '/' !== g.substr(-1) && (g += '/'), g
                  })(r, a.getOriginUrl(a.getCurrentUrl() || a.homePage)),
                  b = a.getSelectedIndex(l)
                b > -1
                  ? (a.switchTab(b), n({ errMsg: 'switchTab:ok' }))
                  : i({
                      errMsg: 'switchTab:fail page "' + l + '" is not found',
                    })
              }),
              (this.routerChangeHandler = function (t) {
                var r, n
                if ((t && (r = t.toLocation), r && r.path)) {
                  var s = x(r.path)
                  n = C('/' === s ? a.homePage : s, a.conf.basename || '/')
                } else n = a.getCurrentUrl()
                a.selectedIndex = a.getSelectedIndex(a.getOriginUrl(n))
              }),
              (this.setTabBarBadgeHandler = function (t) {
                var r = t.index,
                  n = t.text,
                  s = t.successHandler,
                  i = t.errorHandler,
                  l = __spreadArray([], a.list)
                r in l
                  ? ((l[r].showRedDot = !1),
                    (l[r].badgeText = n),
                    s({ errMsg: 'setTabBarBadge:ok' }))
                  : i({ errMsg: 'setTabBarBadge:fail tabbar item not found' }),
                  (a.list = l)
              }),
              (this.removeTabBarBadgeHandler = function (t) {
                var r = t.index,
                  n = t.successHandler,
                  s = t.errorHandler,
                  i = __spreadArray([], a.list)
                r in i
                  ? ((i[r].badgeText = null),
                    (i[r].badgeText = null),
                    n({ errMsg: 'removeTabBarBadge:ok' }))
                  : s({
                      errMsg: 'removeTabBarBadge:fail tabbar item not found',
                    }),
                  (a.list = i)
              }),
              (this.showTabBarRedDotHandler = function (t) {
                var r = t.index,
                  n = t.successHandler,
                  s = t.errorHandler,
                  i = __spreadArray([], a.list)
                r in i
                  ? ((i[r].badgeText = null),
                    (i[r].showRedDot = !0),
                    n({ errMsg: 'showTabBarRedDot:ok' }))
                  : s({
                      errMsg: 'showTabBarRedDot:fail tabbar item not found',
                    }),
                  (a.list = i)
              }),
              (this.hideTabBarRedDotHandler = function (t) {
                var r = t.index,
                  n = t.successHandler,
                  s = t.errorHandler,
                  i = __spreadArray([], a.list)
                r in i
                  ? ((i[r].showRedDot = !1),
                    n({ errMsg: 'hideTabBarRedDot:ok' }))
                  : s({
                      errMsg: 'hideTabBarRedDot:fail tabbar item not found',
                    }),
                  (a.list = i)
              }),
              (this.showTabBarHandler = function (t) {
                var r = t.successHandler
                ;(a.status = 0), r({ errMsg: 'showTabBar:ok' })
              }),
              (this.hideTabBarHandler = function (t) {
                var r = t.animation,
                  n = t.successHandler
                ;(a.status = r ? 2 : 1), n({ errMsg: 'hideTabBar:ok' })
              }),
              (this.setTabBarStyleHandler = function (t) {
                var r = t.color,
                  n = t.selectedColor,
                  s = t.backgroundColor,
                  i = t.borderStyle,
                  l = t.successHandler
                s && (a.backgroundColor = s),
                  i && (a.borderStyle = i),
                  r && (a.color = r),
                  n && (a.selectedColor = n),
                  l({ errMsg: 'setTabBarStyle:ok' })
              }),
              (this.setTabBarItemHandler = function (t) {
                var r = t.index,
                  n = t.iconPath,
                  s = t.selectedIconPath,
                  i = t.text,
                  l = t.successHandler,
                  b = t.errorHandler,
                  c = __spreadArray([], a.list)
                r in c
                  ? (n && (c[r].iconPath = n),
                    s && (c[r].selectedIconPath = s),
                    i && (c[r].text = i),
                    l({ errMsg: 'setTabBarItem:ok' }))
                  : b({ errMsg: 'setTabBarItem:fail tabbar item not found' }),
                  (a.list = c)
              })
            var r = this.conf.list,
              n = this.conf.customRoutes
            if (
              '[object Array]' !== Object.prototype.toString.call(r) ||
              r.length < 2 ||
              r.length > 5
            )
              throw new Error('tabBar 配置错误')
            this.homePage = x(this.conf.homePage)
            var i = function o(t) {
                var a,
                  r = n[t]
                ;(t = x(t)),
                  'string' == typeof r
                    ? b.customRoutes.push([t, x(r)])
                    : (null == r ? void 0 : r.length) > 0 &&
                      (a = b.customRoutes).push.apply(
                        a,
                        f()(r).call(r, function (a) {
                          return [t, x(a)]
                        }),
                      )
              },
              b = this
            for (var d in n) i(d)
            h()(r).call(r, function (t) {
              var a
              0 !== l()((a = t.pagePath)).call(a, '/') &&
                (t.pagePath = '/' + t.pagePath)
            }),
              (this.list = r),
              (this.borderStyle = this.conf.borderStyle),
              (this.backgroundColor = this.conf.backgroundColor),
              (this.color = this.conf.color),
              (this.selectedColor = this.conf.selectedColor)
          }
          return (
            (e.prototype.getCurrentUrl = function () {
              var t,
                a = this.conf.mode,
                r = this.conf.basename || '/'
              if ('hash' === a) {
                var n = window.location.href,
                  s = l()(n).call(n, '#')
                t = -1 === s ? '' : n.substring(s + 1)
              } else t = location.pathname
              var i = x(C(t, r))
              return '/' === i ? this.homePage : i
            }),
            (e.prototype.bindEvent = function () {
              T.a.eventCenter.on(
                '__taroRouterChange',
                this.routerChangeHandler,
              ),
                T.a.eventCenter.on('__taroSwitchTab', this.switchTabHandler),
                T.a.eventCenter.on(
                  '__taroSetTabBarBadge',
                  this.setTabBarBadgeHandler,
                ),
                T.a.eventCenter.on(
                  '__taroRemoveTabBarBadge',
                  this.removeTabBarBadgeHandler,
                ),
                T.a.eventCenter.on(
                  '__taroShowTabBarRedDotHandler',
                  this.showTabBarRedDotHandler,
                ),
                T.a.eventCenter.on(
                  '__taroHideTabBarRedDotHandler',
                  this.hideTabBarRedDotHandler,
                ),
                T.a.eventCenter.on('__taroShowTabBar', this.showTabBarHandler),
                T.a.eventCenter.on('__taroHideTabBar', this.hideTabBarHandler),
                T.a.eventCenter.on(
                  '__taroSetTabBarStyle',
                  this.setTabBarStyleHandler,
                ),
                T.a.eventCenter.on(
                  '__taroSetTabBarItem',
                  this.setTabBarItemHandler,
                )
            }),
            (e.prototype.removeEvent = function () {
              T.a.eventCenter.off(
                '__taroRouterChange',
                this.routerChangeHandler,
              ),
                T.a.eventCenter.off('__taroSwitchTab', this.switchTabHandler),
                T.a.eventCenter.off(
                  '__taroSetTabBarBadge',
                  this.setTabBarBadgeHandler,
                ),
                T.a.eventCenter.off(
                  '__taroRemoveTabBarBadge',
                  this.removeTabBarBadgeHandler,
                ),
                T.a.eventCenter.off(
                  '__taroShowTabBarRedDotHandler',
                  this.showTabBarRedDotHandler,
                ),
                T.a.eventCenter.off(
                  '__taroHideTabBarRedDotHandler',
                  this.hideTabBarRedDotHandler,
                ),
                T.a.eventCenter.off('__taroShowTabBar', this.showTabBarHandler),
                T.a.eventCenter.off('__taroHideTabBar', this.hideTabBarHandler),
                T.a.eventCenter.off(
                  '__taroSetTabBarStyle',
                  this.setTabBarStyleHandler,
                ),
                T.a.eventCenter.off(
                  '__taroSetTabBarItem',
                  this.setTabBarItemHandler,
                )
            }),
            (e.prototype.componentDidLoad = function () {
              ;(this.tabbarPos = this.tabbar.nextElementSibling
                ? 'top'
                : 'bottom'),
                this.bindEvent(),
                this.routerChangeHandler()
            }),
            (e.prototype.disconnectedCallback = function () {
              this.removeEvent()
            }),
            (e.prototype.render = function () {
              var t,
                a,
                r,
                n = this,
                s = this.tabbarPos,
                i = void 0 === s ? 'bottom' : s,
                l = this.status,
                b = Object(B.a)(
                  'weui-tabbar',
                  (((a = {})[
                    'taro-tabbar__border-' + (this.borderStyle || 'black')
                  ] = !0),
                  a),
                ),
                c = -1 === this.selectedIndex || 1 === l,
                d = 2 === l
              return Object(_.e)(
                _.a,
                {
                  class: Object(B.a)(
                    'taro-tabbar__tabbar',
                    'taro-tabbar__tabbar-' + i,
                    ((r = {}),
                    (r['taro-tabbar__tabbar-hide'] = c),
                    (r['taro-tabbar__tabbar-slideout'] = d),
                    r),
                  ),
                },
                Object(_.e)(
                  'div',
                  {
                    class: b,
                    style: { backgroundColor: this.backgroundColor || '' },
                  },
                  f()((t = this.list)).call(t, function (t, a) {
                    var r,
                      s,
                      i = n.selectedIndex === a
                    return (
                      i
                        ? ((r = n.selectedColor || ''),
                          (s = t.selectedIconPath))
                        : ((r = n.color || ''), (s = t.iconPath)),
                      Object(_.e)(H, {
                        index: a,
                        onSelect: n.switchTab.bind(n),
                        isSelected: i,
                        textColor: r,
                        iconPath: s,
                        text: t.text,
                        badgeText: t.badgeText,
                        showRedDot: t.showRedDot,
                      })
                    )
                  }),
                ),
              )
            }),
            p()(e.prototype, 'tabbar', {
              get: function get() {
                return Object(_.d)(this)
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          )
        })()
      y.style =
        'html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:auto}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}'
    },
    611: function (t, a, r) {
      'use strict'
      r.d(a, 'a', function () {
        return s
      })
      var n = r(46)
      var s = (function createCommonjsModule(t, a, r) {
        return (
          t(
            (r = {
              path: a,
              exports: {},
              require: function require(t, a) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            r.exports,
          ),
          r.exports
        )
      })(function (t) {
        !(function () {
          var a = {}.hasOwnProperty
          function o() {
            for (var t = [], r = 0; r < arguments.length; r++) {
              var s = arguments[r]
              if (s) {
                var i = Object(n.a)(s)
                if ('string' === i || 'number' === i) t.push(s)
                else if (Array.isArray(s)) {
                  if (s.length) {
                    var l = o.apply(null, s)
                    l && t.push(l)
                  }
                } else if ('object' === i)
                  if (s.toString === Object.prototype.toString)
                    for (var b in s) a.call(s, b) && s[b] && t.push(b)
                  else t.push(s.toString())
              }
            }
            return t.join(' ')
          }
          t.exports
            ? ((o.default = o), (t.exports = o))
            : (window.classNames = o)
        })()
      })
    },
  },
])

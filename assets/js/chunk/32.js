;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var a = t(574),
          c = t(568),
          r = t(90),
          i = t(737),
          l = t(77),
          s = t(64),
          o = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            d = n.className,
            u = void 0 === d ? '' : d,
            b = n.children,
            j = r.a.useRouter().path
          return (
            Object(s.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [j],
            ),
            r.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: j }
            }),
            Object(o.jsxs)(c.n, {
              className: 'demo-page '.concat(u),
              children: [
                Object(o.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(o.jsx)(a.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(l.d)()
                      },
                    }),
                    Object(o.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                b,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return d
      })
      var a = t(39),
        c = t(40),
        r = t(66),
        i = t(65),
        l = t(568),
        s = t(64),
        o = (t(582), t(115)),
        d = (function (e) {
          Object(r.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), n.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    a = e.card
                  return Object(o.jsxs)(l.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(o.jsx)(l.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      a
                        ? Object(o.jsx)(l.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(s.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    589: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Cell
      })
      var a = t(116),
        c = t.n(a),
        r = t(55),
        i = t.n(r),
        l = t(24),
        s = t.n(l),
        o = t(571),
        d = t.n(o),
        u = t(32),
        b = t.n(u),
        j = t(570),
        h = t.n(j),
        f = t(27),
        O = t.n(f),
        v = t(173),
        m = t.n(v),
        p = t(572),
        x = t.n(p),
        g = t(573),
        _ = t.n(g),
        y = t(64),
        C = t(568),
        k = t(569),
        w = t(597),
        S = t(574),
        N = t(583),
        D = t(580)
      var I = t(115),
        z = [
          'url',
          'linkType',
          'size',
          'center',
          'required',
          'border',
          'isLink',
          'clickable',
          'icon',
          'titleWidth',
          'titleStyle',
          'title',
          'label',
          'value',
          'arrowDirection',
          'onClick',
          'renderIcon',
          'renderTitle',
          'renderLabel',
          'renderRightIcon',
          'renderExtra',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (d.a) {
          var a = d()(e)
          n &&
            (a = b()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (m.a) c()(e, m()(a))
          else {
            var r
            O()((r = ownKeys(Object(a)))).call(r, function (n) {
              i()(e, n, h()(a, n))
            })
          }
        }
        return e
      }
      function Cell(e) {
        var n,
          t = e.url,
          a = e.linkType,
          c = e.size,
          r = e.center,
          i = e.required,
          l = e.border,
          s = void 0 === l || l,
          o = e.isLink,
          d = e.clickable,
          u = e.icon,
          b = e.titleWidth,
          j = e.titleStyle,
          h = e.title,
          f = e.label,
          O = e.value,
          v = e.arrowDirection,
          m = e.onClick,
          p = e.renderIcon,
          x = e.renderTitle,
          g = e.renderLabel,
          L = e.renderRightIcon,
          E = e.renderExtra,
          K = e.children,
          T = e.style,
          q = e.className,
          F = _()(e, z),
          R = Object(y.useCallback)(
            function (e) {
              null == m || m(e), t && Object(w.a)(t, a)
            },
            [a, m, t],
          )
        return Object(I.jsxs)(
          C.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  k.b('cell', [
                    c,
                    {
                      center: r,
                      required: i,
                      borderless: !s,
                      clickable: o || d,
                    },
                  ]) +
                  ' '.concat(q || ''),
                hoverClass: 'van-cell--hover hover-class',
                hoverStayTime: 70,
                style: k.c([T]),
                onClick: R,
              },
              F,
            ),
            {},
            {
              children: [
                u
                  ? Object(I.jsx)(S.a, {
                      name: u,
                      className: 'van-cell__left-icon-wrap van-cell__left-icon',
                    })
                  : p,
                Object(I.jsxs)(C.n, {
                  style:
                    ((n = { titleWidth: b, titleStyle: j }),
                    Object(N.a)([
                      {
                        'max-width': Object(D.a)(n.titleWidth),
                        'min-width': Object(D.a)(n.titleWidth),
                      },
                      n.titleStyle,
                    ])),
                  className: 'van-cell__title title-class',
                  children: [
                    h || 0 === h ? Object(I.jsx)(C.a, { children: h }) : x,
                    (f || g) &&
                      Object(I.jsx)(C.n, {
                        className: 'van-cell__label label-class',
                        children:
                          g || (f && Object(I.jsx)(C.a, { children: f })),
                      }),
                  ],
                }),
                Object(I.jsx)(C.n, {
                  className: 'van-cell__value value-class',
                  children:
                    O || 0 === O ? Object(I.jsx)(C.a, { children: O }) : K,
                }),
                o
                  ? Object(I.jsx)(S.a, {
                      name: v ? 'arrow-' + v : 'arrow',
                      className:
                        'van-cell__right-icon-wrap right-icon-class van-cell__right-icon',
                    })
                  : L,
                E,
              ],
            },
          ),
        )
      }
      n.b = Cell
    },
    592: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(601)
    },
    597: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return jumpLink
      })
      var a = t(77)
      function jumpLink(e, n) {
        var t
        if (((n = null !== (t = n) && void 0 !== t ? t : 'navigateTo'), e))
          if ('navigateTo' === n && Object(a.b)().length > 9)
            Object(a.g)({ url: e })
          else
            switch (n) {
              case 'navigateTo':
                Object(a.e)({ url: e })
                break
              case 'reLaunch':
                Object(a.f)({ url: e })
                break
              case 'redirectTo':
                Object(a.g)({ url: e })
            }
      }
    },
    601: function (e, n, t) {},
    615: function (e, n, t) {
      'use strict'
      t(576), t(678)
    },
    616: function (e, n, t) {
      'use strict'
      var a = t(116),
        c = t.n(a),
        r = t(55),
        i = t.n(r),
        l = t(24),
        s = t.n(l),
        o = t(571),
        d = t.n(o),
        u = t(32),
        b = t.n(u),
        j = t(570),
        h = t.n(j),
        f = t(27),
        O = t.n(f),
        v = t(173),
        m = t.n(v),
        p = t(572),
        x = t.n(p),
        g = t(573),
        _ = t.n(g),
        y = t(568),
        C = t(569),
        k = t(115),
        w = ['inset', 'title', 'border', 'children', 'style', 'className']
      function ownKeys(e, n) {
        var t = s()(e)
        if (d.a) {
          var a = d()(e)
          n &&
            (a = b()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (m.a) c()(e, m()(a))
          else {
            var r
            O()((r = ownKeys(Object(a)))).call(r, function (n) {
              i()(e, n, h()(a, n))
            })
          }
        }
        return e
      }
      n.a = function CellGroup(e) {
        var n = e.inset,
          t = e.title,
          a = e.border,
          c = void 0 === a || a,
          r = e.children,
          i = e.style,
          l = e.className,
          s = _()(e, w)
        return Object(k.jsxs)(y.a, {
          children: [
            t &&
              Object(k.jsx)(y.n, {
                className: C.b('cell-group__title', { inset: n }),
                children: t,
              }),
            Object(k.jsx)(
              y.n,
              _objectSpread(
                _objectSpread(
                  {
                    className:
                      ' ' +
                      C.b('cell-group', { inset: n }) +
                      ' ' +
                      (c ? 'van-hairline--top-bottom' : '') +
                      ' '.concat(l || ''),
                    style: i,
                  },
                  s,
                ),
                {},
                { children: r },
              ),
            ),
          ],
        })
      }
    },
    617: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(665)
    },
    618: function (e, n, t) {
      'use strict'
      var a = t(116),
        c = t.n(a),
        r = t(55),
        i = t.n(r),
        l = t(24),
        s = t.n(l),
        o = t(571),
        d = t.n(o),
        u = t(32),
        b = t.n(u),
        j = t(570),
        h = t.n(j),
        f = t(27),
        O = t.n(f),
        v = t(173),
        m = t.n(v),
        p = t(572),
        x = t.n(p),
        g = t(577),
        _ = t.n(g),
        y = t(573),
        C = t.n(y),
        k = t(64),
        w = t(568),
        S = t(569),
        N = t(574),
        D = t(580)
      var I = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return I[e]
      }
      var z = t(115),
        L = [
          'src',
          'round',
          'width',
          'height',
          'radius',
          'lazyLoad',
          'showMenuByLongpress',
          'fit',
          'showError',
          'showLoading',
          'className',
          'style',
          'renderError',
          'renderLoading',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (d.a) {
          var a = d()(e)
          n &&
            (a = b()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (m.a) c()(e, m()(a))
          else {
            var r
            O()((r = ownKeys(Object(a)))).call(r, function (n) {
              i()(e, n, h()(a, n))
            })
          }
        }
        return e
      }
      n.a = function Image(e) {
        var n = e.src,
          t = e.round,
          a = e.width,
          c = e.height,
          r = e.radius,
          i = e.lazyLoad,
          l = e.showMenuByLongpress,
          s = e.fit,
          o = e.showError,
          d = void 0 === o || o,
          u = e.showLoading,
          b = void 0 === u || u,
          j = e.className,
          h = e.style,
          f = e.renderError,
          O = e.renderLoading,
          v = C()(e, L),
          m = Object(k.useState)(),
          p = _()(m, 2),
          x = p[0],
          g = p[1],
          y = Object(k.useState)(!1),
          I = _()(y, 2),
          E = I[0],
          K = I[1]
        Object(k.useEffect)(
          function () {
            void 0 === x && g(!0), K(!1)
          },
          [x],
        )
        var T,
          q = Object(k.useCallback)(function () {
            g(!1)
          }, []),
          F = Object(k.useCallback)(function () {
            K(!0)
          }, []),
          R = Object(k.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== s && 'widthFix' !== s) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [s],
          )
        return Object(z.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                style: S.c([
                  ((T = { width: a, height: c, radius: r }),
                  Object(S.c)([
                    {
                      width: Object(D.a)(T.width),
                      height: Object(D.a)(T.height),
                      'border-radius': Object(D.a)(T.radius),
                    },
                    T.radius ? 'overflow: hidden' : null,
                  ])),
                  h,
                ]),
                className: ' ' + S.b('image', { round: t }) + ' ' + j,
                onClick: v.onClick,
              },
              v,
            ),
            {},
            {
              children: [
                !E &&
                  Object(z.jsx)(w.f, {
                    src: n,
                    mode: mode(s || 'none'),
                    lazyLoad: i,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: l,
                    onLoad: q,
                    onError: F,
                    style: R,
                  }),
                x &&
                  b &&
                  Object(z.jsx)(w.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      O ||
                      Object(z.jsx)(N.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                E &&
                  d &&
                  Object(z.jsx)(w.n, {
                    className: 'error-class van-image__error',
                    children:
                      f ||
                      Object(z.jsx)(N.b, {
                        name: 'photo-fail',
                        className: 'van-image__error-icon',
                      }),
                  }),
              ],
            },
          ),
        )
      }
    },
    626: function (e, n, t) {
      'use strict'
      function isString(e) {
        return '[object String]' === toString.call(e)
      }
      function isArray(e) {
        return '[object Array]' === toString.call(e)
      }
      function isUndefined(e) {
        return '[object Undefined]' === toString.call(e)
      }
      function isObject(e) {
        return '[object Object]' === toString.call(e)
      }
      function isEmptyObject(e) {
        if (!isObject(e)) return !1
        for (var n in e) if (!isUndefined(e[n])) return !1
        return !0
      }
      t.d(n, 'd', function () {
        return isString
      }),
        t.d(n, 'a', function () {
          return isArray
        }),
        t.d(n, 'c', function () {
          return isObject
        }),
        t.d(n, 'b', function () {
          return isEmptyObject
        })
    },
    665: function (e, n, t) {},
    678: function (e, n, t) {},
    686: function (e, n, t) {
      'use strict'
      t(576), t(756)
    },
    687: function (e, n, t) {
      'use strict'
      var a = t(116),
        c = t.n(a),
        r = t(55),
        i = t.n(r),
        l = t(24),
        s = t.n(l),
        o = t(571),
        d = t.n(o),
        u = t(32),
        b = t.n(u),
        j = t(570),
        h = t.n(j),
        f = t(27),
        O = t.n(f),
        v = t(173),
        m = t.n(v),
        p = t(572),
        x = t.n(p),
        g = t(573),
        _ = t.n(g),
        y = t(568),
        C = t(569),
        k = t(757),
        w = t(115),
        S = [
          'value',
          'direction',
          'disabled',
          'onChange',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (d.a) {
          var a = d()(e)
          n &&
            (a = b()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (m.a) c()(e, m()(a))
          else {
            var r
            O()((r = ownKeys(Object(a)))).call(r, function (n) {
              i()(e, n, h()(a, n))
            })
          }
        }
        return e
      }
      n.a = function RadioGroup(e) {
        var n = e.value,
          t = void 0 === n ? null : n,
          a = e.direction,
          c = void 0 === a ? 'vertical' : a,
          r = e.disabled,
          i = void 0 !== r && r,
          l = e.onChange,
          s = e.children,
          o = e.style,
          d = e.className,
          u = _()(e, S)
        return Object(w.jsx)(k.a.Provider, {
          value: { value: t, direction: c, disabled: i, onChange: l },
          children: Object(w.jsx)(
            y.n,
            _objectSpread(
              _objectSpread(
                {
                  className: C.b('radio-group', [c]) + ' '.concat(d || ''),
                  style: o,
                },
                u,
              ),
              {},
              { children: s },
            ),
          ),
        })
      }
    },
    688: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(756), t(776)
    },
    691: function (e, n, t) {
      'use strict'
      var a = t(116),
        c = t.n(a),
        r = t(55),
        i = t.n(r),
        l = t(24),
        s = t.n(l),
        o = t(571),
        d = t.n(o),
        u = t(32),
        b = t.n(u),
        j = t(570),
        h = t.n(j),
        f = t(27),
        O = t.n(f),
        v = t(173),
        m = t.n(v),
        p = t(572),
        x = t.n(p),
        g = t(573),
        _ = t.n(g),
        y = t(577),
        C = t.n(y),
        k = t(568),
        w = t(64),
        S = t(569),
        N = t(574),
        D = t(757),
        I = t(626),
        z = t(583),
        L = t(580)
      var E = t(115),
        K = [
          'name',
          'disabled',
          'checkedColor',
          'labelPosition',
          'labelDisabled',
          'shape',
          'iconSize',
          'renderIcon',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (d.a) {
          var a = d()(e)
          n &&
            (a = b()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (m.a) c()(e, m()(a))
          else {
            var r
            O()((r = ownKeys(Object(a)))).call(r, function (n) {
              i()(e, n, h()(a, n))
            })
          }
        }
        return e
      }
      n.a = function Radio(e) {
        var n = Object(w.useState)({
            value: '',
            direction: '',
            parentDisabled: !1,
          }),
          t = C()(n, 2),
          a = t[0],
          c = t[1],
          r = e.name,
          l = e.disabled,
          s = void 0 !== l && l,
          o = e.checkedColor,
          d = e.labelPosition,
          u = void 0 === d ? 'right' : d,
          b = e.labelDisabled,
          j = void 0 !== b && b,
          h = e.shape,
          f = void 0 === h ? 'round' : h,
          O = e.iconSize,
          v = void 0 === O ? '20px' : O,
          m = e.renderIcon,
          p = e.style,
          x = e.className,
          g = e.children,
          y = _()(e, K),
          T = Object(w.useContext)(D.a),
          q = Object(w.useCallback)(
            function (n) {
              var t
              T.onChange
                ? T.onChange(n)
                : null == e ||
                  null === (t = e.onChange) ||
                  void 0 === t ||
                  t.call(e, n)
            },
            [T.onChange, e.onChange],
          )
        Object(w.useEffect)(
          function () {
            c(function (n) {
              return _objectSpread(_objectSpread({}, n), {}, { value: e.value })
            })
          },
          [e.value],
        ),
          Object(w.useEffect)(
            function () {
              if (!Object(I.b)(T)) {
                var e = T.value,
                  n = T.direction,
                  t = T.disabled
                c(function (a) {
                  return _objectSpread(
                    _objectSpread({}, a),
                    {},
                    { value: e, direction: n, parentDisabled: t },
                  )
                })
              }
            },
            [e.value, T],
          )
        var F,
          R,
          A = Object(w.useCallback)(
            function (e) {
              null == q || q(e),
                c(function (n) {
                  return _objectSpread(
                    _objectSpread({}, n),
                    {},
                    { value: e.detail },
                  )
                })
            },
            [q],
          ),
          M = Object(w.useCallback)(
            function (e) {
              s ||
                a.parentDisabled ||
                (i()(e, 'detail', { value: r, writable: !0 }), A(e))
            },
            [s, A, r, a.parentDisabled],
          ),
          P = Object(w.useCallback)(
            function (e) {
              s ||
                a.parentDisabled ||
                j ||
                (i()(e, 'detail', { value: r, writable: !0 }), A(e))
            },
            [s, A, j, r, a.parentDisabled],
          )
        return Object(E.jsxs)(
          k.n,
          _objectSpread(
            _objectSpread(
              {
                className: S.b('radio', [a.direction]) + '  '.concat(x),
                style: p,
              },
              y,
            ),
            {},
            {
              children: [
                'left' === u &&
                  Object(E.jsx)(k.n, {
                    className:
                      S.b('radio__label', [
                        u,
                        { disabled: s || a.parentDisabled },
                      ]) + ' label-class',
                    onClick: P,
                    children: g,
                  }),
                Object(E.jsx)(k.n, {
                  className: 'van-radio__icon-wrap',
                  style: 'font-size: ' + S.a(v),
                  onClick: M,
                  children:
                    m ||
                    Object(E.jsx)(N.b, {
                      name: 'success',
                      className:
                        S.b('radio__icon', [
                          f,
                          {
                            disabled: s || a.parentDisabled,
                            checked: a.value === r,
                          },
                        ]) + ' icon-class',
                      style:
                        ((F = {
                          iconSize: v,
                          checkedColor: o,
                          disabled: s,
                          parentDisabled: a.parentDisabled,
                          value: a.value,
                          name: r,
                        }),
                        (R = { 'font-size': Object(L.a)(F.iconSize) }),
                        !F.checkedColor ||
                          F.disabled ||
                          F.parentDisabled ||
                          F.value !== F.name ||
                          ((R['border-color'] = F.checkedColor),
                          (R['background-color'] = F.checkedColor)),
                        Object(z.a)(R)),
                    }),
                }),
                'right' === u &&
                  Object(E.jsx)(k.n, {
                    className:
                      'label-class ' +
                      S.b('radio__label', [
                        u,
                        { disabled: s || a.parentDisabled },
                      ]),
                    onClick: P,
                    children: g,
                  }),
              ],
            },
          ),
        )
      }
    },
    756: function (e, n, t) {},
    757: function (e, n, t) {
      'use strict'
      var a = t(64),
        c = Object(a.createContext)({})
      n.a = c
    },
    776: function (e, n, t) {},
    878: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return x
        })
      var a = t(39),
        c = t(40),
        r = t(175),
        i = t(66),
        l = t(65),
        s = t(91),
        o = t(64),
        d = t.n(o),
        u = t(578),
        b = t(579),
        j = (t(686), t(687)),
        h = (t(688), t(691)),
        f = t(174),
        O = t(115)
      function Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, { name: '1', children: '单选框 1' }),
            Object(O.jsx)(h.a, { name: '2', children: '单选框 2' }),
          ],
        })
      }
      function demo2_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          direction: 'horizontal',
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, { name: '1', children: '单选框 1' }),
            Object(O.jsx)(h.a, { name: '2', children: '单选框 2' }),
          ],
        })
      }
      function demo3_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          disabled: !0,
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, { name: '1', children: '单选框 1' }),
            Object(O.jsx)(h.a, { name: '2', children: '单选框 2' }),
          ],
        })
      }
      function demo4_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, {
              name: '1',
              shape: 'square',
              children: '单选框 1',
            }),
            Object(O.jsx)(h.a, {
              name: '2',
              shape: 'square',
              children: '单选框 2',
            }),
          ],
        })
      }
      function demo5_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, {
              name: '1',
              checkedColor: '#07c160',
              shape: 'square',
              children: '单选框 1',
            }),
            Object(O.jsx)(h.a, {
              name: '2',
              checkedColor: '#07c160',
              shape: 'square',
              children: '单选框 2',
            }),
          ],
        })
      }
      function demo6_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, {
              name: '1',
              iconSize: '24px',
              shape: 'square',
              children: '单选框 1',
            }),
            Object(O.jsx)(h.a, {
              name: '2',
              iconSize: '24px',
              shape: 'square',
              children: '单选框 2',
            }),
          ],
        })
      }
      t(617)
      var v = t(618)
      function demo7_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, {
              name: '1',
              renderIcon: Object(O.jsx)(v.a, {
                style: { width: '32px', height: '32px' },
                src:
                  '2' === t
                    ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                    : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
              }),
              shape: 'square',
              children: '单选框 1',
            }),
            Object(O.jsx)(h.a, {
              name: '2',
              renderIcon: Object(O.jsx)(v.a, {
                style: { width: '32px', height: '32px' },
                src:
                  '1' === t
                    ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                    : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
              }),
              shape: 'square',
              children: '单选框 2',
            }),
          ],
        })
      }
      function demo8_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsxs)(j.a, {
          direction: 'horizontal',
          value: t,
          onChange: function onChange(e) {
            return a(e.detail)
          },
          children: [
            Object(O.jsx)(h.a, {
              name: '1',
              labelDisabled: !0,
              children: '单选框 1',
            }),
            Object(O.jsx)(h.a, {
              name: '2',
              labelDisabled: !0,
              children: '单选框 2',
            }),
          ],
        })
      }
      t(615)
      var m = t(616),
        p = (t(592), t(589))
      function demo9_Demo() {
        var e = d.a.useState('1'),
          n = Object(f.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(O.jsx)(j.a, {
          value: t,
          children: Object(O.jsxs)(m.a, {
            children: [
              Object(O.jsx)(p.b, {
                title: '单选框 1',
                clickable: !0,
                onClick: function onClick() {
                  return a('1')
                },
                renderRightIcon: Object(O.jsx)(h.a, { name: '1' }),
              }),
              Object(O.jsx)(p.b, {
                title: '单选框 2',
                clickable: !0,
                onClick: function onClick() {
                  return a('2')
                },
                renderRightIcon: Object(O.jsx)(h.a, { name: '2' }),
              }),
            ],
          }),
        })
      }
      var x = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(l.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = n.call(this)),
            Object(s.a)(Object(r.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(O.jsxs)(u.a, {
                  title: 'Radio 单选框',
                  className: 'pages-radio-index',
                  children: [
                    Object(O.jsx)(b.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(O.jsx)(Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '水平排列',
                      padding: !0,
                      children: Object(O.jsx)(demo2_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '禁用状态',
                      padding: !0,
                      children: Object(O.jsx)(demo3_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '自定义形状',
                      padding: !0,
                      children: Object(O.jsx)(demo4_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(O.jsx)(demo5_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '自定义大小',
                      padding: !0,
                      children: Object(O.jsx)(demo6_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '自定义图标',
                      padding: !0,
                      children: Object(O.jsx)(demo7_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '禁用文本点击',
                      padding: !0,
                      children: Object(O.jsx)(demo8_Demo, {}),
                    }),
                    Object(O.jsx)(b.a, {
                      title: '与 Cell 组件一起使用',
                      padding: !0,
                      children: Object(O.jsx)(demo9_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(o.Component)
    },
  },
])

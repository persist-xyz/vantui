;(window.webpackJsonp = window.webpackJsonp || []).push([
  [119],
  {
    566: function (o, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'taro_web_view_core', function () {
          return i
        })
      var n = t(147),
        i = (function () {
          function e(o) {
            Object(n.g)(this, o),
              (this.onLoad = Object(n.c)(this, 'load', 7)),
              (this.onError = Object(n.c)(this, 'error', 7))
          }
          return (
            (e.prototype.render = function () {
              var o = this,
                r = o.src,
                t = o.onLoad,
                i = o.onError
              return Object(n.e)('iframe', {
                class: 'taro-webview',
                onLoad: function onLoad(o) {
                  o.stopPropagation(), t.emit({ src: r })
                },
                onError: function onError(o) {
                  o.stopPropagation(), i.emit({ src: r })
                },
                src: r,
              })
            }),
            e
          )
        })()
      i.style =
        'iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;width:100%;height:100%;z-index:999}'
    },
  },
])

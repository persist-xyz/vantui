(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),i=t(280),r=t(31),o=t(27),s=(t(283),t(44));function Page(n){var t=n.title,l=n.children;return Object(o.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(r.pageScrollTo)({"scrollTop":0})}),[location.hash]),Object(s.jsxs)(i.m,{"className":"demo-page","children":[Object(s.jsxs)(i.m,{"className":"demo-nav","children":[Object(s.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(s.jsxs)(i.m,{"className":"demo-nav__title","children":[t," "]})]}),l]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var c=t(3),i=t.n(c),r=t(6),o=t.n(r),s=t(16),l=t.n(s),a=t(17),d=t.n(a),u=t(280),h=t(27),j=(t(285),t(44)),f=function(e){l()(Index,e);var n=d()(Index);function Index(){return i()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(j.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(j.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(j.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"285":function(e,n,t){},"702":function(e,n,t){},"754":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var c=t(3),i=t.n(c),r=t(6),o=t.n(r),s=t(24),l=t.n(s),a=t(16),d=t.n(a),u=t(17),h=t.n(u),j=t(9),f=t.n(j),m=t(27),x=t(31),b=t(281),p=t(282),O=t(284),k=(t(702),t(44)),v=function(e){d()(Index,e);var n=h()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),f()(l()(e),"onClickLeft",(function(){Object(x.showToast)({"title":"点击返回","icon":"none"})})),f()(l()(e),"onClickRight",(function(){Object(x.showToast)({"title":"点击按钮","icon":"none"})})),e}return o()(Index,[{"key":"render","value":function render(){return Object(k.jsx)(p.a,{"title":"NavBar 导航栏","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsx)(O.a,{"title":"基础用法","children":Object(k.jsx)(b.G,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight})}),Object(k.jsx)(O.a,{"title":"高级用法","children":Object(k.jsx)(b.G,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(k.jsx)(k.Fragment,{"children":Object(k.jsx)(b.B,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(m.Component)}}]);
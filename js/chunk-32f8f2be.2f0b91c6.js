(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-32f8f2be'], { '129c': function (t, e, s) { t.exports = s.p + 'img/6.58975148.jpg' }, '129f': function (t, e) { t.exports = Object.is || function (t, e) { return t === e ? t !== 0 || 1 / t === 1 / e : t != t && e != e } }, 2144: function (t, e, s) { t.exports = s.p + 'img/7.1915fc8e.jpg' }, 2532: function (t, e, s) { 'use strict'; var r = s('23e7'); var i = s('5a34'); var n = s('1d80'); var c = s('ab13'); r({ target: 'String', proto: !0, forced: !c('includes') }, { includes: function (t) { return !!~String(n(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0) } }) }, '2d3b': function (t, e, s) { 'use strict'; s.r(e); var r = function () { var t = this; var e = t.$createElement; var r = t._self._c || e; return r('div', { staticClass: 'search' }, [r('div', { staticClass: 'search-box' }, [r('img', { attrs: { src: s('2144'), alt: '' } }), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.keywords, expression: 'keywords' }, { name: 'throttle', rawName: 'v-throttle', value: t.search, expression: 'search' }], attrs: { type: 'text', placeholder: '搜索歌曲,歌手,专辑' }, domProps: { value: t.keywords }, on: { input: function (e) { e.target.composing || (t.keywords = e.target.value) } } })]), r('div', { directives: [{ name: 'show', rawName: 'v-show', value: t.keywords !== '', expression: "keywords !== ''" }], staticClass: 'search-suggest' }, [r('ScrollView', [r('ul', t._l(t.songs, function (e) { return r('li', { key: e.id, on: { click: function (s) { return s.stopPropagation(), t.selectMusic(e.id) } } }, [r('img', { attrs: { src: s('2144'), alt: '' } }), r('p', [t._v(t._s(e.name) + ' - ' + t._s(e.artists[0].name))])]) }), 0)])], 1), r('div', { staticClass: 'search-hot' }, [r('h3', [t._v('热门搜索')]), r('ul', t._l(t.hots, function (e) { return r('li', { key: e.first, on: { click: function (s) { return s.stopPropagation(), t.selectHot(e.first) } } }, [t._v(t._s(e.first))]) }), 0)]), r('ul', { staticClass: 'search-history' }, t._l(t.searchHistory, function (e) { return r('li', { key: e }, [r('div', { staticClass: 'history-left' }, [r('img', { attrs: { src: s('129c'), alt: '' } }), r('p', [t._v(t._s(e))])]), r('div', { staticClass: 'history-right' }, [r('img', { attrs: { src: s('593c'), alt: '' }, on: { click: function (s) { return s.stopPropagation(), t.delHistory(e) } } })])]) }), 0)]) }; var i = []; var n = s('5530'); var c = (s('caad'), s('2532'), s('ac1f'), s('841c'), s('4de4'), s('4795'), s('9b91')); var o = s('365c'); var a = s('2f62'); var u = s('0210'); var l = { name: 'Search', components: { ScrollView: c.a }, data: function () { return { keywords: '', songs: [], hots: [], searchHistory: [] } }, methods: Object(n.a)(Object(n.a)({}, Object(a.b)(['setFullScreen', 'setSongDetail'])), {}, { search: function () { var t = this; Object(o.j)({ keywords: this.keywords }).then(function (e) { t.songs = e.result.songs }).catch(function (t) { console.log(t) }) }, selectMusic: function (t) { this.setFullScreen(!0), this.setSongDetail([t]), this.searchHistory.includes(this.keywords) || (this.searchHistory.push(this.keywords), Object(u.d)('searchHistory', this.searchHistory), this.keywords = '') }, selectHot: function (t) { this.keywords = t, this.search() }, delHistory: function (t) { this.searchHistory = this.searchHistory.filter(function (e) { return e !== t }), Object(u.d)('searchHistory', this.searchHistory) } }), directives: { throttle: { inserted: function (t, e) { var s = null; var r = !0; t.addEventListener('input', function () { r && (r = !1, s && clearTimeout(s), s = setTimeout(function () { r = !0, e.value() }, 1500)) }) } } }, created: function () { var t = this; Object(o.i)().then(function (e) { t.hots = e.result.hots }).catch(function (t) { console.log(t) }), void 0 !== Object(u.b)('searchHistory') && Object(u.b)('searchHistory') !== null && (this.searchHistory = Object(u.b)('searchHistory')) } }; var h = l; var d = (s('e634'), s('2877')); var f = Object(d.a)(h, r, i, !1, null, '773de102', null); e.default = f.exports }, '593c': function (t, e, s) { t.exports = s.p + 'img/2.0b80bf76.jpg' }, '5a34': function (t, e, s) { var r = s('44e7'); t.exports = function (t) { if (r(t)) throw TypeError("The method doesn't accept regular expressions"); return t } }, '64a9': function (t, e, s) {}, '841c': function (t, e, s) { 'use strict'; var r = s('d784'); var i = s('825a'); var n = s('1d80'); var c = s('129f'); var o = s('14c3'); r('search', 1, function (t, e, s) { return [function (e) { var s = n(this); var r = void 0 == e ? void 0 : e[t]; return void 0 !== r ? r.call(e, s) : new RegExp(e)[t](String(s)) }, function (t) { var r = s(e, t, this); if (r.done) return r.value; var n = i(t); var a = String(this); var u = n.lastIndex; c(u, 0) || (n.lastIndex = 0); var l = o(n, a); return c(n.lastIndex, u) || (n.lastIndex = u), l === null ? -1 : l.index }] }) }, ab13: function (t, e, s) { var r = s('b622'); var i = r('match'); t.exports = function (t) { var e = /./; try { '/./'[t](e) } catch (s) { try { return e[i] = !1, '/./'[t](e) } catch (r) {} } return !1 } }, caad: function (t, e, s) { 'use strict'; var r = s('23e7'); var i = s('4d64').includes; var n = s('44d2'); r({ target: 'Array', proto: !0 }, { includes: function (t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), n('includes') }, e634: function (t, e, s) { 'use strict'; s('64a9') } }])
// # sourceMappingURL=chunk-32f8f2be.2f0b91c6.js.map

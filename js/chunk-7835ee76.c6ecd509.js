(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7835ee76"],{"1b3e":function(t,e,n){},"789b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank"},[n("div",{staticClass:"rank-wrapper"},[n("ScrollView",[n("ul",t._l(t.category.titles,(function(e,a){return n("li",{key:a},[n("h3",{staticClass:"group-title"},[t._v(t._s(e))]),"officialList"===a?n("ul",{staticClass:"normal-group"},t._l(t.category[a],(function(e){return n("li",{key:e.id,on:{click:function(n){return n.stopPropagation(),t.selectedItem(e.id)}}},[n("div",{staticClass:"rank-left"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Img,expression:"obj.Img"}],attrs:{alt:""}}),n("p",[t._v(t._s(e.update))])]),n("div",{staticClass:"rank-right"},t._l(e.songs,(function(e,a){return n("p",{key:e.first},[t._v(t._s(a+1)+"."+t._s(e.first)+" - "+t._s(e.second))])})),0)])})),0):n("ul",{staticClass:"other-group"},t._l(t.category[a],(function(e){return n("li",{key:e.id,on:{click:function(n){return n.stopPropagation(),t.selectedItem(e.id)}}},[n("div",{staticClass:"rank-top"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Img,expression:"obj.Img"}],attrs:{alt:""}}),n("p",[t._v(t._s(e.update))])]),n("div",{staticClass:"rank-bottom"},[n("p",[t._v(t._s(e.name))])])])})),0)])})),0)])],1),n("transition",[n("router-view")],1)],1)},i=[],c=n("365c"),o=n("9b91"),s=n("939c"),r={name:"Rank",metaInfo:s["a"].rank,components:{ScrollView:o["a"]},data:function(){return{category:{}}},methods:{selectedItem:function(t){this.$router.push("/rank/detail/".concat(t,"/rank"))}},created:function(){var t=this;Object(c["n"])().then((function(e){t.category=e}))["catch"]((function(){console.log("排行版数据获取失败")}))}},l=r,p=(n("a913"),n("2877")),m=Object(p["a"])(l,a,i,!1,null,"55d69c35",null);e["default"]=m.exports},"939c":function(t,e,n){"use strict";e["a"]={recommend:{title:"我是recommend",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},singer:{title:"我是singer",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},rank:{title:"我是rank",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},search:{title:"我是search",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},account:{title:"我是account",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},detail:{title:"我是detail",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]}}},a913:function(t,e,n){"use strict";n("1b3e")}}]);
//# sourceMappingURL=chunk-7835ee76.c6ecd509.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1601a74a"],{"342e":function(t,e,a){"use strict";a("a1cc")},"789b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank"},[a("div",{staticClass:"rank-wrapper"},[a("ScrollView",[a("ul",t._l(t.category.titles,(function(e,n){return a("li",{key:n},[a("h3",{staticClass:"group-title"},[t._v(t._s(e))]),"officialList"===n?a("ul",{staticClass:"normal-group"},t._l(t.category[n],(function(e){return a("li",{key:e.id,on:{click:function(a){return a.stopPropagation(),t.selectedItem(e.id)}}},[a("div",{staticClass:"rank-left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Img,expression:"obj.Img"}],attrs:{alt:""}}),a("p",[t._v(t._s(e.update))])]),a("div",{staticClass:"rank-right"},t._l(e.songs,(function(e,n){return a("p",{key:e.first},[t._v(t._s(n+1)+"."+t._s(e.first)+" - "+t._s(e.second))])})),0)])})),0):a("ul",{staticClass:"other-group"},t._l(t.category[n],(function(e){return a("li",{key:e.id,on:{click:function(a){return a.stopPropagation(),t.selectedItem(e.id)}}},[a("div",{staticClass:"rank-top"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Img,expression:"obj.Img"}],attrs:{alt:""}}),a("p",[t._v(t._s(e.update))])]),a("div",{staticClass:"rank-bottom"},[a("p",[t._v(t._s(e.name))])])])})),0)])})),0)])],1),a("transition",[a("router-view")],1)],1)},s=[],i=a("365c"),r=a("9b91"),c={name:"Rank",components:{ScrollView:r["a"]},data:function(){return{category:{}}},methods:{selectedItem:function(t){this.$router.push("/rank/detail/".concat(t,"/rank"))}},created:function(){var t=this;Object(i["n"])().then((function(e){t.category=e}))["catch"]((function(){console.log("排行版数据获取失败")}))}},o=c,l=(a("342e"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,"f9bf7cd8",null);e["default"]=u.exports},a1cc:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1601a74a.68ed47e5.js.map
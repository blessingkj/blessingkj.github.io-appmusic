(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac05ac6"],{"5c73":function(t,e,n){},"7f43":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"singer"},[n("div",{staticClass:"singer-wrapper"},[n("ScrollView",{ref:"scrollView"},[n("ul",{staticClass:"list-wrapper"},t._l(t.list,(function(e,i){return n("li",{key:i,ref:"group",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"group-title"},[t._v(t._s(t.keys[i]))]),n("ul",t._l(t.list[i],(function(e){return n("li",{key:e.singerID,staticClass:"group-item",on:{click:function(n){return n.stopPropagation(),t.switchSinger(e.singerID)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.singerImg,expression:"obj.singerImg"}],attrs:{alt:""}}),n("p",[t._v(t._s(e.singer))])])})),0)])})),0)]),n("ul",{staticClass:"list-keys"},t._l(t.keys,(function(e,i){return n("li",{key:e,class:{active:t.currentIndex===i},attrs:{"data-index":i},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove(e)}}},[t._v(t._s(e))])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.fixTitle,expression:"fixTitle !== '' "}],ref:"fixTitle",staticClass:"fix-title"},[t._v(t._s(t.fixTitle))])],1),n("transition",[n("router-view")],1)],1)},s=[],r=(n("d3b7"),n("ddb0"),n("e25e"),n("4160"),n("159b"),n("365c")),o=n("9b91"),a=n("939c"),c={name:"Singer",metaInfo:a["a"].singer,components:{ScrollView:o["a"]},data:function(){return{keys:[],list:[],groupsTop:[],currentIndex:0,beginOffsetY:0,moveOffsetY:0,scrollY:0}},computed:{fixTitle:function(){return this.scrollY>=0?"":this.keys[this.currentIndex]}},created:function(){var t=this;Object(r["b"])().then((function(e){t.keys=e.keys,t.list=e.list}))["catch"]((function(t){console.log(t)}))},mounted:function(){var t=this;this.$refs.scrollView.scrolling((function(e){if(t.scrollY=e,e>=0)t.currentIndex=0;else{for(var n=0;n<t.groupsTop.length;n++){var i=t.groupsTop[n],s=t.groupsTop[n+1];if(Math.abs(e)>=i&&Math.abs(e)<=s){t.currentIndex=n;var r=s+e,o=0;if(o=r>=0&&r<=t.fixTitleHeight?r-t.fixTitleHeight:0,o===t.fixTitleOffsetY)return;return t.fixTitleOffsetY=o,void(t.$refs.fixTitle.style.transform="translateY(".concat(o,"px)"))}}t.currentIndex=t.groupsTop.length-1}}))},methods:{_keyDown:function(t){this.currentIndex=t;var e=this.groupsTop[t];this.$refs.scrollView.scrollTo(0,-e)},touchstart:function(t){var e=parseInt(t.target.dataset.index);this._keyDown(e),this.beginOffsetY=t.touches[0].pageY},touchmove:function(t){this.moveOffsetY=t.touches[0].pageY;var e=(this.moveOffsetY-this.beginOffsetY)/t.target.offsetHeight,n=parseInt(t.target.dataset.index)+Math.floor(e);n<0?n=0:n>this.keys.length-1&&(n=this.keys.length-1),this._keyDown(n)},switchSinger:function(t){this.$router.push("/singer/detail/".concat(t,"/singer"))}},watch:{list:function(){var t=this;this.$nextTick((function(){t.$refs.group.forEach((function(e){t.groupsTop.push(e.offsetTop)}))}))},fixTitle:function(){var t=this;this.$nextTick((function(){t.fixTitleHeight=t.$refs.fixTitle.offsetHeight}))}}},l=c,u=(n("caa0"),n("2877")),f=Object(u["a"])(l,i,s,!1,null,"9aa5d5c4",null);e["default"]=f.exports},"939c":function(t,e,n){"use strict";e["a"]={recommend:{title:"我是recommend",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},singer:{title:"我是singer",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},rank:{title:"我是rank",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},search:{title:"我是search",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},account:{title:"我是account",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]},detail:{title:"我是detail",meta:[{name:"keyWords",content:"My Example App"},{name:"description",content:"这是一段网页描述1"}]}}},caa0:function(t,e,n){"use strict";n("5c73")}}]);
//# sourceMappingURL=chunk-7ac05ac6.7f61eed5.js.map
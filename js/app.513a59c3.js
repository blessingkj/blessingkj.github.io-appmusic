(function(e){function t(t){for(var i,r,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},s={app:0},a=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2c53fbde":"8c3d2060","chunk-37be0faa":"5507675a","chunk-3af651ee":"9608930f","chunk-52307b74":"0e168546","chunk-7835ee76":"c6ecd509","chunk-7ac05ac6":"7f61eed5"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-2c53fbde":1,"chunk-37be0faa":1,"chunk-3af651ee":1,"chunk-52307b74":1,"chunk-7835ee76":1,"chunk-7ac05ac6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-2c53fbde":"aafacda3","chunk-37be0faa":"476c8e25","chunk-3af651ee":"41a5ad90","chunk-52307b74":"3e88669f","chunk-7835ee76":"ded57f44","chunk-7ac05ac6":"e74e0a6c"}[e]+".css",s=c.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===i||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=s[e]=[t,n]}));t.push(i[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0210":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return a}));var i=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},r=function(e){var t=e,n=Math.floor(t/86400);n=n>=10?n:"0"+n;var i=Math.floor(t/3600%24);i=i>=10?i:"0"+i;var r=Math.floor(t/60%60);r=r>=10?r:"0"+r;var s=Math.floor(t%60);return s=s>=10?s:"0"+s,{day:n,hour:i,minute:r,second:s}},s=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},a=function(e){return JSON.parse(window.localStorage.getItem(e))}},"0418":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",on:{click:e.changeTheme}},[n("div",{staticClass:"left"},[e._t("left",[e._v("左边")])],2),e._t("center",[e._v("中间")]),n("div",{staticClass:"right"},[e._t("right",[e._v("右边")])],2)],2)},r=[],s={name:"Header",data:function(){return{themes:["theme","theme1","theme2"],index:0}},methods:{changeTheme:function(){this.index++,this.index>=this.themes.length&&(this.index=0),document.documentElement.setAttribute("data-theme",this.themes[this.index])}}},a=s,o=(n("8a97"),n("2877")),c=Object(o["a"])(a,i,r,!1,null,"528329b2",null);t["a"]=c.exports},"069c":function(e,t,n){"use strict";n("e2f8")},"0f66":function(e,t,n){},2656:function(e,t,n){},"2ea5":function(e,t,n){},"2f7f":function(e,t,n){},"365c":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return v})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return S})),n.d(t,"n",(function(){return w})),n.d(t,"j",(function(){return L})),n.d(t,"i",(function(){return T}));n("d3b7"),n("4160"),n("159b"),n("b0c0");var i=n("bc3a"),r=n.n(i),s=n("2b0e");r.a.defaults.baseURL="https://blessingkj.github.io/blessingkj.github.io-appmusic/",r.a.defaults.timeout=6e3;var a=0;r.a.interceptors.request.use((function(e){return a++,s["a"].showLoading(),e}),(function(e){return s["a"].hiddenLoading(),Promise.reject(e)})),r.a.interceptors.response.use((function(e){return a--,0===a&&s["a"].hiddenLoading(),e}),(function(e){return s["a"].hiddenLoading(),Promise.reject(e)}));var o={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){r.a.get(e,{params:t}).then((function(e){n(e.data)}))["catch"]((function(e){i(e)}))}))},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){r.a.post(e,t).then((function(e){n(e.data)}))["catch"]((function(e){i(e)}))}))},all:function(e){return new Promise((function(t,n){r.a.all(e).then(r.a.spread((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t(n)})))["catch"]((function(e){n(e)}))}))}},c=function(){return o.get("banner?type=2")},u=function(){return o.get("personalized?limit=12")},l=function(){return o.get("album/newest")},d=function(){return o.get("personalized/newsong")},f=function(e){return o.get("playlist/detail",e)},h=function(e){return o.get("album",e)},m=function(e){return o.get("song/detail",e)},p=function(e){return o.get("lyric",e)},v=function(e){return o.get("song/url",e)},g=function(){return new Promise((function(e,t){o.get("top/artists?offset=0&limit=10").then((function(t){var n=[];t.artists.forEach((function(e){var t={};t.singer=e.name,t.singerID=e.id,t.singerImg=e.picUrl,n.push(t)})),e(n)}))["catch"]((function(e){t(e)}))}))},y=function(e){return new Promise((function(t,n){o.all([o.get("artist/list?offset=0&limit=10&area=-1&initial=".concat(e))]).then((function(e){var n=[];e[0].artists.forEach((function(e){var t={};t.singer=e.name,t.singerID=e.id,t.singerImg=e.picUrl,n.push(t)})),t(n)}))["catch"]((function(e){n(e)}))}))},b=function(){return new Promise((function(e,t){for(var n=["热"],i=[g()],r=65;r<91;r++){var s=String.fromCharCode(r);n.push(s),i.push(y(s))}o.all(i).then((function(t){var i={};i.keys=n,i.list=t,e(i)}))["catch"]((function(e){t(e)}))}))},S=function(e){return o.get("artists",e)},w=function(){return new Promise((function(e,t){var n={officialList:[{name:"飙升榜",id:3},{name:"新歌榜",id:0},{name:"原创榜",id:2},{name:"热歌榜",id:1}],recList:[{name:"黑胶VIP爱听榜",id:23},{name:"云音乐说唱榜",id:25},{name:"云音乐古典榜",id:32},{name:"云音乐ACG游戏榜",id:26},{name:"云音乐ACG VOCALOID榜",id:22},{name:"中国新乡村音乐排行榜",id:24}],globalList:[{name:"iTunes榜",id:6},{name:"日本Oricon榜",id:5},{name:"云音乐欧美热歌榜",id:21},{name:"云音乐欧美新歌榜",id:10},{name:"法国 NRJ Vos Hits 周榜",id:8},{name:"云音乐ACG动画榜",id:29}],otherList:[{name:"云音乐日语榜",id:7},{name:"云音乐摇滚榜",id:19},{name:"云音乐古风榜",id:27},{name:"潜力爆款榜",id:28},{name:"云音乐民谣榜",id:30},{name:"听歌识曲榜",id:31}],titles:{officialList:"官方榜",recList:"推荐榜",globalList:"全球榜",otherList:"更多榜单"}};o.get("toplist/detail").then((function(t){t.list.forEach((function(e){var t=!1;for(var i in n){for(var r=0;r<n[i].length;r++)if(n[i][r].name===e.name){n[i][r].id=e.id,n[i][r].Img=e.coverImgUrl,n[i][r].update=e.updateFrequency,n[i][r].songs=e.tracks,t=!0;break}if(t)break}})),e(n)}))["catch"]((function(e){t(e)}))}))},L=function(e){return o.get("search?type=1",e)},T=function(){return o.get("search/hot")}},"3dc7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainHeader"),n("TabBar"),n("keep-alive",{attrs:{include:"Singer, Search"}},[n("router-view")],1),n("Player")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Header",{staticClass:"header"},[n("div",{staticClass:"header-left",attrs:{slot:"left"},slot:"left"}),n("div",{staticClass:"header-title",attrs:{slot:"center"},slot:"center"},[e._v("知播鱼音乐")]),n("div",{staticClass:"header-right",attrs:{slot:"right"},on:{click:function(t){return t.stopPropagation(),e.accountClick(t)}},slot:"right"})])},o=[],c=n("0418"),u={name:"MainHeader",components:{Header:c["a"]},methods:{accountClick:function(){this.$router.push("/account")}}},l=u,d=(n("bff4"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,"07d6623d",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabBar"},[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/recommend"}},[n("span",[e._v("推荐")])]),n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/singer"}},[n("span",[e._v("歌手")])]),n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/rank"}},[n("span",[e._v("排行")])]),n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/search"}},[n("span",[e._v("搜索")])])],1)},p=[],v={name:"TabBar"},g=v,y=(n("c3b6"),Object(d["a"])(g,m,p,!1,null,"58014074",null)),b=y.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player"},[n("NormalPlayer",{attrs:{totalTime:e.totalTime,currentTime:e.currentTime}}),n("MiniPlayer"),n("ListPlayer",{ref:"listPlayer"}),n("audio",{ref:"audio",attrs:{src:e.currentSong.url},on:{timeupdate:e.timeupdate,ended:e.end}})],1)},w=[],L=n("5530"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isFullScreen,expression:"this.isFullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"player-wrapper"},[n("PlayerHeader"),n("PlayerMiddle",{attrs:{currentTime:e.currentTime}}),n("PlayerBottom",{attrs:{totalTime:e.totalTime,currentTime:e.currentTime}})],1),n("div",{staticClass:"player-bg"},[n("img",{attrs:{src:e.currentSong.picUrl,alt:""}})])])])},P=[],O=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playerHeader"},[n("div",{staticClass:"playerHeader-left",on:{click:e.hiddenNormalPlayer}}),n("div",{staticClass:"playerHeader-title"},[n("h3",[e._v(e._s(e.currentSong.name))]),n("p",[e._v(e._s(e.currentSong.singer))])]),n("div",{staticClass:"playerHeader-right"})])}),C=[],_=n("2f62"),j={name:"PlayerHeader",methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["setFullScreen"])),{},{hiddenNormalPlayer:function(){this.setFullScreen(!1)}}),computed:Object(L["a"])({},Object(_["c"])(["currentSong"]))},k=j,x=(n("7869"),Object(d["a"])(k,O,C,!1,null,"f8af8b8c",null)),I=x.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{staticClass:"banner",attrs:{options:e.swiperOption}},[n("swiper-slide",{staticClass:"cd"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("img",{attrs:{src:e.currentSong.picUrl,alt:""}})]),n("p",[e._v(e._s(e.getFirstLyric()))])]),n("swiper-slide",{ref:"lyric",staticClass:"lyric"},[n("ScrollView",{ref:"ScrollView"},[n("ul",e._l(e.currentLyric,(function(t,i){return n("li",{key:i,class:{active:e.currentLineNum===i}},[e._v(e._s(t))])})),0)])],1),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},E=[],M=(n("dfa4"),n("7212")),N=n("9b91"),F={name:"PlayerMiddle",computed:Object(L["a"])({},Object(_["c"])(["isPlaying","currentSong","currentLyric"])),data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",bulletClass:"my-bullet",bulletActiveClass:"my-bullet-active"},observer:!0,observeParents:!0,observeSlideChildren:!0},currentLineNum:""}},methods:{getFirstLyric:function(){for(var e in this.currentLyric)return this.currentLyric[e]},getActiveLineNum:function(e){if(e<0)return this.currentLineNum;var t=this.currentLyric[e+""];return void 0===t||""===t?(e--,this.getActiveLineNum(e)):e+""}},components:{swiper:M["swiper"],swiperSlide:M["swiperSlide"],ScrollView:N["a"]},watch:{isPlaying:function(e){e?this.$refs.cdWrapper.classList.add("active"):this.$refs.cdWrapper.classList.remove("active")},currentTime:function(e){var t=Math.floor(e);this.currentLineNum=this.getActiveLineNum(t);var n=document.querySelector(".lyric li.active").offsetTop;console.log(n);var i=this.$refs.lyric.$el.offsetHeight;n>i/2?this.$refs.ScrollView.scrollTo(0,i/2-n,100):this.$refs.ScrollView.scrollTo(0,0,100)},currentLyric:function(e){for(var t in e)return void(this.currentLineNum=t)}},props:{currentTime:{type:Number,default:0,required:!0}}},H=F,A=(n("69a4"),n("96eb"),Object(d["a"])(H,$,E,!1,null,"90f5631c",null)),R=A.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-bottom"},[n("div",{staticClass:"bottom-progress"},[n("span",{ref:"eleCurrentTime"},[e._v("00:00")]),n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:e.progressClick}},[n("div",{ref:"progressLine",staticClass:"progress-line"},[n("div",{staticClass:"progress-dot"})])]),n("span",{ref:"eleTotalTime"},[e._v("00:00")])]),n("div",{staticClass:"bottom-control"},[n("div",{ref:"mode",staticClass:"mode loop",on:{click:e.mode}}),n("div",{staticClass:"prev",on:{click:e.prev}}),n("div",{ref:"play",staticClass:"play",on:{click:e.play}}),n("div",{staticClass:"next",on:{click:e.next}}),n("div",{staticClass:"favorite",class:{active:e.isFavorite(e.currentSong)},on:{click:e.favorite}})])])},D=[],U=(n("7db0"),{loop:0,one:1,random:2}),B=n("0210"),q={name:"PlayerBottom",methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["setIsPlaying","setModeType","setCurrentIndex","setCurrentTime","setFavoriteSong"])),{},{play:function(){this.setIsPlaying(!this.isPlaying)},prev:function(){this.setCurrentIndex(this.currentIndex-1)},next:function(){this.setCurrentIndex(this.currentIndex+1)},mode:function(){this.modeType===U.loop?this.setModeType(U.one):this.modeType===U.one?this.setModeType(U.random):this.modeType===U.random&&this.setModeType(U.loop)},favorite:function(){this.setFavoriteSong(this.currentSong)},isFavorite:function(e){var t=this.favoriteList.find((function(t){return t.id===e.id}));return void 0!==t},progressClick:function(e){var t=this.$refs.progressBar.offsetLeft,n=e.pageX,i=n-t,r=this.$refs.progressBar.offsetWidth,s=i/r;this.$refs.progressLine.style.width=100*s+"%";var a=this.totalTime*s;this.setCurrentTime(a)}}),computed:Object(L["a"])({},Object(_["c"])(["isPlaying","modeType","currentIndex","currentSong","favoriteList"])),watch:{isPlaying:function(e){e?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},modeType:function(e){e===U.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):e===U.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):e===U.random&&(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},totalTime:function(e){var t=Object(B["a"])(e);this.$refs.eleTotalTime.innerHTML=t.minute+":"+t.second},currentTime:function(e){var t=Object(B["a"])(e);this.$refs.eleCurrentTime.innerHTML=t.minute+":"+t.second;var n=e/this.totalTime*100;this.$refs.progressLine.style.width=n+"%"}},props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}}},G=q,J=(n("fa09"),Object(d["a"])(G,V,D,!1,null,"1b8659f2",null)),W=J.exports,Y=n("589d"),X=n.n(Y),z=(n("2d7c"),{name:"NormalPlayer",components:{PlayerHeader:I,PlayerMiddle:R,PlayerBottom:W},computed:Object(L["a"])({},Object(_["c"])(["isFullScreen","currentSong"])),methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["getSongLyric"])),{},{enter:function(e,t){X()(e,"transition.shrinkIn",{duration:300},(function(){t()}))},leave:function(e,t){X()(e,"transition.shrinkOut",{duration:300},(function(){t()}))}}),watch:{currentSong:function(e){void 0!==e.id&&this.getSongLyric(e.id)}},props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}}}),K=z,Q=(n("069c"),Object(d["a"])(K,T,P,!1,null,"41eb650d",null)),Z=Q.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowMinPlayer,expression:"this.isShowMinPlayer"}],staticClass:"mini-player"},[n("div",{staticClass:"player-wrapper"},[n("div",{staticClass:"player-left",on:{click:e.showNormalPlayer}},[n("img",{ref:"cdWrapper",attrs:{src:e.currentSong.picUrl,alt:""}}),n("div",{staticClass:"player-title"},[n("h3",[e._v(e._s(e.currentSong.name))]),n("p",[e._v(e._s(e.currentSong.singer))])])]),n("div",{staticClass:"player-right"},[n("div",{ref:"play",staticClass:"play",on:{click:e.play}}),n("div",{staticClass:"list",on:{click:function(t){return t.stopPropagation(),e.showList(t)}}})])])])])},te=[],ne={name:"MiniPlayer",methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["setFullScreen","setIsPlaying","setListScreen"])),{},{showList:function(){this.setListScreen(!0)},showNormalPlayer:function(){this.setFullScreen(!0)},enter:function(e,t){X()(e,"transition.shrinkIn",{duration:300},(function(){t()}))},leave:function(e,t){X()(e,"transition.shrinkOut",{duration:300},(function(){t()}))},play:function(){this.setIsPlaying(!this.isPlaying)}}),computed:Object(L["a"])({},Object(_["c"])(["isPlaying","currentSong","isShowMinPlayer"])),watch:{isPlaying:function(e){e?(this.$refs.play.classList.add("active"),this.$refs.cdWrapper.classList.add("active")):(this.$refs.play.classList.remove("active"),this.$refs.cdWrapper.classList.remove("active"))}}},ie=ne,re=(n("b807"),Object(d["a"])(ie,ee,te,!1,null,"c17d776e",null)),se=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowListPlayer,expression:"isShowListPlayer"}],staticClass:"list-player"},[n("div",{staticClass:"player-wrapper"},[n("div",{staticClass:"player-top"},[n("div",{staticClass:"top-left"},[n("div",{ref:"mode",staticClass:"mode loop",on:{click:e.mode}}),0===this.modeType?n("p",[e._v("顺序播放")]):1===this.modeType?n("p",[e._v("单曲播放")]):2===this.modeType?n("p",[e._v("随机播放")]):e._e()]),n("div",{staticClass:"top-right"},[n("div",{staticClass:"del",on:{click:e.delAll}})])]),n("div",{staticClass:"player-middle"},[n("ScrollView",{ref:"scrollView"},[n("ul",{ref:"play"},e._l(e.songs,(function(t,i){return n("li",{key:t.id,staticClass:"item",on:{click:function(t){return e.selectMusic(i)}}},[n("div",{staticClass:"item-left"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentIndex===i,expression:"currentIndex === index"}],staticClass:"item-play",on:{click:function(t){return t.stopPropagation(),e.play(t)}}}),n("p",[e._v(e._s(t.name))])]),n("div",{staticClass:"item-right"},[n("div",{staticClass:"item-favorite",class:{active:e.isFavorite(t)},on:{click:function(n){return n.stopPropagation(),e.favorite(t)}}}),n("div",{staticClass:"item-del",on:{click:function(t){return t.stopPropagation(),e.del(i)}}})])])})),0)])],1),n("div",{staticClass:"player-bottom"},[n("p",{on:{click:function(t){return t.stopPropagation(),e.hidden(t)}}},[e._v("关闭")])])])])])},oe=[],ce={name:"ListPlayer",components:{ScrollView:N["a"]},methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["setIsPlaying","setModeType","setListScreen","setDelSong","setCurrentIndex","setFavoriteSong"])),{},{hidden:function(){this.setListScreen(!1)},enter:function(e,t){X()(e,"transition.shrinkIn",{duration:300},(function(){t()}))},leave:function(e,t){X()(e,"transition.shrinkOut",{duration:300},(function(){t()}))},play:function(){this.setIsPlaying(!this.isPlaying)},mode:function(){this.modeType===U.loop?this.setModeType(U.one):this.modeType===U.one?this.setModeType(U.random):this.modeType===U.random&&this.setModeType(U.loop)},del:function(e){this.setDelSong(e)},delAll:function(){this.setDelSong()},selectMusic:function(e){this.setCurrentIndex(e)},favorite:function(e){this.setFavoriteSong(e)},isFavorite:function(e){var t=this.favoriteList.find((function(t){return t.id===e.id}));return void 0!==t}}),computed:Object(L["a"])({},Object(_["c"])(["isPlaying","modeType","isShowListPlayer","songs","currentIndex","favoriteList"])),watch:{isPlaying:function(e){e?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},modeType:function(e){e===U.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):e===U.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):e===U.random&&(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},isShowListPlayer:function(e){e&&this.$refs.scrollView.refresh()}}},ue=ce,le=(n("9f38"),Object(d["a"])(ue,ae,oe,!1,null,"c54deb1a",null)),de=le.exports,fe={name:"Player",data:function(){return{totalTime:0,currentTime:0}},methods:Object(L["a"])(Object(L["a"])({},Object(_["b"])(["setCurrentIndex","setFavoriteList","setHistorySong","setHistoryList"])),{},{timeupdate:function(e){this.currentTime=e.target.currentTime},end:function(){if(this.modeType===U.loop)this.setCurrentIndex(this.currentIndex+1);else if(this.modeType===U.one)this.$refs.audio.play();else if(this.modeType===U.random){var e=Object(B["c"])(0,this.songs.length-1);this.setCurrentIndex(e)}}}),components:{NormalPlayer:Z,MiniPlayer:se,ListPlayer:de},computed:Object(L["a"])({},Object(_["c"])(["currentSong","isPlaying","currentIndex","curTime","modeType","songs","favoriteList","historyList"])),watch:{isPlaying:function(e,t){e?(this.setHistorySong(this.currentSong),this.$refs.audio.play()):this.$refs.audio.pause()},currentIndex:function(){var e=this;this.$refs.audio.ondurationchange=function(){e.totalTime=e.$refs.audio.duration,e.isPlaying?(e.setHistorySong(e.currentSong),e.$refs.audio.play()):e.$refs.audio.pause()}},curTime:function(e,t){this.$refs.audio.currentTime=e},favoriteList:function(e,t){window.localStorage.setItem("favoriteList",JSON.stringify(e))},historyList:function(e,t){window.localStorage.setItem("historyList",JSON.stringify(e))}},created:function(){var e=JSON.parse(window.localStorage.getItem("favoriteList"));if(null!==e){this.setFavoriteList(e);var t=JSON.parse(window.localStorage.getItem("historyList"));null!==t&&this.setHistoryList(t)}},mounted:function(){var e=this;this.$refs.audio.ondurationchange=function(){e.totalTime=e.$refs.audio.duration}}},he=fe,me=Object(d["a"])(he,S,w,!1,null,"1fb81bb6",null),pe=me.exports,ve={name:"app",components:{MainHeader:h,TabBar:b,Player:pe}},ge=ve,ye=Object(d["a"])(ge,r,s,!1,null,"77f65732",null),be=ye.exports,Se=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),we=function(e){n.e("chunk-3af651ee").then(n.bind(null,"4802")).then((function(t){e(t)}))},Le=function(e){n.e("chunk-2c53fbde").then(n.bind(null,"c84b")).then((function(t){e(t)}))},Te=function(e){n.e("chunk-7835ee76").then(n.bind(null,"789b")).then((function(t){e(t)}))},Pe=function(e){n.e("chunk-7ac05ac6").then(n.bind(null,"7f43")).then((function(t){e(t)}))},Oe=function(e){n.e("chunk-37be0faa").then(n.bind(null,"2d3b")).then((function(t){e(t)}))},Ce=function(e){n.e("chunk-52307b74").then(n.bind(null,"77be")).then((function(t){e(t)}))};i["a"].use(Se["a"]);var _e,je=[{path:"/",redirect:"/recommend"},{path:"/recommend",component:we,children:[{path:"detail/:id/:type",component:Le}]},{path:"/singer",component:Pe,children:[{path:"detail/:id/:type",component:Le}]},{path:"/rank",component:Te,children:[{path:"detail/:id/:type",component:Le}]},{path:"/search",component:Oe},{path:"/account",component:Ce}],ke=new Se["a"]({mode:"history",base:"",routes:je}),xe=ke,Ie={isFullScreen:!1,isShowMinPlayer:!0,isShowListPlayer:!1,isPlaying:!1,modeType:U.loop,songs:[],currentSong:{},currentIndex:0,currentLyric:{},curTime:0,favoriteList:[],historyList:[]},$e=n("ade3"),Ee=(n("a434"),"SET_FULL_SCREEN"),Me="SET_LIST_SCREEN",Ne="SET_IS_PLAYING",Fe="SET_MODE_TYPE",He="SET_SONG_DETAIL",Ae="SET_SONG_LYRIC",Re="SET_DEL_SONG",Ve="SET_CURRENT_INDEX",De="SET_CURRENT_TIME",Ue="SET_FAVORITE_SONG",Be="SET_FAVORITE_LIST",qe="SET_HISTORY_LIST",Ge="SET_HISTORY_SONG",Je=(_e={},Object($e["a"])(_e,Ee,(function(e,t){!0===t?(e.isFullScreen=t,e.isShowListPlayer=!t,e.isShowMinPlayer=!t):!1===t&&(e.isFullScreen=t,e.isShowListPlayer=t,e.isShowMinPlayer=!t)})),Object($e["a"])(_e,Me,(function(e,t){!0===t?(e.isFullScreen=!t,e.isShowListPlayer=t,e.isShowMinPlayer=!t):!1===t&&(e.isFullScreen=t,e.isShowListPlayer=t,e.isShowMinPlayer=!t)})),Object($e["a"])(_e,Ne,(function(e,t){e.isPlaying=t})),Object($e["a"])(_e,Fe,(function(e,t){e.modeType=t})),Object($e["a"])(_e,He,(function(e,t){e.songs=t})),Object($e["a"])(_e,Ae,(function(e,t){e.currentLyric=t})),Object($e["a"])(_e,Re,(function(e,t){void 0!==t?e.songs.splice(t,1):e.songs=[],t<e.currentIndex&&(e.currentIndex=e.currentIndex-1),0===e.songs.length&&(e.isFullScreen=!1,e.isShowMinPlayer=!1,e.isShowListPlayer=!1)})),Object($e["a"])(_e,Ve,(function(e,t){t<0?t=e.songs.length-1:t>e.songs.length-1&&(t=0),e.currentIndex=t})),Object($e["a"])(_e,De,(function(e,t){e.curTime=t})),Object($e["a"])(_e,Ue,(function(e,t){var n=e.favoriteList.find((function(e){return e.id===t.id}));void 0===n&&e.favoriteList.push(t)})),Object($e["a"])(_e,Be,(function(e,t){e.favoriteList=t})),Object($e["a"])(_e,Ge,(function(e,t){var n=e.historyList.find((function(e){return e.id===t.id}));void 0===n&&(e.historyList.length>30&&e.historyList.splice(0,1),e.historyList.push(t))})),Object($e["a"])(_e,qe,(function(e,t){e.historyList=t})),_e),We=n("1da1"),Ye=(n("96cf"),n("a15b"),n("4160"),n("159b"),n("b0c0"),n("ac1f"),n("1276"),n("466d"),n("e25e"),n("498a"),n("5319"),n("365c")),Xe={setFullScreen:function(e,t){var n=e.commit;n(Ee,t)},setListScreen:function(e,t){var n=e.commit;n(Me,t)},setIsPlaying:function(e,t){var n=e.commit;n(Ne,t)},setModeType:function(e,t){var n=e.commit;n(Fe,t)},setSongDetail:function(e,t){return Object(We["a"])(regeneratorRuntime.mark((function n(){var i,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,n.next=3,Object(Ye["k"])({ids:t.join(",")});case 3:return r=n.sent,n.next=6,Object(Ye["m"])({id:t.join(",")});case 6:s=n.sent,a=[],r.songs.forEach((function(e){for(var t={},n=0;n<s.data.length;n++){var i=s.data[n];if(e.id===i.id){t.url=i.url;break}}t.id=e.id,t.name=e.name;var r="";e["ar"].forEach((function(e,t){0===t?r=e.name:r+="-"+e.name})),t.singer=r,t.picUrl=e["al"].picUrl,a.push(t)})),i(He,a);case 10:case"end":return n.stop()}}),n)})))()},getSongLyric:function(e,t){return Object(We["a"])(regeneratorRuntime.mark((function n(){var i,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,n.next=3,Object(Ye["l"])({id:t});case 3:r=n.sent,s={},s=r.nolyric?{0:"本首歌没有歌词"}:ze(r.lrc.lyric),console.log(s),i(Ae,s);case 8:case"end":return n.stop()}}),n)})))()},setDelSong:function(e,t){var n=e.commit;n(Re,t)},setCurrentIndex:function(e,t){var n=e.commit;n(Ve,t)},setCurrentTime:function(e,t){var n=e.commit;n(De,t)},setFavoriteSong:function(e,t){var n=e.commit;n(Ue,t)},setFavoriteList:function(e,t){var n=e.commit;n(Be,t)},setHistorySong:function(e,t){var n=e.commit;n(Ge,t)},setHistoryList:function(e,t){var n=e.commit;n(qe,t)}};function ze(e){var t=e.split("\n"),n=/\[\d*:\d*\.\d*\]/g,i=/\[\d*/i,r=/\:\d*/i,s={};return t.forEach((function(e){var t=e.match(n);if(t){t=t[0];var a=t.match(i)[0].substr(1),o=t.match(r)[0].substr(1),c=60*parseInt(a)+parseInt(o),u=e.replace(n,"").trim();s[c]=u}})),s}var Ke={isFullScreen:function(e){return e.isFullScreen},isShowMinPlayer:function(e){return e.isShowMinPlayer},isShowListPlayer:function(e){return e.isShowListPlayer},isPlaying:function(e){return e.isPlaying},modeType:function(e){return e.modeType},songs:function(e){return e.songs},currentSong:function(e){var t={name:"",singer:"",picUrl:null};return 0!==e.songs.length&&(t=e.songs[e.currentIndex]),t},currentLyric:function(e){return e.currentLyric},currentIndex:function(e){return e.currentIndex},curTime:function(e){return e.curTime},favoriteList:function(e){return e.favoriteList},historyList:function(e){return e.historyList}};i["a"].use(_["a"]);var Qe=new _["a"].Store({state:Ie,mutations:Je,actions:Xe,getters:Ke}),Ze=n("fe3c"),et=n.n(Ze),tt=(n("2ea5"),n("caf9")),nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"container"},[n("div",{staticClass:"loading"}),n("p",{staticClass:"title"},[e._v(e._s(e.title))])])},it=[],rt={name:"Loading",data:function(){return{title:"正在加载...",isShow:!1}}},st=rt,at=(n("6ea5"),Object(d["a"])(st,nt,it,!1,null,"55f27277",null)),ot=at.exports,ct={install:function(e,t){var n=e.extend(ot),i=new n,r=document.createElement("div");document.body.appendChild(r),i.$mount(r),t&&null!==t.title&&void 0!==t.title&&(i.title=t.title),e.showLoading=function(){i.isShow=!0},e.hiddenLoading=function(){i.isShow=!1},e.prototype.$showLoading=function(){i.isShow=!0},e.prototype.$hiddenLoading=function(){i.isShow=!1}}},ut=n("2570"),lt=n.n(ut);i["a"].use(lt.a),i["a"].use(tt["a"],{loading:n("cfcf")}),i["a"].use(ct,{title:"加载中"}),et.a.attach(document.body),i["a"].config.productionTip=!1,new i["a"]({router:xe,store:Qe,render:function(e){return e(be)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"57db":function(e,t,n){},"62b1":function(e,t,n){},"69a4":function(e,t,n){"use strict";n("2656")},"6ea5":function(e,t,n){"use strict";n("d30e")},7349:function(e,t,n){"use strict";n("2f7f")},7869:function(e,t,n){"use strict";n("c654")},"88d4":function(e,t,n){},"897d":function(e,t,n){},"8a97":function(e,t,n){"use strict";n("3dc7")},"96eb":function(e,t,n){"use strict";n("ecf7")},"9b91":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrapper",attrs:{id:"wrapper"}},[e._t("default")],2)},r=[],s=(n("4795"),n("54af")),a=n.n(s),o={name:"ScrollView",mounted:function(){var e=this;this.iscroll=new a.a(this.$refs.wrapper,{onmousewheel:!0,scrollbars:!1,probeType:3,scrollX:!1,scrollY:!0,disablePointer:!0,disableTouch:!1,disableMouse:!0});var t=new MutationObserver((function(t,n){e.iscroll.refresh()})),n={childList:!0,subtree:!0,attributeFilter:["height","offsetHeight"]};t.observe(this.$refs.wrapper,n)},methods:{scrolling:function(e){this.iscroll.on("scroll",(function(){e(this.y)}))},refresh:function(){var e=this;setTimeout((function(){e.iscroll.refresh()}),150)},scrollTo:function(e,t,n){this.iscroll.scrollTo(e,t,n)}}},c=o,u=(n("7349"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,"52173942",null);t["a"]=l.exports},"9f38":function(e,t,n){"use strict";n("62b1")},b807:function(e,t,n){"use strict";n("0f66")},bff4:function(e,t,n){"use strict";n("897d")},c3b6:function(e,t,n){"use strict";n("57db")},c654:function(e,t,n){},cfcf:function(e,t,n){e.exports=n.p+"img/loading.76a9c0c2.png"},d30e:function(e,t,n){},e2f8:function(e,t,n){},ecf7:function(e,t,n){},fa09:function(e,t,n){"use strict";n("88d4")}});
//# sourceMappingURL=app.513a59c3.js.map
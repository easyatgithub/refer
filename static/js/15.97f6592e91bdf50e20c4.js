webpackJsonp([15],{"Aj5/":function(t,i,a){var c=a("NazD");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a("rjj0")("4e64adc3",c,!0,{})},BY9H:function(t,i,a){"use strict";var c=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"official-account",class:{"search-open-contact":!t.$store.state.headerStatus}},[a("header",{attrs:{id:"wx-header"}},[a("div",{staticClass:"center"},[a("router-link",{staticClass:"iconfont icon-return-arrow",attrs:{to:"/contact",tag:"div"}},[a("span",[t._v("通讯录")])]),t._v(" "),a("span",[t._v("公众号")])],1)]),t._v(" "),a("search"),t._v(" "),t._l(t.OfficialAccountsList,function(i,c){return[a("div",{staticClass:"weui-cells__title"},[t._v(t._s(c))]),t._v(" "),a("div",{staticClass:"weui-cells"},t._l(i,function(i){return a("div",{staticClass:"weui-cell weui-cell_access"},[a("div",{staticClass:"weui-cell__hd"},[a("img",{staticClass:"home__mini-avatar___1nSrW",attrs:{src:i.headerUrl}})]),t._v(" "),a("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(i.name)+"\n                    ")])])}),0)]})],2)},s=[],e={render:c,staticRenderFns:s};i.a=e},NazD:function(t,i,a){i=t.exports=a("FZ+f")(!0),i.push([t.i,".official-account{padding-bottom:20px}.official-account .weui-cell_access:active{background-color:hsla(0,0%,69%,.53)}","",{version:3,sources:["G:/2019/vue-WeChat/src/components/contact/official-accounts.vue"],names:[],mappings:"AACA,kBACI,mBAAqB,CACxB,AACD,2CACI,mCAA2C,CAC9C",file:"official-accounts.vue",sourcesContent:["\n.official-account {\n    padding-bottom: 20px;\n}\n.official-account .weui-cell_access:active {\n    background-color: rgba(177, 177, 177, 0.53)\n}\n"],sourceRoot:""}])},WF0d:function(t,i,a){"use strict";function c(t){a("Aj5/")}Object.defineProperty(i,"__esModule",{value:!0});var s=a("tR0N"),e=a("BY9H"),n=a("VU/8"),o=c,r=n(s.a,e.a,!1,o,null,null);i.default=r.exports},tR0N:function(t,i,a){"use strict";var c=a("A2Dw");i.a={components:{search:c.a},data:function(){return{pageName:""}},computed:{initialList:function(){for(var t=[],i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<a;c++)-1==t.indexOf(i[c].initial)&&t.push(i[c].initial);return t.sort()},OfficialAccountsList:function(){for(var t={},i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<this.initialList.length;c++){var s=this.initialList[c];t[s]=[];for(var e=0;e<a;e++)i[e].initial===s&&t[s].push(i[e])}return t}}}}});
//# sourceMappingURL=15.97f6592e91bdf50e20c4.js.map
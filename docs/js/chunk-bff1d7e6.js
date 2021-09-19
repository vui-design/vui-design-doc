(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bff1d7e6"],{"0f1e":function(t,o,e){"use strict";e("6702")},"240e":function(t,o,e){"use strict";var l={},r=(e("c6b1"),e("2877")),a=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"document"},[this._t("default")],2)}),[],!1,null,null,null);o.a=a.exports},3405:function(t,o,e){},"360c":function(t,o,e){"use strict";e.r(o);var l=e("d58b"),r=e("240e"),a={props:{title:{type:String,default:void 0},value:{type:String,default:void 0},light:{type:String,default:void 0},dark:{type:String,default:void 0},showFooter:{type:Boolean,default:!0},fontColor:{type:String,default:"#ffffff"}}},s=(e("0f1e"),e("2877")),c=Object(s.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"color",class:"transparent"===t.value?"color-transparent":"",style:"background-color: "+t.value+";"},[e("div",{staticClass:"color-body"},[e("h4",{style:"color:"+t.fontColor+";"},[t._v(t._s(t.title))]),e("p",{style:"color:"+t.fontColor+";"},[t._v(t._s(t.value))])]),t.showFooter?e("div",{staticClass:"color-footer"},[e("div",{style:"background-color: "+t.light+"; color:"+t.fontColor+";"},[t._v("Light")]),e("div",{style:"background-color: "+t.dark+"; color:"+t.fontColor+";"},[t._v("Dark")])]):t._e()])}),[],!1,null,null,null).exports,n={components:{Color:c}},i=Object(s.a)(n,(function(){var t=this.$createElement,o=this._self._c||t;return o("vui-row",{attrs:{gutter:16}},[o("vui-col",{attrs:{span:6}},[o("color",{attrs:{value:"#2d8cf0",light:"#4298f2",dark:"#297ed8",title:"Primary"}})],1)],1)}),[],!1,null,null,null).exports,u={components:{Color:c}},f=Object(s.a)(u,(function(){var t=this.$createElement,o=this._self._c||t;return o("vui-row",{attrs:{gutter:16}},[o("vui-col",{attrs:{span:6}},[o("color",{attrs:{value:"#5bc0de",light:"#6bc6e1",dark:"#52adc8",title:"Info"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{value:"#faad14",light:"#fbb52b",dark:"#e19c12",title:"Warning"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{value:"#52c41a",light:"#63ca31",dark:"#4ab017",title:"Success"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{value:"#ff4d4f",light:"#ff5f61",dark:"#e64547",title:"Error"}})],1)],1)}),[],!1,null,null,null).exports,v={components:{Color:c}},d=Object(s.a)(v,(function(){var t=this.$createElement,o=this._self._c||t;return o("vui-row",{attrs:{gutter:16}},[o("vui-col",{attrs:{span:6}},[o("color",{attrs:{showFooter:!1,value:"#000000",title:"基础黑色"}}),o("color",{attrs:{showFooter:!1,value:"#ffffff",fontColor:"#666666",title:"基础白色"}}),o("color",{attrs:{showFooter:!1,value:"transparent",fontColor:"#666666",title:"透明"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{showFooter:!1,value:"#262626",title:"主要文字（标题）"}}),o("color",{attrs:{showFooter:!1,value:"#595959",title:"常规文字（正文）"}}),o("color",{attrs:{showFooter:!1,value:"#8c8c8c",title:"次要文字（辅助）"}}),o("color",{attrs:{showFooter:!1,value:"#bfbfbf",title:"占位文字（失效）"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{showFooter:!1,value:"#e0e0e0",fontColor:"#666666",title:"一级边框"}}),o("color",{attrs:{showFooter:!1,value:"#e6e6e6",fontColor:"#666666",title:"二级边框"}}),o("color",{attrs:{showFooter:!1,value:"#ececec",fontColor:"#666666",title:"三级边框"}}),o("color",{attrs:{showFooter:!1,value:"#f3f3f3",fontColor:"#666666",title:"四级边框"}})],1),o("vui-col",{attrs:{span:6}},[o("color",{attrs:{showFooter:!1,value:"#ececec",fontColor:"#666666",title:"分割线"}}),o("color",{attrs:{showFooter:!1,value:"#f9f9f9",fontColor:"#666666",title:"背景色"}})],1)],1)}),[],!1,null,null,null).exports,p={mixins:[l.a],components:{Document:r.a,ExamplePrimary:i,ExampleAuxiliary:f,ExampleNeutral:d}},h=Object(s.a)(p,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("document",[e("h1",[t._v("Color 色彩")]),e("p",[t._v("为了避免视觉传达差异，Vui Design 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。")]),e("h2",{attrs:{id:"example-color-primary"}},[t._v("主色彩")]),e("p",[t._v("Vui Design 使用较为安全的蓝色作为主色调，其中 "),e("code",[t._v("Light")]),t._v(" 常用于 "),e("code",[t._v("hover")]),t._v(" 状态色，"),e("code",[t._v("Dark")]),t._v(" 常用于 "),e("code",[t._v("active")]),t._v(" 状态色。")])]),e("example-primary"),e("document",[e("h2",{attrs:{id:"example-color-auxiliary"}},[t._v("辅助色")]),e("p",[t._v("辅助色是具有代表性的颜色，常用于类型提示，比如信息、警告、成功和失败。")])]),e("example-auxiliary"),e("document",[e("h2",{attrs:{id:"example-color-neutral"}},[t._v("中性色")]),e("p",[t._v("中性色常用于文本、边框、背景或阴影等，合理运用中性色可以很好的体现出页面的层次结构。")])]),e("example-neutral")],1)}),[],!1,null,null,null);o.default=h.exports},6702:function(t,o,e){},c6b1:function(t,o,e){"use strict";e("3405")},d58b:function(t,o,e){"use strict";var l=e("5530"),r=e("2f62");o.a={methods:Object(l.a)({},Object(r.b)(["setAnchors"])),mounted:function(){this.setAnchors(this.$el)}}}}]);
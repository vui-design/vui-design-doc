(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cf161848"],{"0fd1":function(e,t,s){"use strict";s("e053")},4110:function(e,t,s){"use strict";s("a9e3");var a={props:{height:{type:[String,Number],default:void 0}},computed:{style:function(){var e={};return this.height&&(e.height="".concat(this.height,"px")),e}}},n=(s("b937"),s("2877")),r=Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"browser"},[this._m(0),t("div",{staticClass:"browser-body",style:this.style},[this._t("default")],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"browser-header"},[t("div",{staticClass:"location"},[t("div",{staticClass:"location-href"})]),t("i",{staticClass:"btn btn-max"}),t("i",{staticClass:"btn btn-min"}),t("i",{staticClass:"btn btn-close"})])}],!1,null,null,null);t.a=r.exports},"43d1":function(e,t,s){"use strict";s("fb68")},"503a":function(e,t,s){},"69eb":function(e,t,s){"use strict";s("f285")},a946:function(e,t,s){"use strict";s("b3b6")},ac6b:function(e,t,s){"use strict";s("503a")},b3b6:function(e,t,s){},b937:function(e,t,s){"use strict";s("f929")},e053:function(e,t,s){},edb2:function(e,t,s){"use strict";s.r(t);var a=s("d58b"),n=s("240e"),r=s("1a42"),i={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-alert title="Information" />\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o=s("2877"),l=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-basic-usage"}},[t("template",{slot:"demo"},[t("vui-alert",{attrs:{message:"Infomation"}})],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("基本用法，适用于简短的警告提示。")])])],2)}),[],!1,null,null,null).exports,c={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-alert-type">\n    <vui-alert message="Information" />\n    <vui-alert type="warning" message="Warning" />\n    <vui-alert type="success" message="Success" />\n    <vui-alert type="error" message="Error" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-type .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},p=(s("43d1"),Object(o.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-alert-type"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-alert-type"},[s("vui-alert",{attrs:{message:"Information"}}),s("vui-alert",{attrs:{type:"warning",message:"Warning"}}),s("vui-alert",{attrs:{type:"success",message:"Success"}}),s("vui-alert",{attrs:{type:"error",message:"Error"}})],1)]),s("template",{slot:"title"},[e._v("四种类型")]),s("template",{slot:"description"},[s("p",[e._v("共有 "),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v(" 四种类型可以选择，默认为 "),s("code",[e._v("info")]),e._v(" 类型。")])])],2)}),[],!1,null,null,null).exports),u={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-alert-description">\n    <vui-alert message="Information">\n      <p slot="description">Additional description and information about copywriting.</p>\n    </vui-alert>\n    <vui-alert type="warning" message="Warning" description="Detailed description and advice about successful copywriting." />\n    <vui-alert type="success" message="Success" description="This is a warning notice about copywriting." />\n    <vui-alert type="error" message="Error" description="This is an error message about copywriting." />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-description .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},d=(s("ac6b"),Object(o.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-description"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-alert-description"},[t("vui-alert",{attrs:{message:"Information"}},[t("p",{attrs:{slot:"description"},slot:"description"},[this._v("Additional description and information about copywriting.")])]),t("vui-alert",{attrs:{type:"warning",message:"Warning",description:"Detailed description and advice about successful copywriting."}}),t("vui-alert",{attrs:{type:"success",message:"Success",description:"This is a warning notice about copywriting."}}),t("vui-alert",{attrs:{type:"error",message:"Error",description:"This is an error message about copywriting."}})],1)]),t("template",{slot:"title"},[this._v("描述信息")]),t("template",{slot:"description"},[t("p",[this._v("含有描述信息的警告提示。")])])],2)}),[],!1,null,null,null).exports),v={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-alert-closable">\n    <vui-alert type="warning" message="Warning" closable />\n    <vui-alert type="error" message="Error" description="This is an error message about copywriting." closable />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},m=(s("a946"),Object(o.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-closable"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-alert-closable"},[t("vui-alert",{attrs:{type:"warning",message:"Warning",closable:""}}),t("vui-alert",{attrs:{type:"error",message:"Error",description:"This is an error message about copywriting.",closable:""}})],1)]),t("template",{slot:"title"},[this._v("可关闭的警告提示")]),t("template",{slot:"description"},[t("p",[this._v("显示关闭按钮，点击可关闭警告提示。")])])],2)}),[],!1,null,null,null).exports),g={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-alert type="success" message="Success" closable closeText="Close" />\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},_=Object(o.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-close-text"}},[t("template",{slot:"demo"},[t("vui-alert",{attrs:{type:"success",message:"Success",closable:"",closeText:"Close"}})],1),t("template",{slot:"title"},[this._v("自定义关闭按钮")]),t("template",{slot:"description"},[t("p",[this._v("允许自定义关闭按钮，自定义的文本会替换默认的关闭图标。")])])],2)}),[],!1,null,null,null).exports,h={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-alert-icon">\n    <vui-alert showIcon message="Infomation" />\n    <vui-alert type="warning" showIcon message="Warning" />\n    <vui-alert type="success" showIcon message="Success" />\n    <vui-alert type="error" showIcon message="Error" />\n    <vui-alert showIcon message="Information">\n      <p slot="description">Additional description and information about copywriting.</p>\n    </vui-alert>\n    <vui-alert type="warning" showIcon message="Warning" description="Detailed description and advice about successful copywriting." />\n    <vui-alert type="success" showIcon message="Success" description="This is a warning notice about copywriting." />\n    <vui-alert type="error" showIcon message="Error" description="This is an error message about copywriting." />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-icon .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},b=(s("0fd1"),Object(o.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-icon"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-alert-icon"},[t("vui-alert",{attrs:{showIcon:"",message:"Infomation"}}),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning"}}),t("vui-alert",{attrs:{type:"success",showIcon:"",message:"Success"}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"Error"}}),t("vui-alert",{attrs:{showIcon:"",message:"Information"}},[t("p",{attrs:{slot:"description"},slot:"description"},[this._v("Additional description and information about copywriting.")])]),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning",description:"Detailed description and advice about successful copywriting."}}),t("vui-alert",{attrs:{type:"success",showIcon:"",message:"Success",description:"This is a warning notice about copywriting."}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"Error",description:"This is an error message about copywriting."}})],1)]),t("template",{slot:"title"},[this._v("图标")]),t("template",{slot:"description"},[t("p",[this._v("可口的图标让信息类型更加醒目。")])])],2)}),[],!1,null,null,null).exports),w=s("4110"),f={components:{Example:r.a,Browser:w.a},data:function(){return{code:'<template>\n  <div class="example-alert-banner">\n    <vui-alert type="warning" showIcon message="Warning" banner />\n    <vui-alert type="warning" showIcon message="Detailed description and advice about warning copywriting." banner closable />\n    <vui-alert type="success" message="Success without icon" banner />\n    <vui-alert type="error" showIcon message="This is an error message about copywriting." banner />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},y=(s("69eb"),Object(o.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-alert-banner"}},[t("template",{slot:"demo"},[t("browser",[t("div",{staticClass:"example-alert-banner"},[t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning",banner:""}}),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Detailed description and advice about warning copywriting.",banner:"",closable:""}}),t("vui-alert",{attrs:{type:"success",message:"Success without icon",banner:""}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"This is an error message about copywriting.",banner:""}})],1)])],1),t("template",{slot:"title"},[this._v("顶部公告")]),t("template",{slot:"description"},[t("p",[this._v("设置 "),t("code",[this._v("banner")]),this._v(" 属性可以应用顶部公告样式。")])])],2)}),[],!1,null,null,null).exports),x={mixins:[a.a],components:{Document:n.a,ExampleAlertBasicUsage:l,ExampleAlertType:p,ExampleAlertDescription:d,ExampleAlertClosable:m,ExampleAlertCloseText:_,ExampleAlertIcon:b,ExampleAlertBanner:y}},E=Object(o.a)(x,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("document",[s("h1",[e._v("Alert 警告提示")]),s("p",[e._v("警告提示，展现需要关注的信息。")]),s("h2",[e._v("何时使用")]),s("ul",[s("li",[e._v("当某个页面需要向用户显示警告的信息时；")]),s("li",[e._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])]),s("h2",[e._v("代码演示")])]),s("vui-row",{attrs:{gutter:16}},[s("vui-col",{attrs:{span:12}},[s("ExampleAlertBasicUsage"),s("ExampleAlertType"),s("ExampleAlertDescription"),s("ExampleAlertClosable")],1),s("vui-col",{attrs:{span:12}},[s("ExampleAlertCloseText"),s("ExampleAlertIcon"),s("ExampleAlertBanner")],1)],1),s("document",[s("h2",{attrs:{id:"example-api"}},[e._v("API")]),s("h3",[e._v("Alert 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"140"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("警告提示类型，可选值为 "),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("info")])])]),s("tr",[s("td",[e._v("banner")]),s("td",[e._v("是否应用顶部公告样式")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("showIcon")]),s("td",[e._v("是否显示图标")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("icon")]),s("td",[e._v("自定义图标类型/图标，默认根据 "),s("code",[e._v("type")]),e._v(" 属性自动设置，仅在 "),s("code",[e._v("showIcon")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("String | Slot")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("closable")]),s("td",[e._v("是否可以关闭")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("closeText")]),s("td",[e._v("自定义关闭按钮文本，仅在 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("String | Slot")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("message")]),s("td",[e._v("警告提示内容")]),s("td",[e._v("String | Slot")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("description")]),s("td",[e._v("警告提示的辅助性描述信息")]),s("td",[e._v("String | Slot")]),s("td",[e._v("--")])])])]),s("h3",[e._v("Alert 事件")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("事件名")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"140"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("回调参数")])])]),s("tbody",[s("tr",[s("td",[e._v("close")]),s("td",[e._v("关闭警告提示时的事件回调函数，仅在 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("Function")]),s("td",[s("code",[e._v("event")])])])])])])],1)}),[],!1,null,null,null);t.default=E.exports},f285:function(e,t,s){},f929:function(e,t,s){},fb68:function(e,t,s){}}]);
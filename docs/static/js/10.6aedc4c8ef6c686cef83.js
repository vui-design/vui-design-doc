webpackJsonp([10],{"+Oxg":function(e,t){},"0IYq":function(e,t){},IrQ4:function(e,t){},OP41:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("xe5J"),r=s("Fy5V"),n=s("RLuK"),i={components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-alert title="Information" />\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-basic-usage"}},[t("template",{slot:"source"},[t("vui-alert",{attrs:{message:"Infomation"}})],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"describe"},[t("p",[this._v("基本用法，适用于简短的警告提示。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},l=s("VU/8")(i,o,!1,null,null,null).exports,c={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-alert-type">\n    <vui-alert message="Information" />\n    <vui-alert type="warning" message="Warning" />\n    <vui-alert type="success" message="Success" />\n    <vui-alert type="error" message="Error" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-type .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Example",{attrs:{id:"example-alert-type"}},[s("template",{slot:"source"},[s("div",{staticClass:"example-alert-type"},[s("vui-alert",{attrs:{message:"Information"}}),s("vui-alert",{attrs:{type:"warning",message:"Warning"}}),s("vui-alert",{attrs:{type:"success",message:"Success"}}),s("vui-alert",{attrs:{type:"error",message:"Error"}})],1)]),s("template",{slot:"title"},[e._v("四种类型")]),s("template",{slot:"describe"},[s("p",[e._v("共有 "),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v(" 四种类型可以选择，默认为 "),s("code",[e._v("info")]),e._v(" 类型。")])]),s("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var d=s("VU/8")(c,p,!1,function(e){s("myHj")},null,null).exports,v={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-alert-description">\n    <vui-alert message="Information">\n      <p slot="description">Additional description and information about copywriting.</p>\n    </vui-alert>\n    <vui-alert type="warning" message="Warning" description="Detailed description and advice about successful copywriting." />\n    <vui-alert type="success" message="Success" description="This is a warning notice about copywriting." />\n    <vui-alert type="error" message="Error" description="This is an error message about copywriting." />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-description .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-description"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-alert-description"},[t("vui-alert",{attrs:{message:"Information"}},[t("p",{attrs:{slot:"description"},slot:"description"},[this._v("Additional description and information about copywriting.")])]),t("vui-alert",{attrs:{type:"warning",message:"Warning",description:"Detailed description and advice about successful copywriting."}}),t("vui-alert",{attrs:{type:"success",message:"Success",description:"This is a warning notice about copywriting."}}),t("vui-alert",{attrs:{type:"error",message:"Error",description:"This is an error message about copywriting."}})],1)]),t("template",{slot:"title"},[this._v("描述信息")]),t("template",{slot:"describe"},[t("p",[this._v("含有描述信息的警告提示。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var m=s("VU/8")(v,u,!1,function(e){s("gZtu")},null,null).exports,_={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-alert-closable">\n    <vui-alert type="warning" message="Warning" closable />\n    <vui-alert type="error" message="Error" description="This is an error message about copywriting." closable />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-closable"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-alert-closable"},[t("vui-alert",{attrs:{type:"warning",message:"Warning",closable:""}}),t("vui-alert",{attrs:{type:"error",message:"Error",description:"This is an error message about copywriting.",closable:""}})],1)]),t("template",{slot:"title"},[this._v("可关闭的警告提示")]),t("template",{slot:"describe"},[t("p",[this._v("显示关闭按钮，点击可关闭警告提示。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var h=s("VU/8")(_,g,!1,function(e){s("0IYq")},null,null).exports,w={components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-alert type="success" message="Success" closable closeText="Close" />\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-close-text"}},[t("template",{slot:"source"},[t("vui-alert",{attrs:{type:"success",message:"Success",closable:"",closeText:"Close"}})],1),t("template",{slot:"title"},[this._v("自定义关闭按钮")]),t("template",{slot:"describe"},[t("p",[this._v("允许自定义关闭按钮，自定义的文本会替换默认的关闭图标。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},y=s("VU/8")(w,x,!1,null,null,null).exports,b={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-alert-icon">\n    <vui-alert showIcon message="Infomation" />\n    <vui-alert type="warning" showIcon message="Warning" />\n    <vui-alert type="success" showIcon message="Success" />\n    <vui-alert type="error" showIcon message="Error" />\n    <vui-alert showIcon message="Information">\n      <p slot="description">Additional description and information about copywriting.</p>\n    </vui-alert>\n    <vui-alert type="warning" showIcon message="Warning" description="Detailed description and advice about successful copywriting." />\n    <vui-alert type="success" showIcon message="Success" description="This is a warning notice about copywriting." />\n    <vui-alert type="error" showIcon message="Error" description="This is an error message about copywriting." />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-icon .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-icon"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-alert-icon"},[t("vui-alert",{attrs:{showIcon:"",message:"Infomation"}}),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning"}}),t("vui-alert",{attrs:{type:"success",showIcon:"",message:"Success"}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"Error"}}),t("vui-alert",{attrs:{showIcon:"",message:"Information"}},[t("p",{attrs:{slot:"description"},slot:"description"},[this._v("Additional description and information about copywriting.")])]),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning",description:"Detailed description and advice about successful copywriting."}}),t("vui-alert",{attrs:{type:"success",showIcon:"",message:"Success",description:"This is a warning notice about copywriting."}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"Error",description:"This is an error message about copywriting."}})],1)]),t("template",{slot:"title"},[this._v("图标")]),t("template",{slot:"describe"},[t("p",[this._v("可口的图标让信息类型更加醒目。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var E=s("VU/8")(b,f,!1,function(e){s("+Oxg")},null,null).exports,I=s("cZSK"),A={components:{Example:n.a,Browser:I.a},data:function(){return{code:'<template>\n  <div class="example-alert-banner">\n    <vui-alert type="warning" showIcon message="Warning" banner />\n    <vui-alert type="warning" showIcon message="Detailed description and advice about warning copywriting." banner closable />\n    <vui-alert type="success" message="Success without icon" banner />\n    <vui-alert type="error" showIcon message="This is an error message about copywriting." banner />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }\n</style>\n'}}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{id:"example-alert-banner"}},[t("template",{slot:"source"},[t("Browser",[t("div",{staticClass:"example-alert-banner"},[t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Warning",banner:""}}),t("vui-alert",{attrs:{type:"warning",showIcon:"",message:"Detailed description and advice about warning copywriting.",banner:"",closable:""}}),t("vui-alert",{attrs:{type:"success",message:"Success without icon",banner:""}}),t("vui-alert",{attrs:{type:"error",showIcon:"",message:"This is an error message about copywriting.",banner:""}})],1)])],1),t("template",{slot:"title"},[this._v("顶部公告")]),t("template",{slot:"describe"},[t("p",[this._v("设置 "),t("code",[this._v("banner")]),this._v(" 属性可以应用顶部公告样式。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var S=s("VU/8")(A,T,!1,function(e){s("IrQ4")},null,null).exports,C={mixins:[a.a],components:{Markdown:r.a,ExampleAlertBasicUsage:l,ExampleAlertType:d,ExampleAlertDescription:m,ExampleAlertClosable:h,ExampleAlertCloseText:y,ExampleAlertIcon:E,ExampleAlertBanner:S}},W={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Markdown",[s("h1",[e._v("Alert 警告提示")]),s("p",[e._v("警告提示，展现需要关注的信息。")]),s("h2",[e._v("何时使用")]),s("ul",[s("li",[e._v("当某个页面需要向用户显示警告的信息时；")]),s("li",[e._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])]),s("h2",[e._v("代码演示")])]),s("vui-row",{attrs:{gutter:20}},[s("vui-col",{attrs:{span:12}},[s("ExampleAlertBasicUsage"),s("ExampleAlertType"),s("ExampleAlertDescription"),s("ExampleAlertClosable")],1),s("vui-col",{attrs:{span:12}},[s("ExampleAlertCloseText"),s("ExampleAlertIcon"),s("ExampleAlertBanner")],1)],1),s("Markdown",[s("h2",{attrs:{id:"example-api"}},[e._v("API")]),s("h3",[e._v("Alert 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"150"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("警告提示类型，可选值为 "),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("info")])])]),s("tr",[s("td",[e._v("icon")]),s("td",[e._v("自定义图标类型，仅在 "),s("code",[e._v("showIcon")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("message")]),s("td",[e._v("警告提示内容")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("description")]),s("td",[e._v("警告提示的辅助性描述信息")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("banner")]),s("td",[e._v("是否应用顶部公告样式")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("showIcon")]),s("td",[e._v("是否显示图标")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("closable")]),s("td",[e._v("是否可以关闭")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("closeText")]),s("td",[e._v("关闭按钮文本，仅在 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("String")]),s("td",[e._v("--")])])])]),s("h3",[e._v("Alert 插槽")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("名称")]),s("th",[e._v("说明")])])]),s("tbody",[s("tr",[s("td",[e._v("icon")]),s("td",[e._v("自定义图标，仅在 "),s("code",[e._v("showIcon")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")])]),s("tr",[s("td",[e._v("default")]),s("td",[e._v("警告提示内容")])]),s("tr",[s("td",[e._v("description")]),s("td",[e._v("警告提示的辅助性描述信息")])])])]),s("h3",[e._v("Alert 事件")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("事件名")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"150"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("回调参数")])])]),s("tbody",[s("tr",[s("td",[e._v("close")]),s("td",[e._v("关闭警告提示时的事件回调，仅在 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("Function")]),s("td",[s("code",[e._v("event")])])])])])])],1)},staticRenderFns:[]},F=s("VU/8")(C,W,!1,null,null,null);t.default=F.exports},gZtu:function(e,t){},myHj:function(e,t){}});
//# sourceMappingURL=10.6aedc4c8ef6c686cef83.js.map
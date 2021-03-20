webpackJsonp([38],{"7lUj":function(e,i){},lZsw:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("q77b"),l=t("Fy5V"),m=t("RLuK"),o={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-basic-usage">\n    <vui-timeline>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},r={render:function(){var e=this.$createElement,i=this._self._c||e;return i("vui-doc-example",{attrs:{code:this.code,id:"example-timeline-basic-usage"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-timeline-basic-usage"},[i("vui-timeline",[i("vui-timeline-item",[this._v("Create a services site 2018-01-01")]),i("vui-timeline-item",[this._v("Solve initial network problems 2018-01-01")]),i("vui-timeline-item",[this._v("Technical testing 2018-01-01")]),i("vui-timeline-item",[this._v("Network problems being solved 2018-01-01")])],1)],1)]),i("template",{slot:"title"},[this._v("基本用法")]),i("template",{slot:"description"},[i("p",[this._v("最简单定义一个时间轴的用法。")])])],2)},staticRenderFns:[]},s=t("VU/8")(o,r,!1,null,null,null).exports,v={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-color">\n    <vui-timeline>\n      <vui-timeline-item color="red">Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="yellow">Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="#722ed1">Purple</vui-timeline-item>\n      <vui-timeline-item color="gray">Recording...</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},a={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("vui-doc-example",{attrs:{code:e.code,id:"example-timeline-color"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-timeline-color"},[t("vui-timeline",[t("vui-timeline-item",{attrs:{color:"red"}},[e._v("Create a services site 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"green"}},[e._v("Solve initial network problems 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"yellow"}},[e._v("Technical testing 2018-01-01")]),t("vui-timeline-item",[e._v("Network problems being solved 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"#722ed1"}},[e._v("Purple")]),t("vui-timeline-item",{attrs:{color:"gray"}},[e._v("Recording...")])],1)],1)]),t("template",{slot:"title"},[e._v("轴点颜色")]),t("template",{slot:"description"},[t("p",[e._v("轴点颜色，灰色表示未完成或失效状态，蓝色表示正在进行或其他默认状态，黄色表示警告状态，绿色用于已完成、成功状态，红色则表示错误或失败状态。")]),t("p",[e._v("如果预设值不能满足你的需求，可以设置为具体的颜色值。")])])],2)},staticRenderFns:[]},c=t("VU/8")(v,a,!1,null,null,null).exports,d={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-color">\n    <vui-timeline pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Recording...</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},u={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("vui-doc-example",{attrs:{code:e.code,id:"example-timeline-pending"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-timeline-pending"},[t("vui-timeline",{attrs:{pending:""}},[t("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),t("vui-timeline-item",[e._v("Solve initial network problems 2018-01-01")]),t("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),t("vui-timeline-item",[e._v("Network problems being solved 2018-01-01")]),t("vui-timeline-item",[e._v("Recording...")])],1)],1)]),t("template",{slot:"title"},[e._v("幽灵节点")]),t("template",{slot:"description"},[t("p",[e._v("通过 "),t("code",[e._v("pending")]),e._v(" 属性来标记最后一个为幽灵节点，表示还未完成。")])])],2)},staticRenderFns:[]},p=t("VU/8")(d,u,!1,null,null,null).exports,_={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-custom">\n    <vui-timeline pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        Solve initial network problems 2018-01-01\n      </vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        Recording...\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},g={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("vui-doc-example",{attrs:{code:e.code,id:"example-timeline-custom"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-timeline-custom"},[t("vui-timeline",{attrs:{pending:""}},[t("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"red"}},[t("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tSolve initial network problems 2018-01-01\n\t\t\t\t")],1),t("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"green"}},[e._v("Network problems being solved 2018-01-01")]),t("vui-timeline-item",[t("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tRecording...\n\t\t\t\t")],1)],1)],1)]),t("template",{slot:"title"},[e._v("自定义时间轴点")]),t("template",{slot:"description"},[t("p",[e._v("接受一个 "),t("code",[e._v("slot")]),e._v(" 来自定义时间轴点，比如一个图标。")])])],2)},staticRenderFns:[]},h=t("VU/8")(_,g,!1,null,null,null).exports,x={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-alternate">\n    <vui-timeline mode="alternate" pending>\n      <vui-timeline-item>\n        <h4>2018-01-01</h4>\n        <p>Create a services site</p>\n      </vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        <h4>2018-01-01</h4>\n        <p>Solve initial network problems</p>\n      </vui-timeline-item>\n      <vui-timeline-item>\n        <h4>2018-01-01</h4>\n        <p>Technical testing</p>\n      </vui-timeline-item>\n      <vui-timeline-item color="green">\n        <h4>2018-01-01</h4>\n        <p>Network problems being solved</p>\n      </vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        <p>Recording...</p>\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-timeline-alternate {  }\n  .example-timeline-alternate h4 { margin-bottom:5px; color:#808080; }\n  .example-timeline-alternate p { color:#595959; }\n</style>\n'}}},b={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("vui-doc-example",{attrs:{code:e.code,id:"example-timeline-alternate"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-timeline-alternate"},[t("vui-timeline",{attrs:{mode:"alternate",pending:""}},[t("vui-timeline-item",[t("h4",[e._v("2018-01-01")]),t("p",[e._v("Create a services site")])]),t("vui-timeline-item",{attrs:{color:"red"}},[t("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),t("h4",[e._v("2018-01-01")]),t("p",[e._v("Solve initial network problems")])],1),t("vui-timeline-item",[t("h4",[e._v("2018-01-01")]),t("p",[e._v("Technical testing")])]),t("vui-timeline-item",{attrs:{color:"green"}},[t("h4",[e._v("2018-01-01")]),t("p",[e._v("Network problems being solved")])]),t("vui-timeline-item",[t("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),t("p",[e._v("Recording...")])],1)],1)],1)]),t("template",{slot:"title"},[e._v("交替显示")]),t("template",{slot:"description"},[t("p",[e._v("内容在时间轴两侧轮流出现。")])])],2)},staticRenderFns:[]};var w=t("VU/8")(x,b,!1,function(e){t("7lUj")},null,null).exports,f={components:{VuiDocExample:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-right">\n    <vui-timeline mode="right" pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        Solve initial network problems 2018-01-01\n      </vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        Recording...\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},k={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("vui-doc-example",{attrs:{code:e.code,id:"example-timeline-right"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-timeline-right"},[t("vui-timeline",{attrs:{mode:"right",pending:""}},[t("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"red"}},[t("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tSolve initial network problems 2018-01-01\n\t\t\t\t")],1),t("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),t("vui-timeline-item",{attrs:{color:"green"}},[e._v("Network problems being solved 2018-01-01")]),t("vui-timeline-item",[t("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tRecording...\n\t\t\t\t")],1)],1)],1)]),t("template",{slot:"title"},[e._v("右侧时间轴点")]),t("template",{slot:"description"},[t("p",[e._v("时间轴点可以在内容的右边。")])])],2)},staticRenderFns:[]},T=t("VU/8")(f,k,!1,null,null,null).exports,y={mixins:[n.a],components:{VuiDocMarkdown:l.a,ExampleTimelineBasicUsage:s,ExampleTimelineColor:c,ExampleTimelinePending:p,ExampleTimelineCustom:h,ExampleTimelineAlternate:w,ExampleTimelineRight:T}},E={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("vui-doc-markdown",[t("h1",[e._v("Timeline 时间轴")]),t("p",[e._v("垂直展示的时间流信息。")]),t("h2",[e._v("何时使用")]),t("ul",[t("li",[e._v("当有一系列信息需按时间排列时，可正序和倒序；")]),t("li",[e._v("需要有一条时间轴进行视觉上的串联时。")])]),t("h2",[e._v("代码演示")])]),t("vui-row",{attrs:{gutter:20}},[t("vui-col",{attrs:{span:12}},[t("ExampleTimelineBasicUsage"),t("ExampleTimelineColor"),t("ExampleTimelinePending")],1),t("vui-col",{attrs:{span:12}},[t("ExampleTimelineCustom"),t("ExampleTimelineAlternate"),t("ExampleTimelineRight")],1)],1),t("vui-doc-markdown",[t("h2",{attrs:{id:"example-api"}},[e._v("API")]),t("h3",[e._v("Timeline 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"100"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"150"}},[e._v("类型")]),t("th",{attrs:{width:"100"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("mode")]),t("td",[e._v("设置时间轴点和主体内容的相对位置，可选值为 "),t("code",[e._v("left")]),e._v("、"),t("code",[e._v("alternate")]),e._v("、"),t("code",[e._v("right")]),e._v(" 或者不设")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("left")])])]),t("tr",[t("td",[e._v("pending")]),t("td",[e._v("指定最后一个节点是否为幽灵节点")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])])])]),t("h3",[e._v("TimelineItem 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"100"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"150"}},[e._v("类型")]),t("th",{attrs:{width:"100"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("color")]),t("td",[e._v("指定轴点颜色，预设 "),t("code",[e._v("gray")]),e._v("、"),t("code",[e._v("blue")]),e._v("、"),t("code",[e._v("yellow")]),e._v("、"),t("code",[e._v("green")]),e._v(" 和 "),t("code",[e._v("red")]),e._v(" 五种颜色")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("blue")])])])])]),t("h3",[e._v("TimelineItem 插槽")]),t("table",[t("thead",[t("tr",[t("th",{attrs:{width:"100"}},[e._v("名称")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("dot")]),t("td",[e._v("自定义时间轴点")])]),t("tr",[t("td",[e._v("default")]),t("td",[e._v("主体内容")])])])])])],1)},staticRenderFns:[]},C=t("VU/8")(y,E,!1,null,null,null);i.default=C.exports}});
//# sourceMappingURL=38.827b1cfa6a2b0bc0d6de.js.map
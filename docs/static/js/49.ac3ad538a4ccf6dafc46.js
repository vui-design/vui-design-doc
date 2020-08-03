webpackJsonp([49],{ajm4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("xe5J"),l=i("Fy5V"),m=i("RLuK"),o={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-basic-usage">\n    <vui-timeline>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-basic-usage"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-basic-usage"},[i("vui-timeline",[i("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),i("vui-timeline-item",[e._v("Solve initial network problems 2018-01-01")]),i("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),i("vui-timeline-item",[e._v("Network problems being solved 2018-01-01")])],1)],1)]),i("template",{slot:"title"},[e._v("基本用法")]),i("template",{slot:"describe"},[i("p",[e._v("最简单定义一个时间轴的用法。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},s=i("VU/8")(o,r,!1,null,null,null).exports,a={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-color">\n    <vui-timeline>\n      <vui-timeline-item color="red">Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="yellow">Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="#722ed1">Purple</vui-timeline-item>\n      <vui-timeline-item color="gray">Recording...</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-color"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-color"},[i("vui-timeline",[i("vui-timeline-item",{attrs:{color:"red"}},[e._v("Create a services site 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"green"}},[e._v("Solve initial network problems 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"yellow"}},[e._v("Technical testing 2018-01-01")]),i("vui-timeline-item",[e._v("Network problems being solved 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"#722ed1"}},[e._v("Purple")]),i("vui-timeline-item",{attrs:{color:"gray"}},[e._v("Recording...")])],1)],1)]),i("template",{slot:"title"},[e._v("轴点颜色")]),i("template",{slot:"describe"},[i("p",[e._v("轴点颜色，灰色表示未完成或失效状态，蓝色表示正在进行或其他默认状态，黄色表示警告状态，绿色用于已完成、成功状态，红色则表示错误或失败状态。")]),i("p",[e._v("如果预设值不能满足你的需求，可以设置为具体的颜色值。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},c=i("VU/8")(a,v,!1,null,null,null).exports,u={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-color">\n    <vui-timeline pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>Recording...</vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-pending"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-pending"},[i("vui-timeline",{attrs:{pending:""}},[i("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),i("vui-timeline-item",[e._v("Solve initial network problems 2018-01-01")]),i("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),i("vui-timeline-item",[e._v("Network problems being solved 2018-01-01")]),i("vui-timeline-item",[e._v("Recording...")])],1)],1)]),i("template",{slot:"title"},[e._v("幽灵节点")]),i("template",{slot:"describe"},[i("p",[e._v("通过 "),i("code",[e._v("pending")]),e._v(" 属性来标记最后一个为幽灵节点，表示还未完成。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},d=i("VU/8")(u,p,!1,null,null,null).exports,_={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-custom">\n    <vui-timeline pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        Solve initial network problems 2018-01-01\n      </vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        Recording...\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-custom"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-custom"},[i("vui-timeline",{attrs:{pending:""}},[i("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"red"}},[i("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tSolve initial network problems 2018-01-01\n\t\t\t\t")],1),i("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"green"}},[e._v("Network problems being solved 2018-01-01")]),i("vui-timeline-item",[i("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tRecording...\n\t\t\t\t")],1)],1)],1)]),i("template",{slot:"title"},[e._v("自定义时间轴点")]),i("template",{slot:"describe"},[i("p",[e._v("接受一个 "),i("code",[e._v("slot")]),e._v(" 来自定义时间轴点，比如一个图标。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},h=i("VU/8")(_,g,!1,null,null,null).exports,x={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-alternate">\n    <vui-timeline mode="alternate" pending>\n      <vui-timeline-item>\n        <h4>2018-01-01</h4>\n        <p>Create a services site</p>\n      </vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        <h4>2018-01-01</h4>\n        <p>Solve initial network problems</p>\n      </vui-timeline-item>\n      <vui-timeline-item>\n        <h4>2018-01-01</h4>\n        <p>Technical testing</p>\n      </vui-timeline-item>\n      <vui-timeline-item color="green">\n        <h4>2018-01-01</h4>\n        <p>Network problems being solved</p>\n      </vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        <p>Recording...</p>\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-timeline-alternate {  }\n  .example-timeline-alternate h4 { margin-bottom:5px; color:#808080; }\n  .example-timeline-alternate p { color:#595959; }\n</style>\n'}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-alternate"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-alternate"},[i("vui-timeline",{attrs:{mode:"alternate",pending:""}},[i("vui-timeline-item",[i("h4",[e._v("2018-01-01")]),i("p",[e._v("Create a services site")])]),i("vui-timeline-item",{attrs:{color:"red"}},[i("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),i("h4",[e._v("2018-01-01")]),i("p",[e._v("Solve initial network problems")])],1),i("vui-timeline-item",[i("h4",[e._v("2018-01-01")]),i("p",[e._v("Technical testing")])]),i("vui-timeline-item",{attrs:{color:"green"}},[i("h4",[e._v("2018-01-01")]),i("p",[e._v("Network problems being solved")])]),i("vui-timeline-item",[i("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),i("p",[e._v("Recording...")])],1)],1)],1)]),i("template",{slot:"title"},[e._v("交替显示")]),i("template",{slot:"describe"},[i("p",[e._v("内容在时间轴两侧轮流出现。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var w=i("VU/8")(x,b,!1,function(e){i("sN16")},null,null).exports,f={components:{Example:m.a},data:function(){return{code:'<template>\n  <div class="example-timeline-right">\n    <vui-timeline mode="right" pending>\n      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="red">\n        <vui-icon type="time" :size="16" slot="dot" />\n        Solve initial network problems 2018-01-01\n      </vui-timeline-item>\n      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>\n      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>\n      <vui-timeline-item>\n        <vui-icon type="loading" :size="16" slot="dot" />\n        Recording...\n      </vui-timeline-item>\n    </vui-timeline>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},E={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-timeline-right"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-timeline-right"},[i("vui-timeline",{attrs:{mode:"right",pending:""}},[i("vui-timeline-item",[e._v("Create a services site 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"red"}},[i("vui-icon",{attrs:{slot:"dot",type:"time",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tSolve initial network problems 2018-01-01\n\t\t\t\t")],1),i("vui-timeline-item",[e._v("Technical testing 2018-01-01")]),i("vui-timeline-item",{attrs:{color:"green"}},[e._v("Network problems being solved 2018-01-01")]),i("vui-timeline-item",[i("vui-icon",{attrs:{slot:"dot",type:"loading",size:16},slot:"dot"}),e._v("\n\t\t\t\t\tRecording...\n\t\t\t\t")],1)],1)],1)]),i("template",{slot:"title"},[e._v("右侧时间轴点")]),i("template",{slot:"describe"},[i("p",[e._v("时间轴点可以在内容的右边。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},k=i("VU/8")(f,E,!1,null,null,null).exports,T={mixins:[n.a],components:{Markdown:l.a,ExampleTimelineBasicUsage:s,ExampleTimelineColor:c,ExampleTimelinePending:d,ExampleTimelineCustom:h,ExampleTimelineAlternate:w,ExampleTimelineRight:k}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Markdown",[i("h1",[e._v("Timeline 时间轴")]),i("p",[e._v("垂直展示的时间流信息。")]),i("h2",[e._v("何时使用")]),i("ul",[i("li",[e._v("当有一系列信息需按时间排列时，可正序和倒序；")]),i("li",[e._v("需要有一条时间轴进行视觉上的串联时。")])]),i("h2",[e._v("代码演示")])]),i("vui-row",{attrs:{gutter:20}},[i("vui-col",{attrs:{span:12}},[i("ExampleTimelineBasicUsage"),i("ExampleTimelineColor"),i("ExampleTimelinePending")],1),i("vui-col",{attrs:{span:12}},[i("ExampleTimelineCustom"),i("ExampleTimelineAlternate"),i("ExampleTimelineRight")],1)],1),i("Markdown",[i("h2",{attrs:{id:"example-api"}},[e._v("API")]),i("h3",[e._v("Timeline 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"100"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"150"}},[e._v("类型")]),i("th",{attrs:{width:"100"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("mode")]),i("td",[e._v("设置时间轴点和主体内容的相对位置，可选值为 "),i("code",[e._v("left")]),e._v("、"),i("code",[e._v("alternate")]),e._v("、"),i("code",[e._v("right")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("left")])])]),i("tr",[i("td",[e._v("pending")]),i("td",[e._v("指定最后一个节点是否为幽灵节点")]),i("td",[e._v("Boolean")]),i("td",[i("code",[e._v("false")])])])])]),i("h3",[e._v("TimelineItem 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"100"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"150"}},[e._v("类型")]),i("th",{attrs:{width:"100"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("color")]),i("td",[e._v("指定轴点颜色，预设 "),i("code",[e._v("gray")]),e._v("、"),i("code",[e._v("blue")]),e._v("、"),i("code",[e._v("yellow")]),e._v("、"),i("code",[e._v("green")]),e._v(" 和 "),i("code",[e._v("red")]),e._v(" 五种颜色")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("blue")])])])])]),i("h3",[e._v("TimelineItem 插槽")]),i("table",[i("thead",[i("tr",[i("th",{attrs:{width:"100"}},[e._v("名称")]),i("th",[e._v("说明")])])]),i("tbody",[i("tr",[i("td",[e._v("dot")]),i("td",[e._v("自定义时间轴点")])]),i("tr",[i("td",[e._v("default")]),i("td",[e._v("主体内容")])])])])])],1)},staticRenderFns:[]},C=i("VU/8")(T,y,!1,null,null,null);t.default=C.exports},sN16:function(e,t){}});
//# sourceMappingURL=49.ac3ad538a4ccf6dafc46.js.map
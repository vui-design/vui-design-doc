webpackJsonp([42],{"+SdN":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("q77b"),n=t("6WqV"),l=t("RLuK"),o={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse v-model="value">\n    <vui-panel value="1" title="This is panel header 1">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel value="2" title="This is panel header 2">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel value="3" title="This is panel header 3">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ["1"]\n      };\n    }\n  };\n<\/script>\n',value:["1"]}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-collapse-basic-usage"}},[t("template",{slot:"demo"},[t("vui-collapse",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("vui-panel",{attrs:{value:"1",title:"This is panel header 1"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{value:"2",title:"This is panel header 2"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{value:"3",title:"This is panel header 3"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),t("template",{slot:"title"},[e._v("基本用法")]),t("template",{slot:"description"},[t("p",[e._v("可以同时展开多个面板，这个例子默认展开了第一个。")])])],2)},staticRenderFns:[]},d=t("VU/8")(o,i,!1,null,null,null).exports,r={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse accordion>\n    <vui-panel title="This is panel header 1">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 2">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 3">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},p={render:function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-collapse-accordion"}},[a("template",{slot:"demo"},[a("vui-collapse",{attrs:{accordion:""}},[a("vui-panel",{attrs:{title:"This is panel header 1"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 2"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 3"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),a("template",{slot:"title"},[this._v("手风琴")]),a("template",{slot:"description"},[a("p",[this._v("手风琴模式，每次只能打开一个面板。")])])],2)},staticRenderFns:[]},u=t("VU/8")(r,p,!1,null,null,null).exports,c={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse v-bind:bordered="false">\n    <vui-panel title="This is panel header 1">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 2">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 3">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},h={render:function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-collapse-borderless"}},[a("template",{slot:"demo"},[a("vui-collapse",{attrs:{bordered:!1}},[a("vui-panel",{attrs:{title:"This is panel header 1"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 2"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 3"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),a("template",{slot:"title"},[this._v("无外边框")]),a("template",{slot:"description"},[a("p",[this._v("一套无外边框的简洁样式。")])])],2)},staticRenderFns:[]},m=t("VU/8")(c,h,!1,null,null,null).exports,v={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-collapse-arrow-align">\n    <vui-radio-group type="button" v-model="arrowAlign">\n      <vui-radio label="Left" value="left" />\n      <vui-radio label="Right" value="right" />\n    </vui-radio-group>\n    <vui-collapse v-bind:arrowAlign="arrowAlign">\n      <vui-panel title="This is panel header 1">\n        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n      </vui-panel>\n      <vui-panel title="This is panel header 2">\n        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n      </vui-panel>\n      <vui-panel title="This is panel header 3">\n        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n      </vui-panel>\n    </vui-collapse>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        arrowAlign: "left"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-collapse-arrow-align > .vui-collapse { margin-top:20px; }\n</style>\n',arrowAlign:"left"}}},f={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-collapse-arrow-align"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-collapse-arrow-align"},[t("vui-radio-group",{attrs:{type:"button"},model:{value:e.arrowAlign,callback:function(a){e.arrowAlign=a},expression:"arrowAlign"}},[t("vui-radio",{attrs:{label:"Left",value:"left"}}),t("vui-radio",{attrs:{label:"Right",value:"right"}})],1),t("vui-collapse",{attrs:{arrowAlign:e.arrowAlign}},[t("vui-panel",{attrs:{title:"This is panel header 1"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{title:"This is panel header 2"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{title:"This is panel header 3"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1)]),t("template",{slot:"title"},[e._v("箭头位置")]),t("template",{slot:"description"},[t("p",[e._v("通过 "),t("code",[e._v("arrowAlign")]),e._v(" 属性可以改变箭头图标的位置。")])])],2)},staticRenderFns:[]};var y=t("VU/8")(v,f,!1,function(e){t("A/hL")},null,null).exports,w={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse>\n    <vui-panel title="This is panel header 1" extra="Extra">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 2">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n      <vui-badge slot="extra" v-bind:count="10" />\n    </vui-panel>\n    <vui-panel title="This is panel header 3">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n      <vui-button slot="extra" size="small">Extra</vui-button>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},_={render:function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-collapse-extra"}},[a("template",{slot:"demo"},[a("vui-collapse",[a("vui-panel",{attrs:{title:"This is panel header 1",extra:"Extra"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 2"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")]),a("vui-badge",{attrs:{slot:"extra",count:10},slot:"extra"})],1),a("vui-panel",{attrs:{title:"This is panel header 3"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")]),a("vui-button",{attrs:{slot:"extra",size:"small"},slot:"extra"},[this._v("Extra")])],1)],1)],1),a("template",{slot:"title"},[this._v("附加内容")]),a("template",{slot:"description"},[a("p",[this._v("可以在面板标题的右侧添加附加内容。")])])],2)},staticRenderFns:[]},g=t("VU/8")(w,_,!1,null,null,null).exports,b={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse>\n    <vui-panel title="This is panel header 1">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 2" v-bind:showArrow="false">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 3" v-bind:showArrow="false">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},x={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-collapse-arrowless"}},[t("template",{slot:"demo"},[t("vui-collapse",[t("vui-panel",{attrs:{title:"This is panel header 1"}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{title:"This is panel header 2",showArrow:!1}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),t("vui-panel",{attrs:{title:"This is panel header 3",showArrow:!1}},[t("p",[e._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),t("template",{slot:"title"},[e._v("隐藏箭头")]),t("template",{slot:"description"},[t("p",[e._v("通过设置 "),t("code",[e._v("Panel")]),e._v(" 组件的 "),t("code",[e._v("showArrow")]),e._v(" 属性可以隐藏箭头图标。")])])],2)},staticRenderFns:[]},A=t("VU/8")(b,x,!1,null,null,null).exports,T={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse>\n    <vui-panel title="This is panel header 1">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 2" disabled>\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 3" disabled>\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},K={render:function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-collapse-disabled"}},[a("template",{slot:"demo"},[a("vui-collapse",[a("vui-panel",{attrs:{title:"This is panel header 1"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 2",disabled:""}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 3",disabled:""}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),a("template",{slot:"title"},[this._v("禁用")]),a("template",{slot:"description"},[a("p",[this._v("禁用后的面板展开与否将无法通过用户交互改变。")])])],2)},staticRenderFns:[]},E=t("VU/8")(T,K,!1,null,null,null).exports,C={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-collapse>\n    <vui-panel title="This is panel header 1">\n      <vui-collapse accordion>\n        <vui-panel title="This is panel header 1-1">\n          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n        </vui-panel>\n        <vui-panel title="This is panel header 1-2">\n          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n        </vui-panel>\n      </vui-collapse>\n    </vui-panel>\n    <vui-panel title="This is panel header 2">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n    <vui-panel title="This is panel header 3">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </vui-panel>\n  </vui-collapse>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},R={render:function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-collapse-nested"}},[a("template",{slot:"demo"},[a("vui-collapse",[a("vui-panel",{attrs:{title:"This is panel header 1"}},[a("vui-collapse",{attrs:{accordion:""}},[a("vui-panel",{attrs:{title:"This is panel header 1-1"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 1-2"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),a("vui-panel",{attrs:{title:"This is panel header 2"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]),a("vui-panel",{attrs:{title:"This is panel header 3"}},[a("p",[this._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])])],1)],1),a("template",{slot:"title"},[this._v("嵌套面板")]),a("template",{slot:"description"},[a("p",[this._v("折叠面板可以进行嵌套。")])])],2)},staticRenderFns:[]},F=t("VU/8")(C,R,!1,null,null,null).exports,U={mixins:[s.a],components:{Document:n.a,ExampleCollapseBasicUsage:d,ExampleCollapseAccordion:u,ExampleCollapseBorderless:m,ExampleCollapseArrowAlign:y,ExampleCollapseExtra:g,ExampleCollapseArrowless:A,ExampleCollapseDisabled:E,ExampleCollapseNested:F}},S={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("document",[t("h1",[e._v("Collapse 折叠面板")]),t("p",[e._v("可以折叠/展开的内容区域。")]),t("h2",[e._v("何时使用")]),t("ul",[t("li",[e._v("对复杂区域进行分组和隐藏，保持页面的整洁。")]),t("li",[e._v("手风琴是一种特殊的折叠面板，只允许单个内容区域展开。")])]),t("h2",[e._v("代码演示")])]),t("vui-row",{attrs:{gutter:16}},[t("vui-col",{attrs:{span:12}},[t("ExampleCollapseBasicUsage"),t("ExampleCollapseAccordion"),t("ExampleCollapseBorderless"),t("ExampleCollapseArrowAlign")],1),t("vui-col",{attrs:{span:12}},[t("ExampleCollapseExtra"),t("ExampleCollapseArrowless"),t("ExampleCollapseDisabled"),t("ExampleCollapseNested")],1)],1),t("document",[t("h2",{attrs:{id:"example-api"}},[e._v("API")]),t("h3",[e._v("Collapse 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"180"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"180"}},[e._v("类型")]),t("th",{attrs:{width:"140"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("当前激活面板的 "),t("code",[e._v("value")]),e._v(" 属性，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据；手风琴模式下，绑定值类型必须为 "),t("code",[e._v("String")]),e._v(" 或 "),t("code",[e._v("Number")]),e._v(" 类型，反之为 "),t("code",[e._v("Array")]),e._v(" 类型")]),t("td",[e._v("Array | String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("accordion")]),t("td",[e._v("是否开启手风琴模式，开启后每次至多展开一个面板")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])]),t("tr",[t("td",[e._v("bordered")]),t("td",[e._v("是否显示外边框")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("true")])])]),t("tr",[t("td",[e._v("arrowAlign")]),t("td",[e._v("设置箭头位置，可选值为 "),t("code",[e._v("left")]),e._v("、"),t("code",[e._v("right")]),e._v(" 或者不设")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("left")])])]),t("tr",[t("td",[e._v("destroyInactivePanel")]),t("td",[e._v("销毁折叠隐藏的面板")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])])])]),t("h3",[e._v("Collapse 事件")]),t("table",{staticClass:"example-api-events"},[t("thead",[t("tr",[t("th",{attrs:{width:"180"}},[e._v("事件名")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"180"}},[e._v("类型")]),t("th",{attrs:{width:"140"}},[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("input")]),t("td",[e._v("切换面板时触发，返回当前已展开面板的 "),t("code",[e._v("value")]),e._v(" 属性，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据；手风琴模式下，绑定值类型必须为 "),t("code",[e._v("String")]),e._v(" 或 "),t("code",[e._v("Number")]),e._v(" 类型，反之为 "),t("code",[e._v("Array")]),e._v(" 类型")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("value[]")]),e._v(" | "),t("code",[e._v("value")])])]),t("tr",[t("td",[e._v("change")]),t("td",[e._v("同 "),t("code",[e._v("input")]),e._v(" 事件")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("value[]")]),e._v(" | "),t("code",[e._v("value")])])])])]),t("h3",[e._v("Panel 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"180"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"180"}},[e._v("类型")]),t("th",{attrs:{width:"140"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("面板唯一值，对应父级 "),t("code",[e._v("Collapse")]),e._v(" 组件的 "),t("code",[e._v("value")]),e._v(" 值，默认自动生成")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("面板标题")]),t("td",[e._v("String | Number | Slot")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("extra")]),t("td",[e._v("面板标题右侧的附加内容")]),t("td",[e._v("String | Number | Slot")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("showArrow")]),t("td",[e._v("是否显示面板的箭头图标")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("true")])])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用面板，禁用后的面板展开与否将无法通过用户交互改变")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])])])])])],1)},staticRenderFns:[]},V=t("VU/8")(U,S,!1,null,null,null);a.default=V.exports},"A/hL":function(e,a){}});
//# sourceMappingURL=42.974f3681446b2a22af54.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-47d4dd64"],{8854:function(e,a,t){},"94f5":function(e,a,t){"use strict";t.r(a);var i=t("d58b"),v=t("240e"),o=t("1a42"),l={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-radio v-model="value">Radio</vui-radio>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:!1}},watch:{value:function(e){console.log(e)}}},n=t("2877"),u=Object(n.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-basic-usage"}},[t("template",{slot:"demo"},[t("vui-radio",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[e._v("Radio")])],1),t("template",{slot:"title"},[e._v("基本用法")]),t("template",{slot:"description"},[t("p",[e._v("最简单的用法。")])])],2)}),[],!1,null,null,null).exports,d={components:{Example:o.a},data:function(){return{code:"<template>\n  <vui-space>\n    <vui-radio checked disabled>Radio</vui-radio>\n    <vui-radio disabled>Radio</vui-radio>\n  </vui-space>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n"}}},r=Object(n.a)(d,(function(){var e=this.$createElement,a=this._self._c||e;return a("example",{attrs:{code:this.code,id:"example-radio-disabled"}},[a("template",{slot:"demo"},[a("vui-space",[a("vui-radio",{attrs:{checked:"",disabled:""}},[this._v("Radio")]),a("vui-radio",{attrs:{disabled:""}},[this._v("Radio")])],1)],1),a("template",{slot:"title"},[this._v("禁用状态")]),a("template",{slot:"description"},[a("p",[this._v("通过设置 "),a("code",[this._v("disabled")]),this._v(" 属性来禁用单选框。")])])],2)}),[],!1,null,null,null).exports,s={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-radio\n    v-model="value"\n    v-bind:checkedValue="1"\n    v-bind:uncheckedValue="0"\n  >\n    Radio\n  </vui-radio>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:0}},watch:{value:function(e){console.log(e)}}},c=Object(n.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-state-value"}},[t("template",{slot:"demo"},[t("vui-radio",{attrs:{checkedValue:1,uncheckedValue:0},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[e._v(" Radio ")])],1),t("template",{slot:"title"},[e._v("自定义状态值")]),t("template",{slot:"description"},[t("p",[e._v("设置 "),t("code",[e._v("Radio")]),e._v(" 选中/未选中时的状态值。")])])],2)}),[],!1,null,null,null).exports,p={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-radio-group v-model="value">\n    <vui-radio v-bind:value="1">A</vui-radio>\n    <vui-radio v-bind:value="2">B</vui-radio>\n    <vui-radio v-bind:value="3">C</vui-radio>\n    <vui-radio v-bind:value="4">D</vui-radio>\n  </vui-radio-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 1\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:1}},watch:{value:function(e){console.log(e)}}},_=Object(n.a)(p,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-group"}},[t("template",{slot:"demo"},[t("vui-radio-group",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("template",{slot:"title"},[e._v("单选组合")]),t("template",{slot:"description"},[t("p",[e._v("一组互斥的单选框。")])])],2)}),[],!1,null,null,null).exports,m={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-radio-group layout="vertical" v-model="value">\n    <vui-radio v-bind:value="1">A</vui-radio>\n    <vui-radio v-bind:value="2">B</vui-radio>\n    <vui-radio v-bind:value="3">C</vui-radio>\n    <vui-radio v-bind:value="4">D</vui-radio>\n  </vui-radio-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 1\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:1}},watch:{value:function(e){console.log(e)}}},b=Object(n.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-group-vertical"}},[t("template",{slot:"demo"},[t("vui-radio-group",{attrs:{layout:"vertical"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("template",{slot:"title"},[e._v("垂直排列")]),t("template",{slot:"description"},[t("p",[e._v("设置 "),t("code",[e._v('layout="vertical"')]),e._v(" 可以垂直排列单选组合。")])])],2)}),[],!1,null,null,null).exports,g={components:{Example:o.a},data:function(){return{code:'<template>\n  <div class="example-radio-group-options">\n    <section>\n      <vui-radio-group v-model="value1" v-bind:options="options1" />\n    </section>\n    <section>\n      <vui-radio-group v-model="value2" v-bind:options="options2" />\n    </section>\n    <section>\n      <vui-radio-group v-model="value3" v-bind:options="options3" disabled />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: "A",\n        options1: ["A", "B", "C", "D"],\n        value2: "A",\n        options2: [\n          { label: "A", value: "A" },\n          { label: "B", value: "B", disabled: true },\n          { label: "C", value: "C" },\n          { label: "D", value: "D" }\n        ],\n        value3: "A",\n        options3: [\n          { label: "A", value: "A" },\n          { label: "B", value: "B" },\n          { label: "C", value: "C" },\n          { label: "D", value: "D" }\n        ]\n      };\n    },\n    watch: {\n      value1(value) {\n        console.log(value);\n      },\n      value2(value) {\n        console.log(value);\n      },\n      value3(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-radio-group-options section + section { margin-top:16px; font-size:0; }\n</style>\n',value1:"A",options1:["A","B","C","D"],value2:"A",options2:[{label:"A",value:"A"},{label:"B",value:"B",disabled:!0},{label:"C",value:"C"},{label:"D",value:"D"}],value3:"A",options3:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"},{label:"D",value:"D"}]}},watch:{value1:function(e){console.log(e)},value2:function(e){console.log(e)},value3:function(e){console.log(e)}}},h=(t("f6c9"),Object(n.a)(g,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-group-options"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-radio-group-options"},[t("section",[t("vui-radio-group",{attrs:{options:e.options1},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("section",[t("vui-radio-group",{attrs:{options:e.options2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("section",[t("vui-radio-group",{attrs:{options:e.options3,disabled:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)])]),t("template",{slot:"title"},[e._v("配置方式")]),t("template",{slot:"description"},[t("p",[e._v("通过配置 "),t("code",[e._v("options")]),e._v(" 属性来渲染单选组合。")])])],2)}),[],!1,null,null,null).exports),x={components:{Example:o.a},data:function(){return{code:'<template>\n  <div class="example-radio-button">\n    <section>\n      <vui-radio-group type="button" v-model="value1">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group type="button" v-model="value2">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2" disabled>B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group type="button" v-model="value3" disabled>\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 1,\n        value2: 1,\n        value3: 1\n      };\n    },\n    watch: {\n      value1(value) {\n        console.log(value);\n      },\n      value2(value) {\n        console.log(value);\n      },\n      value3(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-radio-button section + section { margin-top:16px; font-size:0; }\n</style>\n',value1:1,value2:1,value3:1}},watch:{value1:function(e){console.log(e)},value2:function(e){console.log(e)},value3:function(e){console.log(e)}}},f=(t("b5d8"),Object(n.a)(x,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-button"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-radio-button"},[t("section",[t("vui-radio-group",{attrs:{type:"button"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{type:"button"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2,disabled:""}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{type:"button",disabled:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1)])]),t("template",{slot:"title"},[e._v("按钮样式")]),t("template",{slot:"description"},[t("p",[e._v("按钮样式的单选组合。")])])],2)}),[],!1,null,null,null).exports),B={components:{Example:o.a},data:function(){return{code:'<template>\n  <div class="example-radio-size">\n    <section>\n      <vui-radio-group size="small" v-model="value1">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group v-model="value2">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2" disabled>B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group size="large" v-model="value3" disabled>\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group type="button" size="small" v-model="value1">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group type="button" v-model="value2">\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2" disabled>B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-radio-group type="button" size="large" v-model="value3" disabled>\n        <vui-radio v-bind:value="1">A</vui-radio>\n        <vui-radio v-bind:value="2">B</vui-radio>\n        <vui-radio v-bind:value="3">C</vui-radio>\n        <vui-radio v-bind:value="4">D</vui-radio>\n      </vui-radio-group>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 1,\n        value2: 1,\n        value3: 1\n      };\n    },\n    watch: {\n      value1(value) {\n        console.log(value);\n      },\n      value2(value) {\n        console.log(value);\n      },\n      value3(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-radio-size section + section { margin-top:16px; font-size:0; }\n</style>\n',value1:1,value2:1,value3:1}},watch:{value1:function(e){console.log(e)},value2:function(e){console.log(e)},value3:function(e){console.log(e)}}},A=(t("b3b5"),Object(n.a)(B,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("example",{attrs:{code:e.code,id:"example-radio-size"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-radio-size"},[t("section",[t("vui-radio-group",{attrs:{size:"small"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2,disabled:""}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{size:"large",disabled:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{type:"button",size:"small"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{type:"button"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2,disabled:""}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1),t("section",[t("vui-radio-group",{attrs:{type:"button",size:"large",disabled:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},[t("vui-radio",{attrs:{value:1}},[e._v("A")]),t("vui-radio",{attrs:{value:2}},[e._v("B")]),t("vui-radio",{attrs:{value:3}},[e._v("C")]),t("vui-radio",{attrs:{value:4}},[e._v("D")])],1)],1)])]),t("template",{slot:"title"},[e._v("尺寸")]),t("template",{slot:"description"},[t("p",[e._v("通过 "),t("code",[e._v("size")]),e._v(" 属性使用不同尺寸的单选组合。")])])],2)}),[],!1,null,null,null).exports),C={name:"RadioZhCN",mixins:[i.a],components:{Document:v.a,ExampleRadioBasicUsage:u,ExampleRadioDisabled:r,ExampleRadioStateValue:c,ExampleRadioGroup:_,ExampleRadioGroupVertical:b,ExampleRadioGroupOptions:h,ExampleRadioButton:f,ExampleRadioSize:A}},D=Object(n.a)(C,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("document",[t("h1",[e._v("Radio 单选框")]),t("p",[e._v("单选框。")]),t("h2",[e._v("何时使用")]),t("ul",[t("li",[e._v("用于在多个备选项中选中单个状态。")]),t("li",[e._v("和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")])]),t("h2",[e._v("代码演示")])]),t("vui-row",{attrs:{gutter:16}},[t("vui-col",{attrs:{span:12}},[t("ExampleRadioBasicUsage"),t("ExampleRadioDisabled"),t("ExampleRadioStateValue"),t("ExampleRadioGroup"),t("ExampleRadioGroupVertical")],1),t("vui-col",{attrs:{span:12}},[t("ExampleRadioGroupOptions"),t("ExampleRadioButton"),t("ExampleRadioSize")],1)],1),t("document",[t("h2",{attrs:{id:"example-api"}},[e._v("API")]),t("h3",[e._v("Radio 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"140"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"220"}},[e._v("类型")]),t("th",{attrs:{width:"248"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("type")]),t("td",[e._v("单选框样式，可选值为 "),t("code",[e._v("button")]),e._v(" 或者不设，为 "),t("code",[e._v("button")]),e._v(" 时使用按钮样式")]),t("td",[e._v("String")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("单选框尺寸，可选值为 "),t("code",[e._v("small")]),e._v("、"),t("code",[e._v("medium")]),e._v("、"),t("code",[e._v("large")]),e._v(" 或者不设")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("medium")])])]),t("tr",[t("td",[e._v("minWidth")]),t("td",[e._v("该属性仅在 "),t("code",[e._v("type")]),e._v(" 为 "),t("code",[e._v("button")]),e._v(" 时有效，用于指定按钮的最小宽度")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("单选框文本")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("该属性仅在组合使用时有效，用于指定单选框的 "),t("code",[e._v("value")]),e._v(" 值，组合会自动判断是否选中")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("checked")]),t("td",[e._v("该属性仅在单独使用时有效，用于指定单选框是否选中，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),t("td",[e._v("Boolean | String | Number")]),t("td",[t("code",[e._v("false")])])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])]),t("tr",[t("td",[e._v("checkedValue")]),t("td",[e._v("该属性仅在单独使用时有效，用于设置选中时的值，例如使用 "),t("code",[e._v("0")]),e._v(" 和 "),t("code",[e._v("1")]),e._v(" 来标记单选框的选中状态")]),t("td",[e._v("Boolean | String | Number")]),t("td",[t("code",[e._v("true")])])]),t("tr",[t("td",[e._v("uncheckedValue")]),t("td",[e._v("该属性仅在单独使用时有效，用于设置未选中时的值，例如使用 "),t("code",[e._v("0")]),e._v(" 和 "),t("code",[e._v("1")]),e._v(" 来标记单选框的选中状态")]),t("td",[e._v("Boolean | String | Number")]),t("td",[t("code",[e._v("false")])])])])]),t("h3",[e._v("Radio 事件")]),t("table",{staticClass:"example-api-events"},[t("thead",[t("tr",[t("th",{attrs:{width:"140"}},[e._v("事件名")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"220"}},[e._v("类型")]),t("th",{attrs:{width:"248"}},[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("input")]),t("td",[e._v("在单选框的选中状态发生变化时触发的事件回调函数，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("checkedValue")]),e._v(" | "),t("code",[e._v("uncheckedValue")])])]),t("tr",[t("td",[e._v("change")]),t("td",[e._v("在单选框的选中状态发生变化时触发的事件回调函数")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("checkedValue")]),e._v(" | "),t("code",[e._v("uncheckedValue")])])])])]),t("h3",[e._v("RadioGroup 属性")]),t("table",{staticClass:"example-api-props"},[t("thead",[t("tr",[t("th",{attrs:{width:"140"}},[e._v("属性")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"220"}},[e._v("类型")]),t("th",{attrs:{width:"248"}},[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("layout")]),t("td",[e._v("单选组合布局方式，可选值为 "),t("code",[e._v("horizontal")]),e._v("、"),t("code",[e._v("vertical")]),e._v(" 或者不设")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("horizontal")])])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("单选组合样式，可选值为 "),t("code",[e._v("button")]),e._v(" 或者不设，为 "),t("code",[e._v("button")]),e._v(" 时使用按钮样式")]),t("td",[e._v("String")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("单选组合尺寸，可选值为 "),t("code",[e._v("small")]),e._v("、"),t("code",[e._v("medium")]),e._v("、"),t("code",[e._v("large")]),e._v(" 或者不设")]),t("td",[e._v("String")]),t("td",[t("code",[e._v("medium")])])]),t("tr",[t("td",[e._v("minWidth")]),t("td",[e._v("该属性仅在 "),t("code",[e._v("type")]),e._v(" 为 "),t("code",[e._v("button")]),e._v(" 时有效，用于指定每个按钮的最小宽度")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("当前选中的值，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),t("td",[e._v("String | Number")]),t("td",[e._v("--")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("以配置形式设置单选组合的选项列表，详见示例〔配置方式〕")]),t("td",[e._v("Array")]),t("td",[t("code",[e._v("[]")])])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用单选组合")]),t("td",[e._v("Boolean")]),t("td",[t("code",[e._v("false")])])])])]),t("h3",[e._v("RadioGroup 事件")]),t("table",{staticClass:"example-api-events"},[t("thead",[t("tr",[t("th",{attrs:{width:"140"}},[e._v("事件名")]),t("th",[e._v("说明")]),t("th",{attrs:{width:"220"}},[e._v("类型")]),t("th",{attrs:{width:"248"}},[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("input")]),t("td",[e._v("在选项状态发生变化时触发的事件回调函数，可以使用 "),t("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("value")])])]),t("tr",[t("td",[e._v("change")]),t("td",[e._v("在选项状态发生变化时触发的事件回调函数")]),t("td",[e._v("Function")]),t("td",[t("code",[e._v("value")])])])])])])],1)}),[],!1,null,null,null);a.default=D.exports},b3b5:function(e,a,t){"use strict";t("f919")},b5d8:function(e,a,t){"use strict";t("ec71")},ec71:function(e,a,t){},f6c9:function(e,a,t){"use strict";t("8854")},f919:function(e,a,t){}}]);
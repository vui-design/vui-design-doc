(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c000cada"],{"34d1":function(e,n,a){"use strict";a("3c0d")},"3c0d":function(e,n,a){},"80d8":function(e,n,a){"use strict";a.r(n);var l=a("d58b"),t=a("240e"),o=a("1a42"),i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],s={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:i}},watch:{value:function(e){console.log(e)}}},u=a("2877"),c=Object(u.a)(s,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-basic-usage"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("基本用法")]),a("template",{slot:"description"},[a("p",[e._v("省市区级联。")])])],2)}),[],!1,null,null,null).exports,d=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],v={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: ["zhejiang", "hangzhou", "xihu"],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:["zhejiang","hangzhou","xihu"],options:d}},watch:{value:function(e){console.log(e)}}},r=Object(u.a)(v,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-value"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("默认值")]),a("template",{slot:"description"},[a("p",[e._v("默认值通过数组的方式指定。")])])],2)}),[],!1,null,null,null).exports,h=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],p={components:{Example:o.a},data:function(){return{code:'<template>\n  <div class="example-cascader-size">\n    <vui-cascader v-bind:options="options" size="small" style="width: 200px;" placeholder="Please select" />\n    <vui-cascader v-bind:options="options" style="width: 200px;" placeholder="Please select" />\n    <vui-cascader v-bind:options="options" size="large" style="width: 200px;" placeholder="Please select" />\n  </div>\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        options: options\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-cascader-size .vui-cascader { display:block; }\n  .example-cascader-size .vui-cascader + .vui-cascader { margin-top:16px; }\n</style>\n',options:h}}},g=(a("34d1"),Object(u.a)(p,(function(){var e=this.$createElement,n=this._self._c||e;return n("example",{attrs:{code:this.code,id:"example-cascader-size"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-cascader-size"},[n("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:this.options,size:"small",placeholder:"Please select"}}),n("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:this.options,placeholder:"Please select"}}),n("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:this.options,size:"large",placeholder:"Please select"}})],1)]),n("template",{slot:"title"},[this._v("尺寸")]),n("template",{slot:"description"},[n("p",[this._v("不同尺寸的级联选择器，默认为中等尺寸。")])])],2)}),[],!1,null,null,null).exports),m=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],b={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    expandTrigger="hover"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            },\n            {\n              value: "xiasha",\n              label: "Xia Sha",\n              disabled: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:m}},watch:{value:function(e){console.log(e)}}},_=Object(u.a)(b,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-expand-trigger"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,expandTrigger:"hover",placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("移入展开")]),a("template",{slot:"description"},[a("p",[e._v("通过鼠标移入展开下级菜单，点击完成选择。")])])],2)}),[],!1,null,null,null).exports,x=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],j={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    changeOnSelect\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:x}},watch:{value:function(e){console.log(e)}}},z=Object(u.a)(j,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-change-on-select"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,changeOnSelect:"",placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("选择即改变")]),a("template",{slot:"description"},[a("p",[e._v("这种交互允许只选中父级选项。")])])],2)}),[],!1,null,null,null).exports,f=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],w={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            },\n            {\n              value: "xiasha",\n              label: "Xia Sha",\n              disabled: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      disabled: true,\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:f}},watch:{value:function(e){console.log(e)}}},H=Object(u.a)(w,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-disabled-option"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("禁用选项")]),a("template",{slot:"description"},[a("p",[e._v("通过指定 "),a("code",[e._v("options")]),e._v(" 里的 "),a("code",[e._v("disabled")]),e._v(" 字段来禁用选项。")])])],2)}),[],!1,null,null,null).exports,Z=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],y={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:Z}},watch:{value:function(e){console.log(e)}}},k=Object(u.a)(y,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-bordered"}},[a("template",{slot:"demo"},[a("vui-cascader",{attrs:{bordered:!1,options:e.options,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("无边框")]),a("template",{slot:"description"},[a("p",[e._v("没有边框。")])])],2)}),[],!1,null,null,null).exports,S=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],E={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    changeOnSelect\n    searchable\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            },\n            {\n              value: "xiasha",\n              label: "Xia Sha",\n              disabled: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:S}},watch:{value:function(e){console.log(e)}}},P=Object(u.a)(E,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-searchable"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,changeOnSelect:"",searchable:"",placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("搜索")]),a("template",{slot:"description"},[a("p",[e._v("可以直接搜索选项并选择（暂不支持服务端搜索）。")])])],2)}),[],!1,null,null,null).exports,O=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],J={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    searchable\n    clearable\n    changeOnSelect\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            },\n            {\n              value: "xiasha",\n              label: "Xia Sha",\n              disabled: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:O}},watch:{value:function(e){console.log(e)}}},W=Object(u.a)(J,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-clearable"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,changeOnSelect:"",searchable:"",clearable:"",placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("可清空")]),a("template",{slot:"description"},[a("p",[e._v("允许清空已选项或搜索关键词。")])])],2)}),[],!1,null,null,null).exports,L=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],M={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:L}},watch:{value:function(e){console.log(e)}}},N=Object(u.a)(M,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-auto-width"}},[a("template",{slot:"demo"},[a("vui-cascader",{attrs:{options:e.options,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("自动宽度")]),a("template",{slot:"description"},[a("p",[e._v("宽度根据已选项内容自动撑开。")])])],2)}),[],!1,null,null,null).exports,$=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:330009},{value:"xiasha",label:"Xia Sha",code:310018,disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:210016}]}]}],X={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    v-bind:formatter="formatter"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      value: "zhejiang",\n      label: "Zhejiang",\n      children: [\n        {\n          value: "hangzhou",\n          label: "Hangzhou",\n          children: [\n            {\n              value: "xihu",\n              label: "West Lake",\n              code: 330009\n            },\n            {\n              value: "xiasha",\n              label: "Xia Sha",\n              code: 310018,\n              disabled: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: "jiangsu",\n      label: "Jiangsu",\n      children: [\n        {\n          value: "nanjing",\n          label: "Nanjing",\n          children: [\n            {\n              value: "zhonghuamen",\n              label: "Zhong Hua Men",\n              code: 210016\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    },\n    methods: {\n      formatter(labels, selectedOptions) {\n        const index = labels.length - 1;\n        const option = selectedOptions[index];\n\n        if (option && option.code) {\n          return labels[index] + " - " + option.code;\n        }\n\n        return labels[index];\n      }\n    }\n  };\n<\/script>\n',value:[],options:$}},watch:{value:function(e){console.log(e)}},methods:{formatter:function(e,n){var a=e.length-1,l=n[a];return l&&l.code?e[a]+" - "+l.code:e[a]}}},C=Object(u.a)(X,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-formatter"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,formatter:e.formatter,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("自定义已选项")]),a("template",{slot:"description"},[a("p",[e._v("对于显示结果，可以通过 "),a("code",[e._v("formatter")]),e._v(" 属性来实现自定义。其中第一个参数 "),a("code",[e._v("labels")]),e._v(" 是当前已选选项的 "),a("code",[e._v("label")]),e._v(" 集合，第二个参数 "),a("code",[e._v("selectedOptions")]),e._v(" 是当前已选选项的数据集合，可以利用它们组合出你想要显示的内容。")])])],2)}),[],!1,null,null,null).exports,F=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"},{code:"xiasha",name:"Xia Sha",invalid:!0}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}],B={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-cascader\n    v-model="value"\n    v-bind:options="options"\n    v-bind:optionKeys="optionKeys"\n    style="width: 200px;"\n    placeholder="Please select"\n  />\n</template>\n\n<script>\n  const options = [\n    {\n      code: "zhejiang",\n      name: "Zhejiang",\n      items: [\n        {\n          code: "hangzhou",\n          name: "Hangzhou",\n          items: [\n            {\n              code: "xihu",\n              name: "West Lake"\n            },\n            {\n              code: "xiasha",\n              name: "Xia Sha",\n              invalid: true\n            }\n          ]\n        }\n      ]\n    },\n    {\n      code: "jiangsu",\n      name: "Jiangsu",\n      items: [\n        {\n          code: "nanjing",\n          name: "Nanjing",\n          items: [\n            {\n              code: "zhonghuamen",\n              name: "Zhong Hua Men"\n            }\n          ]\n        }\n      ]\n    }\n  ];\n\n  export default {\n    data() {\n      return {\n        value: [],\n        options: options,\n        optionKeys: {\n          label: "name",\n          value: "code",\n          children: "items",\n          disabled: "invalid"\n        }\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:[],options:F,optionKeys:{label:"name",value:"code",children:"items",disabled:"invalid"}}},watch:{value:function(e){console.log(e)}}},K=Object(u.a)(B,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("example",{attrs:{code:e.code,id:"example-cascader-option-keys"}},[a("template",{slot:"demo"},[a("vui-cascader",{staticStyle:{width:"200px"},attrs:{options:e.options,optionKeys:e.optionKeys,placeholder:"Please select"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),a("template",{slot:"title"},[e._v("自定义字段名")]),a("template",{slot:"description"},[a("p",[e._v("自定义选项字段名。")])])],2)}),[],!1,null,null,null).exports,T={mixins:[l.a],components:{Document:t.a,ExampleBasicUsage:c,ExampleValue:r,ExampleSize:g,ExampleExpandTrigger:_,ExampleChangeOnSelect:z,ExampleDisabledOption:H,ExampleBordered:k,ExampleSearchable:P,ExampleClearable:W,ExampleAutoWidth:N,ExampleFormatter:C,ExampleOptionKeys:K}},A=Object(u.a)(T,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("document",[a("h1",[e._v("Cascader 级联选择框")]),a("p",[e._v("级联选择框。")]),a("h2",[e._v("何时使用")]),a("ul",[a("li",[e._v("需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。")]),a("li",[e._v("从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。")]),a("li",[e._v("比起 "),a("code",[e._v("Select")]),e._v(" 组件，可以在同一个浮层中完成选择，有较好的体验。")])]),a("h2",[e._v("代码演示")])]),a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:12}},[a("example-basic-usage"),a("example-value"),a("example-size"),a("example-expand-trigger"),a("example-change-on-select"),a("example-disabled-option")],1),a("vui-col",{attrs:{span:12}},[a("example-bordered"),a("example-searchable"),a("example-clearable"),a("example-auto-width"),a("example-formatter"),a("example-option-keys")],1)],1),a("document",[a("h2",{attrs:{id:"example-api"}},[e._v("API")]),a("h3",[e._v("Cascader 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"180"}},[e._v("属性")]),a("th",[e._v("说明")]),a("th",{attrs:{width:"180"}},[e._v("类型")]),a("th",{attrs:{width:"260"}},[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("size")]),a("td",[e._v("选择框尺寸，可选值为 "),a("code",[e._v("small")]),e._v("、"),a("code",[e._v("medium")]),e._v("、"),a("code",[e._v("large")]),e._v(" 或者不设")]),a("td",[e._v("String")]),a("td",[e._v("medium")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("选择框占位文本")]),a("td",[e._v("String")]),a("td",[e._v("请选择...")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("指定选中项目的 "),a("code",[e._v("value")]),e._v(" 值，可以使用 "),a("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),a("td",[e._v("Array")]),a("td",[e._v("[]")])]),a("tr",[a("td",[e._v("options")]),a("td",[e._v("可选项数据源")]),a("td",[e._v("Array")]),a("td",[e._v("[]")])]),a("tr",[a("td",[e._v("expandTrigger")]),a("td",[e._v("次级菜单的展开方式，可选值为 "),a("code",[e._v("click")]),e._v("、"),a("code",[e._v("hover")]),e._v(" 或者不设")]),a("td",[e._v("String")]),a("td",[e._v("click")])]),a("tr",[a("td",[e._v("optionKeys")]),a("td",[e._v("自定义 "),a("code",[e._v("options")]),e._v(" 选项中的 "),a("code",[e._v("label")]),e._v("、"),a("code",[e._v("value")]),e._v("、"),a("code",[e._v("children")]),e._v(" 或 "),a("code",[e._v("disabled")]),e._v(" 等字段")]),a("td",[e._v("Object")]),a("td",[a("pre",{staticStyle:{margin:"0"}},[e._v('{\n  label: "label",\n  value: "value",\n  children: "children",\n  disabled: "disabled"\n}\n')])])]),a("tr",[a("td",[e._v("formatter")]),a("td",[e._v("选择后展示的渲染函数，用于自定义显示格式")]),a("td",[e._v("Function")]),a("td",[e._v('labels => labels.join(" / ")')])]),a("tr",[a("td",[e._v("changeOnSelect")]),a("td",[e._v("当此项为 "),a("code",[e._v("true")]),e._v(" 时，点选每级菜单选项值都会发生变化")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("bordered")]),a("td",[e._v("是否有边框")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("searchable")]),a("td",[e._v("是否支持搜索")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("filter")]),a("td",[e._v("是否根据输入关键字进行筛选。当其为一个函数时，会接收 "),a("code",[e._v("keyword")]),e._v("、"),a("code",[e._v("option")]),e._v(" 两个参数，当 "),a("code",[e._v("option")]),e._v(" 符合条件时，应返回 "),a("code",[e._v("true")]),e._v("，反之返回 "),a("code",[e._v("false")])]),a("td",[e._v("Boolean | Function")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("filterOptionProp")]),a("td",[e._v("搜索时根据 "),a("code",[e._v("option")]),e._v(" 的指定属性进行过滤，可选值为 "),a("code",[e._v("label")]),e._v("、"),a("code",[e._v("value")]),e._v(" 或者不设")]),a("td",[e._v("String")]),a("td",[e._v("label")])]),a("tr",[a("td",[e._v("notFoundText")]),a("td",[e._v("选项为空时的文字提示")]),a("td",[e._v("String")]),a("td",[e._v("暂无数据")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("是否允许清空")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("placement")]),a("td",[e._v("下拉弹窗的弹出位置，可选值为 "),a("code",[e._v("top")]),e._v("、"),a("code",[e._v("top-start")]),e._v("、"),a("code",[e._v("top-end")]),e._v("、"),a("code",[e._v("bottom")]),e._v("、"),a("code",[e._v("bottom-start")]),e._v("、"),a("code",[e._v("bottom-end")]),e._v(" 或者不设")]),a("td",[e._v("String")]),a("td",[e._v("bottom-start")])]),a("tr",[a("td",[e._v("dropdownClassName")]),a("td",[e._v("下拉弹窗的样式类名")]),a("td",[e._v("String")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("dropdownAutoWidth")]),a("td",[e._v("下拉弹框宽度是否根据选项内容自动设置，该属性仅在搜索状态下有效")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("getPopupContainer")]),a("td",[e._v("指定下拉弹框挂载的 HTML 节点")]),a("td",[e._v("Function")]),a("td",[e._v("() => document.body")])]),a("tr",[a("td",[e._v("beforeSelect")]),a("td",[e._v("选择某一选项前触发的回调函数，接受 "),a("code",[e._v("value")]),e._v("、"),a("code",[e._v("options")]),e._v(" 作为参数，可用于判断选项是否可选，返回 "),a("code",[e._v("false")]),e._v(" 时禁止选择，支持返回 "),a("code",[e._v("Promise")]),e._v(" 对象")]),a("td",[e._v("Function")]),a("td",[e._v("--")])])])]),a("h3",[e._v("Cascader 事件")]),a("table",{staticClass:"example-api-events"},[a("thead",[a("tr",[a("th",{attrs:{width:"180"}},[e._v("事件名")]),a("th",[e._v("说明")]),a("th",{attrs:{width:"180"}},[e._v("类型")]),a("th",{attrs:{width:"260"}},[e._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[e._v("focus")]),a("td",[e._v("选择框获得光标时触发的事件回调")]),a("td",[e._v("Function")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("blur")]),a("td",[e._v("选择框失去光标时触发的事件回调")]),a("td",[e._v("Function")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("input")]),a("td",[e._v("选中项发生变化时触发的事件回调，可以使用 "),a("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),a("td",[e._v("Function")]),a("td",[e._v("value")])]),a("tr",[a("td",[e._v("change")]),a("td",[e._v("选中项发生变化时触发的事件回调")]),a("td",[e._v("Function")]),a("td",[e._v("value")])])])])])],1)}),[],!1,null,null,null);n.default=A.exports}}]);
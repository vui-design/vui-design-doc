(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-aa898dae"],{"0c7d":function(e,t,i){},"3da4":function(e,t,i){"use strict";i("5def")},"5cf6":function(e,t,i){"use strict";i("bbed")},"5def":function(e,t,i){},"60fd":function(e,t,i){"use strict";i("0c7d")},"76a6":function(e,t,i){},bbed:function(e,t,i){},e036:function(e,t,i){"use strict";i.r(t);var a=i("d58b"),l=i("240e"),n=i("1a42"),o={components:{Example:n.a},data:function(){return{code:'<template>\n  <ul class="example-image-basic-usage">\n    <li v-for="fit in fits" v-bind:key="fit">\n      <h4>{{fit}}</h4>\n      <vui-image v-bind:src="url" v-bind:fit="fit" />\n    </li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fits: ["fill", "contain", "cover", "none", "scale-down"],\n        url: "https://file.iviewui.com/images/image-demo-10.jpg"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-image-basic-usage { display:flex; }\n  .example-image-basic-usage li { flex:1; width:20%; text-align:center; }\n  .example-image-basic-usage h4 { margin-bottom:16px; }\n  .example-image-basic-usage .vui-image { width:100px; height:100px; }\n</style>\n',fits:["fill","contain","cover","none","scale-down"],url:"https://file.iviewui.com/images/image-demo-10.jpg"}}},r=(i("5cf6"),i("2877")),m=Object(r.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-image-basic-usage"}},[i("template",{slot:"demo"},[i("ul",{staticClass:"example-image-basic-usage"},e._l(e.fits,(function(t){return i("li",{key:t},[i("h4",[e._v(e._s(t))]),i("vui-image",{attrs:{src:e.url,fit:t}})],1)})),0)]),i("template",{slot:"title"},[e._v("基本用法")]),i("template",{slot:"description"},[i("p",[e._v("通过 "),i("code",[e._v("fit")]),e._v(" 属性对图片进行保留原始比例的剪切、缩放或者直接进行拉伸等，同原生 "),i("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank"}},[e._v("object-fit")]),e._v("。")])])],2)}),[],!1,null,null,null).exports,s={components:{Example:n.a},data:function(){return{code:'<template>\n  <ul class="example-image-placeholder">\n    <li>\n      <h4>Default Placeholder</h4>\n      <vui-image v-bind:src="url" fit="cover" />\n    </li>\n    <li>\n      <h4>Customized Placeholder</h4>\n      <vui-image v-bind:src="url" fit="cover">\n        <template slot="placeholder">Loading...</template>\n      </vui-image>\n    </li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        url: "https://file.iviewui.com/images/image-demo-10.jpg"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-image-placeholder { display:flex; }\n  .example-image-placeholder li { flex:1; width:50%; text-align:center; }\n  .example-image-placeholder h4 { margin-bottom:16px; }\n  .example-image-placeholder .vui-image { width:300px; height:200px; }\n</style>\n',url:"https://file.iviewui.com/images/image-demo-10.jpg"}},methods:{handleClick:function(e){console.log(e)}}},c=(i("f7cd"),Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-image-placeholder"}},[i("template",{slot:"demo"},[i("ul",{staticClass:"example-image-placeholder"},[i("li",[i("h4",[e._v("Default Placeholder")]),i("vui-image",{attrs:{src:e.url,fit:"cover"}})],1),i("li",[i("h4",[e._v("Customized Placeholder")]),i("vui-image",{attrs:{src:e.url,fit:"cover"}},[i("template",{slot:"placeholder"},[e._v("Loading...")])],2)],1)])]),i("template",{slot:"title"},[e._v("占位内容")]),i("template",{slot:"description"},[i("p",[e._v("可以通过 "),i("code",[e._v("placeholder")]),e._v(" 属性或插槽自定义图片加载时的占位内容。")])])],2)}),[],!1,null,null,null).exports),d={components:{Example:n.a},data:function(){return{code:'<template>\n  <ul class="example-image-error">\n    <li>\n      <h4>Default Error Tips</h4>\n      <vui-image v-bind:src="url" fit="cover" />\n    </li>\n    <li>\n      <h4>Customized Error Tips</h4>\n      <vui-image v-bind:src="url" fit="cover">\n        <vui-icon slot="error" type="image" style="font-size: 28px;" />\n      </vui-image>\n    </li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        // An image that does not exist.\n        url: "https://www.example.com/unknown.jpg"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-image-error { display:flex; }\n  .example-image-error li { flex:1; width:50%; text-align:center; }\n  .example-image-error h4 { margin-bottom:16px; }\n  .example-image-error .vui-image { width:300px; height:200px; }\n</style>\n',url:"https://www.example.com/unknown.jpg"}}},p=(i("3da4"),Object(r.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-image-error"}},[i("template",{slot:"demo"},[i("ul",{staticClass:"example-image-error"},[i("li",[i("h4",[e._v("Default Error Tips")]),i("vui-image",{attrs:{src:e.url,fit:"cover"}})],1),i("li",[i("h4",[e._v("Customized Error Tips")]),i("vui-image",{attrs:{src:e.url,fit:"cover"}},[i("vui-icon",{staticStyle:{"font-size":"28px"},attrs:{slot:"error",type:"image"},slot:"error"})],1)],1)])]),i("template",{slot:"title"},[e._v("加载失败")]),i("template",{slot:"description"},[i("p",[e._v("可以通过 "),i("code",[e._v("error")]),e._v(" 插槽自定义图片加载失败时的提示内容。")])])],2)}),[],!1,null,null,null).exports),v={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-image-lazyload">\n    <vui-image v-for="url in urls" v-bind:key="url" v-bind:src="url" lazyload />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        urls: [\n          "https://file.iviewui.com/images/image-demo-1.jpg",\n          "https://file.iviewui.com/images/image-demo-2.jpg",\n          "https://file.iviewui.com/images/image-demo-3.jpg",\n          "https://file.iviewui.com/images/image-demo-4.jpg",\n          "https://file.iviewui.com/images/image-demo-5.jpg",\n          "https://file.iviewui.com/images/image-demo-6.jpg",\n          "https://file.iviewui.com/images/image-demo-7.jpg",\n          "https://file.iviewui.com/images/image-demo-8.jpg"\n        ]\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-image-lazyload { height:400px; overflow-y:auto; }\n  .example-image-lazyload .vui-image { display:flex; min-height:200px; }\n  .example-image-lazyload .vui-image + .vui-image { margin-top:20px; }\n</style>\n',urls:["https://file.iviewui.com/images/image-demo-1.jpg","https://file.iviewui.com/images/image-demo-2.jpg","https://file.iviewui.com/images/image-demo-3.jpg","https://file.iviewui.com/images/image-demo-4.jpg","https://file.iviewui.com/images/image-demo-5.jpg","https://file.iviewui.com/images/image-demo-6.jpg","https://file.iviewui.com/images/image-demo-7.jpg","https://file.iviewui.com/images/image-demo-8.jpg"]}}},u=(i("60fd"),Object(r.a)(v,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-image-lazyload"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-image-lazyload"},e._l(e.urls,(function(e){return i("vui-image",{key:e,attrs:{src:e,lazyload:""}})})),1)]),i("template",{slot:"title"},[e._v("懒加载")]),i("template",{slot:"description"},[i("p",[e._v("可以通过 "),i("code",[e._v("lazyload")]),e._v(" 开启懒加载功能，当图片滚动到可视范围内才会加载。通过 "),i("code",[e._v("scrollContainer")]),e._v(" 来设置滚动容器，若未定义，则为最近的一个 "),i("code",[e._v("overflow")]),e._v(" 值为 "),i("code",[e._v("auto")]),e._v(" 或 "),i("code",[e._v("scroll")]),e._v(" 的父元素。")])])],2)}),[],!1,null,null,null).exports),g={mixins:[a.a],components:{Document:l.a,ExampleBasicUsage:m,ExamplePlaceholder:c,ExampleError:p,ExampleLazyload:u}},_=Object(r.a)(g,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("document",[i("h1",[e._v("Image 图片")]),i("p",[e._v("图片容器。")]),i("h2",[e._v("何时使用")]),i("p",[e._v("在保留原生 "),i("code",[e._v("img")]),e._v(" 标签的特性下，支持自定义图片填充方式、懒加载、自定义占位、加载失败等。")]),i("h2",[e._v("代码演示")])]),i("example-basic-usage"),i("example-placeholder"),i("example-error"),i("example-lazyload"),i("document",[i("h2",{attrs:{id:"example-api"}},[e._v("API")]),i("h3",[e._v("Image 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"140"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"280"}},[e._v("类型")]),i("th",{attrs:{width:"140"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("src")]),i("td",[e._v("图片源，同原生 "),i("code",[e._v("img")]),e._v(" 标签")]),i("td",[e._v("String")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("replacement")]),i("td",[e._v("当图片源为空时的替代图片，可用于设置默认图片")]),i("td",[e._v("String")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("filled")]),i("td",[e._v("图片尺寸自适应父容器宽高（即设置图片宽高为 "),i("code",[e._v("100%")]),e._v("，撑满父容器）")]),i("td",[e._v("Boolean")]),i("td",[e._v("false")])]),i("tr",[i("td",[e._v("fit")]),i("td",[e._v("对图片进行保留原始比例的剪切、缩放或者直接进行拉伸等，同原生 "),i("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit",target:"_blank"}},[e._v("object-fit")]),e._v("，可选值为 "),i("code",[e._v("fill")]),e._v("、"),i("code",[e._v("contain")]),e._v("、"),i("code",[e._v("cover")]),e._v("、"),i("code",[e._v("none")]),e._v("、"),i("code",[e._v("scale-down")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("alt")]),i("td",[e._v("规定图片无法显示时的替代文本，同原生 "),i("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/alt",target:"_blank"}},[e._v("alt")])]),i("td",[e._v("String")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("referrerPolicy")]),i("td",[e._v("同原生 "),i("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/referrerPolicy",target:"_blank"}},[e._v("referrerPolicy")])]),i("td",[e._v("String")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("lazyload")]),i("td",[e._v("是否开启懒加载")]),i("td",[e._v("Boolean")]),i("td",[e._v("false")])]),i("tr",[i("td",[e._v("scrollContainer")]),i("td",[e._v("开启懒加载后，监听 "),i("code",[e._v("scroll")]),e._v(" 事件的容器，默认为最近的一个 "),i("code",[e._v("overflow")]),e._v(" 值为 "),i("code",[e._v("auto")]),e._v(" 或 "),i("code",[e._v("scroll")]),e._v(" 的父元素")]),i("td",[e._v("String | HTMLElement | Function")]),i("td",[e._v("--")])])])])])],1)}),[],!1,null,null,null);t.default=_.exports},f7cd:function(e,t,i){"use strict";i("76a6")}}]);
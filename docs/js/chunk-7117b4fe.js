(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7117b4fe"],{"109a":function(e,t,n){"use strict";n("815a")},"5b53":function(e,t,n){"use strict";n("cd8c")},"815a":function(e,t,n){},cd8c:function(e,t,n){},eefc:function(e,t,n){"use strict";n.r(t);var s=n("d58b"),i=n("240e"),a=n("1a42"),r={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-ribbon text="Hippies">\n    <vui-card title="Pushes open the window">\n      <p>and raises the spyglass.</p>\n    </vui-card>\n  </vui-ribbon>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o=n("2877"),p=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-ribbon-basic-usage"}},[t("template",{slot:"demo"},[t("vui-ribbon",{attrs:{text:"Hippies"}},[t("vui-card",{attrs:{title:"Pushes open the window"}},[t("p",[this._v("and raises the spyglass.")])])],1)],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("简单的缎带展示。")])])],2)}),[],!1,null,null,null).exports,l={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-ribbon placement="start" text="Hippies">\n    <vui-card title="Pushes open the window">\n      <p>and raises the spyglass.</p>\n    </vui-card>\n  </vui-ribbon>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},u=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-ribbon-placement"}},[t("template",{slot:"demo"},[t("vui-ribbon",{attrs:{placement:"start",text:"Hippies"}},[t("vui-card",{attrs:{title:"Pushes open the window"}},[t("p",[this._v("and raises the spyglass.")])])],1)],1),t("template",{slot:"title"},[this._v("位置")]),t("template",{slot:"description"},[t("p",[this._v("使用 "),t("code",[this._v("placement")]),this._v(" 属性来指定缎带的位置。")])])],2)}),[],!1,null,null,null).exports,d={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-ribbon-type">\n    <vui-ribbon type="default" text="Default">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n    <vui-ribbon text="Primary">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n    <vui-ribbon type="info" text="Info">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n    <vui-ribbon type="warning" text="Warning">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n    <vui-ribbon type="success" text="Success">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n    <vui-ribbon type="error" text="Error">\n      <vui-card title="Pushes open the window">\n        <p>and raises the spyglass.</p>\n      </vui-card>\n    </vui-ribbon>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-ribbon-type .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }\n</style>\n'}}},v=(n("5b53"),Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-ribbon-type"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-ribbon-type"},[n("vui-ribbon",{attrs:{type:"default",text:"Default"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{text:"Primary"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{type:"info",text:"Info"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{type:"warning",text:"Warning"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{type:"success",text:"Success"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{type:"error",text:"Error"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1)],1)]),n("template",{slot:"title"},[e._v("预设类型")]),n("template",{slot:"description"},[n("p",[e._v("使用 "),n("code",[e._v("type")]),e._v(" 属性，可以创建不同类型的缎带。默认情况下使用 "),n("code",[e._v("primary")]),e._v(" 类型。")])])],2)}),[],!1,null,null,null).exports),c={components:{Example:a.a},data:function(){return{code:'<template>\n  <div>\n    <div class="example-ribbon-colorful">\n      <h4>Presets</h4>\n      <vui-ribbon color="blue" text="Blue">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="cyan" text="Cyan">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="geekblue" text="Geekblue">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="gold" text="Gold">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="green" text="Green">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="lime" text="Lime">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="magenta" text="Magenta">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="orange" text="Orange">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="pink" text="Pink">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="purple" text="Purple">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="red" text="Red">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="volcano" text="Volcano">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="yellow" text="Yellow">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n    </div>\n    <div class="example-ribbon-colorful">\n      <h4>Custom</h4>\n      <vui-ribbon color="#f60" text="#f60">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="#2db7f5" text="#2db7f5">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="#87d068" text="#87d068">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n      <vui-ribbon color="#108ee9" text="#108ee9">\n        <vui-card title="Pushes open the window">\n          <p>and raises the spyglass.</p>\n        </vui-card>\n      </vui-ribbon>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-ribbon-colorful + .example-ribbon-colorful { margin-top:24px; }\n  .example-ribbon-colorful h4 { margin-bottom:16px; }\n  .example-ribbon-colorful .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }\n</style>\n'}}},b=(n("109a"),Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-ribbon-colorful"}},[n("template",{slot:"demo"},[n("div",[n("div",{staticClass:"example-ribbon-colorful"},[n("h4",[e._v("Presets")]),n("vui-ribbon",{attrs:{color:"blue",text:"Blue"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"cyan",text:"Cyan"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"geekblue",text:"Geekblue"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"gold",text:"Gold"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"green",text:"Green"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"lime",text:"Lime"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"magenta",text:"Magenta"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"orange",text:"Orange"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"pink",text:"Pink"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"purple",text:"Purple"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"red",text:"Red"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"volcano",text:"Volcano"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"yellow",text:"Yellow"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1)],1),n("div",{staticClass:"example-ribbon-colorful"},[n("h4",[e._v("Custom")]),n("vui-ribbon",{attrs:{color:"#f60",text:"#f60"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"#2db7f5",text:"#2db7f5"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"#87d068",text:"#87d068"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1),n("vui-ribbon",{attrs:{color:"#108ee9",text:"#108ee9"}},[n("vui-card",{attrs:{title:"Pushes open the window"}},[n("p",[e._v("and raises the spyglass.")])])],1)],1)])]),n("template",{slot:"title"},[e._v("多彩缎带")]),n("template",{slot:"description"},[n("p",[e._v("我们添加了多种预设色彩的缎带样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。")])])],2)}),[],!1,null,null,null).exports),h={name:"BadgeZhCN",mixins:[s.a],components:{Document:i.a,ExampleBasicUsage:p,ExamplePlacement:u,ExampleType:v,ExampleColorful:b}},w=Object(o.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("document",[n("h1",[e._v("Ribbon 缎带")]),n("p",[e._v("容器右上角的缎带徽标。")]),n("h2",[e._v("代码演示")])]),n("vui-row",{attrs:{gutter:16}},[n("vui-col",{attrs:{span:12}},[n("example-basic-usage"),n("example-placement"),n("example-type")],1),n("vui-col",{attrs:{span:12}},[n("example-colorful")],1)],1),n("document",[n("h2",{attrs:{id:"example-api"}},[e._v("API")]),n("h3",[e._v("Ribbon 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"180"}},[e._v("类型")]),n("th",{attrs:{width:"140"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("placement")]),n("td",[e._v("缎带位置，可选值为 "),n("code",[e._v("start")]),e._v("、"),n("code",[e._v("end")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[e._v("end")])]),n("tr",[n("td",[e._v("type")]),n("td",[e._v("缎带类型，可选值为 "),n("code",[e._v("default")]),e._v("、"),n("code",[e._v("primary")]),e._v("、"),n("code",[e._v("info")]),e._v("、"),n("code",[e._v("warning")]),e._v("、"),n("code",[e._v("success")]),e._v("、"),n("code",[e._v("error")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[e._v("primary")])]),n("tr",[n("td",[e._v("color")]),n("td",[e._v("自定义缎带的颜色，会覆盖 "),n("code",[e._v("type")]),e._v(" 类型下的默认颜色。预设颜色详见示例〔多彩缎带〕")]),n("td",[e._v("String")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("text")]),n("td",[e._v("缎带文本")]),n("td",[e._v("String")]),n("td",[e._v("--")])])])])])],1)}),[],!1,null,null,null);t.default=w.exports}}]);
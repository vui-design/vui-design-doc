webpackJsonp([60],{"6pFr":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("q77b"),s=t("Fy5V"),c=t("5Spf"),l={components:{VuiDocCode:c.a},data:function(){return{code:"$ npm install vui-design --save\n# OR\n$ npm i vui-design -S"}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("vui-doc-code",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},u=t("VU/8")(l,o,!1,null,null,null).exports,r={components:{VuiDocCode:c.a},data:function(){return{code:'\x3c!-- import Vue.js --\x3e\n<script src="//vuejs.org/js/vue.min.js"><\/script>\n\x3c!-- import Vui Design Stylesheet --\x3e\n<link type="text/css" rel="stylesheet" href="//unpkg.com/vui-design/dist/style/vui-design.css" />\n\x3c!-- import Vui Design --\x3e\n<script src="//unpkg.com/vui-design/dist/vui-design.min.js"><\/script>\n'}}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("vui-doc-code",[this._v(this._s(this.code))])},staticRenderFns:[]},a=t("VU/8")(r,d,!1,null,null,null).exports,v={components:{VuiDocCode:c.a},data:function(){return{code:'<!DOCTYPE html>\n<html>\n<head>\n  <title>Vui Design Demo</title>\n  <meta charset="utf-8" />\n  <link type="text/css" rel="stylesheet" href="//unpkg.com/vui-design/dist/style/vui-design.css" />\n</head>\n\n<body>\n  <div id="app">\n    <vui-button @click="showModal">Click me!</vui-button>\n    <vui-modal v-model="visible" title="Welcome">Welcome to Vui Design!</vui-modal>\n  </div>\n  <script src="//vuejs.org/js/vue.min.js"><\/script>\n  <script src="//unpkg.com/vui-design/dist/vui-design.min.js"><\/script>\n  <script>\n    new Vue({\n      el: "#app",\n      data: {\n        visible: false\n      },\n      methods: {\n        showModal: function() {\n          this.visible = true;\n        }\n      }\n    });\n  <\/script>\n</body>\n</html>\n'}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("vui-doc-code",[this._v(this._s(this.code))])},staticRenderFns:[]},m=t("VU/8")(v,p,!1,null,null,null).exports,_={mixins:[i.a],components:{VuiDocMarkdown:s.a,ExampleNpm:u,ExampleCdn:a,ExampleCdnDemo:m}},h={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("vui-doc-markdown",[t("h1",[e._v("安装")]),t("h2",{attrs:{id:"example-install-npm"}},[e._v("NPM 安装")]),t("p",[e._v("推荐使用 "),t("code",[e._v("npm")]),e._v(" 来安装，享受生态圈和工具带来的便利，更好地和 "),t("code",[e._v("webpack")]),e._v(" 配合使用。")]),t("ExampleNpm"),t("p",[e._v("如果您使用了 "),t("code",[e._v("npm")]),e._v(" 安装，并使用 "),t("code",[e._v("webpack")]),e._v(" 作为构建工具，请继续阅读"),t("router-link",{attrs:{to:"/guide/getting-started"}},[e._v("快速上手")]),e._v("章节。")],1),t("h2",{attrs:{id:"example-install-cdn"}},[e._v("CDN 引入")]),t("p",[e._v("通过 "),t("a",{attrs:{href:"https://unpkg.com/vui-design/",target:"_blank"}},[e._v("https://unpkg.com/vui-design/")]),e._v(" 可以看到 Vui Design 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 "),t("code",[e._v("js")]),e._v(" 和 "),t("code",[e._v("css")]),e._v(" 文件即可开始使用：")]),t("ExampleCdn"),t("p",[e._v("通过 CDN 可以快速使用 Vui Design 写出一个示例：")]),t("ExampleCdnDemo")],1)],1)},staticRenderFns:[]},g=t("VU/8")(_,h,!1,null,null,null);n.default=g.exports}});
//# sourceMappingURL=60.670d58e1163ef6aa0c61.js.map
webpackJsonp([55],{mlRu:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("q77b"),l=t("6WqV"),s=t("lf/i"),a={components:{Coding:s.a},data:function(){return{code:"$ npm install -g @vue/cli\n# OR\n$ yarn global add @vue/cli"}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},o=t("VU/8")(a,r,!1,null,null,null).exports,u={components:{Coding:s.a},data:function(){return{code:"$ vue create vui-design-demo"}}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},v=t("VU/8")(u,c,!1,null,null,null).exports,p={components:{Coding:s.a},data:function(){return{code:"$ cd vui-design-demo\n$ npm run serve"}}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},_=t("VU/8")(p,d,!1,null,null,null).exports,m={components:{Coding:s.a},data:function(){return{code:"├── node_modules\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n├── babel.config.js\n├── package.json\n├── package-lock.json\n└── README.md"}}},g={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},h=t("VU/8")(m,g,!1,null,null,null).exports,f={components:{Coding:s.a},data:function(){return{code:"$ npm install vui-design --save"}}},b={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"shell"}},[this._v(this._s(this.code))])},staticRenderFns:[]},x=t("VU/8")(f,b,!1,null,null,null).exports,V={components:{Coding:s.a},data:function(){return{code:'import "vui-design/dist/style/vui-design.css";\nimport Vue from "vue";\nimport { Button, Modal } from "vui-design";\nimport App from "./App";\n\nVue.config.productionTip = false;\nVue.use(Button);\nVue.use(Modal);\nVue.prototype.$modal = Modal;\n\nnew Vue({\n  el: "#app",\n  render: h => h(App)\n});'}}},E={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"javascript"}},[this._v(this._s(this.code))])},staticRenderFns:[]},y=t("VU/8")(V,E,!1,null,null,null).exports,C={components:{Coding:s.a},data:function(){return{code:'<template>\n  <div id="app">\n    <vui-button type="primary" @click="showModal">Click me!</vui-button>\n    <vui-modal v-model="visible" title="Welcome">Welcome to Vui Design!</vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: "App",\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  #app {\n    padding: 20px;\n  }\n</style>\n'}}},$={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"html"}},[this._v(this._s(this.code))])},staticRenderFns:[]},D=t("VU/8")(C,$,!1,null,null,null).exports,j={components:{Coding:s.a},data:function(){return{code:'{\n  "presets": [\n    [\n      "env",\n      {\n        "modules": false,\n        "targets": {\n          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n        }\n      }\n    ],\n    "stage-2"\n  ],\n  "plugins": [\n    "transform-vue-jsx",\n    "transform-runtime",\n+    [\n+      "import",\n+      {\n+        "libraryName": "vui-design",\n+        "libraryDirectory": "src/components"\n+      }\n+    ]\n  ]\n}'}}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"json"}},[this._v(this._s(this.code))])},staticRenderFns:[]},k=t("VU/8")(j,R,!1,null,null,null).exports,w={components:{Coding:s.a},data:function(){return{code:'module.exports = {\n  presets: [\n    "@vue/cli-plugin-babel/preset"\n  ],\n  plugins: [\n+    [\n+      "import",\n+      {\n+        "libraryName": "vui-design",\n+        "libraryDirectory": "src/components"\n+      }\n+    ]\n  ]\n}'}}},U={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"javascript"}},[this._v(this._s(this.code))])},staticRenderFns:[]},F=t("VU/8")(w,U,!1,null,null,null).exports,A={components:{Coding:s.a},data:function(){return{code:"module.exports = {\n  devServer: {\n    open: true\n  },\n+  transpileDependencies: [\n+    /[/\\]node_modules[/\\]vui-design[/\\]/\n+  ]\n}"}}},M={render:function(){var e=this.$createElement;return(this._self._c||e)("coding",{attrs:{language:"javascript"}},[this._v(this._s(this.code))])},staticRenderFns:[]},B=t("VU/8")(A,M,!1,null,null,null).exports,I={mixins:[i.a],components:{Document:l.a,ExampleVueCliInstall:o,ExampleVueCliCreate:v,ExampleNpmRunServe:_,ExampleVueCliDirectory:h,ExampleVuiDesignInstall:x,ExampleImportVuiDesign:y,ExampleVuiDesignUsage:D,ExampleVueCli2BabelPluginImport:k,ExampleVueCli3BabelPluginImport:F,ExampleVueCli3VueConfig:B}},W={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("document",[t("h1",[e._v("在 vue-cli 中使用")]),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank"}},[e._v("vue-cli")]),e._v(" 是业界最优秀的 Vue 应用开发工具之一，本文会尝试在 "),t("code",[e._v("vue-cli")]),e._v(" 创建的工程中使用 Vui Design 组件，并自定义 "),t("code",[e._v("webpack")]),e._v(" 配置以满足各类工程化需求。")]),t("h2",{attrs:{id:"example-use-with-vue-cli-install"}},[e._v("安装和初始化")]),t("p",[e._v("我们需要在命令行中安装 "),t("code",[e._v("vue-cli")]),e._v(" 工具，你可能还需要安装 "),t("a",{attrs:{href:"https://github.com/yarnpkg/yarn/",target:"_blank"}},[e._v("yarn")]),e._v("。")]),t("example-vue-cli-install"),t("p",[e._v("然后新建一个项目。")]),t("example-vue-cli-create"),t("p",[e._v("工具会自动初始化一个脚手架并安装 Vue 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他镜像源自行安装。")]),t("p",[e._v("然后我们进入项目并启动。")]),t("example-npm-run-serve"),t("p",[e._v("此时浏览器会访问 "),t("code",[e._v("http://localhost:8080/")]),e._v("，看到 "),t("code",[e._v("Welcome to Your Vue.js App")]),e._v(" 的界面就算成功了。")]),t("h2",{attrs:{id:"example-use-with-vue-cli-import-vui-design"}},[e._v("引入 Vui Design")]),t("p",[e._v("以下为 vue-cli 生成的默认目录结构：")]),t("example-vue-cli-directory"),t("p",[e._v("现在使用 "),t("code",[e._v("npm")]),e._v(" 或 "),t("code",[e._v("yarn")]),e._v(" 安装并引入 Vui Design。")]),t("example-vui-design-install"),t("p",[e._v("修改 "),t("code",[e._v("src/main.js")]),e._v("，引入 Vui Design 按钮和对话框组件及其样式文件。")]),t("example-import-vui-design"),t("p",[e._v("修改 "),t("code",[e._v("src/App.vue")]),e._v(" 的内容。")]),t("example-vui-design-usage"),t("p",[e._v("好了，现在你应该能看到页面上已经有了一个蓝色的按钮，点击后弹出一个对话框。接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank"}},[e._v("vue-cli")]),e._v(" 的官方文档。")]),t("h2",{attrs:{id:"example-use-with-vue-cli-advanced-configuration"}},[e._v("高级配置")]),t("p",[e._v("我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了 Vui Design 下的所有模块，这对前端性能是个隐患。")]),t("p",[e._v("此时我们需要对 "),t("code",[e._v("vue-cli")]),e._v(" 的默认配置进行自定义。")]),t("h3",{attrs:{id:"example-use-with-vue-cli-babel-plugin-import"}},[e._v("1. 使用 babel-plugin-import")]),t("p",[t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank"}},[e._v("babel-plugin-import")]),e._v(" 是一个用于按需加载组件代码和样式的 "),t("code",[e._v("babel")]),e._v(" 插件。")]),t("h4",{attrs:{id:"example-use-with-vue-cli2"}},[e._v("1.1 使用 vue-cli 2 的小伙伴")]),t("p",[e._v("修改 "),t("code",[e._v(".babelrc")]),e._v(" 文件，配置 "),t("code",[e._v("babel-plugin-import")]),e._v("。")]),t("example-vue-cli2-babel-plugin-import"),t("h4",{attrs:{id:"example-use-with-vue-cli3"}},[e._v("1.2 使用 vue-cli 3 的小伙伴")]),t("p",[e._v("修改 "),t("code",[e._v("babel.config.js")]),e._v(" 文件，配置 "),t("code",[e._v("babel-plugin-import")]),e._v("。")]),t("example-vue-cli3-babel-plugin-import"),t("p",[e._v("在 "),t("code",[e._v("vue-cli 3")]),e._v(" 中，默认情况下 "),t("code",[e._v("babel-loader")]),e._v(" 会忽略所有 "),t("code",[e._v("node_modules")]),e._v(" 中的文件。因此，使用按需加载的方式引入 Vui Design 组件时，需要配置 "),t("code",[e._v("Babel")]),e._v(" 显式转译其中的依赖。")]),t("p",[e._v("可以在 "),t("code",[e._v("vue.config.js")]),e._v(" 文件中进行设置：")]),t("example-vue-cli3-vue-config"),t("p",[e._v("最后重启 "),t("code",[e._v("npm run serve")]),e._v(" 访问页面，Vui Design 的组件代码则会按需加载，你在控制台也不会看到这样的警告信息。关于按需加载的原理和其他方式可以阅读"),t("router-link",{attrs:{to:"/guide/getting-started"}},[e._v("这里")]),e._v("。")],1)],1)],1)},staticRenderFns:[]},N=t("VU/8")(I,W,!1,null,null,null);n.default=N.exports}});
//# sourceMappingURL=55.0339a20b536a50f9077a.js.map
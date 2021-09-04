<template>
  <div>
    <document>
      <h1>在 vue-cli 中使用</h1>
      <p><a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> 是业界最优秀的 Vue 应用开发工具之一，本文会尝试在 <code>vue-cli</code> 创建的工程中使用 Vui Design 组件，并自定义 <code>webpack</code> 配置以满足各类工程化需求。</p>
      <h2 id="example-use-with-vue-cli-install">安装和初始化</h2>
      <p>我们需要在命令行中安装 <code>vue-cli</code> 工具，你可能还需要安装 <a href="https://github.com/yarnpkg/yarn/" target="_blank">yarn</a>。</p>
      <example-vue-cli-install />
      <p>然后新建一个项目。</p>
      <example-vue-cli-create />
      <p>工具会自动初始化一个脚手架并安装 Vue 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他镜像源自行安装。</p>
      <p>然后我们进入项目并启动。</p>
      <example-npm-run-serve />
      <p>此时浏览器会访问 <code>http://localhost:8080/</code>，看到 <code>Welcome to Your Vue.js App</code> 的界面就算成功了。</p>
      <h2 id="example-use-with-vue-cli-import-vui-design">引入 Vui Design</h2>
      <p>以下为 vue-cli 生成的默认目录结构：</p>
      <example-vue-cli-directory />
      <p>现在使用 <code>npm</code> 或 <code>yarn</code> 安装并引入 Vui Design。</p>
      <example-vui-design-install />
      <p>修改 <code>src/main.js</code>，引入 Vui Design 按钮和对话框组件及其样式文件。</p>
      <example-import-vui-design />
      <p>修改 <code>src/App.vue</code> 的内容。</p>
      <example-vui-design-usage />
      <p>好了，现在你应该能看到页面上已经有了一个蓝色的按钮，点击后弹出一个对话框。接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> 的官方文档。</p>
      <h2 id="example-use-with-vue-cli-advanced-configuration">高级配置</h2>
      <p>我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了 Vui Design 下的所有模块，这对前端性能是个隐患。</p>
      <p>此时我们需要对 <code>vue-cli</code> 的默认配置进行自定义。</p>
      <h3 id="example-use-with-vue-cli-babel-plugin-import">1. 使用 babel-plugin-import</h3>
      <p><a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> 是一个用于按需加载组件代码和样式的 <code>babel</code> 插件。</p>
      <h4 id="example-use-with-vue-cli2">1.1 使用 vue-cli 2 的小伙伴</h4>
      <p>修改 <code>.babelrc</code> 文件，配置 <code>babel-plugin-import</code>。</p>
      <example-vue-cli2-babel-plugin-import />
      <h4 id="example-use-with-vue-cli3">1.2 使用 vue-cli 3 的小伙伴</h4>
      <p>修改 <code>babel.config.js</code> 文件，配置 <code>babel-plugin-import</code>。</p>
      <example-vue-cli3-babel-plugin-import />
      <p>在 <code>vue-cli 3</code> 中，默认情况下 <code>babel-loader</code> 会忽略所有 <code>node_modules</code> 中的文件。因此，使用按需加载的方式引入 Vui Design 组件时，需要配置 <code>Babel</code> 显式转译其中的依赖。</p>
      <p>可以在 <code>vue.config.js</code> 文件中进行设置：</p>
      <example-vue-cli3-vue-config />
      <p>最后重启 <code>npm run serve</code> 访问页面，Vui Design 的组件代码则会按需加载，你在控制台也不会看到这样的警告信息。关于按需加载的原理和其他方式可以阅读<router-link to="/guide/getting-started">这里</router-link>。</p>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleVueCliInstall from "./examples/vue-cli-install";
  import ExampleVueCliCreate from "./examples/vue-cli-create";
  import ExampleNpmRunServe from "./examples/npm-run-serve";
  import ExampleVueCliDirectory from "./examples/vue-cli-directory";
  import ExampleVuiDesignInstall from "./examples/vui-design-install";
  import ExampleImportVuiDesign from "./examples/import-vui-design";
  import ExampleVuiDesignUsage from "./examples/vui-design-usage";
  import ExampleVueCli2BabelPluginImport from "./examples/vue-cli2-babel-plugin-import";
  import ExampleVueCli3BabelPluginImport from "./examples/vue-cli3-babel-plugin-import";
  import ExampleVueCli3VueConfig from "./examples/vue-cli3-vue-config";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleVueCliInstall,
      ExampleVueCliCreate,
      ExampleNpmRunServe,
      ExampleVueCliDirectory,
      ExampleVuiDesignInstall,
      ExampleImportVuiDesign,
      ExampleVuiDesignUsage,
      ExampleVueCli2BabelPluginImport,
      ExampleVueCli3BabelPluginImport,
      ExampleVueCli3VueConfig
    }
  };
</script>
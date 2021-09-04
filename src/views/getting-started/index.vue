<template>
  <div>
    <document>
      <h1>快速上手</h1>
      <p>Vui Design 致力于提供给程序员愉悦的开发体验。</p>
      <blockquote>
      	<p>在开始之前，推荐先学习 <a href="https://vuejs.org/" target="_blank">Vue</a> 和 <a href="http://babeljs.io/docs/learn-es2015/" target="_blank">ES2015</a>，并正确安装和配置了 <a href="https://nodejs.org/">Node.js</a> v8 或以上。该文档假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 全家桶的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。</p>
      </blockquote>
      <h2 id="example-getting-started-vue-cli">使用 vue-cli@3</h2>
      <p>我们为新版的 vue-cli 准备了相应的 <a href="https://github.com/vui-design/vue-cli-plugin-vui-design" target="_blank">Vui Design Vue</a> 插件，你可以用它们快速地搭建一个基于 Vui Design 的 Vue 项目。</p>
      <h2 id="example-getting-started-codesandbox">在线演示</h2>
      <p>最简单的使用方式参照以下 CodeSandbox 演示：</p>
      <a href="https://codesandbox.io/s/vui-design-8tpc6" target="_blank">
        <img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Vui Design" />
      </a>
      <h2 id="example-getting-started-import">引入 Vui Design</h2>
      <h3 id="example-getting-started-import-1">1. 安装脚手架工具</h3>
      <p>使用下列命令安装 <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> 脚手架：</p>
      <example-vue-cli-install />
      <h3 id="example-getting-started-import-2">2. 创建一个项目</h3>
      <p>使用命令行进行初始化并配置项目。</p>
      <example-vue-cli-create />
      <p>若安装缓慢报错，可尝试用 <code>cnpm</code> 或别的镜像源自行安装：<code>rm -rf node_modules && cnpm install</code>。</p>
      <h3 id="example-getting-started-import-3">3. 使用组件</h3>
      <example-vui-design-install />
      <p>完整引入</p>
      <example-global-registration />
      <p>以上代码便完成了 Vui Design 的引入。需要注意的是，样式文件需要单独引入。</p>
      <p>局部导入组件</p>
      <example-local-registration />
      <blockquote>
        <p>你可以在左侧菜单中选用更多组件。</p>
      </blockquote>
      <p>注意，使用局部导入组件的方式依然会引入了 Vui Design 下的所有模块。如果你希望按需加载组件，请继续阅读下文。</p>
      <h3 id="example-getting-started-import-4">4. 组件列表</h3>
      <p><a href="https://github.com/vui-design/vui-design/blob/master/src/index.js" target="_blank">完整组件列表</a></p>
      <example-components />
      <h2 id="example-getting-started-babel-plugin-import">按需加载</h2>
      <p>如果你在开发环境的控制台看到下面的提示，那么你可能使用了上述引入 Vui Design 的两种方式（完整引入或局部导入组件）引入了其下的所有模块，这会影响应用的网络性能。</p>
      <p>
        <img src="~src/assets/images/warning.png" />
      </p>
      <p>可以通过以下的写法来按需加载组件：</p>
      <example-import-on-demand />
      <p>如果你使用了 <code>babel</code>，那么可以借助 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> 插件来进行按需加载。加入这个插件后，你仍然可以这么写：</p>
      <example-babel-plugin-import />
      <p>插件会帮你转换成 <code>vui-design/src/components/xxx</code> 的写法。</p>
      <p>特别提醒，按需加载仍然需要导入全局样式，即在 <code>main.js</code> 或根组件执行 <code>import "vui-design/dist/style/vui-design.css";</code>。</p>
      <h2 id="example-getting-started-settings">配置主题和语言包</h2>
      <ul>
        <li><router-link to="/guide/theme">定制主题</router-link></li>
        <li><router-link to="/guide/i18n">国际化语言包</router-link></li>
      </ul>
      <h2 id="example-getting-started-compatibility">兼容性</h2>
      <p>Vui Design 支持所有的现代浏览器和 IE9+。</p>
      <p>对于 IE 系列浏览器，需要提供 <a href="https://github.com/es-shims/es5-shim" target="_blank">es5-shim</a> 和 <a href="https://github.com/paulmillr/es6-shim" target="_blank">es6-shim</a> 等 Polyfills 的支持。</p>
      <p>如果你使用了 babel，强烈推荐使用 <a href="https://babeljs.io/docs/en/babel-polyfill/" target="_blank">babel-polyfill</a> 和 <a href="https://babeljs.io/docs/en/babel-plugin-transform-runtime/" target="_blank">babel-plugin-transform-runtime</a> 来替代以上两个 shim。</p>
      <blockquote>
        <p>避免同时使用 babel 和 shim 两种兼容方法</p>
      </blockquote>
      <h2 id="example-getting-started-tips">小贴士</h2>
      <ul>
        <li>你可以享用 <code>npm</code> 生态圈里的所有模块。</li>
        <li>虽然 Vue 官方推荐使用模板语法来编写组件，不过对于复杂组件，<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx" target="">jsx</a> 未必不是一个更好的选择。</li>
      </ul>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleVueCliInstall from "./examples/vue-cli-intall";
  import ExampleVueCliCreate from "./examples/vue-cli-create";
  import ExampleVuiDesignInstall from "./examples/vui-design-install";
  import ExampleGlobalRegistration from "./examples/global-registration";
  import ExampleLocalRegistration from "./examples/local-registration";
  import ExampleComponents from "./examples/components";
  import ExampleImportOnDemand from "./examples/import-on-demand";
  import ExampleBabelPluginImport from "./examples/babel-plugin-import";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleVueCliInstall,
      ExampleVueCliCreate,
      ExampleVuiDesignInstall,
      ExampleGlobalRegistration,
      ExampleLocalRegistration,
      ExampleComponents,
      ExampleImportOnDemand,
      ExampleBabelPluginImport
    }
  };
</script>
<template>
  <div>
    <document>
      <h1>Authorizer 权限校验</h1>
      <p>用于对页面操作按钮、敏感数据或功能模块进行权限校验，判断是否允许用户点击或访问。</p>
      <h2>如何使用</h2>
      <h3>1. 注册全局校验函数</h3>
      <p>在工程入口文件（一般为 <code>src/main.js</code>）中，引入 Vui Design 时注册全局校验函数，如下所示：</p>
      <example-register />
      <h3>2. 组件使用</h3>
      <example-use />
      <p>如上例，若用户为 <code>admin</code> 管理员角色，将展示默认插槽中的编辑按钮，反之显示 <code>replacement</code> 插槽中的查看按钮。</p>
      <h2>代码演示</h2>
      <p>本文档默认已全局设定用户角色为 <code>["admin", "user"]</code>，即管理员和普通用户！</p>
    </document>
    <example-basic-usage />
    <example-toggle />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Authorizer 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>子元素或子组件需要的权限标识，支持数组格式</td>
            <td>String | Array</td>
            <td>--</td>
          </tr>
          <tr>
            <td>authorize</td>
            <td>自定义权限校验函数，接收 <code>value</code> 属性作为参数，未定义时将使用全局校验函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>replacement</td>
            <td>权限校验未通过时的替代元素或组件，允许为空</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleRegister from "./examples/register";
  import ExampleUse from "./examples/use";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleToggle from "./examples/toggle";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleRegister,
      ExampleUse,
      ExampleBasicUsage,
      ExampleToggle
    }
  };
</script>
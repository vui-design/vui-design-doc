<template>
  <div>
    <document>
      <h1>Result 结果</h1>
      <p>用于反馈一系列操作任务的处理结果。</p>
      <h2>何时使用</h2>
      <p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p>
      <h2>代码演示</h2>
    </document>
    <ExampleResultInfo />
    <ExampleResultWarning />
    <ExampleResultSuccess />
    <ExampleResultError />
    <ExampleResultComingsoon />
    <ExampleResult403 />
    <ExampleResult404 />
    <ExampleResult500 />
    <ExampleResultCustomIcon />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Result 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="100">属性</th>
            <th>说明</th>
            <th width="150">类型</th>
            <th width="100">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>status</td>
            <td>结果状态，决定图标和颜色，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>comingsoon</code>、<code>403</code>、<code>404</code>、<code>500</code> 或者不设</td>
            <td>String</td>
            <td><code>info</code></td>
          </tr>
          <tr>
            <td>icon</td>
            <td>自定义图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>描述信息</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>附加内容，一般用于放置操作按钮</td>
            <td>String | Slot</td>
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
  import ExampleResultInfo from "./examples/info";
  import ExampleResultWarning from "./examples/warning";
  import ExampleResultSuccess from "./examples/success";
  import ExampleResultError from "./examples/error";
  import ExampleResultComingsoon from "./examples/comingsoon";
  import ExampleResult403 from "./examples/403";
  import ExampleResult404 from "./examples/404";
  import ExampleResult500 from "./examples/500";
  import ExampleResultCustomIcon from "./examples/custom-icon";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleResultInfo,
      ExampleResultWarning,
      ExampleResultSuccess,
      ExampleResultError,
      ExampleResultComingsoon,
      ExampleResult403,
      ExampleResult404,
      ExampleResult500,
      ExampleResultCustomIcon
    }
  };
</script>
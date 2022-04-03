<template>
  <div>
    <document>
      <h1>Result 结果</h1>
      <p>用于反馈一系列操作任务的处理结果。</p>
      <h2>何时使用</h2>
      <p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p>
      <h2>代码演示</h2>
    </document>
    <example-info />
    <example-warning />
    <example-success />
    <example-error />
    <example-comingsoon />
    <example-403 />
    <example-404 />
    <example-500 />
    <example-custom-icon />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Result 属性</h3>
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
            <td>status</td>
            <td>结果状态，决定图标和颜色，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>comingsoon</code>、<code>403</code>、<code>404</code>、<code>500</code> 或者不设</td>
            <td>String</td>
            <td>info</td>
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
  import ExampleInfo from "./examples/info";
  import ExampleWarning from "./examples/warning";
  import ExampleSuccess from "./examples/success";
  import ExampleError from "./examples/error";
  import ExampleComingsoon from "./examples/comingsoon";
  import Example403 from "./examples/403";
  import Example404 from "./examples/404";
  import Example500 from "./examples/500";
  import ExampleCustomIcon from "./examples/custom-icon";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleInfo,
      ExampleWarning,
      ExampleSuccess,
      ExampleError,
      ExampleComingsoon,
      Example403,
      Example404,
      Example500,
      ExampleCustomIcon
    }
  };
</script>
<template>
  <div>
    <document>
      <h1>Steps 步骤条</h1>
      <p>引导用户按照流程完成任务的导航条。</p>
      <h2>何时使用</h2>
      <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <example-small />
    <example-icon />
    <example-error />
    <example-vertical />
    <example-vertical-small />
    <example-dot />
    <example-clickable />
    <example-control />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Steps 属性</h3>
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
            <td>type</td>
            <td>步骤条类型，可选值为 <code>default</code>、<code>dot</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>步骤条的方向，目前支持水平（<code>horizontal</code>）和竖直（<code>vertical</code>）两种方向</td>
            <td>String</td>
            <td>horizontal</td>
          </tr>
          <tr>
            <td>size</td>
            <td>步骤条的尺寸，可选值为 <code>small</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>step</td>
            <td>当前步骤，从 <code>0</code> 开始记数。在子 <code>Step</code> 组件中，可以通过 <code>status</code> 属性覆盖状态</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>status</td>
            <td>当前步骤的状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设</td>
            <td>String</td>
            <td>process</td>
          </tr>
          <tr>
            <td>changeOnTitle</td>
            <td>仅在步骤标题上点击时触发 <code>change</code> 事件，默认点击步骤标题、图标或描述时均触发。该属性仅在设置了 <code>onChange</code> 事件时有效</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Steps 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="140">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>点击步骤时触发的事件回调函数</td>
            <td>Function</td>
            <td>index</td>
          </tr>
        </tbody>
      </table>
      <h3>Step 属性</h3>
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
            <td>icon</td>
            <td>步骤图标，可选</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>步骤标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>步骤详细描述，可选</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>status</td>
            <td>步骤状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设。若不设置该属性，则根据父级 <code>Steps</code> 组件的 <code>step</code> 和 <code>status</code> 属性自动指定状态</td>
            <td>String</td>
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
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleSmall from "./examples/small";
  import ExampleIcon from "./examples/icon";
  import ExampleError from "./examples/error";
  import ExampleVertical from "./examples/vertical";
  import ExampleVerticalSmall from "./examples/vertical-small";
  import ExampleDot from "./examples/dot";
  import ExampleClickable from "./examples/clickable";
  import ExampleControl from "./examples/control";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleSmall,
      ExampleIcon,
      ExampleError,
      ExampleVertical,
      ExampleVerticalSmall,
      ExampleDot,
      ExampleClickable,
      ExampleControl
    }
  };
</script>
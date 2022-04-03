<template>
  <div>
    <document>
      <h1>Popconfirm 气泡确认框</h1>
      <p>点击元素，弹出气泡式的确认框。</p>
      <h2>何时使用</h2>
      <ul>
        <li>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</li>
        <li>和 Modal Confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-icon />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-placement />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Popconfirm 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>visible</td>
            <td>是否可见，可以使用 <code>v-model</code> 双向绑定</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>确认框的图标或图标类型</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>确认框的描述</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancelButtonType</td>
            <td>取消按钮类型</td>
            <td>String</td>
            <td>text</td>
          </tr>
          <tr>
            <td>cancelText</td>
            <td>取消按钮文本</td>
            <td>String</td>
            <td>取消</td>
          </tr>
          <tr>
            <td>okButtonType</td>
            <td>确认按钮类型</td>
            <td>String</td>
            <td>primary</td>
          </tr>
          <tr>
            <td>okText</td>
            <td>确认按钮文本</td>
            <td>String</td>
            <td>确认</td>
          </tr>
          <tr>
            <td>minWidth</td>
            <td>确认框的最小宽度</td>
            <td>String | Number</td>
            <td>160</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td>确认框的最大宽度</td>
            <td>String | Number</td>
            <td>320</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code> 或者不设</td>
            <td>String</td>
            <td>top</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定确认框挂载的 HTML 节点，默认渲染到 <code>body</code> 上</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
        </tbody>
      </table>
      <h3>Popconfirm 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cancel</td>
            <td>点击取消按钮的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>点击确认按钮的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>input</td>
            <td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
            <td>Function</td>
            <td>visible</td>
          </tr>
          <tr>
            <td>change</td>
            <td>可见状态发生变化时触发的事件回调</td>
            <td>Function</td>
            <td>visible</td>
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
  import ExamplePlacement from "./examples/placement";
  import ExampleIcon from "./examples/icon";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExamplePlacement,
      ExampleIcon
    }
  };
</script>
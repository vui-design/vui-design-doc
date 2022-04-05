<template>
  <div>
    <document>
      <h1>Tooltip 文字提示</h1>
      <p>简单的文字提示气泡框。</p>
      <h2>何时使用</h2>
      <ul>
        <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
        <li>可用来代替系统默认的 <code>title</code> 提示，提供一个按钮/文字/操作的文案解释。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-customized-content />
        <example-placement />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-colorful />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Tooltip 属性</h3>
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
            <td>color</td>
            <td>颜色，预设颜色详见示例〔多彩文字提示〕</td>
            <td>String</td>
            <td>dark</td>
          </tr>
          <tr>
            <td>content</td>
            <td>提示内容</td>
            <td>String | Number | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td>提示框的最大宽度</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code> 或者不设</td>
            <td>String</td>
            <td>top</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定提示框浮层挂载的 HTML 节点，默认渲染到 <code>body</code> 上</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
          <tr>
            <td>beforeOpen</td>
            <td>文字提示打开前触发的回调函数，可用于判断是否允许打开，返回 <code>false</code> 时禁止打开，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeClose</td>
            <td>文字提示关闭前触发的回调函数，可用于判断是否允许关闭，返回 <code>false</code> 时禁止关闭，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Tooltip 事件</h3>
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
  import ExampleCustomizedContent from "./examples/customized-content";
  import ExamplePlacement from "./examples/placement";
  import ExampleColorful from "./examples/colorful";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleCustomizedContent,
      ExamplePlacement,
      ExampleColorful
    }
  };
</script>
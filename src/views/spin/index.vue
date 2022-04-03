<template>
  <div>
    <document>
      <h1>Spin 加载中</h1>
      <p>用于页面和区块的加载中状态。</p>
      <h2>何时使用</h2>
      <p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-size />
        <example-inside />
        <example-nested />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-delay />
        <example-indicator />
        <example-message />
        <example-fullscreen />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Spin 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>spinning</td>
            <td>是否为加载中状态</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>indicator</td>
            <td>自定义加载指示符</td>
            <td>Function | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>message</td>
            <td>自定义消息文案</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>全局方法</h3>
      <p>除了标准组件的使用方式，Vui Design 还精心封装了一个实例方法，用来创建一次性的全屏加载提示。实例以隐式创建 <code>Spin</code> 组件的方式在全局显示一个加载提示，并在取消时移除。您可以直接通过调用以下方法来使用：</p>
      <p><code>const spin = this.$spin.spinning(options)</code></p>
      <p>以上方法隐式的创建及维护组件，参数 <code>options</code> 可以是字符串或对象。当为字符串时，仅仅表示消息文案；当为对象时，具体说明如下：</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>large</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>indicator</td>
            <td>自定义加载指示符</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>message</td>
            <td>自定义消息文案</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>background</td>
            <td>自定义遮罩背景</td>
            <td>String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>以上方法调用后，会返回一个引用，可以通过该引用取消对应的 <code>Spin</code> 组件的加载状态，详见上述示例。</p>
      <p><code>spin.cancel()</code></p>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleSize from "./examples/size";
  import ExampleInside from "./examples/inside";
  import ExampleNested from "./examples/nested";
  import ExampleDelay from "./examples/delay";
  import ExampleIndicator from "./examples/indicator";
  import ExampleMessage from "./examples/message";
  import ExampleFullscreen from "./examples/fullscreen";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleSize,
      ExampleInside,
      ExampleNested,
      ExampleDelay,
      ExampleIndicator,
      ExampleMessage,
      ExampleFullscreen
    }
  };
</script>
<template>
  <div>
    <document>
      <h1>Switch 开关</h1>
      <p>开关选择器。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要表示开关状态/两种状态之间的切换时。</li>
        <li>和 Checkbox 的区别是，切换 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <ExampleSwitchBasicUsage />
        <ExampleSwitchSize />
        <ExampleSwitchText />
        <ExampleSwitchDisabled />
      </vui-col>
      <vui-col v-bind:span="12">
        <ExampleSwitchLoading />
        <ExampleSwitchStateValue />
        <ExampleSwitchColor />
        <ExampleSwitchBeforeChange />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Switch 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="220">类型</th>
            <th width="248">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>开关尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td><code>medium</code></td>
          </tr>
          <tr>
            <td>checked</td>
            <td>用于指定开关是否打开，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否处于加载状态</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>checkedValue</td>
            <td>用于设置开关打开时的值，例如使用 <code>0</code> 和 <code>1</code> 来标记开关的打开状态</td>
            <td>Boolean | String | Number</td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td>uncheckedValue</td>
            <td>用于设置开关关闭时的值，例如使用 <code>0</code> 和 <code>1</code> 来标记开关的打开状态</td>
            <td>Boolean | String | Number</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>checkedColor</td>
            <td>用于设置开关打开时的 <code>16</code> 进制颜色值</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>uncheckedColor</td>
            <td>用于设置开关关闭时的 <code>16</code> 进制颜色值</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>checkedText</td>
            <td>用于设置开关打开时的显示内容</td>
            <td>Slot | String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>uncheckedText</td>
            <td>用于设置开关关闭时的显示内容</td>
            <td>Slot | String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeChange</td>
            <td>切换开关状态前触发的回调函数，可用于判断是否允许切换，返回 <code>false</code> 时禁止切换，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Switch 事件</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="220">类型</th>
            <th width="248">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>在开关状态发生变化时触发的事件回调函数，可以使用<code>v-model</code>双向绑定数据</td>
            <td>Function</td>
            <td><code>checkedValue</code> | <code>uncheckedValue</code></td>
          </tr>
          <tr>
            <td>change</td>
            <td>在开关状态发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td><code>checkedValue</code> | <code>uncheckedValue</code></td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleSwitchBasicUsage from "./examples/basic-usage";
  import ExampleSwitchSize from "./examples/size";
  import ExampleSwitchText from "./examples/text";
  import ExampleSwitchDisabled from "./examples/disabled";
  import ExampleSwitchLoading from "./examples/loading";
  import ExampleSwitchStateValue from "./examples/state-value";
  import ExampleSwitchColor from "./examples/color";
  import ExampleSwitchBeforeChange from "./examples/before-change";

  export default {
    name: "SwitchZhCN",
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleSwitchBasicUsage,
      ExampleSwitchSize,
      ExampleSwitchText,
      ExampleSwitchDisabled,
      ExampleSwitchLoading,
      ExampleSwitchStateValue,
      ExampleSwitchColor,
      ExampleSwitchBeforeChange
    }
  };
</script>
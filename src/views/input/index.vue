<template>
  <div>
    <document>
      <h1>Input 输入框</h1>
      <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要用户输入表单域内容时；</li>
        <li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-password />
        <example-prepend-append />
        <example-prefix-suffix />
        <example-size />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-bordered />
        <example-clearable />
        <example-disabled />
        <example-group />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Input 属性</h3>
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
            <td>type</td>
            <td>输入框类型，同原生 <code>input</code> 标签的 <code>type</code> 属性</td>
            <td>String</td>
            <td>text</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>输入框占位文本</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>输入框内容，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>maxLength</td>
            <td>最大输入长度</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>prepend</td>
            <td>设置前置标签</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>append</td>
            <td>设置后置标签</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>设置前缀图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>设置后缀图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>size</td>
            <td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否有边框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>是否自动获得焦点</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否允许清空</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>设置文本框为只读状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置文本框为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Input 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="140">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mouseenter</td>
            <td>鼠标移入文本框时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>mouseleave</td>
            <td>鼠标移出文本框时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>文本框获取焦点时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>文本框失去焦点时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>keydown</td>
            <td>键盘按下时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>keyup</td>
            <td>键盘弹起时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>enter</td>
            <td>按下回车键时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>clear</td>
            <td>点击清空按钮时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>input</td>
            <td>文本框内容输入时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>文本框内容变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
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
  import ExamplePassword from "./examples/password";
  import ExamplePrependAppend from "./examples/prepend-append";
  import ExamplePrefixSuffix from "./examples/prefix-suffix";
  import ExampleSize from "./examples/size";
  import ExampleBordered from "./examples/bordered";
  import ExampleClearable from "./examples/clearable";
  import ExampleDisabled from "./examples/disabled";
  import ExampleGroup from "./examples/group";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExamplePassword,
      ExamplePrependAppend,
      ExamplePrefixSuffix,
      ExampleSize,
      ExampleBordered,
      ExampleClearable,
      ExampleDisabled,
      ExampleGroup
    }
  };
</script>
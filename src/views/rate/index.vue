<template>
  <div>
    <document>
      <h1>Rate 评分</h1>
      <p>评分组件。</p>
      <h2>何时使用</h2>
      <ul>
        <li>对评价进行展示；</li>
        <li>对事物进行快速的评级操作。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-half />
        <example-text />
        <example-clearable />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-disabled />
        <example-character-function />
        <example-character />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Rate 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>当前值，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>count</td>
            <td>Star 总数</td>
            <td>Number</td>
            <td>5</td>
          </tr>
          <tr>
            <td>character</td>
            <td>自定义字符</td>
            <td>String | Function | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tooltips</td>
            <td>自定义每项的提示信息</td>
            <td>Array</td>
            <td>--</td>
          </tr>
          <tr>
            <td>allowHalf</td>
            <td>是否允许半选</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否允许再次点击取消评分</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否只读，无法进行交互</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Rate 事件</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">事件名</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="160">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>评分改变时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>评分改变时触发的事件回调函数</td>
            <td>Function</td>
            <td>value</td>
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
  import ExampleHalf from "./examples/half";
  import ExampleText from "./examples/text";
  import ExampleClearable from "./examples/clearable";
  import ExampleDisabled from "./examples/disabled";
  import ExampleCharacterFunction from "./examples/character-function";
  import ExampleCharacter from "./examples/character";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleHalf,
      ExampleText,
      ExampleClearable,
      ExampleDisabled,
      ExampleCharacterFunction,
      ExampleCharacter
    }
  };
</script>
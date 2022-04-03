<template>
  <div>
    <document>
      <h1>Time 相对时间</h1>
      <p>用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</p>
      <h2>何时使用</h2>
      <p>使用相对时间标记一条信息或资讯的发布时间。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-type />
        <example-interval />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Time 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="220">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>显示类型，可选值为 <code>relative</code>、<code>date</code>、<code>datetime</code> 或者不设</td>
            <td>String</td>
            <td>relative</td>
          </tr>
          <tr>
            <td>value</td>
            <td>需要对比的时间，可以是日期字符串、时间戳或 <code>Date</code> 对象</td>
            <td>String | Number | Date</td>
            <td>--</td>
          </tr>
          <tr>
            <td>interval</td>
            <td>自动更新间隔，单位：秒</td>
            <td>Number</td>
            <td>60</td>
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
  import ExampleType from "./examples/type";
  import ExampleInterval from "./examples/interval";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleType,
      ExampleInterval
    }
  };
</script>
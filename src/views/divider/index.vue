<template>
  <div>
    <document>
      <h1>Divider 分割线</h1>
      <p>区隔内容的分割线。</p>
      <h2>何时使用</h2>
      <ul>
        <li>对不同章节的文本段落进行分割。</li>
        <li>对行内文字/链接进行分割，例如表格的操作列。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-vertical />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-with-text />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Divider 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="80">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>分割线类型，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
            <td>String</td>
            <td><code>horizontal</code></td>
          </tr>
          <tr>
            <td>dashed</td>
            <td>是否使用虚线样式的分割线</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>orientation</td>
            <td>分割线文本的位置，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td><code>center</code></td>
          </tr>
          <tr>
            <td>gutter</td>
            <td>自定义分割线距离两侧内容的间隔</td>
            <td>String | Number</td>
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
  import ExampleVertical from "./examples/vertical";
  import ExampleWithText from "./examples/with-text";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleVertical,
      ExampleWithText
    }
  };
</script>
<template>
  <div>
    <document>
      <h1>Ribbon 缎带</h1>
      <p>容器右上角的缎带徽标。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-placement />
        <example-type />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-colorful />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Ribbon 属性</h3>
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
            <td>placement</td>
            <td>缎带位置，可选值为 <code>start</code>、<code>end</code> 或者不设</td>
            <td>String</td>
            <td>end</td>
          </tr>
          <tr>
            <td>type</td>
            <td>缎带类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
            <td>String</td>
            <td>primary</td>
          </tr>
          <tr>
            <td>color</td>
            <td>自定义缎带的颜色，会覆盖 <code>type</code> 类型下的默认颜色。预设颜色详见示例〔多彩缎带〕</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>text</td>
            <td>缎带文本</td>
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
  import ExamplePlacement from "./examples/placement";
  import ExampleType from "./examples/type";
  import ExampleColorful from "./examples/colorful";

  export default {
    name: "BadgeZhCN",
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExamplePlacement,
      ExampleType,
      ExampleColorful
    }
  };
</script>
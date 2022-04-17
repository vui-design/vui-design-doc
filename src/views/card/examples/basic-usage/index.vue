<template>
  <example v-bind:code="code" id="example-card-basic-usage">
    <template slot="demo">
      <vui-card icon="menu-unfold" title="Card title">
        <p>Card content...</p>
        <p>Card content...</p>
        <p>Card content...</p>
        <a href="javascript:;" slot="extra">More</a>
      </vui-card>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>自定义图标、标题、主体和附加内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-card-basic-usage .vui-card + .vui-card { margin-top:24px; }
</style>
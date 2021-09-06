<template>
  <example v-bind:code="code" id="example-tag-size">
    <template slot="demo">
      <div class="example-tag-size">
        <vui-tag size="small">Small</vui-tag>
        <vui-tag>Medium</vui-tag>
        <vui-tag size="large">Large</vui-tag>
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>设置 <code>size</code> 属性可以显示不同尺寸的标签，默认为中等尺寸。</p>
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
  .example-tag-size { display:flex; align-items:center; }
  .example-tag-size .vui-tag { margin-right:8px; }
</style>
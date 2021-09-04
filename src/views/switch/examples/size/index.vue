<template>
  <example v-bind:code="code" id="example-switch-size">
    <template slot="demo">
      <div class="example-switch-size">
        <vui-switch size="small" />
        <vui-switch />
        <vui-switch size="large" />
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 使用小号或大号开关。</p>
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
  .example-switch-size .vui-switch + .vui-switch { margin-left:16px; }
</style>
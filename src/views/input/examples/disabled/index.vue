<template>
  <example v-bind:code="code" id="example-input-disabled">
    <template slot="demo">
      <div class="example-input-disabled">
        <vui-input disabled placeholder="Enter something..." />
        <vui-input disabled prepend="https://github.com/u/" placeholder="Enter something..." />
        <vui-input disabled prefix="mic" placeholder="Enter something..." />
      </div>
    </template>
    <template slot="title">禁用状态</template>
    <template slot="description">
      <p>通过添加 <code>disabled</code> 属性将文本框设为禁用状态。</p>
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
  .example-input-disabled .vui-input:not(:first-child) { margin-top:24px; }
</style>
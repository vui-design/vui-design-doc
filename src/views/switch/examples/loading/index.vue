<template>
  <vui-doc-example v-bind:code="code" id="example-switch-loading">
    <template slot="demo">
      <div class="example-switch-loading">
        <vui-switch loading />
        <vui-switch checked loading />
      </div>
    </template>
    <template slot="title">加载状态</template>
    <template slot="description">
      <p>标识开关操作仍在执行当中。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    components: {
      VuiDocExample
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-switch-loading .vui-switch + .vui-switch { margin-left:16px; }
</style>
<template>
  <example v-bind:code="code" id="example-radio-disabled">
    <template slot="demo">
      <vui-space>
        <vui-radio checked disabled>Radio</vui-radio>
        <vui-radio disabled>Radio</vui-radio>
      </vui-space>
    </template>
    <template slot="title">禁用状态</template>
    <template slot="description">
      <p>通过设置 <code>disabled</code> 属性来禁用单选框。</p>
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
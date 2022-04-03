<template>
  <example v-bind:code="code" id="example-spin-basic-usage">
    <template slot="demo">
      <vui-spin />
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>一个简单的加载状态。</p>
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
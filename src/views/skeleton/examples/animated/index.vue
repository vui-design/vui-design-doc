<template>
  <example v-bind:code="code" id="example-skeleton-animated">
    <template slot="demo">
      <vui-skeleton animated />
    </template>
    <template slot="title">动画效果</template>
    <template slot="description">
      <p>显示动画效果。</p>
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
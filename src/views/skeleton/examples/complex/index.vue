<template>
  <example v-bind:code="code" id="example-skeleton-complex">
    <template slot="demo">
      <vui-skeleton avatar v-bind:paragraph="{ rows: 4 }" />
    </template>
    <template slot="title">复杂的组合</template>
    <template slot="description">
      <p>更复杂的组合。</p>
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
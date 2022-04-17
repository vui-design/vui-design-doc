<template>
  <example v-bind:code="code" id="example-card-simple">
    <template slot="demo">
      <vui-card>
        <p>Card content...</p>
        <p>Card content...</p>
        <p>Card content...</p>
      </vui-card>
    </template>
    <template slot="title">简洁卡片</template>
    <template slot="description">
      <p>只含有主体内容。</p>
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
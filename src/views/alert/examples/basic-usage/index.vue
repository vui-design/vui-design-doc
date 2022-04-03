<template>
  <example v-bind:code="code" id="example-alert-basic-usage">
    <template slot="demo">
      <vui-alert message="Infomation" />
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>基本用法，适用于简短的警告提示。</p>
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
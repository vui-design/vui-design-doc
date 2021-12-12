<template>
  <example v-bind:code="code" id="example-textarea-bordered">
    <template slot="demo">
      <vui-textarea v-model="value" v-bind:bordered="false" placeholder="Borderless" />
    </template>
    <template slot="title">无边框</template>
    <template slot="description">
      <p>无边框的文本域。</p>
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
        code,
        value: ""
      };
    }
  };
</script>
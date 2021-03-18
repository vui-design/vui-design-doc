<template>
  <vui-doc-example v-bind:code="code" id="example-checkbox-basic-usage">
    <template slot="demo">
      <vui-checkbox v-model="value">Checkbox</vui-checkbox>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    name: "ExampleCheckboxBasicUsage",
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
        value: false
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
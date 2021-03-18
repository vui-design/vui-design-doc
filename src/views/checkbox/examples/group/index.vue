<template>
  <vui-doc-example v-bind:code="code" id="example-checkbox-group">
    <template slot="demo">
      <vui-checkbox-group v-model="value">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </template>
    <template slot="title">多选组合</template>
    <template slot="description">
      <p>多选组合。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    name: "ExampleCheckboxGroup",
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
        value: [1]
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
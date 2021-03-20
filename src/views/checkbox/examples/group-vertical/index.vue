<template>
  <vui-doc-example v-bind:code="code" id="example-checkbox-group-vertical">
    <template slot="demo">
      <vui-checkbox-group layout="vertical" v-model="value">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </template>
    <template slot="title">垂直排列</template>
    <template slot="description">
      <p>设置 <code>layout="vertical"</code> 可以垂直排列多选组合。</p>
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
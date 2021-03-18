<template>
  <vui-doc-example v-bind:code="code" id="example-radio-disabled">
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
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    name: "ExampleRadioDisabled",
    components: {
      VuiDocExample
    },
    data() {
      return {
        code
      };
    }
  };
</script>
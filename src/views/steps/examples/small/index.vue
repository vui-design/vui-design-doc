<template>
  <example v-bind:code="code" id="example-steps-small">
    <template slot="demo">
      <vui-steps size="small" v-bind:step="1">
        <vui-step title="Finished" description="This is a description." />
        <vui-step title="In Progress" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
      </vui-steps>
    </template>
    <template slot="title">小型步骤条</template>
    <template slot="description">
      <p>设置 <code>size</code> 属性为 <code>small</code> 启用小型步骤条。</p>
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
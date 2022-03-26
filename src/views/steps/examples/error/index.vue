<template>
  <example v-bind:code="code" id="example-steps-error">
    <template slot="demo">
      <vui-steps v-bind:step="1" status="error">
        <vui-step title="Finished" description="This is a description." />
        <vui-step title="In Progress" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
      </vui-steps>
    </template>
    <template slot="title">步骤运行错误</template>
    <template slot="description">
      <p>使用 <code>Steps</code> 的 <code>status</code> 属性来指定当前步骤的状态。</p>
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
<template>
  <example v-bind:code="code" id="example-progress-circle-small">
    <template slot="demo">
      <div class="example-progress-circle-small">
        <vui-progress type="circle" size="small" v-bind:percentage="75" />
        <vui-progress type="circle" size="small" v-bind:percentage="75" status="exception" />
        <vui-progress type="circle" size="small" v-bind:percentage="100" />
      </div>
    </template>
    <template slot="title">小型进度环</template>
    <template slot="description">
      <p>适合放在较狭窄的区域内。</p>
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

<style>
  .example-progress-circle-small { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle-small .vui-progress + .vui-progress { margin-left:16px; }
</style>
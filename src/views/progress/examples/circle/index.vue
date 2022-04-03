<template>
  <example v-bind:code="code" id="example-progress-circle">
    <template slot="demo">
      <div class="example-progress-circle">
        <vui-progress type="circle" v-bind:percentage="75" />
        <vui-progress type="circle" v-bind:percentage="75" status="exception" />
        <vui-progress type="circle" v-bind:percentage="100" />
      </div>
    </template>
    <template slot="title">进度环</template>
    <template slot="description">
      <p>环形的进度。</p>
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
  .example-progress-circle { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle .vui-progress + .vui-progress { margin-left:16px; }
</style>
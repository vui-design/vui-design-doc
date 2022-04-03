<template>
  <example v-bind:code="code" id="example-progress-line">
    <template slot="demo">
      <div class="example-progress-line">
        <vui-progress v-bind:percentage="30" />
        <vui-progress v-bind:percentage="50" status="active" />
        <vui-progress v-bind:percentage="70" status="exception" />
        <vui-progress v-bind:percentage="100" />
        <vui-progress v-bind:percentage="50" v-bind:showInfo="false" />
      </div>
    </template>
    <template slot="title">进度条</template>
    <template slot="description">
      <p>处在不同状态下的进度条，当 <code>percentage</code> 为 <code>100</code> 时，自动将状态置为 <code>success</code>。</p>
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
  .example-progress-line .vui-progress + .vui-progress { margin-top:16px; }
</style>
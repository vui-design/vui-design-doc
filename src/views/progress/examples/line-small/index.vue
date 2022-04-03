<template>
  <example v-bind:code="code" id="example-progress-line-small">
    <template slot="demo">
      <div class="example-progress-line-small">
        <vui-progress size="small" v-bind:percentage="30" />
        <vui-progress size="small" v-bind:percentage="50" status="active" />
        <vui-progress size="small" v-bind:percentage="70" status="exception" />
        <vui-progress size="small" v-bind:percentage="100" />
        <vui-progress size="small" v-bind:percentage="50" v-bind:showInfo="false" />
      </div>
    </template>
    <template slot="title">小型进度条</template>
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
  .example-progress-line-small { width: 240px; }
  .example-progress-line-small .vui-progress + .vui-progress { margin-top:16px; }
</style>
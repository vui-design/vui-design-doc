<template>
  <example v-bind:code="code" id="example-progress-stroke-color">
    <template slot="demo">
      <div class="example-progress-stroke-color">
        <vui-progress v-bind:percentage="50" strokeColor="#722ed1" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeColor="#f8ac59" />
          <vui-progress type="dashboard" v-bind:percentage="100" strokeColor="#1ab394" />
        </vui-space>
      </div>
    </template>
    <template slot="title">自定义颜色</template>
    <template slot="description">
      <p>通过 <code>strokeColor</code> 自定义颜色（会覆盖 <code>status</code> 状态下的默认颜色）。</p>
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
  .example-progress-stroke-color .vui-progress-line { margin-bottom:16px; }
</style>
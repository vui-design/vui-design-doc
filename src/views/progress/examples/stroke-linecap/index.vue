<template>
  <example v-bind:code="code" id="example-progress-stroke-linecap">
    <template slot="demo">
      <div class="example-progress-stroke-linecap">
        <vui-progress v-bind:percentage="50" strokeLinecap="square" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeLinecap="square" />
          <vui-progress type="dashboard" v-bind:percentage="100" strokeLinecap="square" />
        </vui-space>
      </div>
    </template>
    <template slot="title">线条边缘形状</template>
    <template slot="description">
      <p>通过 <code>strokeLinecap</code> 可以调整线条边缘形状。</p>
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
  .example-progress-stroke-linecap .vui-progress-line { margin-bottom:16px; }
</style>
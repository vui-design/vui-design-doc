<template>
  <example v-bind:code="code" id="example-progress-formatter">
    <template slot="demo">
      <div class="example-progress-formatter">
        <vui-progress type="circle" v-bind:percentage="75" v-bind:formatter="formatter" />
        <vui-progress type="circle" v-bind:percentage="100" v-bind:formatter="formatter" />
      </div>
    </template>
    <template slot="title">自定义文字格式</template>
    <template slot="description">
      <p>利用 <code>formatter</code> 属性指定文字格式。</p>
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
    },
    methods: {
      formatter(percentage) {
        return percentage < 100 ? `${percentage} Days` : `Done`;
      }
    }
  };
</script>

<style>
  .example-progress-formatter { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-formatter .vui-progress + .vui-progress { margin-left:16px; }
</style>
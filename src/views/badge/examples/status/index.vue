<template>
  <example v-bind:code="code" id="example-badge-status">
    <template slot="demo">
      <div class="example-badge-status">
        <vui-badge status="default" />
        <vui-badge status="processing" />
        <vui-badge status="warning" />
        <vui-badge status="success" />
        <vui-badge status="error" />
        <br />
        <vui-badge status="default" text="默认" />
        <br />
        <vui-badge status="processing" text="处理中" />
        <br />
        <vui-badge status="warning" text="警告" />
        <br />
        <vui-badge status="success" text="成功" />
        <br />
        <vui-badge status="error" text="错误" />
      </div>
    </template>
    <template slot="title">状态点</template>
    <template slot="description">
      <p>用于表示状态的小圆点。</p>
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
  .example-badge-status > .vui-badge { margin-right:16px; }
</style>
<template>
  <example v-bind:code="code" id="example-qrcode-tag">
    <template slot="demo">
      <div class="example-qrcode-tag">
        <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" />
        <vui-qrcode tag="svg" value="https://vui-design.github.io/vui-design-doc/" />
        <vui-qrcode tag="table" value="https://vui-design.github.io/vui-design-doc/" />
      </div>
    </template>
    <template slot="title">渲染元素</template>
    <template slot="description">
      <p>自定义二维码渲染元素，可选值为 <code>canvas</code>、<code>svg</code> 或 <code>table</code>，默认使用 <code>canvas</code> 绘制。</p>
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
  .example-qrcode-tag { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-qrcode-tag .vui-qrcode + .vui-qrcode { margin-left:24px; }
</style>
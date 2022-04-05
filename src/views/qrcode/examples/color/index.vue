<template>
  <example v-bind:code="code" id="example-qrcode-color">
    <template slot="demo">
      <div class="example-qrcode-color">
        <vui-qrcode
          value="https://vui-design.github.io/vui-design-doc/"
          background="#fff"
          foreground="#2d8cf0"
          pdground="#ff4d4f"
        />
      </div>
    </template>
    <template slot="title">自定义颜色</template>
    <template slot="description">
      <p>自定义二维码的背景色、前景色或三角颜色。</p>
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
<template>
  <example v-bind:code="code" id="example-qrcode-size">
    <template slot="demo">
      <div class="example-qrcode-size">
        <vui-qrcode v-bind:size="256" value="https://vui-design.github.io/vui-design-doc/" />
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>自定义二维码的宽和高，单位为 <code>px</code>，只允许生成正方形二维码。</p>
      <p>需要注意的是，当使用 <code>table</code> 绘制二维码时，会适当缩小，使得能够整除二维码矩阵的维度，因此不建议将 <code>tag</code> 设置为 <code>table</code>。</p>
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
<template>
  <example v-bind:code="code" id="example-qrcode-image">
    <template slot="demo">
      <div class="example-qrcode-image">
        <vui-qrcode v-bind:image="image" value="https://developer.mozilla.org/zh-CN/docs/Glossary/HTML5" />
      </div>
    </template>
    <template slot="title">图片</template>
    <template slot="description">
      <p>为二维码添加 LGOO 图片。</p>
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
        code,
        image: require("src/assets/images/html5.png")
      };
    }
  };
</script>
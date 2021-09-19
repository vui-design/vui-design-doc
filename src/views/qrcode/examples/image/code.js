const code = `
<template>
  <div class="example-qrcode-image">
    <vui-qrcode v-bind:image="image" value="https://developer.mozilla.org/zh-CN/docs/Glossary/HTML5" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image: require("src/assets/images/html5.png")
      };
    }
  };
</script>
`;

export default code.trim();
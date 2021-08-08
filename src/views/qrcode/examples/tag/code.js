const code = `
<template>
  <div class="example-qrcode-tag">
    <vui-qrcode tag="img" value="https://vui-design.github.io/vui-design-doc/" />
    <vui-qrcode tag="svg" value="https://vui-design.github.io/vui-design-doc/" />
    <vui-qrcode tag="table" value="https://vui-design.github.io/vui-design-doc/" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-qrcode-tag { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-qrcode-tag .vui-qrcode + .vui-qrcode { margin-left:24px; }
</style>
`;

export default code.trim();
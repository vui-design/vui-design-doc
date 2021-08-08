const code = `
<template>
  <div class="example-qrcode-correct-level">
    <vui-qrcode
      v-bind:correctLevel="0"
      value="https://vui-design.github.io/vui-design-doc/"
    />
    <vui-qrcode
      v-bind:correctLevel="1"
      value="https://vui-design.github.io/vui-design-doc/"
    />
    <vui-qrcode
      v-bind:correctLevel="2"
      value="https://vui-design.github.io/vui-design-doc/"
    />
  </div>
</template>

<script>
  export default {

  };
</script>
`;

export default code.trim();
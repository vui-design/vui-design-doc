const code =
`<template>
  <div class="example-button-block">
    <vui-button type="primary" block>Primary</vui-button>
    <vui-button block>Default</vui-button>
    <vui-button type="dashed" block>Dashed</vui-button>
    <vui-button type="text" block>Text</vui-button>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-block .vui-button + .vui-button { margin-top:16px; }
</style>
`;

export default code;
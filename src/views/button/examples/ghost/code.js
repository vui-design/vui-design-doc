const code =
`<template>
  <div class="example-button-ghost">
    <vui-button type="primary" ghost>Primary</vui-button>
    <vui-button type="info" ghost>Info</vui-button>
    <vui-button type="warning" ghost>Warning</vui-button>
    <vui-button type="success" ghost>Success</vui-button>
    <vui-button type="error" ghost>Error</vui-button>
    <vui-button ghost>Default</vui-button>
    <vui-button type="dashed" ghost>Dashed</vui-button>
    <vui-button type="text" ghost>Text</vui-button>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-ghost { background-color:#bec8c8; padding:8px 16px; }
  .example-button-ghost .vui-button { margin:8px 16px 8px 0; }
</style>
`;

export default code;
const code =
`<template>
  <div class="example-link-type">
    <vui-link>Default</vui-link>
    <vui-link type="primary">Primary</vui-link>
    <vui-link type="info">Info</vui-link>
    <vui-link type="warning">Warning</vui-link>
    <vui-link type="success">Success</vui-link>
    <vui-link type="danger">Danger</vui-link>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-type .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;
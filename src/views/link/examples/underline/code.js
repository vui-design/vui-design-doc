const code =
`<template>
  <div class="example-link-underline">
    <vui-link underline href="https://github.com/vui-design/vui-design" target="_blank">Default</vui-link>
    <vui-link type="primary" underline>Primary</vui-link>
    <vui-link type="info" underline>Info</vui-link>
    <vui-link type="warning" underline>Warning</vui-link>
    <vui-link type="success" underline>Success</vui-link>
    <vui-link type="danger" underline>Danger</vui-link>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-underline .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;
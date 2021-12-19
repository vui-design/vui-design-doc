const code =
`<template>
  <div class="example-link-disabled">
    <vui-link href="https://github.com/vui-design/vui-design" target="_blank" disabled>Default</vui-link>
    <vui-link type="primary" disabled>Primary</vui-link>
    <vui-link type="info" disabled>Info</vui-link>
    <vui-link type="warning" disabled>Warning</vui-link>
    <vui-link type="success" disabled>Success</vui-link>
    <vui-link type="danger" disabled>Danger</vui-link>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-disabled .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;
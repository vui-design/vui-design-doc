const code =
`<template>
  <div class="example-switch-size">
    <vui-switch size="small" />
    <vui-switch />
    <vui-switch size="large" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-switch-size .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;
const code =
`<template>
  <div class="example-switch-loading">
    <vui-switch loading />
    <vui-switch checked loading />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-switch-loading { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-loading .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;
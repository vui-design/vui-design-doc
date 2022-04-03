const code =
`<template>
  <div class="example-spin-size">
    <vui-spin size="small" />
    <vui-spin />
    <vui-spin size="large" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-spin-size > .vui-spin + .vui-spin { margin-left:16px; }
</style>
`;

export default code;
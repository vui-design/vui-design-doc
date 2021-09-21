const code =
`<template>
  <div class="example-pagination-simple">
    <vui-pagination simple v-bind:total="50" />
    <vui-pagination simple v-bind:total="50" showTotal />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:16px; }
</style>
`;

export default code;
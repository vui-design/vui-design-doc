const code =
`<template>
  <div class="example-pagination-small">
    <vui-pagination small v-bind:total="50" />
    <vui-pagination small v-bind:total="50" showPageSizer showPageElevator />
    <vui-pagination small v-bind:total="50" showTotal />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-small .vui-pagination + .vui-pagination { margin-top:16px; }
</style>
`;

export default code;
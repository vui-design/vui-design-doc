const code =
`<template>
  <div class="example-pagination-small">
    <vui-pagination small :total="50" />
    <vui-pagination small :total="50" showPageSizer showPageElevator />
    <vui-pagination small :total="50" showTotal />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-small .vui-pagination + .vui-pagination { margin-top:15px; }
</style>
`;

export default code;
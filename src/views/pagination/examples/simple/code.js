const code =
`<template>
  <div class="example-pagination-simple">
    <vui-pagination simple :total="50" />
    <vui-pagination simple :total="50" showTotal />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:15px; }
</style>
`;

export default code;
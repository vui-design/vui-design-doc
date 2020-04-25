const code =
`<template>
  <div class="example-pagination-simple">
    <vui-pagination :total="500" />
    <vui-pagination :total="500" align="center" />
    <vui-pagination :total="500" align="right" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-align .vui-pagination + .vui-pagination { margin-top:15px; }
</style>
`;

export default code;
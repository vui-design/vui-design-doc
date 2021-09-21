const code =
`<template>
  <div class="example-pagination-simple">
    <vui-pagination v-bind:total="500" />
    <vui-pagination v-bind:total="500" align="center" />
    <vui-pagination v-bind:total="500" align="right" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-pagination-align .vui-pagination + .vui-pagination { margin-top:16px; }
</style>
`;

export default code;
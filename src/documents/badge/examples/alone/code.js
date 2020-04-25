const code =
`<template>
  <div class="example-badge-alone">
    <vui-badge :count="99" />
    <vui-badge :count="100" />
    <vui-badge :count="1000" :overflowCount="999" />
    <vui-badge text="new" />
    <vui-badge text="hot" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-alone > .vui-badge { margin-right:20px; }
</style>
`;

export default code;
const code =
`<template>
  <div class="example-badge-alone">
    <vui-badge v-bind:count="99" />
    <vui-badge v-bind:count="100" />
    <vui-badge v-bind:count="1000" v-bind:overflowCount="999" />
    <vui-badge text="NEW" />
    <vui-badge text="HOT" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-alone > .vui-badge { margin-right:16px; }
</style>
`;

export default code;
const code =
`<template>
  <div class="example-badge-overflow-count">
    <vui-badge v-bind:count="99">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge v-bind:count="100">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge v-bind:count="1000" v-bind:overflowCount="999">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-overflow-count > .vui-badge { margin-right:16px; }
  .example-badge-overflow-count > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;
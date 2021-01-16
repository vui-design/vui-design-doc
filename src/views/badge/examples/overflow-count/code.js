const code =
`<template>
  <div class="example-badge-overflow-count">
    <vui-badge :count="99">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge :count="100">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge :count="1000" :overflowCount="999">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-overflow-count > .vui-badge { margin-right:20px; }
  .example-badge-overflow-count > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;
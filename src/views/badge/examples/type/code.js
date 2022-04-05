const code =
`<template>
  <div class="example-badge-type">
    <vui-badge type="default" v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge type="primary" v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge type="info" v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge type="warning" v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge type="success" v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge v-bind:count="10">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-type > .vui-badge { margin-right:16px; }
  .example-badge-type > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;
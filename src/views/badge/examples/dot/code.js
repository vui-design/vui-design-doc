const code =
`<template>
  <div class="example-badge-dot">
    <vui-badge dot v-bind:count="99">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge dot v-bind:count="100">
      <vui-icon type="mail" />
    </vui-badge>
    <vui-badge dot v-bind:count="1000">
      <a href="javascript:;">可以是一个链接</a>
    </vui-badge>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-dot > .vui-badge { margin-right:16px; }
  .example-badge-dot > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;
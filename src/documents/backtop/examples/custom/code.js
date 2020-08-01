const code =
`<template>
  <div>
    Scroll down to see the bottom-right blue button.
    <vui-backtop v-bind:bottom="100">
      <div class="btn-backtop">TOP</div>
    </vui-backtop>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .btn-backtop { width:40px; height:40px; border-radius:2px; background-color:#2d8cf0; color:#fff; font-size:14px; text-align:center; line-height:40px; }
</style>
`;

export default code;
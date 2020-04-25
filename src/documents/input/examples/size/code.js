const code =
`<template>
  <div class="example-input-size">
    <vui-input size="large" placeholder="大" />
    <vui-input placeholder="默认" />
    <vui-input size="small" placeholder="小" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-input-size > .vui-input { width:140px; margin-right:10px; }
</style>
`;

export default code;
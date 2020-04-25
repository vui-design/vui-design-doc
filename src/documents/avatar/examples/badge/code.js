const code = `
<template>
  <div class="example-avatar-badge">
    <vui-badge :count="10">
      <vui-avatar shape="square" icon="user" />
    </vui-badge>
    <vui-badge :count="10" dot>
      <vui-avatar shape="square" icon="user" />
    </vui-badge>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-avatar-badge .vui-badge + .vui-badge { margin-left:20px; }
</style>
`;

export default code.trim();
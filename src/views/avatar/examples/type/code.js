const code = `
<template>
  <div class="example-avatar-type">
    <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <vui-avatar icon="user" />
    <vui-avatar>U</vui-avatar>
    <vui-avatar>USER</vui-avatar>
    <vui-avatar icon="user" style="background-color: #52c41a;" />
    <vui-avatar style="background-color: #fde3cf; color: #f56a00;">U</vui-avatar>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-avatar-type .vui-avatar + .vui-avatar { margin-left:16px; }
</style>
`;

export default code.trim();
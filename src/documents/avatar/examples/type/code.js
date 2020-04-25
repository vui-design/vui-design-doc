const code = `
<template>
  <div class="example-avatar-type">
    <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <vui-avatar icon="user" />
    <vui-avatar>U</vui-avatar>
    <vui-avatar>USER</vui-avatar>
    <vui-avatar icon="user" style="background-color: #5cb85c;" />
    <vui-avatar style="background-color: #fef7ed; color: #f0ad4e;">U</vui-avatar>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-avatar-type .vui-avatar + .vui-avatar { margin-left:20px; }
</style>
`;

export default code.trim();
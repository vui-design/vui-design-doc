const code = `
<template>
  <div class="example-avatar-group">
    <vui-avatar-group>
      <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <vui-avatar style="background-color: #f56a00">U</vui-avatar>
      <vui-tooltip content="User Name">
        <vui-avatar icon="user" style="background-color: #52c41a" />
      </vui-tooltip>
      <vui-avatar icon="group" style="background-color: #2d8cf0" />
    </vui-avatar-group>
    <vui-avatar-group v-bind:maxCount="2">
      <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <vui-avatar style="background-color: #f56a00">U</vui-avatar>
      <vui-tooltip content="User Name">
        <vui-avatar icon="user" style="background-color: #52c41a" />
      </vui-tooltip>
      <vui-avatar icon="group" style="background-color: #2d8cf0" />
    </vui-avatar-group>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-avatar-group .vui-avatar-group + .vui-avatar-group { margin-left:16px; }
</style>
`;

export default code.trim();
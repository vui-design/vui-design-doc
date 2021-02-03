const code = `
<template>
  <div class="example-avatar-basic-usage">
    <section>
      <vui-avatar icon="user" v-bind:size="64" />
      <vui-avatar icon="user" size="large" />
      <vui-avatar icon="user" />
      <vui-avatar icon="user" size="small" />
    </section>
    <section>
      <vui-avatar icon="user" shape="square" v-bind:size="64" />
      <vui-avatar icon="user" shape="square" size="large" />
      <vui-avatar icon="user" shape="square" />
      <vui-avatar icon="user" shape="square" size="small" />
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-avatar-basic-usage section + section { margin-top:20px; }
  .example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:20px; }
</style>
`;

export default code.trim();
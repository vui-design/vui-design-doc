const code =
`<template>
  <div class="example-switch-text">
    <vui-switch checkedText="开" uncheckedText="关" />
    <vui-switch v-bind:checkedText="1" v-bind:uncheckedText="0" />
    <vui-switch checked>
      <vui-icon type="checkmark" slot="checkedText" />
      <vui-icon type="crossmark" slot="uncheckedText" />
    </vui-switch>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-switch-text .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;
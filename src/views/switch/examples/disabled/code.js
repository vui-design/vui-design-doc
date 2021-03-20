const code =
`<template>
  <div class="example-switch-disabled">
    <vui-switch v-model="value" v-bind:disabled="disabled" />
    <vui-button type="primary" size="small" v-on:click="disabled = !disabled">
      {{disabled ? "Enabled" : "Disabled"}}
    </vui-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: false,
        disabled: true
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-switch-disabled .vui-button { margin-left:16px; }
</style>
`;

export default code;
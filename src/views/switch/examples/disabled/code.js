const code =
`<template>
  <div>
    <vui-switch v-model="value" :disabled="disabled" />
    <br>
    <div style="margin-top: 10px;">
      <vui-button type="primary" size="small" @click="disabled = !disabled">
        {{disabled ? "Enabled" : "Disabled"}}
      </vui-button>
    </div>
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
`;

export default code;
const code =
`<template>
  <div>
    <vui-checkbox v-model="checked" :disabled="disabled">
      {{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
    </vui-checkbox>
    <br>
    <div style="margin-top: 10px;">
      <vui-button type="primary" size="small" @click="checked = !checked">
        {{checked ? "Unchecked" : "Checked"}}
      </vui-button>
      <vui-button type="primary" size="small" @click="disabled = !disabled" style="margin-left: 10px;">
        {{disabled ? "Enabled" : "Disabled"}}
      </vui-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        disabled: false
      };
    }
  };
</script>
`;

export default code;
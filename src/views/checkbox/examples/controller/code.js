const code =
`<template>
  <div class="example-checkbox-controller">
    <vui-checkbox v-model="checked" v-bind:disabled="disabled">
      {{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
    </vui-checkbox>
    <section>
      <vui-button type="primary" size="small" @click="checked = !checked">
        {{checked ? "Unchecked" : "Checked"}}
      </vui-button>
      <vui-button type="primary" size="small" @click="disabled = !disabled" style="margin-left: 10px;">
        {{disabled ? "Enabled" : "Disabled"}}
      </vui-button>
    </section>
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

<style>
  .example-checkbox-controller section { margin-top:16px; font-size:0; }
</style>
`;

export default code;
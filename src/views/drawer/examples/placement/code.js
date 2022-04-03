const code =
`<template>
  <div class="example-drawer-placement">
    <vui-radio-group type="button" v-model="placement">
      <vui-radio value="top">Top</vui-radio>
      <vui-radio value="bottom">Bottom</vui-radio>
      <vui-radio value="left">Left</vui-radio>
      <vui-radio value="right">Right</vui-radio>
    </vui-radio-group>
    <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
    <vui-drawer v-model="visible" v-bind:placement="placement" title="Basic Usage">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        placement: "right"
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      }
    }
  };
</script>

<style>
  .example-drawer-placement .vui-radio-group { margin-right:16px; }
</style>
`;

export default code;
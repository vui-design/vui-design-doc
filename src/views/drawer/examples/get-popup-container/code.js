const code =
`<template>
  <div class="example-drawer-get-popup-container">
    <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
    <vui-drawer v-model="visible" v-bind:showFooter="false" v-bind:getPopupContainer="false" width="50%" title="Drawer Title">
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
        visible: false
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
  .example-drawer-get-popup-container { position:relative; height:240px; border:1px solid #f0f0f0; background-color:#f6f6f6; padding:48px; }
</style>
`;

export default code;
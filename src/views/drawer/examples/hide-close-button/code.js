const code =
`<template>
  <div class="example-drawer-hide-close-button">
    <vui-button type="primary" v-on:click="showDrawer">Hide close button</vui-button>
    <vui-drawer v-model="visible" v-bind:closable="false" title="Drawer Title">
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
`;

export default code;
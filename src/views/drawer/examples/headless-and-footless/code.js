const code =
`<template>
  <div class="example-drawer-headless-and-footless">
    <vui-button type="primary" v-on:click="showDrawer1">No header</vui-button>
    <vui-drawer v-model="visible1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-drawer>
    <vui-button type="primary" v-on:click="showDrawer2">No footer</vui-button>
    <vui-drawer v-model="visible2" v-bind:showFooter="false" title="Drawer Title">
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
        visible1: false,
        visible2: false
      };
    },
    methods: {
      showDrawer1() {
        this.visible1 = true;
      },
      showDrawer2() {
        this.visible2 = true;
      }
    }
  };
</script>

<style>
  .example-drawer-headless-and-footless > .vui-button { margin-right:16px; }
</style>
`;

export default code;
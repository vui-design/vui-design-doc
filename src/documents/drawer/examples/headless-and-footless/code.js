const code =
`<template>
  <div class="example-drawer-headless-and-footless">
    <vui-button type="primary" @click="showDrawer1">No header</vui-button>
    <vui-drawer v-model="visible1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-drawer>
    <vui-button type="primary" @click="showDrawer2">No footer</vui-button>
    <vui-drawer title="Drawer Title" :showFooter="false" v-model="visible2">
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
  .example-drawer-headless-and-footless > .vui-button { margin-right:10px; }
</style>
`;

export default code;
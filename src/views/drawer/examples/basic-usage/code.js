const code =
`<template>
  <div class="example-drawer-basic-usage">
    <vui-button type="primary" v-on:click="showDrawer">Open basic drawer</vui-button>
    <vui-drawer v-model="visible" title="Drawer Title">
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
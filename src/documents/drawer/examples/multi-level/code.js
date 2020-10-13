const code =
`<template>
  <div class="example-drawer-multi-level">
    <vui-button type="primary" v-on:click="handleOpenDrawer">Open drawer</vui-button>
    <vui-drawer v-model="visible" title="Drawer Title">
      <vui-button type="primary" v-on:click="handleOpenTwoLevelDrawer">Open two-level drawer</vui-button>
      <vui-drawer v-model="twoLevelDrawerVisible" title="Two-Level Drawer Title">
        <p>This is two-level drawer</p>
      </vui-drawer>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        twoLevelDrawerVisible: false
      };
    },
    methods: {
      handleOpenDrawer() {
        this.visible = true;
      },
      handleOpenTwoLevelDrawer() {
        this.twoLevelDrawerVisible = true;
      }
    }
  };
</script>
`;

export default code;
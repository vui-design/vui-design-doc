const code =
`<template>
  <div class="example-drawer-multi-level">
    <vui-button type="primary" @click="handleOpenDrawer">Open drawer</vui-button>
    <vui-drawer title="Drawer Title" v-model="visible">
      <vui-button type="primary" @click="handleOpenTwoLevelDrawer">Open two-level drawer</vui-button>
      <vui-drawer title="Two-Level Drawer Title" v-model="twoLevelDrawerVisible">
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
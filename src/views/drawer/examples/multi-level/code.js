const code =
`<template>
  <div class="example-drawer-multi-level">
    <vui-button type="primary" v-on:click="handleShowDrawer">Open drawer</vui-button>
    <vui-drawer v-model="visible" title="Drawer Title">
      <vui-button type="primary" v-on:click="handleShowChildrenDrawer">Open children drawer</vui-button>
      <vui-drawer v-model="childrenVisible" title="Children Drawer Title">
        <p>This is children drawer</p>
      </vui-drawer>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        childrenVisible: false
      };
    },
    methods: {
      handleShowDrawer() {
        this.visible = true;
      },
      handleShowChildrenDrawer() {
        this.childrenVisible = true;
      }
    }
  };
</script>
`;

export default code;
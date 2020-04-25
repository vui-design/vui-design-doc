const code =
`<template>
  <div class="example-drawer-button-props">
    <vui-button type="primary" @click="showDrawer">Open drawer with customized button props</vui-button>
    <vui-drawer
      v-model="visible"
      title="Drawer Title"
      cancelText="Cancel"
      okText="OK"
      :cancelButtonProps="cancelButtonProps"
      :okButtonProps="okButtonProps"
    >
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
        cancelButtonProps: {
          props: {
            type: "text"
          }
        },
        okButtonProps: {
          props: {
            disabled: true
          }
        }
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
const code =
`<template>
  <div class="example-drawer-button-props">
    <vui-button type="primary" v-on:click="showDrawer">Open drawer with customized button props</vui-button>
    <vui-drawer
      v-model="visible"
      v-bind:cancelButtonProps="cancelButtonProps"
      v-bind:okButtonProps="okButtonProps"
      cancelText="Cancel"
      okText="Delete"
      title="Drawer Title"
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
            type: "danger"
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
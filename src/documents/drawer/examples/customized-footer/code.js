const code =
`<template>
  <div class="example-drawer-customized-footer">
    <vui-button type="primary" @click="showDrawer">Open drawer with customized footer</vui-button>
    <vui-drawer v-model="visible" title="Drawer Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <template slot="footer">
        <vui-button @click="handleReturn">Return</vui-button>
        <vui-button type="primary" :loading="loading" @click="handleSubmit">Submit</vui-button>
      </template>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        loading: false
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      handleReturn() {
        this.visible = false;
      },
      handleSubmit() {
        this.loading = true;

        setTimeout(() => {
          this.visible = false;
          this.loading = false;
        }, 3000);
      }
    }
  };
</script>
`;

export default code;
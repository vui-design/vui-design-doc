const code =
`<template>
  <div class="example-drawer-customized-footer">
    <vui-button type="primary" v-on:click="showDrawer">Open drawer with customized footer</vui-button>
    <vui-drawer v-model="visible" title="Drawer Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <template slot="footer">
        <vui-button v-on:click="handleCancel">Cancel</vui-button>
        <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>
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
      handleCancel() {
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
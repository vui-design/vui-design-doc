const code =
`<template>
  <div class="example-modal-customized-footer">
    <vui-button type="primary" @click="showModal">Open modal with customized footer</vui-button>
    <vui-modal v-model="visible" title="Modal Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <template slot="footer">
        <vui-button @click="handleReturn">Return</vui-button>
        <vui-button type="primary" :loading="loading" @click="handleSubmit">Submit</vui-button>
      </template>
    </vui-modal>
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
      showModal() {
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
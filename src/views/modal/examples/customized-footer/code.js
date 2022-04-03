const code =
`<template>
  <div class="example-modal-customized-footer">
    <vui-button type="primary" v-on:click="showModal">Open modal with customized footer</vui-button>
    <vui-modal v-model="visible" title="Modal Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <vui-space slot="footer">
        <vui-button v-on:click="handleCancel">Cancel</vui-button>
        <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>
      </vui-space>
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
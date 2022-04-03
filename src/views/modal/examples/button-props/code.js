const code =
`<template>
  <div class="example-modal-button-props">
    <vui-button type="primary" v-on:click="showModal">Open modal with customized button props</vui-button>
    <vui-modal
      v-model="visible"
      title="Modal Title"
      cancelText="Cancel"
      okText="Delete"
      v-bind:cancelButtonProps="cancelButtonProps"
      v-bind:okButtonProps="okButtonProps"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-modal>
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
      showModal() {
        this.visible = true;
      }
    }
  };
</script>
`;

export default code;
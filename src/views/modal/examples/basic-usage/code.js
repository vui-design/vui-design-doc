const code =
`<template>
  <div class="example-modal-basic-usage">
    <vui-button type="primary" v-on:click="showModal">Open basic modal</vui-button>
    <vui-modal
      v-model="visible"
      title="Modal Title"
      v-on:ok="handleOk"
      v-on:cancel="handleCancel"
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
        visible: false
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk() {
        this.$message.info("Clicked ok");
      },
      handleCancel() {
        this.$message.info("Clicked cancel");
      }
    }
  };
</script>
`;

export default code;
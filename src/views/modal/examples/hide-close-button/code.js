const code =
`<template>
  <div class="example-modal-hide-close-button">
    <vui-button type="primary" @click="showModal">Hide Close Button</vui-button>
    <vui-modal title="Modal Title" :closable="false" v-model="visible">
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
      }
    }
  };
</script>
`;

export default code;
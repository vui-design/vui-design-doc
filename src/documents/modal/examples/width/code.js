const code =
`<template>
  <div class="example-modal-width">
    <vui-button type="primary" @click="showModal">Modal width</vui-button>
    <vui-modal v-model="visible" title="Modal Title" width="360">
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
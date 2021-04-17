const code =
`<template>
  <div class="example-modal-hide-close-button">
    <vui-button type="primary" v-on:click="showModal">Hide Close Button</vui-button>
    <vui-modal v-model="visible" v-bind:closable="false" title="Modal Title">
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
const code =
`<template>
  <div class="example-modal-width">
    <vui-button type="primary" v-on:click="showModal">Modal width</vui-button>
    <vui-modal v-model="visible" v-bind:width="360" title="Modal Title">
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
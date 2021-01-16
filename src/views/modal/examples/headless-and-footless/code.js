const code =
`<template>
  <div class="example-modal-headless-and-footless">
    <vui-button type="primary" @click="showModal1">No Header</vui-button>
    <vui-modal v-model="visible1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-modal>
    <vui-button type="primary" @click="showModal2">No Footer</vui-button>
    <vui-modal title="Modal Title" :showFooter="false" v-model="visible2">
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
        visible1: false,
        visible2: false
      };
    },
    methods: {
      showModal1() {
        this.visible1 = true;
      },
      showModal2() {
        this.visible2 = true;
      }
    }
  };
</script>

<style>
  .example-modal-headless-and-footless > .vui-button { margin-right:10px; }
</style>
`;

export default code;
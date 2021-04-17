const code =
`<template>
  <div class="example-modal-headless-and-footless">
    <vui-space>
      <vui-button type="primary" v-on:click="showModal1">No Header</vui-button>
      <vui-button type="primary" v-on:click="showModal2">No Footer</vui-button>
    </vui-space>
    <vui-modal v-model="visible1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-modal>
    <vui-modal v-model="visible2" v-bind:showFooter="false" title="Modal Title">
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
`;

export default code;
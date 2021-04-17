const code =
`<template>
  <div class="example-modal-position">
    <vui-space>
      <vui-button type="primary" v-on:click="showModal1">Open modal at 50px to top</vui-button>
      <vui-button type="primary" v-on:click="showModal2">Vertically centered modal</vui-button>
    </vui-space>
    <vui-modal v-model="visible1" v-bind:top="50" title="Modal Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-modal>
    <vui-modal v-model="visible2" centered title="Modal Title">
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
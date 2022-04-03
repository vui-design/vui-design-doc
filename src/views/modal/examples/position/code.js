const code =
`<template>
  <div class="example-modal-position">
    <vui-button type="primary" v-on:click="showModal">Open modal at 160px to top</vui-button>
    <vui-modal v-model="visible" v-bind:centered="false" v-bind:top="160" title="Modal Title">
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
const code =
`<template>
  <vui-affix v-bind:offsetTop="top" v-on:change="handleChange">
    <vui-button>100px to affix top</vui-button>
  </vui-affix>
</template>

<script>
  export default {
    data() {
      return {
        top: 100
      };
    },
    methods: {
      handleChange(affixed) {
        console.log(affixed);
      }
    }
  };
</script>
`;

export default code;
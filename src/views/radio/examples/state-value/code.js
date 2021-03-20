const code =
`<template>
  <vui-radio
    v-model="value"
    v-bind:checkedValue="1"
    v-bind:uncheckedValue="0"
  >
    Radio
  </vui-radio>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;
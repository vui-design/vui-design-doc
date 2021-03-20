const code =
`<template>
  <vui-checkbox
    v-model="value"
    v-bind:checkedValue="1"
    v-bind:uncheckedValue="0"
  >
    Checkbox
  </vui-checkbox>
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
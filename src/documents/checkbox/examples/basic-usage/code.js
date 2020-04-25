const code =
`<template>
  <vui-checkbox v-model="value">Checkbox</vui-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        value: false
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
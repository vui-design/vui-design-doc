const code =
`<template>
  <vui-radio v-model="value">Radio</vui-radio>
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
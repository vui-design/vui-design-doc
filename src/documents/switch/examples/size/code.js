const code =
`<template>
  <vui-switch v-model="value" />
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
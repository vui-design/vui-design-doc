const code =
`<template>
  <vui-switch v-model="value" checkedColor="#52c41a" uncheckedColor="#ff4d4f" />
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
const code =
`<template>
  <vui-input-number :min="1" :max="10" v-model="value" disabled />
</template>

<script>
  export default {
    data() {
      return {
        value: 1
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
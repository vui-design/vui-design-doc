const code =
`<template>
  <vui-input-number :min="0" :max="10" :step="0.1" v-model="value" />
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
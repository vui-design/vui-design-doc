const code =
`<template>
  <vui-input-number v-model="value" v-bind:min="1" v-bind:max="10" disabled />
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
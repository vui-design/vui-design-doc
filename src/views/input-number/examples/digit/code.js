const code =
`<template>
  <vui-input-number v-model="value" v-bind:step="0.1" v-bind:min="0" v-bind:max="10" />
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
const code =
`<template>
  <vui-radio-group v-model="value">
    <vui-radio :value="1">A</vui-radio>
    <vui-radio :value="2">B</vui-radio>
    <vui-radio :value="3">C</vui-radio>
    <vui-radio :value="4">D</vui-radio>
  </vui-radio-group>
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
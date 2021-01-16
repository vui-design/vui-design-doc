const code =
`<template>
  <vui-checkbox-group v-model="value">
    <vui-checkbox :value="1">A</vui-checkbox>
    <vui-checkbox :value="2">B</vui-checkbox>
    <vui-checkbox :value="3">C</vui-checkbox>
    <vui-checkbox :value="4">D</vui-checkbox>
  </vui-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        value: [1]
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
const code =
`<template>
  <vui-checkbox-group layout="vertical" v-model="value">
    <vui-checkbox v-bind:value="1">A</vui-checkbox>
    <vui-checkbox v-bind:value="2">B</vui-checkbox>
    <vui-checkbox v-bind:value="3">C</vui-checkbox>
    <vui-checkbox v-bind:value="4">D</vui-checkbox>
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
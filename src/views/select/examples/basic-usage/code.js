const code =
`<template>
  <vui-select v-model="value" style="width: 200px;">
    <vui-option value="new york">New York</vui-option>
    <vui-option value="london">London</vui-option>
    <vui-option value="sydney">Sydney</vui-option>
    <vui-option value="ottawa">Ottawa</vui-option>
    <vui-option value="paris">Paris</vui-option>
    <vui-option value="canberra">Canberra</vui-option>
  </vui-select>
</template>

<script>
  export default {
    data() {
      return {
        value: undefined
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
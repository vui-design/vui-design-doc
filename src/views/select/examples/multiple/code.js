const code =
`<template>
  <vui-select v-model="value" multiple placeholder="Please select" v-on:change="handleChange">
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
        value: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;
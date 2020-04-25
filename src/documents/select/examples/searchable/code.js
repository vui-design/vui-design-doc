const code =
`<template>
  <div class="example-select-searchable">
    <vui-select v-model="value1" searchable style="width: 200px;">
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select v-model="value2" searchable multiple>
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: undefined,
        value2: []
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;
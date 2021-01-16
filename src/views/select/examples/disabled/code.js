const code =
`<template>
  <vui-select v-model="value1" style="width: 200px;">
    <vui-option value="new york">New York</vui-option>
    <vui-option value="london">London</vui-option>
    <vui-option value="sydney">Sydney</vui-option>
    <vui-option value="ottawa">Ottawa</vui-option>
    <vui-option value="paris" disabled>Paris</vui-option>
    <vui-option value="canberra">Canberra</vui-option>
  </vui-select>
  <vui-select v-model="value2" style="width: 200px;">
    <vui-option-group label="Hot Cities" disabled>
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
    </vui-option-group>
    <vui-option-group label="Other Cities">
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-option-group>
  </vui-select>
  <vui-select v-model="value3" disabled style="width: 200px;">
    <vui-option value="new york">New York</vui-option>
    <vui-option value="london">London</vui-option>
    <vui-option value="sydney">Sydney</vui-option>
    <vui-option value="ottawa">Ottawa</vui-option>
    <vui-option value="paris">Paris</vui-option>
    <vui-option value="canberra">Canberra</vui-option>
  </vui-select>
  <vui-select v-model="value4" multiple disabled>
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
        value1: "",
        value2: "",
        value3: "new york",
        value4: ["new york", "sydney"]
      };
    }
  };
</script>

<style>
  .example-select-disabled .vui-select + .vui-select { margin-top:15px; }
</style>
`;

export default code;
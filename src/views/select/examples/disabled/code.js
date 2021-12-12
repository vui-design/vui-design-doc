const code =
`<template>
  <div class="example-select-disabled">
    <vui-select v-model="value1" style="width: 200px;" placeholder="Please select">
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris" disabled>Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select v-model="value2" style="width: 200px;" placeholder="Please select">
      <vui-option-group disabled label="Hot Cities">
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
    <vui-select v-model="value3" multiple searchable placeholder="Please select">
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney" disabled>Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select v-model="value4" disabled style="width: 200px;" placeholder="Please select">
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select v-model="value5" multiple disabled placeholder="Please select">
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
        value1: "",
        value2: "",
        value3: ["new york", "sydney"],
        value4: "new york",
        value5: ["new york", "sydney"]
      };
    }
  };
</script>

<style>
  .example-select-disabled .vui-select + .vui-select { display:block; margin-top:16px; }
</style>
`;

export default code;
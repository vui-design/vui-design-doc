const code =
`<template>
  <div class="example-select-size">
    <div>
      <vui-radio-group type="button" v-model="size">
        <vui-radio label="Small" value="small" />
        <vui-radio label="Medium" value="medium" />
        <vui-radio label="Large" value="large" />
      </vui-radio-group>
    </div>
    <vui-select v-model="value1" v-bind:size="size" style="width: 200px;" placeholder="Please select">
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select v-model="value2" v-bind:size="size" multiple placeholder="Please select">
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
        size: "medium",
        value1: "",
        value2: ["new york", "sydney"]
      };
    }
  };
</script>

<style>
  .example-select-size .vui-select { display:block; margin-top:16px; }
</style>
`;

export default code;
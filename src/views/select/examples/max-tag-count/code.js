const code =
`<template>
  <div class="example-select-max-tag-count">
    <vui-select
      v-model="value1"
      v-bind:maxTagCount="2"
      multiple
      placeholder="Please select"
      v-on:change="handleChange1"
    >
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select
      v-model="value2"
      v-bind:maxTagCount="2"
      v-bind:maxTagPlaceholder="maxTagPlaceholder"
      multiple
      placeholder="Please select"
      v-on:change="handleChange2"
    >
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
        value1: [],
        value2: []
      };
    },
    methods: {
      maxTagPlaceholder(count) {
        return "More " + count;
      },
      handleChange1(value) {
        console.log(value);
      },
      handleChange2(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-select-max-tag-count .vui-select + .vui-select { margin-top:16px; }
</style>
`;

export default code;
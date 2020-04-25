const code =
`<template>
  <vui-form :model="form" :labelWidth="100" :labelAlign="form.labelAlign">
    <vui-form-item>
      <vui-radio-group type="button" v-model="form.labelAlign">
        <vui-radio value="left">Left</vui-radio>
        <vui-radio value="right">Right</vui-radio>
      </vui-radio-group>
    </vui-form-item>
    <vui-form-item label="Input">
      <vui-input placeholder="Enter something..." v-model="form.input" />
    </vui-form-item>
    <vui-form-item label="Select">
      <vui-select style="width: 200px;" placeholder="Select..." v-model="form.select">
        <vui-option value="new york">New York</vui-option>
        <vui-option value="london">London</vui-option>
        <vui-option value="sydney">Sydney</vui-option>
        <vui-option value="ottawa">Ottawa</vui-option>
        <vui-option value="paris">Paris</vui-option>
        <vui-option value="canberra">Canberra</vui-option>
      </vui-select>
    </vui-form-item>
    <vui-form-item>
      <vui-button type="primary">Submit</vui-button>
    </vui-form-item>
  </vui-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          labelAlign: "right",
          input: "",
          select: undefined
        }
      };
    }
  };
</script>
`;

export default code;
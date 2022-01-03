const code =
`<template>
  <vui-form v-bind:layout="form.layout" v-bind:model="form" v-bind:labelWidth="labelWidth">
    <vui-form-item label="Layout">
      <vui-radio-group type="button" v-model="form.layout">
        <vui-radio value="horizontal">Horizontal</vui-radio>
        <vui-radio value="vertical">Vertical</vui-radio>
        <vui-radio value="inline">Inline</vui-radio>
      </vui-radio-group>
    </vui-form-item>
    <vui-form-item label="Input">
      <vui-input v-model="form.input" placeholder="Enter something..." />
    </vui-form-item>
    <vui-form-item label="Select">
      <vui-select v-model="form.select" searchable style="width: 200px;" placeholder="Select...">
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
          layout: "horizontal",
          input: "",
          select: undefined
        }
      };
    },
    computed: {
      labelWidth() {
        if (this.form.layout === "horizontal") {
          return 120;
        }
        else {
          return;
        }
      }
    }
  };
</script>
`;

export default code;
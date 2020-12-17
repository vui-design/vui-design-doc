const code =
`<template>
  <vui-form layout="vertical" v-bind:model="form" v-bind:rules="rules" v-bind:requiredMark="form.requiredMark">
    <vui-form-item label="Required Mark">
      <vui-radio-group type="button" v-model="form.requiredMark">
        <vui-radio v-bind:value="true">Required</vui-radio>
        <vui-radio v-bind:value="false">Hidden</vui-radio>
        <vui-radio value="optional">Optional</vui-radio>
      </vui-radio-group>
    </vui-form-item>
    <vui-form-item prop="input" label="Input" tooltip="This is a required field">
      <vui-input v-model="form.input" placeholder="Enter something..." />
    </vui-form-item>
    <vui-form-item label="Select" tooltip="This is an optional field">
      <vui-select v-model="form.select" placeholder="Select..." style="width: 200px;">
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
          requiredMark: true,
          input: "",
          select: undefined
        },
        rules: {
          input: [
            { trigger: "blur" , required: true, message: "The name cannot be empty" }
          ]
        }
      };
    }
  };
</script>
`;

export default code;
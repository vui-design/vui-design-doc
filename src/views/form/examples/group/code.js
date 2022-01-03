const code =
`<template>
  <vui-form v-bind:model="form" v-bind:labelWidth="120">
    <vui-form-group title="Form Group1">
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
      <vui-form-item label="Multiple Select">
        <vui-select v-model="form.multipleSelect" multiple searchable placeholder="Select...">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
      </vui-form-item>
    </vui-form-group>
    <vui-form-group title="Form Group2">
      <vui-form-item label="Radio">
        <vui-radio-group v-model="form.radio">
          <vui-radio value="male">Male</vui-radio>
          <vui-radio value="female">Female</vui-radio>
        </vui-radio-group>
      </vui-form-item>
      <vui-form-item label="Checkbox">
        <vui-checkbox-group v-model="form.checkbox">
          <vui-checkbox value="eat">Eat</vui-checkbox>
          <vui-checkbox value="sleep">Sleep</vui-checkbox>
          <vui-checkbox value="run">Run</vui-checkbox>
          <vui-checkbox value="movie">Movie</vui-checkbox>
        </vui-checkbox-group>
      </vui-form-item>
      <vui-form-item label="Switch">
        <vui-switch v-model="form.switch">
          <template slot="checked">ON</template>
          <template slot="unchecked">OFF</template>
        </vui-switch>
      </vui-form-item>
      <vui-form-item label="Textarea">
        <vui-textarea v-model="form.textarea" autosize placeholder="Enter something..." />
      </vui-form-item>
    </vui-form-group>
    <div style="margin-top: 24px; text-align: center;">
      <vui-button type="primary">Submit</vui-button>
      <vui-button style="margin-left: 26px;">Cancel</vui-button>
    </div>
  </vui-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          input: "",
          select: undefined,
          multipleSelect: [],
          radio: "male",
          checkbox: ["eat"],
          switch: false,
          textarea: ""
        }
      };
    },
    watch: {
      form: {
        deep: true,
        handler: function(newValue, oldValue) {
          console.log(JSON.stringify(newValue));
        }
      }
    }
  };
</script>
`;

export default code;
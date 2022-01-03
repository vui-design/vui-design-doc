<template>
  <example v-bind:code="code" id="example-form-control">
    <template slot="demo">
      <vui-form v-bind:model="form" v-bind:labelWidth="120">
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
        <vui-form-item>
          <vui-button type="primary">Submit</vui-button>
          <vui-button style="margin-left: 16px;">Cancel</vui-button>
        </vui-form-item>
      </vui-form>
    </template>
    <template slot="title">表单控件</template>
    <template slot="description">
      <p>包括各种表单项，比如输入框、选择器、单选框、多选框、开关等。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
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
        handler: function(value) {
          console.log(JSON.stringify(value));
        }
      }
    }
  };
</script>
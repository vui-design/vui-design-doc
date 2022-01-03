<template>
  <example v-bind:code="code" id="example-form-required-mark">
    <template slot="demo">
      <vui-form layout="horizontal" v-bind:model="form" v-bind:rules="rules" v-bind:requiredMark="form.requiredMark" v-bind:labelWidth="120">
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
        <vui-form-item prop="select" label="Select" tooltip="This is an optional field">
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
    <template slot="title">必选样式</template>
    <template slot="description">
      <p>通过 <code>requiredMark</code> 切换必选与可选样式。</p>
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
          requiredMark: true,
          input: "",
          select: undefined
        },
        rules: {
          input: [
            { trigger: "blur" , required: true, message: "This is a required field" }
          ]
        }
      };
    }
  };
</script>
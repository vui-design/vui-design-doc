<template>
  <example v-bind:code="code" id="example-form-label-align">
    <template slot="demo">
      <vui-form v-bind:model="form" v-bind:labelAlign="form.labelAlign" v-bind:labelWidth="120">
        <vui-form-item>
          <vui-radio-group type="button" v-model="form.labelAlign">
            <vui-radio value="left">Left</vui-radio>
            <vui-radio value="right">Right</vui-radio>
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
    <template slot="title">标签对齐方式</template>
    <template slot="description">
      <p>标签内的文本可以设置左右对齐，仅适用于 <code>horizontal</code> 布局。</p>
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
          labelAlign: "right",
          input: "",
          select: undefined
        }
      };
    }
  };
</script>
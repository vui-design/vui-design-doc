<template>
  <example v-bind:code="code" id="example-form-layout">
    <template slot="demo">
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
    <template slot="title">表单布局</template>
    <template slot="description">
      <p>包含三种表单布局。</p>
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
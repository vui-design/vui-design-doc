<template>
  <vui-doc-example v-bind:code="code" id="example-checkbox-check-all">
    <template slot="demo">
      <div class="example-checkbox-check-all">
        <vui-checkbox
          v-bind:indeterminate="indeterminate"
          v-bind:checked="checkedAll"
          v-on:change="handleChange"
        >Check All</vui-checkbox>
        <section>
          <vui-checkbox-group v-model="checkedList" v-bind:options="options" v-on:change="handleGroupChange" />
        </section>
      </div>
    </template>
    <template slot="title">全选</template>
    <template slot="description">
      <p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  const options = ["A", "B", "C", "D"];
  const checkedList = ["A"];
  const indeterminate = checkedList.length < options.length;

  export default {
    name: "ExampleCheckboxCheckAll",
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
        options,
        checkedList,
        indeterminate,
        checkedAll: false
      };
    },
    methods: {
      handleChange(checked) {
        this.checkedList = checked ? options : [];
        this.indeterminate = false;
        this.checkedAll = checked;
      },
      handleGroupChange(checkedList) {
        this.indeterminate = !!checkedList.length && (checkedList.length < options.length);
        this.checkedAll = checkedList.length === options.length;
      }
    }
  };
</script>

<style>
  .example-checkbox-check-all section { margin-top:16px; }
</style>
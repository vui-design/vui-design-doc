<template>
  <example v-bind:code="code" id="example-table-size">
    <template slot="demo">
      <div class="example-table-size">
        <vui-radio-group type="button" v-model="size">
          <vui-radio value="small" label="Small" />
          <vui-radio value="medium" label="Medium" />
          <vui-radio value="large" label="Large" />
        </vui-radio-group>
        <vui-table v-bind:size="size" v-bind:columns="columns" v-bind:data="data" rowKey="id" />
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>通过 <code>size</code> 属性控制表格尺寸，默认为 <code>medium</code> 中等尺寸。</p>
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
      const columns = [
        { key: "name", dataIndex: "name", width: 200, title: "Name" },
        { key: "age", dataIndex: "age", width: 140, title: "Age" },
        { key: "address", dataIndex: "address", title: "Address" }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      return {
        code,
        size: "medium",
        columns,
        data
      };
    }
  };
</script>

<style>
  .example-table-size .vui-radio-group { margin-bottom:16px; }
</style>
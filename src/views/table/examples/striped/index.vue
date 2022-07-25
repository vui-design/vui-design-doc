<template>
  <example v-bind:code="code" id="example-table-striped">
    <template slot="demo">
      <vui-table striped v-bind:columns="columns" v-bind:data="data" rowKey="id" />
    </template>
    <template slot="title">斑马纹</template>
    <template slot="description">
      <p>设置属性 <code>striped</code> ，表格行会间隔显示不同颜色，用于区分不同行数据。</p>
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
        columns,
        data
      };
    }
  };
</script>
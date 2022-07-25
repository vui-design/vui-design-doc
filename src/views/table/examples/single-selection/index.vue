<template>
  <example v-bind:code="code" id="example-table-single-selection">
    <template slot="demo">
      <vui-table
        rowKey="id"
        v-bind:columns="columns"
        v-bind:data="data"
        v-bind:rowSelection="rowSelection"
        v-on:rowSelect="handleRowSelect"
      >
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">单选</template>
    <template slot="description">
      <p>设置 <code>rowSelection.multiple</code> 属性为 <code>false</code>，表格行将只允许单选。<a href="javascript:;">详见下文 API 说明</a>。</p>
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
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      const rowSelection = {
        multiple: false,
        getComponentProps(row) {
          return {
            disabled: row.name === "Joe Black"
          };
        }
      };

      return {
        code,
        columns,
        data,
        rowSelection
      };
    },
    methods: {
      handleRowSelect(value) {
        console.log(value);
      }
    }
  };
</script>
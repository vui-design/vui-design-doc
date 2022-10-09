<template>
  <example v-bind:code="code" id="example-table-bordered">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" bordered rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">带边框</template>
    <template slot="description">
      <p>添加 <code>bordered</code> 属性以使用带边框的表格。</p>
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
        { key: "salary", dataIndex: "salary", width: 140, title: "Salary" },
        { key: "email", dataIndex: "email", title: "Email" },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        {
          id: 1,
          name: "Jane Doe",
          salary: 23000,
          email: "jane.doe@example.com",
          address: "32 Park Road, London"
        },
        {
          id: 2,
          name: "Alisa Ross",
          salary: 25000,
          email: "alisa.ross@example.com",
          address: "35 Park Road, London"
        },
        {
          id: 3,
          name: "Kevin Sandra",
          salary: 22000,
          email: "kevin.sandra@example.com",
          address: "31 Park Road, London"
        },
        {
          id: 4,
          name: "Ed Hellen",
          salary: 17000,
          email: "ed.hellen@example.com",
          address: "42 Park Road, London"
        },
        {
          id: 5,
          name: "William Smith",
          salary: 27000,
          email: "william.smith@example.com",
          address: "62 Park Road, London"
        }
      ];

      return {
        code,
        columns,
        data
      };
    }
  };
</script>
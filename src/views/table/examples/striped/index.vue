<template>
  <example v-bind:code="code" id="example-table-striped">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" striped rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
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
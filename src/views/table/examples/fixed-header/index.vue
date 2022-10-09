<template>
  <example v-bind:code="code" id="example-table-fixed-header">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" v-bind:scroll="scroll" rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">固定表头</template>
    <template slot="description">
      <p>方便一页内展示大量数据。</p>
      <p>需要指定 <code>column[n]</code> 的 <code>width</code> 属性，否则列头和内容可能不对齐。如果指定 <code>width</code> 不生效，请尝试留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。</p>
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
        { id: 1, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
        { id: 2, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
        { id: 3, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
        { id: 4, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
        { id: 5, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" },
        { id: 6, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
        { id: 7, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
        { id: 8, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
        { id: 9, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
        { id: 10, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" },
        { id: 11, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
        { id: 12, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
        { id: 13, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
        { id: 14, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
        { id: 15, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" },
        { id: 16, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
        { id: 17, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
        { id: 18, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
        { id: 19, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
        { id: 20, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" }
      ];

      const scroll = {
        y: 360
      };

      return {
        code,
        columns,
        data,
        scroll
      };
    }
  };
</script>
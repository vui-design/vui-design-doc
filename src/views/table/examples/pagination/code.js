const code =
`<template>
  <div class="example-table-pagination">
    <section>
      <label>Position:</label>
      <vui-radio-group v-model="pagination.position">
        <vui-radio value="both">both</vui-radio>
        <vui-radio value="top">top</vui-radio>
        <vui-radio value="bottom">bottom</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <label>Align:</label>
      <vui-radio-group v-model="pagination.align">
        <vui-radio value="left">left</vui-radio>
        <vui-radio value="center">center</vui-radio>
        <vui-radio value="right">right</vui-radio>
      </vui-radio-group>
    </section>
    <vui-divider dashed />
    <vui-table v-bind:columns="columns" v-bind:data="data" v-bind:pagination="pagination" rowKey="id">
      <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
        <a href="javascript:;">Edit</a>
        <a href="javascript:;">Delete</a>
      </vui-space>
    </vui-table>
  </div>
</template>

<script>
  export default {
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
        },
        {
          id: 6,
          name: "Jane Doe",
          salary: 23000,
          email: "jane.doe@example.com",
          address: "32 Park Road, London"
        },
        {
          id: 7,
          name: "Alisa Ross",
          salary: 25000,
          email: "alisa.ross@example.com",
          address: "35 Park Road, London"
        },
        {
          id: 8,
          name: "Kevin Sandra",
          salary: 22000,
          email: "kevin.sandra@example.com",
          address: "31 Park Road, London"
        },
        {
          id: 9,
          name: "Ed Hellen",
          salary: 17000,
          email: "ed.hellen@example.com",
          address: "42 Park Road, London"
        },
        {
          id: 10,
          name: "William Smith",
          salary: 27000,
          email: "william.smith@example.com",
          address: "62 Park Road, London"
        },
        {
          id: 11,
          name: "Jane Doe",
          salary: 23000,
          email: "jane.doe@example.com",
          address: "32 Park Road, London"
        },
        {
          id: 12,
          name: "Alisa Ross",
          salary: 25000,
          email: "alisa.ross@example.com",
          address: "35 Park Road, London"
        },
        {
          id: 13,
          name: "Kevin Sandra",
          salary: 22000,
          email: "kevin.sandra@example.com",
          address: "31 Park Road, London"
        },
        {
          id: 14,
          name: "Ed Hellen",
          salary: 17000,
          email: "ed.hellen@example.com",
          address: "42 Park Road, London"
        },
        {
          id: 15,
          name: "William Smith",
          salary: 27000,
          email: "william.smith@example.com",
          address: "62 Park Road, London"
        }
      ];

      const pagination = {
        position: "both",
        align: "right"
      };

      return {
        columns,
        data,
        pagination
      };
    }
  };
</script>

<style>
  .example-table-pagination section { display:flex; justify-content:flex-start; align-items:center; }
  .example-table-pagination section label { margin-right:16px; }
</style>
`;

export default code;
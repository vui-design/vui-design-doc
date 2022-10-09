const code =
`<template>
  <div class="example-table-custom-style">
    <h4>自定义行样式</h4>
    <vui-table v-bind:columns="table1.columns" v-bind:data="table1.data" v-bind:rowClassName="table1.rowClassName" rowKey="id" />
    <h4>自定义列样式</h4>
    <vui-table v-bind:columns="table2.columns" v-bind:data="table2.data" rowKey="id" />
    <h4>自定义任意单元格样式</h4>
    <vui-table v-bind:columns="table3.columns" v-bind:data="table3.data" rowKey="id" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        table1: {
          columns: [
            { key: "name", dataIndex: "name", width: 200, title: "Name" },
            { key: "salary", dataIndex: "salary", width: 140, title: "Salary" },
            { key: "email", dataIndex: "email", title: "Email" },
            { key: "address", dataIndex: "address", title: "Address" }
          ],
          data: [
            { id: 1, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
            { id: 2, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
            { id: 3, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
            { id: 4, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
            { id: 5, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" }
          ],
          rowClassName: (row, rowIndex, rowKey) => {
            if (row.id === 2) {
              return "vui-table-row-info";
            }
            else if (row.id === 4) {
              return "vui-table-row-danger";
            }
          }
        },
        table2: {
          columns: [
            { key: "name", dataIndex: "name", width: 200, title: "Name" },
            { key: "salary", dataIndex: "salary", width: 140, title: "Salary", className: "vui-table-row-column-info" },
            { key: "email", dataIndex: "email", title: "Email" },
            { key: "address", dataIndex: "address", title: "Address" }
          ],
          data: [
            { id: 1, name: "Jane Doe", salary: 23000, email: "jane.doe@example.com", address: "32 Park Road, London" },
            { id: 2, name: "Alisa Ross", salary: 25000, email: "alisa.ross@example.com", address: "35 Park Road, London" },
            { id: 3, name: "Kevin Sandra", salary: 22000, email: "kevin.sandra@example.com", address: "31 Park Road, London" },
            { id: 4, name: "Ed Hellen", salary: 17000, email: "ed.hellen@example.com", address: "42 Park Road, London" },
            { id: 5, name: "William Smith", salary: 27000, email: "william.smith@example.com", address: "62 Park Road, London" }
          ]
        },
        table3: {
          columns: [
            { key: "name", dataIndex: "name", width: 200, title: "Name" },
            { key: "salary", dataIndex: "salary", width: 140, title: "Salary" },
            { key: "email", dataIndex: "email", title: "Email" },
            { key: "address", dataIndex: "address", title: "Address" }
          ],
          data: [
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
              address: "35 Park Road, London",
              cellClassName: {
                salary: "vui-table-row-column-info",
                address: "vui-table-row-column-danger"
              }
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
              address: "42 Park Road, London",
              cellClassName: {
                name: "vui-table-row-column-info"
              }
            },
            {
              id: 5,
              name: "William Smith",
              salary: 27000,
              email: "william.smith@example.com",
              address: "62 Park Road, London"
            }
          ]
        }
      };
    }
  };
</script>

<style>
  .example-table-custom-style h4 { margin-top:16px; margin-bottom:16px; }
  .example-table-custom-style h4:first-child { margin-top:0; }

  .example-table-custom-style .vui-table > .vui-table-body > table > tbody > tr.vui-table-row-info > td { background-color:#5bc0de; color:#fff; }
  .example-table-custom-style .vui-table > .vui-table-body > table > tbody > tr.vui-table-row-danger > td { background-color:#ff4d4f; color:#fff; }

  .example-table-custom-style .vui-table > .vui-table-body > table > tbody > tr > td.vui-table-row-column-info { background-color:#5bc0de; color:#fff; }
  .example-table-custom-style .vui-table > .vui-table-body > table > tbody > tr > td.vui-table-row-column-danger { background-color:#ff4d4f; color:#fff; }
</style>
`;

export default code;
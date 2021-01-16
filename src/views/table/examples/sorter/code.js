const code =
`<template>
  <vui-table v-bind:columns="columns" v-bind:data="data" rowKey="id">
    <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </vui-space>
  </vui-table>
</template>

<script>
  export default {
    data() {
      const columns = [
        {
          key: "name",
          dataIndex: "name",
          width: 200,
          title: "Name",
          sorter: {
            method(a, b, order) {
              if (order === "asc") {
                return a.length > b.length ? 1 : -1;
              }
              else if (order === "desc") {
                return a.length < a.length ? 1 : -1;
              }
              else {
                return 0;
              }
            }
          }
        },
        {
          key: "age",
          dataIndex: "age",
          width: 140,
          sorter: true,
          title: "Age"
        },
        {
          key: "address",
          dataIndex: "address",
          title: "Address"
        },
        {
          key: "action",
          title: "Action",
          slot: "action",
          width: 140
        }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      return {
        columns,
        data
      };
    }
  };
</script>
`;

export default code;
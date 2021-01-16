const code =
`<template>
  <vui-table v-bind:columns="columns" v-bind:data="data" v-bind:scroll="scroll" rowKey="id">
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
        { key: "name", dataIndex: "name", width: 200, title: "Name" },
        { key: "age", dataIndex: "age", width: 140, title: "Age" },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" },
        { id: 5, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 6, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 7, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 8, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" },
        { id: 9, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 10, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 11, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 12, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" },
        { id: 13, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 14, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 15, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 16, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" },
      ];

      const scroll = {
        y: 360
      };

      return {
        columns,
        data,
        scroll
      };
    }
  };
</script>
`;

export default code;
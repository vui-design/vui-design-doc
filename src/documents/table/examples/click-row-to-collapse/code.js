const code =
`<template>
  <vui-table
    rowKey="id"
    v-bind:columns="columns"
    v-bind:data="data"
    v-bind:rowCollapsion="rowCollapsion"
    v-on:rowCollapse="handleRowCollapse"
  >
    <template slot="collapsion" slot-scope="{ row, rowIndex }">
      {{row.name}}, {{row.age}}, {{row.address}}
    </template>
    <vui-action-group slot="action" slot-scope="{ row, rowIndex }">
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </vui-action-group>
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
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      const rowCollapsion = {
        title: "#",
        slot: "collapsion",
        clickRowToCollapse: true,
        ignoreElements(element) {
          return element && element.tagName.toLowerCase() == "a";
        }
      };

      return {
        columns,
        data,
        rowCollapsion
      };
    },
    methods: {
      handleRowCollapse(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;
const code =
`<template>
  <vui-table
    v-bind:columns="columns"
    v-bind:data="data"
    v-bind:rowCollapsion="rowCollapsion"
    v-on:collapse="handleCollapse"
  >
    <template slot="action" slot-scope="{ row, rowIndex }">
      <vui-action-list>
        <a href="javascript:;">Edit</a>
        <a href="javascript:;">Delete</a>
      </vui-action-list>
    </template>
  </vui-table>
</template>

<script>
  export default {
    data() {
      const columns = [
        { key: "name", dataIndex: "name", title: "Name", width: 200 },
        { key: "age", dataIndex: "age", title: "Age", width: 200 },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", title: "Action", width: 150, slot: "action" }
      ];

      const data = [
        { key: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { key: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { key: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { key: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      const rowCollapsion = {
        title: "#",
        clickRowToCollapse: true,
        ignoreElements(element) {
          return element && element.tagName.toLowerCase() == "a";
        },
        render(h, row) {
          return row.name + ", " + row.age + ", " + row.address;
        }
      };

      return {
        code,
        columns,
        data,
        rowCollapsion
      };
    },
    methods: {
      handleCollapse(value) {
        console.log(value);
        this.rowCollapsion.value = value;
      }
    }
  };
</script>
`;

export default code;
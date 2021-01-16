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
          filter: {
            options: [
              {
                value: "John",
                label: "John"
              },
              {
                value: "Joe",
                label: "Joe"
              }
            ],
            multiple: true,
            value: [],
            method(value, row) {
              if (value.length === 0) {
                return true;
              }

              return value.some(target => row.name.indexOf(target) > -1);
            }
          }
        },
        {
          key: "age",
          dataIndex: "age",
          width: 140,
          title: "Age",
          filter: {
            options: [
              {
                value: 1,
                label: "Less than 25"
              },
              {
                value: 2,
                label: "Greater tha 25"
              }
            ],
            multiple: false,
            method(value, row) {
              if (!value) {
                return true;
              }

              if (value === 1) {
                return row.age <= 25;
              }
              else if (value === 2) {
                return row.age > 25;
              }
            }
          }
        },
        {
          key: "address",
          dataIndex: "address",
          title: "Address"
        },
        {
          key: "action",
          width: 140,
          slot: "action",
          title: "Action"
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
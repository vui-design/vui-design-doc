const code =
`<template>
  <vui-table :columns="columns" :data="data" />
</template>

<script>
  export default {
    data() {
      const columns = [
        {
          key: "name",
          dataIndex: "name",
          title: "Name",
          width: 200,
          filter: {
            options: [
              {
                label: "John",
                value: "John"
              },
              {
                label: "Joe",
                value: "Joe"
              }
            ],
            multiple: true,
            value: [],
            method(value, row) {
              if (value.length === 0) {
                return true;
              }

              return value.some(val => {
                return row.name.indexOf(val) > -1;
              });
            }
          }
        },
        {
          key: "age",
          dataIndex: "age",
          title: "Age",
          width: 200,
          filter: {
            options: [
              {
                label: "Less than 25",
                value: 1
              },
              {
                label: "Greater tha 25",
                value: 2
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
          title: "Action",
          width: 150,
          render(h, { column, row, index }) {
            return (
              <div>
                <a href="javascript:;">Edit</a>
                <vui-divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </div>
            );
          }
        }
      ];

      const data = [
        {
          key: 1,
          name: "John Brown",
          age: 20,
          address: "New York No. 1 Lake Park"
        },
        {
          key: 2,
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          key: 3,
          name: "Joe Black",
          age: 30,
          address: "Sidney No. 1 Lake Park"
        },
        {
          key: 4,
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
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
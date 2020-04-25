const code =
`<template>
  <vui-table :columns="columns" :data="data" :scroll="scroll" />
</template>

<script>
  export default {
    data() {
      const columns = [
        {
          key: "name",
          dataIndex: "name",
          title: "Name",
          fixed: "left",
          width: 150,
          align: "center",
          filter: {
            options: [
              {
                label: "Joe",
                value: "Joe"
              },
              {
                label: "John",
                value: "John"
              }
            ],
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
          key: "other",
          title: "Other",
          align: "center",
          children: [
            {
              key: "age",
              dataIndex: "age",
              title: "Age",
              width: 100,
              align: "center",
              sort: {
                order: "normal"
              },
              filter: {
                options: [
                  {
                    label: "Less than 10",
                    value: 1
                  },
                  {
                    label: "Greater than 10",
                    value: 2
                  }
                ],
                multiple: false,
                method(value, row) {
                  if (!value) {
                    return true;
                  }

                  if (value === 1) {
                    return row.age <= 10;
                  }
                  else if (value === 2) {
                    return row.age > 10;
                  }
                }
              }
            },
            {
              key: "address",
              title: "Address",
              align: "center",
              children: [
                {
                  key: "street",
                  dataIndex: "street",
                  title: "Street",
                  width: 150,
                  align: "center"
                },
                {
                  key: "block",
                  title: "Block",
                  align: "center",
                  children: [
                    {
                      key: "building",
                      dataIndex: "building",
                      title: "Building",
                      width: 100,
                      align: "center"
                    },
                    {
                      key: "door",
                      dataIndex: "door",
                      title: "Door No.",
                      width: 150,
                      align: "center",
                      sort: true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          key: "company",
          title: "Company",
          align: "center",
          children: [
            {
              key: "caddress",
              dataIndex: "caddress",
              title: "Company Address",
              align: "center"
            },
            {
              key: "cname",
              dataIndex: "cname",
              title: "Company Name",
              align: "center"
            }
          ]
        },
        {
          key: "gender",
          dataIndex: "gender",
          title: "Gender",
          fixed: "right",
          width: 100,
          align: "center"
        }
      ];

      const data = [];

      for (let i = 0; i < 20; i++) {
        data.push({
          key: i,
          name: "John Brown",
          age: i + 1,
          street: "Lake Park",
          building: "C",
          door: 2035,
          caddress: "Lake Street 42",
          cname: "SoftLake Co",
          gender: "M"
        });
      }

      const scroll = {
        x: 1200,
        y: 300
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
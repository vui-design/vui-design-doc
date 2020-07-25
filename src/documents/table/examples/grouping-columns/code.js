const code =
`<template>
  <vui-table bordered v-bind:columns="columns" v-bind:data="data" v-bind:scroll="scroll" rowKey="id" />
</template>

<script>
  export default {
    data() {
      const columns = [
        {
          key: "name",
          dataIndex: "name",
          fixed: "left",
          width: 200,
          align: "center",
          title: "Name",
          filter: {
            options: [
              {
                value: "Joe",
                label: "Joe"
              },
              {
                value: "John",
                label: "John"
              }
            ],
            method(value, row) {
              if (value.length === 0) {
                return true;
              }

              return value.some(target => row.name.indexOf(target) > -1);
            }
          }
        },
        {
          key: "other",
          align: "center",
          title: "Other",
          children: [
            {
              key: "age",
              dataIndex: "age",
              width: 100,
              title: "Age",
              align: "center",
              sort: {
                order: "none"
              },
              filter: {
                options: [
                  {
                    value: 1,
                    label: "Less than 10"
                  },
                  {
                    value: 2,
                    label: "Greater than 10"
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
              align: "center",
              title: "Address",
              children: [
                {
                  key: "street",
                  dataIndex: "street",
                  width: 200,
                  align: "center",
                  title: "Street"
                },
                {
                  key: "block",
                  align: "center",
                  title: "Block",
                  children: [
                    {
                      key: "building",
                      dataIndex: "building",
                      width: 120,
                      align: "center",
                      title: "Building"
                    },
                    {
                      key: "door",
                      dataIndex: "door",
                      width: 140,
                      align: "center",
                      sort: true,
                      title: "Door No."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          key: "company",
          align: "center",
          title: "Company",
          children: [
            {
              key: "caddress",
              dataIndex: "caddress",
              align: "center",
              title: "Company Address"
            },
            {
              key: "cname",
              dataIndex: "cname",
              align: "center",
              title: "Company Name"
            }
          ]
        },
        {
          key: "gender",
          dataIndex: "gender",
          fixed: "right",
          width: 100,
          align: "center",
          title: "Gender"
        }
      ];

      const data = [];

      for (let i = 0; i < 20; i++) {
        data.push({
          id: i,
          name: "John Brown",
          age: i + 1,
          street: "Lake Park",
          building: "A",
          door: 1024,
          caddress: "Lake Street 42",
          cname: "SoftLake Co",
          gender: "M"
        });
      }

      const scroll = {
        x: 1340,
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
`;

export default code;
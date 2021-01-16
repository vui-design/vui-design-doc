const code =
`<template>
  <vui-table bordered v-bind:columns="columns" v-bind:data="data" rowKey="id">
    <a href="javascript:;" slot="name" slot-scope="{ row, rowIndex }">{{row.name}}</a>
  </vui-table>
</template>

<script>
  export default {
    data() {
      const columns = [
        { key: "name", dataIndex: "name", width: 200, slot: "name", title: "Name", cellProps: this.getCellProps },
        { key: "age", dataIndex: "age", width: 140, title: "Age", cellProps: this.getCellProps },
        { key: "tel", dataIndex: "tel", colSpan: 2, title: "Home phone", cellProps: this.getCellProps },
        { key: "phone", dataIndex: "phone", colSpan: 0, title: "Phone", cellProps: this.getCellProps },
        { key: "address", dataIndex: "address", title: "Address", cellProps: this.getCellProps }
      ];

      const data = [
        { id: 1, name: 'John Brown', age: 32, tel: '0571-22098909', phone: 18889898989, address: 'New York No. 1 Lake Park' },
        { id: 2, name: 'Jim Green', age: 42, tel: '0571-22098333', phone: 18889898888, address: 'London No. 1 Lake Park' },
        { id: 3, name: 'Joe Black', age: 32, tel: '0575-22098909', phone: 18900010002, address: 'Sidney No. 1 Lake Park' },
        { id: 4, name: 'Jim Red', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'London No. 2 Lake Park' },
        { id: 5, name: 'Jake White', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'Dublin No. 2 Lake Park' }
      ];

      return {
        code,
        columns,
        data
      };
    },
    methods: {
      getCellProps({ row, rowIndex, column, columnIndex }) {
        if (column.key === "name") {
          if (rowIndex === 4) {
            return {
              colSpan: 5
            };
          }
        }
        else if (column.key === "tel") {
          if (rowIndex == 2) {
            return {
              rowSpan: 2
            };
          }
          else if (rowIndex == 3) {
            return {
              rowSpan: 0
            };
          }
          else if (rowIndex == 4) {
            return {
              rowSpan: 0,
              colSpan: 0
            };
          }
        }
        else {
          if (rowIndex === 4) {
            return {
              colSpan: 0
            };
          }
        }
      }
    }
  };
</script>
`;

export default code;
<template>
  <example v-bind:code="code" id="example-table-rowspan-colspan">
    <template slot="demo">
      <vui-table bordered v-bind:columns="columns" v-bind:data="data" rowKey="id">
        <a href="javascript:;" slot="name" slot-scope="{ row, rowIndex }">{{row.name}}</a>
      </vui-table>
    </template>
    <template slot="title">表格行/列合并</template>
    <template slot="description">
      <p>表头只支持列合并，使用 <code>column</code> 的 <code>colSpan</code> 属性进行设置。注意，由于在进行表头分组时，<code>Table</code> 组件将根据嵌套关系自动计算 <code>rowSpan</code> 和 <code>colSpan</code> 等属性，故在该用法中无法支持自定义表头列合并。</p>
      <p>表格支持行/列合并，利用 <code>column</code> 的 <code>cellProps</code> 属性（也可以定义为方法）返回 <code>{ rowSpan, colSpan }</code> 等单元格属性实现表格行/列合并，当 <code>rowSpan</code> 或 <code>colSpan</code> 取值为 <code>0</code> 时单元格不会渲染。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
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
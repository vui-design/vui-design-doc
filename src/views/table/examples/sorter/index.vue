<template>
  <example v-bind:code="code" id="example-table-sorter">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">排序</template>
    <template slot="description">
      <p>通过给 <code>columns</code> 配置项设置 <code>sorter</code> 属性即可对相应列数据进行排序。</p>
      <p>排序默认使用升序和降序，也可以通过设置 <code>sorter.method</code> 指定一个自定义排序函数，接收 <code>a</code>、<code>b</code> 和 <code>order</code> 作为参数，其中 <code>a</code>、<code>b</code> 均为行数据，<code>order</code> 为当前排序方式。</p>
      <p>通过给某一列设置 <code>sorter.order</code> 可以在初始化时使用排序。</p>
      <p>如果使用远程排序，可以设置 <code>sorter.useServerSort</code> 为 <code>true</code>，并监听表格的 <code>sort</code> 排序事件进行远程排序，并手动更新 <code>data</code> 数据源。</p>
      <p>注意，本地排序并不会影响到源数据 <code>data</code>。</p>
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
        code,
        columns,
        data
      };
    }
  };
</script>
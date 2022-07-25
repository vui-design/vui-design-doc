<template>
  <example v-bind:code="code" id="example-table-filter">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">筛选</template>
    <template slot="description">
      <p>通过给 <code>columns</code> 配置项设置 <code>filter</code> 属性即可对相应列数据进行筛选。</p>
      <p><code>filter.options</code> 指定筛选下拉菜单的选项。</p>
      <p>必须指定一个筛选函数 <code>filter.method</code> 才可以进行筛选，接收 <code>value</code>、<code>row</code> 作为参数，详见 Demo 和 API。</p>
      <p>如果指定 <code>filter.multiple</code> 为 <code>false</code> 则表示使用单选，默认为多选。</p>
      <p>注意，筛选并不会影响到源数据 <code>data</code>。</p>
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
        code,
        columns,
        data
      };
    }
  };
</script>
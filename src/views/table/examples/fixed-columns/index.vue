<template>
  <example v-bind:code="code" id="example-table-fixed-columns">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" v-bind:scroll="scroll" rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">固定列</template>
    <template slot="description">
      <p>通过将 <code>columns[n]</code> 列选项的 <code>fixed</code> 属性设置为 <code>left</code> 或 <code>right</code>，可以左右固定需要的列。当横向内容过多时可以使用。</p>
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
        { key: "name", dataIndex: "name", fixed: "left", width: 200, title: "Name" },
        { key: "age", dataIndex: "age", width: 140, title: "Age" },
        { key: "gender", dataIndex: "gender", width: 100, title: "Gender" },
        { key: "country", dataIndex: "country", width: 160, title: "Country" },
        { key: "city", dataIndex: "city", width: 160, title: "City" },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "postcode", dataIndex: "postcode", width: 100, title: "Postcode" },
        { key: "action", fixed: "right", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, gender: "M", country: "America", city: "New York", address: "New York No. 1 Lake Park", postcode: 100000 },
        { id: 2, name: "Jim Green", age: 24, gender: "M", country: "France", city: "London", address: "London No. 1 Lake Park", postcode: 100000 },
        { id: 3, name: "Joe Black", age: 30, gender: "M", country: "Australia", city: "Sidney", address: "Sidney No. 1 Lake Park", postcode: 100000 },
        { id: 4, name: "Jon Snow", age: 26, gender: "M", country: "Canada", city: "Ottawa", address: "Ottawa No. 2 Lake Park", postcode: 100000 },
        { id: 5, name: "John Brown", age: 20, gender: "M", country: "America", city: "New York", address: "New York No. 1 Lake Park", postcode: 100000 },
        { id: 6, name: "Jim Green", age: 24, gender: "M", country: "France", city: "London", address: "London No. 1 Lake Park", postcode: 100000 },
        { id: 7, name: "Joe Black", age: 30, gender: "M", country: "Australia", city: "Sidney", address: "Sidney No. 1 Lake Park", postcode: 100000 },
        { id: 8, name: "Jon Snow", age: 26, gender: "M", country: "Canada", city: "Ottawa", address: "Ottawa No. 2 Lake Park", postcode: 100000 }
      ];

      const scroll = {
        x: 1400
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
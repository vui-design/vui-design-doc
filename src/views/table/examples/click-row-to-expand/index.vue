<template>
  <example v-bind:code="code" id="example-table-click-row-to-expand">
    <template slot="demo">
      <vui-table
        rowKey="id"
        v-bind:columns="columns"
        v-bind:data="data"
        v-bind:rowExpansion="rowExpansion"
        v-on:rowExpand="handleRowExpand"
      >
        <template slot="expansion" slot-scope="{ row, rowIndex }">
          {{row.name}}, {{row.age}}, {{row.address}}
        </template>
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">点击行展开</template>
    <template slot="description">
      <p>点击行来展开子行，展开子行的行为默认是由图标控制的。通过 <code>ignoreElements</code> 方法过滤需要忽略的元素，如本例中的操作按钮。</p>
      <p>注意，该示例使用插槽的形式来自定义展开行的内容。</p>
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
        { key: "name", dataIndex: "name", width: 200, title: "Name" },
        { key: "age", dataIndex: "age", width: 140, title: "Age" },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        { id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
        { id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
        { id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
        { id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
      ];

      const rowExpansion = {
        title: "#",
        slot: "expansion",
        clickRowToExpand: true,
        ignoreElements(element) {
          return element && element.tagName.toLowerCase() == "a";
        }
      };

      return {
        code,
        columns,
        data,
        rowExpansion
      };
    },
    methods: {
      handleRowExpand(value) {
        console.log(value);
      }
    }
  };
</script>
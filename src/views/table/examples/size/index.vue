<template>
  <example v-bind:code="code" id="example-table-size">
    <template slot="demo">
      <div class="example-table-size">
        <vui-radio-group type="button" v-model="size">
          <vui-radio value="small" label="Small" />
          <vui-radio value="medium" label="Medium" />
          <vui-radio value="large" label="Large" />
        </vui-radio-group>
        <vui-table v-bind:size="size" v-bind:columns="columns" v-bind:data="data" rowKey="id" />
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>通过 <code>size</code> 属性控制表格尺寸，默认为 <code>medium</code> 中等尺寸。</p>
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
        { key: "salary", dataIndex: "salary", width: 140, title: "Salary" },
        { key: "email", dataIndex: "email", title: "Email" },
        { key: "address", dataIndex: "address", title: "Address" }
      ];

      const data = [
        {
          id: 1,
          name: "Jane Doe",
          salary: 23000,
          email: "jane.doe@example.com",
          address: "32 Park Road, London"
        },
        {
          id: 2,
          name: "Alisa Ross",
          salary: 25000,
          email: "alisa.ross@example.com",
          address: "35 Park Road, London"
        },
        {
          id: 3,
          name: "Kevin Sandra",
          salary: 22000,
          email: "kevin.sandra@example.com",
          address: "31 Park Road, London"
        },
        {
          id: 4,
          name: "Ed Hellen",
          salary: 17000,
          email: "ed.hellen@example.com",
          address: "42 Park Road, London"
        },
        {
          id: 5,
          name: "William Smith",
          salary: 27000,
          email: "william.smith@example.com",
          address: "62 Park Road, London"
        }
      ];

      return {
        code,
        size: "medium",
        columns,
        data
      };
    }
  };
</script>

<style>
  .example-table-size .vui-radio-group { margin-bottom:16px; }
</style>
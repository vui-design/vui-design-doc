const code =
`<template>
  <div class="example-checkbox-check-all">
    <vui-checkbox
      v-bind:indeterminate="indeterminate"
      v-bind:checked="checkedAll"
      v-on:change="handleChange"
    >Check All</vui-checkbox>
    <section>
      <vui-checkbox-group v-model="checkedList" v-bind:options="options" v-on:change="handleGroupChange" />
    </section>
  </div>
</template>

<script>
  const options = ["A", "B", "C", "D"];
  const checkedList = ["A"];
  const indeterminate = checkedList.length < options.length;

  export default {
    data() {
      return {
        options,
        checkedList,
        indeterminate,
        checkedAll: false
      };
    },
    methods: {
      handleChange(checked) {
        this.checkedList = checked ? options : [];
        this.indeterminate = false;
        this.checkedAll = checked;
      },
      handleGroupChange(checkedList) {
        this.indeterminate = !!checkedList.length && (checkedList.length < options.length);
        this.checkedAll = checkedList.length === options.length;
      }
    }
  };
</script>

<style>
  .example-checkbox-check-all { line-height:1; }
  .example-checkbox-check-all section { margin-top:16px; }
</style>
`;

export default code;
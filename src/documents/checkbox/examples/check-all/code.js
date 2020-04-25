const code =
`<template>
  <div class="example-checkbox-check-all">
    <vui-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="handleChange">Check All</vui-checkbox>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group :options="options" v-model="checkedList" @change="handleGroupChange" />
    </div>
  </div>
</template>

<script>
  let options = ["A", "B", "C", "D"];
  let checkedList = ["A"];
  let indeterminate = checkedList.length < options.length;

  export default {
    data() {
      return {
        options,
        checkedList,
        indeterminate,
        checkAll: false
      };
    },
    methods: {
      handleChange(checked) {
        this.checkedList = checked ? options : [];
        this.indeterminate = false;
        this.checkAll = checked;
      },
      handleGroupChange(checkedList) {
        this.indeterminate = !!checkedList.length && (checkedList.length < options.length);
        this.checkAll = checkedList.length === options.length;
      }
    }
  };
</script>
`;

export default code;
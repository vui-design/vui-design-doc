const code =
`<template>
  <vui-pagination v-model="page" v-bind:total="500" showPageSizer v-on:changePageSize="handleChangePageSize" />
</template>

<script>
  export default {
    data() {
      return {
        page: 3
      };
    },
    watch: {
      page(value) {
        console.log("page: " + value);
      }
    },
    methods: {
      handleChangePageSize(value) {
        console.log("pageSize: " + value);
      }
    }
  };
</script>
`;

export default code;
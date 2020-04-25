const code =
`<template>
  <vui-pagination
    v-model="page"
    :total="500"
    showPageElevator
    @change="handleChangePage"
  />
</template>

<script>
  export default {
    data() {
      return {
        page: 2
      };
    },
    methods: {
      handleChangePage(value) {
        console.log("page: " + value);
      }
    }
  };
</script>
`;

export default code;
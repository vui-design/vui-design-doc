const code =
`<template>
  <vui-pagination v-model="page" :total="500" showPageSizer />
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
    }
  };
</script>
`;

export default code;
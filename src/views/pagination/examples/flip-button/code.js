const code =
`<template>
  <vui-pagination v-model="page" v-bind:total="100" prevPageText="上一页" nextPageText="下一页" />
</template>

<script>
  export default {
    data() {
      return {
        page: 1
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
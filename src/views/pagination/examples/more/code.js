const code =
`<template>
  <vui-pagination v-model="page" :total="500" />
</template>

<script>
  export default {
    data() {
      return {
        page: 6
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
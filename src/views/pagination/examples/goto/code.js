const code =
`<template>
  <vui-pagination
    v-model="page"
    v-bind:total="500"
    showPageElevator
    v-on:change="handleChangePage"
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
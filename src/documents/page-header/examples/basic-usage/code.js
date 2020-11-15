const code =
`<template>
  <vui-page-header
    style="border: 1px solid #e6e6e6;"
    title="Title"
    subTitle="This is a subtitle"
    v-on:back="handleBack"
  />
</template>

<script>
  export default {
    methods: {
      handleBack() {
        this.$router.back();
      }
    }
  };
</script>
`;

export default code;
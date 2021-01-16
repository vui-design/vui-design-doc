const code =
`<template>
  <div class="example-pagination-hide-on-single-page">
    <vui-switch v-model="hideOnSinglePage" />
    <vui-pagination :total="8" :hideOnSinglePage="hideOnSinglePage" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hideOnSinglePage: false
      };
    }
  };
</script>

<style>
  .example-pagination-hide-on-single-page .vui-pagination { margin-top:15px; }
</style>
`;

export default code;
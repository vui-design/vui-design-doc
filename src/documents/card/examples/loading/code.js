const code =
`<template>
  <div class="example-card-loading">
    <vui-button @click="handleClick">Toggle loading</vui-button>
    <vui-card title="Card title" :loading="loading">
      <p>Card content...</p>
      <p>Card content...</p>
      <p>Card content...</p>
    </vui-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      };
    },
    methods: {
      handleClick() {
        this.loading = !this.loading;
      }
    }
  };
</script>

<style>
  .example-card-loading .vui-card { margin-top:20px; }
</style>
`;

export default code;
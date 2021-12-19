const code =
`<template>
  <div class="example-link-loading">
    <vui-link type="primary" icon="dustbin" v-bind:loading="deleting" v-on:click="handleDelete">Delete</vui-link>
    <vui-link type="primary" v-bind:loading="loading" v-on:click="handleClick">Click me</vui-link>
    <vui-link type="primary" loading>Loading</vui-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        deleting: false,
        loading: false
      };
    },
    methods: {
      handleDelete() {
        this.deleting = true;
      },
      handleClick() {
        this.loading = true;
      }
    }
  };
</script>

<style>
  .example-link-loading .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;
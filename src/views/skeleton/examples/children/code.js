const code =
`<template>
  <div class="example-skeleton-children">
    <vui-skeleton animated v-bind:loading="loading">
      <h4>What is Vue.js?</h4>
      <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.</p>
    </vui-skeleton>
    <vui-button v-bind:disabled="loading" v-on:click="showSkeleton">Show Skeleton</vui-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      showSkeleton() {
        this.loading = true;
        setTimeout(() => this.loading = false, 3000);
      }
    }
  };
</script>

<style>
  .example-skeleton-children h4 { margin-bottom:16px; color:#262626; }
  .example-skeleton-children button { margin-top:16px; }
</style>
`;

export default code;
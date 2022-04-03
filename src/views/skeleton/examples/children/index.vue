<template>
  <example v-bind:code="code" id="example-skeleton-children">
    <template slot="demo">
      <div class="example-skeleton-children">
        <vui-skeleton animated v-bind:loading="loading">
          <h4>What is Vue.js?</h4>
          <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.</p>
        </vui-skeleton>
        <vui-button v-bind:disabled="loading" v-on:click="showSkeleton">Show Skeleton</vui-button>
      </div>
    </template>
    <template slot="title">包含子组件</template>
    <template slot="description">
      <p>加载占位图包含子组件。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
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
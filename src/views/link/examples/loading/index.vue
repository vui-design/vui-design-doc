<template>
  <example v-bind:code="code" id="example-link-loading">
    <template slot="demo">
      <div class="example-link-loading">
        <vui-link type="primary" icon="dustbin" v-bind:loading="deleting" v-on:click="handleDelete">Delete</vui-link>
        <vui-link type="primary" v-bind:loading="loading" v-on:click="handleClick">Click me</vui-link>
        <vui-link type="primary" loading>Loading</vui-link>
      </div>
    </template>
    <template slot="title">加载状态</template>
    <template slot="description">
      <p>添加 <code>loading</code> 属性即可让文字链接处于加载状态。</p>
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
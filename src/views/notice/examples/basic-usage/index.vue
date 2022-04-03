<template>
  <example v-bind:code="code" id="example-notice-basic-usage">
    <template slot="demo">
      <div class="example-notice-basic-usage">
        <vui-button type="primary" v-on:click="showNotice(true)">With description</vui-button>
        <vui-button v-on:click="showNotice(false)">No description</vui-button>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法，<code>5</code> 秒后自动关闭。</p>
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
        code
      };
    },
    methods: {
      showNotice(withDescription) {
        this.$notice.open({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      }
    }
  };
</script>

<style>
  .example-notice-basic-usage > .vui-button + .vui-button { margin-left:16px; }
</style>
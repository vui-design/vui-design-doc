<template>
  <example v-bind:code="code" id="example-divider-basic-usage">
    <template slot="demo">
      <div class="example-divider-basic-usage">
        <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>
        <vui-divider />
        <p>That was my way of getting through difficult times of low confidence – hard work.</p>
        <vui-divider dashed />
        <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>基本用法，支持虚线样式。</p>
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
    }
  };
</script>
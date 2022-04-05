<template>
  <example v-bind:code="code" id="example-timeline-basic-usage">
    <template slot="demo">
      <div class="example-timeline-basic-usage">
        <vui-timeline>
          <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
        </vui-timeline>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单定义一个时间轴的用法。</p>
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
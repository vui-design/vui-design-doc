<template>
  <example v-bind:code="code" id="example-timeline-custom">
    <template slot="demo">
      <div class="example-timeline-custom">
        <vui-timeline pending>
          <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
          <vui-timeline-item color="red">
            <vui-icon slot="dot" type="time" v-bind:size="16" />
            Solve initial network problems 2018-01-01
          </vui-timeline-item>
          <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
          <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
          <vui-timeline-item>
            <vui-icon slot="dot" type="loading" v-bind:size="16" />
            Recording...
          </vui-timeline-item>
        </vui-timeline>
      </div>
    </template>
    <template slot="title">自定义时间轴点</template>
    <template slot="description">
      <p>接受一个 <code>slot</code> 来自定义时间轴点，比如一个图标。</p>
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
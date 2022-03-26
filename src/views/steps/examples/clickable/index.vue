<template>
  <example v-bind:code="code" id="example-steps-clickable">
    <template slot="demo">
      <div class="example-steps-clickable">
        <vui-steps v-bind:step="step" v-on:change="handleChange">
          <vui-step title="Step 1" description="This is a description." />
          <vui-step title="Step 2" description="This is a description." />
          <vui-step title="Step 3" description="This is a description." />
        </vui-steps>
        <vui-divider v-bind:gutter="24" />
        <vui-steps direction="vertical" v-bind:step="step" v-on:change="handleChange">
          <vui-step title="Step 1" description="This is a description." />
          <vui-step title="Step 2" description="This is a description." />
          <vui-step title="Step 3" description="This is a description." />
        </vui-steps>
      </div>
    </template>
    <template slot="title">可点击</template>
    <template slot="description">
      <p>设置 <code>onChange</code> 事件后，<code>Steps</code> 变为可点击状态。</p>
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
        step: 1
      };
    },
    methods: {
      handleChange(step) {
        this.step = step;
      }
    }
  };
</script>
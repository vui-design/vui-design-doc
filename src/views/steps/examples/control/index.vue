<template>
  <example v-bind:code="code" id="example-steps-control">
    <template slot="demo">
      <div class="example-steps-control">
        <vui-steps v-bind:step="step">
          <vui-step v-for="(item, index) in steps" v-bind:key="index" v-bind:title="item.title" />
        </vui-steps>
        <div class="example-steps-control-content">{{steps[step].content}}</div>
        <div class="example-steps-control-action">
          <vui-button type="primary" v-on:click="handleNext">
            <template v-if="step < 3">Next</template>
            <template v-else>Done</template>
          </vui-button>
          <vui-button v-if="step > 0" v-on:click="handlePrev">Previous</vui-button>
        </div>
      </div>
    </template>
    <template slot="title">切换步骤</template>
    <template slot="description">
      <p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
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
        steps: [
          { title: "First", content: "First Content" },
          { title: "Second", content: "Second Content" },
          { title: "Third", content: "Third Content" },
          { title: "Last", content: "Last Content" }
        ],
        step: 0
      };
    },
    methods: {
      handlePrev() {
        if (this.step <= 0) {
          return;
        }

        this.step--;
      },
      handleNext() {
        if (this.step >= this.steps.length - 1) {
          return this.$message.success("Processing complete!");
        }

        this.step++;
      }
    }
  };
</script>

<style>
  .example-steps-control {  }
  .example-steps-control-content { border:1px dashed #e0e0e0; border-radius:2px; background-color:#f9f9f9; margin-top:24px; text-align:center; line-height:240px; }
  .example-steps-control-action { margin-top:24px; }
  .example-steps-control-action .vui-button { margin-right:16px; }
</style>
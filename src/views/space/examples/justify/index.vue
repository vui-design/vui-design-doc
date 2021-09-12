<template>
  <example v-bind:code="code" id="example-space-justify">
    <template slot="demo">
      <div class="example-space-justify">
        <div class="example-space-justify-block">
          <vui-space block justify="start">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="center">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="end">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="around">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="between">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
      </div>
    </template>
    <template slot="title">主轴对齐方式</template>
    <template slot="description">
      <p>横向布局时，设置项目在主轴上的对齐方式。</p>
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

<style>
  .example-space-justify {  }
  .example-space-justify-block { border:1px solid #2d8cf0; padding:16px; }
  .example-space-justify-block + .example-space-justify-block { margin-top:24px; }
</style>
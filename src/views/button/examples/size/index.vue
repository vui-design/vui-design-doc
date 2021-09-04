<template>
  <example v-bind:code="code" id="example-button-size">
    <template slot="demo">
      <div class="example-button-size">
        <section>
          <vui-radio-group type="button" v-model="size">
            <vui-radio label="Small" value="small" />
            <vui-radio label="Medium" value="medium" />
            <vui-radio label="Large" value="large" />
          </vui-radio-group>
        </section>
        <section>
          <vui-button type="primary" v-bind:size="size">Primary</vui-button>
          <vui-button v-bind:size="size">Default</vui-button>
          <vui-button type="dashed" v-bind:size="size">Dashed</vui-button>
          <vui-button type="text" v-bind:size="size">Text</vui-button>
        </section>
        <section>
          <vui-button type="primary" icon="download-package" v-bind:size="size">Download</vui-button>
          <vui-button type="primary" icon="download-package" shape="round" v-bind:size="size">Download</vui-button>
          <vui-button type="primary" icon="download-package" shape="circle" v-bind:size="size" />
        </section>
        <section>
          <vui-button-group type="primary" v-bind:size="size">
            <vui-button>
              <vui-icon type="chevron-left" />Backward
            </vui-button>
            <vui-button>
              Forward<vui-icon type="chevron-right" />
            </vui-button>
          </vui-button-group>
        </section>
      </div>
    </template>
    <template slot="title">按钮尺寸</template>
    <template slot="description">
      <p>按钮有小、中、大三种尺寸。</p>
      <p>通过设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 以使用小型或大型按钮。若不设置 <code>size</code>，则默认为中型尺寸。</p>
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
        size: "medium"
      };
    }
  };
</script>

<style>
  .example-button-size > section:not(:last-child) { margin-bottom:16px; }
  .example-button-size > section > .vui-button { margin-right:16px; }
</style>
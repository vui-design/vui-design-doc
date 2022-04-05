<template>
  <example v-bind:code="code" id="example-ribbon-type">
    <template slot="demo">
      <div class="example-ribbon-type">
        <vui-ribbon type="default" text="Default">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
        <vui-ribbon text="Primary">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="info" text="Info">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="warning" text="Warning">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="success" text="Success">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="error" text="Error">
          <vui-card title="Pushes open the window">
            <p>and raises the spyglass.</p>
          </vui-card>
        </vui-ribbon>
      </div>
    </template>
    <template slot="title">预设类型</template>
    <template slot="description">
      <p>使用 <code>type</code> 属性，可以创建不同类型的缎带。默认情况下使用 <code>primary</code> 类型。</p>
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
  .example-ribbon-type .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }
</style>
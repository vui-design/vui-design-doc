<template>
  <example v-bind:code="code" id="example-ribbon-placement">
    <template slot="demo">
      <vui-ribbon placement="start" text="Hippies">
        <vui-card title="Pushes open the window">
          <p>and raises the spyglass.</p>
        </vui-card>
      </vui-ribbon>
    </template>
    <template slot="title">位置</template>
    <template slot="description">
      <p>使用 <code>placement</code> 属性来指定缎带的位置。</p>
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
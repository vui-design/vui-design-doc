<template>
  <example v-bind:code="code" id="example-qrcode-basic-usage">
    <template slot="demo">
      <div class="example-qrcode-basic-usage">
        <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" />
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法。</p>
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
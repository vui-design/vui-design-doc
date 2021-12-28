<template>
  <example v-bind:code="code" id="example-time-interval">
    <template slot="demo">
      <div class="example-time-interval">
        <vui-time v-bind:value="value" v-bind:interval="interval" />
      </div>
    </template>
    <template slot="title">更新间隔</template>
    <template slot="description">
      <p>设置自动更新间隔，默认为 <code>60</code> 秒。</p>
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
        value: new Date().getTime(),
        interval: 5 * 60
      };
    }
  };
</script>
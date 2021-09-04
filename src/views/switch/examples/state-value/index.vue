<template>
  <example v-bind:code="code" id="example-switch-state-value">
    <template slot="demo">
      <vui-switch
        v-model="value"
        v-bind:checkedValue="1"
        v-bind:uncheckedValue="0"
      />
    </template>
    <template slot="title">自定义状态值</template>
    <template slot="description">
      <p>设置 <code>Switch</code> 打开/关闭时的状态值。</p>
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
        value: 1
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
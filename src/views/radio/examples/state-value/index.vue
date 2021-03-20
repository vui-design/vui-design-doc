<template>
  <vui-doc-example v-bind:code="code" id="example-radio-state-value">
    <template slot="demo">
      <vui-radio
        v-model="value"
        v-bind:checkedValue="1"
        v-bind:uncheckedValue="0"
      >
        Radio
      </vui-radio>
    </template>
    <template slot="title">自定义状态值</template>
    <template slot="description">
      <p>设置 <code>Radio</code> 选中/未选中时的状态值。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
        value: 0
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
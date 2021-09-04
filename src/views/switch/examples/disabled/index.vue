<template>
  <example v-bind:code="code" id="example-switch-disabled">
    <template slot="demo">
      <div class="example-switch-disabled">
        <vui-switch v-model="value" v-bind:disabled="disabled" />
        <vui-button type="primary" size="small" v-on:click="disabled = !disabled">
          {{disabled ? "Enabled" : "Disabled"}}
        </vui-button>
      </div>
    </template>
    <template slot="title">禁用状态</template>
    <template slot="description">
      <p>添加 <code>disabled</code> 属性即可让开关处于禁用状态。</p>
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
        value: false,
        disabled: true
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-switch-disabled .vui-button { margin-left:16px; }
</style>
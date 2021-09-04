<template>
  <example v-bind:code="code" id="example-checkbox-controller">
    <template slot="demo">
      <div class="example-checkbox-controller">
        <vui-checkbox v-model="checked" v-bind:disabled="disabled">
          {{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
        </vui-checkbox>
        <section>
          <vui-button type="primary" size="small" @click="checked = !checked">
            {{checked ? "Unchecked" : "Checked"}}
          </vui-button>
          <vui-button type="primary" size="small" @click="disabled = !disabled" style="margin-left: 10px;">
            {{disabled ? "Enabled" : "Disabled"}}
          </vui-button>
        </section>
      </div>
    </template>
    <template slot="title">与其它组件通信</template>
    <template slot="description">
      <p>与其它组件进行数据联动。</p>
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
        checked: false,
        disabled: false
      };
    }
  };
</script>

<style>
  .example-checkbox-controller section { margin-top:16px; font-size:0; }
</style>
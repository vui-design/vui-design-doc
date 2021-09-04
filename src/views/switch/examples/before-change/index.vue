<template>
  <example v-bind:code="code" id="example-switch-before-change">
    <template slot="demo">
      <vui-switch v-model="value" v-bind:beforeChange="beforeChange" />
    </template>
    <template slot="title">阻止切换</template>
    <template slot="description">
      <p>通过 <code>beforeChange</code> 函数可以阻止切换。</p>
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
        value: false
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    },
    methods: {
      beforeChange(status, value) {
        const promise = new Promise((resolve, reject) => {
          this.$modal.confirm({
            title: "友情提示",
            description: "你确定要切换开关状态吗？",
            onCancel: reject,
            onOk: resolve
          });
        });

        return promise;
      }
    }
  };
</script>
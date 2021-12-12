<template>
  <example v-bind:code="code" id="example-input-password">
    <template slot="demo">
      <vui-input v-model="value" type="password" placeholder="Please enter password..." />
    </template>
    <template slot="title">密码框</template>
    <template slot="description">
      <p>密码框，可以切换显示隐藏密码。</p>
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
        value: ""
      };
    }
  };
</script>
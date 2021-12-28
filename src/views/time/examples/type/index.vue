<template>
  <example v-bind:code="code" id="example-time-type">
    <template slot="demo">
      <div class="example-time-type">
        <vui-time v-bind:value="value" />
        <br />
        <vui-time type="date" v-bind:value="value" />
        <br />
        <vui-time type="datetime" v-bind:value="value" />
      </div>
    </template>
    <template slot="title">显示类型</template>
    <template slot="description">
      <p>可以根据情况，设置不同的显示类型。</p>
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
        value: new Date().getTime() - 5 * 24 * 60 * 60 * 1000
      };
    }
  };
</script>
<template>
  <example v-bind:code="code" id="example-time-basic-usage">
    <template slot="demo">
      <div class="example-time-basic-usage">
        <vui-time v-bind:value="value1" />
        <br />
        <vui-time v-bind:value="value2" />
        <br />
        <vui-time v-bind:value="value3" />
        <br />
        <vui-time v-bind:value="value4" />
        <br />
        <vui-time v-bind:value="value5" />
        <br />
        <vui-time v-bind:value="value6" />
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>设置一个 <code>Date</code> 对象、日期字符串或时间戳，可自动转换为相对于此时此刻的时间描述。</p>
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
        value1: new Date("2014-01-01"),
        value2: "2019-04-01",
        value3: new Date().getTime() - 5 * 24 * 60 * 60 * 1000,
        value4: new Date().getTime() - 5 * 60 * 60 * 1000,
        value5: new Date().getTime() - 5 * 60 * 1000,
        value6: new Date().getTime()
      };
    }
  };
</script>
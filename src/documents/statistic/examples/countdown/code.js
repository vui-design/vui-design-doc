const code = `
<template>
  <vui-row v-bind:gutter="20">
    <vui-col v-bind:span="12">
      <vui-countdown v-bind:value="deadline" v-on:finish="handleFinish" title="Countdown" />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-countdown v-bind:value="deadline" formatter="HH:mm:ss:SSS" title="Million Seconds" />
    </vui-col>
    <vui-col v-bind:span="24" style="margin-top: 20px;">
      <vui-countdown v-bind:value="deadline" formatter="D 天 H 时 m 分 s 秒" title="Day Level" />
    </vui-col>
  </vui-row>
</template>

<script>
  export default {
    data() {
      return {
        deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
      };
    },
    methods: {
      handleFinish() {
        console.log("finished!");
      }
    }
  };
</script>
`;

export default code.trim();
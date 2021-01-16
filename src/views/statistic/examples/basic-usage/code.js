const code = `
<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="110888" title="Active Users" />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
    </vui-col>
  </vui-row>
</template>

<script>
  export default {

  };
</script>
`;

export default code.trim();
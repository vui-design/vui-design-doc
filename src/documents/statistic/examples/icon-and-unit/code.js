const code = `
<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="1024" title="Feedback">
        <vui-icon slot="prefix" type="thumb-up" />
      </vui-statistic>
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="88" title="Unmerged">
        <template slot="suffix">/ 100</template>
      </vui-statistic>
    </vui-col>
  </vui-row>
</template>

<script>
  export default {

  };
</script>
`;

export default code.trim();
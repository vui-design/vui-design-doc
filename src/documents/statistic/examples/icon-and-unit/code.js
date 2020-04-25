const code = `
<template>
  <vui-row :gutter="16">
    <vui-col :span="12">
      <vui-statistic title="Feedback" :value="1024">
        <vui-icon type="thumb-up" slot="prefix" />
      </vui-statistic>
    </vui-col>
    <vui-col :span="12">
      <vui-statistic title="Unmerged" :value="70">
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
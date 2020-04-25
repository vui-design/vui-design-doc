const code = `
<template>
  <vui-row :gutter="16">
    <vui-col :span="12">
      <vui-statistic title="Active Users" :value="110888" />
    </vui-col>
    <vui-col :span="12">
      <vui-statistic title="Account Balance (CNY)" :value="110888" :precision="2" />
    </vui-col>
  </vui-row>
</template>

<script>
  export default {

  };
</script>
`;

export default code.trim();
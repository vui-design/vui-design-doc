const code = `
<template>
  <div class="example-statistic-card">
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="11.5" v-bind:precision="2" suffix="%" bodyStyle="color: #52c41a;" title="Active">
            <vui-icon slot="prefix" type="arrow-up" />
          </vui-statistic>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="9.5" v-bind:precision="2" suffix="%" bodyStyle="color: #ff4d4f;" title="Idle">
            <vui-icon slot="prefix" type="arrow-down" />
          </vui-statistic>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-statistic-card { background-color:#f6f6f6; padding:16px; }
</style>
`;

export default code.trim();
const code = `
<template>
  <div class="example-statistic-card">
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="11.5" v-bind:precision="2" suffix="%" bodyStyle="color: #53a653;" title="Active">
            <vui-icon slot="prefix" type="arrow-up" />
          </vui-statistic>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="9.5" v-bind:precision="2" suffix="%" bodyStyle="color: #d54d5b;" title="Idle">
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
  .example-statistic-card { background-color:#fafafa; padding:20px; }
</style>
`;

export default code.trim();
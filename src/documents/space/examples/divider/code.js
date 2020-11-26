const code =
`<template>
  <div class="example-space-divider">
    <section>
      <vui-space divider>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
      </vui-space>
    </section>
    <section>
      <vui-space v-bind:divider="54" v-bind:size="30">
        <vui-statistic v-bind:value="110888" title="Active Users" />
        <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
        <vui-statistic v-bind:value="88" title="Unmerged">
          <template slot="suffix">/ 100</template>
        </vui-statistic>
      </vui-space>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-space-divider section + section { margin-top:20px; }
</style>
`;

export default code;
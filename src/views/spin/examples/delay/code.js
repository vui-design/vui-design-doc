const code =
`<template>
  <div class="example-spin-delay">
    <vui-switch v-model="spinning" />
    <vui-spin v-bind:delay="delay" v-bind:spinning="spinning">
      <vui-alert
        type="info"
        message="Alert message title"
        description="Further details about the context of this alert."
      />
    </vui-spin>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        delay: 500,
        spinning: false
      };
    }
  };
</script>

<style>
  .example-spin-delay .vui-spin { margin-top:16px; }
</style>
`;

export default code;
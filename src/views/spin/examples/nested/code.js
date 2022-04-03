const code =
`<template>
  <div class="example-spin-nested">
    <vui-switch v-model="spinning" />
    <vui-spin v-bind:spinning="spinning">
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
        spinning: false
      };
    }
  };
</script>

<style>
  .example-spin-nested .vui-spin { margin-top:16px; }
</style>
`;

export default code;
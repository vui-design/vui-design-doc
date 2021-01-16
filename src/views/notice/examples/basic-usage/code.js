const code =
`<template>
  <div class="example-notice-basic-usage">
    <vui-button type="primary" @click="showNormalNotice(true)">With description</vui-button>
    <vui-button @click="showNormalNotice(false)">No description</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showNormalNotice(flag) {
        this.$notice.open({
          title: "This is the title",
          description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      }
    }
  };
</script>

<style>
  .example-notice-basic-usage > .vui-button + .vui-button { margin-left:10px; }
</style>
`;

export default code;
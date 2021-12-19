const code =
`<template>
  <div class="example-notice-type">
    <section>
      <h4>With description</h4>
      <vui-button type="info" @click="showInfoNotice(true)">Info</vui-button>
      <vui-button type="warning" @click="showWarningNotice(true)">Warning</vui-button>
      <vui-button type="success" @click="showSuccessNotice(true)">Success</vui-button>
      <vui-button type="danger" @click="showErrorNotice(true)">Error</vui-button>
    </section>
    <section>
      <h4>No description</h4>
      <vui-button @click="showInfoNotice(false)">Info</vui-button>
      <vui-button @click="showWarningNotice(false)">Warning</vui-button>
      <vui-button @click="showSuccessNotice(false)">Success</vui-button>
      <vui-button @click="showErrorNotice(false)">Error</vui-button>
    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      showInfoNotice(flag) {
        this.$notice.info({
          title: "This is the title",
          description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showWarningNotice(flag) {
        this.$notice.warning({
          title: "This is the title",
          description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showSuccessNotice(flag) {
        this.$notice.success({
          title: "This is the title",
          description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showErrorNotice(flag) {
        this.$notice.error({
          title: "This is the title",
          description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      }
    }
  };
</script>

<style>
  .example-notice-type section + section { margin-top:10px; }
  .example-notice-type section h4 { margin-bottom:10px; }
  .example-notice-type section .vui-button + .vui-button { margin-left:10px; }
</style>
`;

export default code;
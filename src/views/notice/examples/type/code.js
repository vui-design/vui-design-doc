const code =
`<template>
  <div class="example-notice-type">
    <section>
      <h4>With description</h4>
      <vui-button type="info" v-on:click="showInfoNotice(true)">Info</vui-button>
      <vui-button type="warning" v-on:click="showWarningNotice(true)">Warning</vui-button>
      <vui-button type="success" v-on:click="showSuccessNotice(true)">Success</vui-button>
      <vui-button type="danger" v-on:click="showErrorNotice(true)">Error</vui-button>
    </section>
    <section>
      <h4>No description</h4>
      <vui-button v-on:click="showInfoNotice(false)">Info</vui-button>
      <vui-button v-on:click="showWarningNotice(false)">Warning</vui-button>
      <vui-button v-on:click="showSuccessNotice(false)">Success</vui-button>
      <vui-button v-on:click="showErrorNotice(false)">Error</vui-button>
    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      showInfoNotice(withDescription) {
        this.$notice.info({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showWarningNotice(withDescription) {
        this.$notice.warning({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showSuccessNotice(withDescription) {
        this.$notice.success({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      },
      showErrorNotice(withDescription) {
        this.$notice.error({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      }
    }
  };
</script>

<style>
  .example-notice-type section + section { margin-top:24px; }
  .example-notice-type section h4 { margin-bottom:12px; }
  .example-notice-type section .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;
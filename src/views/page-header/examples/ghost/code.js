const code =
`<template>
  <div class="example-page-header-ghost">
    <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false" v-on:back="handleBack">
      <vui-space slot="extra" v-bind:size="10">
        <vui-button>Action 1</vui-button>
        <vui-button>Action 2</vui-button>
        <vui-button type="primary">Action 3</vui-button>
      </vui-space>
      <vui-descriptions>
        <vui-description label="UserName">Chillyme</vui-description>
        <vui-description label="Telephone">18012341234</vui-description>
        <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
        <vui-description label="Address" :span="2">
          No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
        </vui-description>
        <vui-description label="Remark">Empty</vui-description>
      </vui-descriptions>
    </vui-page-header>
  </div>
</template>

<script>
  export default {
    methods: {
      handleBack() {
        this.$router.back();
      }
    }
  };
</script>

<style>
  .example-page-header-ghost { background-color:#fafafa; padding:20px; }
</style>
`;

export default code;
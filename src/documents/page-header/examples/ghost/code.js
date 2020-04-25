const code =
`<template>
  <div class="example-page-header-ghost">
    <vui-page-header title="Title" subTitle="This is a subtitle" :ghost="false" @back="handleBack">
      <template slot="extra">
        <vui-button>Action 1</vui-button>
        <vui-button class="margin-left-10">Action 2</vui-button>
        <vui-button type="primary" class="margin-left-10">Action 3</vui-button>
      </template>
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
  .example-page-header-ghost { background-color:#f6f6f6; padding:20px; }
</style>
`;

export default code;
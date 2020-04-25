const code =
`<template>
  <div class="example-page-header-more">
    <vui-page-header
      title="Title"
      subTitle="This is a subtitle"
      :ghost="false"
    >
      <vui-breadcrumb slot="breadcrumb">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
      </vui-breadcrumb>
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
    <vui-page-header
      title="Title"
      subTitle="This is a subtitle"
      :ghost="false"
    >
      <vui-breadcrumb slot="breadcrumb">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
      </vui-breadcrumb>
      <template slot="tags">
        <vui-tag color="blue">blue</vui-tag>
      </template>
      <template slot="extra">
        <vui-button>Action 1</vui-button>
        <vui-button class="margin-left-10">Action 2</vui-button>
        <vui-button type="primary" class="margin-left-10">Action 3</vui-button>
      </template>
      <vui-row :gutter="16">
        <vui-col :span="4">
          <vui-statistic title="Status" value="Pending" />
        </vui-col>
        <vui-col :span="4">
          <vui-statistic title="Price" prefix="$" :value="123.4" :precision="2" />
        </vui-col>
        <vui-col :span="4">
          <vui-statistic title="Balance" prefix="$" :value="1234.5" :precision="2" />
        </vui-col>
      </vui-row>
    </vui-page-header>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-page-header-more { background-color:#f6f6f6; padding:20px; }
  .example-page-header-more .vui-page-header + .vui-page-header { margin-top:20px; }
</style>
`;

export default code;
const code =
`<template>
  <vui-page-header
    style="border: 1px solid #e6e6e6;"
    avatar="https://dummyimage.com/32x32/2d8cf0/fff"
    title="Title"
    subTitle="This is a subtitle"
  >
    <vui-breadcrumb slot="breadcrumb">
      <vui-breadcrumb-item>Home</vui-breadcrumb-item>
      <vui-breadcrumb-item>Components</vui-breadcrumb-item>
      <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
      <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
    </vui-breadcrumb>
    <template slot="tags">
      <vui-tag color="red">red</vui-tag>
      <vui-tag color="blue">blue</vui-tag>
    </template>
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
</template>

<script>
  export default {

  };
</script>
`;

export default code;
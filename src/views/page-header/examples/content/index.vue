<template>
  <example v-bind:code="code" id="example-page-header-content">
    <template slot="demo">
      <browser>
        <vui-page-header
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
            <vui-tag color="red">Red Tag</vui-tag>
            <vui-tag color="blue">Blue Tag</vui-tag>
          </template>
          <vui-space slot="extra" v-bind:size="10">
            <vui-button>Action 1</vui-button>
            <vui-button>Action 2</vui-button>
            <vui-button type="primary">Action 3</vui-button>
          </vui-space>
          <vui-descriptions>
            <vui-description label="UserName">Chillyme</vui-description>
            <vui-description label="Telephone">18012341234</vui-description>
            <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
            <vui-description label="Address" v-bind:span="2">
              No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
            </vui-description>
            <vui-description label="Remark">Empty</vui-description>
          </vui-descriptions>
          <vui-menu slot="footer" mode="horizontal" selectedName="1">
            <vui-menu-item name="1" title="Navigation 1" />
            <vui-menu-item name="2" title="Navigation 2" />
          </vui-menu>
        </vui-page-header>
      </browser>
    </template>
    <template slot="title">组合示例</template>
    <template slot="description">
      <p>使用了 <code>PageHeader</code> 提供的所有能力。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import Browser from "src/components/browser";
  import code from "./code";

  export default {
    components: {
      Example,
      Browser
    },
    data() {
      return {
        code
      };
    }
  };
</script>
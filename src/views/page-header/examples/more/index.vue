<template>
  <example v-bind:code="code" id="example-page-header-more">
    <template slot="demo">
      <div class="example-page-header-more">
        <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false">
          <vui-breadcrumb slot="breadcrumb">
            <vui-breadcrumb-item>Home</vui-breadcrumb-item>
            <vui-breadcrumb-item>Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
          </vui-breadcrumb>
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
        </vui-page-header>
        <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false">
          <vui-breadcrumb slot="breadcrumb">
            <vui-breadcrumb-item>Home</vui-breadcrumb-item>
            <vui-breadcrumb-item>Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
          </vui-breadcrumb>
          <template slot="tags">
            <vui-tag color="blue">Blue Tag</vui-tag>
          </template>
          <vui-space slot="extra" v-bind:size="10">
            <vui-button>Action 1</vui-button>
            <vui-button>Action 2</vui-button>
            <vui-button type="primary">Action 3</vui-button>
          </vui-space>
          <vui-row v-bind:gutter="16">
            <vui-col v-bind:span="4">
              <vui-statistic value="Pending" title="Status" />
            </vui-col>
            <vui-col v-bind:span="4">
              <vui-statistic v-bind:value="123.4" v-bind:precision="2" prefix="$" title="Price" />
            </vui-col>
            <vui-col v-bind:span="4">
              <vui-statistic v-bind:value="1234.5" v-bind:precision="2" prefix="$" title="Balance" />
            </vui-col>
          </vui-row>
        </vui-page-header>
      </div>
    </template>
    <template slot="title">多种形态</template>
    <template slot="description">
      <p>使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-page-header-more { background-color:#f6f6f6; padding:20px; }
  .example-page-header-more .vui-page-header + .vui-page-header { margin-top:20px; }
</style>
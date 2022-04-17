<template>
  <example v-bind:code="code" id="example-card-flexible-content">
    <template slot="demo">
      <vui-card style="width: 302px;">
        <img slot="cover" src="https://assets.youzhan.org/img/0/d3/826482502ab5ab3fc98967bd34ed1.jpg" />
        <vui-card-meta title="Card title">
          <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <template slot="description">This is the description</template>
        </vui-card-meta>
        <template slot="actions">
          <vui-icon type="edit" />
          <vui-icon type="dustbin" />
          <vui-icon type="more-x" />
        </template>
      </vui-card>
    </template>
    <template slot="title">更多内容配置</template>
    <template slot="description">
      <p>支持封面、头像、标题、描述信息以及操作区的卡片。</p>
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
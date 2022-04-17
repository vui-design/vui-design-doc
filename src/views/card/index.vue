<template>
  <div>
    <document>
      <h1>Card 卡片</h1>
      <p>通用卡片容器。</p>
      <h2>何时使用</h2>
      <p>基础容器，可以承载文字、列表、图片、段落，常用于后台概览页面。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-simple />
        <example-no-border />
        <example-shadow />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-loading />
        <example-grid />
        <example-flexible-content />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Card 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>icon</td>
            <td>卡片图标类型/图标，位于标题左侧</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>卡片标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>卡片右上角的操作区域</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cover</td>
            <td>卡片封面地址/封面，位于标题栏下方</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>actions</td>
            <td>卡片操作组，位于底部</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>卡片底部内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否含有边框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>shadow</td>
            <td>卡片阴影，可选值为 <code>never</code>、<code>hover</code>、<code>always</code> 或者不设</td>
            <td>String</td>
            <td>never</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>当卡片内容还在加载中时，可以用 <code>loading</code> 展示一个占位</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>自定义标题区域样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>自定义内容区域样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>自定义底部区域样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>CardMeta 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>avatar</td>
            <td>头像地址/头像/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>描述内容</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleSimple from "./examples/simple";
  import ExampleNoBorder from "./examples/no-border";
  import ExampleShadow from "./examples/shadow";
  import ExampleLoading from "./examples/loading";
  import ExampleGrid from "./examples/grid";
  import ExampleFlexibleContent from "./examples/flexible-content";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleSimple,
      ExampleNoBorder,
      ExampleShadow,
      ExampleLoading,
      ExampleGrid,
      ExampleFlexibleContent
    }
  };
</script>